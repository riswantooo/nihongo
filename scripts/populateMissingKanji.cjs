// populateMissingKanji.cjs
// Add kanji that are used in vocab but missing from kanji_n5/n4 list

const fs = require('fs');
const path = require('path');

const charsFile = path.join(__dirname, '../src', 'data', 'characters.json');
const data = JSON.parse(fs.readFileSync(charsFile, 'utf8'));

const existingN5 = new Set(data.kanji_n5.map(k => k.character));
const existingN4 = new Set(data.kanji_n4.map(k => k.character));

// Map: kanji -> {on, kun, on_r, kun_r, meaning, level}
const additions = {
  // N5 additions — basic common kanji used in vocab
  "今": { on: "コン", on_r: "KON", kun: "いま", kun_r: "ima", meaning: "sekarang", level: "N5" },
  "毎": { on: "マイ", on_r: "MAI", kun: "ごと", kun_r: "goto", meaning: "setiap", level: "N5" },
  "肉": { on: "ニク", on_r: "NIKU", kun: "しし", kun_r: "shishi", meaning: "daging", level: "N5" },
  "予": { on: "ヨ", on_r: "YO", kun: "あらかじめ", kun_r: "arakajime", meaning: "sebelumnya, prakira", level: "N5" },
  "熱": { on: "ネツ", on_r: "NETSU", kun: "あつい", kun_r: "atsui", meaning: "panas, demam", level: "N5" },
  "部": { on: "ブ", on_r: "BU", kun: "へ", kun_r: "he", meaning: "bagian, departemen", level: "N5" },
  "靴": { on: "カ", on_r: "KA", kun: "くつ", kun_r: "kutsu", meaning: "sepatu", level: "N5" },
  "情": { on: "ジョウ", on_r: "JOU", kun: "なさけ", kun_r: "nasake", meaning: "perasaan, emosi", level: "N5" },
  "背": { on: "ハイ", on_r: "HAI", kun: "せ, せい", kun_r: "se, sei", meaning: "punggung, tinggi badan", level: "N5" },
  "法": { on: "ホウ", on_r: "HOU", kun: "のり", kun_r: "nori", meaning: "hukum, metode", level: "N5" },
  "内": { on: "ナイ", on_r: "NAI", kun: "うち", kun_r: "uchi", meaning: "dalam", level: "N5" },
  "直": { on: "チョク", on_r: "CHOKU", kun: "なおる, なおす", kun_r: "naoru, naosu", meaning: "lurus, memperbaiki", level: "N5" },
  "布": { on: "フ", on_r: "FU", kun: "ぬの", kun_r: "nuno", meaning: "kain", level: "N5" },
  "葉": { on: "ヨウ", on_r: "YOU", kun: "は", kun_r: "ha", meaning: "daun", level: "N5" },
  "市": { on: "シ", on_r: "SHI", kun: "いち", kun_r: "ichi", meaning: "kota, pasar", level: "N5" },
  "庭": { on: "テイ", on_r: "TEI", kun: "にわ", kun_r: "niwa", meaning: "taman, halaman", level: "N5" },
  "茶": { on: "チャ", on_r: "CHA", kun: "", kun_r: "", meaning: "teh", level: "N5" },
  "服": { on: "フク", on_r: "FUKU", kun: "", kun_r: "", meaning: "pakaian", level: "N5" },
  "全": { on: "ゼン", on_r: "ZEN", kun: "まったく", kun_r: "mattaku", meaning: "seluruh, semua", level: "N5" },
  "最": { on: "サイ", on_r: "SAI", kun: "もっと", kun_r: "motto", meaning: "paling", level: "N5" },
  "報": { on: "ホウ", on_r: "HOU", kun: "むくいる", kun_r: "mukuiru", meaning: "laporan, membalas", level: "N5" },
  "彼": { on: "ヒ", on_r: "HI", kun: "かれ", kun_r: "kare", meaning: "dia (laki)", level: "N5" },
  "房": { on: "ボウ", on_r: "BOU", kun: "ふさ", kun_r: "fusa", meaning: "ruangan, ruang", level: "N5" },
  "鳥": { on: "チョウ", on_r: "CHOU", kun: "とり", kun_r: "tori", meaning: "burung", level: "N5" },
  "踊": { on: "ヨウ", on_r: "YOU", kun: "おどる", kun_r: "odoru", meaning: "menari", level: "N5" },
  "飯": { on: "ハン", on_r: "HAN", kun: "めし", kun_r: "meshi", meaning: "nasi, makanan", level: "N5" },
  "単": { on: "タン", on_r: "TAN", kun: "ひとえ", kun_r: "hitoe", meaning: "sederhana, tunggal", level: "N5" },
  "鳥": { on: "チョウ", on_r: "CHOU", kun: "とり", kun_r: "tori", meaning: "burung", level: "N5" },
  "習": { on: "シュウ", on_r: "SHUU", kun: "ならう", kun_r: "narau", meaning: "belajar", level: "N5" },
  "感": { on: "カン", on_r: "KAN", kun: "", kun_r: "", meaning: "rasa, perasaan", level: "N4" },
  "都": { on: "ト", on_r: "TO", kun: "みやこ", kun_r: "miyako", meaning: "ibu kota, metropolis", level: "N5" },
  "予": { on: "ヨ", on_r: "YO", kun: "あらかじめ", kun_r: "arakajime", meaning: "sebelumnya", level: "N5" },
};

let addedN5 = 0, addedN4 = 0;
const addedLog = [];

for (const [ch, info] of Object.entries(additions)) {
  if (existingN5.has(ch) || existingN4.has(ch)) continue;

  const entry = {
    character: ch,
    meaning: info.meaning,
    romaji: info.on_r ? info.on_r.charAt(0) + info.on_r.slice(1).toLowerCase() + (info.kun_r ? ', ' + info.kun_r : '') : info.kun_r,
    audioText: (info.on ? info.on + (info.kun ? '、' + info.kun : '') : info.kun),
    onyomi_kana: info.on || "",
    kunyomi_kana: info.kun || "",
    onyomi_romaji: info.on_r || "",
    kunyomi_romaji: info.kun_r || "",
  };

  if (info.level === 'N5') {
    data.kanji_n5.push(entry);
    existingN5.add(ch);
    addedN5++;
    addedLog.push(`N5: ${ch}`);
  } else {
    data.kanji_n4.push(entry);
    existingN4.add(ch);
    addedN4++;
    addedLog.push(`N4: ${ch}`);
  }
}

fs.writeFileSync(charsFile, JSON.stringify(data, ensure_ascii=false, indent=2));

console.log(`Added ${addedN5} N5 + ${addedN4} N4 kanji`);
console.log(`Total N5 kanji: ${data.kanji_n5.length}`);
console.log(`Total N4 kanji: ${data.kanji_n4.length}`);
console.log(`Total unique: ${data.kanji_n5.length + data.kanji_n4.length}`);
