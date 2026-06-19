import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

// Kumpulan Ungkapan Dasar & Kosakata Kombinasi (Batch 1: 100 kata)
const candidateWords = [
  // Salam & Ungkapan Sehari-hari
  { character: "いただきます", kana: "いただきます", romaji: "itadakimasu", meaning: "selamat makan", examples: [{ jp: "いただきますと言って食べます。", kana: "いただきますといってたべます。", id: "Mengatakan 'selamat makan' lalu makan." }] },
  { character: "ごちそうさまでした", kana: "ごちそうさまでした", romaji: "gochisousamadeshita", meaning: "terima kasih atas hidangannya", examples: [{ jp: "食後にごちそうさまでしたと言う。", kana: "しょくごにごちそうさまでしたという。", id: "Mengucapkan terima kasih setelah makan." }] },
  { character: "いってきます", kana: "いってきます", romaji: "ittekimasu", meaning: "saya berangkat", examples: [{ jp: "会社にいってきます。", kana: "かいしゃにいってきます。", id: "Saya berangkat ke kantor." }] },
  { character: "いってらっしゃい", kana: "いってらっしゃい", romaji: "itterasshai", meaning: "selamat jalan", examples: [{ jp: "気をつけていってらっしゃい。", kana: "きをつけていってらっしゃい。", id: "Hati-hati, selamat jalan." }] },
  { character: "ただいま", kana: "ただいま", romaji: "tadaima", meaning: "saya pulang", examples: [{ jp: "ただいま戻りました。", kana: "ただいまもどりました。", id: "Saya sudah pulang/kembali." }] },
  { character: "おかえりなさい", kana: "おかえりなさい", romaji: "okaerinasai", meaning: "selamat datang kembali", examples: [{ jp: "おかえりなさい、お疲れ様。", kana: "おかえりなさい、おつかれさま。", id: "Selamat datang kembali, terima kasih atas kerja kerasmu." }] },
  { character: "おじゃまします", kana: "おじゃまします", romaji: "ojamashimasu", meaning: "permisi (masuk rumah orang)", examples: [{ jp: "友達の家でおじゃましますと言う。", kana: "ともだちのいえでおじゃましますという。", id: "Mengucapkan permisi di rumah teman." }] },
  { character: "お待たせしました", kana: "おまたせしました", romaji: "omataseshimashita", meaning: "maaf membuat menunggu", examples: [{ jp: "お待たせしました、会議を始めます。", kana: "おまたせしました、かいぎをはじめます。", id: "Maaf membuat menunggu, mari mulai rapat." }] },
  { character: "お世話になります", kana: "おせわになります", romaji: "osewaninarimasu", meaning: "terima kasih atas bantuannya", examples: [{ jp: "これからお世話になります。", kana: "これからおせわになります。", id: "Mulai sekarang saya mohon bantuannya." }] },
  { character: "お疲れ様です", kana: "おつかれさまです", romaji: "otsukaresamadesu", meaning: "terima kasih atas kerja kerasnya", examples: [{ jp: "今日もお疲れ様です。", kana: "きょうもおつかれさまです。", id: "Hari ini juga terima kasih atas kerja kerasnya." }] },
  { character: "ごめんなさい", kana: "ごめんなさい", romaji: "gomennasai", meaning: "maaf", examples: [{ jp: "遅れてごめんなさい。", kana: "おくれてごめんなさい。", id: "Maaf saya terlambat." }] },
  { character: "すみません", kana: "すみません", romaji: "sumimasen", meaning: "permisi / maaf", examples: [{ jp: "すみません、道を教えてください。", kana: "すみません、みちをおしえてください。", id: "Permisi, tolong beri tahu jalannya." }] },
  { character: "ありがとうございます", kana: "ありがとうございます", romaji: "arigatougozaimasu", meaning: "terima kasih banyak", examples: [{ jp: "手伝ってくれてありがとうございます。", kana: "てつだってくれてありがとうございます。", id: "Terima kasih banyak sudah membantu." }] },
  { character: "どういたしまして", kana: "どういたしまして", romaji: "douitashimashite", meaning: "sama-sama", examples: [{ jp: "「ありがとう」「どういたしまして」", kana: "「ありがとう」「どういたしまして」", id: "Terima kasih - Sama-sama." }] },
  { character: "おめでとうございます", kana: "おめでとうございます", romaji: "omedetougozaimasu", meaning: "selamat", examples: [{ jp: "誕生日おめでとうございます。", kana: "たんじょうびおめでとうございます。", id: "Selamat ulang tahun." }] },

  // Onomatopoeia (Kata Tiruan Bunyi/Keadaan) - Sangat N4/N3 dasar
  { character: "ドキドキ", kana: "ドキドキ", romaji: "dokidoki", meaning: "berdebar-debar", examples: [{ jp: "テストの前でドキドキする。", kana: "テストのまえでドキドキする。", id: "Berdebar-debar sebelum ujian." }] },
  { character: "ワクワク", kana: "ワクワク", romaji: "wakuwaku", meaning: "bersemangat / antusias", examples: [{ jp: "旅行が楽しみでワクワクする。", kana: "りょこうがたのしみでワクワクする。", id: "Bersemangat karena menantikan perjalanan." }] },
  { character: "ペラペラ", kana: "ペラペラ", romaji: "perapera", meaning: "fasih (berbicara)", examples: [{ jp: "彼は日本語がペラペラです。", kana: "かれはにほんごがペラペラです。", id: "Dia berbicara bahasa Jepang dengan fasih." }] },
  { character: "キラキラ", kana: "キラキラ", romaji: "kirakira", meaning: "berkelap-kelip", examples: [{ jp: "星がキラキラ光る。", kana: "ほしがキラキラひかる。", id: "Bintang berkelap-kelip." }] },
  { character: "ピカピカ", kana: "ピカピカ", romaji: "pikapika", meaning: "mengkilap", examples: [{ jp: "靴をピカピカに磨く。", kana: "くつをピカピカにみがく。", id: "Memoles sepatu hingga mengkilap." }] },
  { character: "ニコニコ", kana: "ニコニコ", romaji: "nikoniko", meaning: "tersenyum-senyum", examples: [{ jp: "彼女はいつもニコニコしている。", kana: "かのじょはいつもニコニコしている。", id: "Dia selalu tersenyum." }] },
  { character: "ギリギリ", kana: "ギリギリ", romaji: "girigiri", meaning: "hampir saja / mepet", examples: [{ jp: "電車にギリギリ間に合った。", kana: "でんしゃにギリギリまにあった。", id: "Hampir saja ketinggalan kereta (sempat mepet)." }] },
  { character: "カラカラ", kana: "カラカラ", romaji: "karakara", meaning: "kering kerontang", examples: [{ jp: "のどがカラカラです。", kana: "のどがカラカラです。", id: "Tenggorokan sangat kering." }] },
  { character: "ザーザー", kana: "ザーザー", romaji: "zaazaa", meaning: "deras (hujan)", examples: [{ jp: "雨がザーザー降っている。", kana: "あめがザーザーふっている。", id: "Hujan turun dengan deras." }] },
  { character: "ゴロゴロ", kana: "ゴロゴロ", romaji: "gorogoro", meaning: "bergemuruh / bersantai", examples: [{ jp: "家でゴロゴロする。", kana: "いえでゴロゴロする。", id: "Bersantai bermalas-malasan di rumah." }] },
  { character: "ペコペコ", kana: "ペコペコ", romaji: "pekopeko", meaning: "sangat lapar", examples: [{ jp: "お腹がペコペコです。", kana: "おなかがペコペコです。", id: "Perut sangat lapar." }] },
  { character: "フラフラ", kana: "フラフラ", romaji: "furafura", meaning: "pusing / terhuyung", examples: [{ jp: "熱があってフラフラする。", kana: "ねつがあってフラフラする。", id: "Pusing terhuyung karena demam." }] },
  { character: "スラスラ", kana: "スラスラ", romaji: "surasura", meaning: "lancar (membaca/menulis)", examples: [{ jp: "漢字をスラスラ書く。", kana: "かんじをスラスラかく。", id: "Menulis kanji dengan lancar." }] },
  { character: "ハラハラ", kana: "ハラハラ", romaji: "harahara", meaning: "tegang / deg-degan", examples: [{ jp: "映画を見てハラハラする。", kana: "えいがをみてハラハラする。", id: "Tegang menonton film." }] },
  { character: "ボロボロ", kana: "ボロボロ", romaji: "boroboro", meaning: "compang-camping / usang", examples: [{ jp: "ボロボロの服。", kana: "ボロボロのふく。", id: "Pakaian yang compang-camping." }] },

  // Kata Benda Gabungan & Kata Keterangan Dasar N5/N4
  { character: "食べ放題", kana: "たべほうだい", romaji: "tabehoudai", meaning: "makan sepuasnya (all you can eat)", examples: [{ jp: "食べ放題の店に行く。", kana: "たべほうだいのみせにいく。", id: "Pergi ke restoran makan sepuasnya." }] },
  { character: "飲み放題", kana: "のみほうだい", romaji: "nomihoudai", meaning: "minum sepuasnya", examples: [{ jp: "飲み放題を注文する。", kana: "のみほうだいをちゅうもんする。", id: "Memesan paket minum sepuasnya." }] },
  { character: "買い物袋", kana: "かいものぶくろ", romaji: "kaimonobukuro", meaning: "kantong belanja", examples: [{ jp: "買い物袋を持参する。", kana: "かいものぶくろをじさんする。", id: "Membawa kantong belanja sendiri." }] },
  { character: "自転車置き場", kana: "じてんしゃおきば", romaji: "jitenshaokiba", meaning: "tempat parkir sepeda", examples: [{ jp: "自転車置き場にとめる。", kana: "じてんしゃおきばにとめる。", id: "Memarkir di tempat parkir sepeda." }] },
  { character: "ゴミ箱", kana: "ゴミばこ", romaji: "gomibako", meaning: "tempat sampah", examples: [{ jp: "ゴミ箱に捨てる。", kana: "ゴミばこにすてる。", id: "Membuang ke tempat sampah." }] },
  { character: "お弁当箱", kana: "おべんとうばこ", romaji: "obentoubako", meaning: "kotak bekal", examples: [{ jp: "お弁当箱を洗う。", kana: "おべんとうばこをあらう。", id: "Mencuci kotak bekal." }] },
  { character: "交番", kana: "こうばん", romaji: "kouban", meaning: "pos polisi", examples: [{ jp: "交番で道をきく。", kana: "こうばんでみちをきく。", id: "Bertanya jalan di pos polisi." }] },
  { character: "郵便局", kana: "ゆうびんきょく", romaji: "yuubinkyoku", meaning: "kantor pos", examples: [{ jp: "郵便局で切手を買う。", kana: "ゆうびんきょくできってをかう。", id: "Membeli prangko di kantor pos." }] },
  { character: "映画館", kana: "えいがかん", romaji: "eigakan", meaning: "gedung bioskop", examples: [{ jp: "映画館で映画を見る。", kana: "えいがかんである映画をみる。", id: "Menonton film di bioskop." }] },
  { character: "図書館", kana: "としょかん", romaji: "toshokan", meaning: "perpustakaan", examples: [{ jp: "図書館で本を借りる。", kana: "としょかんでほんをかりる。", id: "Meminjam buku di perpustakaan." }] },
  { character: "美術館", kana: "びじゅつかん", romaji: "bijutsukan", meaning: "museum seni", examples: [{ jp: "美術館を見学する。", kana: "びじゅつかんをけんがくする。", id: "Mengunjungi museum seni." }] },
  { character: "博物館", kana: "はくぶつかん", romaji: "hakubutsukan", meaning: "museum", examples: [{ jp: "博物館へ行く。", kana: "はくぶつかんへいく。", id: "Pergi ke museum." }] },
  { character: "動物園", kana: "どうぶつえん", romaji: "doubutsuen", meaning: "kebun binatang", examples: [{ jp: "動物園でパンダを見る。", kana: "どうぶつえんでパンダをみる。", id: "Melihat panda di kebun binatang." }] },
  { character: "植物園", kana: "しょくぶつえん", romaji: "shokubutsuen", meaning: "kebun raya / botani", examples: [{ jp: "植物園を散歩する。", kana: "しょくぶつえんをさんぽする。", id: "Berjalan-jalan di kebun raya." }] },
  { character: "遊園地", kana: "ゆうえんち", romaji: "yuuenchi", meaning: "taman hiburan", examples: [{ jp: "遊園地で遊ぶ。", kana: "ゆうえんちであそぶ。", id: "Bermain di taman hiburan." }] },
  { character: "水族館", kana: "すいぞくかん", romaji: "suizokukan", meaning: "akuarium (wisata)", examples: [{ jp: "水族館で魚を見る。", kana: "すいぞくかんでさかなをみる。", id: "Melihat ikan di akuarium." }] },
  { character: "飛行機", kana: "ひこうき", romaji: "hikouki", meaning: "pesawat terbang", examples: [{ jp: "飛行機に乗る。", kana: "ひこうきにのる。", id: "Naik pesawat terbang." }] },
  { character: "新幹線", kana: "しんかんせん", romaji: "shinkansen", meaning: "kereta cepat (Shinkansen)", examples: [{ jp: "新幹線で東京へ行く。", kana: "しんかんせんでとうきょうへいく。", id: "Pergi ke Tokyo dengan Shinkansen." }] },
  { character: "地下鉄", kana: "ちかてつ", romaji: "chikatetsu", meaning: "kereta bawah tanah", examples: [{ jp: "地下鉄を利用する。", kana: "ちかてつをりようする。", id: "Menggunakan kereta bawah tanah." }] },
  { character: "特急", kana: "とっきゅう", romaji: "tokkyuu", meaning: "kereta ekspres terbatas", examples: [{ jp: "特急券を買う。", kana: "とっきゅうけんをかう。", id: "Membeli tiket kereta ekspres." }] },
  { character: "急行", kana: "きゅうこう", romaji: "kyuukou", meaning: "kereta ekspres", examples: [{ jp: "急行電車に乗る。", kana: "きゅうこうでんしゃにのる。", id: "Naik kereta ekspres." }] },
  { character: "各駅停車", kana: "かくえきていしゃ", romaji: "kakuekiteisha", meaning: "kereta lokal (berhenti di setiap stasiun)", examples: [{ jp: "各駅停車で行く。", kana: "かくえきていしゃでいく。", id: "Pergi dengan kereta lokal." }] },
  { character: "時刻表", kana: "じこくひょう", romaji: "jikokuhyou", meaning: "tabel jadwal (kereta/bus)", examples: [{ jp: "時刻表を確認する。", kana: "じこくひょうをかくにんする。", id: "Memeriksa tabel jadwal." }] },
  { character: "指定席", kana: "していせき", romaji: "shiteiseki", meaning: "kursi pesanan (reserved seat)", examples: [{ jp: "指定席を予約する。", kana: "していせきをよやくする。", id: "Memesan kursi pesanan." }] },
  { character: "自由席", kana: "じゆうせき", romaji: "jiyuuseki", meaning: "kursi bebas (non-reserved seat)", examples: [{ jp: "自由席に座る。", kana: "じゆうせきにすわる。", id: "Duduk di kursi bebas." }] },
  { character: "窓口", kana: "まどぐち", romaji: "madoguchi", meaning: "loket tiket", examples: [{ jp: "窓口で切符を買う。", kana: "まどぐちできっぷをかう。", id: "Membeli tiket di loket." }] },
  { character: "自動販売機", kana: "じどうはんばいき", romaji: "jidouhanbaiki", meaning: "mesin penjual otomatis (vending machine)", examples: [{ jp: "自動販売機でジュースを買う。", kana: "じどうはんばいきでジュースをかう。", id: "Membeli jus di mesin otomatis." }] },
  { character: "携帯電話", kana: "けいたいでんわ", romaji: "keitaidenwa", meaning: "telepon genggam", examples: [{ jp: "携帯電話を使う。", kana: "けいたいでんわをつかう。", id: "Menggunakan telepon genggam." }] },
  { character: "スマートフォン", kana: "スマートフォン", romaji: "sumaatofon", meaning: "smartphone", examples: [{ jp: "スマートフォンで写真を撮る。", kana: "スマートフォンでしゃしんをとる。", id: "Memotret dengan smartphone." }] },
  { character: "充電器", kana: "じゅうでんき", romaji: "juudenki", meaning: "pengisi daya (charger)", examples: [{ jp: "充電器を借りる。", kana: "じゅうでんきをかりる。", id: "Meminjam charger." }] },
  { character: "電池", kana: "でんち", romaji: "denchi", meaning: "baterai", examples: [{ jp: "電池を交換する。", kana: "でんちをこうかんする。", id: "Mengganti baterai." }] },
  { character: "延長コード", kana: "えんちょうコード", romaji: "enchoukoodo", meaning: "kabel ekstensi (stopkontak)", examples: [{ jp: "延長コードを使う。", kana: "えんちょうコードをつかう。", id: "Menggunakan kabel ekstensi." }] },
  { character: "扇風機", kana: "せんぷうき", romaji: "senpuuki", meaning: "kipas angin", examples: [{ jp: "扇風機をつける。", kana: "せんぷうきをつける。", id: "Menyalakan kipas angin." }] },
  { character: "冷房", kana: "れいぼう", romaji: "reibou", meaning: "pendingin ruangan (AC)", examples: [{ jp: "冷房が効いている。", kana: "れいぼうがきいている。", id: "Pendingin ruangannya terasa." }] },
  { character: "暖房", kana: "だんぼう", romaji: "danbou", meaning: "pemanas ruangan", examples: [{ jp: "暖房をつける。", kana: "だんぼうをつける。", id: "Menyalakan pemanas ruangan." }] },
  { character: "加湿器", kana: "かしつき", romaji: "kashitsuki", meaning: "pelembab udara (humidifier)", examples: [{ jp: "加湿器に水を入れる。", kana: "かしつきにみずをいれる。", id: "Memasukkan air ke humidifier." }] },
  { character: "掃除機", kana: "そうじき", romaji: "soujiki", meaning: "mesin penyedot debu", examples: [{ jp: "掃除機をかける。", kana: "そうじきをかける。", id: "Menyedot debu." }] },
  { character: "洗濯機", kana: "せんたくき", romaji: "sentakuki", meaning: "mesin cuci", examples: [{ jp: "洗濯機を回す。", kana: "せんたくきをまわす。", id: "Menyalakan mesin cuci." }] },
  { character: "冷蔵庫", kana: "れいぞうこ", romaji: "reizouko", meaning: "kulkas", examples: [{ jp: "冷蔵庫にしまう。", kana: "れいぞうこにしまう。", id: "Menyimpan di kulkas." }] },
  { character: "電子レンジ", kana: "でんしレンジ", romaji: "denshirenji", meaning: "microwave", examples: [{ jp: "電子レンジで温める。", kana: "でんしレンジであたためる。", id: "Memanaskan dengan microwave." }] },
  { character: "炊飯器", kana: "すいはんき", romaji: "suihanki", meaning: "penanak nasi", examples: [{ jp: "炊飯器でご飯を炊く。", kana: "すいはんきでごはんをたく。", id: "Menanak nasi dengan penanak nasi." }] },
  { character: "まな板", kana: "まないた", romaji: "manaita", meaning: "talenan", examples: [{ jp: "まな板で野菜を切る。", kana: "まないたでやさいをきる。", id: "Memotong sayur di talenan." }] },
  { character: "包丁", kana: "ほうちょう", romaji: "houchou", meaning: "pisau dapur", examples: [{ jp: "包丁を使う。", kana: "ほうちょうをつかう。", id: "Menggunakan pisau dapur." }] },
  { character: "お皿", kana: "おさら", romaji: "osara", meaning: "piring", examples: [{ jp: "お皿を洗う。", kana: "おさらをあらう。", id: "Mencuci piring." }] },
  { character: "お箸", kana: "おはし", romaji: "ohashi", meaning: "sumpit", examples: [{ jp: "お箸で食べる。", kana: "おはしでたべる。", id: "Makan dengan sumpit." }] },
  { character: "スプーン", kana: "スプーン", romaji: "supuun", meaning: "sendok", examples: [{ jp: "スプーンでスープを飲む。", kana: "スプーンでスープをのむ。", id: "Minum sup dengan sendok." }] },
  { character: "フォーク", kana: "フォーク", romaji: "fooku", meaning: "garpu", examples: [{ jp: "フォークでパスタを食べる。", kana: "フォークでパスタをたべる。", id: "Makan pasta dengan garpu." }] },
  { character: "ナイフ", kana: "ナイフ", romaji: "naifu", meaning: "pisau (makan)", examples: [{ jp: "ナイフで肉を切る。", kana: "ナイフでにくをきる。", id: "Memotong daging dengan pisau." }] },
  { character: "コップ", kana: "コップ", romaji: "koppu", meaning: "cangkir / gelas", examples: [{ jp: "コップに水を注ぐ。", kana: "コップにみずをそそぐ。", id: "Menuangkan air ke gelas." }] },
  { character: "お茶碗", kana: "おちゃわん", romaji: "ochawan", meaning: "mangkuk (nasi/teh)", examples: [{ jp: "お茶碗にご飯を盛る。", kana: "おちゃわんにごはんをもる。", id: "Menyajikan nasi di mangkuk." }] },
  { character: "急須", kana: "きゅうす", romaji: "kyuusu", meaning: "teko teh (Jepang)", examples: [{ jp: "急須でお茶を入れる。", kana: "きゅうすでおちゃをいれる。", id: "Menyeduh teh dengan teko." }] },
  { character: "湯飲み", kana: "ゆのみ", romaji: "yunomi", meaning: "gelas teh (Jepang)", examples: [{ jp: "湯飲みでお茶を飲む。", kana: "ゆのみでおちゃをのむ。", id: "Minum teh dengan gelas teh." }] },
  { character: "おしぼり", kana: "おしぼり", romaji: "oshibori", meaning: "handuk basah (restoran)", examples: [{ jp: "おしぼりで手を拭く。", kana: "おしぼりでてをふく。", id: "Mengelap tangan dengan handuk basah." }] },
  { character: "爪切り", kana: "つめきり", romaji: "tsumekiri", meaning: "pemotong kuku", examples: [{ jp: "爪切りで爪を切る。", kana: "つめきりでつめをきる。", id: "Memotong kuku dengan pemotong kuku." }] },
  { character: "耳かき", kana: "みみかき", romaji: "mimikaki", meaning: "pembersih telinga", examples: [{ jp: "耳かきをする。", kana: "みみかきをする。", id: "Membersihkan telinga." }] },
  { character: "綿棒", kana: "めんぼう", romaji: "menbou", meaning: "cotton bud", examples: [{ jp: "綿棒を使う。", kana: "めんぼうをつかう。", id: "Menggunakan cotton bud." }] },
  { character: "歯ブラシ", kana: "はブラシ", romaji: "haburashi", meaning: "sikat gigi", examples: [{ jp: "新しい歯ブラシを買う。", kana: "あたらしいはブラシをかう。", id: "Membeli sikat gigi baru." }] },
  { character: "歯磨き粉", kana: "はみがきこ", romaji: "hamigakiko", meaning: "pasta gigi", examples: [{ jp: "歯磨き粉をつける。", kana: "はみがきこをつける。", id: "Mengoleskan pasta gigi." }] },
  { character: "石鹸", kana: "せっけん", romaji: "sekken", meaning: "sabun", examples: [{ jp: "石鹸で手を洗う。", kana: "せっけんでてをあらう。", id: "Mencuci tangan dengan sabun." }] },
  { character: "シャンプー", kana: "シャンプー", romaji: "shanpuu", meaning: "sampo", examples: [{ jp: "シャンプーで髪を洗う。", kana: "シャンプーでかみをあらう。", id: "Mencuci rambut dengan sampo." }] },
  { character: "リンス", kana: "リンス", romaji: "rinsu", meaning: "kondisioner rambut", examples: [{ jp: "リンスをする。", kana: "リンスをする。", id: "Memakai kondisioner." }] },
  { character: "タオル", kana: "タオル", romaji: "taoru", meaning: "handuk", examples: [{ jp: "タオルで体を拭く。", kana: "タオルでからだをふく。", id: "Mengeringkan badan dengan handuk." }] },
  { character: "バスタオル", kana: "バスタオル", romaji: "basutaoru", meaning: "handuk mandi", examples: [{ jp: "バスタオルを使う。", kana: "バスタオルをつかう。", id: "Menggunakan handuk mandi." }] },
  { character: "トイレットペーパー", kana: "トイレットペーパー", romaji: "toirettopeepaa", meaning: "tisu toilet", examples: [{ jp: "トイレットペーパーを買う。", kana: "トイレットペーパーをかう。", id: "Membeli tisu toilet." }] },
  { character: "ティッシュ", kana: "ティッシュ", romaji: "tisshu", meaning: "tisu", examples: [{ jp: "ティッシュで鼻をかむ。", kana: "ティッシュではなをかむ。", id: "Mengelap hidung dengan tisu." }] },
  { character: "ゴミ袋", kana: "ゴミぶくろ", romaji: "gomibukuro", meaning: "kantong sampah", examples: [{ jp: "ゴミ袋を捨てる。", kana: "ゴミぶくろをすてる。", id: "Membuang kantong sampah." }] },
  { character: "洗剤", kana: "せんざい", romaji: "senzai", meaning: "deterjen", examples: [{ jp: "洗剤を入れて洗う。", kana: "せんざいをいれてあらう。", id: "Mencuci dengan memasukkan deterjen." }] },
  { character: "柔軟剤", kana: "じゅうなんざい", romaji: "juunanzai", meaning: "pelembut pakaian", examples: [{ jp: "柔軟剤を使う。", kana: "じゅうなんざいをつかう。", id: "Menggunakan pelembut pakaian." }] },
  { character: "ハンガー", kana: "ハンガー", romaji: "hangaa", meaning: "gantungan baju", examples: [{ jp: "ハンガーに服をかける。", kana: "ハンガーにふくをかける。", id: "Menggantung baju di gantungan." }] },
  { character: "物干し竿", kana: "ものほしざお", romaji: "monohoshizao", meaning: "tiang jemuran", examples: [{ jp: "物干し竿に干す。", kana: "ものほしざおにほす。", id: "Menjemur di tiang jemuran." }] }
];

console.log("Membaca file characters.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let data = JSON.parse(rawdata);

// Kita mengganti 100 entri pertama dari 323 elemen TERAKHIR
const totalN4 = data.vocabulary_n4.length;
const startIdx = totalN4 - 323; // Index di mana 323 kata N3 tambahan dimulai

let injectedCount = 0;

for (let i = 0; i < 100; i++) {
  const targetIdx = startIdx + i;
  if (targetIdx < totalN4 && candidateWords[i]) {
    const newWord = candidateWords[i];
    
    data.vocabulary_n4[targetIdx].character = newWord.character;
    data.vocabulary_n4[targetIdx].kana = newWord.kana;
    data.vocabulary_n4[targetIdx].romaji = newWord.romaji;
    data.vocabulary_n4[targetIdx].meaning = newWord.meaning;
    data.vocabulary_n4[targetIdx].examples = newWord.examples;
    
    injectedCount++;
  }
}

console.log(`Berhasil mengganti ${injectedCount} kata N3 dengan Ungkapan Dasar/Kombinasi.`);

if (injectedCount > 0) {
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log("✅ Update characters.json sukses!");
}
