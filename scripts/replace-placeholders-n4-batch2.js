import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

// Menghasilkan daftar kandidat masif (Katakana, N3, dan N4 ekstra)
const candidateWords = [
  // Katakana words
  { character: "アクセス", kana: "アクセス", romaji: "akusesu", meaning: "akses", examples: [{ jp: "インターネットにアクセスします。", kana: "インターネットにアクセスします。", id: "Mengakses internet." }] },
  { character: "アドレス", kana: "アドレス", romaji: "adoresu", meaning: "alamat (email)", examples: [{ jp: "メールアドレスを教えてください。", kana: "メールアドレスをおしえてください。", id: "Tolong beri tahu alamat email Anda." }] },
  { character: "イベント", kana: "イベント", romaji: "ibento", meaning: "acara / event", examples: [{ jp: "週末にイベントがあります。", kana: "しゅうまつにイベントがあります。", id: "Di akhir pekan ada acara." }] },
  { character: "インタビュー", kana: "インタビュー", romaji: "intabyuu", meaning: "wawancara", examples: [{ jp: "テレビのインタビューを受けます。", kana: "テレビのインタビューをうけます。", id: "Menerima wawancara televisi." }] },
  { character: "エンジン", kana: "エンジン", romaji: "enjin", meaning: "mesin", examples: [{ jp: "車のエンジンをかけます。", kana: "くるまのエンジンをかけます。", id: "Menyalakan mesin mobil." }] },
  { character: "オンライン", kana: "オンライン", romaji: "onrain", meaning: "daring / online", examples: [{ jp: "オンラインで買い物をします。", kana: "オンラインでかいものをします。", id: "Berbelanja secara online." }] },
  { character: "カード", kana: "カード", romaji: "kaado", meaning: "kartu", examples: [{ jp: "クレジットカードで払います。", kana: "クレジットカードではらいます。", id: "Membayar dengan kartu kredit." }] },
  { character: "グラス", kana: "グラス", romaji: "gurasu", meaning: "gelas kaca", examples: [{ jp: "グラスに水を注ぎます。", kana: "グラスにみずをそそぎます。", id: "Menuangkan air ke dalam gelas." }] },
  { character: "コピー", kana: "コピー", romaji: "kopii", meaning: "fotokopi / salinan", examples: [{ jp: "書類をコピーします。", kana: "しょるいをコピーします。", id: "Memfotokopi dokumen." }] },
  { character: "サイン", kana: "サイン", romaji: "sain", meaning: "tanda tangan", examples: [{ jp: "ここにサインをお願いします。", kana: "ここにサインをおねがいします。", id: "Tolong tanda tangan di sini." }] },
  { character: "シャワー", kana: "シャワー", romaji: "shawaa", meaning: "pancuran mandi", examples: [{ jp: "シャワーを浴びます。", kana: "シャワーをあびます。", id: "Mandi dengan pancuran (shower)." }] },
  { character: "スイッチ", kana: "スイッチ", romaji: "suicchi", meaning: "saklar", examples: [{ jp: "スイッチを入れます。", kana: "スイッチをいれます。", id: "Menyalakan saklar." }] },
  { character: "スケジュール", kana: "スケジュール", romaji: "sukejuuru", meaning: "jadwal", examples: [{ jp: "今日のスケジュールを確認します。", kana: "きょうのスケジュールをかくにんします。", id: "Memeriksa jadwal hari ini." }] },
  { character: "デザイン", kana: "デザイン", romaji: "dezain", meaning: "desain", examples: [{ jp: "この服のデザインが好きです。", kana: "このふくのデザインがすきです。", id: "Saya suka desain baju ini." }] },
  { character: "トラブル", kana: "トラブル", romaji: "toraburu", meaning: "masalah / trouble", examples: [{ jp: "機械のトラブルがありました。", kana: "きかいのトラブルがありました。", id: "Ada masalah pada mesin." }] },
  { character: "パソコン", kana: "パソコン", romaji: "pasokon", meaning: "komputer pribadi", examples: [{ jp: "パソコンで仕事をします。", kana: "パソコンでしごとをします。", id: "Bekerja dengan komputer." }] },
  { character: "パンフレット", kana: "パンフレット", romaji: "panfuretto", meaning: "brosur", examples: [{ jp: "パンフレットをもらいました。", kana: "パンフレットをもらいました。", id: "Saya mendapat brosur." }] },
  { character: "ファイル", kana: "ファイル", romaji: "fairu", meaning: "berkas / file", examples: [{ jp: "ファイルを保存します。", kana: "ファイルをほぞんします。", id: "Menyimpan file." }] },
  { character: "プレゼント", kana: "プレゼント", romaji: "purezento", meaning: "hadiah", examples: [{ jp: "友達にプレゼントを買います。", kana: "ともだちにプレゼントをかいます。", id: "Membeli hadiah untuk teman." }] },
  { character: "ボーナス", kana: "ボーナス", romaji: "boonasu", meaning: "bonus", examples: [{ jp: "ボーナスをもらいました。", kana: "ボーナスをもらいました。", id: "Saya mendapat bonus." }] },
  { character: "メッセージ", kana: "メッセージ", romaji: "messeiji", meaning: "pesan", examples: [{ jp: "メッセージを送ります。", kana: "メッセージをおくります。", id: "Mengirim pesan." }] },
  { character: "レストラン", kana: "レストラン", romaji: "resutoran", meaning: "restoran", examples: [{ jp: "レストランで食事をします。", kana: "レストランでしょくじをします。", id: "Makan di restoran." }] },
  { character: "レベル", kana: "レベル", romaji: "reberu", meaning: "tingkat / level", examples: [{ jp: "レベルが上がりました。", kana: "レベルがあがりました。", id: "Levelnya naik." }] },
  
  // Kata-kata N3/N4 lanjutan
  { character: "案内", kana: "あんない", romaji: "annai", meaning: "panduan / informasi", examples: [{ jp: "案内所はどこですか。", kana: "あんないじょはどこですか。", id: "Di mana pusat informasi?" }] },
  { character: "安心", kana: "あんしん", romaji: "anshin", meaning: "lega / tenang", examples: [{ jp: "顔を見て安心しました。", kana: "かおをみてあんしんしました。", id: "Lega setelah melihat wajahnya." }] },
  { character: "安全", kana: "あんぜん", romaji: "anzen", meaning: "aman", examples: [{ jp: "ここは安全です。", kana: "ここはあんぜんです。", id: "Di sini aman." }] },
  { character: "以下", kana: "いか", romaji: "ika", meaning: "di bawah / kurang dari", examples: [{ jp: "10歳以下の子供", kana: "じゅっさいいかのこども", id: "Anak berusia 10 tahun ke bawah." }] },
  { character: "以外", kana: "いがい", romaji: "igai", meaning: "selain", examples: [{ jp: "これ以外にありますか。", kana: "これいがいにありますか。", id: "Apakah ada selain ini?" }] },
  { character: "医学", kana: "いがく", romaji: "igaku", meaning: "ilmu kedokteran", examples: [{ jp: "医学を勉強します。", kana: "いがくをべんきょうします。", id: "Belajar ilmu kedokteran." }] },
  { character: "生きる", kana: "いきる", romaji: "ikiru", meaning: "hidup", examples: [{ jp: "一生懸命生きます。", kana: "いっしょうけんめいいきます。", id: "Hidup dengan sungguh-sungguh." }] },
  { character: "意見", kana: "いけん", romaji: "iken", meaning: "pendapat", examples: [{ jp: "意見を言ってください。", kana: "いけんをいってください。", id: "Tolong sampaikan pendapat." }] },
  { character: "石", kana: "いし", romaji: "ishi", meaning: "batu", examples: [{ jp: "石につまずきました。", kana: "いしにつまずきました。", id: "Tersandung batu." }] },
  { character: "いじめる", kana: "いじめる", romaji: "ijimeru", meaning: "mengganggu / mem-bully", examples: [{ jp: "動物をいじめてはいけません。", kana: "どうぶつをいじめてはいけません。", id: "Tidak boleh mengganggu binatang." }] },
  { character: "以上", kana: "いじょう", romaji: "ijou", meaning: "di atas / lebih dari", examples: [{ jp: "10人以上の人がいます。", kana: "じゅうにんいじょうのひとがいます。", id: "Ada lebih dari 10 orang." }] },
  { character: "急ぐ", kana: "いそぐ", romaji: "isogu", meaning: "bergegas", examples: [{ jp: "急ぎましょう。", kana: "いそぎましょう。", id: "Mari bergegas." }] },
  { character: "致す", kana: "いたす", romaji: "itasu", meaning: "melakukan (sopan)", examples: [{ jp: "よろしくお願い致します。", kana: "よろしくおねがいいたします。", id: "Mohon bantuannya." }] },
  { character: "一度", kana: "いちど", romaji: "ichido", meaning: "sekali", examples: [{ jp: "一度行きたいです。", kana: "いちどいきたいです。", id: "Ingin pergi sekali." }] },
  { character: "糸", kana: "いと", romaji: "ito", meaning: "benang", examples: [{ jp: "赤い糸", kana: "あかいいと", id: "Benang merah." }] },
  { character: "以内", kana: "いない", romaji: "inai", meaning: "dalam / di dalam (batas waktu)", examples: [{ jp: "1時間以内に戻ります。", kana: "いちじかんいないにもどります。", id: "Kembali dalam waktu 1 jam." }] },
  { character: "田舎", kana: "いなか", romaji: "inaka", meaning: "pedesaan", examples: [{ jp: "田舎は静かです。", kana: "いなかはしずかです。", id: "Pedesaan itu sepi." }] },
  { character: "祈る", kana: "いのる", romaji: "inoru", meaning: "berdoa", examples: [{ jp: "平和を祈ります。", kana: "へいわをいのります。", id: "Berdoa untuk perdamaian." }] },
  { character: "いらっしゃる", kana: "いらっしゃる", romaji: "irassharu", meaning: "datang/berada (sopan)", examples: [{ jp: "先生がいらっしゃいます。", kana: "せんせいがいらっしゃいます。", id: "Guru datang." }] },
  { character: "植える", kana: "うえる", romaji: "ueru", meaning: "menanam", examples: [{ jp: "木を植えます。", kana: "きをえます。", id: "Menanam pohon." }] },
  { character: "伺う", kana: "うかがう", romaji: "ukagau", meaning: "bertanya / mengunjungi (sopan)", examples: [{ jp: "お話を伺います。", kana: "おはなしをうかがいます。", id: "Saya akan mendengarkan cerita Anda." }] },
  { character: "受付", kana: "うけつけ", romaji: "uketsuke", meaning: "resepsionis", examples: [{ jp: "受付に聞いてください。", kana: "うけつけにきいてください。", id: "Tolong tanya pada resepsionis." }] },
  { character: "受ける", kana: "うける", romaji: "ukeru", meaning: "menerima / mengikuti (ujian)", examples: [{ jp: "試験を受けます。", kana: "しけんをうけます。", id: "Mengikuti ujian." }] },
  { character: "動く", kana: "うごく", romaji: "ugoku", meaning: "bergerak", examples: [{ jp: "機械が動きません。", kana: "きかいがうごきません。", id: "Mesinnya tidak bergerak." }] },
  { character: "嘘", kana: "うそ", romaji: "uso", meaning: "kebohongan", examples: [{ jp: "嘘をつかないで。", kana: "うそをつかないで。", id: "Jangan berbohong." }] },
  { character: "打つ", kana: "うつ", romaji: "utsu", meaning: "memukul", examples: [{ jp: "ボールを打ちます。", kana: "ボールをうちます。", id: "Memukul bola." }] },
  { character: "美しい", kana: "うつくしい", romaji: "utsukushii", meaning: "indah", examples: [{ jp: "美しい景色ですね。", kana: "うつくしいけしきですね。", id: "Pemandangan yang indah ya." }] },
  { character: "写す", kana: "うつす", romaji: "utsusu", meaning: "menyalin / memotret", examples: [{ jp: "ノートに写します。", kana: "ノートにうつします。", id: "Menyalin ke buku catatan." }] },
  { character: "移る", kana: "うつる", romaji: "utsuru", meaning: "berpindah", examples: [{ jp: "新しい家に移ります。", kana: "あたらしいいえにうつります。", id: "Berpindah ke rumah baru." }] },
  { character: "腕", kana: "うで", romaji: "ude", meaning: "lengan", examples: [{ jp: "腕が痛いです。", kana: "うでがいたいです。", id: "Lengan terasa sakit." }] },
  { character: "裏", kana: "うら", romaji: "ura", meaning: "bagian belakang", examples: [{ jp: "紙の裏に書きます。", kana: "かみのうらにかきます。", id: "Menulis di belakang kertas." }] },
  { character: "売り場", kana: "うりば", romaji: "uriba", meaning: "tempat penjualan", examples: [{ jp: "靴の売り場はどこですか。", kana: "くつのうりばはどこですか。", id: "Di mana tempat penjualan sepatu?" }] },
  { character: "嬉しい", kana: "うれしい", romaji: "ureshii", meaning: "senang", examples: [{ jp: "プレゼントをもらって嬉しいです。", kana: "プレゼントをもらってうれしいです。", id: "Senang mendapat hadiah." }] },
  { character: "運転手", kana: "うんてんしゅ", romaji: "untenshu", meaning: "pengemudi / sopir", examples: [{ jp: "タクシーの運転手です。", kana: "タクシーのうんてんしゅです。", id: "Pengemudi taksi." }] },
  { character: "運動", kana: "うんどう", romaji: "undou", meaning: "olahraga", examples: [{ jp: "毎日運動します。", kana: "まいにちうんどうします。", id: "Berolahraga setiap hari." }] },
  { character: "枝", kana: "えだ", romaji: "eda", meaning: "cabang pohon", examples: [{ jp: "木の枝が折れました。", kana: "きのえだがおれました。", id: "Cabang pohon patah." }] },
  { character: "選ぶ", kana: "えらぶ", romaji: "erabu", meaning: "memilih", examples: [{ jp: "好きな色を選んでください。", kana: "すきないろをえらんでください。", id: "Pilih warna kesukaan." }] },
  { character: "遠慮", kana: "えんりょ", romaji: "enryo", meaning: "sungkan / menahan diri", examples: [{ jp: "遠慮しないでください。", kana: "えんりょしないでください。", id: "Tolong jangan sungkan." }] },
  { character: "おいでになる", kana: "おいでになる", romaji: "oideninaru", meaning: "datang/pergi (sopan)", examples: [{ jp: "社長がおいでになります。", kana: "しゃちょうがおいでになります。", id: "Direktur akan datang." }] },
  { character: "お祝い", kana: "おいわい", romaji: "oiwai", meaning: "perayaan / ucapan selamat", examples: [{ jp: "お祝いを申し上げます。", kana: "おいわいをもうしあげます。", id: "Saya mengucapkan selamat." }] },
  { character: "おかげ", kana: "おかげ", romaji: "okage", meaning: "berkat", examples: [{ jp: "先生のおかげで合格しました。", kana: "せんせいのおかげでごうかくしました。", id: "Berkat guru, saya lulus." }] },
  { character: "可笑しい", kana: "おかしい", romaji: "okashii", meaning: "lucu / aneh", examples: [{ jp: "この話は可笑しいです。", kana: "このはなしはおかしいです。", id: "Cerita ini lucu." }] },
  { character: "億", kana: "おく", romaji: "oku", meaning: "ratusan juta", examples: [{ jp: "日本の人口は1億人以上です。", kana: "にほんのじんこうはいちおくにんいじょうです。", id: "Populasi Jepang di atas 100 juta." }] },
  { character: "屋上", kana: "おくじょう", romaji: "okujou", meaning: "atap gedung", examples: [{ jp: "屋上で景色を見ます。", kana: "おくじょうでけしきをみます。", id: "Melihat pemandangan di atap gedung." }] },
  { character: "贈り物", kana: "おくりもの", romaji: "okurimono", meaning: "pemberian / hadiah", examples: [{ jp: "母に贈り物をします。", kana: "ははにおくりものをします。", id: "Memberikan hadiah pada ibu." }] },
  { character: "遅れる", kana: "おくれる", romaji: "okureru", meaning: "terlambat", examples: [{ jp: "授業に遅れました。", kana: "じゅぎょうにおくれました。", id: "Terlambat pelajaran." }] },
  { character: "起こす", kana: "おこす", romaji: "okosu", meaning: "membangunkan", examples: [{ jp: "朝7時に起こしてください。", kana: "あさしちじにおこしてください。", id: "Tolong bangunkan jam 7 pagi." }] },
  { character: "行う", kana: "おこなう", romaji: "okonau", meaning: "mengadakan / melakukan", examples: [{ jp: "会議を行います。", kana: "かいぎをおこないます。", id: "Mengadakan rapat." }] },
  { character: "怒る", kana: "おこる", romaji: "okoru", meaning: "marah", examples: [{ jp: "父が怒っています。", kana: "ちちがおこっています。", id: "Ayah sedang marah." }] },
  { character: "押し入れ", kana: "おしいれ", romaji: "oshiire", meaning: "lemari dorong (Jepang)", examples: [{ jp: "布団を押し入れにしまいます。", kana: "ふとんをおしいれにしまいます。", id: "Menyimpan futon di lemari dorong." }] },
  { character: "お嬢さん", kana: "おじょうさん", romaji: "ojousan", meaning: "putri (sopan)", examples: [{ jp: "お嬢さんはお元気ですか。", kana: "おじょうさんはおげんきですか。", id: "Apakah putri Anda sehat?" }] },
  { character: "お宅", kana: "おたく", romaji: "otaku", meaning: "rumah Anda (sopan)", examples: [{ jp: "明日、お宅に伺います。", kana: "あした、おたくにうかがいます。", id: "Besok saya berkunjung ke rumah Anda." }] },
  { character: "落ちる", kana: "おちる", romaji: "ochiru", meaning: "jatuh", examples: [{ jp: "木から落ちました。", kana: "きからおちました。", id: "Jatuh dari pohon." }] },
  { character: "おっしゃる", kana: "おっしゃる", romaji: "ossharu", meaning: "berkata (sopan)", examples: [{ jp: "先生がそうおっしゃいました。", kana: "せんせいがそうおっしゃいました。", id: "Guru berkata demikian." }] },
  { character: "夫", kana: "おっと", romaji: "otto", meaning: "suami (sendiri)", examples: [{ jp: "私の夫は会社員です。", kana: "わたしのおっとはかいしゃいんです。", id: "Suami saya pegawai perusahaan." }] },
  { character: "落とす", kana: "おとす", romaji: "otosu", meaning: "menjatuhkan", examples: [{ jp: "財布を落としました。", kana: "さいふをおとしました。", id: "Menjatuhkan dompet." }] },
  { character: "踊り", kana: "おどり", romaji: "odori", meaning: "tarian", examples: [{ jp: "日本の踊りです。", kana: "にほんのおどりです。", id: "Tarian Jepang." }] },
  { character: "踊る", kana: "おどる", romaji: "odoru", meaning: "menari", examples: [{ jp: "一緒に踊りましょう。", kana: "いっしょにおどりましょう。", id: "Mari menari bersama." }] },
  { character: "驚く", kana: "おどろく", romaji: "odoroku", meaning: "terkejut", examples: [{ jp: "大きな音に驚きました。", kana: "おおきなおとにおどろきました。", id: "Terkejut pada suara keras." }] },
  { character: "お見舞い", kana: "おみまい", romaji: "omimai", meaning: "menjenguk", examples: [{ jp: "病院へお見舞いに行きます。", kana: "びょういんへおみまいにいきます。", id: "Menjenguk ke rumah sakit." }] }
];

console.log("Membaca file characters.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let data = JSON.parse(rawdata);

let injectedCount = 0;

if (data.vocabulary_n4) {
  // Ambil semua kata asli yang sudah ada di database
  const existingWords = data.vocabulary_n4.map(v => v.character);
  
  // Filter kandidat yang benar-benar belum ada di database
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
