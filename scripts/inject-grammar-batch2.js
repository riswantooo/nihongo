import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'grammar-points.json');

const updates = {
  "n5-grammar-8-4": {
    notes: "Bentuk negatif dari kata sifat. Untuk I-Adj: hilangkan 'い' terakhir dan tambahkan 'くないです' (kunai desu). Untuk Na-Adj: hilangkan 'な' dan tambahkan 'じゃありません' (ja arimasen).",
    formation: [
      { type: "I-Adj Negative", rule: "Adj-i (coret i) + くないです", example: "高くないです (tidak tinggi)" },
      { type: "Na-Adj Negative", rule: "Adj-na (tanpa na) + じゃありません", example: "静かじゃありません (tidak sepi)" }
    ],
    common_mistakes: "Memasukkan kata 'じゃない' pada I-Adj. Contoh salah: '高いじゃないです'. Seharusnya: '高くないです'. Pengecualian mutlak: 'いい' (bagus) menjadi 'よくないです' (tidak bagus), bukan 'いくないです'.",
    quiz: [{
      question: "Film itu tidak menarik.",
      options: ["その映画は おもしろいじゃありません", "その映画は おもしろくないです", "その映画は おもしろいくないです", "その映画は おもしろいじゃないです"],
      answer: "その映画は おもしろくないです",
      explanation: "Omoshiroi adalah I-Adj. 'i' dihilangkan lalu diganti 'kunai desu'."
    }]
  },
  "n5-grammar-9-1": {
    notes: "Untuk menyatakan suka (好き / suki) atau benci (嫌い / kirai), gunakan partikel 'が' (ga), BUKAN 'を' (o).",
    formation: [{ type: "Preference", rule: "Objek + が + 好きです / 嫌いです", example: "わたし は 猫 が 好きです" }],
    common_mistakes: "Menggunakan partikel 'を' seperti '猫を好きです' (SALAH). Suki/Kirai adalah kata sifat (Na-Adj), bukan kata kerja transitif, sehingga objeknya ditandai dengan 'が'.",
    quiz: [{
      question: "Saya suka daging.",
      options: ["わたしは 肉を 好きです", "わたしは 肉に 好きです", "わたしは 肉が 好きです", "わたしは 肉で 好きです"],
      answer: "わたしは 肉が 好きです",
      explanation: "Untuk menyatakan hal yang disukai, gunakan partikel 'が'."
    }]
  },
  "n5-grammar-9-2": {
    notes: "Sama seperti Suki/Kirai, untuk menyatakan pintar/mahir (上手 / jouzu) atau payah (下手 / heta) dalam suatu hal, gunakan partikel 'が'.",
    formation: [{ type: "Skill", rule: "Bidang/Hal + が + 上手です / 下手です", example: "彼 は 歌 が 上手です" }],
    common_mistakes: "Sering menggunakan 'を'. Contoh salah: '日本語を上手です'. Harus diingat bahwa Jouzu/Heta adalah kata sifat, sehingga memakai partikel 'が'.",
    quiz: [{
      question: "Tanaka pintar tenis.",
      options: ["田中さんは テニスが 上手です", "田中さんは テニスを 上手です", "田中さんは テニスで 上手です", "田中さんは テニスに 上手です"],
      answer: "田中さんは テニスが 上手です",
      explanation: "Menyatakan kemahiran selalu menggunakan 'が'."
    }]
  },
  "n5-grammar-9-3": {
    notes: "Kata kerja 'わかります' (wakarimasu / mengerti) juga merupakan pengecualian. Meskipun ia kata kerja, ia tidak menggunakan partikel 'を', melainkan partikel 'が'.",
    formation: [{ type: "Understanding", rule: "Hal yang dimengerti + が + わかります", example: "わたし は 日本語 が わかります" }],
    common_mistakes: "Memakai 'を' karena mengira 'wakarimasu' sama seperti kata kerja aktif lainnya. SALAH: '日本語をわかります'. BENAR: '日本語がわかります'.",
    quiz: [{
      question: "Apakah kamu mengerti bahasa Inggris?",
      options: ["英語を わかりますか", "英語が わかりますか", "英語で わかりますか", "英語に わかりますか"],
      answer: "英語が わかりますか",
      explanation: "'わかります' wajib didahului partikel 'が'."
    }]
  },
  "n5-grammar-9-4": {
    notes: "'どうして' (doushite) berarti 'Kenapa/Mengapa'. Jawabannya selalu diakhiri dengan '〜から (です)' yang berarti 'karena...'.",
    formation: [{ type: "Reason", rule: "Alasan (Kalimat lengkap) + からです", example: "時間 が ない からです" }],
    common_mistakes: "Lupa menambahkan 'から' di akhir jawaban atas pertanyaan 'どうして'. Jika 'から' diletakkan di DEPAN (contoh: kara jikan ga nai), artinya menjadi bahasa Indonesia (salah). 'から' harus di BELAKANG.",
    quiz: [{
      question: "Q: どうして 食べませんか。 A: お腹が いっぱい ____。",
      options: ["から", "まで", "からです", "だけです"],
      answer: "からです",
      explanation: "Karena kalimat diakhiri secara sopan, gunakan 'からです' (karena...). 'から' saja kurang sopan jika berdiri sendiri."
    }]
  },
  "n5-grammar-10-1": {
    notes: "Untuk menyatakan KEBERADAAN (Ada). 'あります' (arimasu) digunakan untuk BENDA MATI dan TANAMAN. 'います' (imasu) digunakan untuk MANUSIA dan HEWAN.",
    formation: [{ type: "Existence", rule: "Tempat + に + Benda/Orang + が + あります/います", example: "机の上 に 本 が あります" }],
    common_mistakes: "Tertukar antara arimasu dan imasu. (Contoh salah: '犬があります' - anjing adalah hewan/benda hidup, harus pakai 'います'). Lupa juga bahwa tempat ditandai dengan 'に', bukan 'で'.",
    quiz: [{
      question: "Di taman ada anak-anak.",
      options: ["公園に 子供が あります", "公園で 子供が います", "公園に 子供が います", "公園で 子供が あります"],
      answer: "公園に 子供が います",
      explanation: "Tempat keberadaan pakai 'に', dan karena anak-anak itu makhluk hidup, gunakan 'います'."
    }]
  },
  "n5-grammar-10-2": {
    notes: "Pola ini dibalik dari pola 10-1. Fokusnya adalah menjelaskan LOKASI suatu subjek spesifik. (Subjek X ada di Y).",
    formation: [{ type: "Location of Subject", rule: "Subjek + は + Tempat + に + あります/います", example: "トイレ は あそこ に あります" }],
    common_mistakes: "Menggunakan partikel 'が' setelah subjek yang menjadi TOPIK utama. Jika sudah jelas benda apa yang dibicarakan, benda tersebut menjadi topik dan dipasangkan dengan 'は'.",
    quiz: [{
      question: "Kucing (itu) ada di bawah meja.",
      options: ["猫が 机の下に います", "猫は 机の下に います", "机の下に 猫は います", "机の下に 猫が あります"],
      answer: "猫は 机の下に います",
      explanation: "Kucing sebagai topik kalimat ('Kucing itu...') diletakkan di depan dengan 'は'."
    }]
  },
  "n5-grammar-10-3": {
    notes: "Kata penunjuk posisi: 上 (ue/atas), 下 (shita/bawah), 前 (mae/depan), 後ろ (ushiro/belakang), 右 (migi/kanan), 左 (hidari/kiri), 中 (naka/dalam), 隣 (tonari/sebelah). Dihubungkan dengan benda acuan menggunakan partikel 'の'.",
    formation: [{ type: "Position", rule: "Benda Acuan + の + Posisi", example: "机 の 上 (Atas meja)" }],
    common_mistakes: "Menerjemahkan secara harfiah dari bahasa Indonesia. Di bahasa Indonesia 'Atas Meja', orang sering salah menerjemahkan menjadi '上 の 机' (salah). Bahasa Jepang membalik susunannya menjadi 'Meja の Atas'.",
    quiz: [{
      question: "'Di dalam tas'",
      options: ["中の かばん", "かばんの 中", "かばんの 上", "上の かばん"],
      answer: "かばんの 中",
      explanation: "Benda utama dulu (かばん), lalu partikel 'の', lalu posisinya (中)."
    }]
  },
  "n5-grammar-11-1": {
    notes: "Pola ini digunakan untuk menyisipkan jumlah (Counter) ke dalam kalimat. Posisinya: Partikel 'を' -> Jumlah/Counter -> Kata Kerja.",
    formation: [{ type: "Counting", rule: "Benda + を + (Counter) + V-masu", example: "りんご を ３つ 買いました" }],
    common_mistakes: "Menambahkan partikel 'の' antara jumlah dan kata kerja (salah: りんごを３つの買いました). Counter (kecuali dalam kondisi tertentu) menempel bebas SEBELUM kata kerja.",
    quiz: [{
      question: "Makan dua buah apel.",
      options: ["りんごを 食べます ２つ", "２つの りんごを 食べます", "りんごを ２つ 食べます", "りんご ２つを 食べます"],
      answer: "りんごを ２つ 食べます",
      explanation: "Urutan paling natural: [Benda を] [Counter] [Kata Kerja]."
    }]
  },
  "n5-grammar-11-2": {
    notes: "'どのくらい' (dono kurai) berarti 'berapa lama' atau 'sebanyak apa'. Digunakan untuk menanyakan durasi waktu atau jumlah uang/jarak.",
    formation: [{ type: "Duration", rule: "どのくらい + V-masu + か", example: "どのくらい 日本語を 勉強しましたか" }],
    common_mistakes: "Menjawab pertanyaan durasi ('berapa lama') dengan waktu spesifik ('jam 3'). Pertanyaan durasi harus dijawab dengan rentang waktu, misalnya '3 jam' (3時間 / 3-jikan).",
    quiz: [{
      question: "Q: どのくらい 勉強しますか。 A: ____。",
      options: ["３時です", "３時間です", "３分です", "B dan C benar"],
      answer: "B dan C benar",
      explanation: "Durasi waktu: Jikan (jam), Fun/Pun (menit). B dan C menunjukkan durasi yang valid."
    }]
  },
  "n5-grammar-12-1": {
    notes: "Pola komparatif (Perbandingan). Menyatakan bahwa N1 lebih (sifat) dibandingkan N2. Partikel 'より' (yori) berarti 'daripada'.",
    formation: [{ type: "Comparison", rule: "N1 + は + N2 + より + Kata Sifat + です", example: "日本 は インドネシア より 寒いです" }],
    common_mistakes: "Salah meletakkan 'より'. Ingat, 'より' menempel pada benda yang menjadi PEMBANDING (yang dikalahkan/lebih lemah).",
    quiz: [{
      question: "Pesawat lebih cepat daripada kereta.",
      options: ["飛行機は 電車より 速いです", "電車は 飛行機より 速いです", "飛行機より 電車は 速いです", "飛行機は 電車が 速いです"],
      answer: "飛行機は 電車より 速いです",
      explanation: "Subjek utama (Pesawat/Hikouki) + は + Pembanding (Kereta/Densha) + より + Sifat (Cepat/Hayai)."
    }]
  },
  "n5-grammar-12-2": {
    notes: "Digunakan untuk menanyakan perbandingan antara DUA hal. Partikel 'と' dipakai dua kali. Kata tanya selalu menggunakan 'どちらが' (yang mana yang...).",
    formation: [{ type: "Question Comparison", rule: "N1 + と + N2 + と + どちらが + Sifat + ですか", example: "犬 と 猫 と どちらが 好きですか" }],
    common_mistakes: "Menggunakan kata tanya 'だれ' (siapa) atau 'なに' (apa). Jika pilihannya hanya DUA, wajib menggunakan 'どちら' (dochira).",
    quiz: [{
      question: "Mana yang lebih murah, daging sapi atau daging babi?",
      options: ["牛肉と 豚肉と なにが 安いですか", "牛肉と 豚肉と どれが 安いですか", "牛肉と 豚肉と どちらが 安いですか", "牛肉と 豚肉と どちらも 安いですか"],
      answer: "牛肉と 豚肉と どちらが 安いですか",
      explanation: "Untuk memilih di antara dua opsi, gunakan 'どちらが' (mana yang)."
    }]
  },
  "n5-grammar-12-3": {
    notes: "Pola Superlatif. Menanyakan apa yang PALING (一番 / ichiban) dari sebuah kategori besar (keluarga, musim, olahraga, dll).",
    formation: [{ type: "Superlative Question", rule: "Kategori + で + 何/どこ/だれ/いつ + が + 一番 + Sifat + ですか", example: "日本 で どこ が 一番 きれいですか" }],
    common_mistakes: "Menggunakan partikel 'は' sebelum '一番'. Yang benar adalah menggunakan partikel 'が' karena menyoroti subjek baru sebagai jawaban unik.",
    quiz: [{
      question: "Di keluarga, siapa yang paling tinggi?",
      options: ["家族で だれが 一番 背が高いですか", "家族で だれは 一番 背が高いですか", "家族は だれが 一番 背が高いですか", "家族は だれは 一番 背が高いですか"],
      answer: "家族で だれが 一番 背が高いですか",
      explanation: "Kategori ruang lingkup pakai 'で' (Kozoku de), lalu kata tanya + 'が' (Dare ga)."
    }]
  },
  "n5-grammar-13-1": {
    notes: "Menyatakan KEINGINAN terhadap suatu BENDA. 'ほしい' (hoshii) berarti 'ingin (punya)'. Ini berfungsi sebagai I-Adj, sehingga membutuhkan partikel 'が'.",
    formation: [{ type: "Desire (Noun)", rule: "Subjek(Saya) + は + Benda + が + ほしいです", example: "わたし は パソコン が ほしいです" }],
    common_mistakes: "Digunakan untuk menanyakan keinginan pihak ketiga (contoh: Budi-san ingin HP). Dalam budaya Jepang, kurang sopan menebak secara langsung keinginan orang ketiga pakai 'hoshii'. Hanya dipakai untuk DIRI SENDIRI atau bertanya langsung ke lawan bicara.",
    quiz: [{
      question: "Saya ingin mobil baru.",
      options: ["わたしは 新しい車を ほしいです", "わたしは 新しい車が ほしいです", "わたしは 新しい車に ほしいです", "わたしは 新しい車で ほしいです"],
      answer: "わたしは 新しい車が ほしいです",
      explanation: "'ほしい' adalah I-Adj, objek dari keinginan ditandai dengan partikel 'が'."
    }]
  },
  "n5-grammar-13-2": {
    notes: "Menyatakan KEINGINAN untuk MELAKUKAN SESUATU. Akhiran 'ます' (masu) pada kata kerja diubah menjadi 'たい' (tai). Gabungan ini akan berubah sifat menjadi I-Adj.",
    formation: [{ type: "Desire (Verb)", rule: "V-masu (buang masu) + たいです", example: "寿司 が 食べたいです" }],
    common_mistakes: "Lupa membuang 'masu'. Contoh salah: '食べますたい' (salah). Benar: '食べたい'. Objek bisa pakai 'を' atau 'が' secara bebas, namun 'が' lebih disarankan.",
    quiz: [{
      question: "Ingin minum air.",
      options: ["水を 飲みたいです", "水が 飲みたいです", "A dan B benar", "水を 飲みますたいです"],
      answer: "A dan B benar",
      explanation: "Untuk bentuk '-tai', partikel objek boleh memakai 'を' (fokus pada aksi minum) maupun 'が' (fokus pada air yang diinginkan)."
    }]
  },
  "n5-grammar-13-3": {
    notes: "Menyatakan TUJUAN kepergian. Digabung dengan kata kerja gerak (行く/来る/帰る). Bentuknya: V-masu (buang masu) + に + 行く.",
    formation: [{ type: "Purpose of movement", rule: "Tempat + へ + V-masu(buang masu) + に + 行きます", example: "デパート へ 服 を 買い に 行きます" }],
    common_mistakes: "Lupa menghapus kata 'ます'. (Salah: 買いますに行きます). (Benar: 買いに行きます).",
    quiz: [{
      question: "Pergi ke taman untuk bermain.",
      options: ["公園へ 遊びますに 行きます", "公園へ 遊びに 行きます", "公園へ 遊んでに 行きます", "公園へ 遊ぶに 行きます"],
      answer: "公園へ 遊びに 行きます",
      explanation: "Asobi (akar/stem dari Asobimasu) + ni + Ikimasu."
    }]
  },
  "n5-grammar-14-1": {
    notes: "Meminta bantuan / instruksi ('Tolong lakukan...'). Kata kerja wajib diubah ke BENTUK TE. Cara mengubah ke bentuk te bergantung pada golongan kata kerja (I, II, III).",
    formation: [{ type: "Request", rule: "V-te + ください", example: "ここに 書いて ください" }],
    common_mistakes: "Salah mengkonjugasi bentuk Te pada golongan 1. Misalnya 'Kaimasu' (membeli) menjadi 'Kaite' (SALAH, harusnya 'Katte').",
    quiz: [{
      question: "'Tolong tunggu sebentar.'",
      options: ["ちょっと まちて ください", "ちょっと まって ください", "ちょっと まんで ください", "ちょっと まして ください"],
      answer: "ちょっと まって ください",
      explanation: "Machimasu (menunggu) -> bentuk te nya adalah 'Matte'."
    }]
  },
  "n5-grammar-14-2": {
    notes: "Menyatakan hal yang SEDANG terjadi (Present Continuous). Sama seperti V-ing dalam bahasa Inggris.",
    formation: [{ type: "Ongoing action", rule: "V-te + います", example: "今 雨 が 降って います" }],
    common_mistakes: "Tidak menggunakan pola ini saat aksi sedang berlangsung saat pembicara mengucapkan kalimatnya. (Orang sering hanya pakai V-masu, yang mana berarti 'akan', bukan 'sedang').",
    quiz: [{
      question: "'Saya sedang makan nasi sekarang.'",
      options: ["今 ごはんを 食べます", "今 ごはんを 食べました", "今 ごはんを 食べています", "今 ごはんを 食べてください"],
      answer: "今 ごはんを 食べています",
      explanation: "Tabete imasu (Sedang makan)."
    }]
  },
  "n5-grammar-14-3": {
    notes: "Meminta izin ('Bolehkah saya...?'). Kata kerja diubah ke bentuk TE ditambah 'も いいですか'.",
    formation: [{ type: "Permission", rule: "V-te + も いいですか", example: "写真 を 撮って も いいですか" }],
    common_mistakes: "Lupa menambahkan 'も' (mo). Jika hanya bilang 'V-te ii desu ka', itu tidak natural. Harus lengkap 'V-te MO ii desu ka'.",
    quiz: [{
      question: "'Bolehkah saya duduk di sini?'",
      options: ["ここに 座って も いいですか", "ここに 座り も いいですか", "ここに 座る も いいですか", "ここに 座って いいですか"],
      answer: "ここに 座って も いいですか",
      explanation: "Suwarimasu -> Suwatte + mo ii desu ka."
    }]
  },
  "n5-grammar-14-4": {
    notes: "Larangan keras ('Tidak boleh...'). Kata kerja diubah ke bentuk TE ditambah 'は いけません' (wa ikemasen).",
    formation: [{ type: "Prohibition", rule: "V-te + は いけません", example: "ここで タバコ を 吸って は いけません" }],
    common_mistakes: "Tertukar dengan 'V-naide kudasai' (Tolong jangan). Ikemasen jauh lebih keras dan mutlak aturannya (misal aturan di rumah sakit / rambu lalu lintas).",
    quiz: [{
      question: "'Di perpustakaan, tidak boleh makan.'",
      options: ["図書館で 食べては いけません", "図書館で 食べて もいいです", "図書館で 食べて ください", "図書館で 食べない ください"],
      answer: "図書館で 食べては いけません",
      explanation: "Tabete (Bentuk te) + wa + ikemasen (Tidak boleh)."
    }]
  },
  "n5-grammar-15-1": {
    notes: "Selain untuk 'sedang melakukan', pola 'V-te imasu' juga digunakan untuk KONDISI (sudah menikah, tahu/mengenal, tinggal di suatu tempat) atau KEBIASAAN/Profesi yang rutin dilakukan.",
    formation: [{ type: "State / Habit", rule: "V-te + います", example: "わたし は 大阪 に 住んで います" }],
    common_mistakes: "Menggunakan V-masu biasa. Contoh: 'Kekkon shimasu' (Artinya: Saya AKAN menikah). Jika maksudnya 'sudah menikah (status berkeluarga)', harus menggunakan 'Kekkon shite imasu'.",
    quiz: [{
      question: "'Saya kenal/tahu tentang Yamada.'",
      options: ["山田さんを 知ります", "山田さんを 知っています", "山田さんを 知りました", "山田さんを 知ってです"],
      answer: "山田さんを 知っています",
      explanation: "Kata kerja Shirimasu (tahu) dalam arti 'mengenal' selalu menggunakan bentuk Te-imasu (Shitte imasu)."
    }]
  },
  "n5-grammar-15-2": {
    notes: "Pola penyambungan kalimat (Bentuk Te) khusus untuk memberikan petunjuk arah beruntun.",
    formation: [{ type: "Giving Directions", rule: "Kalimat A(Te-form) + Kalimat B(Masu-form)", example: "信号 を 右へ 曲がって、まっすぐ 行きます" }],
    common_mistakes: "Menggunakan partikel 'に' untuk berbelok. Titik/benda yang di-belok-i/dilewati menggunakan partikel 'を'. (Contoh: Kado o magatte = berbelok di sudut).",
    quiz: [{
      question: "Berbelok ke kiri di lampu merah.",
      options: ["信号に 左へ 曲がります", "信号で 左へ 曲がります", "信号を 左へ 曲がります", "信号が 左へ 曲がります"],
      answer: "信号を 左へ 曲がります",
      explanation: "Menikung/melewati suatu titik (lampu merah) ditandai dengan partikel 'を'."
    }]
  },
  "n5-grammar-16-1": {
    notes: "Merangkai beberapa aktivitas berurutan ('Lakukan A, lalu lakukan B, lalu lakukan C'). Semua kata kerja di awal menggunakan bentuk TE, dan kata kerja PALING AKHIR menentukan tenses-nya (sekarang/lampau).",
    formation: [{ type: "Sequential Action", rule: "V1-te + V2-te + V3-masu/mashita", example: "朝 ６時に 起きて、シャワーを 浴びて、ごはんを 食べます" }],
    common_mistakes: "Mencoba men-tense-kan (melampaukan) kata kerja pertama dan kedua. (Contoh salah: Okimashita, abite...). Semua wajib bentuk TE, hanya yang terakhir yang dikonjugasikan.",
    quiz: [{
      question: "'Tadi pagi saya berlari, mandi, lalu pergi ke sekolah.' (Kalimat lampau)",
      options: ["走って、浴びて、学校へ行きました", "走りました、浴びて、学校へ行きました", "走って、浴びました、学校へ行きました", "走る、浴びる、学校へ行きました"],
      answer: "走って、浴びて、学校へ行きました",
      explanation: "Dua kerja awal di-Te-kan (hashitte, abite), yang terakhir menjadi lampau (ikimashita)."
    }]
  },
  "n5-grammar-16-2": {
    notes: "Menyambung DUA KATA SIFAT atau lebih dalam satu kalimat ('dan'). I-Adj: hilangkan 'i' ganti 'kute'. Na-Adj: tambah 'de'. Noun: tambah 'de'.",
    formation: [
      { type: "I-Adj", rule: "I-Adj(buang i) + くて", example: "安くて、おいしいです (Murah dan enak)" },
      { type: "Na-Adj", rule: "Na-Adj + で", example: "静かで、きれいです (Sepi dan bersih)" }
    ],
    common_mistakes: "Menyambung dengan kata 'と' (to). 'と' hanya untuk menyambung Kata Benda murni, tidak bisa untuk Kata Sifat.",
    quiz: [{
      question: "Kamar saya luas dan bersih.",
      options: ["わたしの部屋は 広くて、きれいです", "わたしの部屋は 広いと、きれいです", "わたしの部屋は 広いして、きれいです", "わたしの部屋は 広いで、きれいです"],
      answer: "わたしの部屋は 広くて、きれいです",
      explanation: "Hiroi (I-Adj) -> Hirokute (Luas dan...)."
    }]
  },
  "n5-grammar-17-1": {
    notes: "Meminta seseorang UNTUK TIDAK melakukan sesuatu ('Tolong jangan...'). Kata kerja harus diubah ke BENTUK NAI (V-nai).",
    formation: [{ type: "Negative Request", rule: "V-nai + で ください", example: "ここで 写真を 撮らないで ください" }],
    common_mistakes: "Lupa mengubah ke bentuk Nai dengan benar (golongan 1: vokal u menjadi a, contoh: Kaku -> Kakanai).",
    quiz: [{
      question: "Tolong jangan masuk.",
      options: ["はいらないで ください", "はいないで ください", "はいれないで ください", "はいいないで ください"],
      answer: "はいらないで ください",
      explanation: "Hairimasu (Masuk) adalah golongan 1 (pengecualian), bentuk nai-nya adalah Hairanai."
    }]
  },
  "n5-grammar-17-2": {
    notes: "Menyatakan KEWAJIBAN atau KEHARUSAN ('Harus... / Must'). Kata kerja bentuk NAI, 'nai' nya dihilangkan, lalu ditambah 'nakereba narimasen'.",
    formation: [{ type: "Obligation", rule: "V-nai (buang nai) + なければ なりません", example: "薬 を 飲まなければ なりません" }],
    common_mistakes: "Pola kalimat ini sangat panjang dan kaku, sering terpeleset membacanya. Secara literal artinya 'Jika tidak dilakukan, tidak akan jadi (benar)'.",
    quiz: [{
      question: "'Saya harus pulang.'",
      options: ["帰らなれば なりません", "帰らないければ なりません", "帰らなければ なりません", "帰りなければ なりません"],
      answer: "帰らなければ なりません",
      explanation: "Kaeranai -> buang nai -> Kaeranakereba + narimasen."
    }]
  },
  "n5-grammar-17-3": {
    notes: "Menyatakan KETIDAKHARUSAN ('Tidak perlu... / Tidak usah...'). Kata kerja bentuk NAI, 'nai' nya dihilangkan, ditambah 'nakutemo ii desu'.",
    formation: [{ type: "No Obligation", rule: "V-nai (buang nai) + なくても いいです", example: "明日 は 来なくても いいです" }],
    common_mistakes: "Sering salah artikan sebagai 'Tidak boleh'. Ingat: 'Tidak boleh' pakai V-te wa ikemasen. 'Tidak perlu' pakai V-nakutemo ii desu.",
    quiz: [{
      question: "Hari ini adalah hari libur. 'Tidak perlu bekerja.'",
      options: ["働いては いけません", "働かなくても いいです", "働かないで ください", "働かなければ なりません"],
      answer: "働かなくても いいです",
      explanation: "Hatarakanai -> Hatarakanakutemo ii desu (Tidak perlu bekerja)."
    }]
  },
  "n5-grammar-18-1": {
    notes: "Menyatakan KEMAMPUAN ('Bisa / Dapat'). Kata kerja harus diubah ke BENTUK KAMUS (Dictionary form / V-ru), ditambah 'koto ga dekimasu'.",
    formation: [{ type: "Ability", rule: "V-(bentuk kamus) + こと が できます", example: "漢字 を 読む こと が できます" }],
    common_mistakes: "Lupa menyisipkan 'こと' (koto). Kata kerja tidak bisa langsung bertemu 'が'. 'こと' berfungsi men-kata-benda-kan kata kerja.",
    quiz: [{
      question: "Saya bisa mengendarai mobil.",
      options: ["車を 運転するが できます", "車を 運転するが できます", "車を 運転すること が できます", "車を 運転しますこと が できます"],
      answer: "車を 運転すること が できます",
      explanation: "Untensuru (bentuk kamus) + koto ga dekimasu."
    }]
  },
  "n5-grammar-18-2": {
    notes: "Menyatakan URUTAN MUNDUR ('Sebelum melakukan A, saya melakukan B'). Aksi yang belum terjadi (A) HARUS selalu dalam Bentuk Kamus (walaupun B-nya lampau).",
    formation: [{ type: "Before doing", rule: "V-(bentuk kamus) + 前(まえ) に、V2", example: "寝る 前に、本 を 読みます" }],
    common_mistakes: "Menggunakan bentuk V-masu atau Lampau sebelum 'mae ni'. (Salah: 寝ました前に). Apapun tense-nya, kata kerja sebelum 'mae ni' WAJIB bentuk kamus dasar.",
    quiz: [{
      question: "'Kemarin, sebelum makan saya mencuci tangan.'",
      options: ["食べる 前に、手を 洗いました", "食べた 前に、手を 洗いました", "食べます 前に、手を 洗いました", "食べて 前に、手を 洗いました"],
      answer: "食べる 前に、手を 洗いました",
      explanation: "Meskipun lampau (kemarin), sebelum 'mae ni' tetap pakai bentuk kamus (taberu)."
    }]
  },
  "n5-grammar-18-3": {
    notes: "Menjelaskan HOBI ('Hobi saya adalah melakukan...'). Kata kerjanya juga HARUS BENTUK KAMUS ditambah 'koto desu'.",
    formation: [{ type: "Hobby", rule: "趣味(shumi) は + V-(bentuk kamus) + こと です", example: "趣味 は 映画 を 見る こと です" }],
    common_mistakes: "Hanya bilang 'Shumi wa eiga o mimasu' (Salah tatanan). Kalimat nominal N1 wa N2 desu menuntut sisi kanan berupa Kata Benda. Penambahan 'koto desu' membuatnya sah.",
    quiz: [{
      question: "Hobi saya adalah memotret foto.",
      options: ["わたしの趣味は 写真を 撮るです", "わたしの趣味は 写真を 撮るの です", "わたしの趣味は 写真を 撮ること です", "わたしの趣味は 写真を 撮ります です"],
      answer: "わたしの趣味は 写真を 撮ること です",
      explanation: "Bentuk kamus (toru) + koto desu."
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

console.log(`Berhasil menyuntikkan data aktual untuk ${injectedCount} pola tata bahasa (Batch 2).`);

if (injectedCount > 0) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(grammarData, null, 2), 'utf8');
  console.log("✅ Update grammar-points.json sukses!");
}
