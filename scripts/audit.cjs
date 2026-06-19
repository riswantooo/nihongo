const fs = require('fs');
const path = require('path');

const dataDir = path.join(__dirname, '../src/data');
const read = (f) => JSON.parse(fs.readFileSync(path.join(dataDir, f), 'utf8'));

// Load all data files
const chars = read('characters.json');
const mnn = read('mnn.json');
const grammar = read('grammar-points.json');
const verbs = read('verb-conjugations.json');
const particles = read('particles.json');
const reading = read('reading-bank.json');
const listening = read('listening-bank.json');

const separator = '═'.repeat(65);
const thinSep = '─'.repeat(65);
const pad = (str, len) => String(str).padEnd(len);
const padR = (str, len) => String(str).padStart(len);

function printHeader(title) {
  console.log('\n' + separator);
  console.log(`  ${title}`);
  console.log(separator);
}

function printRow(label, value, note = '') {
  const noteStr = note ? `  (${note})` : '';
  console.log(`  ${pad(label, 40)} ${padR(value, 8)}${noteStr}`);
}

function printSubHeader(title) {
  console.log(`\n  ${thinSep.substring(0, 50)}`);
  console.log(`  📌 ${title}`);
  console.log(`  ${thinSep.substring(0, 50)}`);
}

const issues = [];

// 1. KANA & KANJI AUDIT
printHeader('1. HURUF JEPANG (KANA & KANJI)');
const hiragana = chars.hiragana || [];
const katakana = chars.katakana || [];
const kanjiN5 = chars.kanji_n5 || [];
const kanjiN4 = chars.kanji_n4 || [];

printRow('Hiragana', hiragana.length, 'dasar + dakuten + yoon');
printRow('Katakana', katakana.length, 'dasar + dakuten + yoon + serapan');
printRow('Kanji N5', kanjiN5.length, 'target: 100');
printRow('Kanji N4', kanjiN4.length, 'target: 200');

// Checks for duplicates in characters
function checkDuplicates(arr, keyFn, name) {
  const seen = new Set();
  const dupes = [];
  arr.forEach(item => {
    const key = keyFn(item);
    if (!key) return;
    if (seen.has(key)) {
      dupes.push(key);
    } else {
      seen.add(key);
    }
  });
  if (dupes.length > 0) {
    issues.push(`❌ Duplikasi di ${name}: ${[...new Set(dupes)].join(', ')}`);
  }
}

checkDuplicates(hiragana, x => x.character, 'Hiragana');
checkDuplicates(katakana, x => x.character, 'Katakana');
checkDuplicates(kanjiN5, x => x.character || x.id, 'Kanji N5');
checkDuplicates(kanjiN4, x => x.character || x.id, 'Kanji N4');

// 2. KOSAKATA (VOCABULARY)
printHeader('2. KOSAKATA (VOCABULARY)');
const vocabN5 = chars.vocabulary_n5 || [];
const vocabN4 = chars.vocabulary_n4 || [];
printRow('Kosakata N5 (characters.json)', vocabN5.length, 'target: ~800');
printRow('Kosakata N4 (kumulatif c.json)', vocabN5.length + vocabN4.length, 'target: ~1500');

checkDuplicates(vocabN5, x => x.id || x.character, 'Kosakata N5');

// Check duplicates in N4 (internally and cumulatively against N5)
const n5Characters = new Set(vocabN5.map(x => x.character));
const seenN4 = new Set();
const dupesN4 = [];
vocabN4.forEach(item => {
  const char = item.character;
  if (!char) return;
  if (n5Characters.has(char)) {
    dupesN4.push(`${char} (ada di N5)`);
  } else if (seenN4.has(char)) {
    dupesN4.push(`${char} (duplikat di N4)`);
  } else {
    seenN4.add(char);
  }
});
if (dupesN4.length > 0) {
  issues.push(`❌ Duplikasi di Kosakata N4 (kumulatif dengan N5): ${[...new Set(dupesN4)].join(', ')}`);
}

// 3. MINNA NO NIHONGO (MNN)
printHeader('3. SILABUS MINNA NO NIHONGO (MNN)');
printRow('Total Bab MNN', mnn.length, 'target: 50');
const mnnBook1 = mnn.filter(c => c.id <= 25);
const mnnBook2 = mnn.filter(c => c.id > 25);
const countMnnVocab = (chapters) => chapters.reduce((s, c) => s + (c.vocabulary ? c.vocabulary.length : 0), 0);
const countMnnGrammar = (chapters) => chapters.reduce((s, c) => s + (c.grammar ? c.grammar.length : 0), 0);

printRow('Kosakata MNN Buku 1 (Bab 1-25)', countMnnVocab(mnnBook1));
printRow('Kosakata MNN Buku 2 (Bab 26-50)', countMnnVocab(mnnBook2));
printRow('Pola Grammar MNN Buku 1', countMnnGrammar(mnnBook1));
printRow('Pola Grammar MNN Buku 2', countMnnGrammar(mnnBook2));

// Check duplicates within each chapter of MNN
mnn.forEach(ch => {
  if (ch.vocabulary) {
    const seenVocab = new Set();
    ch.vocabulary.forEach(v => {
      const key = v.id || v.character;
      if (seenVocab.has(key)) {
        issues.push(`❌ Duplikasi kosakata di MNN Bab ${ch.id}: "${key}"`);
      }
      seenVocab.add(key);
    });
  }
});

// 4. TATA BAHASA & KONJUGASI
printHeader('4. TATA BAHASA & KONJUGASI KATA KERJA');
printRow('Total Pola Tata Bahasa', grammar.length);
checkDuplicates(grammar, x => x.id || x.title, 'Grammar Points');

printRow('Total Kata Kerja Konjugasi', verbs.length);
checkDuplicates(verbs, x => x.id || x.dictionary || x.kanji, 'Verb Conjugations');

// Check completeness of verb forms
const formNames = ['masu', 'te', 'ta', 'nai', 'potential', 'passive', 'causative', 'ba', 'volitional'];
verbs.forEach(v => {
  formNames.forEach(form => {
    if (!v[form] || v[form].length === 0) {
      issues.push(`⚠️ Konjugasi kata kerja "${v.kanji || v.dictionary}" bentuk "${form}" belum diisi.`);
    }
  });
});

// 5. PARTIKEL
printHeader('5. PARTIKEL JEPANG');
printRow('Total Partikel', particles.length);
const totalRules = particles.reduce((s, p) => s + (p.rules ? p.rules.length : 0), 0);
printRow('Total Aturan & Kalimat Latihan', totalRules);
checkDuplicates(particles, x => x.id || x.particle || x.name, 'Particles');

// 6. BANK SOAL UJIAN (READING & LISTENING)
printHeader('6. BANK SOAL UJIAN (DOKKAI & CHOUKAI)');
const n5Reading = reading.filter(r => r.level === 'N5');
const n4Reading = reading.filter(r => r.level === 'N4');
const n5Listening = listening.filter(l => l.level === 'N5');
const n4Listening = listening.filter(l => l.level === 'N4');

printRow('Membaca (Reading/Dokkai) N5', n5Reading.length);
printRow('Membaca (Reading/Dokkai) N4', n4Reading.length);
printRow('TOTAL SOAL MEMBACA', reading.length, 'target: 35+');

printRow('Mendengar (Listening/Choukai) N5', n5Listening.length);
printRow('Mendengar (Listening/Choukai) N4', n4Listening.length);
printRow('TOTAL SOAL MENDENGAR', listening.length, 'target: 35+');

checkDuplicates(reading, x => x.id, 'Reading Bank (ID)');
checkDuplicates(listening, x => x.id, 'Listening Bank (ID)');

// Check sequence and consistency of IDs in reading & listening
function checkSequencing(bank, prefix, level) {
  const items = bank.filter(x => x.level === level);
  items.forEach((item, index) => {
    const expectedId = `${prefix}-${level.toLowerCase()}-${String(index + 1).padStart(2, '0')}`;
    if (item.id !== expectedId) {
      issues.push(`⚠️ ID tidak berurutan di ${prefix} ${level}: ditemukan "${item.id}", seharusnya "${expectedId}"`);
    }
  });
}

checkSequencing(reading, 'read', 'N5');
checkSequencing(reading, 'read', 'N4');
checkSequencing(listening, 'listen', 'N5');
checkSequencing(listening, 'listen', 'N4');

// 7. SUMMARY & LIST OF ISSUES
printHeader('7. RINGKASAN AKHIR');
printRow('GRAND TOTAL Huruf + Kanji', hiragana.length + katakana.length + kanjiN5.length + kanjiN4.length);
printRow('GRAND TOTAL Kosakata', vocabN5.length + vocabN4.length);
printRow('GRAND TOTAL Tata Bahasa', grammar.length);
printRow('GRAND TOTAL Soal Ujian (R+L)', reading.length + listening.length);

printSubHeader('DAFTAR MASALAH & TODO');
if (issues.length === 0) {
  console.log('  ✅ SEMUA DATA BERSIH & KONSISTEN! Tidak ada duplikasi atau masalah data.');
} else {
  console.log(`  Ditemukan ${issues.length} masalah/peringatan:\n`);
  issues.forEach((issue, i) => console.log(`  ${i + 1}. ${issue}`));
}
console.log('\n' + separator);
console.log(`  Audit selesai pada: ${new Date().toLocaleString('id-ID')}`);
console.log(separator + '\n');
