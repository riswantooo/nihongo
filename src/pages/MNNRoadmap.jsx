import { Link } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

import mnnData from "../data/mnn.json";

export default function MNNRoadmap() {
  const { isLessonCompleted, isLessonUnlocked, isReviewMode, quizScores } =
    useProgress();

  const hScore = quizScores?.N5?.hiragana || 0;
  const kScore = quizScores?.N5?.katakana || 0;
  const isKanaDone = hScore >= 80 && kScore >= 80;
  const isN5Done = isLessonCompleted(25);

  const n5Lessons = Array.from({ length: 25 }, (_, i) => i + 1);
  const n4Lessons = Array.from({ length: 25 }, (_, i) => i + 26);

  const renderGrid = (lessons, levelLabel, requirementText, isGridLocked) => (
    <div style={{ marginBottom: "3rem" }}>
      <div
        style={{
          marginBottom: "1.5rem",
          borderBottom: "2px solid var(--border)",
          paddingBottom: "0.5rem",
        }}
      >
        <h2 style={{ marginBottom: "0.25rem" }}>{levelLabel}</h2>
        {isGridLocked && requirementText && (
          <div
            style={{
              color: "var(--text-3)",
              fontSize: "0.95rem",
              display: "flex",
              alignItems: "center",
              gap: "6px",
            }}
          >
            {requirementText}
          </div>
        )}
      </div>
      <div className="roadmap-grid stagger-children">
        {lessons.map((id) => {
          const unlocked = isLessonUnlocked(id);
          const completed = isLessonCompleted(id);
          const lessonData = mnnData.find((d) => d.id === id);

          let cardClass = "";
          if (completed) cardClass = "completed card-matcha";
          else if (!unlocked) cardClass = "locked no-hover";

          return (
            <div key={id} className={`lesson-card ${cardClass}`}>
              <div className="lesson-number">{id}</div>
              <div className="lesson-title">Bab {id}</div>
              <div className="lesson-subtitle">
                {lessonData
                  ? lessonData.title.split("Bab ")[1] || lessonData.title
                  : "Data Segera Hadir"}
              </div>

              <div className="lesson-status-icon">
                {completed ? (
                  <span style={{ fontSize: "20px", color: "var(--accent)" }}>
                    ✓
                  </span>
                ) : unlocked ? null : null}
              </div>

              {unlocked && lessonData && (
                <Link
                  to={`/mnn/${id}`}
                  className="btn btn-sm btn-ghost"
                  style={{ marginTop: "auto" }}
                >
                  Buka Materi
                </Link>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="container animate-fade-in">
      <header className="section-header roadmap-hero glass-card no-hover">
        <div className="eyebrow">Roadmap Silabus</div>
        <h1>Minna No Nihongo</h1>
        <p>
          {isReviewMode
            ? "Mode Peninjauan Aktif: Anda bebas menjelajahi semua bab tanpa batasan."
            : "Selesaikan setiap pilar di suatu Bab (Kosakata, Tata Bahasa, Mendengar, Membaca) untuk membuka bab selanjutnya."}
        </p>
      </header>

      {renderGrid(
        n5Lessons,
        "Bagian 1: N5 (Bab 1 - 25)",
        "Syarat Buka Bab 1: Lulus Ujian Hiragana & Katakana (Skor \u226580)",
        !isKanaDone,
      )}
      {renderGrid(
        n4Lessons,
        "Bagian 2: N4 (Bab 26 - 50)",
        "Syarat Buka Bab 26: Lulus Seluruh Materi Bab 25",
        !isN5Done,
      )}
    </div>
  );
}
