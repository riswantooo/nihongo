// cleanupMNNDuplicates.cjs
// Remove duplicate vocab entries within MNN lessons

const fs = require('fs');
const path = require('path');

const mnnFile = path.join(__dirname, '../src', 'data', 'mnn.json');
const data = JSON.parse(fs.readFileSync(mnnFile, 'utf8'));

let totalRemoved = 0;
const removedLog = [];

for (const lesson of data) {
  const before = lesson.vocabulary.length;
  const seen = new Set();
  const deduped = [];
  for (const v of lesson.vocabulary) {
    const key = v.character;
    if (seen.has(key)) {
      removedLog.push(`Bab ${lesson.id}: removed duplicate "${key}"`);
      totalRemoved++;
    } else {
      seen.add(key);
      deduped.push(v);
    }
  }
  lesson.vocabulary = deduped;
}

fs.writeFileSync(mnnFile, JSON.stringify(data, null, 2));

console.log(`Removed ${totalRemoved} duplicates:`);
removedLog.forEach(l => console.log('  ' + l));

// Verify
const newCounts = data.reduce((s, l) => s + l.vocabulary.length, 0);
console.log(`\nTotal MNN vocab: ${newCounts}`);
