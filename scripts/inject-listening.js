import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'listening-bank.json');

const newListenings = [
  {
    "id": "listen-n5-02",
    "level": "N5",
    "scenario": "Di stasiun kereta",
    "transcript": [
      {
        "speaker": "男の人",
        "jp": "すみません。東京駅までの切符はいくらですか。",
        "kana": "すみません。 とうきょうえき までの きっぷは いくらですか。",
        "id": "Permisi. Tiket sampai stasiun Tokyo berapa harganya?"
      },
      {
        "speaker": "駅員",
        "jp": "東京駅ですね。大人は５００円、子供は２５０円です。",
        "kana": "とうきょうえき ですね。 おとなは ごひゃくえん、 こどもは にひゃくごじゅうえんです。",
        "id": "Stasiun Tokyo ya. Dewasa 500 yen, anak-anak 250 yen."
      },
      {
        "speaker": "男の人",
        "jp": "じゃあ、大人一枚と子供二枚お願いします。",
        "kana": "じゃあ、 おとな いちまいと こども にまい おねがいします。",
        "id": "Kalau begitu, tolong dewasa satu lembar dan anak dua lembar."
      }
    ],
    "questions": [
      {
        "question": "男の人はいくら払いますか。",
        "options": [
          "７５０円",
          "１０００円",
          "１２５０円",
          "５００円"
        ],
        "answer": "１０００円",
        "explanation": "Laki-laki itu membeli Dewasa 1 (500 yen) dan Anak 2 (2 x 250 yen = 500 yen). Totalnya 1000 yen."
      }
    ]
  },
  {
    "id": "listen-n5-03",
    "level": "N5",
    "scenario": "Telepon janjian bertemu",
    "transcript": [
      {
        "speaker": "女の人",
        "jp": "もしもし、山田さん。明日、何時に会いましょうか。",
        "kana": "もしもし、 やまださん。 あした、 なんじに あいましょうか。",
        "id": "Halo, Yamada-san. Besok, kita mau bertemu jam berapa?"
      },
      {
        "speaker": "山田",
        "jp": "うーん、私は午前中、用事がありますから、午後２時はどうですか。",
        "kana": "うーん、 わたしは ごぜんちゅう、 ようじが ありますから、 ごご にじは どうですか。",
        "id": "Hmm, saya pagi harinya ada urusan, jadi bagaimana kalau jam 2 siang?"
      },
      {
        "speaker": "女の人",
        "jp": "２時ですね。わかりました。駅の前で待っています。",
        "kana": "にじ ですね。 わかりました。 えきの まえで まっています。",
        "id": "Jam 2 ya. Mengerti. Saya akan menunggu di depan stasiun."
      }
    ],
    "questions": [
      {
        "question": "二人はいつ会いますか。",
        "options": [
          "明日の午前中",
          "明日の午後２時",
          "明日の午前２時",
          "今日の午後２時"
        ],
        "answer": "明日の午後２時",
        "explanation": "Mereka sepakat bertemu besok siang jam 2 ('あしたの午後２時')."
      }
    ]
  },
  {
    "id": "listen-n4-01",
    "level": "N4",
    "scenario": "Di kantor",
    "transcript": [
      {
        "speaker": "部長",
        "jp": "田中君、この資料をコピーしておいてくれないか。会議は３時からだから、それまでに頼むよ。",
        "kana": "たなかくん、 この しりょうを コピーして おいて くれないか。 かいぎは さんじから だから、 それまでに たのむよ。",
        "id": "Tanaka, bisakah kamu memfotokopi dokumen ini (sebagai persiapan). Rapatnya dari jam 3, jadi tolong selesai sebelum itu."
      },
      {
        "speaker": "田中",
        "jp": "はい、わかりました。何部コピーしましょうか。",
        "kana": "はい、 わかりました。 なんぶ コピーしましょうか。",
        "id": "Baik, saya mengerti. Mau difotokopi berapa rangkap?"
      },
      {
        "speaker": "部長",
        "jp": "ええと、会議に出る人は全部で８人だけど、予備として２部多くコピーしておいて。",
        "kana": "ええと、 かいぎに でるひとは ぜんぶで はちにん だけど、 よびとして にぶ おおく コピーして おいて。",
        "id": "Uhm, orang yang ikut rapat totalnya 8 orang, tapi sebagai cadangan tolong fotokopi lebihkan 2 rangkap."
      },
      {
        "speaker": "田中",
        "jp": "はい、１０部ですね。すぐにやります。",
        "kana": "はい、 じゅうぶ ですね。 すぐに やります。",
        "id": "Baik, 10 rangkap ya. Akan segera saya kerjakan."
      }
    ],
    "questions": [
      {
        "question": "田中さんは資料を何部コピーしますか。",
        "options": [
          "２部",
          "３部",
          "８部",
          "１０部"
        ],
        "answer": "１０部",
        "explanation": "Peserta rapat 8 orang ditambah cadangan (yobi) 2 rangkap, jadi total 10 rangkap (10部)."
      }
    ]
  },
  {
    "id": "listen-n4-02",
    "level": "N4",
    "scenario": "Di toko elektronik",
    "transcript": [
      {
        "speaker": "客",
        "jp": "すみません、このパソコンはいくらですか。",
        "kana": "すみません、 この パソコンは いくらですか。",
        "id": "Permisi, laptop ini berapa harganya?"
      },
      {
        "speaker": "店員",
        "jp": "こちらは１０万円でございます。",
        "kana": "こちらは じゅうまんえんで ございます。",
        "id": "Yang ini harganya 100 ribu yen."
      },
      {
        "speaker": "客",
        "jp": "うーん、少し高いですね。もうすこし安くなりませんか。",
        "kana": "うーん、 すこし たかいですね。 もうすこし やすく なりませんか。",
        "id": "Hmm, sedikit mahal ya. Tidak bisakah lebih murah sedikit?"
      },
      {
        "speaker": "店員",
        "jp": "そうですね…では、特別に１０％引きにいたしましょう。それならいかがですか。",
        "kana": "そうですね… では、 とくべつに じゅっぱーせんと びきに いたしましょう。 それなら いかがですか。",
        "id": "Hmm begitu ya... kalau begitu, spesial akan saya potong diskon 10%. Kalau begitu bagaimana?"
      },
      {
        "speaker": "客",
        "jp": "本当ですか？じゃあ、買います。",
        "kana": "ほんとうですか？ じゃあ、 かいます。",
        "id": "Benarkah? Kalau begitu saya beli."
      }
    ],
    "questions": [
      {
        "question": "客はパソコンをいくらで買いますか。",
        "options": [
          "１０万円",
          "９万円",
          "１万円",
          "１１万円"
        ],
        "answer": "９万円",
        "explanation": "Harga asli 100 ribu yen (10万円). Diskon 10% berarti potong 1万円. Jadi harga akhirnya 9万円 (90 ribu yen)."
      }
    ]
  },
  {
    "id": "listen-n4-03",
    "level": "N4",
    "scenario": "Meninggalkan pesan suara (Ansuwaringu mashin)",
    "transcript": [
      {
        "speaker": "録音の声",
        "jp": "ただいま留守にしております。ピーという発信音のあとにメッセージをお願いします。",
        "kana": "ただいま るすに しております。 ピーという はっしんおんの あとに メッセージを おねがいします。",
        "id": "Saat ini saya sedang tidak ada. Tolong tinggalkan pesan setelah nada 'piip'."
      },
      {
        "speaker": "男の人",
        "jp": "（ピー）もしもし、佐藤です。今日の夕食の約束ですが、仕事が遅くなりそうなので、７時の約束を８時に変更してもらえませんか。またあとで電話します。",
        "kana": "（ピー） もしもし、 さとうです。 きょうの ゆうしょくの やくそくですが、 しごとが おそく なりそうなので、 しちじの やくそくを はちじに へんこうして もらえませんか。 また あとで でんわします。",
        "id": "(Piip) Halo, ini Sato. Mengenai janji makan malam hari ini, sepertinya pekerjaan saya akan selesainya telat, bisakah mengubah janji dari jam 7 menjadi jam 8? Nanti saya akan telepon lagi."
      }
    ],
    "questions": [
      {
        "question": "男の人は何と言っていますか。",
        "options": [
          "約束の時間を遅くしてほしい",
          "約束の時間を早くしてほしい",
          "約束をキャンセルしてほしい",
          "今日の夕食は行かない"
        ],
        "answer": "約束の時間を遅くしてほしい",
        "explanation": "Sato meminta agar waktunya diundur (diubah dari jam 7 ke jam 8) karena pekerjaannya selesai lambat. (遅くしてほしい = Ingin dimundurkan waktunya)."
      }
    ]
  }
];

console.log("Membaca listening-bank.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let bankData = JSON.parse(rawdata);

// Append new scenarios
const finalData = [...bankData, ...newListenings];

fs.writeFileSync(DATA_PATH, JSON.stringify(finalData, null, 2), 'utf8');
console.log(`Berhasil menambahkan 5 skenario Listening (Total skenario: ${finalData.length}).`);
