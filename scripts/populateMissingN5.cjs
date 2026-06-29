// populateMissingN5.cjs
// Add missing JLPT N5 vocabulary: counters, body parts, common words
// All entries use the existing schema: character, romaji, meaning, kana, examples, level, id

const fs = require('fs');
const path = require('path');

const mnnFile = path.join(__dirname, '../src', 'data', 'characters.json');
const data = JSON.parse(fs.readFileSync(mnnFile, 'utf8'));

// Existing entries to avoid duplicates
const existingN5 = new Set(data.vocabulary_n5.map(v => v.character));
const existingN4 = new Set(data.vocabulary_n4.map(v => v.character));
const allExisting = new Set([...existingN5, ...existingN4]);

// Helper to make entry
let counter = 1; // for unique ids
function entry(kanji, romaji, meaning, kana, examples, level = 'N5') {
  return {
    id: `vocab-${level.toLowerCase()}-missing-${String(counter++).padStart(3, '0')}`,
    character: kanji,
    romaji,
    meaning,
    kana,
    examples,
    level
  };
}

// ============================================================
// COUNTER WORDS (Bab 11-12 MNN 1) — kritikal untuk JLPT
// ============================================================
const counters = [
  entry("個", "ko", "counter untuk benda kecil (umum)", "こ",
    [{jp: "りんごを三個ください。", kana: "りんごをさんこください。", id: "Tolong tiga buah apel."}]),
  entry("枚", "mai", "counter untuk benda pipih (kertas, piring, baju)", "まい",
    [{jp: "紙を二枚使ってください。", kana: "かみをにまいつかってください。", id: "Tolong gunakan dua lembar kertas."}]),
  entry("台", "dai", "counter untuk mesin/kendaraan (mobil, TV, kulkas)", "だい",
    [{jp: "私の家には車が二台あります。", kana: "わたしのいえにはくるまがにだいあります。", id: "Di rumah saya ada dua mobil."}]),
  entry("匹", "hiki", "counter untuk hewan kecil-menengah (kucing, anjing, ikan)", "ひき",
    [{jp: "私は犬を一匹飼っています。", kana: "わたしはいぬをいっぴきかっています。", id: "Saya memelihara satu ekor anjing."}]),
  entry("頭", "tou", "counter untuk hewan besar (sapi, kuda, gajah)", "とう",
    [{jp: "牧場に馬が十頭います。", kana: "ぼくじょうにうまがじゅうとういます。", id: "Di peternakan ada sepuluh ekor kuda."}]),
  entry("冊", "satsu", "counter untuk buku/majalah", "さつ",
    [{jp: "今月、本を三冊読みました。", kana: "こんげつ、ほんをさんさつよみました。", id: "Bulan ini saya membaca tiga buku."}]),
  entry("歳", "sai", "usia (untuk anak); counter untuk umur", "さい",
    [{jp: "私の弟は八歳です。", kana: "わたしのおとうとははっさいです。", id: "Adik laki-laki saya usia 8 tahun."}]),
  entry("才", "sai", "usia (penulisan alternatif dari 歳)", "さい",
    [{jp: "二十才になりました。", kana: "はたちになりました。", id: "Saya jadi 20 tahun."}]),
  entry("杯", "hai", "counter untuk gelas/cangkir (minuman)", "はい",
    [{jp: "ビールを三杯飲みました。", kana: "ビールをさんばいのみました。", id: "Saya minum tiga gelas bir."}]),
  entry("回", "kai", "counter untuk frekuensi/kali", "かい",
    [{jp: "週に二回ジムに行きます。", kana: "しゅうにかいジムにいきます。", id: "Saya pergi gym dua kali seminggu."}]),
  entry("度", "do", "counter untuk kali/derajat (suhu, pengalaman)", "ど",
    [{jp: "この薬を一日三回飲んでください。", kana: "このくすりをいちにちさんかいのんでください。", id: "Minum obat ini 3x sehari."}]),
  entry("階", "kai", "lantai (tingkat bangunan)", "かい",
    [{jp: "デパートは五階建てです。", kana: "デパートはごかいだてです。", id: "Department store-nya 5 lantai."}]),
  entry("番", "ban", "counter untuk nomor/urutan", "ばん",
    [{jp: "一番好きな食べ物は何ですか。", kana: "いちばんすきなたべものはなんですか。", id: "Makanan favorit nomor satu apa?"}]),
  entry("週間", "shuukan", "counter untuk minggu (durasi)", "しゅうかん",
    [{jp: "二週間旅行しました。", kana: "にしゅうかんりょこうしました。", id: "Saya traveling selama dua minggu."}]),
  entry("か月", "kagetsu", "counter untuk bulan (durasi)", "かげつ",
    [{jp: "日本語を三か月勉強しました。", kana: "にほんごをさんかげつべんきょうしました。", id: "Saya belajar bahasa Jepang tiga bulan."}]),
  entry("ヶ月", "kagetsu", "counter untuk bulan (penulisan alternatif)", "かげつ",
    [{jp: "東京に六ヶ月住んでいます。", kana: "とうきょうにろっかげつすんでいます。", id: "Saya tinggal di Tokyo 6 bulan."}]),
  entry("年間", "nenkan", "counter untuk tahun (durasi)", "ねんかん",
    [{jp: "ここで五年間働いています。", kana: "ここでごねんかんはたらいています。", id: "Saya kerja di sini 5 tahun."}]),
  entry("週間", "shuukan", "minggu (durasi)", "しゅうかん",
    [{jp: "一週間で読み終わります。", kana: "いっしゅうかんでよみおわります。", id: "Selesai dibaca dalam satu minggu."}]),
];

// ============================================================
// BODY PARTS N5 — basic anatomy
// ============================================================
const bodyParts = [
  entry("目", "me", "mata", "め",
    [{jp: "目が悪いですね。", kana: "めがわるいですね。", id: "Mata Anda kurang baik ya."}]),
  entry("耳", "mimi", "telinga", "みみ",
    [{jp: "耳が聞こえにくいです。", kana: "みみがきこえにくいです。", id: "Telinga saya sulit mendengar."}]),
  entry("鼻", "hana", "hidung", "はな",
    [{jp: "鼻がつまっています。", kana: "はながつまっています。", id: "Hidung saya tersumbat."}]),
  entry("歯", "ha", "gigi", "は",
    [{jp: "毎日歯を磨きます。", kana: "まいにちはをみがきます。", id: "Saya menggosok gigi setiap hari."}]),
];

// ============================================================
// COMMON N5 VOCAB — kritikal untuk self-intro & daily life
// ============================================================
const commonN5 = [
  entry("あなた", "anata", "Anda (formal/tapi jarang ke pasangan)", "あなた",
    [{jp: "あなたは学生ですか。", kana: "あなたはがくせいですか。", id: "Apakah Anda mahasiswa?"}]),
  entry("私達", "watashitachi", "kami (jamak dari 私)", "わたしたち",
    [{jp: "私達は毎日勉強します。", kana: "わたしたちはまいにちべんきょうします。", id: "Kami belajar setiap hari."}]),
  entry("皆さん", "minasan", "semua orang, bapak-bapak/ibu-ibu sekalian", "みなさん",
    [{jp: "皆さん、おはようございます。", kana: "みなさん、おはようございます。", id: "Selamat pagi semuanya."}]),
  entry("俺", "ore", "saya (kasual, cowok)", "おれ",
    [{jp: "俺は日本に行きたい。", kana: "おれはにほんにいきたい。", id: "Saya (cowok) mau ke Jepang."}]),
  entry("僕", "boku", "saya (kasual, cowok muda)", "ぼく",
    [{jp: "僕は田中です。", kana: "ぼくはたなかです。", id: "Saya Tanaka."}]),
  entry("赤ちゃん", "akachan", "bayi", "あかちゃん",
    [{jp: "赤ちゃんが笑っています。", kana: "あかちゃんがわらっています。", id: "Bayinya sedang tersenyum."}]),
  entry("父", "chichi", "ayah saya (rendah hati, bicara sendiri)", "ちち",
    [{jp: "私の父は先生です。", kana: "わたしのちちは先生です。", id: "Ayah saya adalah guru."}]),
  entry("母", "haha", "ibu saya (rendah hati, bicara sendiri)", "はは",
    [{jp: "私の母は優しいです。", kana: "わたしのははやさしいです。", id: "Ibu saya baik hati."}]),
  entry("お父さん", "otousan", "ayah (panggilan untuk orang lain)", "おとうさん",
    [{jp: "お父さんの仕事はなんですか。", kana: "おとうさんのしごとはなんですか。", id: "Pekerjaan ayah Anda apa?"}]),
  entry("お母さん", "okaasan", "ibu (panggilan untuk orang lain)", "おかあさん",
    [{jp: "お母さんはお元気ですか。", kana: "おかあさんはおげんきですか。", id: "Apakah ibu Anda sehat?"}]),
  entry("朝ごはん", "asagohan", "sarapan, makan pagi", "あさごはん",
    [{jp: "毎日朝ごはんを食べます。", kana: "まいにちあさごはんをたべます。", id: "Saya sarapan setiap hari."}]),
  entry("昼ごはん", "hirugohan", "makan siang", "ひるごはん",
    [{jp: "昼ごはんはもう食べましたか。", kana: "ひるごはんはもうたべましたか。", id: "Sudah makan siang?"}]),
  entry("晩ごはん", "bangohan", "makan malam", "ばんごはん",
    [{jp: "一緒に晩ごはんを食べませんか。", kana: "いっしょにばんごはんをたべませんか。", id: "Mau makan malam bersama?"}]),
  entry("五人", "gonin", "lima orang", "ごにん",
    [{jp: "家族は五人です。", kana: "かぞくはごにんです。", id: "Keluarga saya beranggotakan lima orang."}]),
  entry("六人", "rokunin", "enam orang", "ろくにん",
    [{jp: "クラスの学生は六人です。", kana: "クラスのがくせいはろくにんです。", id: "Siswa di kelas ada enam orang."}]),
  entry("七人", "nanamin / shichinin", "tujuh orang", "ななにん / しちにん",
    [{jp: "七人の友達とパーティーをしました。", kana: "ななにんのともだちとパーティーをしました。", id: "Saya pesta dengan tujuh teman."}]),
  entry("八人", "hachinin", "delapan orang", "はちにん",
    [{jp: "兄弟が八人います。", kana: "きょうだいがはちにんいます。", id: "Saudara kandung ada delapan."}]),
  entry("九人", "kujuu / kunin", "sembilan orang", "きゅうにん",
    [{jp: "九人のグループで旅行しました。", kana: "きゅうにんのグループでりょこうしました。", id: "Kami traveling dengan kelompok sembilan orang."}]),
  entry("十人", "juunin", "sepuluh orang", "じゅうにん",
    [{jp: "教室に学生が十人います。", kana: "きょうしつにがくせいがじゅうにんいます。", id: "Di kelas ada sepuluh mahasiswa."}]),
  entry("何人", "nannin", "berapa orang", "なんにん",
    [{jp: "ご家族は何人ですか。", kana: "ごかぞくはなんにんですか。", id: "Keluarga Anda berapa orang?"}]),
];

// ============================================================
// ADDITIONAL: Frequency/time adverbs (very common, often missing)
// ============================================================
const adverbs = [
  entry("よく", "yoku", "sering, dengan baik", "よく",
    [{jp: "よく映画を見ます。", kana: "よくえいがをみます。", id: "Saya sering nonton film."}]),
  entry("時々", "tokidoki", "kadang-kadang", "ときどき",
    [{jp: "時々公園を散歩します。", kana: "ときどきこうえんをさんぽします。", id: "Kadang saya jalan-jalan di taman."}]),
  entry("あまり", "amari", "tidak terlalu (negatif)", "あまり",
    [{jp: "あまり肉を食べません。", kana: "あまりにくをたべません。", id: "Saya tidak terlalu banyak makan daging."}]),
  entry("全然", "zenzen", "sama sekali (negatif)", "ぜんぜん",
    [{jp: "全然分かりません。", kana: "ぜんぜんわかりません。", id: "Saya sama sekali tidak mengerti."}]),
  entry("だいたい", "daitai", "kurang lebih, kira-kira", "だいたい",
    [{jp: "だいたいいつ終わりますか。", kana: "だいたいいつおわりますか。", id: "Kira-kira selesai kapan?"}]),
  entry("きっと", "kitto", "pasti, tentu", "きっと",
    [{jp: "きっと明日は晴れるでしょう。", kana: "きっとあしたははれるでしょう。", id: "Pasti besok cerah."}]),
];

// Combine all
const allNew = [...counters, ...bodyParts, ...commonN5, ...adverbs];

// Filter out any that already exist
const toAdd = [];
const skipped = [];
for (const e of allNew) {
  if (allExisting.has(e.character)) {
    skipped.push(e.character);
  } else {
    toAdd.push(e);
    allExisting.add(e.character);
  }
}

console.log(`Skipped (already exist): ${skipped.length}`);
if (skipped.length > 0) console.log("  " + skipped.join(", "));
console.log(`To add: ${toAdd.length}`);

// Append to N5 vocab (all are N5 level)
data.vocabulary_n5.push(...toAdd);

fs.writeFileSync(mnnFile, JSON.stringify(data, null, 2));

// Final stats
console.log(`\n=== After update ===`);
console.log(`N5 vocab: ${data.vocabulary_n5.length} (unique: ${new Set(data.vocabulary_n5.map(v=>v.character)).size})`);
console.log(`N4 vocab: ${data.vocabulary_n4.length} (unique: ${new Set(data.vocabulary_n4.map(v=>v.character)).size})`);
console.log(`Total vocab: ${data.vocabulary_n5.length + data.vocabulary_n4.length}`);

// Verify counters are now in
const newN5Set = new Set(data.vocabulary_n5.map(v => v.character));
const criticalWords = ["個","枚","台","匹","冊","歳","杯","回","度","階","番","目","耳","鼻","歯","あなた","私達","父","母","赤ちゃん","朝ごはん","昼ごはん","晩ごはん","五人","何人"];
console.log("\n=== Verification ===");
const stillMissing = criticalWords.filter(w => !newN5Set.has(w) && !new Set(data.vocabulary_n4.map(v=>v.character)).has(w));
console.log(`Critical words now present: ${criticalWords.length - stillMissing.length}/${criticalWords.length}`);
if (stillMissing.length > 0) {
  console.log(`Still missing: ${stillMissing.join(", ")}`);
}
