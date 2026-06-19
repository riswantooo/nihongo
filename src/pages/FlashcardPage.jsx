import { useState, useEffect, useCallback } from "react";
import charactersData from "../data/characters.json";
import Flashcard from "../components/Flashcard";

export default function FlashcardPage() {
  const [allCharacters] = useState(() => {
    let combined = [];
    if (charactersData.hiragana)
      combined = [
        ...combined,
        ...charactersData.hiragana.map((c) => ({ ...c, category: "Hiragana" })),
      ];
    if (charactersData.katakana)
      combined = [
        ...combined,
        ...charactersData.katakana.map((c) => ({ ...c, category: "Katakana" })),
      ];
    if (charactersData.kanji_n5)
      combined = [
        ...combined,
        ...charactersData.kanji_n5.map((c) => ({ ...c, category: "Kanji N5" })),
      ];
    if (charactersData.vocabulary_n5)
      combined = [
        ...combined,
        ...charactersData.vocabulary_n5.map((c) => ({
          ...c,
          category: "Kosakata N5",
        })),
      ];
    if (charactersData.kanji_n4)
      combined = [
        ...combined,
        ...charactersData.kanji_n4.map((c) => ({ ...c, category: "Kanji N4" })),
      ];
    if (charactersData.vocabulary_n4)
      combined = [
        ...combined,
        ...charactersData.vocabulary_n4.map((c) => ({
          ...c,
          category: "Kosakata N4",
        })),
      ];
    return combined.sort(() => 0.5 - Math.random());
  });

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextCard = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % allCharacters.length);
  }, [allCharacters.length]);

  const prevCard = useCallback(() => {
    setCurrentIndex((prev) =>
      prev === 0 ? allCharacters.length - 1 : prev - 1,
    );
  }, [allCharacters.length]);

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "ArrowRight") nextCard();
      else if (e.key === "ArrowLeft") prevCard();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [nextCard, prevCard]);

  const currentCharacter = allCharacters[currentIndex];

  if (!currentCharacter)
    return <div className="container">Memuat kartu...</div>;

  return (
    <div className="container animate-fade-in study-shell">
      <header className="section-header study-hero glass-card no-hover">
        <div className="eyebrow">Latihan Mandiri</div>
        <h1>Flashcard Acak</h1>
        <p>
          Klik kartu untuk membalik. Gunakan panah Kiri/Kanan pada keyboard
          untuk navigasi.
        </p>
      </header>

      <div className="flashcard-wrapper">
        <div className="flashcard-counter">
          Kartu {currentIndex + 1} / {allCharacters.length}
        </div>

        <Flashcard
          character={currentCharacter.character}
          romaji={currentCharacter.romaji}
          onyomi_romaji={currentCharacter.onyomi_romaji}
          kunyomi_romaji={currentCharacter.kunyomi_romaji}
          meaning={currentCharacter.meaning}
          audioText={currentCharacter.kana || currentCharacter.audioText}
          type={currentCharacter.category}
          examples={currentCharacter.examples}
        />

        <div className="flashcard-nav">
          <button
            className="flashcard-nav-btn"
            onClick={prevCard}
            aria-label="Sebelumnya"
          >
            ←
          </button>
          <button
            className="flashcard-nav-btn"
            onClick={nextCard}
            aria-label="Selanjutnya"
          >
            →
          </button>
        </div>
      </div>
    </div>
  );
}
