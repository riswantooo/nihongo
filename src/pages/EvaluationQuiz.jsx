import { useParams, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import charactersData from "../data/characters.json";
import { useProgress } from "../context/ProgressContext";

export default function EvaluationQuiz() {
  const { type } = useParams();
  const { updateQuizScore } = useProgress();

  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState(null);

  const initQuiz = () => {
    const rawData = charactersData[type] || [];
    if (rawData.length === 0) return;

    const shuffledData = [...rawData]
      .sort(() => 0.5 - Math.random())
      .slice(0, 50);

    const generatedQuestions = shuffledData.map((item) => {
      const distractors = [...rawData]
        .filter((d) => d.character !== item.character)
        .sort(() => 0.5 - Math.random())
        .slice(0, 3);

      const formatOption = (opt) => {
        let reading = opt.romaji;
        if (reading && reading.includes(" / ")) {
          const parts = reading.split(" / ");
          reading = `ON: ${parts[0]} | KUN: ${parts[1]}`;
        }
        return opt.meaning ? `${reading} (${opt.meaning})` : reading;
      };

      const options = [item, ...distractors]
        .map(formatOption)
        .sort(() => 0.5 - Math.random());

      return {
        questionChar: item.character,
        correctAnswer: formatOption(item),
        options,
      };
    });

    setQuestions(generatedQuestions);
    setCurrentIndex(0);
    setScore(0);
    setIsFinished(false);
    setSelectedAnswer(null);
  };

  useEffect(() => {
    setTimeout(() => initQuiz(), 0);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [type]);

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
        const finalScore = Math.round(
          ((score + (isCorrect ? 1 : 0)) / questions.length) * 100,
        );
        updateQuizScore(type, finalScore);
        setIsFinished(true);
      }
    }, 1200);
  };

  if (questions.length === 0)
    return <div className="container">Memuat ujian...</div>;

  if (isFinished) {
    const finalScore = Math.round((score / questions.length) * 100);
    const passed = finalScore >= 80;
    return (
      <div className="container animate-fade-in quiz-container">
        <div className="quiz-result glass-card no-hover">
          <div className="eyebrow">Hasil Ujian</div>
          <h1>Ujian Selesai</h1>
          <div className={`quiz-score ${passed ? "pass" : "fail"}`}>
            {finalScore}
          </div>
          <p className="quiz-message">
            Anda menjawab benar {score} dari {questions.length} soal.
            {!passed && <span> Nilai kelulusan adalah 80. Ayo coba lagi.</span>}
          </p>
          <div className="quiz-actions">
            <Link to="/quiz" className="btn btn-ghost">
              ← Kembali ke Menu
            </Link>
            <button onClick={initQuiz} className="btn btn-primary">
              ↺ Ulangi Ujian
            </button>
          </div>
        </div>
      </div>
    );
  }

  const currentQ = questions[currentIndex];
  const progressPercent = (currentIndex / questions.length) * 100;

  return (
    <div className="container animate-fade-in quiz-container">
      <header className="section-header study-hero glass-card no-hover">
        <div className="eyebrow">Ujian Evaluasi</div>
        <h1>{type.replace("_", " ").toUpperCase()}</h1>
        <p>
          Pilih jawaban yang paling sesuai untuk setiap karakter atau kosakata
          yang ditampilkan.
        </p>
      </header>

      <div className="quiz-progress-bar">
        <div
          className="quiz-progress-fill"
          style={{ width: `${progressPercent}%` }}
        ></div>
      </div>

      <div className="quiz-header">
        <span>
          Soal {currentIndex + 1} / {questions.length}
        </span>
        <span>Skor Sementara: {score}</span>
      </div>

      <div className="quiz-question-card">{currentQ.questionChar}</div>

      <div className="quiz-options">
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
            >
              {opt}
            </button>
          );
        })}
      </div>
    </div>
  );
}
