import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import verbData from "../data/verb-conjugations.json";

const FORMS = [
  { key: "masu", label: "Masu-form (Sopan)" },
  { key: "te", label: "Te-form (Sambung/Minta)" },
  { key: "ta", label: "Ta-form (Lampau)" },
  { key: "nai", label: "Nai-form (Negatif)" },
  { key: "potential", label: "Bentuk Potensial (Bisa)" },
  { key: "passive", label: "Bentuk Pasif (Di-)" },
  { key: "causative", label: "Bentuk Kausatif (Menyuruh)" },
  { key: "ba", label: "Bentuk Syarat (Ba/Kalau)" },
  { key: "volitional", label: "Bentuk Maksud (Ayo)" },
];

export default function ConjugationTrainer() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  // Fungsi untuk mengacak array
  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateQuestion = () => {
    // 1. Pilih kata kerja acak
    const randomVerbIndex = Math.floor(Math.random() * verbData.length);
    const verb = verbData[randomVerbIndex];

    // 2. Pilih form/bentuk acak untuk ditanyakan
    const randomFormIndex = Math.floor(Math.random() * FORMS.length);
    const targetForm = FORMS[randomFormIndex];

    // Jawaban benar
    const correctAnswer = verb[targetForm.key];

    // 3. Buat pengecoh (distractors)
    let distractors = new Set();

    // Distractor tipe 1: Bentuk lain dari kata kerja yang sama
    const otherForms = FORMS.filter((f) => f.key !== targetForm.key);
    const shuffledOtherForms = shuffleArray(otherForms);
    distractors.add(verb[shuffledOtherForms[0].key]);
    distractors.add(verb[shuffledOtherForms[1].key]);

    // Distractor tipe 2: Bentuk yang sama dari kata kerja lain
    let attempts = 0;
    while (distractors.size < 3 && attempts < 20) {
      const randomOtherVerb =
        verbData[Math.floor(Math.random() * verbData.length)];
      if (randomOtherVerb.dictionary !== verb.dictionary) {
        distractors.add(randomOtherVerb[targetForm.key]);
      }
      attempts++;
    }

    const optionsArray = shuffleArray([
      correctAnswer,
      ...Array.from(distractors).slice(0, 3),
    ]);

    setCurrentQuestion({
      verb,
      targetForm,
      correctAnswer,
    });
    setOptions(optionsArray);
    setIsAnswered(false);
    setSelectedOption(null);
  };

  useEffect(() => {
    // Generate soal pertama saat komponen di-mount
    setTimeout(() => generateQuestion(), 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleAnswer = (option) => {
    if (isAnswered) return;

    setSelectedOption(option);
    setIsAnswered(true);

    if (option === currentQuestion.correctAnswer) {
      setScore((s) => s + 10);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNext = () => {
    generateQuestion();
  };

  if (!currentQuestion) return <div className="container">Loading...</div>;

  return (
    <div className="container animate-fade-in" style={{ maxWidth: "600px" }}>
      <button onClick={() => navigate("/quiz")} className="back-btn">
        ← Kembali ke Menu Ujian
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
          Conjugation Trainer
        </h1>
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "20px",
            marginTop: "10px",
            fontSize: "1.1rem",
            fontWeight: "bold",
          }}
        >
          <span style={{ color: "var(--text-2)" }}>
            Skor: <span style={{ color: "var(--accent)" }}>{score}</span>
          </span>
          <span style={{ color: "var(--text-2)" }}>
            Streak: <span style={{ color: "var(--accent-2)" }}>{streak}</span>
          </span>
        </div>
      </header>

      <div
        className="glass-card"
        style={{
          padding: "2.5rem 1.5rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <p
          className="text-secondary"
          style={{ marginBottom: "0.5rem", fontSize: "1.1rem" }}
        >
          Ubah kata kerja ini:
        </p>
        <h2
          style={{
            fontSize: "2.5rem",
            marginBottom: "0.2rem",
            color: "var(--accent-1)",
          }}
        >
          {currentQuestion.verb.dictionary}
        </h2>
        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--text-2)",
            marginBottom: "2rem",
          }}
        >
          ({currentQuestion.verb.meaning}) - Golongan{" "}
          {currentQuestion.verb.group}
        </p>

        <div
          style={{
            background: "var(--bg-elevated)",
            padding: "1rem",
            borderRadius: "2px",
            border: "1px solid var(--border)",
            display: "inline-block",
          }}
        >
          <p className="text-secondary" style={{ marginBottom: "5px" }}>
            Menjadi bentuk:
          </p>
          <h3
            style={{ margin: 0, fontSize: "1.5rem", color: "var(--accent-3)" }}
          >
            {currentQuestion.targetForm.label}
          </h3>
        </div>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "1rem",
          marginBottom: "2rem",
        }}
      >
        {options.map((opt, idx) => {
          let btnClass = "btn btn-ghost";
          let icon = null;

          if (isAnswered) {
            if (opt === currentQuestion.correctAnswer) {
              btnClass = "btn btn-primary"; // Benar disorot hijau
              icon = "✓ ";
            } else if (opt === selectedOption) {
              btnClass = "btn btn-danger"; // Salah disorot merah muda
              icon = "✗ ";
            } else {
              btnClass = "btn btn-ghost no-hover"; // Sisanya redup
            }
          } else if (opt === selectedOption) {
            btnClass = "btn btn-secondary"; // Saat ditekan sebelum feedback (jika ada delay)
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              className={btnClass}
              style={{
                padding: "1.5rem",
                fontSize: "1.4rem",
                fontWeight: "bold",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                opacity:
                  isAnswered &&
                  opt !== currentQuestion.correctAnswer &&
                  opt !== selectedOption
                    ? 0.5
                    : 1,
              }}
              disabled={isAnswered}
            >
              {icon} {opt}
            </button>
          );
        })}
      </div>

      {isAnswered && (
        <div className="animate-fade-in" style={{ textAlign: "center" }}>
          <button
            onClick={handleNext}
            className="btn btn-secondary btn-lg"
            style={{ minWidth: "250px" }}
          >
            Lanjut Soal Berikutnya &rarr;
          </button>
        </div>
      )}
    </div>
  );
}
