// populateMnnN2_Full.cjs
// REWRITE MNN 2 (Bab 26-50) — Minna no Nihongo Shokyu 2
// Schema matches Bab 1-25 (which renders correctly in pages):
//   - choukai[].correctAnswer (string), audioText, options[]
//   - dokkai is LIST, each item: text, questions[].correctAnswer (string)
//   - grammar[].title, description, examples[{japanese, romaji, meaning}]
//   - vocabulary[].character, romaji, meaning
//   - title: "Bab X: <description>"

const fs = require('fs');
const path = require('path');

const mnnFile = path.join(__dirname, '../src', 'data', 'mnn.json');
const mnnData = JSON.parse(fs.readFileSync(mnnFile, 'utf8'));

// ============================================================
// BAB 26: ~んです (Menjelaskan Alasan) + ~ていただけませんか
// ============================================================
const bab26 = {
  id: 26,
  title: "Bab 26: Menjelaskan Alasan dengan ~んです",
  vocabulary: [
    { character: "見ます", romaji: "mimasu", meaning: "memeriksa, melihat" },
    { character: "探します", romaji: "sagashimasu", meaning: "mencari" },
    { character: "遅れます", romaji: "okuremasu", meaning: "terlambat" },
    { character: "間に合います", romaji: "maniaimasu", meaning: "keburu, tepat waktu" },
    { character: "気分がいい", romaji: "kibun ga ii", meaning: "perasaan sehat/baik" },
    { character: "気分が悪い", romaji: "kibun ga warui", meaning: "perasaan tidak enak/sakit" },
    { character: "ごみ", romaji: "gomi", meaning: "sampah" },
    { character: "直接", romaji: "chokusetsu", meaning: "secara langsung" },
    { character: "片付きます", romaji: "katadukimasu", meaning: "beres, rapi" },
    { character: "確かめます", romaji: "tashikamemasu", meaning: "memastikan, mengecek" },
    { character: "知ります", romaji: "shirimasu", meaning: "tahu, mengetahui" },
    { character: "続けます", romaji: "tsuzukemasu", meaning: "melanjutkan" },
    { character: "寝坊します", romaji: "nebou shimasu", meaning: "bangun kesiangan" },
    { character: "無理します", romaji: "muri shimasu", meaning: "memaksakan diri" },
    { character: "すぐ", romaji: "sugu", meaning: "segera" },
    { character: "ゆっくり", romaji: "yukkuri", meaning: "pelan-pelan, santai" },
    { character: "もう一度", romaji: "mou ichido", meaning: "sekali lagi" },
    { character: "どうして", romaji: "doushite", meaning: "mengapa" },
    { character: "残念ですが", romaji: "zannen desu ga", meaning: "disayangkan, tapi..." },
    { character: "用事", romaji: "youji", meaning: "urusan, keperluan" },
    { character: "用事がありません", romaji: "youji ga arimasen", meaning: "tidak ada urusan" },
    { character: "予約", romaji: "yoyaku", meaning: "reservasi" },
    { character: "泊まり", romaji: "tomari", meaning: "menginap" },
    { character: "違反", romaji: "ihan", meaning: "pelanggaran" },
    { character: "駐車違反", romaji: "chūsha ihan", meaning: "pelanggaran parkir" },
    { character: "お祝い", romaji: "o-iwai", meaning: "ucapan selamat, perayaan" },
    { character: "遅刻", romaji: "chikoku", meaning: "keterlambatan" },
  ],
  grammar: [
    {
      id: 2601,
      title: "Bentuk ~んです (Menjelaskan / Meminta Penjelasan)",
      description: "Digunakan untuk memberikan penjelasan, alasan, atau meminta penjelasan detail. Nuansa: pembicara peduli/tertarik pada situasi. ~んです sering disingkat ~んです (dibaca 'n desu').",
      examples: [
        { japanese: "どうして遅れたんですか。", romaji: "Doushite okureta n desu ka.", meaning: "Mengapa kamu terlambat?" },
        { japanese: "バスが来なかったんです。", romaji: "Basu ga konakatta n desu.", meaning: "Busnya tidak datang (jadi saya terlambat)." },
        { japanese: "今日、休みなんです。", romaji: "Kyou, yasumi n desu.", meaning: "Hari ini saya libur." },
      ]
    },
    {
      id: 2602,
      title: "~ていただけませんか (Permintaan Tolong Sangat Sopan)",
      description: "Bentuk lebih sopan dari ~てください. Sering didahului ~んですが untuk memberikan konteks. ~ていただく = humilifikasi dari ~てもらう.",
      examples: [
        { japanese: "日本語がわからないんですが、教えていただけませんか。", romaji: "Nihongo ga wakaranai n desu ga, oshiete itadakemasen ka.", meaning: "Saya tidak bisa bahasa Jepang, boleh minta diajari?" },
        { japanese: "すみませんが、もう少しゆっくり話していただけませんか。", romaji: "Sumimasen ga, mou sukoshi yukkuri hanashite itadakemasen ka.", meaning: "Maaf, bisa bicara sedikit lebih pelan?" },
      ]
    },
    {
      id: 2603,
      title: "Kalimat Majemuk dengan ~んですが (Pengantar + Penjelasan)",
      description: "~んですが di akhir klausa pertama berfungsi sebagai pengantar untuk meminta penjelasan, minta tolong, atau topik pembicaraan baru.",
      examples: [
        { japanese: "ちょっと聞きたいんですが、銀行はどこですか。", romaji: "Chotto kikitai n desu ga, ginkou wa doko desu ka.", meaning: "Mau tanya, bank di mana?" },
        { japanese: "手伝いたいんですが、何をすればいいですか。", romaji: "Tetsudaitai n desu ga, nani o sureba ii desu ka.", meaning: "Saya ingin membantu, harus apa?" },
      ]
    },
  ],
  choukai: [
    {
      audioText: "すみません、遅くなりました。",
      question: "Apa yang diucapkan pembicara?",
      options: ["Maaf, saya terlambat.", "Maaf, saya tidak tahu.", "Maaf, saya tidak datang.", "Maaf, saya sudah pergi."],
      correctAnswer: "Maaf, saya terlambat."
    },
    {
      audioText: "どうしてパーティーに行かなかったんですか。頭が痛かったんです。",
      question: "Mengapa pembicara tidak pergi ke pesta?",
      options: ["Karena sibuk bekerja", "Karena sakit kepala", "Karena tidak diundang", "Karena tidak tahu"],
      correctAnswer: "Karena sakit kepala"
    },
    {
      audioText: "日本へ留学したいんですが、いい大学を知っていますか。",
      question: "Apa yang diminta pembicara?",
      options: ["Rekomendasi universitas", "Info biaya hidup", "Tempat tinggal", "Beasiswa"],
      correctAnswer: "Rekomendasi universitas"
    },
    {
      audioText: "気分が悪いんです。今日は早く帰らせていただけませんか。",
      question: "Apa yang diminta pembicara?",
      options: ["Bisa pulang cepat hari ini", "Bisa istirahat sebentar", "Bisa periksa ke dokter", "Bisa minum obat"],
      correctAnswer: "Bisa pulang cepat hari ini"
    },
  ],
  dokkai: [
    {
      title: "ルールを守ろう (Mari Menaati Aturan)",
      text: "日本では、ゴミを出す日や場所が決まっています。例えば、月曜日と木曜日は「燃えるごみ」の日です。ルールを守らないと、ゴミを回収してくれません。なぜかというと、住んでいる人の協力がないと、街をきれいにすることができないんです。また、電車の中で電話をすることは禁止されています。マナーを守って、みんなで気持ちよく住みましょう。",
      questions: [
        { question: "Apa yang terjadi jika tidak mematuhi aturan membuang sampah?", options: ["Akan didenda", "Sampah tidak akan diambil", "Akan dimarahi polisi", "Boleh dibuang besok"], correctAnswer: "Sampah tidak akan diambil" },
        { question: "Apa yang dilarang di kereta?", options: ["Makan", "Telepon", "Minum", "Tidur"], correctAnswer: "Telepon" },
        { question: "Kapan sampah 'burnable' dibuang?", options: ["Setiap hari", "Senin & Kamis", "Akhir pekan", "Minggu saja"], correctAnswer: "Senin & Kamis" },
      ]
    },
  ]
};

// ============================================================
// BAB 27: Bentuk Potensial (Kemampuan)
// ============================================================
const bab27 = {
  id: 27,
  title: "Bab 27: Bentuk Potensial (Bisa / Kemampuan)",
  vocabulary: [
    { character: "飼います", romaji: "kaimasu", meaning: "memelihara (hewan)" },
    { character: "走ります", romaji: "hashirimasu", meaning: "berlari" },
    { character: "見えます", romaji: "miemasu", meaning: "terlihat (visual)" },
    { character: "聞こえます", romaji: "kikoemasu", meaning: "terdengar (audio)" },
    { character: "できます", romaji: "dekimasu", meaning: "bisa dibuat/selesai" },
    { character: "景色", romaji: "keshiki", meaning: "pemandangan" },
    { character: "昼間", romaji: "hiruma", meaning: "siang hari" },
    { character: "道具", romaji: "dougu", meaning: "alat, perkakas" },
    { character: "泳ぎます", romaji: "oyogimasu", meaning: "berenang" },
    { character: "弾きます", romaji: "hikimasu", meaning: "memainkan (alat musik)" },
    { character: "打ちます", romaji: "uchimasu", meaning: "memukul, mengalahkan" },
    { character: "運びます", romaji: "hakobimasu", meaning: "mengangkut, membawa" },
    { character: "直します", romaji: "naoshimasu", meaning: "memperbaiki" },
    { character: "触ります", romaji: "sawarimasu", meaning: "menyentuh" },
    { character: "汚します", romaji: "kegoshimasu", meaning: "mengotori" },
    { character: "落とします", romaji: "otoshimasu", meaning: "menjatuhkan, kehilangan" },
    { character: "上手", romaji: "jouzu", meaning: "mahir, pandai" },
    { character: "下手", romaji: "heta", meaning: "tidak mahir, kurang pandai" },
    { character: "趣味", romaji: "shumi", meaning: "hobi" },
    { character: "得意", romaji: "tokui", meaning: "andal,擅长" },
    { character: "苦手", romaji: "nigate", meaning: "lemah, tidak suka" },
    { character: "夢中", romaji: "muchuu", meaning: "asyik, tenggelam dalam" },
    { character: "予定", romaji: "yotei", meaning: "rencana, jadwal" },
    { character: "彼", romaji: "kare", meaning: "dia (lk), pacar (lk)" },
    { character: "彼女", romaji: "kanojo", meaning: "dia (pr), pacar (pr)" },
    { character: "恋人", romaji: "koibito", meaning: "kekasih, pacar" },
    { character: "将来", romaji: "shourai", meaning: "masa depan" },
  ],
  grammar: [
    {
      id: 2701,
      title: "Bentuk Potensial Golongan I (Godan)",
      description: "~u → ~eru. Contoh: 食べる→食べられない, 書く→書ける, 話す→話せる. Partikel を sering diganti が setelah kata benda.",
      examples: [
        { japanese: "私は刺身が食べられます。", romaji: "Watashi wa sashimi ga taberaremasu.", meaning: "Saya bisa makan sashimi." },
        { japanese: "漢字が読めますか。", romaji: "Kanji ga yomemasu ka.", meaning: "Apakah bisa membaca kanji?" },
        { japanese: "ここで泳げます。", romaji: "Koko de oyogemasu.", meaning: "Di sini bisa berenang." },
      ]
    },
    {
      id: 2702,
      title: "Bentuk Potensial Golongan II & III",
      description: "Gol II: ~ru → ~rareru. Gol III: ~suru → ~dekiru. Bentuk ringkasnya sering dipakai: ~rareru → ~reru.",
      examples: [
        { japanese: "ピアノが弾けます。", romaji: "Piano ga hikemasu.", meaning: "Bisa bermain piano." },
        { japanese: "一人で料理ができますか。", romaji: "Hitori de ryouri ga dekimasu ka.", meaning: "Bisa masak sendiri?" },
      ]
    },
    {
      id: 2703,
      title: "Perbedaan 見える / 聞こえる vs Bentuk Potensial",
      description: "見えます/聞こえます = objek secara alami masuk ke indera (visible/audible). 見られる/聞ける = ada kesempatan/izin untuk melihat/mendengar.",
      examples: [
        { japanese: "ここから富士山が見えます。", romaji: "Koko kara Fujisan ga miemasu.", meaning: "Dari sini gunung Fuji terlihat." },
        { japanese: "この番組はインターネットで見られます。", romaji: "Kono bangumi wa intaanetto de miraremasu.", meaning: "Acara ini bisa ditonton di internet." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "私の趣味は写真を撮ることです。",
      question: "Apa hobi pembicara?",
      options: ["Memasak", "Fotografi", "Berkebun", "Membaca"],
      correctAnswer: "Fotografi"
    },
    {
      audioText: "すみません、ここに座れますか。",
      question: "Apa yang diminta pembicara?",
      options: ["Boleh duduk di sini?", "Boleh lewat?", "Boleh pesan?", "Boleh minta tolong?"],
      correctAnswer: "Boleh duduk di sini?"
    },
    {
      audioText: "田中さんは歌が上手ですが、ダンスは下手です。",
      question: "Apa yang benar tentang Tanaka?",
      options: ["Jago menyanyi, jago menari", "Jago menari, tidak bisa menyanyi", "Jago menyanyi, tidak jago menari", "Tidak bisa dua-duanya"],
      correctAnswer: "Jago menyanyi, tidak jago menari"
    },
    {
      audioText: "彼は日本料理が作れます。",
      question: "Apa yang bisa dilakukan 'dia'?",
      options: ["Masak makanan Jepang", "Pesan makanan Jepang", "Makan makanan Jepang", "Menjual makanan Jepang"],
      correctAnswer: "Masak makanan Jepang"
    },
  ],
  dokkai: [
    {
      title: "私の夢 (Mimpi Saya)",
      text: "私は将来、日本語教師になりたいと思っています。大学で日本語を勉強していますが、まだ上手ではありません。特に、漢字を覚えるのが苦手です。毎日三時間勉強していますが、まだうまく書けません。\n\nしかし、夢中になっていることはたくさんあります。先週、日本の映画を見ました。日本の景色が本当にきれいでした。いつか日本に行ってみたいと思っています。",
      questions: [
        { question: "Apa cita-cita pembicara?", options: ["Dokter", "Guru bahasa Jepang", "Insinyur", "Penerjemah"], correctAnswer: "Guru bahasa Jepang" },
        { question: "Apa yang menjadi kesulitan pembicara?", options: ["Mendengar", "Menulis kanji", "Berbicara", "Membaca"], correctAnswer: "Menulis kanji" },
        { question: "Berapa lama pembicara belajar setiap hari?", options: ["1 jam", "2 jam", "3 jam", "4 jam"], correctAnswer: "3 jam" },
      ]
    },
  ]
};

// ============================================================
// BAB 28: ~ながら (Sambil) + ~し (Dan lagi / Karena)
// ============================================================
const bab28 = {
  id: 28,
  title: "Bab 28: ~ながら (Sambil) & ~し (Dan lagi)",
  vocabulary: [
    { character: "働きながら", romaji: "hataraki nagara", meaning: "sambil bekerja" },
    { character: "笑いながら", romaji: "warai nagara", meaning: "sambil tertawa" },
    { character: "泣きながら", romaji: "naki nagara", meaning: "sambil menangis" },
    { character: "考え事", romaji: "kangaegoto", meaning: "hal yang dipikirkan" },
    { character: "用事", romaji: "youji", meaning: "urusan" },
    { character: "失敗", romaji: "shippai", meaning: "kegagalan" },
    { character: "間違えます", romaji: "machigaemasu", meaning: "salah, keliru" },
    { character: "複雑", romaji: "fukuzatsu", meaning: "rumit, kompleks" },
    { character: "細かい", romaji: "komakai", meaning: "halus, detail" },
    { character: "眠い", romaji: "nemui", meaning: "mengantuk" },
    { character: "冷えます", romaji: "hiemasu", meaning: "mendingin" },
    { character: "痛みます", romaji: "itamimasu", meaning: "sakit, terasa sakit" },
    { character: "腫れます", romaji: "haremasu", meaning: "bengkak" },
    { character: "下痢", romaji: "geri", meaning: "diare" },
    { character: "吐き気", romaji: "hakike", meaning: "mual" },
    { character: "歯", romaji: "ha", meaning: "gigi" },
    { character: "歯並び", romaji: "hanarabi", meaning: "susunan gigi" },
    { character: "発音", romaji: "hatsuon", meaning: "pelafalan, pengucapan" },
    { character: "直し方", romaji: "naoshikata", meaning: "cara memperbaiki" },
    { character: "続けます", romaji: "tsuzukemasu", meaning: "melanjutkan" },
    { character: "諦めます", romaji: "akiramemasu", meaning: "menyerah" },
    { character: "徹夜します", romaji: "tetsuya shimasu", meaning: "begadang" },
    { character: "規則正しい", romaji: "kisoku tadashii", meaning: "teratur (pola hidup)" },
    { character: "不規則", romaji: "fukisoku", meaning: "tidak teratur" },
    { character: "睡眠不足", romaji: "suimin busoku", meaning: "kurang tidur" },
  ],
  grammar: [
    {
      id: 2801,
      title: "~ながら (Sambil / Sekaligus)",
      description: "Dua aksi dilakukan bersamaan oleh subjek yang sama. Subjek tunggal: verb masu-stem + ながら. Bentuk ini lebih natural dari 'te-form + から' untuk dua aksi simultan.",
      examples: [
        { japanese: "音楽を聴きながら勉強します。", romaji: "Ongaku o kiki nagara benkyou shimasu.", meaning: "Belajar sambil mendengarkan musik." },
        { japanese: "彼はテレビを見ながら食事をします。", romaji: "Kare wa terebi o minagara shokuji o shimasu.", meaning: "Dia makan sambil menonton TV." },
      ]
    },
    {
      id: 2802,
      title: "~し (~し、~し) (Memberi Beberapa Alasan / Ciri)",
      description: "Menghubungkan beberapa alasan atau ciri. Pola: ~し、~し. Sering diakhiri ~から/ので untuk memperkuat alasan.",
      examples: [
        { japanese: "この部屋は広いし、明るいし、とてもいいです。", romaji: "Kono heya wa hiroi shi, akarui shi, totemo ii desu.", meaning: "Ruangan ini luas, terang, dan bagus sekali." },
        { japanese: "この店は安いし、おいしいし、ぜひ行きましょう。", romaji: "Kono mise wa yasui shi, oishii shi, zehi ikimashou.", meaning: "Restoran ini murah dan enak, ayo pergi." },
      ]
    },
    {
      id: 2803,
      title: "Perbedaan ~ながら vs ~て",
      description: "~ながら: dua aksi simultan, subjek SAMA. ~て: dua aksi berurutan ATAU sebab-akibat, subjek boleh beda. ~て juga bisa berarti 'dan'.",
      examples: [
        { japanese: "泣かないで話してください。", romaji: "Nakanaide hanashite kudasai.", meaning: "Tolong bicara tanpa menangis." },
        { japanese: "この町は静かで、きれいです。", romaji: "Kono machi wa shizuka de, kirei desu.", meaning: "Kota ini tenang dan indah." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "彼女は歌を歌いながら、料理を作ります。",
      question: "Apa yang dilakukan 'dia'?",
      options: ["Menyanyi lalu masak", "Menyanyi sambil masak", "Memasak setelah menyanyi", "Tidak masak"],
      correctAnswer: "Menyanyi sambil masak"
    },
    {
      audioText: "今日は日曜日だし、天気もいいし、ピクニックに行きませんか。",
      question: "Apa alasan ajakan pembicara?",
      options: ["Hari libur & cuaca bagus", "Sedang tidak sibuk", "Bosan di rumah", "Ingin olahraga"],
      correctAnswer: "Hari libur & cuaca bagus"
    },
    {
      audioText: "田中さんは頭が痛いし、熱もあるので、今日は休みます。",
      question: "Mengapa Tanaka istirahat hari ini?",
      options: ["Lelah", "Sakit kepala & demam", "Tidak semangat", "Tidak ada kerjaan"],
      correctAnswer: "Sakit kepala & demam"
    },
  ],
  dokkai: [
    {
      title: "私の生活 (Kehidupan Saya)",
      text: "私は毎日忙しい生活を送っています。朝七時に起きて、朝ごはんを食べながらニュースを見ます。それから、電車に乗りながら音楽を聴きます。\n\n会社では複雑な仕事をしていますが、たまに失敗します。先輩は「失敗もしながら成長していくんだよ」と言ってくれます。最近、睡眠不足だし、運動もしていないので、ちょっと疲れがたまっています。今週末はゆっくり休みたいです。",
      questions: [
        { question: "Apa yang dilakukan pembicara sambil makan pagi?", options: ["Membaca buku", "Melihat berita", "Mendengarkan musik", "Menonton TV"], correctAnswer: "Melihat berita" },
        { question: "Apa yang dikatakan senior?", options: ["Kerja lebih keras", "Berkembang sambil gagal", "Jangan gagal", "Istirahat saja"], correctAnswer: "Berkembang sambil gagal" },
        { question: "Apa masalah pembicara saat ini?", options: ["Tidak cukup uang", "Kurang tidur & olahraga", "Masalah keluarga", "Masalah pekerjaan"], correctAnswer: "Kurang tidur & olahraga" },
      ]
    },
  ]
};

// ============================================================
// BAB 29: Intransitif / Transitif & ~てしまう (Tidak Sengaja)
// ============================================================
const bab29 = {
  id: 29,
  title: "Bab 29: Pasangan Transitif-Intransitif & ~てしまう",
  vocabulary: [
    { character: "つきます", romaji: "tsukimasu", meaning: "tersambung (listrik/gas)" },
    { character: "つけます", romaji: "tsukemasu", meaning: "menyalakan, memasang" },
    { character: "消えます", romaji: "kiemasu", meaning: "padam, mati (sendiri)" },
    { character: "消します", romaji: "keshimasu", meaning: "mematikan" },
    { character: "開きます", romaji: "hirakimasu / akimasu", meaning: "terbuka" },
    { character: "開けます", romaji: "akemasu", meaning: "membuka" },
    { character: "閉まります", romaji: "shimarimasu", meaning: "tertutup (sendiri)" },
    { character: "閉めます", romaji: "shimemasu", meaning: "menutup" },
    { character: "壊れます", romaji: "kowaremasu", meaning: "rusak, pecah" },
    { character: "壊します", romaji: "kowashimasu", meaning: "merusak, memecahkan" },
    { character: "汚れます", romaji: "yogoremasu", meaning: "kotor" },
    { character: "汚します", romaji: "kegoshimasu", meaning: "mengotori" },
    { character: "落ちます", romaji: "ochimasu", meaning: "jatuh (sendiri)" },
    { character: "落とします", romaji: "otoshimasu", meaning: "menjatuhkan" },
    { character: "見つかります", romaji: "mitsukarimasu", meaning: "ditemukan" },
    { character: "探します", romaji: "sagashimasu", meaning: "mencari" },
    { character: "直ります", romaji: "naorarimasu", meaning: "sembuh, diperbaiki (sendiri)" },
    { character: "直します", romaji: "naoshimasu", meaning: "memperbaiki" },
    { character: "変わります", romaji: "kawarimasu", meaning: "berubah" },
    { character: "変えます", romaji: "kaemasu", meaning: "mengubah" },
    { character: "大変", romaji: "taihen", meaning: "sangat, parah, susah" },
    { character: "壊れ物", romaji: "kowaremono", meaning: "barang pecah belah" },
    { character: "扇風機", romaji: "senpūki", meaning: "kipas angin" },
    { character: "冷蔵庫", romaji: "reizouko", meaning: "kulkas" },
    { character: "電気代", romaji: "denkidai", meaning: "tagihan listrik" },
  ],
  grammar: [
    {
      id: 2901,
      title: "Pasangan Transitif-Intransitif (Tadoushi / Mudoushi)",
      description: "Intransitif (自): perubahan otomatis, subjek biasanya BUKAN agen. Transitif (他): subjek menyebabkan perubahan. Pola umum: ~eru (intransitif) ↔ ~u (transitif).",
      examples: [
        { japanese: "電気がついています。", romaji: "Denki ga tsuite imasu.", meaning: "Lampunya menyala." },
        { japanese: "電気をつけてください。", romaji: "Denki o tsukete kudasai.", meaning: "Tolong nyalakan lampunya." },
        { japanese: "ドアが開いています。", romaji: "Doa ga aite imasu.", meaning: "Pintunya terbuka." },
      ]
    },
    {
      id: 2902,
      title: "~てしまう (Tidak Sengaja / Sudah Terlanjur / Selesai)",
      description: "Menunjukkan: 1) aksi tidak disengaja/kecelakaan, 2) kondisi sudah final/tidak bisa diubah, 3) penyelesaian tuntas. Bentuk sopan: ~てしまいます.",
      examples: [
        { japanese: "大切な手紙を捨ててしまいました。", romaji: "Taisetsu na tegami o sutete shimaimashita.", meaning: "Saya tidak sengaja membuang surat penting." },
        { japanese: "全部食べてしまいました。", romaji: "Zenbu tabete shimaimashita.", meaning: "Semuanya sudah habis dimakan." },
      ]
    },
    {
      id: 2903,
      title: "Kontras 自動詞与他動詞 (Intransitif vs Transitif)",
      description: "Cara mengingat: Intransitif (自) = tidak ada agent, fokus pada PERUBAHAN. Transitif (他) = ada agent, fokus pada PENYEBAB perubahan. Pasangan: 開く/開ける, 付く/付ける, 壊れる/壊す, 落ちる/落とす.",
      examples: [
        { japanese: "ガラスが割れています。", romaji: "Garasu ga warete imasu.", meaning: "Kacanya pecah (terlihat sudah pecah)." },
        { japanese: "誰がガラスを割ったんですか。", romaji: "Dare ga garasu o watta n desu ka.", meaning: "Siapa yang memecahkan kacanya?" },
      ]
    },
  ],
  choukai: [
    {
      audioText: "あ、しまった。電気を消し忘れた。",
      question: "Apa yang terjadi?",
      options: ["Lupa mematikan listrik", "Listrik padam", "Lampu rusak", "Lupa menyalakan"],
      correctAnswer: "Lupa mematikan listrik"
    },
    {
      audioText: "すみません、お茶をこぼしてしまいました。",
      question: "Apa yang terjadi?",
      options: ["Memesan teh", "Minum teh", "Menumpahkan teh", "Membuang teh"],
      correctAnswer: "Menumpahkan teh"
    },
    {
      audioText: "カメラの調子が悪いです。直してもらえますか。",
      question: "Apa masalahnya?",
      options: ["Kamera hilang", "Kamera rusak", "Kamera mahal", "Kamera baru"],
      correctAnswer: "Kamera rusak"
    },
  ],
  dokkai: [
    {
      title: "エコ生活 (Hidup Ramah Lingkungan)",
      text: "最近、電気をこまめに消す人が増えています。使っていない電気は消してしまいます。例えば、部屋を離れるとき、エアコンや電気を消します。\n\nまた、冷蔵庫のドアを長い時間開けていると、冷蔵庫が壊れやすくなります。\n\n私の家でも、使わない電気はすぐ消すようにしています。電気代も安くなりますし、地球にも優しいです。最初は大変でしたが、習慣になりました。",
      questions: [
        { question: "Apa yang dilakukan orang belakangan ini?", options: ["Boros listrik", "Hemat listrik", "Pasang banyak lampu", "Pakai AC terus"], correctAnswer: "Hemat listrik" },
        { question: "Apa yang bisa merusak kulkas?", options: ["Sering dibuka lama", "Sering dipindahkan", "Disimpan di dapur", "Terlalu penuh"], correctAnswer: "Sering dibuka lama" },
        { question: "Apa manfaat hemat listrik selain hemat biaya?", options: ["Lebih cepat masak", "Ramah lingkungan", "Rumah lebih bersih", "Tidak perlu bayar"], correctAnswer: "Ramah lingkungan" },
      ]
    },
  ]
};

// ============================================================
// BAB 30: ~てある (Keadaan Hasil Tindakan)
// ============================================================
const bab30 = {
  id: 30,
  title: "Bab 30: ~てある (Keadaan Hasil dari Tindakan)",
  vocabulary: [
    { character: "並べてあります", romaji: "narande arimasu", meaning: "sudah ditata (dan masih ada)" },
    { character: "貼ってあります", romaji: "hatte arimasu", meaning: "sudah ditempel (dan masih ada)" },
    { character: "書いてあります", romaji: "kaite arimasu", meaning: "sudah tertulis (dan masih ada)" },
    { character: "置いてあります", romaji: "oite arimasu", meaning: "sudah diletakkan (dan masih ada)" },
    { character: "準備してあります", romaji: "junbi shite arimasu", meaning: "sudah disiapkan" },
    { character: "予約してあります", romaji: "yoyaku shite arimasu", meaning: "sudah direservasi" },
    { character: "作ってあります", romaji: "tsukutte arimasu", meaning: "sudah dibuat (dan masih ada)" },
    { character: "選んであります", romaji: "erande arimasu", meaning: "sudah dipilih" },
    { character: "掃除", romaji: "souji", meaning: "membersihkan" },
    { character: "洗濯", romaji: "sentaku", meaning: "mencuci (baju)" },
    { character: "買い物", romaji: "kaimono", meaning: "belanja" },
    { character: "晩御飯", romaji: "bangohan", meaning: "makan malam" },
    { character: "机", romaji: "tsukue", meaning: "meja tulis" },
    { character: "上", romaji: "ue", meaning: "atas" },
    { character: "下", romaji: "shita", meaning: "bawah" },
    { character: "中", romaji: "naka", meaning: "dalam" },
    { character: "外", romaji: "soto", meaning: "luar" },
    { character: "前", romaji: "mae", meaning: "depan, sebelum" },
    { character: "後ろ", romaji: "ushiro", meaning: "belakang" },
    { character: "隣", romaji: "tonari", meaning: "sebelah" },
    { character: "間", romaji: "aida", meaning: "antara" },
    { character: "花瓶", romaji: "kabin", meaning: "vas bunga" },
    { character: "ポスター", romaji: "posutaa", meaning: "poster" },
    { character: "玄関", romaji: "genkan", meaning: "pintu masuk rumah" },
    { character: "冷蔵庫", romaji: "reizouko", meaning: "kulkas" },
    { character: "いつも", romaji: "itsumo", meaning: "selalu" },
  ],
  grammar: [
    {
      id: 3001,
      title: "~てある (Hasil dari Tindakan untuk Orang Lain)",
      description: "Menunjukkan bahwa seseorang sudah melakukan sesuatu dan hasilnya MASIH ADA untuk dilihat/dimanfaatkan. Subjek biasanya orang (tidak disebutkan), fokus pada hasil. Bentuk: te-form + あります. Sering dengan partikel lokasi (に/で).",
      examples: [
        { japanese: "テーブルにお花が飾ってあります。", romaji: "Teeburu ni ohana ga kazatte arimasu.", meaning: "Bunga sudah dihias di meja (dan masih ada)." },
        { japanese: "壁にポスターが貼ってあります。", romaji: "Kabe ni posutaa ga hatte arimasu.", meaning: "Di dinding sudah ada poster yang ditempel." },
      ]
    },
    {
      id: 3002,
      title: "Perbedaan ~ている vs ~てある",
      description: "~ている: kondisi/keadaan saat ini (fokus pada STATUS). ~てある: hasil dari tindakan SENGJA orang, dan hasilnya masih ada untuk umum. Ciri: gunakan particle が setelah kata benda dengan ~てある.",
      examples: [
        { japanese: "窓が開いています。", romaji: "Mado ga aite imasu.", meaning: "Jendela terbuka (kondisinya sekarang)." },
        { japanese: "窓が開けてあります。", romaji: "Mado ga akete arimasu", meaning: "Jendelanya sengaja dibuka (oleh seseorang) untuk ventilasi." },
      ]
    },
    {
      id: 3003,
      title: "Kalimat dengan Lokasi + に / 場所 + が + ~てある",
      description: "Pola: 場所 + に + 物 + が + verb-te + あります. Benda (物) ditandai が, bukan を, karena fokus pada hasil yang ada di lokasi.",
      examples: [
        { japanese: "玄関に傘が置いてあります。", romaji: "Genkan ni kasa ga oite arimasu.", meaning: "Payung sudah diletakkan di pintu masuk." },
        { japanese: "パーティーの料理はもう作ってありますか。", romaji: "Paatii no ryouri wa mou tsukutte arimasu ka.", meaning: "Apakah makanan pesta sudah dibuat?" },
      ]
    },
  ],
  choukai: [
    {
      audioText: "テーブルの上に花が飾ってあります。",
      question: "Di mana bunga diletakkan?",
      options: ["Di lantai", "Di meja", "Di kursi", "Di rak"],
      correctAnswer: "Di meja"
    },
    {
      audioText: "もうコンサートのチケットは買ってありますか。",
      question: "Apa yang sudah dibeli?",
      options: ["Makanan", "Tiket konser", "Buku", "Baju"],
      correctAnswer: "Tiket konser"
    },
    {
      audioText: "冷蔵庫に飲み物が入れてありますから、どうぞ。",
      question: "Di mana minuman disimpan?",
      options: ["Di rak", "Di kulkas", "Di meja", "Di dapur"],
      correctAnswer: "Di kulkas"
    },
  ],
  dokkai: [
    {
      title: "田中さんの部屋 (Kamar Tanaka-san)",
      text: "田中さんの部屋はとてもきれいです。机の上に本が整えてあります。ベッドの横には、いつも花瓶にお花が飾ってあります。\n\nまた、壁には旅行の写真が貼ってあります。\n\n「週末はいつも部屋を掃除してあります。来客があっても、すぐに迎えることができます」と田中さんは言いました。",
      questions: [
        { question: "Bagaimana kondisi kamar Tanaka?", options: ["Berantakan", "Sangat bersih", "Sederhana", "Mewah"], correctAnswer: "Sangat bersih" },
        { question: "Apa yang ada di samping tempat tidur?", options: ["Buku", "Foto", "Bunga di vas", "Lampu"], correctAnswer: "Bunga di vas" },
        { question: "Apa kebiasaan Tanaka di akhir pekan?", options: ["Tidur lama", "Membersihkan kamar", "Pergi belanja", "Menonton TV"], correctAnswer: "Membersihkan kamar" },
      ]
    },
  ]
};

// ============================================================
// BAB 31: Bentuk Maksud / Ikoukkei (~つもりです / ~予定です)
// ============================================================
const bab31 = {
  id: 31,
  title: "Bab 31: Bentuk Maksud (~つもり / ~予定)",
  vocabulary: [
    { character: "つもりです", romaji: "tsumori desu", meaning: "berniat, bermaksud" },
    { character: "予定です", romaji: "yotei desu", meaning: "direncanakan, dijadwalkan" },
    { character: "今度", romaji: "kondo", meaning: "kali ini, yang akan datang" },
    { character: "この前", romaji: "kono mae", meaning: "yang lalu, kemarin dulu" },
    { character: "最近", romaji: "saikin", meaning: "akhir-akhir ini" },
    { character: "きっと", romaji: "kitto", meaning: "pasti, tentu" },
    { character: "多分", romaji: "tabun", meaning: "mungkin, barangkali" },
    { character: "絶対", romaji: "zettai", meaning: "pasti, sama sekali" },
    { character: "留学", romaji: "ryuugaku", meaning: "studi di luar negeri" },
    { character: "卒業します", romaji: "sotsugyou shimasu", meaning: "lulus" },
    { character: "就職します", romaji: "shuushoku shimasu", meaning: "bekerja (mulai kerja)" },
    { character: "引っ越し", romaji: "hikkoshi", meaning: "pindah rumah" },
    { character: "引っ越しします", romaji: "hikkoshi shimasu", meaning: "pindah rumah" },
    { character: "結婚します", romaji: "kekkon shimasu", meaning: "menikah" },
    { character: "出産", romaji: "shussan", meaning: "melahirkan" },
    { character: "独立します", romaji: "dokuritsu shimasu", meaning: "buka usaha sendiri" },
    { character: "昇進します", romaji: "shoushin shimasu", meaning: "naik jabatan" },
    { character: "失業します", romaji: "shitsugyou shimasu", meaning: "kehilangan pekerjaan" },
    { character: "定年", romaji: "teinen", meaning: "pensiun" },
    { character: "定年退職", romaji: "teinen taishoku", meaning: "pensiun (purna tugas)" },
    { character: "世界中", romaji: "sekaijuu", meaning: "seluruh dunia" },
    { character: "ボランティア", romaji: "borantia", meaning: "sukarelawan" },
    { character: "夢", romaji: "yume", meaning: "mimpi, cita-cita" },
    { character: "目標", romaji: "mokuhyou", meaning: "tujuan, target" },
  ],
  grammar: [
    {
      id: 3101,
      title: "~つもりです (Niat / Maksud Pribadi)",
      description: "Menyatakan niat/maksud pembicara. Lebih subjektif, biasanya untuk rencana BELUM pasti. Bentuk: plain-form + つもりです. Negatif: ~ないつもりです.",
      examples: [
        { japanese: "今年、日本語能力試験を受けるつもりです。", romaji: "Kotoshi, nihongo nouryoku shiken o ukeru tsumori desu.", meaning: "Tahun ini saya berniat ikut ujian kemampuan bahasa Jepang." },
        { japanese: "甘いものを食べないつもりでしたが、ケーキを食べてしまいました。", romaji: "Amai mono o tabenai tsumori deshita ga, keeki o tabete shimaimashita.", meaning: "Saya niat tidak makan makanan manis, tapi malah makan kue." },
      ]
    },
    {
      id: 3102,
      title: "~予定です (Rencana / Sudah Dijadwalkan)",
      description: "Menyatakan rencana yang sudah pasti/jelas, biasanya berdasarkan keputusan bersama atau jadwal resmi. Lebih formal dari ~つもりです.",
      examples: [
        { japanese: "来月、大阪に出張する予定です。", romaji: "Raigetsu, Oosaka ni shucchou suru yotei desu.", meaning: "Bulan depan saya dijadwalkan dinas ke Osaka." },
        { japanese: "結婚式は来年の春に行う予定です。", romaji: "Kekkonshiki wa rainen no haru ni okonau yotei desu.", meaning: "Pernikahan rencananya diadakan musim semi tahun depan." },
      ]
    },
    {
      id: 3103,
      title: "Perbedaan ~つもり vs ~予定",
      description: "~つもり: niat subjektif, BELUM tentu terlaksana, bisa berubah. ~予定: rencana pasti, sudah disepakati, biasanya fixed. Untuk peristiwa terikat waktu gunakan ~予定です.",
      examples: [
        { japanese: "日本へ留学するつもりです。", romaji: "Nihon e ryuugaku suru tsumori desu.", meaning: "Saya berniat studi ke Jepang." },
        { japanese: "明日東京に行く予定です。", romaji: "Ashita Toukyou ni iku yotei desu.", meaning: "Besok saya dijadwalkan ke Tokyo." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "今度の日曜日、ピクニックに行くつもりです。",
      question: "Apa rencana pembicara untuk Minggu depan?",
      options: ["Pergi piknik", "Pergi belanja", "Pergi kerja", "Di rumah saja"],
      correctAnswer: "Pergi piknik"
    },
    {
      audioText: "来月、大阪へ出張する予定ですので、会議には出られません。",
      question: "Mengapa pembicara tidak bisa hadir rapat?",
      options: ["Sakit", "Dinas ke Osaka", "Cuti", "Sibuk keluarga"],
      correctAnswer: "Dinas ke Osaka"
    },
    {
      audioText: "来年結婚する予定です。相手は日本人です。",
      question: "Apa rencana pembicara tahun depan?",
      options: ["Pindah kerja", "Menikah dengan orang Jepang", "Pulang kampung", "Lulus sekolah"],
      correctAnswer: "Menikah dengan orang Jepang"
    },
  ],
  dokkai: [
    {
      title: "私の十年後 (Saya Sepuluh Tahun Lagi)",
      text: "私は今、日本語学校で勉強しています。来年大学を卒業する予定です。卒業したら、日本の会社に就職するつもりです。\n\n十年後、定年まで働いたら、世界中を旅行したいと思っています。ボランティア活動にも参加したいです。\n\n「計画を立てることは大切ですが、人生は何が起こるかわかりません。だから、毎日の努力が大事だと思います」と、田中先生は言っていました。",
      questions: [
        { question: "Apa rencana pembicara setelah lulus?", options: ["Pulang ke Indonesia", "Bekerja di perusahaan Jepang", "Lanjut S2", "Buka usaha"], correctAnswer: "Bekerja di perusahaan Jepang" },
        { question: "Apa yang ingin dilakukan setelah pensiun?", options: ["Pensiun di rumah", "Keliling dunia", "Buka sekolah", "Tetap kerja"], correctAnswer: "Keliling dunia" },
        { question: "Apa pesan Tanaka-sensei?", options: ["Buat rencana detail", "Usaha setiap hari yang penting", "Jangan harap banyak", "Jangan kerja keras"], correctAnswer: "Usaha setiap hari yang penting" },
      ]
    },
  ]
};

// ============================================================
// BAB 32: ~ほうがいいです (Memberi Saran)
// ============================================================
const bab32 = {
  id: 32,
  title: "Bab 32: ~ほうがいいです (Memberi Saran)",
  vocabulary: [
    { character: "病院", romaji: "byouin", meaning: "rumah sakit" },
    { character: "病院に行ったほうがいいです", romaji: "byouin ni ita hou ga ii desu", meaning: "lebih baik ke RS" },
    { character: "無理しないほうがいいです", romaji: "muri shinai hou ga ii desu", meaning: "lebih baik tidak memaksakan diri" },
    { character: "注意", romaji: "chuui", meaning: "perhatian, hati-hati" },
    { character: "不注意", romaji: "fuchuui", meaning: "kurang hati-hati" },
    { character: "無理", romaji: "muri", meaning: "memaksakan diri, mustahil" },
    { character: "避けます", romaji: "sakemasu", meaning: "menghindari" },
    { character: "控えます", romaji: "hikaemasu", meaning: "menahan diri, mengurangi" },
    { character: "やせます", romaji: "yasemasu", meaning: "menjadi kurus" },
    { character: "太ります", romaji: "futrimasu", meaning: "menjadi gemuk" },
    { character: "ダイエット", romaji: "daietto", meaning: "diet" },
    { character: "運動します", romaji: "undou shimasu", meaning: "berolahraga" },
    { character: "規則正しい生活", romaji: "kisoku tadashii seikatsu", meaning: "pola hidup teratur" },
    { character: "健康", romaji: "kenkou", meaning: "kesehatan" },
    { character: "不健康", romaji: "fukenkou", meaning: "tidak sehat" },
    { character: "体", romaji: "karada", meaning: "tubuh" },
    { character: "調子", romaji: "choushi", meaning: "kondisi (tubuh/mesin)" },
    { character: "早寝早起き", romaji: "haya ne haya oki", meaning: "tidur cepat bangun cepat" },
    { character: "夜更かし", romaji: "yofukashi", meaning: "begadang" },
    { character: "酒", romaji: "sake", meaning: "minuman beralkohol" },
    { character: "たばこ", romaji: "tabako", meaning: "rokok" },
    { character: "禁煙", romaji: "kin'en", meaning: "berhenti merokok" },
    { character: "お酒を控えます", romaji: "osake o hikaemasu", meaning: "mengurangi minum alkohol" },
    { character: "野菜", romaji: "yasai", meaning: "sayuran" },
    { character: "果物", romaji: "kudamono", meaning: "buah-buahan" },
  ],
  grammar: [
    {
      id: 3201,
      title: "~ほうがいいです (Lebih Baik...)",
      description: "Memberi saran. POSITIF: plain-form + ほうがいいです (melakukan hal tsb lebih baik). NEGATIF: plain-negative + ほうがいいです (tidak melakukan lebih baik).",
      examples: [
        { japanese: "熱があるなら、病院に行ったほうがいいです。", romaji: "Netsu ga arunara, byouin ni ita hou ga ii desu.", meaning: "Kalau demam, lebih baik ke rumah sakit." },
        { japanese: "甘いものを食べないほうがいいです。", romaji: "Amai mono o tabenai hou ga ii desu.", meaning: "Lebih baik tidak makan makanan manis." },
      ]
    },
    {
      id: 3202,
      title: "~ないほうがいい (Lebih Baik Tidak)",
      description: "Menyarankan untuk TIDAK melakukan sesuatu. Pola: plain-negative + ほうがいいです. Nuansa: peringatan lembut.",
      examples: [
        { japanese: "夜更かししないほうがいいです。", romaji: "Yofukashi shinai hou ga ii desu.", meaning: "Lebih baik tidak begadang." },
        { japanese: "一人で無理しないほうがいいですよ。", romaji: "Hitori de muri shinai hou ga ii desu yo.", meaning: "Lebih baik jangan memaksakan diri sendirian." },
      ]
    },
    {
      id: 3203,
      title: "~たほうがいい (Saran untuk yang Sudah Terjadi)",
      description: "Untuk situasi yang sudah terjadi/keputusan yang sudah dibuat, gunakan ta-form + ほうがいい (bukan plain-form). Misalnya: 'Lebih baik sudah memesan dulu.'",
      examples: [
        { japanese: "もう予約しておいたほうがいいですよ。", romaji: "Mou yoyaku shite oita hou ga ii desu yo.", meaning: "Lebih baik sudah reservasi dulu." },
        { japanese: "早く医者に診てもらったほうがいいです。", romaji: "Hayaku isha ni miteraretta hou ga ii desu.", meaning: "Lebih baik cepat periksa ke dokter." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "熱があるときは、無理しないほうがいいですよ。",
      question: "Apa saran pembicara?",
      options: ["Olahraga ringan", "Jangan memaksakan diri", "Minum obat", "Tetap kerja"],
      correctAnswer: "Jangan memaksakan diri"
    },
    {
      audioText: "クレジットカードは、なくしたほうがいいです。",
      question: "Apa yang seharusnya dilakukan?",
      options: ["Buat baru", "Hilang", "Gunakan banyak", "Batalkan"],
      correctAnswer: "Hilang (batalkan)"
    },
    {
      audioText: "最近は運動したほうがいいと思います。",
      question: "Apa pendapat pembicara?",
      options: ["Olahraga tidak perlu", "Sebaiknya olahraga", "Jangan olahraga", "Sudah cukup olahraga"],
      correctAnswer: "Sebaiknya olahraga"
    },
  ],
  dokkai: [
    {
      title: "健康のために (Demi Kesehatan)",
      text: "現代人は忙しくて、不規則な生活をしている人が多いです。夜更かしをするし、朝ごはんを食べない人も多いです。それは体によくありません。\n\n毎朝、運動したほうがいいです。少なくとも三十分ぐらい歩くことをお勧めします。また、野菜や果物をたくさん食べたほうがいいです。\n\nもし体の調子が悪いなら、すぐに病院に行ったほうがいいです。無理をしないほうがいいですよ。健康が一番大事です。",
      questions: [
        { question: "Bagaimana gaya hidup orang modern menurut teks?", options: ["Sehat", "Tidak teratur", "Sangat aktif", "Santai"], correctAnswer: "Tidak teratur" },
        { question: "Berapa lama disarankan untuk berjalan?", options: ["10 menit", "30 menit", "1 jam", "2 jam"], correctAnswer: "30 menit" },
        { question: "Apa yang harus dilakukan kalau badan tidak enak?", options: ["Tetap kerja", "Tidur saja", "Ke rumah sakit", "Minum jamu"], correctAnswer: "Ke rumah sakit" },
      ]
    },
  ]
};

// ============================================================
// BAB 33: Perintah, Larangan, & ~と書いてあります
// ============================================================
const bab33 = {
  id: 33,
  title: "Bab 33: Perintah, Larangan, & ~と書いてあります",
  vocabulary: [
    { character: "触るな", romaji: "sawaru na", meaning: "jangan sentuh!" },
    { character: "止まれ", romaji: "tomare", meaning: "berhenti!" },
    { character: "静かにしろ", romaji: "shizuka ni shiro", meaning: "diam!" },
    { character: "歩くな", romaji: "aruku na", meaning: "jangan berjalan!" },
    { character: "走るな", romaji: "hashiru na", meaning: "jangan berlari!" },
    { character: "騒ぐな", romaji: "sawagu na", meaning: "jangan berisik!" },
    { character: "捨てるな", romaji: "suteru na", meaning: "jangan buang!" },
    { character: "忘れるな", romaji: "wasureru na", meaning: "jangan lupa!" },
    { character: "指示", romaji: "shiji", meaning: "instruksi, perintah" },
    { character: "看板", romaji: "kanban", meaning: "papan tanda, rambu" },
    { character: "表示", romaji: "hyouji", meaning: "tampilan, penandaan" },
    { character: "禁煙", romaji: "kin'en", meaning: "dilarang merokok" },
    { character: "駐車禁止", romaji: "chūsha kinshi", meaning: "dilarang parkir" },
    { character: "立入禁止", romaji: "tachiiri kinshi", meaning: "dilarang masuk" },
    { character: "土足禁止", romaji: "dosoku kinshi", meaning: "dilarang pakai sepatu" },
    { character: "撮影禁止", romaji: "satsuei kinshi", meaning: "dilarang foto/video" },
    { character: "注意書", romaji: "chuui sho", meaning: "catatan peringatan" },
    { character: "利用規則", romaji: "riyou kisoku", meaning: "peraturan penggunaan" },
    { character: "破ります", romaji: "yaburimasu", meaning: "merobek, melanggar" },
    { character: "従います", romaji: "shitagaimasu", meaning: "mengikuti, menaati" },
    { character: "注意書き", romaji: "chuui gaki", meaning: "tulisan peringatan" },
    { character: "紙", romaji: "kami", meaning: "kertas" },
    { character: "貼り紙", romaji: "harigami", meaning: "pengumuman tempel" },
    { character: "必ず", romaji: "kanarazu", meaning: "pasti, tanpa gagal" },
    { character: "必ず守ってください", romaji: "kanarazu mamotte kudasai", meaning: "tolong pasti dipatuhi" },
  ],
  grammar: [
    {
      id: 3301,
      title: "Bentuk Perintah Kasar (命令形 / Meireikei)",
      description: "Bentuk sangat kasar, hanya untuk situasi darurat, militer, atau ke hewan. Gol I: ~u → ~e. Gol II: ~ru → ~ro. Gol III: する→しろ, くる→こい. Jarang dipakai ke orang lain.",
      examples: [
        { japanese: "止まれ！", romaji: "Tomare!", meaning: "Berhenti!" },
        { japanese: "静かにしろ。", romaji: "Shizuka ni shiro.", meaning: "Diam!" },
      ]
    },
    {
      id: 3302,
      title: "Bentuk Larangan Kasar (~な / N Kinshi)",
      description: "Bentuk kasar 'jangan'. Plain-form + な. Hanya untuk situasi kuat, anak, atau diri sendiri (self-restraint).",
      examples: [
        { japanese: "触るな。", romaji: "Sawaruna.", meaning: "Jangan sentuh!" },
        { japanese: "あそこで騒ぐな。", romaji: "Asoko de sawagu na.", meaning: "Jangan berisik di sana!" },
      ]
    },
    {
      id: 3303,
      title: "~と書いてあります (tertulis... / tertulis bahwa...)",
      description: "Menunjukkan tulisan/pengumuman yang masih terbaca. Subjek adalah tulisan, bukan orang. Pola: 内容 + と + verb-te + あります. Sering di tempat umum (papan, pengumuman).",
      examples: [
        { japanese: "「禁煙」と書いてあります。", romaji: "Kin'en to kaite arimasu.", meaning: "tertulis 'Dilarang Merokok'." },
        { japanese: "ポスターに「土足禁止」と書いてありました。", romaji: "Posutaa ni dosoku kinshi to kaite arimashita.", meaning: "Di poster tertulis 'Dilarang pakai sepatu'." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "ここに「危険」と書いてあるので、触らないでください。",
      question: "Apa yang tertulis di sini?",
      options: ["Bahaya", "Aman", "Hati-hati", "Dilarang"],
      correctAnswer: "Bahaya"
    },
    {
      audioText: "すみません、ここは駐車禁止ですよ。", question: "Apa aturannya?", options: ["Boleh parkir", "Dilarang parkir", "Parkir gratis", "Parkir berbayar"], correctAnswer: "Dilarang parkir" },
    {
      audioText: "あそこで走るなと言われました。", question: "Apa yang dikatakan?", options: ["Berlari cepat", "Berhenti", "Jangan berlari", "Lari ke sana"], correctAnswer: "Jangan berlari"
    },
  ],
  dokkai: [
    {
      title: "公園の看板 (Papan Tanda di Taman)",
      text: "日本の公園には、いろいろな看板があります。「立入禁止」と書いてある場所があります。それは、植物を守ったり、危険を避けたりするためです。\n\nまた、「禁煙」と書いてある場所がたくさんあります。最近は、「ポイ捨て禁止」という言葉もよく見かけます。これは、ごみを勝手に捨ててはいけないという意味です。\n\nこれらのルールは必ず守らなければなりません。マナーを守って、みんなで楽しく利用しましょう。",
      questions: [
        { question: "Mengapa ada papan 'Dilarang Masuk'?", options: ["Untuk dekorasi", "Melindungi tanaman/bahaya", "Pungutan biaya", "Biar sepi"], correctAnswer: "Melindungi tanaman/bahaya" },
        { question: "Apa arti 'ポイ捨て禁止'?", options: ["Dilarang masuk", "Dilarang buang sampah sembarangan", "Dilarang foto", "Dilarang berlari"], correctAnswer: "Dilarang buang sampah sembarangan" },
        { question: "Bagaimana cara menikmati taman bersama?", options: ["Sendiri", "Bayar masuk", "Patuhi aturan", "Bawa makanan"], correctAnswer: "Patuhi aturan" },
      ]
    },
  ]
};

// ============================================================
// BAB 34: ~とおりに (Sesuai dengan) / ~直す (Mengulang)
// ============================================================
const bab34 = {
  id: 34,
  title: "Bab 34: ~とおりに (Sesuai) & ~直す (Mengulang)",
  vocabulary: [
    { character: "とおり", romaji: "toori", meaning: "sesuai, seperti" },
    { character: "とおりに", romaji: "toori ni", meaning: "sesuai dengan" },
    { character: "通りです", romaji: "toori desu", meaning: "sesuai/benar" },
    { character: "予定通り", romaji: "yotei doori", meaning: "sesuai rencana" },
    { character: "通り", romaji: "toori", meaning: "jalan (secara umum)" },
    { character: "申し込み", romaji: "moushikomi", meaning: "pendaftaran, aplikasi" },
    { character: "手続き", romaji: "tetsuzuki", meaning: "prosedur" },
    { character: "手順", romaji: "tejun", meaning: "langkah, urutan" },
    { character: "書き方", romaji: "kakikata", meaning: "cara menulis" },
    { character: "読み方", romaji: "yomikata", meaning: "cara membaca" },
    { character: "使い方", romaji: "tsukaikata", meaning: "cara pakai" },
    { character: "作り方", romaji: "tsukurikata", meaning: "cara membuat" },
    { character: "出します", romaji: "dashimasu", meaning: "mengirim, mengeluarkan" },
    { character: "出します", romaji: "dashimasu", meaning: "mengajukan" },
    { character: "申し込み書", romaji: "moushikomi sho", meaning: "formulir pendaftaran" },
    { character: "書き直します", romaji: "kakinaoshimasu", meaning: "menulis ulang" },
    { character: "やり直します", romaji: "yarinaoshimasu", meaning: "mengulang/mengerjakan ulang" },
    { character: "読み直します", romaji: "yominaoshimasu", meaning: "membaca ulang" },
    { character: "考え直します", romaji: "kangaenaoshimasu", meaning: "memikirkan ulang" },
    { character: "組み立てます", romaji: "kumitatemasu", meaning: "merakit" },
    { character: "説明書", romaji: "setsumeisho", meaning: "petunjuk penggunaan" },
    { character: "マニュアル", romaji: "manyuaru", meaning: "manual" },
    { character: "手順どおり", romaji: "tejun doori", meaning: "sesuai langkah" },
    { character: "通り", romaji: "toori", meaning: "jalan" },
    { character: "十字路", romaji: "juujiro", meaning: "persimpangan empat" },
  ],
  grammar: [
    {
      id: 3401,
      title: "~とおりに (Sesuai / Mengikuti Pola)",
      description: "Melakukan sesuatu sesuai pola/contoh/instruksi. Bentuk: plain-form (atau noun) + とおりに. Negasi: とおりにしない = tidak sesuai.",
      examples: [
        { japanese: "説明書どおりに組み立ててください。", romaji: "Setsumeisho doori ni kumitatete kudasai.", meaning: "Tolong rakit sesuai petunjuk." },
        { japanese: "私が言ったとおりにしてください。", romaji: "Watashi ga itta toori ni shite kudasai.", meaning: "Tolong lakukan seperti yang saya bilang." },
      ]
    },
    {
      id: 3402,
      title: "~なおす (~直す, Mengulang / Memperbaiki)",
      description: "Verb-masu stem + 直す = mengulang/mengerjakan ulang dengan perbaikan. Makna: 're-do' atau 'memperbaiki'.",
      examples: [
        { japanese: "レポートを書き直してください。", romaji: "Reepoo to o kakinaoshite kudasai.", meaning: "Tolong tulis ulang laporan." },
        { japanese: "よく考え直してから、答えなさい。", romaji: "Yoku kangaenaoshite kara, kotaenasai.", meaning: "Pikirkan baik-baik dulu, baru jawab." },
      ]
    },
    {
      id: 3403,
      title: "~とおりです / ~とおりだ (Konfirmasi Kesesuaian)",
      description: "Untuk mengkonfirmasi bahwa sesuatu berjalan sesuai rencana/pola. ~とおりです (sopan), ~とおりだ (biasa).",
      examples: [
        { japanese: "会議は予定どおりに行われます。", romaji: "Kaigi wa yotei doori ni okonawaremasu.", meaning: "Rapat dilaksanakan sesuai rencana." },
        { japanese: "私の予想したとおり、彼はまだ来ていません。", romaji: "Watashi no yosou shita toori, kare wa mada kite imasen.", meaning: "Seperti yang saya prediksi, dia belum datang." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "申込書に書いてあるとおりに、名前と住所を書いてください。",
      question: "Apa yang harus dilakukan?",
      options: ["Baca formulir", "Tulis nama & alamat sesuai petunjuk", "Tanda tangan", "Bayar biaya"], correctAnswer: "Tulis nama & alamat sesuai petunjuk"
    },
    {
      audioText: "すみません、答えを間違えました。もう一度考え直してもいいですか。",
      question: "Apa yang diminta pembicara?",
      options: ["Ulangi soal", "Pikirkan ulang jawabannya", "Keluar ruangan", "Minta waktu"], correctAnswer: "Pikirkan ulang jawabannya"
    },
    {
      audioText: "この漢字の書き方がわかりません。もう一度書き直してもいいですか。",
      question: "Apa masalahnya?", options: ["Cara membaca", "Cara menulis kanji", "Arti kanji", "Jumlah guratan"], correctAnswer: "Cara menulis kanji"
    },
  ],
  dokkai: [
    {
      title: "申請手続き (Prosedur Aplikasi)",
      text: "日本に住み始めたら、市役所でいろいろな手続きをしなければなりません。\n\nまず、住所を登録する必要があります。次に、国民健康保険の手続きがあります。\n\n市役所に行ったら、窓口で「申請手続きの書類をください」と言います。書き方がわからなければ、係員に聞いてください。書類は記入例のとおりに書きます。記入例は窓口にもらえます。書き終わったら、もう一度読み直してから提出してください。",
      questions: [
        { question: "Apa yang harus dilakukan pertama kali setelah tinggal di Jepang?", options: ["Buka rekening", "Daftar alamat", "Cari kerja", "Belajar bahasa"], correctAnswer: "Daftar alamat" },
        { question: "Apa yang harus diminta ke petugas kalau bingung?", options: ["Surat rekomendasi", "Formulir aplikasi", "Bantuan uang", "Alamat kantor"], correctAnswer: "Formulir aplikasi" },
        { question: "Apa yang harus dilakukan setelah selesai menulis formulir?", options: ["Tanda tangan", "Bayar", "Baca ulang lalu serahkan", "Tinggalkan di meja"], correctAnswer: "Baca ulang lalu serahkan" },
      ]
    },
  ]
};

// ============================================================
// BAB 35: Bentuk Syarat ~ば (Kalau)
// ============================================================
const bab35 = {
  id: 35,
  title: "Bab 35: Bentuk Syarat ~ば (Kalau)",
  vocabulary: [
    { character: "安ければ", romaji: "yasukereba", meaning: "kalau murah" },
    { character: "高ければ", romaji: "takakereba", meaning: "kalau mahal" },
    { character: "安ければ買う", romaji: "yasukereba kau", meaning: "kalau murah, beli" },
    { character: "便利ならば", romaji: "benri naraba", meaning: "kalau berguna" },
    { character: "安かったら", romaji: "yasukattara", meaning: "kalau (ternyata) murah" },
    { character: "天気が良ければ", romaji: "tenki ga yokereba", meaning: "kalau cuaca bagus" },
    { character: "暇だったら", romaji: "hima dattara", meaning: "kalau (ternyata) luang" },
    { character: "安ければ", romaji: "yasukereba", meaning: "kalau murah (kondisi umum)" },
    { character: "もし", romaji: "moshi", meaning: "kalau (misalkan)" },
    { character: "もしも", romaji: "moshimo", meaning: "andai kata" },
    { character: "いくら", romaji: "ikura", meaning: "berapa harga" },
    { character: "努力すれば", romaji: "doryoku sureba", meaning: "kalau berusaha" },
    { character: "練習すれば", romaji: "renshuu sureba", meaning: "kalau berlatih" },
    { character: "勉強すれば", romaji: "benkyou sureba", meaning: "kalau belajar" },
    { character: "節約すれば", romaji: "setsuyaku sureba", meaning: "kalau hemat" },
    { character: "続ければ", romaji: "tsuzukereba", meaning: "kalau melanjutkan" },
    { character: "耐えられます", romaji: "taeraremasu", meaning: "bisa bertahan" },
    { character: "成功します", romaji: "seikou shimasu", meaning: "berhasil" },
    { character: "上達します", romaji: "jouatsu shimasu", meaning: "meningkat kemampuannya" },
    { character: "上達します", romaji: "jouatsu shimasu", meaning: "meningkat (kemampuan)" },
    { character: "慣れてきます", romaji: "narete kimasu", meaning: "terbiasa" },
    { character: "上達", romaji: "jouatsu", meaning: "kemajuan (skill)" },
    { character: "壁", romaji: "kabe", meaning: "dinding, hambatan" },
    { character: "越えます", romaji: "koemasu", meaning: "melewati" },
  ],
  grammar: [
    {
      id: 3501,
      title: "Bentuk Syarat ~ば (Kalau / Jika)",
      description: "Paling netral dari semua bentuk syarat. Bentuk: plain-form ~eba (gol I: ~u→~eba, gol II: ~ru→~reba, ~suru→sureba, ~kuru→kureba). Selalu diasumsikan hasil/konsekuensi. Tidak untuk perintah/ajakan.",
      examples: [
        { japanese: "安ければ買いたいです。", romaji: "Yasukereba kaitai desu.", meaning: "Kalau murah, saya mau beli." },
        { japanese: "もっと練習すれば、上手になりますよ。", romaji: "Motto renshuu sureba, jouzu ni narimasu yo.", meaning: "Kalau lebih練習, akan jadi pandai." },
      ]
    },
    {
      id: 3502,
      title: "Kontras ~ば vs ~たら vs ~と vs ~なら",
      description: "~ば: asumsi/kondisi netral, hasil pasti. ~たら: 'kalau ternyata/setelah', bisa untuk urutan waktu. ~と: 'kalau/saat', otomatis/alami. ~なら: 'kalau begitu/mengenai', topik.",
      examples: [
        { japanese: "安ければ買います。", romaji: "Yasukereba kaimasu.", meaning: "Kalau murah, beli." },
        { japanese: "駅についたら、電話してください。", romaji: "Eki ni tsuitara, denwa shite kudasai.", meaning: "Kalau sampai stasiun, telepon ya." },
      ]
    },
    {
      id: 3503,
      title: "~ば + いい / よかった (Saran / Ekspresi Harapan)",
      description: "~ばいい (lebih baik/kalau gitu bagus) untuk saran sendiri. ~ばよかった (andainya...) untuk penyesalan. Sering dengan どう/how.",
      examples: [
        { japanese: "どうすればいいですか。", romaji: "Dō sureba ii desu ka.", meaning: "Apa yang harus saya lakukan?" },
        { japanese: "もっと勉強すればよかったです。", romaji: "Motto benkyou sureba yokatta desu.", meaning: "Andai saya belajar lebih giat saja." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "もし百万円あったら、何がしたいですか。",
      question: "Apa yang akan dilakukan dengan 1 juta yen?",
      options: ["Ditabung", "Traveling", "Bayar hutang", "Buka usaha"], correctAnswer: "Traveling"
    },
    {
      audioText: "もっと早く起きれば、朝ごはんが食べられますよ。",
      question: "Saran apa yang diberikan?", options: ["Sarapan dulu", "Bangun lebih awal bisa sarapan", "Jangan makan pagi", "Makan lebih banyak"], correctAnswer: "Bangun lebih awal bisa sarapan"
    },
    {
      audioText: "薬を飲めば、治りますよ。",
      question: "Apa yang akan terjadi kalau minum obat?", options: ["Makin parah", "Sembuh", "Mual", "Tidak berubah"], correctAnswer: "Sembuh"
    },
  ],
  dokkai: [
    {
      title: "もし宝くじが当たったら (Kalau Menang Lotere)",
      text: "よく友達と「もし宝くじが一億円当たったら、何をしますか」という話になります。\n\n私の場合は、まず両親に家をプレゼントしたいです。次に、世界中を旅行したいです。寄付もしたいと思っています。\n\nでも、もっと現実的に考えると、もし、もっと練習すれば、ギターがもっと上手になれるかもしれません。毎日少しずつでも練習を続ければ、壁を越えられると思います。「継続は力なり」という言葉があります。努力すれば、夢は叶うかもしれません。",
      questions: [
        { question: "Berapa hadiah yang dibicarakan?", options: ["100 万", "1 億", "10 億", "1000 万"], correctAnswer: "1 億" },
        { question: "Apa yang pertama ingin dilakukan pembicara kalau menang?", options: ["Pergi jalan-jalan", "Beri rumah untuk orang tua", "Buka usaha", "Beli mobil"], correctAnswer: "Beri rumah untuk orang tua" },
        { question: "Apa keyakinan pembicara tentang bermain gitar?", options: ["Tidak bisa belajar", "Butuh bakat", "Latihan rutin bisa tingkatkan skill", "Sudah cukup jago"], correctAnswer: "Latihan rutin bisa tingkatkan skill" },
      ]
    },
  ]
};

// ============================================================
// BAB 36: ~ように (Agar / Berusaha Supaya)
// ============================================================
const bab36 = {
  id: 36,
  title: "Bab 36: ~ように (Agar / Berupaya)",
  vocabulary: [
    { character: "ように", romaji: "you ni", meaning: "supaya, agar" },
    { character: "ように言います", romaji: "you ni iimasu", meaning: "bilang supaya" },
    { character: "ように頼みます", romaji: "you ni tanomimasu", meaning: "minta supaya" },
    { character: "ようにします", romaji: "you ni shimasu", meaning: "berupaya untuk" },
    { character: "ように見えます", romaji: "you ni miemasu", meaning: "terlihat seperti" },
    { character: "聞こえるように", romaji: "kikoeru you ni", meaning: "supaya terdengar" },
    { character: "見えるように", romaji: "mieru you ni", meaning: "supaya terlihat" },
    { character: "届くように", romaji: "todoku you ni", meaning: "supaya sampai" },
    { character: "忘れないように", romaji: "wasurenai you ni", meaning: "supaya tidak lupa" },
    { character: "遅刻しないように", romaji: "chikoku shinai you ni", meaning: "supaya tidak terlambat" },
    { character: "風邪を引かないように", romaji: "kaze o hikanai you ni", meaning: "supaya tidak flu" },
    { character: "頑張ります", romaji: "ganbarimasu", meaning: "berjuang, berusaha keras" },
    { character: "遅くならないように", romaji: "osoku naranai you ni", meaning: "supaya tidak terlambat/terlambat" },
    { character: "時間に間に合うように", romaji: "jikan ni maniauyou ni", meaning: "supaya tepat waktu" },
    { character: "よく眠れるように", romaji: "yoku nemureru you ni", meaning: "supaya bisa tidur nyenyak" },
    { character: "気をつけます", romaji: "ki o tsukemasu", meaning: "berhati-hati" },
    { character: "用心します", romaji: "youjin shimasu", meaning: "waspada" },
    { character: "確かめます", romaji: "tashikamemasu", meaning: "memastikan" },
    { character: "用心深い", romaji: "youjinbukai", meaning: "sangat waspada" },
    { character: "用心", romaji: "youjin", meaning: "kewaspadaan" },
    { character: "確認します", romaji: "kakunin shimasu", meaning: "mengkonfirmasi" },
    { character: "確か", romaji: "tashika", meaning: "pasti, kayaknya" },
    { character: "確かめる", romaji: "tashikameru", meaning: "memastikan" },
  ],
  grammar: [
    {
      id: 3601,
      title: "~ように (Supaya / Agar) - Tujuan Tidak Langsung",
      description: "Untuk tujuan yang tidak secara langsung dapat dicapai pembicara (misalnya menyuruh orang lain, atau kondisi yang diinginkan). Verb biasa (bukan volitional) + ように. Berbeda dengan ~ために yang verb-nya volitional.",
      examples: [
        { japanese: "忘れないように、メモしてください。", romaji: "Wasurenai you ni, memo shite kudasai.", meaning: "Tolong catat supaya tidak lupa." },
        { japanese: "風がよく通るように、窓を開けてください。", romaji: "Kaze ga yoku tooru you ni, mado o akete kudasai.", meaning: "Buka jendela supaya angin bisa lewat." },
      ]
    },
    {
      id: 3602,
      title: "~ようにしています (Berupaya untuk...)",
      description: "Menunjukkan kebiasaan atau upaya berkelanjutan. Subjek adalah pembicara yang berusaha sendiri.",
      examples: [
        { japanese: "毎日運動するようにしています。", romaji: "Mainichi undou suru you ni shite imasu.", meaning: "Saya berusaha olahraga setiap hari." },
        { japanese: "夜は早く寝るようにしています。", romaji: "Yoru wa hayaku neru you ni shite imasu.", meaning: "Saya berusaha tidur cepat di malam hari." },
      ]
    },
    {
      id: 3603,
      title: "~ようになる (Jadi Bisa / Mulai Kebiasaan)",
      description: "Menunjukkan perubahan dari kondisi A ke B, atau pencapaian kemampuan baru. Verb plain + ようになる. Negasi: ~なくなる.",
      examples: [
        { japanese: "日本語が話せるようになりました。", romaji: "Nihongo ga hanaseru you ni narimashita.", meaning: "Saya jadi bisa berbahasa Jepang." },
        { japanese: "毎朝運動するようになりました。", romaji: "Maiasa undou suru you ni narimashita.", meaning: "Saya jadi terbiasa olahraga setiap pagi." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "忘れずに、薬を持ってきてください。",
      question: "Apa yang harus dibawa?", options: ["Buku", "Obat", "Makanan", "Uang"], correctAnswer: "Obat"
    },
    {
      audioText: "健康のために、毎日歩くようにしています。",
      question: "Apa kebiasaan pembicara?", options: ["Lari setiap hari", "Jalan kaki setiap hari", "Tidur cepat", "Makan sehat"], correctAnswer: "Jalan kaki setiap hari"
    },
    {
      audioText: "最近、日本のドラマが少しずつわかるようになりました。",
      question: "Apa yang mulai bisa dilakukan?", options: ["Bicara Jepang", "Mengerti drama Jepang", "Baca buku", "Masak Jepang"], correctAnswer: "Mengerti drama Jepang"
    },
  ],
  dokkai: [
    {
      title: "上手になるコツ (Tips Menjadi Mahir)",
      text: "何かを上手になりたいなら、毎日少しずつ練習することが大切です。\n\n例えば、外国語を勉強したいなら、毎日少しでも勉強するようにしてください。完璧に理解できなくても、続けることが大切です。\n\n楽器を演奏したいなら、毎日五分でも練習するようにしています。数か月後、できなかったことができるようになる自分に気づくでしょう。\n\n大事なのは、「継続は力なり」ということです。",
      questions: [
        { question: "Apa tips utama dari teks?", options: ["Latihan keras sekaligus", "Sedikit tapi rutin", "Punya bakat", "Guru mahal"], correctAnswer: "Sedikit tapi rutin" },
        { question: "Berapa lama disarankan untuk latihan alat musik?", options: ["1 jam", "30 menit", "5 menit", "Sepanjang hari"], correctAnswer: "5 menit" },
        { question: "Apa arti '継続は力なり'?", options: ["Berhenti saat lelah", "Konsistensi menghasilkan kekuatan", "Bakat penting", "Jangan menyerah"], correctAnswer: "Konsistensi menghasilkan kekuatan" },
      ]
    },
  ]
};

// ============================================================
// BAB 37: Bentuk Pasif (Ukemikei)
// ============================================================
const bab37 = {
  id: 37,
  title: "Bab 37: Bentuk Pasif (Ukemikei)",
  vocabulary: [
    { character: "褒めます", romaji: "homemasu", meaning: "memuji" },
    { character: "褒められます", romaji: "homeraremasu", meaning: "dipuji" },
    { character: "叱ります", romaji: "shikarimasu", meaning: "memarahi" },
    { character: "叱られます", romaji: "shikararemasu", meaning: "dimarahi" },
    { character: "褒め言葉", romaji: "homekotoba", meaning: "kata-kata pujian" },
    { character: "被害者", romaji: "higaisha", meaning: "korban" },
    { character: "泥棒", romaji: "dorobou", meaning: "pencuri" },
    { character: "泥棒に入られました", romaji: "dorobou ni hairaremashita", meaning: "dimasuki pencuri" },
    { character: "泣かせます", romaji: "nakasemasu", meaning: "menangisi, membuat orang menangis" },
    { character: "笑わせます", romaji: "warawasemasu", meaning: "membuat orang tertawa" },
    { character: "困らせます", romaji: "komarasemasu", meaning: "merepotkan orang" },
    { character: "驚かせます", romaji: "odorokasemasu", meaning: "membuat orang terkejut" },
    { character: "世界中", romaji: "sekaijuu", meaning: "seluruh dunia" },
    { character: "受け入れます", romaji: "ukeiremashita", meaning: "diterima (pasif 受け入れる)" },
    { character: "受け入れられます", romaji: "ukeireraremasu", meaning: "bisa diterima" },
    { character: "尊敬", romaji: "sonkei", meaning: "rasa hormat" },
    { character: "尊敬します", romaji: "sonkei shimasu", meaning: "menghormati" },
    { character: "尊敬されます", romaji: "sonkei saremasu", meaning: "dihormati" },
    { character: "信頼", romaji: "shinrai", meaning: "kepercayaan" },
    { character: "信頼します", romaji: "shinrai shimasu", meaning: "mempercayai" },
    { character: "信頼されます", romaji: "shinrai saremasu", meaning: "dipercaya" },
    { character: "見られます", romaji: "miraremasu", meaning: "dilihat (pasif)" },
    { character: "笑われます", romaji: "warawaremasu", meaning: "ditertawakan" },
    { character: "信じます", romaji: "shinjimasu", meaning: "percaya" },
  ],
  grammar: [
    {
      id: 3701,
      title: "Bentuk Pasif Golongan I & II",
      description: "Pasif (受身形). Gol I: ~u → ~awareru. Gol II: ~ru → ~rareru. Gol III: ~suru → ~sareru, ~kuru → ~korareru. Pelaku ditandai に.",
      examples: [
        { japanese: "私は母に褒められました。", romaji: "Watashi wa haha ni homeraremashita.", meaning: "Saya dipuji oleh ibu." },
        { japanese: "友達にパーティーに招待されました。", romaji: "Tomodachi ni paatii ni shoutai saremashita.", meaning: "Saya diundang ke pesta oleh teman." },
      ]
    },
    {
      id: 3702,
      title: "Pasif Tidak Langsung (被害受身 / Kerugian)",
      description: "Pasif yang menunjukkan subjek TERKENA DAMPAK dari aksi orang lain (tanpa subjek langsung). Pelaku biasanya ANGGOTA KELUARGA atau yang dekat. Sering diterjemahkan 'saya...' saja.",
      examples: [
        { japanese: "昨夜、泥棒に入られました。", romaji: "Sakuya, dorobou ni hairaremashita.", meaning: "Tadi malam rumah saya dimasuki pencuri." },
        { japanese: "母に泣かれて、困りました。", romaji: "Haha ni nakarete, komarimashita.", meaning: "Saya direpotkan karena ibu menangis." },
      ]
    },
    {
      id: 3703,
      title: "Perbedaan Pasif & Potential",
      description: "Keduanya bentuknya mirip (~rareru). Konteks: pasif = aksi DITERIMA. Potential = SUBJEK BISA melakukan. ~られる sering ambigu, konteks menentukan.",
      examples: [
        { japanese: "私は先生にしかられました。(Pasif)", romaji: "Watashi wa sensei ni shikararemashita.", meaning: "Saya dimarahi guru." },
        { japanese: "私は漢字が読めます。(Potential)", romaji: "Watashi wa kanji ga yomemasu.", meaning: "Saya bisa membaca kanji." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "私は小さいとき、よく母に叱られました。",
      question: "Apa yang dialami pembicara waktu kecil?", options: ["Selalu dipuji", "Sering dimarahi ibu", "Sering dimanja", "Sering dibujuk"], correctAnswer: "Sering dimarahi ibu"
    },
    {
      audioText: "友達に急に訪問されて、驚きました。",
      question: "Mengapa pembicara terkejut?", options: ["Telepon tengah malam", "Datang tiba-tiba", "Bawa berita", "Tidak kenal"], correctAnswer: "Datang tiba-tiba"
    },
    {
      audioText: "隣の人に夜遅く歌を歌われて、困りました。",
      question: "Apa masalahnya?", options: ["Teman berisik", "Tetangga berisik malam hari", "Anak rewel", "Lalu lintas"], correctAnswer: "Tetangga berisik malam hari"
    },
  ],
  dokkai: [
    {
      title: "おもてなしの心 (Semangat Omotenashi)",
      text: "日本に来て驚いたことの一つは、「おもてなし」の心です。日本人は、よくもてなしてくれます。\n\nある日、道に迷ってしまったとき、おばあさんに道を教えていただきました。駅では、知らない人が切符の買い方を教えてくれました。\n\nまた、日本は安全な国だとよく言われます。世界中から見ると、日本はとても信頼されている国です。\n\nこのように、日本に来ると、いろいろな人に優しくされます。これからも、日本のおもてなしの心を学んでいきたいと思います。",
      questions: [
        { question: "Apa yang membuat pembicara kagum di Jepang?", options: ["Makanan enak", "Semangat melayani (omotenashi)", "Transportasi", "Musim"], correctAnswer: "Semangat melayani (omotenashi" },
        { question: "Apa yang terjadi ketika pembicara tersesat?", options: ["Pakai peta", "Ditolong nenek", "Tanya polisi", "Pulang"], correctAnswer: "Ditolong nenek" },
        { question: "Bagaimana pandangan dunia tentang Jepang?", options: ["Tidak aman", "Sangat dipercaya", "Kurang dikenal", "Modern"], correctAnswer: "Sangat dipercaya" },
      ]
    },
  ]
};

// ============================================================
// BAB 38: Nominalisasi ~のは / ~のが
// ============================================================
const bab38 = {
  id: 38,
  title: "Bab 38: Nominalisasi ~のは / ~のが",
  vocabulary: [
    { character: "のは", romaji: "no wa", meaning: "adalah..." },
    { character: "のが", romaji: "no ga", meaning: "adalah (subjek relatif)" },
    { character: "のを", romaji: "no o", meaning: "adalah (objek relatif)" },
    { character: "趣味", romaji: "shumi", meaning: "hobi" },
    { character: "特技", romaji: "tokugi", meaning: "keahlian khusus" },
    { character: "恥ずかしい", romaji: "hazukashii", meaning: "malu" },
    { character: "嬉しい", romaji: "ureshii", meaning: "senang" },
    { character: "悲しい", romaji: "kanashii", meaning: "sedih" },
    { character: "楽しみ", romaji: "tanoshimi", meaning: "tidak sabar menanti" },
    { character: "緊張します", romaji: "kinchou shimasu", meaning: "gugup" },
    { character: "飽きる", romaji: "akiru", meaning: "bosan (terhadap sesuatu)" },
    { character: "慣れます", romaji: "naremasu", meaning: "terbiasa" },
    { character: "難しい", romaji: "muzukashii", meaning: "sulit" },
    { character: "易しい", romaji: "yasashii", meaning: "mudah" },
    { character: "得意", romaji: "tokui", meaning: "andal,擅长的" },
    { character: "苦手", romaji: "nigate", meaning: "lemah" },
    { character: "好き", romaji: "suki", meaning: "suka" },
    { character: "嫌い", romaji: "kirai", meaning: "tidak suka" },
    { character: "上手", romaji: "jouzu", meaning: "mahir" },
    { character: "下手", romaji: "heta", meaning: "kurang mahir" },
    { character: "専門", romaji: "senmon", meaning: "spesialisasi" },
    { character: "一生懸命", romaji: "isshoukenmei", meaning: "sungguh-sungguh" },
    { character: "努力", romaji: "doryoku", meaning: "usaha" },
    { character: "成功", romaji: "seikou", meaning: "keberhasilan" },
  ],
  grammar: [
    {
      id: 3801,
      title: "~のは / ~のが (Nominalisasi untuk Fokus)",
      description: "Mengubah klausa (verb/adjective) menjadi kata benda. ~のは untuk topik/kontras. ~のが untuk subjek frase berikutnya (terutama dengan 好き/嫌い/上手/苦手, dll).",
      examples: [
        { japanese: "私が一番好きなのは音楽です。", romaji: "Watashi ga ichiban suki na no wa ongaku desu.", meaning: "Yang paling saya suka adalah musik." },
        { japanese: "私は料理をするのが好きです。", romaji: "Watashi wa ryouri o suru no ga suki desu.", meaning: "Saya suka memasak." },
      ]
    },
    {
      id: 3802,
      title: "~のは ~です (Penegasan / Definisi)",
      description: "Pola untuk mendefinisikan sesuatu. ~のは + は/が/を/~ + です/adj. Sering untuk: hobby, job, what I like, dll.",
      examples: [
        { japanese: "私の趣味は写真を撮ることです。", romaji: "Watashi no shumi wa shashin o toru koto desu.", meaning: "Hobi saya adalah memotret." },
        { japanese: "一番大変なのは漢字を覚えることです。", romaji: "Ichiban taihen na no wa kanji o oboeru koto desu.", meaning: "Yang paling susah adalah menghafal kanji." },
      ]
    },
    {
      id: 3803,
      title: "~のを (Objek + Modifier)",
      description: "Mengubah klausa menjadi objek. Sering dengan kata kerja penglihatan/persepsi: 見る, 聞く, 感じる, dll.",
      examples: [
        { japanese: "子供たちが遊んでいるのを、見ています。", romaji: "Kodomotachi ga asonde iru no o, mite imasu.", meaning: "Saya melihat anak-anak sedang bermain." },
        { japanese: "彼が話しているのを聞いてください。", romaji: "Kare ga hanashite iru no o kiite kudasai.", meaning: "Tolong dengarkan dia bicara." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "私の趣味は音楽を聞くことです。",
      question: "Apa hobi pembicara?",
      options: ["Bermain musik", "Mendengarkan musik", "Menyanyi", "Menari"], correctAnswer: "Mendengarkan musik"
    },
    {
      audioText: "日本語で難しいのは漢字を読むことです。",
      question: "Apa yang susah?", options: ["Menulis", "Mendengar", "Membaca kanji", "Bicara"], correctAnswer: "Membaca kanji"
    },
    {
      audioText: "彼が一番嫌いなのは、嘘をつかれることです。",
      question: "Apa yang paling dia benci?", options: ["Dibohongi", "Dilupakan", "Ditinggal", "Dimarahi"], correctAnswer: "Dibohongi"
    },
  ],
  dokkai: [
    {
      title: "私の特技 (Keahlian Khusus Saya)",
      text: "私の特技は、絵を描くことです。子供のころから絵を描くのが好きで、毎日少しずつ練習しました。今は休みの日に絵を描くのが楽しみです。\n\n上手になりたいのは、料理です。特に、お菓子作りは難しいですが、挑戦するのが好きです。一番難しいのは、温度を調節することです。何回失敗しても、諦めないで挑戦しています。\n\n日本語を勉強するのも好きです。漢字を覚えるのは大変ですが、少しずつわかるのが嬉しいです。",
      questions: [
        { question: "Apa keahlian khusus pembicara?", options: ["Masak", "Menggambar", "Bahasa", "Olahraga"], correctAnswer: "Menggambar" },
        { question: "Apa yang paling susah saat masak kue?", options: ["Bahan", "Mengatur suhu", "Resep", "Waktu"], correctAnswer: "Mengatur suhu" },
        { question: "Bagaimana perasaan pembicara belajar bahasa Jepang?", options: ["Bosan", "Marah", "Senang", "Frustasi"], correctAnswer: "Senang" },
      ]
    },
  ]
};

// ============================================================
// BAB 39: ~て (Sebab-Akibat / Sebab)
// ============================================================
const bab39 = {
  id: 39,
  title: "Bab 39: ~て (Sebab-Akibat / Sebab)",
  vocabulary: [
    { character: "嬉しくて", romaji: "ureshikute", meaning: "karena senang" },
    { character: "悲しくて", romaji: "kanashikute", meaning: "karena sedih" },
    { character: "恥ずかしくて", romaji: "hazukashikute", meaning: "karena malu" },
    { character: "恐ろしくて", romaji: "osoroshikute", meaning: "karena takut" },
    { character: "寂しくて", romaji: "sabishikute", meaning: "karena kesepian" },
    { character: "苦しくて", romaji: "kurushikute", meaning: "karena menderita" },
    { character: "残念で", romaji: "zannen de", meaning: "karena disayangkan" },
    { character: "心配で", romaji: "shinpai de", meaning: "karena khawatir" },
    { character: "心配します", romaji: "shinpai shimasu", meaning: "khawatir" },
    { character: "不安", romaji: "fuan", meaning: "tidak tenang, cemas" },
    { character: "緊張します", romaji: "kinchou shimasu", meaning: "gugup" },
    { character: "興奮します", romaji: "koufun shimasu", meaning: "tergugah, terangsang" },
    { character: "感激します", romaji: "kangeki shimasu", meaning: "tersentuh, terharu" },
    { character: "複雑な気持ち", romaji: "fukuzatsu na kimochi", meaning: "perasaan campur aduk" },
    { character: "泣き出します", romaji: "nakidashimasu", meaning: "mulai menangis" },
    { character: "笑い出します", romaji: "waraidashimasu", meaning: "mulai tertawa" },
    { character: "悲しくなります", romaji: "kanashiku narimasu", meaning: "menjadi sedih" },
    { character: "嬉しくなります", romaji: "ureshiku narimasu", meaning: "menjadi senang" },
    { character: "涙", romaji: "namida", meaning: "air mata" },
    { character: "涙が出ます", romaji: "namida ga demasu", meaning: "air mata keluar" },
    { character: "声", romaji: "koe", meaning: "suara" },
    { character: "声が震えます", romaji: "koe ga furuemasu", meaning: "suara gemetar" },
    { character: "胸", romaji: "mune", meaning: "dada" },
    { character: "胸が痛いです", romaji: "mune ga itai desu", meaning: "dada sakit (hati tersentuh)" },
    { character: "心", romaji: "kokoro", meaning: "hati, pikiran" },
  ],
  grammar: [
    {
      id: 3901,
      title: "~て (Sebab / Karena) - Untuk Keadaan Emosi",
      description: "Te-form + untuk menunjukkan SEBAB emosional yang dialami subjek. HANYA untuk emosi positif/negatif yang dirasakan (嬉しい、悲しい、恥ずかしい、怖い、寂しい). Beda dengan ~から/~ので (lebih netral).",
      examples: [
        { japanese: "合格して、嬉しかったです。", romaji: "Goukaku shite, ureshikatta desu.", meaning: "Saya senang karena lulus." },
        { japanese: "母の話を聞いて、悲しくなりました。", romaji: "Haha no hanashi o kiite, kanashiku narimashita.", meaning: "Saya menjadi sedih karena mendengar cerita ibu." },
      ]
    },
    {
      id: 3902,
      title: "Kontras ~て Sebab vs ~て Urutan",
      description: "~て untuk sebab emosional: keadaan emosi HARUS yang alami (na-adj, i-adj). ~て urutan: berbagai verb, menunjukkan urutan/daftar. Konteks & emosi yang dirasakan yang menentukan.",
      examples: [
        { japanese: "秋になって、涼しくなりました。(Sebab)", romaji: "Aki ni natte, suzushiku narimashita.", meaning: "Karena sudah musim gugur, udaranya jadi sejuk." },
        { japanese: "顔を洗って、朝ごはんを食べました。(Urutan)", romaji: "Kao o aratte, asagohan o tabemashita.", meaning: "Cuci muka, lalu makan pagi." },
      ]
    },
    {
      id: 3903,
      title: "Kalimat Majemuk Sebab-Akibat Emosional",
      description: "Pola: [keadaan emosi yang dialami] + te + [akibat/reaksi fisik]. Sering diikuti 泣く、笑う、叫ぶ、震える, dll.",
      examples: [
        { japanese: "嬉しくて、涙が出てきました。", romaji: "Ureshikute, namida ga dete kimashita.", meaning: "Saking senangnya, air mata keluar." },
        { japanese: "恐ろしくて、声が出ませんでした。", romaji: "Osoroshikute, koe ga demasen deshita.", meaning: "Saking takutnya, tidak bisa bicara." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "合格の知らせを聞いて、嬉しくて泣きました。",
      question: "Mengapa pembicara menangis?", options: ["Karena sedih", "Karena gembira lulus", "Karena marah", "Karena cemas"], correctAnswer: "Karena gembira lulus"
    },
    {
      audioText: "道に迷ってしまって、不安で眠れませんでした。",
      question: "Bagaimana perasaan pembicara?", options: ["Senang", "Sangat cemas tidak bisa tidur", "Marah", "Lapar"], correctAnswer: "Sangat cemas tidak bisa tidur"
    },
    {
      audioText: "恥ずかしくて、顔が赤くなりました。",
      question: "Apa reaksi fisik pembicara?", options: ["Muntah", "Wajah memerah", "Batuk", "Pingsan"], correctAnswer: "Wajah memerah"
    },
  ],
  dokkai: [
    {
      title: "サプライズ誕生日 (Ulang Tahun Kejutan)",
      text: "先月、友達の誕生日にサプライズパーティーをしました。\n\n当日、部屋の電気を全部消して、暗い部屋にケーキを置いて待っていました。友達が来て、電気を点けた瞬間、全員が「誕生日おめでとう！」と叫びました。\n\n友達は驚いて、そして感激して、涙を流していました。「こんなことをしてくれるなんて、嬉しい！」と言って、泣き出しました。\n\n私も嬉しくて、思わず笑ってしまいました。素晴らしい夜になりました。",
      questions: [
        { question: "Apa yang dilakukan untuk ulang tahun teman?", options: ["Kirim kartu", "Pesta kejutan", "Beli kue", "Telepon"], correctAnswer: "Pesta kejutan" },
        { question: "Bagaimana reaksi teman saat kejutan?", options: ["Marah", "Kaget & terharu", "Ketiduran", "Kabur"], correctAnswer: "Kaget & terharu" },
        { question: "Bagaimana perasaan pembicara?", options: ["Bosan", "Marah", "Sangat senang", "Sedih"], correctAnswer: "Sangat senang" },
      ]
    },
  ]
};

// ============================================================
// BAB 40: ~か (Kalimat Tanya Tersisip)
// ============================================================
const bab40 = {
  id: 40,
  title: "Bab 40: ~か (Kalimat Tanya Tersisip)",
  vocabulary: [
    { character: "かどうか", romaji: "ka dou ka", meaning: "apakah atau tidak" },
    { character: "かどうかわかりません", romaji: "ka dou ka wakarimasen", meaning: "tidak tahu apakah atau tidak" },
    { character: "かどうか聞いてみます", romaji: "ka dou ka kiite mimasu", meaning: "akan tanya apakah atau tidak" },
    { character: "誰か", romaji: "dare ka", meaning: "seseorang" },
    { character: "何か", romaji: "nani ka", meaning: "sesuatu" },
    { character: "どこか", romaji: "doko ka", meaning: "suatu tempat" },
    { character: "いつか", romaji: "itsu ka", meaning: "suatu hari" },
    { character: "どこか行きますか", romaji: "doko ka ikimasu ka", meaning: "pergi ke suatu tempat?" },
    { character: "誰か来ました", romaji: "dare ka kimashita", meaning: "ada orang datang" },
    { character: "何が起きるか", romaji: "nani ga okiru ka", meaning: "apa yang akan terjadi" },
    { character: "確認します", romaji: "kakunin shimasu", meaning: "mengkonfirmasi" },
    { character: "問い合わせます", romaji: "toiawase masu", meaning: "menghubungi, menanyakan" },
    { character: "返事", romaji: "henji", meaning: "balasan, jawaban" },
    { character: "返事を待ちます", romaji: "henji o machimasu", meaning: "menunggu balasan" },
    { character: "お知らせ", romaji: "oshinsechi", meaning: "pemberitahuan" },
    { character: "知らせます", romaji: "shirase masu", meaning: "memberitahu" },
    { character: "知らせ", romaji: "shirase", meaning: "pemberitahuan, info" },
    { character: "予定通り", romaji: "yotei doori", meaning: "sesuai rencana" },
    { character: "日時", romaji: "nichiji", meaning: "tanggal dan waktu" },
    { character: "場所", romaji: "basho", meaning: "tempat" },
    { character: "会場", romaji: "kaijou", meaning: "tempat acara" },
    { character: "詳細", romaji: "shousai", meaning: "rincian, detail" },
    { character: "案内", romaji: "annai", meaning: "panduan, informasi" },
    { character: "招待状", romaji: "shoutai jou", meaning: "surat undangan" },
    { character: "返信用封筒", romaji: "henshin you fuutou", meaning: "amplop balasan" },
  ],
  grammar: [
    {
      id: 4001,
      title: "~かどうか (Apakah... atau Tidak)",
      description: "Membuat kalimat tanya yes/no menjadi kata benda. Plain-form + かどうか. Bisa digunakan dengan 知る、聞く、言う、迷う、困る, dll.",
      examples: [
        { japanese: "田中さんが来るかどうか、わかりません。", romaji: "Tanaka-san ga kuru ka dou ka, wakarimasen.", meaning: "Saya tidak tahu apakah Tanaka datang atau tidak." },
        { japanese: "日曜日に都合がいいかどうか、確認します。", romaji: "Nichiyoubi ni tsugou ga ii ka dou ka, kakunin shimasu.", meaning: "Saya akan konfirmasi apakah hari Minggu cocok." },
      ]
    },
    {
      id: 4002,
      title: "Kalimat Tanya Tersisip (Embedded Question)",
      description: "Menyisipkan kalimat tanya di tengah kalimat. Tidak boleh pakai ？？. Akhir kalimat tanya jadi plain-form + か. Selalu diikuti frase/report.",
      examples: [
        { japanese: "田中さんがどこに住んでいるか、知っていますか。", romaji: "Tanaka-san ga doko ni sunde iru ka, shitte imasu ka.", meaning: "Apakah kamu tahu di mana Tanaka tinggal?" },
        { japanese: "会議がいつ始まるか教えてください。", romaji: "Kaigi ga itsu hajimaru ka oshiete kudasai.", meaning: "Tolong beritahu kapan rapat mulai." },
      ]
    },
    {
      id: 4003,
      title: "誰か / 何か / どこか (Beberapa / Suatu)",
      description: "Kata tanya + か = 'beberapa/suatu/ada'. Beda dengan kata tanya polos (siapa/apa/di mana) yang bertanya informasi spesifik.",
      examples: [
        { japanese: "誰か田中さんを知りませんか。", romaji: "Dare ka Tanaka-san o shirimasen ka.", meaning: "Ada yang tahu Tanaka-san?" },
        { japanese: "どこか静かな所へ行きませんか。", romaji: "Doko ka shizuka na tokoro e ikimasen ka.", meaning: "Mau pergi ke tempat yang tenang?" },
      ]
    },
  ],
  choukai: [
    {
      audioText: "彼が結婚したかどうか、知っていますか。",
      question: "Apa yang ingin diketahui pembicara?", options: ["Apakah dia sudah menikah", "Di mana dia tinggal", "Pekerjaannya", "Hobinya"], correctAnswer: "Apakah dia sudah menikah"
    },
    {
      audioText: "すみません、田中さんは今日来るかどうか、わかりますか。",
      question: "Apa yang ditanyakan?", options: ["Kapan Tanaka datang", "Apakah Tanaka datang hari ini", "Di mana Tanaka", "Bersama siapa Tanaka"], correctAnswer: "Apakah Tanaka datang hari ini"
    },
    {
      audioText: "どこか景色のいい所へ旅行したいですね。",
      question: "Apa keinginan pembicara?", options: ["Pergi ke restoran", "Travel ke tempat景色 bagus", "Pergi belanja", "Pulang kampung"], correctAnswer: "Travel ke tempat景色 bagus"
    },
  ],
  dokkai: [
    {
      title: "パーティーの準備 (Persiapan Pesta)",
      text: "今度の日曜日に、友達の結婚祝いパーティーをします。会場は新宿のレストランで、午後六時に始まります。\n\n招待した友達が来るかどうか、一人ずつ確認しています。返事をくれた友達は、もう二十人以上います。\n\nプレゼントは何がいいか、全員に聞きました。「お金がいい」「カタログギフトがいい」など、いろいろな意見があります。最終的には、カタログギフトにすることにしました。",
      questions: [
        { question: "Kapan pesta dimulai?", options: ["Pagi", "Siang", "Sore jam 6", "Malam"], correctAnswer: "Sore jam 6" },
        { question: "Berapa yang sudah konfirmasi hadir?", options: ["10", "15", "20+", "30"], correctAnswer: "20+" },
        { question: "Hadiah apa yang dipilih?", options: ["Uang", "Katalog gift", "Bunga", "Makanan"], correctAnswer: "Katalog gift" },
      ]
    },
  ]
};

// ============================================================
// BAB 41: Keigo: Memberi & Menerima (Sono 1)
// ============================================================
const bab41 = {
  id: 41,
  title: "Bab 41: Keigo - Memberi & Menerima",
  vocabulary: [
    { character: "やります", romaji: "yarimasu", meaning: "memberi (ke bawah/sejajar)" },
    { character: "あげます", romaji: "agemasu", meaning: "memberi (ke atas/sejajar)" },
    { character: "差し上げます", romaji: "sashiagemasu", meaning: "memberi (ke atas, sopan)" },
    { character: "もらいます", romaji: "moraimasu", meaning: "menerima (sejajar)" },
    { character: "いただきます", romaji: "itadakimasu", meaning: "menerima (hormat, rendah hati)" },
    { character: "くれます", romaji: "kuremasu", meaning: "orang lain memberi ke saya" },
    { character: "くださいます", romaji: "kudasaimasu", meaning: "memberi ke saya (hormat)" },
    { character: "お土産", romaji: "o-miyage", meaning: "oleh-oleh" },
    { character: "お中元", romaji: "o-chuugen", meaning: "hadiah musim panas" },
    { character: "お歳暮", romaji: "o-seibo", meaning: "hadiah tahun baru" },
    { character: "お年玉", romaji: "o-toshidama", meaning: "angpao tahun baru (untuk anak)" },
    { character: "お祝", romaji: "o-iwai", meaning: "kado, hadiah" },
    { character: "お見舞い", romaji: "o-mimai", meaning: "bantuan saat sakit" },
    { character: "お返し", romaji: "o-kaeshi", meaning: "timbal balik hadiah" },
    { character: "心遣い", romaji: "kokorozukai", meaning: "perhatian, kebaikan hati" },
    { character: "お世話", romaji: "o-sewa", meaning: "bantuan, pengasuhan" },
    { character: "ご指導", romaji: "go-shidou", meaning: "bimbingan" },
    { character: "ご教示", romaji: "go-kyouji", meaning: "pengajaran" },
    { character: "ご親切", romaji: "go-shinsetsu", meaning: "kebaikan" },
    { character: "ご配慮", romaji: "go-hairyo", meaning: "perhatian, pertimbangan" },
    { character: "恩", romaji: "on", meaning: "hutang budi" },
    { character: "感謝", romaji: "kansha", meaning: "rasa terima kasih" },
    { character: "謝礼", romaji: "sharei", meaning: "ucapan terima kasih (hadiah)" },
    { character: "上げます", romaji: "agemasu", meaning: "memberi" },
    { character: "お届けします", romaji: "otodoke shimasu", meaning: "mengirimkan (sopan)" },
  ],
  grammar: [
    {
      id: 4101,
      title: "Verba Memberi (Sono 1) - Sonkeigo Pemberi",
      description: "Memberi ke orang yang dihormati: V-masu stem + なさる (尊敬語). Atau 差し上げる (謙譲語) — merendahkan diri. Untuk makanan/minuman: お + V-masu stem + になる.",
      examples: [
        { japanese: "先生にお土産を差し上げました。", romaji: "Sensei ni omiyage o sashiagemashita.", meaning: "Saya memberi oleh-oleh ke guru." },
        { japanese: "先生が お書きになった本を読みました。", romaji: "Sensei ga o-kaki ni natta hon o yomimashita.", meaning: "Saya membaca buku yang ditulis guru." },
      ]
    },
    {
      id: 4102,
      title: "Verba Menerima (Sono 1) - Sonkeigo Penerima",
      description: "Menerima dari orang yang dihormati: V-masu stem + くださる. Atau いただく (謙譲語) — merendahkan diri sendiri.",
      examples: [
        { japanese: "先生がご親切に教えてくださいました。", romaji: "Sensei ga go-shinsetsu ni oshiete kudasaimashita.", meaning: "Guru dengan baik hati sudah mengajari saya." },
        { japanese: "先生から大切な本をいただきました。", romaji: "Sensei kara taisetsu na hon o itadakimashita.", meaning: "Saya menerima buku penting dari guru." },
      ]
    },
    {
      id: 4103,
      title: "Kontras あげる/くれる/もらう (Ulang Konsep)",
      description: "あげる = saya/keluarga memberi ke orang LAIN. くれる = orang LAIN memberi ke saya/keluarga. もらう = saya/keluarga menerima dari orang lain. Subjek GRAMATIKAL menentukan verba.",
      examples: [
        { japanese: "私は田中さんに花をあげました。", romaji: "Watashi wa Tanaka-san ni hana o agemashita.", meaning: "Saya memberi bunga ke Tanaka." },
        { japanese: "田中さんが私に花をくれました。", romaji: "Tanaka-san ga watashi ni hana o kuremashita.", meaning: "Tanaka memberi bunga ke saya." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "先生にお土産を差し上げました。",
      question: "Apa yang dilakukan pembicara?", options: ["Menerima dari guru", "Memberi oleh-oleh ke guru", "Minta oleh-oleh", "Membeli oleh-oleh"], correctAnswer: "Memberi oleh-oleh ke guru"
    },
    {
      audioText: "部長から大切な資料をいただきました。",
      question: "Apa yang diterima?", options: ["Surat cinta", "Dokumen penting", "Hadiah", "Buku"], correctAnswer: "Dokumen penting"
    },
    {
      audioText: "課長が丁寧に説明してくださいました。",
      question: "Apa yang dilakukan manager?", options: ["Marah", "Menjelaskan dengan teliti", "Pergi", "Diam"], correctAnswer: "Menjelaskan dengan teliti"
    },
  ],
  dokkai: [
    {
      title: "日本のお中元とお歳暮 (O-Chuugen & O-Seibo Jepang)",
      text: "日本では、季節の贈り物をする習慣があります。お中元は夏、お歳暮は冬に贈ります。\n\nお中元には、ビールや果物などがよく贈られます。お歳暮には、ハムやビール、お菓子などがよく贈られます。これらの習慣は、日頃お世話になっている人に感謝を示すためです。\n\nまた、いただいたら、お返しをする習慣もあります。これは、日本独特の文化です。\n\n贈り物をする時は、「つまらないものですが」と言って渡すことがよくあります。",
      questions: [
        { question: "Kapan o-chuugen?", options: ["Musim semi", "Musim panas", "Musim gugur", "Musim dingin"], correctAnswer: "Musim panas" },
        { question: "Apa isi o-seibo yang umum?", options: ["Buah", "Sayur", "Ham", "Buku"], correctAnswer: "Ham" },
        { question: "Apa frasa umum saat memberi hadiah?", options: ["これは高いです", "つまらないものですが", "これを買ってください", "ありがとうございました"], correctAnswer: "つまらないものですが" },
      ]
    },
  ]
};

// ============================================================
// BAB 42: ~ために (Tujuan & Fungsi)
// ============================================================
const bab42 = {
  id: 42,
  title: "Bab 42: ~ために (Tujuan & Fungsi)",
  vocabulary: [
    { character: "ために", romaji: "tame ni", meaning: "untuk, demi" },
    { character: "目的", romaji: "mokuteki", meaning: "tujuan" },
    { character: "用途", romaji: "youto", meaning: "fungsi, kegunaan" },
    { character: "用例", romaji: "yourei", meaning: "contoh penggunaan" },
    { character: "利用します", romaji: "riyou shimasu", meaning: "memanfaatkan" },
    { character: "使用します", romaji: "shiyou shimasu", meaning: "menggunakan" },
    { character: "活用します", romaji: "katsuyou shimasu", meaning: "memanfaatkan" },
    { character: "活用", romaji: "katsuyou", meaning: "pemanfaatan, konjugasi" },
    { character: "使役", romaji: "shieki", meaning: "kausatif" },
    { character: "努力します", romaji: "doryoku shimasu", meaning: "berusaha" },
    { character: "努めます", romaji: "tsutomemasu", meaning: "berupaya" },
    { character: "頑張ります", romaji: "ganbarimasu", meaning: "berjuang" },
    { character: "挑戦します", romaji: "chousen shimasu", meaning: "menantang, mencoba" },
    { character: "挑戦", romaji: "chousen", meaning: "tantangan" },
    { character: "達成します", romaji: "tassei shimasu", meaning: "mencapai" },
    { character: "目標達成", romaji: "mokuhyou tassei", meaning: "pencapaian tujuan" },
    { character: "受験", romaji: "juken", meaning: "ujian" },
    { character: "受験します", romaji: "juken shimasu", meaning: "mengikuti ujian" },
    { character: "受験勉強", romaji: "juken benkyou", meaning: "belajar untuk ujian" },
    { character: "合格", romaji: "goukaku", meaning: "lulus" },
    { character: "合格します", romaji: "goukaku shimasu", meaning: "lulus" },
    { character: "失敗します", romaji: "shippai shimasu", meaning: "gagal" },
    { character: "挫折します", romaji: "zasetsu shimasu", meaning: "frustasi, menyerah" },
    { character: "不安", romaji: "fuan", meaning: "kekhawatiran" },
  ],
  grammar: [
    {
      id: 4201,
      title: "ために (Untuk / Demi) - Tujuan Subjektif",
      description: "Menyatakan tujuan subjektif yang bisa dikontrol pembicara. V-polos (volitional) + ために. Subjek harus SAMA atau hal yang bisa dikontrol. Hanya untuk ANGGOTA BADAN, perasaan, pikiran, kemampuan.",
      examples: [
        { japanese: "日本語能力試験のために、毎日勉強しています。", romaji: "Nihongo nouryoku shiken no tame ni, mainichi benkyou shite imasu.", meaning: "Saya belajar setiap hari untuk ujian JLPT." },
        { japanese: "健康のために、ジョギングしています。", romaji: "Kenkou no tame ni, jogingu shite imasu.", meaning: "Saya jogging untuk kesehatan." },
      ]
    },
    {
      id: 4202,
      title: "ために (Karena / Sebab)",
      description: "Sama dengan ~から/~ので tapi lebih formal/literer. Kata benda + の + ために = 'karena hal itu'. Verb + ために juga bisa = 'karena verba itu'.",
      examples: [
        { japanese: "台風のために、電車が止まりました。", romaji: "Taifuu no tame ni, densha ga tomarimashita.", meaning: "Karena topan, kereta berhenti." },
        { japanese: "事故があったために、道が込んでいます。", romaji: "Jiko ga atta tame ni, michi ga konde imasu.", meaning: "Karena ada kecelakaan, jalan macet." },
      ]
    },
    {
      id: 4203,
      title: "Perbedaan ~ために dan ~ように",
      description: "~ために: tujuan yang bisa DIKONTROL subjek (努力する、練習する、健康, dll). ~ように: tujuan yang TIDAK bisa langsung dikontrol (忘れない、風邪を引かない, untuk orang lain).",
      examples: [
        { japanese: "合格するために、毎日勉強します。", romaji: "Goukaku suru tame ni, mainichi benkyou shimasu.", meaning: "Untuk lulus, saya belajar setiap hari." },
        { japanese: "遅刻しないように、闹钟をかけます。", romaji: "Chikoku shinai you ni, mezamashi o kakemasu.", meaning: "Saya pasang alarm supaya tidak terlambat." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "留学のために、お金をためています。",
      question: "Apa tujuan pembicara menabung?", options: ["Beli rumah", "Studi ke luar negeri", "Nikah", "Liburan"], correctAnswer: "Studi ke luar negeri"
    },
    {
      audioText: "台風のために、飛行機が欠航になりました。",
      question: "Apa yang terjadi?", options: ["Penerbangan terlambat", "Penerbangan dibatalkan", "Pesawat rusak", "Semua tepat waktu"], correctAnswer: "Penerbangan dibatalkan"
    },
    {
      audioText: "家族のために、もっと働きたいです。",
      question: "Apa keinginan pembicara?", options: ["Pensiun cepat", "Kerja lebih giat untuk keluarga", "Pindah kerja", "Santai saja"], correctAnswer: "Kerja lebih giat untuk keluarga"
    },
  ],
  dokkai: [
    {
      title: "資格を取るために (Untuk Mendapatkan Sertifikasi)",
      text: "最近、資格を取得するために勉強する人が増えています。\n\n例えば、IT業界で働きたい人は、プログラミングの試験のために勉強します。日本語を勉強する人は、 JLPT N1合格のために、一生懸命勉強しています。\n\n資格を取るために、毎日少しずつ努力することが大切です。急にたくさん勉強しても、長続きしません。\n\nまた、合格するためには、計画的に勉強する必要があります。無理をしないで、コツコツ頑張ることが成功の鍵です。",
      questions: [
        { question: "Mengapa orang belajar untuk sertifikasi?", options: ["Iseng", "Ingin kerja di bidang tertentu", "Paksa dari bos", "Buat gaya-gayaan"], correctAnswer: "Ingin kerja di bidang tertentu" },
        { question: "Apa tips lulus sertifikasi?", options: ["Belajar dadakan", "Sedikit tapi konsisten", "Jangan belajar", "Bertahan semalam"], correctAnswer: "Sedikit tapi konsisten" },
        { question: "Apa kata kunci sukses?", options: ["Uang", "Bertahap & konsisten", "Keberuntungan", "Bakat"], correctAnswer: "Bertahap & konsisten" },
      ]
    },
  ]
};

// ============================================================
// BAB 43: ~そうです (Kelihatan) & ~て来ます
// ============================================================
const bab43 = {
  id: 43,
  title: "Bab 43: ~そうです (Tampaknya) & ~て来ます",
  vocabulary: [
    { character: "そうです", romaji: "sou desu", meaning: "tampaknya/kelihatannya" },
    { character: "降りそうです", romaji: "furi sou desu", meaning: "tampaknya akan hujan" },
    { character: "泣きそうです", romaji: "naki sou desu", meaning: "tampaknya akan menangis" },
    { character: "笑いそうです", romaji: "warai sou desu", meaning: "tampaknya akan tertawa" },
    { character: "壊れそうです", romaji: "koware sou desu", meaning: "tampaknya akan rusak" },
    { character: "美味しそうです", romaji: "oishisou desu", meaning: "tampak enak" },
    { character: "嬉しそうです", romaji: "ureshi sou desu", meaning: "tampak senang" },
    { character: "悲しそうです", romaji: "kanashi sou desu", meaning: "tampak sedih" },
    { character: "大変そうです", romaji: "taihen sou desu", meaning: "tampak sulit" },
    { character: "寒そうです", romaji: "samu sou desu", meaning: "tampak dingin" },
    { character: "持って来ます", romaji: "motte kimasu", meaning: "membawa (pergi & balik)" },
    { character: "迎えに行きます", romaji: "mukae ni ikimasu", meaning: "pergi menjemput" },
    { character: "迎えに来ます", romaji: "mukae ni kimasu", meaning: "datang menjemput" },
    { character: "連れて来ます", romaji: "tsurete kimasu", meaning: "membawa serta (pergi & balik)" },
    { character: "持ってきて", romaji: "motte kite", meaning: "bawakan saya" },
    { character: "取りに行きます", romaji: "tori ni ikimasu", meaning: "pergi mengambil" },
    { character: "取りに来ます", romaji: "tori ni kimasu", meaning: "datang mengambil" },
    { character: "呼びます", romaji: "yobimasu", meaning: "memanggil" },
    { character: "呼びます", romaji: "yobimasu", meaning: "memanggil" },
    { character: "訪ねます", romaji: "tazunemasu", meaning: "berkunjung" },
    { character: "寄ります", romaji: "yorimasu", meaning: "mampir" },
    { character: "戻ります", romaji: "modorimasu", meaning: "kembali" },
    { character: "持ち主", romaji: "mochinushi", meaning: "pemilik" },
    { character: "忘れ物", romaji: "wasuremono", meaning: "barang tertinggal" },
  ],
  grammar: [
    {
      id: 4301,
      title: "~そうです (Tampaknya) - Bentuk Penampilan",
      description: "Menyatakan kesan/penampilan berdasarkan pengamatan visual. V-masu stem + そうです. Negasi: ~なさそうです. Adj-i: ~よさそうです. Adj-na: drop だ + そうです. Beda dengan ~そうです (katanya).",
      examples: [
        { japanese: "このケーキは美味しそうです。", romaji: "Kono keeki wa oishisou desu.", meaning: "Kue ini tampak enak." },
        { japanese: "雨が降りそうです。", romaji: "Ame ga furisou desu.", meaning: "Tampaknya akan hujan." },
        { japanese: "彼は嬉しそうに笑っています。", romaji: "Kare wa ureshi sou ni waratte imasu.", meaning: "Dia tersenyum dengan wajah tampak senang." },
      ]
    },
    {
      id: 4302,
      title: "Pengecualian Bentuk Penampilan",
      description: "Beberapa adj-i/na berubah bentuk. いい → よさそうです. ない → なさそうです. Bentuk lampau-ta + そうです juga ada: た + そうです = 'tampak sudah...'.",
      examples: [
        { japanese: "この本は面白そうです。", romaji: "Kono hon wa omoshirosou desu.", meaning: "Buku ini tampak menarik." },
        { japanese: "何もなさそうなので、安心しました。", romaji: "Nani mo nasasou na node, anshin shimashita.", meaning: "Karena sepertinya tidak ada apa-apa, saya lega." },
      ]
    },
    {
      id: 4303,
      title: "~て来ます (Pergi & Kembali / Timbul / Menuju)",
      description: "Te-form + 来ます: 1) melakukan aksi dan KEMBALI (pergi ambil, jemput, dll), 2) perubahan bertahap menuju pembicara (寒くなってきた = makin dingin).",
      examples: [
        { japanese: "ちょっと切符を買いに行ってきます。", romaji: "Chotto kippu o kai ni itte kimasu.", meaning: "Saya pergi beli tiket sebentar." },
        { japanese: "最近、寒くなってきましたね。", romaji: "Saikin, samuku natte kimashita ne.", meaning: "Akhir-akhir ini, semakin dingin ya." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "空が曇ってきました。雨が降りそうです。",
      question: "Bagaimana cuaca?", options: ["Cerah", "Mendung, akan hujan", "Badai", "Salju"], correctAnswer: "Mendung, akan hujan"
    },
    {
      audioText: "駅まで迎えに来てもらえますか。",
      question: "Apa yang diminta?", options: ["Jemput di stasiun", "Antar ke stasiun", "Telepon", "Surat"], correctAnswer: "Jemput di stasiun"
    },
    {
      audioText: "彼女はとても嬉しそうに話していました。",
      question: "Bagaimana penampilannya?", options: ["Sedih", "Marah", "Tampaknya sangat senang", "Cemas"], correctAnswer: "Tampaknya sangat senang"
    },
  ],
  dokkai: [
    {
      title: "春が来ました (Musim Semi Telah Tiba)",
      text: "最近、暖かくなってきました。桜が咲き始めました。\n\n公園に行くと、花見をしている人たちがたくさんいました。「この桜は、本当にきれいですね」と友達が言いました。ほんとうに、桜はきれいで、写真を撮りたくなる光景でした。\n\n明日はもっと暖かくなりそうです。週末は、友達と花見に行く予定です。\n\nお弁当を持って、公園に来る予定です。楽しみでなりません。",
      questions: [
        { question: "Apa yang mulai mekar?", options: ["Mawar", "Sakura", "Bunga matahari", "Kamboja"], correctAnswer: "Sakura" },
        { question: "Apa rencana akhir pekan?", options: ["Piknik (hanami)", "Pergi belanja", "Ke dokter", "Bekerja"], correctAnswer: "Piknik (hanami)" },
        { question: "Apa yang akan dibawa ke taman?", options: ["Buku", "Bekal", "Tiket", "Baju"], correctAnswer: "Bekal" },
      ]
    },
  ]
};

// ============================================================
// BAB 44: ~すぎます (Terlalu Berlebihan)
// ============================================================
const bab44 = {
  id: 44,
  title: "Bab 44: ~すぎます (Terlalu / Berlebihan)",
  vocabulary: [
    { character: "すぎます", romaji: "sugimasu", meaning: "terlalu, melewati" },
    { character: "食べすぎます", romaji: "tabesugimasu", meaning: "makan berlebihan" },
    { character: "飲みすぎます", romaji: "nomisugimasu", meaning: "minum berlebihan" },
    { character: "働きすぎます", romaji: "hatarakisugimasu", meaning: "bekerja berlebihan" },
    { character: "言いすぎます", romaji: "iisugimasu", meaning: "berbicara berlebihan" },
    { character: "心配しすぎます", romaji: "shinpai shisugimasu", meaning: "terlalu khawatir" },
    { character: "考えすぎます", romaji: "kangaesugimasu", meaning: "terlalu berpikir" },
    { character: "走りすぎます", romaji: "hashirisugimasu", meaning: "berlari berlebihan" },
    { character: "寝すぎます", romaji: "nesugimasu", meaning: "tidur berlebihan" },
    { character: "使いすぎます", romaji: "tsukaisugimasu", meaning: "memakai berlebihan" },
    { character: "頑張りすぎます", romaji: "ganbarisugimasu", meaning: "terlalu berjuang" },
    { character: "太ります", romaji: "futtorimasu", meaning: "menjadi gemuk" },
    { character: "太りすぎます", romaji: "futtorisugimasu", meaning: "terlalu gemuk" },
    { character: "ストレス", romaji: "sutoresu", meaning: "stres" },
    { character: "溜まります", romaji: "tamarimasu", meaning: "terkumpul" },
    { character: "解消します", romaji: "kaishou shimasu", meaning: "mengatasi, menghilangkan" },
    { character: "発散します", romaji: "hassan shimasu", meaning: "melepaskan" },
    { character: "リラックスします", romaji: "rirakkusu shimasu", meaning: "relaks" },
    { character: "深呼吸", romaji: "shinkokyuu", meaning: "nafas dalam" },
    { character: "深呼吸します", romaji: "shinkokyuu shimasu", meaning: "menarik nafas dalam" },
    { character: "睡眠", romaji: "suimin", meaning: "tidur" },
    { character: "質", romaji: "shitsu", meaning: "kualitas" },
    { character: "睡眠の質", romaji: "suimin no shitsu", meaning: "kualitas tidur" },
    { character: "規則正しい", romaji: "kisoku tadashii", meaning: "teratur" },
    { character: "バランス", romaji: "baransu", meaning: "keseimbangan" },
  ],
  grammar: [
    {
      id: 4401,
      title: "~すぎます (Terlalu...)",
      description: "V-masu stem + すぎます. Menunjukkan aksi/properti MELEBIHI batas wajar. Bisa positif (terlalu rajin) atau negatif (terlalu banyak makan). Negasi: ~すぎます.",
      examples: [
        { japanese: "昨夜、食べすぎてしまいました。", romaji: "Sakuya, tabesugite shimaimashita.", meaning: "Tadi malam, makan terlalu banyak." },
        { japanese: "この問題について、考えすぎないでください。", romaji: "Kono mondai ni tsuite, kangaesuginai de kudasai.", meaning: "Tentang masalah ini, jangan terlalu memikirkannya." },
      ]
    },
    {
      id: 4402,
      title: "Bentuk Kata Sifat dari すぎる (~すぎ / Adj-na)",
      description: "Verb + すぎる → kata sifat yang berarti 'terlalu ...'. Adj-i: 大きすぎる (terlalu besar). Adj-na: drop な + すぎる → 普通すぎる, 簡単すぎる, dll.",
      examples: [
        { japanese: "この問題は難しすぎます。", romaji: "Kono mondai wa muzukashi sugimasu.", meaning: "Soal ini terlalu sulit." },
        { japanese: "彼の説明は簡単すぎて、わかりません。", romaji: "Kare no setsumei wa kantan sugite, wakarimasen.", meaning: "Penjelasannya terlalu sederhana, jadi tidak paham." },
      ]
    },
    {
      id: 4403,
      title: "~てしまう + すぎる (Aksentuasi Efek Berlebihan)",
      description: "Kombinasi ~すぎて + ~てしまう untuk menekankan efek dari berlebihan. Sering muncul di percakapan natural untuk keluh kesah.",
      examples: [
        { japanese: "働きすぎて、疲れすぎてしまいました。", romaji: "Hatarakisugite, tsukaresugite shimaimashita.", meaning: "Kerja terlalu keras, jadi kelelahan sekali." },
        { japanese: "考えすぎて、何も決められません。", romaji: "Kangaesugite, nani mo kimeraremasen.", meaning: "Terlalu banyak berpikir, jadi tidak bisa memutuskan apa-apa." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "昨日、遊びすぎて、今日は眠いです。",
      question: "Bagaimana perasaan pembicara?", options: ["Semangat", "Mengantuk", "Lapar", "Senang"], correctAnswer: "Mengantuk"
    },
    {
      audioText: "彼の仕事はストレスが溜まりすぎていると思います。",
      question: "Apa masalahnya?", options: ["Gaji kecil", "Stres kerja terlalu banyak", "Tidak ada kerjaan", "Bosbaik"], correctAnswer: "Stres kerja terlalu banyak"
    },
    {
      audioText: "食べすぎないように、気をつけてください。",
      question: "Apa yang harus diperhatikan?", options: ["Jangan olahraga", "Jangan makan berlebihan", "Jangan tidur", "Jangan kerja"], correctAnswer: "Jangan makan berlebihan"
    },
  ],
  dokkai: [
    {
      title: "働きすぎに注意 (Perhatian Kerja Berlebihan)",
      text: "最近、「過労死」という言葉がよく聞かれます。これは、働きすぎて死ぬという意味です。\n\n日本の社会では、残業が多く、長時間労働が問題になっています。長時間労働は体に悪いだけではなく、心にも負担をかけます。\n\n厚生労働省は、「働きすぎ」を改善するように呼びかけています。適切に休んで、趣味の時間や家族との時間を持つことが大切です。\n\n私は最近、仕事を少しセーブして、休日はリラックスするようにしています。深層呼吸をして、好きな音楽を聴くと、だいぶ楽になります。",
      questions: [
        { question: "Apa itu '過労死'?", options: ["Mati karena stres", "Mati karena kerja berlebihan", "Mati karena tua", "Mati karena sakit"], correctAnswer: "Mati karena kerja berlebihan" },
        { question: "Apa masalah sosial Jepang?", options: ["Pengangguran", "Lembur panjang", "Pendidikan", "Transportasi"], correctAnswer: "Lembur panjang" },
        { question: "Apa yang dilakukan pembicara akhir-akhir?", options: ["Kerja lebih keras", "Kurangi kerja & relaks", "Cari kerja baru", "Pindah kota"], correctAnswer: "Kurangi kerja & relaks" },
      ]
    },
  ]
};

// ============================================================
// BAB 45: ~場合は / ~のに
// ============================================================
const bab45 = {
  id: 45,
  title: "Bab 45: ~場合は / ~のに (Kontras Bertentangan)",
  vocabulary: [
    { character: "場合", romaji: "baai", meaning: "kasus, situasi" },
    { character: "場合は", romaji: "baai wa", meaning: "dalam kasus" },
    { character: "時には", romaji: "toki ni wa", meaning: "pada saat tertentu" },
    { character: "場合によっては", romaji: "baai ni yotte wa", meaning: "tergantung kasusnya" },
    { character: "万が一", romaji: "man ga ichi", meaning: "jika terjadi hal yang tidak diharapkan" },
    { character: "もしも", romaji: "moshimo", meaning: "kalau seandainya" },
    { character: "のに", romaji: "noni", meaning: "padahal, meskipun" },
    { character: "寒いのに", romaji: "samui noni", meaning: "padahal dingin" },
    { character: "学生のくせに", romaji: "gakusei no kuse ni", meaning: "padahal pelajar" },
    { character: "初級なのに", romaji: "shokyuu na noni", meaning: "padahal tingkat pemula" },
    { character: "簡単なのに", romaji: "kantan na noni", meaning: "padahal mudah" },
    { character: "約束", romaji: "yakusoku", meaning: "janji" },
    { character: "破ります", romaji: "yaburimasu", meaning: "melanggar janji" },
    { character: "破棄", romaji: "haki", meaning: "pembatalan" },
    { character: "破棄します", romaji: "haki shimasu", meaning: "membatalkan" },
    { character: "後悔します", romaji: "koukai shimasu", meaning: "menyesal" },
    { character: "後悔", romaji: "koukai", meaning: "penyesalan" },
    { character: "期待はずれ", romaji: "kitai hazure", meaning: "tidak sesuai harapan" },
    { character: "当然", romaji: "touzen", meaning: "wajar, seharusnya" },
    { character: "それなのに", romaji: "sore na noni", meaning: "meskipun begitu" },
    { character: "くせに", romaji: "kuse ni", meaning: "padahal (merendahkan)" },
    { character: "癖", romaji: "kuse", meaning: "kebiasaan" },
    { character: "癖がある", romaji: "kuse ga aru", meaning: "ada kebiasaan" },
    { character: "趣味", romaji: "shumi", meaning: "hobi" },
  ],
  grammar: [
    {
      id: 4501,
      title: "~場合は (Dalam Hal / Dalam Kasus)",
      description: "Menyatakan kondisi hipotetis atau aturan untuk kasus tertentu. Bentuk: Plain-form + 場合は/場合は. Formal, sering di pengumuman/panduan.",
      examples: [
        { japanese: "雨の場合は、運動会は中止です。", romaji: "Ame no baai wa, undoukai wa chuushi desu.", meaning: "Kalau hujan, upacara olahraga dibatalkan." },
        { japanese: "わからない場合は、先生に聞いてください。", romaji: "Wakaranai baai wa, sensei ni kiite kudasai.", meaning: "Kalau tidak paham, tanya ke guru." },
      ]
    },
    {
      id: 4502,
      title: "~のに (Padahal / Meskipun) - Kontras",
      description: "Menunjukkan kontras BERTENTANGAN dengan harapan. Plain-form + のに. Nuansa: kekecewaan, ketidaksesuaian, atau surprise. Sering dengan ね untuk meminta agreement.",
      examples: [
        { japanese: "一生懸命勉強したのに、試験に落ちました。", romaji: "Isshoukenmei benkyou shita noni, shiken ni ochimashita.", meaning: "Padahal sudah belajar keras, tapi gagal ujian." },
        { japanese: "薬を飲んだのに、まだ治りません。", romaji: "Kusuri o nonda noni, mada naorimasen.", meaning: "Padahal sudah minum obat, belum sembuh juga." },
      ]
    },
    {
      id: 4503,
      title: "~くせに (Padahal - Negatif/Merendahkan)",
      description: "Mirip ~のに tapi lebih kasar dan menyiratkan kritik/merendahkan. Hanya untuk orang atau hewan yang dianggap lebih rendah. Hati-hati penggunaannya.",
      examples: [
        { japanese: "学生のくせに、ちゃんと勉強しない。", romaji: "Gakusei no kuse ni, chanto benkyou shinai.", meaning: "Padahal pelajar, tidak belajar serius." },
        { japanese: "彼はもう大人のくせに、甘えている。", romaji: "Kare wa mou otona no kuse ni, amaete iru.", meaning: "Padahal sudah dewasa, masih manja." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "約束したのに、彼は来ませんでした。",
      question: "Apa masalahnya?", options: ["Dia lupa", "Padahal sudah janji, dia tidak datang", "Dia marah", "Dia sibuk"], correctAnswer: "Padahal sudah janji, dia tidak datang"
    },
    {
      audioText: "もし雨の場合は、ピクニックは中止です。",
      question: "Apa aturannya?", options: ["Tetap piknik", "Kalau hujan, dibatalkan", "Pindah tempat", "Tunda seminggu"], correctAnswer: "Kalau hujan, dibatalkan"
    },
    {
      audioText: "安いのに、品質がいいです。",
      question: "Apa keistimewaan produk ini?", options: ["Murah tapi jelek", "Murah tapi kualitas bagus", "Mahal tapi bagus", "Mahal tapi jelek"], correctAnswer: "Murah tapi kualitas bagus"
    },
  ],
  dokkai: [
    {
      title: "意外な事実 (Fakta Tak Terduga)",
      text: "私の友だちは、毎日三時間勉強しています。週末も五時間勉強しているのに、成績はいつも平均以下です。彼はとても悔しそうです。\n\n一方、私の場合、毎日三十分だけ勉強しています。それなのに、いつも良い成績を取れます。勉強時間の長さよりも、集中力の方が大切なのだと思います。\n\n彼の場合、休憩を取りながら勉強するのが効果的かもしれません。長時間だらだらやるよりも、短時間集中した方が効率的です。",
      questions: [
        { question: "Berapa lama teman belajar setiap hari?", options: ["30 menit", "1 jam", "3 jam", "5 jam"], correctAnswer: "3 jam" },
        { question: "Berapa lama pembicara belajar sehari?", options: ["30 menit", "1 jam", "3 jam", "5 jam"], correctAnswer: "30 menit" },
        { question: "Apa saran untuk teman?", options: ["Belajar lebih lama", "Beristirahat & fokus", "Berhenti belajar", "Ikut les"], correctAnswer: "Beristirahat & fokus" },
      ]
    },
  ]
};

// ============================================================
// BAB 46: ~ところです (Tahapan Aksi)
// ============================================================
const bab46 = {
  id: 46,
  title: "Bab 46: ~ところです (Tahap Suatu Aksi)",
  vocabulary: [
    { character: "ところです", romaji: "tokoro desu", meaning: "tahapan / saat" },
    { character: "ところです", romaji: "tokoro desu", meaning: "tempat (umum)" },
    { character: "ところです", romaji: "tokoro desu", meaning: "saat ini" },
    { character: "今", romaji: "ima", meaning: "sekarang" },
    { character: "今まさに", romaji: "ima masa ni", meaning: "tepat sekarang" },
    { character: "ところ", romaji: "tokoro", meaning: "tempat, saat" },
    { character: "あげく", romaji: "ageku", meaning: "akhirnya (setelah berlama-lama)" },
    { character: "末", romaji: "sue", meaning: "akhir (akhir dari proses)" },
    { character: "挙句", romaji: "ageku", meaning: "akhirnya (setelah menderita)" },
    { character: "これから", romaji: "kore kara", meaning: "dari sekarang" },
    { character: "ちょうど", romaji: "choudo", meaning: "tepat, kebetulan" },
    { character: "今にも", romaji: "ima ni mo", meaning: "kapan saja" },
    { character: "ばかりの", romaji: "bakari no", meaning: "baru saja" },
    { character: "たばかりです", romaji: "ta bakari desu", meaning: "baru saja selesai" },
    { character: "最中", romaji: "saichuu", meaning: "tepat di tengah-tengah" },
    { character: "最中です", romaji: "saichuu desu", meaning: "sedang berlangsung" },
    { character: "途中", romaji: "tochuu", meaning: "di tengah jalan" },
    { character: "途中で", romaji: "tochuu de", meaning: "di tengah jalan" },
    { character: "直前", romaji: "chokuzen", meaning: "tepat sebelum" },
    { character: "直後", romaji: "chokugo", meaning: "tepat sesudah" },
    { character: "出発", romaji: "shuppatsu", meaning: "keberangkatan" },
    { character: "到着", romaji: "touchaku", meaning: "kedatangan" },
    { character: "夜中", romaji: "yonaka", meaning: "tengah malam" },
    { character: "真夜中", romaji: "mayonaka", meaning: "tengah malam" },
  ],
  grammar: [
    {
      id: 4601,
      title: "~ところです (Sekarang Sedang / Baru Saja / Akan)",
      description: "Tiga bentuk: 1) V-te + いる + ところ = SEDANG. 2) V-ta + ところ = BARU SAJA. 3) V-polos + ところ = AKAN. Menunjukkan fase aksi.",
      examples: [
        { japanese: "今、昼ごはんを食べているところです。", romaji: "Ima, hirugohan o tabete iru tokoro desu.", meaning: "Sekarang saya sedang makan siang." },
        { japanese: "さっき、家に帰ったところです。", romaji: "Sakki, ie ni kaetta tokoro desu.", meaning: "Tadi baru saja pulang ke rumah." },
        { japanese: "これから出かけるところです。", romaji: "Kore kara dekakeru tokoro desu.", meaning: "Saya akan keluar sebentar lagi." },
      ]
    },
    {
      id: 4602,
      title: "~たばかりです (Baru Saja Selesai)",
      description: "V-ta + ばかりです = 'baru saja selesai'. Berfokus pada aksi yang baru saja selesai, penekanan pada 'freshness'.",
      examples: [
        { japanese: "日本に来たばかりです。", romaji: "Nihon ni kita bakari desu.", meaning: "Baru saja datang ke Jepang." },
        { japanese: "昼ごはんを食べたばかりです。", romaji: "Hirugohan o tabeta bakari desu.", meaning: "Baru saja makan siang." },
      ]
    },
    {
      id: 4603,
      title: "~最中 (Tepat Di Tengah-Tengah / Sedang Berlangsung)",
      description: "Menunjukkan bahwa sesuatu sedang dalam proses/kejadian. V-te + いる + 最中です. Bisa juga Noun + の + 最中.",
      examples: [
        { japanese: "食事をしている最中に、電話が鳴りました。", romaji: "Shokuji o shite iru saichuu ni, denwa ga narimashita.", meaning: "Tepat sedang makan, telepon berdering." },
        { japanese: "会議の最中ですので、少々お待ちください。", romaji: "Kaigi no saichuu desu node, shoushou omachi kudasai.", meaning: "Saya sedang rapat, toong tunggu sebentar." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "今、駅まで歩いているところです。",
      question: "Apa yang sedang dilakukan pembicara?", options: ["Berjalan ke stasiun", "Sampai di stasiun", "Akan ke stasiun", "Pulang dari stasiun"], correctAnswer: "Berjalan ke stasiun"
    },
    {
      audioText: "先生に相談したところです。",
      question: "Apa yang baru dilakukan?", options: ["Akan konsultasi", "Sedang konsultasi", "Baru saja konsultasi", "Selesai dan sudah lama"], correctAnswer: "Baru saja konsultasi"
    },
    {
      audioText: "これから出かけるところなので、また後で電話します。",
      question: "Apa yang akan dilakukan pembicara?", options: ["Sudah keluar", "Sedang keluar", "Akan keluar", "Tidak keluar"], correctAnswer: "Akan keluar"
    },
  ],
  dokkai: [
    {
      title: "引っ越しの日 (Hari Pindah Rumah)",
      text: "今日は引っ越しの日です。朝七時に起きました。今、八時です。荷造りをしている最中です。\n\n段ボールが三十個ぐらいあります。家具はもう専門業者が運んでくれました。冷蔵庫と洗濯機は後で業者の方が来る予定です。\n\nさっき、引越し先の部屋の鍵を受け取ったところです。これから、住所の変更手続きをしに行きます。市役所に行って、国民健康保険の手続きもしなければなりません。\n\n引っ越しの日は本当に大変です。",
      questions: [
        { question: "Jam berapa pembicara bangun?", options: ["Pukul 6", "Pukul 7", "Pukul 8", "Pukul 9"], correctAnswer: "Pukul 7" },
        { question: "Berapa banyak kardus?", options: ["10", "20", "30", "50"], correctAnswer: "30" },
        { question: "Apa yang akan dilakukan setelah ini?", options: ["Makan", "Tidur", "Ubah alamat ke balai kota", "Pergi kerja"], correctAnswer: "Ubah alamat ke balai kota" },
      ]
    },
  ]
};

// ============================================================
// BAB 47: ~そうです (Katanya) & ~ようです (Tampaknya)
// ============================================================
const bab47 = {
  id: 47,
  title: "Bab 47: ~そうです (Katanya) & ~ようです (Tampaknya)",
  vocabulary: [
    { character: "そうです", romaji: "sou desu", meaning: "katanya" },
    { character: "~によると", romaji: "~ ni yoru to", meaning: "menurut..." },
    { character: "ニュースによると", romaji: "nyuusu ni yoru to", meaning: "menurut berita" },
    { character: "天気予報", romaji: "tenki yohou", meaning: "ramalan cuaca" },
    { character: "報道", romaji: "houdou", meaning: "pemberitaan,报道" },
    { character: "記事", romaji: "kiji", meaning: "artikel" },
    { character: "新聞", romaji: "shinbun", meaning: "koran" },
    { character: "雑誌", romaji: "zasshi", meaning: "majalah" },
    { character: "インターネット", romaji: "intaanetto", meaning: "internet" },
    { character: "噂", romaji: "uwasa", meaning: "rumor, isu" },
    { character: "噂話", romaji: "uwasa banashi", meaning: "obrolan rumor" },
    { character: "証拠", romaji: "shouko", meaning: "bukti" },
    { character: "事実", romaji: "jijitsu", meaning: "fakta" },
    { character: "事実上", romaji: "jijitsujou", meaning: "de facto, pada kenyataannya" },
    { character: "信頼", romaji: "shinrai", meaning: "kepercayaan" },
    { character: "信用", romaji: "shin'yō", meaning: "kredit, kepercayaan" },
    { character: "確かな", romaji: "tashika na", meaning: "pasti, terjamin" },
    { character: "確か", romaji: "tashika", meaning: "pasti, kayaknya" },
    { character: "確かめる", romaji: "tashikameru", meaning: "memastikan" },
    { character: "確認", romaji: "kakunin", meaning: "konfirmasi" },
    { character: "確認します", romaji: "kakunin shimasu", meaning: "mengkonfirmasi" },
    { character: "証拠不十分", romaji: "shouko fujubun", meaning: "bukti tidak cukup" },
    { character: "確実", romaji: "kakujitsu", meaning: "pasti, terjamin" },
    { character: "確実な証拠", romaji: "kakujitsu na shouko", meaning: "bukti kuat" },
  ],
  grammar: [
    {
      id: 4701,
      title: "~そうです (Katanya / Konon)",
      description: "Menyatakan informasi yang didengar dari sumber lain (hearsay). Plain-form + そうです. Berbeda dari ~そうです (tampaknya visual). Sumber sering ditandai に/によると.",
      examples: [
        { japanese: "田中さんは来月結婚するそうです。", romaji: "Tanaka-san wa raigetsu kekkon suru sou desu.", meaning: "Konon Tanaka akan menikah bulan depan." },
        { japanese: "ニュースによると、明日は雨だそうです。", romaji: "Nyuusu ni yoru to, ashita wa ame da sou desu.", meaning: "Menurut berita, besok akan hujan." },
      ]
    },
    {
      id: 4702,
      title: "~ようです (Tampaknya / Seperti)",
      description: "Menyatakan kesan/kesimpulan berdasarkan bukti/observasi. Plain-form + ようです. Lebih halus dari ~そうです (tampaknya visual) dan ~そうです (katanya). Bisa juga untuk equivocation.",
      examples: [
        { japanese: "誰かが入ったようです。", romaji: "Dare ka ga haitta you desu.", meaning: "Tampaknya ada orang yang masuk." },
        { japanese: "この道は狭いようですから、気をつけてください。", romaji: "Kono michi wa semai you desu kara, ki o tsukete kudasai.", meaning: "Tampaknya jalan ini sempit, jadi hati-hati." },
      ]
    },
    {
      id: 4703,
      title: "Kontras 3 Jenis そうです",
      description: "1) V-masu stem + そうです = tampakan visual (contoh: 降りそう = akan turun, kelihatannya). 2) Plain-form + そうです = konon/katanya. 3) Plain-form + ようです = tampak berdasarkan bukti. Tiga-tiganya berbeda nuansa.",
      examples: [
        { japanese: "雨が降りそうです。(Visual)", romaji: "Ame ga furisou desu.", meaning: "Tampaknya akan hujan (awan gelap)." },
        { japanese: "雨が降るそうです。(Hearsay)", romaji: "Ame ga furu sou desu.", meaning: "Katanya akan hujan (dari berita)." },
        { japanese: "雨が降ったようです。(Bukti)", romaji: "Ame ga futta you desu.", meaning: "Tampaknya sudah hujan (tanah basah)." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "田中さんによると、会議は中止だそうです。",
      question: "Apa info dari Tanaka?", options: ["Rapat dibatalkan", "Rapat ditunda", "Rapat dimulai", "Rapat ramai"], correctAnswer: "Rapat dibatalkan"
    },
    {
      audioText: "外の天気を見ると、雨が降ったようです。",
      question: "Apa bukti bahwa hujan sudah turun?", options: ["Cuaca gelap", "Tanah basah", "Angin kencang", "Mendung"], correctAnswer: "Tanah basah"
    },
    {
      audioText: "あのお客さんは日本人ではないようです。",
      question: "Apa kesan pembicara?", options: ["Pelanggan orang Jepang", "Tampaknya bukan orang Jepang", "Sangat Jepang", "Bicara Jepang"], correctAnswer: "Tampaknya bukan orang Jepang"
    },
  ],
  dokkai: [
    {
      title: "信頼できる情報源 (Sumber Informasi Terpercaya)",
      text: "現代は情報があふれています。インターネットで何でも検索できるようになりました。しかし、すべての情報が信頼できるわけではありません。\n\n天気予報によると、明日は晴れるそうです。でも、ニュースによると、明後日は大雨になるようです。\n\n大切なのは、複数の情報源を確認することです。新聞、テレビ、政府の公式発表など、信頼できる情報源から情報を得るようにしています。\n\n噂話や SNS の情報だけを信じるのは危険です。",
      questions: [
        { question: "Bagaimana informasi sekarang?", options: ["Sedikit", "Melimpah", "Tidak ada", "Langka"], correctAnswer: "Melimpah" },
        { question: "Apa yang akan terjadi besok menurut ramalan cuaca?", options: ["Hujan deras", "Cerah", "Badai", "Salju"], correctAnswer: "Cerah" },
        { question: "Apa cara dapat info terpercaya?", options: ["Cuma SNS", "Cek beberapa sumber", "Tanya teman", "Terka sendiri"], correctAnswer: "Cek beberapa sumber" },
      ]
    },
  ]
};

// ============================================================
// BAB 48: Bentuk Kausatif (Shiekikei)
// ============================================================
const bab48 = {
  id: 48,
  title: "Bab 48: Bentuk Kausatif (Penyebab / Meminta)",
  vocabulary: [
    { character: "させます", romaji: "sasemasu", meaning: "menyuruh melakukan" },
    { character: "飲ませます", romaji: "nomasemasu", meaning: "menyuruh minum" },
    { character: "食べさせます", romaji: "tabesasemasu", meaning: "menyuruh makan" },
    { character: "待たせます", romaji: "matasemasu", meaning: "menyuruh menunggu" },
    { character: "休ませます", romaji: "yasumasemasu", meaning: "membiarkan istirahat" },
    { character: "勉強させます", romaji: "benkyou sasemasu", meaning: "menyuruh belajar" },
    { character: "働かせます", romaji: "hatarakasemasu", meaning: "menyuruh bekerja" },
    { character: "行かせます", romaji: "ikasemasu", meaning: "mengirim/menyuruh pergi" },
    { character: "来させます", romaji: "kosashimasu", meaning: "menyuruh datang" },
    { character: "帰らせます", romaji: "kaerasemasu", meaning: "menyuruh pulang" },
    { character: "させます", romaji: "sasemasu", meaning: "membiarkan melakukan" },
    { character: "許可", romaji: "kyoka", meaning: "izin" },
    { character: "許可します", romaji: "kyoka shimasu", meaning: "memberi izin" },
    { character: "許します", romaji: "yurushimasu", meaning: "mengizinkan, memaafkan" },
    { character: "禁止", romaji: "kinshi", meaning: "larangan" },
    { character: "禁止します", romaji: "kinshi shimasu", meaning: "melarang" },
    { character: "無理やり", romaji: "muri yari", meaning: "dengan paksa" },
    { character: "説得", romaji: "settoku", meaning: "bujukan" },
    { character: "説得します", romaji: "settoku shimasu", meaning: "membujuk" },
    { character: "納得", romaji: "nattoku", meaning: "pemahaman/penerimaan" },
    { character: "納得します", romaji: "nattoku shimasu", meaning: "memahami, menerima" },
    { character: "納得いかない", romaji: "nattoku ikanai", meaning: "tidak mau menerima" },
    { character: "指示", romaji: "shiji", meaning: "instruksi" },
    { character: "指示します", romaji: "shiji shimasu", meaning: "memerintahkan" },
    { character: "命令", romaji: "meirei", meaning: "perintah" },
    { character: "命令します", romaji: "meirei shimasu", meaning: "memerintah" },
  ],
  grammar: [
    {
      id: 4801,
      title: "Bentuk Kausatif Gol I (Godan)",
      description: "~u → ~aseru. Contoh: 飲む → 飲ませる (menyuruh minum), 書く → 書かせる. Pelaku ditandai を (target) atau に (penyebab).",
      examples: [
        { japanese: "母は私に野菜を食べさせました。", romaji: "Haha wa watashi ni yasai o tabesasemashita.", meaning: "Ibu menyuruh saya makan sayur." },
        { japanese: "先生は学生にたくさん宿題をさせます。", romaji: "Sensei wa gakusei ni takusan shukudai o sasemasu.", meaning: "Guru menyuruh murid banyak PR." },
      ]
    },
    {
      id: 4802,
      title: "Bentuk Kausatif Gol II & III",
      description: "Gol II: ~ru → ~saseru. Contoh: 食べる → 食べさせる. Gol III: ~suru → ~saseru. ~kuru → ~kosaseru.",
      examples: [
        { japanese: "今日は子供を早く寝させたいです。", romaji: "Kyou wa kodomo o hayaku nesasetai desu.", meaning: "Hari ini saya mau menyuruh anak tidur cepat." },
        { japanese: "私に日本語で話させてください。", romaji: "Watashi ni nihongo de hanashasete kudasai.", meaning: "Izinkan saya bicara dalam bahasa Jepang." },
      ]
    },
    {
      id: 4803,
      title: "Kausatif Membiarkan (Allow / Permit)",
      description: "Selain 'memaksa', kausatif juga bisa berarti 'membiarkan/izin'. Untuk izin: particle を. Pelaku secara sukarela. Untuk paksaan: particle に.",
      examples: [
        { japanese: "子供に好きなことをさせてあげたいです。", romaji: "Kodomo ni suki na koto o sasete agetai desu.", meaning: "Saya ingin membiarkan anak melakukan hal yang disukai." },
        { japanese: "今日は休ませてください。", romaji: "Kyou wa yasumasete kudasai.", meaning: "Hari ini izinkan saya istirahat." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "母は私にピアノを習わせました。",
      question: "Apa yang dilakukan ibu?", options: ["Main piano sendiri", "Menyuruh anak les piano", "Larang anak main piano", "Jual piano"], correctAnswer: "Menyuruh anak les piano"
    },
    {
      audioText: "今日は残業させないでください。",
      question: "Apa yang diminta?", options: ["Suruh lembur", "Izinkan tidak lembur", "Kerja tambahan", "Pulang cepat"], correctAnswer: "Izinkan tidak lembur"
    },
    {
      audioText: "部長は私に資料を翻訳させました。",
      question: "Apa yang dilakukan manager?", options: ["Terjemahkan sendiri", "Minta pembicara terjemahkan dokumen", "Lempar dokumen", "Bakar dokumen"], correctAnswer: "Minta pembicara terjemahkan dokumen"
    },
  ],
  dokkai: [
    {
      title: "子どもに何をさせるか (Apa yang Menyuruh Anak Lakukan)",
      text: "日本の親は、子どもにいろいろなことをさせます。ピアノを習わせたり、塾に行かせたりします。\n\nしかし、最近、「子どもに自由に遊ばせたほうがいい」という意見も増えてきました。\n\n私の母は、私に小さい頃からピアノを習わせました。最初は嫌でしたが、今は感謝しています。\n\nでも、友達の中には、「自由な子ども時代を送りたかった」と言う人もいます。結局、何が正しいかは、人それぞれだと思います。大切なのは、子どもの気持ちを尊重することだと思います。",
      questions: [
        { question: "Apa yang biasa dilakukan orang tua Jepang?", options: ["Anak bebas", "Anak les piano & akademi", "Anak kerja", "Anak tidak sekolah"], correctAnswer: "Anak les piano & akademi" },
        { question: "Apa pendapat pembicara tentang belajar piano?", options: ["Benci", "Sekarang bersyukur", "Tidak penting", "Bosan"], correctAnswer: "Sekarang bersyukur" },
        { question: "Menurut teks, apa yang penting?", options: ["Paksa anak", "Hormati perasaan anak", "Biar anak sendiri", "Ikut tren"], correctAnswer: "Hormati perasaan anak" },
      ]
    },
  ]
};

// ============================================================
// BAB 49: Keigo: Sonkeigo (Menghormati Orang Lain)
// ============================================================
const bab49 = {
  id: 49,
  title: "Bab 49: Keigo - Sonkeigo (Menghormati)",
  vocabulary: [
    { character: "いらっしゃる", romaji: "irassharu", meaning: "ada/pergi/datang (hormat)" },
    { character: "おっしゃる", romaji: "ossharu", meaning: "berkata (hormat)" },
    { character: "召し上がる", romaji: "meshiagaru", meaning: "makan/minum (hormat)" },
    { character: "ご覧になる", romaji: "goran ni naru", meaning: "melihat (hormat)" },
    { character: "お見えになる", romaji: "omie ni naru", meaning: "datang (hormat)" },
    { character: "お休みになる", romaji: "o-yasumi ni naru", meaning: "istirahat (hormat)" },
    { character: "お勤めになる", romaji: "o-tsutome ni naru", meaning: "bekerja (hormat)" },
    { character: "お考えになる", romaji: "o-kangae ni naru", meaning: "berpikir (hormat)" },
    { character: "ご利用になる", romaji: "go-riyou ni naru", meaning: "menggunakan (hormat)" },
    { character: "ご満足", romaji: "go-manzoku", meaning: "kepuasan (hormat)" },
    { character: "ご満足なさる", romaji: "go-manzoku nasaru", meaning: "puas (hormat)" },
    { character: "お喜び", romaji: "o-yorokobi", meaning: "kegembiraan (hormat)" },
    { character: "お喜びになる", romaji: "o-yorokobi ni naru", meaning: "gembira (hormat)" },
    { character: "お怒りになる", romaji: "o-ikari ni naru", meaning: "marah (hormat)" },
    { character: "お感じになる", romaji: "o-kanji ni naru", meaning: "merasakan (hormat)" },
    { character: "お決めになる", romaji: "o-kime ni naru", meaning: "memutuskan (hormat)" },
    { character: "お話しになる", romaji: "o-hanashi ni naru", meaning: "berbicara (hormat)" },
    { character: "お忙しうございます", romaji: "o-isogashii", meaning: "Anda sibuk (sopan)" },
    { character: "お荷物", romaji: "o-nimotsu", meaning: "barang Anda (hormat)" },
    { character: "お口に合いますか", romaji: "o-kuchi ni aimasu ka", meaning: "Apakah cocok dengan selera Anda?" },
    { character: "お体に気をつけて", romaji: "o-karada ni ki o tsukete", meaning: "Jaga kesehatan Anda" },
    { character: "ご親切に", romaji: "go-shinsetsu ni", meaning: "dengan kebaikan hati Anda" },
    { character: "ご協力", romaji: "go-kyouryoku", meaning: "kerjasama Anda (hormat)" },
    { character: "お力", romaji: "o-chikara", meaning: "kekuatan Anda (hormat)" },
    { character: "お元気で", romaji: "o-genki de", meaning: "sehat selalu" },
  ],
  grammar: [
    {
      id: 4901,
      title: "Sonkeigo I - Verba Khusus",
      description: "Verba sonkeigo (尊敬語) khusus untuk menghormati aksi orang yang dihormati. 5 penting: いらっしゃる (ada/pergi/datang), おっしゃる (berkata), 召し上がる (makan/minum), ご覧になる (melihat), お考えになる (berpikir).",
      examples: [
        { japanese: "社長はもうおっしゃいましたか。", romaji: "Shachou wa mou osshaimashita ka.", meaning: "Apakah direktur sudah berkata?" },
        { japanese: "どうぞ、召し上がってください。", romaji: "Douzo, meshiagatte kudasai.", meaning: "Silakan makan." },
      ]
    },
    {
      id: 4902,
      title: "Sonkeigo II - Pola お/ご + V-masu stem + になる",
      description: "Pola sonkeigo umum: お + V-masu stem + になる (untuk V Jepang) atau ご + kata benda Sino-Jepang + になる.",
      examples: [
        { japanese: "先生は何時にお帰りになりますか。", romaji: "Sensei wa nanji ni o-kaeri ni narimasu ka.", meaning: "Pukul berapa guru pulang?" },
        { japanese: "お客様はもうお決めになりましたか。", romaji: "Okyakusama wa mou o-kime ni narimashita ka.", meaning: "Apakah pelanggan sudah memutuskan?" },
      ]
    },
    {
      id: 4903,
      title: "Sonkeigo III - Pola お/ご + V-masu stem + なさる",
      description: "Varian sopan: お + V-masu stem + なさる. ~なさる → ~なさい (perintah hormat). ~なさいます (lampau). Sering di percakapan bisnis.",
      examples: [
        { japanese: "部長、ご利用なさいますか。", romaji: "Buchou, go-riyou nasaimasu ka.", meaning: "Pak Manager, apakah Anda akan menggunakan (fasilitas)?" },
        { japanese: "お待ちください。", romaji: "O-machi kudasai.", meaning: "Tunggu sebentar." },
        { japanese: "お休みなさい。", romaji: "O-yasumi nasai.", meaning: "Selamat istirahat (perintah hormat)." },
      ]
    },
  ],
  choukai: [
    {
      audioText: "田中先生はもうお戻りになりました。",
      question: "Apa status Tanaka-sensei?", options: ["Belum kembali", "Sudah kembali", "Sedang jalan", "Sudah tidur"], correctAnswer: "Sudah kembali"
    },
    {
      audioText: "どうぞ、ごゆっくりなさってください。",
      question: "Apa yang disarankan?", options: ["Cepat", "Santai-santai", "Tidur", "Makan"], correctAnswer: "Santai-santai"
    },
    {
      audioText: "会長は、来年ご退官なさるそうです。",
      question: "Apa info tentang ketua?", options: ["Akan naik jabatan", "Akan pensiun tahun depan", "Akan menikah", "Akan cuti"], correctAnswer: "Akan pensiun tahun depan"
    },
  ],
  dokkai: [
    {
      title: "敬語の難しさ (Kesulitan Keigo)",
      text: "日本語を学ぶ外国人の多くは、敬語が難しいと言います。敬語は、相手への尊敬を表す大切な表現です。\n\n日本の会社では、上司やお客様に対して敬語を使います。例えば、上司が会議で発言される時には、「社長は、おっしゃいましたように」と言います。\n\nまた、お客様には「どうぞ、お座りになって、お待ちください」のように言います。\n\n敬語は間違えると失礼になるので、特にビジネスシーンではとても重要です。最近では、敬語教室や研修を行っている会社も多いです。\n\n敬語を正しく使うことで、相手への尊敬の気持ちを表すことができます。",
      questions: [
        { question: "Apa pendapat orang asing tentang keigo?", options: ["Mudah", "Sulit", "Tidak perlu", "Sama saja"], correctAnswer: "Sulit" },
        { question: "Kapan keigo digunakan di perusahaan?", options: ["Dengan teman", "Dengan atasan/pelanggan", "Dengan keluarga", "Dengan anak"], correctAnswer: "Dengan atasan/pelanggan" },
        { question: "Apa yang bisa diekspresikan dengan keigo?", options: ["Kebahagiaan", "Hormat pada orang lain", "Kesedihan", "Kemarahan"], correctAnswer: "Hormat pada orang lain" },
      ]
    },
  ]
};

// ============================================================
// BAB 50: Keigo: Kenjougo (Merendahkan Diri)
// ============================================================
const bab50 = {
  id: 50,
  title: "Bab 50: Keigo - Kenjougo (Merendahkan Diri)",
  vocabulary: [
    { character: "参ります", romaji: "mairimasu", meaning: "pergi/datang (rendah hati)" },
    { character: "おります", romaji: "orimasu", meaning: "ada (rendah hati)" },
    { character: "いただきます", romaji: "itadakimasu", meaning: "menerima/makan (rendah hati)" },
    { character: "申します", romaji: "moushimasu", meaning: "bernama/berkata (rendah hati)" },
    { character: "いたします", romaji: "itashimasu", meaning: "melakukan (rendah hati)" },
    { character: "存じます", romaji: "zonshimasu", meaning: "tahu/pikir (rendah hati)" },
    { character: "ございます", romaji: "gozaimasu", meaning: "ada (rendah hati, kopula)" },
    { character: "伺います", romaji: "ukagaimasu", meaning: "bertanya/mengunjungi (rendah hati)" },
    { character: "拝見します", romaji: "haiken shimasu", meaning: "melihat (rendah hati)" },
    { character: "お預かりします", romaji: "o-azukari shimasu", meaning: "menitipkan/menerima titipan (rendah hati)" },
    { character: "ご案内します", romaji: "go-annai shimasu", meaning: "mempandu (rendah hati)" },
    { character: "お持ちします", romaji: "o-mochi shimasu", meaning: "membawa (rendah hati)" },
    { character: "お届けします", romaji: "o-todoke shimasu", meaning: "mengirim (rendah hati)" },
    { character: "お渡しします", romaji: "o-watashi shimasu", meaning: "menyerahkan (rendah hati)" },
    { character: "ご連絡します", romaji: "go-renraku shimasu", meaning: "menghubungi (rendah hati)" },
    { character: "お返しします", romaji: "o-kaeshi shimasu", meaning: "mengembalikan (rendah hati)" },
    { character: "お知らせします", romaji: "o-shirase shimasu", meaning: "memberitahu (rendah hati)" },
    { character: "ご案内いたします", romaji: "go-annai itashimasu", meaning: "mempandu (sangat sopan)" },
    { character: "失礼いたします", romaji: "shitsurei itashimasu", meaning: "mohon maaf (sangat sopan)" },
    { character: "お疲れ様です", romaji: "o-tsukare-sama desu", meaning: "terima kasih sudah bekerja keras" },
    { character: "ご苦労様です", romaji: "go-kurou-sama desu", meaning: "terima kasih sudah bekerja keras (ke bawahan)" },
    { character: "恐れ入ります", romaji: "osore irimasu", meaning: "sangat berterima kasih/maaf" },
    { character: "お邪魔します", romaji: "o-jama shimasu", meaning: "mengganggu (saat masuk rumah orang)" },
    { character: "お邪魔しました", romaji: "o-jama shimashita", meaning: "sudah mengganggu (saat keluar)" },
    { character: "失礼しました", romaji: "shitsurei shimashita", meaning: "permisi (saat keluar/pulang duluan)" },
    { character: "失礼します", romaji: "shitsurei shimasu", meaning: "permisi (sebelum pergi)" },
  ],
  grammar: [
    {
      id: 5001,
      title: "Kenjougo I - Verba Khusus",
      description: "Verba kenjougo (謙譲語) untuk merendahkan diri sendiri/keluarga. 5 penting: 参る (pergi/datang), おる (ada), いただく (menerima/makan), 申す (berkata/nama), いたす (melakukan).",
      examples: [
        { japanese: "私はマイクと申します。", romaji: "Watashi wa Maiku to moushimasu.", meaning: "Nama saya (hamba) Mike." },
        { japanese: "明日、先生のお宅へ参ります。", romaji: "Ashita, sensei no otaku e mairimasu.", meaning: "Besok saya akan pergi ke rumah guru." },
      ]
    },
    {
      id: 5002,
      title: "Kenjougo II - Pola お + V-masu stem + する",
      description: "Pola umum: お + V-masu stem + する (rendah hati). Untuk kata Sino-Jepang: ご + noun + する. Sering digabung dengan いたす untuk ekstra sopan: お + V + いたす.",
      examples: [
        { japanese: "私が荷物をお持ちします。", romaji: "Watashi ga nimotsu o omochi shimasu.", meaning: "Biar saya yang membawa barangnya." },
        { japanese: "資料をお送りいたします。", romaji: "Shiryou o o-okuri itashimasu.", meaning: "Saya akan mengirim dokumen (sangat sopan)." },
      ]
    },
    {
      id: 5003,
      title: "Kontras Sonkeigo vs Kenjougo",
      description: "Sonkeigo: menghormati ORANG LAIN (subjek dihormati). Kenjougo: merendahkan DIRI SENDIRI (subjek pembicara/keluarga). Sering digunakan BERSAMAAN: sonkeigo untuk orang lain, kenjougo untuk diri sendiri.",
      examples: [
        { japanese: "先生が いらっしゃいました。私は 参りました。", romaji: "Sensei ga irasshaimashita. Watashi wa mairimashita.", meaning: "Guru sudah datang (hormat). Saya sudah datang (rendah hati)." },
        { japanese: "資料を ごらんください と 申しました。", romaji: "Shiryou o goran kudasai to moushishimashita.", meaning: "Saya bilang 'tolong lihat dokumennya' (ke bos saya).", },
      ]
    },
  ],
  choukai: [
    {
      audioText: "私はABC会社の山田と申します。",
      question: "Apa yang dikatakan?", options: ["Saya bernama Yamada dari ABC", "Saya menjual produk ABC", "Saya tinggal di ABC", "Saya bekerja di ABC"], correctAnswer: "Saya bernama Yamada dari ABC"
    },
    {
      audioText: "私どもで、お荷物をお持ちいたします。",
      question: "Apa yang akan dilakukan?", options: ["Mengambil barang", "Membawa barang (dengan hormat)", "Menjual barang", "Membuang barang"], correctAnswer: "Membawa barang (dengan hormat)"
    },
    {
      audioText: "先生のお宅に伺います。",
      question: "Apa yang akan dilakukan?", options: ["Bertamu ke rumah guru (hormat)", "Telepon guru", "Kirim surat ke guru", "Bertemu di sekolah"], correctAnswer: "Bertamu ke rumah guru (hormat)"
    },
  ],
  dokkai: [
    {
      title: "敬語の使い方 (Cara Pakai Keigo)",
      text: "敬語には、三つの種類があります。\n\n一つ目は、尊敬語 (sonkeigo) です。これは、相手を高める言葉です。例えば、「先生がいらっしゃいました」と言います。\n\n二つ目は、謙譲語 (kenjougo) です。これは、自分を下げる言葉です。例えば、「私が参ります」と言います。\n\n三つ目は、丁寧語 (teineigo) です。これは、聞き手に丁寧にする言葉です。例えば、「今日は天気がいいですね」と言います。\n\nビジネスシーンでは、この三つを適切に使い分けることが大切です。",
      questions: [
        { question: "Ada berapa jenis keigo?", options: ["2", "3", "4", "5"], correctAnswer: "3" },
        { question: "Mana yang menghormati lawan bicara?", options: ["Sonkeigo", "Kenjougo", "Teineigo", "Casual"], correctAnswer: "Sonkeigo" },
        { question: "Mana yang merendahkan diri sendiri?", options: ["Sonkeigo", "Kenjougo", "Teineigo", "Slang"], correctAnswer: "Kenjougo" },
      ]
    },
  ]
};

// ============================================================
// APPLY: Replace Bab 26-50 with new full data
// ============================================================
const newLessons = [
  bab26, bab27, bab28, bab29, bab30,
  bab31, bab32, bab33, bab34, bab35,
  bab36, bab37, bab38, bab39, bab40,
  bab41, bab42, bab43, bab44, bab45,
  bab46, bab47, bab48, bab49, bab50
];

let replaced = 0, inserted = 0;
for (const newLesson of newLessons) {
  const idx = mnnData.findIndex(d => d.id === newLesson.id);
  if (idx >= 0) {
    mnnData[idx] = newLesson;
    replaced++;
  } else {
    mnnData.push(newLesson);
    inserted++;
  }
}

// Sort by id just to be safe
mnnData.sort((a, b) => a.id - b.id);

fs.writeFileSync(mnnFile, JSON.stringify(mnnData, null, 2));

console.log(`✓ Replaced ${replaced}, inserted ${inserted}`);
console.log(`✓ Total lessons: ${mnnData.length}`);

// Verify counts
const totalVocab = mnnData.reduce((sum, l) => sum + (l.vocabulary?.length || 0), 0);
const totalGrammar = mnnData.reduce((sum, l) => sum + (l.grammar?.length || 0), 0);
const totalChoukai = mnnData.reduce((sum, l) => sum + (l.choukai?.length || 0), 0);
const totalDokkai = mnnData.reduce((sum, l) => sum + (l.dokkai?.length || 0), 0);
console.log(`\nTotals across all 50 lessons:`);
console.log(`  Vocab:   ${totalVocab} (avg ${(totalVocab/50).toFixed(1)}/bab)`);
console.log(`  Grammar: ${totalGrammar} (avg ${(totalGrammar/50).toFixed(1)}/bab)`);
console.log(`  Choukai: ${totalChoukai} (avg ${(totalChoukai/50).toFixed(1)}/bab)`);
console.log(`  Dokkai:  ${totalDokkai} (avg ${(totalDokkai/50).toFixed(1)}/bab)`);

const mnn2Vocab = mnnData.slice(25).reduce((s, l) => s + (l.vocabulary?.length || 0), 0);
const mnn2Grammar = mnnData.slice(25).reduce((s, l) => s + (l.grammar?.length || 0), 0);
const mnn2Choukai = mnnData.slice(25).reduce((s, l) => s + (l.choukai?.length || 0), 0);
console.log(`\nMNN 2 (Bab 26-50) only:`);
console.log(`  Vocab:   ${mnn2Vocab} (avg ${(mnn2Vocab/25).toFixed(1)}/bab) ← target 25-30`);
console.log(`  Grammar: ${mnn2Grammar} (avg ${(mnn2Grammar/25).toFixed(1)}/bab) ← target 3-4`);
console.log(`  Choukai: ${mnn2Choukai} (avg ${(mnn2Choukai/25).toFixed(1)}/bab) ← target 3+`);
