// populateCriticalN5N4.cjs
// Add critical missing N5 + N4 vocab for JLPT

const fs = require('fs');
const path = require('path');

const charsFile = path.join(__dirname, '../src', 'data', 'characters.json');
const data = JSON.parse(fs.readFileSync(charsFile, 'utf8'));

const existingN5 = new Set(data.vocabulary_n5.map(v => v.character));
const existingN4 = new Set(data.vocabulary_n4.map(v => v.character));
const allExisting = new Set([...existingN5, ...existingN4]);

let counter = 1;
function e(kanji, romaji, meaning, kana, examples, level = 'N5') {
  return {
    id: `vocab-${level.toLowerCase()}-crit-${String(counter++).padStart(3, '0')}`,
    character: kanji, romaji, meaning, kana, examples, level
  };
}

// ============================================================
// N5 CRITICAL — Months, Body, Time, Family, etc.
// ============================================================
const n5Critical = [
  // Months (12)
  e("一月", "ichigatsu", "bulan Januari", "いちがつ",
    [{jp: "一月は寒いです。", kana: "いちがつはさむいです。", id: "Januari dingin."}]),
  e("二月", "nigatsu", "bulan Februari", "にがつ",
    [{jp: "二月に試験があります。", kana: "にがつにしけんがあります。", id: "Ada ujian di bulan Februari."}]),
  e("三月", "sangatsu", "bulan Maret", "さんがつ",
    [{jp: "三月は卒業の月です。", kana: "さんげつはそつぎょうのつきです。", id: "Maret adalah bulan kelulusan."}]),
  e("四月", "shigatsu", "bulan April", "しがつ",
    [{jp: "四月から大学に入ります。", kana: "しがつからだいがくにはいります。", id: "Mulai April masuk universitas."}]),
  e("五月", "gogatsu", "bulan Mei", "ごがつ",
    [{jp: "五月はゴールデンウィークです。", kana: "ごがつはゴールデンウィークです。", id: "Mei adalah Golden Week."}]),
  e("六月", "rokugatsu", "bulan Juni", "ろくがつ",
    [{jp: "六月は雨が多いです。", kana: "ろくがちはあめがおおいです。", id: "Juni banyak hujan."}]),
  e("七月", "shichigatsu", "bulan Juli", "しちがつ",
    [{jp: "七月は暑いです。", kana: "しちがつはあついです。", id: "Juli panas."}]),
  e("八月", "hachigatsu", "bulan Agustus", "はちがつ",
    [{jp: "八月は夏休みです。", kana: "はちがつはなつやすみです。", id: "Agustus liburan musim panas."}]),
  e("九月", "kugatsu", "bulan September", "くがつ",
    [{jp: "九月から新学期です。", kana: "くがつからしんがっきです。", id: "September awal semester baru."}]),
  e("十月", "juugatsu", "bulan Oktober", "じゅうがつ",
    [{jp: "十月はスポーツの月です。", kana: "じゅうがつはスポーツのつきです。", id: "Oktober bulan olahraga."}]),
  e("十一月", "juuichigatsu", "bulan November", "じゅういちがつ",
    [{jp: "十一月は紅葉がきれいです。", kana: "じゅういちがつはこうようがきれいです。", id: "November bagus untuk daun merah."}]),
  e("十二月", "juunigatsu", "bulan Desember", "じゅうにがつ",
    [{jp: "十二月はクリスマスがあります。", kana: "じゅうにがつはクリスマスがあります。", id: "Desember ada Natal."}]),

  // Time expressions
  e("明け方", "akegata", "fajar, menjelang pagi", "あけがた",
    [{jp: "明け方に出発しました。", kana: "あけがたにしゅっぱつしました。", id: "Berangkat menjelang pagi."}]),
  e("夜中", "yonaka", "tengah malam", "よなか",
    [{jp: "夜中まで勉強しました。", kana: "よなかまでべんきょうしました。", id: "Belajar sampai tengah malam."}]),
  e("終日", "shuujitsu", "sepanjang hari", "しゅうじつ",
    [{jp: "終日雨が降りました。", kana: "しゅうじつあめがふりました。", id: "Hujan sepanjang hari."}]),
  e("おととい", "ototoi", "kemarin dulu", "おととい",
    [{jp: "おととい映画を見ました。", kana: "おとといえいがをみました。", id: "Kemarin dulu nonton film."}]),
  e("あさって", "asatte", "lusa", "あさって",
    [{jp: "あさって友達と会います。", kana: "あさってともだちとあいます。", id: "Lusa ketemu teman."}]),

  // Body parts (basic)
  e("腹", "hara", "perut", "はら",
    [{jp: "腹が痛いです。", kana: "はらがいたいです。", id: "Perut saya sakit."}]),
  e("爪", "tsume", "kuku", "つめ",
    [{jp: "爪が伸びました。", kana: "つめがのびました。", id: "Kuku saya panjang."}]),
  e("肌", "hada", "kulit", "はだ",
    [{jp: "肌が乾燥しています。", kana: "はだがかんそうしています。", id: "Kulit kering."}]),
  e("骨", "hone", "tulang", "ほね",
    [{jp: "犬が骨を噛んでいます。", kana: "いぬがほねをかんでいます。", id: "Anjing mengunyah tulang."}]),

  // Family
  e("両親", "ryoushin", "kedua orang tua", "りょうしん",
    [{jp: "私の両親は東京に住んでいます。", kana: "わたしのりょうしんはとうきょうにすんでいます。", id: "Orang tua saya tinggal di Tokyo."}]),
  e("祖父母", "sofubo", "kakek nenek", "そふぼ",
    [{jp: "祖父母の家に遊びに行きます。", kana: "そふぼのいえにあそびにいきます。", id: "Pergi main ke rumah kakek nenek."}]),
  e("伯父", "oji", "paman (kakak ayah/ibu)", "おじ",
    [{jp: "伯父は医者です。", kana: "おじはいしゃです。", id: "Paman adalah dokter."}]),
  e("伯母", "oba", "bibi (kakak ayah/ibu)", "おば",
    [{jp: "伯母はケーキを作ります。", kana: "おばはケーキをつくります。", id: "Bibi membuat kue."}]),

  // Demonstratives (missing forms)
  e("あの", "ano", "itu (modifier, jauh)", "あの",
    [{jp: "あの人は誰ですか。", kana: "あのひとはだれですか。", id: "Orang itu siapa?"}]),
  e("あそこ", "asoko", "di sana (jauh)", "あそこ",
    [{jp: "あそこで待っています。", kana: "あそこでまっています。", id: "Menunggu di sana."}]),
  e("どの方", "donohou", "yang mana (hormat)", "どのかた",
    [{jp: "どの方ですか。", kana: "どのかたですか。", id: "Yang mana (pak/bu)?"}]),

  // Adjectives
  e("丸い", "marui", "bulat", "まるい",
    [{jp: "丸いテーブルがあります。", kana: "まるいテーブルがあります。", id: "Ada meja bulat."}]),
  e("明るい", "akarui", "terang", "あかるい",
    [{jp: "この部屋は明るいです。", kana: "このへやはあかるいです。", id: "Ruangan ini terang."}]),
  e("すごく", "sugoku", "sangat, banget (casual)", "すごく",
    [{jp: "このケーキはすごくおいしいです。", kana: "このケーキはすごくおいしいです。", id: "Kue ini enak banget."}]),

  // Food/Drink
  e("酒", "sake", "minuman beralkohol", "さけ",
    [{jp: "お父さんは酒を飲みます。", kana: "おとうさんはさけをのみます。", id: "Ayah minum sake."}]),
  e("醤油", "shouyu", "kecap asin Jepang", "しょうゆ",
    [{jp: "寿司に醤油をつけます。", kana: "すしにしょうゆをつけます。", id: "Celup sushi ke kecap."}]),
  e("すいか", "suika", "semangka", "すいか",
    [{jp: "夏にはすいかを食べます。", kana: "なつにはすいかをたべます。", id: "Musim panas makan semangka."}]),

  // Common places/things
  e("うち", "uchi", "rumah (saya), kita", "うち",
    [{jp: "明日うちに来てください。", kana: "あしたうちにきてください。", id: "Besok datang ke rumah ya."}]),
  e("美容院", "biyouin", "salon kecantikan", "びよういん",
    [{jp: "母は美容院に行きます。", kana: "はははびよういんにいきます。", id: "Ibu ke salon."}]),
  e("劇場", "gekijo", "teater, gedung pertunjukan", "げきじょう",
    [{jp: "劇場で映画を見ました。", kana: "げきじょうでえいがをみました。", id: "Nonton film di teater."}]),
  e("バイク", "baiku", "motor", "バイク",
    [{jp: "バイクで学校に行きます。", kana: "バイクでがっこうにいきます。", id: "Pergi sekolah naik motor."}]),
  e("はがき", "hagaki", "kartu pos", "はがき",
    [{jp: "友達にはがきを出します。", kana: "ともだちにはがきをだします。", id: "Kirim kartu pos ke teman."}]),
  e("扉", "tobira", "pintu (besar)", "とびら",
    [{jp: "重い扉を開けます。", kana: "おもいとびらをあけます。", id: "Buka pintu berat."}]),
  e("かばん", "kaban", "tas", "かばん",
    [{jp: "新しいかばんを買いました。", kana: "あたらしいかばんをかいました。", id: "Beli tas baru."}]),
  e("ベルト", "beruto", "ikat pinggang", "ベルト",
    [{jp: "ベルトを締めます。", kana: "ベルトをしめます。", id: "Kencangkan ikat pinggang."}]),
  e("電池", "denchi", "baterai", "でんち",
    [{jp: "電池が切れました。", kana: "でんちがきれました。", id: "Baterai habis."}]),
  e("ようこそ", "youkoso", "selamat datang", "ようこそ",
    [{jp: "日本へようこそ！", kana: "にほんへようこそ！", id: "Selamat datang di Jepang!"}]),

  // Professions (missing N5)
  e("銀行員", "ginkouin", "pegawai bank", "ぎんこういん",
    [{jp: "兄は銀行員です。", kana: "あにはぎんこういんです。", id: "Kakak saya pegawai bank."}]),
  e("研究者", "kenkyuusha", "peneliti", "けんきゅうしゃ",
    [{jp: "彼女は研究者です。", kana: "かのじょはけんきゅうしゃです。", id: "Dia adalah peneliti."}]),
  e("教員", "kyouin", "guru, pengajar", "きょういん",
    [{jp: "私は高校の教員です。", kana: "わたしはこうこうのきょういんです。", id: "Saya guru SMA."}]),
  e("エンジニア", "enjinia", "insinyur", "エンジニア",
    [{jp: "兄はエンジニアです。", kana: "あにはエンジニアです。", id: "Kakak saya insinyur."}]),
  e("デザイナー", "dezainaa", "desainer", "デザイナー",
    [{jp: "彼女はデザイナーとして働いています。", kana: "かのじょはデザイナーとしてはたらいています。", id: "Dia kerja sebagai desainer."}]),
  e("プログラマー", "puroguramaa", "programmer", "プログラマー",
    [{jp: "弟はプログラマーになりたいです。", kana: "おとうとはプログラマーになりたいです。", id: "Adik mau jadi programmer."}]),
  e("コック", "kokku", "koki", "コック",
    [{jp: "父はコックです。", kana: "ちちはコックです。", id: "Ayah adalah koki."}]),
  e("ウエイトレス", "ueitoresu", "pelayan wanita", "ウエイトレス",
    [{jp: "姉はウエイトレスです。", kana: "あねはウエイトレスです。", id: "Kakak adalah pelayan."}]),
  e("作家", "sakka", "pengarang", "さっか",
    [{jp: "有名な作家の小説を読みました。", kana: "ゆうめいなさっかのしょうせつをよみました。", id: "Membaca novel pengarang terkenal."}]),
  e("画家", "gaka", "pelukis", "がか",
    [{jp: "ゴッホは有名な画家です。", kana: "ゴッホはゆうめいながかです。", id: "Van Gogh pelukis terkenal."}]),
  e("歌手", "kashu", "penyanyi", "かしゅ",
    [{jp: "私の姉は歌手です。", kana: "わたしあねはかしゅです。", id: "Kakak saya penyanyi."}]),
];

// ============================================================
// N4 CRITICAL — Abstract nouns, work, tech, etc.
// ============================================================
const n4Critical = [
  // Abstract nouns
  e("目的", "mokuteki", "tujuan", "もくてき", [{jp: "日本へ行く目的は何ですか。", kana: "にほんへいくもくてきはなんですか。", id: "Apa tujuan ke Jepang?"}], 'N4'),
  e("方法", "houhou", "metode, cara", "ほうほう", [{jp: "いい方法を教えてください。", kana: "いいほうほうをおしえてください。", id: "Tolong ajari cara yang bagus."}], 'N4'),
  e("報告", "houkoku", "laporan", "ほうこく", [{jp: "報告書を提出してください。", kana: "ほうこくしょをていしゅつしてください。", id: "Tolong serahkan laporan."}], 'N4'),
  e("感想", "kansou", "impresi, kesan", "かんそう", [{jp: "映画を見た感想を教えてください。", kana: "えいがをみたかんそうをおしえてください。", id: "Tolong ceritakan kesan setelah nonton."}], 'N4'),
  e("印象", "inshou", "kesan", "いんしょう", [{jp: "彼はいい印象です。", kana: "かれはいいいんしょうです。", id: "Dia memberi kesan baik."}], 'N4'),
  e("影響", "eikyou", "pengaruh", "えいきょう", [{jp: "音楽は人に影響を与えます。", kana: "おんがくはひとにえいきょうをあたえます。", id: "Musik memberi pengaruh pada orang."}], 'N4'),
  e("事実", "jijitsu", "fakta", "じじつ", [{jp: "これは事実です。", kana: "これはじじつです。", id: "Ini fakta."}], 'N4'),
  e("情報", "jouhou", "informasi", "じょうほう", [{jp: "詳しい情報を教えてください。", kana: "くわしいじょうほうをおしえてください。", id: "Tolong info detail."}], 'N4'),
  e("意見", "iken", "pendapat", "いけん", [{jp: "あなたの意見は何ですか。", kana: "あなたのいけんなんですか。", id: "Apa pendapat Anda?"}], 'N4'),
  e("理由", "riyuu", "alasan", "りゆう", [{jp: "遅刻した理由を言ってください。", kana: "ちこくしたりゆうをいってください。", id: "Tolong bilang alasan terlambat."}], 'N4'),

  // Feelings
  e("感情", "kanjou", "emosi, perasaan", "かんじょう", [{jp: "感情をコントロールすることが大切です。", kana: "かんじょうをコントロールすることが大切です。", id: "Penting mengontrol emosi."}], 'N4'),
  e("興奮", "koufun", "tergugah, terangsang", "こうふん", [{jp: "試合前に興奮しました。", kana: "しあいまえにこうふんしました。", id: "Tergugah sebelum pertandingan."}], 'N4'),
  e("緊張", "kinchou", "gugup, tegang", "きんちょう", [{jp: "面接の前に緊張します。", kana: "めんせつのまえにきんちょうします。", id: "Gugup sebelum interview."}], 'N4'),
  e("不安", "fuan", "tidak tenang, cemas", "ふあん", [{jp: "明日の試験が不安です。", kana: "あしたのしけんがふあんです。", id: "Cemas dengan ujian besok."}], 'N4'),
  e("満足", "manzoku", "puas", "まんぞく", [{jp: "結果に満足しています。", kana: "けっかにまんぞくしています。", id: "Puas dengan hasil."}], 'N4'),
  e("後悔", "koukai", "penyesalan", "こうかい", [{jp: "彼を信頼したことを後悔しています。", kana: "かれをしんらいしたことをこうかいしています。", id: "Menyesal memercayai dia."}], 'N4'),
  e("感謝", "kansha", "terima kasih (rasa)", "かんしゃ", [{jp: "ご支援に感謝します。", kana: "ごしえんにかんしゃします。", id: "Terima kasih atas dukungan."}], 'N4'),
  e("感心", "kanshin", "kagum", "かんしん", [{jp: "彼女の努力に感心しました。", kana: "かのじょのどりょくにかんしんしました。", id: "Kagum dengan usahanya."}], 'N4'),

  // Time/duration
  e("瞬間", "shunkan", "sesaat", "しゅんかん", [{jp: "出会った瞬間を覚えています。", kana: "であったしゅんかんをおぼえています。", id: "Ingat saat bertemu."}], 'N4'),
  e("当時", "touji", "waktu itu", "とうじ", [{jp: "当時は若かったです。", kana: "とうじはわかかったです。", id: "Waktu itu masih muda."}], 'N4'),
  e("今後", "kongo", "mulai sekarang", "こんご", [{jp: "今後ともよろしくお願いします。", kana: "こんごともよろしくおねがいします。", id: "Mohon dukungan ke depan."}], 'N4'),
  e("将来", "shourai", "masa depan", "しょうらい", [{jp: "将来何になりたいですか。", kana: "しょうらいなにになりたいですか。", id: "Mau jadi apa di masa depan?"}], 'N4'),
  e("未来", "mirai", "masa depan", "みらい", [{jp: "未来は明るいです。", kana: "みらいはあかるいです。", id: "Masa depan cerah."}], 'N4'),
  e("過去", "kako", "masa lalu", "かこ", [{jp: "過去を振り返ります。", kana: "かこをふりかえります。", id: "Melihat ke masa lalu."}], 'N4'),
  e("現在", "genzai", "sekarang", "げんざい", [{jp: "現在は東京に住んでいます。", kana: "げんざいはとうきょうにすんでいます。", id: "Sekarang tinggal di Tokyo."}], 'N4'),

  // Places
  e("現場", "genba", "lokasi kejadian, tempat kerja", "げんば", [{jp: "事故の現場に行きました。", kana: "じこのげんばにいきました。", id: "Pergi ke lokasi kecelakaan."}], 'N4'),
  e("地方", "chihou", "daerah, provinsi", "ちほう", [{jp: "地方によって食事が違います。", kana: "ちほうによってしょくじがちがいます。", id: "Makanan beda tiap daerah."}], 'N4'),
  e("都会", "tokai", "kota besar", "とかい", [{jp: "都会で生活しています。", kana: "とかいでせいかつしています。", id: "Hidup di kota besar."}], 'N4'),

  // Work/school
  e("面接", "mensetsu", "interview", "めんせつ", [{jp: "明日面接があります。", kana: "あしためんせつがあります。", id: "Besok ada interview."}], 'N4'),
  e("研修", "kenshuu", "pelatihan, training", "けんしゅう", [{jp: "新入社員の研修があります。", kana: "しんにゅうしゃいんのけんしゅうがあります。", id: "Ada training karyawan baru."}], 'N4'),
  e("会議", "kaigi", "rapat", "かいぎ", [{jp: "明日会議があります。", kana: "あしたかいぎがあります。", id: "Besok ada rapat."}], 'N4'),
  e("資料", "shiryou", "materi, dokumen", "しりょう", [{jp: "資料を配ってください。", kana: "しりょうをくばってください。", id: "Tolong bagikan dokumen."}], 'N4'),
  e("辞書", "jisho", "kamus", "じしょ", [{jp: "日本語の辞書を使います。", kana: "にほんごのじしょをつかいます。", id: "Pakai kamus bahasa Jepang."}], 'N4'),
  e("予約", "yoyaku", "reservasi", "よやく", [{jp: "レストランを予約しました。", kana: "レストランをよやくしました。", id: "Sudah reservasi restoran."}], 'N4'),

  // Technology
  e("メール", "meeru", "email", "メール", [{jp: "友達にメールを送ります。", kana: "ともだちにメールをおくります。", id: "Kirim email ke teman."}], 'N4'),
  e("インターネット", "intaanetto", "internet", "インターネット", [{jp: "インターネットで情報を探します。", kana: "インターネットでじょうほうをさがします。", id: "Cari info di internet."}], 'N4'),
  e("アプリ", "apuri", "aplikasi", "アプリ", [{jp: "便利なアプリを使います。", kana: "べんりなアプリをつかいます。", id: "Pakai aplikasi berguna."}], 'N4'),
  e("スマホ", "sumaho", "smartphone", "スマホ", [{jp: "新しいスマホを買いました。", kana: "あたらしいスマホをかいました。", id: "Beli HP baru."}], 'N4'),
  e("エアコン", "eakon", "AC", "エアコン", [{jp: "エアコンをつけてください。", kana: "エアコンをつけてください。", id: "Nyalakan AC."}], 'N4'),
  e("冷蔵庫", "reizouko", "kulkas", "れいぞうこ", [{jp: "冷蔵庫に牛乳があります。", kana: "れいぞうこにぎゅうにゅうがあります。", id: "Di kulkas ada susu."}], 'N4'),
  e("洗濯機", "sentakuki", "mesin cuci", "せんたくき", [{jp: "洗濯機が壊れました。", kana: "せんたくきをこわしました。", id: "Mesin cuci rusak."}], 'N4'),

  // Health
  e("風邪", "kaze", "masuk angin, flu", "かぜ", [{jp: "風邪を引きました。", kana: "かぜをひきました。", id: "Terserang flu."}], 'N4'),
  e("熱", "netsu", "demam, suhu", "ねつ", [{jp: "熱があります。", kana: "ねつがあります。", id: "Saya demam."}], 'N4'),
  e("咳", "seki", "batuk", "せき", [{jp: "咳が止まりません。", kana: "せきがとまりません。", id: "Batuk tidak berhenti."}], 'N4'),
  e("頭痛", "zutsuu", "sakit kepala", "ずつう", [{jp: "頭痛がします。", kana: "ずつうがします。", id: "Saya sakit kepala."}], 'N4'),
  e("注射", "chusha", "suntik", "ちゅうしゃ", [{jp: "注射は苦手です。", kana: "ちゅうしゃはにがてです。", id: "Tidak suka disuntik."}], 'N4'),

  // Weather/nature
  e("梅雨", "tsuyu", "musim hujan", "つゆ", [{jp: "梅雨の季節になりました。", kana: "つゆのきせつになりました。", id: "Sudah masuk musim hujan."}], 'N4'),
  e("台風", "taifuu", "topan", "たいふう", [{jp: "台風が来ます。", kana: "たいふうがきます。", id: "Akan ada topan."}], 'N4'),
  e("地震", "jishin", "gempa bumi", "じしん", [{jp: "地震が起きました。", kana: "じしんがおきました。", id: "Gempa terjadi."}], 'N4'),
  e("災害", "saigai", "bencana", "さいがい", [{jp: "自然災害が増えています。", kana: "しぜんさいがいがふえています。", id: "Bencana alam makin banyak."}], 'N4'),

  // Adjectives common
  e("苦手", "nigate", "lemah, kurang suka", "にがて", [{jp: "私は数学が苦手です。", kana: "わたしはすうがくがにがてです。", id: "Saya lemah matematika."}], 'N4'),
  e("得意", "tokui", "andal,擅长的", "とくい", [{jp: "彼女は歌が得意です。", kana: "かのじょはうたがとくいです。", id: "Dia jago menyanyi."}], 'N4'),
  e("複雑", "fukuzatsu", "rumit", "ふくざつ", [{jp: "この問題は複雑です。", kana: "このもんだいはふくざつです。", id: "Masalah ini rumit."}], 'N4'),
  e("単純", "tanjun", "sederhana", "たんじゅん", [{jp: "単純な質問です。", kana: "たんじゅんなしつもんです。", id: "Pertanyaan sederhana."}], 'N4'),
  e("自由", "jiyuu", "bebas", "じゆう", [{jp: "日本では自由に意見が言えます。", kana: "にほんではじゆうにいけんがいえます。", id: "Di Jepang bisa berpendapat bebas."}], 'N4'),

  // Other essentials
  e("違い", "chigai", "perbedaan", "ちがい", [{jp: "日本とインドネシアの違いは何ですか。", kana: "にほんとインドネシアのちがいはなんですか。", id: "Apa beda Jepang dan Indonesia?"}], 'N4'),
  e("確か", "tashika", "pasti, kayaknya", "たしか", [{jp: "確か三時に会いましょう。", kana: "たしかさんじにあいましょう。", id: "Seingat saya ketemu jam 3."}], 'N4'),
  e("一生懸命", "isshoukenmei", "sungguh-sungguh", "いっしょうけんめい", [{jp: "一生懸命勉強しました。", kana: "いっしょうけんめいべんきょうしました。", id: "Belajar sungguh-sungguh."}], 'N4'),
  e("注意", "chuui", "hati-hati, perhatian", "ちゅうい", [{jp: "車の運転に注意してください。", kana: "くるまのうんてんにちゅういしてください。", id: "Hati-hati menyetir mobil."}], 'N4'),
  e("約束", "yakusoku", "janji", "やくそく", [{jp: "友達と約束があります。", kana: "ともだちとやくそくがあります。", id: "Ada janji dengan teman."}], 'N4'),
  e("経験", "keiken", "pengalaman", "けいけん", [{jp: "日本での経験を話します。", kana: "にほんでのけいけんをはなします。", id: "Ceritakan pengalaman di Jepang."}], 'N4'),
  e("準備", "junbi", "persiapan", "じゅんび", [{jp: "明日の準備をします。", kana: "あしたのじゅんびをします。", id: "Persiapan untuk besok."}], 'N4'),
  e("説明", "setsumei", "penjelasan", "せつめい", [{jp: "詳しく説明してください。", kana: "くわしくせつめいしてください。", id: "Tolong jelaskan detail."}], 'N4'),
  e("相談", "soudan", "konsultasi", "そうだん", [{jp: "先生に相談します。", kana: "せんせいそうだんします。", id: "Konsultasi ke guru."}], 'N4'),
  e("返事", "henji", "balasan", "へんじ", [{jp: "返事を待っています。", kana: "へんじをまっています。", id: "Menunggu balasan."}], 'N4'),
  e("連絡", "renraku", "kontak, komunikasi", "れんらく", [{jp: "後で連絡します。", kana: "あとでれんらくします。", id: "Akan kontak nanti."}], 'N4'),
];

// Filter out existing entries
const allNew = [...n5Critical, ...n4Critical];
const toAdd = [];
const skipped = [];
for (const item of allNew) {
  if (allExisting.has(item.character)) {
    skipped.push(item.character);
  } else {
    toAdd.push(item);
    allExisting.add(item.character);
  }
}

console.log(`Skipped (already exist): ${skipped.length}`);
if (skipped.length > 0) console.log("  " + skipped.join(", "));
console.log(`To add: ${toAdd.length}`);

const n5ToAdd = toAdd.filter(x => x.level === 'N5');
const n4ToAdd = toAdd.filter(x => x.level === 'N4');
console.log(`  N5: ${n5ToAdd.length}, N4: ${n4ToAdd.length}`);

data.vocabulary_n5.push(...n5ToAdd);
data.vocabulary_n4.push(...n4ToAdd);

fs.writeFileSync(charsFile, JSON.stringify(data, ensure_ascii=false, indent=2));

console.log(`\n=== Final stats ===`);
console.log(`N5 vocab: ${data.vocabulary_n5.length}`);
console.log(`N4 vocab: ${data.vocabulary_n4.length}`);
console.log(`Total: ${data.vocabulary_n5.length + data.vocabulary_n4.length}`);
