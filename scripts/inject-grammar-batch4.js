import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'grammar-points.json');

const updates = {
  "n4-grammar-26-1": {
    notes: "Pola ~んです (~ndesu) / ~のです (~nodesu) digunakan untuk memberi penekanan, menjelaskan alasan, meminta penjelasan, atau mengonfirmasi sesuatu. Bentuk ini lebih luwes dan komunikatif daripada 'desu' biasa.",
    formation: [{ type: "Ndesu", rule: "Plain Form + んです (Untuk Na-Adj & Noun: + なんです)", example: "どうして 遅れたんですか。" }],
    common_mistakes: "Lupa menambahkan 'な' pada Kata Benda dan Na-Adj. Contoh salah: '病気んです'. Benar: '病気なんです'.",
    quiz: [{
      question: "Q: Bagaimana kamu berangkat? A: Naik bus. (penekanan)",
      options: ["バスで行くんです", "バスで行きますんです", "バスで行くのんです", "バスで行かんです"],
      answer: "バスで行くんです",
      explanation: "Kata kerja diubah ke plain form (行く) ditambah んです."
    }]
  },
  "n4-grammar-26-2": {
    notes: "Pola sangat sopan untuk MEMINTA TOLONG ('Sudikah Anda...?'). Derajat kesopanannya jauh lebih tinggi daripada '~て ください'. Sering digunakan kepada atasan atau orang yang baru dikenal.",
    formation: [{ type: "Polite Request", rule: "V-te + いただけませんか", example: "これを 教えて いただけませんか" }],
    common_mistakes: "Salah mengkonjugasi bentuk te, atau tertukar dengan 'もらえませんか'. 'Itadakemasen ka' adalah bentuk paling merendah diri (kenjougo).",
    quiz: [{
      question: "Tolong tuliskan (dengan sopan) nama Anda di sini.",
      options: ["ここに 名前を 書いて もらいませんか", "ここに 名前を 書いて いただけませんか", "ここに 名前を 書いて くださいませんか", "ここに 名前を 書い いただけませんか"],
      answer: "ここに 名前を 書いて いただけませんか",
      explanation: "Kaite (Bentuk te) + itadakemasen ka."
    }]
  },
  "n4-grammar-27-1": {
    notes: "Bentuk Potensial (Bisa / Dapat). Mengubah langsung kata kerja ke bentuk kemampuannya, tanpa 'koto ga dekimasu'. \nGol 1: Akhiran 'u' menjadi 'eru' (書く->書ける).\nGol 2: 'ru' menjadi 'rareru' (食べる->食べられる).\nGol 3: 来る->来られる, する->できる.",
    formation: [{ type: "Potential Form", rule: "V-potensial", example: "漢字 が 書けます" }],
    common_mistakes: "Lupa mengubah partikel objek 'を' menjadi 'が'. Pada bentuk potensial, objek kalimat ditandai dengan 'が'. (Contoh: 漢字を書けます -> SALAH. 漢字が書けます -> BENAR).",
    quiz: [{
      question: "Saya bisa berbicara bahasa Jepang.",
      options: ["日本語を 話せます", "日本語が 話せます", "日本語が 話します", "日本語を 話します"],
      answer: "日本語が 話せます",
      explanation: "Objek menjadi 'が', dan Hanasu menjadi Hanasemasu."
    }]
  },
  "n4-grammar-27-2": {
    notes: "見えます (Miemasu) berarti 'terlihat secara alami'. 聞こえます (Kikoemasu) berarti 'terdengar secara alami'. Beda dengan bentuk potensial (見られる/聞ける) yang bermakna 'bisa melihat/mendengar karena usaha/kesempatan'.",
    formation: [{ type: "Natural Perception", rule: "Objek + が + 見えます / 聞こえます", example: "山 が 見えます (Gunung terlihat)" }],
    common_mistakes: "Tertukar dengan '見られる' (bisa menonton). Jika bisa melihat pemandangan dari jendela tanpa disengaja, gunakan '見えます'. Jika bisa menonton film karena punya tiket, gunakan '見られます'.",
    quiz: [{
      question: "Dari jendela kamarku, terdengar suara burung.",
      options: ["鳥の声が 聞けます", "鳥の声が 聞こえます", "鳥の声を 聞けます", "鳥の声を 聞こえます"],
      answer: "鳥の声が 聞こえます",
      explanation: "Suara burung masuk ke telinga secara alami -> Kikoemasu."
    }]
  },
  "n4-grammar-28-1": {
    notes: "Pola 'Sambil...'. Menyatakan dua tindakan yang dilakukan bersamaan. Tindakan UTAMA diletakkan di kalimat bagian BELAKANG.",
    formation: [{ type: "Simultaneous Action", rule: "V1-masu (buang masu) + ながら、V2", example: "音楽を 聞きながら、勉強します" }],
    common_mistakes: "Lupa membuang 'masu'. (Salah: 聞きますながら). Selain itu, sering terbalik menempatkan tindakan utama. (Jika niat utamanya belajar, maka 'belajar' ditaruh di akhir kalimat).",
    quiz: [{
      question: "Berjalan sambil bernyanyi.",
      options: ["歌いながら、歩きます", "歩きながら、歌います", "歌ってながら、歩きます", "歩いてながら、歌います"],
      answer: "歌いながら、歩きます",
      explanation: "Utaimasu -> Utai + nagara + Arukimasu."
    }]
  },
  "n4-grammar-28-2": {
    notes: "Pola '~shi, ~shi' digunakan untuk menyebutkan beberapa sifat, alasan, atau keadaan secara sejajar ('Sudah... ditambah lagi...'). Semua unsur sebelum 'shi' berwujud Plain Form.",
    formation: [{ type: "Multiple reasons/traits", rule: "Plain Form + し、Plain Form + し", example: "この店は 安いし、おいしいです" }],
    common_mistakes: "Menggunakan bentuk Masu/Desu sebelum 'shi' (contoh: 安いですし). Walau kadang terdengar di percakapan, secara tata bahasa baku harus Plain Form (安いし). Noun/Na-Adj ditambah 'だ' (だし).",
    quiz: [{
      question: "Kamar ini sempit, gelap, dan...",
      options: ["狭いし、暗いし、", "狭くし、暗くし、", "狭くてし、暗くてし、", "狭いだし、暗いだし、"],
      answer: "狭いし、暗いし、",
      explanation: "I-Adj (semai, kurai) langsung ditempel 'shi'."
    }]
  },
  "n4-grammar-29-1": {
    notes: "Kata Kerja Intransitif (Jidoushi) + ています menyatakan KONDISI yang tersisa dari sebuah kejadian alami di masa lalu. (Misal: Pintu (dalam keadaan) terbuka).",
    formation: [{ type: "State from Intransitive Verb", rule: "Subjek + が + V-intransitif-te + います", example: "ドア が 開いています" }],
    common_mistakes: "Tertukar partikel 'を'. Karena intransitif, subjek yang mengalami keadaan tersebut ditandai dengan 'が'. Jangan pakai 'を' (Salah: ドアを開いています).",
    quiz: [{
      question: "Lampu listrik (dalam keadaan) mati.",
      options: ["電気が 消しています", "電気が 消えています", "電気を 消しています", "電気を 消えています"],
      answer: "電気が 消えています",
      explanation: "Kiemasu (mati - intransitif) -> Kiete imasu. Subjek pakai 'ga'."
    }]
  },
  "n4-grammar-29-2": {
    notes: "Pola '~te shimaimasu/shimaimashita' memiliki dua makna:\n1. Sesuatu SELesai/TUNTAS dilakukan.\n2. Penyesalan/Ketidaksengajaan atas suatu kejadian ('Aduh, ter...').",
    formation: [{ type: "Completion / Regret", rule: "V-te + しまいます / しまいました", example: "パスポート を なくして しまいました" }],
    common_mistakes: "Hanya terpaku pada makna 'penyesalan'. Padahal bisa juga bermakna positif, misal: 'Saya akan menyelesaikan membaca buku ini sampai besok' (明日までに 読んでしまいます).",
    quiz: [{
      question: "Aduh, kopinya tumpah (こぼれる).",
      options: ["コーヒーが こぼして しまいました", "コーヒーが こぼれて しまいました", "コーヒーが こぼれて います", "コーヒーが こぼして います"],
      answer: "コーヒーが こぼれて しまいました",
      explanation: "Koboreru (tumpah tak disengaja) + te shimaimashita (menyatakan penyesalan/keterlanjuran)."
    }]
  },
  "n4-grammar-30-1": {
    notes: "Kata Kerja Transitif (Tadoushi) + てあります menyatakan KONDISI yang tercipta karena 'Ada seseorang yang sengaja melakukannya'.",
    formation: [{ type: "State from Intentional Action", rule: "Benda + が + V-transitif-te + あります", example: "カレンダー が 掛けてあります" }],
    common_mistakes: "Berbeda tajam dengan Jidoushi+te imasu. 'Pintu (sengaja) dibuka' = ドアが開けてあります (Akete arimasu). 'Pintu (kebetulan) terbuka' = ドアが開いています (Aite imasu).",
    quiz: [{
      question: "Nama sudah ditulis (oleh seseorang) di buku.",
      options: ["名前が 書いて います", "名前が 書いて あります", "名前が 書かれて います", "名前が 書かせて あります"],
      answer: "名前が 書いて あります",
      explanation: "Kaku (menulis - transitif) + te arimasu = Ada keadaan sudah ditulis."
    }]
  },
  "n4-grammar-30-2": {
    notes: "Pola '~te okimasu' menyatakan tindakan PERSIAPAN untuk masa depan, atau MEMBIARKAN keadaan seperti semula.",
    formation: [{ type: "Preparation / Leaving as is", rule: "V-te + おきます", example: "旅行の前に、チケットを 買っておきます" }],
    common_mistakes: "Sering disingkat menjadi '~toku' dalam percakapan kasual (Kaite okimasu -> Kaitoku). Lupa bahwa objek tetap ditandai 'を' seperti biasa.",
    quiz: [{
      question: "Tolong biarkan jendelanya terbuka (jangan ditutup).",
      options: ["窓を 開けて ください", "窓を 開けて おいてください", "窓を 開けて あります", "窓を 開けて しまいます"],
      answer: "窓を 開けて おいてください",
      explanation: "Akete oku + kudasai = Tolong biarkan dalam keadaan terbuka."
    }]
  },
  "n4-grammar-31-1": {
    notes: "Bentuk Maksud (Ikoukei) adalah versi informal dari '~mashou'. \nGol 1: u -> ou (書く->書こう). \nGol 2: ru -> you (食べる->食べよう). \nDitambah 'to omoimasu' menyatakan niat yang baru dipikirkan saat ini.",
    formation: [{ type: "Volitional + I think", rule: "V-ikou + と思っています", example: "日本へ 行こう と思っています" }],
    common_mistakes: "Beda 'to omoimasu' dan 'to omotte imasu'. 'to omoimasu' (niat dadakan). 'to omotte imasu' (niat yang sudah direncanakan dari lama).",
    quiz: [{
      question: "Saya berniat (sudah dari lama) membeli mobil.",
      options: ["車を 買おうと 思います", "車を 買おうと 思っています", "車を 買うと 思います", "車を 買うと 思っています"],
      answer: "車を 買おうと 思っています",
      explanation: "Kaou (Ikoukei) + to omotte imasu (Niat yang terencana)."
    }]
  },
  "n4-grammar-31-2": {
    notes: "'つもり' (Tsumori) berarti Niat Kuat. '予定' (Yotei) berarti Jadwal/Rencana yang sudah pasti. Keduanya dihubungkan dengan Plain Form (Verb) atau Partikel の (Noun).",
    formation: [{ type: "Intention / Plan", rule: "V-ru / V-nai + つもりです", example: "明日、休む つもりです" }],
    common_mistakes: "Menggunakan bentuk Lampau (V-ta) sebelum Tsumori. Ingat: Niat selalu untuk masa depan, jadi wajib menggunakan V-ru atau V-nai.",
    quiz: [{
      question: "Rencananya saya tidak akan pergi.",
      options: ["行かない つもりです", "行かなかった つもりです", "行くない つもりです", "行きます つもりです"],
      answer: "行かない つもりです",
      explanation: "Ikanai (Bentuk Nai) + Tsumori desu."
    }]
  },
  "n4-grammar-32-1": {
    notes: "Pola untuk MEMBERI SARAN ('Sebaiknya...'). Jika sarannya POSITIF gunakan V-ta. Jika NEGATIF gunakan V-nai. Ditambah 'hou ga ii desu'.",
    formation: [{ type: "Advice", rule: "V-ta / V-nai + ほうがいいです", example: "薬を 飲んだ ほうがいいです" }],
    common_mistakes: "Untuk saran positif, WAJIB V-ta (lampau). Menggunakan V-ru (飲むほうがいい) terdengar kurang wajar dalam bahasa Jepang baku untuk saran langsung.",
    quiz: [{
      question: "Sebaiknya kamu segera tidur.",
      options: ["早く 寝る ほうがいいです", "早く 寝た ほうがいいです", "早く 寝て ほうがいいです", "早く 寝ない ほうがいいです"],
      answer: "早く 寝た ほうがいいです",
      explanation: "Saran positif wajib pakai V-ta (Neta) + hou ga ii desu."
    }]
  },
  "n4-grammar-32-2": {
    notes: "Pengulangan materi dugaan (N5), namun lebih difokuskan pada perbedaan nuansa probabilitas. でしょう (~80% yakin), かもしれません (~50% yakin).",
    formation: [{ type: "Probability", rule: "Plain Form + でしょう / かもしれません", example: "明日は 雨が 降るでしょう" }],
    common_mistakes: "Salah menempatkan intonasi. Jika intonasi 'deshou' meninggi (deshou?), artinya menuntut persetujuan pendengar ('...kan?'). Jika menurun, murni tebakan.",
    quiz: [{
      question: "Mungkin saja besok libur (peluang 50-50).",
      options: ["明日は 休みでしょう", "明日は 休みかもしれません", "明日は 休みの かもしれません", "明日は 休みだ かもしれません"],
      answer: "明日は 休みかもしれません",
      explanation: "Kata Benda (Yasumi) langsung ditempel 'kamoshiremasen'."
    }]
  },
  "n4-grammar-33-1": {
    notes: "Bentuk Perintah (Keras). Sering dipakai pria atau pada rambu-rambu. \nPerintah positif (Meireikei): Gol 1: u -> e (書け). Gol 2: ru -> ro (食べろ). \nPerintah negatif (Larangan): V-ru + な (書くな, 食べるな).",
    formation: [{ type: "Imperative / Prohibition", rule: "Meireikei / V-ru + な", example: "走れ！ / 走るな！" }],
    common_mistakes: "Menggunakan bentuk larangan (V-ru + な) kepada orang yang dihormati. Sangat tabu! Hanya untuk keadaan darurat, komando militer, atau teman akrab pria.",
    quiz: [{
      question: "Bentuk perintah (keras) dari '行く' dan '見る'.",
      options: ["行きえ / 見え", "行か / 見よ", "行け / 見ろ", "行こ / 見れ"],
      answer: "行け / 見ろ",
      explanation: "Iku (Gol 1) -> Ike. Miru (Gol 2) -> Miro."
    }]
  },
  "n4-grammar-33-2": {
    notes: "'Xと 書いてあります' = Tertulis X. \n'Xは Yという 意味です' = X artinya Y. Sangat berguna saat bertanya rambu atau kanji.",
    formation: [{ type: "Written state / Meaning", rule: "~と書いてあります / ~という意味です", example: "あそこに「止まれ」と書いてあります" }],
    common_mistakes: "Lupa bahwa mengutip tulisan wajib menggunakan partikel 'と' (to).",
    quiz: [{
      question: "Ini artinya 'Dilarang masuk'.",
      options: ["「入るな」と 意味です", "「入るな」という 意味です", "「入るな」って 意味です", "B dan C benar"],
      answer: "B dan C benar",
      explanation: "Tanda kutip dihubungkan dengan 'to iu imi desu' atau dalam percakapan kasual 'tte imi desu'."
    }]
  },
  "n4-grammar-34-1": {
    notes: "Pola '~toori ni' berarti 'Sesuai dengan / Mengikuti'. Jika sebelum toori adalah Kata Kerja, gunakan V-ru / V-ta. Jika Kata Benda, gunakan N + の.",
    formation: [{ type: "In accordance with", rule: "V-ru/ta + とおりに / Noun + の + とおりに", example: "私が 言う とおりに 書いてください" }],
    common_mistakes: "Untuk kata benda bisa dibaca 'doori' tanpa partikel の. Misal: 予想どおり (Yosou-doori = Sesuai dugaan). Hati-hati antara Toori dan Doori.",
    quiz: [{
      question: "Lakukanlah Sesuai Buku.",
      options: ["本の とおりに してください", "本 とおりに してください", "本どおりに してください", "A dan C benar"],
      answer: "A dan C benar",
      explanation: "Hon no toori ni = Hon doori ni. Keduanya bisa dipakai."
    }]
  },
  "n4-grammar-34-2": {
    notes: "Menyatakan dua aksi berlawanan yang tidak bisa dilakukan bersama. Pola V-nai de berarti 'Tanpa melakukan V'. (Misal: Pergi tanpa sarapan).",
    formation: [{ type: "Without doing", rule: "V-nai + で、~", example: "朝ごはんを 食べないで、学校へ行きます" }],
    common_mistakes: "Tertukar dengan 'V-nakute'. 'Nakute' artinya 'Karena tidak...' atau 'Tidak A melainkan B'. Sedangkan 'Naide' artinya 'Tanpa melakukan A, saya melakukan B'.",
    quiz: [{
      question: "Saya tidur tanpa menyalakan AC.",
      options: ["エアコンを つけなくて、寝ました", "エアコンを つけないで、寝ました", "エアコンを つけないと、寝ました", "エアコンを つけなかったら、寝ました"],
      answer: "エアコンを つけないで、寝ました",
      explanation: "Menyatakan 'tanpa melakukan' menggunakan bentuk V-nai + de (Tsukenaide)."
    }]
  },
  "n4-grammar-35-1": {
    notes: "Bentuk Syarat (~ば / Joukenkei). Digunakan untuk pengandaian jika A terjadi maka B. \nGol 1: u -> eba (書けば).\nGol 2: ru -> reba (食べれば). \nI-Adj: i -> kereba (安ければ).",
    formation: [{ type: "Conditional ~ba", rule: "V-ba / Adj-kereba", example: "雨が 降れば、涼しくなります" }],
    common_mistakes: "Mencampur dengan '-tara'. Bentuk '~ば' tidak bisa digunakan jika kalimat utamanya (bagian belakang) adalah Perintah, Keinginan, atau Ajakan. (Kecuali kata kerjanya statis/kata sifat).",
    quiz: [{
      question: "Bentuk ~ba dari '安い' (murah) dan '来る' (datang).",
      options: ["安えば / 来れば", "安ければ / 来れば", "安ければ / くれば", "安ければ / すれば"],
      answer: "安ければ / くれば",
      explanation: "Yasui -> Yasukereba. Kuru (Gol 3) -> Kureba."
    }]
  },
  "n4-grammar-35-2": {
    notes: "Pola meminta saran/petunjuk secara sopan. 'Kapan/Di mana/Apa yang sebaiknya saya lakukan?'.",
    formation: [{ type: "Asking advice", rule: "Kata tanya + V-ba + いいですか", example: "どこで 買えば いいですか" }],
    common_mistakes: "Bisa juga menggunakan '~たら いいですか', maknanya sama persis. Jangan tertukar polanya.",
    quiz: [{
      question: "Siapa yang sebaiknya saya tanya?",
      options: ["だれに 聞けば いいですか", "だれに 聞いたら いいですか", "A dan B benar", "だれに 聞くば いいですか"],
      answer: "A dan B benar",
      explanation: "Kikeba ii desu ka (bentuk ba) sama artinya dengan Kiitara ii desu ka (bentuk tara)."
    }]
  },
  "n4-grammar-36-1": {
    notes: "Pola '~youni' berarti 'Supaya / Agar'. Kata kerja sebelumnya harus menunjukkan KEADAAN (biasanya Bentuk Potensial atau Bentuk Nai). Tujuannya agar kondisi itu terwujud.",
    formation: [{ type: "So that", rule: "V-ru(Potensial) / V-nai + ように、~", example: "早く 泳げる ように、毎日 練習します" }],
    common_mistakes: "Tertukar dengan '~tame ni' (Demi/Untuk). Tame ni dipakai untuk kata kerja AKSI yang ada niat kuatnya (Rumah o kau tame ni = Demi membeli rumah). Youni untuk KONDISI (Bisa berenang, tidak sakit, dll).",
    quiz: [{
      question: "Agar tidak lupa, saya mencatat di buku.",
      options: ["忘れない ように、メモします", "忘れる ように、メモします", "忘れない ために、メモします", "忘れる ために、メモします"],
      answer: "忘れない ように、メモします",
      explanation: "Tidak lupa (Wasurenai) adalah sebuah kondisi pasif, maka pakai 'youni'."
    }]
  },
  "n4-grammar-36-2": {
    notes: "Youni narimasu = 'Menjadi bisa / Kondisinya berubah'. \nYouni shimasu = 'Berusaha untuk...'.",
    formation: [{ type: "Change of state / Effort", rule: "V-ru + ようになります / ようにします", example: "日本語が 話せる ように なりました" }],
    common_mistakes: "Lupa mengubah ke bentuk potensial untuk 'Youni narimasu'. (Salah: 日本語を話すようになりました). (Benar: 日本語が話せるようになりました - Menjadi BISA berbicara).",
    quiz: [{
      question: "Saya berusaha untuk makan banyak sayur setiap hari.",
      options: ["野菜を食べる ようにします", "野菜を食べる ようになります", "野菜を食べる ようにあります", "野菜を食べる ようにいます"],
      answer: "野菜を食べる ようにします",
      explanation: "'Youni shimasu' menyatakan usaha keras dari subjek untuk membiasakan diri."
    }]
  },
  "n4-grammar-37-1": {
    notes: "Bentuk Pasif (Di-). \nGol 1: u -> areru (叱る -> 叱られる). \nGol 2: ru -> rareru (褒める -> 褒められる).\nSubjek utama adalah KORBAN (Orang yang menerima aksi). Pelakunya ditandai dengan partikel 'に'.",
    formation: [{ type: "Passive Voice", rule: "Korban + は + Pelaku + に + V-pasif", example: "わたし は 先生 に 褒められました (Saya dipuji oleh guru)" }],
    common_mistakes: "Di bahasa Jepang, bentuk pasif sering mengandung nuansa MERUGIKAN/MENDERITA (Meiwaku ukemi). Misal 'Saya diduduki teman', 'Saya dituruni hujan'.",
    quiz: [{
      question: "Saya digigit oleh anjing peliharaan saya.",
      options: ["わたしは 犬を 噛みました", "わたしは 犬に 噛まれました", "犬は わたしに 噛まれました", "わたしは 犬が 噛ませました"],
      answer: "わたしは 犬に 噛まれました",
      explanation: "Saya (korban) + wa + Anjing (Pelaku) + ni + Digigit (Kamareru -> Kamaremashita)."
    }]
  },
  "n4-grammar-37-2": {
    notes: "Pasif untuk menyebutkan Fakta / Sejarah / Benda, di mana Pelakunya tidak penting (Anonim). Subjeknya adalah Benda. Pelaku tidak disebutkan.",
    formation: [{ type: "Impersonal Passive", rule: "Benda + が/は + V-pasif", example: "この本 は 世界中 で 読まれています" }],
    common_mistakes: "Masih mencoba mencari-cari siapa pelakunya. Jika pelakunya masyarakat umum, cukup gunakan Benda + Pasif.",
    quiz: [{
      question: "Gedung ini dibangun 100 tahun yang lalu.",
      options: ["このビルは 建てました", "このビルは 建てられました", "このビルが 建ちました", "このビルを 建てました"],
      answer: "このビルは 建てられました",
      explanation: "Gedung (Benda) + wa + Dibangun (Taterareru / Tateraremashita)."
    }]
  },
  "n4-grammar-38-1": {
    notes: "Menjadikan Kata Kerja sebagai Kata Benda dengan menambahkan partikel 'の'. Mirip dengan 'to + verb' atau 'verb+ing' dalam bahasa Inggris. 'Noha' untuk mendeskripsikan sifat, 'Noga' jika diikuti kata Suki/Heta/Jouzu.",
    formation: [{ type: "Nominalization", rule: "V-Plain + の + は / が", example: "音楽 を 聞くの が 好きです" }],
    common_mistakes: "Lupa menyisipkan 'の' dan langsung menempel kata sifat ke kata kerja. (Salah: 聞くが好き).",
    quiz: [{
      question: "Belajar sendirian itu membosankan (tsumaranai).",
      options: ["一人で 勉強するは つまらないです", "一人で 勉強するのは つまらないです", "一人で 勉強するが つまらないです", "一人で 勉強するのが つまらないです"],
      answer: "一人で 勉強するのは つまらないです",
      explanation: "Menerangkan sifat dari sebuah kegiatan -> V-ru + no + wa + Sifat."
    }]
  }
};

console.log("Membaca grammar-points.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let grammarData = JSON.parse(rawdata);

let injectedCount = 0;

for (let i = 0; i < grammarData.length; i++) {
  const item = grammarData[i];
  if (updates[item.id]) {
    const u = updates[item.id];
    item.notes = u.notes;
    item.formation = u.formation;
    item.common_mistakes = u.common_mistakes;
    item.quiz = u.quiz;
    injectedCount++;
  }
}

console.log(`Berhasil menyuntikkan data aktual untuk ${injectedCount} pola tata bahasa N4 (Batch 4).`);

if (injectedCount > 0) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(grammarData, null, 2), 'utf8');
  console.log("✅ Update grammar-points.json sukses!");
}
