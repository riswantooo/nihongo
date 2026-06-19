const fs = require('fs');
const path = require('path');

const charactersPath = path.join(__dirname, '../src/data/characters.json');
const characters = JSON.parse(fs.readFileSync(charactersPath, 'utf8'));

function dedupe(vocabArray) {
  if (!vocabArray) return [];
  const seen = new Set();
  const unique = [];
  for (const v of vocabArray) {
    const key = v.id || v.character;
    if (!seen.has(key)) {
      seen.add(key);
      unique.push(v);
    }
  }
  return unique;
}

const originalN5Count = characters.vocabulary_n5 ? characters.vocabulary_n5.length : 0;
const originalN4Count = characters.vocabulary_n4 ? characters.vocabulary_n4.length : 0;

if (characters.vocabulary_n5) characters.vocabulary_n5 = dedupe(characters.vocabulary_n5);
if (characters.vocabulary_n4) characters.vocabulary_n4 = dedupe(characters.vocabulary_n4);

const newN5Count = characters.vocabulary_n5 ? characters.vocabulary_n5.length : 0;
const newN4Count = characters.vocabulary_n4 ? characters.vocabulary_n4.length : 0;

fs.writeFileSync(charactersPath, JSON.stringify(characters, null, 2));

console.log('Deduplikasi Selesai.');
console.log(`N5: ${originalN5Count} -> ${newN5Count} (Terhapus ${originalN5Count - newN5Count})`);
console.log(`N4: ${originalN4Count} -> ${newN4Count} (Terhapus ${originalN4Count - newN4Count})`);
