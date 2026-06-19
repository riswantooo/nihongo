const fs = require('fs');
const path = require('path');

const dataPath = path.join(__dirname, '../src/data/characters.json');
const rawData = fs.readFileSync(dataPath, 'utf8');
const data = JSON.parse(rawData);

const newVocab = [
  { c: "静か", r: "shizuka", m: "tenang, sunyi", k: "しずか", ex: "ここは静かです。" },
  { c: "下", r: "shita", m: "bawah", k: "した", ex: "机の下に猫がいます。" },
  { c: "七", r: "shichi", m: "tujuh", k: "しち", ex: "七時に起きます。" },
  { c: "質問", r: "shitsumon", m: "pertanyaan", k: "しつもん", ex: "質問があります。" },
  { c: "自転車", r: "jitensha", m: "sepeda", k: "じてんしゃ", ex: "自転車で学校に行きます。" },
  { c: "自動車", r: "jidousha", m: "mobil", k: "じどうしゃ", ex: "自動車を買います。" },
  { c: "死ぬ", r: "shinu", m: "mati", k: "しぬ", ex: "病気で死にました。" },
  { c: "字引", r: "jibiki", m: "kamus", k: "じびき", ex: "字引で調べます。" },
  { c: "自分", r: "jibun", m: "diri sendiri", k: "じぶん", ex: "自分でします。" },
  { c: "閉まる", r: "shimaru", m: "tertutup", k: "しまる", ex: "ドアが閉まります。" },
  { c: "閉める", r: "shimeru", m: "menutup", k: "しめる", ex: "窓を閉めます。" },
  { c: "締める", r: "shimeru", m: "mengikat, memakai (dasi)", k: "しめる", ex: "ネクタイを締めます。" },
  { c: "じゃあ", r: "jaa", m: "kalau begitu", k: "じゃあ", ex: "じゃあ、また明日。" },
  { c: "写真", r: "shashin", m: "foto", k: "しゃしん", ex: "写真を撮ります。" },
  { c: "シャツ", r: "shatsu", m: "kemeja", k: "シャツ", ex: "白いシャツを着ます。" },
  { c: "十", r: "juu", m: "sepuluh", k: "じゅう", ex: "十人います。" },
  { c: "授業", r: "jugyou", m: "pelajaran", k: "じゅぎょう", ex: "授業が始まります。" },
  { c: "宿題", r: "shukudai", m: "pekerjaan rumah (PR)", k: "しゅくだい", ex: "宿題をします。" },
  { c: "上手", r: "jouzu", m: "pintar, mahir", k: "じょうず", ex: "日本語が上手ですね。" },
  { c: "丈夫", r: "joubu", m: "kuat, sehat", k: "じょうぶ", ex: "この鞄は丈夫です。" },
  { c: "食堂", r: "shokudou", m: "kantin", k: "しょくどう", ex: "食堂でご飯を食べます。" },
  { c: "知る", r: "shiru", m: "tahu, kenal", k: "しる", ex: "彼の名前を知っていますか。" },
  { c: "白い", r: "shiroi", m: "putih", k: "しろい", ex: "白い花が咲いています。" },
  { c: "新聞", r: "shinbun", m: "koran", k: "しんぶん", ex: "毎朝新聞を読みます。" },
  { c: "水曜日", r: "suiyoubi", m: "hari Rabu", k: "すいようび", ex: "水曜日にテストがあります。" },
  { c: "吸う", r: "suu", m: "menghisap", k: "すう", ex: "タバコを吸いますか。" },
  { c: "スカート", r: "sukaato", m: "rok", k: "スカート", ex: "スカートを履きます。" },
  { c: "好き", r: "suki", m: "suka", k: "すき", ex: "りんごが好きです。" },
  { c: "少ない", r: "sukunai", m: "sedikit", k: "すくない", ex: "人が少ないです。" },
  { c: "すぐ", r: "sugu", m: "segera", k: "すぐ", ex: "すぐ行きます。" },
  { c: "少し", r: "sukoshi", m: "sedikit (keterangan)", k: "すこし", ex: "少し疲れました。" },
  { c: "涼しい", r: "suzushii", m: "sejuk", k: "すずしい", ex: "今日は涼しいです。" },
  { c: "ストーブ", r: "sutoobu", m: "pemanas ruangan", k: "ストーブ", ex: "ストーブをつけます。" },
  { c: "スプーン", r: "supuun", m: "sendok", k: "スプーン", ex: "スプーンで食べます。" },
  { c: "スポーツ", r: "supootsu", m: "olahraga", k: "スポーツ", ex: "スポーツが好きです。" },
  { c: "ズボン", r: "zubon", m: "celana", k: "ズボン", ex: "ズボンを履きます。" },
  { c: "住む", r: "sumu", m: "tinggal", k: "すむ", ex: "東京に住んでいます。" },
  { c: "スリッパ", r: "surippa", m: "sandal rumah", k: "スリッパ", ex: "スリッパを履きます。" },
  { c: "する", r: "suru", m: "melakukan", k: "する", ex: "テニスをします。" },
  { c: "座る", r: "suwaru", m: "duduk", k: "すわる", ex: "椅子に座ります。" },
  { c: "背", r: "se", m: "punggung, tinggi (badan)", k: "せ", ex: "背が高いです。" },
  { c: "生徒", r: "seito", m: "murid", k: "せいと", ex: "生徒がたくさんいます。" },
  { c: "セーター", r: "seetaa", m: "sweter", k: "セーター", ex: "セーターを着ます。" },
  { c: "石鹸", r: "sekken", m: "sabun", k: "せっけん", ex: "石鹸で手を洗います。" },
  { c: "背広", r: "sebiro", m: "jas", k: "せびろ", ex: "背広を着ます。" },
  { c: "狭い", r: "semai", m: "sempit", k: "せまい", ex: "部屋が狭いです。" },
  { c: "ゼロ", r: "zero", m: "nol", k: "ゼロ", ex: "ゼロから始めます。" },
  { c: "千", r: "sen", m: "seribu", k: "せん", ex: "千円です。" },
  { c: "先月", r: "sengetsu", m: "bulan lalu", k: "せんげつ", ex: "先月日本に来ました。" },
  { c: "先週", r: "senshuu", m: "minggu lalu", k: "せんしゅう", ex: "先週は忙しかったです。" },
  { c: "先生", r: "sensei", m: "guru", k: "せんせい", ex: "先生に聞きます。" },
  { c: "洗濯", r: "sentaku", m: "cucian", k: "せんたく", ex: "洗濯をします。" },
  { c: "全部", r: "zenbu", m: "semua", k: "ぜんぶ", ex: "全部でいくらですか。" },
  { c: "掃除", r: "souji", m: "bersih-bersih", k: "そうじ", ex: "部屋の掃除をします。" },
  { c: "そこ", r: "soko", m: "di situ", k: "そこ", ex: "そこに座ってください。" },
  { c: "そちら", r: "sochira", m: "sebelah situ", k: "そちら", ex: "そちらへ行きます。" },
  { c: "外", r: "soto", m: "luar", k: "そと", ex: "外は寒いです。" },
  { c: "その", r: "sono", m: "itu (menjelaskan benda)", k: "その", ex: "その本をください。" },
  { c: "そば", r: "soba", m: "samping, dekat", k: "そば", ex: "駅のそばにあります。" },
  { c: "空", r: "sora", m: "langit", k: "そら", ex: "空が青いです。" },
  { c: "それ", r: "sore", m: "itu", k: "それ", ex: "それは私の辞書です。" },
  { c: "それから", r: "sorekara", m: "setelah itu", k: "それから", ex: "ご飯を食べて、それから寝ます。" },
  { c: "それでは", r: "soredeha", m: "kalau begitu", k: "それでは", ex: "それでは、また。" }
];

const formattedNewVocab = newVocab.map(item => ({
  character: item.c,
  romaji: item.r,
  meaning: item.m,
  kana: item.k,
  examples: [
    { jp: item.ex, id: item.m + " (contoh)", kana: item.k }
  ]
}));

const existingVocabs = data.vocabulary_n5.map(v => v.character);
const toInject = formattedNewVocab.filter(v => !existingVocabs.includes(v.character));

data.vocabulary_n5 = [...data.vocabulary_n5, ...toInject];
fs.writeFileSync(dataPath, JSON.stringify(data, null, 2), 'utf8');

console.log(`Berhasil menyuntikkan ${toInject.length} kosakata N5 baru!`);
console.log(`Total Kosakata N5 sekarang: ${data.vocabulary_n5.length}`);
