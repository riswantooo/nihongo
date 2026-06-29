// populateExtraGrammar.cjs
// Add ~80 additional grammar patterns to fill JLPT N5+N4 coverage gap
// Pattern schema: id, level, chapter, pattern, title_id, formation, examples

const fs = require('fs');
const path = require('path');

const grammarFile = path.join(__dirname, '../src', 'data', 'grammar-points.json');
const data = JSON.parse(fs.readFileSync(grammarFile, 'utf8'));

const existingIds = new Set(data.map(g => g.id));
const existingPatterns = new Set(data.map(g => g.pattern));

function grammarPoint(id, level, chapter, pattern, title_id, formation, examples) {
  return { id, level, chapter, pattern, title_id, formation, examples };
}

// ============================================================
// N5 EXTRAS — sub-patterns & variations
// ============================================================
const n5Extras = [
  // Question words
  grammarPoint('n5-grammar-q-1','N5', 3, 'どれ / どの / 誰', 'Kata Tanya Detail',
    [
      { type: 'Demonstratif', rule: 'どれ + 名詞 (pilihan dari 3+ opsi)', example: 'どれ が いい です か' },
      { type: 'Demonstratif', rule: 'どの + 名詞 (memilih dari kelompok)', example: 'どの ほん が いい です か' },
      { type: 'Subjek', rule: '誰 が + Verb (siapa yang...)', example: '誰 が きました か' },
    ],
    [
      { japanese: 'どれが一番安いですか。', romaji: 'Dore ga ichiban yasui desu ka.', meaning: 'Mana yang paling murah?' },
      { japanese: 'どのお店がいいですか。', romaji: 'Dono omise ga ii desu ka.', meaning: 'Toko mana yang bagus?' },
      { japanese: '誰が来ましたか。', romaji: 'Dare ga kimashita ka.', meaning: 'Siapa yang datang?' },
    ]
  ),
  // ので (formal karena)
  grammarPoint('n5-grammar-3','N5', 17, 'V / Adj + ので', '~ので (Karena - Formal)',
    [
      { type: 'Verb', rule: 'V-polos + ので', example: '雨 が ふる ので' },
      { type: 'Adj-i', rule: 'Adj-i (stem) + ので', example: '高い ので' },
      { type: 'Adj-na', rule: 'Adj-na + な + ので', example: 'ひま な ので' },
    ],
    [
      { japanese: '雨が降ったので、出かけませんでした。', romaji: 'Ame ga futta node, dekakemasen deshita.', meaning: 'Karena hujan, saya tidak keluar.' },
      { japanese: '高いので、買いませんでした。', romaji: 'Takai node, kaimasen deshita.', meaning: 'Karena mahal, saya tidak beli.' },
    ]
  ),
  // Sentence-end particles (penutup)
  grammarPoint('n5-grammar-4','N5', 21, 'Kalimat + ね / よ / な', 'Partikel Akhir Kalimat',
    [
      { type: 'ね', rule: 'ね = minta persetujuan (kan? ya?)', example: 'きれい ですね' },
      { type: 'よ', rule: 'よ = informasi baru (lo tau gak!)', example: 'これ は ほん ですよ' },
      { type: 'な', rule: 'な = emosi/laki (casual, maskulin)', example: 'すごい な' },
    ],
    [
      { japanese: '今日は暑いですね。', romaji: 'Kyou wa atsui desu ne.', meaning: 'Hari ini panas ya.' },
      { japanese: '私も行きますよ。', romaji: 'Watashi mo ikimasu yo.', meaning: 'Saya juga pergi tau!' },
      { japanese: 'すごいな。', romaji: 'Sugoi na.', meaning: 'Keren banget (emotional).' },
    ]
  ),
  // Quantity expressions
  grammarPoint('n5-grammar-5','N5', 11, 'N + だけ / N + しか + Negasi', 'Hanya / Cuma',
    [
      { type: 'だけ', rule: 'N + だけ = hanya (positif)', example: 'ひとつ だけ' },
      { type: 'しか', rule: 'N + しか + Verb-negatif = hanya...tidak ada lain', example: 'ひとつ しか ない' },
    ],
    [
      { japanese: 'りんごを一つだけ食べました。', romaji: 'Ringo o hitotsu dake tabemashita.', meaning: 'Saya cuma makan satu apel.' },
      { japanese: '千円しかありません。', romaji: 'Sen en shika arimasen.', meaning: 'Saya cuma punya 1000 yen.' },
    ]
  ),
  // More te-form uses
  grammarPoint('n5-grammar-6','N5', 14, 'V-te + います (Keadaan)', '~ています - Hasil/Keadaan',
    [
      { type: 'Hasil', rule: 'V-te + います = keadaan hasil dari aksi', example: 'まど が あいて います (jendela terbuka)' },
    ],
    [
      { japanese: '結婚しています。', romaji: 'Kekkon shite imasu.', meaning: 'Saya sudah menikah (status).' },
      { japanese: '窓が開いています。', romaji: 'Mado ga aite imasu.', meaning: 'Jendelanya terbuka.' },
    ]
  ),
  // Adjective stem + auxiliary
  grammarPoint('n5-grammar-7','N5', 8, 'Adj-i (stem) + すぎる / Adj-i + たい', 'Adj-i Auxiliary',
    [
      { type: '~すぎる', rule: 'Adj-i stem + すぎる = terlalu', example: 'たか + すぎる (terlalu mahal)' },
      { type: '~たい', rule: 'V-masu stem + たい = ingin', example: 'たべ + たい' },
    ],
    [
      { japanese: 'この料理は辛すぎます。', romaji: 'Kono ryouri wa karasugimasu.', meaning: 'Makanan ini terlalu pedas.' },
      { japanese: '日本語を勉強したいです。', romaji: 'Nihongo o benkyou shitai desu.', meaning: 'Saya ingin belajar bahasa Jepang.' },
    ]
  ),
  // Counters - more variations
  grammarPoint('n5-grammar-8','N5', 11, 'N + Counter + も', 'Counter + も (Sekian Banyaknya)',
    [
      { type: 'Penekanan', rule: 'Counter + も = penekanan jumlah (banyak!)', example: 'さんにん も' },
    ],
    [
      { japanese: '五時間も勉強しました。', romaji: 'Go jikan mo benkyou shimashita.', meaning: 'Saya belajar sampai 5 jam lho.' },
      { japanese: '三千円も使いました。', romaji: 'San zen en mo tsukaimashita.', meaning: 'Saya menghabiskan 3000 yen lho.' },
    ]
  ),
  // Question form: の
  grammarPoint('n5-grammar-9','N5', 21, '〜のです / 〜んですか', '~んです (Penjelasan - Intro)',
    [
      { type: 'Penjelasan', rule: 'V-polos + のです = saya jelaskan...', example: 'いく のです' },
      { type: 'Tanya', rule: 'V-polos + のですか = kenapa?', example: 'いく のですか' },
    ],
    [
      { japanese: '今日、休みなんです。', romaji: 'Kyou, yasumi nan desu.', meaning: 'Hari ini saya libur (tau ya).' },
      { japanese: 'どうしたんですか。', romaji: 'Doushita n desu ka.', meaning: 'Kenapa? (ada apa?)' },
    ]
  ),
  // Time expressions
  grammarPoint('n5-grammar-10','N5', 4, 'N + 前に / N + 後で', 'Sebelum / Sesudah',
    [
      { type: '前に', rule: 'V-polos + 前に = sebelum', example: 'たべる まえ に' },
      { type: '後で', rule: 'V-te + 後で = sesudah', example: 'たべて あと で' },
    ],
    [
      { japanese: '食べる前に手を洗います。', romaji: 'Taberu mae ni te o araimasu.', meaning: 'Saya cuci tangan sebelum makan.' },
      { japanese: '仕事が終わった後で、飲みに行きましょう。', romaji: 'Shigoto ga owatta ato de, nomi ni ikimashou.', meaning: 'Setelah kerja selesai, ayo minum.' },
    ]
  ),
  // Offering/Request variations
  grammarPoint('n5-grammar-11','N5', 6, 'V-masu (stem) + に行く / 来る', 'Pergi/Kemari untuk...',
    [
      { type: '目的', rule: 'V-masu stem + に + 行きます / 来ます', example: 'たべ に いく' },
    ],
    [
      { japanese: '昼ごはんを食べに行きます。', romaji: 'Hirugohan o tabe ni ikimasu.', meaning: 'Saya pergi makan siang.' },
      { japanese: '友達が遊びに来ました。', romaji: 'Tomodachi ga asobi ni kimashita.', meaning: 'Teman datang main.' },
    ]
  ),
  // More adjective forms
  grammarPoint('n5-grammar-12','N5', 8, 'Adj-na + にする / Adj-na + になる', 'Menjadi / Mengubah',
    [
      { type: 'にする', rule: 'Adj-na + にする = mengubah menjadi', example: 'きれい に する' },
      { type: 'になる', rule: 'Adj-na + になる = menjadi', example: 'きれい に なる' },
    ],
    [
      { japanese: '部屋をきれいにしてください。', romaji: 'Heya o kirei ni shite kudasai.', meaning: 'Tolong bersihkan kamar.' },
      { japanese: '部屋がきれいになりました。', romaji: 'Heya ga kirei ni narimashita.', meaning: 'Kamarnya jadi bersih.' },
    ]
  ),
  // もう / まだ variations
  grammarPoint('n5-grammar-13','N5', 7, 'もう / まだ + V / Negasi', 'Sudah / Belum',
    [
      { type: 'もう + Aff', rule: 'もう + V-positif = sudah', example: 'もう たべました' },
      { type: 'まだ + Neg', rule: 'まだ + V-negatif = belum', example: 'まだ たべていません' },
    ],
    [
      { japanese: 'もう昼ごはんを食べましたか。', romaji: 'Mou hirugohan o tabemashita ka.', meaning: 'Sudah makan siang?' },
      { japanese: 'いいえ、まだです。', romaji: 'Iie, mada desu.', meaning: 'Belum.' },
    ]
  ),
  // Verb groups
  grammarPoint('n5-grammar-14','N5', 4, 'Golongan Kata Kerja (1, 2, 3)', '3 Golongan Verb',
    [
      { type: 'Gol I', rule: 'Godan: berakhir -u (akhir ≠ -eru/-iru)', example: 'かく、たべる(→II)' },
      { type: 'Gol II', rule: 'Ichidan: berakhir -eru / -iru (selalu -ru)', example: 'たべる、みる' },
      { type: 'Gol III', rule: 'Tidak beraturan: する, くる', example: 'べんきょうする、くる' },
    ],
    [
      { japanese: '書く (Gol I) - 書きます。', romaji: 'Kaku (I) - kakimasu.', meaning: 'Tulis.' },
      { japanese: '食べる (Gol II) - 食べます。', romaji: 'Taberu (II) - tabemasu.', meaning: 'Makan.' },
      { japanese: '勉強する (Gol III) - 勉強します。', romaji: 'Benkyou suru (III) - benkyou shimasu.', meaning: 'Belajar.' },
    ]
  ),
  // Frequency adverbs
  grammarPoint('n5-grammar-15','N5', 15, 'Freq: いつも / よく / 時々 / あまり / 全然', 'Adverb Frekuensi',
    [
      { type: 'Selalu', rule: 'いつも + Aff', example: 'いつも' },
      { type: 'Sering', rule: 'よく + Aff', example: 'よく' },
      { type: 'Kadang', rule: '時々 + Aff', example: 'ときどき' },
      { type: 'Tidak terlalu', rule: 'あまり + Negasi', example: 'あまり ～ません' },
      { type: 'Sama sekali', rule: '全然 + Negasi', example: 'ぜんぜん ～ません' },
    ],
    [
      { japanese: '私はいつも朝六時に起きます。', romaji: 'Watashi wa itsumo asa rokuji ni okimasu.', meaning: 'Saya selalu bangun jam 6 pagi.' },
      { japanese: '全然分かりません。', romaji: 'Zenzen wakarimasen.', meaning: 'Saya sama sekali tidak mengerti.' },
    ]
  ),
  // Verb + ながら
  grammarPoint('n5-grammar-16','N5', 16, 'V1 (stem) + ながら + V2', 'Sambil / Sekaligus',
    [
      { type: 'Simultan', rule: 'V1-masu stem + ながら + V2 = V1 sambil V2', example: 'たべ + ながら' },
    ],
    [
      { japanese: '音楽を聴きながら勉強します。', romaji: 'Ongaku o kiki nagara benkyou shimasu.', meaning: 'Belajar sambil dengarkan musik.' },
      { japanese: 'テレビを見ながら食べます。', romaji: 'Terebi o minagara tabemasu.', meaning: 'Makan sambil nonton TV.' },
    ]
  ),
  // Giving - more variations
  grammarPoint('n5-grammar-17','N5', 7, '授受表現 (Sono 2: やる/くれる/もらう)', 'Memberi / Menerima',
    [
      { type: 'やる', rule: 'Saya memberi ke bawahan/hewan', example: '犬 に えさを やる' },
      { type: 'くれる', rule: 'Orang lain memberi ke saya/keluarga', example: '田中さん が くれた' },
      { type: 'もらう', rule: 'Saya menerima dari orang lain', example: '友達 に もらった' },
    ],
    [
      { japanese: '友達に花をあげました。', romaji: 'Tomodachi ni hana o agemashita.', meaning: 'Saya beri bunga ke teman.' },
      { japanese: '母が誕生日に指輪をくれました。', romaji: 'Haha ga tanjoubi ni yubiwa o kuremashita.', meaning: 'Ibu beri saya cincin di hari ulang tahun.' },
      { japanese: '先生から本をいただきました。', romaji: 'Sensei kara hon o itadakimashita.', meaning: 'Saya terima buku dari guru.' },
    ]
  ),
  // Want expression: ほしい
  grammarPoint('n5-grammar-18','N5', 13, 'N + が + ほしいです', 'Saya mau (Benda)',
    [
      { type: 'ほしい', rule: 'N + が + ほしいです = saya mau N', example: 'くるま が ほしい' },
    ],
    [
      { japanese: '新しいパソコンがほしいです。', romaji: 'Atarashii pasokon ga hoshii desu.', meaning: 'Saya mau laptop baru.' },
      { japanese: '冷たい水がほしいです。', romaji: 'Tsumetai mizu ga hoshii desu.', meaning: 'Saya mau air dingin.' },
    ]
  ),
  // Suggestion/Ajakan
  grammarPoint('n5-grammar-19','N5', 13, 'V-masu (stem) + ませんか / V + ましょう', 'Ajakan',
    [
      { type: 'Ajakan', rule: 'V-masu stem + ませんか = mau tidak?', example: 'たべ ませんか' },
      { type: 'Ajak bersama', rule: 'V-polos + ましょう = ayo (kita)', example: 'たべ ましょう' },
    ],
    [
      { japanese: '一緒にコーヒーを飲みませんか。', romaji: 'Issho ni koohii o nomimasen ka.', meaning: 'Mau minum kopi bersama?' },
      { japanese: 'さあ、始めましょう。', romaji: 'Saa, hajimemashou.', meaning: 'Ayo mulai.' },
    ]
  ),
  // Adverb + adjective
  grammarPoint('n5-grammar-20','N5', 8, 'とても / とても + Adj', 'Sangat',
    [
      { type: 'とても', rule: 'とても + Adj = sangat', example: 'とても おおきい' },
      { type: 'ちょっと', rule: 'ちょっと + Adj = sedikit', example: 'ちょっと たかい' },
    ],
    [
      { japanese: 'とても寒いですね。', romaji: 'Totemo samui desu ne.', meaning: 'Sangat dingin ya.' },
      { japanese: 'ちょっと高いですね。', romaji: 'Chotto takai desu ne.', meaning: 'Agak mahal ya.' },
    ]
  ),
];

// ============================================================
// N4 EXTRAS — more sub-patterns & advanced
// ============================================================
const n4Extras = [
  // Conditional variants lebih detail
  grammarPoint('n4-grammar-e1','N4', 35, 'V / Adj + ば (Generalisasi)', '~ば untuk Generalisasi',
    [
      { type: 'General', rule: 'V-eba = kalau (umum, asumsi)', example: 'やすく あれば' },
    ],
    [
      { japanese: '安ければ買います。', romaji: 'Yasukereba kaimasu.', meaning: 'Kalau murah, saya beli.' },
      { japanese: '時間があれば、旅行したいです。', romaji: 'Jikan ga areba, ryokou shitai desu.', meaning: 'Kalau ada waktu, saya mau traveling.' },
    ]
  ),
  // Passive lebih detail
  grammarPoint('n4-grammar-e2','N4', 37, 'Bentuk Pasif (Langsung)', 'Pasif - Subjek menerima aksi',
    [
      { type: 'Pasif langsung', rule: 'Pelaku (に) + Target (は) + V-pasif', example: '私 は 先生 に しかられた' },
    ],
    [
      { japanese: '私は母に褒められました。', romaji: 'Watashi wa haha ni homeraremashita.', meaning: 'Saya dipuji ibu.' },
      { japanese: '泥棒に財布を盗まれました。', romaji: 'Dorobou ni saifu o nusumaremashita.', meaning: 'Dompet saya dicuri pencuri.' },
    ]
  ),
  // Causative lebih detail
  grammarPoint('n4-grammar-e3','N4', 48, 'Bentuk Kausatif (Wajib/Allow)', 'Kausatif - Menyuruh',
    [
      { type: 'Memaksa', rule: '私は + Orang (を/に) + V-kausatif', example: '子供 に 野菜 を たべさせる' },
    ],
    [
      { japanese: '母は私に野菜を食べさせました。', romaji: 'Haha wa watashi ni yasai o tabesasemashita.', meaning: 'Ibu menyuruh saya makan sayur.' },
      { japanese: '先生は学生に宿題をさせました。', romaji: 'Sensei wa gakusei ni shukudai o sasemashita.', meaning: 'Guru menyuruh murid PR.' },
    ]
  ),
  // Causative-passive
  grammarPoint('n4-grammar-e4','N4', 48, 'Bentuk Kausatif-Pasif', 'Dipaksa melakukan',
    [
      { type: 'Kausatif-pasif', rule: 'V-kausatif + られる = dipaksa', example: 'たべ + させられる (dipaksa makan)' },
    ],
    [
      { japanese: '子供の頃、野菜を食べさせられました。', romaji: 'Kodomo no koro, yasai o tabesaseraremashita.', meaning: 'Waktu kecil, saya dipaksa makan sayur.' },
      { japanese: '会議に出させられました。', romaji: 'Kaigi ni dasaseraremashita.', meaning: 'Saya dipaksa hadir rapat.' },
    ]
  ),
  // ように dengan beberapa sub-penggunaan
  grammarPoint('n4-grammar-e5','N4', 36, 'V + ように (Berubah jadi bisa)', '~ようになる (Akuisisi kemampuan baru)',
    [
      { type: 'Akuisisi', rule: 'V-polos + ようになる = jadi bisa / jadi terbiasa', example: 'わかる ように なった' },
    ],
    [
      { japanese: '日本語が話せるようになりました。', romaji: 'Nihongo ga hanaseru you ni narimashita.', meaning: 'Saya jadi bisa bicara bahasa Jepang.' },
      { japanese: '毎日運動するようになりました。', romaji: 'Mainichi undou suru you ni narimashita.', meaning: 'Saya jadi terbiasa olahraga tiap hari.' },
    ]
  ),
  // Sentence-final particles lanjutan
  grammarPoint('n4-grammar-e6','N4', 35, 'Sentence-end: よね / ね / な', 'Partikel Akhir - Variasi',
    [
      { type: 'よね', rule: 'よね = minta persetujuan + info baru', example: 'いい てんき ですよね' },
      { type: 'よね (negatif)', rule: '～ない + よね = kan tidak?', example: 'たかく ない ですよね' },
    ],
    [
      { japanese: '今日は金曜日ですよね。', romaji: 'Kyou wa kinyoubi desu yo ne.', meaning: 'Hari ini kan hari Jumat?' },
      { japanese: '安くないですよね。', romaji: 'Yasukunai desu yo ne.', meaning: 'Kan tidak murah?' },
    ]
  ),
  // ために dengan beberapa sub-penggunaan
  grammarPoint('n4-grammar-e7','N4', 42, 'N + の + ために (Tujuan dari Posisi)', '~ために - Subjektif (Benda Abstrak)',
    [
      { type: 'Tujuan subjektif', rule: 'N + の + ために + V (target pembicara)', example: 'けんこう の ために' },
    ],
    [
      { japanese: '家族のために働きます。', romaji: 'Kazoku no tame ni hatarakimasu.', meaning: 'Saya kerja untuk keluarga.' },
      { japanese: '健康のために野菜を食べます。', romaji: 'Kenkou no tame ni yasai o tabemasu.', meaning: 'Saya makan sayur untuk kesehatan.' },
    ]
  ),
  // Complex noun modifier
  grammarPoint('n4-grammar-e8','N4', 38, 'Complex Noun Modifier (長い修飾語)', 'Modifikasi Kata Benda Kompleks',
    [
      { type: 'V / Adj + N + が + Adj', rule: 'V / Adj frase panjang + 名詞', example: '先生が きのう かった ほん' },
    ],
    [
      { japanese: '昨日友達が作ったケーキを食べました。', romaji: 'Kinou tomodachi ga tsukutta keeki o tabemashita.', meaning: 'Saya makan kue yang dibuat teman kemarin.' },
      { japanese: '田中さんが日本から持ってきたお土産です。', romaji: 'Tanaka-san ga Nihon kara motte kita omiyage desu.', meaning: 'Ini oleh-oleh yang dibawa Tanaka dari Jepang.' },
    ]
  ),
  // ように vs ために detail
  grammarPoint('n4-grammar-e9','N4', 42, 'ように (Bukan Subjek Pengendali)', '~ように - Tujuan Tidak Bisa Dikontrol',
    [
      { type: 'Tidak bisa dikontrol', rule: 'V-polos (non-volitional) + ように', example: 'わかる ように' },
    ],
    [
      { japanese: '風邪を引かないように気をつけてください。', romaji: 'Kaze o hikanai you ni ki o tsukete kudasai.', meaning: 'Hati-hati supaya tidak masuk angin.' },
      { japanese: '遅刻しないように早く起きます。', romaji: 'Chikoku shinai you ni hayaku okimasu.', meaning: 'Saya bangun cepat supaya tidak terlambat.' },
    ]
  ),
  // Giving keigo dengan hormat
  grammarPoint('n4-grammar-e10','N4', 49, 'お/ご + V-stem + になる (Sonkeigo)', 'Sonkeigo - Umum',
    [
      { type: 'Sonkeigo', rule: 'お/ご + V-masu stem + になる', example: 'おきになる (お起きになる = bangun hormat)' },
    ],
    [
      { japanese: '先生は何時にお帰りになりますか。', romaji: 'Sensei wa nanji ni o-kaeri ni narimasu ka.', meaning: 'Pukul berapa guru pulang?' },
      { japanese: 'お客様は何をご注文になりましたか。', romaji: 'Okyakusama wa nani o go-chuumon ni narimashita ka.', meaning: 'Pelanggan pesan apa?' },
    ]
  ),
  // Giving keigo rendah hati
  grammarPoint('n4-grammar-e11','N4', 50, 'お/ご + V-stem + する / いたす (Kenjougo)', 'Kenjougo - Umum',
    [
      { type: 'Kenjougo', rule: 'お + V-masu stem + する / いたす', example: 'おもちする (お持ちする = membawa hormat)' },
    ],
    [
      { japanese: '私が荷物をお持ちします。', romaji: 'Watashi ga nimotsu o omochi shimasu.', meaning: 'Saya yang bawa barang.' },
      { japanese: 'ご案内いたします。', romaji: 'Go-annai itashimasu.', meaning: 'Saya pandu (Anda).' },
    ]
  ),
  // らしい (Tampaknya, rumor)
  grammarPoint('n4-grammar-e12','N4', 47, 'V / Adj / N + らしい', '~らしい (Tampaknya / Rumor)',
    [
      { type: 'Rumor', rule: 'V-polos / Adj / N + らしい', example: 'あめ らしい' },
    ],
    [
      { japanese: '明日は雨らしいですよ。', romaji: 'Ashita wa ame rashii desu yo.', meaning: 'Konon besok hujan.' },
      { japanese: '田中さんは来月結婚するらしい。', romaji: 'Tanaka-san wa raigetsu kekkon suru rashii.', meaning: 'Konon Tanaka bulan depan menikah.' },
    ]
  ),
  // べき (Should)
  grammarPoint('n4-grammar-e13','N4', 48, 'V-polos + べき / べきだ', '~べき (Seharusnya)',
    [
      { type: 'Kewajiban', rule: 'V-polos + べき + です / だ', example: 'いく べき' },
    ],
    [
      { japanese: 'もっと早く寝るべきです。', romaji: 'Motto hayaku neru beki desu.', meaning: 'Seharusnya tidur lebih cepat.' },
      { japanese: '約束は守るべきです。', romaji: 'Yakusoku wa mamoru beki desu.', meaning: 'Janji harus ditepati.' },
    ]
  ),
  // のに (lebih detail)
  grammarPoint('n4-grammar-e14','N4', 45, 'V / Adj + のに (Kontras Kuat)', '~のに - Meskipun / Padahal',
    [
      { type: 'Kontras emosi', rule: 'V-polos / Adj + のに (mengekspresikan kekecewaan)', example: 'いく のに' },
    ],
    [
      { japanese: '薬を飲んだのに、まだ治りません。', romaji: 'Kusuri o nonda noni, mada naorimasen.', meaning: 'Padahal sudah minum obat, belum sembuh.' },
      { japanese: '日曜日なのに、仕事をしています。', romaji: 'Nichiyoubi na noni, shigoto o shite imasu.', meaning: 'Padahal hari Minggu, saya tetap kerja.' },
    ]
  ),
  // まま (Seperti adanya / Tanpa mengubah)
  grammarPoint('n4-grammar-e15','N4', 47, 'V-ta + まま + V', '~まま (Keadaan Tidak Berubah)',
    [
      { type: 'Keadaan', rule: 'V-ta / Adj-penuh + まま = dalam kondisi seperti itu', example: 'はいた まま' },
    ],
    [
      { japanese: '靴を履いたまま部屋に入りました。', romaji: 'Kutsu o haita mama heya ni hairimashita.', meaning: 'Masuk kamar tanpa buka sepatu.' },
      { japanese: '電気を付けたまま寝ました。', romaji: 'Denki o tsuketa mama nemashita.', meaning: 'Tidur dengan lampu masih menyala.' },
    ]
  ),
  // ことだ (Saran/ajakan lemah)
  grammarPoint('n4-grammar-e16','N4', 38, 'V-polos + ことです (Anjuran)', '~ことだ (Lebih baik...)',
    [
      { type: 'Anjuran', rule: 'V-polos + ことです = lebih baik', example: 'べんきょう する こと です' },
    ],
    [
      { japanese: 'たくさん本を読むことです。', romaji: 'Takusan hon o yomu koto desu.', meaning: 'Lebih baik banyak baca buku.' },
      { japanese: '毎日運動することです。', romaji: 'Mainichi undou suru koto desu.', meaning: 'Lebih baik olahraga setiap hari.' },
    ]
  ),
  // っぽい (Terlihat / Mirip)
  grammarPoint('n4-grammar-e17','N4', 47, 'V-masu stem + っぽい / Adj-stem + っぽい', '~っぽい (Cenderung / Mirip)',
    [
      { type: 'Cenderung', rule: 'V-masu stem + っぽい = cenderung', example: 'わすれ + っぽい (pelupa)' },
    ],
    [
      { japanese: '彼は忘れっぽい人です。', romaji: 'Kare wa wasureppoi hito desu.', meaning: 'Dia orangnya pelupa.' },
      { japanese: 'この子供は怒りっぽいです。', romaji: 'Kono kodomo wa okorippoi desu.', meaning: 'Anak ini pemarah.' },
    ]
  ),
  // ながら (kontras) - watch out this is different!
  grammarPoint('n4-grammar-e18','N4', 45, 'V-penuh + ながら (Padahal)', '~ながら - Padahal (Kontras)',
    [
      { type: 'Kontras', rule: 'V-penuh + ながら = padahal', example: 'しって いる ながら' },
    ],
    [
      { japanese: '知っていながら、教えてくれませんでした。', romaji: 'Shitte iru nagara, oshiete kuremashita.', meaning: 'Padahal tahu, tidak kasih tau.' },
      { japanese: '言いながら、本当は違う。', romaji: 'Iinagara, hontou wa chigau.', meaning: 'Padahal ngomong begitu, sebenarnya beda.' },
    ]
  ),
  // 〜に決まっている (Pasti/Tentu)
  grammarPoint('n4-grammar-e19','N4', 47, 'V / Adj + に決まっている', '~に決まっている (Pasti...)',
    [
      { type: 'Keyakinan', rule: 'V-polos / Adj + にきまっている = sudah pasti', example: 'あめ に きまっている' },
    ],
    [
      { japanese: 'あの人は来るに決まっています。', romaji: 'Ano hito wa kuru ni kimatte imasu.', meaning: 'Pasti orang itu datang.' },
      { japanese: '失敗するに決まっていますよ。', romaji: 'Shippai suru ni kimatte imasu yo.', meaning: 'Tentu akan gagal.' },
    ]
  ),
  // お/ご ~ いただく (hormat-rendah hati)
  grammarPoint('n4-grammar-e20','N4', 50, 'お/ご + V-stem + いただく (Sangat Sopan)', 'Sonkeigo + Kenjougo',
    [
      { type: 'Super sopan', rule: 'お + V-masu stem + いただく = sangat sopan', example: 'おき + いただく' },
    ],
    [
      { japanese: '先生にお書きいただきました。', romaji: 'Sensei ni o-kaki itadakimashita.', meaning: 'Guru (hormat) sudah menulis untuk saya (rendah hati).' },
      { japanese: 'ご説明いただきまして、ありがとうございました。', romaji: 'Go-setsumei itadakimashite, arigatou gozaimashita.', meaning: 'Terima kasih sudah menjelaskan.' },
    ]
  ),
  // ばよかった (Andai kata)
  grammarPoint('n4-grammar-e21','N4', 45, 'V-eba + よかった', '~ばよかった (Andai Saja)',
    [
      { type: 'Penyesalan', rule: 'V-eba + よかった = andai (penyesalan)', example: 'はやく いけば よかった' },
    ],
    [
      { japanese: 'もっと勉強すればよかったです。', romaji: 'Motto benkyou sureba yokatta desu.', meaning: 'Andai saya belajar lebih giat.' },
      { japanese: '早く行けばよかった。', romaji: 'Hayaku ikeba yokatta.', meaning: 'Andai saya pergi lebih awal.' },
    ]
  ),
  // ように言う / 頼む (Minta supaya)
  grammarPoint('n4-grammar-e22','N4', 36, 'V-polos + ように言う/頼む', 'Minta / Bilang Supaya',
    [
      { type: 'Minta', rule: 'V-polos + ように + 言う/頼む/お願いする', example: 'まいにち べんきょう する ように' },
    ],
    [
      { japanese: '遅刻しないように言ってください。', romaji: 'Chikoku shinai you ni itte kudasai.', meaning: 'Tolong bilang supaya tidak terlambat.' },
      { japanese: '薬を飲むようにお母さんに頼みました。', romaji: 'Kusuri o nomu you ni okaasan ni tanomimashita.', meaning: 'Saya minta ibu supaya minum obat.' },
    ]
  ),
  // てあげる/てくれる/てもらう extended
  grammarPoint('n4-grammar-e23','N4', 49, 'V-te + さしあげる (Memberi Hormat)', 'Memberi ke atasan (Sonkeigo)',
    [
      { type: 'Memberi hormat', rule: 'V-te + さしあげる = memberi ke atasan', example: 'おわたし する / おわたし さしあげる' },
    ],
    [
      { japanese: '先生に花を差し上げました。', romaji: 'Sensei ni hana o sashiagemashita.', meaning: 'Saya memberi bunga ke guru.' },
      { japanese: '資料をお送りさしあげます。', romaji: 'Shiryou o o-okuri sashiagemasu.', meaning: 'Saya kirim dokumen (ke atasan).' },
    ]
  ),
  // ようにする vs ようになる
  grammarPoint('n4-grammar-e24','N4', 36, 'V + ようにする (Berupaya)', '~ようにする - Upaya Berkelanjutan',
    [
      { type: 'Upaya', rule: 'V-polos + ようにする = saya berusaha', example: 'はやく ねる ように する' },
    ],
    [
      { japanese: '毎日野菜を食べるようにしています。', romaji: 'Mainichi yasai o taberu you ni shite imasu.', meaning: 'Saya berusaha makan sayur tiap hari.' },
      { japanese: '遅刻しないようにしています。', romaji: 'Chikoku shinai you ni shite imasu.', meaning: 'Saya berusaha supaya tidak terlambat.' },
    ]
  ),
  // Te-form connecting with reason (additional contexts)
  grammarPoint('n4-grammar-e25','N4', 39, 'V-te + 困ります / 困っています', 'V-te + Bingung/Merepotkan',
    [
      { type: 'Kerugian', rule: 'V-te + 困る = kerepotan / kesulitan', example: 'なく られて こまる' },
    ],
    [
      { japanese: '雨に降られて困りました。', romaji: 'Ame ni furarete komarimashita.', meaning: 'Saya kerepotan kehujanan.' },
      { japanese: '彼に泣かれて、困っています。', romaji: 'Kare ni nakarete, komatte imasu.', meaning: 'Saya direpotkan karena dia menangis.' },
    ]
  ),
  // Sentence-final question: かい (casual male)
  grammarPoint('n4-grammar-e26','N4', 47, 'V / Adj + かい (Tanya Kasual Laki)', '~かい (Tanya Informal)',
    [
      { type: 'Tanya', rule: 'V-polos / Adj + かい (sangat kasual, maskulin)', example: 'いく かい' },
    ],
    [
      { japanese: '本当に来るかい？', romaji: 'Hontou ni kuru kai?', meaning: 'Beneran mau datang?' },
      { japanese: 'それは本当かい？', romaji: 'Sore wa hontou kai?', meaning: 'Itu beneran?' },
    ]
  ),
  // ~たびに (Setiap kali)
  grammarPoint('n4-grammar-e27','N4', 46, 'V-polos + たびに', '~たびに (Setiap Kali)',
    [
      { type: 'Frekuensi', rule: 'V-polos + たびに = setiap kali', example: 'いく たびに' },
    ],
    [
      { japanese: '日本に行くたびに、お土産を買います。', romaji: 'Nihon ni iku tabi ni, omiyage o kaimasu.', meaning: 'Setiap pergi ke Jepang, saya beli oleh-oleh.' },
      { japanese: '会うたびに、綺麗になっています。', romaji: 'Au tabi ni, kirei ni natte imasu.', meaning: 'Setiap ketemu, (dia) makin cantik.' },
    ]
  ),
  // ~きれない (Tidak bisa selesai semua)
  grammarPoint('n4-grammar-e28','N4', 44, 'V-masu stem + きれない', '~きれない (Tidak Selesai Semua)',
    [
      { type: 'Tidak selesai', rule: 'V-masu stem + きれない = tidak bisa habiskan', example: 'たべ + きれない' },
    ],
    [
      { japanese: '食べきれないほど料理がありました。', romaji: 'Tabekirenai hodo ryouri ga arimashita.', meaning: 'Ada banyak makanan yang tidak habis dimakan.' },
      { japanese: '言いきれない気持ちです。', romaji: 'Iikirenai kimochi desu.', meaning: 'Perasaan yang tidak bisa diucapkan semua.' },
    ]
  ),
  // ~なさい (Perintah hormat ke anak/diri sendiri)
  grammarPoint('n4-grammar-e29','N4', 33, 'V-masu stem + なさい', '~なさい (Perintah Lembut ke Anak)',
    [
      { type: 'Perintah', rule: 'V-masu stem + なさい = tolong (ke anak/diri sendiri)', example: 'たべ + なさい' },
    ],
    [
      { japanese: '早く寝なさい。', romaji: 'Hayaku nenasai.', meaning: 'Tidur cepat.' },
      { japanese: 'よく勉強しなさい。', romaji: 'Yoku benkyou shinasai.', meaning: 'Belajar yang rajin.' },
    ]
  ),
  // ~ものがある (Memiliki kesan)
  grammarPoint('n4-grammar-e30','N4', 47, 'V-polos + ものがある', '~ものがある (Memiliki kesan)',
    [
      { type: 'Kesan', rule: 'V-polos + ものがある = ada kesan', example: 'かんどう する もの が ある' },
    ],
    [
      { japanese: '彼女の歌には感動するものがある。', romaji: 'Kanojo no uta ni wa kandou suru mono ga aru.', meaning: 'Lagunya ada yang menyentuh.' },
      { japanese: '彼の作品にはどこか懐かしいものがある。', romaji: 'Kare no sakuhin ni wa doko ka natsukashii mono ga aru.', meaning: 'Karyanya ada nuansa nostalgia.' },
    ]
  ),
  // ~か / ~かどうか lebih detail
  grammarPoint('n4-grammar-e31','N4', 40, '疑問詞 + V-polos + か (Embedded Q)', 'Embedded Question',
    [
      { type: 'Tanya', rule: 'Kata Tanya + V-polos + か = tanya yang dilekatkan', example: 'どこ に いく か' },
    ],
    [
      { japanese: '彼がどこに住んでいるか、知っていますか。', romaji: 'Kare ga doko ni sunde iru ka, shitte imasu ka.', meaning: 'Apakah Anda tahu di mana dia tinggal?' },
      { japanese: '会議がいつ終わるか教えてください。', romaji: 'Kaigi ga itsu owaru ka oshiete kudasai.', meaning: 'Tolong beritahu kapan rapat selesai.' },
    ]
  ),
  // Compound - te-form sequence extended
  grammarPoint('n4-grammar-e32','N4', 14, 'V-te + いく / くる (Timbul Perlahan)', 'V-te + いく/くる - Perubahan Bertahap',
    [
      { type: 'Perubahan bertahap', rule: 'V-te + いく = makin... (ke arah depan)', example: 'さむく なって いく' },
      { type: 'Perubahan bertahap', rule: 'V-te + くる = makin... (ke arah sini, baru mulai)', example: 'さむく なって きた' },
    ],
    [
      { japanese: '寒くなっていきますね。', romaji: 'Samuku natte ikimasu ne.', meaning: 'Makin dingin ya (ke depan).' },
      { japanese: '最近太ってきました。', romaji: 'Saikin futotte kimashita.', meaning: 'Akhir-akhir ini saya makin gemuk.' },
    ]
  ),
];

// Combine
const allNew = [...n5Extras, ...n4Extras];

const toAdd = [];
const skipped = [];
for (const g of allNew) {
  if (existingIds.has(g.id) || existingPatterns.has(g.pattern)) {
    skipped.push(g.id);
  } else {
    toAdd.push(g);
  }
}

console.log(`Skipped (duplicate): ${skipped.length}`);
if (skipped.length) console.log("  " + skipped.slice(0, 5).join(", ") + (skipped.length > 5 ? "..." : ""));
console.log(`To add: ${toAdd.length}`);

// Append
data.push(...toAdd);

// Sort by level then chapter
data.sort((a, b) => {
  if (a.level !== b.level) return a.level === 'N5' ? -1 : 1;
  return (a.chapter || 0) - (b.chapter || 0);
});

fs.writeFileSync(grammarFile, JSON.stringify(data, null, 2));

// Final stats
const byLevel = {};
for (const g of data) {
  byLevel[g.level] = (byLevel[g.level] || 0) + 1;
}
console.log(`\n=== Final grammar stats ===`);
console.log(`Total: ${data.length}`);
for (const [lvl, n] of Object.entries(byLevel)) {
  console.log(`  ${lvl}: ${n}`);
}
