const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, '../src', 'data', 'characters.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const fixMap = {
  "校": "こう",
  "中": "ちゅう、なか",
  "国": "こく、くに",
  "聞": "ぶん、きく",
  "黒": "こく、くろ",
  "赤": "せき、あか",
  "青": "せい、あお",
  "社": "しゃ、やしろ",
  "同": "どう、おなじ",
  "正": "せい、ただしい",
  "明": "めい、あかるい",
  "作": "さく、つくる",
  "使": "し、つかう",
  "花": "か、はな",
  "万": "まん",
  "千": "せん、ち",
  "毎": "まい",
  "週": "しゅう",
  "電": "でん",
  "気": "き",
  "天": "てん、あめ",
  "休": "きゅう、やすむ",
  "駅": "えき",
  "道": "どう、みち",
  "夕": "ゆう",
  "西": "せい、にし"
};

data.kanji_n5 = data.kanji_n5.map(k => {
  if (fixMap[k.character]) {
    k.audioText = fixMap[k.character];
  } else if (k.audioText === k.character) {
    console.log(`Still unmapped: ${k.character}`);
  }
  return k;
});

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Fixed N5 Kanji audioText successfully.');
