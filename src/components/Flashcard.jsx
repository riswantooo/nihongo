import { useState, useEffect } from "react";

export default function Flashcard({
  character,
  romaji,
  onyomi_romaji,
  kunyomi_romaji,
  meaning,
  type,
  audioText,
  examples,
}) {
  const [isFlipped, setIsFlipped] = useState(false);
  const [backContent, setBackContent] = useState({
    romaji,
    onyomi_romaji,
    kunyomi_romaji,
    meaning,
    type,
    examples,
  });

  useEffect(() => {
    setTimeout(() => setIsFlipped(false), 0);
  }, [character]);

  const handleFlip = () => {
    if (!isFlipped) {
      setBackContent({
        romaji,
        onyomi_romaji,
        kunyomi_romaji,
        meaning,
        type,
        examples,
      });
    }
    setIsFlipped(!isFlipped);
  };

  const playAudio = (e) => {
    e.stopPropagation();
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(audioText || character);
      utterance.lang = "ja-JP";
      window.speechSynthesis.speak(utterance);
    }
  };

  const formatRomaji = (romajiString, onyomi, kunyomi) => {
    if (onyomi || kunyomi) {
      return (
        <div className="romaji-stack flashcard-romaji-stack">
          {onyomi && (
            <span>
              <strong className="romaji-label romaji-label-on">ON:</strong>{" "}
              {onyomi}
            </span>
          )}
          {kunyomi && (
            <span>
              <strong className="romaji-label romaji-label-kun">KUN:</strong>{" "}
              {kunyomi}
            </span>
          )}
        </div>
      );
    }
    if (!romajiString) return null;
    if (romajiString.includes(" / ")) {
      const [on, kun] = romajiString.split(" / ");
      return (
        <div className="romaji-stack flashcard-romaji-stack">
          <span>
            <strong className="romaji-label romaji-label-on">ON:</strong> {on}
          </span>
          <span>
            <strong className="romaji-label romaji-label-kun">KUN:</strong>{" "}
            {kun}
          </span>
        </div>
      );
    }
    return <span className="flashcard-romaji">{romajiString}</span>;
  };

  let dynamicFontSize = "8rem";
  if (character && character.length > 2) dynamicFontSize = "3.5rem";
  else if (character && character.length === 2) dynamicFontSize = "5rem";

  return (
    <div className="flashcard-shell">
      <div
        className={`flashcard-container ${isFlipped ? "flipped" : ""}`}
        onClick={handleFlip}
      >
        <div className="flashcard-inner">
          <div className="flashcard-front">
            <button
              onClick={playAudio}
              className="audio-btn no-print"
              style={{ position: "absolute", top: "15px", right: "15px" }}
            >
              ▶
            </button>
            <span
              className="flashcard-symbol"
              style={{ fontSize: dynamicFontSize }}
            >
              {character}
            </span>
          </div>
          <div
            className="flashcard-back"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              overflowY: "auto",
              padding: "20px",
            }}
          >
            {formatRomaji(
              backContent.romaji,
              backContent.onyomi_romaji,
              backContent.kunyomi_romaji,
            )}
            {backContent.meaning && (
              <span
                style={{
                  fontSize: "1.2rem",
                  color: "var(--text-secondary)",
                  marginTop: "0.5rem",
                  display: "block",
                }}
              >
                {backContent.meaning}
              </span>
            )}
            <span className="flashcard-type">{backContent.type}</span>

            {backContent.examples && backContent.examples.length > 0 && (
              <div
                style={{
                  marginTop: "1.5rem",
                  padding: "1rem",
                  background: "var(--bg-elevated)",
                  borderRadius: "2px",
                  border: "1px solid var(--border)",
                  textAlign: "left",
                  width: "100%",
                  cursor: "default",
                }}
                onClick={(e) => e.stopPropagation()} // Cegah kartu ke-flip lagi
              >
                <strong
                  style={{
                    fontSize: "0.85rem",
                    color: "var(--text-3)",
                    textTransform: "uppercase",
                    letterSpacing: "1px",
                  }}
                >
                  Contoh Kalimat:
                </strong>
                {backContent.examples.map((ex, i) => (
                  <div
                    key={i}
                    style={{
                      marginTop: "0.8rem",
                      display: "flex",
                      alignItems: "flex-start",
                      justifyContent: "space-between",
                      gap: "8px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color: "var(--text-1)",
                          fontSize: "1.1rem",
                          marginBottom: "2px",
                        }}
                      >
                        {ex.jp}
                      </div>
                      <div
                        style={{ color: "var(--text-2)", fontSize: "0.85rem" }}
                      >
                        {ex.kana}
                      </div>
                      <div
                        style={{
                          color: "var(--text-3)",
                          fontSize: "0.85rem",
                          fontStyle: "italic",
                          marginTop: "2px",
                        }}
                      >
                        "{ex.id}"
                      </div>
                    </div>
                    <button
                      onClick={(e) => {
                        e.stopPropagation();
                        if ("speechSynthesis" in window) {
                          const utterance = new SpeechSynthesisUtterance(
                            ex.kana || ex.jp,
                          );
                          utterance.lang = "ja-JP";
                          window.speechSynthesis.speak(utterance);
                        }
                      }}
                      style={{
                        background: "none",
                        border: "none",
                        color: "var(--accent)",
                        cursor: "pointer",
                        padding: "8px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                      title="Dengarkan kalimat"
                    >
                      ▶
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
