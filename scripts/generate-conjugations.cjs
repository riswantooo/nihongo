const fs = require('fs');
const path = require('path');

const verbData = [
  // Group 1 (U-verbs)
  {
    dictionary: "行く", kana: "いく", romaji: "iku", meaning: "pergi", group: 1,
    masu: "行きます", te: "行って", ta: "行った", nai: "行かない",
    potential: "行ける", passive: "行かれる", causative: "行かせる", ba: "行けば", volitional: "行こう"
  },
  {
    dictionary: "飲む", kana: "のむ", romaji: "nomu", meaning: "minum", group: 1,
    masu: "飲みます", te: "飲んで", ta: "飲んだ", nai: "飲まない",
    potential: "飲める", passive: "飲まれる", causative: "飲ませる", ba: "飲めば", volitional: "飲もう"
  },
  {
    dictionary: "読む", kana: "よむ", romaji: "yomu", meaning: "membaca", group: 1,
    masu: "読みます", te: "読んで", ta: "読んだ", nai: "読まない",
    potential: "読める", passive: "読まれる", causative: "読ませる", ba: "読めば", volitional: "読もう"
  },
  {
    dictionary: "書く", kana: "かく", romaji: "kaku", meaning: "menulis", group: 1,
    masu: "書きます", te: "書いて", ta: "書いた", nai: "書かない",
    potential: "書ける", passive: "書かれる", causative: "書かせる", ba: "書けば", volitional: "書こう"
  },
  {
    dictionary: "話す", kana: "はなす", romaji: "hanasu", meaning: "berbicara", group: 1,
    masu: "話します", te: "話して", ta: "話した", nai: "話さない",
    potential: "話せる", passive: "話される", causative: "話させる", ba: "話せば", volitional: "話そう"
  },
  {
    dictionary: "買う", kana: "かう", romaji: "kau", meaning: "membeli", group: 1,
    masu: "買います", te: "買って", ta: "買った", nai: "買わない",
    potential: "買える", passive: "買われる", causative: "買わせる", ba: "買えば", volitional: "買おう"
  },
  {
    dictionary: "待つ", kana: "まつ", romaji: "matsu", meaning: "menunggu", group: 1,
    masu: "待ちます", te: "待って", ta: "待った", nai: "待たない",
    potential: "待てる", passive: "待たれる", causative: "待たせる", ba: "待てば", volitional: "待とう"
  },
  {
    dictionary: "取る", kana: "とる", romaji: "toru", meaning: "mengambil", group: 1,
    masu: "取ります", te: "取って", ta: "取った", nai: "取らない",
    potential: "取れる", passive: "取られる", causative: "取らせる", ba: "取れば", volitional: "取ろう"
  },
  {
    dictionary: "泳ぐ", kana: "およぐ", romaji: "oyogu", meaning: "berenang", group: 1,
    masu: "泳ぎます", te: "泳いで", ta: "泳いだ", nai: "泳がない",
    potential: "泳げる", passive: "泳がれる", causative: "泳がせる", ba: "泳げば", volitional: "泳ごう"
  },
  {
    dictionary: "遊ぶ", kana: "あそぶ", romaji: "asobu", meaning: "bermain", group: 1,
    masu: "遊びます", te: "遊んで", ta: "遊んだ", nai: "遊ばない",
    potential: "遊べる", passive: "遊ばれる", causative: "遊ばせる", ba: "遊べば", volitional: "遊ぼう"
  },
  
  // Group 2 (Ru-verbs)
  {
    dictionary: "食べる", kana: "たべる", romaji: "taberu", meaning: "makan", group: 2,
    masu: "食べます", te: "食べて", ta: "食べた", nai: "食べない",
    potential: "食べられる", passive: "食べられる", causative: "食べさせる", ba: "食べれば", volitional: "食べよう"
  },
  {
    dictionary: "見る", kana: "みる", romaji: "miru", meaning: "melihat", group: 2,
    masu: "見ます", te: "見て", ta: "見た", nai: "見ない",
    potential: "見られる", passive: "見られる", causative: "見させる", ba: "見れば", volitional: "見よう"
  },
  {
    dictionary: "起きる", kana: "おきる", romaji: "okiru", meaning: "bangun", group: 2,
    masu: "起きます", te: "起きて", ta: "起きた", nai: "起きない",
    potential: "起きられる", passive: "起きられる", causative: "起きさせる", ba: "起きれば", volitional: "起きよう"
  },
  {
    dictionary: "寝る", kana: "ねる", romaji: "neru", meaning: "tidur", group: 2,
    masu: "寝ます", te: "寝て", ta: "寝た", nai: "寝ない",
    potential: "寝られる", passive: "寝られる", causative: "寝させる", ba: "寝れば", volitional: "寝よう"
  },
  {
    dictionary: "開ける", kana: "あける", romaji: "akeru", meaning: "membuka", group: 2,
    masu: "開けます", te: "開けて", ta: "開けた", nai: "開けない",
    potential: "開けられる", passive: "開けられる", causative: "開けさせる", ba: "開ければ", volitional: "開けよう"
  },

  // Group 3 (Irregular verbs)
  {
    dictionary: "する", kana: "する", romaji: "suru", meaning: "melakukan", group: 3,
    masu: "します", te: "して", ta: "した", nai: "しない",
    potential: "できる", passive: "される", causative: "させる", ba: "すれば", volitional: "しよう"
  },
  {
    dictionary: "来る", kana: "くる", romaji: "kuru", meaning: "datang", group: 3,
    masu: "来ます", te: "来て", ta: "来た", nai: "来ない",
    potential: "来られる", passive: "来られる", causative: "来させる", ba: "来れば", volitional: "来よう"
  },
  {
    dictionary: "勉強する", kana: "べんきょうする", romaji: "benkyousuru", meaning: "belajar", group: 3,
    masu: "勉強します", te: "勉強して", ta: "勉強した", nai: "勉強しない",
    potential: "勉強できる", passive: "勉強される", causative: "勉強させる", ba: "勉強すれば", volitional: "勉強しよう"
  }
];

const outputPath = path.join(__dirname, '../src/data/verb-conjugations.json');
fs.writeFileSync(outputPath, JSON.stringify(verbData, null, 2));

console.log(`Berhasil meng-generate ${verbData.length} data konjugasi kata kerja ke verb-conjugations.json`);
