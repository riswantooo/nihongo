// populateMissingN5_v2.cjs
// Add remaining ~25 missing JLPT N5 vocab items

const fs = require('fs');
const path = require('path');

const mnnFile = path.join(__dirname, '../src', 'data', 'characters.json');
const data = JSON.parse(fs.readFileSync(mnnFile, 'utf8'));

const existingN5 = new Set(data.vocabulary_n5.map(v => v.character));
const existingN4 = new Set(data.vocabulary_n4.map(v => v.character));
const allExisting = new Set([...existingN5, ...existingN4]);

let counter = 1;
function entry(kanji, romaji, meaning, kana, examples, level = 'N5') {
  return {
    id: `vocab-${level.toLowerCase()}-v2-${String(counter++).padStart(3, '0')}`,
    character: kanji,
    romaji,
    meaning,
    kana,
    examples,
    level
  };
}

// ============================================================
// 1. Greetings / set phrases (4)
// ============================================================
const greetings = [
  entry("お願いします", "onegaishimasu", "tolong / saya mohon (ungkapan sopan)", "おねがいします",
    [{jp: " coffee を一つお願いします。", kana: "コーヒーをひとつおねがいします。", id: "Satu kopi, tolong."}]),
  entry("よろしくお願いします", "yoroshiku onegaishimasu", "salam perkenalan/permohonan (biasa dipakai saat bertemu/surat)", "よろしくおねがいします",
    [{jp: "初めまして、田中です。よろしくお願いします。", kana: "はじめまして、たなかです。よろしくおねがいします。", id: "Perkenalkan, saya Tanaka. Senang berkenalan."}]),
  entry("お疲れ様", "otsukaresama", "selamat bekerja / bagus (ungkapan setelah kerja)", "おつかれさま",
    [{jp: "今日は一日お疲れ様でした。", kana: "きょうはいちにちおつかれさまでした。", id: "Hari ini kerja bagus ya."}]),
  entry("おやすみなさい", "oyasuminasai", "selamat malam / selamat istirahat (sebelum tidur)", "おやすみなさい",
    [{jp: "もう遅いから、おやすみなさい。", kana: "もうおそいから、おやすみなさい。", id: "Sudah larut, selamat istirahat."}]),
];

// ============================================================
// 2. Date counter (special reading) (2)
// ============================================================
const dates = [
  entry("三日", "mikka", "tiga hari / tanggal tiga", "みっか",
    [{jp: "会社に来て三日です。", kana: "かいしゃにきてみっかです。", id: "Sudah tiga hari bekerja di perusahaan."}]),
  entry("十四日", "juuyokka", "empat belas hari / tanggal empat belas", "じゅうよっか",
    [{jp: "誕生日は十四日です。", kana: "たんじょうびはじゅうよっかです。", id: "Ulang tahun saya tanggal 14."}]),
];

// ============================================================
// 3. Conjunctions (2)
// ============================================================
const conjunctions = [
  entry("でも", "demo", "tapi, namun (kontras)", "でも",
    [{jp: "高いですよ。でも、品質がいいです。", kana: "たかいですよ。でも、ひんしつがいです。", id: "Mahal ya. Tapi kualitasnya bagus."}]),
  entry("そこで", "sokode", "karena itu, lalu (penghubung urutan/alasan)", "そこで",
    [{jp: "道に迷いました。そこで、警察に聞きました。", kana: "みちにまよいました。そこで、けいさつにききました。", id: "Saya tersesat. Lalu, saya tanya ke polisi."}]),
];

// ============================================================
// 4. Family & people (8)
// ============================================================
const family = [
  entry("夫婦", "fuufu", "suami-istri (pasangan)", "ふうふ",
    [{jp: "田中さん夫婦は仲がいいです。", kana: "たなかさんふうふはなかがいいです。", id: "Pasangan Tanaka rukun."}]),
  entry("親戚", "shinseki", "saudara jauh, kerabat", "しんせき",
    [{jp: "正月に親戚の家に行きます。", kana: "しょうがつにしんせきのいえにいきます。", id: "Tahun baru pergi ke rumah kerabat."}]),
  entry("孫", "mago", "cucu", "まご",
    [{jp: "祖母は孫に会いたがっています。", kana: "そぼはまごにあいたがっています。", id: "Nenek ingin bertemu cucunya."}]),
  entry("叔父", "oji", "paman (adik laki-laki ayah/ibu)", "おじ",
    [{jp: "叔父は東京に住んでいます。", kana: "おじはとうきょうにすんでいます。", id: "Paman tinggal di Tokyo."}]),
  entry("叔母", "oba", "bibi (adik perempuan ayah/ibu)", "おば",
    [{jp: "叔母は料理が上手です。", kana: "おばはりょうりがじょうずです。", id: "Bibi pandai masak."}]),
  entry("甥", "oi", "keponakan laki-laki (anak saudara)", "おい",
    [{jp: "甥は来月から大学生になります。", kana: "おいはらいげつからだいがくせいになります。", id: "Keponakan laki-laki saya jadi mahasiswa bulan depan."}]),
  entry("姪", "mei", "keponakan perempuan (anak saudara)", "めい",
    [{jp: "姪はピアノを習っています。", kana: "めいはピアノをならっています。", id: "Keponakan perempuan sedang les piano."}]),
  entry("新郎", "shinrou", "pengantin pria", "しんろう",
    [{jp: "新郎新婦の入場です。", kana: "しんろうしんぷのにゅうじょうです。", id: "Masuknya pengantin pengantin."}]),
  entry("新婦", "shinpu", "pengantin wanita", "しんぷ",
    [{jp: "新婦は白いドレスを着ています。", kana: "しんぷはしろいドレスをきています。", id: "Pengantin wanita pakai gaun putih."}]),
];

// ============================================================
// 5. Weather (6)
// ============================================================
const weather = [
  entry("晴れ", "hare", "cerah", "はれ",
    [{jp: "今日は一日中晴れです。", kana: "きょうはいちにちじゅうはれです。", id: "Hari ini cerah sepanjang hari."}]),
  entry("雷", "kaminari", "guntur, halilintar", "かみなり",
    [{jp: "夏には雷がよく鳴ります。", kana: "なつにはかみなりがよくなります。", id: "Musim panas banyak guntur."}]),
  entry("津波", "tsunami", "tsunami, gelombang besar", "つなみ",
    [{jp: "津波警報が出ました。", kana: "つなみけいほうがでました。", id: "Peringatan tsunami dikeluarkan."}]),
  entry("霧", "kiri", "kabut", "きり",
    [{jp: "朝は霧が深くて運転が危険です。", kana: "あさはきりがふかくてうんてんがきけんです。", id: "Pagi berkabut tebal, bahaya menyetir."}]),
  entry("霜", "shimo", "embun beku", "しも",
    [{jp: "冬になると、朝霜が降ります。", kana: "ふゆになると、あさしもがふります。", id: "Musim dingin, pagi ada embun beku."}]),
  entry("氷", "koori", "es", "こおり",
    [{jp: "冬は道に氷が張ります。", kana: "ふゆはみちにこおりがはります。", id: "Musim dingin, jalan ada es."}]),
];

// ============================================================
// 6. Common verbs (3)
// ============================================================
const verbs = [
  entry("迷う", "mayou", "tersesat, bingung", "まよう",
    [{jp: "道に迷って、遅れました。", kana: "みちにまよって、おくれました。", id: "Saya tersesat dan jadi terlambat."}]),
  entry("助ける", "tasukeru", "menolong", "たすける",
    [{jp: "溺れている人を助けました。", kana: "おぼれているひとをたすけました。", id: "Saya menolong orang yang tenggelam."}]),
  entry("動かします", "ugokashimasu", "menggerakkan (transitif)", "うごかします",
    [{jp: "この箱を動かさないでください。", kana: "このはこうごかさないでください。", id: "Tolong jangan gerakkan kotak ini."}]),
];

// ============================================================
// 7. Common adjectives (4)
// ============================================================
const adjectives = [
  entry("苦しい", "kurushii", "menderitanya, sesak", "くるしい",
    [{jp: "息が苦しくて病院に行きました。", kana: "いきがくるしくてびょういんにいきました。", id: "Nafas saya sesak, jadi ke RS."}]),
  entry("素晴らしい", "subarashii", "luar biasa, hebat", "すばらしい",
    [{jp: "彼女の演奏は素晴らしいです。", kana: "かのじょのえんそうはすばらしいです。", id: "Penampilannya luar biasa."}]),
  entry("鋭い", "surudoi", "tajam (benda: pisau/penglihatan)", "するどい",
    [{jp: "この包丁はとても鋭いです。", kana: "このほうちょうはするどいです。", id: "Pisau ini sangat tajam."}]),
  entry("鈍い", "nibui", "tumpul, lamban", "にぶい",
    [{jp: "このナイフは鈍くて切れません。", kana: "このナイフはにぶくてきれません。", id: "Pisau ini tumpul, tidak bisa memotong."}]),
];

// Combine
const allNew = [...greetings, ...dates, ...conjunctions, ...family, ...weather, ...verbs, ...adjectives];

const toAdd = [];
const skipped = [];
for (const e of allNew) {
  if (allExisting.has(e.character)) {
    skipped.push(e.character);
  } else {
    toAdd.push(e);
    allExisting.add(e.character);
  }
}

console.log(`Skipped (already exist): ${skipped.length}`);
if (skipped.length > 0) console.log("  " + skipped.join(", "));
console.log(`To add: ${toAdd.length}`);

data.vocabulary_n5.push(...toAdd);

fs.writeFileSync(mnnFile, JSON.stringify(data, null, 2));

console.log(`\n=== After update ===`);
console.log(`N5 vocab: ${data.vocabulary_n5.length} (unique: ${new Set(data.vocabulary_n5.map(v=>v.character)).size})`);
console.log(`N4 vocab: ${data.vocabulary_n4.length} (unique: ${new Set(data.vocabulary_n4.map(v=>v.character)).size})`);
console.log(`Total: ${data.vocabulary_n5.length + data.vocabulary_n4.length}`);

// Final coverage check
const allNow = new Set([...data.vocabulary_n5.map(v=>v.character), ...data.vocabulary_n4.map(v=>v.character)]);
const finalCheck = [
  "お願いします","よろしくお願いします","お疲れ様","おやすみなさい",
  "三日","十四日","でも","そこで",
  "夫婦","親戚","孫","叔父","叔母","甥","姪","新郎","新婦",
  "晴れ","雷","津波","霧","霜","氷",
  "迷う","助ける","動かす",
  "苦しい","素晴らしい","鋭い","鈍い"
];
const stillMissing = finalCheck.filter(w => !allNow.has(w));
console.log(`\nAll target words present: ${len(finalCheck) - len(stillMissing)}/${len(finalCheck)}`);
if (stillMissing.length) console.log(`Still missing: ${stillMissing.join(', ')}`);

function len(arr) { return arr.length; }
