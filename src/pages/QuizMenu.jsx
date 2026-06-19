import { Link } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

export default function QuizMenu() {
  const { quizScores, isLessonCompleted, isReviewMode } = useProgress();

  const hScore = quizScores?.N5?.hiragana || 0;
  const kScore = quizScores?.N5?.katakana || 0;
  const isKanaDone = hScore >= 80 && kScore >= 80;
  const isN5Done = isLessonCompleted(25);

  const n5Categories = [
    {
      id: "hiragana",
      name: "Hiragana",
      code: "01",
      cardClass: "",
      btnClass: "btn-primary",
      level: "N5",
      locked: false,
    },
    {
      id: "katakana",
      name: "Katakana",
      code: "02",
      cardClass: "",
      btnClass: "btn-primary",
      level: "N5",
      locked: false,
    },
    {
      id: "kanji_n5",
      name: "Kanji N5",
      code: "03",
      cardClass: "",
      btnClass: "btn-primary",
      level: "N5",
      locked: !isKanaDone && !isReviewMode,
    },
    {
      id: "vocabulary_n5",
      name: "Kosakata N5",
      code: "04",
      cardClass: "",
      btnClass: "btn-primary",
      level: "N5",
      locked: !isKanaDone && !isReviewMode,
    },
  ];

  const n4Categories = [
    {
      id: "kanji_n4",
      name: "Kanji N4",
      code: "01",
      cardClass: "",
      btnClass: "btn-primary",
      level: "N4",
      locked: !isN5Done && !isReviewMode,
    },
    {
      id: "vocabulary_n4",
      name: "Kosakata N4",
      code: "02",
      cardClass: "",
      btnClass: "btn-primary",
      level: "N4",
      locked: !isN5Done && !isReviewMode,
    },
  ];

  const renderCategoryGroup = (categories, title) => (
    <div style={{ marginBottom: "3rem" }}>
      <h2
        style={{
          marginBottom: "1.5rem",
          borderBottom: "2px solid var(--border)",
          paddingBottom: "0.5rem",
        }}
      >
        {title}
      </h2>
      <div className="quiz-menu-grid stagger-children">
        {categories.map((cat) => {
          const score = quizScores?.[cat.level]?.[cat.id] || 0;
          return (
            <div
              key={cat.id}
              className={`quiz-category-card ${cat.cardClass} ${cat.locked ? "no-hover" : ""}`}
              style={{
                opacity: cat.locked ? 0.6 : 1,
                pointerEvents: cat.locked ? "none" : "auto",
              }}
            >
              <div className="quiz-category-icon">{cat.code}</div>
              <h2>
                {cat.name}{" "}
                {cat.locked && (
                  <span
                    style={{
                      fontSize: "0.8rem",
                      background: "rgba(0,0,0,0.1)",
                      padding: "2px 8px",
                      borderRadius: "2px",
                      verticalAlign: "middle",
                      marginLeft: "6px",
                    }}
                  >
                    Terkunci
                  </span>
                )}
              </h2>
              <div
                className={`quiz-score-display ${score > 0 ? "has-score" : "no-score"}`}
              >
                {score} / 100
              </div>
              <div
                className="text-secondary"
                style={{ marginBottom: "1.5rem", fontSize: "0.9rem" }}
              >
                {cat.locked
                  ? cat.level === "N5"
                    ? "Syarat: Lulus Ujian Hiragana & Katakana (Skor \u226580)"
                    : "Syarat: Lulus Seluruh Materi Bab 1-25"
                  : "Skor Terbaik"}
              </div>
              {!cat.locked ? (
                <Link
                  to={`/quiz/${cat.id}`}
                  className={`btn ${cat.btnClass} btn-block`}
                >
                  Mulai Ujian
                </Link>
              ) : (
                <button
                  className="btn btn-ghost btn-block"
                  disabled
                  style={{ opacity: 0.5 }}
                >
                  Terkunci
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="container animate-fade-in">
      <header className="section-header">
        <h1>Ujian Evaluasi Lengkap</h1>
        <p>
          Pilih kategori ujian. Masing-masing terdiri dari 100 soal pilihan
          ganda acak.
        </p>
      </header>

      {/* BOSS CARD: JLPT MINI TEST */}
      <div
        className="glass-card"
        style={{
          padding: "2rem",
          marginBottom: "3rem",
          borderLeft: "2px solid var(--accent)",
          display: "flex",
          flexWrap: "wrap",
          gap: "2rem",
          alignItems: "center",
          justifyContent: "space-between",
          background: "none",
        }}
      >
        <div style={{ flex: 1, minWidth: "300px" }}>
          <div
            className="eyebrow"
            style={{ color: "var(--accent)", fontWeight: "bold" }}
          >
            FINAL BOSS
          </div>
          <h2 style={{ fontSize: "2rem", margin: "0.5rem 0" }}>
            Simulasi JLPT N5
          </h2>
          <p className="text-secondary" style={{ margin: 0 }}>
            Uji kesiapan JLPT sesungguhnya dengan soal campuran acak antara
            Kanji, Kosakata, dan Tata Bahasa (Grammar).
          </p>
        </div>
        <Link
          to="/jlpt-test"
          className="btn btn-primary btn-lg"
          style={{
            minWidth: "200px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          Mulai Simulasi Ujian
        </Link>
      </div>

      {renderCategoryGroup(n5Categories, "N5")}
      {renderCategoryGroup(n4Categories, "N4")}

      <div className="quiz-menu-grid">
        <div
          className="flashcard-section"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "left",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              minWidth: "250px",
            }}
          >
            <div
              className="quiz-category-icon"
              style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}
            >
              FC
            </div>
            <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Flashcard Acak</h2>
          </div>
          <p
            className="text-secondary"
            style={{ margin: 0, flex: "1", minWidth: "200px" }}
          >
            Latihan mandiri bolak-balik kartu tanpa skor.
          </p>
          <div style={{ flex: "0 0 auto" }}>
            <Link to={`/flashcard`} className="btn btn-ghost">
              Mulai Latihan
            </Link>
          </div>
        </div>

        <div
          className="flashcard-section"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "left",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              minWidth: "250px",
            }}
          >
            <div
              className="quiz-category-icon"
              style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}
            >
              CT
            </div>
            <h2 style={{ margin: 0, fontSize: "1.5rem" }}>
              Conjugation Trainer
            </h2>
          </div>
          <p
            className="text-secondary"
            style={{ margin: 0, flex: "1", minWidth: "200px" }}
          >
            Latih kecepatan konjugasi kata kerja Anda secara interaktif!
          </p>
          <div style={{ flex: "0 0 auto" }}>
            <Link to={`/trainer/conjugation`} className="btn btn-ghost">
              Mulai Latihan
            </Link>
          </div>
        </div>

        <div
          className="flashcard-section"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            textAlign: "left",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
              minWidth: "250px",
            }}
          >
            <div
              className="quiz-category-icon"
              style={{ margin: 0, fontSize: "2rem", fontWeight: "bold" }}
            >
              PT
            </div>
            <h2 style={{ margin: 0, fontSize: "1.5rem" }}>Particle Trainer</h2>
          </div>
          <p
            className="text-secondary"
            style={{ margin: 0, flex: "1", minWidth: "200px" }}
          >
            Uji insting Anda dalam menempatkan partikel yang tepat di dalam
            kalimat.
          </p>
          <div style={{ flex: "0 0 auto" }}>
            <Link to={`/trainer/particle`} className="btn btn-ghost">
              Mulai Latihan
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
