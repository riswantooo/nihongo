import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

// --- DATABASE CONTOH KALIMAT (BATCH 2: I - O) ---
const newExamples = {
  "いかが": [
    { "jp": "お茶はいかがですか。", "kana": "おちゃはいかがですか。", "id": "Bagaimana dengan teh hijau?" }
  ],
  "行く": [
    { "jp": "週末に東京へ行きます。", "kana": "しゅうまつにとうきょうへいきます。", "id": "Di akhir pekan saya akan pergi ke Tokyo." }
  ],
  "池": [
    { "jp": "公園に大きい池があります。", "kana": "こうえんにおおきいいけがあります。", "id": "Di taman ada kolam yang besar." }
  ],
  "椅子": [
    { "jp": "椅子に座ってください。", "kana": "いすにすわってください。", "id": "Tolong duduk di kursi." }
  ],
  "痛い": [
    { "jp": "頭が痛いです。", "kana": "あたまがいたいです。", "id": "Kepala saya sakit." }
  ],
  "一": [
    { "jp": "りんごを一つ買いました。", "kana": "りんごをひとつかいました。", "id": "Saya membeli satu buah apel." }
  ],
  "一日": [
    { "jp": "一日中、雨が降りました。", "kana": "いちにちじゅう、あめがふりました。", "id": "Hujan turun sepanjang hari." }
  ],
  "五日": [
    { "jp": "五日にテストがあります。", "kana": "いつかにテストがあります。", "id": "Ada ujian pada tanggal lima." }
  ],
  "いつも": [
    { "jp": "私はいつも６時に起きます。", "kana": "わたしはいつもろくじにおきます。", "id": "Saya selalu bangun jam 6." }
  ],
  "意味": [
    { "jp": "この漢字の意味は何ですか。", "kana": "このかんじのいみはなんですか。", "id": "Apa arti dari kanji ini?" }
  ],
  "妹": [
    { "jp": "妹は高校生です。", "kana": "いもうとはこうこうせいです。", "id": "Adik perempuan saya adalah murid SMA." }
  ],
  "嫌": [
    { "jp": "私は納豆が嫌です。", "kana": "わたしはなっとうがいやです。", "id": "Saya tidak suka (benci) natto." }
  ],
  "入口": [
    { "jp": "あそこが入口です。", "kana": "あそこがいりぐちです。", "id": "Di sebelah sana adalah pintu masuk." }
  ],
  "居る": [
    { "jp": "猫が部屋に居ます。", "kana": "ねこがへやにいます。", "id": "Ada kucing di kamar." }
  ],
  "要る": [
    { "jp": "ビザが要ります。", "kana": "ビザがいります。", "id": "Saya membutuhkan visa." }
  ],
  "入れる": [
    { "jp": "コーヒーに砂糖を入れます。", "kana": "コーヒーにさとうをいれます。", "id": "Saya memasukkan gula ke dalam kopi." }
  ],
  "色": [
    { "jp": "好きな色は何ですか。", "kana": "すきないろはなんですか。", "id": "Apa warna kesukaanmu?" }
  ],
  "色々": [
    { "jp": "色々な本を読みました。", "kana": "いろいろなほんをよみました。", "id": "Saya telah membaca berbagai macam buku." }
  ],
  "薄い": [
    { "jp": "薄いシャツを着ています。", "kana": "うすいシャツをきています。", "id": "Saya mengenakan kemeja tipis." }
  ],
  "歌う": [
    { "jp": "友達とカラオケで歌います。", "kana": "ともだちとカラオケでうたいます。", "id": "Saya bernyanyi di karaoke bersama teman." }
  ],
  "生まれる": [
    { "jp": "去年、子供が生まれました。", "kana": "きょねん、こどもがうまれました。", "id": "Tahun lalu, anak saya lahir." }
  ],
  "売る": [
    { "jp": "この店で古い本を売っています。", "kana": "このみせでふるいほんをうっています。", "id": "Di toko ini menjual buku-buku tua." }
  ],
  "うるさい": [
    { "jp": "隣の部屋がうるさいです。", "kana": "となりのへやがうるさいです。", "id": "Kamar sebelah berisik." }
  ],
  "上着": [
    { "jp": "寒いので上着を着ます。", "kana": "さむいのでうわぎをきます。", "id": "Karena dingin, saya memakai jaket." }
  ],
  "映画館": [
    { "jp": "映画館で映画を見ます。", "kana": "えいがかんでえいがをみます。", "id": "Saya menonton film di bioskop." }
  ],
  "ええ": [
    { "jp": "ええ、そうです。", "kana": "ええ、そうです。", "id": "Ya (sopan), benar sekali." }
  ],
  "おおぜい": [
    { "jp": "おおぜいの人がいます。", "kana": "おおぜいのひとがいます。", "id": "Ada banyak orang." }
  ],
  "起きる": [
    { "jp": "明日は早く起きます。", "kana": "あしたははやくおきます。", "id": "Besok saya akan bangun lebih awal." }
  ],
  "置く": [
    { "jp": "机の上に本を置きます。", "kana": "つくえのうえにほんをおきます。", "id": "Saya meletakkan buku di atas meja." }
  ],
  "お皿": [
    { "jp": "お皿を洗います。", "kana": "おさらをあらいます。", "id": "Saya mencuci piring." }
  ]
};

// --- EKSEKUSI INJEKSI ---
console.log("Membaca file characters.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let data = JSON.parse(rawdata);

let injectedCount = 0;

if (data.vocabulary_n5) {
  data.vocabulary_n5.forEach(vocab => {
    const word = vocab.character;
    
    if (newExamples[word]) {
      // Jika vocab belum punya array examples, buat array baru
      if (!vocab.examples) {
        vocab.examples = [];
      }
      
      // Mencegah duplikasi data jika skrip dijalankan berkali-kali
      const existingExamplesStrings = vocab.examples.map(ex => ex.jp);
      
      newExamples[word].forEach(newEx => {
        if (!existingExamplesStrings.includes(newEx.jp)) {
          vocab.examples.push(newEx);
          injectedCount++;
        }
      });
    }
  });
}

console.log(`Berhasil menyuntikkan ${injectedCount} contoh kalimat ke memori.`);

if (injectedCount > 0) {
  console.log("Menyimpan ke file characters.json...");
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log("✅ Update file sukses!");
} else {
  console.log("⚠️ Tidak ada kalimat baru yang disuntikkan (mungkin sudah ada semua).");
}
