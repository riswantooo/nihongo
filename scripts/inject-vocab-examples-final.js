import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

const newExamples = {
  "伯父/叔父": [{ "jp": "私の伯父は医者です。", "kana": "わたしのおじはいしゃです。", "id": "Paman saya adalah dokter." }],
  "教える": [{ "jp": "日本語を教えます。", "kana": "にほんごをおしえます。", "id": "Saya mengajar bahasa Jepang." }],
  "押す": [{ "jp": "このボタンを押してください。", "kana": "このボタンをおしてください。", "id": "Tolong tekan tombol ini." }],
  "弟": [{ "jp": "弟はゲームが好きです。", "kana": "おとうとはゲームがすきです。", "id": "Adik laki-laki suka game." }],
  "男": [{ "jp": "あそこに男の人がいます。", "kana": "あそこにおとこのひとがいます。", "id": "Di sana ada laki-laki." }],
  "男の子": [{ "jp": "男の子が走っています。", "kana": "おとこのこがはしっています。", "id": "Anak laki-laki sedang berlari." }],
  "一昨年": [{ "jp": "一昨年の夏に日本へ行きました。", "kana": "おととしのなつににほんへいきました。", "id": "Dua tahun yang lalu pada musim panas, saya pergi ke Jepang." }],
  "大人": [{ "jp": "大人のチケットを二枚ください。", "kana": "おとなのチケットをにまいください。", "id": "Tolong beri saya dua tiket dewasa." }],
  "同じ": [{ "jp": "私のカバンと同じです。", "kana": "わたしのカバンとおなじです。", "id": "Sama dengan tas saya." }],
  "お兄さん": [{ "jp": "お兄さんは何歳ですか。", "kana": "おにいさんはなんさいですか。", "id": "Berapa umur kakak laki-lakimu?" }],
  "お姉さん": [{ "jp": "山田さんのお姉さんは綺麗です。", "kana": "やまださんのおねえさんはきれいです。", "id": "Kakak perempuan Yamada cantik." }],
  "伯母/叔母": [{ "jp": "叔母は東京に住んでいます。", "kana": "おばはとうきょうにすんでいます。", "id": "Bibi tinggal di Tokyo." }],
  "お弁当": [{ "jp": "お弁当を作りました。", "kana": "おべんとうをつくりました。", "id": "Saya membuat kotak bekal (bento)." }],
  "覚える": [{ "jp": "新しい単語を覚えます。", "kana": "あたらしいひんごをおぼえます。", "id": "Saya menghafal kosakata baru." }],
  "重い": [{ "jp": "この荷物は重いです。", "kana": "このにもつはおもいです。", "id": "Barang bawaan ini berat." }],
  "面白い": [{ "jp": "この映画は面白いです。", "kana": "このえいがはおもしろいです。", "id": "Film ini menarik." }],
  "泳ぐ": [{ "jp": "海で泳ぎます。", "kana": "うみでおよぎます。", "id": "Berenang di laut." }],
  "降りる": [{ "jp": "次の駅で降ります。", "kana": "つぎのえきでおります。", "id": "Saya akan turun di stasiun berikutnya." }],
  "終わる": [{ "jp": "仕事が終わりました。", "kana": "しごとがおわりました。", "id": "Pekerjaan sudah selesai." }],
  "女": [{ "jp": "女の人が歌っています。", "kana": "おんなのひとがうたっています。", "id": "Perempuan itu sedang bernyanyi." }],
  "女の子": [{ "jp": "女の子が遊んでいます。", "kana": "おんなのこがあそんでいます。", "id": "Anak perempuan sedang bermain." }],
  "外国": [{ "jp": "外国に行きたいです。", "kana": "がいこくにいきたいです。", "id": "Saya ingin pergi ke luar negeri." }],
  "外国人": [{ "jp": "あの人は外国人です。", "kana": "あのひとはがいこくじんです。", "id": "Orang itu adalah orang asing." }],
  "買い物": [{ "jp": "デパートへ買い物に行きます。", "kana": "デパートへかいものにいきます。", "id": "Saya pergi belanja ke toko serba ada." }],
  "返す": [{ "jp": "図書館に本を返します。", "kana": "としょかんにほんをかえします。", "id": "Saya mengembalikan buku ke perpustakaan." }],
  "かかる": [{ "jp": "家から駅まで１０分かかります。", "kana": "いえからえきまでじゅっぷんかかります。", "id": "Dari rumah sampai stasiun memakan waktu 10 menit." }],
  "かける": [{ "jp": "友達に電話をかけます。", "kana": "ともだちにでんわをかけます。", "id": "Saya menelepon teman." }],
  "傘": [{ "jp": "傘を忘れました。", "kana": "かさをわすれました。", "id": "Saya lupa membawa payung." }],
  "貸す": [{ "jp": "ペンを貸してください。", "kana": "ペンをかしてください。", "id": "Tolong pinjamkan saya pena." }],
  "風": [{ "jp": "今日は風が強いです。", "kana": "きょうはかぜがつよいです。", "id": "Hari ini anginnya kencang." }],
  "風邪": [{ "jp": "風邪を引きました。", "kana": "かぜをひきました。", "id": "Saya masuk angin/flu." }],
  "方": [{ "jp": "漢字の読み方がわかりません。", "kana": "かんじのよみかたがわかりません。", "id": "Saya tidak tahu cara membaca kanji ini." }],
  "カップ": [{ "jp": "コーヒーをカップに注ぎます。", "kana": "コーヒーをカップにそそぎます。", "id": "Saya menuangkan kopi ke dalam cangkir." }],
  "家庭": [{ "jp": "温かい家庭を持ちたいです。", "kana": "あたたかいかていをもちたいです。", "id": "Saya ingin memiliki keluarga yang hangat." }],
  "花瓶": [{ "jp": "花瓶に花を飾ります。", "kana": "かびんにはなをかざります。", "id": "Saya memajang bunga di vas." }],
  "紙": [{ "jp": "紙に名前を書いてください。", "kana": "かみになまえをかいてください。", "id": "Tolong tulis namamu di kertas." }],
  "辛い": [{ "jp": "このカレーは辛いです。", "kana": "このカレーはからいです。", "id": "Kari ini pedas." }],
  "借りる": [{ "jp": "図書館で本を借りました。", "kana": "としょかんでほんをかりました。", "id": "Saya meminjam buku di perpustakaan." }],
  "軽い": [{ "jp": "このパソコンは軽いです。", "kana": "このパソコンはかるいです。", "id": "Komputer ini ringan." }],
  "カレー": [{ "jp": "晩ご飯はカレーです。", "kana": "ばんごはんはカレーです。", "id": "Makan malamnya adalah kari." }],
  "カレンダー": [{ "jp": "カレンダーを見てください。", "kana": "カレンダーをみてください。", "id": "Tolong lihat kalender." }],
  "川": [{ "jp": "川で魚を釣ります。", "kana": "かわでさかなをつります。", "id": "Memancing ikan di sungai." }],
  "黄色い": [{ "jp": "黄色いシャツを着ています。", "kana": "きいろいシャツをきています。", "id": "Memakai kemeja berwarna kuning." }],
  "消える": [{ "jp": "電気が消えました。", "kana": "でんきがきえました。", "id": "Lampunya mati/padam." }],
  "北": [{ "jp": "北に山があります。", "kana": "きたにやまがあります。", "id": "Di sebelah utara ada gunung." }],
  "汚い": [{ "jp": "手が汚いです。", "kana": "てがきたないです。", "id": "Tangannya kotor." }],
  "喫茶店": [{ "jp": "喫茶店でコーヒーを飲みます。", "kana": "きっさてんでコーヒーをのみます。", "id": "Minum kopi di kedai kopi." }],
  "九": [{ "jp": "九時にお風呂に入ります。", "kana": "くじにおふろにはいります。", "id": "Saya mandi jam sembilan." }],
  "牛肉": [{ "jp": "牛肉と豚肉を買います。", "kana": "ぎゅうにくとぶたにくをかいます。", "id": "Saya membeli daging sapi dan daging babi." }],
  "教室": [{ "jp": "教室に誰もいません。", "kana": "きょうしつにだれもいません。", "id": "Tidak ada siapa-siapa di kelas." }],
  "兄弟": [{ "jp": "兄弟は何人ですか。", "kana": "きょうだいはなんにんですか。", "id": "Ada berapa orang saudara laki-laki/perempuan?" }],
  "切る": [{ "jp": "紙をハサミで切ります。", "kana": "かみをハサミできります。", "id": "Memotong kertas dengan gunting." }],
  "着る": [{ "jp": "新しい服を着ます。", "kana": "あたらしいふくをきます。", "id": "Memakai baju baru." }],
  "キロ": [{ "jp": "駅まで三キロあります。", "kana": "えきまでさんキロあります。", "id": "Jarak ke stasiun ada tiga kilometer." }],
  "ください": [{ "jp": "これを見せてください。", "kana": "これをみせてください。", "id": "Tolong perlihatkan ini pada saya." }],
  "靴下": [{ "jp": "靴下を履きます。", "kana": "くつしたをはきます。", "id": "Memakai kaus kaki." }],
  "曇り": [{ "jp": "明日は曇りでしょう。", "kana": "あしたはくもりでしょう。", "id": "Besok mungkin akan berawan." }],
  "クラス": [{ "jp": "クラスで一番背が高いです。", "kana": "クラスでいちばんせがたかいです。", "id": "Paling tinggi di kelas." }],
  "グラム": [{ "jp": "肉を百グラムください。", "kana": "にくをひゃくグラムください。", "id": "Tolong beri saya 100 gram daging." }],
  "黒い": [{ "jp": "黒い猫がいます。", "kana": "くろいねこがいます。", "id": "Ada kucing hitam." }],
  "警察": [{ "jp": "警察を呼びます。", "kana": "けいさつをよびます。", "id": "Saya memanggil polisi." }],
  "消す": [{ "jp": "テレビを消してください。", "kana": "テレビをけしてください。", "id": "Tolong matikan televisinya." }],
  "結構": [{ "jp": "もう結構です。", "kana": "もうけっこうです。", "id": "Sudah cukup (tidak usah lagi)." }],
  "結婚": [{ "jp": "来年、結婚します。", "kana": "らいねん、けっこんします。", "id": "Tahun depan, saya akan menikah." }],
  "玄関": [{ "jp": "玄関で靴を脱ぎます。", "kana": "げんかんでくつをぬぎます。", "id": "Melepas sepatu di ruang depan masuk." }],
  "五": [{ "jp": "りんごが五つあります。", "kana": "りんごがいつつあります。", "id": "Ada lima buah apel." }],
  "紅茶": [{ "jp": "紅茶を飲みます。", "kana": "こうちゃをのみます。", "id": "Saya minum teh hitam." }],
  "交番": [{ "jp": "駅の前に交番があります。", "kana": "えきのまえにこうばんがあります。", "id": "Di depan stasiun ada pos polisi." }],
  "声": [{ "jp": "大きな声で話してください。", "kana": "おおきなこえではなしてください。", "id": "Tolong bicara dengan suara besar." }],
  "九日": [{ "jp": "誕生日は九日です。", "kana": "たんじょうびはここのかです。", "id": "Ulang tahun saya tanggal sembilan." }],
  "九つ": [{ "jp": "みかんが九つあります。", "kana": "みかんがここのつあります。", "id": "Ada sembilan buah jeruk mandarin." }],
  "答える": [{ "jp": "質問に答えてください。", "kana": "しつもんにこたえてください。", "id": "Tolong jawab pertanyaannya." }],
  "こっち": [{ "jp": "こっちへ来てください。", "kana": "こっちへきてください。", "id": "Tolong datang ke sebelah sini." }],
  "コップ": [{ "jp": "コップに水を入れます。", "kana": "コップにみずをいれます。", "id": "Memasukkan air ke dalam gelas." }],
  "言葉": [{ "jp": "日本語の言葉を覚えます。", "kana": "にほんごのことばをおぼえます。", "id": "Menghafal kosakata bahasa Jepang." }],
  "御飯": [{ "jp": "御飯を食べましょう。", "kana": "ごはんをたべましょう。", "id": "Mari makan nasi." }],
  "コピーする": [{ "jp": "この紙をコピーしてください。", "kana": "このかみをコピーしてください。", "id": "Tolong fotokopi kertas ini." }],
  "困る": [{ "jp": "お金がなくて困っています。", "kana": "おかねがなくてこまっています。", "id": "Saya kesusahan karena tidak ada uang." }],
  "こんな": [{ "jp": "こんな本は読んだことがない。", "kana": "こんなほんはよんだことがない。", "id": "Buku yang seperti ini belum pernah saya baca." }],
  "さあ": [{ "jp": "さあ、行きましょう。", "kana": "さあ、いきましょう。", "id": "Nah, ayo pergi." }],
  "財布": [{ "jp": "財布を忘れました。", "kana": "さいふをわすれました。", "id": "Saya lupa dompet." }],
  "先": [{ "jp": "お先に失礼します。", "kana": "おさきにしつれいします。", "id": "Permisi, saya duluan." }],
  "咲く": [{ "jp": "桜が咲きました。", "kana": "さくらがさきました。", "id": "Bunga sakura telah mekar." }],
  "作文": [{ "jp": "日本語で作文を書きます。", "kana": "にほんごでさくぶんをかきます。", "id": "Menulis karangan dalam bahasa Jepang." }],
  "さす": [{ "jp": "傘をさします。", "kana": "かさをさします。", "id": "Membuka payung." }],
  "砂糖": [{ "jp": "コーヒーに砂糖を入れます。", "kana": "コーヒーにさとうをいれます。", "id": "Memasukkan gula ke kopi." }],
  "さ来年": [{ "jp": "さ来年、国へ帰ります。", "kana": "さらいねん、くにへかえります。", "id": "Dua tahun lagi, saya akan pulang ke negara asal." }],
  "三": [{ "jp": "三時に会いましょう。", "kana": "さんじにあいましょう。", "id": "Mari bertemu jam tiga." }],
  "散歩する": [{ "jp": "公園を散歩します。", "kana": "こうえんをさんぽします。", "id": "Berjalan-jalan di taman." }],
  "四": [{ "jp": "四人家族です。", "kana": "よにんかぞくです。", "id": "Keluarga saya empat orang." }],
  "塩": [{ "jp": "塩を取ってください。", "kana": "しおをとってください。", "id": "Tolong ambilkan garam." }],
  "しかし": [{ "jp": "しかし、それは違います。", "kana": "しかし、それはちがいます。", "id": "Akan tetapi, itu salah." }],
  "時間": [{ "jp": "時間がありません。", "kana": "じかんがありません。", "id": "Tidak punya waktu." }],
  "七": [{ "jp": "七時に起きます。", "kana": "しちじにおきます。", "id": "Bangun jam tujuh." }],
  "質問": [{ "jp": "質問があります。", "kana": "しつもんがあります。", "id": "Ada pertanyaan." }],
  "死ぬ": [{ "jp": "犬が死にました。", "kana": "いぬがしにました。", "id": "Anjingnya telah mati." }],
  "字引": [{ "jp": "字引で意味を調べます。", "kana": "じびきでいみをしらべます。", "id": "Mencari arti di kamus." }],
  "自分": [{ "jp": "自分でします。", "kana": "じぶんでします。", "id": "Melakukannya sendiri." }],
  "閉まる": [{ "jp": "ドアが閉まります。", "kana": "ドアがしまります。", "id": "Pintunya akan tertutup." }],
  "閉める": [{ "jp": "窓を閉めてください。", "kana": "まどをしめてください。", "id": "Tolong tutup jendelanya." }],
  "締める": [{ "jp": "ネクタイを締めます。", "kana": "ネクタイをしめます。", "id": "Memakai dasi." }],
  "じゃ / じゃあ": [{ "jp": "じゃあ、また明日。", "kana": "じゃあ、またあした。", "id": "Kalau begitu, sampai jumpa besok." }],
  "シャツ": [{ "jp": "白いシャツを着ます。", "kana": "しろいシャツをきます。", "id": "Memakai kemeja putih." }],
  "シャワー": [{ "jp": "シャワーを浴びます。", "kana": "シャワーをあびます。", "id": "Mandi dengan pancuran." }],
  "十": [{ "jp": "りんごを十個買いました。", "kana": "りんごをじゅっこかいました。", "id": "Membeli sepuluh buah apel." }],
  "授業": [{ "jp": "授業が始まります。", "kana": "じゅぎょうがはじまります。", "id": "Pelajaran akan dimulai." }],
  "丈夫": [{ "jp": "このカバンは丈夫です。", "kana": "このカバンはじょうぶです。", "id": "Tas ini kuat/awet." }],
  "知る": [{ "jp": "そのニュースを知っていますか。", "kana": "そのニュースをしっていますか。", "id": "Apakah kamu tahu berita itu?" }],
  "白い": [{ "jp": "白い犬を飼っています。", "kana": "しろいいぬをかっています。", "id": "Saya memelihara anjing putih." }],
  "吸う": [{ "jp": "タバコを吸わないでください。", "kana": "タバコをすわないでください。", "id": "Tolong jangan merokok." }],
  "スカート": [{ "jp": "新しいスカートを買いました。", "kana": "あたらしいスカートをかいました。", "id": "Saya membeli rok baru." }],
  "すぐ": [{ "jp": "すぐ行きます。", "kana": "すぐいきます。", "id": "Saya akan segera pergi." }],
  "ストーブ": [{ "jp": "ストーブをつけます。", "kana": "ストーブをつけます。", "id": "Menyalakan penghangat ruangan." }],
  "ズボン": [{ "jp": "黒いズボンを履いています。", "kana": "くろいズボンをはいています。", "id": "Mengenakan celana panjang hitam." }],
  "住む": [{ "jp": "東京に住んでいます。", "kana": "とうきょうにすんでいます。", "id": "Tinggal di Tokyo." }],
  "スリッパ": [{ "jp": "スリッパを履いてください。", "kana": "スリッパをはいてください。", "id": "Tolong pakai sandal selop." }],
  "座る": [{ "jp": "ここに座ってください。", "kana": "ここにすわってください。", "id": "Tolong duduk di sini." }],
  "背": [{ "jp": "彼は背が高いです。", "kana": "かれはせがたかいです。", "id": "Dia (laki-laki) tinggi." }],
  "石鹸": [{ "jp": "石鹸で手を洗います。", "kana": "せっけんでてをあらいます。", "id": "Mencuci tangan dengan sabun." }],
  "背広": [{ "jp": "新しい背広を買いました。", "kana": "あたらしいせびろをかいました。", "id": "Membeli setelan jas baru." }],
  "ゼロ": [{ "jp": "点数はゼロでした。", "kana": "てんすうはゼロでした。", "id": "Nilainya adalah nol." }],
  "洗濯": [{ "jp": "服を洗濯します。", "kana": "ふくをせんたくします。", "id": "Mencuci baju." }],
  "全部": [{ "jp": "全部食べました。", "kana": "ぜんぶたべました。", "id": "Saya makan semuanya." }],
  "掃除": [{ "jp": "部屋を掃除します。", "kana": "へやをそうじします。", "id": "Membersihkan kamar." }],
  "そちら": [{ "jp": "そちらは暑いですか。", "kana": "そちらはあついですか。", "id": "Apakah di situ panas?" }],
  "そっち": [{ "jp": "そっちへ行きます。", "kana": "そっちへいきます。", "id": "Saya akan pergi ke situ." }],
  "そば": [{ "jp": "駅のそばに住んでいます。", "kana": "えきのそばにすんでいます。", "id": "Tinggal di samping stasiun." }],
  "空": [{ "jp": "空が青いです。", "kana": "そらがあおいです。", "id": "Langitnya biru." }],
  "それでは": [{ "jp": "それでは、始めましょう。", "kana": "それでは、はじめましょう。", "id": "Kalau begitu, mari kita mulai." }]
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

console.log(`Berhasil menyuntikkan ${injectedCount} contoh kalimat ke memori.`);

if (injectedCount > 0) {
  console.log("Menyimpan ke file characters.json...");
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log("✅ Update file sukses!");
} else {
  console.log("⚠️ Tidak ada kalimat baru yang disuntikkan.");
}
