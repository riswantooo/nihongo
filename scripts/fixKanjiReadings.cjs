// fixKanjiReadings.cjs
// Fix kanji onyomi/kunyomi issues:
// 1. Add missing kunyomi for kanji that have one
// 2. Fix stem forms to full dictionary forms
// 3. Add missing onyomi where applicable

const fs = require('fs');
const path = require('path');

const charsFile = path.join(__dirname, '../src', 'data', 'characters.json');
const data = JSON.parse(fs.readFileSync(charsFile, 'utf8'));

// Map: kanji char -> { on, kun, on_r, kun_r }
// Each value: { on?: string[], kun?: string[], on_r?: string[], kun_r?: string[] }
// Use null/undefined for "don't change"; [] for "remove"; [values] for "set"

const fixes = {
  // N5 fixes
  "午": { kun: "うま", kun_r: "uma" },  // add kunyomi
  "気": { kun: "いき", kun_r: "iki" },  // add kunyomi
  "素": { kun: "もと", kun_r: "moto" },  // add kunyomi
  "僕": { on: "ボク", on_r: "BOKU" },  // add onyomi
  "助": { kun: "たすける", kun_r: "tasukeru" },  // full verb form
  "苦": { kun: "くるしい", kun_r: "kurushii" },  // full adj form
  "迷": { kun: "まよう", kun_r: "mayou" },  // full verb form
  "疲": { kun: "つかれる", kun_r: "tsukareru" },  // full verb form
  "鋭": { kun: "するどい", kun_r: "surudoi" },  // full adj form
  // N4 fixes
  "京": { kun: "みやこ", kun_r: "miyako" },  // add kunyomi (ibukota)
  "鈍": { kun: "にぶい", kun_r: "nibui" },  // full adj form
  "願": { kun: "ねがう", kun_r: "negau" },  // full verb form
};

let updated = 0;
const updateLog = [];

for (const kanjiList of [data.kanji_n5, data.kanji_n4]) {
  for (const entry of kanjiList) {
    const ch = entry.character;
    if (!(ch in fixes)) continue;

    const fix = fixes[ch];
    let changed = false;

    if ('on' in fix && fix.on !== undefined) {
      // Don't overwrite if already has values
      const currentOn = (entry.onyomi_kana || '').trim();
      if (!currentOn) {
        entry.onyomi_kana = fix.on;
        changed = true;
      }
    }
    if ('on_r' in fix && fix.on_r !== undefined) {
      const currentOnR = (entry.onyomi_romaji || '').trim();
      if (!currentOnR) {
        entry.onyomi_romaji = fix.on_r;
        changed = true;
      }
    }
    if ('kun' in fix && fix.kun !== undefined) {
      const currentKun = (entry.kunyomi_kana || '').trim();
      if (!currentKun) {
        entry.kunyomi_kana = fix.kun;
        changed = true;
      } else if (currentKun !== fix.kun) {
        // Update stem to full form
        entry.kunyomi_kana = fix.kun;
        changed = true;
      }
    }
    if ('kun_r' in fix && fix.kun_r !== undefined) {
      const currentKunR = (entry.kunyomi_romaji || '').trim();
      if (!currentKunR) {
        entry.kunyomi_romaji = fix.kun_r;
        changed = true;
      } else if (currentKunR !== fix.kun_r) {
        entry.kunyomi_romaji = fix.kun_r;
        changed = true;
      }
    }

    if (changed) {
      updated++;
      updateLog.push(`${ch}: on="${entry.onyomi_kana}" kun="${entry.kunyomi_kana}"`);
    }
  }
}

fs.writeFileSync(charsFile, JSON.stringify(data, ensure_ascii=false, indent=2));

console.log(`Updated ${updated} kanji entries:`);
updateLog.forEach(l => console.log('  ' + l));
