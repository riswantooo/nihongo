import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

// --- DATABASE CONTOH KALIMAT (N4 BATCH 1) ---
const newExamples = {
  "合う": [{ "jp": "この靴はサイズがよく合います。", "kana": "このくつはサイズがよくあいます。", "id": "Sepatu ini ukurannya sangat pas." }],
  "あかちゃん": [{ "jp": "あかちゃんが泣いています。", "kana": "あかちゃんがないています。", "id": "Bayi sedang menangis." }],
  "上る": [{ "jp": "階段を上って、二階へ行きます。", "kana": "かいだんをのぼって、にかいへいきます。", "id": "Saya naik tangga lalu pergi ke lantai dua." }],
  "赤ん坊": [{ "jp": "赤ん坊はミルクを飲んで寝ました。", "kana": "あかんぼうはミルクをのんでねました。", "id": "Bayi meminum susu lalu tidur." }],
  "空く": [{ "jp": "お腹が空きました。", "kana": "おなかがすきました。", "id": "Perut saya kosong (lapar)." }],
  "浅い": [{ "jp": "この川は浅いですから、安全です。", "kana": "このかわはあさいですから、あんぜんです。", "id": "Karena sungai ini dangkal, ini aman." }],
  "味": [{ "jp": "このスープは少し味が薄いです。", "kana": "このスープはすこしあじがうすいです。", "id": "Sup ini rasanya sedikit hambar." }],
  "遊び": [{ "jp": "子供の遊びに付き合います。", "kana": "こどものあそびにつきあいます。", "id": "Saya menemani permainan anak-anak." }],
  "集める": [{ "jp": "趣味は切手を集めることです。", "kana": "しゅみはきってをあつめることです。", "id": "Hobi saya adalah mengumpulkan perangko." }],
  "集まる": [{ "jp": "広場に人がたくさん集まりました。", "kana": "ひろばにひとがたくさんあつまりました。", "id": "Banyak orang berkumpul di alun-alun." }],
  "謝る": [{ "jp": "遅れたので、先生に謝りました。", "kana": "おくれたので、せんせいにあやまりました。", "id": "Karena terlambat, saya meminta maaf kepada guru." }],
  "安心": [{ "jp": "無事に着いて安心しました。", "kana": "ぶじについてあんしんしました。", "id": "Saya merasa lega setelah tiba dengan selamat." }],
  "あんな": [{ "jp": "あんな人とは話したくないです。", "kana": "あんなひととははなしたくないです。", "id": "Saya tidak ingin berbicara dengan orang seperti itu." }],
  "以下": [{ "jp": "十歳以下の子供は無料です。", "kana": "じゅっさいいかのこどもはむりょうです。", "id": "Anak-anak berusia 10 tahun ke bawah gratis." }],
  "以外": [{ "jp": "日曜日以外は毎日働きます。", "kana": "にちようびいがいはまいにちはたらきます。", "id": "Selain hari Minggu, saya bekerja setiap hari." }],
  "医学": [{ "jp": "大学で医学を勉強しています。", "kana": "だいがくでいがくをべんきょうしています。", "id": "Saya sedang belajar ilmu kedokteran di universitas." }],
  "生きる": [{ "jp": "一生懸命に生きたいです。", "kana": "いっしょうけんめいにいきたいです。", "id": "Saya ingin hidup dengan sungguh-sungguh." }],
  "意見": [{ "jp": "何か意見がありますか。", "kana": "なにかいけんがありますか。", "id": "Apakah ada pendapat?" }],
  "石": [{ "jp": "石につまずいて転びました。", "kana": "いしにつまずいてころびました。", "id": "Saya tersandung batu lalu jatuh." }],
  "いじめる": [{ "jp": "動物をいじめてはいけません。", "kana": "どうぶつをいじめてはいけません。", "id": "Tidak boleh menyiksa binatang." }],
  "以上": [{ "jp": "千円以上の買い物をしました。", "kana": "せんえんいじょうのかいものをしました。", "id": "Saya berbelanja sebesar seribu yen ke atas." }],
  "急ぐ": [{ "jp": "時間がないので急ぎましょう。", "kana": "じかんがないのでいそぎましょう。", "id": "Karena tidak ada waktu, mari bergegas." }],
  "致す": [{ "jp": "よろしくお願い致します。", "kana": "よろしくおねがいいたします。", "id": "Mohon bantuannya (sopan)." }],
  "一生懸命": [{ "jp": "一生懸命に漢字を覚えます。", "kana": "いっしょうけんめいにかんじをおぼえます。", "id": "Menghafal kanji dengan sungguh-sungguh." }],
  "糸": [{ "jp": "針と糸を貸してください。", "kana": "はりといとをかしてください。", "id": "Tolong pinjamkan saya jarum dan benang." }],
  "以内": [{ "jp": "三日以内に返事をします。", "kana": "みっかいないにへんじをします。", "id": "Saya akan membalas dalam waktu tiga hari." }],
  "田舎": [{ "jp": "田舎は空気がきれいです。", "kana": "いなかはくうきがきれいです。", "id": "Di pedesaan udaranya bersih." }],
  "祈る": [{ "jp": "平和を祈ります。", "kana": "へいわをいのります。", "id": "Saya berdoa untuk perdamaian." }],
  "いらっしゃる": [{ "jp": "先生がいらっしゃいました。", "kana": "せんせいがいらっしゃいました。", "id": "Guru telah datang (sopan)." }],
  "植える": [{ "jp": "庭に桜の木を植えました。", "kana": "にわにさくらのきをうえました。", "id": "Saya menanam pohon sakura di halaman." }],
  "伺う": [{ "jp": "明日、お宅へ伺います。", "kana": "あした、おたくへうかがいます。", "id": "Besok, saya akan berkunjung ke rumah Anda (sopan)." }],
  "受ける": [{ "jp": "明日、試験を受けます。", "kana": "あした、しけんをうけます。", "id": "Besok, saya akan mengikuti ujian." }],
  "動く": [{ "jp": "この時計は動いていません。", "kana": "このとけいはうごいていません。", "id": "Jam ini tidak bergerak (mati)." }],
  "うそ": [{ "jp": "うそをついてはいけません。", "kana": "うそをついてはいけません。", "id": "Tidak boleh berbohong." }],
  "打つ": [{ "jp": "頭を強く打ちました。", "kana": "あたまをつよくうちました。", "id": "Saya memukul (terbentur) kepala dengan keras." }],
  "美しい": [{ "jp": "京都は美しい町です。", "kana": "きょうとはうつくしいまちです。", "id": "Kyoto adalah kota yang indah." }],
  "写す": [{ "jp": "黒板の字をノートに写します。", "kana": "こくばんのじをノートにうつします。", "id": "Menyalin huruf dari papan tulis ke buku catatan." }],
  "移る": [{ "jp": "来月、新しい家へ移ります。", "kana": "らいげつ、あたらしいいえへうつります。", "id": "Bulan depan, saya akan pindah ke rumah baru." }],
  "腕": [{ "jp": "腕の骨を折りました。", "kana": "うでのほねをお折りました。", "id": "Saya mematahkan tulang lengan." }],
  "裏": [{ "jp": "紙の裏に名前を書いてください。", "kana": "かみのうらになまえをかいてください。", "id": "Tolong tulis nama di balik kertas." }],
  "運転手": [{ "jp": "タクシーの運転手と話しました。", "kana": "タクシーのうんてんしゅとはなしました。", "id": "Saya berbicara dengan sopir taksi." }],
  "運動": [{ "jp": "健康のために運動します。", "kana": "けんこうのためにうんどうします。", "id": "Saya berolahraga demi kesehatan." }],
  "枝": [{ "jp": "風で木の枝が折れました。", "kana": "かぜできのえだがおれました。", "id": "Cabang pohon patah karena angin." }],
  "選ぶ": [{ "jp": "好きな色を選んでください。", "kana": "すきないろをえらんでください。", "id": "Tolong pilih warna yang disukai." }],
  "遠慮": [{ "jp": "遠慮しないでたくさん食べてください。", "kana": "えんりょしないでたくさんたべてください。", "id": "Tolong makan yang banyak, tidak usah sungkan." }],
  "おいでになる": [{ "jp": "社長がおいでになりました。", "kana": "しゃちょうがおいでになりました。", "id": "Direktur telah datang (sopan)." }],
  "お祝い": [{ "jp": "結婚のお祝いに時計をあげました。", "kana": "けっこんのおいわいにとけいをあげました。", "id": "Saya memberikan jam sebagai hadiah pernikahan." }],
  "オートバイ": [{ "jp": "オートバイで旅行します。", "kana": "オートバイでりょこうします。", "id": "Saya bepergian dengan sepeda motor." }],
  "お嬢さん": [{ "jp": "お嬢さんはお元気ですか。", "kana": "おじょうさんはおげんきですか。", "id": "Apakah putri Anda sehat?" }],
  "お宅": [{ "jp": "先生のお宅はどこですか。", "kana": "せんせいのおたくはどこですか。", "id": "Di mana rumah Anda, guru? (sopan)" }]
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
    }
  });
}

console.log(`Berhasil menyuntikkan ${injectedCount} contoh kalimat N4 ke memori.`);

if (injectedCount > 0) {
  console.log("Menyimpan ke file characters.json...");
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log("✅ Update file sukses!");
} else {
  console.log("⚠️ Tidak ada kalimat baru yang disuntikkan (mungkin sudah ada semua).");
}
