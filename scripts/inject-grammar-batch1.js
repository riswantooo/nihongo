import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'grammar-points.json');

const updates = {
  "n5-grammar-1-1": {
    notes: "Pola ini digunakan untuk menunjukkan bahwa N1 adalah N2. Partikel 'は' dibaca 'wa', berfungsi sebagai penanda subjek. 'です' (desu) menunjukkan bentuk sopan dan penegasan predikat.",
    formation: [{ type: "Noun + Noun", rule: "Kata Benda 1 + は + Kata Benda 2 + です", example: "わたし は 学生 です" }],
    common_mistakes: "Menggunakan partikel 'が' (ga) atau 'を' (o) alih-alih 'は' untuk subjek topik utama. Selain itu, lupa menambahkan 'です' di akhir kalimat nominal sopan.",
    quiz: [{
      question: "Terjemahkan: 'Saya adalah dokter.'",
      options: ["わたし が いしゃ です", "わたし は いしゃ です", "わたし は いしゃ ます", "わたし の いしゃ です"],
      answer: "わたし は いしゃ です",
      explanation: "Untuk menyatakan 'X adalah Y', gunakan 'N1 は N2 です'."
    }]
  },
  "n5-grammar-1-2": {
    notes: "Bentuk negatif dari 'です'. Digunakan untuk menyatakan 'N1 BUKANLAH N2'. 'じゃありません' lebih sering digunakan dalam percakapan santai sehari-hari, sedangkan bentuk formal tertulisnya adalah 'ではありません' (dewa arimasen).",
    formation: [{ type: "Noun + Noun", rule: "Kata Benda 1 + は + Kata Benda 2 + じゃありません", example: "わたし は 先生 じゃありません" }],
    common_mistakes: "Mencampur aduk antara kata kerja negatif (-ません) dengan kata benda negatif (じゃありません). Kata benda TIDAK BISA langsung diikuti -ません.",
    quiz: [{
      question: "Manakah kalimat yang benar untuk 'Dia (laki-laki) bukan mahasiswa'?",
      options: ["かれ は 学生 ません", "かれ は 学生 じゃありません", "かれ は 学生 じゃないです", "B dan C benar"],
      answer: "B dan C benar",
      explanation: "'じゃありません' dan 'じゃないです' sama-sama bentuk negatif dari kata benda dalam bentuk sopan."
    }]
  },
  "n5-grammar-1-3": {
    notes: "Partikel 'か' (ka) di akhir kalimat berfungsi sebagai tanda tanya (?). Dalam bahasa Jepang, tanda tanya tertulis (?) jarang digunakan pada kalimat formal karena 'か' sudah mewakilinya.",
    formation: [{ type: "Sentence + か", rule: "Kalimat lengkap + か", example: "あなたは 学生 です か" }],
    common_mistakes: "Menambahkan tanda tanya di akhir kalimat formal yang sudah berakhiran 'か' (walaupun kadang bisa ditolerir, secara tata bahasa klasik tidak perlu).",
    quiz: [{
      question: "Kalimat tanya yang benar untuk 'Apakah ini buku?'",
      options: ["これ は 本 です", "これ は 本 ですか", "これ は 本 かです", "これ は 本の か"],
      answer: "これ は 本 ですか",
      explanation: "Cukup tambahkan 'か' setelah kata 'です'."
    }]
  },
  "n5-grammar-1-4": {
    notes: "Partikel 'も' (mo) berarti 'juga'. Digunakan untuk menggantikan partikel 'は' (wa) ketika status subjeknya sama dengan subjek kalimat sebelumnya.",
    formation: [{ type: "Noun + も", rule: "Kata Benda + も + [keterangan yang sama]", example: "わたし も 学生 です" }],
    common_mistakes: "Menggunakan 'はも' secara bersamaan (contoh: わたしはも). Jika menggunakan 'も', maka partikel 'は', 'が', dan 'を' otomatis hilang.",
    quiz: [{
      question: "Jika Yamada adalah guru, dan kamu juga guru, bagaimana kamu mengatakannya?",
      options: ["わたし は 先生 です", "わたし の 先生 です", "わたし も 先生 です", "わたし はも 先生 です"],
      answer: "わたし も 先生 です",
      explanation: "Partikel 'も' menggantikan 'は' untuk menyatakan 'juga'."
    }]
  },
  "n5-grammar-1-5": {
    notes: "Partikel 'の' (no) digunakan untuk menghubungkan dua kata benda. Fungsinya menyatakan kepemilikan (milik), asal/institusi, atau menjelaskan sifat benda kedua.",
    formation: [{ type: "Noun + Noun", rule: "Pemilik/Keterangan + の + Benda Utama", example: "わたし の 本" }],
    common_mistakes: "Terbalik dalam menyusun posisi N1 dan N2. Dalam bahasa Jepang, kata yang MENGERANGKAN (N1) ditaruh di depan benda yang DITERANGKAN (N2). (Contoh: Mobil saya -> Watashi no kuruma).",
    quiz: [{
      question: "Apa bahasa Jepangnya 'Tas milik guru'?",
      options: ["かばん の 先生", "先生 の かばん", "先生 は かばん", "かばん も 先生"],
      answer: "先生 の かばん",
      explanation: "Aturannya adalah [Pemilik] の [Benda yang dimiliki]."
    }]
  },
  "n5-grammar-2-1": {
    notes: "Kore (ini), Sore (itu dekat pendengar), Are (itu jauh dari keduanya). Berfungsi sebagai kata ganti tunjuk benda.",
    formation: [{ type: "Demonstrative", rule: "これ / それ / あれ + は + Noun + です", example: "これ は 辞書 です" }],
    common_mistakes: "Langsung menggabungkan Kore/Sore/Are dengan kata benda, seperti 'これ 辞書' (salah). Jika ingin menempel dengan benda, gunakan Kono/Sono/Ano.",
    quiz: [{
      question: "Itu (jauh) adalah rumah.",
      options: ["これ は 家 です", "あれ は 家 です", "それ は 家 です", "あの は 家 です"],
      answer: "あれ は 家 です",
      explanation: "'あれ' digunakan untuk menunjuk benda yang jauh dari pembicara dan pendengar."
    }]
  },
  "n5-grammar-2-2": {
    notes: "Kono, Sono, Ano memiliki arti yang sama dengan Kore, Sore, Are, namun HARUS langsung diikuti oleh kata benda. (Kono = Ini, Sono = Itu, Ano = Itu jauh).",
    formation: [{ type: "Modifier + Noun", rule: "この / その / あの + Noun", example: "この 本 は わたし の です" }],
    common_mistakes: "Berdiri sendiri tanpa kata benda. Contoh salah: 'この は 私のです'. Seharusnya: 'これ は 私のです' atau 'この 本 は 私のです'.",
    quiz: [{
      question: "'Payung ini adalah milik saya.'",
      options: ["これ 傘 は 私 の です", "この 傘 は 私 の です", "この は 傘 私 の です", "これ の 傘 は 私 の です"],
      answer: "この 傘 は 私 の です",
      explanation: "'この' harus diikuti dengan kata benda ('傘/kasa')."
    }]
  },
  "n5-grammar-2-3": {
    notes: "'そうです' (sou desu) berarti 'benar / ya, begitu'. '違います' (chigaimasu) berarti 'salah / bukan'. Ini adalah cara singkat untuk membenarkan atau menyangkal pernyataan nominal.",
    formation: [{ type: "Response", rule: "はい、そうです / いいえ、違います", example: "はい、そうです。" }],
    common_mistakes: "Menjawab dengan 'はい、です' (salah). Untuk persetujuan kalimat benda, gunakan 'はい、そうです'.",
    quiz: [{
      question: "Q: それは辞書ですか。 A: いいえ、____。",
      options: ["じゃありません", "違います", "そうじゃありません", "B dan C benar"],
      answer: "B dan C benar",
      explanation: "Untuk menyangkal, bisa menggunakan 'いいえ、違います' atau 'いいえ、そうじゃありません'."
    }]
  },
  "n5-grammar-3-1": {
    notes: "Koko (di sini), Soko (di situ), Asoko (di sana). Digunakan untuk menunjuk tempat.",
    formation: [{ type: "Place", rule: "ここ / そこ / あそこ は + Noun(tempat) + です", example: "ここ は 学校 です" }],
    common_mistakes: "Menggunakan Koko/Soko/Asoko untuk menunjuk arah, padahal seharusnya menunjuk lokasi/tempat. (Untuk arah gunakan Kochira/Sochira/Achira).",
    quiz: [{
      question: "A: トイレは____ですか。 B: あそこです。",
      options: ["どれ", "どこ", "だれ", "なん"],
      answer: "どこ",
      explanation: "'どこ' adalah kata tanya untuk tempat (di mana)."
    }]
  },
  "n5-grammar-3-2": {
    notes: "'どこ' (doko) adalah kata tanya yang berarti 'di mana'.",
    formation: [{ type: "Question", rule: "Noun(tempat/benda) + は + どこ + ですか", example: "トイレ は どこ ですか" }],
    common_mistakes: "Lupa menggunakan partikel 'は' sebelum kata tanya 'どこ'.",
    quiz: [{
      question: "'Stasiun di mana?'",
      options: ["駅 は どこ ですか", "どこ は 駅 ですか", "駅 の どこ ですか", "駅 は いくら ですか"],
      answer: "駅 は どこ ですか",
      explanation: "Subjek (Stasiun) diikuti 'は', lalu kata tanya 'どこ'."
    }]
  },
  "n5-grammar-3-3": {
    notes: "'いくら' (ikura) adalah kata tanya untuk harga (Berapa harganya?).",
    formation: [{ type: "Question", rule: "Noun(benda) + は + いくら + ですか", example: "この 時計 は いくら ですか" }],
    common_mistakes: "Tertukar dengan 'いくつ' (berapa jumlahnya). 'いくら' khusus untuk harga (uang).",
    quiz: [{
      question: "'Sepatu ini harganya berapa?'",
      options: ["この 靴 は いくつ ですか", "この 靴 は いくら ですか", "これ 靴 は いくら ですか", "靴 の いくら ですか"],
      answer: "この 靴 は いくら ですか",
      explanation: "'この 靴' (sepatu ini) + 'は いくら ですか' (harganya berapa)."
    }]
  },
  "n5-grammar-4-1": {
    notes: "'何時' (nan-ji) berarti 'Jam berapa'. '分' (fun/pun) berarti 'menit'. Biasanya sering diawali dengan '今' (ima) yang berarti 'sekarang'.",
    formation: [{ type: "Time", rule: "今 + 何時 + ですか", example: "今 何時 ですか" }],
    common_mistakes: "Salah membaca satuan menit, misalnya '4 menit' (yon-pun/yon-fun) yang sering salah diucapkan menjadi 'shi-fun'.",
    quiz: [{
      question: "Jika sekarang jam 9 pagi, bagaimana mengatakannya?",
      options: ["今 九時 です", "今 八時 です", "今 午前九時 です", "A dan C benar"],
      answer: "A dan C benar",
      explanation: "'午前九時' (gozen ku-ji) artinya 9 pagi, '九時' artinya jam 9."
    }]
  },
  "n5-grammar-4-2": {
    notes: "Ini adalah perubahan bentuk (konjugasi) akhir untuk kata kerja formal. 'ます' (masu) untuk positif sekarang/masa depan. 'ません' untuk negatif. 'ました' untuk lampau. 'ませんでした' untuk lampau negatif.",
    formation: [{ type: "Verb", rule: "V-masu (Present) / V-masen (Negatif) / V-mashita (Past) / V-masen deshita (Past Negative)", example: "起きます / 起きません / 起きました / 起きませんでした" }],
    common_mistakes: "Mencampur tenses. Jika keterangan waktunya 'kemarin' (昨日), harus menggunakan bentuk lampau (-ました).",
    quiz: [{
      question: "'Kemarin saya tidak belajar.'",
      options: ["昨日 勉強しません", "昨日 勉強しました", "昨日 勉強しませんでした", "今日 勉強しませんでした"],
      answer: "昨日 勉強しませんでした",
      explanation: "昨日 (kino - kemarin) + 勉強しませんでした (tidak belajar bentuk lampau)."
    }]
  },
  "n5-grammar-4-3": {
    notes: "Partikel 'に' (ni) diletakkan setelah kata keterangan waktu spesifik (jam, tanggal, bulan, tahun) untuk menunjukkan waktu kejadian.",
    formation: [{ type: "Time particle", rule: "Waktu(spesifik) + に + V-masu", example: "６時 に 起きます" }],
    common_mistakes: "Menggunakan partikel 'に' pada kata waktu yang TIDAK SPESIFIK seperti hari ini (今日), besok (明日), setiap hari (毎日). Kata-kata ini TIDAK BOLEH dipasangkan dengan 'に'.",
    quiz: [{
      question: "Manakah kalimat yang SALAH?",
      options: ["日曜日に 行きます", "明日に 行きます", "６時に 行きます", "来月に 行きます"],
      answer: "明日に 行きます",
      explanation: "Besok (明日/ashita) tidak perlu dan tidak boleh pakai partikel 'に'."
    }]
  },
  "n5-grammar-4-4": {
    notes: "'から' (kara) berarti 'dari', dan 'まで' (made) berarti 'sampai'. Bisa digunakan untuk waktu maupun tempat.",
    formation: [{ type: "Range", rule: "N(waktu/tempat) + から + N(waktu/tempat) + まで", example: "９時 から ５時 まで" }],
    common_mistakes: "Menggunakan 'から' untuk alasan (karena) tapi penempatannya salah. Dalam konteks ini, 'から' artinya 'dari (from)'.",
    quiz: [{
      question: "'Rapatnya dari jam 1 sampai jam 3.'",
      options: ["会議 は １時 まで ３時 から", "会議 は １時 から ３時 まで です", "会議 は １時 に ３時 まで です", "会議 は １時 から ３時 に です"],
      answer: "会議 は １時 から ３時 まで です",
      explanation: "'1-ji kara' (dari jam 1) '3-ji made' (sampai jam 3)."
    }]
  },
  "n5-grammar-5-1": {
    notes: "Partikel 'へ' (ditulis 'he' tapi dibaca 'e') menunjukkan arah perpindahan. Selalu digunakan bersama kata kerja pergerakan: 行きます (pergi), 来ます (datang), 帰ります (pulang).",
    formation: [{ type: "Direction", rule: "Tempat + へ + 行きます / 来ます / 帰ります", example: "学校 へ 行きます" }],
    common_mistakes: "Tertukar menggunakan partikel 'に'. Meskipun 'に' juga bisa digunakan untuk arah, 'へ' lebih berfokus pada 'arah pergerakan' itu sendiri.",
    quiz: [{
      question: "'Saya pulang ke rumah.'",
      options: ["うち へ 帰ります", "うち へ 行きます", "うち へ 来ます", "うち で 帰ります"],
      answer: "うち へ 帰ります",
      explanation: "Pulang ke rumah menggunakan '帰ります' (kaerimasu)."
    }]
  },
  "n5-grammar-5-2": {
    notes: "Partikel 'で' (de) memiliki arti 'menggunakan/dengan' saat diletakkan setelah kendaraan/alat transportasi.",
    formation: [{ type: "Method", rule: "Kendaraan + で + 行きます / 来ます / 帰ります", example: "電車 で 行きます" }],
    common_mistakes: "Menggunakan 'で' pada kata 'berjalan kaki' (歩いて/aruite). Untuk berjalan kaki, partikel 'で' TIDAK digunakan.",
    quiz: [{
      question: "'Pergi berjalan kaki.'",
      options: ["歩いて で 行きます", "歩いて へ 行きます", "歩いて 行きます", "足 で 行きます"],
      answer: "歩いて 行きます",
      explanation: "'歩いて' (berjalan kaki) sudah berfungsi sebagai cara, tidak perlu partikel 'で'."
    }]
  },
  "n5-grammar-5-3": {
    notes: "Partikel 'と' (to) berarti 'bersama (dengan)'. Menunjukkan partner melakukan kegiatan.",
    formation: [{ type: "Partner", rule: "Orang/Hewan + と + V-masu", example: "友達 と 行きます" }],
    common_mistakes: "Mencampur aduk dengan 'で' (alat). 'と' hanya untuk partner hidup (orang/hewan).",
    quiz: [{
      question: "Pergi sendirian = ___ 行きます",
      options: ["一人 と", "一人 で", "一人 に", "一人 を"],
      answer: "一人 で",
      explanation: "Pengecualian: 'sendirian' menggunakan '一人で' (hitori de), BUKAN '一人と'."
    }]
  },
  "n5-grammar-5-4": {
    notes: "'いつ' (itsu) adalah kata tanya yang berarti 'Kapan'.",
    formation: [{ type: "Question", rule: "いつ + V-masu + か", example: "いつ 日本へ 行きますか" }],
    common_mistakes: "Menambahkan partikel 'に' setelah kata tanya 'いつ'. (Salah: 'いつに' - Tidak boleh).",
    quiz: [{
      question: "Kalimat mana yang benar?",
      options: ["いつに 帰りますか", "いつ 帰りますか", "どこに 帰りますか", "だれ 帰りますか"],
      answer: "いつ 帰りますか",
      explanation: "'いつ' (kapan) tidak membutuhkan partikel 'に'."
    }]
  },
  "n5-grammar-6-1": {
    notes: "Partikel 'を' (dibaca 'o') adalah penanda OBJEK PENDERITA. Selalu menempel pada kata benda yang dikenai tindakan oleh kata kerja transitif (makan, minum, melihat, dll).",
    formation: [{ type: "Object", rule: "Objek + を + Kata Kerja Transitif", example: "ごはん を 食べます" }],
    common_mistakes: "Lupa menambahkan 'を' sebelum kata kerja transitif, atau menggunakan 'が' yang merubah makna menjadi subjek.",
    quiz: [{
      question: "'Membaca buku'",
      options: ["本 は 読みます", "本 に 読みます", "本 を 読みます", "本 が 読みます"],
      answer: "本 を 読みます",
      explanation: "Buku (本) adalah objek yang dibaca, maka pakai 'を'."
    }]
  },
  "n5-grammar-6-2": {
    notes: "Partikel 'で' (de) di sini berfungsi menunjukkan TEMPAT terjadinya aktivitas/kegiatan. Artinya 'di'.",
    formation: [{ type: "Location of action", rule: "Tempat + で + Aktivitas", example: "レストラン で 食べます" }],
    common_mistakes: "Menggunakan 'に' untuk tempat aktivitas. Ingat: 'で' untuk aksi yang bergerak/aktif (makan, belajar), sedangkan 'に' untuk keberadaan diam (ada, tinggal).",
    quiz: [{
      question: "Belajar di sekolah.",
      options: ["学校 に 勉強します", "学校 で 勉強します", "学校 を 勉強します", "学校 へ 勉強します"],
      answer: "学校 で 勉強します",
      explanation: "Belajar adalah aktivitas aktif, maka menggunakan partikel 'で'."
    }]
  },
  "n5-grammar-6-3": {
    notes: "Kata tanya '何を' (nani o) berarti 'Apa yang (dilakukan)?'.",
    formation: [{ type: "Question", rule: "何を + V-masu + か", example: "何を しますか" }],
    common_mistakes: "Membacanya sebagai 'nan o' (salah), pelafalannya yang benar adalah 'nani o'.",
    quiz: [{
      question: "A: ________。 B: 映画を見ます。",
      options: ["何が しますか", "どこで しますか", "何を しますか", "誰を しますか"],
      answer: "何を しますか",
      explanation: "Menanyakan apa yang akan dilakukan/ditonton."
    }]
  },
  "n5-grammar-6-4": {
    notes: "Kata kerja bentuk 'ませんか' (masen ka) digunakan untuk MENGUNGKAPKAN AJAKAN dengan cara yang sopan. Artinya: 'Maukah... / Tidakkah (kita)...'",
    formation: [{ type: "Invitation", rule: "V-masen + か", example: "一緒に 飲みませんか" }],
    common_mistakes: "Mengartikannya sebagai kalimat negatif murni ('kamu tidak minum?'). Padahal ini adalah ajakan positif yang sopan.",
    quiz: [{
      question: "'Maukah (bersama-sama) menonton film?'",
      options: ["映画 を 見ますか", "映画 を 見ましたか", "映画 を 見ませんか", "映画 を 見ましょうか"],
      answer: "映画 を 見ませんか",
      explanation: "Bentuk -masen ka adalah ajakan sopan ('Maukah menonton?')."
    }]
  },
  "n5-grammar-7-1": {
    notes: "Kata kerja 'あげます' (agemasu) berarti MEMBERI (dari subjek ke orang lain). Partikel 'に' (ni) menunjuk KEPADA siapa barang tersebut diberikan.",
    formation: [{ type: "Giving", rule: "Penerima + に + Barang + を + あげます", example: "友達 に プレゼント を あげます" }],
    common_mistakes: "Digunakan ketika orang lain memberi kepada KITA. 'あげます' HANYA BOLEH digunakan jika KITA yang memberi atau ORANG LAIN memberi ke ORANG LAIN.",
    quiz: [{
      question: "'Saya memberi bunga kepada pacar/kekasih.'",
      options: ["恋人 に 花 を あげます", "花 に 恋人 を あげます", "恋人 に 花 を もらいます", "花 に 恋人 を もらいます"],
      answer: "恋人 に 花 を あげます",
      explanation: "Penerima (koibito) pakai 'に', barang (hana) pakai 'を'."
    }]
  },
  "n5-grammar-7-2": {
    notes: "Kata kerja 'もらいます' (moraimasu) berarti MENERIMA (dari orang lain ke subjek). Partikel 'に' (ni) atau 'から' (kara) menunjukkan DARI SIAPA kita menerima.",
    formation: [{ type: "Receiving", rule: "Pemberi + に/から + Barang + を + もらいます", example: "先生 に 本 を もらいます" }],
    common_mistakes: "Tertukar posisinya dengan 'agemasu'. Ingat: Jika subjeknya SAYA dan kata kerjanya MORAIMASU, maka partikel 'ni' berarti 'dari'.",
    quiz: [{
      question: "Sato menerima tas dari Yamada.",
      options: ["佐藤さんは 山田さんに かばんを もらいました", "佐藤さんは 山田さんに かばんを あげました", "山田さんは 佐藤さんに かばんを もらいました", "かばんは 佐藤さんに もらいました"],
      answer: "佐藤さんは 山田さんに かばんを もらいました",
      explanation: "Sato (subjek) Menerima (moraimashita) dari Yamada (ni)."
    }]
  },
  "n5-grammar-7-3": {
    notes: "Partikel 'で' (de) di sini berfungsi menunjukkan ALAT atau METODE yang digunakan. Artinya 'dengan (menggunakan)'.",
    formation: [{ type: "Tool/Method", rule: "Alat/Metode + で + V-masu", example: "スプーン で 食べます" }],
    common_mistakes: "Lupa bahwa bahasa juga dihitung sebagai 'alat/metode'. Contoh: 'Nihongo de hanashimasu' (berbicara DENGAN bahasa Jepang).",
    quiz: [{
      question: "Saya menulis laporan DENGAN bahasa Jepang.",
      options: ["日本語 に レポートを 書きます", "日本語 で レポートを 書きます", "日本語 を レポートを 書きます", "日本語 と レポートを 書きます"],
      answer: "日本語 で レポートを 書きます",
      explanation: "Bahasa adalah sarana/alat, sehingga menggunakan partikel 'で'."
    }]
  },
  "n5-grammar-7-4": {
    notes: "'もう' (mou) berarti SUDAH, diikuti dengan kata kerja lampau (-ました). 'まだ' (mada) berarti BELUM, biasanya dijawab dengan 'まだです' (belum) jika ditanya.",
    formation: [{ type: "Already/Not yet", rule: "もう + V-mashita / まだ + です", example: "もう 昼ごはん を 食べましたか" }],
    common_mistakes: "Menggabungkan 'まだ' (belum) dengan kata kerja lampau. Ingat: Jika 'sudah' -> V-mashita. Jika 'belum' -> Mada desu (atau Mada V-te imasen).",
    quiz: [{
      question: "A: もう 宿題を しましたか。 B: いいえ、____。",
      options: ["まだ しませんでした", "もう しませんでした", "まだ です", "もう です"],
      answer: "まだ です",
      explanation: "Jawaban singkat untuk 'belum' adalah 'まだです'."
    }]
  },
  "n5-grammar-8-1": {
    notes: "Kata sifat akhiran -i (I-Keiyoushi) dapat digunakan secara langsung di depan kata benda untuk mensifati benda tersebut.",
    formation: [{ type: "I-Adj + Noun", rule: "I-Adj + Noun", example: "大きい 家 (rumah besar)" }],
    common_mistakes: "Menambahkan partikel 'な' atau 'の' di antara I-Adj dan Kata Benda. (Salah: 大きいな家).",
    quiz: [{
      question: "'Mobil baru'",
      options: ["新しいな 車", "新しいの 車", "新しい 車", "新し 車"],
      answer: "新しい 車",
      explanation: "Kata sifat I langsung menempel pada benda tanpa tambahan partikel."
    }]
  },
  "n5-grammar-8-2": {
    notes: "Kata sifat akhiran -na (Na-Keiyoushi) memerlukan partikel 'な' (na) ketika diletakkan di DEPAN kata benda.",
    formation: [{ type: "Na-Adj + Noun", rule: "Na-Adj + な + Noun", example: "静かな 町 (kota yang sepi)" }],
    common_mistakes: "Lupa menyisipkan 'な' saat menggabungkan Na-adj dengan benda. Contoh: '静か町' (Salah). Yang benar: '静かな町'.",
    quiz: [{
      question: "'Orang yang ramah'",
      options: ["親切 人", "親切の 人", "親切な 人", "親切に 人"],
      answer: "親切な 人",
      explanation: "'親切' (shinsetsu) adalah Na-Adj, jadi wajib ditambah 'な' sebelum kata benda (人)."
    }]
  },
  "n5-grammar-8-3": {
    notes: "Kata sifat diletakkan di akhir kalimat sebagai predikat, selalu diakhiri dengan 'です' (desu) pada bentuk sopan (positif). I-Adj TIDAK menambahkan 'na', dan Na-Adj juga MENGHILANGKAN 'na' jika berada di akhir kalimat.",
    formation: [{ type: "Predicate", rule: "N は + I-Adj / Na-Adj (tanpa na) + です", example: "この 町 は 静か です" }],
    common_mistakes: "Membawa 'な' ke akhir kalimat. Contoh: 'この町は 静かな です' (SALAH!). Yang benar: 'この町は 静かです'.",
    quiz: [{
      question: "Gunung Fuji tinggi.",
      options: ["富士山 は 高い です", "富士山 は 高いな です", "富士山 は 高いの です", "富士山 高い は です"],
      answer: "富士山 は 高い です",
      explanation: "Kata sifat I (高い) langsung diikuti 'です' jika menjadi predikat kalimat."
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

console.log(`Berhasil menyuntikkan data aktual untuk ${injectedCount} pola tata bahasa.`);

if (injectedCount > 0) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(grammarData, null, 2), 'utf8');
  console.log("✅ Update grammar-points.json sukses!");
}
