import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

const newExamples = {
  "メニュー": [{ "jp": "メニューを見せてください。", "kana": "メニューをみせてください。", "id": "Tolong perlihatkan menunya." }],
  "メンバー": [{ "jp": "新しいメンバーを紹介します。", "kana": "あたらしいメンバーをしょうかいします。", "id": "Saya akan memperkenalkan anggota baru." }],
  "モーター": [{ "jp": "この機械はモーターで動きます。", "kana": "このきかいはモーターでうごきます。", "id": "Mesin ini bergerak dengan motor." }],
  "ヨーロッパ": [{ "jp": "ヨーロッパを旅行したいです。", "kana": "ヨーロッパをりょこうしたいです。", "id": "Saya ingin bepergian ke Eropa." }],
  "ライター": [{ "jp": "ライターで火をつけます。", "kana": "ライターでひをつけます。", "id": "Menyalakan api dengan pemantik." }],
  "ライオン": [{ "jp": "動物園でライオンを見ました。", "kana": "どうぶつえんでライオンをみました。", "id": "Saya melihat singa di kebun binatang." }],
  "ラッシュアワー": [{ "jp": "ラッシュアワーの電車は混みます。", "kana": "ラッシュアワーのでんしゃはこみます。", "id": "Kereta pada jam sibuk sangat penuh sesak." }],
  "ルール": [{ "jp": "ゲームのルールを説明します。", "kana": "ゲームのルールをせつめいします。", "id": "Menjelaskan aturan permainannya." }],
  "レシート": [{ "jp": "レシートをもらいます。", "kana": "レシートをもらいます。", "id": "Menerima struk belanja." }],
  "レベル": [{ "jp": "日本語のレベルが上がりました。", "kana": "にほんごのレベルがあがりました。", "id": "Tingkat bahasa Jepang saya meningkat." }],
  "レンズ": [{ "jp": "カメラのレンズを拭きます。", "kana": "カメラのレンズをふきます。", "id": "Mengelap lensa kamera." }],
  "ロケット": [{ "jp": "ロケットが宇宙へ飛びました。", "kana": "ロケットがうちゅうへとびました。", "id": "Roket terbang ke luar angkasa." }],
  "ロッカー": [{ "jp": "荷物をロッカーに入れます。", "kana": "にもつをロッカーにいれます。", "id": "Memasukkan barang ke dalam loker." }],
  "ロビー": [{ "jp": "ホテルのロビーで待ちます。", "kana": "ホテルのロビーでまちます。", "id": "Menunggu di lobi hotel." }],
  "ワンピース": [{ "jp": "青いワンピースを着ています。", "kana": "あおいワンピースをきています。", "id": "Memakai gaun terusan biru." }],
  "あるいは": [{ "jp": "電車、あるいはバスで行きます。", "kana": "でんしゃ、あるいはバスでいきます。", "id": "Pergi dengan kereta, atau dengan bus." }],
  "いくつ": [{ "jp": "りんごをいくつ買いましたか。", "kana": "りんごをいくつかいましたか。", "id": "Membeli apel berapa buah?" }],
  "いくら": [{ "jp": "これはいくらですか。", "kana": "これはいくらですか。", "id": "Ini harganya berapa?" }],
  "いつ": [{ "jp": "いつ日本へ行きますか。", "kana": "いつにほんへいきますか。", "id": "Kapan pergi ke Jepang?" }],
  "いま": [{ "jp": "いま何時ですか。", "kana": "いまなんじですか。", "id": "Sekarang jam berapa?" }],
  "いろいろ": [{ "jp": "いろいろお世話になりました。", "kana": "いろいろおせわになりました。", "id": "Terima kasih atas berbagai bantuannya." }],
  "うん": [{ "jp": "うん、わかった。", "kana": "うん、わかった。", "id": "Ya (informal), saya mengerti." }],
  "おはよう": [{ "jp": "おはようございます。", "kana": "おはようございます。", "id": "Selamat pagi." }],
  "おやすみ": [{ "jp": "おやすみなさい。", "kana": "おやすみなさい。", "id": "Selamat malam/selamat tidur." }],
  "かなり": [{ "jp": "今日はかなり暑いです。", "kana": "きょうはかなりあついです。", "id": "Hari ini lumayan panas." }],
  "ぐっすり": [{ "jp": "昨夜はぐっすり眠りました。", "kana": "さくやはぐっすりねむりました。", "id": "Tadi malam saya tidur nyenyak." }],
  "けっこう": [{ "jp": "もうけっこうです。", "kana": "もうけっこうです。", "id": "Sudah cukup (tidak perlu lagi)." }],
  "じっと": [{ "jp": "じっと見ています。", "kana": "じっとみています。", "id": "Menatap dengan lekat (tanpa berkedip)." }],
  "ぜんぜん": [{ "jp": "英語がぜんぜんわかりません。", "kana": "えいごがぜんぜんわかりません。", "id": "Sama sekali tidak mengerti bahasa Inggris." }],
  "そして": [{ "jp": "ご飯を食べました。そして、寝ました。", "kana": "ごはんをたべました。そして、ねました。", "id": "Saya makan nasi. Kemudian, saya tidur." }],
  "それから": [{ "jp": "手を洗います。それから、ご飯を食べます。", "kana": "てをあらいます。それから、ごはんをたべます。", "id": "Saya mencuci tangan. Setelah itu, saya makan nasi." }],
  "たぶん": [{ "jp": "明日はたぶん雨でしょう。", "kana": "あしたはたぶんあめでしょう。", "id": "Besok mungkin akan hujan." }],
  "だんだん": [{ "jp": "だんだん暖かくなります。", "kana": "だんだんあたたかくなります。", "id": "Berangsur-angsur menjadi hangat." }],
  "ちょうど": [{ "jp": "服のサイズがちょうどいいです。", "kana": "ふくのサイズがちょうどいいです。", "id": "Ukuran bajunya pas." }],
  "ちょっと": [{ "jp": "ちょっと待ってください。", "kana": "ちょっとまってください。", "id": "Tolong tunggu sebentar." }],
  "ついに": [{ "jp": "ついに試験が終わりました。", "kana": "ついにしけんがおわりました。", "id": "Akhirnya ujiannya selesai juga." }],
  "とても": [{ "jp": "このケーキはとても美味しいです。", "kana": "このケーキはとてもおいしいです。", "id": "Kue ini sangat enak." }],
  "なぜ": [{ "jp": "なぜ遅れたのですか。", "kana": "なぜおくれたのですか。", "id": "Kenapa kamu terlambat?" }],
  "はじめて": [{ "jp": "はじめて日本へ来ました。", "kana": "はじめてにほんへきました。", "id": "Ini pertama kalinya saya datang ke Jepang." }],
  "ひじょうに": [{ "jp": "ひじょうに難しいです。", "kana": "ひじょうにむずかしいです。", "id": "Sangat sulit." }],
  "びっくり": [{ "jp": "大きな音にびっくりしました。", "kana": "おおきなおとにびっくりしました。", "id": "Saya terkejut mendengar suara keras." }],
  "ほんとう": [{ "jp": "それはほんとうですか。", "kana": "それはほんとうですか。", "id": "Apakah itu benar?" }],
  "まだ": [{ "jp": "まだ宿題が終わっていません。", "kana": "まだしゅくだいがおわっていません。", "id": "PR-nya belum selesai." }],
  "まっすぐ": [{ "jp": "この道をまっすぐ行きます。", "kana": "このみちをまっすぐいきます。", "id": "Pergi lurus menyusuri jalan ini." }],
  "また": [{ "jp": "また明日会いましょう。", "kana": "またあしたあいましょう。", "id": "Sampai jumpa lagi besok." }],
  "もっと": [{ "jp": "もっと勉強しなければなりません。", "kana": "もっとべんきょうしなければなりません。", "id": "Saya harus belajar lebih banyak lagi." }],
  "やはり": [{ "jp": "やはり彼が来ました。", "kana": "やはりかれがきました。", "id": "Sesuai dugaan, dia datang." }],
  "よく": [{ "jp": "よくわかりました。", "kana": "よくわかりました。", "id": "Saya mengerti dengan baik." }],
  "よろしく": [{ "jp": "よろしくお願いします。", "kana": "よろしくおねがいします。", "id": "Mohon bantuannya / salam kenal." }],
  "わざわざ": [{ "jp": "わざわざ来てくれてありがとう。", "kana": "わざわざきてくれてありがとう。", "id": "Terima kasih sudah menyempatkan diri datang jauh-jauh." }]
};

// --- EKSEKUSI INJEKSI ---
console.log("Membaca file characters.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let data = JSON.parse(rawdata);

let injectedCount = 0;

if (data.vocabulary_n4) {
  data.vocabulary_n4.forEach(vocab => {
    const word = vocab.character;
    
    if (newExamples[word]) {
      if (!vocab.examples) {
        vocab.examples = [];
      }
      const existingExamplesStrings = vocab.examples.map(ex => ex.jp);
      
      newExamples[word].forEach(newEx => {
        if (!existingExamplesStrings.includes(newEx.jp)) {
          vocab.examples.push(newEx);
          injectedCount++;
        }
      });
    } else if (word && word.startsWith("語彙N4-")) {
      // DUMMY WORD PLACEHOLDER
      if (!vocab.examples) {
        vocab.examples = [];
      }
      if (vocab.examples.length === 0) {
        vocab.examples.push({
          "jp": "これはプレースホルダーの文です。",
          "kana": "これはプレースホルダーのぶんです。",
          "id": "Ini adalah kalimat placeholder (data kosong)."
        });
        injectedCount++;
      }
    }
  });
}

console.log(`Berhasil menyuntikkan ${injectedCount} contoh kalimat N4 ke memori.`);

if (injectedCount > 0) {
  console.log("Menyimpan ke file characters.json...");
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log("✅ Update file sukses!");
} else {
  console.log("⚠️ Tidak ada kalimat baru yang disuntikkan.");
}
