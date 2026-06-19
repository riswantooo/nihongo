import { useParams, useNavigate } from "react-router-dom";
import mnnData from "../data/mnn.json";
import { useProgress } from "../context/ProgressContext";
import { addItemsToSRS } from "../utils/progressManager";

export default function MnnVocabulary() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);
  const lesson = mnnData.find((d) => d.id === lessonId);
  const { markTaskCompleted } = useProgress();

  const handleComplete = () => {
    // 1. Tandai di Skill Tree
    markTaskCompleted(lessonId, "vocabulary");

    // 2. Lempar semua kosakata dari bab ini ke antrean SRS (Jatuh tempo besok)
    if (lesson && lesson.vocabulary) {
      const vocabIds = lesson.vocabulary.map((v) => `vocab_${v.character}`);
      addItemsToSRS(vocabIds);
    }

    navigate(`/mnn/${lessonId}`);
  };

  const playAudio = (text, audioText) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(audioText || text);
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
          Kosakata <span className="text-gradient">{lesson.title}</span>
        </h1>
      </header>

      <div className="vocab-grid stagger-children">
        {lesson.vocabulary.map((vocab, i) => (
          <div
            key={i}
            className="vocab-card"
            onClick={() => playAudio(vocab.character, vocab.character)}
          >
            <span className="char-audio-icon">▶</span>
            <div className="vocab-char">{vocab.character}</div>
            <div className="char-romaji">{vocab.romaji}</div>
            <div className="char-meaning">{vocab.meaning}</div>
          </div>
        ))}
      </div>

      <div className="completion-section">
        <button onClick={handleComplete} className="btn btn-primary btn-lg">
          ✓ Saya Sudah Hafal (Tandai Selesai)
        </button>
      </div>
    </div>
  );
}
