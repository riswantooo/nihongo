const fs = require('fs');
const path = require('path');

const mnnFile = path.join(__dirname, '../src', 'data', 'mnn.json');
const mnnData = JSON.parse(fs.readFileSync(mnnFile, 'utf8'));

const accurateChapters = [
  {
    id: 26,
    title: "Bab 26 (~んです / Menjelaskan Alasan)",
    vocabulary: [
      { character: "見ます", romaji: "mimasu", meaning: "memeriksa, melihat" },
      { character: "探します", romaji: "sagashimasu", meaning: "mencari" },
      { character: "遅れます", romaji: "okuremasu", meaning: "terlambat" },
      { character: "間に合います", romaji: "maniaimasu", meaning: "keburu, tepat waktu" },
      { character: "気分がいい", romaji: "kibun ga ii", meaning: "perasaan/kondisi badan sehat" },
      { character: "ごみ", romaji: "gomi", meaning: "sampah" },
      { character: "直接", romaji: "chokusetsu", meaning: "secara langsung" },
      { character: "片付きます", romaji: "katadukimasu", meaning: "beres, rapi" }
    ],
    grammar: [
      {
        id: 2601,
        title: "Bentuk ~んです (Penekanan/Alasan)",
        description: "Digunakan untuk memberikan penjelasan, alasan, atau meminta penjelasan lebih detail tentang situasi tertentu. Memiliki nuansa pembicara sangat tertarik atau peduli.",
        examples: [
          { japanese: "どうして遅れたんですか。", romaji: "Doushite okureta n desu ka.", meaning: "Mengapa kamu terlambat? (Meminta penjelasan)" },
          { japanese: "バスが来なかったんです。", romaji: "Basu ga konakatta n desu.", meaning: "Busnya tidak datang. (Memberi alasan)" }
        ]
      },
      {
        id: 2602,
        title: "~ていただけませんか (Meminta Tolong Sopan)",
        description: "Bentuk permintaan tolong yang lebih sopan daripada ~てください. Sering digabung dengan pengantar ~んですが.",
        examples: [
          { japanese: "日本語がわからないんですが、教えていただけませんか。", romaji: "Nihongo ga wakaranai n desu ga, oshiete itadakemasen ka.", meaning: "Saya tidak mengerti bahasa Jepang, bisakah Anda mengajari saya?" }
        ]
      }
    ],
    choukai: [
      {
        id: 26001,
        type: "blind",
        audioText: "A: どうして昨日パーティーに行かなかったんですか。B: 頭が痛かったんです。",
        question: "Mengapa B tidak pergi ke pesta?",
        options: ["Karena sibuk", "Karena sakit kepala", "Karena tidak diundang", "Karena malas"],
        answer: 1,
        translation: "A: Kenapa kemarin tidak pergi ke pesta? B: Karena saya sakit kepala."
      }
    ],
    dokkai: {
      title: "日本のゴミ出し (Membuang Sampah di Jepang)",
      content: "日本では、ゴミを出す日や場所が決まっています。例えば、月曜日と木曜日は「燃えるごみ」の日です。ルールを守らないと、ゴミを持っていってくれません。とても厳しいんです。",
      questions: [
        {
          id: 260001,
          question: "Apa yang terjadi jika tidak mematuhi aturan membuang sampah?",
          options: ["Akan didenda", "Sampah tidak akan dibawa", "Akan dimarahi", "Boleh dibuang besok"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 27,
    title: "Bab 27 (Bentuk Potensial / Bisa)",
    vocabulary: [
      { character: "飼います", romaji: "kaimasu", meaning: "memelihara (hewan)" },
      { character: "走ります", romaji: "hashirimasu", meaning: "berlari" },
      { character: "見えます", romaji: "miemasu", meaning: "terlihat" },
      { character: "聞こえます", romaji: "kikoemasu", meaning: "terdengar" },
      { character: "できます", romaji: "dekimasu", meaning: "selesai dibuat, rampung" },
      { character: "景色", romaji: "keshiki", meaning: "pemandangan" },
      { character: "昼間", romaji: "hiruma", meaning: "siang hari" },
      { character: "道具", romaji: "dougu", meaning: "alat, perkakas" }
    ],
    grammar: [
      {
        id: 2701,
        title: "Bentuk Potensial (Kanoukei)",
        description: "Menyatakan kemampuan untuk melakukan sesuatu. Partikel を sering berubah menjadi が. Gol I: -u -> -eru. Gol II: -ru -> -rareru.",
        examples: [
          { japanese: "私は刺身が食べられます。", romaji: "Watashi wa sashimi ga taberaremasu.", meaning: "Saya bisa makan sashimi." },
          { japanese: "漢字が読めますか。", romaji: "Kanji ga yomemasu ka.", meaning: "Apakah bisa membaca kanji?" }
        ]
      },
      {
        id: 2702,
        title: "見えます & 聞こえます",
        description: "Berbeda dengan bentuk potensial (見られる/聞ける) yang artinya 'ada kesempatan untuk melihat/mendengar', 見えます/聞こえます artinya pemandangan atau suara tersebut secara alami masuk ke mata atau telinga kita.",
        examples: [
          { japanese: "ここから富士山が見えます。", romaji: "Koko kara Fujisan ga miemasu.", meaning: "Dari sini gunung Fuji terlihat." }
        ]
      }
    ],
    choukai: [
      {
        id: 27001,
        type: "blind",
        audioText: "新しいスーパーができましたから、買い物が便利になりました。",
        question: "Apa yang membuat belanja menjadi praktis?",
        options: ["Punya mobil", "Supermarket baru sudah jadi", "Ada uang", "Jalanan bagus"],
        answer: 1,
        translation: "Karena supermarket baru sudah jadi, belanja menjadi praktis."
      }
    ],
    dokkai: {
      title: "マンションのルール",
      content: "このマンションではペットが飼えません。また、夜10時過ぎにピアノを弾かないでください。隣の部屋によく聞こえますから。",
      questions: [
        {
          id: 270001,
          question: "Apa yang dilarang di apartemen ini?",
          options: ["Menyanyi keras", "Memelihara hewan dan main piano larut malam", "Memasak di malam hari", "Menyalakan TV"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 28,
    title: "Bab 28 (~ながら / Sambil & ~し / Dan lagi)",
    vocabulary: [
      { character: "売れます", romaji: "uremasu", meaning: "terjual laku" },
      { character: "踊ります", romaji: "odorimasu", meaning: "menari" },
      { character: "選びます", romaji: "erabimasu", meaning: "memilih" },
      { character: "通います", romaji: "kayoimasu", meaning: "pulang pergi (rutin)" },
      { character: "真面目な", romaji: "majime na", meaning: "rajin, serius" },
      { character: "熱心な", romaji: "nesshin na", meaning: "tekun, antusias" },
      { character: "偉い", romaji: "erai", meaning: "hebat" },
      { character: "習慣", romaji: "shuukan", meaning: "kebiasaan" }
    ],
    grammar: [
      {
        id: 2801,
        title: "Kata Kerja + ~ながら (Sambil)",
        description: "Menyatakan dua aksi dilakukan secara bersamaan oleh orang yang sama. Aksi utama diletakkan di kalimat bagian belakang.",
        examples: [
          { japanese: "音楽を聞きながら勉強します。", romaji: "Ongaku o kikinagara benkyou shimasu.", meaning: "Saya belajar sambil mendengarkan musik." }
        ]
      },
      {
        id: 2802,
        title: "~し、~し (Menyebutkan sifat/alasan)",
        description: "Digunakan untuk menjabarkan lebih dari satu alasan atau ciri khas suatu hal (sering untuk memuji atau mengeluh).",
        examples: [
          { japanese: "山田先生は優しいし、面白いし、学生に人気があります。", romaji: "Yamada sensei wa yasashii shi, omoshiroi shi, gakusei ni ninki ga arimasu.", meaning: "Guru Yamada itu baik, lucu, dan populer di kalangan siswa." }
        ]
      }
    ],
    choukai: [
      {
        id: 28001,
        type: "blind",
        audioText: "私はいつもコーヒーを飲みながら、新聞を読みます。",
        question: "Apa aksi utama yang dilakukan orang ini?",
        options: ["Minum kopi", "Membaca koran", "Tidur", "Membuat kopi"],
        answer: 1,
        translation: "Saya selalu membaca koran sambil minum kopi."
      }
    ],
    dokkai: {
      title: "日本の人気商品",
      content: "この車はデザインがいいし、値段も安いし、とてもよく売れています。それに、ハイブリッドですから環境にもいいです。",
      questions: [
        {
          id: 280001,
          question: "Mengapa mobil ini laku keras?",
          options: ["Karena cepat dan mahal", "Karena desain bagus, murah, dan ramah lingkungan", "Karena jarang rusak", "Karena mereknya terkenal"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 29,
    title: "Bab 29 (Intransitif & ~てしまいます)",
    vocabulary: [
      { character: "開きます", romaji: "akimasu", meaning: "terbuka" },
      { character: "閉まります", romaji: "shimarimasu", meaning: "tertutup" },
      { character: "つきます", romaji: "tsukimasu", meaning: "menyala" },
      { character: "消えます", romaji: "kiemasu", meaning: "padam, mati" },
      { character: "壊れます", romaji: "kowaremasu", meaning: "rusak (mesin)" },
      { character: "割れます", romaji: "waremasu", meaning: "pecah (kaca/gelas)" },
      { character: "折れます", romaji: "oremasu", meaning: "patah (pohon/pensil)" },
      { character: "汚れます", romaji: "yogoremasu", meaning: "menjadi kotor" }
    ],
    grammar: [
      {
        id: 2901,
        title: "Kata Kerja Intransitif + ています",
        description: "Menggambarkan suatu keadaan (state) yang terjadi dengan sendirinya dan kondisinya masih berlangsung/tersisa.",
        examples: [
          { japanese: "窓が閉まっています。", romaji: "Mado ga shimatte imasu.", meaning: "Jendelanya dalam keadaan tertutup." },
          { japanese: "テレビが壊れています。", romaji: "Terebi ga kowarete imasu.", meaning: "TV-nya dalam keadaan rusak." }
        ]
      },
      {
        id: 2902,
        title: "~てしまいます / ~てしまいました",
        description: "Menyatakan dua hal: (1) Sesuatu sudah diselesaikan 100%, atau (2) Penyesalan / hal buruk telah terjadi.",
        examples: [
          { japanese: "パスポートを落としてしまいました。", romaji: "Pasupooto o otoshite shimaimashita.", meaning: "Saya (tanpa sengaja) telah menjatuhkan paspor. (Penyesalan)" },
          { japanese: "この本は全部読んでしまいました。", romaji: "Kono hon wa zenbu yonde shimaimashita.", meaning: "Buku ini telah selesai kubaca seluruhnya. (Selesai total)" }
        ]
      }
    ],
    choukai: [
      {
        id: 29001,
        type: "blind",
        audioText: "すみません、そのコップは割れていますから、使わないでください。",
        question: "Kenapa gelas tersebut tidak boleh digunakan?",
        options: ["Kotor", "Pecah", "Milik orang lain", "Panas"],
        answer: 1,
        translation: "Maaf, karena gelas itu pecah, tolong jangan digunakan."
      }
    ],
    dokkai: {
      title: "忘れ物",
      content: "電車の中に傘を忘れてしまいました。雨が降っていたので困りましたが、駅員さんが探してくれました。本当に助かりました。",
      questions: [
        {
          id: 290001,
          question: "Apa hal buruk yang terjadi pada penulis?",
          options: ["Kehujanan di jalan", "Meninggalkan payung di kereta", "Dompetnya hilang", "Ketinggalan kereta"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 30,
    title: "Bab 30 (~てあります / Keadaan Hasil Tindakan)",
    vocabulary: [
      { character: "はります", romaji: "harimasu", meaning: "menempelkan" },
      { character: "掛けます", romaji: "kakemasu", meaning: "menggantungkan" },
      { character: "飾ります", romaji: "kazarimasu", meaning: "menghias" },
      { character: "並べます", romaji: "narabemasu", meaning: "menjejajarkan, menyusun" },
      { character: "片づけます", romaji: "katadukemasu", meaning: "membereskan" },
      { character: "相談します", romaji: "soudan shimasu", meaning: "berdiskusi, konsultasi" },
      { character: "予習します", romaji: "yoshuu shimasu", meaning: "belajar persiapan materi baru" },
      { character: "復習します", romaji: "fukushuu shimasu", meaning: "mengulang pelajaran lama" }
    ],
    grammar: [
      {
        id: 3001,
        title: "Kata Kerja Transitif + てあります",
        description: "Berbeda dengan intransitif, ini menunjukkan bahwa suatu kondisi terbentuk karena 'seseorang telah melakukan sesuatu secara sengaja'. Fokus pada benda objeknya.",
        examples: [
          { japanese: "壁にカレンダーが掛けてあります。", romaji: "Kabe ni karendaa ga kakete arimasu.", meaning: "Kalender digantungkan (oleh seseorang) di dinding." }
        ]
      },
      {
        id: 3002,
        title: "~ておきます",
        description: "Melakukan suatu tindakan sebagai persiapan untuk masa depan, atau membiarkan sesuatu tetap seperti itu.",
        examples: [
          { japanese: "明日会議がありますから、いすを並べておきます。", romaji: "Ashita kaigi ga arimasu kara, isu o narabete okimasu.", meaning: "Karena besok ada rapat, saya susun (persiapkan) kursinya dari sekarang." },
          { japanese: "窓を開けておいてください。", romaji: "Mado o akete oite kudasai.", meaning: "Biarkan jendelanya tetap terbuka." }
        ]
      }
    ],
    choukai: [
      {
        id: 30001,
        type: "blind",
        audioText: "パーティーの前に、部屋を掃除しておきます。それから、飲み物を買っておきます。",
        question: "Apa saja persiapan yang dilakukan sebelum pesta?",
        options: ["Membersihkan kamar dan beli minuman", "Memasak dan tidur", "Beli kue dan undang teman", "Mandi dan ganti baju"],
        answer: 0,
        translation: "Sebelum pesta, saya bersihkan kamar (sebagai persiapan). Setelah itu, saya beli minuman."
      }
    ],
    dokkai: {
      title: "会議の準備",
      content: "明日のミーティングの資料はもう机の上に置いてあります。ホワイトボードもきれいにふいてあります。",
      questions: [
        {
          id: 300001,
          question: "Apakah persiapan rapat sudah selesai?",
          options: ["Belum, masih dicari materinya", "Sudah, materi ada di meja dan papan tulis bersih", "Belum, papan tulis masih kotor", "Rapat dibatalkan"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 31,
    title: "Bab 31 (Bentuk Maksud / Ikoukei)",
    vocabulary: [
      { character: "始まります", romaji: "hajimarimasu", meaning: "dimulai" },
      { character: "続けます", romaji: "tsudukemasu", meaning: "melanjutkan" },
      { character: "見つけます", romaji: "mitsukemasu", meaning: "menemukan" },
      { character: "入学します", romaji: "nyuugaku shimasu", meaning: "masuk sekolah" },
      { character: "卒業します", romaji: "sotsugyou shimasu", meaning: "lulus sekolah" },
      { character: "休憩します", romaji: "kyuukei shimasu", meaning: "beristirahat" },
      { character: "連休", romaji: "renkyuu", meaning: "libur berturut-turut" },
      { character: "予定", romaji: "yotei", meaning: "jadwal, rencana" }
    ],
    grammar: [
      {
        id: 3101,
        title: "Bentuk Maksud (Ikoukei) & ~と思っています",
        description: "Bentuk Ikoukei adalah bentuk informal dari ~ましょう (mari). Jika ditambah ~と思っています, itu berarti Anda 'berniat' melakukan sesuatu (niat sudah dipikirkan sejak lama).",
        examples: [
          { japanese: "週末は海へ行こうと思っています。", romaji: "Shuumatsu wa umi e ikou to omotte imasu.", meaning: "Akhir pekan ini saya berniat mau pergi ke laut." }
        ]
      },
      {
        id: 3102,
        title: "~つもりです & ~予定です",
        description: "~つもりです menunjukkan tekad atau rencana kuat subjek. ~予定です menunjukkan rencana/jadwal yang sudah resmi atau objektif.",
        examples: [
          { japanese: "私は来年日本へ行くつもりです。", romaji: "Watashi wa rainen Nihon e iku tsumori desu.", meaning: "Saya berencana (punya tekad) pergi ke Jepang tahun depan." },
          { japanese: "会議は午後3時までの予定です。", romaji: "Kaigi wa gogo san-ji made no yotei desu.", meaning: "Rapatnya dijadwalkan sampai jam 3 sore." }
        ]
      }
    ],
    choukai: [
      {
        id: 31001,
        type: "blind",
        audioText: "大学を卒業したら、大学院で研究を続けるつもりです。",
        question: "Apa rencana orang tersebut setelah lulus?",
        options: ["Bekerja", "Menikah", "Melanjutkan penelitian di S2", "Pulang kampung"],
        answer: 2,
        translation: "Setelah lulus universitas, saya berencana melanjutkan penelitian di pascasarjana."
      }
    ],
    dokkai: {
      title: "夏休みの予定",
      content: "今年の夏休みは、友達と富士山に登ろうと思っています。そのために、毎日ジョギングをして、体を鍛えておくつもりです。",
      questions: [
        {
          id: 310001,
          question: "Apa niat penulis di musim panas?",
          options: ["Naik gunung Fuji", "Pergi ke pantai", "Tidur di rumah", "Lari maraton"],
          answer: 0
        }
      ]
    }
  },
  {
    id: 32,
    title: "Bab 32 (~ほうがいいです / Memberi Saran)",
    vocabulary: [
      { character: "運動します", romaji: "undou shimasu", meaning: "berolahraga" },
      { character: "成功します", romaji: "seikou shimasu", meaning: "sukses, berhasil" },
      { character: "失敗します", romaji: "shippai shimasu", meaning: "gagal" },
      { character: "合格します", romaji: "goukaku shimasu", meaning: "lulus ujian" },
      { character: "晴れます", romaji: "haremasu", meaning: "cerah (cuaca)" },
      { character: "曇ります", romaji: "kumorimasu", meaning: "mendung" },
      { character: "けが", romaji: "kega", meaning: "luka" },
      { character: "せき", romaji: "seki", meaning: "batuk" }
    ],
    grammar: [
      {
        id: 3201,
        title: "Kata Kerja (Ta/Nai) + ほうがいいです",
        description: "Menyatakan saran yang kuat. Lebih bermakna peringatan (jika tidak dilakukan akan berakibat buruk).",
        examples: [
          { japanese: "毎日運動したほうがいいですよ。", romaji: "Mainichi undou shita hou ga ii desu yo.", meaning: "Sebaiknya Anda berolahraga setiap hari lho." },
          { japanese: "お酒を飲まないほうがいいです。", romaji: "Osake o nomanai hou ga ii desu.", meaning: "Sebaiknya Anda tidak minum alkohol." }
        ]
      },
      {
        id: 3202,
        title: "~でしょう & ~かもしれません",
        description: "~でしょう digunakan untuk dugaan yang pembicara lumayan yakin. ~かもしれません digunakan untuk kemungkinan yang lebih kecil (bisa jadi ~).",
        examples: [
          { japanese: "明日は雨が降るでしょう。", romaji: "Ashita wa ame ga furu deshou.", meaning: "Besok mungkin akan hujan." },
          { japanese: "午後は雪になるかもしれません。", romaji: "Gogo wa yuki ni naru kamo shiremasen.", meaning: "Siang nanti bisa jadi akan turun salju." }
        ]
      }
    ],
    choukai: [
      {
        id: 32001,
        type: "blind",
        audioText: "熱がありますね。今日は早く帰って、休んだほうがいいですよ。",
        question: "Saran apa yang diberikan kepada pendengar?",
        options: ["Bekerja lembur", "Pulang cepat dan istirahat", "Pergi ke rumah sakit", "Minum obat penurun panas"],
        answer: 1,
        translation: "Anda demam ya. Sebaiknya hari ini pulang cepat dan beristirahat lho."
      }
    ],
    dokkai: {
      title: "明日の天気",
      content: "天気予報によると、明日は朝から強い風が吹くでしょう。夜は雨が降るかもしれませんから、傘を持っていったほうがいいです。",
      questions: [
        {
          id: 320001,
          question: "Apa saran yang diberikan dari teks tersebut?",
          options: ["Pakai jaket tebal", "Bawa payung karena bisa jadi hujan", "Jangan keluar rumah", "Tutup jendela"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 33,
    title: "Bab 33 (Perintah, Larangan, & ~と書いてあります)",
    vocabulary: [
      { character: "逃げます", romaji: "nigemasu", meaning: "melarikan diri" },
      { character: "騒ぎます", romaji: "sawagimasu", meaning: "membuat keributan" },
      { character: "あきらめます", romaji: "akiramemasu", meaning: "menyerah" },
      { character: "注意します", romaji: "chuui shimasu", meaning: "berhati-hati, memperingatkan" },
      { character: "規則", romaji: "kisoku", meaning: "peraturan" },
      { character: "使用禁止", romaji: "shiyou kinshi", meaning: "dilarang menggunakan" },
      { character: "立入禁止", romaji: "tachiiri kinshi", meaning: "dilarang masuk" },
      { character: "営業中", romaji: "eigyou chuu", meaning: "sedang buka (toko)" }
    ],
    grammar: [
      {
        id: 3301,
        title: "Bentuk Perintah (Meireikei) & Larangan (Kinshikei)",
        description: "Perintah: Sering digunakan pria, komandan, atau saat darurat (ex: 行け！). Larangan: Verb Kamus + な (ex: 行くな！). Keduanya sangat kasar, gunakan dengan hati-hati.",
        examples: [
          { japanese: "危ない！逃げろ！", romaji: "Abunai! Nigero!", meaning: "Bahaya! Lari!" },
          { japanese: "ここに入るな！", romaji: "Koko ni hairu na!", meaning: "Jangan masuk ke sini!" }
        ]
      },
      {
        id: 3302,
        title: "~と書いてあります & ~という意味です",
        description: "Menyampaikan apa yang tertulis atau apa arti sebuah tanda/rambu.",
        examples: [
          { japanese: "あそこに「止まれ」と書いてあります。", romaji: "Asoko ni 'Tomare' to kaite arimasu.", meaning: "Di sana tertulis 'Berhenti'." },
          { japanese: "このマークは洗濯機で洗えるという意味です。", romaji: "Kono maaku wa sentakuki de araeru to iu imi desu.", meaning: "Tanda ini berarti boleh dicuci dengan mesin cuci." }
        ]
      }
    ],
    choukai: [
      {
        id: 33001,
        type: "blind",
        audioText: "あそこに「使用禁止」と書いてありますから、使わないでください。",
        question: "Apa arti tulisan di sana?",
        options: ["Dilarang masuk", "Dilarang menggunakan", "Sedang buka", "Berhenti"],
        answer: 1,
        translation: "Karena di sana tertulis 'Dilarang menggunakan', tolong jangan dipakai."
      }
    ],
    dokkai: {
      title: "道路のマーク",
      content: "日本には色々な標識があります。赤い丸に斜めの線があるマークは「入るな」という意味です。",
      questions: [
        {
          id: 330001,
          question: "Apa arti tanda lingkaran merah dengan garis miring?",
          options: ["Dilarang berhenti", "Dilarang parkir", "Dilarang masuk (Jangan masuk)", "Belok kiri"],
          answer: 2
        }
      ]
    }
  },
  {
    id: 34,
    title: "Bab 34 (~とおりに / Sesuai dengan)",
    vocabulary: [
      { character: "磨きます", romaji: "migakimasu", meaning: "menggosok, menyikat" },
      { character: "組み立てます", romaji: "kumitatemasu", meaning: "merakit" },
      { character: "折ります", romaji: "orimasu", meaning: "melipat, mematahkan" },
      { character: "気がつきます", romaji: "ki ga tsukimasu", meaning: "menyadari" },
      { character: "見つかります", romaji: "mitsukarimasu", meaning: "ditemukan" },
      { character: "説明書", romaji: "setsumeisho", meaning: "buku petunjuk" },
      { character: "図", romaji: "zu", meaning: "bagan, diagram" },
      { character: "線", romaji: "sen", meaning: "garis" }
    ],
    grammar: [
      {
        id: 3401,
        title: "~とおりに (Sesuai dengan / Seperti yang)",
        description: "Melakukan aksi persis seperti model/standar. Rumus: (Verb Kamus/Ta) + とおりに ATAU (Noun + の) + とおりに.",
        examples: [
          { japanese: "私が言うとおりに、書いてください。", romaji: "Watashi ga iu toori ni, kaite kudasai.", meaning: "Tolong tulis sesuai dengan apa yang saya katakan." },
          { japanese: "説明書のとおりに、組み立てます。", romaji: "Setsumeisho no toori ni, kumitatemasu.", meaning: "Saya merakitnya sesuai dengan buku petunjuk." }
        ]
      },
      {
        id: 3402,
        title: "Verb 1 て / ないで、 Verb 2",
        description: "Menyatakan dua kemungkinan cara melakukan Verb 2 (apakah dengan melakukan V1 atau tanpa melakukan V1).",
        examples: [
          { japanese: "しょうゆをつけて食べます。", romaji: "Shouyu o tsukete tabemasu.", meaning: "Saya makan (dengan) mencelupkan kecap asin." },
          { japanese: "砂糖を入れないで、コーヒーを飲みます。", romaji: "Satou o irenaide, koohii o nomimasu.", meaning: "Saya minum kopi tanpa memasukkan gula." }
        ]
      }
    ],
    choukai: [
      {
        id: 34001,
        type: "blind",
        audioText: "先生が描いたとおりに、図を写してください。",
        question: "Apa instruksi yang diberikan?",
        options: ["Menggambar sendiri bebas", "Menyalin bagan sesuai yang digambar guru", "Membaca penjelasan", "Melipat kertas"],
        answer: 1,
        translation: "Tolong salin diagram sesuai dengan yang digambar oleh guru."
      }
    ],
    dokkai: {
      title: "折り紙の折り方",
      content: "折り紙の折り方は、この本に書いてあります。線のとおりに折ると、きれいな鶴ができます。",
      questions: [
        {
          id: 340001,
          question: "Bagaimana cara membuat origami burung bangau yang bagus?",
          options: ["Beli di toko", "Melipat sesuai garis", "Menggunting sembarangan", "Meminta tolong guru"],
          answer: 1
        }
      ]
    }
  },
  {
    id: 35,
    title: "Bab 35 (Bentuk Syarat ~ば / Kalau)",
    vocabulary: [
      { character: "咲きます", romaji: "sakimasu", meaning: "mekar" },
      { character: "変わります", romaji: "kawarimasu", meaning: "berubah" },
      { character: "困ります", romaji: "komarimasu", meaning: "mendapat masalah, kesulitan" },
      { character: "拾います", romaji: "hiroimasu", meaning: "memungut, menemukan" },
      { character: "楽な", romaji: "raku na", meaning: "nyaman, ringan (tidak capek)" },
      { character: "珍しい", romaji: "mezurashii", meaning: "langka, jarang ada" },
      { character: "向こう", romaji: "mukou", meaning: "sebelah sana" },
      { character: "機会", romaji: "kikai", meaning: "kesempatan" }
    ],
    grammar: [
      {
        id: 3501,
        title: "Bentuk Syarat (~ば / Joukenkei)",
        description: "Menyatakan syarat logis (Jika A terjadi, maka B terjadi). Gol I: ubah vokal u -> e + ba (ex: 行く -> 行けば). Gol II: +reba.",
        examples: [
          { japanese: "春になれば、桜が咲きます。", romaji: "Haru ni nareba, sakura ga sakimasu.", meaning: "Kalau (jika) menjadi musim semi, sakura akan mekar." },
          { japanese: "安ければ、買います。", romaji: "Yasukereba, kaimasu.", meaning: "Kalau murah, saya beli. (Sifat-i -> kereba)" }
        ]
      },
      {
        id: 3502,
        title: "Kata Tanya + Verb (~ば) いいですか",
        description: "Bentuk untuk meminta nasihat/saran, artinya sama dengan ~たらいいですか.",
        examples: [
          { japanese: "道に迷ったんですが、どうすればいいですか。", romaji: "Michi ni mayotta n desu ga, dou sureba ii desu ka.", meaning: "Saya tersesat, sebaiknya bagaimana?" }
        ]
      }
    ],
    choukai: [
      {
        id: 35001,
        type: "blind",
        audioText: "ボタンを押せば、チケットが出ます。",
        question: "Bagaimana cara agar tiketnya keluar?",
        options: ["Menarik tuas", "Menekan tombol", "Memasukkan koin", "Bicara pada petugas"],
        answer: 1,
        translation: "Kalau tombol ditekan, tiket akan keluar."
      }
    ],
    dokkai: {
      title: "パソコンの操作",
      content: "パソコンが動かなくなりました。説明書を読めば、直し方がわかります。それでもわからなければ、店の人に聞いてください。",
      questions: [
        {
          id: 350001,
          question: "Apa yang harus dilakukan jika komputer tidak menyala dan tidak tahu cara membetulkannya setelah membaca petunjuk?",
          options: ["Dibuang", "Bertanya pada orang toko", "Memukul komputer", "Beli baru"],
          answer: 1
        }
      ]
    }
  }
];

// Update mnn.json data directly for chapters 26-35
for (let chapter of accurateChapters) {
  let index = mnnData.findIndex(d => d.id === chapter.id);
  if (index !== -1) {
    mnnData[index] = chapter; // Overwrite placeholder
  } else {
    mnnData.push(chapter);
  }
}

// Ensure remaining chapters 36-50 are at least placeholders so UI doesn't crash
for (let id = 36; id <= 50; id++) {
  if (!mnnData.find(d => d.id === id)) {
    mnnData.push({
      id: id,
      title: `Bab ${id} (Dalam Pengembangan)`,
      vocabulary: [{ character: "準備中", romaji: "junbichuu", meaning: "sedang dipersiapkan" }],
      grammar: [],
      choukai: [],
      dokkai: { title: "Segera Hadir", content: "Materi ini sedang disusun dengan kualitas akurat.", questions: [] }
    });
  } else {
    // If it exists but might be a generic from previous attempt, label it better
    let idx = mnnData.findIndex(d => d.id === id);
    if(mnnData[idx].title.includes('(N4)')) {
       mnnData[idx].title = `Bab ${id} (Dalam Pengembangan)`;
    }
  }
}

fs.writeFileSync(mnnFile, JSON.stringify(mnnData, null, 2));
console.log('Successfully injected accurate data for chapters 26-35!');
