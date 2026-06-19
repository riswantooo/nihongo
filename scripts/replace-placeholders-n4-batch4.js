import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

const candidateWords = [
  { character: "課", kana: "か", romaji: "ka", meaning: "pelajaran / seksi", examples: [{ jp: "第一課を学ぶ", kana: "だいいっかをまなぶ", id: "Mempelajari pelajaran pertama." }] },
  { character: "会", kana: "かい", romaji: "kai", meaning: "perkumpulan", examples: [{ jp: "会に参加する", kana: "かいにさんかする", id: "Berpartisipasi dalam perkumpulan." }] },
  { character: "回", kana: "かい", romaji: "kai", meaning: "kali (frekuensi)", examples: [{ jp: "週に一回", kana: "しゅうにいっかい", id: "Satu kali seminggu." }] },
  { character: "害", kana: "がい", romaji: "gai", meaning: "kerugian / bahaya", examples: [{ jp: "害を与える", kana: "がいをあたえる", id: "Memberikan bahaya." }] },
  { character: "会員", kana: "かいいん", romaji: "kaiin", meaning: "anggota", examples: [{ jp: "スポーツクラブの会員", kana: "スポーツクラブのかいいん", id: "Anggota klub olahraga." }] },
  { character: "絵画", kana: "かいが", romaji: "kaiga", meaning: "lukisan", examples: [{ jp: "絵画の展覧会", kana: "かいがのてんらんかい", id: "Pameran lukisan." }] },
  { character: "海外", kana: "かいがい", romaji: "kaigai", meaning: "luar negeri", examples: [{ jp: "海外旅行に行く", kana: "かいがいりょこうにいく", id: "Pergi bepergian ke luar negeri." }] },
  { character: "会計", kana: "かいけい", romaji: "kaikei", meaning: "akuntansi / pembayaran", examples: [{ jp: "会計をお願いします", kana: "かいけいをおねがいします", id: "Tolong tagihannya (saat bayar)." }] },
  { character: "解決", kana: "かいけつ", romaji: "kaiketsu", meaning: "penyelesaian (masalah)", examples: [{ jp: "問題が解決する", kana: "もんだいがかいけつする", id: "Masalahnya terselesaikan." }] },
  { character: "会合", kana: "かいごう", romaji: "kaigou", meaning: "pertemuan", examples: [{ jp: "会合を開く", kana: "かいごうをひらく", id: "Mengadakan pertemuan." }] },
  { character: "外交", kana: "がいこう", romaji: "gaikou", meaning: "diplomasi", examples: [{ jp: "外交問題", kana: "がいこうもんだい", id: "Masalah diplomasi." }] },
  { character: "開始", kana: "かいし", romaji: "kaishi", meaning: "permulaan", examples: [{ jp: "試合を開始する", kana: "しあいをかいしする", id: "Memulai pertandingan." }] },
  { character: "解釈", kana: "かいしゃく", romaji: "kaishaku", meaning: "interpretasi / tafsiran", examples: [{ jp: "意味を解釈する", kana: "いみをかいしゃくする", id: "Menafsirkan makna." }] },
  { character: "外出", kana: "がいしゅつ", romaji: "gaishutsu", meaning: "pergi keluar", examples: [{ jp: "外出を控える", kana: "がいしゅつをひかえる", id: "Menahan diri untuk tidak pergi keluar." }] },
  { character: "改善", kana: "かいぜん", romaji: "kaizen", meaning: "perbaikan / peningkatan", examples: [{ jp: "サービスを改善する", kana: "サービスをかいぜんする", id: "Memperbaiki layanan." }] },
  { character: "快適", kana: "かいてき", romaji: "kaiteki", meaning: "nyaman", examples: [{ jp: "快適な部屋", kana: "かいてきなへや", id: "Kamar yang nyaman." }] },
  { character: "回復", kana: "かいふく", romaji: "kaifuku", meaning: "pemulihan", examples: [{ jp: "病気が回復する", kana: "びょうきがかいふくする", id: "Penyakitnya pulih." }] },
  { character: "飼う", kana: "かう", romaji: "kau", meaning: "memelihara (hewan)", examples: [{ jp: "犬を飼う", kana: "いぬをかう", id: "Memelihara anjing." }] },
  { character: "替える", kana: "かえる", romaji: "kaeru", meaning: "mengganti", examples: [{ jp: "電池を替える", kana: "でんちをかえる", id: "Mengganti baterai." }] },
  { character: "換える", kana: "かえる", romaji: "kaeru", meaning: "menukar", examples: [{ jp: "円をドルに換える", kana: "えんをドルにかえる", id: "Menukar Yen ke Dolar." }] },
  { character: "香り", kana: "かおり", romaji: "kaori", meaning: "aroma", examples: [{ jp: "花の香りがする", kana: "はなのかおりがする", id: "Tercium aroma bunga." }] },
  { character: "画家", kana: "がか", romaji: "gaka", meaning: "pelukis", examples: [{ jp: "有名な画家", kana: "ゆうめいながか", id: "Pelukis yang terkenal." }] },
  { character: "抱える", kana: "かかえる", romaji: "kakaeru", meaning: "mendekap / menanggung", examples: [{ jp: "荷物を抱える", kana: "にもつをかかえる", id: "Mendekap barang bawaan." }] },
  { character: "価格", kana: "かかく", romaji: "kakaku", meaning: "harga", examples: [{ jp: "価格が上がる", kana: "かかくがあがる", id: "Harga naik." }] },
  { character: "化学", kana: "かがく", romaji: "kagaku", meaning: "ilmu kimia", examples: [{ jp: "化学の実験", kana: "かがくのじっけん", id: "Eksperimen kimia." }] },
  { character: "輝く", kana: "かがやく", romaji: "kagayaku", meaning: "bersinar", examples: [{ jp: "星が輝く", kana: "ほしがかがやく", id: "Bintang bersinar." }] },
  { character: "係", kana: "かかり", romaji: "kakari", meaning: "petugas / penanggung jawab", examples: [{ jp: "案内係", kana: "あんないがかり", id: "Petugas informasi." }] },
  { character: "掛かる", kana: "かかる", romaji: "kakaru", meaning: "tergantung / memakan (waktu/biaya)", examples: [{ jp: "時間が掛かる", kana: "じかんがかかる", id: "Memakan waktu." }] },
  { character: "罹る", kana: "かかる", romaji: "kakaru", meaning: "menderita (penyakit)", examples: [{ jp: "病気に罹る", kana: "びょうきにかかる", id: "Menderita penyakit." }] },
  { character: "鍵", kana: "かぎ", romaji: "kagi", meaning: "kunci", examples: [{ jp: "鍵をかける", kana: "かぎをかける", id: "Mengunci." }] },
  { character: "限る", kana: "かぎる", romaji: "kagiru", meaning: "membatasi", examples: [{ jp: "参加者を限る", kana: "さんかしゃをかぎる", id: "Membatasi peserta." }] },
  { character: "描く", kana: "かく", romaji: "kaku", meaning: "menggambar / melukis", examples: [{ jp: "絵を描く", kana: "えをかく", id: "Menggambar lukisan." }] },
  { character: "家具", kana: "かぐ", romaji: "kagu", meaning: "perabot rumah", examples: [{ jp: "家具を買う", kana: "かぐをかう", id: "Membeli perabot." }] },
  { character: "学", kana: "がく", romaji: "gaku", meaning: "ilmu", examples: [{ jp: "学を修める", kana: "がくをおさめる", id: "Mempelajari ilmu." }] },
  { character: "額", kana: "がく", romaji: "gaku", meaning: "bingkai / jumlah uang", examples: [{ jp: "絵を額に入れる", kana: "えをがくにいれる", id: "Memasukkan lukisan ke dalam bingkai." }] },
  { character: "覚悟", kana: "かくご", romaji: "kakugo", meaning: "kesiapan mental", examples: [{ jp: "覚悟を決める", kana: "かくごをきめる", id: "Memantapkan kesiapan mental." }] },
  { character: "確実", kana: "かくじつ", romaji: "kakujitsu", meaning: "pasti", examples: [{ jp: "確実な情報", kana: "かくじつなじょうほう", id: "Informasi yang pasti." }] },
  { character: "学者", kana: "がくしゃ", romaji: "gakusha", meaning: "ilmuwan / sarjana", examples: [{ jp: "有名な学者", kana: "ゆうめいながくしゃ", id: "Ilmuwan terkenal." }] },
  { character: "学習", kana: "がくしゅう", romaji: "gakushuu", meaning: "pembelajaran", examples: [{ jp: "日本語の学習", kana: "にほんごのがくしゅう", id: "Pembelajaran bahasa Jepang." }] },
  { character: "隠す", kana: "かくす", romaji: "kakusu", meaning: "menyembunyikan", examples: [{ jp: "秘密を隠す", kana: "ひみつをかくす", id: "Menyembunyikan rahasia." }] },
  { character: "拡大", kana: "かくだい", romaji: "kakudai", meaning: "perluasan", examples: [{ jp: "写真を拡大する", kana: "しゃしんをかくだいする", id: "Memperbesar foto." }] },
  { character: "確認", kana: "かくにん", romaji: "kakunin", meaning: "konfirmasi / pengecekan", examples: [{ jp: "予定を確認する", kana: "よていをかくにんする", id: "Mengecek rencana." }] },
  { character: "学問", kana: "がくもん", romaji: "gakumon", meaning: "studi / keilmuan", examples: [{ jp: "学問を究める", kana: "がくもんをきわめる", id: "Mendalami keilmuan." }] },
  { character: "隠れる", kana: "かくれる", romaji: "kakureru", meaning: "bersembunyi", examples: [{ jp: "ドアの裏に隠れる", kana: "ドアのうらにかくれる", id: "Bersembunyi di balik pintu." }] },
  { character: "影", kana: "かげ", romaji: "kage", meaning: "bayangan", examples: [{ jp: "影ができる", kana: "かげができる", id: "Terbentuk bayangan." }] },
  { character: "陰", kana: "かげ", romaji: "kage", meaning: "naungan / tempat teduh", examples: [{ jp: "木の陰で休む", kana: "きのかげでやすむ", id: "Beristirahat di bawah naungan pohon." }] },
  { character: "欠ける", kana: "かける", romaji: "kakeru", meaning: "retak / kurang", examples: [{ jp: "歯が欠ける", kana: "はがかける", id: "Giginya retak/patah sedikit." }] },
  { character: "加減", kana: "かげん", romaji: "kagen", meaning: "kadar / kondisi", examples: [{ jp: "お湯の加減", kana: "おゆのかげん", id: "Suhu air panasnya." }] },
  { character: "過去", kana: "かこ", romaji: "kako", meaning: "masa lalu", examples: [{ jp: "過去の出来事", kana: "かこのできごと", id: "Kejadian masa lalu." }] },
  { character: "籠", kana: "かご", romaji: "kago", meaning: "keranjang", examples: [{ jp: "籠に果物を入れる", kana: "かごにくだものをいれる", id: "Memasukkan buah ke dalam keranjang." }] },
  { character: "囲む", kana: "かこむ", romaji: "kakomu", meaning: "mengelilingi", examples: [{ jp: "テーブルを囲む", kana: "テーブルをかこむ", id: "Mengelilingi meja." }] },
  { character: "火災", kana: "かさい", romaji: "kasai", meaning: "kebakaran", examples: [{ jp: "火災が発生する", kana: "かさいがはっせいする", id: "Terjadi kebakaran." }] },
  { character: "貸し", kana: "かし", romaji: "kashi", meaning: "pinjaman (yang diberikan)", examples: [{ jp: "貸しがある", kana: "かしがある", id: "Ada pinjaman (dia berutang padaku)." }] },
  { character: "菓子", kana: "かし", romaji: "kashi", meaning: "kue / camilan", examples: [{ jp: "お菓子を食べる", kana: "おかしをたべる", id: "Makan camilan." }] },
  { character: "家事", kana: "かじ", romaji: "kaji", meaning: "pekerjaan rumah tangga", examples: [{ jp: "家事をする", kana: "かじをする", id: "Melakukan pekerjaan rumah." }] },
  { character: "賢い", kana: "かしこい", romaji: "kashikoi", meaning: "pintar / bijak", examples: [{ jp: "賢い犬", kana: "かしこいいぬ", id: "Anjing yang pintar." }] },
  { character: "歌手", kana: "かしゅ", romaji: "kashu", meaning: "penyanyi", examples: [{ jp: "有名な歌手", kana: "ゆうめいなかしゅ", id: "Penyanyi terkenal." }] },
  { character: "数", kana: "かず", romaji: "kazu", meaning: "jumlah / angka", examples: [{ jp: "数が多い", kana: "かずがおおい", id: "Jumlahnya banyak." }] },
  { character: "稼ぐ", kana: "かせぐ", romaji: "kasegu", meaning: "mendapatkan uang", examples: [{ jp: "お金を稼ぐ", kana: "おかねをかせぐ", id: "Mendapatkan uang." }] },
  { character: "数える", kana: "かぞえる", romaji: "kazoeru", meaning: "menghitung", examples: [{ jp: "人数を数える", kana: "にんずうをかぞえる", id: "Menghitung jumlah orang." }] },
  { character: "型", kana: "かた", romaji: "kata", meaning: "tipe / model", examples: [{ jp: "新しい型の車", kana: "あたらしいかたのくるま", id: "Mobil model baru." }] },
  { character: "肩", kana: "かた", romaji: "kata", meaning: "pundak / bahu", examples: [{ jp: "肩が痛い", kana: "かたがいたい", id: "Bahunya sakit." }] },
  { character: "固い", kana: "かたい", romaji: "katai", meaning: "keras / teguh", examples: [{ jp: "固い約束", kana: "かたいやくそく", id: "Janji yang teguh." }] },
  { character: "堅い", kana: "かたい", romaji: "katai", meaning: "keras / kaku", examples: [{ jp: "堅い木", kana: "かたいき", id: "Kayu yang keras." }] },
  { character: "形", kana: "かたち", romaji: "katachi", meaning: "bentuk", examples: [{ jp: "丸い形", kana: "まるいかたち", id: "Bentuk bulat." }] },
  { character: "片道", kana: "かたみち", romaji: "katamichi", meaning: "perjalanan satu arah (one-way)", examples: [{ jp: "片道の切符", kana: "かたみちのきっぷ", id: "Tiket satu arah." }] },
  { character: "傾く", kana: "かたむく", romaji: "katamuku", meaning: "miring / condong", examples: [{ jp: "家が傾く", kana: "いえがかたむく", id: "Rumahnya miring." }] },
  { character: "語る", kana: "かたる", romaji: "kataru", meaning: "bercerita", examples: [{ jp: "昔の思い出を語る", kana: "むかしのおもいでをかたる", id: "Bercerita kenangan masa lalu." }] },
  { character: "勝ち", kana: "かち", romaji: "kachi", meaning: "kemenangan", examples: [{ jp: "私たちの勝ちだ", kana: "わたしたちのかちだ", id: "Itu kemenangan kita." }] },
  { character: "価値", kana: "かち", romaji: "kachi", meaning: "nilai", examples: [{ jp: "価値がある", kana: "かちがある", id: "Ada nilainya." }] },
  { character: "活気", kana: "かっき", romaji: "kakki", meaning: "kegembiraan / keramaian", examples: [{ jp: "活気がある町", kana: "かっきがあるまち", id: "Kota yang ramai (hidup)." }] },
  { character: "楽器", kana: "がっき", romaji: "gakki", meaning: "alat musik", examples: [{ jp: "楽器を演奏する", kana: "がっきをえんそうする", id: "Memainkan alat musik." }] },
  { character: "学期", kana: "がっき", romaji: "gakki", meaning: "semester", examples: [{ jp: "新しい学期が始まる", kana: "あたらしいがっきがはじまる", id: "Semester baru dimulai." }] },
  { character: "格好", kana: "かっこう", romaji: "kakkou", meaning: "penampilan / wujud", examples: [{ jp: "格好がいい", kana: "かっこうがいい", id: "Penampilannya bagus (keren)." }] },
  { character: "活動", kana: "かつどう", romaji: "katsudou", meaning: "aktivitas", examples: [{ jp: "クラブの活動", kana: "クラブのかつどう", id: "Aktivitas klub." }] },
  { character: "活用", kana: "かつよう", romaji: "katsuyou", meaning: "pemanfaatan / penggunaan", examples: [{ jp: "知識を活用する", kana: "ちしきをかつようする", id: "Memanfaatkan pengetahuan." }] },
  { character: "悲しむ", kana: "かなしむ", romaji: "kanashimu", meaning: "bersedih", examples: [{ jp: "友達の死を悲しむ", kana: "ともだちのしをかなしむ", id: "Merasakan kesedihan atas kematian teman." }] },
  { character: "必ずしも", kana: "かならずしも", romaji: "kanarazushimo", meaning: "belum tentu", examples: [{ jp: "必ずしもそうではない", kana: "かならずしもそうではない", id: "Belum tentu seperti itu." }] },
  { character: "かなり", kana: "かなり", romaji: "kanari", meaning: "lumayan", examples: [{ jp: "今日はかなり暑い", kana: "きょうはかなりあつい", id: "Hari ini lumayan panas." }] },
  { character: "金", kana: "かね", romaji: "kane", meaning: "uang", examples: [{ jp: "金がない", kana: "かねがない", id: "Tidak ada uang." }] },
  { character: "金持ち", kana: "かねもち", romaji: "kanemochi", meaning: "orang kaya", examples: [{ jp: "彼は金持ちだ", kana: "かれはかねもちだ", id: "Dia orang kaya." }] },
  { character: "可能", kana: "かのう", romaji: "kanou", meaning: "mungkin / kemungkinan", examples: [{ jp: "それは可能ですか", kana: "それはかのうですか", id: "Apakah itu mungkin?" }] },
  { character: "株", kana: "かぶ", romaji: "kabu", meaning: "saham", examples: [{ jp: "株を買う", kana: "かぶをかう", id: "Membeli saham." }] },
  { character: "被る", kana: "かぶる", romaji: "kaburu", meaning: "memakai (di kepala)", examples: [{ jp: "帽子を被る", kana: "ぼうしをかぶる", id: "Memakai topi." }] },
  { character: "構う", kana: "かまう", romaji: "kamau", meaning: "memperdulikan / mempedulikan", examples: [{ jp: "構わないでください", kana: "かまわないでください", id: "Tolong jangan pedulikan (biarkan saja)." }] },
  { character: "我慢", kana: "がまん", romaji: "gaman", meaning: "kesabaran / menahan diri", examples: [{ jp: "痛みを我慢する", kana: "いたみをがまんする", id: "Menahan rasa sakit." }] },
  { character: "神", kana: "かみ", romaji: "kami", meaning: "Dewa / Tuhan", examples: [{ jp: "神に祈る", kana: "かみにいのる", id: "Berdoa kepada Tuhan." }] },
  { character: "雷", kana: "かみなり", romaji: "kaminari", meaning: "petir / guntur", examples: [{ jp: "雷が鳴る", kana: "かみなりがなる", id: "Guntur bergemuruh." }] },
  { character: "髪の毛", kana: "かみのけ", romaji: "kaminoke", meaning: "rambut (di kepala)", examples: [{ jp: "髪の毛が抜ける", kana: "かみのけがぬける", id: "Rambutnya rontok." }] },
  { character: "科目", kana: "かもく", romaji: "kamoku", meaning: "mata pelajaran", examples: [{ jp: "好きな科目", kana: "すきなかもく", id: "Mata pelajaran kesukaan." }] },
  { character: "かもしれない", kana: "かもしれない", romaji: "kamoshirenai", meaning: "mungkin saja", examples: [{ jp: "明日は雨かもしれない", kana: "あしたはあめかもしれない", id: "Mungkin besok hujan." }] },
  { character: "空", kana: "から", romaji: "kara", meaning: "kosong", examples: [{ jp: "箱は空だ", kana: "はこはからだ", id: "Kotaknya kosong." }] },
  { character: "柄", kana: "がら", romaji: "gara", meaning: "motif / pola", examples: [{ jp: "花柄の服", kana: "はながらのふく", id: "Baju motif bunga." }] },
  { character: "刈る", kana: "かる", romaji: "karu", meaning: "memotong / mencukur (rumput, dll)", examples: [{ jp: "庭の草を刈る", kana: "にわのくさをかる", id: "Memotong rumput di halaman." }] },
  { character: "彼等", kana: "かれら", romaji: "karera", meaning: "mereka (laki-laki/campuran)", examples: [{ jp: "彼らは学生です", kana: "かれらはがくせいです", id: "Mereka adalah siswa." }] },
  { character: "川", kana: "かわ", romaji: "kawa", meaning: "sungai", examples: [{ jp: "川で泳ぐ", kana: "かわでおよぐ", id: "Berenang di sungai." }] },
  { character: "皮", kana: "かわ", romaji: "kawa", meaning: "kulit (buah/hewan)", examples: [{ jp: "りんごの皮をむく", kana: "りんごのかわをむく", id: "Mengupas kulit apel." }] },
  { character: "革", kana: "かわ", romaji: "kawa", meaning: "kulit (bahan)", examples: [{ jp: "革の靴", kana: "かわのくつ", id: "Sepatu kulit." }] },
  { character: "かわいそう", kana: "かわいそう", romaji: "kawaisou", meaning: "kasihan", examples: [{ jp: "かわいそうな犬", kana: "かわいそうないぬ", id: "Anjing yang kasihan." }] },
  { character: "かわいらしい", kana: "かわいらしい", romaji: "kawairashii", meaning: "manis / imut", examples: [{ jp: "かわいらしい人形", kana: "かわいらしいにんぎょう", id: "Boneka yang imut." }] },
  { character: "代わる", kana: "かわる", romaji: "kawaru", meaning: "menggantikan", examples: [{ jp: "社長に代わる", kana: "しゃちょうにかわる", id: "Menggantikan posisi direktur." }] },
  { character: "感覚", kana: "かんかく", romaji: "kankaku", meaning: "indra / perasaan", examples: [{ jp: "感覚が鋭い", kana: "かんかくがするどい", id: "Indranya tajam." }] }
];

console.log("Membaca file characters.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let data = JSON.parse(rawdata);

let injectedCount = 0;

if (data.vocabulary_n4) {
  const existingWords = data.vocabulary_n4.map(v => v.character);
  const validCandidates = candidateWords.filter(c => !existingWords.includes(c.character));
  
  console.log(`Ditemukan ${validCandidates.length} kandidat valid yang belum ada di database.`);

  let candidateIndex = 0;
  
  for (let i = 0; i < data.vocabulary_n4.length; i++) {
    const vocab = data.vocabulary_n4[i];
    if (vocab.character.startsWith("語彙N4-") && candidateIndex < validCandidates.length) {
      const newWord = validCandidates[candidateIndex];
      
      vocab.character = newWord.character;
      vocab.kana = newWord.kana;
      vocab.romaji = newWord.romaji;
      vocab.meaning = newWord.meaning;
      vocab.examples = newWord.examples;
      
      injectedCount++;
      candidateIndex++;
    }
  }
}

const remainingPlaceholders = data.vocabulary_n4.filter(v => v.character.startsWith("語彙N4-")).length;

console.log(`Berhasil mengganti ${injectedCount} placeholder dengan kosakata N4 asli.`);
console.log(`Sisa placeholder N4: ${remainingPlaceholders}`);

if (injectedCount > 0) {
  console.log("Menyimpan ke file characters.json...");
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log("✅ Update file sukses!");
} else {
  console.log("⚠️ Tidak ada placeholder yang diganti.");
}
