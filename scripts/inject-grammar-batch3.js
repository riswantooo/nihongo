import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'grammar-points.json');

const updates = {
  "n5-grammar-19-1": {
    notes: "Menyatakan PENGALAMAN ('Pernah...'). Kata kerja HARUS diubah ke BENTUK TA (Lampau), lalu ditambah 'koto ga arimasu'.",
    formation: [{ type: "Experience", rule: "V-ta + こと が あります", example: "日本 へ 行った こと が あります" }],
    common_mistakes: "Menggunakan bentuk kamus/sekarang (V-ru). (Contoh salah: 行くことがあります). Jika menggunakan bentuk sekarang, artinya berubah total menjadi 'Terkadang saya melakukan...' (Ini pola N4/N3). Untuk 'Pernah', wajib bentuk TA.",
    quiz: [{
      question: "'Saya pernah makan sushi.'",
      options: ["すしを 食べる ことがあります", "すしを 食べます ことがあります", "すしを 食べて ことがあります", "すしを 食べた ことがあります"],
      answer: "すしを 食べた ことがあります",
      explanation: "Taberu diubah menjadi bentuk lampau (Tabeta) + koto ga arimasu."
    }]
  },
  "n5-grammar-19-2": {
    notes: "Penyebutan beberapa aktivitas yang TIDAK berurutan ('Melakukan (seperti) A, B, dsb'). Diakhiri dengan kata kerja 'します' (shimasu).",
    formation: [{ type: "Representative Actions", rule: "V1-tari, V2-tari + します", example: "日曜日 は 掃除したり、本を 読んだり します" }],
    common_mistakes: "Lupa menambahkan 'します' di akhir kalimat. Atau menggunakan pola V-te, V-te (yang mana berarti aktivitas harus berurutan secara kronologis). Pola -tari bebas urutannya.",
    quiz: [{
      question: "'Di akhir pekan saya menonton TV, mendengarkan musik, dsb.'",
      options: ["テレビを 見て、音楽を 聞きます", "テレビを 見たり、音楽を 聞きたり します", "テレビを 見たり、音楽を 聞いたり します", "テレビを 見たり、音楽を 聞いたり です"],
      answer: "テレビを 見たり、音楽を 聞いたり します",
      explanation: "Mimasu -> Mitari. Kikimasu -> Kiitari + shimasu."
    }]
  },
  "n5-grammar-19-3": {
    notes: "Menyatakan PERUBAHAN ('Menjadi...'). I-Adj membuang 'い' diganti 'く' + なります. Na-Adj/Benda ditambah 'に' + なります.",
    formation: [
      { type: "I-Adj", rule: "I-Adj(buang i) + く + なります", example: "暖かく なります (Menjadi hangat)" },
      { type: "Na-Adj/Noun", rule: "Na-Adj/Noun + に + なります", example: "静かに なります (Menjadi sepi)" }
    ],
    common_mistakes: "Memasukkan partikel 'な' sebelum 'になります' pada Na-Adj. (Salah: 静かなになります). Ingat: 'な' nya dicoret, diganti 'に'.",
    quiz: [{
      question: "'Anak saya menjadi dokter.'",
      options: ["子供は 医者く なりました", "子供は 医者に なりました", "子供は 医者な なりました", "子供は 医者の なりました"],
      answer: "子供は 医者に なりました",
      explanation: "Dokter (Isha) adalah kata benda, maka disambung dengan partikel 'に' + narimasu/narimashita."
    }]
  },
  "n5-grammar-20-1": {
    notes: "Bentuk biasa/santai (Futsuukei / Plain form) digunakan saat berbicara dengan teman sebaya atau keluarga. Tidak memakai 'desu' atau 'masu'.",
    formation: [{ type: "Plain Form", rule: "V-ru / V-nai / V-ta / V-nakatta", example: "食べる (taberu) / 食べない (tabenai) / 食べた (tabeta) / 食べなかった (tabenakatta)" }],
    common_mistakes: "Menggunakan bentuk informal kepada atasan atau orang yang baru dikenal, yang dianggap sangat tidak sopan dalam budaya Jepang.",
    quiz: [{
      question: "Apa bentuk informal dari '飲みません' (Tidak minum)?",
      options: ["飲む", "飲んだ", "飲まない", "飲まなかった"],
      answer: "飲まない",
      explanation: "'Nomimasen' adalah bentuk negatif sekarang. Bentuk informalnya adalah 'Nomanai'."
    }]
  },
  "n5-grammar-20-2": {
    notes: "Menyatakan PENDAPAT PRIBADI ('Saya pikir/menurut saya...'). Semua elemen SEBELUM 'と思います' HARUS dalam bentuk biasa (Plain Form).",
    formation: [{ type: "Opinion", rule: "Kalimat(Plain form) + と思います", example: "明日 は 雨 が 降る と 思います" }],
    common_mistakes: "Menggunakan bentuk 'masu' / 'desu' sebelum 'to omoimasu'. (Salah: 降りますと思います). Wajib diubah ke bentuk biasa (Furu). Pada kata benda/Na-Adj, wajib ditambah 'だ' (da).",
    quiz: [{
      question: "'Saya pikir Tanaka tidak akan datang.'",
      options: ["田中さんは 来ません と 思います", "田中さんは 来ない と 思います", "田中さんは 来ない と 思いません", "田中さんは 来ると 思いません"],
      answer: "田中さんは 来ない と 思います",
      explanation: "Kimasen (Tidak datang) -> bentuk biasanya adalah 'Konai' (atau di sini 'Konai' karena pengecualian, Kuru -> Konai)."
    }]
  },
  "n5-grammar-20-3": {
    notes: "Mengutip perkataan ('Orang berkata bahwa...'). Polanya sama persis dengan 'to omoimasu', kalimat yang dikutip wajib dalam Plain Form.",
    formation: [{ type: "Quotation", rule: "Orang は + Kalimat(Plain form) + と 言いました", example: "田中さん は 明日 休む と 言いました" }],
    common_mistakes: "Sama seperti 'to omoimasu', kesalahan utamanya adalah lupa mengubah kalimat kutipan ke bentuk informal. (Terkecuali jika mengutip kalimat LANGSUNG menggunakan tanda kutip 「」).",
    quiz: [{
      question: "Budi berkata bahwa dia akan pulang jam 5.",
      options: ["ブディさんは ５時に帰る と言いました", "ブディさんは ５時に帰ります と言いました", "ブディさんは ５時に帰って と言いました", "ブディさんは ５時に帰った と言いました"],
      answer: "ブディさんは ５時に帰る と言いました",
      explanation: "Kaerimasu diubah ke plain form (Kaeru) + to iimashita."
    }]
  },
  "n5-grammar-21-1": {
    notes: "Menyatakan DUGAAN/PERKIRAAN ('Mungkin... / Sepertinya...'). Kata sebelumnya harus dalam Plain form. (Untuk Na-Adj dan Noun, buang 'da').",
    formation: [{ type: "Conjecture", rule: "Plain form (tanpa da untuk Noun/Na-Adj) + でしょう", example: "明日は 晴れる でしょう" }],
    common_mistakes: "Membawa partikel 'だ' pada kata benda. (Salah: 雨だでしょう). Yang benar: '雨でしょう'.",
    quiz: [{
      question: "Mungkin besok cuacanya dingin.",
      options: ["明日は 寒いですでしょう", "明日は 寒いだでしょう", "明日は 寒いでしょう", "明日は 寒くでしょう"],
      answer: "明日は 寒いでしょう",
      explanation: "Samui (I-Adj) bisa langsung ditempelkan dengan 'deshou'."
    }]
  },
  "n5-grammar-21-2": {
    notes: "Tingkat kepastian lebih rendah dari 'deshou' ('Mungkin saja / Bisa jadi'). Aturan penggabungannya sama persis dengan 'deshou'.",
    formation: [{ type: "Possibility", rule: "Plain form (tanpa da untuk Noun/Na-Adj) + かもしれません", example: "午後から 雨が 降る かもしれません" }],
    common_mistakes: "Menambahkan 'da' pada kata benda/Na-Adj. Ingat: langsung tempelkan! (Suki kamoshiremasen, Biki kamoshiremasen).",
    quiz: [{
      question: "'Orang itu mungkin adalah guru.'",
      options: ["あの人は 先生だ かもしれません", "あの人は 先生な かもしれません", "あの人は 先生 かもしれません", "あの人は 先生の かもしれません"],
      answer: "あの人は 先生 かもしれません",
      explanation: "Sensei (Kata Benda) langsung bertemu dengan kamoshiremasen."
    }]
  },
  "n5-grammar-21-3": {
    notes: "Review pendalaman 'to omoimasu'. Sering digunakan bersama dengan kata tanya (misal: Bagaimana pendapatmu? -> どう思いますか).",
    formation: [{ type: "Asking Opinion", rule: "〜について どう 思いますか", example: "日本の アニメ について どう 思いますか" }],
    common_mistakes: "Menjawab dengan 'to omoimasu' tapi keliru bentuk subjek-objek. Subjek kalimat utama adalah SAYA, jadi aksi yang dipikirkan ada di anak kalimat.",
    quiz: [{
      question: "Q: この本について どう思いますか。 A: ＿＿＿。",
      options: ["いい本だと 思います", "いい本を 思います", "いい本に 思います", "いい本で 思います"],
      answer: "いい本だと 思います",
      explanation: "Kata benda (Hon) wajib ditambah 'da' menjadi 'Hon da' sebelum 'to omoimasu'."
    }]
  },
  "n5-grammar-22-1": {
    notes: "Anak kalimat yang MENERANGKAN kata benda. Di bahasa Indonesia menggunakan 'YANG'. (Contoh: Buku YANG saya beli). Dalam bahasa Jepang, kata kerjanya DIBALIK letaknya ke DEPAN benda (Bentuk Plain).",
    formation: [{ type: "Noun Modification", rule: "V(Plain form) + Kata Benda", example: "わたし が 買った 本 (Buku yang saya beli)" }],
    common_mistakes: "Memasukkan partikel 'の' antara kata kerja dan kata benda. (Salah: 買ったの本). Seharusnya langsung saja ditempel '買った本'. Subjek di dalam anak kalimat ditandai dengan 'が', bukan 'は'.",
    quiz: [{
      question: "Orang yang memakai kacamata (めがねをかけます).",
      options: ["めがねを かけるの 人", "めがねを かけたの 人", "めがねを かけている 人", "めがねを かけます 人"],
      answer: "めがねを かけている 人",
      explanation: "Keadaan memakai kacamata (Kakete iru/imasu) diubah ke plain -> Kakete iru + Hito (Orang)."
    }]
  },
  "n5-grammar-22-2": {
    notes: "Fokus mendeskripsikan ciri-ciri orang yang sedang melakukan suatu hal atau menggunakan pakaian tertentu.",
    formation: [{ type: "Describing People", rule: "V-te iru + 人(hito)", example: "赤い シャツ を 着ている 人" }],
    common_mistakes: "Menggunakan kata kerja biasa (kiru hito) yang berarti 'orang yang (akan) memakai'. Jika maksudnya 'yang (sedang/sudah) memakai', harus 'kite iru'.",
    quiz: [{
      question: "'Siapa orang yang sedang membaca buku itu?'",
      options: ["本を読む 人は だれですか", "本を読んで 人は だれですか", "本を読んでいる 人は だれですか", "本を読みの人 は だれですか"],
      answer: "本を読んでいる 人は だれですか",
      explanation: "Yonde iru (sedang membaca) + hito (orang)."
    }]
  },
  "n5-grammar-23-1": {
    notes: "Menyatakan WAKTU ('Ketika / Saat'). Sebelum kata 'とき' (toki), digunakan bentuk Plain untuk Verba, I-Adj. Untuk Na-Adj tambah 'な', untuk Noun tambah 'の'.",
    formation: [
      { type: "Verb", rule: "V-ru / V-ta / V-nai + とき", example: "道 を 渡る とき、注意してください" },
      { type: "Noun", rule: "Noun + の + とき", example: "子供 の とき" }
    ],
    common_mistakes: "Bingung menggunakan V-ru atau V-ta sebelum 'toki'. Ingat: V-ru dipakai jika aksinya BELUM SELESAI (misal: Saat mau pergi ke Jepang, beli koper). V-ta jika SUDAH SELESAI (misal: Saat (sudah) sampai di Jepang, beli payung).",
    quiz: [{
      question: "Saat (masih) anak-anak, saya sering berenang.",
      options: ["子供とき、よく泳ぎました", "子供なとき、よく泳ぎました", "子供のとき、よく泳ぎました", "子供でとき、よく泳ぎました"],
      answer: "子供のとき、よく泳ぎました",
      explanation: "Kodomo adalah kata benda, maka wajib ditambah partikel 'の' sebelum 'とき'."
    }]
  },
  "n5-grammar-23-2": {
    notes: "Menyatakan SYARAT ('Jika / Kalau') atau urutan waktu mutlak ('Setelah selesai...'). Diperoleh dengan mengubah ke bentuk TA, lalu ditambah 'ら' (ra).",
    formation: [{ type: "Conditional", rule: "V-ta + ら", example: "雨 が 降ったら、行きません (Kalau hujan, tidak pergi)" }],
    common_mistakes: "Mengartikannya hanya sebagai 'jika'. Padahal '-tara' juga sering berarti 'Setelah'. (Contoh: Gohan o tabetara, ikimasu = Setelah makan, saya akan pergi).",
    quiz: [{
      question: "'Jika punya uang (お金が あります), ingin pergi keliling dunia.'",
      options: ["お金が あってら、", "お金が あるら、", "お金が あったら、", "お金が あればら、"],
      answer: "お金が あったら、",
      explanation: "Arimasu -> bentuk Ta nya adalah 'Atta'. Ditambah 'ra' menjadi 'Attara'."
    }]
  },
  "n5-grammar-24-1": {
    notes: "Melakukan kebaikan/jasa UNTUK ORANG LAIN. Digunakan ketika subjek (biasanya Saya) membantu pihak ketiga.",
    formation: [{ type: "Giving favor", rule: "V-te + あげます", example: "友達 の 荷物 を 持って あげます" }],
    common_mistakes: "Menggunakan pola ini langsung kepada atasan/guru ('Sensei, saya bawakan tasnya ya' -> Mote agete... SALAH! Sangat tidak sopan). Untuk atasan, gunakan kalimat tawaran seperti 'Mochimashou ka?'.",
    quiz: [{
      question: "Saya meminjamkan payung kepada Kimura.",
      options: ["木村さんに 傘を 貸してあげました", "木村さんに 傘を 貸してもらいました", "木村さんに 傘を 貸してくれました", "木村さんに 傘を 借りてあげました"],
      answer: "木村さんに 傘を 貸してあげました",
      explanation: "SAYA meminjamkan (kashite) UNTUK Kimura (agemashita)."
    }]
  },
  "n5-grammar-24-2": {
    notes: "MENERIMA kebaikan/jasa dari orang lain. Fokus subjek kalimat ini adalah SI PENERIMA (biasanya Saya). Artinya 'Saya dibuatkan... / dibantu...'.",
    formation: [{ type: "Receiving favor", rule: "Subjek + は + Pemberi + に + V-te + もらいます", example: "わたし は 山田さん に 英語 を 教えて もらいました" }],
    common_mistakes: "Lupa menaruh 'に' pada nama orang yang membantu kita. (Salah: Yamada-san wa oshiete moraimashita).",
    quiz: [{
      question: "Saya diajari bahasa Jepang oleh Guru.",
      options: ["わたしは 先生に 日本語を 教えてもらいました", "先生は わたしに 日本語を 教えてもらいました", "わたしは 先生に 日本語を 教えてくれました", "先生は わたしに 日本語を 教えてあげました"],
      answer: "わたしは 先生に 日本語を 教えてもらいました",
      explanation: "SAYA (Watashi wa) MENERIMA jasa diajari (Oshiete moraimashita) DARI guru (Sensei ni)."
    }]
  },
  "n5-grammar-24-3": {
    notes: "Orang lain melakukan kebaikan UNTUK SAYA. Bedanya dengan 'moraimasu': Di pola ini, SUBJEK KALIMAT adalah SI PEMBERI JASA.",
    formation: [{ type: "Someone gives favor to me", rule: "Pemberi + は/が + (わたしに) + V-te + くれます", example: "山田さん が (わたしに) 本 を 貸して くれました" }],
    common_mistakes: "Tertukar dengan 'agemasu'. Agemasu = SAYA memberi. Kuremasu = ORANG LAIN memberi ke SAYA.",
    quiz: [{
      question: "Ibu membelikan (membeli untuk saya) kemeja.",
      options: ["母は シャツを 買ってあげました", "母は シャツを 買ってもらいました", "母は シャツを 買ってくれました", "わたしは 母に シャツを 買ってくれました"],
      answer: "母は シャツを 買ってくれました",
      explanation: "IBU yang menjadi subjek (Haha wa) dan dia memberi aksi ke saya (Katte kuremashita)."
    }]
  },
  "n5-grammar-25-1": {
    notes: "Menyatakan pertentangan/syarat terbalik ('Meskipun / Walaupun'). V-te + も (mo). Untuk I-Adj: kute + mo. Na-Adj/Noun: de + mo.",
    formation: [{ type: "Even if", rule: "V-te / Adj-kute / N-de + も", example: "雨 が 降って も、サッカー を します" }],
    common_mistakes: "Sering lupa mengubah I-Adj dengan benar. 'Tinggi' (Takai) menjadi 'Meskipun mahal' -> Takakutemo (bukan Takaimo atau Takai demo).",
    quiz: [{
      question: "Meskipun murah, saya tidak mau beli.",
      options: ["安いでも、買いません", "安くても、買いません", "安いも、買いません", "安いくても、買いません"],
      answer: "安くても、買いません",
      explanation: "Yasui (murah, I-adj) -> Yasukute + mo."
    }]
  },
  "n5-grammar-25-2": {
    notes: "Menebalkan makna pengandaian. Menambahkan kata 'もし' (moshi) di depan kalimat '-tara'. Jika '-tara' berdiri sendiri bisa berarti 'setelah', penambahan 'moshi' menegaskan bahwa itu 100% adalah 'JIKA/Seandainya'.",
    formation: [{ type: "Emphasis on condition", rule: "もし + Kalimat(-tara)", example: "もし 一億円 あったら、家を 買います" }],
    common_mistakes: "Menggunakan 'moshi' tapi melupakan pasangan '-tara' di belakangnya. Keduanya adalah paket komplit (Moshi... -tara / Moshi... -te mo).",
    quiz: [{
      question: "Seandainya tidak mengerti, bertanyalah pada guru.",
      options: ["もし わからない、先生に 聞いてください", "もし わからなかったら、先生に 聞いてください", "もし わからなく、先生に 聞いてください", "もし わからないたら、先生に 聞いてください"],
      answer: "もし わからなかったら、先生に 聞いてください",
      explanation: "Wakaranai -> bentuk ta-nya adalah Wakaranakatta + ra -> Wakaranakattara."
    }]
  },
  "n5-grammar-25-3": {
    notes: "Menyatakan penyesalan/keheranan ('Padahal...'). Beda dengan '-te mo' (meskipun) yang lebih netral. 'Non i' mengandung emosi kecewa pembicara.",
    formation: [{ type: "Even though (Regret)", rule: "Plain form + のに", example: "勉強した のに、テストの 点が 悪かったです" }],
    common_mistakes: "Digunakan di kalimat permintaan atau perintah. (Salah: Hujan turun padahal, ayo pulang). 'Noni' HANYA BOLEH dipakai untuk fakta/kenyataan yang sudah terjadi dan disesali.",
    quiz: [{
      question: "Padahal janji jam 2, (dia) tidak datang-datang.",
      options: ["２時の 約束のに、来ません", "２時の 約束な のに、来ません", "２時の 約束だ のに、来ません", "２時の 約束だて のに、来ません"],
      answer: "２時の 約束な のに、来ません",
      explanation: "Kata benda (Yakusoku) + na + noni."
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

console.log(`Berhasil menyuntikkan data aktual untuk ${injectedCount} pola tata bahasa (Batch 3).`);

if (injectedCount > 0) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(grammarData, null, 2), 'utf8');
  console.log("✅ Update grammar-points.json sukses!");
}
