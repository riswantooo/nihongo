const fs = require('fs');
const path = require('path');

const mnnPath = path.join(__dirname, '../src', 'data', 'mnn.json');
let mnnData = JSON.parse(fs.readFileSync(mnnPath, 'utf8'));

mnnData.forEach(chapter => {
  if (!chapter.grammar) {
    chapter.grammar = [];
  }
  
  const currentCount = chapter.grammar.length;
  if (currentCount < 12) {
    for (let i = currentCount + 1; i <= 12; i++) {
      chapter.grammar.push({
        title: `Pola Kalimat Tambahan ${i} (Bab ${chapter.id})`,
        description: `Deskripsi tata bahasa untuk pola kalimat ${i} pada bab ${chapter.id}. Anda dapat mengganti ini dengan materi sebenarnya.`,
        examples: [
          {
            japanese: "ここに日本語の例文を書きます。",
            romaji: "Koko ni nihongo no reibun o kakimasu.",
            meaning: "Tulis contoh kalimat bahasa Jepang di sini."
          }
        ]
      });
    }
  }
});

fs.writeFileSync(mnnPath, JSON.stringify(mnnData, null, 2), 'utf8');
console.log('Successfully updated all chapters to have 12 bunpou entries.');
