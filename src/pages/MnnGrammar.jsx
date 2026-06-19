import { useParams, useNavigate } from "react-router-dom";
import mnnData from "../data/mnn.json";
import { useProgress } from "../context/ProgressContext";
import { addItemsToSRS } from "../utils/progressManager";

import grammarPointsData from "../data/grammar-points.json";

export default function MnnGrammar() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);
  const lesson = mnnData.find((d) => d.id === lessonId);
  const { markTaskCompleted } = useProgress();

  const handleComplete = () => {
    // 1. Tandai di Skill Tree
    markTaskCompleted(lessonId, "grammar");

    // 2. Masukkan semua Grammar Point dari bab ini ke SRS
    const pointsInThisChapter = grammarPointsData.filter(
      (g) => g.chapter === lessonId,
    );
    if (pointsInThisChapter.length > 0) {
      const grammarIds = pointsInThisChapter.map((g) => `grammar_${g.id}`);
      addItemsToSRS(grammarIds);
    }

    navigate(`/mnn/${lessonId}`);
  };

  const playAudio = (text) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      window.speechSynthesis.speak(utterance);
    }
  };

  if (!lesson) return null;

  return (
    <div className="container animate-fade-in" style={{ maxWidth: "800px" }}>
      <button onClick={() => navigate(`/mnn/${lessonId}`)} className="back-btn">
        ← Kembali
      </button>

      <header className="section-header">
        <h1>
          Tata Bahasa <span className="text-gradient">{lesson.title}</span>
        </h1>
      </header>

      <div className="stagger-children">
        {lesson.grammar.map((g, i) => (
          <div key={i} className="grammar-card">
            <h2 className="grammar-pattern">{g.title}</h2>
            <p className="grammar-explanation">{g.description}</p>

            <h4 style={{ margin: "0 0 0.5rem 0", color: "var(--text-2)" }}>
              Contoh:
            </h4>
            {g.examples.map((ex, exIdx) => (
              <div
                key={exIdx}
                className="grammar-example"
                style={{ position: "relative" }}
              >
                <button
                  onClick={() => playAudio(ex.japanese)}
                  className="audio-btn"
                  style={{ position: "absolute", top: "10px", right: "10px" }}
                >
                  ▶
                </button>
                <div className="grammar-jp">{ex.japanese}</div>
                <div className="grammar-id">"{ex.meaning}"</div>
              </div>
            ))}
          </div>
        ))}
      </div>

      <div className="completion-section">
        <button onClick={handleComplete} className="btn btn-primary btn-lg">
          ✓ Saya Mengerti (Tandai Selesai)
        </button>
      </div>
    </div>
  );
}
