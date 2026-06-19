const fs = require('fs');
const path = require('path');

const mnnPath = path.join(__dirname, '../src', 'data', 'mnn.json');
let mnnData = JSON.parse(fs.readFileSync(mnnPath, 'utf8'));

mnnData.forEach(chapter => {
  if (chapter.grammar) {
    // Remove the placeholders
    chapter.grammar = chapter.grammar.filter(g => !g.title.startsWith('Pola Kalimat Tambahan'));
  }
});

fs.writeFileSync(mnnPath, JSON.stringify(mnnData, null, 2), 'utf8');
console.log('Removed all placeholders.');
