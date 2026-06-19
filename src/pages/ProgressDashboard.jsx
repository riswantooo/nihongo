import { useProgress } from "../context/ProgressContext";
import { getSRSData } from "../utils/progressManager";

export default function ProgressDashboard() {
  const { quizScores, isLessonCompleted } = useProgress();

  // 1. Kalkulasi Silabus MNN (50 Bab)
  const totalMnnChapters = 50; // Total dari MNN 1 & 2
  let completedCount = 0;
  for (let i = 1; i <= totalMnnChapters; i++) {
    if (isLessonCompleted(i)) completedCount++;
  }
  const mnnPercentage = Math.round((completedCount / totalMnnChapters) * 100);

  // Kalkulasi Total EXP secara dinamis
  const totalExp =
    completedCount * 150 +
    (quizScores?.N5?.hiragana || 0) * 2 +
    (quizScores?.N5?.katakana || 0) * 2;

  // 2. Kalkulasi SRS Memory (Analitik Retensi)
  const srsData = getSRSData();
  const srsItems = Object.values(srsData);
  const totalSrs = srsItems.length;

  // Breakdown level SRS:
  // Level 0: Baru dipelajari (Apprentice)
  // Level 1-3: Sedang dihafal (Guru)
  // Level 4+: Sudah masuk memori jangka panjang (Master)
  const apprenticeCount = srsItems.filter((item) => item.level === 0).length;
  const guruCount = srsItems.filter(
    (item) => item.level > 0 && item.level <= 3,
  ).length;
  const masterCount = srsItems.filter((item) => item.level >= 4).length;

  const apprenticePct = totalSrs
    ? Math.round((apprenticeCount / totalSrs) * 100)
    : 0;
  const guruPct = totalSrs ? Math.round((guruCount / totalSrs) * 100) : 0;
  const masterPct = totalSrs ? Math.round((masterCount / totalSrs) * 100) : 0;

  // 3. Kalkulasi Kuis Evaluasi
  const renderQuizScore = (title, score, colorClass) => (
    <div
      style={{
        background: "var(--bg-elevated)",
        padding: "var(--sp-4)",
        borderRadius: "2px",
        border: "1px solid var(--border)",
      }}
    >
      <p
        className="text-secondary"
        style={{ fontSize: "0.9rem", marginBottom: "0.5rem" }}
      >
        {title}
      </p>
      <div style={{ display: "flex", alignItems: "flex-end", gap: "0.5rem" }}>
        <h3
          style={{
            margin: 0,
            fontSize: "1.8rem",
            color: `var(--${colorClass})`,
          }}
        >
          {score || 0}
        </h3>
        <span className="text-secondary" style={{ paddingBottom: "4px" }}>
          / 100
        </span>
      </div>
      {score >= 80 ? (
        <p
          style={{
            margin: "0.5rem 0 0 0",
            fontSize: "0.8rem",
            color: "var(--matcha)",
            display: "flex",
            alignItems: "center",
            gap: "4px",
          }}
        >
          ✓ Lulus
        </p>
      ) : (
        <p
          style={{
            margin: "0.5rem 0 0 0",
            fontSize: "0.8rem",
            color: "var(--text-3)",
          }}
        >
          Belum Lulus
        </p>
      )}
    </div>
  );

  return (
    <div className="container animate-fade-in" style={{ maxWidth: "900px" }}>
      <header
        className="section-header"
        style={{ marginBottom: "3rem", textAlign: "center" }}
      >
        <h1>
          Rapor <span className="text-gradient">Pembelajaran</span>
        </h1>
        <p className="text-secondary">
          Pantau perkembangan bahasa Jepang Anda secara menyeluruh.
        </p>
      </header>

      {/* TOP ROW: EXP & MNN PROGRESS */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
          gap: "1.5rem",
          marginBottom: "2rem",
        }}
      >
        <div
          className="glass-card"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "1.5rem",
            padding: "2rem",
          }}
        >
          <div>
            <p
              className="text-secondary"
              style={{ fontSize: "0.9rem", marginBottom: "0" }}
            >
              Total EXP
            </p>
            <h2
              style={{
                margin: "0.2rem 0",
                fontSize: "3rem",
                color: "var(--kiniro)",
              }}
            >
              {totalExp}
            </h2>
            <p
              className="text-secondary"
              style={{ fontSize: "0.8rem", margin: 0 }}
            >
              Diperoleh dari Pelajaran & Ujian
            </p>
          </div>
        </div>

        <div className="glass-card" style={{ padding: "2rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "1rem",
            }}
          >
            <h3
              style={{
                margin: 0,
                display: "flex",
                alignItems: "center",
                gap: "8px",
              }}
            >
              Progres Silabus MNN
            </h3>
            <span
              style={{
                fontWeight: "bold",
                fontSize: "1.2rem",
                color: "var(--accent)",
              }}
            >
              {mnnPercentage}%
            </span>
          </div>

          <div
            style={{
              width: "100%",
              background: "var(--border)",
              height: "2px",
              borderRadius: "0",
              overflow: "hidden",
              marginBottom: "1rem",
            }}
          >
            <div
              style={{
                width: `${mnnPercentage}%`,
                background: "var(--accent)",
                height: "100%",
                borderRadius: "0",
                transition: "width 1s ease-out",
              }}
            ></div>
          </div>

          <p style={{ margin: 0, fontSize: "0.95rem", color: "var(--text-2)" }}>
            Anda telah menyelesaikan <strong>{completedCount}</strong> dari{" "}
            <strong>{totalMnnChapters}</strong> Bab.
          </p>
        </div>
      </div>

      {/* MIDDLE ROW: SRS ANALYTICS */}
      <div
        className="glass-card"
        style={{ padding: "2rem", marginBottom: "2rem" }}
      >
        <h3
          style={{
            margin: "0 0 1.5rem 0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "2px solid var(--border)",
            paddingBottom: "0.8rem",
          }}
        >
          Kualitas Retensi Memori (SRS)
        </h3>

        {totalSrs === 0 ? (
          <p
            className="text-secondary"
            style={{
              textAlign: "center",
              fontStyle: "italic",
              padding: "2rem 0",
            }}
          >
            Belum ada kosakata atau kanji yang masuk ke memori jangka panjang
            Anda. Mulailah belajar di bab baru!
          </p>
        ) : (
          <div>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                marginBottom: "0.5rem",
                fontSize: "0.95rem",
              }}
            >
              <span style={{ color: "var(--text-3)" }}>
                Baru/Lupa: {apprenticeCount}
              </span>
              <span style={{ color: "var(--accent)" }}>
                Menengah: {guruCount}
              </span>
              <span style={{ color: "var(--kiniro)" }}>
                Kuat/Master: {masterCount}
              </span>
            </div>

            {/* Multi-color progress bar */}
            <div
              style={{
                display: "flex",
                width: "100%",
                height: "2px",
                borderRadius: "0",
                overflow: "hidden",
                background: "var(--border)",
                marginBottom: "1.5rem",
              }}
            >
              <div
                style={{
                  width: `${apprenticePct}%`,
                  background: "var(--text-3)",
                }}
                title={`Apprentice: ${apprenticePct}%`}
              ></div>
              <div
                style={{ width: `${guruPct}%`, background: "var(--accent)" }}
                title={`Guru: ${guruPct}%`}
              ></div>
              <div
                style={{ width: `${masterPct}%`, background: "var(--kiniro)" }}
                title={`Master: ${masterPct}%`}
              ></div>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "1rem",
              }}
            >
              <div
                style={{
                  background: "var(--bg-elevated)",
                  padding: "var(--sp-4)",
                  borderRadius: "2px",
                  border: "1px solid var(--border)",
                }}
              >
                <strong style={{ color: "var(--text-3)" }}>
                  1. Baru (Apprentice)
                </strong>
                <p
                  style={{
                    margin: "0.5rem 0 0 0",
                    fontSize: "0.85rem",
                    color: "var(--text-2)",
                  }}
                >
                  Kartu yang baru dipelajari atau baru saja salah ditebak.
                  Rentan dilupakan.
                </p>
              </div>
              <div
                style={{
                  background: "var(--bg-elevated)",
                  padding: "var(--sp-4)",
                  borderRadius: "2px",
                  border: "1px solid var(--border)",
                }}
              >
                <strong style={{ color: "var(--accent)" }}>
                  2. Menengah (Guru)
                </strong>
                <p
                  style={{
                    margin: "0.5rem 0 0 0",
                    fontSize: "0.85rem",
                    color: "var(--text-2)",
                  }}
                >
                  Kartu yang sukses ditebak berturut-turut. Interval hari mulai
                  menjauh.
                </p>
              </div>
              <div
                style={{
                  background: "var(--bg-elevated)",
                  padding: "var(--sp-4)",
                  borderRadius: "2px",
                  border: "1px solid var(--border)",
                }}
              >
                <strong style={{ color: "var(--kiniro)" }}>
                  3. Kuat (Master)
                </strong>
                <p
                  style={{
                    margin: "0.5rem 0 0 0",
                    fontSize: "0.85rem",
                    color: "var(--text-2)",
                  }}
                >
                  Memori jangka panjang. Anda menguasainya di luar kepala!
                </p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* BOTTOM ROW: QUIZ SCORES */}
      <div className="glass-card" style={{ padding: "2rem" }}>
        <h3
          style={{
            margin: "0 0 1.5rem 0",
            display: "flex",
            alignItems: "center",
            gap: "8px",
            borderBottom: "2px solid var(--border)",
            paddingBottom: "0.8rem",
          }}
        >
          Skor Ujian Evaluasi
        </h3>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "1rem",
          }}
        >
          {renderQuizScore("Hiragana", quizScores?.N5?.hiragana, "sakura")}
          {renderQuizScore("Katakana", quizScores?.N5?.katakana, "fuji")}
          {renderQuizScore("Kanji N5", quizScores?.N5?.kanji_n5, "kiniro")}
          {renderQuizScore(
            "Kosakata N5",
            quizScores?.N5?.vocabulary_n5,
            "matcha",
          )}
          {renderQuizScore("Kanji N4", quizScores?.N4?.kanji_n4, "kiniro")}
          {renderQuizScore(
            "Kosakata N4",
            quizScores?.N4?.vocabulary_n4,
            "matcha",
          )}
        </div>
      </div>
    </div>
  );
}
