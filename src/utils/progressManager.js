/**
 * Progress & SRS Manager Utility
 * Menangani penyimpanan dan pengambilan data dari localStorage.
 */

const SRS_KEY = 'jp_app_srs';
// Interval penambahan hari SRS berdasarkan level (dalam hari)
// Level 0: baru belajar (langsung direview besoknya)
// Level 1: 1 hari, Level 2: 3 hari, Level 3: 7 hari, Level 4: 14 hari, dst.
const SRS_INTERVALS = [1, 3, 7, 14, 30, 60, 120];

export const getSRSData = () => {
  try {
    const data = localStorage.getItem(SRS_KEY);
    return data ? JSON.parse(data) : {};
  } catch (error) {
    console.error("Failed to parse SRS data from localStorage", error);
    return {};
  }
};

export const saveSRSData = (data) => {
  localStorage.setItem(SRS_KEY, JSON.stringify(data));
};

/**
 * Mencatat hasil latihan suatu item (misal: "vocab_n5_123") ke dalam algoritma SRS.
 * @param {string} itemId - ID unik dari item (kosakata, kanji, grammar)
 * @param {boolean} isCorrect - Apakah user menjawab benar
 */
export const updateSRSItem = (itemId, isCorrect) => {
  const srsData = getSRSData();
  const now = new Date().getTime();
  
  if (!srsData[itemId]) {
    // Jika item belum pernah dipelajari sebelumnya
    srsData[itemId] = { level: 0, nextReview: now };
  }
  
  let item = srsData[itemId];
  
  if (isCorrect) {
    // Naikkan level jika benar, mentok di panjang array SRS_INTERVALS
    item.level = Math.min(item.level + 1, SRS_INTERVALS.length);
  } else {
    // Turunkan level secara drastis atau kembalikan ke awal jika salah
    item.level = Math.max(0, item.level - 2);
  }
  
  // Hitung hari jatuh tempo berdasarkan level yang baru
  const daysToAdd = SRS_INTERVALS[item.level === 0 ? 0 : item.level - 1];
  const nextReviewDate = new Date(now);
  nextReviewDate.setDate(nextReviewDate.getDate() + daysToAdd);
  
  item.nextReview = nextReviewDate.getTime();
  
  saveSRSData(srsData);
  return item;
};

/**
 * Menambahkan daftar item baru (yang baru dipelajari) ke dalam antrean SRS.
 * Item ini akan disetel jatuh tempo "besok" (24 jam dari sekarang).
 * @param {string[]} itemIds - Array ID item (contoh: ["vocab_食べる", "kanji_水"])
 */
export const addItemsToSRS = (itemIds) => {
  const srsData = getSRSData();
  const now = new Date().getTime();
  // Set jatuh tempo awal = besok hari
  const tomorrow = now + (24 * 60 * 60 * 1000);
  let updated = false;

  itemIds.forEach(id => {
    if (!srsData[id]) {
      srsData[id] = { level: 0, nextReview: tomorrow };
      updated = true;
    }
  });

  if (updated) {
    saveSRSData(srsData);
  }
};

/**
 * Mengambil array berisi ID item yang harus direview hari ini (Jatuh tempo).
 */
export const getDueSRSItems = () => {
  const srsData = getSRSData();
  const now = new Date().getTime();
  const dueItems = [];
  
  for (const [itemId, data] of Object.entries(srsData)) {
    if (data.nextReview <= now) {
      dueItems.push(itemId);
    }
  }
  
  return dueItems;
};
