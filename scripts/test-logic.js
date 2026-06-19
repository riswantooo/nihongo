
import { 
  getSRSData, 
  saveSRSData, 
  updateSRSItem, 
  getDueSRSItems, 
  addItemsToSRS
} from '../src/utils/progressManager.js';

// --- SETUP MOCK LOCALSTORAGE ---
// Karena Node.js tidak memiliki window.localStorage, kita mock di global object
const mockStorage = {};
global.localStorage = {
  getItem: (key) => mockStorage[key] || null,
  setItem: (key, value) => { mockStorage[key] = String(value); },
  removeItem: (key) => { delete mockStorage[key]; },
  clear: () => {
    for (let key in mockStorage) {
      delete mockStorage[key];
    }
  }
};
// -------------------------------

const runTests = () => {
  console.log("=== MEMULAI PENGUJIAN LOGIKA ===");
  let passed = 0;
  let failed = 0;

  const assert = (condition, message) => {
    if (condition) {
      console.log(`✅ LULUS: ${message}`);
      passed++;
    } else {
      console.error(`❌ GAGAL: ${message}`);
      failed++;
    }
  };

  try {
    // TEST 1: Sistem Progress & Leveling 
    // Catatan: Logika ini kini ditangani oleh ProgressContext.jsx (React) sehingga pengujian ini dilewati
    console.log("\n--- TEST 1: Sistem Progress & Leveling (Dilewati - Diurus React Context) ---");

    // TEST 2: Injeksi Item ke SRS
    console.log("\n--- TEST 2: Injeksi Item Baru ke SRS ---");
    localStorage.clear();
    const newItems = ["vocab_食べる", "kanji_水", "grammar_n5-1"];
    addItemsToSRS(newItems);
    
    const srsDataAfterAdd = getSRSData();
    assert(Object.keys(srsDataAfterAdd).length === 3, "Sistem harus menyimpan 3 item ke SRS");
    assert(srsDataAfterAdd["vocab_食べる"].level === 0, "Level awal item SRS harus 0 (Apprentice)");
    
    const now = new Date().getTime();
    const itemReviewTime = srsDataAfterAdd["vocab_食べる"].nextReview;
    // Cek apakah dueDate di-set sekitar 24 jam dari sekarang
    const diffHours = (itemReviewTime - now) / (1000 * 60 * 60);
    assert(diffHours > 23 && diffHours <= 24, "Jatuh tempo item baru harus di-set 24 jam ke depan (Besok)");

    // TEST 3: Cek Jatuh Tempo (Due Items)
    console.log("\n--- TEST 3: Algoritma Jatuh Tempo (Due Items) ---");
    // Karena tadi di set 24 jam ke depan, getDueSRSItems() hari ini seharusnya kosong
    let dueItems = getDueSRSItems();
    assert(dueItems.length === 0, "Seharusnya belum ada item yang jatuh tempo hari ini (0 item)");

    // Kita manipulasi waktu satu item (vocab_食べる) seolah-olah sudah 2 hari berlalu
    srsDataAfterAdd["vocab_食べる"].nextReview = now - (1000 * 60 * 60 * 48); // minus 48 jam
    saveSRSData(srsDataAfterAdd);

    dueItems = getDueSRSItems();
    assert(dueItems.length === 1, "Sistem harus mendeteksi 1 item yang telah jatuh tempo");
    assert(dueItems[0] === "vocab_食べる", "Item yang jatuh tempo adalah 'vocab_食べる'");

    // TEST 4: Algoritma Naik/Turun Level SRS
    console.log("\n--- TEST 4: Kenaikan & Penurunan Level Memori (SRS) ---");
    
    // User menjawab BENAR -> Level harus naik jadi 1, interval bertambah (1 hari)
    let updatedItem = updateSRSItem("vocab_食べる", true);
    assert(updatedItem.level === 1, "Level SRS harus naik dari 0 ke 1 jika jawaban BENAR");
    
    // Kita panggil lagi (jawaban BENAR berturut-turut)
    updatedItem = updateSRSItem("vocab_食べる", true);
    assert(updatedItem.level === 2, "Level SRS harus naik dari 1 ke 2 jika jawaban BENAR lagi");
    let daysDiff = (updatedItem.nextReview - new Date().getTime()) / (1000 * 60 * 60 * 24);
    assert(daysDiff > 2.9 && daysDiff <= 3, "Berdasarkan array SRS_INTERVALS, Level 2 memberikan interval ~3 hari");

    // Sekarang user LUPA / menjawab SALAH -> Level harus turun drastis
    updatedItem = updateSRSItem("vocab_食べる", false);
    assert(updatedItem.level === 0, "Level SRS harus dihukum turun ke 0 jika jawaban SALAH");
    let punishDiff = (updatedItem.nextReview - new Date().getTime()) / (1000 * 60 * 60 * 24);
    assert(punishDiff > 0.9 && punishDiff <= 1, "Interval dihukum kembali menjadi 1 hari (Besok)");

    console.log("\n==================================");
    console.log(`HASIL: ${passed} LULUS, ${failed} GAGAL`);
    if (failed === 0) {
      console.log("✨ KESIMPULAN: Seluruh logika berjalan sempurna tanpa cacat! ✨");
    } else {
      console.error("⚠️ KESIMPULAN: Terdapat cacat pada logika, mohon periksa ulang kode.");
    }

  } catch (error) {
    console.error("Terjadi error fatal saat menjalankan pengujian:");
    console.error(error);
  }
};

runTests();
