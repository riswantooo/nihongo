const fs = require('fs');
const path = require('path');

const candidates = [
  { character: "引", romaji: "in / hi", meaning: "menarik", audioText: "いん、ひ" },
  { character: "遠", romaji: "en / too", meaning: "jauh", audioText: "えん、とお" },
  { character: "回", romaji: "kai / mawa", meaning: "berputar, kali", audioText: "かい、まわ" },
  { character: "顔", romaji: "gan / kao", meaning: "wajah", audioText: "がん、かお" },
  { character: "期", romaji: "ki", meaning: "periode", audioText: "き" },
  { character: "客", romaji: "kyaku", meaning: "tamu, pelanggan", audioText: "きゃく" },
  { character: "魚", romaji: "gyo / sakana", meaning: "ikan", audioText: "ぎょ、さかな" },
  { character: "局", romaji: "kyoku", meaning: "biro, departemen", audioText: "きょく" },
  { character: "区", romaji: "ku", meaning: "distrik, wilayah", audioText: "く" },
  { character: "犬", romaji: "ken / inu", meaning: "anjing", "audioText": "けん、いぬ" },
  { character: "県", romaji: "ken", meaning: "prefektur", "audioText": "けん" },
  { character: "降", romaji: "kou / fu", meaning: "turun", "audioText": "こう、ふ" },
  { character: "号", romaji: "gou", meaning: "nomor", "audioText": "ごう" },
  { character: "合", romaji: "gou / a", meaning: "cocok, bergabung", "audioText": "ごう、あ" },
  { character: "困", romaji: "kon / koma", meaning: "kesulitan", "audioText": "こん、こま" },
  { character: "婚", romaji: "kon", meaning: "pernikahan", "audioText": "こん" },
  { character: "昨", romaji: "saku", meaning: "kemarin", "audioText": "さく" },
  { character: "産", romaji: "san / u", meaning: "produksi, melahirkan", "audioText": "さん、う" },
  { character: "散", romaji: "san / chi", meaning: "tersebar", "audioText": "さん、ち" },
  { character: "残", romaji: "zan / noko", meaning: "tersisa", "audioText": "ざん、のこ" },
  { character: "指", romaji: "shi / yubi", meaning: "jari", "audioText": "し、ゆび" },
  { character: "寺", romaji: "ji / tera", meaning: "kuil buddha", "audioText": "じ、てら" },
  { character: "弱", romaji: "jaku / yowa", meaning: "lemah", "audioText": "じゃく、よわ" },
  { character: "首", romaji: "shu / kubi", meaning: "leher, kepala", "audioText": "しゅ、くび" },
  { character: "宿", romaji: "shuku / yado", meaning: "penginapan", "audioText": "しゅく、やど" },
  { character: "術", romaji: "jutsu", meaning: "seni, teknik", "audioText": "じゅつ" },
  { character: "初", romaji: "sho / haji", meaning: "awal, pertama", "audioText": "しょ、はじ" },
  { character: "所", romaji: "sho / tokoro", meaning: "tempat", "audioText": "しょ、ところ" },
  { character: "暑", romaji: "sho / atsu", meaning: "panas (cuaca)", "audioText": "しょ、あつ" },
  { character: "笑", romaji: "shou / wara", meaning: "tertawa", "audioText": "しょう、わら" },
  { character: "乗", romaji: "jou / no", meaning: "naik (kendaraan)", "audioText": "じょう、の" },
  { character: "信", romaji: "shin", meaning: "percaya", "audioText": "しん" },
  { character: "森", romaji: "shin / mori", meaning: "hutan", "audioText": "しん、もり" },
  { character: "神", romaji: "shin / kami", meaning: "dewa", "audioText": "しん、かみ" },
  { character: "身", romaji: "shin / mi", meaning: "tubuh", "audioText": "しん、み" },
  { character: "進", romaji: "shin / susu", meaning: "maju", "audioText": "しん、すす" },
  { character: "制", romaji: "sei", meaning: "sistem", "audioText": "せい" },
  { character: "成", romaji: "sei / na", meaning: "menjadi", "audioText": "せい、な" },
  { character: "晴", romaji: "sei / ha", meaning: "cerah", "audioText": "せい、は" },
  { character: "昔", romaji: "seki / mukashi", meaning: "zaman dahulu", "audioText": "せき、むかし" },
  { character: "石", romaji: "seki / ishi", meaning: "batu", "audioText": "せき、いし" },
  { character: "接", romaji: "setsu", meaning: "menyambung", "audioText": "せつ" },
  { character: "折", romaji: "setsu / o", meaning: "melipat, patah", "audioText": "せつ、お" },
  { character: "雪", romaji: "setsu / yuki", meaning: "salju", "audioText": "せつ、ゆき" },
  { character: "専", romaji: "sen", meaning: "ahli", "audioText": "せん" },
  { character: "線", romaji: "sen", meaning: "garis", "audioText": "せん" },
  { character: "選", romaji: "sen / era", meaning: "memilih", "audioText": "せん、えら" },
  { character: "然", romaji: "zen", meaning: "alam, jadi", "audioText": "ぜん" },
  { character: "全", romaji: "zen / matta", meaning: "semua", "audioText": "ぜん、まった" },
  { character: "組", romaji: "so / kumi", meaning: "kelompok", "audioText": "そ、くみ" }
];

const charactersPath = path.join(__dirname, '../src/data/characters.json');
const characters = JSON.parse(fs.readFileSync(charactersPath, 'utf8'));

const existingN4 = new Set(characters.kanji_n4.map(k => k.character));
const existingN5 = new Set(characters.kanji_n5.map(k => k.character));

let addedCount = 0;
for (const c of candidates) {
  if (!existingN4.has(c.character) && !existingN5.has(c.character)) {
    characters.kanji_n4.push({
      character: c.character,
      romaji: c.romaji,
      meaning: c.meaning,
      audioText: c.audioText,
      onyomi_kana: c.audioText.split('、')[0] || "",
      kunyomi_kana: c.audioText.split('、')[1] || "",
      onyomi_romaji: c.romaji.split(' / ')[0]?.toUpperCase() || "",
      kunyomi_romaji: c.romaji.split(' / ')[1] || ""
    });
    addedCount++;
    if (addedCount >= 31) break; // Need exactly 31
  }
}

fs.writeFileSync(charactersPath, JSON.stringify(characters, null, 2));
console.log(`Berhasil menambahkan ${addedCount} kanji N4 baru.`);
console.log(`Total Kanji N4 sekarang: ${characters.kanji_n4.length}`);
