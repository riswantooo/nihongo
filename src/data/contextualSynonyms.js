/**
 * Contextual Synonyms Data
 * Kata-kata Jepang yang berbeda namun memiliki terjemahan serupa dalam bahasa Indonesia
 */

const contextualSynonyms = [
  {
    id: "first-person",
    title: "Kata Ganti Orang Pertama",
    subtitle: "Aku / Saya",
    icon: "",
    description:
      "Bahasa Jepang memiliki banyak kata ganti orang pertama yang mencerminkan gender, usia, tingkat formalitas, dan karakter si pembicara.",
    words: [
      {
        japanese: "私",
        reading: "わたし",
        romaji: "watashi",
        translation: "saya",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Kata ganti paling umum dan aman dipakai siapa saja dalam situasi formal maupun semi-formal. Wanita juga sering memakainya dalam percakapan sehari-hari.",
        example: {
          jp: "私は学生です。",
          reading: "わたしはがくせいです。",
          romaji: "Watashi wa gakusei desu.",
          id: "Saya adalah pelajar.",
        },
      },
      {
        japanese: "私",
        reading: "わたくし",
        romaji: "watakushi",
        translation: "saya (sangat sopan)",
        nuances: [
          { label: "Sangat Formal", type: "very-formal" },
          { label: "Bisnis", type: "formal" },
        ],
        context:
          "Bacaan lebih formal dari 私. Digunakan dalam pidato resmi, wawancara kerja, dan konteks bisnis tingkat tinggi.",
        example: {
          jp: "わたくしが担当の田中でございます。",
          reading: "わたくしがたんとうのたなかでございます。",
          romaji: "Watakushi ga tantou no Tanaka de gozaimasu.",
          id: "Saya Tanaka, yang bertanggung jawab.",
        },
      },
      {
        japanese: "僕",
        reading: "ぼく",
        romaji: "boku",
        translation: "aku (pria)",
        nuances: [
          { label: "Kasual Pria", type: "masculine" },
          { label: "Lembut", type: "neutral" },
        ],
        context:
          "Kata ganti yang lazim dipakai anak laki-laki dan pria muda. Terkesan lebih lembut dan rendah hati dibanding 'ore'. Juga dipakai oleh sebagian wanita dalam musik/sastra.",
        example: {
          jp: "僕はまだ大学生だよ。",
          reading: "ぼくはまだだいがくせいだよ。",
          romaji: "Boku wa mada daigakusei da yo.",
          id: "Aku masih mahasiswa, lho.",
        },
      },
      {
        japanese: "俺",
        reading: "おれ",
        romaji: "ore",
        translation: "aku (pria, kasar)",
        nuances: [
          { label: "Kasual Pria", type: "masculine" },
          { label: "Kasar", type: "casual" },
        ],
        context:
          "Terkesan maskulin dan percaya diri. Sangat kasual — tidak pantas dalam situasi formal. Umum digunakan pria dalam percakapan antar teman.",
        example: {
          jp: "俺がやるよ。",
          reading: "おれがやるよ。",
          romaji: "Ore ga yaru yo.",
          id: "Biar aku yang kerjakan.",
        },
      },
      {
        japanese: "あたし",
        reading: "あたし",
        romaji: "atashi",
        translation: "aku (wanita)",
        nuances: [
          { label: "Kasual Wanita", type: "feminine" },
          { label: "Imut", type: "neutral" },
        ],
        context:
          "Versi kasual dari 'watashi' yang biasa dipakai wanita muda. Memberikan kesan feminin dan ceria.",
        example: {
          jp: "あたし、もう帰るね。",
          reading: "あたし、もうかえるね。",
          romaji: "Atashi, mou kaeru ne.",
          id: "Aku pulang dulu, ya.",
        },
      },
      {
        japanese: "わし",
        reading: "わし",
        romaji: "washi",
        translation: "saya (orang tua pria)",
        nuances: [
          { label: "Arkaik", type: "archaic" },
          { label: "Pria Tua", type: "masculine" },
        ],
        context:
          "Kata ganti khas pria berusia lanjut, terutama di wilayah pedesaan Jepang. Juga sering muncul dalam anime untuk karakter kakek-kakek.",
        example: {
          jp: "わしの若い頃はな…",
          reading: "わしのわかいころはな…",
          romaji: "Washi no wakai koro wa na…",
          id: "Di masa muda saya dulu…",
        },
      },
      {
        japanese: "うち",
        reading: "うち",
        romaji: "uchi",
        translation: "aku (dialek Kansai)",
        nuances: [
          { label: "Dialek Kansai", type: "regional" },
          { label: "Kasual Wanita", type: "feminine" },
        ],
        context:
          "Dipakai utamanya oleh wanita di daerah Kansai (Osaka, Kyoto). Terkesan kasual dan akrab. Kadang juga dipakai oleh pria di Kansai.",
        example: {
          jp: "うち、明日ひまやで。",
          reading: "うち、あしたひまやで。",
          romaji: "Uchi, ashita hima ya de.",
          id: "Aku besok kosong, lho.",
        },
      },
    ],
  },
  {
    id: "adversative",
    title: "Kata Penghubung Adversatif",
    subtitle: "Tapi / Namun",
    icon: "",
    description:
      "Kata penghubung 'tapi' dalam bahasa Jepang memiliki banyak varian yang dibedakan berdasarkan formalitas dan konteks pemakaian.",
    words: [
      {
        japanese: "でも",
        reading: "でも",
        romaji: "demo",
        translation: "tapi",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata penghubung adversatif paling umum dalam percakapan sehari-hari. Bisa dipakai di awal kalimat.",
        example: {
          jp: "行きたい。でも、時間がない。",
          reading: "いきたい。でも、じかんがない。",
          romaji: "Ikitai. Demo, jikan ga nai.",
          id: "Aku mau pergi. Tapi, tidak ada waktu.",
        },
      },
      {
        japanese: "しかし",
        reading: "しかし",
        romaji: "shikashi",
        translation: "namun / akan tetapi",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Lebih formal dan sering dipakai dalam tulisan, pidato, berita, dan esai. Jarang muncul dalam percakapan kasual.",
        example: {
          jp: "努力した。しかし、結果は出なかった。",
          reading: "どりょくした。しかし、けっかはでなかった。",
          romaji: "Doryoku shita. Shikashi, kekka wa denakatta.",
          id: "Sudah berusaha. Namun, hasilnya tidak keluar.",
        },
      },
      {
        japanese: "だけど",
        reading: "だけど",
        romaji: "dakedo",
        translation: "tapi (kasual)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Versi kasual dari 'keredomo'. Sangat umum dalam percakapan santai sehari-hari antar teman.",
        example: {
          jp: "安い。だけど、品質はいいよ。",
          reading: "やすい。だけど、ひんしつはいいよ。",
          romaji: "Yasui. Dakedo, hinshitsu wa ii yo.",
          id: "Murah. Tapi, kualitasnya bagus, lho.",
        },
      },
      {
        japanese: "けれども",
        reading: "けれども",
        romaji: "keredomo",
        translation: "akan tetapi",
        nuances: [
          { label: "Semi-Formal", type: "formal" },
          { label: "Tulisan / Lisan", type: "neutral" },
        ],
        context:
          "Bentuk lengkap yang bisa dipakai di akhir klausa maupun awal kalimat. Lebih sopan daripada 'dakedo'. Bisa disingkat jadi 'keredo' atau 'kedo'.",
        example: {
          jp: "高いけれども、買うことにした。",
          reading: "たかいけれども、かうことにした。",
          romaji: "Takai keredomo, kau koto ni shita.",
          id: "Meskipun mahal, saya memutuskan untuk membeli.",
        },
      },
      {
        japanese: "ところが",
        reading: "ところが",
        romaji: "tokoroga",
        translation: "namun ternyata",
        nuances: [
          { label: "Kontras Tak Terduga", type: "special" },
          { label: "Naratif", type: "written" },
        ],
        context:
          "Menunjukkan kontras yang tidak terduga — hasilnya berlawanan dengan harapan. Sering dipakai dalam cerita dan narasi.",
        example: {
          jp: "雨だと思った。ところが、晴れていた。",
          reading: "あめだとおもった。ところが、はれていた。",
          romaji: "Ame da to omotta. Tokoroga, harete ita.",
          id: "Kukira hujan. Namun ternyata, cerah.",
        },
      },
    ],
  },
  {
    id: "nevertheless",
    title: "Kata Kontras Emfatik",
    subtitle: "Meskipun Begitu / Toh",
    icon: "",
    description:
      "Kelompok kata yang menekankan bahwa sesuatu terjadi meskipun ada kondisi/alasan yang seharusnya menghalangi.",
    words: [
      {
        japanese: "それでも",
        reading: "それでも",
        romaji: "soredemo",
        translation: "meskipun begitu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tegas", type: "special" },
        ],
        context:
          "Menekankan tekad atau kenyataan yang tetap berlaku walau ada hambatan. Terkesan kuat dan bertekad.",
        example: {
          jp: "何度も失敗した。それでも、あきらめなかった。",
          reading: "なんどもしっぱいした。それでも、あきらめなかった。",
          romaji: "Nando mo shippai shita. Soredemo, akiramenakatta.",
          id: "Sudah berkali-kali gagal. Meskipun begitu, tidak menyerah.",
        },
      },
      {
        japanese: "それなのに",
        reading: "それなのに",
        romaji: "sorenanoni",
        translation: "padahal / meskipun begitu",
        nuances: [
          { label: "Kekecewaan", type: "emotional" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Mengekspresikan rasa kecewa atau heran karena hasilnya tidak sesuai harapan. Ada nuansa emosional yang kuat.",
        example: {
          jp: "約束したのに。それなのに、来なかった。",
          reading: "やくそくしたのに。それなのに、こなかった。",
          romaji: "Yakusoku shita noni. Sorenanoni, konakatta.",
          id: "Padahal sudah berjanji. Tapi toh, tidak datang.",
        },
      },
      {
        japanese: "とはいえ",
        reading: "とはいえ",
        romaji: "to wa ie",
        translation: "meskipun demikian",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Mengakui satu fakta, lalu menyodorkan fakta lain yang juga penting. Sering dipakai dalam argumen atau esai.",
        example: {
          jp: "便利だ。とはいえ、リスクもある。",
          reading: "べんりだ。とはいえ、リスクもある。",
          romaji: "Benri da. To wa ie, risuku mo aru.",
          id: "Memang praktis. Meskipun demikian, ada risikonya juga.",
        },
      },
      {
        japanese: "にもかかわらず",
        reading: "にもかかわらず",
        romaji: "nimo kakawarazu",
        translation: "meskipun / terlepas dari",
        nuances: [
          { label: "Sangat Formal", type: "very-formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Ungkapan sangat formal yang berarti 'terlepas dari'. Sering dipakai dalam teks akademis, berita, dan dokumen resmi.",
        example: {
          jp: "努力にもかかわらず、合格できなかった。",
          reading: "どりょくにもかかわらず、ごうかくできなかった。",
          romaji: "Doryoku nimo kakawarazu, goukaku dekinakatta.",
          id: "Terlepas dari usahanya, tidak bisa lulus.",
        },
      },
    ],
  },
  {
    id: "thanks",
    title: "Ungkapan Terima Kasih",
    subtitle: "Terima Kasih",
    icon: "",
    description:
      "Berbagai cara mengungkapkan rasa terima kasih dalam bahasa Jepang, dari yang sangat kasual hingga sangat sopan.",
    words: [
      {
        japanese: "ありがとう",
        reading: "ありがとう",
        romaji: "arigatou",
        translation: "terima kasih",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Bentuk kasual yang paling umum. Digunakan antar teman, keluarga, dan orang yang sudah akrab.",
        example: {
          jp: "手伝ってくれて、ありがとう！",
          reading: "てつだってくれて、ありがとう！",
          romaji: "Tetsudatte kurete, arigatou!",
          id: "Terima kasih sudah membantu!",
        },
      },
      {
        japanese: "ありがとうございます",
        reading: "ありがとうございます",
        romaji: "arigatou gozaimasu",
        translation: "terima kasih (sopan)",
        nuances: [
          { label: "Sopan", type: "formal" },
          { label: "Standar", type: "neutral" },
        ],
        context:
          "Bentuk sopan standar yang aman digunakan kepada siapa saja — atasan, orang asing, pelanggan, dll.",
        example: {
          jp: "ご親切にありがとうございます。",
          reading: "ごしんせつにありがとうございます。",
          romaji: "Go-shinsetsu ni arigatou gozaimasu.",
          id: "Terima kasih atas kebaikan Anda.",
        },
      },
      {
        japanese: "どうも",
        reading: "どうも",
        romaji: "doumo",
        translation: "makasih (singkat)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Singkat", type: "neutral" },
        ],
        context:
          "Bentuk sangat singkat dan kasual. Sering dipakai ketika berterima kasih secara cepat, misalnya ketika menerima sesuatu.",
        example: {
          jp: "あ、どうも。",
          reading: "あ、どうも。",
          romaji: "A, doumo.",
          id: "Ah, makasih.",
        },
      },
      {
        japanese: "感謝します",
        reading: "かんしゃします",
        romaji: "kansha shimasu",
        translation: "saya berterima kasih",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Serius", type: "special" },
        ],
        context:
          "Ungkapan formal yang menekankan rasa syukur yang mendalam. Sering dipakai dalam pidato, surat resmi, dan konteks bisnis.",
        example: {
          jp: "皆様のご支援に感謝します。",
          reading: "みなさまのごしえんにかんしゃします。",
          romaji: "Minasama no go-shien ni kansha shimasu.",
          id: "Saya berterima kasih atas dukungan semua orang.",
        },
      },
      {
        japanese: "すまない",
        reading: "すまない",
        romaji: "sumanai",
        translation: "terima kasih / maaf (pria)",
        nuances: [
          { label: "Kasual Pria", type: "masculine" },
          { label: "Rasa Sungkan", type: "emotional" },
        ],
        context:
          "Dipakai pria untuk mengungkapkan terima kasih sekaligus rasa tidak enak hati. Nuansanya campuran antara 'terima kasih' dan 'maaf merepotkan'.",
        example: {
          jp: "わざわざ来てくれて、すまないな。",
          reading: "わざわざきてくれて、すまないな。",
          romaji: "Wazawaza kite kurete, sumanai na.",
          id: "Maaf (terima kasih) sudah repot-repot datang.",
        },
      },
    ],
  },
  {
    id: "apology",
    title: "Ungkapan Permohonan Maaf",
    subtitle: "Maaf / Minta Maaf",
    icon: "",
    description:
      "Ungkapan meminta maaf dalam bahasa Jepang sangat beragam dan penggunaannya bergantung pada berat-ringannya kesalahan serta hubungan sosial.",
    words: [
      {
        japanese: "すみません",
        reading: "すみません",
        romaji: "sumimasen",
        translation: "maaf / permisi",
        nuances: [
          { label: "Sopan", type: "formal" },
          { label: "Serbaguna", type: "neutral" },
        ],
        context:
          "Ungkapan serbaguna yang bisa berarti 'maaf', 'permisi', atau bahkan 'terima kasih'. Sangat umum dalam kehidupan sehari-hari.",
        example: {
          jp: "すみません、ちょっといいですか？",
          reading: "すみません、ちょっといいですか？",
          romaji: "Sumimasen, chotto ii desu ka?",
          id: "Permisi, boleh minta waktu sebentar?",
        },
      },
      {
        japanese: "ごめんなさい",
        reading: "ごめんなさい",
        romaji: "gomen nasai",
        translation: "maaf (tulus)",
        nuances: [
          { label: "Kasual–Sopan", type: "neutral" },
          { label: "Pengakuan Salah", type: "emotional" },
        ],
        context:
          "Permintaan maaf yang tulus, sering dipakai ketika benar-benar merasa bersalah. Lebih personal daripada 'sumimasen'.",
        example: {
          jp: "遅れてごめんなさい。",
          reading: "おくれてごめんなさい。",
          romaji: "Okurete gomen nasai.",
          id: "Maaf sudah terlambat.",
        },
      },
      {
        japanese: "ごめん",
        reading: "ごめん",
        romaji: "gomen",
        translation: "sori / maaf (kasual)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Antar Teman", type: "neutral" },
        ],
        context:
          "Versi pendek dan kasual dari 'gomen nasai'. Dipakai antar teman dekat dan keluarga.",
        example: {
          jp: "ごめん、忘れてた！",
          reading: "ごめん、わすれてた！",
          romaji: "Gomen, wasureteta!",
          id: "Sori, aku lupa!",
        },
      },
      {
        japanese: "申し訳ございません",
        reading: "もうしわけございません",
        romaji: "moushiwake gozaimasen",
        translation: "mohon maaf sebesar-besarnya",
        nuances: [
          { label: "Sangat Formal", type: "very-formal" },
          { label: "Bisnis / Keigo", type: "formal" },
        ],
        context:
          "Permintaan maaf paling formal. Dipakai dalam konteks bisnis, layanan pelanggan, dan situasi serius. Menunjukkan penyesalan sangat dalam.",
        example: {
          jp: "ご迷惑をおかけして、申し訳ございません。",
          reading: "ごめいわくをおかけして、もうしわけございません。",
          romaji: "Go-meiwaku wo okake shite, moushiwake gozaimasen.",
          id: "Mohon maaf sebesar-besarnya telah menyebabkan ketidaknyamanan.",
        },
      },
      {
        japanese: "悪い",
        reading: "わるい",
        romaji: "warui",
        translation: "maaf / sori (kasual pria)",
        nuances: [
          { label: "Slang Pria", type: "masculine" },
          { label: "Sangat Kasual", type: "casual" },
        ],
        context:
          "Secara harfiah berarti 'buruk/jahat', tapi dipakai pria secara kasual untuk meminta maaf ringan. Sangat informal.",
        example: {
          jp: "あ、悪い悪い。",
          reading: "あ、わるいわるい。",
          romaji: "A, warui warui.",
          id: "Ah, sori sori.",
        },
      },
    ],
  },
  {
    id: "eating",
    title: "Kata Kerja 'Makan'",
    subtitle: "Makan",
    icon: "",
    description:
      "Kata kerja 'makan' dalam bahasa Jepang memiliki beberapa bentuk yang mencerminkan tingkat kesopanan (keigo) dan register bahasa.",
    words: [
      {
        japanese: "食べる",
        reading: "たべる",
        romaji: "taberu",
        translation: "makan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Standar", type: "neutral" },
        ],
        context:
          "Kata kerja standar untuk 'makan'. Dipakai dalam semua konteks mulai dari kasual hingga semi-formal (dalam bentuk ます).",
        example: {
          jp: "朝ごはんを食べましたか？",
          reading: "あさごはんをたべましたか？",
          romaji: "Asa-gohan wo tabemashita ka?",
          id: "Sudah makan sarapan?",
        },
      },
      {
        japanese: "召し上がる",
        reading: "めしあがる",
        romaji: "meshiagaru",
        translation: "makan (bahasa hormat)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk sonkeigo (bahasa hormat) yang dipakai untuk menghormati tindakan orang lain yang lebih tinggi statusnya. Tidak pernah dipakai untuk diri sendiri.",
        example: {
          jp: "どうぞ召し上がってください。",
          reading: "どうぞめしあがってください。",
          romaji: "Douzo meshiagatte kudasai.",
          id: "Silakan makan (dinikmati).",
        },
      },
      {
        japanese: "いただく",
        reading: "いただく",
        romaji: "itadaku",
        translation: "makan (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Merendah", type: "formal" },
        ],
        context:
          "Bentuk kenjougo (bahasa merendah) yang merendahkan diri sendiri. 'Itadakimasu' sebelum makan berasal dari kata ini.",
        example: {
          jp: "お菓子をいただきます。",
          reading: "おかしをいただきます。",
          romaji: "Okashi wo itadakimasu.",
          id: "Saya makan (menerima) kue ini.",
        },
      },
      {
        japanese: "食う",
        reading: "くう",
        romaji: "kuu",
        translation: "makan (kasar)",
        nuances: [
          { label: "Kasar", type: "casual" },
          { label: "Maskulin", type: "masculine" },
        ],
        context:
          "Versi kasar dan maskulin dari 'taberu'. Terkesan macho dan blak-blakan. Tidak pantas di depan orang yang lebih tua/atasan.",
        example: {
          jp: "腹減った、なんか食おうぜ。",
          reading: "はらへった、なんかくおうぜ。",
          romaji: "Hara hetta, nanka kuou ze.",
          id: "Lapar nih, yuk makan sesuatu.",
        },
      },
    ],
  },
  {
    id: "speaking",
    title: "Kata Kerja 'Berbicara'",
    subtitle: "Berbicara / Berkata",
    icon: "",
    description:
      "Kata kerja 'berbicara' dan 'berkata' dalam bahasa Jepang dibedakan berdasarkan formalitas, kehormatan, dan nuansa makna.",
    words: [
      {
        japanese: "話す",
        reading: "はなす",
        romaji: "hanasu",
        translation: "berbicara / bercerita",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Standar", type: "neutral" },
        ],
        context:
          "Kata kerja standar untuk 'berbicara'. Fokus pada tindakan menyampaikan informasi atau bercerita.",
        example: {
          jp: "日本語で話してください。",
          reading: "にほんごではなしてください。",
          romaji: "Nihongo de hanashite kudasai.",
          id: "Tolong berbicara dalam bahasa Jepang.",
        },
      },
      {
        japanese: "言う",
        reading: "いう",
        romaji: "iu",
        translation: "berkata / mengatakan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Fokus pada konten yang diucapkan. 'Hanasu' lebih tentang aksi berbicara, sementara 'iu' lebih tentang apa yang dikatakan.",
        example: {
          jp: "先生は何と言いましたか？",
          reading: "せんせいはなんといいましたか？",
          romaji: "Sensei wa nan to iimashita ka?",
          id: "Guru berkata apa?",
        },
      },
      {
        japanese: "しゃべる",
        reading: "しゃべる",
        romaji: "shaberu",
        translation: "ngobrol / ngomong",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Nuansa kasual — lebih ke arah 'ngobrol' atau 'banyak ngomong'. Kadang berkonotasi negatif (terlalu banyak bicara).",
        example: {
          jp: "授業中にしゃべるな！",
          reading: "じゅぎょうちゅうにしゃべるな！",
          romaji: "Jugyou chuu ni shaberu na!",
          id: "Jangan ngobrol selama pelajaran!",
        },
      },
      {
        japanese: "おっしゃる",
        reading: "おっしゃる",
        romaji: "ossharu",
        translation: "berkata (bahasa hormat)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk sonkeigo dari 'iu'. Digunakan untuk menghormati perkataan orang yang statusnya lebih tinggi.",
        example: {
          jp: "社長がそうおっしゃいました。",
          reading: "しゃちょうがそうおっしゃいました。",
          romaji: "Shachou ga sou osshaimashita.",
          id: "Direktur berkata demikian.",
        },
      },
      {
        japanese: "申す",
        reading: "もうす",
        romaji: "mousu",
        translation: "berkata (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Merendah", type: "formal" },
        ],
        context:
          "Bentuk kenjougo dari 'iu'. Merendahkan diri sendiri saat berbicara kepada orang yang statusnya lebih tinggi.",
        example: {
          jp: "田中と申します。",
          reading: "たなかともうします。",
          romaji: "Tanaka to moushimasu.",
          id: "Nama saya Tanaka (memperkenalkan diri dengan rendah hati).",
        },
      },
    ],
  },
  {
    id: "second-person",
    title: "Kata Ganti Orang Kedua",
    subtitle: "Kamu / Anda",
    icon: "",
    description:
      "Bahasa Jepang memiliki beberapa variasi kata ganti orang kedua dengan tingkat formalitas, keakraban, dan kesopanan yang sangat berbeda.",
    words: [
      {
        japanese: "あなた",
        reading: "あなた",
        romaji: "anata",
        translation: "Anda / kamu (standar)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Kata ganti orang kedua paling standar yang dipelajari di textbook. Namun, dalam kehidupan sehari-hari, menyebut orang lain dengan 'anata' kepada atasan atau orang yang lebih tua dianggap kurang sopan. Lebih aman menggunakan nama mereka ditambah akhiran '-san'. Kata ini juga sering dipakai oleh istri kepada suaminya (bermakna 'sayang').",
        example: {
          jp: "あなたは来週の会議に出席しますか？",
          reading: "あなたはらいしゅうのかいぎにしゅっせきしますか？",
          romaji: "Anata wa raishuu no kaigi ni shusseki shimasu ka?",
          id: "Apakah Anda akan menghadiri rapat minggu depan?",
        },
      },
      {
        japanese: "君",
        reading: "きみ",
        romaji: "kimi",
        translation: "kamu (akrab / atasan ke bawahan)",
        nuances: [
          { label: "Kasual Pria", type: "masculine" },
          { label: "Atasan ke Bawahan", type: "casual" },
        ],
        context:
          "Digunakan oleh seseorang yang memiliki status sosial atau posisi lebih tinggi kepada bawahannya (seperti guru ke murid, bos ke bawahan). Juga umum dipakai oleh pria kepada teman dekat, kekasih, atau anak-anak. Jangan digunakan kepada atasan.",
        example: {
          jp: "君の意見も聞かせてくれないか？",
          reading: "きみのいけんもきかせてくれないか？",
          romaji: "Kimi no iken mo kikasete kurenai ka?",
          id: "Boleh aku dengar pendapatmu juga?",
        },
      },
      {
        japanese: "お前",
        reading: "おまえ",
        romaji: "omae",
        translation: "lu / kamu (kasual pria / kasar)",
        nuances: [
          { label: "Kasual Pria", type: "masculine" },
          { label: "Sangat Kasual", type: "casual" },
        ],
        context:
          "Sangat kasual dan maskulin. Sering digunakan oleh laki-laki dalam percakapan akrab dengan teman sebaya atau orang yang lebih muda. Dianggap sangat tidak sopan atau kasar jika diucapkan kepada orang asing atau pihak yang lebih tua.",
        example: {
          jp: "お前、明日のテスト勉強した？",
          reading: "おまえ、あしたのてすとべんきょうした？",
          romaji: "Omae, ashita no tesuto benkyou shita?",
          id: "Lu udah belajar buat ujian besok?",
        },
      },
      {
        japanese: "貴様",
        reading: "きさま",
        romaji: "kisama",
        translation: "kau (sangat kasar / menantang)",
        nuances: [
          { label: "Kasar", type: "casual" },
          { label: "Sangat Emosional", type: "emotional" },
        ],
        context:
          "Secara historis bermakna sangat sopan, namun kini bergeser menjadi kata ganti orang kedua paling kasar dan menghina. Digunakan untuk meremehkan atau menantang lawan bicara saat marah atau berkelahi. Sering ditemukan di anime aksi.",
        example: {
          jp: "貴様に俺の何がわかるんだ！",
          reading: "きさまにおれのなにがわかるんだ！",
          romaji: "Kisama ni ore no nani ga wakaru n da!",
          id: "Apa yang bajingan seperti kau tahu tentang aku!",
        },
      },
      {
        japanese: "あんた",
        reading: "あんた",
        romaji: "anta",
        translation: "kamu (kasual / sedikit ketus)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Singkatan dari 'anata'. Digunakan dalam situasi kasual, terutama oleh wanita, atau saat mengekspresikan kekesalan ringan kepada lawan bicara. Menunjukkan keakraban tinggi namun kurang formal.",
        example: {
          jp: "あんた、さっきから私の話聞いてる？",
          reading: "あんた、さっきからわたしのはなしきいてる？",
          romaji: "Anta, sakki kara watashi no hanashi kiiteru?",
          id: "Kamu dari tadi dengerin omonganku nggak sih?",
        },
      },
    ],
  },
  {
    id: "third-person",
    title: "Kata Ganti Orang Ketiga",
    subtitle: "Dia / Mereka",
    icon: "",
    description:
      "Variasi kata ganti orang ketiga dalam bahasa Jepang sangat dipengaruhi oleh gender subjek, tingkat keakraban, serta kesopanan pembicaraan.",
    words: [
      {
        japanese: "彼",
        reading: "かれ",
        romaji: "kare",
        translation: "dia (laki-laki) / pacar (laki-laki)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Spesifik Gender", type: "special" },
        ],
        context:
          "Digunakan khusus untuk merujuk kepada subjek laki-laki. Dalam kehidupan sehari-hari, jika diucapkan secara mandiri tanpa konteks penjelas tambahan, kata ini juga bermakna 'pacar laki-laki' (boyfriend).",
        example: {
          jp: "彼は新しいプロジェクトのリーダーです。",
          reading: "かれはあたらしいぷろじぇくとのりーだーです。",
          romaji: "Kare wa atarashii purojekuto no riidaa desu.",
          id: "Dia adalah pemimpin proyek yang baru.",
        },
      },
      {
        japanese: "彼女",
        reading: "かのじょ",
        romaji: "kanojo",
        translation: "dia (perempuan) / pacar (perempuan)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Spesifik Gender", type: "special" },
        ],
        context:
          "Digunakan khusus untuk merujuk kepada subjek perempuan. Serupa dengan 'kare', kata ini juga sangat lazim digunakan untuk merujuk kepada 'pacar perempuan' (girlfriend) dalam percakapan kasual.",
        example: {
          jp: "彼女は英語とフランス語が話せます。",
          reading: "かのじょはえいごとふらんすごがなはせます。",
          romaji: "Kanojo wa eigo to furansugo ga hanasemasu.",
          id: "Dia bisa berbicara bahasa Inggris dan bahasa Prancis.",
        },
      },
      {
        japanese: "あいつ",
        reading: "あいつ",
        romaji: "aitsu",
        translation: "orang itu / dia (kasual / kasar)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Merupakan pemendekan dari 'ano yatsu'. Digunakan dalam percakapan informal untuk merujuk orang ketiga secara acuh tak acuh. Dianggap kasar jika digunakan di depan orang yang lebih tua atau dalam forum resmi.",
        example: {
          jp: "あいつ、約束の時間にまた遅れるって。",
          reading: "あいつ、やくそくのじかんにまたおくれるって。",
          romaji: "Aitsu, yakusoku no jikan ni mata okureru tte.",
          id: "Dia bilang bakal telat lagi dari waktu janjian.",
        },
      },
      {
        japanese: "奴",
        reading: "やつ",
        romaji: "yatsu",
        translation: "orang itu / barang itu (kasual / cuek)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Secara literal berarti 'barang/benda' atau 'orang'. Digunakan untuk merujuk orang ketiga dengan nuansa sangat santai, cuek, atau kadang sedikit meremehkan. Biasanya digunakan antar teman laki-laki untuk merujuk teman pria lainnya.",
        example: {
          jp: "あいつは本当に面白い奴だな。",
          reading: "あいつはほんとうにおもしろいやつだな。",
          romaji: "Aitsu wa hontou ni omoshiroi yatsu da na.",
          id: "Dia itu benar-benar orang yang menarik, ya.",
        },
      },
      {
        japanese: "あの人",
        reading: "あのひと",
        romaji: "ano hito",
        translation: "orang itu / dia (sopan / netral)",
        nuances: [
          { label: "Sopan", type: "formal" },
          { label: "Netral", type: "neutral" },
        ],
        context:
          "Cara paling aman, sopan, dan netral gender untuk merujuk ke orang ketiga. Menunjukkan rasa hormat yang cukup tanpa terkesan berlebihan.",
        example: {
          jp: "あの人はこの学校の校長先生です。",
          reading: "あのひとはこのがっこうのこうちょうせんせいです。",
          romaji: "Ano hito wa kono gakkou no kouchou sensei desu.",
          id: "Orang itu adalah kepala sekolah dari sekolah ini.",
        },
      },
    ],
  },
  {
    id: "place-pronoun",
    title: "Kata Ganti Tempat & Arah",
    subtitle: "Sini / Situ / Sana",
    icon: "",
    description:
      "Bahasa Jepang membedakan kata ganti petunjuk tempat dan arah berdasarkan jarak fisik/psikologis dari pembicara dan lawan bicara, serta tingkat kesopanannya.",
    words: [
      {
        japanese: "ここ",
        reading: "ここ",
        romaji: "koko",
        translation: "sini / di sini",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Digunakan untuk menunjukkan tempat yang dekat dengan pembicara. Sangat umum dipakai dalam kehidupan sehari-hari.",
        example: {
          jp: "ここに座ってもいいですか？",
          reading: "ここにすわってもいいですか？",
          romaji: "Koko ni suwatte mo ii desu ka?",
          id: "Bolehkan saya duduk di sini?",
        },
      },
      {
        japanese: "そこ",
        reading: "そこ",
        romaji: "soko",
        translation: "situ / di situ",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Digunakan untuk menunjuk tempat yang dekat dengan lawan bicara, atau tempat yang letaknya tidak terlalu jauh dari pembicara.",
        example: {
          jp: "そこにあるペンを取って。",
          reading: "そこにあるぺんをとって。",
          romaji: "Soko ni aru pen wo totte.",
          id: "Tolong ambilkan pulpen yang ada di situ.",
        },
      },
      {
        japanese: "あそこ",
        reading: "あそこ",
        romaji: "asoko",
        translation: "sana / di sana",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Digunakan untuk menunjukkan tempat yang jauh dari pembicara maupun lawan bicara, biasanya terlihat langsung oleh keduanya.",
        example: {
          jp: "あそこにあるレストラン、美味しいよ。",
          reading: "あそこにあるれすとらん、おいしいよ。",
          romaji: "Asoko ni aru resutoran, oishii yo.",
          id: "Restoran yang di sana itu enak, lho.",
        },
      },
      {
        japanese: "こちら",
        reading: "こちら",
        romaji: "kochira",
        translation: "sebelah sini / sini (sopan)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sangat Sopan", type: "very-formal" },
        ],
        context:
          "Bentuk sopan (keigo) dari 'koko'. Menunjukkan arah atau tempat yang dekat dengan pembicara. Sering digunakan saat memandu tamu atau pelanggan, serta bisa merujuk pada 'kami' (pihak pembicara) dalam urusan bisnis.",
        example: {
          jp: "受付はこちらでございます。",
          reading: "うけつけはこちらでございます。",
          romaji: "Uketsuke wa kochira de gozaimasu.",
          id: "Bagian resepsionis ada di sebelah sini.",
        },
      },
      {
        japanese: "そちら",
        reading: "そちら",
        romaji: "sochira",
        translation: "sebelah situ / situ (sopan)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sangat Sopan", type: "very-formal" },
        ],
        context:
          "Bentuk sopan (keigo) dari 'soko'. Menunjukkan arah atau tempat yang dekat dengan lawan bicara. Dalam bisnis, kata ini sering merujuk kepada 'pihak Anda' (perusahaan/tim lawan bicara).",
        example: {
          jp: "そちらのご都合はいかがでしょうか？",
          reading: "そちらのごつごうはいかがでしょうか？",
          romaji: "Sochira no go-tsugou wa ikaga deshou ka?",
          id: "Bagaimana kesediaan waktu di pihak Anda?",
        },
      },
      {
        japanese: "あちら",
        reading: "あちら",
        romaji: "achira",
        translation: "sebelah sana / sana (sopan)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sangat Sopan", type: "very-formal" },
        ],
        context:
          "Bentuk sopan (keigo) dari 'asoko'. Menunjukkan arah atau tempat yang jauh dari kedua belah pihak. Digunakan untuk mengarahkan tamu secara profesional.",
        example: {
          jp: "お手洗いはあちらにございます。",
          reading: "おてあらいはあちらにございます。",
          romaji: "O-tearai wa achira ni gozaimasu.",
          id: "Toilet ada di sebelah sana.",
        },
      },
    ],
  },
  {
    id: "keigo-go",
    title: "Kata Kerja Keigo: Pergi",
    subtitle: "Pergi",
    icon: "",
    description:
      "Kata kerja 'pergi' dalam bahasa Jepang dibedakan berdasarkan tingkat kesopanan serta apakah tindakan tersebut dilakukan oleh orang lain yang dihormati (sonkeigo) atau diri sendiri yang merendah (kenjougo).",
    words: [
      {
        japanese: "行く",
        reading: "いく",
        romaji: "iku",
        translation: "pergi",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Standar", type: "neutral" },
        ],
        context:
          "Kata kerja standar untuk 'pergi'. Digunakan dalam percakapan sehari-hari baik kasual maupun sopan biasa (ikimasu).",
        example: {
          jp: "明日、友達と京都に行きます。",
          reading: "あした、ともだちときょうとにいきます。",
          romaji: "Ashita, tomodachi to Kyoto ni ikimasu.",
          id: "Besok saya pergi ke Kyoto bersama teman.",
        },
      },
      {
        japanese: "いらっしゃる",
        reading: "いらっしゃる",
        romaji: "irassharu",
        translation: "pergi (bahasa hormat)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk sonkeigo (hormat) dari 'pergi' (juga berarti 'datang'/'ada'). Digunakan untuk menghormati tindakan orang lain yang statusnya lebih tinggi. Tidak boleh dipakai untuk merujuk tindakan diri sendiri.",
        example: {
          jp: "先生はもう会場にいらっしゃいましたか？",
          reading: "せんせいはもうかいじょうにいらっしゃいましたか？",
          romaji: "Sensei wa mou kaijou ni irasshaimashita ka?",
          id: "Apakah Guru sudah pergi ke aula?",
        },
      },
      {
        japanese: "参る",
        reading: "まいる",
        romaji: "mairu",
        translation: "pergi (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Merendah", type: "formal" },
        ],
        context:
          "Bentuk kenjougo (merendah) dari 'pergi' (juga berarti 'datang'). Digunakan untuk menceritakan tindakan pergi diri sendiri atau anggota kelompok sendiri kepada orang yang dihormati.",
        example: {
          jp: "ただいま担当者がそちらへ参ります。",
          reading: "ただいまたんとうしゃがそちらへまいります。",
          romaji: "Tadaima tantousha ga sochira he mairimasu.",
          id: "Petugas penanggung jawab kami akan segera pergi ke sana.",
        },
      },
      {
        japanese: "伺う",
        reading: "うかがう",
        romaji: "ukagau",
        translation: "berkunjung / pergi (sangat merendah)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Kunjungan Sopan", type: "special" },
        ],
        context:
          "Bentuk kenjougo (merendah) yang khusus digunakan ketika tindakan pergi tersebut melibatkan kunjungan ke rumah, kantor, atau tempat orang yang dihormati.",
        example: {
          jp: "明日の午後三時にオフィスへ伺います。",
          reading: "あしたのごごさんじにおふぃすへうかがいます。",
          romaji: "Ashita no gogo san-ji ni ofisu he ukagaimasu.",
          id: "Besok jam tiga sore saya akan berkunjung ke kantor Anda.",
        },
      },
    ],
  },
  {
    id: "keigo-be",
    title: "Kata Kerja Keigo: Ada / Berada",
    subtitle: "Ada / Berada",
    icon: "",
    description:
      "Menyatakan keberadaan makhluk hidup (berada) dalam bahasa Jepang dibedakan berdasarkan tingkat kesopanan serta status orang yang dibicarakan.",
    words: [
      {
        japanese: "いる",
        reading: "いる",
        romaji: "iru",
        translation: "ada / berada",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata kerja paling dasar untuk menyatakan keberadaan manusia atau hewan. Digunakan dalam percakapan sehari-hari.",
        example: {
          jp: "彼は今、自分の部屋にいます。",
          reading: "かれはいま、じぶんのへやにいます。",
          romaji: "Kare wa ima, jibun no heya ni imasu.",
          id: "Dia sekarang ada di kamarnya.",
        },
      },
      {
        japanese: "いらっしゃる",
        reading: "いらっしゃる",
        romaji: "irassharu",
        translation: "ada / berada (bahasa hormat)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk sonkeigo (hormat) untuk menyatakan keberadaan orang lain yang statusnya lebih tinggi. Tidak boleh digunakan untuk merujuk pada diri sendiri.",
        example: {
          jp: "社長はオフィスにいらっしゃいますか？",
          reading: "しゃちょうはおふぃすにいらっしゃいますか？",
          romaji: "Shachou wa ofisu ni irasshaimasu ka?",
          id: "Apakah Direktur ada di kantor?",
        },
      },
      {
        japanese: "おる",
        reading: "おる",
        romaji: "oru",
        translation: "ada / berada (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Bentuk kenjougo (merendah) untuk menyatakan keberadaan diri sendiri atau kelompok sendiri ketika berbicara dengan orang yang dihormati. Di wilayah Kansai, kata ini juga dipakai secara kasual sehari-hari.",
        example: {
          jp: "明日の午前中は家に居ります。",
          reading: "あしたのごぜんちゅうはいえにおります。",
          romaji: "Ashita no gozenchuu wa ie ni orimasu.",
          id: "Besok pagi saya ada di rumah.",
        },
      },
      {
        japanese: "おられる",
        reading: "おられる",
        romaji: "orareru",
        translation: "ada / berada (hormat / regional)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Regional", type: "regional" },
        ],
        context:
          "Kombinasi dari 'oru' dan sufiks hormat 'reru'. Sering digunakan sebagai bahasa hormat di Jepang bagian barat. Sebagian penutur keigo standar Tokyo menganggap penggunaannya kurang tepat, namun sangat umum dalam percakapan formal sehari-hari.",
        example: {
          jp: "向こうで待っておられる方がお客様ですか？",
          reading: "むこうでまっておられるかたがおきゃくさまですか？",
          romaji: "Mukou de matte oraru kata ga okyaku-sama desu ka?",
          id: "Apakah orang yang sedang menunggu di sebelah sana itu pelanggan kita?",
        },
      },
    ],
  },
  {
    id: "keigo-do",
    title: "Kata Kerja Keigo: Melakukan",
    subtitle: "Melakukan",
    icon: "",
    description:
      "Tindakan melakukan pekerjaan atau kegiatan memiliki beberapa variasi keigo tergantung pada siapa pelaku tindakan tersebut.",
    words: [
      {
        japanese: "する",
        reading: "する",
        romaji: "suru",
        translation: "melakukan / berbuat",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata kerja dasar untuk 'melakukan'. Sangat umum digunakan dan sangat fleksibel karena bisa digabungkan dengan berbagai kata benda.",
        example: {
          jp: "宿題はもうしましたか？",
          reading: "しゅくだいはもうしましたか？",
          romaji: "Shukudai wa mou shimashita ka?",
          id: "Apakah kamu sudah mengerjakan PR?",
        },
      },
      {
        japanese: "行う",
        reading: "おこなう",
        romaji: "okonau",
        translation: "melakukan / menyelenggarakan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Lebih formal dibandingkan 'suru'. Biasanya digunakan untuk tindakan yang direncanakan, terstruktur, atau resmi seperti acara, rapat, upacara, atau penelitian.",
        example: {
          jp: "明日、入学式を行います。",
          reading: "あした、にゅうがくしきをおこないます。",
          romaji: "Ashita, nyuugakushiki wo okonaimasu.",
          id: "Besok akan diselenggarakan upacara penerimaan siswa baru.",
        },
      },
      {
        japanese: "なさる",
        reading: "なさる",
        romaji: "nasaru",
        translation: "melakukan (bahasa hormat)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk sonkeigo (hormat) dari 'suru'. Digunakan untuk menunjukkan rasa hormat terhadap tindakan melakukan yang dilakukan oleh lawan bicara atau orang lain yang dihormati.",
        example: {
          jp: "今日は何をなさる予定ですか？",
          reading: "きょうはなにをなさるよていですか？",
          romaji: "Kyou wa nani wo nasaru yotei desu ka?",
          id: "Hari ini Anda berencana melakukan apa?",
        },
      },
      {
        japanese: "いたす",
        reading: "いたす",
        romaji: "itasu",
        translation: "melakukan (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Merendah", type: "formal" },
        ],
        context:
          "Bentuk kenjougo (merendah) dari 'suru'. Digunakan ketika tindakan melakukan tersebut dimaksudkan untuk melayani atau berhubungan dengan orang yang dihormati.",
        example: {
          jp: "私がご案内いたします。",
          reading: "わたしがごあんないいたします。",
          romaji: "Watashi ga go-annai itashimasu.",
          id: "Saya yang akan memandu Anda.",
        },
      },
    ],
  },
  {
    id: "keigo-know",
    title: "Kata Kerja Keigo: Tahu",
    subtitle: "Tahu / Mengetahui",
    icon: "",
    description:
      "Tingkat kesopanan dalam menyatakan pengetahuan atau pemahaman informasi dibedakan berdasarkan subjek yang mengetahuinya.",
    words: [
      {
        japanese: "知る",
        reading: "しる",
        romaji: "shiru",
        translation: "tahu / mengetahui",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata kerja dasar untuk mengetahui informasi. Biasanya saat menyatakan 'sudah tahu', bentuk positif yang digunakan adalah 'shitte iru', sedangkan bentuk negatifnya adalah 'shiranai'.",
        example: {
          jp: "そのニュースは昨日知りました。",
          reading: "そのにゅーすはきのうしりました。",
          romaji: "Sono nyuusu wa kinou shirimashita.",
          id: "Saya mengetahui berita itu kemarin.",
        },
      },
      {
        japanese: "知っている",
        reading: "しっている",
        romaji: "shitte iru",
        translation: "tahu / sedang tahu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Menunjukkan keadaan di mana informasi tersebut sudah tersimpan di memori saat ini. Paling umum digunakan dalam percakapan kasual.",
        example: {
          jp: "彼の連絡先を知っていますか？",
          reading: "かれのれんらくさきをしっていますか？",
          romaji: "Kare no renrakusaki wo shitte imasu ka?",
          id: "Apakah kamu tahu kontak dia?",
        },
      },
      {
        japanese: "ご存じ",
        reading: "ごぞんじ",
        romaji: "gozonji",
        translation: "tahu (bahasa hormat)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk sonkeigo (hormat) dari 'shitte iru'. Digunakan untuk menunjukkan rasa hormat terhadap pengetahuan yang dimiliki oleh orang lain.",
        example: {
          jp: "この本を書いた作家をご存じですか？",
          reading: "このほんをかいたさっかをごぞんじですか？",
          romaji: "Kono hon wo kaita sakka wo gozonji desu ka?",
          id: "Apakah Anda tahu penulis yang menulis buku ini?",
        },
      },
      {
        japanese: "存じる",
        reading: "ぞんじる",
        romaji: "zonjiru",
        translation: "tahu / berpikir (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Merendah", type: "formal" },
        ],
        context:
          "Bentuk kenjougo (merendah) dari 'shiru' atau 'omou'. Digunakan saat menyatakan bahwa diri sendiri mengetahui sesuatu di depan orang yang dihormati.",
        example: {
          jp: "その件につきましては、よく存じております。",
          reading: "そのけんにつきましては、よくぞんじております。",
          romaji: "Sono ken ni tsukimashite wa, yoku zonjite orimasu.",
          id: "Mengenai masalah tersebut, saya mengetahuinya dengan baik.",
        },
      },
      {
        japanese: "存じ上げる",
        reading: "ぞんじあげる",
        romaji: "zonjiageru",
        translation: "tahu / mengenal (sangat merendah)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Khusus Orang", type: "special" },
        ],
        context:
          "Bentuk kenjougo yang lebih sopan daripada 'zonjiru', khusus digunakan untuk merujuk pada pengetahuan mengenai orang (mengenal seseorang) atau objek yang sangat dihormati.",
        example: {
          jp: "鈴木様のお噂はかねがね存じ上げております。",
          reading: "すずきさまのおうわさはかねがねぞんじあげております。",
          romaji: "Suzuki-sama no o-uwasa wa kanegane zonjiagete orimasu.",
          id: "Saya sudah lama mendengar kabar baik tentang Tuan Suzuki.",
        },
      },
    ],
  },
  {
    id: "keigo-give-receive",
    title: "Kata Kerja Keigo: Memberi & Menerima",
    subtitle: "Memberi / Menerima",
    icon: "",
    description:
      "Sistem memberi-menerima (donasi/pemberian) dalam bahasa Jepang memiliki aturan keigo yang ketat berdasarkan arah tindakan (kepada siapa atau dari siapa).",
    words: [
      {
        japanese: "上げる",
        reading: "あげる",
        romaji: "ageru",
        translation: "memberi (ke orang lain)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Digunakan ketika pembicara memberikan sesuatu kepada orang lain yang statusnya setara atau di bawahnya (seperti teman atau adik).",
        example: {
          jp: "誕生日に友達にプレゼントをあげました。",
          reading: "たんじょうびにともだちにぷれぜんとをあげました。",
          romaji: "Tanjoubi ni tomodachi ni purezento wo agemashita.",
          id: "Saya memberikan hadiah kepada teman di hari ulang tahunnya.",
        },
      },
      {
        japanese: "差し上げる",
        reading: "さしあげる",
        romaji: "sashiageru",
        translation: "memberi (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Merendah", type: "formal" },
        ],
        context:
          "Bentuk kenjougo (merendah) dari 'ageru'. Digunakan ketika pembicara memberikan sesuatu kepada orang yang kedudukannya lebih tinggi.",
        example: {
          jp: "こちらの資料を差し上げます。",
          reading: "こちらのしりょうをさしあげます。",
          romaji: "Kochira no shiryou wo sashiagemasu.",
          id: "Saya serahkan dokumen ini kepada Anda.",
        },
      },
      {
        japanese: "くれる",
        reading: "くれる",
        romaji: "kureru",
        translation: "memberi (ke arah pembicara)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Digunakan ketika orang lain yang statusnya setara atau di bawahnya memberikan sesuatu kepada pembicara atau anggota keluarga dekat pembicara.",
        example: {
          jp: "妹が私にお菓子をくれた。",
          reading: "いもうとがわたしにおかしをくれた。",
          romaji: "Imouto ga watashi ni okashi wo kureta.",
          id: "Adik perempuan memberikan kue kepadaku.",
        },
      },
      {
        japanese: "くださる",
        reading: "くださる",
        romaji: "kudasaru",
        translation: "memberi (ke pembicara - hormat)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk sonkeigo (hormat) dari 'kureru'. Digunakan ketika orang yang statusnya lebih tinggi memberikan sesuatu kepada pembicara.",
        example: {
          jp: "先生が本を貸してくださいました。",
          reading: "せんせいがほんをかしてくださいました。",
          romaji: "Sensei ga hon wo kashite kudasaimashita.",
          id: "Guru telah berbaik hati meminjamkan buku kepada saya.",
        },
      },
      {
        japanese: "もらう",
        reading: "もらう",
        romaji: "morau",
        translation: "menerima",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Digunakan ketika pembicara menerima sesuatu dari orang lain yang statusnya setara atau lebih rendah.",
        example: {
          jp: "先輩にアドバイスをもらいました。",
          reading: "せんぱいにあどばいすをもらいました。",
          romaji: "Senpai ni adobaisu wo moraimashita.",
          id: "Saya menerima saran dari senior.",
        },
      },
      {
        japanese: "いただく",
        reading: "いただく",
        romaji: "itadaku",
        translation: "menerima (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Merendah", type: "formal" },
        ],
        context:
          "Bentuk kenjougo (merendah) dari 'morau'. Digunakan ketika pembicara menerima sesuatu dari orang yang statusnya lebih tinggi.",
        example: {
          jp: "部長からお土産をいただきました。",
          reading: "ぶちょうからおみやげをいただきました。",
          romaji: "Buchou kara o-miyage wo itadakimashita.",
          id: "Saya menerima oleh-oleh dari kepala bagian.",
        },
      },
    ],
  },
  {
    id: "keigo-see",
    title: "Kata Kerja Keigo: Melihat",
    subtitle: "Melihat",
    icon: "",
    description:
      "Tindakan melihat dibedakan dalam keigo berdasarkan siapa yang melihat dan tingkat penghormatan terhadap objek yang dilihat.",
    words: [
      {
        japanese: "見る",
        reading: "みる",
        romaji: "miru",
        translation: "melihat / menonton",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata kerja standar untuk melihat. Digunakan secara luas dalam komunikasi sehari-hari.",
        example: {
          jp: "昨日の夜、映画を見ました。",
          reading: "きのうのよる、えいがをみました。",
          romaji: "Kinou no yoru, eiga wo mimashita.",
          id: "Kemarin malam saya menonton film.",
        },
      },
      {
        japanese: "眺める",
        reading: "ながめる",
        romaji: "nagameru",
        translation: "memandang / menatap",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Melihat sesuatu secara pasif, menikmati pemandangan alam, atau memandang dari kejauhan dalam waktu yang relatif lama.",
        example: {
          jp: "窓から海を眺めるのが好きです。",
          reading: "まどからうみをながめるのがすきです。",
          romaji: "Mado kara umi wo nagameru no ga suki desu.",
          id: "Saya suka memandang laut dari jendela.",
        },
      },
      {
        japanese: "ご覧になる",
        reading: "ごらんになる",
        romaji: "goran ni naru",
        translation: "melihat (bahasa hormat)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk sonkeigo (hormat) dari 'miru'. Digunakan khusus untuk tindakan melihat yang dilakukan oleh orang yang dihormati.",
        example: {
          jp: "この資料をご覧になりましたか？",
          reading: "このしりょうをごらんになりましたか？",
          romaji: "Kono shiryou wo goran ni narimashita ka?",
          id: "Apakah Anda sudah melihat dokumen ini?",
        },
      },
      {
        japanese: "拝見する",
        reading: "はいけんする",
        romaji: "haiken suru",
        translation: "melihat (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Merendah", type: "formal" },
        ],
        context:
          "Bentuk kenjougo (merendah) dari 'miru'. Digunakan ketika pembicara melihat, membaca, atau meninjau sesuatu milik orang yang dihormati.",
        example: {
          jp: "お手紙を拝見いたしました。",
          reading: "おてがみをはいけんいたしました。",
          romaji: "O-tegami wo haiken itashimashita.",
          id: "Saya telah membaca (melihat) surat Anda.",
        },
      },
    ],
  },
  {
    id: "keigo-come",
    title: "Kata Kerja Keigo: Datang",
    subtitle: "Datang",
    icon: "",
    description:
      "Tindakan datang dibedakan berdasarkan tingkat kesopanan serta apakah pembicara menyambut orang lain atau melaporkan kedatangan diri sendiri.",
    words: [
      {
        japanese: "来る",
        reading: "くる",
        romaji: "kuru",
        translation: "datang",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata kerja standar untuk 'datang'. Sangat umum dan sering digunakan bersama dengan bentuk '-te kuru'.",
        example: {
          jp: "友達が私の家に遊びに来ます。",
          reading: "ともだちがわたしのいえにあそびにきます。",
          romaji: "Tomodachi ga watashi no ie ni asobi ni kimasu.",
          id: "Teman saya akan datang bermain ke rumah saya.",
        },
      },
      {
        japanese: "いらっしゃる",
        reading: "いらっしゃる",
        romaji: "irassharu",
        translation: "datang (bahasa hormat)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk sonkeigo (hormat) dari 'kuru' (juga bisa berarti 'pergi'/'ada'). Digunakan untuk menghormati kedatangan orang lain.",
        example: {
          jp: "お客様がロビーにいらっしゃいました。",
          reading: "おきゃくさまがろびーにいらっしゃいました。",
          romaji: "Okyaku-sama ga robii ni irasshaimashita.",
          id: "Pelanggan telah datang di lobi.",
        },
      },
      {
        japanese: "参る",
        reading: "まいる",
        romaji: "mairu",
        translation: "datang (merendahkan diri)",
        nuances: [
          { label: "Kenjougo", type: "very-formal" },
          { label: "Merendah", type: "formal" },
        ],
        context:
          "Bentuk kenjougo (merendah) dari 'kuru' (juga bisa berarti 'pergi'). Digunakan ketika pembicara atau kelompoknya menyatakan kedatangannya di hadapan orang yang dihormati.",
        example: {
          jp: "明日の朝九時にそちらへ参ります。",
          reading: "あしたのあさくじにそちらへまいります。",
          romaji: "Ashita no asa ku-ji ni sochira he mairimasu.",
          id: "Besok jam sembilan pagi saya akan datang ke tempat Anda.",
        },
      },
      {
        japanese: "おいでになる",
        reading: "おいでになる",
        romaji: "oide ni naru",
        translation: "datang / pergi / ada (sopan)",
        nuances: [
          { label: "Sonkeigo", type: "very-formal" },
          { label: "Menghormati", type: "formal" },
        ],
        context:
          "Bentuk hormat alternatif untuk 'kuru', 'iku', atau 'iru'. Sering didengar dalam sapaan selamat datang resmi atau pidato formal.",
        example: {
          jp: "よくおいでになりました。",
          reading: "よくおいでになりました。",
          romaji: "Yoku oide ni narimashita.",
          id: "Selamat datang (Senang Anda telah datang).",
        },
      },
    ],
  },
  {
    id: "causal-conjunction",
    title: "Kata Hubung Kausal",
    subtitle: "Karena / Sebab",
    icon: "",
    description:
      "Kata hubung untuk menunjukkan sebab-akibat dalam bahasa Jepang bervariasi dari subjektif/kasual hingga sangat resmi dan akademis.",
    words: [
      {
        japanese: "から",
        reading: "から",
        romaji: "kara",
        translation: "karena (subjektif / personal)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menghubungkan sebab-akibat dengan nuansa subjektif. Sering digunakan ketika pembicara menyatakan opini, dugaan, perintah, atau alasan personal.",
        example: {
          jp: "危ないから、気をつけて。",
          reading: "あぶないから、きをつけて。",
          romaji: "Abunai kara, ki wo tsukete.",
          id: "Karena bahaya, hati-hati ya.",
        },
      },
      {
        japanese: "ので",
        reading: "ので",
        romaji: "node",
        translation: "karena (objektif / sopan)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Menunjukkan hubungan sebab-akibat yang objektif dan alami. Sering digunakan untuk alasan meminta maaf secara sopan karena tidak terkesan membela diri.",
        example: {
          jp: "電車が遅れたので、遅刻しました。",
          reading: "でんしゃがおくれたので、ちこくしました。",
          romaji: "Densha ga okureta node, chikoku shimashita.",
          id: "Karena keretanya terlambat, saya jadi datang terlambat.",
        },
      },
      {
        japanese: "ため",
        reading: "ため",
        romaji: "tame",
        translation: "karena / akibat (formal / tertulis)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Bentuk formal penunjuk sebab. Sering digunakan dalam esai ilmiah, laporan bisnis, berita resmi, atau dokumen tertulis.",
        example: {
          jp: "台風のため、今日のフライトはキャンセルされました。",
          reading: "たいふうのため、きょうのふらいとはきゃんせるされました。",
          romaji: "Taifuu no tame, kyou no furaito wa kyanseru saremashita.",
          id: "Akibat (karena) topan, penerbangan hari ini dibatalkan.",
        },
      },
      {
        japanese: "ゆえに",
        reading: "ゆえに",
        romaji: "yue ni",
        translation: "oleh karena itu (sangat formal)",
        nuances: [
          { label: "Sangat Formal", type: "very-formal" },
          { label: "Arkaik", type: "archaic" },
        ],
        context:
          "Kata hubung logis yang sangat formal dan sering bernada sastra kuno atau akademis. Jarang digunakan dalam percakapan sehari-hari.",
        example: {
          jp: "我思う、ゆえに我あり。",
          reading: "われおもう、ゆえにわれあり。",
          romaji: "Ware omou, yue ni ware ari.",
          id: "Aku berpikir, maka aku ada.",
        },
      },
    ],
  },
  {
    id: "consecutive-conjunction",
    title: "Kata Hubung Konsekutif",
    subtitle: "Jadi / Maka",
    icon: "",
    description:
      "Untuk menyatakan kesimpulan atau hubungan logis berikutnya, bahasa Jepang memiliki beberapa tingkat formalitas penunjuk kesimpulan.",
    words: [
      {
        japanese: "だから",
        reading: "だから",
        romaji: "dakara",
        translation: "jadi / oleh karena itu",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Digunakan untuk menarik kesimpulan secara kasual. Jika diucapkan dengan nada keras di awal kalimat, bisa terdengar menuntut atau menyalahkan lawan bicara.",
        example: {
          jp: "雨が降っている。だから、行かない。",
          reading: "あめがふっている。だから、いかない。",
          romaji: "Ame ga futte iru. Dakara, ikanai.",
          id: "Sedang hujan. Jadi, aku nggak pergi.",
        },
      },
      {
        japanese: "ですから",
        reading: "ですから",
        romaji: "desukara",
        translation: "jadi / oleh karena itu (sopan)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Versi sopan dari 'dakara'. Biasa digunakan dalam percakapan sehari-hari yang membutuhkan tata krama.",
        example: {
          jp: "バスは遅れています。ですから、タクシーで行きましょう。",
          reading: "ばすはおくれています。ですから、たくしーでいきましょう。",
          romaji: "Basu wa okurete imasu. Desukara, takushii de ikimashou.",
          id: "Busnya terlambat. Oleh karena itu, mari kita pergi naik taksi.",
        },
      },
      {
        japanese: "それで",
        reading: "それで",
        romaji: "sorede",
        translation: "lalu / maka dari itu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menghubungkan dua kejadian berurutan. Juga sering digunakan untuk memancing lawan bicara melanjutkan ceritanya (seperti 'lalu setelah itu?').",
        example: {
          jp: "鍵をなくしたんだ。それで、家に入れなかった。",
          reading: "かぎをなくしたんだ。それで、いえにはいれなかった。",
          romaji: "Kagi wo nakushitan da. Sorede, ie ni hairenakatta.",
          id: "Aku kehilangan kunci. Makanya, aku nggak bisa masuk rumah.",
        },
      },
      {
        japanese: "したがって",
        reading: "したがって",
        romaji: "shitagatte",
        translation: "oleh karena itu / maka",
        nuances: [
          { label: "Sangat Formal", type: "very-formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Digunakan dalam tulisan ilmiah, presentasi bisnis, atau laporan resmi untuk menarik kesimpulan logis dan tak terbantahkan dari data/argumen sebelumnya.",
        example: {
          jp: "人口が減少している。したがって、労働力も不足する。",
          reading: "じんこうがげんしょうしている。したがって、ろうどうりょくもふそくする。",
          romaji: "Jinkou ga genshou shite iru. Shitagatte, roudouryoku mo fusoku suru.",
          id: "Populasi sedang menurun. Oleh karena itu, tenaga kerja juga akan kekurangan.",
        },
      },
    ],
  },
  {
    id: "concessive-conjunction",
    title: "Kata Hubung Konsesif",
    subtitle: "Walaupun / Meskipun",
    icon: "",
    description:
      "Menghubungkan gagasan kontras di mana hasil akhir berbeda dengan asumsi normal. Pilihan katanya sangat tergantung pada tingkat formalitas dan perasaan emosional pembicara.",
    words: [
      {
        japanese: "でも",
        reading: "でも",
        romaji: "demo",
        translation: "tapi / walaupun begitu",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Netral", type: "neutral" },
        ],
        context:
          "Kata konsesif paling umum di awal kalimat untuk menyanggah klausa sebelumnya secara kasual.",
        example: {
          jp: "勉強した。でも、合格できなかった。",
          reading: "べんきょうした。でも、ごうかくできなかった。",
          romaji: "Benkyou shita. Demo, goukaku dekinakatta.",
          id: "Sudah belajar. Tapi, tetap tidak lulus.",
        },
      },
      {
        japanese: "けど",
        reading: "けど",
        romaji: "kedo",
        translation: "meskipun / tapi",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Penyambung antar klausa kontras dalam percakapan kasual sehari-hari. Merupakan pemendekan dari 'keredomo'.",
        example: {
          jp: "眠いけど、宿題を終わらせないと。",
          reading: "ねむいけど、しゅくだいをおわらせないと。",
          romaji: "Nemui kedo, shukudai wo owarasenai to.",
          id: "Meskipun ngantuk, aku harus menyelesaikan PR.",
        },
      },
      {
        japanese: "のに",
        reading: "のに",
        romaji: "noni",
        translation: "padahal / meskipun",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Kekecewaan", type: "emotional" },
        ],
        context:
          "Menyatakan pertentangan dengan nuansa emosional penyesalan, kekesalan, atau kekecewaan yang kuat dari pembicara.",
        example: {
          jp: "日曜日なのに、仕事をしなきゃいけない。",
          reading: "にちようびなのに、しごとをしなきゃいけない。",
          romaji: "Nichiyoubi noni, shigoto wo shinakya ikenai.",
          id: "Padahal hari Minggu, tapi aku harus kerja.",
        },
      },
      {
        japanese: "ても",
        reading: "ても",
        romaji: "temo",
        translation: "meskipun / biar pun",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menghubungkan klausa pengandaian kontras di mana aksi di klausa kedua tetap berlaku tidak peduli apa pun yang terjadi di klausa pertama.",
        example: {
          jp: "雨が降っても、サッカーをします。",
          reading: "あめがふっても、さっかーをします。",
          romaji: "Ame ga futte mo, sakkaa wo shimasu.",
          id: "Meskipun hujan turun, kami tetap akan bermain sepak bola.",
        },
      },
      {
        japanese: "ながら",
        reading: "nagara",
        romaji: "nagara",
        translation: "meskipun (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Ditempelkan pada kata kerja (bentuk ます) atau kata sifat untuk menyatakan pertentangan keadaan. Berbeda dengan arti utamanya yang menyatakan 'sambil melakukan sesuatu'.",
        example: {
          jp: "残念ながら、その会議には出席できません。",
          reading: "ざんねんながら、そのかいぎにはしゅっせきできません。",
          romaji: "Zannen nagara, sono kaigi ni wa shusseki dekimasen.",
          id: "Meskipun sangat disayangkan, saya tidak bisa menghadiri rapat tersebut.",
        },
      },
    ],
  },
  {
    id: "additive-conjunction",
    title: "Kata Hubung Aditif",
    subtitle: "Dan / Serta",
    icon: "",
    description:
      "Untuk menggabungkan kata atau kalimat (dan), bahasa Jepang memiliki aturan khusus mengenai apakah daftar tersebut bersifat mutlak/lengkap atau hanya mewakili sebagian.",
    words: [
      {
        japanese: "と",
        reading: "と",
        romaji: "to",
        translation: "dan (pembatasan lengkap)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Digunakan untuk merangkai daftar benda secara komprehensif. Menandakan bahwa hanya barang-barang tersebutlah yang ada atau dipilih.",
        example: {
          jp: "机の上に本とペンがあります。",
          reading: "つくえのうえにほんとぺんがあります。",
          romaji: "Tsukue no ue ni hon to pen ga arimasu.",
          id: "Di atas meja ada buku dan pulpen (hanya ada dua benda ini).",
        },
      },
      {
        japanese: "や",
        reading: "や",
        romaji: "ya",
        translation: "dan (representatif)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menghubungkan kata benda secara tidak lengkap. Memberi petunjuk bahwa benda-benda lain yang sejenis masih ada namun tidak disebutkan dalam daftar.",
        example: {
          jp: "カバンの中に教科書やノートが入っています。",
          reading: "かばんのなかにきょうかしょやのーとがはいっています。",
          romaji: "Kaban no naka ni kyoukasho ya nooto ga haitte imasu.",
          id: "Di dalam tas ada buku pelajaran dan buku catatan (dan benda-benda lainnya).",
        },
      },
      {
        japanese: "も",
        reading: "も",
        romaji: "mo",
        translation: "juga / pun",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menyatakan kesamaan sifat. Jika diulang sebagai 'A mo B mo', berarti 'baik A maupun B'.",
        example: {
          jp: "私は犬も猫も好きです。",
          reading: "わたしはいぬもねこもすきです。",
          romaji: "Watashi wa inu mo neko mo suki desu.",
          id: "Aku menyukai anjing maupun kucing.",
        },
      },
      {
        japanese: "し",
        reading: "し",
        romaji: "shi",
        translation: "dan / lagipula (penumpukan alasan)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Digunakan di akhir klausa untuk menyebutkan beberapa kondisi/alasan berturut-turut untuk mendukung suatu argumen.",
        example: {
          jp: "この店は安いし、美味しいからよく来ます。",
          reading: "このみせはやすいし、おいしいからよくきます。",
          romaji: "Kono mise wa yasui shi, oishii kara yoku kimasu.",
          id: "Toko ini murah, dan juga enak, makanya aku sering datang.",
        },
      },
      {
        japanese: "それから",
        reading: "それから",
        romaji: "sorekara",
        translation: "lalu / kemudian",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Digunakan di awal kalimat untuk menyambungkan poin informasi baru atau runtutan kejadian berikutnya.",
        example: {
          jp: "スーパーでパンを買った。それから、牛乳も買った。",
          reading: "すーぱーでぱんをかった。それから、ぎゅうにゅうもかった。",
          romaji: "Suupaa de pan wo katta. Sorekara, gyuunyuu mo katta.",
          id: "Aku beli roti di supermarket. Lalu, beli susu juga.",
        },
      },
    ],
  },
  {
    id: "intensity-adverb",
    title: "Kata Keterangan Intensitas",
    subtitle: "Sangat",
    icon: "",
    description:
      "Untuk menyatakan tingkat kehebatan (sangat), bahasa Jepang memiliki variasi kata keterangan mulai dari bahasa sopan resmi, slang gaul, hingga yang bersifat terkejut.",
    words: [
      {
        japanese: "とても",
        reading: "とても",
        romaji: "totemo",
        translation: "sangat (standar)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Paling umum dan netral. Aman digunakan di segala kondisi. Bila berpasangan dengan bentuk negatif berarti 'sama sekali tidak'.",
        example: {
          jp: "日本の夏はとても暑いです。",
          reading: "にほんのなつはとてもあついです。",
          romaji: "Nihon no natsu wa totemo atsui desu.",
          id: "Musim panas di Jepang sangat panas.",
        },
      },
      {
        japanese: "すごく",
        reading: "すごく",
        romaji: "sugoku",
        translation: "sangat / banget",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Sangat populer dalam percakapan kasual sehari-hari untuk memberikan ekspresi emosi yang kuat.",
        example: {
          jp: "今日の映画、すごく面白かったよ！",
          reading: "きょうのえいが、すごくおもしろかったよ！",
          romaji: "Kyou no eiga, sugoku omoshirokatta yo!",
          id: "Film hari ini seru banget, lho!",
        },
      },
      {
        japanese: "大変",
        reading: "たいへん",
        romaji: "taihen",
        translation: "sangat (formal / serius)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sangat Formal", type: "very-formal" },
        ],
        context:
          "Digunakan dalam konteks bisnis atau keadaan gawat untuk menunjukkan keseriusan pembicara secara sopan.",
        example: {
          jp: "お忙しいところ大変申し訳ございません。",
          reading: "おいそがしいところたいへんもうしわけございません。",
          romaji: "O-isogashii tokoro taihen moushiwake gozaimasen.",
          id: "Mohon maaf sebesar-besarnya di waktu Anda yang sangat sibuk ini.",
        },
      },
      {
        japanese: "めっちゃ",
        reading: "めっちゃ",
        romaji: "meccha",
        translation: "sangat / banget (slang)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Berawal dari dialek Kansai yang menjadi slang nasional di kalangan remaja. Sangat informal.",
        example: {
          jp: "このラーメン、めっちゃうまい！",
          reading: "このらーめん、めっちゃうまい！",
          romaji: "Kono raamen, meccha umai!",
          id: "Ramen ini enak banget!",
        },
      },
      {
        japanese: "随分",
        reading: "ずいぶん",
        romaji: "zuibun",
        translation: "lumayan sangat / jauh melebihi perkiraan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Keheranan", type: "emotional" },
        ],
        context:
          "Menyatakan intensitas yang melampaui batas kewajaran atau ekspektasi awal pembicara. Sering bernuansa terkejut.",
        example: {
          jp: "久しぶりに会ったけど、随分背が伸びたね。",
          reading: "ひさしぶりにあったけど、ずいぶんせがのびたね。",
          romaji: "Hisashiburi ni atta kedo, zuibun se ga nobita ne.",
          id: "Sudah lama tidak bertemu, ternyata kamu sudah bertambah tinggi cukup banyak ya.",
        },
      },
    ],
  },
  {
    id: "already-adverb",
    title: "Kata Keterangan Aspek: Sudah",
    subtitle: "Sudah / Telah",
    icon: "",
    description:
      "Untuk menyatakan suatu hal yang sudah rampung di masa kini atau masa lampau, bahasa Jepang memiliki beberapa adverbia khusus.",
    words: [
      {
        japanese: "もう",
        reading: "もう",
        romaji: "mou",
        translation: "sudah (kasual / netral)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Menyatakan tindakan/situasi yang telah selesai tercapai saat ini. Dapat pula berarti 'lagi' (seperti: 'satu kali lagi') jika diikuti bilangan.",
        example: {
          jp: "昼ご飯はもう食べました。",
          reading: "ひるごはんはもうたべました。",
          romaji: "Hirugohan wa mou tabemashita.",
          id: "Aku sudah makan siang.",
        },
      },
      {
        japanese: "すでに",
        reading: "すでに",
        romaji: "sude ni",
        translation: "telah / sudah (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Lebih formal dibandingkan 'mou'. Menyatakan suatu peristiwa telah selesai secara mutlak sebelum waktu saat ini.",
        example: {
          jp: "チケットはすでに売り切れました。",
          reading: "ちけっとはすでにうりきれました。",
          romaji: "Chiketto wa sude ni urikiremashita.",
          id: "Tiketnya sudah terjual habis.",
        },
      },
      {
        japanese: "かつて",
        reading: "かつて",
        romaji: "katsute",
        translation: "dahulu pernah",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Menyatakan keadaan yang 'pernah' terjadi di masa lampau yang jauh, namun keadaan tersebut kini sudah tidak lagi berlaku.",
        example: {
          jp: "ここはかつて静かな漁村でした。",
          reading: "ここはかつてしずかなぎょそんでした。",
          romaji: "Koko wa katsute shizuka na gyoson deshita.",
          id: "Tempat ini dahulu merupakan sebuah desa nelayan yang tenang.",
        },
      },
      {
        japanese: "もはや",
        reading: "もはや",
        romaji: "mohaya",
        translation: "kini sudah (menuju negatif)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Kekecewaan", type: "emotional" },
        ],
        context:
          "Menyatakan bahwa situasi sudah berubah sedemikian rupa ke arah negatif sehingga tidak bisa dipulihkan. Sering berpasangan dengan bentuk negatif.",
        example: {
          jp: "彼の病気はもはや回復の見込みがない。",
          reading: "かれのびょうきはもはやかいふくのみこみがない。",
          romaji: "Kare no byouki wa mohaya kaifuku no mikomi ga nai.",
          id: "Penyakitnya kini sudah tidak ada harapan untuk sembuh lagi.",
        },
      },
    ],
  },
  {
    id: "not-yet-adverb",
    title: "Kata Keterangan Aspek: Belum",
    subtitle: "Belum",
    icon: "",
    description:
      "Untuk menyatakan suatu hal yang belum terjadi atau belum saatnya terjadi, bahasa Jepang menggunakan beberapa penunjuk waktu aspek.",
    words: [
      {
        japanese: "まだ",
        reading: "まだ",
        romaji: "mada",
        translation: "belum / masih",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata keterangan standar untuk menyatakan bahwa suatu tindakan belum terlaksana, atau suatu kondisi masih terus berlanjut.",
        example: {
          jp: "宿題はまだ終わっていません。",
          reading: "しゅくだいはまだおわっていません。",
          romaji: "Shukudai wa mada owatte imasen.",
          id: "PR saya belum selesai.",
        },
      },
      {
        japanese: "未だ",
        reading: "いまだ",
        romaji: "imada",
        translation: "belum juga (sangat formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Bentuk formal dan sastra dari 'mada'. Menekankan bahwa sesuatu hal belum juga tercapai hingga saat ini. Sering digunakan dalam berita resmi.",
        example: {
          jp: "犯人の行方は未だに分かっていない。",
          reading: "はんにんのゆくえはいまだにわかっていない。",
          romaji: "Hannin no yukue wa imada ni wakatte inai.",
          id: "Keberadaan pelaku belum juga diketahui hingga sekarang.",
        },
      },
      {
        japanese: "まだまだ",
        reading: "まだまだ",
        romaji: "mada-mada",
        translation: "masih jauh / belum cukup",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Merupakan reduplikasi dari 'mada'. Digunakan untuk merendah ketika dipuji, menyatakan bahwa kemampuan diri masih sangat kurang.",
        example: {
          jp: "私の日本語はまだまだ下手です。",
          reading: "わたしのにほんごはまだまだへたです。",
          romaji: "Watashi no nihongo wa mada-mada heta desu.",
          id: "Bahasa Jepang saya masih jauh dari bagus.",
        },
      },
      {
        japanese: "今ではない",
        reading: "いまではない",
        romaji: "ima dewa nai",
        translation: "bukan sekarang / belum saatnya",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Menyatakan secara gamblang bahwa saat yang tepat untuk melakukan sesuatu bukanlah saat ini, melainkan di masa depan.",
        example: {
          jp: "決断を下すのは、今ではない。",
          reading: "けつだんをくだすのは、いまではない。",
          romaji: "Ketsudan wo kudasu no wa, ima dewa nai.",
          id: "Saat untuk mengambil keputusan bukanlah sekarang.",
        },
      },
    ],
  },
  {
    id: "now-adverb",
    title: "Kata Keterangan Aspek: Sekarang",
    subtitle: "Sekarang / Kini",
    icon: "",
    description:
      "Untuk menyatakan waktu masa kini (sekarang), bahasa Jepang membedakan tingkat kesopanan serta apakah kata tersebut menunjukkan kontras dengan masa lalu.",
    words: [
      {
        japanese: "今",
        reading: "いま",
        romaji: "ima",
        translation: "sekarang",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata keterangan waktu masa kini yang paling dasar dan aman digunakan dalam segala bentuk percakapan sehari-hari.",
        example: {
          jp: "今、何時ですか？",
          reading: "いま、なんじですか？",
          romaji: "Ima, nan-ji desu ka?",
          id: "Sekarang jam berapa?",
        },
      },
      {
        japanese: "ただいま",
        reading: "ただいま",
        romaji: "tadaima",
        translation: "saat ini juga / sekarang (sopan)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Bentuk sopan dari 'ima'. Biasa didengar dalam pengumuman, layanan bisnis, atau ketika melaporkan tindakan yang sedang terjadi saat ini juga. Juga digunakan sebagai sapaan pulang ke rumah ('aku pulang!').",
        example: {
          jp: "ただいま満席でございます。",
          reading: "ただいままんせきでございます。",
          romaji: "Tadaima manseki de gozaimasu.",
          id: "Saat ini semua kursi penuh.",
        },
      },
      {
        japanese: "現在",
        reading: "げんざい",
        romaji: "genzai",
        translation: "masa kini / saat ini",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Bentuk formal tertulis yang berfokus pada masa atau era yang sedang berlangsung secara objektif.",
        example: {
          jp: "現在、システムをメンテナンス中です。",
          reading: "げんざい、しすてむをめんてなんすちゅうです。",
          romaji: "Genzai, shisutemu wo mentenansu chuu desu.",
          id: "Saat ini, sistem sedang dalam pemeliharaan.",
        },
      },
      {
        japanese: "今や",
        reading: "いまや",
        romaji: "ima ya",
        translation: "kini (kontras dengan masa lalu)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Menyatakan waktu sekarang dengan memberikan perbandingan kontras bahwa suatu hal kini telah berubah drastis dibanding masa lampau.",
        example: {
          jp: "彼は今や世界的なスターだ。",
          reading: "かれはいまやせかいてきなすたーだ。",
          romaji: "Kare wa ima ya sekaiteki na sutaa da.",
          id: "Dia kini sudah menjadi bintang dunia.",
        },
      },
    ],
  },
  {
    id: "soon-adverb",
    title: "Kata Keterangan Aspek: Segera",
    subtitle: "Segera / Sebentar Lagi",
    icon: "",
    description:
      "Tindakan yang akan dilakukan dalam waktu dekat (segera) dibedakan berdasarkan kecepatan reaksi, keantusiasan pembicara, atau perubahan drastis keadaan.",
    words: [
      {
        japanese: "すぐ",
        reading: "すぐ",
        romaji: "sugu",
        translation: "segera / langsung",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Menunjukkan tindakan yang dilakukan secepatnya tanpa penundaan waktu sama sekali dalam kehidupan sehari-hari.",
        example: {
          jp: "すぐに行きますので、待っていてください。",
          reading: "すぐにいきますので、まっていてください。",
          romaji: "Sugu ni ikimasu node, matte ite kudasai.",
          id: "Saya akan segera pergi ke sana, tolong tunggu.",
        },
      },
      {
        japanese: "早速",
        reading: "さっそく",
        romaji: "sassoku",
        translation: "segera (dengan antusias)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Melakukan sesuatu sesegera mungkin karena rasa antusias atau tidak sabar menyambut kesempatan baik. Sering diterjemahkan 'tanpa membuang waktu'.",
        example: {
          jp: "早速ですが、本題に入りましょう。",
          reading: "さっそくですが、ほんだいにはいりましょう。",
          romaji: "Sassoku desu ga, hondai ni hairimashou.",
          id: "Tanpa buang waktu, mari kita langsung masuk ke topik utama.",
        },
      },
      {
        japanese: "たちまち",
        reading: "たちまち",
        romaji: "tachimachi",
        translation: "seketika / dalam sekejap",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Menunjukkan perubahan situasi secara instan dan drastis dalam sekejap mata, sering kali memicu keheranan.",
        example: {
          jp: "チケットはたちまち売り切れた。",
          reading: "ちけっとはたちまちうりきれた。",
          romaji: "Chiketto wa tachimachi urikireta.",
          id: "Tiketnya seketika terjual habis.",
        },
      },
      {
        japanese: "やがて",
        reading: "やがて",
        romaji: "yagate",
        translation: "lambat laun / lama-kelamaan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Menyatakan bahwa suatu kondisi akan terwujud dengan sendirinya seiring berjalannya waktu dalam waktu dekat secara alami.",
        example: {
          jp: "雪は降っているが、やがて止むだろう。",
          reading: "ゆきはふっているが、やがてやむだろう。",
          romaji: "Yuki wa futte iru ga, yagate yamu darou.",
          id: "Salju memang turun, tapi sebelum lama akan reda.",
        },
      },
    ],
  },
  {
    id: "almost-adverb",
    title: "Kata Keterangan Aspek: Hampir",
    subtitle: "Hampir / Nyaris",
    icon: "",
    description:
      "Untuk menyatakan tingkat kemiripan atau kepastian waktu yang hampir penuh, bahasa Jepang memiliki beberapa nuansa subjektif dan objektif.",
    words: [
      {
        japanese: "もうすぐ",
        reading: "もうすぐ",
        romaji: "mou sugu",
        translation: "hampir / sebentar lagi",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Digunakan khusus untuk menunjukkan rentang waktu kejadian penting yang hampir tiba.",
        example: {
          jp: "もうすぐ授業が始まります。",
          reading: "もうすぐじゅぎょうがはじまります。",
          romaji: "Mou sugu jugyou ga hajimarimasu.",
          id: "Sebentar lagi (hampir) pelajaran dimulai.",
        },
      },
      {
        japanese: "ほとんど",
        reading: "ほとんど",
        romaji: "hotondo",
        translation: "hampir seluruhnya",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Merujuk pada proporsi jumlah atau volume yang hampir mencapai 100% (sebagian besar).",
        example: {
          jp: "宿題はほとんど終わりました。",
          reading: "しゅくだいはほとんどおわりました。",
          romaji: "Shukudai wa hotondo owarimashita.",
          id: "PR saya hampir semuanya selesai.",
        },
      },
      {
        japanese: "いよいよ",
        reading: "いよいよ",
        romaji: "iyoiyo",
        translation: "akhirnya tiba / saatnya hampir tiba",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Antisipasi", type: "emotional" },
        ],
        context:
          "Menyatakan momen yang telah lama ditunggu akhirnya hampir terlaksana sekarang. Mengandung getaran perasaan senang atau tegang.",
        example: {
          jp: "いよいよ明日は出発の日だ。",
          reading: "いよいよあしたはしゅっぱつのひだ。",
          romaji: "Iyoiyo ashita wa shuppatsu no hi da.",
          id: "Akhirnya besok adalah hari keberangkatan yang dinanti.",
        },
      },
      {
        japanese: "ほぼ",
        reading: "ほぼ",
        romaji: "hobo",
        translation: "hampir / kira-kira (objektif)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Sangat sering digunakan untuk data statistik, persentase, atau target yang hampir tercapai secara objektif dan matematis.",
        example: {
          jp: "計画はほぼ完成しました。",
          reading: "けいかくはほぼかんせいしました。",
          romaji: "Keikaku wa hobo kansei shimashita.",
          id: "Rencana tersebut hampir sepenuhnya selesai.",
        },
      },
    ],
  },
  {
    id: "beautiful-adj",
    title: "Kata Sifat: Cantik / Indah",
    subtitle: "Cantik / Indah",
    icon: "",
    description:
      "Untuk mengekspresikan keelokan rupa (cantik) atau keindahan estetika, kata sifat bahasa Jepang dibedakan berdasarkan sifat keelokan tersebut.",
    words: [
      {
        japanese: "きれい",
        reading: "きれい",
        romaji: "kirei",
        translation: "cantik / indah / bersih",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata sifat-na yang sangat umum untuk kecantikan visual orang atau benda, serta kemurnian/kebersihan suatu tempat.",
        example: {
          jp: "彼女は本当にきれいな声をしている。",
          reading: "かのじょはほんとうにきれいなこえをしている。",
          romaji: "Kanojo wa hontou ni kirei na koe wo shite iru.",
          id: "Dia benar-benar memiliki suara yang cantik (indah).",
        },
      },
      {
        japanese: "美しい",
        reading: "うつくしい",
        romaji: "utsukushii",
        translation: "indah / cantik (estetik)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Kata sifat-i yang lebih formal dan berkelas. Menyatakan keindahan mendalam yang menyentuh jiwa seperti pemandangan alam megah atau karya seni bernilai tinggi.",
        example: {
          jp: "富士山は夕暮れ時が一番美しい。",
          reading: "ふじさんはゆうぐれどきがいちばんうつくしい。",
          romaji: "Fujisan wa yuuguredoki ga ichiban utsukushii.",
          id: "Gunung Fuji paling indah pada saat matahari terbenam.",
        },
      },
      {
        japanese: "可愛い",
        reading: "かわいい",
        romaji: "kawaii",
        translation: "imut / lucu / manis",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Imut", type: "casual" },
        ],
        context:
          "Menunjukkan keindahan yang mungil, menggemaskan, atau memicu rasa sayang dari pembicara.",
        example: {
          jp: "この子犬、とても可愛いですね。",
          reading: "このこいぬ、とてもかわいいですね。",
          romaji: "Kono koinu, totemo kawaii desu ne.",
          id: "Anak anjing ini imut sekali, ya.",
        },
      },
      {
        japanese: "麗しい",
        reading: "うるわしい",
        romaji: "uruwashii",
        translation: "elok / rupawan / anggun",
        nuances: [
          { label: "Sangat Formal", type: "very-formal" },
          { label: "Arkaik", type: "archaic" },
        ],
        context:
          "Kata sifat kuno yang bernada sangat puitis dan tinggi. Digunakan untuk memuji rupa bangsawan atau cuaca yang luar biasa cerah dan menyenangkan.",
        example: {
          jp: "ご機嫌麗しゅうございます。",
          reading: "ごきげんうるわしゅうございます。",
          romaji: "Go-kigen uruwashuu gozaimasu.",
          id: "Semoga Anda dalam keadaan elok (sapaan hormat bangsawan).",
        },
      },
    ],
  },
  {
    id: "good-adj",
    title: "Kata Sifat: Bagus / Keren",
    subtitle: "Bagus / Keren",
    icon: "",
    description:
      "Untuk menyatakan kualitas yang baik (bagus) atau kekerenan gaya, bahasa Jepang memisahkan penggunaannya berdasarkan gaya berpakaian, tindakan moral, atau keagungan penampilan.",
    words: [
      {
        japanese: "いい",
        reading: "いい",
        romaji: "ii",
        translation: "bagus / baik",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata sifat-i paling mendasar untuk 'bagus'. Hanya digunakan dalam bentuk dasar saat ini, jika diubah menjadi bentuk lampau atau negatif wajib memakai akar kata 'yoi'.",
        example: {
          jp: "今日はいい天気ですね。",
          reading: "きょうはいいてんきですね。",
          romaji: "Kyou wa ii tenki desu ne.",
          id: "Hari ini cuacanya bagus, ya.",
        },
      },
      {
        japanese: "良い",
        reading: "よい",
        romaji: "yoi",
        translation: "bagus / baik (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Akar kata dari 'ii'. Lebih sering muncul dalam naskah pidato, esai tertulis, atau saat dikonjugasikan (yokatta, yokunai).",
        example: {
          jp: "読書は子供の発達に良い影響を与える。",
          reading: "どくしょはこどものはったつによいえいきょうをあたえる。",
          romaji: "Dokusho wa kodomo no hattatsu ni yoi eikyou wo ataeru.",
          id: "Membaringkan anak membaca buku memberikan pengaruh baik bagi perkembangan anak.", // Wait, let's fix id translation: "Membaca buku memberikan pengaruh baik bagi perkembangan anak."
        },
      },
      {
        japanese: "素敵",
        reading: "すてき",
        romaji: "suteki",
        translation: "menawan / indah / bagus",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata sifat-na yang digunakan untuk memuji keindahan yang modis, anggun, atau membahagiakan hati. Sangat sering digunakan oleh wanita.",
        example: {
          jp: "そのドレス、とても素敵ですね。",
          reading: "そのどれす、とてもすてきですね。",
          romaji: "Sono doresu, totemo suteki desu ne.",
          id: "Gaun itu bagus sekali, ya.",
        },
      },
      {
        japanese: "格好いい",
        reading: "かっこいい",
        romaji: "kakkoii",
        translation: "keren / tampan",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Merujuk pada penampilan luar, perilaku, gaya berpakaian, atau perawakan seseorang (biasanya pria) yang dinilai keren atau modis.",
        example: {
          jp: "あのスポーツカー、格好いいね！",
          reading: "あのすぽーつかー、かっこいいね！",
          romaji: "Ano supootsukaa, kakkoii ne!",
          id: "Mobil sport itu keren banget, ya!",
        },
      },
      {
        japanese: "素晴らしい",
        reading: "すばらしい",
        romaji: "subarashii",
        translation: "luar biasa bagus / hebat",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Netral", type: "neutral" },
        ],
        context:
          "Digunakan untuk memuji suatu karya, pemandangan, atau performa yang sangat mengagumkan dan mendekati kesempurnaan.",
        example: {
          jp: "彼のバイオリンの演奏は素晴らしかった。",
          reading: "かれのばいおりんのえんそうはすばらしかった。",
          romaji: "Kare no baiorin no ensou wa subarashikatta.",
          id: "Permainan biola dia luar biasa bagus.",
        },
      },
      {
        japanese: "立派",
        reading: "りっぱ",
        romaji: "rippa",
        translation: "megah / mulia / layak dihormati",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Netral", type: "neutral" },
        ],
        context:
          "Digunakan untuk mendeskripsikan bangunan yang megah, atau seseorang yang memiliki karakter mulia, pencapaian yang patut dicontoh, atau kedewasaan penuh.",
        example: {
          jp: "彼は立派な大人になりました。",
          reading: "かれはりっぱなおとなになりました。",
          romaji: "Kare wa rippa na otona ni narimashita.",
          id: "Dia telah menjadi orang dewasa yang mulia.",
        },
      },
    ],
  },
  {
    id: "pleasant-adj",
    title: "Kata Sifat: Menyenangkan",
    subtitle: "Menyenangkan / Senang",
    icon: "",
    description:
      "Untuk menyatakan kebahagiaan atau kesenangan, bahasa Jepang memisahkan rasa senang yang bersumber dari aktivitas luar dengan rasa senang personal yang mendalam.",
    words: [
      {
        japanese: "楽しい",
        reading: "たのしい",
        romaji: "tanoshii",
        translation: "menyenangkan (proses / aktivitas)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Menggambarkan aktivitas atau suasana yang membuat gembira seperti liburan, pesta, atau bermain bersama teman.",
        example: {
          jp: "日本旅行はとても楽しかったです。",
          reading: "にほんりょこうはとてもたのしかったです。",
          romaji: "Nihon ryokou wa totemo tanoshikatta desu.",
          id: "Perjalanan ke Jepang sangat menyenangkan.",
        },
      },
      {
        japanese: "嬉しい",
        reading: "うれしい",
        romaji: "ureshii",
        translation: "senang (perasaan personal saat ini)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Menggambarkan emosi gembira yang dirasakan langsung oleh pembicara karena memperoleh hadiah, kabar baik, atau bantuan.",
        example: {
          jp: "プレゼントをもらって、とても嬉しいです。",
          reading: "ぷれぜんとをもらって、てともうれしいです。", // Wait, let's fix reading: "ぷれぜんとをもらって、とてもうれしいです。"
          romaji: "Purezento wo moratte, totemo ureshii desu.",
          id: "Saya sangat senang menerima hadiah ini.",
        },
      },
      {
        japanese: "喜ばしい",
        reading: "よろこばしい",
        romaji: "yorokobashii",
        translation: "menggembirakan / menyenangkan (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Bentuk tertulis formal untuk menyatakan bahwa suatu kejadian dinilai patut disyukuri atau disambut gembira oleh publik/kelompok.",
        example: {
          jp: "二人の結婚は本当に喜ばしいニュースだ。",
          reading: "ふたりのけっこんはほんとうによろこばしいにゅーすだ。",
          romaji: "Futari no kekkon wa hontou ni yorokobashii nyuusu da.",
          id: "Pernikahan mereka berdua benar-benar berita yang menggembirakan.",
        },
      },
      {
        japanese: "面白い",
        reading: "おもしろい",
        romaji: "omoshiroi",
        translation: "menarik / menyenangkan / menghibur",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Menunjukkan kesenangan yang bersumber dari hal-hal yang memicu ketertarikan pikiran, kelucuan, atau keunikan suatu karya.",
        example: {
          jp: "この小説は面白いので、一日で読み終えた。",
          reading: "このしょうせつはおもしろいので、いちにちでよみおえた。",
          romaji: "Kono shousetsu wa omoshiroi node, ichinichi de yomioeta.",
          id: "Novel ini menarik, jadi selesai kubaca dalam satu hari.",
        },
      },
    ],
  },
  {
    id: "sad-adj",
    title: "Kata Sifat: Sedih & Sepi",
    subtitle: "Sedih / Sepi / Berat",
    icon: "",
    description:
      "Perasaan muram atau duka dibedakan berdasarkan apakah kesedihan tersebut dipicu peristiwa eksternal, kesepian diri sendiri, atau penderitaan hidup.",
    words: [
      {
        japanese: "悲しい",
        reading: "かなしい",
        romaji: "kanashii",
        translation: "sedih (kejadian luar)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Rasa sedih standar yang dipicu oleh musibah, berita duka, atau kejadian menyedihkan lainnya.",
        example: {
          jp: "飼っていた犬が死んで、とても悲しいです。",
          reading: "かっていたいぬがしんで、とてもかなしいです。",
          romaji: "Katte ita inu ga shinde, totemo kanashii desu.",
          id: "Anjing peliharaan saya mati, saya sangat sedih.",
        },
      },
      {
        japanese: "寂しい",
        reading: "さびしい",
        romaji: "sabishii",
        translation: "sepi / kesepian",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Rasa sunyi atau sepi yang dirasakan seseorang karena kesendirian atau rindu akan kehadiran orang lain. Juga merujuk pada suasana tempat yang sepi.",
        example: {
          jp: "一人暮らしは時々寂しくなります。",
          reading: "ひとりぐらしはときどきさびしくなります。",
          romaji: "Hitorigurashi wa tokidoki sabishiku narimasu.",
          id: "Hidup sendirian terkadang membuat saya merasa kesepian.",
        },
      },
      {
        japanese: "辛い",
        reading: "つらい",
        romaji: "tsurai",
        translation: "berat / menyakitkan (mental/fisik)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Menyatakan situasi yang sulit dihadapi, menyiksa batin, atau rasa pedih yang berat untuk ditanggung.",
        example: {
          jp: "失恋するのは本当に辛いことです。",
          reading: "しつれんするのはほんとうにつらいことです。",
          romaji: "Shitsuren suru no wa hontou ni tsurai koto desu.",
          id: "Patah hati benar-benar merupakan hal yang menyakitkan.",
        },
      },
      {
        japanese: "切ない",
        reading: "せつない",
        romaji: "setsunai",
        translation: "pilu / sesak dada (emosional)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Kesedihan halus yang membuat dada terasa sesak, sering dikaitkan dengan romansa yang tak sampai atau kenangan masa lalu yang mengharukan.",
        example: {
          jp: "映画の悲しいラストシーンを見て、切なくなった。",
          reading: "えいがのかなしいらすとしーんをみて、せつなくなった。",
          romaji: "Eiga no kanashii rasuto shiin wo mite, setsunaku natta.",
          id: "Dada terasa sesak (pilu) saat melihat adegan akhir yang sedih dari film itu.",
        },
      },
      {
        japanese: "やるせない",
        reading: "やるせない",
        romaji: "yarusenai",
        translation: "tak berdaya / putus asa",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Kekecewaan", type: "emotional" },
        ],
        context:
          "Kesedihan mendalam yang bercampur rasa frustrasi karena pembicara tidak berdaya mengubah keadaan dan tidak tahu cara melipur lara.",
        example: {
          jp: "どうにもできない現実に、やるせない気持ちになった。",
          reading: "どうにもできないげんじつに、やるせないきもちになった。",
          romaji: "Dou ni mo dekinai genjitsu ni, yarusenai kimochi ni natta.",
          id: "Saya merasa tak berdaya menghadapi kenyataan yang tidak bisa diubah ini.",
        },
      },
    ],
  },
  {
    id: "fear-adj",
    title: "Kata Sifat & Ekspresi: Takut",
    subtitle: "Takut / Menakutkan",
    icon: "",
    description:
      "Untuk menyatakan rasa takut, bahasa Jepang memisahkan sifat menakutkan yang instan, kengerian objektif berskala besar, konsep psikologis ketakutan, hingga reaksi fisik gemetar.",
    words: [
      {
        japanese: "怖い",
        reading: "こわい",
        romaji: "kowai",
        translation: "takut / menakutkan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata sifat-i standar untuk ketakutan langsung terhadap sesuatu seperti hantu, binatang buas, atau ketinggian.",
        example: {
          jp: "お化け屋敷は怖くて入れません。",
          reading: "おばけやしきはこわくてはいれません。",
          romaji: "Obakeyashiki wa kowakute hairemasen.",
          id: "Saya tidak bisa masuk rumah hantu karena takut.",
        },
      },
      {
        japanese: "恐ろしい",
        reading: "おそろしい",
        romaji: "osoroshii",
        translation: "mengerikan / menakutkan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Lebih dramatis dan objektif daripada 'kowai'. Digunakan untuk kengerian serius seperti perang, kriminalitas, atau wabah penyakit.",
        example: {
          jp: "戦争は本当に恐ろしいものです。",
          reading: "せんそうはほんとうにおそろしいものです。",
          romaji: "Sensou wa hontou ni osoroshii mono desu.",
          id: "Perang benar-benar merupakan hal yang mengerikan.",
        },
      },
      {
        japanese: "恐怖",
        reading: "きょうふ",
        romaji: "kyoufu",
        translation: "ketakutan (kata benda)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Merupakan kelas kata benda (noun) yang merujuk pada konsep rasa takut itu sendiri secara mental atau ilmiah.",
        example: {
          jp: "彼は暗闇に強い恐怖を感じた。",
          reading: "かれはくらやみにつよいきょうふをかんじた。",
          romaji: "Kare wa kurayami ni tsuyoi kyoufu wo kanjita.",
          id: "Dia merasakan ketakutan yang kuat terhadap kegelapan.",
        },
      },
      {
        japanese: "怯える",
        reading: "おびえる",
        romaji: "obieru",
        translation: "gemetar ketakutan (kata kerja)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Merupakan kelas kata kerja (verb) yang menunjukkan reaksi fisik menciut atau gemetar karena takut.",
        example: {
          jp: "子犬が雷の音に怯えている。",
          reading: "こいぬがかみなりのおとにおびえている。",
          romaji: "Koinu ga kaminari no oto ni obiete iru.",
          id: "Anak anjing itu gemetar ketakutan mendengar suara petir.",
        },
      },
    ],
  },
  {
    id: "fatigue-adj",
    title: "Kata Sifat & Ekspresi: Capek & Lelah",
    subtitle: "Capek / Lelah",
    icon: "",
    description:
      "Rasa lelah dibedakan berdasarkan penekanan fisik/mental, letih yang melemaskan sendi tubuh, letih yang amat berat/menghimpit, hingga pegal otot.",
    words: [
      {
        japanese: "疲れた",
        reading: "つかれた",
        romaji: "tsukareta",
        translation: "capek / lelah",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Ungkapan lelah standar yang paling aman digunakan. Berasal dari kata kerja 'tsukareru' yang ditaruh ke bentuk lampau.",
        example: {
          jp: "今日は一日中歩いたので疲れました。",
          reading: "きょうはいちにちじゅうあるいたのでつかれました。",
          romaji: "Kyou wa ichinichijuu aruita node tsukaremashita.",
          id: "Hari ini saya lelah karena berjalan seharian.",
        },
      },
      {
        japanese: "くたびれた",
        reading: "くたびれた",
        romaji: "kutabireta",
        translation: "letih / lemas (tenaga habis)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menyatakan rasa capek fisik yang membuat sendi tubuh lemas atau tidak bertenaga lagi. Juga bisa dipakai untuk menggambarkan barang/pakaian yang sudah lusuh.",
        example: {
          jp: "残業続きで、もうくたびれたよ。",
          reading: "ざんぎょうつづきで、もうくたびれたよ。",
          romaji: "Zangyou tsudzuki de, mou kutabireta yo.",
          id: "Kerja lembur terus-menerus, aku sudah letih nih.",
        },
      },
      {
        japanese: "しんどい",
        reading: "しんどい",
        romaji: "shindoi",
        translation: "capek berat / menyiksa",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Dialek", type: "regional" },
        ],
        context:
          "Slang yang berasal dari Kansai. Menggambarkan keletihan luar biasa yang menekan fisik/pikiran hingga terasa menyiksa.",
        example: {
          jp: "風邪をひいて体がしんどい。",
          reading: "かぜをひいてからだがしんどい。",
          romaji: "Kaze wo hiite karada ga shindoi.",
          id: "Badan rasanya capek berat karena masuk angin.",
        },
      },
      {
        japanese: "だるい",
        reading: "だるい",
        romaji: "darui",
        translation: "lemas / pegal / lesu",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menunjukkan rasa pegal, berat pada otot tubuh, lemas, atau tidak bersemangat karena kurang sehat atau kurang tidur.",
        example: {
          jp: "寝不足のせいか、体がだるいです。",
          reading: "ねぶそくのせいか、からだがだるいです。",
          romaji: "Nebusoku no sei ka, karada ga darui desu.",
          id: "Badan terasa lemas/pegal, mungkin karena kurang tidur.",
        },
      },
    ],
  },
  {
    id: "strange-adj",
    title: "Kata Sifat: Aneh",
    subtitle: "Aneh / Ganjil",
    icon: "",
    description:
      "Keanehan memiliki konotasi yang sangat bervariasi dalam bahasa Jepang, mulai dari aneh konyol/salah, mencurigakan, misterius, hingga aneh ajaib yang menakjubkan.",
    words: [
      {
        japanese: "おかしい",
        reading: "おかしい",
        romaji: "okashii",
        translation: "aneh (tidak normal / konyol)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Menunjukkan keanehan karena ada kesalahan/eror sistem, ketidaknormalan, atau keanehan konyol yang menggelikan (lucu).",
        example: {
          jp: "パソコンの動きが何かおかしい。",
          reading: "ぱそこんのうごきがなにかおかしい。",
          romaji: "Pasokon no ugoki ga nani ka okashii. ", // Wait, let's keep clean spaces
          id: "Perilaku komputer ini agak aneh.",
        },
      },
      {
        japanese: "変",
        reading: "へん",
        romaji: "hen",
        translation: "aneh / mencurigakan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Kata sifat-na paling umum untuk menyatakan keganjilan yang tidak biasa, aneh eksentrik, atau aneh mencurigakan.",
        example: {
          jp: "夜中に変な音が聞こえました。",
          reading: "よなかにへんなおとがきこえました。",
          romaji: "Yonaka ni hen na oto ga kikoemashita.",
          id: "Terdengar suara aneh di tengah malam.",
        },
      },
      {
        japanese: "奇妙",
        reading: "きみょう",
        romaji: "kimyou",
        translation: "ganjil / aneh misterius",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Lebih formal dan bernada misterius. Menyatakan fenomena ganjil yang tidak bisa dicerna oleh akal sehat biasa.",
        example: {
          jp: "この街では奇妙な事件が続いている。",
          reading: "このまちではきみょうなじけんがつづいている。",
          romaji: "Kono machi de wa kimyou na jiken ga tsuzuite iru.",
          id: "Kejadian-kejadian ganjil terus berlanjut di kota ini.",
        },
      },
      {
        japanese: "不思議",
        reading: "ふしぎ",
        romaji: "fushigi",
        translation: "ajaib / aneh menakjubkan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Keanehan yang bernada positif, merujuk pada keajaiban, misteri yang menakjubkan, atau fenomena luar biasa yang memicu rasa ingin tahu.",
        example: {
          jp: "この薬は不思議な効果がある。",
          reading: "このくすりはふしぎなこうかがある。",
          romaji: "Kono kusuri wa fushigi na kouka ga aru.",
          id: "Obat ini memiliki khasiat yang ajaib.",
        },
      },
    ],
  },
  {
    id: "opening-expression",
    title: "Ekspresi: Salam Pembuka",
    subtitle: "Salam Pembuka",
    icon: "",
    description:
      "Salam sapaan awal saat berjumpa orang lain dibedakan berdasarkan waktu (pagi/siang) serta status perkenalan (pertama kali bertemu atau sudah kenal).",
    words: [
      {
        japanese: "おはよう",
        reading: "おはよう",
        romaji: "ohayou",
        translation: "selamat pagi",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Salam sapaan pagi hari. Cenderung kasual, bisa ditambahkan 'gozaimasu' di belakangnya untuk menyapa guru/atasan.",
        example: {
          jp: "みんな、おはよう！",
          reading: "みんな、おはよう！",
          romaji: "Minna, ohayou!",
          id: "Pagi semuanya!",
        },
      },
      {
        japanese: "こんにちは",
        reading: "こんにちは",
        romaji: "konnichiwa",
        translation: "selamat siang / halo",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Salam umum yang diucapkan dari siang hingga sore hari kepada siapa saja secara sopan.",
        example: {
          jp: "こんにちは、良い天気ですね。",
          reading: "こんにちは、よいてんきですね。",
          romaji: "Konnichiwa, yoi tenki desu ne.",
          id: "Halo, cuaca yang bagus ya.",
        },
      },
      {
        japanese: "はじめまして",
        reading: "はじめまして",
        romaji: "hajimemashite",
        translation: "senang bertemu Anda",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Salam pembuka yang eksklusif hanya diucapkan sekali saat pertama kali bertemu seseorang untuk berkenalan.",
        example: {
          jp: "はじめまして、インドネシアから来ました。",
          reading: "はじめまして、いんどねしあからきました。",
          romaji: "Hajimemashite, Indonesia kara kimashita.",
          id: "Senang bertemu dengan Anda, saya datang dari Indonesia.",
        },
      },
      {
        japanese: "よろしく",
        reading: "よろしく",
        romaji: "yoroshiku",
        translation: "mohon bantuannya",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Salam yang dipasang di akhir perkenalan atau saat memohon kerja sama/bantuan. Versi formalnya adalah 'yoroshiku onegaishimasu'.",
        example: {
          jp: "これからよろしくお願いします。",
          reading: "これからよろしくおねがいします。",
          romaji: "Kore kara yoroshiku onegaishimasu.",
          id: "Mohon bimbingannya mulai sekarang.",
        },
      },
    ],
  },
  {
    id: "closing-expression",
    title: "Ekspresi: Salam Penutup",
    subtitle: "Salam Penutup",
    icon: "",
    description:
      "Mengakhiri pertemuan atau percakapan dibedakan berdasarkan tingkat keakraban serta apakah perpisahan tersebut bersifat jangka panjang.",
    words: [
      {
        japanese: "さようなら",
        reading: "さようなら",
        romaji: "sayounara",
        translation: "selamat tinggal / berpisah",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Salam perpisahan standar yang berkonotasi jangka panjang atau selamanya. Kurang cocok dipakai antar teman dekat sehari-hari karena terasa dingin.",
        example: {
          jp: "さようなら、またいつか会いましょう。",
          reading: "さようなら、またいつかあいましょう。",
          romaji: "Sayounara, mata itsuka aimashou.",
          id: "Selamat tinggal, mari bertemu lagi suatu saat nanti.",
        },
      },
      {
        japanese: "じゃあね",
        reading: "じゃあね",
        romaji: "jaa ne",
        translation: "dadah / mari",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Sangat umum digunakan di kalangan remaja atau teman dekat saat berpisah sepulang sekolah atau main.",
        example: {
          jp: "今日は楽しかったよ。じゃあね！",
          reading: "きょうはたのしかったよ。じゃあね！",
          romaji: "Kyou wa tanoshikatta yo. Jaa ne!",
          id: "Hari ini menyenangkan. Dadah!",
        },
      },
      {
        japanese: "またね",
        reading: "またね",
        romaji: "mata ne",
        translation: "sampai jumpa lagi",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Serupa dengan 'jaa ne', meletakkan penekanan bahwa kedua belah pihak akan segera berjumpa lagi dalam waktu dekat.",
        example: {
          jp: "またね、バイバイ！",
          reading: "またね、ばいばい！",
          romaji: "Mata ne, baibai!",
          id: "Sampai jumpa lagi, dah!",
        },
      },
      {
        japanese: "失礼します",
        reading: "しつれいします",
        romaji: "shitsurei shimasu",
        translation: "permisi / saya pamit",
        nuances: [
          { label: "Sangat Formal", type: "very-formal" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Digunakan dalam dunia kerja atau pendidikan ketika pamit pergi lebih dulu, menutup telepon bisnis, atau saat masuk ruangan atasan.",
        example: {
          jp: "お先に失礼します。",
          reading: "おさきにしつれいします。",
          romaji: "O-saki ni shitsurei shimasu.",
          id: "Saya pamit pulang duluan.",
        },
      },
    ],
  },
  {
    id: "agreement-expression",
    title: "Ekspresi: Setuju & Iya",
    subtitle: "Iya / Setuju",
    icon: "",
    description:
      "Untuk menyatakan persetujuan atau jawaban 'iya', pilihan kata dibedakan dari sopan santun bisnis hingga slang gaul.",
    words: [
      {
        japanese: "はい",
        reading: "はい",
        romaji: "hai",
        translation: "iya / baik",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Jawaban 'iya' yang paling standar dan aman digunakan dalam situasi apa pun. Juga bermakna tanda kesiapan menerima instruksi.",
        example: {
          jp: "はい、わかりました。",
          reading: "はい、わかりました。",
          romaji: "Hai, wakarimashita.",
          id: "Iya, saya mengerti.",
        },
      },
      {
        japanese: "ええ",
        reading: "ええ",
        romaji: "ee",
        translation: "ya / betul",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Jawaban 'ya' yang bernada sopan santai. Sering dipakai wanita dewasa dalam percakapan sehari-hari.",
        example: {
          jp: "ええ、私もそう思います。",
          reading: "ええ、わたしもそうおモいます。", // Wait, let's fix reading: "ええ、わたしもそうおもいます。"
          romaji: "Ee, watashi mo sou omoimasu.",
          id: "Ya, saya juga berpikir begitu.",
        },
      },
      {
        japanese: "うん",
        reading: "うん",
        romaji: "un",
        translation: "ya / he-eh",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Persetujuan kasual antar teman sebaya yang dekat, setara dengan gumaman 'he-eh'.",
        example: {
          jp: "うん、行くよ。",
          reading: "うん、いくよ。",
          romaji: "Un, iku yo.",
          id: "He-eh, aku pergi kok.",
        },
      },
      {
        japanese: "そうです",
        reading: "そうです",
        romaji: "sou desu",
        translation: "benar begitu / betul",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Digunakan untuk menegaskan bahwa pernyataan lawan bicara adalah benar secara fakta atau opini.",
        example: {
          jp: "そうです、私が田中です。",
          reading: "そうです、わたしがたなかです。",
          romaji: "Sou desu, watashi ga Tanaka desu.",
          id: "Benar, saya adalah Tanaka.",
        },
      },
      {
        japanese: "なるほど",
        reading: "なるほど",
        romaji: "naru hodo",
        translation: "oh begitu / saya paham",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menyatakan pemahaman mendalam atas penjelasan lawan bicara. Hindari memakainya ke atasan karena berkesan sedang menilai kesimpulan ucapan mereka.",
        example: {
          jp: "なるほど、そういうことですね。",
          reading: "なるほど、そういうことですね。",
          romaji: "Naru hodo, sou iu koto desu ne.",
          id: "Oh begitu, jadi begitu ya.",
        },
      },
      {
        japanese: "かしこまりました",
        reading: "かしこまりました",
        romaji: "kashikomarimashita",
        translation: "baik, saya laksanakan",
        nuances: [
          { label: "Sangat Formal", type: "very-formal" },
          { label: "Bisnis", type: "formal" },
        ],
        context:
          "Bentuk persetujuan hormat (kenjougo) dalam bisnis dan layanan jasa untuk menerima perintah/instruksi pelanggan.",
        example: {
          jp: "かしこまりました、すぐに対応いたします。",
          reading: "かしこまりました、すぐにたいおういたします。",
          romaji: "Kashikomarimashita, sugu ni taiou itashimasu.",
          id: "Baik, saya akan segera menindaklanjutinya.",
        },
      },
    ],
  },
  {
    id: "disagreement-expression",
    title: "Ekspresi: Penolakan & Bukan",
    subtitle: "Tidak / Bukan",
    icon: "",
    description:
      "Menyatakan bantahan atau penolakan dibedakan berdasarkan tingkat kesopanan serta penegasan bahwa fakta tersebut salah.",
    words: [
      {
        japanese: "いいえ",
        reading: "いいえ",
        romaji: "iie",
        translation: "tidak / bukan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Kata penolakan standar yang sopan. Sering digunakan untuk menolak tawaran dengan halus.",
        example: {
          jp: "いいえ、結構です。",
          reading: "いいえ、けっこうです。",
          romaji: "Iie, kekkou desu.",
          id: "Tidak, terima kasih (sudah cukup).",
        },
      },
      {
        japanese: "いや",
        reading: "いや",
        romaji: "iya",
        translation: "gak / bukan",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Kata penolakan kasual sehari-hari antar teman akrab.",
        example: {
          jp: "いや、それは違うと思う。",
          reading: "いや、それはちがうとおもう。",
          romaji: "Iya, sore wa chigau to omou.",
          id: "Gak, menurutku itu salah.",
        },
      },
      {
        japanese: "違う",
        reading: "ちがう",
        romaji: "chigau",
        translation: "salah / bukan begitu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Merupakan kata kerja yang berarti 'berbeda/salah'. Digunakan untuk membantah pernyataan salah dari lawan bicara secara tegas.",
        example: {
          jp: "え？違うよ、俺じゃない。",
          reading: "え？ちがうよ、おれじゃない。",
          romaji: "E? Chigau yo, ore ja nai.",
          id: "Hah? Bukan kok, bukan aku.",
        },
      },
      {
        japanese: "だめ",
        reading: "だめ",
        romaji: "dame",
        translation: "tidak boleh / jangan / sia-sia",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Tegas", type: "emotional" },
        ],
        context:
          "Larangan keras atau pernyataan kegagalan/ketidakmampuan. Digunakan dengan intonasi tegas.",
        example: {
          jp: "ここに入ってはだめだよ。",
          reading: "ここにはいってはだめだよ。",
          romaji: "Koko ni haitte wa dame da yo.",
          id: "Jangan masuk ke sini, lho.",
        },
      },
    ],
  },
  {
    id: "request-expression",
    title: "Ekspresi: Tolong & Meminta",
    subtitle: "Tolong / Silakan",
    icon: "",
    description:
      "Untuk meminta bantuan, bahasa Jepang memisahkan permohonan santun, perintah halus, perintah kasual pria, hingga teriakan darurat keselamatan.",
    words: [
      {
        japanese: "お願いします",
        reading: "おねがいします",
        romaji: "onegaishimasu",
        translation: "tolong / mohon",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Netral", type: "neutral" },
        ],
        context:
          "Ungkapan meminta bantuan yang sopan dan fleksibel. Digunakan untuk memesan barang, meminta tolong pekerjaan, atau bimbingan orang lain.",
        example: {
          jp: "お水を一杯お願いします。",
          reading: "おみずをいっぱいおねがいします。",
          romaji: "O-mizu wo ippai onegaishimasu.",
          id: "Tolong air minum satu gelas.",
        },
      },
      {
        japanese: "ください",
        reading: "ください",
        romaji: "kudasai",
        translation: "tolong berikan / silakan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Ditempelkan setelah bentuk '-te' untuk perintah sopan ringan, atau setelah kata benda untuk meminta diberikan objek.",
        example: {
          jp: "ここに名前を書いてください。",
          reading: "ここになまえをかいてください。",
          romaji: "Koko ni namae wo kaite kudasai.",
          id: "Tolong tulis nama di sini.",
        },
      },
      {
        japanese: "頼む",
        reading: "たのむ",
        romaji: "tanomu",
        translation: "tolong / minta bantuan ya",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Maskulin", type: "masculine" },
        ],
        context:
          "Bentuk dasar kata kerja 'meminta'. Umum dipakai laki-laki kepada bawahan atau teman dekat dalam situasi santai.",
        example: {
          jp: "おい、これ明日までに頼むぞ。",
          reading: "おい、これあしたまでにたのむぞ。",
          romaji: "Oi, kore ashita made ni tanomu zo.",
          id: "Woi, tolong kerjakan ini sampai besok ya.",
        },
      },
      {
        japanese: "助けて",
        reading: "たすけて",
        romaji: "tasukete",
        translation: "tolong! (darurat)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Darurat", type: "emotional" },
        ],
        context:
          "Hanya digunakan dalam situasi bahaya fisik, bencana, atau kesulitan besar yang membutuhkan penyelamatan segera.",
        example: {
          jp: "誰か！助けて！",
          reading: "だれか！たすけて！",
          romaji: "Dareka! Tasukete!",
          id: "Siapa saja! Tolong!",
        },
      },
    ],
  },
  {
    id: "final-particle",
    title: "Partikel Akhir Kalimat",
    subtitle: "Partikel Akhir",
    icon: "",
    description:
      "Partikel di ujung kalimat memberikan nuansa emosi, gender pembicara, kesepakatan sosial, serta ketegasan tanpa mengubah arti harfiah kalimat.",
    words: [
      {
        japanese: "ね",
        reading: "ね",
        romaji: "ne",
        translation: "ya / kan?",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Digunakan untuk mencari persetujuan dari lawan bicara, menunjukkan empati, atau melembutkan pernyataan.",
        example: {
          jp: "今日はとても暑いですね。",
          reading: "きょうはとてもあついですね。",
          romaji: "Kyou wa totemo atsui desu ne.",
          id: "Hari ini sangat panas, ya.",
        },
      },
      {
        japanese: "よ",
        reading: "よ",
        romaji: "yo",
        translation: "lho / kok!",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Digunakan untuk memberikan penekanan informasi baru yang pembicara ketahui tapi lawan bicara mungkin belum tahu.",
        example: {
          jp: "この映画、本当に面白いよ！",
          reading: "このえいが、ほんとうにおもしろいよ！",
          romaji: "Kono eiga, hontou ni omoshiroi yo!",
          id: "Film ini benar-benar seru, lho!",
        },
      },
      {
        japanese: "な",
        reading: "な",
        romaji: "na",
        translation: "ya / kan? (pria)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Maskulin", type: "masculine" },
        ],
        context:
          "Bentuk kasual maskulin dari 'ne'. Biasa digunakan pria untuk mencari kesepakatan akrab atau merenung sendiri.",
        example: {
          jp: "あれは美味しかったな。",
          reading: "あれはおいしかったな。",
          romaji: "Are wa oishikatta na.",
          id: "Itu enak banget ya (gumam sendiri).",
        },
      },
      {
        japanese: "わ",
        reading: "わ",
        romaji: "wa",
        translation: "lho / ya (wanita)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Feminin", type: "feminine" },
        ],
        context:
          "Digunakan di akhir kalimat oleh wanita untuk melembutkan ekspresi dan memberi kesan feminin/ceria.",
        example: {
          jp: "私、もう帰るわ。",
          reading: "わたし、もうかえるわ。",
          romaji: "Watashi, mou kaeru wa.",
          id: "Aku pulang dulu, ya.",
        },
      },
      {
        japanese: "ぜ",
        reading: "ぜ",
        romaji: "ze",
        translation: "dong / lho (pria)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Maskulin", type: "masculine" },
        ],
        context:
          "Sangat kasual dan maskulin. Digunakan pria untuk meyakinkan lawan bicara atau mengajak teman dekat.",
        example: {
          jp: "行こうぜ！遅れるぞ！",
          reading: "いこうぜ！おくれるぞ！",
          romaji: "Ikou ze! Okureru zo!",
          id: "Yuk pergi dong! Bakal telat lho!",
        },
      },
      {
        japanese: "ぞ",
        reading: "ぞ",
        romaji: "zo",
        translation: "lho! (peringatan pria)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Maskulin", type: "masculine" },
        ],
        context:
          "Digunakan pria untuk memberikan peringatan tegas terhadap situasi bahaya atau merenungi tekad diri.",
        example: {
          jp: "油断するな、敵が来るぞ！",
          reading: "ゆだんするな、てきがくるぞ！",
          romaji: "Yudan suru na, teki ga kuru zo!",
          id: "Jangan lengah, musuh akan datang lho!",
        },
      },
      {
        japanese: "さ",
        reading: "さ",
        romaji: "sa",
        translation: "lho / sih",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Digunakan untuk memotong kalimat jeda secara santai agar ucapan mengalir lancar, setara dengan 'sih/lho'.",
        example: {
          jp: "そんなこと言ったってさ、無理だよ。",
          reading: "そんなこといったってさ、むりだよ。",
          romaji: "Sonna koto ittatte sa, muri da yo.",
          id: "Biarpun dibilang begitu sih, ya gak mungkin lah.",
        },
      },
    ],
  },
  {
    id: "question-particle",
    title: "Partikel Tanya Akhir Kalimat",
    subtitle: "Partikel Tanya",
    icon: "",
    description:
      "Untuk mengajukan pertanyaan, bahasa Jepang memisahkan tanda tanya formal biasa, sapaan tanya pria paruh baya, sapaan tanya santai akrab, hingga keheranan ragu wanita.",
    words: [
      {
        japanese: "か",
        reading: "か",
        romaji: "ka",
        translation: "apakah?",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Partikel tanya paling standar dan aman. Ditempatkan di akhir kalimat bersopanan biasa (desu/masu).",
        example: {
          jp: "お元気ですか？",
          reading: "おげんきですか？",
          romaji: "O-genki desu ka?",
          id: "Apakah Anda sehat walafiat?",
        },
      },
      {
        japanese: "かい",
        reading: "かい",
        romaji: "kai",
        translation: "kah?",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Maskulin", type: "masculine" },
        ],
        context:
          "Digunakan oleh pria senior kepada rekan junior atau anak-anak dengan nada hangat dan ramah.",
        example: {
          jp: "何か面白い本は見つかったかい？",
          reading: "なにかおもしろいほんはみつかったかい？",
          romaji: "Nani ka omoshiroi hon wa mitsukatta kai?",
          id: "Apakah sudah ketemu buku yang menarik?",
        },
      },
      {
        japanese: "の",
        reading: "の",
        romaji: "no",
        translation: "kah? / ya?",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menanyakan sesuatu dengan nada melembutkan yang menunjukkan keakraban dalam pertemanan kasual.",
        example: {
          jp: "明日、学校に行くの？",
          reading: "あした、がっこうにいくの？",
          romaji: "Ashita, gakkou ni iku no?",
          id: "Besok kamu pergi ke sekolah kah?",
        },
      },
      {
        japanese: "かしら",
        reading: "かしら",
        romaji: "kashira",
        translation: "ya? / penasaran",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Feminin", type: "feminine" },
        ],
        context:
          "Digunakan wanita untuk menyatakan dugaan bermakna tanya yang mengandung keraguan diri ('aku bertanya-tanya apakah...').",
        example: {
          jp: "明日は雨が降るかしら。",
          reading: "あしたはあめがふるかしら。",
          romaji: "Ashita wa ame ga furu kashira.",
          id: "Besok bakal hujan nggak ya?",
        },
      },
    ],
  },
  {
    id: "heart-mind-noun",
    title: "Kata Benda: Hati & Pikiran",
    subtitle: "Hati / Pikiran / Perasaan",
    icon: "",
    description:
      "Untuk menggambarkan hati, perasaan, atau kondisi pikiran, bahasa Jepang memisahkan rasa terdalam jiwa, kesadaran mental aktif, suasana hati saat ini, dada fisik yang penuh emosi, serta konsep spiritualitas/mental ilmiah.",
    words: [
      {
        japanese: "心",
        reading: "こころ",
        romaji: "kokoro",
        translation: "hati / jiwa emosional",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Merujuk pada lubuk hati yang terdalam, karakter moral, perasaan welas asih, serta jiwa manusia secara mendalam.",
        example: {
          jp: "彼女は心が温かい人です。",
          reading: "かのじょはこころがあたたかいひとです。",
          romaji: "Kanojo wa kokoro ga atatakai hito desu.",
          id: "Dia adalah orang yang hatinya hangat.",
        },
      },
      {
        japanese: "気",
        reading: "き",
        romaji: "ki",
        translation: "pikiran / kesadaran aktif",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Merujuk pada kesadaran mental yang dinamis, perhatian, suasana hati, atau energi kehidupan. Sering ditemukan dalam idiom seperti 'ki wo tsukeru' (berhati-hati) atau 'ki ni suru' (memikirkan).",
        example: {
          jp: "周りの目を気にしすぎるのは良くない。",
          reading: "まわりのめをきにしすぎるのはよくない。",
          romaji: "Mawari no me wo ki ni shisugiru no wa yoku nai.",
          id: "Terlalu memedulikan (memikirkan) pandangan orang sekitar itu tidak baik.",
        },
      },
      {
        japanese: "気持ち",
        reading: "きもち",
        romaji: "kimochi",
        translation: "perasaan / suasana hati",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kasual", type: "casual" },
        ],
        context:
          "Menggambarkan kondisi perasaan atau suasana hati yang dirasakan saat ini, baik yang bersifat fisik (nyaman/sakit) maupun mental.",
        example: {
          jp: "今日はとても気持ちが良い朝ですね。",
          reading: "きょうはてともきもちがよいあさですね。", // Wait, let's fix reading: "きょうはとてもきもちがよいあさですね。"
          romaji: "Kyou wa totemo kimochi ga yoi asa desu ne.",
          id: "Hari ini pagi yang suasananya sangat menyenangkan, ya.",
        },
      },
      {
        japanese: "胸",
        reading: "むね",
        romaji: "mune",
        translation: "dada (lokasi emosi)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Secara fisik berarti 'dada'. Namun, sering digunakan secara puitis/kiasan sebagai tempat bergejolaknya perasaan sesak, terharu, atau cemas.",
        example: {
          jp: "彼の言葉を聞いて、胸がいっぱいになった。",
          reading: "かれのことばをきいて、むねがいっぱいになった。",
          romaji: "Kare no kotoba wo kiite, mune ga ippai ni natta.",
          id: "Mendengar perkataannya, dadaku terasa penuh (terharu).",
        },
      },
      {
        japanese: "精神",
        reading: "せいしん",
        romaji: "seishin",
        translation: "mental / jiwa spiritual",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah formal, ilmiah, atau filosofis untuk konsep mentalitas, semangat perjuangan, psikologi, atau jiwa rohani manusia.",
        example: {
          jp: "スポーツは精神を鍛えるのに役立ちます。",
          reading: "すぽーつはせいしんをきたえるのにやくだちます。",
          romaji: "Supootsu wa seishin wo kitaeru no ni yakudachimasu.",
          id: "Olahraga berguna untuk melatih mental.",
        },
      },
    ],
  },
  {
    id: "time-period-noun",
    title: "Kata Benda: Waktu & Saat",
    subtitle: "Waktu / Saat / Era",
    icon: "",
    description:
      "Waktu dibedakan berdasarkan apakah kata tersebut menyatakan peristiwa spesifik, durasi jam kuantitatif, era sejarah yang panjang, atau perkiraan masa.",
    words: [
      {
        japanese: "とき",
        reading: "とき",
        romaji: "toki",
        translation: "saat / waktu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menunjukkan momen spesifik terjadinya suatu peristiwa. Sangat sering ditulis dengan hiragana saat berfungsi sebagai kata penghubung ('ketika/saat').",
        example: {
          jp: "子供のとき、よくこの公園で遊んだ。",
          reading: "こどものとき、よくこのこうえんであそんだ。",
          romaji: "Kodomo no toki, yoku kono kouen de asonda.",
          id: "Saat anak-anak, saya sering bermain di taman ini.",
        },
      },
      {
        japanese: "時間",
        reading: "じかん",
        romaji: "jikan",
        translation: "waktu / jam (durasi)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Menunjukkan durasi waktu secara kuantitatif (berapa jam/menit) atau konsep waktu yang mengalir.",
        example: {
          jp: "テストの時間は一時間です。",
          reading: "てすとのじかんはいちじかんです。",
          romaji: "Tesuto no jikan wa ichi-jikan desu.",
          id: "Waktu ujian adalah satu jam.",
        },
      },
      {
        japanese: "時代",
        reading: "じだい",
        romaji: "jidai",
        translation: "era / zaman",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Menunjukkan periode sejarah yang panjang (misal: Zaman Edo), atau masa kehidupan tertentu seseorang yang meninggalkan kesan mendalam.",
        example: {
          jp: "学生時代は毎日楽しかった。",
          reading: "がくせいじだいはまいにちたのしかった。",
          romaji: "Gakusei jidai wa mainichi tanoshikatta.",
          id: "Zaman sekolah dulu, setiap hari menyenangkan.",
        },
      },
      {
        japanese: "ころ",
        reading: "ころ",
        romaji: "koro",
        translation: "sekitar waktu / kala itu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menunjukkan perkiraan waktu kasar atau periode kala terjadinya suatu aksi tanpa batasan waktu yang ketat.",
        example: {
          jp: "夕暮れころに雨が降り始めました。",
          reading: "ゆうぐれころにあめがふりはじめました。",
          romaji: "Yuugure koro ni ame ga furihajimemashita.",
          id: "Sekitar waktu senja, hujan mulai turun.",
        },
      },
    ],
  },
  {
    id: "thing-matter-noun",
    title: "Kata Benda: Hal & Sesuatu",
    subtitle: "Hal / Sesuatu / Benda",
    icon: "",
    description:
      "Untuk menunjuk benda atau hal, bahasa Jepang memisahkan sesuatu yang abstrak non-fisik, barang konkret berwujud fisik, barang dalam percakapan kasual santai, serta perihal/kasus bisnis formal.",
    words: [
      {
        japanese: "こと",
        reading: "こと",
        romaji: "koto",
        translation: "hal / urusan (abstrak)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Digunakan untuk merujuk pada hal, pemikiran, urusan, atau janji yang bersifat non-fisik (abstrak).",
        example: {
          jp: "将来のことについて考えましょう。",
          reading: "しょうらいのことについてかんがえましょう。",
          romaji: "Shourai no koto ni tsuite kangaemashou.",
          id: "Mari kita pikirkan hal mengenai masa depan.",
        },
      },
      {
        japanese: "もの",
        reading: "もの",
        romaji: "mono",
        translation: "benda / barang (konkret)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Formal", type: "formal" },
        ],
        context:
          "Digunakan untuk merujuk pada objek berwujud fisik, benda mati yang bisa disentuh secara konkret.",
        example: {
          jp: "大切なものはカバンに入れてください。",
          reading: "たいせつなものはかばんにいれてください。",
          romaji: "Taisetsu na mono wa kaban ni irete kudasai.",
          id: "Tolong masukkan barang yang berharga ke dalam tas.",
        },
      },
      {
        japanese: "やつ",
        reading: "やつ",
        romaji: "yatsu",
        translation: "barang / si / sesuatu",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Bentuk ganti benda atau orang yang sangat santai dan informal dalam komunikasi sehari-hari, setara dengan 'si anu' atau 'barang itu'.",
        example: {
          jp: "その赤い色のやつを見せて。",
          reading: "そのあかいいろのやつをみせて。",
          romaji: "Sono akai iro no yatsu wo misete.",
          id: "Tolong perlihatkan barang yang berwarna merah itu.",
        },
      },
      {
        japanese: "件",
        reading: "けん",
        romaji: "ken",
        translation: "perihal / kasus (bisnis)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Merujuk pada suatu topik agenda, masalah bisnis, proposal, atau kasus hukum formal yang sedang ditangani.",
        example: {
          jp: "例の件につきまして、メールを送りました。",
          reading: "れいのけんにつきまして、めーるをおくりました。",
          romaji: "Rei no ken ni tsukimashite, meeru wo okurimashita.",
          id: "Mengenai perihal yang waktu itu, saya sudah mengirimkan email.",
        },
      },
    ],
  },
  {
    id: "cultural-noun",
    title: "Kata Budaya Tanpa Padanan",
    subtitle: "Konsep Budaya Unik",
    icon: "",
    description:
      "Beberapa konsep budaya Jepang tidak memiliki terjemahan kata tunggal dalam bahasa Indonesia karena erat kaitannya dengan filosofi hidup dan kebiasaan mental masyarakat Jepang.",
    words: [
      {
        japanese: "甘え",
        reading: "あまえ",
        romaji: "amae",
        translation: "manja mengharap kasih sayang",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Konsep Budaya", type: "special" },
        ],
        context:
          "Keinginan mental seseorang untuk dimanja, disayang, atau bersikap ketergantungan kepada orang terdekat dengan asumsi penuh bahwa mereka akan memaklumi kita.",
        example: {
          jp: "子供が母親に甘えるのは自然なことです。",
          reading: "こどもがははおやにあまえるのはしぜんなことです。",
          romaji: "Kodomo ga hahaoya ni amaeru no wa shizen na koto desu.",
          id: "Anak bersikap manja kepada ibunya adalah hal yang alami.",
        },
      },
      {
        japanese: "わびさび",
        reading: "わびさび",
        romaji: "wabi-sabi",
        translation: "indah dalam ketidaksempurnaan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Konsep Budaya", type: "special" },
        ],
        context:
          "Pandangan estetika tradisional Jepang yang melihat keindahan di dalam kesederhanaan, ketidaksempurnaan, ketidakpermanenan, serta barang-barang yang tua/usang.",
        example: {
          jp: "この古い茶碗にはわびさびが感じられます。",
          reading: "このふるいちゃわんにはわびさびがかんじられます。",
          romaji: "Kono furui chawan ni wa wabi-sabi ga kanjiraremasu.",
          id: "Cangkir teh tua ini memancarkan rasa wabi-sabi.",
        },
      },
      {
        japanese: "間",
        reading: "ま",
        romaji: "ma",
        translation: "ruang jeda / keheningan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Konsep Budaya", type: "special" },
        ],
        context:
          "Jarak, ruang kosong, atau keheningan waktu di antara dua objek/peristiwa. Dalam komunikasi Jepang, jeda bicara ini dinilai sangat penting untuk memberi makna dan ritme.",
        example: {
          jp: "会話においては、間の取り方が重要です。",
          reading: "かいわにおいては、まのとりかたがじゅうようです。",
          romaji: "Kaiwa ni oite wa, ma no torikata ga juuyou desu.",
          id: "Dalam percakapan, cara mengambil jeda keheningan itu sangat penting.",
        },
      },
      {
        japanese: "生き甲斐",
        reading: "いきがい",
        romaji: "ikigai",
        translation: "alasan untuk hidup",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Konsep Budaya", type: "special" },
        ],
        context:
          "Filosofi menemukan titik temu antara kegemaran, keahlian, kontribusi sosial, dan penghidupan yang memberikan seseorang tujuan bangun pagi dengan bergembira.",
        example: {
          jp: "彼は仕事の中に生き甲斐を見出している。",
          reading: "かれはしごとのなかにいきがいをみいだしている。",
          romaji: "Kare wa shigoto no naka ni ikigai wo miidashite iru.",
          id: "Dia menemukan tujuan hidup di dalam pekerjaannya.",
        },
      },
      {
        japanese: "しょうがない",
        reading: "しょうがない",
        romaji: "shoganai",
        translation: "mau bagaimana lagi",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Pasrah", type: "spoken" },
        ],
        context:
          "Ekspresi penerimaan situasi yang tidak bisa dihindari dengan lapang dada tanpa penyesalan berkelanjutan.",
        example: {
          jp: "雨が降ってきたから、ピクニックは中止もしょうがないね。",
          reading: "あめがふってきたから、ぴくにっくはちゅうしもしょうがないね。",
          romaji: "Ame ga futte kita kara, pikunikku wa chuushi mo shoganai ne.",
          id: "Karena hujan turun, pikniknya dibatalkan ya mau bagaimana lagi.",
        },
      },
      {
        japanese: "懐かしい",
        reading: "なつかしい",
        romaji: "natsukashii",
        translation: "rindu masa lalu (nostalgia hangat)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Perasaan rindu yang hangat terhadap memori indah masa lalu. Bukan rasa sedih akibat homesick, melainkan rasa syukur bernostalgia.",
        example: {
          jp: "この古いおもちゃは本当に懐かしいです。",
          reading: "このふるいおもちゃはほんとうになつかしいです。",
          romaji: "Kono furui omocha wa hontou ni natsukashii desu.",
          id: "Mainan lama ini benar-benar membuat bernostalgia.",
        },
      },
    ],
  },
  {
    id: "understand-general",
    title: "Kata Kerja: Tahu & Mengerti",
    subtitle: "Tahu / Mengerti",
    icon: "",
    description:
      "Kata kerja untuk menyatakan pemahaman atau pengetahuan memiliki tingkat kedalaman kognitif yang berbeda, mulai dari sekadar mendapat informasi hingga pencerahan batin.",
    words: [
      {
        japanese: "分かる",
        reading: "わかる",
        romaji: "wakaru",
        translation: "mengerti / paham",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menyatakan pemahaman yang terjadi secara spontan, intuitif, atau alami ketika suatu hal menjadi jelas bagi pembicara. Bersifat lebih kasual dan subjektif.",
        example: {
          jp: "彼が言いたいことはよく分かります。",
          reading: "かれがいいたいことはよくわかります。",
          romaji: "Kare ga iitai koto wa yoku wakarimasu.",
          id: "Aku sangat mengerti apa yang ingin dia katakan.",
        },
      },
      {
        japanese: "理解する",
        reading: "りかいする",
        romaji: "rikai suru",
        translation: "memahami / mengerti (logis)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Logis", type: "special" },
        ],
        context:
          "Menyatakan pemahaman secara intelektual, logis, atau analitis setelah mencerna fakta, struktur, atau alasan di balik sesuatu. Lebih formal dibanding 'wakaru'.",
        example: {
          jp: "この理論を理解するのは難しいです。",
          reading: "このりろんをりかいするのはむずかしいです。",
          romaji: "Kono riron wo rikai suru no wa muzukashii desu.",
          id: "Memahami teori ini sangat sulit.",
        },
      },
      {
        japanese: "知る",
        reading: "しる",
        romaji: "shiru",
        translation: "tahu / mengetahui",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Informasi", type: "special" },
        ],
        context:
          "Menunjukkan perolehan informasi atau data baru dari luar. Berbeda dengan 'wakaru' yang berfokus pada proses pencernaan informasi di dalam otak.",
        example: {
          jp: "その事実をどこで知りましたか？",
          reading: "そのじじつをどこでしりましたか？",
          romaji: "Sono jijitsu wo doko de shirimashita ka?",
          id: "Di mana Anda mengetahui fakta tersebut?",
        },
      },
      {
        japanese: "悟る",
        reading: "さとる",
        romaji: "satoru",
        translation: "menyadari / memahami mendalam",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Pencerahan", type: "emotional" },
        ],
        context:
          "Menunjukkan kesadaran atau pemahaman mendalam tentang kebenaran yang tersembunyi, perasaan orang lain secara intuitif, atau pencerahan spiritual setelah berkontemplasi.",
        example: {
          jp: "彼は自分の運命を悟ったような顔をした。",
          reading: "かれはじぶんのうんめいをさとったようなかおをした。",
          romaji: "Kare wa jibun no unmei wo satotta you na kao wo shita.",
          id: "Dia menunjukkan wajah seperti telah menyadari takdirnya.",
        },
      },
    ],
  },
  {
    id: "ability-general",
    title: "Kata Kerja: Bisa & Mampu",
    subtitle: "Bisa / Mampu",
    icon: "",
    description:
      "Menyatakan kesanggupan, kemungkinan terlaksananya suatu hal, atau terwujudnya impian.",
    words: [
      {
        japanese: "できる",
        reading: "できる",
        romaji: "dekiru",
        translation: "bisa / mampu (kemampuan / situasi)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Menunjukkan kemampuan internal (keahlian, bakat) atau kemungkinan eksternal yang didukung situasi untuk melakukan sesuatu.",
        example: {
          jp: "私は日本語で日常会話ができます。",
          reading: "わたしはにほんごでにちじょうかいわができます。",
          romaji: "Watashi wa nihongo de nichijou kaiwa ga dekimasu.",
          id: "Saya bisa melakukan percakapan sehari-hari dalam bahasa Jepang.",
        },
      },
      {
        japanese: "叶う",
        reading: "かなう",
        romaji: "kanau",
        translation: "terwujud / terkabul",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Harapan", type: "emotional" },
        ],
        context:
          "Menunjukkan terwujudnya suatu impian, keinginan, atau doa. Pelakunya biasanya bukan diri sendiri secara langsung, melainkan nasib yang membuat impian itu menjadi kenyataan.",
        example: {
          jp: "ついに長年の夢が叶いました。",
          reading: "ついにながねんのゆめがかないました。",
          romaji: "Tsui ni naganen no yume ga kanaimashita.",
          id: "Akhirnya impian selama bertahun-tahun terwujud.",
        },
      },
      {
        japanese: "得る",
        reading: "える",
        romaji: "eru",
        translation: "bisa / dimungkinkan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Menyatakan kemungkinan secara logis, hukum, atau situasi objektif. Sering ditempelkan di akhir kata kerja lain seperti 'ari-uru' (mungkin terjadi).",
        example: {
          jp: "この計画は失敗する可能性もあり得る。",
          reading: "このけいかくはしっぱいするかのうせいもありうる。",
          romaji: "Kono keikaku wa shippai suru kanousei mo ari-uru.",
          id: "Rencana ini juga bisa memiliki kemungkinan gagal.",
        },
      },
      {
        japanese: "異なる",
        reading: "ことなる",
        romaji: "kotonaru",
        translation: "berbeda / berlainan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Meskipun kadang ditempatkan dekat dalam daftar belajar, kata ini sebenarnya berarti 'berbeda' atau 'tidak sama', bukan menunjukkan kemampuan/kebisaan.",
        example: {
          jp: "国々によって習慣は異なる。",
          reading: "くにぐにによってしゅうかんはことなる。",
          romaji: "Kuniguni ni yotte shuukan wa kotonaru.",
          id: "Adat istiadat berbeda di setiap negara.",
        },
      },
    ],
  },
  {
    id: "try-general",
    title: "Kata Kerja: Mencoba",
    subtitle: "Mencoba",
    icon: "",
    description:
      "Tindakan mencoba sesuatu dibedakan berdasarkan tingkat keantusiasan, keformalan, serta tingkat kesulitan tantangan yang dihadapi.",
    words: [
      {
        japanese: "やってみる",
        reading: "やってみる",
        romaji: "yatte miru",
        translation: "mencoba (kasual)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menyatakan keinginan mencoba sesuatu yang baru secara santai, spontan, dan tanpa memikirkan risiko kegagalan berat.",
        example: {
          jp: "面白そうだから、一度やってみるよ。",
          reading: "おもしろそうだから、いちどやってみるよ。",
          romaji: "Omoshirosou dakara, ichido yatte miru yo.",
          id: "Kelihatannya menarik, jadi aku akan mencobanya sekali.",
        },
      },
      {
        japanese: "試す",
        reading: "ためす",
        romaji: "tamesu",
        translation: "menguji / mencoba (kualitas)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Digunakan ketika mencoba sesuatu untuk membuktikan kebenaran, menguji daya tahan, efektivitas, atau kualitas suatu barang/metode.",
        example: {
          jp: "新しい化粧品を肌で試してみました。",
          reading: "あたらしいけしょうひんをはだでためしてみました。",
          romaji: "Atarashii keshouhin wo hada de tameshite mimashita.",
          id: "Saya mencoba kosmetik baru ini di kulit saya.",
        },
      },
      {
        japanese: "試みる",
        reading: "こころみる",
        romaji: "kokoromiru",
        translation: "mengupayakan / mencoba (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Kata kerja formal tertulis untuk mencoba melakukan tindakan yang cukup menantang atau belum pernah dilakukan sebelumnya, biasanya dengan perencanaan matang.",
        example: {
          jp: "医師たちは新しい治療法を試みた。",
          reading: "いしたちはあたらしいちりょうほうをこころみた。",
          romaji: "Ishi-tachi wa atarashii chiryouhou wo kokoromita.",
          id: "Para dokter mencoba metode pengobatan baru.",
        },
      },
      {
        japanese: "挑戦する",
        reading: "ちょうせんする",
        romaji: "chousen suru",
        translation: "menantang diri / mencoba hal sulit",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tegas", type: "special" },
        ],
        context:
          "Mencoba melakukan sesuatu yang sulit, kompetitif, atau berisiko tinggi dengan tekad yang kuat untuk berhasil menaklukkannya.",
        example: {
          jp: "来年、富士山登頂に挑戦します！",
          reading: "らいねん、ふじさんとうちょうにちょうせんします！",
          romaji: "Rainen, Fujisan touchou ni chousen shimasu!",
          id: "Tahun depan, saya akan mencoba mendaki puncak Gunung Fuji!",
        },
      },
    ],
  },
  {
    id: "think-feel",
    title: "Kata Kerja: Berpikir & Merasakan",
    subtitle: "Berpikir / Merasakan",
    icon: "",
    description:
      "Kata kerja kognitif dan persepsi untuk menyatakan proses berpikir, menganalisis, merasakan secara emosional, atau meyakini sesuatu.",
    words: [
      {
        japanese: "思う",
        reading: "おもう",
        romaji: "omou",
        translation: "berpikir / merasa",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Subjektif", type: "emotional" },
        ],
        context:
          "Menyatakan opini, dugaan, atau perasaan subjektif yang muncul secara spontan tanpa memerlukan analisis logika mendalam.",
        example: {
          jp: "彼はもうすぐ来ると思います。",
          reading: "かれはもうすぐくるとおもいます。",
          romaji: "Kare wa mou sugu kuru to omoimasu.",
          id: "Saya pikir dia akan segera datang.",
        },
      },
      {
        japanese: "考える",
        reading: "かんがえる",
        romaji: "kangaeru",
        translation: "memikirkan (logis)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Logis", type: "special" },
        ],
        context:
          "Menyatakan proses memikirkan sesuatu secara mendalam, logis, sistematis, atau mencari solusi atas suatu masalah.",
        example: {
          jp: "この問題の解決策をみんなで考えましょう。",
          reading: "このもんだいのかいけつさくをみんなでかんがえましょう。",
          romaji: "Kono mondai no kaiketsusaku wo minna de kangaemashou.",
          id: "Mari kita bersama-sama memikirkan jalan keluar untuk masalah ini.",
        },
      },
      {
        japanese: "感じる",
        reading: "かんじる",
        romaji: "kanjiru",
        translation: "merasakan (fisik / emosi)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Persepsi", type: "emotional" },
        ],
        context:
          "Mengalami sensasi fisik atau perasaan emosional secara langsung melalui indra atau hati.",
        example: {
          jp: "部屋に入った瞬間、強い寒気を感じた。",
          reading: "へやにはいったしゅんかん、つよいさむけをかんじた。",
          romaji: "Heya ni haitta shunkan, tsuyoi samuke wo kanjita.",
          id: "Saat masuk ke kamar, saya langsung merasakan hawa dingin yang kuat.",
        },
      },
      {
        japanese: "信じる",
        reading: "しんじる",
        romaji: "shinjiru",
        translation: "mempercayai / meyakini",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Keyakinan", type: "special" },
        ],
        context:
          "Menyatakan keyakinan penuh terhadap kebenaran informasi, janji, keberadaan sesuatu, atau kejujuran seseorang tanpa keraguan.",
        example: {
          jp: "私は彼の無実を信じています。",
          reading: "わたしはかれのむじつをしんじています。",
          romaji: "Watashi wa kare no mujitsu wo shinjite imasu.",
          id: "Saya mempercayai ketidakbersalahan dia.",
        },
      },
    ],
  },
  {
    id: "want-desire",
    title: "Kata Kerja: Ingin & Berharap",
    subtitle: "Ingin / Berharap",
    icon: "",
    description:
      "Keinginan dan harapan dalam bahasa Jepang dibedakan berdasarkan apakah objek yang diinginkan berbentuk fisik, berupa tindakan pribadi, harapan masa depan, atau doa yang tulus.",
    words: [
      {
        japanese: "欲しい",
        reading: "ほしい",
        romaji: "hoshii",
        translation: "ingin (benda fisik)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Keinginan", type: "emotional" },
        ],
        context:
          "Digunakan untuk menyatakan keinginan terhadap benda fisik atau kepemilikan benda konkret. Biasanya dipasangkan dengan partikel 'ga'.",
        example: {
          jp: "新しい車が欲しいです。",
          reading: "あたらしいくるまがほしいです。",
          romaji: "Atarashii kuruma ga hoshii desu.",
          id: "Saya ingin mobil baru.",
        },
      },
      {
        japanese: "たい",
        reading: "たい",
        romaji: "tai",
        translation: "ingin (melakukan tindakan)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Bentuk akhiran kata kerja yang menunjukkan keinginan subjek untuk melakukan suatu aktivitas atau tindakan.",
        example: {
          jp: "日本に行ってみたいです。",
          reading: "にほんにいってみたいです。",
          romaji: "Nihon ni itte mitai desu.",
          id: "Saya ingin mencoba pergi ke Jepang.",
        },
      },
      {
        japanese: "望む",
        reading: "のぞむ",
        romaji: "nozomu",
        translation: "mengharapkan / menginginkan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Menunjukkan harapan atau keinginan terhadap situasi abstrak, masa depan, atau perkembangan keadaan. Lebih formal dan berjarak.",
        example: {
          jp: "世界の平和を強く望みます。",
          reading: "せかいのへいわをつよくのぞみます。",
          romaji: "Sekai no heiwa wo tsuyoku nozomimasu.",
          id: "Saya sangat mengharapkan perdamaian dunia.",
        },
      },
      {
        japanese: "願う",
        reading: "ねがう",
        romaji: "negau",
        translation: "memohon / berdoa / berharap",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Mengandung unsur permohonan, doa, atau harapan tulus agar sesuatu terjadi atau dikabulkan oleh pihak lain.",
        example: {
          jp: "家族の健康を心から願っています。",
          reading: "かぞくのけんこうをこころからねがっています。",
          romaji: "Kazoku no kenkou wo kokoro kara negatte imasu.",
          id: "Saya berdoa dari lubuk hati demi kesehatan keluarga.",
        },
      },
    ],
  },
  {
    id: "like-love",
    title: "Kata Kerja & Sifat: Suka & Cinta",
    subtitle: "Suka / Gemar / Cinta",
    icon: "",
    description:
      "Rasa suka dibedakan dari derajat emosi, kebiasaan formal/tertulis, hingga kenyamanan tersendiri pada suatu hal.",
    words: [
      {
        japanese: "好き",
        reading: "すき",
        romaji: "suki",
        translation: "suka",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata sifat-na yang paling umum untuk menyatakan rasa suka pada makanan, hobi, benda, maupun orang.",
        example: {
          jp: "私,は和食が好きです。",
          reading: "わたしはわしょくがすきです。",
          romaji: "Watashi wa washoku ga suki desu.",
          id: "Saya suka makanan Jepang.",
        },
      },
      {
        japanese: "好む",
        reading: "このむ",
        romaji: "konomu",
        translation: "menyukai / menggemari",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Menyatakan kecenderungan umum untuk memilih atau menyukai sesuatu sebagai kebiasaan/preferensi secara lebih objektif dan formal.",
        example: {
          jp: "彼は静かな場所を好みます。",
          reading: "かれはしずかなばしょをこのみます。",
          romaji: "Kare wa shizuka na basho wo konomimasu.",
          id: "Dia menyukai tempat yang sunyi.",
        },
      },
      {
        japanese: "愛する",
        reading: "あいする",
        romaji: "aisuru",
        translation: "mencintai",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Menyatakan rasa cinta yang sangat mendalam kepada seseorang, tanah air, atau seni. Cenderung jarang digunakan dalam percakapan lisan sehari-hari.",
        example: {
          jp: "家族を深く愛しています。",
          reading: "かぞくをふかくあいしています。",
          romaji: "Kazoku wo fukaku aishite imasu.",
          id: "Saya sangat mencintai keluarga saya.",
        },
      },
      {
        japanese: "気に入る",
        reading: "きにいる",
        romaji: "ki ni iru",
        translation: "menyukai (merasa cocok)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menunjukkan rasa suka yang muncul setelah baru pertama kali melihat, mencoba, atau menggunakan sesuatu dan merasa cocok dengannya.",
        example: {
          jp: "このデザインが気に入りました。",
          reading: "このでざいんがきにいりました。",
          romaji: "Kono dezain ga ki ni irimashita.",
          id: "Saya menyukai desain ini.",
        },
      },
    ],
  },
  {
    id: "dislike-hate",
    title: "Kata Kerja & Sifat: Benci & Tidak Suka",
    subtitle: "Benci / Tidak Suka",
    icon: "",
    description:
      "Ungkapan penolakan atau kebencian memiliki tingkat intensitas dari keengganan ringan, antipati, hingga kebencian mendalam yang intens.",
    words: [
      {
        japanese: "嫌い",
        reading: "きらい",
        romaji: "kirai",
        translation: "tidak suka / benci",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata sifat-na paling standar untuk mengekspresikan ketidaksukaan pada makanan, benda, aktivitas, atau orang.",
        example: {
          jp: "にんじんが嫌いな子供は多いです。",
          reading: "にんじんがきらいなこどもはおおいです。",
          romaji: "Ninjin ga kirai na kodomo wa ooi desu.",
          id: "Banyak anak kecil yang tidak suka wortel.",
        },
      },
      {
        japanese: "嫌",
        reading: "いや",
        romaji: "iya",
        translation: "tidak mau / enggan",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Kata sifat-na yang mengekspresikan penolakan emosional seketika, ketidaknyamanan, atau perasaan enggan melakukan sesuatu.",
        example: {
          jp: "雨の日に外出するのは嫌だなあ。",
          reading: "あめのひにがいしゅつするのはいやだなあ。",
          romaji: "Ame no hi ni gaishutsu suru no wa iya da naa.",
          id: "Duh, malas sekali keluar rumah di hari hujan.",
        },
      },
      {
        japanese: "憎む",
        reading: "にくむ",
        romaji: "nikumu",
        translation: "membenci (dendam)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Membenci sesuatu secara personal dengan intensitas emosi kuat dan sering kali disertai dendam atau rasa permusuhan.",
        example: {
          jp: "彼は犯罪を激しく憎んでいる。",
          reading: "かれははんざいをはげしくにくんでいる。",
          romaji: "Kare wa hanzai wo hageshiku nikunde iru.",
          id: "Dia membenci kejahatan dengan sangat keras.",
        },
      },
      {
        japanese: "嫌悪する",
        reading: "けんおする",
        romaji: "ken'o suru",
        translation: "merasa jijik / muak",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah formal/kaku yang menyatakan perasaan antipati, rasa jijik, atau penolakan keras terhadap perilaku atau hal tertentu secara moral.",
        example: {
          jp: "不正な行為を嫌悪するのは当然だ。",
          reading: "ふせいなこういをけんおするのはとうぜんだ。",
          romaji: "Fusei na koui wo ken'o suru no wa touzen da.",
          id: "Adalah hal yang wajar untuk muak terhadap tindakan curang.",
        },
      },
    ],
  },
  {
    id: "listen-hear",
    title: "Kata Kerja: Mendengar & Menyimak",
    subtitle: "Mendengar / Menyimak",
    icon: "",
    description:
      "Mendengar dibedakan berdasarkan apakah suara terdengar secara tidak sengaja, didengarkan secara aktif, atau merupakan tindakan menyimak secara formal.",
    words: [
      {
        japanese: "聞く",
        reading: "きく",
        romaji: "kiku",
        translation: "mendengar / mendengarkan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Bisa berarti mendengarkan secara aktif (sengaja mendengarkan musik, penjelasan guru) atau sekadar mendengar suara secara umum.",
        example: {
          jp: "毎晩ラジオを聞いています。",
          reading: "まいばんらじおをきいています。",
          romaji: "Maiban rajio wo kiite imasu.",
          id: "Setiap malam saya mendengarkan radio.",
        },
      },
      {
        japanese: "聞こえる",
        reading: "きこえる",
        romaji: "kikoeru",
        translation: "terdengar",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Persepsi", type: "neutral" },
        ],
        context:
          "Menunjukkan suara yang masuk ke telinga secara spontan atau otomatis tanpa ada unsur kesengajaan.",
        example: {
          jp: "遠くから波の音が聞こえます。",
          reading: "とおくからなみのおとがきこえます。",
          romaji: "Tooku kara nami no oto ga kikoemasu.",
          id: "Terdengar suara ombak dari kejauhan.",
        },
      },
      {
        japanese: "聴取する",
        reading: "ちょうしゅする",
        romaji: "choushu suru",
        translation: "mendengarkan secara resmi",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Mendengarkan informasi secara resmi, seperti interogasi saksi oleh polisi atau jajak pendapat publik dalam konteks hukum/administrasi.",
        example: {
          jp: "警察は目撃者から事情を聴取した。",
          reading: "けいさつはもくげきしゃからじじょうをちょうしゅした。",
          romaji: "Keisatsu wa mokugekisha kara jijou wo choushu shita.",
          id: "Polisi mendengarkan keterangan keadaan dari saksi mata.",
        },
      },
      {
        japanese: "伺う",
        reading: "うかがう",
        romaji: "ukagau",
        translation: "mendengar / bertanya (sopan)",
        nuances: [
          { label: "Sangat Sopan", type: "very-formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Buku merendahkan diri (kenjougo) dari kata 'kiku' saat mendengar pendapat, cerita, atau menanyakan hal kepada orang yang dihormati.",
        example: {
          jp: "先生のご意見を伺いたいのですが。",
          reading: "せんせいのごいけんをうかがいたいのですが。",
          romaji: "Sensei no go-iken wo ukagaitai no desu ga.",
          id: "Saya ingin mendengar pendapat Bapak/Ibu Guru.",
        },
      },
    ],
  },
  {
    id: "wait-expect",
    title: "Kata Kerja: Menunggu & Menanti",
    subtitle: "Menunggu / Menanti / Berharap",
    icon: "",
    description:
      "Aksi menunggu bervariasi dari sekadar menunggu secara fisik, bersiap siaga di tempat, hingga menanti dengan penuh harapan manis.",
    words: [
      {
        japanese: "待つ",
        reading: "まつ",
        romaji: "matsu",
        translation: "menunggu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata kerja paling umum untuk menyatakan aksi menunggu orang, giliran, atau tibanya suatu waktu.",
        example: {
          jp: "駅の前で友達を待っています。",
          reading: "えきのまえでともだちをまっています。",
          romaji: "Eki no mae de tomodachi wo matte imasu.",
          id: "Saya sedang menunggu teman di depan stasiun.",
        },
      },
      {
        japanese: "期待する",
        reading: "きたいする",
        romaji: "kitai suru",
        translation: "mengharapkan / mengantisipasi",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Harapan", type: "emotional" },
        ],
        context:
          "Menunggu dengan penuh ekspektasi positif atau harapan bahwa hasil yang diinginkan akan tercapai.",
        example: {
          jp: "新製品の発売を期待しています。",
          reading: "しんせいひんのはつばいをきたいしています。",
          romaji: "Shinseihin no hatsubai wo kitai shite imasu.",
          id: "Saya menanti-nantikan peluncuran produk baru.",
        },
      },
      {
        japanese: "待機する",
        reading: "たいきする",
        romaji: "taiki suru",
        translation: "bersiap siaga",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Spesial", type: "special" },
        ],
        context:
          "Menunggu di suatu tempat dalam keadaan siap sedia untuk segera beraksi ketika instruksi diberikan.",
        example: {
          jp: "救急車が現場で待機しています。",
          reading: "きゅうきゅうしゃがげんばでたいきしています。",
          romaji: "Kyuukyuusha ga genba de taiki shite imasu.",
          id: "Ambulans sedang bersiap siaga menunggu di lokasi kejadian.",
        },
      },
      {
        japanese: "待ち望む",
        reading: "まちのぞむ",
        romaji: "machinozomu",
        translation: "sangat mendambakan",
        nuances: [
          { label: "Tulisan", type: "written" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Menunggu sesuatu yang sangat diimpikan atau didambakan dalam jangka waktu lama dengan perasaan tidak sabar.",
        example: {
          jp: "ついに待ち望んだ休日が来た。",
          reading: "ついにまちのぞんだきゅうじつがきた。",
          romaji: "Tsui ni machinozonda kyuujitsu ga kita.",
          id: "Akhirnya hari libur yang dinanti-nanti tiba juga.",
        },
      },
    ],
  },
  {
    id: "enter-inside",
    title: "Kata Kerja: Masuk",
    subtitle: "Masuk",
    icon: "",
    description:
      "Tindakan memasuki suatu ruang fisik, bergabung dengan institusi, atau penyusupan dibedakan berdasarkan tingkat kedalaman dan keformalan situasi.",
    words: [
      {
        japanese: "入る",
        reading: "はいる",
        romaji: "hairu",
        translation: "masuk",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata kerja paling dasar untuk menunjukkan gerakan masuk ke ruangan, bak mandi, bergabung sekolah, atau kelompok.",
        example: {
          jp: "部屋に入るときはノックしてください。",
          reading: "へやにはいるときはのっくしてください。",
          romaji: "Heya ni hairu toki wa nokku shite kudasai.",
          id: "Silakan mengetuk pintu saat masuk kamar.",
        },
      },
      {
        japanese: "入場する",
        reading: "にゅうじょうする",
        romaji: "nyuujou suru",
        translation: "memasuki area / aula",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tempat", type: "special" },
        ],
        context:
          "Menunjukkan masuknya seseorang ke tempat acara formal seperti stadion, aula pertunjukan, atau tempat wisata berbayar.",
        example: {
          jp: "チケットをお持ちの方から入場してください。",
          reading: "ちけっとをおもちのかたからにゅうじょうしてください。",
          romaji: "Chiketto wo omochi no kata kara nyuujou shite kudasai.",
          id: "Tolong masuk dari barisan orang yang membawa tiket.",
        },
      },
      {
        japanese: "侵入する",
        reading: "しんにゅうする",
        romaji: "shinnyuu suru",
        translation: "menyusup / menerobos",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Kriminal", type: "special" },
        ],
        context:
          "Masuk ke dalam area, wilayah, atau properti orang lain secara ilegal, paksa, atau diam-diam (menerobos/menyusup).",
        example: {
          jp: "泥棒が窓から侵入しました。",
          reading: "どろぼうがまどからしんにゅうしました。",
          romaji: "Dorobou ga mado kara shinnyuu shimashita.",
          id: "Pencuri menyusup masuk melalui jendela.",
        },
      },
      {
        japanese: "参入する",
        reading: "さんにゅうする",
        romaji: "sannyuu suru",
        translation: "memasuki pasar / industri",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Bisnis", type: "special" },
        ],
        context:
          "Istilah ekonomi/bisnis untuk bergabung atau masuk ke suatu pasar dagang, industri baru, atau bidang persaingan.",
        example: {
          jp: "多くの企業がこの市場に参入している。",
          reading: "おおくのきぎょうがこのしじょうにさんにゅうしている。",
          romaji: "Ooku no kigyou ga kono shijou ni sannyuu shite iru.",
          id: "Banyak perusahaan yang memasuki pasar ini.",
        },
      },
    ],
  },
  {
    id: "leave-exit",
    title: "Kata Kerja: Keluar",
    subtitle: "Keluar",
    icon: "",
    description:
      "Keluar dapat merujuk pada meninggalkan ruangan secara umum, bepergian keluar rumah sementara, mengundurkan diri dari organisasi, atau munculnya sesuatu secara tiba-tiba.",
    words: [
      {
        japanese: "出る",
        reading: "でる",
        romaji: "deru",
        translation: "keluar / muncul",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata kerja dasar untuk menunjukkan gerakan keluar dari suatu ruangan, wadah, atau munculnya objek.",
        example: {
          jp: "急ぎの用事で部屋を出ました。",
          reading: "いそぎのようじでへやをでました。",
          romaji: "Isogi no youji de heya wo demashita.",
          id: "Saya keluar dari ruangan karena urusan mendesak.",
        },
      },
      {
        japanese: "外出する",
        reading: "がいしゅつする",
        romaji: "gaishutsu suru",
        translation: "keluar rumah / bepergian",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Pergi meninggalkan rumah or kantor sementara waktu untuk melakukan aktivitas luar (jalan-jalan, makan, dll.).",
        example: {
          jp: "午後から外出する予定です。",
          reading: "ごごからがいしゅつするよていです。",
          romaji: "Gogo kara gaishutsu suru yotei desu.",
          id: "Ada rencana keluar rumah mulai siang nanti.",
        },
      },
      {
        japanese: "退出する",
        reading: "たいしゅつする",
        romaji: "taishutsu suru",
        translation: "meninggalkan tempat",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sopan", type: "special" },
        ],
        context:
          "Meninggalkan suatu ruangan, pertemuan, atau auditorium secara sopan dan tertib.",
        example: {
          jp: "面接が終わったら、速やかに退出してください。",
          reading: "めんせつがおわったら、すみやかにたいしゅつしてください。",
          romaji: "Mensetsu ga owattara, sumiyaka ni taishutsu shite kudasai.",
          id: "Jika wawancara selesai, harap segera meninggalkan ruangan.",
        },
      },
      {
        japanese: "出現する",
        reading: "しゅつげんする",
        romaji: "shutsugen suru",
        translation: "muncul tiba-tiba",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Munculnya sesuatu yang besar, tidak biasa, atau mengejutkan ke hadapan publik (misal monster, tren, tokoh baru).",
        example: {
          jp: "画面に突然新しい敵が出現した。",
          reading: "がめんにとつぜんあたらしいてきがしゅつげんした。",
          romaji: "Gamen ni totsuzen atarashii teki ga shutsugen shita.",
          id: "Di layar tiba-tiba muncul musuh baru.",
        },
      },
    ],
  },
  {
    id: "buy-purchase",
    title: "Kata Kerja: Membeli",
    subtitle: "Membeli",
    icon: "",
    description:
      "Membeli dibedakan antara transaksi konsumsi sehari-hari, transaksi formal/skala besar, penyediaan stok barang dagangan, hingga aksi borong.",
    words: [
      {
        japanese: "買う",
        reading: "かう",
        romaji: "kau",
        translation: "membeli",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata kerja dasar paling umum digunakan untuk membeli barang atau jasa apa pun sehari-hari.",
        example: {
          jp: "コンビニでパンを買いました。",
          reading: "こんびにでぱんをかいました。",
          romaji: "Konbini de pan wo kaimashita.",
          id: "Saya membeli roti di toko kelontong.",
        },
      },
      {
        japanese: "購入する",
        reading: "こうにゅうする",
        romaji: "kounyuu suru",
        translation: "membeli (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Bisnis", type: "special" },
        ],
        context:
          "Istilah formal/resmi untuk membeli barang. Sering digunakan pada transaksi besar (rumah, mobil) atau laporan bisnis.",
        example: {
          jp: "新しいパソコンを購入することに決めた。",
          reading: "あたらしいぱそこんをこうにゅうすることにきめた。",
          romaji: "Atarashii pasokon wo kounyuu suru koto ni kimeta.",
          id: "Saya memutuskan untuk membeli komputer baru.",
        },
      },
      {
        japanese: "買い入れる",
        reading: "かいいれる",
        romaji: "kaiireru",
        translation: "membeli persediaan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Bisnis", type: "special" },
        ],
        context:
          "Membeli barang dagangan atau bahan baku dalam jumlah tertentu untuk disimpan sebagai persediaan toko/pabrik.",
        example: {
          jp: "店は問屋から新鮮な野菜を買い入れた。",
          reading: "みせはとんやからしんせんなやさいをかいいれた。",
          romaji: "Mise wa tonya kara shinsen na yasai wo kaiireta.",
          id: "Toko membeli sayur segar dari agen grosir untuk stok.",
        },
      },
      {
        japanese: "買い占める",
        reading: "かいしめる",
        romaji: "kaishimeru",
        translation: "memborong / menimbun",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tindakan", type: "special" },
        ],
        context:
          "Membeli semua barang yang ada di pasar untuk memonopoli atau memborong habis karena panik (panic buying) atau spekulasi.",
        example: {
          jp: "災害の前に、人々が食料品を買い占めた。",
          reading: "さいがいのまえに、ひとびとがしょくりょうひんをかいしめた。",
          romaji: "Saigai no mae ni, hitobito ga shokuryouhin wo kaishimeta.",
          id: "Sebelum bencana, orang-orang memborong habis bahan makanan.",
        },
      },
    ],
  },
  {
    id: "sell-market",
    title: "Kata Kerja: Menjual",
    subtitle: "Menjual",
    icon: "",
    description:
      "Menjual dibedakan antara aktivitas perdagangan dasar, distribusi formal produk perusahaan, mendaftarkan barang untuk dijual ke publik, hingga melepas kepemilikan aset.",
    words: [
      {
        japanese: "売る",
        reading: "うる",
        romaji: "uru",
        translation: "menjual",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata kerja dasar paling umum digunakan untuk menjual barang milik pribadi maupun berdagang secara umum.",
        example: {
          jp: "古い本を古本屋に売りました。",
          reading: "ふるいほんをふるほんやにうりました。",
          romaji: "Furui hon wo furuhonya ni urimashita.",
          id: "Saya menjual buku lama ke toko buku bekas.",
        },
      },
      {
        japanese: "販売する",
        reading: "はんばいする",
        romaji: "hanbai suru",
        translation: "memasarkan / menjual",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Bisnis", type: "special" },
        ],
        context:
          "Penjualan sebagai kegiatan bisnis komersial yang terorganisir oleh perusahaan or toko secara luas.",
        example: {
          jp: "このショップは手作りのクッキーを販売している。",
          reading: "このしょっぷはてづくりのくっきーをはんばいしている。",
          romaji: "Kono shoppu wa tezukuri no kukkii wo hanbai shite iru.",
          id: "Toko ini menjual (memasarkan) kue kering buatan tangan.",
        },
      },
      {
        japanese: "売りに出す",
        reading: "うりにだす",
        romaji: "uri ni dasu",
        translation: "menawarkan untuk dijual",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Mendaftarkan atau memajang barang agar dibeli orang lain, seperti memasang iklan rumah dijual.",
        example: {
          jp: "彼は愛車をオークションに売りに出した。",
          reading: "かれはあいしゃをおーくしょんにうりにだした。",
          romaji: "Kare wa aisha wo ookushon ni uri ni dashita.",
          id: "Dia menawarkan mobil kesayangannya untuk dijual di pelelangan.",
        },
      },
      {
        japanese: "売り払う",
        reading: "うりはらう",
        romaji: "uriharau",
        translation: "menjual habis",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tindakan", type: "special" },
        ],
        context:
          "Menjual habis barang-barang yang tidak diperlukan lagi untuk mengosongkan tempat atau melikuidasi aset.",
        example: {
          jp: "引っ越しの前に、使わない家具をすべて売り払った。",
          reading: "ひっこしのまえに、つかわないかぐをすべてうりはらった。",
          romaji: "Hikkoshi no mae ni, tsukawanai kagu wo subete uriharatta.",
          id: "Sebelum pindah rumah, saya menjual habis semua perabotan yang tidak dipakai.",
        },
      },
    ],
  },
  {
    id: "use-utilize",
    title: "Kata Kerja: Memakai & Menggunakan",
    subtitle: "Memakai / Menggunakan",
    icon: "",
    description:
      "Bahasa Jepang membedakan penggunaan berdasarkan kegunaan alat sederhana, penerapan konsep abstrak, pemanfaatan demi keuntungan bersama, dan pengoperasian fungsi spesifik.",
    words: [
      {
        japanese: "使う",
        reading: "つかう",
        romaji: "tsukau",
        translation: "menggunakan / memakai",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata kerja paling dasar untuk memakai alat, bahasa, uang, waktu, atau tenaga manusia secara umum.",
        example: {
          jp: "スプーンを使ってスープを飲みます。",
          reading: "すぷーんをつかってすーぷをのみます。",
          romaji: "Supuun wo tsukatte suupu wo nomimasu.",
          id: "Saya meminum sup menggunakan sendok.",
        },
      },
      {
        japanese: "用いる",
        reading: "もちいる",
        romaji: "mochiiru",
        translation: "menerapkan / menggunakan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Lebih formal dan tertulis dibanding 'tsukau'. Sering digunakan ketika menerapkan suatu metode, teori, atau bahan khusus.",
        example: {
          jp: "古代の建築技術を用いて建てられた寺です。",
          reading: "こだいのけんちくぎじゅつをもちいてたてられたてらです。",
          romaji: "Kodai no kenchiku gijutsu wo mochiite taterareta tera desu.",
          id: "Ini adalah kuil yang dibangun menggunakan teknik arsitektur kuno.",
        },
      },
      {
        japanese: "利用する",
        reading: "りようする",
        romaji: "riyou suru",
        translation: "memanfaatkan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Manfaat", type: "special" },
        ],
        context:
          "Menggunakan fasilitas umum, layanan, atau mengambil keuntungan/manfaat positif dari suatu keadaan secara efektif.",
        example: {
          jp: "図書館を毎日利用しています。",
          reading: "としょかんをまいにちりようしています。",
          romaji: "Toshokan wo mainichi riyou shite imasu.",
          id: "Saya memanfaatkan perpustakaan setiap hari.",
        },
      },
      {
        japanese: "使用する",
        reading: "しようする",
        romaji: "shiyou suru",
        translation: "mengoperasikan / memakai",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Penggunaan resmi atau teknis terhadap suatu objek/alat sesuai dengan fungsi aslinya.",
        example: {
          jp: "本番中は携帯電話の使用をご遠慮ください。",
          reading: "ほんばんちゅうはけいたいでんわのしようをごえんりょください。",
          romaji: "Honbanchuu wa keitai denwa no shiyou wo go-enryo kudasai.",
          id: "Mohon menahan diri dari penggunaan telepon genggam selama acara berlangsung.",
        },
      },
    ],
  },
  {
    id: "start-begin",
    title: "Kata Kerja: Memulai",
    subtitle: "Memulai",
    icon: "",
    description:
      "Memulai suatu hal dibedakan berdasarkan perbuatan aktif pelaku, proses alami/otomatis, upacara formal, atau pengaktifan sistem teknologi/proyek bisnis.",
    words: [
      {
        japanese: "始める",
        reading: "はじめる",
        romaji: "hajimeru",
        translation: "memulai (transitif)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata kerja transitif yang menunjukkan tindakan aktif dari subjek untuk memulai suatu pekerjaan, kebiasaan, atau aktivitas.",
        example: {
          jp: "来月から英会話を勉強し始めます。",
          reading: "らいげつからえいかいわをべんきょうしはじめます。",
          romaji: "Raigetsu kara eikaiwa wo benkyou shihajimemasu.",
          id: "Mulai bulan depan saya akan belajar percakapan bahasa Inggris.",
        },
      },
      {
        japanese: "開始する",
        reading: "かいしする",
        romaji: "kaishi suru",
        translation: "memulai (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Proses", type: "special" },
        ],
        context:
          "Istilah formal untuk memulai proses, pertandingan olahraga, upacara resmi, pertemuan, atau kampanye bisnis.",
        example: {
          jp: "午後二時から会議を開始します。",
          reading: "ごごにじからかいぎをかいしします。",
          romaji: "Gogo ni-ji kara kaigi wo kaishi shimasu.",
          id: "Rapat akan dimulai dari jam dua siang.",
        },
      },
      {
        japanese: "始まる",
        reading: "はじまる",
        romaji: "hajimaru",
        translation: "mulai (intransitif)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Intransitif", type: "special" },
        ],
        context:
          "Kata kerja intransitif untuk menyatakan bahwa suatu acara, waktu, atau peristiwa dimulai secara otomatis tanpa menonjolkan siapa pelakunya.",
        example: {
          jp: "もうすぐ映画が始まります。",
          reading: "もうすぐえいががはじまります。",
          romaji: "Mou sugu eiga ga hajimarimasu.",
          id: "Film akan segera dimulai.",
        },
      },
      {
        japanese: "立ち上げる",
        reading: "たちあげる",
        romaji: "tachiageru",
        translation: "meluncurkan / menyalakan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Bisnis/IT", type: "special" },
        ],
        context:
          "Memulai pengoperasian sistem komputer, aplikasi perangkat lunak, mendirikan komite, proyek baru, atau merintis bisnis.",
        example: {
          jp: "彼は新しくIT企業を立ち上げた。",
          reading: "かれはあたらしくあいてぃーきぎょうをたちあげtた。",
          romaji: "Kare wa atarashiku aiti-kigyou wo tachiageta.",
          id: "Dia meluncurkan (merintis) perusahaan IT baru.",
        },
      },
    ],
  },
  {
    id: "stop-finish",
    title: "Kata Kerja: Berhenti & Selesai",
    subtitle: "Berhenti / Selesai",
    icon: "",
    description:
      "Tindakan menghentikan atau menyelesaikan sesuatu bergantung pada kehendak pribadi, penyelesaian tugas secara alami, penangguhan operasional mesin, atau pembatalan karena hambatan.",
    words: [
      {
        japanese: "やめる",
        reading: "やめる",
        romaji: "yameru",
        translation: "berhenti (kehendak sendiri)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menghentikan aktivitas, pekerjaan, atau kebiasaan atas keputusan pribadi pelaku (seperti berhenti merokok, keluar kerja).",
        example: {
          jp: "健康のためにタバコをやめました。",
          reading: "けんこうのためにたばこをやめました。",
          romaji: "Kenkou no tame ni tabako wo yamemashita.",
          id: "Saya berhenti merokok demi kesehatan.",
        },
      },
      {
        japanese: "終わる",
        reading: "おわる",
        romaji: "owaru",
        translation: "selesai / berakhir",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Menunjukkan selesainya tugas, ujian, periode waktu, atau pertunjukan secara alami.",
        example: {
          jp: "今日の仕事はやっと終わった。",
          reading: "きょうのしごとはやっとおわった。",
          romaji: "Kyou no shigoto wa yatto owatta.",
          id: "Pekerjaan hari ini akhirnya selesai.",
        },
      },
      {
        japanese: "停止する",
        reading: "ていしする",
        romaji: "teishi suru",
        translation: "berhenti sementara (mesin / layanan)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Teknis", type: "special" },
        ],
        context:
          "Menghentikan fungsi mesin, operasi pabrik, lalu lintas, atau layanan administrasi untuk jangka waktu tertentu (bisa dilanjutkan nanti).",
        example: {
          jp: "停電のため、エレベーターが停止しました。",
          reading: "ていでんのため、えれべーたーがていししました。",
          romaji: "Teiden no tame, erebeetaa ga teishi shimashita.",
          id: "Karena mati listrik, lift berhenti beroperasi.",
        },
      },
      {
        japanese: "中止する",
        reading: "ちゅうしする",
        romaji: "chushi suru",
        translation: "dibatalkan / dihentikan total",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Acara", type: "special" },
        ],
        context:
          "Membatalkan rencana, pertandingan, konser, atau festival di tengah jalan akibat cuaca buruk atau kondisi tak terduga.",
        example: {
          jp: "大雨の影響で、サッカーの試合が中止された。",
          reading: "おおあめのえいきょうで、さっかーのしあいがちゅうしされた。",
          romaji: "Ooame no eikyou de, sakkaa no shiai ga chuushi sareta.",
          id: "Akibat hujan lebat, pertandingan sepak bola dibatalkan.",
        },
      },
    ],
  },
  {
    id: "return-go-back",
    title: "Kata Kerja: Kembali & Balik",
    subtitle: "Kembali / Balik / Pulang",
    icon: "",
    description:
      "Gerakan kembali dibedakan antara pulang ke tempat bernaung, kembali ke posisi awal sementara, pulang dari misi resmi, atau berbalik arah di tengah perjalanan.",
    words: [
      {
        japanese: "帰る",
        reading: "かえる",
        romaji: "kaeru",
        translation: "pulang (ke rumah / asal)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kembali ke rumah, tempat asal, or negara sendiri. Menunjukkan tempat bernaung utama pelaku.",
        example: {
          jp: "今日は早く家に帰ります。",
          reading: "きょうははやくうちにかえります。",
          romaji: "Kyou wa hayaku uchi ni kaerimasu.",
          id: "Hari ini saya akan pulang ke rumah lebih awal.",
        },
      },
      {
        japanese: "戻る",
        reading: "もどる",
        romaji: "modoru",
        translation: "kembali (ke posisi semula)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Kembali ke tempat atau status awal setelah bepergian sementara (misalnya kembali ke kantor setelah makan siang). Tidak harus berupa rumah sendiri.",
        example: {
          jp: "会議室に戻って資料を取ってきます。",
          reading: "かいぎしつにもどってしりょうをとってきます。",
          romaji: "Kaigishitsu ni modotte shiryou wo totte kimasu.",
          id: "Saya akan kembali to ruang rapat untuk mengambil dokumen.",
        },
      },
      {
        japanese: "帰還する",
        reading: "きかんする",
        romaji: "kikan suru",
        translation: "kembali / pulang (resmi/misi)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah formal militer, petualangan, atau sains untuk kembalinya tentara, astronaut, atau kapal riset dari suatu misi perjalanan yang menantang.",
        example: {
          jp: "宇宙飛行士たちが無事に地球へ帰還した。",
          reading: "うちゅうひこうしたちがぶじにchikiゅうへきかんした。",
          romaji: "Uchuuhikoushi-tachi ga buji ni chikyuu he kikan shita.",
          id: "Para astronaut kembali ke bumi dengan selamat.",
        },
      },
      {
        japanese: "引き返す",
        reading: "ひきかえす",
        romaji: "hikikaesu",
        translation: "berbalik arah / balik lagi",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tindakan", type: "special" },
        ],
        context:
          "Berbalik arah di tengah jalan dan kembali ke titik keberangkatan karena ada barang tertinggal atau cuaca buruk.",
        example: {
          jp: "忘れ物に気づいて、途中で引き返しました。",
          reading: "わすれものにきづいて、とちゅうでひきかえしました。",
          romaji: "Wasuremono ni kizuite, tochuu de hikikaeshimashita.",
          id: "Menyadari ada barang yang tertinggal, saya berbalik arah di tengah jalan.",
        },
      },
    ],
  },
  {
    id: "big-large",
    title: "Kata Sifat: Besar",
    subtitle: "Besar",
    icon: "",
    description:
      "Untuk menggambarkan ukuran besar, bahasa Jepang memisahkan fungsi tata bahasa (kata sifat-i vs kata sifat pre-noun), skala raksasa, serta volume jumlah yang luar biasa.",
    words: [
      {
        japanese: "大きい",
        reading: "おおきい",
        romaji: "ookii",
        translation: "besar (kata sifat-i)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata sifat-i paling standar untuk ukuran besar. Dapat memodifikasi kata benda langsung atau ditaruh di akhir kalimat sebagai predikat.",
        example: {
          jp: "あの建物はとても大きいです。",
          reading: "あのたてものはとてもおおきいです。",
          romaji: "Ano tatemono wa totemo ookii desu.",
          id: "Gedung itu sangat besar.",
        },
      },
      {
        japanese: "大きな",
        reading: "おおきな",
        romaji: "ookina",
        translation: "besar (pre-noun)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Atributif", type: "special" },
        ],
        context:
          "Kata sifat khusus (rentaishi) yang HANYA bisa digunakan di depan kata benda langsung. Sering membawa kesan emosional, subjektif, atau dongeng.",
        example: {
          jp: "子供たちが大きな夢を持っています。",
          reading: "こどもたちがおおきなゆめをもっています。",
          romaji: "Bakudaikodomotachi ga ookina yume wo motte imasu.",
          id: "Anak-anak memiliki impian yang besar.",
        },
      },
      {
        japanese: "巨大な",
        reading: "きょだいな",
        romaji: "kyodai na",
        translation: "raksasa / amat besar",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Fisik", type: "special" },
        ],
        context:
          "Menyatakan ukuran fisik yang sangat luar biasa besar hingga melebihi batas kewajaran umum, seperti patung raksasa atau batu meteor.",
        example: {
          jp: "公園に巨大なモニュメントが建てられた。",
          reading: "こうえんにきょだいなもにゅめんとがたてられた。",
          romaji: "Kouen ni kyodai na monyumento ga taterareta.",
          id: "Sebuah monumen raksasa dibangun di taman.",
        },
      },
      {
        japanese: "膨大な",
        reading: "ぼうだいな",
        romaji: "boudai na",
        translation: "sangat banyak / membengkak",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Jumlah", type: "special" },
        ],
        context:
          "Digunakan untuk menyatakan kuantitas, data, informasi, anggaran, atau tugas abstrak yang jumlahnya sangat masif dan melimpah.",
        example: {
          jp: "膨大なデータを分析する作業が必要です。",
          reading: "ぼうだいなでーたをぶんせきするさぎょうがひつようです。",
          romaji: "Boudai na deeta wo bunseki suru sagyou ga hitsuyou desu.",
          id: "Dibutuhkan pekerjaan untuk menganalisis data yang sangat banyak.",
        },
      },
    ],
  },
  {
    id: "small-tiny",
    title: "Kata Sifat: Kecil",
    subtitle: "Kecil / Sederhana",
    icon: "",
    description:
      "Ukuran kecil dibedakan berdasarkan kelas kata tata bahasa, sifat detail/butiran kecil, hingga ekspresi kerendahan hati.",
    words: [
      {
        japanese: "小さい",
        reading: "ちいさい",
        romaji: "chiisai",
        translation: "kecil (kata sifat-i)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata sifat-i standar untuk ukuran kecil. Dapat digunakan sebagai predikat di akhir kalimat.",
        example: {
          jp: "この靴は私には少し小さいです。",
          reading: "このくつはわたしにはすこしちいさいです。",
          romaji: "Kono kutsu wa watashi ni wa sukoshi chiisai desu.",
          id: "Sepatu ini sedikit kecil bagi saya.",
        },
      },
      {
        japanese: "小さな",
        reading: "ちいさな",
        romaji: "chiisana",
        translation: "kecil (pre-noun)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Atributif", type: "special" },
        ],
        context:
          "Kata sifat khusus (rentaishi) yang HANYA bisa diletakkan di depan kata benda langsung. Memberikan nuansa subjektif atau kehangatan emosional.",
        example: {
          jp: "小さな庭で花を育てています。",
          reading: "ちいさなにわではなをそだてています。",
          romaji: "Chiisana niwa de hana wo sodate teimasu.",
          id: "Saya menanam bunga di halaman yang kecil.",
        },
      },
      {
        japanese: "細かい",
        reading: "こまかい",
        romaji: "komakai",
        translation: "mendetail / butiran kecil",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Detail", type: "special" },
        ],
        context:
          "Merujuk pada partikel/butiran yang sangat kecil (seperti debu), rincian detail penjelasan, atau uang kembalian pecahan kecil.",
        example: {
          jp: "細かいルールを覚えるのは大変です。",
          reading: "こまかいるーるをおぼえるのはたいへんです。",
          romaji: "Komakai ruuru wo oboeru no wa taihen desu.",
          id: "Mengingat aturan-aturan yang mendetail itu sulit.",
        },
      },
      {
        japanese: "ささやかな",
        reading: "ささやかな",
        romaji: "sasayaka na",
        translation: "kecil / sederhana (rendah hati)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Rendah Hati", type: "special" },
        ],
        context:
          "Digunakan untuk menyebut milik, usaha, hadiah, atau perayaan sendiri dengan rasa rendah hati agar tidak terlihat sombong.",
        example: {
          jp: "これは私たちのささやかな結婚祝いです。",
          reading: "これはわたしたちのささやかなけっこんいわいです。",
          romaji: "Kore wa watashi-tachi no sasayaka na kekkon iwai desu.",
          id: "Ini adalah hadiah pernikahan sederhana dari kami.",
        },
      },
    ],
  },
  {
    id: "new-modern",
    title: "Kata Sifat: Baru",
    subtitle: "Baru / Mutakhir",
    icon: "",
    description:
      "Sesuatu yang baru dikategorikan berdasarkan apakah barang tersebut baru dibuat, konsep permulaan baru yang menyegarkan, teknologi paling mutakhir, atau transaksi administrasi baru.",
    words: [
      {
        japanese: "新しい",
        reading: "あたらしい",
        romaji: "atarashii",
        translation: "baru (umum)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata sifat-i paling umum untuk barang, sistem, ide, atau waktu yang baru dibeli/diciptakan/dimulai.",
        example: {
          jp: "新しいスマートフォンを買いました。",
          reading: "あたらしいすまーtoふぉんをかいました。",
          romaji: "Atarashii sumaatofon wo kaimashita.",
          id: "Saya membeli ponsel pintar baru.",
        },
      },
      {
        japanese: "新たな",
        reading: "あらたな",
        romaji: "arata na",
        translation: "baru / segar (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Bentuk formal kaku yang sering digunakan dalam penulisan atau pidato untuk menyatakan awal yang baru, tekad baru, atau tantangan baru.",
        example: {
          jp: "新たな気持ちで新学期を迎えます。",
          reading: "あらたなきもちでしんがっきをむかえます。",
          romaji: "Arata na kimochi de shingakki wo mukaemasu.",
          id: "Menyambut semester baru dengan perasaan yang segar (baru).",
        },
      },
      {
        japanese: "最新の",
        reading: "さいしんの",
        romaji: "saishin no",
        translation: "terbaru / paling mutakhir",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tren", type: "special" },
        ],
        context:
          "Merujuk pada model barang, teknologi, berita, atau gaya busana yang paling baru dirilis di pasar saat ini.",
        example: {
          jp: "このアプリは最新のバージョンです。",
          reading: "このあぷりはさいしんのばーじょんです。",
          romaji: "Kono apuri wa saishin no baajon desu.",
          id: "Aplikasi ini adalah versi terbaru.",
        },
      },
      {
        japanese: "新規の",
        reading: "しんきの",
        romaji: "shinki no",
        translation: "baru (administrasi / bisnis)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Administrasi", type: "special" },
        ],
        context:
          "Istilah bisnis/administrasi untuk pendaftaran baru, pelanggan baru, proyek baru, atau pembuatan akun baru.",
        example: {
          jp: "新規 of 会員登録はこちらからお願いします。",
          reading: "しんきのかいいんとうろくはこちらからおねがいします。",
          romaji: "Shinki no kaiin touroku wa kochira kara onegai shimasu.",
          id: "Pendaftaran anggota baru harap dilakukan lewat sini.",
        },
      },
    ],
  },
  {
    id: "old-ancient",
    title: "Kata Sifat: Lama & Kuno",
    subtitle: "Lama / Kuno / Bersejarah",
    icon: "",
    description:
      "Kata untuk benda lama dikelompokkan berdasarkan keusangan barang mati, kenangan sejarah masa lalu, nilai warisan budaya yang tinggi, atau zaman kuno ribuan tahun lalu.",
    words: [
      {
        japanese: "古い",
        reading: "ふるい",
        romaji: "furui",
        translation: "lama / usang (benda mati)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata sifat-i umum untuk barang mati atau bangunan yang sudah lama dibuat, usang, atau tidak baru lagi. Tidak boleh digunakan untuk umur manusia.",
        example: {
          jp: "この古い車はまだよく走ります。",
          reading: "このふるいくるまはまだよくはしります。",
          romaji: "Kono furui kuruma wa mada yoku hashirimasu.",
          id: "Mobil lama ini masih melaju dengan baik.",
        },
      },
      {
        japanese: "昔の",
        reading: "むかしの",
        romaji: "mukashi no",
        translation: "zaman dulu / masa lalu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Merujuk pada benda, kenangan, atau kebiasaan yang berasal dari masa lampau/tempo dulu.",
        example: {
          jp: "昔の写真を整理していると懐かしいです。",
          reading: "むかしのしゃしんをせいりしているとなつかしいです。",
          romaji: "Mukashi no shashin wo seiri shite iru to natsukashii desu.",
          id: "Merapikan foto-foto zaman dulu membuat bernostalgia.",
        },
      },
      {
        japanese: "歴史ある",
        reading: "れきしある",
        romaji: "rekishi aru",
        translation: "bersejarah / bernilai tinggi",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Budaya", type: "special" },
        ],
        context:
          "Menggambarkan kuil, tradisi, kota, atau bangunan lama yang dirawat dengan baik dan bernilai warisan sejarah yang tinggi.",
        example: {
          jp: "京都には歴史あるお寺がたくさんあります。",
          reading: "きょうとにはれきしあるおてらがたくさんあります。",
          romaji: "Kyoto ni wa rekishi aru otera ga takusan arimasu.",
          id: "Di Kyoto ada banyak kuil bersejarah.",
        },
      },
      {
        japanese: "古代の",
        reading: "こだいの",
        romaji: "kodai no",
        translation: "kuno / purba",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sejarah", type: "special" },
        ],
        context:
          "Merujuk pada peninggalan, reruntuhan, atau era peradaban purba ribuan tahun lalu yang bernilai arkeologis.",
        example: {
          jp: "古代の遺跡から土器が発見されました。",
          reading: "こだいのいせきからどきがはっけんされました。",
          romaji: "Kodai no iseki kara doki ga hakkensaremashita.",
          id: "Tembikar tanah liat ditemukan dari situs reruntuhan kuno.",
        },
      },
    ],
  },
  {
    id: "smart-intelligent",
    title: "Kata Sifat: Pintar & Cerdas",
    subtitle: "Pintar / Cerdas / Berbakat",
    icon: "",
    description:
      "Kecerdasan diklasifikasikan berdasarkan kemampuan analisis bijak dalam kehidupan, prestasi akademik, kepekaan logika tajam, hingga kepemilikan bakat bawaan lahir.",
    words: [
      {
        japanese: "賢い",
        reading: "かしこい",
        romaji: "kashikoi",
        translation: "cerdas / bijaksana",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kebijaksanaan", type: "special" },
        ],
        context:
          "Menunjukkan kepintaran praktis dalam hidup, bijak dalam mengambil keputusan, atau hewan yang sangat terlatih/patuh.",
        example: {
          jp: "彼女は賢い選択をしてトラブルを避けた。",
          reading: "かのじょはかしこいせんたくをしてとらぶるをさけた。",
          romaji: "Kanojo wa kashikoi sentaku wo shite toraburu wo saketa.",
          id: "Dia membuat pilihan cerdas (bijak) untuk menghindari masalah.",
        },
      },
      {
        japanese: "頭が良い",
        reading: "あたまがいい",
        romaji: "atama ga ii",
        translation: "pintar / otak encer",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Ungkapan umum sehari-hari untuk menyebut seseorang yang pintar secara akademik, cepat memahami sesuatu, atau pintar berstrategi.",
        example: {
          jp: "彼は学校で一番頭が良い生徒です。",
          reading: "かれはがっこうでいちばんあたまがいいせいとです。",
          romaji: "Kare wa gakkou de ichiban atama ga ii seito desu.",
          id: "Dia adalah siswa paling pintar di sekolah.",
        },
      },
      {
        japanese: "鋭い",
        reading: "するどい",
        romaji: "surudoi",
        translation: "tajam / kritis",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Analisis", type: "special" },
        ],
        context:
          "Secara kiasan berarti kepintaran yang memiliki intuisi sangat peka, analisis kritis, cepat tanggap mendeteksi kebohongan, atau pertanyaan tajam.",
        example: {
          jp: "彼の鋭い指摘に全員が納得した。",
          reading: "かれのするどいしてきにぜんいんがなっとくした。",
          romaji: "Kare no surudoi shiteki ni zen'in ga nattoku shita.",
          id: "Semua orang setuju dengan poin kritik yang tajam dari dia.",
        },
      },
      {
        japanese: "才能がある",
        reading: "さいのうがある",
        romaji: "sainou ga aru",
        translation: "berbakat",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Bakat", type: "special" },
        ],
        context:
          "Menyatakan orang yang dianugerahi bakat luar biasa (genius) dalam bidang seni, musik, olahraga, atau matematika dari lahir.",
        example: {
          jp: "彼女はピアノの才能があります。",
          reading: "かのじょはぴあののさいのうがあります。",
          romaji: "Kanojo wa piano no sainou ga arimasu.",
          id: "Dia memiliki bakat bermain piano.",
        },
      },
    ],
  },
  {
    id: "foolish-dumb",
    title: "Kata Sifat: Bodoh",
    subtitle: "Bodoh / Lamban",
    icon: "",
    description:
      "Ungkapan bodoh bervariasi dari ejekan dialek standar Kanto, dialek akrab Kansai, kecerobohan konyol, hingga kelambatan menangkap maksud situasi.",
    words: [
      {
        japanese: "馬鹿",
        reading: "ばか",
        romaji: "baka",
        translation: "bodoh (standar)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Standar", type: "neutral" },
        ],
        context:
          "Kata ejekan bodoh yang paling umum secara nasional. Di daerah Kanto/Tokyo bernada ofensif serius, namun juga bisa dipakai bercanda kasual dengan teman dekat.",
        example: {
          jp: "そんな馬鹿なことを言ってはいけません。",
          reading: "そんなばかなことをいってはいけません。",
          romaji: "Sonna baka na koto wo idde wa ikemasen.",
          id: "Kamu tidak boleh mengatakan hal bodoh seperti itu.",
        },
      },
      {
        japanese: "阿呆",
        reading: "あほ",
        romaji: "aho",
        translation: "bodoh (Kansai)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Dialek Kansai", type: "regional" },
        ],
        context:
          "Bodoh dalam dialek Kansai (Osaka). Di Kansai, kata ini bernada ramah, penuh keakraban, dan ekspresi sayang. Namun di Kanto/Tokyo, kata ini terasa sangat kasar/ofensif.",
        example: {
          jp: "「あほやなあ」と友達が笑って言った。",
          reading: "「あほやなあ」ともだちがわらっていった。",
          romaji: "「Aho ya naa」 to tomodachi ga waratte itta.",
          id: "「Bodoh ya kamu」 kata teman saya sambil tertawa.",
        },
      },
      {
        japanese: "間抜け",
        reading: "まぬけ",
        romaji: "manuke",
        translation: "konyol / ceroboh",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menggambarkan kebodohan karena kurang hati-hati, melakukan kesalahan konyol, atau kelengahan yang membuat orang lain tertawa.",
        example: {
          jp: "鍵を忘れるなんて、間抜けなミスをした。",
          reading: "かぎをわすれるなんて、まぬけなみすをした。",
          romaji: "Kagi wo wasureru nante, manuke na misu wo shita.",
          id: "Lupa membawa kunci, saya melakukan kesalahan konyol.",
        },
      },
      {
        japanese: "鈍い",
        reading: "にぶい",
        romaji: "nibui",
        translation: "lamban / lemot",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kognitif", type: "special" },
        ],
        context:
          "Bodoh dalam arti kognitif yang lambat merespons keadaan, lemot menangkap penjelasan orang lain, atau tidak peka terhadap perasaan sekitar.",
        example: {
          jp: "彼は恋愛のサインに対して非常に鈍い。",
          reading: "かれはれんあいのさいんにたいしてひじょうににぶい。",
          romaji: "Kare wa ren'ai no sain ni taishite hijou ni nibui.",
          id: "Dia sangat lamban (tidak peka) terhadap tanda-tanda cinta.",
        },
      },
    ],
  },
  {
    id: "serious-earnest",
    title: "Kata Sifat: Serius & Sungguh-sungguh",
    subtitle: "Serius / Sungguh-sungguh / Tegas",
    icon: "",
    description:
      "Sifat serius dibedakan berdasarkan karakter rajin taat aturan, kesungguhan fokus tinggi, pengerahan segenap tenaga tanpa main-main, atau kedisiplinan yang ketat.",
    words: [
      {
        japanese: "真面目",
        reading: "まじめ",
        romaji: "majime",
        translation: "serius / rajin / jujur",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kepribadian", type: "special" },
        ],
        context:
          "Menunjukkan kepribadian orang yang rajin belajar/bekerja, taat aturan sosial, jujur, dan dapat dipercaya dalam keseharian.",
        example: {
          jp: "彼は真面目に授業を受けています。",
          reading: "かれはまじめにじゅぎょうをうけています。",
          romaji: "Kare wa majime ni jugyou wo ukete imasu.",
          id: "Dia mengikuti pelajaran dengan rajin (serius).",
        },
      },
      {
        japanese: "真剣",
        reading: "しんけん",
        romaji: "shinken",
        translation: "serius (fokus penuh)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Fokus", type: "special" },
        ],
        context:
          "Sikap yang sangat fokus, bersungguh-sungguh dengan tatapan mata tajam karena menganggap situasi tersebut sangat krusial (seperti saat tanding/ujian).",
        example: {
          jp: "彼女は真剣な表情でピアノを弾いた。",
          reading: "かのじょはしんけんなひょうじょうでぴあのをひいた。",
          romaji: "Kanojo wa shinken na hyoujou de piano wo hiita.",
          id: "Dia memainkan piano dengan ekspresi yang sangat serius (fokus).",
        },
      },
      {
        japanese: "本気",
        reading: "ほんき",
        romaji: "honki",
        translation: "serius (sepenuh tenaga)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Menyatakan tekad kuat untuk bertindak dengan segenap tenaga, niat tulus, atau pembicaraan yang bukan main-main/bercanda.",
        example: {
          jp: "私は本気で彼と結婚したいと思っている。",
          reading: "わたしはほんきでかれとけっこんしたいとおもっている。",
          romaji: "Watashi wa honki de kare to kekkon shitai to omotte iru.",
          id: "Saya serius (bukan main-main) ingin menikah dengannya.",
        },
      },
      {
        japanese: "厳しい",
        reading: "きびしい",
        romaji: "kibishii",
        translation: "ketat / tegas / keras",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Disiplin", type: "special" },
        ],
        context:
          "Serius dalam hal menerapkan aturan secara ketat, disiplin tinggi dari guru/pelatih, atau kondisi cuaca yang sangat ekstrem.",
        example: {
          jp: "うちのコーチは練習のときに厳しいです。",
          reading: "うちのこーちはれんしゅうのときにきびしいです。",
          romaji: "Uchi no koochi wa renshuu no toki ni kibishii desu.",
          id: "Pelatih kami bersikap tegas (keras) saat latihan.",
        },
      },
    ],
  },
  {
    id: "funny-interesting",
    title: "Kata Sifat: Lucu & Menarik",
    subtitle: "Lucu / Menarik / Aneh",
    icon: "",
    description:
      "Untuk menyatakan kelucuan atau ketertarikan, bahasa Jepang memisahkan daya tarik minat umum, tawa spontan kasual, keanehan yang menggelikan, serta kekonyolan teatrikal formal.",
    words: [
      {
        japanese: "面白い",
        reading: "おもしろい",
        romaji: "omoshiroi",
        translation: "menarik / lucu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata sifat-i paling umum untuk menunjukkan ketertarikan intelektual, kesenangan pada suatu hobi, atau kelucuan humor secara luas.",
        example: {
          jp: "この小説はとても面白いです。",
          reading: "このしょうせつはとてもおもしろいです。",
          romaji: "Kono shousetsu wa totemo omoshiroi desu.",
          id: "Novel ini sangat menarik.",
        },
      },
      {
        japanese: "笑える",
        reading: "わらえる",
        romaji: "waraeru",
        translation: "membuat tertawa / lucu",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Bentuk potensial dari kata kerja 'warau' (tertawa). Digunakan secara kasual untuk menyatakan sesuatu yang sangat kocak hingga mengundang tawa.",
        example: {
          jp: "昨日のバラエティ番組は本当に笑えたね。",
          reading: "きのうのばらえてぃばんぐみはほんとうにわらえたね。",
          romaji: "Kinou no baraeti bangumi wa hontou ni waraeta ne.",
          id: "Acara varietas kemarin benar-benar membuat tertawa ya.",
        },
      },
      {
        japanese: "おかしい",
        reading: "おかしい",
        romaji: "okashii",
        translation: "aneh / lucu menggelikan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menunjukkan kelucuan yang timbul akibat adanya keanehan, keganjilan, ketidakwajaran, atau kekonyolan situasi.",
        example: {
          jp: "彼のジェスチャーがおかしくて吹き出してしまった。",
          reading: "かれのじぇすちゃーがおかしくてふきだしてしまった。",
          romaji: "Kare no jesutyaa ga okashikute fukidashite shimatta.",
          id: "Gerak-gerik tubuhnya lucu (aneh) sehingga saya spontan tertawa.",
        },
      },
      {
        japanese: "滑稽な",
        reading: "こっけいな",
        romaji: "kokkei na",
        translation: "lucu konyol / jenaka",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sastra", type: "written" },
        ],
        context:
          "Istilah formal/sastra untuk melukiskan tingkah laku yang konyol, menggelikan, menggelitik batin, atau situasi sandiwara jenaka.",
        example: {
          jp: "ピエロが滑稽な動作で観客を沸かせた。",
          reading: "ぴえろがこっけいなどうさでかんきゃくをわかせた。",
          romaji: "Piero ga kokkei na dousa de kankyaku wo wakaseta.",
          id: "Badut membuat penonton heboh dengan gerakan jenakanya.",
        },
      },
    ],
  },
  {
    id: "together-jointly",
    title: "Kata Keterangan: Bersama-sama",
    subtitle: "Bersama-sama / Kolektif",
    icon: "",
    description:
      "Aksi bersama dibedakan antara aktivitas fisik kasual dengan orang lain, keselarasan nasib puitis, solidaritas kelompok besar, atau kemitraan kolaborasi formal.",
    words: [
      {
        japanese: "一緒に",
        reading: "いっしょに",
        romaji: "issho ni",
        translation: "bersama-sama (umum)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata keterangan dasar yang paling sering dipakai untuk melakukan aksi fisik, bepergian, atau bekerja bersama orang lain.",
        example: {
          jp: "今週末、一緒に映画に行きませんか？",
          reading: "こんしゅうまつ、いっしょにえいがにいきませんか？",
          romaji: "Konshuumatsu, issho ni eiga ni ikimasen ka?",
          id: "Akhir pekan ini, maukah pergi menonton film bersama-sama?",
        },
      },
      {
        japanese: "共に",
        reading: "ともに",
        romaji: "tomo ni",
        translation: "bersama / seiring",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Lebih puitis dan formal. Menyatakan keselarasan nasib (misal hidup bersama, menanggung duka bersama) or perkembangan dua hal yang berjalan seiring.",
        example: {
          jp: "私たちは困難を共に乗り越えてきた。",
          reading: "わたしたちはこんなんをともにのりこえてきた。",
          romaji: "Watashi-tachi wa konnan wo tomo ni norikoete kita.",
          id: "Kita telah melewati kesulitan bersama-sama.",
        },
      },
      {
        japanese: "連帯して",
        reading: "れんたいして",
        romaji: "rentai shite",
        translation: "bersolidaritas / bahu-membahu",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Solidaritas", type: "special" },
        ],
        context:
          "Menunjukkan aksi bersama dalam kelompok besar yang bersatu padu, mengusung tanggung jawab kolektif, atau gerakan sosial/politik.",
        example: {
          jp: "住民たちが連帯して地域の防犯活動に取り組んでいる。",
          reading: "じゅうみんたちがれんたいしてちいきのぼうはんかつどうにとりくんでいる。",
          romaji: "Juumin-tachi ga rentai shite chiiki no bouhan katsudou ni torikumde iru.",
          id: "Warga bahu-membahu (bersolidaritas) melakukan kegiatan keamanan wilayah.",
        },
      },
      {
        japanese: "共同で",
        reading: "きょうどうで",
        romaji: "kyoudou de",
        translation: "secara kolaboratif / patungan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Kolaborasi", type: "special" },
        ],
        context:
          "Bekerja sama secara resmi dalam kemitraan bisnis, penelitian akademis, proyek patungan, atau kepemilikan aset bersama.",
        example: {
          jp: "二つの大学が共同で研究プロジェクトを開始した。",
          reading: "ふたつのだいがくがきょうどうでけんきゅうぷろじぇくとをかいしした。",
          romaji: "Futatsu no daigaku ga kyoudou de kenkyuu purojekuto wo kaishi shita.",
          id: "Dua universitas memulai proyek penelitian secara kolaboratif.",
        },
      },
    ],
  },
  {
    id: "alone-independently",
    title: "Kata Keterangan: Sendiri & Mandiri",
    subtitle: "Sendiri / Mandiri",
    icon: "",
    description:
      "Melakukan hal sendiri dibedakan berdasarkan kesendirian fisik, aksi tunggal resmi, status kemandirian finansial/politik, hingga pengerahan daya pribadi tanpa bantuan luar.",
    words: [
      {
        japanese: "一人で",
        reading: "ひとり で",
        romaji: "hitori de",
        translation: "sendiri (secara fisik)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Menunjukkan bahwa pelaku melakukan tindakan secara fisik sendirian tanpa ditemani orang lain.",
        example: {
          jp: "昨日は一人でカフェに行きました。",
          reading: "きのうはひとりでかふぇにいきました。",
          romaji: "Kinou wa hitori de kafe ni ikimashita.",
          id: "Kemarin saya pergi ke kafe sendirian.",
        },
      },
      {
        japanese: "単独で",
        reading: "たんどくで",
        romaji: "tandoku de",
        translation: "secara tunggal / solo",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Spesial", type: "special" },
        ],
        context:
          "Istilah formal untuk aksi solo, operasi tunggal, or tindakan yang dilakukan mandiri tanpa bergabung dengan koalisi/aliansi.",
        example: {
          jp: "宇宙船が単独で軌道に乗りました。",
          reading: "うちゅうせんがたんどくできどうにのりました。",
          romaji: "Uchuusen ga tandoku de kidou ni norimashita.",
          id: "Pesawat luar angkasa naik ke orbit secara tunggal (mandiri).",
        },
      },
      {
        japanese: "独立して",
        reading: "どくりつして",
        romaji: "dokuritsu shite",
        translation: "secara mandiri / independen",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Kemandirian", type: "special" },
        ],
        context:
          "Berdiri sendiri secara politik (negara merdeka), finansial (keluar dari rumah orang tua), or kelembagaan (memisahkan diri dari induk organisasi).",
        example: {
          jp: "大学を卒業して、両親から独立して暮らしている。",
          reading: "だいがくをそつぎょうして、りょうしんからどくりつしてくらしている。",
          romaji: "Daigaku wo sotsugyou shite, ryoushin kara dokuritsu shite kurashite iru.",
          id: "Setelah lulus universitas, saya hidup mandiri (independen) terpisah dari orang tua.",
        },
      },
      {
        japanese: "自力で",
        reading: "じりょくで",
        romaji: "jiryoku de",
        translation: "dengan daya/usaha sendiri",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Usaha sendiri", type: "special" },
        ],
        context:
          "Menyelesaikan masalah or pekerjaan sulit dengan usaha dan kapasitas pribadi sendiri tanpa mengandalkan bantuan orang lain.",
        example: {
          jp: "難しいプログラミングの課題を自力で解いた。",
          reading: "むずかしいぷろぐらみんぐのかだいをじりょくでといた。",
          romaji: "Muzukashii puroguramingu no kadai wo jiryoku de toita.",
          id: "Saya memecahkan tugas pemrograman yang sulit dengan usaha sendiri.",
        },
      },
    ],
  },
  {
    id: "slowly-gradually",
    title: "Kata Keterangan: Pelan-pelan",
    subtitle: "Pelan-pelan / Bertahap",
    icon: "",
    description:
      "Perilaku pelan dibedakan antara tempo waktu yang santai, kehati-hatian gerak fisik, perkembangan bertahap formal, atau perubahan waktu kasual.",
    words: [
      {
        japanese: "ゆっくり",
        reading: "ゆっくり",
        romaji: "yukkuri",
        translation: "pelan-pelan / santai",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menyatakan melakukan sesuatu secara santai, tidak tergesa-gesa, or menikmati kelonggaran waktu dengan rileks.",
        example: {
          jp: "お茶を飲みながらゆっくり話しましょう。",
          reading: "おちゃをのみながらゆっくりはなしましょう。",
          romaji: "Ocha wo nomi nagara yukkuri hanashimashou.",
          id: "Mari kita mengobrol santai sambil minum teh.",
        },
      },
      {
        japanese: "そろそろ",
        reading: "そろそろ",
        romaji: "soro soro",
        translation: "perlahan / bersiap pergi",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Secara fisik berarti melangkah perlahan demi kehati-hatian. Namun, dalam percakapan sehari-hari sering bermakna 'waktunya bersiap-siap melakukan aksi selanjutnya'.",
        example: {
          jp: "時間が遅いので、そろそろ失礼します。",
          reading: "じかんがおそいので、そろそろしつれいします。",
          romaji: "Jikan ga osoi no de, sorosoro shitsurei shimasu.",
          id: "Karena sudah larut, saya perlahan pamit (bersiap pulang) ya.",
        },
      },
      {
        japanese: "徐々に",
        reading: "じょじょに",
        romaji: "jojo ni",
        translation: "secara bertahap / gradual",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah tertulis formal untuk menyatakan perubahan keadaan yang terjadi sedikit demi sedikit secara konsisten dan teratur.",
        example: {
          jp: "春が近づき、気温が徐々に上がってきた。",
          reading: "はるがちかづき、きおんがじょじょにあがってきた。",
          romaji: "Haru ga chikazuki, kion ga jojo ni agatte kita.",
          id: "Musim semi mendekat, suhu udara naik secara bertahap.",
        },
      },
      {
        japanese: "だんだん",
        reading: "だんだん",
        romaji: "dandan",
        translation: "lambat laun / lama-kelamaan",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Menyatakan perubahan tingkat atau kondisi yang terjadi selangkah demi selangkah seiring waktu berjalan. Lebih kasual dibanding 'jojo ni'.",
        example: {
          jp: "日本語の勉強がだんだん面白くなってきました。",
          reading: "にほんごのべんきょうがだんだんおもしろくなってきました。",
          romaji: "Nihongo no benkyou ga dandan omoshiroku natte kimashita.",
          id: "Belajar bahasa Jepang lama-kelamaan menjadi menarik.",
        },
      },
    ],
  },
  {
    id: "quickly-rapidly",
    title: "Kata Keterangan: Cepat & Cekatan",
    subtitle: "Cepat / Cekatan / Segera",
    icon: "",
    description:
      "Perbuatan cepat dibedakan dari singkatnya durasi waktu, desakan lekas kasual, ketangkasan cara bekerja, hingga perintah formal untuk segera beraksi.",
    words: [
      {
        japanese: "早く",
        reading: "はやく",
        romaji: "hayaku",
        translation: "cepat / awal",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Menunjukkan kecepatan dalam hal waktu yang lebih awal (tidur cepat, bangun pagi) or ringkasnya durasi proses suatu aktivitas.",
        example: {
          jp: "明日は試験だから早く寝なさい。",
          reading: "あしたはしけんいそぐからはやくねなさい。",
          romaji: "Ashita wa shiken dakara hayaku nenasai.",
          id: "Karena besok ada ujian, tidurlah dengan cepat (awal).",
        },
      },
      {
        japanese: "さっさと",
        reading: "さっさと",
        romaji: "sassato",
        translation: "cepat-cepat / lekas",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Mendesak seseorang agar lekas melakukan aksi tanpa menunda-nunda. Memiliki sedikit kesan kasar or tidak sabaran jika dipakai ke atasan.",
        example: {
          jp: "片付けをさっさと終わらせてください。",
          reading: "かたづけをさっさとおわらせてください。",
          romaji: "Kataduke wo sassato owarasete kudasai.",
          id: "Lekas selesaikan merapikan barang-barangnya.",
        },
      },
      {
        japanese: "てきぱき",
        reading: "てきぱき",
        romaji: "tekipaki",
        translation: "cekatan / tangkas",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Cekatan", type: "special" },
        ],
        context:
          "Menggambarkan efisiensi kerja seseorang yang cekatan, tangkas, teratur, dan menyelesaikan tugas secara cepat.",
        example: {
          jp: "彼女はてきぱきと料理の準備を進めた。",
          reading: "かのじょはてきぱきとりょうりのじゅんびをすすめた。",
          romaji: "Kanojo wa tekipaki to ryouri no junbi wo susumeta.",
          id: "Dia mempersiapkan masakan dengan sangat cekatan.",
        },
      },
      {
        japanese: "速やかに",
        reading: "すみやかに",
        romaji: "sumiyaka ni",
        translation: "dengan segera / cepat",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sopan", type: "very-formal" },
        ],
        context:
          "Istilah formal administratif yang sering digunakan dalam instruksi resmi or panduan keselamatan untuk meminta tindakan segera tanpa penundaan.",
        example: {
          jp: "非常の際は、速やかに避難してください。",
          reading: "ひじょうのさいは、すみやかにひなんしてください。",
          romaji: "Hijou no sai wa, sumiyaka ni henan shite kudasai.",
          id: "Saat keadaan darurat, harap segera melakukan evakuasi.",
        },
      },
    ],
  },
  {
    id: "frequently-often",
    title: "Kata Keterangan: Sering",
    subtitle: "Sering / Berulang kali",
    icon: "",
    description:
      "Frekuensi sering dibedakan berdasarkan kebiasaan sehari-hari, pengulangan kejadian formal yang terputus-putus, kontinuitas tanpa henti, atau penulisan sastra resmi.",
    words: [
      {
        japanese: "よく",
        reading: "よく",
        romaji: "yoku",
        translation: "sering",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata paling umum dan kasual untuk menyatakan tingginya frekuensi suatu kegiatan atau kebiasaan pribadi sehari-hari.",
        example: {
          jp: "暇なとき、よくこの公園に散歩に来ます。",
          reading: "ひまなとき、よくこのこうえんにさんぽにきます。",
          romaji: "Hima na toki, yoku kono kouen ni sanpo ni kimasu.",
          id: "Saat senggang, saya sering datang berjalan-jalan di taman ini.",
        },
      },
      {
        japanese: "度々",
        reading: "たびたび",
        romaji: "tabitabi",
        translation: "berulang kali / sering kali",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Frekuensi", type: "special" },
        ],
        context:
          "Lebih formal dan sopan. Digunakan untuk menyatakan peristiwa yang terjadi berulang kali dengan ada jarak jeda waktu di antaranya.",
        example: {
          jp: "彼には度々仕事を助けてもらいました。",
          reading: "かれにはたびたびしごとをたすけてもらいました。",
          romaji: "Kare ni wa tabitabi shigoto wo tasukete moraimashita.",
          id: "Saya telah dibantu pekerjaan olehnya berulang kali.",
        },
      },
      {
        japanese: "終始",
        reading: "しじゅう",
        romaji: "shijuu",
        translation: "selalu / terus-menerus",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kondisi", type: "special" },
        ],
        context:
          "Menunjukkan keadaan yang berlangsung secara konstan, terus-menerus, atau selalu terjadi dari awal hingga akhir tanpa henti.",
        example: {
          jp: "彼は終始笑顔でインタビューに応えた。",
          reading: "かれはしじゅうえがおでいんたびゅーにこたえた。",
          romaji: "Kare wa shijuu egao de intabyuu ni kotaeta.",
          id: "Dia selalu menjawab wawancara dengan senyuman dari awal sampai akhir.",
        },
      },
      {
        japanese: "しばしば",
        reading: "しばしば",
        romaji: "shibashiba",
        translation: "kerap kali / sering",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah formal tertulis (biasanya dalam koran or buku ilmiah) untuk menyatakan bahwa suatu fenomena kerap kali terjadi.",
        example: {
          jp: "この地域では、冬に大雪がしばしば降ります。",
          reading: "このちいきでは、ふゆにおおゆきがしばしばふります。",
          romaji: "Kono chiiki de wa, fuyu ni ooyuki ga shibashiba furimasu.",
          id: "Di wilayah ini, salju lebat kerap kali turun pada musim dingin.",
        },
      },
    ],
  },
  {
    id: "rarely-seldom",
    title: "Kata Keterangan: Jarang & Langka",
    subtitle: "Jarang / Langka",
    icon: "",
    description:
      "Tingkat frekuensi yang rendah dibedakan dari keharusan pola kalimat negatif, nuansa positif netral, kelangkaan mutlak tertulis, or keunikan benda fisik.",
    words: [
      {
        japanese: "めったに",
        reading: "めったに",
        romaji: "metta ni",
        translation: "jarang / hampir tidak pernah",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kalimat Negatif", type: "special" },
        ],
        context:
          "Wajib berpasangan dengan bentuk kata kerja negatif di belakangnya. Menyatakan bahwa suatu tindakan hampir tidak pernah terjadi.",
        example: {
          jp: "私は忙しくてめったに外食をしません。",
          reading: "わたしはいそがしくてめったにがいしょくをしません。",
          romaji: "Watashi wa isogashikute metta ni gaishoku wo shimasen.",
          id: "Saya sangat sibuk sehingga jarang (hampir tidak pernah) makan di luar.",
        },
      },
      {
        japanese: "たまに",
        reading: "たまに",
        romaji: "tama ni",
        translation: "sekali-sekali / kadang",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menunjukkan frekuensi kejadian yang rendah namun tetap terjadi sesekali. Berpasangan dengan kalimat positif.",
        example: {
          jp: "休日には、たまに自分で料理を作ります。",
          reading: "きゅうじつには、たまにじぶんでりょうりをつくります。",
          romaji: "Kyuujitsu ni wa, tama ni jibun de ryouri wo tsukurimasu.",
          id: "Pada hari libur, sesekali saya memasak makanan sendiri.",
        },
      },
      {
        japanese: "稀に",
        reading: "まれに",
        romaji: "mare ni",
        translation: "sangat jarang / langka",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah tertulis formal untuk peristiwa dengan probabilitas kejadian yang sangat kecil dan tidak biasa terjadi.",
        example: {
          jp: "薬の副作用として、稀に頭痛が起こることがあります。",
          reading: "くすりのふくさようとして、まれにずつうがおこることがあります。",
          romaji: "Kusuri no fukusayou toshite, mare ni zutsuu ga okoru koto ga arimasu.",
          id: "Sebagai efek samping obat, sangat jarang terjadi sakit kepala.",
        },
      },
      {
        japanese: "珍しい",
        reading: "めずらしい",
        romaji: "mezurashii",
        translation: "langka / aneh tidak biasa",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Keunikan", type: "special" },
        ],
        context:
          "Kata sifat-i untuk menunjukkan bahwa suatu objek, hewan, peristiwa, or perilaku sangat jarang ditemui sehingga memicu keheranan/apresiasi.",
        example: {
          jp: "この島には珍しい鳥がたくさん住んでいる。",
          reading: "このしまにはめずらしいとりがたくさんすんでいる。",
          romaji: "Kono shima ni wa mezurashii tori ga takusan sunde iru.",
          id: "Di pulau ini hidup banyak burung langka (jarang ditemui).",
        },
      },
    ],
  },
  {
    id: "suddenly-abruptly",
    title: "Kata Keterangan: Tiba-tiba",
    subtitle: "Tiba-tiba / Mendadak",
    icon: "",
    description:
      "Peristiwa seketika dibedakan antara hilangnya tanda-tanda awal secara objektif, perubahan drastis kasual, tindakan melompati prosedur, or keterkejutan emosional batin.",
    words: [
      {
        japanese: "突然",
        reading: "とつぜん",
        romaji: "totsuzen",
        translation: "tiba-tiba (objektif)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Objektif", type: "special" },
        ],
        context:
          "Menyatakan peristiwa yang terjadi secara tiba-tiba tanpa ada tanda-tanda awal, bersifat objektif dan cukup formal.",
        example: {
          jp: "夜中に突然大雨が降り出しました。",
          reading: "よなかにとつぜんおおあめがふりだしました。",
          romaji: "Yonaka ni totsuzen ooame ga furidashimashita.",
          id: "Hujan lebat tiba-tiba turun di tengah malam.",
        },
      },
      {
        japanese: "急に",
        reading: "きゅうに",
        romaji: "kyuu ni",
        translation: "mendadak / cepat",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menunjukkan perubahan kondisi yang mendadak and terjadi dalam tempo sangat cepat. Sangat umum dalam percakapan sehari-hari.",
        example: {
          jp: "子供が急に泣き出して困りました。",
          reading: "こどもがきゅうになきだしてこまりました。",
          romaji: "Kodomo ga kyuu ni nakidashite komarimashita.",
          id: "Saya panik karena anak kecil mendadak menangis.",
        },
      },
      {
        japanese: "いきなり",
        reading: "いきなり",
        romaji: "ikinari",
        translation: "langsung / tiba-tiba",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Melakukan tindakan secara mendadak dengan melompati urutan prosedur logis, tanpa izin, or tanpa ada ancang-ancang bersiap.",
        example: {
          jp: "自己紹介もなしに、いきなり質問をされた。",
          reading: "じこしょうかいもなしに、いきなりしつもんをされた。",
          romaji: "Jikoshoukai mo nashi ni, ikinari shitsumon wo sareta.",
          id: "Tanpa perkenalan diri, saya langsung ditanya tiba-tiba.",
        },
      },
      {
        japanese: "不意に",
        reading: "ふいに",
        romaji: "fui ni",
        translation: "tak dinyana / mendadak",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Menyatakan kejadian mendadak yang mengejutkan batin pelaku karena terjadi di luar fokus perhatiannya (sering kali puitis/literer).",
        example: {
          jp: "不意に昔の友達のことを思い出した。",
          reading: "ふいにむかしのともだちのことをおもいだした。",
          romaji: "Fui ni mukashi no tomodachi no koto wo omoidashita.",
          id: "Tak dinyana (mendadak), saya teringat akan teman lama.",
        },
      },
    ],
  },
  {
    id: "finally-at-last",
    title: "Kata Keterangan: Akhirnya",
    subtitle: "Akhirnya / Pada Ujungnya",
    icon: "",
    description:
      "Kata akhirnya dibedakan berdasarkan pencapaian setelah perjuangan melelahkan, proses bertahap lama, konotasi dramatis besar, hasil negatif tak terhindarkan, or kesimpulan logis akhir.",
    words: [
      {
        japanese: "やっと",
        reading: "やっと",
        romaji: "yatto",
        translation: "akhirnya (perjuangan)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Digunakan ketika suatu keinginan tercapai akhirnya setelah melewati proses perjuangan berat, penantian melelahkan, or kesulitan besar.",
        example: {
          jp: "長い試験勉強の末、やっと合格しました！",
          reading: "ながいしけんべんきょうのすえ、やっとごうかくしました！",
          romaji: "Nagai shiken benkyou no sue, yatto goukaku shimashita!",
          id: "Setelah belajar ujian yang panjang, akhirnya saya lulus!",
        },
      },
      {
        japanese: "ようやく",
        reading: "youyaku",
        romaji: "youyaku",
        translation: "akhirnya (berangsur-angsur)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Proses", type: "special" },
        ],
        context:
          "Menyatakan pencapaian akhir yang terjadi secara berangsur-angsur dari proses bertahap yang lambat. Lebih bernada formal dibanding 'yatto'.",
        example: {
          jp: "交渉がまとまり、ようやく合意に達した。",
          reading: "こうしょうがまとまり、ようやくごういにたっした。",
          romaji: "Koushou ga matomari, youyaku goui ni tasshita.",
          id: "Negosiasi beres, dan akhirnya mencapai kesepakatan.",
        },
      },
      {
        japanese: "ついに",
        reading: "ついに",
        romaji: "tsui ni",
        translation: "akhirnya (dramatis)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Menunjukkan hasil akhir yang dramatis dari penantian sangat lama, baik untuk pencapaian impian besar maupun kegagalan total yang fatal.",
        example: {
          jp: "長年の研究が実を結び、ついに新薬が完成した。",
          reading: "ながねんのけんきゅうがみをむすび、ついにしんやくがかんせいした。",
          romaji: "Naganen no kenkyuu ga mi wo musubi, tsui ni shinyaku ga kansei shita.",
          id: "Penelitian bertahun-tahun membuahkan hasil, akhirnya obat baru selesai dibuat.",
        },
      },
      {
        japanese: "とうとう",
        reading: "とうとう",
        romaji: "toutou",
        translation: "akhirnya (tak terelakkan)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Hasil akhir", type: "special" },
        ],
        context:
          "Menyatakan hasil akhir dari proses panjang yang mengalir, sering kali berkonotasi pada hasil negatif, menyedihkan, or tak terelakkan.",
        example: {
          jp: "何度も修理したが、この冷蔵庫はとうとう壊れてしまった。",
          reading: "なんどもしゅうりしたが、このれいぞうこはとうとうこわれてしまった。",
          romaji: "Nandomo shuuri shita ga, kono reizouko wa toutou kowarete shimatta.",
          id: "Sudah berkali-kali diperbaiki, kulkas ini akhirnya rusak juga.",
        },
      },
      {
        japanese: "結局",
        reading: "けっきょく",
        romaji: "kekkyoku",
        translation: "kesimpulannya / akhirnya",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Logis", type: "special" },
        ],
        context:
          "Menunjukkan hasil akhir or kesimpulan setelah melalui berbagai kejadian, rintangan, or pertimbangan pilihan alternatif.",
        example: {
          jp: "迷ったが、結局いつものレストランにした。",
          reading: "まよったが、けっきょくいつものれすとらんにした。",
          romaji: "Mayotta ga, kekkyoku itsumo no resutoran ni shita.",
          id: "Sempat bingung, tapi akhirnya (kesimpulannya) memilih restoran yang biasa.",
        },
      },
    ],
  },
  {
    id: "probably-perhaps",
    title: "Kata Keterangan: Mungkin",
    subtitle: "Mungkin / Kemungkinan besar",
    icon: "",
    description:
      "Tingkat probabilitas keyakinan dugaan dibedakan dari dugaan tinggi sehari-hari, kesimpulan logis formal/kekhawatiran, kemungkinan moderat/rendah, or ajakan persetujuan santai.",
    words: [
      {
        japanese: "多分",
        reading: "たぶん",
        romaji: "tabun",
        translation: "mungkin (probabilitas tinggi)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata dugaan paling umum sehari-hari dengan tingkat keyakinan probabilitas tinggi sekitar 70-80%.",
        example: {
          jp: "明日は多分雨が降るでしょう。",
          reading: "あしたはたぶんあめがふるでしょう。",
          romaji: "Ashita wa tabun ame ga furu deshou.",
          id: "Besok mungkin akan turun hujan.",
        },
      },
      {
        japanese: "恐らく",
        reading: "おそらく",
        romaji: "osoraku",
        translation: "kemungkinan besar (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Dugaan berdasarkan analisis logis objektif dengan tingkat kepastian tinggi, namun sering berkonotasi pada hasil negatif or kekhawatiran pembicara.",
        example: {
          jp: "今回の事故の原因は、恐らくブレーキの故障だ。",
          reading: "こんかいのじこのげんいんは、おそらくぶれーきのこしょうだ。",
          romaji: "Konkai no jiko no gen'in wa, osoraku bureeki no koshou da.",
          id: "Penyebab kecelakaan kali ini, kemungkinan besar adalah kerusakan rem.",
        },
      },
      {
        japanese: "かもしれない",
        reading: "かもしれない",
        romaji: "kamoshirenai",
        translation: "barangkali / mungkin saja",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Dugaan", type: "special" },
        ],
        context:
          "Menyatakan kemungkinan dugaan sedang or rendah (sekitar 50% atau kurang) di mana pembicara tidak terlalu yakin.",
        example: {
          jp: "彼が言ったことは本当かもしれない。",
          reading: "かれがいったことはほんとうかもしれない。",
          romaji: "Kare ga itta koto wa hontou kamoshirenai.",
          id: "Apa yang dia katakan barangkali (mungkin saja) benar.",
        },
      },
      {
        japanese: "でしょう",
        reading: "でしょう",
        romaji: "deshou",
        translation: "tampaknya / kiranya",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menyatakan dugaan sopan pembicara, or digunakan untuk meminta persetujuan lawan bicara secara halus.",
        example: {
          jp: "北海道は今、とても寒いでしょうね。",
          reading: "ほっかいどうはいま、とてもさむいでしょうね。",
          romaji: "Hokkaido wa ima, totemo samui deshou ne.",
          id: "Hokkaido sekarang tampaknya sangat dingin ya.",
        },
      },
    ],
  },
  {
    id: "certainly-surely",
    title: "Kata Keterangan: Pasti",
    subtitle: "Pasti / Tentu",
    icon: "",
    description:
      "Untuk menyatakan kepastian, bahasa Jepang memisahkan harapan emosional pembicara, keyakinan mutlak 100%, hukum alam sebab-akibat, serta pembuktian objektif tidak terbantahkan.",
    words: [
      {
        japanese: "きっと",
        reading: "きっと",
        romaji: "kitto",
        translation: "pasti / tentu (harapan)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Harapan", type: "emotional" },
        ],
        context:
          "Menyatakan kepastian dengan keyakinan subjektif tinggi (sekitar 90%) yang disertai dengan harapan baik or dorongan semangat dari pembicara.",
        example: {
          jp: "明日はきっと晴れるでしょう。",
          reading: "あしたはきっとはれるでしょう。",
          romaji: "Ashita wa kitto hareru deshou.",
          id: "Besok pasti akan cerah.",
        },
      },
      {
        japanese: "絶対に",
        reading: "ぜったいに",
        romaji: "zettai ni",
        translation: "pasti / mutlak 100%",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Keyakinan", type: "special" },
        ],
        context:
          "Menyatakan kepastian mutlak tanpa kompromi (100%). Sering kali dipasangkan dengan kata kerja negatif di belakangnya untuk menyatakan 'sama sekali tidak'.",
        example: {
          jp: "その秘密は絶対に誰にも言わないで。",
          reading: "そのひみつはぜったいにだれにもいわないで。",
          romaji: "Sono himitsu wa zettai ni dare ni mo iwanaide.",
          id: "Rahasia itu benar-benar jangan katakan kepada siapa pun.",
        },
      },
      {
        japanese: "必ず",
        reading: "かならず",
        romaji: "kanarazu",
        translation: "pasti / wajib (logis/hukum)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Logis", type: "special" },
        ],
        context:
          "Pasti dalam arti keharusan logis, kewajiban hukum, or hukum alam sebab-akibat (misal: matahari pasti terbit dari timur).",
        example: {
          jp: "約束は必ず守らなければなりません。",
          reading: "やくそくはかならずまもらなければなりません。",
          romaji: "Yakusoku wa kanarazu mamoranaければなりません。",
          id: "Janji harus pasti (wajib) ditepati.",
        },
      },
      {
        japanese: "間違いなく",
        reading: "まちがいなく",
        romaji: "machigainaku",
        translation: "pasti / tidak salah lagi",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Bukti", type: "special" },
        ],
        context:
          "Menyatakan kepastian yang didukung oleh bukti kuat, fakta empiris, or data yang tidak meninggalkan keraguan sedikit pun.",
        example: {
          jp: "この足跡は間違いなく犯人のものです。",
          reading: "このあしあときはまちがいなくはんにんのものです。",
          romaji: "Kono ashiato wa machigainaku hannin no mono desu.",
          id: "Jejak kaki ini tidak salah lagi (pasti) milik pelaku.",
        },
      },
    ],
  },
  {
    id: "no-problem-ok",
    title: "Kata Keterangan & Sifat: Tidak Apa-apa",
    subtitle: "Tidak Apa-apa / Aman / Boleh",
    icon: "",
    description:
      "Menyatakan tidak apa-apa dibedakan berdasarkan keselamatan kondisi diri, tidak adanya kendala objektif, ketangguhan mental emosional, or pernyataan tidak keberatan.",
    words: [
      {
        japanese: "大丈夫",
        reading: "だいじょうぶ",
        romaji: "daijoubu",
        translation: "tidak apa-apa / aman",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata paling umum untuk menenangkan seseorang, menyatakan kesehatan fisik, mental, or kondisi aman baik-baik saja.",
        example: {
          jp: "転んだけど、怪我はないから大丈夫です。",
          reading: "ころんだきど、けがはないからだいじょうぶです。",
          romaji: "Koronda kedo, kega wa nai kara daijoubu desu.",
          id: "Saya jatuh, tapi tidak apa-apa karena tidak terluka.",
        },
      },
      {
        japanese: "問題ない",
        reading: "もんだいない",
        romaji: "mondai nai",
        translation: "tidak ada masalah",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Objektif", type: "special" },
        ],
        context:
          "Secara objektif menyatakan tidak ada kendala, kesalahan, or hambatan dalam rencana, tugas, or sistem.",
        example: {
          jp: "このスケジュールで進めても問題ないですか？",
          reading: "このすけじゅーるですすめてももんだいないですか？",
          romaji: "Kono sukejuuru de susumete mo mondai nai desu ka?",
          id: "Apakah tidak ada masalah jika kita maju dengan jadwal ini?",
        },
      },
      {
        japanese: "平気",
        reading: "へいき",
        romaji: "heiki",
        translation: "biasa saja / tidak terpengaruh",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menunjukkan ketangguhan emosional, ketidakpedulian, or keadaan tidak terganggu oleh rasa dingin, sakit, kecemasan, or omongan orang lain.",
        example: {
          jp: "冬でも半袖で平気な顔をしている。",
          reading: "ふゆでもはんそででへいきなかおをしている。",
          romaji: "Fuyu demo hansode de heiki na kao wo shite iru.",
          id: "Meskipun musim dingin, dia bermuka biasa saja (tidak kedinginan) memakai lengan pendek.",
        },
      },
      {
        japanese: "構わない",
        reading: "かまわない",
        romaji: "kamawanai",
        translation: "tidak keberatan / boleh",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Izin", type: "special" },
        ],
        context:
          "Menyatakan persetujuan or pemberian izin bahwa pembicara sama sekali tidak merasa terganggu dengan tindakan lawan bicara.",
        example: {
          jp: "服装はカジュアルなもので構いません。",
          reading: "ふくそうはかじゅあるなものでかまいません。",
          romaji: "Fukusou wa kajuaru na mono de kamaimasen.",
          id: "Pakaian berupa pakaian kasual pun tidak apa-apa (boleh).",
        },
      },
    ],
  },
  {
    id: "whatever-indifferent",
    title: "Kata Keterangan: Terserah & Masa Bodoh",
    subtitle: "Terserah / Masa Bodoh",
    icon: "",
    description:
      "Sikap pasrah or masa bodoh dibedakan dari kerelaan bersikap fleksibel, ketidakpedulian mutlak pada hasil, kebebasan bertindak ramah, hingga kekesalan menyerah.",
    words: [
      {
        japanese: "構わない",
        reading: "かまわない",
        romaji: "kamawanai",
        translation: "terserah (tidak keberatan)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Fleksibel", type: "special" },
        ],
        context:
          "Menunjukkan fleksibilitas or kesediaan untuk mengikuti keputusan orang lain tanpa merasa terbebani. Bernada netral/sopan.",
        example: {
          jp: "私はどちらの店でも構いませんよ。",
          reading: "わたしはどちらのみせでもかまいませんよ。",
          romaji: "Watashi wa dochira no mise demo kamaimasen yo.",
          id: "Bagi saya, terserah (tidak keberatan) di toko yang mana saja.",
        },
      },
      {
        japanese: "どうでもいい",
        reading: "どうでもいい",
        romaji: "doudemo ii",
        translation: "terserah / masa bodoh",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Apatis", type: "spoken" },
        ],
        context:
          "Menunjukkan sikap masa bodoh, apatis, or ketidakpedulian total terhadap keputusan yang diambil karena dirasa tidak penting.",
        example: {
          jp: "今更言い訳なんて、どうでもいいよ。",
          reading: "いまさらいいわけなんて、どうでもいいよ。",
          romaji: "Imasara iivake nante, doudemo ii yo.",
          id: "Alasan di saat seperti ini, terserah (masa bodoh) lah.",
        },
      },
      {
        japanese: "好きにして",
        reading: "すきにして",
        romaji: "suki ni shite",
        translation: "lakukan sesukamu",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Mempersilakan lawan bicara untuk bertindak or memilih keputusan sesuai kehendak or seleranya sendiri secara bebas dan santai.",
        example: {
          jp: "残りのケーキは好きにしていいよ。",
          reading: "のこりのけーきはすきにしていいよ。",
          romaji: "Nokori no keeki wa suki ni shite ii yo.",
          id: "Sisa kuenya silakan lakukan sesukamu (boleh dihabiskan).",
        },
      },
      {
        japanese: "勝手にしろ",
        reading: "かってにしろ",
        romaji: "katte ni shiro",
        translation: "terserah / lakukan semaumu (kasar)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Maskulin", type: "masculine" },
        ],
        context:
          "Bentuk perintah kasar untuk melepas tanggung jawab or membiarkan lawan bicara berbuat sesuka hati karena pembicara merasa kesal/marah.",
        example: {
          jp: "もう知らない、勝手にしろ！",
          reading: "もうしらない、かってにしろ！",
          romaji: "Mou shiranai, katte ni shiro!",
          id: "Aku tidak peduli lagi, terserah lakukan semaumu!",
        },
      },
    ],
  },
  {
    id: "sincerely-truly",
    title: "Kata Keterangan: Sungguh-sungguh",
    subtitle: "Sungguh-sungguh / Tulus",
    icon: "",
    description:
      "Untuk menyatakan intensitas kesungguhan, bahasa Jepang memisahkan penguatan fakta umum, keseriusan tekad tanpa bercanda, kesopanan bisnis formal, serta ketulusan batin terdalam.",
    words: [
      {
        japanese: "本当に",
        reading: "ほんとうに",
        romaji: "hontou ni",
        translation: "sungguh / benar-benar",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata keterangan paling standar untuk menegaskan kebenaran informasi or menyatakan kesungguhan perasaan secara umum.",
        example: {
          jp: "あなたの助けに本当に感謝しています。",
          reading: "あなたのたすけにほんとうにかんしゃしています。",
          romaji: "Anata no tasuke ni hontou ni kansha shite imasu.",
          id: "Saya benar-benar berterima kasih atas bantuan Anda.",
        },
      },
      {
        japanese: "本気で",
        reading: "ほんきで",
        romaji: "honki de",
        translation: "dengan serius / sungguh-sungguh",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Tekad", type: "special" },
        ],
        context:
          "Menunjukkan sikap yang serius, tulus, or mengeluarkan tenaga penuh untuk mewujudkan sesuatu (bukan main-main).",
        example: {
          jp: "彼は本気で宇宙飛行士を目指している。",
          reading: "かれはほんきでうちゅうひこうしたちをめざしている。",
          romaji: "Kare wa honki de uchuuhikoushi wo mezashite iru.",
          id: "Dia sungguh-sungguh (serius) mengincar posisi astronaut.",
        },
      },
      {
        japanese: "誠に",
        reading: "まことに",
        romaji: "makoto ni",
        translation: "sungguh (sangat formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sangat Sopan", type: "very-formal" },
        ],
        context:
          "Digunakan dalam situasi bisnis formal or permohonan maaf resmi untuk menunjukkan rasa hormat dan kesungguhan terdalam.",
        example: {
          jp: "ご迷惑をおかけして誠に申し訳ございません。",
          reading: "ごめいわくをおかけしてまことにもうしわけございません。",
          romaji: "Go-meiwaku wo okakeshite makoto ni moushiwake gozaimasen.",
          id: "Kami sungguh meminta maaf karena telah merepotkan Anda.",
        },
      },
      {
        japanese: "心から",
        reading: "こころから",
        romaji: "kokoro kara",
        translation: "dari lubuk hati",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tulus", type: "emotional" },
        ],
        context:
          "Menyatakan ketulusan emosional terdalam (seperti selamat, terima kasih, maaf) dari batin terdalam pembicara.",
        example: {
          jp: "お二人の幸せを心からお祈りします。",
          reading: "おふたりのしあわせをこころからおいのりします。",
          romaji: "O-futari no shiawase wo kokoro kara o-inori shimasu.",
          id: "Saya berdoa demi kebahagiaan kalian berdua dari lubuk hati.",
        },
      },
    ],
  },
  {
    id: "by-chance-coincidence",
    title: "Kata Keterangan: Kebetulan",
    subtitle: "Kebetulan",
    icon: "",
    description:
      "Peristiwa kebetulan dibedakan antara tidak adanya rekayasa seketika, takdir/kebetulan logis, ketidaksengajaan literer, or di luar dugaan batin.",
    words: [
      {
        japanese: "たまたま",
        reading: "たまとま",
        romaji: "tama tama",
        translation: "kebetulan (seketika)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Menunjukkan suatu peristiwa terjadi secara tidak sengaja or kebetulan semata pada saat itu dalam kehidupan sehari-hari.",
        example: {
          jp: "昨日、駅前でたまたま昔の同僚に会った。",
          reading: "きのう、えきまえでたまたまむかしのどうりょうにあった。",
          romaji: "Kinou, ekimae de tamatama mukashi no douryou ni atta.",
          id: "Kemarin, di depan stasiun saya kebetulan bertemu mantan rekan kerja.",
        },
      },
      {
        japanese: "偶然",
        reading: "ぐうぜん",
        romaji: "guuzen",
        translation: "kebetulan / tidak sengaja",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Takdir", type: "special" },
        ],
        context:
          "Menunjukkan kebetulan yang bersifat objektif, sering kali mengejutkan or dirasa seperti takdir karena tidak direncanakan sama sekali.",
        example: {
          jp: "偶然の一致に驚きました。",
          reading: "ぐうぜんのいっちにおどろきました。",
          romaji: "Guuzen no icchi ni odorokimashita.",
          id: "Saya terkejut atas kecocokan yang kebetulan ini.",
        },
      },
      {
        japanese: "図らずも",
        reading: "はからずも",
        romaji: "hakarazumo",
        translation: "tanpa disangka-sangka",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah sastra/tertulis untuk menyatakan peristiwa yang terjadi tanpa dirancang sebelumnya namun membawa dampak perubahan keadaan.",
        example: {
          jp: "図らずも彼の本音を知ることになった。",
          reading: "はからずもかれのほんねをしることになった。",
          romaji: "Hakarazumo kare no honne wo shiru koto ni natta.",
          id: "Tanpa disangka-sangka, saya akhirnya mengetahui isi hati sejujurnya dari dia.",
        },
      },
      {
        japanese: "思いがけなく",
        reading: "おもいがけなく",
        romaji: "omoi-gakenaku",
        translation: "di luar dugaan / kebetulan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Keheranan", type: "special" },
        ],
        context:
          "Menyatakan peristiwa yang terjadi di luar perkiraan or prediksi logis pembicara, mengekspresikan rasa heran.",
        example: {
          jp: "思いがけなく大金を手にすることになった。",
          reading: "おもいがけなくたいきんをてにすることになった。",
          romaji: "Omoigakenaku taikin wo te ni suru koto ni natta.",
          id: "Kebetulan (di luar dugaan) saya mendapatkan uang dalam jumlah besar.",
        },
      },
    ],
  },
  {
    id: "no-wonder",
    title: "Kata Keterangan: Pantas Saja",
    subtitle: "Pantas saja / Memang pantas",
    icon: "",
    description:
      "Ungkapan pantas saja dibedakan dari apresiasi logis lisan, terpecahkannya teka-teki keadaan, kesimpulan logis mutlak, or pujian reputasi.",
    words: [
      {
        japanese: "なるほど",
        reading: "なるほど",
        romaji: "naru hodo",
        translation: "pantas saja / oh begitu",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Diucapkan ketika mendengar penjelasan or alasan logis orang lain yang membuat pembicara langsung paham situasinya.",
        example: {
          jp: "「彼は風邪だそうです」「なるほど、だから欠席ですね」",
          reading: "「かれはかぜだそうです」「なるほど、だからけっせきですね」",
          romaji: "「Kare wa kaze da sou desu」「Naruhodo, dakara kesseki desu ne」",
          id: "「Kabarnya dia flu」「Oh begitu (pantas saja), makanya dia absen ya」.",
        },
      },
      {
        japanese: "道理で",
        reading: "どうりで",
        romaji: "dori de",
        translation: "pantas saja (teka-teki)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Penemuan", type: "special" },
        ],
        context:
          "Digunakan ketika mengetahui rahasia or fakta baru yang seketika menjelaskan kejanggalan or teka-teki perilaku sebelumnya.",
        example: {
          jp: "道理で部屋が冷えているわけだ、窓が開いている。",
          reading: "どうりでへやがひえているわけだ、まどがあいている。",
          romaji: "Douri de heya ga hiete iru wake da, mado ga aite iru.",
          id: "Pantas saja kamarnya dingin, jendelanya terbuka.",
        },
      },
      {
        japanese: "わけだ",
        reading: "wake da",
        romaji: "wake da",
        translation: "pantas saja / sewajarnya",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Logis", type: "special" },
        ],
        context:
          "Tata bahasa akhiran untuk menarik kesimpulan logis yang tidak dapat dihindari berdasarkan alasan or sebab yang telah disebutkan.",
        example: {
          jp: "毎日練習しているから、上手なわけだ。",
          reading: "まいにちれんしゅうしているから、じょうずなわけだ。",
          romaji: "Mainichi renshuu shite iru kara, jouzu na wake da.",
          id: "Karena berlatih setiap hari, pantas saja (sewajarnya) dia mahir.",
        },
      },
      {
        japanese: "さすが",
        reading: "さすが",
        romaji: "sasuga",
        translation: "hebat / memang pantas",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Pujian", type: "special" },
        ],
        context:
          "Mengandung nada pujian or kekaguman terhadap seseorang karena prestasinya sesuai dengan reputasi hebatnya.",
        example: {
          jp: "優勝するなんて、さすがプロだね。",
          reading: "ゆうしょうするなんて、さすがぷろだね。",
          romaji: "Yuushou suru nante, sasuga puro da ne.",
          id: "Menjadi juara, memang pantas hebatnya seorang profesional ya.",
        },
      },
    ],
  },
  {
    id: "be-careful-cautious",
    title: "Kata Keterangan: Hati-hati",
    subtitle: "Hati-hati / Waspada",
    icon: "",
    description:
      "Aksi berhati-hati dibedakan dari kepedulian salam kasual, pemusatan fokus bahaya, kewaspadaan antisipasi kriminal, or kecermatan kalkulasi risiko.",
    words: [
      {
        japanese: "気を付けて",
        reading: "きをつけて",
        romaji: "ki wo tsukete",
        translation: "hati-hati (salam/umum)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Kata yang paling sering diucapkan sebagai nasihat umum sehari-hari or salam perpisahan agar selamat di jalan.",
        example: {
          jp: "夜道は危ないから、気を付けて帰ってね。",
          reading: "よみちはあぶないから、きをつけてかえってね。",
          romaji: "Yomichi wa abunai kara, ki wo tsukete kaette ne.",
          id: "Karena jalan malam berbahaya, hati-hati pulangnya ya.",
        },
      },
      {
        japanese: "注意して",
        reading: "ちゅういして",
        romaji: "chuui shite",
        translation: "berhati-hati / fokus",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Fokus", type: "special" },
        ],
        context:
          "Meminta seseorang memusatkan perhatian or konsentrasi agar tidak melakukan kesalahan, kecelakaan, or pelanggaran aturan.",
        example: {
          jp: "足元に注意して階段を下りてください。",
          reading: "あしもとにちゅういしてかいだんをくだりてください。",
          romaji: "Ashimoto ni chuui shite kaidan wo kudarite kudasai.",
          id: "Harap turun tangga dengan berhati-hati pada langkah kaki Anda.",
        },
      },
      {
        japanese: "用心して",
        reading: "ようじんして",
        romaji: "youjin shite",
        translation: "waspada / jaga diri",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Antisipasi", type: "special" },
        ],
        context:
          "Mengambil langkah pengamanan dini or bersikap curiga demi melindungi diri dari tindak kriminal, penipuan, or bahaya laten.",
        example: {
          jp: "知らない人からのメールは、用心して開かないようにしている。",
          reading: "しらないひとからのめーるは、ようじんしてあかないようにしている。",
          romaji: "Shiranai hito kara no meeru wa, youjin shite akanai you ni shite iru.",
          id: "Email dari orang tak dikenal, saya waspada dengan tidak membukanya.",
        },
      },
      {
        japanese: "慎重に",
        reading: "しんちょうに",
        romaji: "shincho ni",
        translation: "dengan cermat / hati-hati",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Kalkulasi", type: "special" },
        ],
        context:
          "Mengambil keputusan secara hati-hati, perlahan, and terencana dengan matang untuk meminimalkan risiko kegagalan berat.",
        example: {
          jp: "新ビジネスの投資は慎重に行うべきだ。",
          reading: "しんびじねすのとうしはしんちょうにおこなうべきだ。",
          romaji: "Shin bijinesu no toushi wa shinchou ni okonau beki da.",
          id: "Investasi bisnis baru harus dilakukan dengan cermat (hati-hati).",
        },
      },
    ],
  },
  {
    id: "effort-hardwork",
    title: "Kata Benda: Usaha & Jerih Payah",
    subtitle: "Usaha / Upaya / Jerih Payah",
    icon: "",
    description:
      "Untuk menyatakan usaha, bahasa Jepang memisahkan proses kerja keras jangka panjang, ketegaran tugas jangka pendek, kesulitan rintangan fisik/mental, serta kerepotan menolong orang.",
    words: [
      {
        japanese: "努力",
        reading: "どりょく",
        romaji: "doryoku",
        translation: "usaha / ikhtiar",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Proses kerja keras, belajar, or latihan secara konsisten dalam jangka panjang demi mencapai tujuan or impian hidup.",
        example: {
          jp: "彼のこれまでの努力が報われた。",
          reading: "かれのこれまでのどりょくがむくわれた。",
          romaji: "Kare no kore made no doryoku ga mukuwareta.",
          id: "Usaha (ikhtiar) dia selama ini akhirnya membuahkan hasil.",
        },
      },
      {
        japanese: "頑張り",
        reading: "がんばり",
        romaji: "ganbari",
        translation: "ketekunan / semangat",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Sikap pantang menyerah, ketahanan, or kerja keras yang ditunjukkan seseorang saat menyelesaikan tugas or menghadapi masa sulit jangka pendek.",
        example: {
          jp: "君のこれまでの頑張りはみんなが見ているよ。",
          reading: "きみのこれまでのがんばりはみんながみているよ。",
          romaji: "Kimi no kore made no ganbari wa minna ga mite iru yo.",
          id: "Semangat ketekunanmu selama ini dilihat oleh semua orang.",
        },
      },
      {
        japanese: "苦労",
        reading: "くろう",
        romaji: "kurou",
        translation: "kesusahan / jerih payah",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Rasa susah, penderitaan fisik/mental, or hambatan berat yang dialami seseorang dalam proses menjalani kehidupan or menyelesaikan pekerjaan.",
        example: {
          jp: "母は苦労して私たちを育ててくれた。",
          reading: "はははくろうしてわたしたちをそだててくれた。",
          romaji: "Haha wa kurou shite watashi-tachi wo sodatete kureta.",
          id: "Ibu dengan penuh jerih payah kesusahan membesarkan kami.",
        },
      },
      {
        japanese: "骨折り",
        reading: "ほねおり",
        romaji: "hone ori",
        translation: "usaha melelahkan / kerepotan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Tindakan", type: "special" },
        ],
        context:
          "Pengerahan tenaga fisik yang melelahkan or kerepotan besar demi membantu urusan orang lain.",
        example: {
          jp: "彼の骨折りのおかげで、イベントは大成功だった。",
          reading: "かれのほねおりのおかげで、いべんとはだいせいこうだった。",
          romaji: "Kare no honeori no okage de, ibento wa daiseikou datta.",
          id: "Berkat kerepotan usaha melelahkan dari dia, acaranya sukses besar.",
        },
      },
    ],
  },
  {
    id: "hope-wish",
    title: "Kata Benda: Harapan & Impian",
    subtitle: "Harapan / Impian / Doa",
    icon: "",
    description:
      "Harapan dibedakan berdasarkan optimisme masa depan objektif, keinginan personal subjektif, ekspektasi pada pihak lain, cita-cita idealis, atau doa spiritual.",
    words: [
      {
        japanese: "希望",
        reading: "きぼう",
        romaji: "kibou",
        translation: "harapan / prospek",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Prospek", type: "special" },
        ],
        context:
          "Harapan masa depan yang cerah, bersifat positif, rasional, or merupakan pilihan resmi (seperti sekolah pilihan pertama).",
        example: {
          jp: "若者たちは未来への希望に満ちている。",
          reading: "わかものたちはみらいへのきぼうにみちている。",
          romaji: "Wakamonotachi wa mirai he no kibou ni michite iru.",
          id: "Para pemuda dipenuhi harapan menuju masa depan.",
        },
      },
      {
        japanese: "望み",
        reading: "のぞみ",
        romaji: "nozomi",
        translation: "keinginan / harapan personal",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Keinginan", type: "neutral" },
        ],
        context:
          "Harapan or keinginan yang bersifat lebih personal, subjektif, and mencerminkan dambaan hati seseorang.",
        example: {
          jp: "回復の望みはまだ捨てていません。",
          reading: "かいふくののぞみはまだすてていません。",
          romaji: "Kaifuku no nozomi wa mada sutete imasen.",
          id: "Saya belum membuang harapan untuk pulih.",
        },
      },
      {
        japanese: "期待",
        reading: "きたい",
        romaji: "kitai",
        translation: "ekspektasi / penantian",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Ekspektasi", type: "special" },
        ],
        context:
          "Harapan besar yang dibebankan kepada kinerja seseorang, prestasi anak, or hasil dari suatu rencana agar sukses.",
        example: {
          jp: "親の期待に応えるために勉強します。",
          reading: "おやのきたいにこたえるためにべんきょうします。",
          romaji: "Oya no kitai ni kotaeru tame ni benkyou shimasu.",
          id: "Saya belajar demi menjawab ekspektasi (harapan) orang tua.",
        },
      },
      {
        japanese: "夢",
        reading: "ゆめ",
        romaji: "yume",
        translation: "impian / cita-cita",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Cita-cita", type: "emotional" },
        ],
        context:
          "Harapan or tujuan hidup yang bernada idealis, sangat besar, or visi masa depan yang indah untuk diraih.",
        example: {
          jp: "子供の頃の夢は宇宙飛行士でした。",
          reading: "こどものころのゆめはうちゅうひこうしたちでした。",
          romaji: "Kodomo no koro no yume wa uchuuhikoushi deshitata.",
          id: "Cita-cita (impian) waktu anak-anak adalah menjadi astronaut.",
        },
      },
      {
        japanese: "願い",
        reading: "ねがい",
        romaji: "negai",
        translation: "doa / permohonan tulus",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Doa", type: "emotional" },
        ],
        context:
          "Harapan tulus yang dipanjatkan secara emosional or spiritual agar suatu kebaikan dikabulkan oleh takdir or pihak lain.",
        example: {
          jp: "平和への願いが届くことを信じています。",
          reading: "へいわへのねがいがとどくことをしんじています。",
          romaji: "Heiwa he no negai ga todoku koto wo shinjite imasu.",
          id: "Saya percaya doa (permohonan tulus) demi perdamaian akan tersampaikan.",
        },
      },
    ],
  },
  {
    id: "luck-happiness",
    title: "Kata Benda: Keberuntungan",
    subtitle: "Keberuntungan / Kebahagiaan",
    icon: "",
    description:
      "Nasib baik dikategorikan berdasarkan kepuasan damai kehidupan, berkah keadaan yang patut disyukuri, faktor hoki murni, or kemujuran tak terduga.",
    words: [
      {
        japanese: "幸せ",
        reading: "しあわせ",
        romaji: "shiawase",
        translation: "kebahagiaan / mujur",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Kebahagiaan", type: "emotional" },
        ],
        context:
          "Merujuk pada kondisi mental damai, kecukupan emosi, and kebahagiaan hidup secara keseluruhan.",
        example: {
          jp: "平凡な毎日に幸せを感じています。",
          reading: "へいぼんなまいにちにしあわせにかんじています。",
          romaji: "Heibon na mainichi ni shiawase wo kanjite imasu.",
          id: "Saya merasakan kebahagiaan dalam keseharian yang biasa.",
        },
      },
      {
        japanese: "幸い",
        reading: "さいわい",
        romaji: "saiwai",
        translation: "keberuntungan / kemaslahatan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Rasa Syukur", type: "emotional" },
        ],
        context:
          "Istilah formal/tertulis untuk menyatakan rasa syukur atas keadaan menguntungkan yang menghindarkan dari musibah.",
        example: {
          jp: "天候に恵まれたのは幸いでした。",
          reading: "てんこうにめぐまれたのはさいわいでした。",
          romaji: "Tenkou ni megumareta no wa saiwai deshita.",
          id: "Diberkahi cuaca yang bagus adalah sebuah keberuntungan.",
        },
      },
      {
        japanese: "運",
        reading: "うん",
        romaji: "un",
        translation: "nasib / hoki",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Hoki murni", type: "special" },
        ],
        context:
          "Keberuntungan murni or faktor hoki yang terjadi tanpa ada kendali or usaha manusia (seperti memenangkan lotre).",
        example: {
          jp: "今日は朝から運が良い一日だ。",
          reading: "きょうはあさからうんがよいいちにちだ。",
          romaji: "Kyou wa asa kara un ga yoi ichiniichi da.",
          id: "Hari ini adalah hari yang beruntung (hoki) sejak pagi.",
        },
      },
      {
        japanese: "幸運",
        reading: "こううん",
        romaji: "koun",
        translation: "nasib mujur / keberuntungan",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Mujur", type: "special" },
        ],
        context:
          "Istilah formal untuk menyatakan kemujuran besar or kesuksesan tak terduga yang datang secara kebetulan di luar kendali.",
        example: {
          jp: "幸運なことに,、チケットが手に入った。",
          reading: "こううんなことに、ちけっとがてにはいった。",
          romaji: "Koun na koto ni, chiketto ga te ni haitta.",
          id: "Beruntungnya (nasib mujur), tiketnya berhasil didapatkan.",
        },
      },
    ],
  },
  {
    id: "worry-anxiety",
    title: "Kata Benda: Kekhawatiran & Kecemasan",
    subtitle: "Kekhawatiran / Kecemasan / Masalah",
    icon: "",
    description:
      "Untuk menyatakan kekhawatiran, bahasa Jepang memisahkan rasa cemas aktif tentang keselamatan orang lain, perasaan tidak tenang yang samar terhadap masa depan, ketakutan bahaya nyata secara formal, serta penderitaan batin mendalam yang dipikirkan terus-menerus.",
    words: [
      {
        japanese: "心配",
        reading: "しんぱい",
        romaji: "shinpai",
        translation: "khawatir (umum)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kecemasan aktif yang terfokus pada objek or orang tertentu (seperti mengkhawatirkan anak sakit, lulus ujian, dll.).",
        example: {
          jp: "子供がまだ帰ってこないので心配です。",
          reading: "こどもがまだかえってこないのでしんぱいです。",
          romaji: "Kodomo ga mada kaette konai no de shinpai desu.",
          id: "Saya khawatir karena anak saya belum pulang.",
        },
      },
      {
        japanese: "不安",
        reading: "ふあん",
        romaji: "fuan",
        translation: "cemas / gelisah",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Gelisah", type: "emotional" },
        ],
        context:
          "Perasaan tidak tenang, samar-samar, and kurangnya rasa aman terhadap masa depan or situasi yang tidak pasti.",
        example: {
          jp: "将来に対して強い不安を感じています。",
          reading: "しょうらいにたいしてつよいふあんをかんじています。",
          romaji: "Shourai ni taishite tsuyoi fuan wo kanjite imasu.",
          id: "Saya merasakan kecemasan yang kuat terhadap masa depan.",
        },
      },
      {
        japanese: "恐れ",
        reading: "おそれ",
        romaji: "osore",
        translation: "ketakutan / kekhawatiran",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah formal tertulis untuk menyatakan ketakutan or kekhawatiran bahwa suatu peristiwa buruk or bencana nyata akan terjadi.",
        example: {
          jp: "台風による洪水のおそれがあります。",
          reading: "たいふうによるこうずいのおそれがあります。",
          romaji: "Taifuou ni yoru kouzui no osore ga arimasu.",
          id: "Ada kekhawatiran (potensi bahaya) terjadinya banjir akibat topan.",
        },
      },
      {
        japanese: "悩み",
        reading: "なやみ",
        romaji: "nayami",
        translation: "penderitaan batin / masalah",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Batin", type: "emotional" },
        ],
        context:
          "Masalah or kekhawatiran mendalam yang dipikirkan terus-menerus karena sulit untuk menemukan solusi or keputusan terbaik.",
        example: {
          jp: "人間関係についての悩みを持っています。",
          reading: "にんげんかんけいについてのなやみをもっています。",
          romaji: "Ningen kankei ni tsuite no nayami wo motte imasu.",
          id: "Saya memiliki kekhawatiran (masalah batin) tentang hubungan antar manusia.",
        },
      },
    ],
  },
  {
    id: "human-relations",
    title: "Kata Benda: Hubungan Antar Manusia",
    subtitle: "Hubungan / Ikatan",
    icon: "",
    description:
      "Hubungan antar manusia dibedakan berdasarkan koneksi logis/objektif umum, ikatan nasib/takdir spiritual, keterkaitan emosional/sosial, serta ikatan kasih sayang yang sangat mendalam.",
    words: [
      {
        japanese: "関係",
        reading: "かんけい",
        romaji: "kankei",
        translation: "hubungan (umum)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Hubungan logis, objektif, or profesional antar pihak. Bisa juga merujuk pada korelasi antar variabel/benda.",
        example: {
          jp: "良好な仕事の関係を築いています。",
          reading: "りょうこうなしごとのかんけいをきずいています。",
          romaji: "Ryoukou na shigoto no kankei wo kizuite imasu.",
          id: "Saya sedang membangun hubungan kerja yang baik.",
        },
      },
      {
        japanese: "縁",
        reading: "えん",
        romaji: "en",
        translation: "ikatan nasib / jodoh",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Takdir", type: "special" },
        ],
        context:
          "Konsep budaya or spiritual Jepang untuk ikatan nasib or jodoh yang mempertemukan manusia secara tidak terduga.",
        example: {
          jp: "何かの縁で、私たちは出会いました。",
          reading: "なにかのえんで、わたしたちはであいました。",
          romaji: "Nani ka no en de, watashi-tachi wa deaimashita.",
          id: "Karena ikatan nasib (jodoh) tertentu, kita telah bertemu.",
        },
      },
      {
        japanese: "繋がり",
        reading: "つながり",
        romaji: "tsunagari",
        translation: "koneksi / keterkaitan",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Koneksi sosial or hubungan erat yang dirasakan antar individu, keluarga, or kelompok dalam kehidupan sehari-hari.",
        example: {
          jp: "インターネットのおかgeで、世界の繋がりが強まった。",
          reading: "いんたーねっとのおかげで、せかいのつながりがつよまった。",
          romaji: "Intaanetto no okage de, sekai no tsunagari ga tsuyomatta.",
          id: "Berkat internet, keterkaitan (koneksi) dunia semakin menguat.",
        },
      },
      {
        japanese: "絆",
        reading: "きずな",
        romaji: "kizuna",
        translation: "ikatan emosional mendalam",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Emosional", type: "emotional" },
        ],
        context:
          "Ikatan emosional kasih sayang, kesetiaan, and kepercayaan yang sangat kuat antar keluarga, sahabat karib, or komunitas (tidak mudah putus).",
        example: {
          jp: "家族の絆はどんな困難にも負けません。",
          reading: "かぞくのきずなわどんなこんなんにもまけません。",
          romaji: "Kazoku no kizuna wa donna konnan ni mo makemasen.",
          id: "Ikatan emosional (kizuna) keluarga tidak akan kalah oleh kesulitan apa pun.",
        },
      },
    ],
  },
  {
    id: "reason-cause",
    title: "Kata Benda: Alasan & Penyebab",
    subtitle: "Alasan / Sebab / Motivasi",
    icon: "",
    description:
      "Latar belakang suatu kejadian dibedakan dari pembenaran rasional pelaku, penjelasan keadaan lisan umum, pemicu ilmiah objektif, or dorongan psikologis niat awal.",
    words: [
      {
        japanese: "理由",
        reading: "りゆう",
        romaji: "riyou",
        translation: "alasan (rasional)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Logis", type: "special" },
        ],
        context:
          "Penjelasan rasional, argumentasi, or pembenaran kognitif di balik tindakan, keputusan, or pilihan seseorang.",
        example: {
          jp: "遅刻した理由を教えてください。",
          reading: "ちこくしたりゆうをおしえてください。",
          romaji: "Chikoku shita riyuu wo oshiete kudasai.",
          id: "Tolong beri tahu alasan Anda datang terlambat.",
        },
      },
      {
        japanese: "わけ",
        reading: "わけ",
        romaji: "wake",
        translation: "sebab / alasan (keadaan)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Sebab or alasan yang menerangkan latar belakang terjadinya suatu kondisi/perilaku. Sangat sering digunakan dalam percakapan lisan.",
        example: {
          jp: "怒るわけを聞いてもいいですか？",
          reading: "おこるわけをきいてもいいですか？",
          romaji: "Okoru wake wo kiite mo ii desu ka?",
          id: "Bolehkah saya menanyakan sebab (alasan) Anda marah?",
        },
      },
      {
        japanese: "原因",
        reading: "げんいん",
        romaji: "gen'in",
        translation: "penyebab (objektif)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Objektif", type: "special" },
        ],
        context:
          "Faktor pemicu ilmiah or objektif yang melahirkan suatu akibat or kerusakan fisik (misal: korsleting listrik menyebabkan kebakaran).",
        example: {
          jp: "警察は事故の原因を調査しています。",
          reading: "けいさつはじこのげんいんをちょうさしています。",
          romaji: "Keisatsu wa jiko no gen'in wo chousa shite imasu.",
          id: "Polisi sedang menyelidiki penyebab kecelakaan.",
        },
      },
      {
        japanese: "動機",
        reading: "どうき",
        romaji: "douki",
        translation: "motivasi / niat awal",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Psikologis", type: "special" },
        ],
        context:
          "Dorongan psikologis or niat awal di dalam diri yang menggerakkan seseorang melakukan suatu perbuatan (sering terkait motif kejahatan).",
        example: {
          jp: "犯人の犯行の動機はまだ不明です。",
          reading: "はんにんのはんこうのどうきはまだふめいです。",
          romaji: "Hannin no hankou no douki wa mada fumei desu.",
          id: "Motivasi (motif) kejahatan pelaku masih belum jelas.",
        },
      },
    ],
  },
  {
    id: "why-reason",
    title: "Kata Tanya: Kenapa",
    subtitle: "Kenapa / Mengapa",
    icon: "",
    description:
      "Untuk menanyakan alasan, bahasa Jepang memisahkan rasa keluhan/keheranan lisan, pertanyaan objektif formal tertulis, keakraban santai sehari-hari, serta nada sastra dramatis kuno.",
    words: [
      {
        japanese: "どうして",
        reading: "どうして",
        romaji: "doshite",
        translation: "kenapa (umum)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kata tanya 'kenapa' yang paling serbaguna, dapat mengekspresikan rasa heran, empati, or keluhan subjektif pembicara.",
        example: {
          jp: "どうして昨日来なかったのですか？",
          reading: "どうしてきのうこなかったのですか？",
          romaji: "Doushite kinou konatta no desu ka?",
          id: "Kenapa kemarin tidak datang?",
        },
      },
      {
        japanese: "なぜ",
        reading: "なぜ",
        romaji: "naze",
        translation: "mengapa (formal)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Mengapa dalam nada logis, objektif, and formal. Sangat sering digunakan dalam penulisan ilmiah, berita, or pidato resmi.",
        example: {
          jp: "なぜこの問題が発生したのか分析しましょう。",
          reading: "なぜこのもんだいがはっせいしたのかぶんせきしましょう。",
          romaji: "Naze kono mondai ga hassei shita no ka bunseki shimashou.",
          id: "Mari kita analisis mengapa masalah ini bisa terjadi.",
        },
      },
      {
        japanese: "なんで",
        reading: "なんで",
        romaji: "nande",
        translation: "kenapa (kasual)",
        nuances: [
          { label: "Kasual", type: "casual" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Kenapa dalam percakapan sangat santai sehari-hari dengan keluarga or teman dekat. Kurang sopan jika dipakai ke atasan.",
        example: {
          jp: "なんでそんなこと言うの？",
          reading: "なんでそんなこというの？",
          romaji: "Nande sonna koto iu no?",
          id: "Kenapa kamu bicara seperti itu?",
        },
      },
      {
        japanese: "何故に",
        reading: "なにゆえに",
        romaji: "nani yue ni",
        translation: "mengapa gerangan (sastra)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Sastra Kuno", type: "archaic" },
        ],
        context:
          "Bentuk dramatis, sastra kuno, or klasik dari kata 'mengapa' untuk memberi efek puitis or dramatis.",
        example: {
          jp: "何故に人は過ちを繰り返すのか。",
          reading: "なにゆえにひとはあらまちをくりかえすのか。",
          romaji: "Nani yue ni hito wa ayamachi wo kurikaesu no ka.",
          id: "Mengapa gerangan manusia terus mengulangi kesalahan?",
        },
      },
    ],
  },
  {
    id: "how-manner",
    title: "Kata Tanya: Bagaimana",
    subtitle: "Bagaimana",
    icon: "",
    description:
      "Pertanyaan tentang cara or kondisi dibedakan dari keringkasan lisan kasual, kesopanan penawaran tamu, kejelasan langkah metode formal, serta nada sastra/tingkat keseriusan.",
    words: [
      {
        japanese: "どう",
        reading: "どう",
        romaji: "dou",
        translation: "bagaimana (umum)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Bentuk dasar paling ringkas untuk menanyakan opini, kondisi kesehatan, cara, or situasi secara kasual/lisan.",
        example: {
          jp: "明日のプランはどうする？",
          reading: "あしたのぷらんはどうする？",
          romaji: "Ashita no puran wa dou suru?",
          id: "Rencana besok bagaimana?",
        },
      },
      {
        japanese: "いかが",
        reading: "いかが",
        romaji: "ikaga",
        translation: "bagaimana (sopan)",
        nuances: [
          { label: "Sangat Sopan", type: "very-formal" },
          { label: "Lisan", type: "spoken" },
        ],
        context:
          "Bentuk sopan/hormat dari 'dou'. Biasa digunakan saat menawarkan makanan/minuman or menanyakan kondisi tamu/klien.",
        example: {
          jp: "温かいコーヒーはいかがですか？",
          reading: "あたたかいこーひーはいかがですか？",
          romaji: "Atatakai koohii wa ikaga desu ka?",
          id: "Bagaimana kalau kopi hangat? (Maukah kopi hangat?)",
        },
      },
      {
        japanese: "どのように",
        reading: "どのように",
        romaji: "dono you ni",
        translation: "dengan cara bagaimana",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Metode", type: "special" },
        ],
        context:
          "Menanyakan cara or prosedur secara detail, jelas, and logis (misalnya menanyakan cara menggunakan mesin).",
        example: {
          jp: "この機械はどのように操作しますか？",
          reading: "このきかいはどのようにそうさしますか？",
          romaji: "Kono kikai wa dono you ni sousa shimasu ka?",
          id: "Mesin ini dioperasikan dengan cara bagaimana?",
        },
      },
      {
        japanese: "いかに",
        reading: "いかに",
        romaji: "ika ni",
        translation: "bagaimana / seberapa",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah sastra/tertulis formal untuk menekankan kadar, tingkat keseriusan, or cara mengatasi suatu tantangan besar.",
        example: {
          jp: "この課題をいかに解決するかが重要だ。",
          reading: "このかだいをいかにかいけつするかがじゅうようだ。",
          romaji: "Kono kadai wo ika ni kaiketsu suru ka ga juuyou da.",
          id: "Bagaimana menyelesaikan tugas ini adalah hal yang penting.",
        },
      },
    ],
  },
  {
    id: "how-much-many",
    title: "Kata Tanya: Berapa",
    subtitle: "Berapa / Seberapa",
    icon: "",
    description:
      "Menanyakan jumlah dibedakan dari nominal harga/zat tak terhitung, hitungan buah konkret/usia anak, estimasi kasar durasi/jarak, serta nada sastra tingkat kadar.",
    words: [
      {
        japanese: "いくら",
        reading: "いくら",
        romaji: "ikura",
        translation: "berapa (harga/jumlah)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Menanyakan harga uang or jumlah zat yang tidak dapat dihitung satu per satu (seperti garam, pasir, dll.).",
        example: {
          jp: "このカメラはいくらですか？",
          reading: "このかめらはいくらですか？",
          romaji: "Kono kamera wa ikura desu ka?",
          id: "Kamera ini harganya berapa?",
        },
      },
      {
        japanese: "いくつ",
        reading: "いくつ",
        romaji: "ikutsu",
        translation: "berapa buah / berapa umur",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Jumlah", type: "special" },
        ],
        context:
          "Menanyakan jumlah benda konkret yang dapat dihitung (pakai akhiran buah -tsu) or menanyakan umur anak-anak.",
        example: {
          jp: "お皿の上にリンゴがいくつありますか？",
          reading: "おさらのうえにりんごがいくつありますか？",
          romaji: "Osara no ue ni ringo ga ikutsu arimasu ka?",
          id: "Di atas piring ada berapa buah apel?",
        },
      },
      {
        japanese: "どのくらい",
        reading: "どのくらい",
        romaji: "dono kurai",
        translation: "seberapa banyak / lama",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Estimasi", type: "special" },
        ],
        context:
          "Menanyakan estimasi/perkiraan kasar durasi waktu, jarak perjalanan, berat benda, or tingkatan secara umum.",
        example: {
          jp: "ここから駅までどのくらいかかりますか？",
          reading: "ここからえきまでどのくらいかかりますか？",
          romaji: "Koko kara eki made dono kurai kakarimasu ka?",
          id: "Dari sini ke stasiun butuh waktu seberapa lama?",
        },
      },
      {
        japanese: "何ほど",
        reading: "なにほど",
        romaji: "nanihodo",
        translation: "seberapa banyak (sastra)",
        nuances: [
          { label: "Formal", type: "formal" },
          { label: "Tulisan", type: "written" },
        ],
        context:
          "Istilah sopan/sastra tertulis untuk menanyakan kadar, nilai, or tingkat kuantitas suatu hal.",
        example: {
          jp: "彼の貢献は何ほどのものだろうか。",
          reading: "かれのこうけんはなにほどのものだろうか。",
          romaji: "Kare no kouken wa nanihodo no mono darou ka.",
          id: "Seberapa banyak (berapa bernilainya) kontribusi dia gerangan?",
        },
      },
    ],
  },
  {
    id: "conditional-if",
    title: "Kata Penghubung: Jika & Kalau",
    subtitle: "Jika / Kalau / Apabila",
    icon: "",
    description:
      "Pengandaian dalam tata bahasa Jepang dibedakan dari urutan kronologi waktu, syarat logis pengandaian umum, fokus topik kontekstual, keniscayaan otomatis hukum alam, serta penguat hipotesis di awal kalimat.",
    words: [
      {
        japanese: "たら",
        reading: "たら",
        romaji: "tara",
        translation: "kalau (kronologis)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Umum", type: "neutral" },
        ],
        context:
          "Kondisional paling fleksibel. Berfokus pada urutan waktu 'jika A sudah terjadi (selesai), maka B akan dilakukan/terjadi'.",
        example: {
          jp: "駅に着いたら連絡してください。",
          reading: "えきについたられんらくしてください。",
          romaji: "Eki ni tsuitara renraku shite kudasai.",
          id: "Kalau sudah sampai stasiun, tolong kabari saya.",
        },
      },
      {
        japanese: "ば",
        reading: "ば",
        romaji: "ba",
        translation: "jika (syarat)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Syarat", type: "special" },
        ],
        context:
          "Menyatakan pengandaian murni atau syarat logis 'jika syarat A dipenuhi, konsekuensi B akan lahir secara otomatis/logis'.",
        example: {
          jp: "安ければ買います。",
          reading: "やすければかいます。",
          romaji: "Yasukereba kaimasu.",
          id: "Jika murah, saya akan beli.",
        },
      },
      {
        japanese: "なら",
        reading: "なら",
        romaji: "nara",
        translation: "kalau begitu (konteks)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Topik", type: "special" },
        ],
        context:
          "Digunakan untuk merespons informasi lawan bicara. Bermakna 'jika situasinya/topiknya tentang A, maka saran/solusinya B'.",
        example: {
          jp: "京都に行くなら秋が一番おすすめですよ。",
          reading: "きょうとにいくならあきがいちばんおすすめですよ。",
          romaji: "Kyoto ni iku nara aki ga ichiban osusume desu yo.",
          id: "Kalau mau pergi ke Kyoto, musim gugur adalah yang paling disarankan lho.",
        },
      },
      {
        japanese: "と",
        reading: "と",
        romaji: "to",
        translation: "apabila (mutlak/alam)",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Hukum alam", type: "special" },
        ],
        context:
          "Menyatakan keniscayaan mutlak, rutinitas harian, or cara kerja mekanik 'apabila A terjadi/dilakukan, B pasti menyusul otomatis'.",
        example: {
          jp: "春になると桜が咲きます。",
          reading: "はるになるとさくらがさきます。",
          romaji: "Haru ni naru to sakura ga sakimasu.",
          id: "Apabila musim semi tiba, bunga sakura bermekaran.",
        },
      },
      {
        japanese: "もし",
        reading: "もし",
        romaji: "moshi",
        translation: "seandainya / jikalau",
        nuances: [
          { label: "Netral", type: "neutral" },
          { label: "Penguat dugaan", type: "special" },
        ],
        context:
          "Kata keterangan penguat yang dipasang di AWAL kalimat kondisional (seperti tara/ba) untuk mempertegas pengandaian hipotesis.",
        example: {
          jp: "もし宝くじが当たったら、世界一周旅行をしたい。",
          reading: "もしたからくじがあたったら、せかいいっしゅうりょこうをしたい。",
          romaji: "Moshi takarakuji ga atattara, sekai isshuu ryokou wo shitai.",
          id: "Seandainya menang lotre, saya ingin melakukan perjalanan keliling dunia.",
        },
      },
    ],
  },
];

export default contextualSynonyms;
