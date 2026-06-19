import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import charactersData from "../data/characters.json";
import grammarPointsData from "../data/grammar-points.json";
import mnnData from "../data/mnn.json";
import { getDueSRSItems, updateSRSItem } from "../utils/progressManager";

export default function ReviewMode() {
  const navigate = useNavigate();
  const [dueQueue, setDueQueue] = useState([]);
  const [currentItem, setCurrentItem] = useState(null);
  const [isFlipped, setIsFlipped] = useState(false);
  const [sessionScore, setSessionScore] = useState({ correct: 0, wrong: 0 });

  // Fungsi utilitas untuk resolusi ID ke Data Asli
  // Asumsi ID berformat: "vocab_食べる" atau "kanji_水"
  const resolveItemData = (itemId) => {
    const isVocab = itemId.startsWith("vocab_");
    const isKanji = itemId.startsWith("kanji_");
    const isGrammar = itemId.startsWith("grammar_");

    if (isGrammar) {
      const grammarId = itemId.replace("grammar_", "");
      return (
        grammarPointsData.find((g) => g.id === grammarId) || {
          pattern: "Unknown",
          notes: "Data tidak ditemukan",
        }
      );
    }

    const searchTerm = itemId.split("_")[1];

    if (isVocab) {
      const allVocab = [
        ...(charactersData.vocabulary_n5 || []),
        ...(charactersData.vocabulary_n4 || []),
      ];
      let found = allVocab.find((v) => v.character === searchTerm);
      if (!found) {
        for (const chapter of mnnData) {
          if (chapter.vocabulary) {
            const mnnVocab = chapter.vocabulary.find(
              (v) => v.character === searchTerm,
            );
            if (mnnVocab) {
              found = mnnVocab;
              break;
            }
          }
        }
      }
      return (
        found || {
          character: searchTerm,
          romaji: "?",
          meaning: "Data tidak ditemukan",
        }
      );
    }

    if (isKanji) {
      const allKanji = [
        ...(charactersData.kanji_n5 || []),
        ...(charactersData.kanji_n4 || []),
      ];
      return (
        allKanji.find((k) => k.character === searchTerm) || {
          character: searchTerm,
          meaning: "Data tidak ditemukan",
        }
      );
    }

    return { character: "Unknown", meaning: "Unknown" };
  };

  const loadQueue = () => {
    const items = getDueSRSItems();
    setDueQueue(items);
    if (items.length > 0) {
      setCurrentItem({ id: items[0], data: resolveItemData(items[0]) });
    } else {
      setCurrentItem(null);
    }
    setIsFlipped(false);
  };

  useEffect(() => {
    setTimeout(() => loadQueue(), 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const playAudio = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleAnswer = (isCorrect) => {
    // Panggil logika otak SRS (progressManager)
    updateSRSItem(currentItem.id, isCorrect);

    setSessionScore((prev) => ({
      ...prev,
      [isCorrect ? "correct" : "wrong"]:
        prev[isCorrect ? "correct" : "wrong"] + 1,
    }));

    // Lanjut ke kartu berikutnya
    let nextQueue = dueQueue.slice(1);

    // Hukuman SRS: Jika salah, masukkan kembali ke antrean paling belakang agar diulang hari ini
    if (!isCorrect) {
      nextQueue.push(currentItem.id);
    }

    setDueQueue(nextQueue);

    if (nextQueue.length > 0) {
      setCurrentItem({ id: nextQueue[0], data: resolveItemData(nextQueue[0]) });
      setIsFlipped(false);
    } else {
      setCurrentItem(null); // Selesai
    }
  };

  if (!currentItem && dueQueue.length === 0) {
    return (
      <div
        className="container animate-fade-in"
        style={{ textAlign: "center", marginTop: "4rem" }}
      >
        <span
          style={{
            fontSize: "64px",
            color: "var(--accent)",
            display: "block",
            marginBottom: "1rem",
          }}
        >
          ✓
        </span>
        <h1>Selamat! Anda Sudah Selesai</h1>
        <p
          className="text-secondary"
          style={{ marginBottom: "2rem", fontSize: "1.1rem" }}
        >
          Tidak ada lagi kartu memori yang jatuh tempo untuk direview hari ini.
          Anda bebas bersantai atau mempelajari materi bab baru!
        </p>

        <button onClick={() => navigate("/")} className="btn btn-ghost">
          Kembali ke Beranda
        </button>
      </div>
    );
  }

  return (
    <div className="container animate-fade-in" style={{ maxWidth: "600px" }}>
      <button onClick={() => navigate("/")} className="back-btn">
        ← Keluar dari Review
      </button>

      <header className="section-header" style={{ marginBottom: "1rem" }}>
        <h1
          style={{
            fontSize: "1.8rem",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          SRS Review Mode
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "15px",
            marginTop: "10px",
            fontSize: "1rem",
            fontWeight: "bold",
          }}
        >
          <span style={{ color: "var(--text-2)" }}>
            Sisa Kartu:{" "}
            <span style={{ color: "var(--accent)" }}>{dueQueue.length}</span>
          </span>
          <span style={{ color: "var(--matcha)" }}>
            Benar: {sessionScore.correct}
          </span>
          <span style={{ color: "var(--sakura)" }}>
            Salah: {sessionScore.wrong}
          </span>
        </div>
      </header>

      {/* FLASHCARD UI */}
      <div
        className="glass-card"
        style={{
          padding: "4rem 2rem",
          textAlign: "center",
          marginBottom: "2rem",
          minHeight: "300px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          position: "relative",
          cursor: isFlipped ? "default" : "pointer",
        }}
        onClick={() => !isFlipped && setIsFlipped(true)}
      >
        <button
          className="audio-btn"
          style={{ position: "absolute", top: "10px", right: "10px" }}
          onClick={(e) => {
            e.stopPropagation();
            playAudio(currentItem.data.character);
          }}
        >
          ▶
        </button>

        <p
          className="text-secondary"
          style={{
            position: "absolute",
            top: "15px",
            left: "15px",
            fontSize: "0.85rem",
            textTransform: "uppercase",
            letterSpacing: "1px",
          }}
        >
          {currentItem.id.startsWith("grammar")
            ? "Tata Bahasa"
            : currentItem.id.startsWith("vocab")
              ? "Kosakata"
              : "Kanji"}
        </p>

        {/* FRONT SIDE */}
        <h2
          style={{
            fontSize: currentItem.id.startsWith("grammar") ? "2rem" : "3.5rem",
            marginBottom: "0.5rem",
            color: "var(--text)",
          }}
        >
          {currentItem.id.startsWith("grammar")
            ? currentItem.data.pattern
            : currentItem.data.character}
        </h2>

        {!isFlipped && (
          <div
            className="animate-fade-in"
            style={{ marginTop: "2rem", color: "var(--text-3)" }}
          >
            Tap atau Klik kartu untuk memunculkan jawaban
          </div>
        )}

        {/* BACK SIDE */}
        {isFlipped && (
          <div
            className="animate-fade-in"
            style={{
              marginTop: "1.5rem",
              borderTop: "2px solid var(--border)",
              paddingTop: "1.5rem",
              width: "100%",
            }}
          >
            {currentItem.id.startsWith("grammar") ? (
              <div style={{ textAlign: "left" }}>
                <h3
                  style={{
                    color: "var(--accent)",
                    marginBottom: "0.5rem",
                    fontSize: "1.3rem",
                  }}
                >
                  Penjelasan
                </h3>
                <p
                  style={{
                    color: "var(--text-2)",
                    lineHeight: "1.6",
                    marginBottom: "1.5rem",
                  }}
                >
                  {currentItem.data.notes}
                </p>

                {currentItem.data.formation && (
                  <>
                    <h3
                      style={{
                        color: "var(--matcha)",
                        marginBottom: "0.5rem",
                        fontSize: "1.1rem",
                      }}
                    >
                      Rumus Pembentukan
                    </h3>
                    <div
                      style={{
                        background: "var(--bg-elevated)",
                        padding: "var(--sp-4)",
                        borderRadius: "2px",
                        marginBottom: "1.5rem",
                      }}
                    >
                      {currentItem.data.formation.map((f, i) => (
                        <div
                          key={i}
                          style={{
                            marginBottom:
                              i < currentItem.data.formation.length - 1
                                ? "1rem"
                                : "0",
                          }}
                        >
                          <div
                            style={{
                              fontWeight: "bold",
                              color: "var(--text)",
                              marginBottom: "2px",
                            }}
                          >
                            {f.type}
                          </div>
                          <div
                            style={{
                              color: "var(--text-2)",
                              marginBottom: "4px",
                            }}
                          >
                            {f.rule}
                          </div>
                          <div
                            style={{
                              fontSize: "0.85rem",
                              color: "var(--text-3)",
                              fontStyle: "italic",
                            }}
                          >
                            "{f.example}"
                          </div>
                        </div>
                      ))}
                    </div>
                  </>
                )}

                {currentItem.data.common_mistakes && (
                  <>
                    <h3
                      style={{
                        color: "var(--sakura)",
                        marginBottom: "0.5rem",
                        fontSize: "1.1rem",
                      }}
                    >
                      Kesalahan Umum
                    </h3>
                    <p
                      style={{
                        color: "var(--text-2)",
                        backgroundColor: "var(--red-subtle)",
                        padding: "1rem",
                        borderRadius: "2px",
                        borderLeft: "4px solid var(--sakura)",
                        marginBottom: "1.5rem",
                        lineHeight: "1.5",
                      }}
                    >
                      {currentItem.data.common_mistakes}
                    </p>
                  </>
                )}

                {currentItem.data.quiz && currentItem.data.quiz.length > 0 && (
                  <div
                    style={{
                      padding: "var(--sp-4)",
                      borderRadius: "2px",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <h4
                      style={{ color: "var(--fuji)", marginBottom: "0.5rem" }}
                    >
                      Self-Check Quiz:
                    </h4>
                    <p style={{ color: "var(--text-2)", marginBottom: "1rem" }}>
                      {currentItem.data.quiz[0].question}
                    </p>
                    <div style={{ fontSize: "0.9rem", color: "var(--text-3)" }}>
                      <strong>Jawaban:</strong>{" "}
                      <span style={{ color: "var(--matcha)" }}>
                        {currentItem.data.quiz[0].answer}
                      </span>
                      <br />
                      <span style={{ fontStyle: "italic", opacity: 0.8 }}>
                        ({currentItem.data.quiz[0].explanation})
                      </span>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <>
                <p
                  style={{
                    fontSize: "1.5rem",
                    color: "var(--accent)",
                    marginBottom: "0.5rem",
                  }}
                >
                  {currentItem.data.romaji ||
                    (currentItem.data.kunyomi_romaji
                      ? `Kun: ${currentItem.data.kunyomi_romaji} | On: ${currentItem.data.onyomi_romaji}`
                      : "")}
                </p>
                <p style={{ fontSize: "1.2rem", color: "var(--text-2)" }}>
                  {currentItem.data.meaning}
                </p>
                {/* Jika ada contoh kalimat */}
                {currentItem.data.examples &&
                  currentItem.data.examples.length > 0 && (
                    <div
                      style={{
                        marginTop: "1.5rem",
                        background: "var(--bg-elevated)",
                        padding: "1rem",
                        borderRadius: "2px",
                        textAlign: "left",
                        cursor: "default",
                      }}
                      onClick={(e) => e.stopPropagation()}
                    >
                      <div
                        style={{
                          display: "flex",
                          alignItems: "flex-start",
                          justifyContent: "space-between",
                          gap: "8px",
                        }}
                      >
                        <div>
                          <p
                            style={{
                              fontSize: "0.9rem",
                              color: "var(--text-2)",
                              marginBottom: "5px",
                            }}
                          >
                            {currentItem.data.examples[0].jp}
                          </p>
                          <p
                            style={{
                              fontSize: "0.85rem",
                              color: "var(--text-3)",
                              fontStyle: "italic",
                            }}
                          >
                            "{currentItem.data.examples[0].id}"
                          </p>
                        </div>
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            if ("speechSynthesis" in window) {
                              const utterance = new SpeechSynthesisUtterance(
                                currentItem.data.examples[0].kana ||
                                  currentItem.data.examples[0].jp,
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
                    </div>
                  )}
              </>
            )}
          </div>
        )}
      </div>

      {/* ACTION BUTTONS */}
      {isFlipped ? (
        <div
          className="animate-fade-in"
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "1rem",
          }}
        >
          <button
            onClick={() => handleAnswer(false)}
            className="btn btn-danger btn-lg"
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            ✗<span style={{ fontSize: "1rem" }}>Lupa / Salah</span>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: "normal",
                opacity: 0.8,
              }}
            >
              (Ulang besok)
            </span>
          </button>

          <button
            onClick={() => handleAnswer(true)}
            className="btn btn-primary btn-lg"
            style={{ display: "flex", flexDirection: "column", gap: "5px" }}
          >
            ✓<span style={{ fontSize: "1rem" }}>Ingat / Benar</span>
            <span
              style={{
                fontSize: "0.75rem",
                fontWeight: "normal",
                opacity: 0.8,
              }}
            >
              (Interval naik)
            </span>
          </button>
        </div>
      ) : (
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => setIsFlipped(true)}
            className="btn btn-secondary btn-lg btn-block"
          >
            Tampilkan Jawaban
          </button>
        </div>
      )}
    </div>
  );
}
