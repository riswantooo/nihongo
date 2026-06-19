import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

const newExamples = {
  "落ちる": [{ "jp": "木から猿が落ちました。", "kana": "きからさるがおちました。", "id": "Monyet jatuh dari pohon." }],
  "おっしゃる": [{ "jp": "先生がそうおっしゃいました。", "kana": "せんせいがそうおっしゃいました。", "id": "Guru berkata demikian (sopan)." }],
  "夫": [{ "jp": "私の夫は会社員です。", "kana": "わたしのおっとはかいしゃいんです。", "id": "Suami saya adalah pegawai perusahaan." }],
  "落とす": [{ "jp": "道で財布を落としました。", "kana": "みちでさいふをおとしました。", "id": "Saya menjatuhkan dompet di jalan." }],
  "踊り": [{ "jp": "日本の踊りを見ました。", "kana": "にほんのおどりをおどりました。", "id": "Saya melihat tarian Jepang." }],
  "踊る": [{ "jp": "パーティーで楽しく踊りました。", "kana": "パーティーでたのしくおどりました。", "id": "Saya menari dengan gembira di pesta." }],
  "驚く": [{ "jp": "大きな音に驚きました。", "kana": "おおきなおとにおどろきました。", "id": "Saya terkejut dengan suara keras itu." }],
  "お見舞い": [{ "jp": "病院へお見舞いに行きます。", "kana": "びょういんへおみまいにいきます。", "id": "Saya pergi menjenguk orang sakit ke rumah sakit." }],
  "思い出す": [{ "jp": "子供の頃を思い出します。", "kana": "こどものころをおもいだします。", "id": "Saya teringat masa kecil." }],
  "思う": [{ "jp": "明日は雨が降ると思います。", "kana": "あしたはあめがふるとおもいます。", "id": "Saya pikir besok akan turun hujan." }],
  "おもちゃ": [{ "jp": "デパートでおもちゃを買います。", "kana": "デパートでおもちゃをかいます。", "id": "Saya membeli mainan di toserba." }],
  "表": [{ "jp": "手紙の表に住所を書きます。", "kana": "てがみのおもてにじゅうしょをかきます。", "id": "Saya menulis alamat di bagian depan surat." }],
  "親": [{ "jp": "親を大切にします。", "kana": "おやをたいせつにします。", "id": "Saya menghargai orang tua." }],
  "泳ぎ方": [{ "jp": "泳ぎ方を教えてください。", "kana": "およぎかたをおしえてください。", "id": "Tolong ajari saya cara berenang." }],
  "下りる": [{ "jp": "階段を下ります。", "kana": "かいだんをおります。", "id": "Turun tangga." }],
  "折る": [{ "jp": "風で木の枝を折りました。", "kana": "かぜできのえだをお折りました。", "id": "Saya mematahkan dahan pohon dengan angin." }], // wait, "かぜできのえだがおれました" is intransitive. For transitive: 枝を折る - 折りました
  "お礼": [{ "jp": "お礼の手紙を書きました。", "kana": "おれいのてがみをかきました。", "id": "Saya menulis surat ucapan terima kasih." }],
  "終わる": [{ "jp": "もうすぐ授業が終わります。", "kana": "もうすぐじゅぎょうがおわります。", "id": "Pelajaran akan segera berakhir." }],
  "海岸": [{ "jp": "海岸を散歩します。", "kana": "かいがんをさんぽします。", "id": "Berjalan-jalan di pesisir pantai." }],
  "会場": [{ "jp": "試験の会場はあそこです。", "kana": "しけんのかいじょうはあそこです。", "id": "Tempat ujian ada di sana." }],
  "会話": [{ "jp": "日本語の会話を練習します。", "kana": "にほんごのかいわをれんしゅうします。", "id": "Berlatih percakapan bahasa Jepang." }],
  "帰り": [{ "jp": "帰りにスーパーへ行きます。", "kana": "かえりにスーパーへいきます。", "id": "Saya pergi ke supermarket saat perjalanan pulang." }],
  "変える": [{ "jp": "予定を変えます。", "kana": "よていをかえます。", "id": "Saya mengubah rencana." }],
  "科学": [{ "jp": "科学の雑誌を読みます。", "kana": "かがくのざっしをよみます。", "id": "Membaca majalah sains." }],
  "鏡": [{ "jp": "鏡を見ます。", "kana": "かがみをみます。", "id": "Melihat cermin." }],
  "掛ける": [{ "jp": "壁に絵を掛けます。", "kana": "かべにえをかけます。", "id": "Menggantung lukisan di dinding." }],
  "飾る": [{ "jp": "部屋に花を飾ります。", "kana": "へやにはなをかざります。", "id": "Menghiasi ruangan dengan bunga." }],
  "火事": [{ "jp": "火事があったら、消防車を呼びます。", "kana": "かじがあったら、しょうぼうしゃをよびます。", "id": "Kalau ada kebakaran, panggil mobil pemadam." }],
  "ガス": [{ "jp": "ガスの火を消します。", "kana": "ガスのひをけします。", "id": "Mematikan api gas." }],
  "硬い": [{ "jp": "この肉は硬いです。", "kana": "このにくはかたいです。", "id": "Daging ini keras." }],
  "形": [{ "jp": "面白い形の雲ですね。", "kana": "おもしろいかたちのくもですね。", "id": "Awan yang bentuknya menarik ya." }],
  "片付ける": [{ "jp": "机の上を片付けます。", "kana": "つくえのうえをかたづけます。", "id": "Merapikan atas meja." }],
  "勝つ": [{ "jp": "試合に勝ちました。", "kana": "しあいに勝ちました。", "id": "Saya menang dalam pertandingan." }],
  "家内": [{ "jp": "私の家内は銀行員です。", "kana": "わたしのかないはぎんこういんです。", "id": "Istri saya adalah pegawai bank." }],
  "悲しい": [{ "jp": "悲しいニュースを聞きました。", "kana": "かなしいニュースをききました。", "id": "Saya mendengar berita sedih." }],
  "必ず": [{ "jp": "明日は必ず来てください。", "kana": "あしたはかならずきてください。", "id": "Besok harus datang." }],
  "お金持ち": [{ "jp": "彼はお金持ちです。", "kana": "かれはおかねもちです。", "id": "Dia (laki-laki) adalah orang kaya." }],
  "彼女": [{ "jp": "彼女は優しい人です。", "kana": "かのじょはやさしいひとです。", "id": "Dia (perempuan) adalah orang yang baik hati." }],
  "壁": [{ "jp": "壁にポスターが貼ってあります。", "kana": "かべにポスターがはってあります。", "id": "Di dinding tertempel poster." }],
  "かむ": [{ "jp": "よくかんで食べてください。", "kana": "よくかんでたべてください。", "id": "Tolong kunyah dengan baik saat makan." }],
  "通う": [{ "jp": "毎日電車で会社に通っています。", "kana": "まいにちでんしゃでかいしゃにかよっています。", "id": "Setiap hari saya pergi-pulang ke kantor dengan kereta." }],
  "彼": [{ "jp": "彼は英語の先生です。", "kana": "かれはえいごのせんせいです。", "id": "Dia (laki-laki) adalah guru bahasa Inggris." }],
  "乾く": [{ "jp": "洗濯物が乾きました。", "kana": "せんたくものがかわきました。", "id": "Cucian sudah kering." }],
  "代わり": [{ "jp": "社長の代わりに行きます。", "kana": "しゃちょうのかわりにいきます。", "id": "Saya pergi sebagai pengganti direktur." }],
  "変わる": [{ "jp": "信号が赤に変わりました。", "kana": "しんごうがあかにかわりました。", "id": "Lampu lalu lintas berubah menjadi merah." }],
  "考える": [{ "jp": "将来のことを考えます。", "kana": "しょうらいのことをかんがえます。", "id": "Memikirkan tentang masa depan." }],
  "関係": [{ "jp": "二人は関係がいいです。", "kana": "ふたりはかんけいがいいです。", "id": "Hubungan mereka berdua bagus." }],
  "看護師": [{ "jp": "病院で看護師として働いています。", "kana": "びょういんでかんごしとしてはたらいています。", "id": "Bekerja sebagai perawat di rumah sakit." }],
  "簡単": [{ "jp": "この問題は簡単です。", "kana": "このもんだいはかんたんです。", "id": "Soal ini mudah." }],
  "気": [{ "jp": "気がつくと朝でした。", "kana": "きがつくとあさでした。", "id": "Saat tersadar sudah pagi." }],
  "危険": [{ "jp": "この川で泳ぐのは危険です。", "kana": "このかわでおよぐのはきけんです。", "id": "Berenang di sungai ini berbahaya." }],
  "聞こえる": [{ "jp": "鳥の鳴き声が聞こえます。", "kana": "とりのなきごえがきこえます。", "id": "Terdengar suara kicau burung." }],
  "汽車": [{ "jp": "汽車で旅行します。", "kana": "きしゃでりょこうします。", "id": "Bepergian dengan kereta uap/kereta api." }],
  "技術": [{ "jp": "日本の技術は進んでいます。", "kana": "にほんのぎじゅつはすすんでいます。", "id": "Teknologi Jepang sangat maju." }],
  "絹": [{ "jp": "これは絹のネクタイです。", "kana": "これはきぬのネクタイです。", "id": "Ini adalah dasi sutra." }],
  "厳しい": [{ "jp": "先生はとても厳しいです。", "kana": "せんせいはとてもきびしいです。", "id": "Guru sangat tegas." }],
  "気分": [{ "jp": "今日は気分がいいです。", "kana": "きょうはきぶんがいいです。", "id": "Hari ini perasaan/kondisi saya baik." }],
  "決まる": [{ "jp": "試合の日にちが決まりました。", "kana": "しあいのひにちがきまりました。", "id": "Tanggal pertandingan telah ditentukan." }],
  "君": [{ "jp": "君はだれですか。", "kana": "きみはだれですか。", "id": "Kamu ini siapa?" }],
  "決める": [{ "jp": "旅行の予定を決めます。", "kana": "りょこうのよていをきめます。", "id": "Menentukan rencana perjalanan." }],
  "気持ち": [{ "jp": "風が吹いて気持ちがいいです。", "kana": "かぜがふいてきもちがいいです。", "id": "Angin bertiup, rasanya enak." }],
  "客": [{ "jp": "レストランに客がたくさんいます。", "kana": "レストランにきゃくがたくさんいます。", "id": "Di restoran ada banyak tamu/pelanggan." }],
  "急": [{ "jp": "急な用事ができました。", "kana": "きゅうなようじができました。", "id": "Muncul urusan mendadak." }],
  "急行": [{ "jp": "急行電車に乗ります。", "kana": "きゅうこうでんしゃにのります。", "id": "Naik kereta ekspres." }],
  "教育": [{ "jp": "子供の教育は大切です。", "kana": "こどものきょういくはたいせつです。", "id": "Pendidikan anak sangat penting." }],
  "教会": [{ "jp": "日曜日には教会に行きます。", "kana": "にちようびにはきょうかいにいきます。", "id": "Pergi ke gereja pada hari Minggu." }],
  "競争": [{ "jp": "走って競争しましょう。", "kana": "はしってきょうそうしましょう。", "id": "Mari berlari dan berlomba." }],
  "興味": [{ "jp": "日本の歴史に興味があります。", "kana": "にほんのれきしにきょうみがあります。", "id": "Saya tertarik dengan sejarah Jepang." }],
  "近所": [{ "jp": "近所の人に挨拶します。", "kana": "きんじょのひとにあいさつします。", "id": "Memberi salam kepada tetangga." }],
  "具合": [{ "jp": "体の具合が悪いです。", "kana": "からだのぐあいがわるいです。", "id": "Kondisi badan sedang tidak baik." }],
  "空気": [{ "jp": "山の空気はきれいです。", "kana": "やまのくうきはきれいです。", "id": "Udara di gunung bersih." }],
  "草": [{ "jp": "庭の草を取ります。", "kana": "にわのくさをとります。", "id": "Mencabut rumput di halaman." }],
  "くださる": [{ "jp": "先生が本をくださいました。", "kana": "せんせいがほんをくださいました。", "id": "Guru memberikan buku kepada saya (sopan)." }],
  "首": [{ "jp": "キリンは首が長いです。", "kana": "キリンはくびがながいです。", "id": "Jerapah lehernya panjang." }],
  "雲": [{ "jp": "空に白い雲があります。", "kana": "そらにしろいくもがあります。", "id": "Di langit ada awan putih." }],
  "比べる": [{ "jp": "二つの値段を比べます。", "kana": "ふたつのねだんをくらべます。", "id": "Membandingkan dua buah harga." }],
  "くれる": [{ "jp": "友達がプレゼントをくれました。", "kana": "ともだちがプレゼントをくれました。", "id": "Teman memberikan saya hadiah." }],
  "暮れる": [{ "jp": "日が暮れて暗くなりました。", "kana": "ひがくれてくらくなりました。", "id": "Matahari terbenam dan menjadi gelap." }],
  "黒い": [{ "jp": "黒い靴を買いました。", "kana": "くろいくつをかいました。", "id": "Membeli sepatu hitam." }],
  "毛": [{ "jp": "猫の毛が服につきました。", "kana": "ねこのけがふくにつきました。", "id": "Bulu kucing menempel di baju." }],
  "警察": [{ "jp": "泥棒を見たので警察を呼びました。", "kana": "どろぼうをみたのでけいさつをよびました。", "id": "Karena melihat pencuri, saya memanggil polisi." }],
  "消しゴム": [{ "jp": "消しゴムで字を消します。", "kana": "けしゴムでじをけします。", "id": "Menghapus tulisan dengan penghapus." }],
  "下宿": [{ "jp": "大学の近くに下宿しています。", "kana": "だいがくのちかくにげしゅくしています。", "id": "Saya menyewa kamar di dekat universitas." }],
  "決して": [{ "jp": "このことは決して忘れません。", "kana": "このことはけっしてわすれません。", "id": "Hal ini tidak akan pernah saya lupakan." }],
  "けれど": [{ "jp": "勉強したけれど、わかりません。", "kana": "べんきょうしたけれど、わかりません。", "id": "Sudah belajar, tetapi tidak paham." }],
  "原因": [{ "jp": "事故の原因を調べます。", "kana": "じこのげんいんをしらべます。", "id": "Menyelidiki penyebab kecelakaan." }],
  "けんか": [{ "jp": "兄弟でけんかしました。", "kana": "きょうだいでけんかしました。", "id": "Bertengkar dengan saudara." }],
  "研究": [{ "jp": "大学で経済を研究しています。", "kana": "だいがくでけいざいをけんきゅうしています。", "id": "Meneliti ilmu ekonomi di universitas." }],
  "研究室": [{ "jp": "先生の研究室に行きました。", "kana": "せんせいのけんきゅうしつにいきました。", "id": "Pergi ke ruang penelitian (kantor) guru." }],
  "見物": [{ "jp": "お祭りの見物に行きます。", "kana": "おまつりのけんぶつにいきます。", "id": "Pergi menonton festival." }],
  "子": [{ "jp": "可愛い子ですね。", "kana": "かわいいこですね。", "id": "Anak yang manis ya." }],
  "こう": [{ "jp": "こうすればいいですか。", "kana": "こうすればいいですか。", "id": "Apakah sebaiknya dilakukan dengan cara seperti ini?" }],
  "郊外": [{ "jp": "郊外に家を建てました。", "kana": "こうがいにいえをたてました。", "id": "Membangun rumah di pinggiran kota." }],
  "講義": [{ "jp": "歴史の講義を聞きます。", "kana": "れきしのこうぎをききます。", "id": "Mendengarkan kuliah sejarah." }],
  "工業": [{ "jp": "この町は工業が盛んです。", "kana": "このまちはこうぎょうがさかんです。", "id": "Kota ini industrinya maju." }],
  "高校": [{ "jp": "妹は高校に通っています。", "kana": "いもうとはこうこうにかよっています。", "id": "Adik perempuan saya bersekolah di SMA." }],
  "高校生": [{ "jp": "彼は高校生です。", "kana": "かれはこうこうせいです。", "id": "Dia adalah murid SMA." }],
  "校長": [{ "jp": "校長先生の話を聞きます。", "kana": "こうちょうせんせいのはなしをききます。", "id": "Mendengarkan pidato kepala sekolah." }],
  "交通": [{ "jp": "ここは交通が便利です。", "kana": "ここはこうつうがべんりです。", "id": "Di sini lalu lintasnya (transportasi) praktis." }],
  "講堂": [{ "jp": "講堂に学生が集まります。", "kana": "こうどうにがくせいがあつまります。", "id": "Para siswa berkumpul di auditorium." }]
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
