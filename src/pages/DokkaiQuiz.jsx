import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import mnnData from "../data/mnn.json";
import { useProgress } from "../context/ProgressContext";

export default function DokkaiQuiz() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);
  const lesson = mnnData.find((d) => d.id === lessonId);
  const { markTaskCompleted, isReviewMode } = useProgress();

  const [currentQIndex, setCurrentQIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState(null);
  const [isFinished, setIsFinished] = useState(false);
  const [score, setScore] = useState(0);

  const initQuiz = () => {
    setCurrentQIndex(0);
    setSelectedAnswer(null);
    setIsFinished(false);
    setScore(0);
  };

  if (!lesson || !lesson.dokkai || lesson.dokkai.length === 0) return null;

  const readingMaterial = lesson.dokkai[0];
  const questions = readingMaterial.questions;
  const currentQ = questions[currentQIndex];

  const handleAnswer = (option) => {
    if (selectedAnswer) return;
    setSelectedAnswer(option);

    if (option === currentQ.correctAnswer) {
      setScore((s) => s + 1);
    }

    setTimeout(() => {
      if (currentQIndex + 1 < questions.length) {
        setCurrentQIndex((i) => i + 1);
        setSelectedAnswer(null);
      } else {
        setIsFinished(true);
      }
    }, 1500);
  };

  if (isFinished) {
    const isPassed = score === questions.length;
    return (
      <div className="container animate-fade-in quiz-container">
        <div className="quiz-result">
          <h1>Hasil Ujian Membaca</h1>
          <p style={{ fontSize: "1.2rem", margin: "2rem 0" }}>
            Benar: {score} dari {questions.length}
          </p>

          {isPassed ? (
            <div>
              <div className="quiz-score pass">Lulus</div>
              <button
                onClick={() => {
                  markTaskCompleted(lessonId, "dokkai");
                  navigate(`/mnn/${lessonId}`);
                }}
                className="btn btn-primary"
                style={{ marginTop: "2rem" }}
              >
                Kembali ke Dashboard
              </button>
            </div>
          ) : (
            <div>
              <div className="quiz-score fail">Belum Lulus</div>
              <p className="quiz-message">
                Anda harus menjawab semua pertanyaan dengan benar untuk lulus
                tes membaca.
              </p>
              <div className="quiz-actions">
                <button onClick={initQuiz} className="btn btn-secondary">
                  Coba Lagi
                </button>
                {isReviewMode && (
                  <button
                    onClick={() => {
                      markTaskCompleted(lessonId, "dokkai");
                      navigate(`/mnn/${lessonId}`);
                    }}
                    className="bypass-btn"
                  >
                    Bypass: Tandai Selesai
                  </button>
                )}
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }

  const progressPercent = (currentQIndex / questions.length) * 100;

  return (
    <div className="container animate-fade-in quiz-container">
      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="quiz-header" style={{ marginBottom: "2rem" }}>
        <button
          onClick={() => navigate(`/mnn/${lessonId}`)}
          className="back-btn"
        >
          ← Kembali
        </button>
        <span>
          Pertanyaan {currentQIndex + 1} / {questions.length}
        </span>
      </div>

      <header className="section-header">
        <h1>Ujian Membaca (Dokkai)</h1>
      </header>

      <div className="reading-passage">{readingMaterial.text}</div>

      <div className="glass-card no-hover" style={{ padding: "2rem" }}>
        <div
          style={{
            fontWeight: "600",
            marginBottom: "1.5rem",
            fontSize: "1.2rem",
          }}
        >
          Pertanyaan:
          <br />
          <span
            className="text-secondary"
            style={{ fontSize: "1rem", fontWeight: "normal" }}
          >
            {currentQ.question}
          </span>
        </div>

        <div className="quiz-options" style={{ gridTemplateColumns: "1fr" }}>
          {currentQ.options.map((opt, i) => {
            let btnClass = "";
            if (selectedAnswer) {
              if (opt === currentQ.correctAnswer) {
                btnClass = "correct reveal-correct";
              } else if (opt === selectedAnswer) {
                btnClass = "wrong";
              }
            }

            return (
              <button
                key={i}
                onClick={() => handleAnswer(opt)}
                disabled={!!selectedAnswer}
                className={`quiz-option ${btnClass}`}
                style={{ textAlign: "left", justifyContent: "flex-start" }}
              >
                {opt}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
