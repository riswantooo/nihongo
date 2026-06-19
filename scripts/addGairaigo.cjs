const fs = require('fs');
const path = require('path');

const gairaigoCharacters = [
    { character: "ヴァ", romaji: "va", category: "gairaigo" },
    { character: "ヴィ", romaji: "vi", category: "gairaigo" },
    { character: "ヴ", romaji: "vu", category: "gairaigo" },
    { character: "ヴェ", romaji: "ve", category: "gairaigo" },
    { character: "ヴォ", romaji: "vo", category: "gairaigo" },
    { character: "ヴャ", romaji: "vya", category: "gairaigo" },
    { character: "ヴュ", romaji: "vyu", category: "gairaigo" },
    { character: "ヴョ", romaji: "vyo", category: "gairaigo" },
    { character: "イェ", romaji: "ye", category: "gairaigo" },
    { character: "シェ", romaji: "she", category: "gairaigo" },
    { character: "ジェ", romaji: "je", category: "gairaigo" },
    { character: "チェ", romaji: "che", category: "gairaigo" },
    { character: "スィ", romaji: "si", category: "gairaigo" },
    { character: "セャ", romaji: "sya", category: "gairaigo" },
    { character: "セュ", romaji: "syu", category: "gairaigo" },
    { character: "セョ", romaji: "syo", category: "gairaigo" },
    { character: "ティ", romaji: "ti", category: "gairaigo" },
    { character: "トゥ", romaji: "tu", category: "gairaigo" },
    { character: "テャ", romaji: "tya", category: "gairaigo" },
    { character: "テュ", romaji: "tyu", category: "gairaigo" },
    { character: "テョ", romaji: "tyo", category: "gairaigo" },
    { character: "ズィ", romaji: "zi", category: "gairaigo" },
    { character: "ゼャ", romaji: "zya", category: "gairaigo" },
    { character: "ゼュ", romaji: "zyu", category: "gairaigo" },
    { character: "ゼョ", romaji: "zyo", category: "gairaigo" },
    { character: "ツァ", romaji: "tsa", category: "gairaigo" },
    { character: "ツィ", romaji: "tsi", category: "gairaigo" },
    { character: "ツェ", romaji: "tse", category: "gairaigo" },
    { character: "ツォ", romaji: "tso", category: "gairaigo" },
    { character: "ディ", romaji: "di", category: "gairaigo" },
    { character: "ドゥ", romaji: "du", category: "gairaigo" },
    { character: "デャ", romaji: "dya", category: "gairaigo" },
    { character: "デュ", romaji: "dyu", category: "gairaigo" },
    { character: "デョ", romaji: "dyo", category: "gairaigo" },
    { character: "ファ", romaji: "fa", category: "gairaigo" },
    { character: "フィ", romaji: "fi", category: "gairaigo" },
    { character: "ホゥ", romaji: "hu", category: "gairaigo" },
    { character: "フェ", romaji: "fe", category: "gairaigo" },
    { character: "フォ", romaji: "fo", category: "gairaigo" },
    { character: "フャ", romaji: "fya", category: "gairaigo" },
    { character: "フュ", romaji: "fyu", category: "gairaigo" },
    { character: "フョ", romaji: "fyo", category: "gairaigo" },
    { character: "リェ", romaji: "rye", category: "gairaigo" },
    { character: "ウァ", romaji: "wa", category: "gairaigo" },
    { character: "ウィ", romaji: "wi", category: "gairaigo" },
    { character: "ウェ", romaji: "we", category: "gairaigo" },
    { character: "ウォ", romaji: "wo", category: "gairaigo" },
    { character: "ウャ", romaji: "wya", category: "gairaigo" },
    { character: "ウュ", romaji: "wyu", category: "gairaigo" },
    { character: "ウョ", romaji: "wyo", category: "gairaigo" },
    { character: "クァ", romaji: "kwa", category: "gairaigo" },
    { character: "クィ", romaji: "kwi", category: "gairaigo" },
    { character: "クゥ", romaji: "kwu", category: "gairaigo" },
    { character: "クェ", romaji: "kwe", category: "gairaigo" },
    { character: "クォ", romaji: "kwo", category: "gairaigo" },
    { character: "グァ", romaji: "gwa", category: "gairaigo" },
    { character: "グィ", romaji: "gwi", category: "gairaigo" },
    { character: "グゥ", romaji: "gwu", category: "gairaigo" },
    { character: "グェ", romaji: "gwe", category: "gairaigo" },
    { character: "グォ", romaji: "gwo", category: "gairaigo" }
];

const filePath = path.join(__dirname, '../src', 'data', 'characters.json');
const data = JSON.parse(fs.readFileSync(filePath, 'utf8'));

// Filter out existing gairaigo to avoid duplicates if run multiple times
data.katakana = data.katakana.filter(char => char.category !== 'gairaigo');

// Add the new ones
data.katakana.push(...gairaigoCharacters);

fs.writeFileSync(filePath, JSON.stringify(data, null, 2));
console.log('Successfully added gairaigo characters to Katakana!');
