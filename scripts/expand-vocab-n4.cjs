const fs = require('fs');
const path = require('path');

// Array of N4 words to add
const newVocabList = [
  "愛する/aisuru/mencintai", "挨拶/aisatsu/salam", "間/aida/di antara", "合う/au/cocok", "あかちゃん/akachan/bayi",
  "上る/agaru/naik", "赤ん坊/akanbou/bayi", "空く/aku/kosong", "浅い/asai/dangkal", "味/aji/rasa",
  "明日/asu/besok", "遊び/asobi/bermain", "集める/atsumeru/mengumpulkan", "集まる/atsumaru/berkumpul", "謝る/ayamaru/meminta maaf",
  "安心/anshin/lega", "安全/anzen/aman", "あんな/anna/seperti itu", "以下/ika/di bawah", "以外/igai/selain",
  "医学/igaku/ilmu kedokteran", "生きる/ikiru/hidup", "意見/iken/pendapat", "石/ishi/batu", "いじめる/ijimeru/membully",
  "以上/ijou/di atas", "急ぐ/isogu/bergegas", "致す/itasu/melakukan (merendah)", "一度/ichido/sekali", "一生懸命/isshoukenmei/sekuat tenaga",
  "糸/ito/benang", "以内/inai/di dalam", "田舎/inaka/desa", "祈る/inoru/berdoa", "いらっしゃる/irassharu/datang (hormat)",
  "植える/ueru/menanam", "伺う/ukagau/berkunjung", "受付/uketsuke/resepsionis", "受ける/ukeru/menerima", "動く/ugoku/bergerak",
  "うそ/uso/bohong", "打つ/utsu/memukul", "美しい/utsukushii/indah", "写す/utsusu/menyalin", "移る/utsuru/pindah",
  "腕/ude/lengan", "裏/ura/belakang", "売り場/uriba/tempat penjualan", "運転手/untenshu/sopir", "運動/undou/olahraga",
  "エスカレーター/esukareetaa/eskalator", "枝/eda/cabang", "選ぶ/erabu/memilih", "遠慮/enryo/sungkan", "おいでになる/oide ni naru/datang",
  "お祝い/oiwai/perayaan", "オートバイ/ootobai/motor", "お嬢さん/ojousan/anak perempuan", "お宅/otaku/rumah", "落ちる/ochiru/jatuh",
  "おっしゃる/ossharu/berkata (hormat)", "夫/otto/suami", "落とす/otosu/menjatuhkan", "踊り/odori/tarian", "踊る/odoru/menari",
  "驚く/odoroku/terkejut", "お祭り/omatsuri/festival", "お見舞い/omimai/menjenguk", "お土産/omiyage/oleh-oleh", "思い出す/omoidasu/teringat",
  "思う/omou/berpikir", "おもちゃ/omocha/mainan", "表/omote/permukaan", "親/oya/orang tua", "泳ぎ方/oyogikata/cara berenang",
  "下りる/oriru/turun", "折る/oru/mematahkan", "お礼/orei/terima kasih", "終わる/owaru/selesai", "海岸/kaigan/pantai",
  "会議/kaigi/rapat", "会議室/kaigishitsu/ruang rapat", "会場/kaijou/tempat acara", "会話/kaiwa/percakapan", "帰り/kaeri/kepulangan",
  "変える/kaeru/mengubah", "科学/kagaku/ilmu pengetahuan", "鏡/kagami/cermin", "掛ける/kakeru/menggantung", "飾る/kazaru/menghias",
  "火事/kaji/kebakaran", "ガス/gasu/gas", "硬い/katai/keras", "形/katachi/bentuk", "片付ける/katadzukeru/merapikan",
  "課長/kachou/kepala bagian", "勝つ/katsu/menang", "家内/kanai/istri", "悲しい/kanashii/sedih", "必ず/kanarazu/pasti",
  "お金持ち/okanemochi/orang kaya", "彼女/kanojo/dia (pr)", "壁/kabe/dinding", "髪/kami/rambut", "噛む/kamu/menggigit",
  "通う/kayou/bolak-balik", "ガラス/garasu/kaca", "彼/kare/dia (lk)", "彼ら/karera/mereka", "乾く/kawaku/kering",
  "代わり/kawari/pengganti", "変わる/kawaru/berubah", "考える/kangaeru/berpikir", "関係/kankei/hubungan", "看護婦/kangofu/perawat",
  "簡単/kantan/mudah", "気/ki/perasaan", "機会/kikai/kesempatan", "危険/kiken/bahaya", "聞こえる/kikoeru/terdengar",
  "汽車/kisha/kereta uap", "技術/gijutsu/teknologi", "季節/kisetsu/musim", "規則/kisoku/peraturan", "きっと/kitto/pasti",
  "絹/kinu/sutra", "厳しい/kibishii/tegas", "気分/kibun/perasaan badan", "決まる/kimaru/diputuskan", "君/kimi/kamu",
  "決める/kimeru/memutuskan", "気持ち/kimochi/perasaan", "着物/kimono/pakaian jepang", "客/kyaku/tamu", "急/kyuu/mendesak",
  "急行/kyuukou/kereta ekspres", "教育/kyouiku/pendidikan", "教会/kyoukai/gereja", "競争/kyousou/kompetisi", "興味/kyoumi/minat",
  "近所/kinjo/tetangga", "具合/guai/kondisi", "空気/kuuki/udara", "空港/kuukou/bandara", "草/kusa/rumput",
  "くださる/kudasaru/memberi (hormat)", "首/kubi/leher", "雲/kumo/awan", "比べる/kuraberu/membandingkan", "くれる/kureru/memberi",
  "暮れる/kureru/menjadi gelap", "君/kun/panggilan anak laki", "毛/ke/bulu", "計画/keikaku/rencana", "経験/keiken/pengalaman",
  "経済/keizai/ekonomi", "警察/keisatsu/polisi", "ケーキ/keeki/kue", "けが/kega/luka", "景色/keshiki/pemandangan",
  "消しゴム/keshigomu/penghapus", "下宿/geshuku/indekos", "決して/kesshite/tidak pernah", "けれど/keredo/tetapi", "原因/genin/penyebab",
  "けんか/kenka/bertengkar", "研究/kenkyuu/penelitian", "研究室/kenkyuushitsu/ruang penelitian", "見物/kenbutsu/melihat-lihat", "子/ko/anak",
  "こう/kou/begini", "郊外/kougai/pinggiran kota", "講義/kougi/kuliah", "工業/kougyou/industri", "高校/koukou/SMA",
  "高校生/koukousei/siswa SMA", "工場/koujou/pabrik", "校長/kouchou/kepala sekolah", "交通/koutsuu/lalu lintas", "講堂/koudou/auditorium",
  "高等学校/koutougakkou/SMA", "公務員/koumuin/pegawai negeri", "国際/kokusai/internasional", "心/kokoro/hati", "御主人/goshujin/suami (orang lain)",
  "故障/koshou/rusak", "ご存じ/gozonji/tahu (hormat)", "答/kotae/jawaban", "ごちそう/gochisou/jamuan", "小鳥/kotori/burung kecil",
  "この間/konoaida/baru-baru ini", "この頃/konogoro/akhir-akhir ini", "細かい/komakai/detail", "ごみ/gomi/sampah", "込む/komu/ramai",
  "米/kome/beras", "ごらんになる/goran ni naru/melihat (hormat)", "これから/korekara/mulai sekarang", "怖い/kowai/takut", "壊す/kowasu/merusak",
  "壊れる/kowareru/rusak", "コンサート/konsaato/konser", "今度/kondo/kali ini", "コンピュータ/konpyuuta/komputer", "今夜/konya/malam ini",
  "最近/saikin/akhir-akhir ini", "最後/saigo/terakhir", "最初/saisho/pertama", "坂/saka/tanjakan", "探す/sagasu/mencari",
  "下がる/sagaru/turun", "盛ん/sakan/populer", "下げる/sageru/menurunkan", "差し上げる/sashiageru/memberikan", "さっき/sakki/tadi",
  "寂しい/sabishii/kesepian", "さ来月/saraigetsu/dua bulan lagi", "さ来週/saraishuu/dua minggu lagi", "サラダ/sarada/salada", "騒ぐ/sawagu/ribut",
  "触る/sawaru/menyentuh", "産業/sangyou/industri", "サンダル/sandaru/sandal", "サンドイッチ/sandoitchi/sandwich", "残念/zannen/sayang sekali",
  "市/shi/kota", "字/ji/huruf", "試合/shiai/pertandingan", "仕方/shikata/cara", "しかる/shikaru/memarahi",
  "試験/shiken/ujian", "事故/jiko/kecelakaan", "地震/jishin/gempa bumi", "時代/jidai/zaman", "下着/shitagi/pakaian dalam",
  "支度/shitaku/persiapan", "しっかり/shikkari/dengan teguh", "失敗/shippai/kegagalan", "辞典/jiten/kamus", "品物/shinamono/barang",
  "しばらく/shibaraku/sejenak", "島/shima/pulau", "市民/shimin/warga kota", "事務所/jimusho/kantor", "社会/shakai/masyarakat",
  "社長/shachou/direktur", "邪魔/jama/gangguan", "ジャム/jamu/selai", "自由/jiyuu/bebas", "習慣/shuukan/kebiasaan",
  "住所/juusho/alamat", "柔道/juudou/judo", "十分/juubun/cukup", "趣味/shumi/hobi", "紹介/shoukai/perkenalan",
  "小学校/shougakkou/SD", "小説/shousetsu/novel", "将来/shourai/masa depan", "食料品/shokuryouhin/bahan makanan", "女性/josei/perempuan",
  "知らせる/shiraseru/memberitahu", "調べる/shiraberu/memeriksa", "人口/jinkou/populasi", "神社/jinja/kuil shinto", "親切/shinsetsu/ramah",
  "心配/shinpai/khawatir", "新聞社/shinbunsha/perusahaan koran", "水泳/suiei/renang", "水道/suidou/saluran air", "ずいぶん/zuibun/sangat",
  "数学/suugaku/matematika", "スーツ/suutsu/setelan jas", "スーツケース/suutsukeesu/koper", "過ぎる/sugiru/melewati", "すく/suku/kosong (perut)",
  "スクリーン/sukuriin/layar", "凄い/sugoi/hebat", "進む/susumu/maju", "すっかり/sukkari/sepenuhnya", "すり/suri/pencopet",
  "すると/suruto/lalu", "生活/seikatsu/kehidupan", "生産/seisan/produksi", "政治/seiji/politik", "西洋/seiyou/dunia barat",
  "世界/sekai/dunia", "席/seki/kursi", "説明/setsumei/penjelasan", "背中/senaka/punggung", "ぜひ/zehi/tentu saja",
  "世話/sewa/perawatan", "線/sen/garis", "全然/zenzen/sama sekali tidak", "戦争/sensou/perang", "先輩/senpai/senior",
  "そう/sou/begitu", "相談/soudan/konsultasi", "育てる/sodateru/membesarkan", "卒業/sotsugyou/lulus", "祖父/sofu/kakek (sendiri)",
  "ソフト/sofuto/perangkat lunak", "祖母/sobo/nenek (sendiri)", "それで/sorede/lalu", "それに/soreni/lagipula", "それほど/sorehodo/tidak begitu",
  "そろそろ/sorosoro/sebentar lagi", "そんな/sonna/seperti itu", "そんなに/sonnani/begitu", "退院/taiin/keluar rumah sakit", "大学生/daigakusei/mahasiswa",
  "大事/daiji/penting", "大体/daitai/secara umum", "たいてい/taitei/biasanya", "タイプ/taipu/tipe", "大分/daibu/lumayan",
  "台風/taifuu/topan", "倒れる/taoreru/tumbang", "だから/dakara/karena itu", "確か/tashika/pasti", "足す/tasu/menambah",
  "訪ねる/tazuneru/berkunjung", "尋ねる/tazuneru/bertanya", "正しい/tadashii/benar", "畳/tatami/tikar jepang", "立てる/tateru/mendirikan",
  "建てる/tateru/membangun", "例えば/tatoeba/contohnya", "棚/tana/rak", "楽しみ/tanoshimi/menantikan", "楽しむ/tanoshimu/menikmati",
  "たまに/tamani/sesekali", "為/tame/demi", "だめ/dame/jangan, tidak boleh", "足りる/tariru/cukup", "男性/dansei/laki-laki",
  "暖房/danbou/pemanas ruangan", "血/chi/darah", "チェック/chekku/pemeriksaan", "力/chikara/kekuatan", "ちっとも/chittomo/sama sekali tidak",
  "ちゃん/chan/akhiran nama", "注意/chuui/perhatian", "中学校/chuugakkou/SMP", "注射/chuusha/suntikan", "駐車場/chuushajou/tempat parkir",
  "地理/chiri/geografi", "捕まえる/tsukamaeru/menangkap", "つく/tsuku/tiba", "月/tsuki/bulan", "付く/tsuku/menempel",
  "漬ける/tsukeru/merendam", "都合/tsugou/keadaan", "伝える/tsutaeru/menyampaikan", "続く/tsudzuku/berlanjut", "続ける/tsudzukeru/melanjutkan",
  "包む/tsutsumu/membungkus", "妻/tsuma/istri", "つもり/tsumori/berniat", "釣る/tsuru/memancing", "丁寧/teinei/sopan",
  "テキスト/tekisuto/buku teks", "適当/tekitou/pantas", "できるだけ/dekirudake/sebisa mungkin", "手伝う/tetsudau/membantu", "テニス/tenisu/tenis",
  "手袋/tebukuro/sarung tangan", "寺/tera/kuil", "点/ten/poin", "店員/tenin/pegawai toko", "天気予報/tenkiyohou/prakiraan cuaca",
  "電灯/dentou/lampu listrik", "電報/denpou/telegram", "展覧会/tenrankai/pameran", "都/to/ibu kota", "道具/dougu/alat",
  "とうとう/toutou/akhirnya", "動物園/doubutsuen/kebun binatang", "遠く/tooku/jauh", "通る/tooru/melewati", "特に/tokuni/khususnya",
  "特別/tokubetsu/spesial", "床屋/tokoya/tukang cukur", "途中/tochuu/di tengah jalan", "特急/tokkyuu/kereta super cepat", "届ける/todokeru/mengantar",
  "泊まる/tomaru/menginap", "止める/tomeru/menghentikan", "取り替える/torikaeru/menukar", "泥棒/dorobou/pencuri", "どんどん/dondon/terus menerus",
  "直す/naosu/memperbaiki", "直る/naoru/sembuh, benar", "治る/naoru/sembuh (penyakit)", "泣く/naku/menangis", "なくなる/nakunaru/hilang",
  "亡くなる/nakunaru/meninggal", "投げる/nageru/melempar", "なさる/nasaru/melakukan (hormat)", "鳴る/naru/berbunyi", "なるべく/narubeku/sebisa mungkin",
  "なるほど/naruhodo/oh begitu", "慣れる/nareru/terbiasa", "におい/nioi/bau", "苦い/nigai/pahit", "二階建て/nikaidate/berlantai dua",
  "逃げる/nigeru/lari", "日記/nikki/buku harian", "入院/nyuuin/masuk rumah sakit", "入学/nyuugaku/masuk sekolah", "似る/niru/mirip",
  "人形/ningyou/boneka", "盗む/nusumu/mencuri", "塗る/nuru/mengoles", "ぬれる/nureru/basah", "ねだん/nedan/harga",
  "熱/netsu/demam", "熱心/nesshin/antusias", "寝坊/nebou/bangun kesiangan", "眠い/nemui/mengantuk", "眠る/nemuru/tidur",
  "残る/nokoru/tersisa", "乗り換える/norikaeru/pindah kereta", "乗り物/norimono/kendaraan", "葉/ha/daun", "場合/baai/kasus",
  "パート/paato/pekerjaan paruh waktu", "倍/bai/kali lipat", "拝見/haiken/melihat (merendah)", "歯医者/haisha/dokter gigi", "運ぶ/hakobu/mengangkut",
  "始める/hajimeru/memulai", "場所/basho/tempat", "はず/hazu/seharusnya", "恥ずかしい/hazukashii/malu", "パソコン/pasokon/PC",
  "発音/hatsuon/pelafalan", "はっきり/hakkiri/dengan jelas", "花見/hanami/melihat bunga", "林/hayashi/hutan kecil", "払う/harau/membayar",
  "番組/bangumi/acara tv", "反対/hantai/berlawanan", "ハンドバッグ/handobaggu/tas tangan", "日/hi/hari", "火/hi/api",
  "ピアノ/piano/piano", "冷える/hieru/menjadi dingin", "光/hikari/cahaya", "光る/hikaru/bersinar", "引き出し/hikidashi/laci",
  "引き出す/hikidasu/menarik keluar", "ひげ/hige/janggut", "飛行場/hikoujou/bandara", "久しぶり/hisashiburi/sudah lama tidak", "美術館/bijutsukan/museum seni",
  "非常に/hijouni/sangat", "びっくりする/bikkurisuru/terkejut", "引っ越す/hikkosu/pindah rumah", "必要/hitsuyou/perlu", "ひどい/hidoi/parah",
  "開く/hiraku/membuka", "ビル/biru/gedung", "昼休み/hiruyasumi/istirahat siang", "拾う/hirou/memungut", "増える/fueru/bertambah",
  "深い/fukai/dalam", "複雑/fukuzatsu/rumit", "復習/fukushuu/mengulang pelajaran", "部長/buchou/kepala bagian", "普通/futsuu/biasa",
  "ぶどう/budou/anggur", "太る/futoru/gemuk", "布団/futon/kasur jepang", "舟/fune/perahu", "不便/fuben/tidak praktis",
  "踏む/fumu/menginjak", "降り出す/furidasu/mulai turun", "プレゼント/purezento/hadiah", "文化/bunka/budaya", "文学/bungaku/sastra",
  "文法/bunpou/tata bahasa", "別/betsu/berbeda", "ベル/beru/bel", "変/hen/aneh", "返事/henji/balasan",
  "貿易/boueki/perdagangan", "放送/housou/penyiaran", "法律/houritsu/hukum", "僕/boku/aku (lk)", "星/hoshi/bintang",
  "ほど/hodo/sekitar", "歩道/hodou/trotoar", "褒める/homeru/memuji", "翻訳/honyaku/terjemahan", "参る/mairu/pergi (merendah)",
  "負ける/makeru/kalah", "まじめ/majime/serius", "まず/mazu/pertama-tama", "または/mataha/atau", "間違える/machigaeru/melakukan kesalahan",
  "間に合う/maniau/tepat waktu", "周り/mawari/sekitar", "回る/mawaru/berputar", "漫画/manga/komik", "真ん中/mannaka/tengah",
  "見える/mieru/terlihat", "湖/mizuumi/danau", "味噌/miso/pasta kedelai", "見つかる/mitsukaru/ditemukan", "見つける/mitsukeru/menemukan",
  "皆/mina/semua", "港/minato/pelabuhan", "向かう/mukau/menuju", "迎える/mukaeru/menyambut", "昔/mukashi/zaman dahulu",
  "虫/mushi/serangga", "息子/musuko/putra", "娘/musume/putri", "無理/muri/mustahil", "召し上がる/meshiagaru/makan (hormat)",
  "珍しい/mezurashii/langka", "申し上げる/moushiageru/berkata (merendah)", "申す/mousu/bernama (merendah)", "もうすぐ/mousugu/sebentar lagi", "もし/moshi/jika",
  "もちろん/mochiron/tentu saja", "もっとも/mottomo/paling", "戻る/modoru/kembali", "木綿/momen/kapas", "もらう/morau/menerima",
  "森/mori/hutan", "焼く/yaku/memanggang", "約束/yakusoku/janji", "役に立つ/yakunitatsu/berguna", "焼ける/yakeru/terbakar",
  "優しい/yasashii/baik hati", "やせる/yaseru/kurus", "やっと/yatto/akhirnya", "止む/yamu/berhenti (hujan)", "止める/yameru/berhenti",
  "柔らかい/yawarakai/lembut", "湯/yu/air panas", "輸出/yushutsu/ekspor", "輸入/yunyuu/impor", "指/yubi/jari",
  "指輪/yubiwa/cincin", "夢/yume/mimpi", "揺れる/yureru/bergoyang", "用/you/urusan", "用意/youi/persiapan",
  "用事/youji/keperluan", "汚れる/yogoreru/menjadi kotor", "予習/yoshuu/persiapan belajar", "予定/yotei/jadwal", "予約/yoyaku/reservasi",
  "寄る/yoru/mampir", "喜ぶ/yorokobu/bergembira", "よろしい/yoroshii/baik (hormat)", "理由/riyuu/alasan", "利用/riyou/penggunaan",
  "両方/ryouhou/keduanya", "旅館/ryokan/penginapan gaya jepang", "留守/rusu/tidak ada di rumah", "冷房/reibou/pendingin ruangan", "歴史/rekishi/sejarah",
  "レジ/reji/kasir", "レポート/repooto/laporan", "連絡/renraku/menghubungi", "沸かす/wakasu/mendidihkan", "別れる/wakareru/berpisah",
  "沸く/waku/mendidih", "訳/yaku/alasan", "忘れ物/wasuremono/barang tertinggal", "笑う/warau/tertawa", "割合/wariai/persentase",
  "割れる/wareru/pecah", "ワープロ/waapuro/pengolah kata", "安全/anzen/keamanan", "案内/annai/panduan", "以下/ika/di bawah",
  "急ぎ/isogi/buru-buru", "一生懸命/isshoukenmei/dengan sungguh-sungguh", "田舎/inaka/kampung halaman", "受付/uketsuke/penerima tamu", "嘘/uso/kebohongan",
  "運転/unten/mengemudi", "運動/undou/latihan fisik", "遠慮/enryo/menahan diri", "お祝い/oiwai/hadiah perayaan", "思い/omoi/pikiran",
  "思い出/omoide/kenangan", "お見舞い/omimai/kunjungan sakit", "お土産/omiyage/cindera mata", "海岸/kaigan/tepi laut", "会議/kaigi/pertemuan",
  "会場/kaijou/lokasi acara", "帰り/kaeri/pulang", "科学/kagaku/ilmu", "鏡/kagami/kaca", "火事/kaji/api",
  "形/katachi/rupa", "課長/kachou/manajer", "家内/kanai/istri (sendiri)", "必ず/kanarazu/selalu", "金持ち/kanemochi/orang berada",
  "彼女/kanojo/pacar perempuan", "壁/kabe/tembok", "髪/kami/rambut kepala", "彼/kare/pacar laki-laki", "彼ら/karera/mereka semua",
  "代わり/kawari/sebagai ganti", "関係/kankei/kaitan", "看護婦/kangofu/suster", "気/ki/spirit", "機会/kikai/peluang",
  "危険/kiken/risiko", "汽車/kisha/kereta api", "技術/gijutsu/skill", "季節/kisetsu/pergantian musim", "規則/kisoku/aturan",
  "絹/kinu/kain sutra", "気分/kibun/mood", "君/kimi/engkau", "気持ち/kimochi/rasa", "着物/kimono/baju tradisional",
  "客/kyaku/pengunjung", "急/kyuu/darurat", "急行/kyuukou/kereta cepat", "教育/kyouiku/pengajaran", "教会/kyoukai/tempat ibadah",
  "競争/kyousou/persaingan", "興味/kyoumi/ketertarikan", "近所/kinjo/lingkungan", "具合/guai/keadaan", "空気/kuuki/atmosfer",
  "空港/kuukou/pelabuhan udara", "草/kusa/ilalang", "首/kubi/bagian leher", "雲/kumo/mendung", "計画/keikaku/projek",
  "経験/keiken/latihan", "経済/keizai/keuangan", "警察/keisatsu/kepolisian", "けが/kega/cedera", "景色/keshiki/panorama",
  "消しゴム/keshigomu/penghapus karet", "下宿/geshuku/kos-kosan", "原因/genin/akar masalah", "けんか/kenka/perselisihan", "研究/kenkyuu/riset",
  "研究室/kenkyuushitsu/lab", "見物/kenbutsu/wisata", "子/ko/anak-anak", "郊外/kougai/luar kota", "講義/kougi/pembelajaran",
  "工業/kougyou/manufaktur", "高校/koukou/sekolah menengah atas", "高校生/koukousei/murid SMA", "工場/koujou/pabrik industri", "校長/kouchou/kepala sekolah (kepsek)",
  "交通/koutsuu/transportasi", "講堂/koudou/aula", "高等学校/koutougakkou/sma (resmi)", "公務員/koumuin/ASN", "国際/kokusai/mancanegara",
  "心/kokoro/perasaan", "御主人/goshujin/suami", "故障/koshou/kerusakan", "答/kotae/jawaban benar", "ごちそう/gochisou/makanan mewah",
  "小鳥/kotori/burung", "ごみ/gomi/kotoran", "米/kome/nasi", "今度/kondo/waktu berikutnya", "今夜/konya/nanti malam",
  "最近/saikin/akhir akhir ini", "最後/saigo/akhir", "最初/saisho/mula-mula", "坂/saka/jalan menurun", "産業/sangyou/sektor industri",
  "残念/zannen/kekecewaan", "市/shi/pemerintah kota", "字/ji/karakter", "試合/shiai/laga", "仕方/shikata/metode",
  "試験/shiken/tes", "事故/jiko/insiden", "地震/jishin/gempa", "時代/jidai/era", "下着/shitagi/daleman",
  "支度/shitaku/berkemas", "失敗/shippai/kesalahan", "辞典/jiten/buku kamus", "品物/shinamono/produk", "島/shima/kepulauan",
  "市民/shimin/penduduk kota", "事務所/jimusho/tempat kerja", "社会/shakai/komunitas", "社長/shachou/pimpinan", "邪魔/jama/rintangan",
  "自由/jiyuu/kemerdekaan", "習慣/shuukan/rutinitas", "住所/juusho/tempat tinggal", "柔道/juudou/olahraga judo", "十分/juubun/memadai",
  "趣味/shumi/kesenangan", "紹介/shoukai/presentasi diri", "小学校/shougakkou/sekolah dasar", "小説/shousetsu/buku cerita", "将来/shourai/masa depan kelak",
  "食料品/shokuryouhin/bahan baku makanan", "女性/josei/wanita", "人口/jinkou/jumlah penduduk", "神社/jinja/kuil", "親切/shinsetsu/kebaikan",
  "心配/shinpai/rasa was-was", "新聞社/shinbunsha/kantor berita", "水泳/suiei/berenang", "水道/suidou/air ledeng", "数学/suugaku/ilmu hitung",
  "生活/seikatsu/hidup", "生産/seisan/pembuatan", "政治/seiji/pemerintahan", "西洋/seiyou/barat", "世界/sekai/global",
  "席/seki/tempat duduk", "説明/setsumei/uraian", "背中/senaka/punggung badan", "世話/sewa/bantuan", "線/sen/jalur",
  "戦争/sensou/konflik", "先輩/senpai/kakak kelas", "相談/soudan/diskusi", "卒業/sotsugyou/kelulusan", "祖父/sofu/kakek",
  "祖母/sobo/nenek", "退院/taiin/pulang dari RS", "大学生/daigakusei/mahasiswa kampus", "大事/daiji/hal penting", "大体/daitai/garis besar",
  "台風/taifuu/badai", "畳/tatami/tikar", "棚/tana/lemari rak", "楽しみ/tanoshimi/kegembiraan", "男性/dansei/pria",
  "暖房/danbou/penghangat", "血/chi/darah merah", "力/chikara/tenaga", "注意/chuui/peringatan", "中学校/chuugakkou/sekolah menengah pertama",
  "注射/chuusha/injeksi", "駐車場/chuushajou/parkiran", "地理/chiri/geografi dunia", "月/tsuki/rembulan", "都合/tsugou/situasi",
  "妻/tsuma/istriku", "つもり/tsumori/rencana", "丁寧/teinei/kesopanan", "適当/tekitou/asal-asalan", "手袋/tebukuro/sarung tangan musim dingin",
  "寺/tera/kuil buddha", "点/ten/skor", "店員/tenin/staf toko", "天気予報/tenkiyohou/ramalan cuaca", "電灯/dentou/penerangan",
  "電報/denpou/pesan kawat", "展覧会/tenrankai/eksibisi", "都/to/metropolitan", "道具/dougu/perkakas", "動物園/doubutsuen/taman satwa",
  "床屋/tokoya/pangkas rambut", "途中/tochuu/perjalanan", "特急/tokkyuu/kereta kilat", "泥棒/dorobou/maling", "日記/nikki/catatan harian",
  "入院/nyuuin/perawatan RS", "入学/nyuugaku/pendaftaran sekolah", "人形/ningyou/mainan boneka", "ねだん/nedan/biaya", "熱/netsu/suhu tubuh",
  "熱心/nesshin/semangat", "寝坊/nebou/terlambat bangun", "乗り物/norimono/alat transportasi", "葉/ha/dedaunan", "場合/baai/kondisi tertentu",
  "倍/bai/ganda", "歯医者/haisha/dokter gigi spesialis", "場所/basho/lokasi", "はず/hazu/ekspektasi", "発音/hatsuon/artikulasi",
  "花見/hanami/festival bunga", "林/hayashi/hutan pepohonan", "番組/bangumi/siaran", "反対/hantai/oposan", "日/hi/matahari",
  "火/hi/nyala api", "光/hikari/sinar", "引き出し/hikidashi/laci meja", "ひげ/hige/kumis", "飛行場/hikoujou/lapangan terbang",
  "久しぶり/hisashiburi/reuni", "美術館/bijutsukan/galeri", "必要/hitsuyou/kebutuhan", "昼休み/hiruyasumi/jam istirahat", "複雑/fukuzatsu/kompleksitas",
  "復習/fukushuu/review", "部長/buchou/manajer departemen", "普通/futsuu/normal", "文化/bunka/kultur", "文学/bungaku/literatur",
  "文法/bunpou/grammar", "別/betsu/lain", "変/hen/keanehan", "返事/henji/jawaban tertulis", "貿易/boueki/bisnis internasional",
  "放送/housou/siaran tv", "法律/houritsu/aturan hukum", "僕/boku/saya (laki-laki)", "星/hoshi/benda langit", "歩道/hodou/jalur pejalan kaki",
  "翻訳/honyaku/translasi", "周り/mawari/sekeliling", "漫画/manga/komik jepang", "真ん中/mannaka/pusat", "湖/mizuumi/telaga",
  "味噌/miso/bumbu kedelai", "皆/mina/semuanya", "港/minato/dermaga", "昔/mukashi/masa lalu", "虫/mushi/binatang kecil",
  "息子/musuko/anak laki-laki", "娘/musume/anak perempuan", "無理/muri/ketidakmungkinan", "約束/yakusoku/kesepakatan", "夢/yume/harapan",
  "用/you/kegunaan", "用意/youi/bekal", "用事/youji/tugas", "予習/yoshuu/belajar di awal", "予定/yotei/agenda",
  "予約/yoyaku/booking", "理由/riyuu/latar belakang", "利用/riyou/pemanfaatan", "両方/ryouhou/dua-duanya", "旅館/ryokan/hotel tradisional",
  "留守/rusu/kosong", "冷房/reibou/AC", "歴史/rekishi/histori", "連絡/renraku/komunikasi", "訳/yaku/makna",
  "忘れ物/wasuremono/barang hilang", "割合/wariai/rasio"
];

const charactersPath = path.join(__dirname, '../src/data/characters.json');
const characters = JSON.parse(fs.readFileSync(charactersPath, 'utf8'));

// Kita gunakan Array untuk ekspansi
if (!characters.vocabulary_n4) {
  characters.vocabulary_n4 = [];
}

const existingVocab = new Set();
// Kumpulkan semua kata yang sudah ada di N4
characters.vocabulary_n4.forEach(v => {
  existingVocab.add(v.character);
});
characters.vocabulary_n5.forEach(v => {
  existingVocab.add(v.character);
});

let addedCount = 0;
for (const entry of newVocabList) {
  const parts = entry.split('/');
  if (parts.length === 3) {
    const character = parts[0];
    const romaji = parts[1];
    const meaning = parts[2];
    
    if (!existingVocab.has(character)) {
      characters.vocabulary_n4.push({
        character: character,
        romaji: romaji,
        meaning: meaning,
        kana: "", 
        level: "N4"
      });
      existingVocab.add(character);
      addedCount++;
    }
  }
}

fs.writeFileSync(charactersPath, JSON.stringify(characters, null, 2));

console.log(`Berhasil menambahkan ${addedCount} kosakata N4 baru.`);
console.log(`Total vocabulary N4 di characters.json sekarang: ${characters.vocabulary_n4.length}`);
