const fs = require('fs');
const path = require('path');

const mnnFile = path.join(__dirname, '../src', 'data', 'mnn.json');
const mnnData = JSON.parse(fs.readFileSync(mnnFile, 'utf8'));

const accurateChapters = [
  {
    id: 36,
    title: "Bab 36 (~ように / Agar & Berusaha)",
    vocabulary: [
      { character: "合います", romaji: "aimasu", meaning: "cocok, sesuai" },
      { character: "貯金します", romaji: "chokin shimasu", meaning: "menabung" },
      { character: "過ぎます", romaji: "sugimasu", meaning: "melewati (waktu)" },
      { character: "慣れます", romaji: "naremasu", meaning: "terbiasa" },
      { character: "腐ります", romaji: "kusarimasu", meaning: "membusuk" },
      { character: "剣道", romaji: "kendou", meaning: "kendo" },
      { character: "柔道", romaji: "juudou", meaning: "judo" },
      { character: "ラッシュ", romaji: "rasshu", meaning: "jam sibuk (rush hour)" }
    ],
    grammar: [
      {
        id: 3601,
        title: "Verb 1 (Kamus/Nai) + ように、Verb 2",
        description: "Menyatakan tujuan atau 'agar/supaya'. Verb 1 biasanya kata kerja potensial atau kata kerja yang tidak menunjukkan kehendak sadar (intransitif).",
        examples: [
          { japanese: "日本語が話せるように、毎日練習します。", romaji: "Nihongo ga hanaseru you ni, mainichi renshuu shimasu.", meaning: "Saya berlatih setiap hari agar bisa berbicara bahasa Jepang." },
          { japanese: "風邪を引かないように、コートを着ます。", romaji: "Kaze o hikanai you ni, kooto o kimasu.", meaning: "Saya memakai mantel agar tidak masuk angin." }
        ]
      },
      {
        id: 3602,
        title: "~ようになります / ~ようにします",
        description: "ようになります = Perubahan kemampuan (dari tidak bisa menjadi bisa). ようにします = Berusaha keras untuk melakukan sesuatu secara rutin.",
        examples: [
          { japanese: "漢字が読めるようになりました。", romaji: "Kanji ga yomeru you ni narimashita.", meaning: "Saya sudah menjadi bisa membaca kanji." },
          { japanese: "毎日運動するようにしています。", romaji: "Mainichi undou suru you ni shite imasu.", meaning: "Saya (sedang) berusaha untuk berolahraga setiap hari." }
        ]
      }
    ],
    choukai: [
      {
        id: 36001,
        type: "blind",
        audioText: "時計を忘れないように、カバンの中に入れました。",
        question: "Mengapa jam tangannya dimasukkan ke dalam tas?",
        options: ["Agar rusak", "Agar tidak lupa", "Agar terlihat orang", "Agar cepat"],
        answer: 1,
        translation: "Agar tidak lupa jam tangannya, saya memasukkannya ke dalam tas."
      }
    ],
    dokkai: {
      title: "私の習慣",
      content: "私は健康のために、毎朝早く起きるようにしています。そして、少し走るようにしています。最初は大変でしたが、今は慣れました。",
      questions: [
        {
          id: 360001,
          question: "Apa kebiasaan orang tersebut?",
          options: ["Tidur larut malam", "Bangun pagi dan berlari", "Makan banyak", "Bermalas-malasan"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 37,
    title: "Bab 37 (Bentuk Pasif / Ukemikei)",
    vocabulary: [
      { character: "褒めます", romaji: "homemasu", meaning: "memuji" },
      { character: "しかります", romaji: "shikarimasu", meaning: "memarahi" },
      { character: "誘います", romaji: "sasoimasu", meaning: "mengundang, mengajak" },
      { character: "起こします", romaji: "okoshimasu", meaning: "membangunkan" },
      { character: "招待します", romaji: "shoutai shimasu", meaning: "mengundang (resmi)" },
      { character: "頼みます", romaji: "tanomimasu", meaning: "meminta tolong" },
      { character: "踏みます", romaji: "fumimasu", meaning: "menginjak" },
      { character: "壊します", romaji: "kowashimasu", meaning: "merusak" }
    ],
    grammar: [
      {
        id: 3701,
        title: "Bentuk Pasif (Ukemikei)",
        description: "Digunakan ketika Subjek dikenai pekerjaan. Orang yang melakukan aksi ditandai dengan partikel に. Perubahan: Gol I: u -> a+reru (書く -> 書かれる). Gol II: ru -> rareru. Gol III: 来る -> 来られる, する -> される.",
        examples: [
          { japanese: "私は先生に褒められました。", romaji: "Watashi wa sensei ni homeraremashita.", meaning: "Saya dipuji oleh guru." },
          { japanese: "私は犬に手をかまれました。", romaji: "Watashi wa inu ni te o kamaremashita.", meaning: "Tangan saya digigit anjing. (Pasif penderitaan)" }
        ]
      },
      {
        id: 3702,
        title: "Pasif untuk Benda/Fakta Sejarah",
        description: "Jika membahas benda, acara, atau fakta yang diciptakan/ditemukan tanpa fokus pada 'siapa' yang melakukan (fokus pada benda tersebut).",
        examples: [
          { japanese: "この家は200年前に建てられました。", romaji: "Kono ie wa ni-hyaku nen mae ni tateraremashita.", meaning: "Rumah ini dibangun 200 tahun yang lalu." }
        ]
      }
    ],
    choukai: [
      {
        id: 37001,
        type: "blind",
        audioText: "昨日、電車の中で足を踏まれました。とても痛かったです。",
        question: "Apa kejadian sial yang menimpa orang ini?",
        options: ["Kakinya diinjak di kereta", "Ketinggalan kereta", "Dompetnya dicuri", "Sepatunya hilang"],
        answer: 0,
        translation: "Kemarin, kaki saya diinjak di dalam kereta. Sangat sakit."
      }
    ],
    dokkai: {
      title: "有名な絵",
      content: "この絵は、300年ぐらい前に有名な画家によって描かれました。今でも世界中の人に愛されています。",
      questions: [
        {
          id: 370001,
          question: "Kapan lukisan ini digambar?",
          options: ["Sekarang", "Kemarin", "Sekitar 300 tahun lalu", "Tahun lalu"],
          answer: 2
        }
      ]
    }
  },
  {
    id: 38,
    title: "Bab 38 (Nominalisasi ~のは / ~のが)",
    vocabulary: [
      { character: "育てます", romaji: "sodatemasu", meaning: "membesarkan, mendidik" },
      { character: "運びます", romaji: "hakobimasu", meaning: "mengangkut, membawa" },
      { character: "亡くなります", romaji: "nakunarimasu", meaning: "meninggal dunia" },
      { character: "入院します", romaji: "nyuuin shimasu", meaning: "masuk rumah sakit" },
      { character: "退院します", romaji: "taiin shimasu", meaning: "keluar rumah sakit" },
      { character: "入れます", romaji: "iremasu", meaning: "menyalakan (power)" },
      { character: "切ります", romaji: "kirimasu", meaning: "mematikan (power)" },
      { character: "整理します", romaji: "seiri shimasu", meaning: "merapikan, menyusun" }
    ],
    grammar: [
      {
        id: 3801,
        title: "Verb Kamus + のは / のが",
        description: "Mengubah kata kerja menjadi kata benda (Nominalisasi). のは digunakan untuk menjadikan kata kerja sebagai topik utama. のが digunakan untuk menyatakan keahlian atau kesukaan.",
        examples: [
          { japanese: "音楽を聞くのは楽しいです。", romaji: "Ongaku o kiku no wa tanoshii desu.", meaning: "Mendengarkan musik itu menyenangkan." },
          { japanese: "私は絵を描くのが好きです。", romaji: "Watashi wa e o kaku no ga suki desu.", meaning: "Saya suka menggambar." }
        ]
      },
      {
        id: 3802,
        title: "Verb Kamus + のを 忘れました / 知っていますか",
        description: "Menjadikan aktivitas sebagai objek (を) dari kata kerja lupa atau tahu.",
        examples: [
          { japanese: "薬を飲むのを忘れました。", romaji: "Kusuri o nomu no o wasuremashita.", meaning: "Saya lupa meminum obat." },
          { japanese: "彼が結婚したのを知っていますか。", romaji: "Kare ga kekkon shita no o shitte imasu ka.", meaning: "Tahukah kamu bahwa dia sudah menikah? (Gunakan bentuk Ta karena masa lampau)" }
        ]
      }
    ],
    choukai: [
      {
        id: 38001,
        type: "blind",
        audioText: "日本語を話すのは難しくないですが、漢字を書くのはとても難しいです。",
        question: "Bagi orang ini, apa yang paling sulit?",
        options: ["Berbicara bahasa Jepang", "Menulis kanji", "Mendengarkan", "Membaca"],
        answer: 1,
        translation: "Berbicara bahasa Jepang itu tidak sulit, tapi menulis kanji itu sangat sulit."
      }
    ],
    dokkai: {
      title: "私の趣味",
      content: "私は星を見るのが好きです。夜、暗いところで空を見るのは本当にすばらしいです。明日星がきれいなのを祈っています。",
      questions: [
        {
          id: 380001,
          question: "Apa hobi orang ini?",
          options: ["Melihat bintang", "Menggambar bintang", "Bermain game", "Tidur siang"],
          answer: 0
        }
      ]
    }
  },
  {
    id: 39,
    title: "Bab 39 (~て / Sebab-Akibat)",
    vocabulary: [
      { character: "答えます", romaji: "kotaemasu", meaning: "menjawab" },
      { character: "倒れます", romaji: "taoremasu", meaning: "jatuh, rubuh" },
      { character: "通ります", romaji: "toorimasu", meaning: "melewati" },
      { character: "死みます", romaji: "shinimasu", meaning: "mati" },
      { character: "びっくりします", romaji: "bikkuri shimasu", meaning: "terkejut" },
      { character: "がっかりします", romaji: "gakkari shimasu", meaning: "kecewa" },
      { character: "安心します", romaji: "anshin shimasu", meaning: "lega" },
      { character: "遅刻します", romaji: "chikoku shimasu", meaning: "terlambat" }
    ],
    grammar: [
      {
        id: 3901,
        title: "Verb/Adj + て (Alasan Perasaan/Potensial/Situasi)",
        description: "Bentuk ~て bisa bermakna 'karena'. Tetapi akibat di kalimat belakang dibatasi HANYA untuk: ungkapan perasaan, kata kerja potensial (tidak bisa melakukan), atau situasi yang di luar kendali. TIDAK BOLEH digunakan untuk perintah atau ajakan.",
        examples: [
          { japanese: "ニュースを聞いて、びっくりしました。", romaji: "Nyuusu o kiite, bikkuri shimashita.", meaning: "Saya terkejut KARENA mendengar berita itu." },
          { japanese: "漢字が難しくて、読めません。", romaji: "Kanji ga muzukashikute, yomemasen.", meaning: "Karena kanjinya sulit, saya tidak bisa membacanya." }
        ]
      },
      {
        id: 3902,
        title: "Noun + で (Alasan Bencana/Insiden)",
        description: "Kata benda yang menyatakan insiden/bencana (seperti gempa, hujan, kecelakaan) + で berarti 'karena (bencana)'.",
        examples: [
          { japanese: "地震で、ビルが倒れました。", romaji: "Jishin de, biru ga taoremashita.", meaning: "Karena gempa, gedung rubuh." }
        ]
      }
    ],
    choukai: [
      {
        id: 39001,
        type: "blind",
        audioText: "事故で電車が遅れました。それで、約束の時間に間に合いませんでした。",
        question: "Mengapa dia tidak keburu waktu janjinya?",
        options: ["Karena bangun kesiangan", "Karena ada kecelakaan sehingga kereta terlambat", "Karena lupa jalan", "Karena kereta mogok sendiri"],
        answer: 1,
        translation: "Karena kecelakaan, kereta terlambat. Oleh karena itu, saya tidak tepat waktu pada jam janji."
      }
    ],
    dokkai: {
      title: "悲しいニュース",
      content: "テレビのニュースで、有名な俳優が亡くなったのを知りました。彼の映画がとても好きだったので、がっかりして、涙が出ました。",
      questions: [
        {
          id: 390001,
          question: "Bagaimana perasaan penulis saat menonton berita?",
          options: ["Senang", "Kecewa dan sedih", "Marah", "Terkejut bahagia"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 40,
    title: "Bab 40 (~か / Kalimat Tanya Tersisip)",
    vocabulary: [
      { character: "数えます", romaji: "kazoemasu", meaning: "menghitung" },
      { character: "測ります", romaji: "hakarimasu", meaning: "mengukur, menimbang" },
      { character: "確かめます", romaji: "tashikamemasu", meaning: "memastikan" },
      { character: "合います", romaji: "aimasu", meaning: "pas, cocok ukurannya" },
      { character: "出発します", romaji: "shuppatsu shimasu", meaning: "berangkat" },
      { character: "到着します", romaji: "touchaku shimasu", meaning: "tiba" },
      { character: "酔います", romaji: "yoimasu", meaning: "mabuk" },
      { character: "危険な", romaji: "kiken na", meaning: "berbahaya" }
    ],
    grammar: [
      {
        id: 4001,
        title: "Kata Tanya + Bentuk Biasa + か、~",
        description: "Menyisipkan kalimat tanya menggunakan kata tanya (siapa, apa, kapan, dll) ke dalam kalimat lain. Akhiri klausa tanya dengan か.",
        examples: [
          { japanese: "会議は何時に終わるか、わかりません。", romaji: "Kaigi wa nan-ji ni owaru ka, wakarimasen.", meaning: "Saya tidak tahu jam berapa rapatnya selesai." },
          { japanese: "箱の中に何が入っているか、見てください。", romaji: "Hako no naka ni nani ga haitte iru ka, mite kudasai.", meaning: "Tolong lihat apa yang ada di dalam kotak." }
        ]
      },
      {
        id: 4002,
        title: "Bentuk Biasa + かどうか、~",
        description: "Menyisipkan pertanyaan 'Ya atau Tidak' (apakah ~ atau tidak).",
        examples: [
          { japanese: "その話が本当かどうか、確かめます。", romaji: "Sono hanashi ga hontou ka dou ka, tashikamemasu.", meaning: "Saya akan memastikan apakah cerita itu benar atau tidak." },
          { japanese: "この靴が合うかどうか、はいてみます。", romaji: "Kono kutsu ga au ka dou ka, haite mimasu.", meaning: "Saya akan mencoba memakai sepatu ini untuk melihat apakah pas atau tidak." }
        ]
      }
    ],
    choukai: [
      {
        id: 40001,
        type: "blind",
        audioText: "すみません、東京行きの新幹線が何番線から出発するか、教えてください。",
        question: "Apa yang ditanyakan oleh orang tersebut?",
        options: ["Harga tiket shinkansen", "Waktu tiba di Tokyo", "Dari peron nomor berapa shinkansen berangkat", "Apakah ada shinkansen ke Tokyo"],
        answer: 2,
        translation: "Permisi, tolong beritahu saya dari peron nomor berapa shinkansen ke Tokyo berangkat."
      }
    ],
    dokkai: {
      title: "荷物の確認",
      content: "旅行へ行く前に、忘れ物がないかどうか、もう一度かばんの中を確かめてください。パスポートや財布は特に大切です。",
      questions: [
        {
          id: 400001,
          question: "Apa yang harus dilakukan sebelum pergi liburan?",
          options: ["Membeli tas baru", "Memastikan apakah ada barang yang terlupa", "Membuang barang", "Menghitung uang"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 41,
    title: "Bab 41 (Keigo: Memberi & Menerima)",
    vocabulary: [
      { character: "いただきます", romaji: "itadakimasu", meaning: "menerima (sopan/merendahkan diri)" },
      { character: "くださいます", romaji: "kudasaimasu", meaning: "memberikan padaku (hormat)" },
      { character: "やります", romaji: "yarimasu", meaning: "memberikan (kepada bawahan/hewan)" },
      { character: "上げます", romaji: "agemasu", meaning: "menaikkan" },
      { character: "下げます", romaji: "sagemasu", meaning: "menurunkan" },
      { character: "親切にします", romaji: "shinsetsu ni shimasu", meaning: "berbuat baik" },
      { character: "かわいい", romaji: "kawaii", meaning: "lucu, imut" },
      { character: "珍しい", romaji: "mezurashii", meaning: "langka" }
    ],
    grammar: [
      {
        id: 4101,
        title: "いただきます / くださいます / やります",
        description: "Sistem hierarki sosial. いただきます: Menerima dari atasan. くださいます: Atasan memberi kepada saya. やります: Saya memberi kepada bawahan/tanaman/hewan.",
        examples: [
          { japanese: "私は社長にお土産をいただきました。", romaji: "Watashi wa shachou ni omiyage o itadakimashita.", meaning: "Saya menerima oleh-oleh dari direktur." },
          { japanese: "先生が本をくださいました。", romaji: "Sensei ga hon o kudasaimashita.", meaning: "Guru memberikan buku kepada saya." },
          { japanese: "私は犬にえさをやります。", romaji: "Watashi wa inu ni esa o yarimasu.", meaning: "Saya memberi makan anjing." }
        ]
      },
      {
        id: 4102,
        title: "~ていただきます / ~てくださいます",
        description: "Menyatakan penerimaan/pemberian 'tindakan'.",
        examples: [
          { japanese: "私は課長に手紙の間違いを直していただきました。", romaji: "Watashi wa kachou ni tegami no machigai o naoshite itadakimashita.", meaning: "Saya dibantu memperbaiki kesalahan surat oleh kepala bagian." },
          { japanese: "部長が駅まで送ってくださいました。", romaji: "Buchou ga eki made okutte kudasaimashita.", meaning: "Manajer mengantar saya sampai stasiun." }
        ]
      }
    ],
    choukai: [
      {
        id: 41001,
        type: "blind",
        audioText: "この辞書は、誕生日の時に、先生が私にくださったんです。とても役に立っています。",
        question: "Siapa yang memberikan kamus itu?",
        options: ["Teman", "Saya sendiri", "Guru", "Adik"],
        answer: 2,
        translation: "Kamus ini, diberikan oleh guru kepada saya saat ulang tahun."
      }
    ],
    dokkai: {
      title: "プレゼント",
      content: "昨日、先生の家へ遊びに行きました。先生はおいしいお茶をいれてくださいました。帰りには、きれいな花をいただきました。",
      questions: [
        {
          id: 410001,
          question: "Apa yang diterima penulis saat pulang?",
          options: ["Buku", "Teh enak", "Bunga cantik", "Uang"],
          answer: 2
        }
      ]
    }
  },
  {
    id: 42,
    title: "Bab 42 (~ために / Tujuan & Kegunaan)",
    vocabulary: [
      { character: "包みます", romaji: "tsutsumimasu", meaning: "membungkus" },
      { character: "沸かします", romaji: "wakashimasu", meaning: "mendidihkan" },
      { character: "混ぜます", romaji: "mazemasu", meaning: "mencampur" },
      { character: "計算します", romaji: "keisan shimasu", meaning: "menghitung (matematika)" },
      { character: "並びます", romaji: "narabimasu", meaning: "berbaris, antre" },
      { character: "丈夫な", romaji: "joubu na", meaning: "kuat, awet" },
      { character: "アパート", romaji: "apaato", meaning: "apartemen" },
      { character: "弁護士", romaji: "bengoshi", meaning: "pengacara" }
    ],
    grammar: [
      {
        id: 4201,
        title: "Verb Kamus / Noun の + ために (Tujuan Murni)",
        description: "Menyatakan tujuan/niat mutlak. Harus memakai kata kerja yang memiliki kehendak sadar (transitif/disengaja).",
        examples: [
          { japanese: "自分の店を持つために、貯金しています。", romaji: "Jibun no mise o motsu tame ni, chokin shite imasu.", meaning: "Saya menabung DEMI memiliki toko sendiri." },
          { japanese: "健康のために、毎日走っています。", romaji: "Kenkou no tame ni, mainichi hashitte imasu.", meaning: "Saya berlari setiap hari demi kesehatan." }
        ]
      },
      {
        id: 4202,
        title: "Verb Kamus / Noun + に + 使う/役に立つ/いい (Kegunaan)",
        description: "Digunakan untuk menyatakan bahwa sesuatu berguna untuk/digunakan untuk suatu tujuan.",
        examples: [
          { japanese: "このはさみは花を切るのに使います。", romaji: "Kono hasami wa hana o kiru no ni tsukaimasu.", meaning: "Gunting ini digunakan UNTUK memotong bunga." }
        ]
      }
    ],
    choukai: [
      {
        id: 42001,
        type: "blind",
        audioText: "将来、医者になるために、一生懸命勉強しています。",
        question: "Apa tujuan orang ini belajar sungguh-sungguh?",
        options: ["Demi menjadi pengacara", "Demi mendapat nilai bagus", "Demi menjadi dokter", "Demi uang"],
        answer: 2,
        translation: "Demi menjadi dokter di masa depan, saya belajar dengan sekuat tenaga."
      }
    ],
    dokkai: {
      title: "新しい道具",
      content: "これは新しいミキサーです。いろいろな野菜や果物を混ぜるのに使います。これがあれば、ジュースを作るのにとても便利です。",
      questions: [
        {
          id: 420001,
          question: "Apa fungsi mixer tersebut?",
          options: ["Mendidihkan air", "Memotong daging", "Mencampur sayur dan buah", "Menyimpan makanan"],
          answer: 2
        }
      ]
    }
  },
  {
    id: 43,
    title: "Bab 43 (~そうです / Kelihatan & ~て来ます)",
    vocabulary: [
      { character: "増えます", romaji: "fuemasu", meaning: "bertambah" },
      { character: "減ります", romaji: "herimasu", meaning: "berkurang" },
      { character: "上がります", romaji: "agarimasu", meaning: "naik, meningkat" },
      { character: "下がります", romaji: "sagarimasu", meaning: "turun, menurun" },
      { character: "切れます", romaji: "kiremasu", meaning: "putus (tali)" },
      { character: "とれます", romaji: "toremasu", meaning: "lepas (kancing)" },
      { character: "落ちます", romaji: "ochimasu", meaning: "jatuh (benda)" },
      { character: "なくなります", romaji: "nakunarimasu", meaning: "habis, hilang" }
    ],
    grammar: [
      {
        id: 4301,
        title: "Verb Masu (coret masu) / Adj (coret i/na) + そうです",
        description: "Menyatakan dugaan/prediksi visual (Kelihatannya). Perhatian: Untuk いい desu, menjadi よさそうです.",
        examples: [
          { japanese: "今にも雨が降りそうです。", romaji: "Ima ni mo ame ga furisou desu.", meaning: "Kelihatannya akan turun hujan sebentar lagi." },
          { japanese: "このケーキはとてもおいしそうです。", romaji: "Kono keeki wa totemo oishisou desu.", meaning: "Kue ini kelihatannya sangat lezat." }
        ]
      },
      {
        id: 4302,
        title: "Verb て + 来ます",
        description: "Pergi melakukan sebuah aksi di suatu tempat, lalu KEMBALI lagi ke tempat semula.",
        examples: [
          { japanese: "ちょっとたばこを買って来ます。", romaji: "Chotto tabako o katte kimasu.", meaning: "Saya pergi beli rokok sebentar (lalu kembali ke sini)." }
        ]
      }
    ],
    choukai: [
      {
        id: 43001,
        type: "blind",
        audioText: "あ、危ない！シャツのボタンがとれそうですよ。",
        question: "Apa yang diprediksi akan terjadi?",
        options: ["Hujan turun", "Tas jatuh", "Kancing kemeja lepas", "Celana robek"],
        answer: 2,
        translation: "Ah, bahaya! Kancing kemejanya kelihatannya mau lepas lho."
      }
    ],
    dokkai: {
      title: "外出の前に",
      content: "空が暗くなってきましたね。今にも雨が降りそうですから、傘を持って出かけたほうがいいですよ。私はちょっとコンビニへ行ってきます。",
      questions: [
        {
          id: 430001,
          question: "Mengapa penulis menyarankan membawa payung?",
          options: ["Karena cuaca panas", "Karena kelihatannya akan hujan", "Karena payung itu bagus", "Karena akan pergi ke kombini"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 44,
    title: "Bab 44 (~すぎます / Terlalu)",
    vocabulary: [
      { character: "泣きます", romaji: "nakimasu", meaning: "menangis" },
      { character: "笑います", romaji: "waraimasu", meaning: "tertawa" },
      { character: "乾きます", romaji: "kawakimasu", meaning: "mengering" },
      { character: "ぬれます", romaji: "nuremasu", meaning: "basah" },
      { character: "滑ります", romaji: "suberimasu", meaning: "terpeleset, meluncur" },
      { character: "起きます", romaji: "okimasu", meaning: "terjadi (kecelakaan)" },
      { character: "調節します", romaji: "chousetsu shimasu", meaning: "mengatur, menyesuaikan" },
      { character: "安全な", romaji: "anzen na", meaning: "aman" }
    ],
    grammar: [
      {
        id: 4401,
        title: "Verb Masu (coret masu) / Adj (coret i/na) + すぎます",
        description: "Menyatakan sesuatu yang berlebihan (Terlalu ~). Biasanya berkonotasi negatif/tidak diinginkan.",
        examples: [
          { japanese: "昨日の夜はお酒を飲みすぎました。", romaji: "Kinou no yoru wa osake o nomisugimashita.", meaning: "Tadi malam saya terlalu banyak minum alkohol." },
          { japanese: "この問題は複雑すぎます。", romaji: "Kono mondai wa fukuzatsu sugimasu.", meaning: "Masalah ini terlalu rumit." }
        ]
      },
      {
        id: 4402,
        title: "Verb Masu (coret masu) + やすいです / にくいです",
        description: "Menyatakan bahwa suatu tindakan itu mudah (やすい) atau sulit (にくい) dilakukan.",
        examples: [
          { japanese: "この薬は甘くて飲みやすいです。", romaji: "Kono kusuri wa amakute nomiyasui desu.", meaning: "Obat ini manis dan mudah diminum." },
          { japanese: "このグラスは割れにくいです。", romaji: "Kono gurasu wa warenikui desu.", meaning: "Gelas ini sulit pecah." }
        ]
      }
    ],
    choukai: [
      {
        id: 44001,
        type: "blind",
        audioText: "この靴はとても軽くて、歩きやすいです。でも、少し大きすぎます。",
        question: "Apa keluhan tentang sepatu tersebut?",
        options: ["Terlalu berat", "Sulit dipakai jalan", "Terlalu besar", "Harganya mahal"],
        answer: 2,
        translation: "Sepatu ini sangat ringan dan mudah dipakai berjalan. Tetapi, sedikit terlalu besar."
      }
    ],
    dokkai: {
      title: "パソコンの選び方",
      content: "パソコンを買う時は、使いやすくて軽いものにするといいですよ。重すぎるパソコンは持ち運びにくくて不便ですから。",
      questions: [
        {
          id: 440001,
          question: "Apa alasan tidak menyarankan laptop yang terlalu berat?",
          options: ["Mudah rusak", "Sulit dibawa-bawa", "Baterainya boros", "Harganya mahal"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 45,
    title: "Bab 45 (~場合は / ~のに)",
    vocabulary: [
      { character: "信じます", romaji: "shinjimasu", meaning: "percaya" },
      { character: "キャンセルします", romaji: "kyanseru shimasu", meaning: "membatalkan" },
      { character: "知らせます", romaji: "shirasemasu", meaning: "memberitahukan" },
      { character: "保証書", romaji: "hoshousho", meaning: "kartu garansi" },
      { character: "領収書", romaji: "ryoushuusho", meaning: "tanda terima, kuitansi" },
      { character: "キャンプ", romaji: "kyanpu", meaning: "berkemah" },
      { character: "中止", romaji: "chuushi", meaning: "pembatalan, penundaan" },
      { character: "急に", romaji: "kyuu ni", meaning: "tiba-tiba" }
    ],
    grammar: [
      {
        id: 4501,
        title: "Bentuk Biasa + 場合は (Dalam kasus / Apabila)",
        description: "Menyebutkan hipotesis/pengandaian untuk situasi khusus (biasanya keadaan darurat atau petunjuk).",
        examples: [
          { japanese: "火事の場合は、エレベーターを使わないでください。", romaji: "Kaji no baai wa, erebeetaa o tsukawanaide kudasai.", meaning: "Dalam kasus kebakaran, tolong jangan menggunakan lift." },
          { japanese: "遅れる場合は、電話してください。", romaji: "Okureru baai wa, denwa shite kudasai.", meaning: "Apabila terlambat, tolong telepon." }
        ]
      },
      {
        id: 4502,
        title: "Bentuk Biasa + のに (Padahal / Walaupun)",
        description: "Menunjukkan pertentangan/kontras antara fakta dan hasil yang diharapkan, sering disertai perasaan terkejut atau tidak puas.",
        examples: [
          { japanese: "薬を飲んだのに、まだ熱が下がりません。", romaji: "Kusuri o nonda noni, mada netsu ga sagarimasen.", meaning: "Padahal sudah minum obat, tapi demamnya belum turun." }
        ]
      }
    ],
    choukai: [
      {
        id: 45001,
        type: "blind",
        audioText: "カードをなくした場合は、すぐ会社に知らせてください。",
        question: "Apa yang harus dilakukan jika kartu hilang?",
        options: ["Menangis", "Beli baru", "Segera beritahu perusahaan", "Lapor polisi"],
        answer: 2,
        translation: "Apabila (dalam kasus) kehilangan kartu, tolong segera beritahu perusahaan."
      }
    ],
    dokkai: {
      title: "残念な結果",
      content: "毎日遅くまで一生懸命勉強したのに、試験に合格しませんでした。本当にがっかりしました。次回はもっと頑張るつもりです。",
      questions: [
        {
          id: 450001,
          question: "Mengapa penulis merasa kecewa?",
          options: ["Karena malas", "Karena tidak lulus ujian padahal sudah rajin belajar", "Karena ujian dibatalkan", "Karena salah jadwal ujian"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 46,
    title: "Bab 46 (~ところです / Waktu Terjadinya Aksi)",
    vocabulary: [
      { character: "渡します", romaji: "watashimasu", meaning: "menyerahkan" },
      { character: "帰って来ます", romaji: "kaette kimasu", meaning: "pulang kembali" },
      { character: "出ます", romaji: "demasu", meaning: "berangkat, keluar (bus)" },
      { character: "届きます", romaji: "todokimasu", meaning: "sampai (barang)" },
      { character: "入学します", romaji: "nyuugaku shimasu", meaning: "masuk universitas" },
      { character: "卒業します", romaji: "sotsugyou shimasu", meaning: "lulus universitas" },
      { character: "焼きます", romaji: "yakimasu", meaning: "memanggang, membakar" },
      { character: "留守", romaji: "rusu", meaning: "sedang tidak ada di rumah" }
    ],
    grammar: [
      {
        id: 4601,
        title: "~ところです (Waktu Pelaksanaan Aksi)",
        description: "Verb Kamus + ところです = Baru AKAN (segera) dimulai.\nVerb ている + ところです = SEDANG berlangsung.\nVerb Ta + ところです = BARU SAJA selesai (waktu sangat dekat).",
        examples: [
          { japanese: "これから会議が始まるところです。", romaji: "Korekara kaigi ga hajimaru tokoro desu.", meaning: "Rapatnya baru saja AKAN dimulai." },
          { japanese: "今、資料をコピーしているところです。", romaji: "Ima, shiryou o kopii shite iru tokoro desu.", meaning: "Sekarang SEDANG proses memfotokopi dokumen." },
          { japanese: "たった今バスが出たところです。", romaji: "Tatta ima basu ga deta tokoro desu.", meaning: "Busnya BARU SAJA berangkat." }
        ]
      },
      {
        id: 4602,
        title: "Bentuk Biasa + はずです (Pasti / Seharusnya)",
        description: "Kesimpulan/keyakinan kuat pembicara berdasarkan logika yang objektif.",
        examples: [
          { japanese: "彼は10年も日本に住んでいたから、日本語が上手なはずです。", romaji: "Kare wa juu-nen mo Nihon ni sunde ita kara, Nihongo ga jouzu na hazu desu.", meaning: "Karena dia tinggal di Jepang selama 10 tahun, dia PASTI/SEHARUSNYA pintar bahasa Jepang." }
        ]
      }
    ],
    choukai: [
      {
        id: 46001,
        type: "blind",
        audioText: "A: もうレポートを書きましたか。 B: いいえ、今書いているところです。",
        question: "Apa status laporan B?",
        options: ["Sudah selesai", "Sedang ditulis", "Belum dimulai sama sekali", "Tidak tahu"],
        answer: 1,
        translation: "A: Apakah sudah menulis laporan? B: Belum, sekarang sedang ditulis."
      }
    ],
    dokkai: {
      title: "荷物の配達",
      content: "荷物はもう届きましたか。今日の午後2時に送ったので、明日の朝には届くはずですよ。もし届かなかったら、連絡してください。",
      questions: [
        {
          id: 460001,
          question: "Kapan barang tersebut diprediksi/diyakini akan sampai?",
          options: ["Hari ini jam 2 siang", "Besok pagi", "Lusa", "Tidak jelas"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 47,
    title: "Bab 47 (~そうです / Katanya & ~ようです)",
    vocabulary: [
      { character: "集まります", romaji: "atsumarimasu", meaning: "berkumpul" },
      { character: "別れます", romaji: "wakaremasu", meaning: "berpisah" },
      { character: "長生きします", romaji: "nagaiki shimasu", meaning: "berumur panjang" },
      { character: "します", romaji: "shimasu", meaning: "ada terasa/tercium (bau/suara)" },
      { character: "さします", romaji: "sashimasu", meaning: "memakai payung" },
      { character: "ひどい", romaji: "hidoi", meaning: "parah, kejam" },
      { character: "怖い", romaji: "kowai", meaning: "menakutkan" },
      { character: "天気予報", romaji: "tenki yohou", meaning: "prakiraan cuaca" }
    ],
    grammar: [
      {
        id: 4701,
        title: "Bentuk Biasa + そうです (Rumor / Katanya)",
        description: "Menyampaikan informasi persis seperti yang didengar dari sumber lain tanpa menambah pendapat pribadi. Berbeda dengan ~そう(kelihatannya) yang membuang akhiran masu/i.",
        examples: [
          { japanese: "天気予報によると、明日は寒くなるそうです。", romaji: "Tenki yohou ni yoru to, ashita wa samuku naru sou desu.", meaning: "Menurut prakiraan cuaca, besok (katanya) akan menjadi dingin." },
          { japanese: "山田さんは会社を辞めるそうです。", romaji: "Yamada san wa kaisha o yameru sou desu.", meaning: "Katanya Pak Yamada akan berhenti dari perusahaan." }
        ]
      },
      {
        id: 4702,
        title: "Bentuk Biasa + ようです (Sepertinya)",
        description: "Dugaan/kesimpulan yang ditarik oleh pembicara berdasarkan panca indera (melihat keadaan, mendengar suara, dsb).",
        examples: [
          { japanese: "変な音がしますね。隣の部屋で誰かけんかしているようです。", romaji: "Hen na oto ga shimasu ne. Tonari no heya de dareka kenka shite iru you desu.", meaning: "Terdengar suara aneh ya. Sepertinya ada yang sedang bertengkar di kamar sebelah." }
        ]
      }
    ],
    choukai: [
      {
        id: 47001,
        type: "blind",
        audioText: "新聞によると、日本の人口はだんだん減っているそうです。",
        question: "Apa berita yang ditulis di koran?",
        options: ["Penduduk Jepang makin banyak", "Penduduk Jepang makin berkurang", "Koran Jepang mahal", "Cuaca di Jepang dingin"],
        answer: 1,
        translation: "Menurut koran, penduduk Jepang katanya semakin lama semakin berkurang."
      }
    ],
    dokkai: {
      title: "いい匂い",
      content: "台所からいい匂いがしますね。母が私の好きなカレーを作っているようです。早く食べたいです。",
      questions: [
        {
          id: 470001,
          question: "Kesimpulan apa yang ditarik penulis dari bau harum tersebut?",
          options: ["Ada yang membakar sampah", "Ibunya sepertinya sedang membuat kari", "Ibunya beli makanan luar", "Ada kebocoran gas"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 48,
    title: "Bab 48 (Bentuk Kausatif / Shiekikei)",
    vocabulary: [
      { character: "降ろします", romaji: "oroshimasu", meaning: "menurunkan (penumpang)" },
      { character: "届けます", romaji: "todokemasu", meaning: "mengantarkan" },
      { character: "世話をします", romaji: "sewa o shimasu", meaning: "mengurus, merawat" },
      { character: "録音します", romaji: "rokuon shimasu", meaning: "merekam suara" },
      { character: "嫌な", romaji: "iya na", meaning: "tidak suka, menjengkelkan" },
      { character: "塾", romaji: "juku", meaning: "bimbingan belajar" },
      { character: "生徒", romaji: "seito", meaning: "murid" },
      { character: "ファイル", romaji: "fairu", meaning: "file" }
    ],
    grammar: [
      {
        id: 4801,
        title: "Bentuk Kausatif (Shiekikei)",
        description: "Menyuruh/membiarkan seseorang melakukan sesuatu. Gol I: u -> a+seru (行く -> 行かせる). Gol II: ru -> saseru (食べる -> 食べさせる).",
        examples: [
          { japanese: "先生は学生に漢字を書かせました。", romaji: "Sensei wa gakusei ni kanji o kakasemashita.", meaning: "Guru menyuruh siswa menulis kanji." },
          { japanese: "母は子供を遊ばせました。", romaji: "Haha wa kodomo o asobasemashita.", meaning: "Ibu membiarkan anaknya bermain. (Intransitif pakai を)" }
        ]
      },
      {
        id: 4802,
        title: "Kausatif + ていただけませんか",
        description: "Meminta izin yang sangat sopan agar kitalah yang dibiarkan/diperbolehkan melakukan aksi.",
        examples: [
          { japanese: "気分が悪いので、早く帰らせていただけませんか。", romaji: "Kibun ga warui node, hayaku kaerasete itadakemasen ka.", meaning: "Karena saya merasa kurang sehat, bolehkah saya (diizinkan) pulang lebih awal?" }
        ]
      }
    ],
    choukai: [
      {
        id: 48001,
        type: "blind",
        audioText: "課長、すみませんが、明日は子供の入学式なので、休ませていただけませんか。",
        question: "Apa tujuan orang berbicara kepada kepala bagian?",
        options: ["Menyuruh kepala bagian libur", "Meminta izin libur besok", "Mengundang ke upacara", "Mengajukan pengunduran diri"],
        answer: 1,
        translation: "Kepala bagian, maaf, karena besok ada upacara masuk sekolah anak saya, bolehkah saya izin libur?"
      }
    ],
    dokkai: {
      title: "子供の教育",
      content: "日本には子供を塾に通わせる親が多いです。でも、私は子供が好きなことを自由にやらせるほうがいいと思います。",
      questions: [
        {
          id: 480001,
          question: "Bagaimana pendapat penulis tentang pendidikan anak?",
          options: ["Harus dikirim ke tempat les", "Harus tegas", "Lebih baik membiarkan anak bebas melakukan hal yang ia suka", "Anak tidak usah sekolah"],
          answer: 2
        }
      ]
    }
  },
  {
    id: 49,
    title: "Bab 49 (Keigo: Sonkeigo / Bahasa Hormat)",
    vocabulary: [
      { character: "いらっしゃいます", romaji: "irasshaimasu", meaning: "hormat untuk: pergi, datang, ada" },
      { character: "召し上がります", romaji: "meshiagarimasu", meaning: "hormat untuk: makan, minum" },
      { character: "おっしゃいます", romaji: "osshaimasu", meaning: "hormat untuk: berkata" },
      { character: "なさいます", romaji: "nasaimasu", meaning: "hormat untuk: melakukan" },
      { character: "ご覧になります", romaji: "goran ni narimasu", meaning: "hormat untuk: melihat" },
      { character: "ご存じです", romaji: "gozonji desu", meaning: "hormat untuk: mengetahui" },
      { character: "挨拶", romaji: "aisatsu", meaning: "salam" },
      { character: "灰皿", romaji: "haizara", meaning: "asbak" }
    ],
    grammar: [
      {
        id: 4901,
        title: "Kata Kerja Khusus Sonkeigo",
        description: "Bahasa hormat khusus untuk memuliakan tindakan atasan/tamu. Jangan pakai ini untuk tindakan diri sendiri.",
        examples: [
          { japanese: "社長はもう帰られました。（お帰りになりました）", romaji: "Shachou wa mou kaeraremashita. (O-kaeri ni narimashita).", meaning: "Presiden direktur sudah pulang." },
          { japanese: "先生は何を召し上がりますか。", romaji: "Sensei wa nani o meshiagarimasu ka.", meaning: "Guru akan makan/minum apa?" }
        ]
      },
      {
        id: 4902,
        title: "お + Verb Masu (coret) + になります",
        description: "Rumus umum untuk membuat kata kerja biasa menjadi bentuk hormat.",
        examples: [
          { japanese: "いつお帰りになりますか。", romaji: "Itsu okaeri ni narimasu ka.", meaning: "Kapan Anda akan pulang?" }
        ]
      }
    ],
    choukai: [
      {
        id: 49001,
        type: "blind",
        audioText: "部長は今会議室にいらっしゃいます。3時には戻られるはずです。",
        question: "Di mana manajer sekarang?",
        options: ["Sudah pulang", "Di ruang rapat", "Pergi dinas", "Toilet"],
        answer: 1,
        translation: "Manajer sekarang ada di ruang rapat. Jam 3 seharusnya beliau akan kembali."
      }
    ],
    dokkai: {
      title: "お客様への対応",
      content: "お客様がいらっしゃったら、まず「いらっしゃいませ」と明るく挨拶をしてください。そして、何をお探しなのか、丁寧に聞いてください。",
      questions: [
        {
          id: 490001,
          question: "Apa yang pertama kali dilakukan saat tamu datang?",
          options: ["Menyajikan kopi", "Berteriak", "Mengucapkan salam dengan ceria", "Membiarkan tamu"],
          answer: 2
        }
      ]
    }
  },
  {
    id: 50,
    title: "Bab 50 (Keigo: Kenjougo / Merendahkan Diri)",
    vocabulary: [
      { character: "参ります", romaji: "mairimasu", meaning: "rendah hati untuk: pergi, datang" },
      { character: "おります", romaji: "orimasu", meaning: "rendah hati untuk: ada (iru)" },
      { character: "いただきます", romaji: "itadakimasu", meaning: "rendah hati untuk: makan, minum, menerima" },
      { character: "申します", romaji: "moushimasu", meaning: "rendah hati untuk: bernama, berkata" },
      { character: "いたします", romaji: "itashimasu", meaning: "rendah hati untuk: melakukan" },
      { character: "拝見します", romaji: "haiken shimasu", meaning: "rendah hati untuk: melihat" },
      { character: "存じます", romaji: "zonjimasu", meaning: "rendah hati untuk: tahu" },
      { character: "お目にかかります", romaji: "ome ni kakarimasu", meaning: "rendah hati untuk: bertemu" }
    ],
    grammar: [
      {
        id: 5001,
        title: "Kata Kerja Khusus Kenjougo",
        description: "Bahasa merendahkan diri yang digunakan untuk membicarakan tindakan KITA (pembicara/pihak pembicara) di depan orang yang dihormati.",
        examples: [
          { japanese: "私はマイクと申します。", romaji: "Watashi wa Maiku to moushimasu.", meaning: "Nama saya (hamba bernama) Mike." },
          { japanese: "明日、先生のお宅へ参ります。", romaji: "Ashita, sensei no otaku e mairimasu.", meaning: "Besok saya akan pergi ke rumah guru." }
        ]
      },
      {
        id: 5002,
        title: "お + Verb Masu (coret) + します",
        description: "Rumus umum untuk merendahkan tindakan kita demi membantu pihak lain.",
        examples: [
          { japanese: "私が荷物をお持ちします。", romaji: "Watashi ga nimotsu o omochi shimasu.", meaning: "Biar saya yang membawa barang bawaannya." }
        ]
      }
    ],
    choukai: [
      {
        id: 50001,
        type: "blind",
        audioText: "来月、アメリカから参りましたスミスと申します。どうぞよろしくお願いいたします。",
        question: "Dari mana asal orang tersebut?",
        options: ["Jepang", "Amerika", "Inggris", "Tidak disebut"],
        answer: 1,
        translation: "Saya Smith, yang bulan lalu datang dari Amerika. Mohon bimbingannya."
      }
    ],
    dokkai: {
      title: "ご挨拶のメール",
      content: "先生、ご無沙汰しております。来週の火曜日に先生の大学へ伺いたいのですが、ご都合はいかがでしょうか。先生にお目にかかれるのを楽しみにしております。",
      questions: [
        {
          id: 500001,
          question: "Apa tujuan penulis email ini?",
          options: ["Ingin ujian ulang", "Ingin bertemu dan berkunjung ke universitas guru", "Ingin meminjam uang", "Ingin liburan"],
          answer: 1
        }
      ]
    }
  }
];

// Update mnn.json data directly for chapters 36-50
for (let chapter of accurateChapters) {
  let index = mnnData.findIndex(d => d.id === chapter.id);
  if (index !== -1) {
    mnnData[index] = chapter; // Overwrite placeholder
  } else {
    mnnData.push(chapter);
  }
}

fs.writeFileSync(mnnFile, JSON.stringify(mnnData, null, 2));
console.log('Successfully injected accurate data for chapters 36-50!');
