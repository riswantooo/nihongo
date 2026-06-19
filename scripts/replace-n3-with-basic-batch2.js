import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

console.log("Membaca file characters.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let data = JSON.parse(rawdata);

const adjectives = [
  { jp: "大きい", kana: "おおきい", id: "besar" },
  { jp: "小さい", kana: "ちいさい", id: "kecil" },
  { jp: "新しい", kana: "あたらしい", id: "baru" },
  { jp: "古い", kana: "ふるい", id: "tua/lama" },
  { jp: "高い", kana: "たかい", id: "tinggi/mahal" },
  { jp: "安い", kana: "やすい", id: "murah" },
  { jp: "良い", kana: "いい", id: "bagus/baik" },
  { jp: "悪い", kana: "わるい", id: "buruk/jelek" },
  { jp: "美味しい", kana: "おいしい", id: "enak" },
  { jp: "美しい", kana: "うつくしい", id: "indah" }
];

const nouns = [
  { jp: "犬", kana: "いぬ", id: "anjing" },
  { jp: "猫", kana: "ねこ", id: "kucing" },
  { jp: "車", kana: "くるま", id: "mobil" },
  { jp: "家", kana: "いえ", id: "rumah" },
  { jp: "本", kana: "ほん", id: "buku" },
  { jp: "時計", kana: "とけい", id: "jam" },
  { jp: "靴", kana: "くつ", id: "sepatu" },
  { jp: "鞄", kana: "かばん", id: "tas" },
  { jp: "山", kana: "やま", id: "gunung" },
  { jp: "川", kana: "かわ", id: "sungai" },
  { jp: "町", kana: "まち", id: "kota" },
  { jp: "花", kana: "はな", id: "bunga" },
  { jp: "木", kana: "き", id: "pohon" },
  { jp: "魚", kana: "さかな", id: "ikan" },
  { jp: "肉", kana: "にく", id: "daging" },
  { jp: "水", kana: "みず", id: "air" },
  { jp: "お茶", kana: "おちゃ", id: "teh" },
  { jp: "道", kana: "みち", id: "jalan" },
  { jp: "空", kana: "そら", id: "langit" },
  { jp: "海", kana: "うみ", id: "laut" },
  { jp: "人", kana: "ひと", id: "orang" },
  { jp: "子供", kana: "こども", id: "anak-anak" },
  { jp: "大人", kana: "おとな", id: "orang dewasa" }
];

const generatedPhrases = [];
for (let i = 0; i < adjectives.length; i++) {
  for (let j = 0; j < nouns.length; j++) {
    const adj = adjectives[i];
    const n = nouns[j];
    generatedPhrases.push({
      character: adj.jp + n.jp,
      kana: adj.kana + n.kana,
      romaji: "gabungan",
      meaning: n.id + " yang " + adj.id,
      examples: [{
        jp: `それは${adj.jp}${n.jp}です。`,
        kana: `それは${adj.kana}${n.kana}です。`,
        id: `Itu adalah ${n.id} yang ${adj.id}.`
      }]
    });
  }
}

const totalN4 = data.vocabulary_n4.length;
// Batch 1 mengisi index dari (totalN4 - 323) sampai (totalN4 - 224).
// Batch 2 ini mengisi 223 item sisanya, yaitu dari (totalN4 - 223) sampai (totalN4 - 1).
const startIdx = totalN4 - 223;

let injectedCount = 0;

for (let i = 0; i < 223; i++) {
  const targetIdx = startIdx + i;
  if (targetIdx < totalN4 && generatedPhrases[i]) {
    const newWord = generatedPhrases[i];
    
    data.vocabulary_n4[targetIdx].character = newWord.character;
    data.vocabulary_n4[targetIdx].kana = newWord.kana;
    data.vocabulary_n4[targetIdx].romaji = newWord.romaji;
    data.vocabulary_n4[targetIdx].meaning = newWord.meaning;
    data.vocabulary_n4[targetIdx].examples = newWord.examples;
    
    injectedCount++;
  }
}

console.log(`Berhasil mengganti ${injectedCount} kata N3 dengan Frasa Gabungan N5/N4.`);

if (injectedCount > 0) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log("✅ Update characters.json sukses!");
}
