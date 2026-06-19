import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import charactersData from "../data/characters.json";
import grammarData from "../data/grammar-points.json";

export default function JLPTMiniTest() {
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const initQuiz = () => {
    // Ambil data pool
    const poolKanji = charactersData.kanji_n5 || [];
    const poolVocab = charactersData.vocabulary_n5 || [];
    const poolGrammar = grammarData.filter((g) => g.level === "N5");

    // Pastikan data cukup
    if (poolKanji.length < 5 || poolVocab.length < 5 || poolGrammar.length < 5)
      return;

    // Ambil masing-masing 5 soal secara acak
    const selectedKanji = shuffleArray(poolKanji).slice(0, 5);
    const selectedVocab = shuffleArray(poolVocab).slice(0, 5);
    const selectedGrammar = shuffleArray(poolGrammar).slice(0, 5);

    let generatedQuestions = [];

    // Format Soal Kanji
    selectedKanji.forEach((k) => {
      const distractors = shuffleArray(
        poolKanji.filter((d) => d.character !== k.character),
      ).slice(0, 3);
      const formatOpt = (opt) =>
        opt.kunyomi_romaji
          ? `KUN: ${opt.kunyomi_romaji} | ON: ${opt.onyomi_romaji}`
          : opt.meaning;
      generatedQuestions.push({
        type: "Kanji",
        question: k.character,
        correctAnswer: formatOpt(k),
        options: shuffleArray([formatOpt(k), ...distractors.map(formatOpt)]),
      });
    });

    // Format Soal Kosakata
    selectedVocab.forEach((v) => {
      const distractors = shuffleArray(
        poolVocab.filter((d) => d.character !== v.character),
      ).slice(0, 3);
      const formatOpt = (opt) => `${opt.romaji} (${opt.meaning})`;
      generatedQuestions.push({
        type: "Kosakata",
        question: v.character,
        correctAnswer: formatOpt(v),
        options: shuffleArray([formatOpt(v), ...distractors.map(formatOpt)]),
      });
    });

    // Format Soal Tata Bahasa (Grammar)
    selectedGrammar.forEach((g) => {
      const distractors = shuffleArray(
        poolGrammar.filter((d) => d.id !== g.id),
      ).slice(0, 3);
      const formatOpt = (opt) => opt.title_id; // Menggunakan arti dari pola grammar
      generatedQuestions.push({
        type: "Tata Bahasa",
        question: g.pattern,
        subtext: "Apa arti dari pola kalimat ini?",
        correctAnswer: formatOpt(g),
        options: shuffleArray([formatOpt(g), ...distractors.map(formatOpt)]),
      });
    });

    // Kocok ke-15 soal campuran ini
    setQuestions(shuffleArray(generatedQuestions));
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedAnswer(null);
  };

  useEffect(() => {
    setTimeout(() => {
      initQuiz();
    }, 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (option) => {
    if (selectedAnswer) return;

    setSelectedAnswer(option);

    const isCorrect = option === questions[currentIndex].correctAnswer;
    if (isCorrect) setScore((prev) => prev + 1);

    setTimeout(() => {
      if (currentIndex + 1 < questions.length) {
        setCurrentIndex((prev) => prev + 1);
        setSelectedAnswer(null);
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  if (questions.length === 0)
    return <div className="container">Memuat ujian campuran...</div>;

  if (isFinished) {
    const finalScore = Math.round((score / questions.length) * 100);
    const passed = finalScore >= 80;
    return (
      <div
        className="container animate-fade-in quiz-container"
        style={{ maxWidth: "700px" }}
      >
        <div
          className="quiz-result glass-card no-hover"
          style={{ textAlign: "center", padding: "3rem" }}
        >
          <div className="eyebrow">Simulasi JLPT N5</div>
          <h1 style={{ marginBottom: "1.5rem" }}>Ujian Selesai</h1>
          <div
            className={`quiz-score ${passed ? "pass" : "fail"}`}
            style={{
              fontSize: "4rem",
              width: "150px",
              height: "150px",
              margin: "0 auto 2rem",
            }}
          >
            {finalScore}
          </div>
          <p
            className="quiz-message"
            style={{ fontSize: "1.2rem", marginBottom: "2rem" }}
          >
            Anda menjawab benar <strong>{score}</strong> dari{" "}
            <strong>{questions.length}</strong> soal campuran (Kanji, Kosakata,
            Grammar).
            <br />
            <br />
            {passed ? (
              <span className="text-matcha">
                Luar biasa! Anda sangat siap menghadapi JLPT N5 sebenarnya.
              </span>
            ) : (
              <span className="text-sakura">
                Nilai kelulusan minimum adalah 80. Terus berlatih!
              </span>
            )}
          </p>
          <div
            className="quiz-actions"
            style={{ display: "flex", justifyContent: "center", gap: "1rem" }}
          >
            <Link to="/quiz" className="btn btn-ghost">
              Menu Ujian
            </Link>
            <button onClick={initQuiz} className="btn btn-primary">
              ↺ Ulangi Simulasi
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progressPercent = (currentIndex / questions.length) * 100;

  // Warna aksen berdasarkan tipe soal
  let typeColor = "var(--accent)";
  if (currentQ.type === "Kanji") typeColor = "var(--kiniro)";
  if (currentQ.type === "Kosakata") typeColor = "var(--matcha)";
  if (currentQ.type === "Tata Bahasa") typeColor = "var(--fuji)";

  return (
    <div
      className="container animate-fade-in quiz-container"
      style={{ maxWidth: "700px" }}
    >
      <header
        className="section-header study-hero glass-card no-hover"
        style={{ padding: "1.5rem", marginBottom: "1rem" }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "10px",
          }}
        >
          <h1 style={{ margin: 0, fontSize: "1.8rem" }}>JLPT Mini-Test N5</h1>
        </div>
      </header>

      <div className="quiz-progress-bar" style={{ marginBottom: "1rem" }}>
        <div
          className="quiz-progress-fill"
          style={{
            width: `${progressPercent}%`,
            background: typeColor,
            transition: "background 0.5s ease, width 0.3s ease",
          }}
        ></div>
      </div>

      <div className="quiz-header" style={{ marginBottom: "2rem" }}>
        <span style={{ fontSize: "1.1rem" }}>
          Soal {currentIndex + 1} / {questions.length}
        </span>
        <span
          style={{
            background: typeColor,
            color: "#fff",
            padding: "4px 12px",
            borderRadius: "2px",
            fontSize: "0.9rem",
            fontWeight: "bold",
            textTransform: "uppercase",
          }}
        >
          Seksi: {currentQ.type}
        </span>
      </div>

      <div
        className="glass-card"
        style={{
          padding: "3rem 2rem",
          textAlign: "center",
          marginBottom: "2rem",
          minHeight: "200px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {currentQ.subtext && (
          <p className="text-secondary" style={{ marginBottom: "0.5rem" }}>
            {currentQ.subtext}
          </p>
        )}
        <h2
          style={{
            fontSize: currentQ.type === "Tata Bahasa" ? "2.5rem" : "4rem",
            margin: 0,
            color: "var(--text)",
          }}
        >
          {currentQ.question}
        </h2>
      </div>

      <div
        className="quiz-options"
        style={{ display: "grid", gridTemplateColumns: "1fr", gap: "1rem" }}
      >
        {currentQ.options.map((opt, i) => {
          let btnClass = "btn btn-ghost";
          let icon = null;

          if (selectedAnswer) {
            if (opt === currentQ.correctAnswer) {
              btnClass = "btn btn-primary";
              icon = "✓ ";
            } else if (opt === selectedAnswer) {
              btnClass = "btn btn-danger";
              icon = "✗ ";
            } else {
              btnClass = "btn btn-ghost no-hover";
            }
          }

          return (
            <button
              key={i}
              onClick={() => handleAnswer(opt)}
              disabled={!!selectedAnswer}
              className={btnClass}
              style={{
                padding: "1.2rem",
                fontSize: "1.1rem",
                textAlign: "left",
                display: "flex",
                alignItems: "center",
                opacity:
                  selectedAnswer &&
                  opt !== currentQ.correctAnswer &&
                  opt !== selectedAnswer
                    ? 0.5
                    : 1,
              }}
            >
              {icon} {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
