// fixKanjiReadingsN4.cjs
// Fix kunyomi stem → full form for verb/adjective kanji in N4

const fs = require('fs');
const path = require('path');

const charsFile = path.join(__dirname, '../src', 'data', 'characters.json');
const data = JSON.parse(fs.readFileSync(charsFile, 'utf8'));

// Map: kanji char -> [full kunyomi form, full romaji]
// Only fix kanji where the listed form is clearly a stem (not a full word)
const fixes = {
  // Verbs - stem → full form
  "通": { kun: "とおる", kun_r: "tooru" },  // pass through
  "思": { kun: "おもう", kun_r: "omou" },  // think
  "考": { kun: "かんがえる", kun_r: "kangaeru" },  // think
  "売": { kun: "うる", kun_r: "uru" },  // sell
  "知": { kun: "しる", kun_r: "shiru" },  // know
  "集": { kun: "あつめる", kun_r: "atsumeru" },  // collect
  "計": { kun: "はかる", kun_r: "hakaru" },  // measure
  "死": { kun: "しぬ", kun_r: "shinu" },  // die
  "始": { kun: "はじまる", kun_r: "hajimaru" },  // begin
  "終": { kun: "おわる", kun_r: "owaru" },  // end
  "住": { kun: "すむ", kun_r: "sumu" },  // live
  "止": { kun: "とまる", kun_r: "tomaru" },  // stop
  "送": { kun: "おくる", kun_r: "okuru" },  // send
  "切": { kun: "きる", kun_r: "kiru" },  // cut
  "転": { kun: "ころがる", kun_r: "korogaru" },  // roll
  "研": { kun: "とぐ", kun_r: "togu" },  // sharpen
  "究": { kun: "きわめる", kun_r: "kiwameru" },  // investigate
  "起": { kun: "おきる", kun_r: "okiru" },  // wake
  "着": { kun: "きる", kun_r: "kiru" },  // wear
  "待": { kun: "まつ", kun_r: "matsu" },  // wait
  "早": { kun: "はやい", kun_r: "hayai" },  // fast
  "映": { kun: "うつる", kun_r: "utsuru" },  // reflect
  "仕": { kun: "つかえる", kun_r: "tsukaeru" },  // serve
  "去": { kun: "さる", kun_r: "saru" },  // past
  "答": { kun: "こたえる", kun_r: "kotaeru" },  // answer
  "注": { kun: "そそぐ", kun_r: "sosogu" },  // pour
  "帰": { kun: "かえる", kun_r: "kaeru" },  // return
  "歌": { kun: "うたう", kun_r: "utau" },  // sing
  "歩": { kun: "あるく", kun_r: "aruku" },  // walk
  "洗": { kun: "あらう", kun_r: "arau" },  // wash
  "借": { kun: "かりる", kun_r: "kariru" },  // borrow
  "貸": { kun: "かす", kun_r: "kasu" },  // lend
  "走": { kun: "はしる", kun_r: "hashiru" },  // run
  "勉": { kun: "つとめる", kun_r: "tsutomeru" },  // strive
  "引": { kun: "ひく", kun_r: "hiku" },  // pull
  "回": { kun: "まわる", kun_r: "mawaru" },  // turn
  "降": { kun: "ふる", kun_r: "furu" },  // fall (rain)
  "合": { kun: "あう", kun_r: "au" },  // meet
  "困": { kun: "こまる", kun_r: "komaru" },  // troubled
  "散": { kun: "ちる", kun_r: "chiru" },  // scatter
  "残": { kun: "のこる", kun_r: "nokoru" },  // remain
  "宿": { kun: "やどる", kun_r: "yadoru" },  // lodge
  "笑": { kun: "わらう", kun_r: "warau" },  // laugh
  "乗": { kun: "のる", kun_r: "noru" },  // ride
  "進": { kun: "すすむ", kun_r: "susumu" },  // advance
  "成": { kun: "なる", kun_r: "naru" },  // become
  "晴": { kun: "はれる", kun_r: "hareru" },  // be sunny
  "伝": { kun: "つたえる", kun_r: "tsutaeru" },  // transmit
  "兆": { kun: "きざす", kun_r: "kizasu" },  // omen
  "収": { kun: "おさめる", kun_r: "osameru" },  // store
  "就": { kun: "つく", kun_r: "tsuku" },  // take up
  "折": { kun: "おる", kun_r: "oru" },  // fold
  "救": { kun: "すくう", kun_r: "sukuu" },  // save
  "植": { kun: "うえる", kun_r: "ueru" },  // plant
  "恋": { kun: "こう", kun_r: "kou" },  // love (こい is also OK)
  "州": { kun: "す", kun_r: "su" },  // already has — keep
  "師": { kun: "す", kun_r: "su" },  // keep
  "律": { kun: "りち", kun_r: "richi" },  // keep (already correct)

  // i-adjectives - stem → full
  "強": { kun: "つよい", kun_r: "tsuyoi" },  // strong
  "重": { kun: "おもい", kun_r: "omoi" },  // heavy
  "広": { kun: "ひろい", kun_r: "hiroi" },  // wide
  "急": { kun: "いそぐ", kun_r: "isogu" },  // hurry (verb) — also adj いそい
  "楽": { kun: "たのしい", kun_r: "tanoshii" },  // fun/comfortable
  "試": { kun: "こころみる", kun_r: "kokoromiru" },  // try
  "軽": { kun: "かるい", kun_r: "karui" },  // light
  "遅": { kun: "おそい", kun_r: "osoi" },  // slow
  "暗": { kun: "くらい", kun_r: "kurai" },  // dark
  "短": { kun: "みじかい", kun_r: "mijikai" },  // short
  "太": { kun: "ふとい", kun_r: "futoi" },  // fat
  "遠": { kun: "とおい", kun_r: "tooi" },  // far
  "弱": { kun: "よわい", kun_r: "yowai" },  // weak
  "暑": { kun: "あつい", kun_r: "atsui" },  // hot
  "悪": { kun: "わるい", kun_r: "warui" },  // bad
  "主": { kun: "おもな", kun_r: "omona" },  // main (na-adj stem form, common)
  "動": { kun: "うごく", kun_r: "ugoku" },  // move
  "場": { kun: "ば", kun_r: "ba" },  // already correct as counter suffix
  "問": { kun: "とう", kun_r: "tou" },  // problem (already correct verb)
  "代": { kun: "かわる", kun_r: "kawaru" },  // change (also か as counter suffix)
  "開": { kun: "ひらく", kun_r: "hiraku" },  // open (also あ as transitive)
  "力": { kun: "ちから", kun_r: "chikara" },  // already correct
  "言": { kun: "いう", kun_r: "iu" },  // say (was い - missing full form)
  "田": { kun: "た", kun_r: "ta" },  // already correct (rice field)
  "発": { kun: "たつ", kun_r: "tatsu" },  // depart (was た - missing full)
  "者": { kun: "もの", kun_r: "mono" },  // already correct
  "地": { kun: "ち", kun_r: "chi" },  // already correct as counter
  "業": { kun: "わざ", kun_r: "waza" },  // already correct
  "方": { kun: "かた", kun_r: "kata" },  // already correct
  "自": { kun: "みずから", kun_r: "mizukara" },  // self
  "用": { kun: "もちいる", kun_r: "mochiiru" },  // use (was もち - stem)
  "度": { kun: "たび", kun_r: "tabi" },  // already correct as occasion/counter
  "持": { kun: "もつ", kun_r: "motsu" },  // hold (was も - stem)
  "野": { kun: "の", kun_r: "no" },  // already correct (field)
  "家": { kun: "いえ", kun_r: "ie" },  // already correct
  "世": { kun: "よ", kun_r: "yo" },  // already correct
  "心": { kun: "こころ", kun_r: "kokoro" },  // already correct
  "教": { kun: "おしえる", kun_r: "oshieru" },  // teach (was おし - stem)
  "文": { kun: "ふみ", kun_r: "fumi" },  // already correct (letter, classical)
  "元": { kun: "もと", kun_r: "moto" },  // already correct
  "近": { kun: "ちかい", kun_r: "chikai" },  // near (was ちか - stem)
  "画": { kun: "え", kun_r: "e" },  // picture (was かく - the verb form, less ideal)
  "海": { kun: "うみ", kun_r: "umi" },  // already correct
  "道": { kun: "みち", kun_r: "michi" },  // already correct
  "物": { kun: "もの", kun_r: "mono" },  // already correct
  "品": { kun: "しな", kun_r: "shina" },  // already correct
  "朝": { kun: "あさ", kun_r: "asa" },  // already correct
  "無": { kun: "ない", kun_r: "nai" },  // not exist
  "真": { kun: "ま", kun_r: "ma" },  // already correct (truth)
  "有": { kun: "ある", kun_r: "aru" },  // exist
  "町": { kun: "まち", kun_r: "machi" },  // already correct
  "建": { kun: "たてる", kun_r: "tateru" },  // build
  "館": { kun: "やかた", kun_r: "yakata" },  // already correct
  "屋": { kun: "や", kun_r: "ya" },  // already correct
  "色": { kun: "いろ", kun_r: "iro" },  // already correct
  "夏": { kun: "なつ", kun_r: "natsu" },  // already correct
  "秋": { kun: "あき", kun_r: "aki" },  // already correct
  "冬": { kun: "ふゆ", kun_r: "fuyu" },  // already correct
  "兄": { kun: "あに", kun_r: "ani" },  // already correct
  "姉": { kun: "あね", kun_r: "ane" },  // already correct
  "牛": { kun: "うし", kun_r: "ushi" },  // already correct
  "丸": { kun: "まるい", kun_r: "marui" },  // round (was まる - stem, full is まるい)
  "交": { kun: "まじる", kun_r: "majiru" },  // mix
  "残": { kun: "のこる", kun_r: "nokoru" },  // already listed
  "指": { kun: "ゆび", kun_r: "yubi" },  // already correct (noun)
  "寺": { kun: "てら", kun_r: "tera" },  // already correct
  "首": { kun: "くび", kun_r: "kubi" },  // already correct
  "初": { kun: "はじめて", kun_r: "hajimete" },  // first time (was はじ - stem)
  "所": { kun: "ところ", kun_r: "tokoro" },  // already correct
  "森": { kun: "もり", kun_r: "mori" },  // already correct
  "神": { kun: "かみ", kun_r: "kami" },  // already correct
  "身": { kun: "み", kun_r: "mi" },  // body
  "昔": { kun: "むかし", kun_r: "mukashi" },  // already correct
  "党": { kun: "なかま", kun_r: "nakama" },  // already correct (companion)
  "夢": { kun: "ゆめ", kun_r: "yume" },  // already correct
  "妻": { kun: "つま", kun_r: "tsuma" },  // already correct
  "富": { kun: "とみ", kun_r: "tomi" },  // already correct
  "幹": { kun: "みき", kun_r: "miki" },  // already correct
  "庫": { kun: "くら", kun_r: "kura" },  // already correct
  "束": { kun: "たば", kun_r: "taba" },  // already correct (bundle)
  "叔": { kun: "おじ", kun_r: "oji" },  // already correct
  "姪": { kun: "めい", kun_r: "mei" },  // already correct
  "甥": { kun: "おい", kun_r: "oi" },  // already correct
  "孫": { kun: "まご", kun_r: "mago" },  // already correct
  "波": { kun: "なみ", kun_r: "nami" },  // already correct
  "津": { kun: "つ", kun_r: "tsu" },  // already correct (port)
  "霜": { kun: "しも", kun_r: "shimo" },  // already correct
  "霧": { kun: "きり", kun_r: "kiri" },  // already correct
  "願": { kun: "ねがう", kun_r: "negau" },  // already correct
};

let updated = 0;
const updateLog = [];

for (const entry of data.kanji_n4) {
  const ch = entry.character;
  if (!(ch in fixes)) continue;

  const fix = fixes[ch];
  const curKun = (entry.kunyomi_kana || '').trim();
  const curKunR = (entry.kunyomi_romaji || '').trim();

  // Only update if currently has a stem and target is full form
  if (curKun && curKun !== fix.kun && fix.kun.length > curKun.length) {
    entry.kunyomi_kana = fix.kun;
    if (curKunR) {
      entry.kunyomi_romaji = fix.kun_r;
    }
    updated++;
    updateLog.push(`${ch}: kun "${curKun}" → "${fix.kun}"`);
  } else if (!curKun && fix.kun) {
    entry.kunyomi_kana = fix.kun;
    if (fix.kun_r) entry.kunyomi_romaji = fix.kun_r;
    updated++;
    updateLog.push(`${ch}: kun (added) "${fix.kun}"`);
  } else if (curKun && curKun !== fix.kun && fix.kun.length < curKun.length) {
    // Existing is longer (already full form) — keep it
  } else if (curKun !== fix.kun) {
    // Different but not clearly stem — log for manual review
    updateLog.push(`? ${ch}: kept "${curKun}" (target was "${fix.kun}")`);
  }
}

fs.writeFileSync(charsFile, JSON.stringify(data, ensure_ascii=false, indent=2));

console.log(`Updated ${updated} kanji entries`);
updateLog.forEach(l => console.log('  ' + l));
