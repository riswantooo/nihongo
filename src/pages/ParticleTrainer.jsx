import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import particlesData from "../data/particles.json";

export default function ParticleTrainer() {
  const navigate = useNavigate();
  const [currentQuestion, setCurrentQuestion] = useState(null);
  const [options, setOptions] = useState([]);
  const [isAnswered, setIsAnswered] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const shuffleArray = (array) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
  };

  const generateQuestion = () => {
    // 1. Pilih partikel secara acak (pastikan memiliki examples)
    const validParticles = particlesData.filter(
      (p) => p.examples && p.examples.length > 0,
    );
    const randomParticleObj =
      validParticles[Math.floor(Math.random() * validParticles.length)];
    const targetParticle = randomParticleObj.particle;

    // 2. Pilih kalimat acak dari partikel tersebut
    const randomExample =
      randomParticleObj.examples[
        Math.floor(Math.random() * randomParticleObj.examples.length)
      ];

    // 3. Buat kalimat rumpang (cari kemunculan pertama partikel dan ganti dengan "___")
    // Catatan: Ini adalah implementasi sederhana. Untuk bahasa Jepang, ini bisa jadi tricky karena kanji/kata
    // bisa kebetulan mengandung huruf hiragana yang sama. Kita batasi hanya mengganti exact match dari kanan/kiri
    // atau sekadar replace 1 kejadian.

    // Teknik aman: Cari partikel dengan spasi imajiner (biasanya di teks asli tanpa spasi, kita replace occurrence terakhir atau occurrence yang paling mungkin).
    // Untuk PoC sederhana, kita gunakan replace pertama yang muncul. Jika error, kita ganti logikanya.
    let blankedJp = randomExample.jp.replace(
      targetParticle,
      '<span class="blank-space">___</span>',
    );
    let blankedKana = randomExample.kana.replace(targetParticle, "___");

    // Jika replace gagal (karena partikel nyempil di kata lain, untuk PoC ini bisa ditoleransi)
    if (blankedJp === randomExample.jp) {
      // Fallback
      blankedJp =
        randomExample.jp + " (Partikel " + targetParticle + " hilang)";
    }

    // 4. Buat pengecoh
    let distractors = new Set();
    const allParticles = particlesData.map((p) => p.particle);

    while (distractors.size < 3) {
      const randomP =
        allParticles[Math.floor(Math.random() * allParticles.length)];
      if (randomP !== targetParticle) {
        distractors.add(randomP);
      }
    }

    const optionsArray = shuffleArray([
      targetParticle,
      ...Array.from(distractors),
    ]);

    setCurrentQuestion({
      particleObj: randomParticleObj,
      example: randomExample,
      blankedJp,
      blankedKana,
      correctAnswer: targetParticle,
    });

    setOptions(optionsArray);
    setIsAnswered(false);
    setSelectedOption(null);
  };

  useEffect(() => {
    setTimeout(() => {
      generateQuestion();
    }, 0);
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

  if (!currentQuestion) return <div className="container">Loading...</div>;

  return (
    <div className="container animate-fade-in" style={{ maxWidth: "650px" }}>
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
          Particle Trainer
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
          padding: "2rem 1.5rem",
          textAlign: "center",
          marginBottom: "2rem",
        }}
      >
        <p
          className="text-secondary"
          style={{ marginBottom: "1rem", fontSize: "1.1rem" }}
        >
          Isi bagian yang rumpang:
        </p>

        {/* Teks Jepang Rumpang */}
        <h2
          style={{
            fontSize: "2rem",
            marginBottom: "0.5rem",
            color: "var(--accent-1)",
            lineHeight: "1.5",
          }}
          dangerouslySetInnerHTML={{ __html: currentQuestion.blankedJp }}
        />

        <p
          style={{
            fontSize: "1.2rem",
            color: "var(--text-2)",
            marginBottom: "1.5rem",
          }}
        >
          {currentQuestion.blankedKana}
        </p>
        <p
          style={{
            fontSize: "1.1rem",
            fontStyle: "italic",
            color: "var(--text-3)",
            padding: "0 1rem",
          }}
        >
          "{currentQuestion.example.id}"
        </p>
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
              btnClass = "btn btn-primary";
              icon = "✓ ";
            } else if (opt === selectedOption) {
              btnClass = "btn btn-danger";
              icon = "✗ ";
            } else {
              btnClass = "btn btn-ghost no-hover";
            }
          } else if (opt === selectedOption) {
            btnClass = "btn btn-secondary";
          }

          return (
            <button
              key={idx}
              onClick={() => handleAnswer(opt)}
              className={btnClass}
              style={{
                padding: "1.2rem",
                fontSize: "1.8rem",
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
        <div
          className="glass-card animate-fade-in"
          style={{
            padding: "1.5rem",
            marginBottom: "2rem",
            textAlign: "left",
            borderLeft: "4px solid var(--kiniro)",
          }}
        >
          <h3
            style={{
              display: "flex",
              alignItems: "center",
              gap: "8px",
              marginBottom: "0.5rem",
              color: "var(--kiniro)",
            }}
          >
            Pembahasan Partikel: {currentQuestion.correctAnswer}
          </h3>
          <p>
            <strong>Fungsi:</strong> {currentQuestion.particleObj.meaning}
          </p>
          <p style={{ marginTop: "0.5rem" }}>
            <strong>Aturan:</strong> {currentQuestion.particleObj.rules}
          </p>
        </div>
      )}

      {isAnswered && (
        <div className="animate-fade-in" style={{ textAlign: "center" }}>
          <button
            onClick={generateQuestion}
            className="btn btn-secondary btn-lg"
            style={{ minWidth: "250px" }}
          >
            Lanjut Soal Berikutnya &rarr;
          </button>
        </div>
      )}

      <style
        dangerouslySetInnerHTML={{
          __html: `
        .blank-space {
          display: inline-block;
          min-width: 50px;
          border-bottom: 2px solid var(--text);
          color: transparent;
          margin: 0 4px;
        }
      `,
        }}
      />
    </div>
  );
}
