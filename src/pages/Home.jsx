import { Link } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";
import { getDueSRSItems } from "../utils/progressManager";

export default function Home() {
  const { quizScores, isLessonCompleted, isLessonUnlocked, isReviewMode } =
    useProgress();
  const dueItemsCount = getDueSRSItems().length;

  const hScore = quizScores?.N5?.hiragana || 0;
  const kScore = quizScores?.N5?.katakana || 0;
  const isKanaDone = hScore >= 80 && kScore >= 80;

  let nextLesson = 1;
  let hasFoundNext = false;
  for (let i = 1; i <= 50; i++) {
    if (isLessonUnlocked(i) && !isLessonCompleted(i)) {
      nextLesson = i;
      hasFoundNext = true;
      break;
    }
  }

  let ctaLink = "/learn/hiragana";
  let ctaText = "Mulai Belajar: Hiragana";
  if (isKanaDone) {
    if (hasFoundNext) {
      ctaLink = `/mnn/${nextLesson}`;
      ctaText = `Lanjutkan: Bab ${nextLesson}`;
    } else if (isLessonCompleted(50)) {
      ctaLink = "/roadmap";
      ctaText = "Selamat! Semua Bab Selesai";
    }
  }

  const renderZone = (title, items, isLocked) => (
    <div
      className={`zone-container ${isLocked ? "locked-zone" : ""}`}
      style={{
        borderLeft: isLocked
          ? "2px solid var(--border)"
          : "2px solid var(--accent)",
        paddingLeft: "1.5rem",
        marginBottom: "3rem",
      }}
    >
      <h2
        style={{
          color: "var(--text-primary)",
          marginBottom: "1rem",
          display: "flex",
          alignItems: "center",
          gap: "0.5rem",
        }}
      >
        {title}
        {isLocked && (
          <span
            style={{
              fontSize: "0.8rem",
              color: "var(--text-muted)",
              fontWeight: 400,
            }}
          >
            [Terkunci]
          </span>
        )}
      </h2>
      <div
        className="bento-grid"
        style={{ gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}
      >
        {items.map((item, idx) => (
          <div
            key={idx}
            className={`glass-card ${isLocked ? "no-hover" : ""}`}
            style={{
              opacity: isLocked ? 0.5 : 1,
              pointerEvents: isLocked ? "none" : "auto",
            }}
          >
            <h3>{item.title}</h3>
            <p
              style={{
                fontSize: "0.9rem",
                color: "var(--text-secondary)",
                margin: "0.5rem 0 1rem 0",
              }}
            >
              {item.desc}
            </p>
            {!isLocked && item.link && (
              <Link to={item.link} className="btn btn-sm btn-secondary">
                Buka
              </Link>
            )}
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container animate-fade-in">
      <div className="home-layout">
        {/* HERO */}
        <div className="hero-section">
          <div className="hero-inner">
            <div className="eyebrow" style={{ marginBottom: "1.5rem" }}>
              Roadmap JLPT
            </div>
            <p
              style={{
                fontFamily: "'Noto Serif JP', serif",
                fontSize: "clamp(40px, 8vw, 64px)",
                fontWeight: 400,
                color: "var(--text-primary)",
                margin: "0 0 1.25rem 0",
                lineHeight: 1.2,
              }}
            >
              日本語を学ぼう
            </p>
            <p
              style={{
                fontSize: "16px",
                color: "var(--text-secondary)",
                margin: "0 0 2rem 0",
              }}
            >
              Dari Hiragana hingga mahir. Terstruktur, tanpa gangguan.
            </p>
            <Link
              to={ctaLink}
              className="btn btn-primary"
              style={{ padding: "0.8rem 2rem", fontSize: "1.1rem" }}
            >
              {ctaText}
            </Link>
            {!isReviewMode && !isKanaDone && (
              <div
                style={{
                  marginTop: "1.5rem",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "0.4rem",
                  color: "var(--text-muted)",
                  fontSize: "0.9rem",
                }}
              >
                <span style={{ fontSize: "14px" }}>!</span>
                Bab 1 N5 dikunci sampai Anda mendapat nilai &ge;80 di Ujian
                Hiragana &amp; Katakana.
              </div>
            )}
          </div>
        </div>

        {/* SRS NOTIFICATION */}
        <div style={{ marginBottom: "2rem" }}>
          <div
            className="glass-card"
            style={{
              padding: "1.5rem",
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              borderLeft: "2px solid var(--accent)",
              gap: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div>
              <h3
                style={{
                  margin: 0,
                  fontSize: "1.2rem",
                  color: "var(--text-primary)",
                }}
              >
                {dueItemsCount > 0
                  ? `${dueItemsCount} Kartu Jatuh Tempo Hari Ini`
                  : "Review Harian Selesai!"}
              </h3>
              <p
                style={{
                  margin: "0.2rem 0 0 0",
                  fontSize: "0.9rem",
                  color: "var(--text-secondary)",
                }}
              >
                {dueItemsCount > 0
                  ? "Segarkan ingatan Anda agar hafalan tersimpan di memori jangka panjang."
                  : "Tidak ada hafalan yang perlu direview hari ini. Anda bebas melanjutkan materi baru."}
              </p>
            </div>
            <Link
              to="/review"
              className="btn btn-primary"
              style={{ padding: "0.6rem 1.5rem" }}
            >
              {dueItemsCount > 0
                ? "Mulai Review Sekarang"
                : "Buka Halaman Review"}
            </Link>
          </div>
        </div>

        {/* TRAINING GROUND */}
        <div style={{ marginBottom: "3rem" }}>
          <h2
            style={{
              fontSize: "1.5rem",
              marginBottom: "1.5rem",
              textAlign: "center",
              color: "var(--text-primary)",
            }}
          >
            Training Ground
          </h2>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "1.5rem",
            }}
          >
            <Link
              to="/trainer/particle"
              className="glass-card"
              style={{
                textDecoration: "none",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                borderTop: "1px solid var(--border)",
              }}
            >
              <h3
                style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}
              >
                Particle Dojo
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  margin: 0,
                }}
              >
                Latih insting Anda merangkai 12 partikel fundamental Jepang (は,
                が, に, dll) pada puluhan kalimat acak.
              </p>
            </Link>
            <Link
              to="/trainer/conjugation"
              className="glass-card"
              style={{
                textDecoration: "none",
                padding: "1.5rem",
                display: "flex",
                flexDirection: "column",
                textAlign: "left",
                borderTop: "1px solid var(--border)",
              }}
            >
              <h3
                style={{ color: "var(--text-primary)", marginBottom: "0.5rem" }}
              >
                Conjugation Gym
              </h3>
              <p
                style={{
                  color: "var(--text-secondary)",
                  fontSize: "0.9rem",
                  margin: 0,
                }}
              >
                Bentuk refleks absolut memecahkan perubahan 80+ kata kerja
                (Bentuk Te, Ta, Nai, Pasif) secepat kilat.
              </p>
            </Link>
          </div>
        </div>

        {/* SKILL TREE */}
        <div className="skill-tree-container">
          {renderZone(
            "Tahap Dasar: Kana",
            [
              {
                title: "Hiragana",
                desc: "46 huruf dasar Jepang.",
                link: "/learn/hiragana",
              },
              {
                title: "Katakana",
                desc: "46 huruf untuk serapan asing.",
                link: "/learn/katakana",
              },
              {
                title: "Ujian Kana",
                desc: "Uji hafalan huruf Anda.",
                link: "/quiz",
              },
            ],
            false,
          )}

          {renderZone(
            "Tahap 1: JLPT N5",
            [
              {
                title: "Kanji N5",
                desc: "Kanji dasar untuk N5.",
                link: "/learn/kanji_n5",
              },
              {
                title: "Kosakata N5",
                desc: "Hafalan kata dasar N5.",
                link: "/learn/vocabulary_n5",
              },
              {
                title: "Silabus MNN 1",
                desc: "Bab 1 - 25 Minna no Nihongo.",
                link: "/roadmap",
              },
            ],
            !isKanaDone && !isReviewMode,
          )}

          {renderZone(
            "Tahap 2: JLPT N4",
            [
              {
                title: "Kanji N4",
                desc: "Kanji tingkat menengah bawah.",
                link: "/learn/kanji_n4",
              },
              {
                title: "Kosakata N4",
                desc: "Kosakata penting N4.",
                link: "/learn/vocabulary_n4",
              },
              {
                title: "Silabus MNN 2",
                desc: "Bab 26 - 50 Minna no Nihongo.",
                link: "/roadmap",
              },
            ],
            !isLessonCompleted(25) && !isReviewMode,
          )}

          {renderZone(
            "Tahap 3: JLPT N3",
            [
              {
                title: "Materi N3",
                desc: "Persiapan menengah atas.",
                link: "#",
              },
            ],
            true,
          )}
          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "13px",
              fontStyle: "italic",
              marginTop: "-2rem",
              marginBottom: "2rem",
            }}
          >
            * Dalam Progress Pembuatan
          </div>

          {renderZone(
            "Tahap 4: JLPT N2",
            [
              {
                title: "Materi N2",
                desc: "Persiapan tingkat mahir.",
                link: "#",
              },
            ],
            true,
          )}
          <div
            style={{
              color: "var(--text-muted)",
              fontSize: "13px",
              fontStyle: "italic",
              marginTop: "-2rem",
              marginBottom: "2rem",
            }}
          >
            * Dalam Progress Pembuatan
          </div>
        </div>
      </div>
    </div>
  );
}
