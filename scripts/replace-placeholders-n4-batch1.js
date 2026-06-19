import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'characters.json');

// Kumpulan 100 kandidat kata N4 (sebagian besar kata kerja/benda/sifat).
// Jika ada yang duplikat dengan 801 kata existing, akan diabaikan.
const candidateWords = [
  { character: "案内する", kana: "あんないする", romaji: "annaisuru", meaning: "memandu / mengantar", examples: [{ jp: "京都の町を案内します。", kana: "きょうとのまちをあんないします。", id: "Saya akan memandu keliling kota Kyoto." }] },
  { character: "一生懸命", kana: "いっしょうけんめい", romaji: "isshoukenmei", meaning: "dengan sungguh-sungguh", examples: [{ jp: "一生懸命勉強します。", kana: "いっしょうけんめいべんきょうします。", id: "Belajar dengan sungguh-sungguh." }] },
  { character: "オートバイ", kana: "オートバイ", romaji: "ootobai", meaning: "sepeda motor", examples: [{ jp: "オートバイに乗ります。", kana: "オートバイにのります。", id: "Naik sepeda motor." }] },
  { character: "おかげさまで", kana: "おかげさまで", romaji: "okagesamade", meaning: "berkat bantuan/doa Anda", examples: [{ jp: "おかげさまで元気です。", kana: "おかげさまでげんきです。", id: "Berkat doa Anda, saya sehat." }] },
  { character: "思い出す", kana: "おもいだす", romaji: "omoidasu", meaning: "teringat / mengenang", examples: [{ jp: "昔のことを思い出します。", kana: "むかしのことをおもいだします。", id: "Teringat masa lalu." }] },
  { character: "お祭り", kana: "おまつり", romaji: "omatsuri", meaning: "festival", examples: [{ jp: "お祭りに参加します。", kana: "おまつりにさんかします。", id: "Berpartisipasi dalam festival." }] },
  { character: "片付ける", kana: "かたづける", romaji: "katadzukeru", meaning: "merapikan", examples: [{ jp: "部屋を片付けます。", kana: "へやをかたづけます。", id: "Merapikan kamar." }] },
  { character: "悲しい", kana: "かなしい", romaji: "kanashii", meaning: "sedih", examples: [{ jp: "悲しい映画を見ました。", kana: "かなしいえいがをみました。", id: "Menonton film yang sedih." }] },
  { character: "必ず", kana: "かならず", romaji: "kanarazu", meaning: "pasti / selalu", examples: [{ jp: "必ず約束を守ります。", kana: "かならずやくそくをまもります。", id: "Pasti menepati janji." }] },
  { character: "髪", kana: "かみ", romaji: "kami", meaning: "rambut", examples: [{ jp: "髪が長いです。", kana: "かみがながいです。", id: "Rambutnya panjang." }] },
  { character: "通う", kana: "かよう", romaji: "kayou", meaning: "pulang pergi / rutin pergi ke", examples: [{ jp: "毎日学校に通います。", kana: "まいにちがっこうにかよいます。", id: "Pergi-pulang sekolah setiap hari." }] },
  { character: "乾く", kana: "かわく", romaji: "kawaku", meaning: "kering", examples: [{ jp: "服が乾きました。", kana: "ふくがかわきました。", id: "Pakaian sudah kering." }] },
  { character: "代わり", kana: "かわり", romaji: "kawari", meaning: "pengganti", examples: [{ jp: "社長の代わりに行きます。", kana: "しゃちょうのかわりにいきます。", id: "Pergi sebagai pengganti direktur." }] },
  { character: "厳しい", kana: "きびしい", romaji: "kibishii", meaning: "tegas / ketat", examples: [{ jp: "先生は厳しいです。", kana: "せんせいはきびしいです。", id: "Guru itu tegas." }] },
  { character: "気分", kana: "きぶん", romaji: "kibun", meaning: "perasaan / kondisi badan", examples: [{ jp: "今日は気分がいいです。", kana: "きょうはきぶんがいいです。", id: "Hari ini kondisinya baik." }] },
  { character: "決まる", kana: "きまる", romaji: "kimaru", meaning: "ditentukan / diputuskan", examples: [{ jp: "予定が決まりました。", kana: "よていがきまりました。", id: "Rencananya sudah diputuskan." }] },
  { character: "比べる", kana: "くらべる", romaji: "kuraberu", meaning: "membandingkan", examples: [{ jp: "値段を比べます。", kana: "ねだんをくらべます。", id: "Membandingkan harga." }] },
  { character: "暮れる", kana: "くれる", romaji: "kureru", meaning: "menjadi gelap (sore)", examples: [{ jp: "日が暮れました。", kana: "ひがくれました。", id: "Matahari telah terbenam." }] },
  { character: "警察", kana: "けいさつ", romaji: "keisatsu", meaning: "polisi", examples: [{ jp: "警察を呼びます。", kana: "けいさつをよびます。", id: "Memanggil polisi." }] },
  { character: "決して", kana: "けっして", romaji: "kesshite", meaning: "tidak akan pernah", examples: [{ jp: "決して忘れません。", kana: "けっしてわすれません。", id: "Saya tidak akan pernah lupa." }] },
  { character: "原因", kana: "げんいん", romaji: "genin", meaning: "penyebab", examples: [{ jp: "事故の原因を調べます。", kana: "じこのげんいんをしらべます。", id: "Menyelidiki penyebab kecelakaan." }] },
  { character: "喧嘩", kana: "けんか", romaji: "kenka", meaning: "pertengkaran", examples: [{ jp: "友達と喧嘩しました。", kana: "ともだちとけんかしました。", id: "Bertengkar dengan teman." }] },
  { character: "研究", kana: "けんきゅう", romaji: "kenkyuu", meaning: "penelitian", examples: [{ jp: "大学で研究しています。", kana: "だいがくでけんきゅうしています。", id: "Melakukan penelitian di universitas." }] },
  { character: "講義", kana: "こうぎ", romaji: "kougi", meaning: "kuliah (lecture)", examples: [{ jp: "先生の講義を聞きます。", kana: "せんせいのこうぎをききます。", id: "Mendengarkan kuliah dari dosen." }] },
  { character: "交通", kana: "こうつう", romaji: "koutsuu", meaning: "lalu lintas / transportasi", examples: [{ jp: "ここは交通が便利です。", kana: "ここはこうつうがべんりです。", id: "Transportasi di sini praktis." }] },
  { character: "心", kana: "こころ", romaji: "kokoro", meaning: "hati / perasaan", examples: [{ jp: "優しい心を持っています。", kana: "やさしいこころをもっています。", id: "Memiliki hati yang lembut." }] },
  { character: "ごちそう", kana: "gochisou", romaji: "gochisou", meaning: "hidangan lezat / traktiran", examples: [{ jp: "ごちそうを食べました。", kana: "ごちそうをたべました。", id: "Makan hidangan lezat." }] },
  { character: "細かい", kana: "こまかい", romaji: "komakai", meaning: "halus / kecil / rinci", examples: [{ jp: "細かいお金がありません。", kana: "こまかいおかねがありません。", id: "Tidak punya uang receh." }] },
  { character: "込む", kana: "こむ", romaji: "komu", meaning: "penuh sesak", examples: [{ jp: "電車が込んでいます。", kana: "でんしゃがこんでいます。", id: "Keretanya penuh sesak." }] },
  { character: "これから", kana: "これから", romaji: "korekara", meaning: "mulai sekarang", examples: [{ jp: "これから勉強します。", kana: "これからべんきょうします。", id: "Mulai sekarang saya akan belajar." }] },
  { character: "壊す", kana: "こわす", romaji: "kowasu", meaning: "merusak", examples: [{ jp: "時計を壊しました。", kana: "とけいをこわしました。", id: "Merusak jam." }] },
  { character: "最近", kana: "さいきん", romaji: "saikin", meaning: "akhir-akhir ini", examples: [{ jp: "最近忙しいです。", kana: "さいきんいそがしいです。", id: "Akhir-akhir ini saya sibuk." }] },
  { character: "最後", kana: "さいご", romaji: "saigo", meaning: "terakhir", examples: [{ jp: "最後まで頑張ります。", kana: "さいごまでがんばります。", id: "Akan berusaha hingga akhir." }] },
  { character: "最初", kana: "さいしょ", romaji: "saisho", meaning: "pertama / awal", examples: [{ jp: "最初は難しいです。", kana: "さいしょはむずかしいです。", id: "Awalnya memang sulit." }] },
  { character: "探す", kana: "さがす", romaji: "sagasu", meaning: "mencari", examples: [{ jp: "鍵を探しています。", kana: "かぎをさがしています。", id: "Sedang mencari kunci." }] },
  { character: "下がる", kana: "さがる", romaji: "sagaru", meaning: "turun", examples: [{ jp: "熱が下がりました。", kana: "ねつがさがりました。", id: "Demamnya sudah turun." }] },
  { character: "盛ん", kana: "さかん", romaji: "sakan", meaning: "populer / makmur", examples: [{ jp: "スポーツが盛んです。", kana: "スポーツがさかんです。", id: "Olahraga sangat populer." }] },
  { character: "下げる", kana: "さげる", romaji: "sageru", meaning: "menurunkan", examples: [{ jp: "頭を下げます。", kana: "あたまをさげます。", id: "Menundukkan kepala." }] },
  { character: "寂しい", kana: "さびしい", romaji: "sabishii", meaning: "kesepian", examples: [{ jp: "一人で寂しいです。", kana: "ひとりでさびしいです。", id: "Kesepian sendirian." }] },
  { character: "騒ぐ", kana: "さわぐ", romaji: "sawagu", meaning: "berbuat ribut", examples: [{ jp: "教室で騒ぎます。", kana: "きょうしつでさわぎます。", id: "Ribut di dalam kelas." }] },
  { character: "触る", kana: "さわる", romaji: "sawaru", meaning: "menyentuh", examples: [{ jp: "絵に触らないでください。", kana: "えにさわらないでください。", id: "Tolong jangan menyentuh lukisan." }] },
  { character: "試合", kana: "しあい", romaji: "shiai", meaning: "pertandingan", examples: [{ jp: "サッカーの試合を見ます。", kana: "サッカーのしあいをつみます。", id: "Menonton pertandingan sepak bola." }] },
  { character: "仕方", kana: "しかた", romaji: "shikata", meaning: "cara (melakukan sesuatu)", examples: [{ jp: "やり方がわかりません。", kana: "やりかたがわかりません。", id: "Tidak tahu cara melakukannya." }] },
  { character: "事故", kana: "じこ", romaji: "jiko", meaning: "kecelakaan", examples: [{ jp: "事故がありました。", kana: "じこがありました。", id: "Terjadi kecelakaan." }] },
  { character: "地震", kana: "じしん", romaji: "jishin", meaning: "gempa bumi", examples: [{ jp: "地震は怖いです。", kana: "じしんはこわいです。", id: "Gempa bumi itu menakutkan." }] },
  { character: "時代", kana: "じだい", romaji: "jidai", meaning: "zaman / masa", examples: [{ jp: "学生時代を思い出します。", kana: "がくせいじだいをおもいだします。", id: "Teringat masa-masa menjadi pelajar." }] },
  { character: "しっかり", kana: "しっかり", romaji: "shikkari", meaning: "dengan tekun / kuat", examples: [{ jp: "しっかり勉強します。", kana: "しっかりべんきょうします。", id: "Belajar dengan tekun." }] },
  { character: "失敗", kana: "しっぱい", romaji: "shippai", meaning: "kegagalan / gagal", examples: [{ jp: "テストで失敗しました。", kana: "テストでしっぱいしました。", id: "Saya gagal dalam ujian." }] },
  { character: "しばらく", kana: "しばらく", romaji: "shibaraku", meaning: "sebentar / beberapa saat", examples: [{ jp: "しばらくお待ちください。", kana: "しばらくおまちください。", id: "Tolong tunggu sebentar." }] },
  { character: "邪魔", kana: "じゃま", romaji: "jama", meaning: "gangguan / mengganggu", examples: [{ jp: "邪魔しないでください。", kana: "じゃましないでください。", id: "Tolong jangan ganggu." }] },
  { character: "自由", kana: "じゆう", romaji: "jiyuu", meaning: "bebas", examples: [{ jp: "自由に話してください。", kana: "じゆうにはなしてください。", id: "Silakan berbicara dengan bebas." }] },
  { character: "十分", kana: "じゅうぶん", romaji: "juubun", meaning: "cukup", examples: [{ jp: "お金は十分あります。", kana: "おかねはじゅうぶんあります。", id: "Uangnya cukup." }] },
  { character: "紹介", kana: "しょうかい", romaji: "shoukai", meaning: "perkenalan", examples: [{ jp: "友達を紹介します。", kana: "ともだちをしょうかいします。", id: "Saya memperkenalkan teman saya." }] },
  { character: "小説", kana: "しょうせつ", romaji: "shousetsu", meaning: "novel", examples: [{ jp: "小説を読んでいます。", kana: "しょうせつをよんでいます。", id: "Sedang membaca novel." }] },
  { character: "知らせる", kana: "しらせる", romaji: "shiraseru", meaning: "memberitahukan", examples: [{ jp: "ニュースを知らせます。", kana: "ニュースをしらせます。", id: "Memberitahukan berita." }] },
  { character: "調べる", kana: "しらべる", romaji: "shiraberu", meaning: "mencari tahu / memeriksa", examples: [{ jp: "辞書で調べます。", kana: "じしょでしらべます。", id: "Mencari di kamus." }] },
  { character: "人口", kana: "じんこう", romaji: "jinkou", meaning: "populasi penduduk", examples: [{ jp: "東京は人口が多いです。", kana: "とうきょうはじんこうがおおいです。", id: "Tokyo populasinya banyak." }] },
  { character: "心配", kana: "しんぱい", romaji: "shinpai", meaning: "khawatir", examples: [{ jp: "心配しないでください。", kana: "しんぱいしないでください。", id: "Tolong jangan khawatir." }] },
  { character: "すっかり", kana: "すっかり", romaji: "sukkari", meaning: "sepenuhnya / total", examples: [{ jp: "すっかり忘れました。", kana: "すっかりわすれました。", id: "Saya benar-benar lupa total." }] },
  { character: "ずっと", kana: "ずっと", romaji: "zutto", meaning: "jauh lebih / terus menerus", examples: [{ jp: "日本はずっと暑いです。", kana: "にほんはずっとあついです。", id: "Jepang terus-menerus panas." }] },
  { character: "捨てる", kana: "すてる", romaji: "suteru", meaning: "membuang", examples: [{ jp: "ごみを捨てます。", kana: "ごみをすてます。", id: "Membuang sampah." }] },
  { character: "すると", kana: "すると", romaji: "suruto", meaning: "lalu / kemudian (menunjukkan akibat)", examples: [{ jp: "薬を飲んだ。すると治った。", kana: "くすりをのんだ。するとなおった。", id: "Minum obat. Kemudian sembuh." }] },
  { character: "世界", kana: "せかい", romaji: "sekai", meaning: "dunia", examples: [{ jp: "世界中を旅行します。", kana: "せかいじゅうをりょこうします。", id: "Bepergian ke seluruh dunia." }] },
  { character: "説明", kana: "せつめい", romaji: "setsumei", meaning: "penjelasan", examples: [{ jp: "文法を説明します。", kana: "ぶんぽうをせつめいします。", id: "Menjelaskan tata bahasa." }] },
  { character: "ぜひ", kana: "ぜひ", romaji: "zehi", meaning: "pasti / sangat berharap", examples: [{ jp: "ぜひ来てください。", kana: "ぜひきてください。", id: "Tolong pastikan untuk datang ya." }] },
  { character: "世話", kana: "せわ", romaji: "sewa", meaning: "perawatan / mengurus", examples: [{ jp: "犬の世話をします。", kana: "いぬのせわをします。", id: "Mengurus anjing." }] },
  { character: "戦争", kana: "せんそう", romaji: "sensou", meaning: "perang", examples: [{ jp: "戦争が始まりました。", kana: "せんそうがはじまりました。", id: "Perang telah dimulai." }] },
  { character: "相談", kana: "そうだん", romaji: "soudan", meaning: "konsultasi / diskusi", examples: [{ jp: "先生に相談します。", kana: "せんせいにそうだんします。", id: "Berkonsultasi kepada guru." }] },
  { character: "育てる", kana: "そだてる", romaji: "sodateru", meaning: "membesarkan / mendidik", examples: [{ jp: "子供を育てます。", kana: "こどもをそだてます。", id: "Membesarkan anak." }] },
  { character: "卒業", kana: "そつぎょう", romaji: "sotsugyou", meaning: "lulus sekolah", examples: [{ jp: "大学を卒業しました。", kana: "だいがくをそつぎょうしました。", id: "Sudah lulus dari universitas." }] },
  { character: "祖父", kana: "そふ", romaji: "sofu", meaning: "kakek (sendiri)", examples: [{ jp: "祖父は元気です。", kana: "そふはげんきです。", id: "Kakek saya sehat." }] },
  { character: "祖母", kana: "そぼ", romaji: "sobo", meaning: "nenek (sendiri)", examples: [{ jp: "祖母は料理が上手です。", kana: "そぼはりょうりがじょうずです。", id: "Nenek saya pintar memasak." }] },
  { character: "それで", kana: "それで", romaji: "sorede", meaning: "oleh karena itu / lalu", examples: [{ jp: "それで、どうなったの。", kana: "それで、どうなったの。", id: "Lalu, bagaimana kelanjutannya?" }] },
  { character: "それに", kana: "それに", romaji: "soreni", meaning: "dan lagi / lagipula", examples: [{ jp: "安いし、それに美味しい。", kana: "やすいし、それにおいしい。", id: "Murah, lagipula lezat." }] },
  { character: "そろそろ", kana: "そろそろ", romaji: "sorosoro", meaning: "sebentar lagi (saatnya)", examples: [{ jp: "そろそろ失礼します。", kana: "そろそろしつれいします。", id: "Saya permisi dulu ya." }] },
  { character: "そんな", kana: "そんな", romaji: "sonna", meaning: "seperti itu", examples: [{ jp: "そんなことはありません。", kana: "そんなことはありません。", id: "Hal seperti itu tidak benar." }] },
  { character: "そんなに", kana: "そんなに", romaji: "sonnani", meaning: "tidak sebegitunya", examples: [{ jp: "そんなに高くないです。", kana: "そんなにたかくないです。", id: "Tidak semahal itu." }] },
  { character: "退院", kana: "たいいん", romaji: "taiin", meaning: "keluar dari rumah sakit", examples: [{ jp: "明日退院します。", kana: "あしたたいいんします。", id: "Besok saya keluar RS." }] },
  { character: "大事", kana: "だいじ", romaji: "daiji", meaning: "penting", examples: [{ jp: "大事な用事があります。", kana: "だいじなようじがあります。", id: "Ada urusan penting." }] },
  { character: "大体", kana: "だいたい", romaji: "daitai", meaning: "sebagian besar / garis besar", examples: [{ jp: "大体わかりました。", kana: "だいたいわかりました。", id: "Saya sudah mengerti secara garis besar." }] },
  { character: "たいてい", kana: "たいてい", romaji: "taitei", meaning: "biasanya", examples: [{ jp: "たいてい家にいます。", kana: "たいていいえにいます。", id: "Biasanya saya ada di rumah." }] },
  { character: "倒れる", kana: "たおれる", romaji: "taoreru", meaning: "jatuh / tumbang", examples: [{ jp: "木が倒れました。", kana: "きがたおれました。", id: "Pohonnya tumbang." }] },
  { character: "だから", kana: "だから", romaji: "dakara", meaning: "oleh karena itu", examples: [{ jp: "だから言ったでしょう。", kana: "だからいったでしょう。", id: "Makanya sudah kubilang kan." }] },
  { character: "確か", kana: "たしか", romaji: "tashika", meaning: "seingat saya", examples: [{ jp: "明日は確か休みです。", kana: "あしたはたしかやすみです。", id: "Besok seingat saya hari libur." }] },
  { character: "足す", kana: "たす", romaji: "tasu", meaning: "menambah / plus", examples: [{ jp: "二に三を足します。", kana: "ににさんをたします。", id: "Dua ditambah tiga." }] },
  { character: "訪ねる", kana: "たずねる", romaji: "tazuneru", meaning: "mengunjungi", examples: [{ jp: "友達を訪ねます。", kana: "ともだちをたずねます。", id: "Mengunjungi teman." }] },
  { character: "尋ねる", kana: "たずねる", romaji: "tazuneru", meaning: "bertanya", examples: [{ jp: "道を尋ねます。", kana: "みちをたずねます。", id: "Menanyakan jalan." }] },
  { character: "正しい", kana: "ただしい", romaji: "tadashii", meaning: "benar", examples: [{ jp: "正しい答えを選んでください。", kana: "ただしいこたえをえらんでください。", id: "Pilih jawaban yang benar." }] },
  { character: "立てる", kana: "たてる", romaji: "tateru", meaning: "mendirikan / membuat", examples: [{ jp: "音を立てないで。", kana: "おとをたてないで。", id: "Jangan membuat suara berisik." }] },
  { character: "例えば", kana: "たとえば", romaji: "tatoeba", meaning: "misalnya", examples: [{ jp: "例えば、犬が好きです。", kana: "たとえば、いぬがすきです。", id: "Misalnya, saya suka anjing." }] },
  { character: "楽しみ", kana: "たのしみ", romaji: "tanoshimi", meaning: "menantikan dengan gembira", examples: [{ jp: "旅行が楽しみです。", kana: "りょこうがたのしみです。", id: "Saya menantikan perjalanan itu." }] },
  { character: "たまに", kana: "たまに", romaji: "tamani", meaning: "kadang-kadang", examples: [{ jp: "たまに映画を見ます。", kana: "たまにえいがをみます。", id: "Kadang-kadang menonton film." }] },
  { character: "為", kana: "ため", romaji: "tame", meaning: "demi / untuk", examples: [{ jp: "健康の為に運動します。", kana: "けんこうのためにうんどうします。", id: "Berolahraga demi kesehatan." }] },
  { character: "だめ", kana: "だめ", romaji: "dame", meaning: "tidak boleh / percuma", examples: [{ jp: "ここではタバコはだめです。", kana: "ここではタバコはだめです。", id: "Dilarang merokok di sini." }] },
  { character: "足りる", kana: "たりる", romaji: "tariru", meaning: "cukup", examples: [{ jp: "時間が足りません。", kana: "じかんがたりません。", id: "Waktunya tidak cukup." }] },
  { character: "男性", kana: "だんせい", romaji: "dansei", meaning: "laki-laki / pria", examples: [{ jp: "あの男性は誰ですか。", kana: "あのだんせいはだれですか。", id: "Pria itu siapa?" }] },
  { character: "血", kana: "ち", romaji: "chi", meaning: "darah", examples: [{ jp: "血が出ました。", kana: "ちがでました。", id: "Keluar darah." }] },
  { character: "力", kana: "ちから", romaji: "chikara", meaning: "kekuatan / tenaga", examples: [{ jp: "力があります。", kana: "ちからがあります。", id: "Memiliki kekuatan." }] },
  { character: "ちっとも", kana: "ちっとも", romaji: "chittomo", meaning: "sama sekali tidak", examples: [{ jp: "ちっとも面白くないです。", kana: "ちっともおもしろくないです。", id: "Sama sekali tidak menarik." }] }
];

console.log("Membaca file characters.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let data = JSON.parse(rawdata);

let injectedCount = 0;

if (data.vocabulary_n4) {
  // Ambil semua kata asli yang sudah ada di database saat ini
  const existingWords = data.vocabulary_n4.map(v => v.character);
  
  // Filter kandidat yang belum ada di database
  const validCandidates = candidateWords.filter(c => !existingWords.includes(c.character));
  
  let candidateIndex = 0;
  
  // Timpa placeholder dengan validCandidates
  for (let i = 0; i < data.vocabulary_n4.length; i++) {
    const vocab = data.vocabulary_n4[i];
    if (vocab.character.startsWith("語彙N4-") && candidateIndex < validCandidates.length) {
      const newWord = validCandidates[candidateIndex];
      
      vocab.character = newWord.character;
      vocab.kana = newWord.kana;
      vocab.romaji = newWord.romaji;
      vocab.meaning = newWord.meaning;
      vocab.examples = newWord.examples;
      
      injectedCount++;
      candidateIndex++;
    }
  }
}

const remainingPlaceholders = data.vocabulary_n4.filter(v => v.character.startsWith("語彙N4-")).length;

console.log(`Berhasil mengganti ${injectedCount} placeholder dengan kosakata N4 asli.`);
console.log(`Sisa placeholder N4: ${remainingPlaceholders}`);

if (injectedCount > 0) {
  console.log("Menyimpan ke file characters.json...");
  fs.writeFileSync(DATA_PATH, JSON.stringify(data, null, 2), 'utf8');
  console.log("✅ Update file sukses!");
} else {
  console.log("⚠️ Tidak ada placeholder yang diganti.");
}
