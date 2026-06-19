const fs = require('fs');
const path = require('path');

// Daftar contoh kalimat untuk kosakata prioritas N5 & N4
const examplesData = {
  "食べる": {
    "jp": "私は毎日パンを食べます。",
    "kana": "わたしはまいにちパンをたべます。",
    "id": "Saya makan roti setiap hari."
  },
  "飲む": {
    "jp": "朝、コーヒーを飲みます。",
    "kana": "あさ、コーヒーをのみます。",
    "id": "Di pagi hari, saya minum kopi."
  },
  "行く": {
    "jp": "明日、学校へ行きます。",
    "kana": "あした、がっこうへいきます。",
    "id": "Besok, saya pergi ke sekolah."
  },
  "来る": {
    "jp": "友達が私の家に来ました。",
    "kana": "ともだちがわたしのいえにきました。",
    "id": "Teman datang ke rumah saya."
  },
  "する": {
    "jp": "週末はテニスをします。",
    "kana": "しゅうまつはテニスをします。",
    "id": "Akhir pekan saya bermain tenis."
  },
  "見る": {
    "jp": "昨日の夜、映画を見ました。",
    "kana": "きのうのよる、えいがをみました。",
    "id": "Tadi malam, saya menonton film."
  },
  "聞く": {
    "jp": "音楽を聞くのが好きです。",
    "kana": "おんがくをきくのがすきです。",
    "id": "Saya suka mendengarkan musik."
  },
  "読む": {
    "jp": "図書館で本を読みます。",
    "kana": "としょかんでほんをよみます。",
    "id": "Saya membaca buku di perpustakaan."
  },
  "書く": {
    "jp": "日本語で手紙を書きました。",
    "kana": "にほんごでてがみをかきました。",
    "id": "Saya menulis surat dalam bahasa Jepang."
  },
  "買う": {
    "jp": "新しいかばんを買いたいです。",
    "kana": "あたらしいかばんをかいたいです。",
    "id": "Saya ingin membeli tas baru."
  },
  "会う": {
    "jp": "駅で先生に会いました。",
    "kana": "えきでせんせいニアいました。",
    "id": "Saya bertemu guru di stasiun."
  },
  "分かる": {
    "jp": "この問題が分かりますか。",
    "kana": "このもんだいがわかりますか。",
    "id": "Apakah Anda mengerti masalah ini?"
  },
  "大きい": {
    "jp": "あれは大きい犬ですね。",
    "kana": "あれはおおきいいぬですね。",
    "id": "Itu adalah anjing yang besar ya."
  },
  "小さい": {
    "jp": "妹は小さいケーキを選んだ。",
    "kana": "いもうとはちいさいケーキをえらんだ。",
    "id": "Adik perempuan memilih kue yang kecil."
  },
  "新しい": {
    "jp": "新しい靴を買いました。",
    "kana": "あたらしいくつをかいました。",
    "id": "Saya membeli sepatu baru."
  },
  "古い": {
    "jp": "この辞書はとても古いです。",
    "kana": "このじしょはとてもふるいです。",
    "id": "Kamus ini sangat tua."
  },
  "良い": {
    "jp": "今日はいい天気ですね。",
    "kana": "きょうはいいいてんきですね。",
    "id": "Hari ini cuacanya bagus ya."
  },
  "悪い": {
    "jp": "タバコは体に悪いです。",
    "kana": "タバコはからだにわるいです。",
    "id": "Rokok buruk untuk tubuh."
  },
  "人": {
    "jp": "あそこに人がいます。",
    "kana": "あそこにひとがいます。",
    "id": "Ada orang di sana."
  },
  "水": {
    "jp": "冷たい水をください。",
    "kana": "つめたいみずをください。",
    "id": "Tolong beri saya air dingin."
  },
  "本": {
    "jp": "机の上に本があります。",
    "kana": "つくえのうえにほんがあります。",
    "id": "Ada buku di atas meja."
  },
  "車": {
    "jp": "父の車は赤いです。",
    "kana": "ちちのくるまはあかいです。",
    "id": "Mobil ayah warnanya merah."
  },
  "手": {
    "jp": "ご飯の前に手を洗います。",
    "kana": "ごはんのまえにてをあらいます。",
    "id": "Sebelum makan nasi, cuci tangan."
  },
  "目": {
    "jp": "あの猫は目が青いです。",
    "kana": "あのねこはめがあおいです。",
    "id": "Kucing itu matanya biru."
  },
  "口": {
    "jp": "口を開けてください。",
    "kana": "くちをあけてください。",
    "id": "Tolong buka mulut Anda."
  },
  "日本": {
    "jp": "日本へ行ったことがあります。",
    "kana": "にほんへいったことがあります。",
    "id": "Saya pernah pergi ke Jepang."
  },
  "今日": {
    "jp": "今日は忙しいです。",
    "kana": "きょうはいそがしいです。",
    "id": "Hari ini sibuk."
  },
  "明日": {
    "jp": "明日は休みです。",
    "kana": "あしたはやすみです。",
    "id": "Besok adalah hari libur."
  },
  "昨日": {
    "jp": "昨日は雨が降りました。",
    "kana": "きのうはあめがふりました。",
    "id": "Kemarin turun hujan."
  },
  "私": {
    "jp": "私は学生です。",
    "kana": "わたしはがくせいです。",
    "id": "Saya adalah seorang siswa."
  }
};

const charactersPath = path.join(__dirname, '../src/data/characters.json');
const characters = JSON.parse(fs.readFileSync(charactersPath, 'utf8'));

let matchCount = 0;

function injectExamples(vocabArray) {
  if (!vocabArray) return;
  for (const v of vocabArray) {
    const key = v.kanji || v.character;
    if (examplesData[key]) {
      // Create 'examples' array if it doesn't exist
      if (!v.examples) {
        v.examples = [];
      }
      
      // Avoid duplicate examples
      const existingIds = v.examples.map(ex => ex.id);
      if (!existingIds.includes(examplesData[key].id)) {
        v.examples.push(examplesData[key]);
        matchCount++;
      }
    }
  }
}

injectExamples(characters.vocabulary_n5);
injectExamples(characters.vocabulary_n4);

fs.writeFileSync(charactersPath, JSON.stringify(characters, null, 2));

console.log(`Berhasil menambahkan contoh kalimat ke ${matchCount} kosakata.`);
