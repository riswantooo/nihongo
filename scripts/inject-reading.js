import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const DATA_PATH = path.join(__dirname, '../src', 'data', 'reading-bank.json');

const newReadings = [
  {
    "id": "read-n5-02",
    "level": "N5",
    "title": "休みの日の予定 (Rencana Hari Libur)",
    "passage": [
      {
        "jp": "あしたは日曜日です。私は朝９時に起きます。それから、友達とデパートへ行きます。",
        "kana": "あしたは にちようびです。 わたしは あさ くじに おきます。 それから、 ともだちと デパートへ いきます。",
        "id": "Besok adalah hari Minggu. Saya bangun jam 9 pagi. Setelah itu, pergi ke toserba bersama teman."
      },
      {
        "jp": "デパートで新しい靴を買います。昼ごはんはレストランで美味しいラーメンを食べます。午後は公園で写真を撮ります。",
        "kana": "デパートで あたらしい くつを かいます。 ひるごはんは レストランで おいしい ラーメンを たべます。 ごごは こうえんで しゃしんを とります。",
        "id": "Membeli sepatu baru di toserba. Makan siang makan ramen yang enak di restoran. Sore harinya memotret di taman."
      }
    ],
    "questions": [
      {
        "question": "この人はデパートで何をしますか。",
        "options": [
          "靴を買います",
          "ラーメンを食べます",
          "写真を撮ります",
          "友達に会います"
        ],
        "answer": "靴を買います",
        "explanation": "Pada teks disebutkan 'デパートで新しい靴を買います' yang berarti 'Membeli sepatu baru di toserba'."
      },
      {
        "question": "午後、どこへ行きますか。",
        "options": [
          "レストラン",
          "デパート",
          "公園",
          "家"
        ],
        "answer": "公園",
        "explanation": "Teks berbunyi '午後は公園で写真を撮ります' yang artinya 'Sore hari memotret di taman (kouen)'."
      }
    ]
  },
  {
    "id": "read-n5-03",
    "level": "N5",
    "title": "掲示板のお知らせ (Pengumuman Papan Tulis)",
    "passage": [
      {
        "jp": "（お知らせ）\n来週の月曜日は学校が休みです。火曜日はテストがあります。月曜日にしっかり勉強してください。テストは１０時からです。",
        "kana": "（おしらせ）\nらいしゅうの げつようびは がっこうが やすみです。 かようびは テストが あります。 げつようびに しっかり べんきょうして ください。 テストは じゅうじからです。",
        "id": "(Pengumuman)\nHari Senin minggu depan sekolah libur. Hari Selasa ada ujian. Tolong belajar dengan rajin di hari Senin. Ujian dimulai dari jam 10."
      }
    ],
    "questions": [
      {
        "question": "テストはいつですか。",
        "options": [
          "今週の月曜日",
          "今週の火曜日",
          "来週の月曜日",
          "来週の火曜日"
        ],
        "answer": "来週の火曜日",
        "explanation": "Teks menyebutkan '来週の月曜日は...' (Senin minggu depan...), dan kelanjutannya '火曜日はテストがあります' (Selasa ada ujian). Berarti ujiannya Selasa minggu depan."
      }
    ]
  },
  {
    "id": "read-n4-01",
    "level": "N4",
    "title": "メール：パーティーの招待 (Email: Undangan Pesta)",
    "passage": [
      {
        "jp": "田中さんへ\n来週の土曜日に、私の家でパーティーをします。午後６時から始まります。飲み物は私が買っておきますが、食べ物は自分の好きな物を持ってきてください。山田さんも来ますよ。来ることができるかどうか、木曜日までに教えてください。",
        "kana": "たなかさんへ\nらいしゅうの どようびに、 わたしの いえで パーティーを します。 ごご ろくじから はじまります。 のみものは わたしが かっておきますが、 たべものは じぶんの すきなものを もってきて ください。 やまださんも きますよ。 くる ことが できるか どうか、 もくようび までに おしえて ください。",
        "id": "Kepada Tanaka\nHari Sabtu minggu depan, saya akan mengadakan pesta di rumah saya. Mulai dari jam 6 sore. Minuman sudah akan saya belikan, tetapi untuk makanan tolong bawa sendiri barang yang kalian suka. Yamada juga akan datang lho. Beritahu saya paling lambat hari Kamis apakah bisa datang atau tidak."
      }
    ],
    "questions": [
      {
        "question": "パーティーに行く人は何を持って行かなければなりませんか。",
        "options": [
          "飲み物",
          "食べ物",
          "飲み物と食べ物",
          "何も持って行かなくてもいいです"
        ],
        "answer": "食べ物",
        "explanation": "Pengirim pesan berkata '食べ物は自分の好きな物を持ってきてください' (Tolong bawa makanan kesukaan sendiri)."
      },
      {
        "question": "田中さんはいつまでに返事をしなければなりませんか。",
        "options": [
          "土曜日まで",
          "木曜日まで",
          "今日まで",
          "来週まで"
        ],
        "answer": "木曜日まで",
        "explanation": "Di kalimat terakhir tertulis '木曜日までに教えてください' (Beritahu saya paling lambat hari Kamis)."
      }
    ]
  },
  {
    "id": "read-n4-02",
    "level": "N4",
    "title": "私の趣味 (Hobi Saya)",
    "passage": [
      {
        "jp": "私の趣味は旅行です。先月、一人で京都へ行きました。京都には古いお寺がたくさんあります。一日目に金閣寺を見に行きました。とても綺麗でした。",
        "kana": "わたしの しゅみは りょこうです。 せんげつ、 ひとりで きょうとへ いきました。 きょうとには ふるい おてらが たくさん あります。 いちにちめに きんかくじを みに いきました。 とても きれいでした。",
        "id": "Hobi saya adalah jalan-jalan. Bulan lalu, saya pergi ke Kyoto sendirian. Di Kyoto ada banyak kuil Buddha yang kuno. Di hari pertama saya pergi melihat Kinkakuji. Sangat indah."
      },
      {
        "jp": "二日目は着物を着て、町を歩きました。外国人がたくさんいて、英語で道をよく聞かれました。疲れたけれど、楽しかったです。来年は北海道に行きたいと思っています。",
        "kana": "ふつかめは きものを きて、 まちを あるきました。 がいこくじんが たくさん いて、 えいごで みちを よく きかれました。 つかれたけれど、 たのしかったです。 らいねんは ほっかいどうに いきたいと おもっています。",
        "id": "Hari kedua saya memakai kimono dan berjalan di kota. Ada banyak orang asing, saya sering ditanyai jalan dalam bahasa Inggris. Memang lelah, tapi menyenangkan. Tahun depan saya berencana ingin pergi ke Hokkaido."
      }
    ],
    "questions": [
      {
        "question": "この人は京都で何をしましたか。",
        "options": [
          "一日目に着物を着ました",
          "二日目に金閣寺に行きました",
          "外国人に道を教えました",
          "外国人と英語を勉強しました"
        ],
        "answer": "外国人に道を教えました",
        "explanation": "Teks berbunyi '外国人がたくさんいて、英語で道をよく聞かれました' (Banyak orang asing, saya ditanyai jalan dalam bahasa inggris). Ini mengimplikasikan dia memberitahu/menunjukkan jalan."
      },
      {
        "question": "この人は来年どこへ行くつもりですか。",
        "options": [
          "京都",
          "北海道",
          "外国",
          "お寺"
        ],
        "answer": "北海道",
        "explanation": "Kalimat terakhir: '来年は北海道に行きたいと思っています' (Tahun depan berencana ingin ke Hokkaido)."
      }
    ]
  },
  {
    "id": "read-n4-03",
    "level": "N4",
    "title": "病院の注意書き (Peringatan Rumah Sakit)",
    "passage": [
      {
        "jp": "薬の飲み方\n・一日三回、朝・昼・晩のご飯のあとに飲んでください。\n・もし、熱が下がったら、白い薬は飲まないでください。\n・お酒と一緒に薬を絶対に飲まないようにしてください。",
        "kana": "くすりの のみかた\n・いちにち さんかい、 あさ・ひる・ばんの ごはんの あとに のんで ください。\n・もし、 ねつが さがったら、 しろい くすりは のまないで ください。\n・おさけと いっしょに くすりを ぜったいに のまない ように して ください。",
        "id": "Cara meminum obat\n- Sehari 3 kali, tolong minum sesudah makan pagi, siang, dan malam.\n- Jika demam sudah turun, tolong JANGAN minum obat yang berwarna putih.\n- Tolong pastikan untuk mutlak tidak meminum obat bersama dengan alkohol."
      }
    ],
    "questions": [
      {
        "question": "熱がない時、どうしなければなりませんか。",
        "options": [
          "薬を全部飲みません",
          "白い薬を飲みません",
          "白い薬だけ飲みます",
          "ご飯のあとに飲みません"
        ],
        "answer": "白い薬を飲みません",
        "explanation": "Aturan kedua: 'もし、熱が下がったら、白い薬は飲まないでください' (Jika demam turun/tidak ada panas, jangan minum obat putih)."
      }
    ]
  }
];

console.log("Membaca reading-bank.json...");
let rawdata = fs.readFileSync(DATA_PATH, 'utf8');
let bankData = JSON.parse(rawdata);

// Append new scenarios
const finalData = [...bankData, ...newReadings];

fs.writeFileSync(DATA_PATH, JSON.stringify(finalData, null, 2), 'utf8');
console.log(`Berhasil menambahkan 5 skenario Reading (Total skenario: ${finalData.length}).`);
