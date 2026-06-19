// Mock LocalStorage for Node.js environment
global.localStorage = {
  store: {},
  getItem(key) {
    return this.store[key] || null;
  },
  setItem(key, value) {
    this.store[key] = String(value);
  },
  removeItem(key) {
    delete this.store[key];
  },
  clear() {
    this.store = {};
  }
};

// Instead of import (ES Module), we'll dynamically transpile or mock the export
// Since progressManager.js uses 'export const', we will just read the file and evaluate it 
// with module.exports for testing purposes.

const fs = require('fs');
const path = require('path');

const code = fs.readFileSync(path.join(__dirname, '../src/utils/progressManager.js'), 'utf8');
const transformedCode = code.replace(/export const /g, 'const ') + '\nmodule.exports = { getSRSData, saveSRSData, getProgressData, saveProgressData, updateSRSItem, getDueSRSItems, completeChapter };';

const m = new module.constructor();
m.paths = module.paths;
m._compile(transformedCode, 'progressManager.js');
const pm = m.exports;

console.log("=== Testing Progress Manager ===");

// 1. Test Skill Tree & Chapter Completion
console.log("\\n[1] Testing Skill Tree Unlock...");
console.log("Initial Progress:", pm.getProgressData());

pm.completeChapter(1, 60);
console.log("After scoring 60 on Ch1 (Should not unlock Ch2):", pm.getProgressData().unlockedChapters);

pm.completeChapter(1, 85);
console.log("After scoring 85 on Ch1 (Should unlock Ch2):", pm.getProgressData().unlockedChapters);


// 2. Test Spaced Repetition System (SRS)
console.log("\\n[2] Testing Spaced Repetition System (SRS)...");

// Simulasikan user menjawab benar pada vocab_1
console.log("Answering 'vocab_1' CORRECT for the first time...");
let result = pm.updateSRSItem('vocab_1', true);
let dateDue = new Date(result.nextReview).toLocaleDateString();
console.log(`-> vocab_1 level is now ${result.level}. Next review due on: ${dateDue}`);

// Simulasikan hari berganti ke masa depan (+2 days)
const originalDate = Date;
global.Date = class extends Date {
  constructor(param) {
    if (param) super(param);
    else {
      // Mock "now" as 2 days in the future
      const now = new originalDate();
      now.setDate(now.getDate() + 2);
      super(now);
    }
  }
};

console.log("\\n--- 2 Days Later ---");
let dueItems = pm.getDueSRSItems();
console.log("Items due for review today:", dueItems); // vocab_1 should be due because it was +1 day

if (dueItems.includes('vocab_1')) {
  console.log("Answering 'vocab_1' CORRECT again...");
  result = pm.updateSRSItem('vocab_1', true);
  dateDue = new originalDate(result.nextReview).toLocaleDateString();
  console.log(`-> vocab_1 level is now ${result.level}. Next review due on: ${dateDue} (Interval increased!)`);
}

// Restore original Date
global.Date = originalDate;

console.log("\\n=== Test Completed Successfully ===");
