import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

// Kumpulan 300+ kata-kata N3/N4 lanjutan untuk menghindari duplikasi
const candidateWords = [
  { character: "愛", kana: "あい", romaji: "ai", meaning: "cinta", examples: [{ jp: "家族への愛", kana: "かぞくへのあい", id: "Cinta kepada keluarga." }] },
  { character: "愛情", kana: "あいじょう", romaji: "aijou", meaning: "kasih sayang", examples: [{ jp: "愛情を注ぐ", kana: "あいじょうをそそぐ", id: "Mencurahkan kasih sayang." }] },
  { character: "合図", kana: "あいず", romaji: "aizu", meaning: "isyarat / tanda", examples: [{ jp: "合図を送る", kana: "あいずをおくる", id: "Mengirim isyarat." }] },
  { character: "愛する", kana: "あいする", romaji: "aisuru", meaning: "mencintai", examples: [{ jp: "平和を愛する", kana: "へいわをあいする", id: "Mencintai perdamaian." }] },
  { character: "相手", kana: "あいて", romaji: "aite", meaning: "lawan / pasangan", examples: [{ jp: "結婚の相手", kana: "けっこんのあいて", id: "Pasangan pernikahan." }] },
  { character: "あいにく", kana: "あいにく", romaji: "ainiku", meaning: "sayangnya", examples: [{ jp: "あいにく留守です", kana: "あいにくるすです", id: "Sayangnya sedang tidak ada di rumah." }] },
  { character: "明かり", kana: "あかり", romaji: "akari", meaning: "cahaya / lampu", examples: [{ jp: "明かりをつける", kana: "あかりをつける", id: "Menyalakan lampu." }] },
  { character: "空き", kana: "あき", romaji: "aki", meaning: "kekosongan / ruang kosong", examples: [{ jp: "空き部屋", kana: "あきべや", id: "Kamar kosong." }] },
  { character: "明らか", kana: "あきらか", romaji: "akiraka", meaning: "jelas / nyata", examples: [{ jp: "理由が明らかになる", kana: "りゆうがあきらかになる", id: "Alasannya menjadi jelas." }] },
  { character: "諦める", kana: "あきらめる", romaji: "akirameru", meaning: "menyerah", examples: [{ jp: "夢を諦めない", kana: "ゆめをあきらめない", id: "Tidak menyerah pada mimpi." }] },
  { character: "飽きる", kana: "あきる", romaji: "akiru", meaning: "bosan", examples: [{ jp: "毎日の仕事に飽きる", kana: "まいにちのしごとにあきる", id: "Bosan dengan pekerjaan setiap hari." }] },
  { character: "握手", kana: "あくしゅ", romaji: "akushu", meaning: "jabat tangan", examples: [{ jp: "社長と握手する", kana: "しゃちょうとあくしゅする", id: "Berjabat tangan dengan direktur." }] },
  { character: "悪魔", kana: "あくま", romaji: "akuma", meaning: "iblis", examples: [{ jp: "悪魔のような人", kana: "あくまのようなひと", id: "Orang yang seperti iblis." }] },
  { character: "明ける", kana: "あける", romaji: "akeru", meaning: "berakhir / mulai terang", examples: [{ jp: "夜が明ける", kana: "よがあける", id: "Malam telah berganti fajar." }] },
  { character: "預ける", kana: "あずける", romaji: "azukeru", meaning: "menitipkan", examples: [{ jp: "銀行にお金を預ける", kana: "ぎんこうにおかねをあずける", id: "Menitipkan uang di bank." }] },
  { character: "汗", kana: "あせ", romaji: "ase", meaning: "keringat", examples: [{ jp: "汗をかく", kana: "あせをかく", id: "Berkeringat." }] },
  { character: "与える", kana: "あたえる", romaji: "ataeru", meaning: "memberikan", examples: [{ jp: "餌を与える", kana: "えさをあたえる", id: "Memberi makan (hewan)." }] },
  { character: "辺り", kana: "あたり", romaji: "atari", meaning: "sekitar", examples: [{ jp: "辺りを見回す", kana: "あたりをみまわす", id: "Melihat-lihat sekitar." }] },
  { character: "当たる", kana: "あたる", romaji: "ataru", meaning: "terkena / menang undian", examples: [{ jp: "宝くじに当たる", kana: "たからくじにあたる", id: "Menang lotre." }] },
  { character: "あちこち", kana: "あちこち", romaji: "achikochi", meaning: "di sana-sini", examples: [{ jp: "あちこち探す", kana: "あちこちさがす", id: "Mencari di sana-sini." }] },
  { character: "扱う", kana: "あつかう", romaji: "atsukau", meaning: "menangani", examples: [{ jp: "大切に扱う", kana: "たいせつにあつかう", id: "Menangani dengan hati-hati." }] },
  { character: "集まり", kana: "あつまり", romaji: "atsumari", meaning: "perkumpulan", examples: [{ jp: "家族の集まり", kana: "かぞくのあつまり", id: "Perkumpulan keluarga." }] },
  { character: "当てる", kana: "あてる", romaji: "ateru", meaning: "menebak / mengenai", examples: [{ jp: "答えを当てる", kana: "こたえをあてる", id: "Menebak jawaban." }] },
  { character: "跡", kana: "あと", romaji: "ato", meaning: "jejak / bekas", examples: [{ jp: "足跡を残す", kana: "あしあとをのこす", id: "Meninggalkan jejak kaki." }] },
  { character: "穴", kana: "あな", romaji: "ana", meaning: "lubang", examples: [{ jp: "壁に穴を開ける", kana: "かべにあなをあける", id: "Membuat lubang di dinding." }] },
  { character: "浴びる", kana: "あびる", romaji: "abiru", meaning: "mandi / disinari", examples: [{ jp: "太陽の光を浴びる", kana: "たいようのひかりをあびる", id: "Disinari cahaya matahari." }] },
  { character: "油", kana: "あぶら", romaji: "abura", meaning: "minyak", examples: [{ jp: "油で揚げる", kana: "あぶらであげる", id: "Menggoreng dengan minyak." }] },
  { character: "余り", kana: "あまり", romaji: "amari", meaning: "sisa", examples: [{ jp: "ご飯の余り", kana: "ごはんのあまり", id: "Sisa nasi." }] },
  { character: "誤る", kana: "あやまる", romaji: "ayamaru", meaning: "berbuat salah", examples: [{ jp: "判断を誤る", kana: "はんだんをあやまる", id: "Salah mengambil keputusan." }] },
  { character: "粗い", kana: "あらい", romaji: "arai", meaning: "kasar", examples: [{ jp: "肌が粗い", kana: "はだがあらい", id: "Kulitnya kasar." }] },
  { character: "嵐", kana: "あらし", romaji: "arashi", meaning: "badai", examples: [{ jp: "嵐が来る", kana: "あらしがくる", id: "Badai akan datang." }] },
  { character: "新た", kana: "あらた", romaji: "arata", meaning: "baru", examples: [{ jp: "新たな出発", kana: "あらたなしゅっぱつ", id: "Awal yang baru." }] },
  { character: "あらゆる", kana: "あらゆる", romaji: "arayuru", meaning: "segala / semua", examples: [{ jp: "あらゆる可能性", kana: "あらゆるかのうせい", id: "Segala kemungkinan." }] },
  { character: "表す", kana: "あらわす", romaji: "arawasu", meaning: "menunjukkan / mengekspresikan", examples: [{ jp: "感謝を表す", kana: "かんしゃをあらわす", id: "Mengekspresikan rasa terima kasih." }] },
  { character: "現す", kana: "あらわす", romaji: "arawasu", meaning: "memperlihatkan diri", examples: [{ jp: "姿を現す", kana: "すがたをあらわす", id: "Memperlihatkan sosoknya." }] },
  { character: "現れる", kana: "あらわれる", romaji: "arawareru", meaning: "muncul", examples: [{ jp: "星が現れる", kana: "ほしがあらわれる", id: "Bintang muncul." }] },
  { character: "ありがとう", kana: "ありがとう", romaji: "arigatou", meaning: "terima kasih", examples: [{ jp: "本当にありがとう", kana: "ほんとうにありがとう", id: "Benar-benar terima kasih." }] },
  { character: "有る", kana: "ある", romaji: "aru", meaning: "ada / memiliki", examples: [{ jp: "時間がある", kana: "じかんがある", id: "Ada waktu." }] },
  { character: "或いは", kana: "あるいは", romaji: "aruiha", meaning: "atau", examples: [{ jp: "これ、或いはそれ", kana: "これ、あるいはそれ", id: "Ini, atau itu." }] },
  { character: "泡", kana: "あわ", romaji: "awa", meaning: "busa / gelembung", examples: [{ jp: "石鹸の泡", kana: "せっけんのあわ", id: "Busa sabun." }] },
  { character: "合わせる", kana: "あわせる", romaji: "awaseru", meaning: "menyatukan / menyesuaikan", examples: [{ jp: "力を合わせる", kana: "ちからをあわせる", id: "Menyatukan kekuatan." }] },
  { character: "哀れ", kana: "あわれ", romaji: "aware", meaning: "kasihan / malang", examples: [{ jp: "哀れな犬", kana: "あわれないぬ", id: "Anjing yang malang." }] },
  { character: "案", kana: "あん", romaji: "an", meaning: "ide / rencana", examples: [{ jp: "新しい案を出す", kana: "あたらしいあんをだす", id: "Mengeluarkan ide baru." }] },
  { character: "暗記", kana: "あんき", romaji: "anki", meaning: "hafalan", examples: [{ jp: "単語を暗記する", kana: "たんごをあんきする", id: "Menghafal kosakata." }] },
  { character: "安定", kana: "あんてい", romaji: "antei", meaning: "kestabilan", examples: [{ jp: "生活が安定する", kana: "せいかつがあんていする", id: "Kehidupan menjadi stabil." }] },
  { character: "胃", kana: "い", romaji: "i", meaning: "lambung / perut", examples: [{ jp: "胃が痛い", kana: "いがいたい", id: "Lambung terasa sakit." }] },
  { character: "委員", kana: "いいん", romaji: "iin", meaning: "anggota komite", examples: [{ jp: "委員に選ばれる", kana: "いいんにえらばれる", id: "Terpilih menjadi anggota komite." }] },
  { character: "言う", kana: "いう", romaji: "iu", meaning: "berkata", examples: [{ jp: "本当のことを言う", kana: "ほんとうのことをいう", id: "Berkata yang sebenarnya." }] },
  { character: "意外", kana: "いがい", romaji: "igai", meaning: "tidak terduga", examples: [{ jp: "意外な結果", kana: "いがいなけっか", id: "Hasil yang tidak terduga." }] },
  { character: "行き", kana: "いき", romaji: "iki", meaning: "perjalanan pergi", examples: [{ jp: "東京行きの電車", kana: "とうきょういきのでんしゃ", id: "Kereta menuju Tokyo." }] },
  { character: "息", kana: "いき", romaji: "iki", meaning: "napas", examples: [{ jp: "息を吸う", kana: "いきをすう", id: "Menarik napas." }] },
  { character: "勢い", kana: "いきおい", romaji: "ikioi", meaning: "kekuatan / momentum", examples: [{ jp: "勢いがいい", kana: "いきおいがいい", id: "Momentumnya bagus." }] },
  { character: "生き物", kana: "いきもの", romaji: "ikimono", meaning: "makhluk hidup", examples: [{ jp: "海の生き物", kana: "うみのいきもの", id: "Makhluk hidup di laut." }] },
  { character: "幾つ", kana: "いくつ", romaji: "ikutsu", meaning: "berapa buah / berapa umur", examples: [{ jp: "おいくつですか", kana: "おいくつですか", id: "Umur berapa?" }] },
  { character: "幾ら", kana: "いくら", romaji: "ikura", meaning: "berapa harga", examples: [{ jp: "いくらですか", kana: "いくらですか", id: "Berapa harganya?" }] },
  { character: "いけない", kana: "いけない", romaji: "ikenai", meaning: "tidak boleh / salah", examples: [{ jp: "それはいけない", kana: "それはいけない", id: "Itu tidak boleh." }] },
  { character: "医師", kana: "いし", romaji: "ishi", meaning: "dokter", examples: [{ jp: "医師に相談する", kana: "いしにそうだんする", id: "Berkonsultasi dengan dokter." }] },
  { character: "意思", kana: "いし", romaji: "ishi", meaning: "niat / kehendak", examples: [{ jp: "意思を伝える", kana: "いしをつたえる", id: "Menyampaikan niat." }] },
  { character: "意志", kana: "いし", romaji: "ishi", meaning: "kemauan / tekad", examples: [{ jp: "意志が強い", kana: "いしがつよい", id: "Tekadnya kuat." }] },
  { character: "維持", kana: "いじ", romaji: "iji", meaning: "pemeliharaan / mempertahankan", examples: [{ jp: "健康を維持する", kana: "けんこうをいじする", id: "Mempertahankan kesehatan." }] },
  { character: "意識", kana: "いしき", romaji: "ishiki", meaning: "kesadaran", examples: [{ jp: "意識がない", kana: "いしきがない", id: "Tidak sadar." }] },
  { character: "異常", kana: "いじょう", romaji: "ijou", meaning: "tidak normal / aneh", examples: [{ jp: "異常な暑さ", kana: "いじょうなあつさ", id: "Panas yang tidak normal." }] },
  { character: "泉", kana: "いずみ", romaji: "izumi", meaning: "mata air", examples: [{ jp: "森の泉", kana: "もりのいずみ", id: "Mata air di hutan." }] },
  { character: "いずれ", kana: "いずれ", romaji: "izure", meaning: "suatu hari nanti / bagaimanapun", examples: [{ jp: "いずれわかる", kana: "いずれわかる", id: "Suatu saat akan mengerti." }] },
  { character: "以前", kana: "いぜん", romaji: "izen", meaning: "sebelumnya", examples: [{ jp: "以前、ここに住んでいました", kana: "いぜん、ここにすんでいました", id: "Sebelumnya, pernah tinggal di sini." }] },
  { character: "板", kana: "いた", romaji: "ita", meaning: "papan", examples: [{ jp: "木の板", kana: "きのいた", id: "Papan kayu." }] },
  { character: "偉大", kana: "いだい", romaji: "idai", meaning: "hebat / agung", examples: [{ jp: "偉大な人物", kana: "いだいなじんぶつ", id: "Tokoh yang hebat." }] },
  { character: "抱く", kana: "いだく", romaji: "idaku", meaning: "memeluk / memendam (perasaan)", examples: [{ jp: "希望を抱く", kana: "きぼうをいだく", id: "Memendam harapan." }] },
  { character: "悪戯", kana: "いたずら", romaji: "itazura", meaning: "nakal / usil", examples: [{ jp: "子供の悪戯", kana: "こどものいたずら", id: "Keusilan anak-anak." }] },
  { character: "頂く", kana: "いただく", romaji: "itadaku", meaning: "menerima / makan (sopan)", examples: [{ jp: "お茶を頂きます", kana: "おちゃをいただきます", id: "Saya menerima teh ini." }] },
  { character: "痛み", kana: "いたみ", romaji: "itami", meaning: "rasa sakit", examples: [{ jp: "痛みを感じる", kana: "いたみを感じる", id: "Merasakan rasa sakit." }] },
  { character: "至る", kana: "いたる", romaji: "itaru", meaning: "mencapai / tiba", examples: [{ jp: "結論に至る", kana: "けつろんにいたる", id: "Mencapai kesimpulan." }] },
  { character: "市庭", kana: "いちば", romaji: "ichiba", meaning: "pasar", examples: [{ jp: "市庭で買い物する", kana: "いちばでかいものする", id: "Berbelanja di pasar." }] },
  { character: "何時", kana: "いつ", romaji: "itsu", meaning: "kapan", examples: [{ jp: "何時来ますか", kana: "いつきますか", id: "Kapan akan datang?" }] },
  { character: "一家", kana: "いっか", romaji: "ikka", meaning: "satu keluarga", examples: [{ jp: "一家で旅行する", kana: "いっかでりょこうする", id: "Bepergian bersama satu keluarga." }] },
  { character: "一種", kana: "いっしゅ", romaji: "isshu", meaning: "sejenis / semacam", examples: [{ jp: "一種の病気", kana: "いっしゅのびょうき", id: "Sejenis penyakit." }] },
  { character: "一瞬", kana: "いっしゅん", romaji: "isshun", meaning: "sekejap", examples: [{ jp: "一瞬の出来事", kana: "いっしゅんのできごと", id: "Kejadian sekejap." }] },
  { character: "一生", kana: "いっしょう", romaji: "isshou", meaning: "seumur hidup", examples: [{ jp: "一生忘れない", kana: "いっしょうわすれない", id: "Tidak akan lupa seumur hidup." }] },
  { character: "一層", kana: "いっそう", romaji: "issou", meaning: "lebih-lebih lagi", examples: [{ jp: "一層努力する", kana: "いっそうどりょくする", id: "Berusaha lebih keras lagi." }] },
  { character: "一体", kana: "いったい", romaji: "ittai", meaning: "sebenarnya (apa)", examples: [{ jp: "一体どうしたの", kana: "いったいどうしたの", id: "Sebenarnya ada apa?" }] },
  { character: "一致", kana: "いっち", romaji: "icchi", meaning: "kecocokan / kesepakatan", examples: [{ jp: "意見が一致する", kana: "いけんがいっちする", id: "Pendapatnya sepakat." }] },
  { character: "いつでも", kana: "いつでも", romaji: "itsudemo", meaning: "kapan saja", examples: [{ jp: "いつでも来てください", kana: "いつでもきてください", id: "Datanglah kapan saja." }] },
  { character: "一般", kana: "いっぱん", romaji: "ippan", meaning: "umum", examples: [{ jp: "一般の人", kana: "いっぱんのひと", id: "Orang umum." }] },
  { character: "一方", kana: "いっぽう", romaji: "ippou", meaning: "sisi lain / sebaliknya", examples: [{ jp: "一方は賛成です", kana: "いっぽうはさんせいです", id: "Di sisi lain, setuju." }] },
  { character: "いつまでも", kana: "いつまでも", romaji: "itsumademo", meaning: "sampai kapan pun", examples: [{ jp: "いつまでも友達だ", kana: "いつまでもともだちだ", id: "Teman sampai kapan pun." }] },
  { character: "移転", kana: "いてん", romaji: "iten", meaning: "pindah lokasi", examples: [{ jp: "事務所を移転する", kana: "じむしょをいてんする", id: "Memindahkan kantor." }] },
  { character: "井戸", kana: "いど", romaji: "ido", meaning: "sumur", examples: [{ jp: "井戸の水", kana: "いどのみず", id: "Air sumur." }] },
  { character: "緯度", kana: "いど", romaji: "ido", meaning: "garis lintang", examples: [{ jp: "緯度が高い", kana: "いどがたかい", id: "Garis lintangnya tinggi." }] },
  { character: "従兄弟", kana: "いとこ", romaji: "itoko", meaning: "sepupu", examples: [{ jp: "従兄弟の結婚式", kana: "いとこのけっこんしき", id: "Pernikahan sepupu." }] },
  { character: "威張る", kana: "いばる", romaji: "ibaru", meaning: "bersikap sombong", examples: [{ jp: "威張っている人", kana: "いばっているひと", id: "Orang yang sombong." }] },
  { character: "嫌", kana: "いや", romaji: "iya", meaning: "tidak suka / enggan", examples: [{ jp: "雨の日は嫌です", kana: "あめのひはいやです", id: "Saya tidak suka hari hujan." }] },
  { character: "嫌がる", kana: "いやがる", romaji: "iyagaru", meaning: "merasa tidak suka", examples: [{ jp: "子供が嫌がる", kana: "こどもがいやがる", id: "Anak merasa tidak suka." }] },
  { character: "いよいよ", kana: "いよいよ", romaji: "iyoiyo", meaning: "akhirnya", examples: [{ jp: "いよいよ出発です", kana: "いよいよしゅっぱつです", id: "Akhirnya berangkat." }] },
  { character: "以来", kana: "いらい", romaji: "irai", meaning: "sejak", examples: [{ jp: "去年以来", kana: "きょねんいらい", id: "Sejak tahun lalu." }] },
  { character: "依頼", kana: "いらい", romaji: "irai", meaning: "permintaan", examples: [{ jp: "仕事を依頼する", kana: "しごとをいらいする", id: "Meminta pekerjaan." }] },
  { character: "苛々", kana: "いらいら", romaji: "iraira", meaning: "kesal / frustrasi", examples: [{ jp: "苛々する", kana: "いらいらする", id: "Merasa kesal." }] },
  { character: "医療", kana: "いりょう", romaji: "iryou", meaning: "perawatan medis", examples: [{ jp: "医療を受ける", kana: "いりょうをうける", id: "Menerima perawatan medis." }] },
  { character: "岩", kana: "いわ", romaji: "iwa", meaning: "batu besar / karang", examples: [{ jp: "岩に座る", kana: "いわにすわる", id: "Duduk di batu besar." }] },
  { character: "祝う", kana: "いわう", romaji: "iwau", meaning: "merayakan", examples: [{ jp: "誕生日を祝う", kana: "たんじょうびをいわう", id: "Merayakan ulang tahun." }] },
  { character: "言わば", kana: "いわば", romaji: "iwaba", meaning: "bisa dibilang", examples: [{ jp: "彼は言わば天才だ", kana: "かれはいわばてんさいだ", id: "Bisa dibilang dia jenius." }] },
  { character: "印刷", kana: "いんさつ", romaji: "insatsu", meaning: "pencetakan (print)", examples: [{ jp: "書類を印刷する", kana: "しょるいをいんさつする", id: "Mencetak dokumen." }] },
  { character: "印象", kana: "いんしょう", romaji: "inshou", meaning: "kesan", examples: [{ jp: "印象に残る", kana: "いんしょうにのこる", id: "Meninggalkan kesan." }] },
  { character: "引退", kana: "いんたい", romaji: "intai", meaning: "pensiun", examples: [{ jp: "選手を引退する", kana: "せんしゅをいんたいする", id: "Pensiun sebagai atlet." }] },
  { character: "引用", kana: "いんよう", romaji: "inyou", meaning: "kutipan", examples: [{ jp: "本から引用する", kana: "ほんからいんようする", id: "Mengutip dari buku." }] },
  { character: "ウーマン", kana: "ウーマン", romaji: "uuman", meaning: "wanita", examples: [{ jp: "キャリアウーマン", kana: "キャリアウーマン", id: "Wanita karir." }] },
  { character: "上", kana: "うえ", romaji: "ue", meaning: "atas", examples: [{ jp: "机の上", kana: "つくえのうえ", id: "Di atas meja." }] },
  { character: "飢える", kana: "うえる", romaji: "ueru", meaning: "kelaparan", examples: [{ jp: "愛に飢える", kana: "あいにうえる", id: "Haus akan cinta." }] },
  { character: "浮かぶ", kana: "うかぶ", romaji: "ukabu", meaning: "mengapung / terbayang", examples: [{ jp: "アイデアが浮かぶ", kana: "アイデアがうかぶ", id: "Terbayang sebuah ide." }] },
  { character: "浮かべる", kana: "うかべる", romaji: "ukaberu", meaning: "mengapungkan", examples: [{ jp: "船を浮かべる", kana: "ふねをうかべる", id: "Mengapungkan perahu." }] },
  { character: "浮く", kana: "うく", romaji: "uku", meaning: "mengambang", examples: [{ jp: "体が浮く", kana: "からだがうく", id: "Badan mengambang." }] },
  { character: "承る", kana: "うけたまわる", romaji: "uketamawaru", meaning: "mendengar / menerima (sangat sopan)", examples: [{ jp: "ご意見を承ります", kana: "ごいけんをうけたまわります", id: "Saya akan mendengarkan pendapat Anda." }] },
  { character: "受取", kana: "うけとり", romaji: "uketori", meaning: "penerimaan / tanda terima", examples: [{ jp: "受取にサインする", kana: "うけとりにサインする", id: "Menandatangani tanda terima." }] },
  { character: "受け取る", kana: "うけとる", romaji: "uketoru", meaning: "menerima", examples: [{ jp: "手紙を受け取る", kana: "てがみをおけとる", id: "Menerima surat." }] },
  { character: "受け持つ", kana: "うけもつ", romaji: "ukemotsu", meaning: "bertanggung jawab atas", examples: [{ jp: "クラスを受け持つ", kana: "クラスをうけもつ", id: "Bertanggung jawab atas sebuah kelas." }] },
  { character: "薄い", kana: "うすい", romaji: "usui", meaning: "tipis", examples: [{ jp: "薄い本", kana: "うすいほん", id: "Buku yang tipis." }] },
  { character: "薄暗い", kana: "うすぐらい", romaji: "usugurai", meaning: "remang-remang", examples: [{ jp: "薄暗い部屋", kana: "うすぐらいへや", id: "Kamar yang remang-remang." }] },
  { character: "薄める", kana: "うすめる", romaji: "usumeru", meaning: "mengencerkan", examples: [{ jp: "水を薄める", kana: "みずをうすめる", id: "Mengencerkan air." }] },
  { character: "嘘", kana: "うそ", romaji: "uso", meaning: "kebohongan", examples: [{ jp: "嘘をつく", kana: "うそをつく", id: "Berbohong." }] },
  { character: "歌う", kana: "うたう", romaji: "utau", meaning: "bernyanyi", examples: [{ jp: "歌を歌う", kana: "うたをうたう", id: "Menyanyikan lagu." }] },
  { character: "疑う", kana: "うたがう", romaji: "utagau", meaning: "mencurigai / meragukan", examples: [{ jp: "彼を疑う", kana: "かれをうたがう", id: "Mencurigai dia." }] },
  { character: "打ち合わせ", kana: "うちあわせ", romaji: "uchiawase", meaning: "pertemuan (meeting ringan)", examples: [{ jp: "明日の打ち合わせ", kana: "あしたのうちあわせ", id: "Pertemuan untuk besok." }] },
  { character: "宇宙", kana: "うちゅう", romaji: "uchuu", meaning: "luar angkasa", examples: [{ jp: "宇宙へ行く", kana: "うちゅうへいく", id: "Pergi ke luar angkasa." }] },
  { character: "撃つ", kana: "うつ", romaji: "utsu", meaning: "menembak", examples: [{ jp: "銃を撃つ", kana: "じゅうをうつ", id: "Menembakkan pistol." }] },
  { character: "映す", kana: "うつす", romaji: "utsusu", meaning: "memproyeksikan / memantulkan", examples: [{ jp: "鏡に映す", kana: "かがみにうつす", id: "Memantulkan di cermin." }] },
  { character: "訴える", kana: "うったえる", romaji: "uttaeru", meaning: "menggugat / mengeluh", examples: [{ jp: "痛みを訴える", kana: "いたみをうったえる", id: "Mengeluhkan rasa sakit." }] },
  { character: "奪う", kana: "うばう", romaji: "ubau", meaning: "merampas", examples: [{ jp: "お金を奪う", kana: "おかねをうばう", id: "Merampas uang." }] },
  { character: "馬", kana: "うま", romaji: "uma", meaning: "kuda", examples: [{ jp: "馬に乗る", kana: "うまにのる", id: "Naik kuda." }] },
  { character: "上手い", kana: "うまい", romaji: "umai", meaning: "pintar / enak", examples: [{ jp: "歌が上手い", kana: "うたがうまい", id: "Pintar bernyanyi." }] },
  { character: "生まれ", kana: "うまれ", romaji: "umare", meaning: "tempat kelahiran", examples: [{ jp: "東京生まれ", kana: "とうきょううまれ", id: "Kelahiran Tokyo." }] },
  { character: "梅", kana: "うめ", romaji: "ume", meaning: "bunga plum", examples: [{ jp: "梅の花", kana: "うめのはな", id: "Bunga plum." }] },
  { character: "埋める", kana: "うめる", romaji: "umeru", meaning: "mengubur / menimbun", examples: [{ jp: "穴を埋める", kana: "あなをうめる", id: "Menimbun lubang." }] },
  { character: "敬う", kana: "うやまう", romaji: "uyamau", meaning: "menghormati", examples: [{ jp: "老人を敬う", kana: "ろうじんをうやまう", id: "Menghormati orang tua." }] },
  { character: "裏返す", kana: "うらがえす", romaji: "uragaesu", meaning: "membalikkan", examples: [{ jp: "カードを裏返す", kana: "カードをうらがえす", id: "Membalikkan kartu." }] },
  { character: "裏切る", kana: "うらぎる", romaji: "uragiru", meaning: "mengkhianati", examples: [{ jp: "友達を裏切る", kana: "ともだちをうらぎる", id: "Mengkhianati teman." }] },
  { character: "恨む", kana: "うらむ", romaji: "uramu", meaning: "menyimpan dendam / membenci", examples: [{ jp: "人を恨む", kana: "ひとをうらむ", id: "Membenci orang." }] },
  { character: "羨ましい", kana: "うらやましい", romaji: "urayamashii", meaning: "iri", examples: [{ jp: "彼が羨ましい", kana: "かれがうらやましい", id: "Saya iri padanya." }] },
  { character: "売上", kana: "うりあげ", romaji: "uriage", meaning: "penjualan / omset", examples: [{ jp: "売上が上がる", kana: "うりあげがあがる", id: "Omset penjualan naik." }] },
  { character: "売り切れ", kana: "うりきれ", romaji: "urikire", meaning: "terjual habis", examples: [{ jp: "チケットは売り切れです", kana: "チケットはうりきれです", id: "Tiketnya terjual habis." }] },
  { character: "売り切れる", kana: "うりきれる", romaji: "urikireru", meaning: "terjual habis", examples: [{ jp: "全部売り切れる", kana: "ぜんぶうりきれる", id: "Semuanya terjual habis." }] },
  { character: "運", kana: "うん", romaji: "un", meaning: "nasib / keberuntungan", examples: [{ jp: "運がいい", kana: "うんがいい", id: "Keberuntungannya bagus." }] },
  { character: "永遠", kana: "えいえん", romaji: "eien", meaning: "keabadian", examples: [{ jp: "永遠の愛", kana: "えいえんのあい", id: "Cinta abadi." }] },
  { character: "永久", kana: "えいきゅう", romaji: "eikyuu", meaning: "permanen / selamanya", examples: [{ jp: "永久に続く", kana: "えいきゅうにつづく", id: "Berlanjut selamanya." }] },
  { character: "影響", kana: "えいきょう", romaji: "eikyou", meaning: "pengaruh", examples: [{ jp: "影響を与える", kana: "えいきょうをあたえる", id: "Memberikan pengaruh." }] },
  { character: "営業", kana: "えいぎょう", romaji: "eigyou", meaning: "bisnis / penjualan", examples: [{ jp: "営業の仕事", kana: "えいぎょうのしごと", id: "Pekerjaan di bidang penjualan (sales)." }] },
  { character: "衛星", kana: "えいせい", romaji: "eisei", meaning: "satelit", examples: [{ jp: "人工衛星", kana: "じんこうえいせい", id: "Satelit buatan." }] },
  { character: "栄養", kana: "えいよう", romaji: "eiyou", meaning: "gizi / nutrisi", examples: [{ jp: "栄養がある", kana: "えいようがある", id: "Bergizi." }] },
  { character: "笑顔", kana: "えがお", romaji: "egao", meaning: "wajah tersenyum", examples: [{ jp: "可愛い笑顔", kana: "かわいいえがお", id: "Wajah tersenyum yang manis." }] },
  { character: "描く", kana: "えがく", romaji: "egaku", meaning: "menggambar", examples: [{ jp: "夢を描く", kana: "ゆめをえがく", id: "Membayangkan/menggambar mimpi." }] },
  { character: "エネルギー", kana: "エネルギー", romaji: "enerugii", meaning: "energi", examples: [{ jp: "エネルギーを節約する", kana: "エネルギーをせつやくする", id: "Menghemat energi." }] },
  { character: "得る", kana: "える", romaji: "eru", meaning: "memperoleh", examples: [{ jp: "知識を得る", kana: "ちしきをえる", id: "Memperoleh pengetahuan." }] },
  { character: "円", kana: "えん", romaji: "en", meaning: "lingkaran / yen", examples: [{ jp: "円を描く", kana: "えんをえがく", id: "Menggambar lingkaran." }] },
  { character: "延期", kana: "えんき", romaji: "enki", meaning: "penundaan", examples: [{ jp: "試合を延期する", kana: "しあいをえんきする", id: "Menunda pertandingan." }] },
  { character: "演技", kana: "えんぎ", romaji: "engi", meaning: "akting", examples: [{ jp: "演技が上手い", kana: "えんぎがうまい", id: "Aktingnya bagus." }] },
  { character: "援助", kana: "えんじょ", romaji: "enjo", meaning: "bantuan", examples: [{ jp: "援助を受ける", kana: "えんじょをうける", id: "Menerima bantuan." }] },
  { character: "演説", kana: "えんぜつ", romaji: "enzetsu", meaning: "pidato", examples: [{ jp: "大統領の演説", kana: "だいとうりょうのえんぜつ", id: "Pidato presiden." }] },
  { character: "演奏", kana: "えんそう", romaji: "ensou", meaning: "pertunjukan musik", examples: [{ jp: "ピアノを演奏する", kana: "ピアノをえんそうする", id: "Memainkan piano." }] },
  { character: "老い", kana: "おい", romaji: "oi", meaning: "usia tua", examples: [{ jp: "老いを感じる", kana: "おいをかんじる", id: "Merasakan usia yang mulai menua." }] },
  { character: "追いかける", kana: "おいかける", romaji: "oikakeru", meaning: "mengejar", examples: [{ jp: "犬を追いかける", kana: "いぬをおいかける", id: "Mengejar anjing." }] },
  { character: "追い越す", kana: "おいこす", romaji: "oikosu", meaning: "menyalip", examples: [{ jp: "前の車を追い越す", kana: "まえのくるまをおいこす", id: "Menyalip mobil di depan." }] },
  { character: "追いつく", kana: "おいつく", romaji: "oitsuku", meaning: "menyusul", examples: [{ jp: "彼に追いつく", kana: "かれにおいつく", id: "Menyusulnya." }] },
  { character: "王", kana: "おう", romaji: "ou", meaning: "raja", examples: [{ jp: "国の王", kana: "くにのおう", id: "Raja negara." }] },
  { character: "追う", kana: "おう", romaji: "ou", meaning: "mengejar", examples: [{ jp: "夢を追う", kana: "ゆめをおう", id: "Mengejar mimpi." }] },
  { character: "応援", kana: "おうえん", romaji: "ouen", meaning: "dukungan / sorakan", examples: [{ jp: "チームを応援する", kana: "チームをおうえんする", id: "Mendukung tim." }] },
  { character: "王女", kana: "おうじょ", romaji: "oujo", meaning: "putri raja", examples: [{ jp: "美しい王女", kana: "うつくしいおうじょ", id: "Putri raja yang cantik." }] },
  { character: "応じる", kana: "おうじる", romaji: "oujiru", meaning: "merespons / menanggapi", examples: [{ jp: "要求に応じる", kana: "ようきゅうにおうじる", id: "Menanggapi permintaan." }] },
  { character: "横断", kana: "おうだん", romaji: "oudan", meaning: "menyeberang", examples: [{ jp: "道路を横断する", kana: "どうろをおうだんする", id: "Menyeberangi jalan." }] },
  { character: "終える", kana: "おえる", romaji: "oeru", meaning: "menyelesaikan", examples: [{ jp: "仕事を終える", kana: "しごとをおえる", id: "Menyelesaikan pekerjaan." }] },
  { character: "大いに", kana: "おおいに", romaji: "ooini", meaning: "sangat banyak", examples: [{ jp: "大いに喜ぶ", kana: "おおいによろこぶ", id: "Sangat bersukacita." }] },
  { character: "大型", kana: "おおがた", romaji: "oogata", meaning: "ukuran besar", examples: [{ jp: "大型テレビ", kana: "おおがたテレビ", id: "Televisi ukuran besar." }] },
  { character: "大通り", kana: "おおどおり", romaji: "oodoori", meaning: "jalan utama", examples: [{ jp: "大通りを歩く", kana: "おおどおりをあるく", id: "Berjalan di jalan utama." }] },
  { character: "大凡", kana: "おおよそ", romaji: "ooyoso", meaning: "kira-kira", examples: [{ jp: "大凡100人", kana: "おおよそひゃくにん", id: "Kira-kira 100 orang." }] },
  { character: "丘", kana: "おか", romaji: "oka", meaning: "bukit", examples: [{ jp: "丘の上に家がある", kana: "おかのうえにいえがある", id: "Ada rumah di atas bukit." }] },
  { character: "沖", kana: "おき", romaji: "oki", meaning: "lepas pantai", examples: [{ jp: "沖に出る", kana: "おきにでる", id: "Pergi ke lepas pantai." }] },
  { character: "奥", kana: "おく", romaji: "oku", meaning: "bagian dalam / belakang", examples: [{ jp: "部屋の奥", kana: "へやのおく", id: "Bagian dalam ruangan." }] },
  { character: "贈る", kana: "おくる", romaji: "okuru", meaning: "menghadiahkan", examples: [{ jp: "花を贈る", kana: "はなをおくる", id: "Menghadiahkan bunga." }] },
  { character: "起こる", kana: "おこる", romaji: "okoru", meaning: "terjadi", examples: [{ jp: "問題が起こる", kana: "もんだいがおこる", id: "Terjadi masalah." }] },
  { character: "幼い", kana: "おさない", romaji: "osanai", meaning: "sangat muda / kekanak-kanakan", examples: [{ jp: "幼い子供", kana: "おさないこども", id: "Anak yang masih kecil." }] },
  { character: "収める", kana: "おさめる", romaji: "osameru", meaning: "memperoleh / memasukkan", examples: [{ jp: "成功を収める", kana: "せいこうをおさめる", id: "Memperoleh kesuksesan." }] },
  { character: "汚染", kana: "おせん", romaji: "osen", meaning: "polusi / pencemaran", examples: [{ jp: "環境汚染", kana: "かんきょうおせん", id: "Pencemaran lingkungan." }] },
  { character: "恐れる", kana: "おそれる", romaji: "osoreru", meaning: "merasa takut", examples: [{ jp: "失敗を恐れるな", kana: "しっぱいをおそれるな", id: "Jangan takut pada kegagalan." }] },
  { character: "恐ろしい", kana: "おそろしい", romaji: "osoroshii", meaning: "mengerikan", examples: [{ jp: "恐ろしい話", kana: "おそろしいはなし", id: "Cerita yang mengerikan." }] },
  { character: "お互い", kana: "おたがい", romaji: "otagai", meaning: "satu sama lain", examples: [{ jp: "お互いに助け合う", kana: "おたがいにたすけあう", id: "Saling membantu satu sama lain." }] },
  { character: "穏やか", kana: "おだやか", romaji: "odayaka", meaning: "tenang / damai", examples: [{ jp: "穏やかな人", kana: "おだやかなひと", id: "Orang yang tenang." }] },
  { character: "男の人", kana: "おとこのひと", romaji: "otokonohito", meaning: "laki-laki", examples: [{ jp: "男の人が走る", kana: "おとこのひとがはしる", id: "Laki-laki berlari." }] },
  { character: "大人しい", kana: "おとなしい", romaji: "otonashii", meaning: "pendiam / penurut", examples: [{ jp: "大人しい犬", kana: "おとなしいいぬ", id: "Anjing yang penurut." }] },
  { character: "各々", kana: "おのおの", romaji: "onoono", meaning: "masing-masing", examples: [{ jp: "各々が意見を言う", kana: "おのおのがいけんをいう", id: "Masing-masing menyampaikan pendapat." }] },
  { character: "帯", kana: "おび", romaji: "obi", meaning: "sabuk kimono (obi)", examples: [{ jp: "帯を結ぶ", kana: "おびをむすぶ", id: "Mengikat obi." }] },
  { character: "お昼", kana: "おひる", romaji: "ohiru", meaning: "siang / makan siang", examples: [{ jp: "お昼を食べる", kana: "おひるをたべる", id: "Makan siang." }] },
  { character: "溺れる", kana: "おぼれる", romaji: "oboreru", meaning: "tenggelam", examples: [{ jp: "海で溺れる", kana: "うみでおぼれる", id: "Tenggelam di laut." }] },
  { character: "思い出", kana: "おもいで", romaji: "omoide", meaning: "kenangan", examples: [{ jp: "子供の頃の思い出", kana: "こどものころのおもいで", id: "Kenangan masa kecil." }] },
  { character: "主に", kana: "おもに", romaji: "omoni", meaning: "terutama", examples: [{ jp: "主に野菜を食べる", kana: "おもにやさいをたべる", id: "Terutama makan sayur." }] },
  { character: "思わず", kana: "おもわず", romaji: "omowazu", meaning: "tanpa sadar", examples: [{ jp: "思わず笑った", kana: "おもわずわらった", id: "Tertawa tanpa sadar." }] },
  { character: "泳ぎ", kana: "およぎ", romaji: "oyogi", meaning: "renang", examples: [{ jp: "泳ぎが得意です", kana: "およぎがとくいです", id: "Pintar berenang." }] },
  { character: "及ぼす", kana: "およぼす", romaji: "oyobosu", meaning: "memberikan (pengaruh)", examples: [{ jp: "影響を及ぼす", kana: "えいきょうをおよぼす", id: "Memberikan pengaruh." }] },
  { character: "居る", kana: "おる", romaji: "oru", meaning: "berada (merendah)", examples: [{ jp: "私はここにおります", kana: "わたしはここにおります", id: "Saya ada di sini." }] },
  { character: "下ろす", kana: "おろす", romaji: "orosu", meaning: "menurunkan / menarik (uang)", examples: [{ jp: "お金を下ろす", kana: "おかねをおろす", id: "Menarik uang (dari bank)." }] },
  { character: "終り", kana: "おわり", romaji: "owari", meaning: "akhir", examples: [{ jp: "映画の終り", kana: "えいがのおわり", id: "Akhir film." }] },
  { character: "音", kana: "おん", romaji: "on", meaning: "suara", examples: [{ jp: "音が聞こえる", kana: "おとがきこえる", id: "Terdengar suara." }] },
  { character: "恩", kana: "おん", romaji: "on", meaning: "budi / kebaikan", examples: [{ jp: "恩を返す", kana: "おんをかえす", id: "Membalas budi." }] },
  { character: "温暖", kana: "おんだん", romaji: "ondan", meaning: "hangat (iklim)", examples: [{ jp: "温暖な気候", kana: "おんだんなきこう", id: "Iklim yang hangat." }] },
  { character: "温度", kana: "おんど", romaji: "ondo", meaning: "suhu", examples: [{ jp: "温度を測る", kana: "おんどをはかる", id: "Mengukur suhu." }] },
  { character: "可", kana: "か", romaji: "ka", meaning: "bisa / boleh", examples: [{ jp: "参加は可です", kana: "さんかはかです", id: "Partisipasi diperbolehkan." }] }
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
  console.log("⚠️ Tidak ada placeholder yang diganti. Mungkin kandidat habis.");
}
