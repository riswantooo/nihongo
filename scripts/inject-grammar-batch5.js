import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'grammar-points.json');

const updates = {
  "n4-grammar-38-2": {
    notes: "Menjadikan kalimat kerja sebagai objek untuk 'wasaremashita' (lupa melakukan/membawa) dan 'shitte imasuka' (apakah kamu tahu bahwa...).",
    formation: [{ type: "Object Nominalization", rule: "V-ru / Plain form + のを + 忘れました / 知っていますか", example: "薬を 飲む のを 忘れました" }],
    common_mistakes: "Lupa menyisipkan partikel 'の'. Menggabungkan kata kerja dasar langsung dengan 'を' adalah hal yang tabu. (Salah: 飲むを忘れました). Harus dijadikan nomina (benda) dulu dengan 'の'.",
    quiz: [{
      question: "Apakah kamu tahu bahwa Tanaka sudah menikah?",
      options: ["田中さんが 結婚したのが 知っていますか", "田中さんが 結婚したのを知っていますか", "田中さんが 結婚するのを知っていますか", "田中さんが 結婚したを知っていますか"],
      answer: "田中さんが 結婚したのを知っていますか",
      explanation: "Telah menikah (kekkon shita) + no o + shitte imasuka."
    }]
  },
  "n4-grammar-39-1": {
    notes: "Partikel 'te' (V-te/Adj-kute/Noun-de) bisa berfungsi sebagai 'KARENA', tetapi terbatas HANYA untuk 3 kondisi: 1. Alasan yang memicu perasaan (Kaget karena...), 2. Alasan potensial/kemampuan (Tidak bisa tidur karena bising), 3. Situasi tak terhindarkan (Tumbang karena gempa).",
    formation: [{ type: "Reason (Limited)", rule: "V-te / Adj-te / N-de + Perasaan/Situasi", example: "ニュース を 聞いて、びっくりしました" }],
    common_mistakes: "Memakai '-te' untuk alasan aksi sadar. (Salah: Hujan turun KARENA ITU ayo pulang -> 雨が降って、帰りましょう). Untuk ajakan/perintah/aksi sadar, harus menggunakan 'kara' atau 'node'.",
    quiz: [{
      question: "Saya sedih karena peliharaan saya mati.",
      options: ["ペットが 死んだから、悲しいです", "ペットが 死んで、悲しいです", "A dan B benar", "ペットが 死んだので、悲しいです"],
      answer: "A dan B benar",
      explanation: "Alasan untuk perasaan (Kanashii/sedih) bisa memakai -te (Shinde) maupun kara/node."
    }]
  },
  "n4-grammar-39-2": {
    notes: "Kondisi khusus partikel 'で' (de). Jika diikuti oleh bencana alam (gempa, tsunami), penyakit, atau kecelakaan, 'で' bermakna 'Akibat / Karena'.",
    formation: [{ type: "Cause (Noun)", rule: "Bencana/Kecelakaan + で", example: "地震 で ビル が 倒れました" }],
    common_mistakes: "Menggunakan 'から'. 'Jishin kara...' terdengar seperti 'Mulai dari gempa...'. Untuk menyebut bencana/insiden sebagai sebab, gunakan partikel 'で'.",
    quiz: [{
      question: "Terlambat karena kecelakaan.",
      options: ["事故で 遅れました", "事故に 遅れました", "事故を 遅れました", "事故から 遅れました"],
      answer: "事故で 遅れました",
      explanation: "Kecelakaan (jiko) adalah insiden, maka menggunakan 'de'."
    }]
  },
  "n4-grammar-40-1": {
    notes: "Menyisipkan kalimat tanya ('Kapan, Siapa, Di mana') ke dalam kalimat utama. Kalimat tanya tersebut wajib diubah ke Plain Form dan diakhiri dengan 'か'.",
    formation: [{ type: "Embedded Question", rule: "Kata Tanya + Plain Form + か、~", example: "いつ 行くか、わかりません" }],
    common_mistakes: "Masih menyisakan kata 'desu/masu' di tengah kalimat. (Salah: いつ行きますか、わかりません).",
    quiz: [{
      question: "Tolong hitung berapa orang yang ada.",
      options: ["何人が いるか、数えてください", "何人が いますか、数えてください", "何人が いるか、数えてます", "何人が いるだか、数えてください"],
      answer: "何人が いるか、数えてください",
      explanation: "Berapa orang yang ada (Nannin ga iru) + ka + tolong hitung (kazoete kudasai)."
    }]
  },
  "n4-grammar-40-2": {
    notes: "Sama seperti 40-1, namun digunakan untuk pertanyaan 'Iya atau Tidak' (Tidak ada kata tanya seperti Kapan/Siapa). Partikel yang dipakai adalah 'かどうか' (Apakah... atau tidak).",
    formation: [{ type: "Whether or not", rule: "Plain Form + かどうか、~", example: "おいしい かどうか、食べてみます" }],
    common_mistakes: "Lupa menghapus 'だ' pada Kata Benda dan Na-Adj sebelum 'ka dou ka'. (Salah: 本当だかどうか). Benar: 本当かどうか (Apakah benar atau tidak).",
    quiz: [{
      question: "Saya tidak tahu apakah dia akan datang atau tidak.",
      options: ["来るか どうか、わかりません", "来るか、わかりません", "来るかどうかを、わかりません", "来ますかどうか、わかりません"],
      answer: "来るか どうか、わかりません",
      explanation: "Kuru (Akan datang) + ka dou ka + Wakarimasen."
    }]
  },
  "n4-grammar-41-1": {
    notes: "Tingkatan sopan dari Memberi (Ageru) dan Menerima (Morau). \n貰う (Menerima) -> いただく (Itadaku).\nくれる (Memberi ke saya) -> くださる (Kudasaru).\nやる (Memberi ke bawahan/hewan) -> Yarimasu.",
    formation: [{ type: "Polite Giving/Receiving", rule: "いただきます / くださいます / やります", example: "先生 に 本 を いただきました" }],
    common_mistakes: "Menggunakan 'kudasaimasu' ketika subjeknya adalah diri sendiri. Ingat: Kudasaru adalah SENSEI yang memberi. Itadaku adalah SAYA yang menerima.",
    quiz: [{
      question: "Saya memberi makan kepada anjing.",
      options: ["犬に えさを あげます", "犬に えさを やります", "犬に えさを いただきます", "A dan B benar"],
      answer: "A dan B benar",
      explanation: "Ageru bisa dipakai, tapi 'Yaru/Yarimasu' lebih spesifik untuk memberi ke bawahan mutlak/hewan/tanaman."
    }]
  },
  "n4-grammar-41-2": {
    notes: "Sama seperti 41-1, namun digunakan untuk JASA/Tindakan (V-te). \nV-te Itadakimasu = Saya menerima jasa dari atasan.\nV-te Kudasaimasu = Atasan memberikan jasa ke saya.",
    formation: [{ type: "Polite Favor", rule: "V-te いただきます / V-te くださいます", example: "社長 が 案内 して くださいました" }],
    common_mistakes: "Salah menentukan subjek. Jika kalimatnya 'Watashi wa (Saya)', pasangannya 'Itadakimasu'. Jika 'Shachou wa/ga (Bos)', pasangannya 'Kudasaimasu'.",
    quiz: [{
      question: "Saya dibantu (diperiksa laporannya) oleh manajer.",
      options: ["わたしは 部長に レポートを 見ていただきました", "わたしは 部長に レポートを 見てくださいました", "部長は わたしに レポートを 見ていただきました", "部長は わたしに レポートを 見てあげました"],
      answer: "わたしは 部長に レポートを 見ていただきました",
      explanation: "Subjek adalah Saya (Watashi wa) + Menerima jasa dari atasan (Itadakimashita)."
    }]
  },
  "n4-grammar-42-1": {
    notes: "Pola 'tame ni' untuk menyatakan TUJUAN KUAT ('Demi / Untuk'). Diikuti oleh kata kerja yang berniat (Aksi aktif), bukan kondisi pasif.",
    formation: [{ type: "Purpose (Active)", rule: "V-ru / Noun + の + ために", example: "家族 の ために 働きます" }],
    common_mistakes: "Menggabungkannya dengan kata kerja potensial. (Salah: 日本語が話せるために - Untuk bisa bicara Jepang). Karena 'Bisa' adalah kondisi pasif, harusnya menggunakan 'Youni', bukan 'Tame ni'.",
    quiz: [{
      question: "Menabung demi membeli rumah.",
      options: ["家を買うために、貯金します", "家を買うように、貯金します", "家が買えるために、貯金します", "家を買うのに、貯金します"],
      answer: "家を買うために、貯金します",
      explanation: "'Membeli' adalah aksi kuat dengan niat, maka wajib 'Tame ni'."
    }]
  },
  "n4-grammar-42-2": {
    notes: "Pola '〜のに' (noni). Mirip dengan 'tame ni', tetapi khusus dipasangkan dengan kata 'Tsukaimasu' (Menggunakan), 'Yaku ni tachimasu' (Bermanfaat), atau 'Ii/Warui' (Bagus untuk).",
    formation: [{ type: "Usage / Good for", rule: "V-ru / Noun + のに + 使う/いい", example: "この はさみは 花 を 切る のに 使います" }],
    common_mistakes: "Tertukar dengan 'noni' (Padahal). Konteks kalimat ini berbeda. Jika diikuti kata-kata fungsi (tsukau, ii, yaku ni tatsu), artinya adalah 'Untuk (digunakan/bermanfaat)'.",
    quiz: [{
      question: "Buku ini bermanfaat untuk belajar sejarah.",
      options: ["歴史を勉強するのに 役に立ちます", "歴史を勉強するために 役に立ちます", "歴史を勉強するに 役に立ちます", "歴史を勉強するように 役に立ちます"],
      answer: "歴史を勉強するのに 役に立ちます",
      explanation: "Pasangan mutlak 'Yaku ni tachimasu' adalah partikel '〜のに'."
    }]
  },
  "n4-grammar-43-1": {
    notes: "Pola Sou desu (Kesan/Tebakan Visual). Artinya 'Kelihatannya... / Sepertinya...'. V-masu dan Adj membuang akhiran (-masu / -i / -na) lalu ditempel 'sou desu'.",
    formation: [{ type: "Visual Impression", rule: "V-(buang masu) / Adj-(buang i/na) + そうです", example: "この ケーキは おいしそうです" }],
    common_mistakes: "Langsung menempelkan ke Noun. Pola 'Sou desu' kelihatannya TIDAK BISA dipasang ke kata benda. Pengecualian: 'いい' (bagus) menjadi 'よさそうです' (kelihatannya bagus).",
    quiz: [{
      question: "Hari ini sepertinya (akan) turun hujan. (Melihat awan mendung)",
      options: ["雨が 降るそうです", "雨が 降りそうです", "雨が 降ってそうです", "雨が 降らないそうです"],
      answer: "雨が 降りそうです",
      explanation: "Furimasu -> Furi + Sou desu (Akan/Kelihatannya turun)."
    }]
  },
  "n4-grammar-43-2": {
    notes: "Kata kerja bentuk te + 来ます (Kimasu). Menunjukkan bahwa subjek pergi melakukan suatu aksi, lalu akan KEMBALI lagi ke tempat semula.",
    formation: [{ type: "Action and return", rule: "V-te + 来ます", example: "ちょっと 切手 を 買って 来ます" }],
    common_mistakes: "Hanya berarti 'Datang'. V-te kimasu lebih berfokus pada proses 'Pergi (melakukan sesuatu) dan kembali lagi (datang)'.",
    quiz: [{
      question: "Saya pergi sebentar untuk mencuci tangan (lalu akan kembali ke sini).",
      options: ["手を 洗って きます", "手を 洗って いきます", "手を 洗って 帰ります", "手を 洗いに きます"],
      answer: "手を 洗って きます",
      explanation: "Aksi (Araimasu -> Aratte) + Kimasu (dan akan kembali)."
    }]
  },
  "n4-grammar-44-1": {
    notes: "Menyatakan kondisi yang TERLALU / BERLEBIHAN (Too much). Akhiran -masu / -i / -na dibuang, lalu ditambah 'sugimasu'. Sifatnya seringkali mengarah pada hal negatif.",
    formation: [{ type: "Too much", rule: "V-(buang masu) / Adj-(buang i/na) + すぎます", example: "この シャツは 大きすぎます" }],
    common_mistakes: "Lupa membuang akhiran 'i'. (Salah: 高いすぎます). (Benar: 高すぎます). 'Sugimasu' sendiri adalah kata kerja Gol 2, sehingga bisa dikonjugasikan (Sugita, Suginai).",
    quiz: [{
      question: "Kemarin malam, saya minum (alkohol) terlalu banyak.",
      options: ["飲みすぎます", "飲みすぎました", "飲むすぎました", "飲んですぎました"],
      answer: "飲みすぎました",
      explanation: "Nomimasu -> Nomi + sugimashita (lampau)."
    }]
  },
  "n4-grammar-44-2": {
    notes: "Yasuidesu = 'Mudah (di)lakukan'. Nikuidesu = 'Sulit/Susah (di)lakukan'. Menggunakan akar kata kerja (V-masu tanpa masu). Gabungan ini akan berubah sifat menjadi I-Adj.",
    formation: [{ type: "Easy/Hard to do", rule: "V-(buang masu) + やすい / にくい", example: "この 薬は 飲みやすいです" }],
    common_mistakes: "Tertukar dengan 'Yasuidesu' (Murah). 'Yasuidesu' yang digabung dengan kata kerja artinya bukan murah, melainkan mudah.",
    quiz: [{
      question: "Kanji ini sulit ditulis.",
      options: ["この漢字は 書くにくいです", "この漢字は 書きにくいです", "この漢字は むずかしい書きます", "この漢字は 書かないです"],
      answer: "この漢字は 書きにくいです",
      explanation: "Kakimasu -> Kaki + Nikuidesu."
    }]
  },
  "n4-grammar-45-1": {
    notes: "Pola 'Baai wa' (Dalam kasus... / Seandainya). Bersifat lebih formal daripada '-tara' atau '-ba'. Biasanya dipakai pada manual, pengumuman darurat, atau peraturan.",
    formation: [{ type: "In case of", rule: "Plain Form + 場合は", example: "火事 の 場合は、逃げてください" }],
    common_mistakes: "Menggunakan bentuk Noun tanpa partikel 'の'. (Salah: 火事場合は). Baai adalah kata benda, jadi harus memakai hukum penggabungan kata benda (Kaji NO baai).",
    quiz: [{
      question: "Dalam kasus (mesin) tidak berfungsi, silakan hubungi staf.",
      options: ["動かない場合は、", "動く場合は、", "動かなかった場合は、", "動かないの 場合は、"],
      answer: "動かない場合は、",
      explanation: "Ugokanai (V-nai plain) + Baai wa."
    }]
  },
  "n4-grammar-45-2": {
    notes: "Pola 'noni' (Padahal) dari modul N5 kembali diulas, namun digabung dengan Plain Form secara meluas (Verb, Adj, Noun).",
    formation: [{ type: "Even though (Deepened)", rule: "Plain Form + のに", example: "約束をした のに、彼 は 来ませんでした" }],
    common_mistakes: "Lupa memasang 'な' (na) pada Noun dan Na-Adj. (Salah: 日曜日のに). (Benar: 日曜日なのに - Padahal hari Minggu).",
    quiz: [{
      question: "Padahal cuaca sedang bagus, saya tidak kemana-mana.",
      options: ["いい天気のに、", "いい天気の のに、", "いい天気な のに、", "いい天気だ のに、"],
      answer: "いい天気な のに、",
      explanation: "Tenki (Benda) + na + noni."
    }]
  },
  "n4-grammar-46-1": {
    notes: "'Tokoro desu' berfokus pada DETIK PELAKSANAAN sebuah aksi. \nV-ru tokoro (Baru saja AKAN mulai). \nV-te iru tokoro (SEDANG benar-benar dilakukan sekarang). \nV-ta tokoro (BARU SAJA 1 detik yang lalu selesai).",
    formation: [{ type: "Exact point in time", rule: "V-ru / V-te iru / V-ta + ところです", example: "今 から 食べる ところです (Baru saja mau makan)" }],
    common_mistakes: "Menyamakannya dengan kalimat 'baru saja' (V-ta bakari). 'Bakari' adalah perasaan pembicara (Bisa 1 hari/1 bulan yang lalu dirasa 'baru saja'). Tapi 'ta tokoro' wajib benar-benar baru kelar detik ini juga.",
    quiz: [{
      question: "Busnya baru saja (detik ini) berangkat.",
      options: ["バスは 出発した ところです", "バスは 出発する ところです", "バスは 出発している ところです", "バスは 出発した ばかりです"],
      answer: "バスは 出発した ところです",
      explanation: "Shuppatsu shita (lampau) + tokoro desu (baru saja)."
    }]
  },
  "n4-grammar-46-2": {
    notes: "Menyatakan KEPASTIAN LOGIS ('Pasti... / Seharusnya...'). Kesimpulan ini ditarik karena ada bukti yang logis. Gabungan dengan kata Benda memakai 'の'.",
    formation: [{ type: "Logical expectation", rule: "Plain Form + はずです", example: "彼は 10年 日本に 住んでいますから、日本語が 上手な はずです" }],
    common_mistakes: "Lupa menyisipkan 'な' pada Na-Adj dan 'の' pada Noun. (Jouzu NA hazu desu).",
    quiz: [{
      question: "Kunci itu pasti ada di dalam tas.",
      options: ["かばんの中に あるはずです", "かばんの中に いるはずです", "かばんの中に あったはずです", "かばんの中に あってはずです"],
      answer: "かばんの中に あるはずです",
      explanation: "Aru (bentuk kamus) + hazu desu."
    }]
  },
  "n4-grammar-47-1": {
    notes: "Pola Sou desu (RUMOR). Beda jauh dengan Sou desu (Tebakan 43-1). Di sini, artinya 'Katanya / Kudengar'. Kata yang menempel adalah Plain Form LENGKAP (termasuk 'da' untuk Noun/Na-Adj).",
    formation: [{ type: "Hearsay", rule: "Plain Form + そうです", example: "天気予報に よると、明日は 雨だ そうです" }],
    common_mistakes: "Salah bentuk penggabungan! 'Ame sou desu' = Kelihatannya akan hujan (Tebakan visual Noun tidak sah). 'Ame DA sou desu' = KATANYA akan hujan (Rumor yang kudengar dari luar).",
    quiz: [{
      question: "Katanya Pak Guru (kemarin) sakit.",
      options: ["先生は 病気だったそうです", "先生は 病気なそうです", "先生は 病気だそうです", "先生は 病気だったそうです (A)"],
      answer: "先生は 病気だったそうです",
      explanation: "Sakit di masa lampau (Byouki datta) + sou desu."
    }]
  },
  "n4-grammar-47-2": {
    notes: "You desu (Sepertinya). Kesimpulan kuat hasil analisis berbagai panca indera, bukan sekadar melihat sekilas. Noun dipasang pakai 'の', Na-Adj pakai 'な'.",
    formation: [{ type: "Deduction", rule: "Plain Form + ようです", example: "道路が 濡れています。雨が 降った ようです" }],
    common_mistakes: "Tertukar partikel. 'You desu' pada Noun memakai 'の' (Byouki NO you desu). 'Sou desu (rumor)' memakai 'だ' (Byouki DA sou desu).",
    quiz: [{
      question: "(Melihat banyak orang tertawa di sana). Sepertinya ada sesuatu yang menarik.",
      options: ["おもしろい ようです", "おもしろそうな ようです", "おもしろかった ようです", "おもしろいな ようです"],
      answer: "おもしろい ようです",
      explanation: "Omoshiroi (Plain form I-adj) + You desu."
    }]
  },
  "n4-grammar-48-1": {
    notes: "Bentuk Kausatif (Membiarkan / Menyuruh / Membuat orang lain melakukan aksi). \nGol 1: u -> aseru (行く -> 行かせる).\nGol 2: ru -> saseru (食べる -> 食べさせる).",
    formation: [{ type: "Causative Form", rule: "Subjek penyuruh + は + Objek yang disuruh + に/を + V-kausatif", example: "先生は 生徒に 本を 読ませました" }],
    common_mistakes: "Pola partikel membingungkan. Jika kata kerjanya punya objek (Membaca BUKU), maka orang yang disuruh ditandai partikel 'に' (Seito NI hon o yomaseru). Jika kata kerja intransitif (Berjalan), orang yang disuruh ditandai partikel 'を' (Kodomo O arukaseru).",
    quiz: [{
      question: "Ibu menyuruh (membuat) anak makan sayur.",
      options: ["母は 子供に 野菜を 食べさせました", "母は 子供を 野菜を 食べさせました", "子供は 母に 野菜を 食べさせました", "母は 子供に 野菜を 食べられました"],
      answer: "母は 子供に 野菜を 食べさせました",
      explanation: "Karena ada objek 'Sayur (o)', maka si Anak menggunakan partikel 'ni'."
    }]
  },
  "n4-grammar-48-2": {
    notes: "Bentuk Kausatif + Itadakemasen ka ('Bolehkah SAYA diizinkan melakukan...?'). Ini adalah ungkapan yang sangat amat sopan untuk meminta izin atasan.",
    formation: [{ type: "Asking permission politely", rule: "V-(saseru -> sasete) + いただけませんか", example: "明日 休ませて いただけませんか" }],
    common_mistakes: "Tertukar dengan 'Yasunde itadakemasen ka' (Maukah Anda yang libur). 'Yasumasete' berarti 'Bolehkah SAYA dibuat/diizinkan libur'.",
    quiz: [{
      question: "'Tolong izinkan saya pulang lebih awal.'",
      options: ["早く 帰らせて いただけませんか", "早く 帰って いただけませんか", "早く 帰らされて いただけませんか", "早く 帰りさせて いただけませんか"],
      answer: "早く 帰らせて いただけませんか",
      explanation: "Kaeru -> Kaeraseru -> Kaerasete + itadakemasen ka."
    }]
  },
  "n4-grammar-49-1": {
    notes: "Sonkeigo (Bentuk Hormat). Dipakai untuk menghormati AKSI ATASAN/ORANG LAIN, bukan aksi diri sendiri. Kata kerja khusus: \n行く/来る/いる -> いらっしゃいます\n食べる/飲む -> めしあがります\n言う -> おっしゃいます.",
    formation: [{ type: "Respectful Verbs (Special)", rule: "Kata Kerja Khusus Sonkeigo", example: "社長 は もう 帰られました" }],
    common_mistakes: "Menggunakan Sonkeigo untuk diri sendiri. (Salah besar: Watashi wa meshiagarimasu). Watashi (Saya) dilarang mutlak diangkat memakai Sonkeigo.",
    quiz: [{
      question: "Sensei, (Anda) apa yang akan dimakan?",
      options: ["先生、何を 食べられますか", "先生、何を めしあがりますか", "A dan B benar", "先生、何を いただきますか"],
      answer: "A dan B benar",
      explanation: "Taberareru (Pasif yang jadi hormat) dan Meshiagaru (Hormat mutlak) dua-duanya adalah Sonkeigo. IKU/TABERU memiliki kata khusus."
    }]
  },
  "n4-grammar-49-2": {
    notes: "Sonkeigo pola sisipan. Digunakan untuk kata kerja yang TIDAK PUNYA kata ganti khusus di modul 49-1. \nPolanya: お + V-masu (buang masu) + に なります.",
    formation: [{ type: "Respectful Verbs (Pattern)", rule: "お + V-masu(stem) + に なります", example: "社長は 新しい車に お乗りに なりました" }],
    common_mistakes: "Lupa memasang 'に なります'. (Hanya Ohairi... desu -> salah, kecuali memakai pola pasif O-hairi desu). Pola lengkapnya O ~ Ni Narimasu.",
    quiz: [{
      question: "Bapak Kepala Sekolah sedang membaca buku.",
      options: ["校長先生は 本を お読みに なります", "校長先生は 本を 読まれます", "A dan B benar", "校長先生は 本を お読みします"],
      answer: "A dan B benar",
      explanation: "O-yomi-ni narimasu (pola O~ni narimasu) atau Yomareru (pola pasif hormat) keduanya benar."
    }]
  },
  "n4-grammar-50-1": {
    notes: "Kenjougo (Bentuk Merendah). Berbeda total dari Sonkeigo, Kenjougo digunakan khusus untuk AKSI DIRI SENDIRI demi merendahkan diri dan meninggikan lawan bicara. \n行く/来る -> まいります\nいる -> おります\n食べる/飲む/もらう -> いただきます.",
    formation: [{ type: "Humble Verbs (Special)", rule: "Kata Kerja Khusus Kenjougo", example: "わたし が まいります (Saya yang akan pergi)" }],
    common_mistakes: "Menggunakan Kenjougo untuk Atasan. (Salah besar: Shachou ga mairimasu). Mairimasu hanya untuk diri sendiri atau kolega satu perusahaan saat berbicara dengan pihak luar.",
    quiz: [{
      question: "'Saya (dengan rendah hati) adalah Miller.'",
      options: ["わたしは ミラーと おっしゃいます", "わたしは ミラーと いらっしゃいます", "わたしは ミラーと もうします", "わたしは ミラーと いいます"],
      answer: "わたしは ミラーと もうします",
      explanation: "Iimasu (berkata/bernama) -> Moushimasu (Bentuk Kenjougo untuk diri sendiri)."
    }]
  },
  "n4-grammar-50-2": {
    notes: "Kenjougo pola sisipan. Untuk kata kerja biasa yang tidak punya bentuk khusus. Polanya adalah: お/ご + V-masu(stem) + します.",
    formation: [{ type: "Humble Verbs (Pattern)", rule: "お + V-masu(stem) + します", example: "わたし が お持ち します (Saya akan bawakan)" }],
    common_mistakes: "Tertukar dengan O ~ ni narimasu (Sonkeigo). \nIngat: O ~ shimasu (Saya yang melakukan - Kenjougo). O ~ ni narimasu (Atasan yang melakukan - Sonkeigo).",
    quiz: [{
      question: "'Biar saya yang membantumu.' (Merendah)",
      options: ["わたしが お手伝いに なります", "わたしが お手伝い します", "わたしが お手伝い させます", "わたしが 手伝わさせていただきます"],
      answer: "わたしが お手伝い します",
      explanation: "Tetsudaimasu -> O-tetsudai shimasu (Pola Kenjougo)."
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

console.log(`Berhasil menyuntikkan data aktual untuk ${injectedCount} pola tata bahasa N4 (Batch 5).`);

if (injectedCount > 0) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(grammarData, null, 2), 'utf8');
  console.log("✅ Update grammar-points.json sukses!");
}
