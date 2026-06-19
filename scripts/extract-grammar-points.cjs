const fs = require('fs');
const path = require('path');

const mnnPath = path.join(__dirname, '../src/data/mnn.json');
const outputPath = path.join(__dirname, '../src/data/grammar-points.json');

const mnnData = JSON.parse(fs.readFileSync(mnnPath, 'utf8'));

const grammarPoints = [];
let pointCounter = 1;

mnnData.forEach(chapter => {
  // Determine level based on chapter ID (1-25: N5, 26-50: N4)
  const level = chapter.id <= 25 ? "N5" : "N4";
  
  if (chapter.grammar && Array.isArray(chapter.grammar)) {
    chapter.grammar.forEach((g, index) => {
      
      const pointId = `${level.toLowerCase()}-grammar-${chapter.id}-${index + 1}`;
      
      const newPoint = {
        id: pointId,
        level: level,
        chapter: chapter.id,
        pattern: g.title,
        title_id: g.title, // Temporarily use title as title_id until manually edited
        formation: [
          {
            "type": "V-te",
            "rule": "kata kerja bentuk te",
            "example": ""
          }
        ],
        examples: g.examples || [],
        notes: "Catatan khusus tentang pola kalimat ini dapat ditambahkan di sini.",
        common_mistakes: "Kesalahan umum yang sering terjadi saat menggunakan pola kalimat ini.",
        quiz: [
          {
            "question": "Kuis latihan untuk pola " + g.title,
            "options": ["Opsi 1", "Opsi 2", "Opsi 3", "Opsi 4"],
            "answer": "Opsi 1",
            "explanation": "Penjelasan mengapa Opsi 1 benar."
          }
        ]
      };
      
      grammarPoints.push(newPoint);
      pointCounter++;
    });
  }
});

fs.writeFileSync(outputPath, JSON.stringify(grammarPoints, null, 2));

console.log(`Berhasil mengekstrak ${grammarPoints.length} grammar points ke grammar-points.json`);
