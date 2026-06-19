import { useParams, Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import charactersData from "../data/characters.json";

import { addItemsToSRS } from "../utils/progressManager";

export default function Learn() {
  const { type } = useParams();
  const [activeSubTab, setActiveSubTab] = useState("gojuon");

  const characters = charactersData[type] || [];
  const title = type.replace("_", " ").replace(/\b\w/g, (l) => l.toUpperCase());
  const isVocabulary = type.startsWith("vocabulary");
  const isKanji = type.startsWith("kanji");
  const isKana = type === "hiragana" || type === "katakana";
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setActiveSubTab("gojuon"), 0);
  }, [type]);

  const displayedCharacters = isKana
    ? characters.filter((char) => char.category === activeSubTab)
    : characters;

  const formatRomaji = (char) => {
    if (char.onyomi_romaji || char.kunyomi_romaji) {
      return (
        <div className="romaji-stack">
          {char.onyomi_romaji && (
            <span>
              <strong className="romaji-label romaji-label-on">ON:</strong>{" "}
              {char.onyomi_romaji}
            </span>
          )}
          {char.kunyomi_romaji && (
            <span>
              <strong className="romaji-label romaji-label-kun">KUN:</strong>{" "}
              {char.kunyomi_romaji}
            </span>
          )}
        </div>
      );
    }

    const romajiString = char.romaji;
    if (!romajiString) return null;
    if (romajiString.includes(" / ")) {
      const [on, kun] = romajiString.split(" / ");
      return (
        <div className="romaji-stack">
          <span>
            <strong className="romaji-label romaji-label-on">ON:</strong> {on}
          </span>
          <span>
            <strong className="romaji-label romaji-label-kun">KUN:</strong>{" "}
            {kun}
          </span>
        </div>
      );
    }
    return <span>{romajiString}</span>;
  };

  const playAudio = (text, audioText) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(audioText || text);
      utterance.lang = "ja-JP";
      window.speechSynthesis.speak(utterance);
    }
  };

  if (characters.length === 0) {
    return <div className="container">Materi belum tersedia.</div>;
  }

  return (
    <div className="container animate-fade-in">
      <header className="section-header lesson-hero">
        <div className="lesson-hero-copy">
          <h1 style={{ marginBottom: "0.5rem" }}>Tabel {title}</h1>
          <p>
            Tekan kotak {isVocabulary ? "kosakata" : "huruf"} untuk mendengarkan
            pelafalannya.
            {!isVocabulary && " Tekan tombol Print untuk lembar latihan cetak."}
          </p>
        </div>
        {!isVocabulary && (
          <Link
            to={`/print/${type}${isKana ? `?subtab=${activeSubTab}` : ""}`}
            target="_blank"
            className="btn btn-ghost"
          >
            Print Worksheet Latihan
          </Link>
        )}
      </header>

      {isKana && (
        <>
          <div className="tab-nav">
            {[
              { id: "gojuon", name: "Gojuon (Dasar)" },
              { id: "dakuon", name: "Dakuon (Turunan)" },
              { id: "yoon", name: "Yoon (Ganda)" },
              ...(type === "katakana"
                ? [{ id: "gairaigo", name: "Gairaigo (Modern)" }]
                : []),
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSubTab(tab.id)}
                className={`tab-btn ${activeSubTab === tab.id ? "active" : ""}`}
              >
                {tab.name}
              </button>
            ))}
          </div>

          <div className="glass-card guide-card">
            <h3 className="guide-title" style={{ color: "var(--accent-1)" }}>
              Panduan Membaca Huruf Jepang
            </h3>
            <div className="guide-copy">
              <p>
                <strong>1. Gojuon (Huruf Dasar):</strong> Ini adalah 46 huruf
                murni yang menjadi fondasi utama bahasa Jepang. "Go-ju" berarti
                50, merujuk pada tabel 5x10 tradisional. Jika Anda baru pertama
                kali belajar, mulailah dengan menghafalkan kelompok huruf dasar
                ini.
              </p>
              <p>
                <strong>2. Dakuon & Handakuon (Huruf Turunan):</strong> Pernah
                melihat tanda petik (") atau lingkaran kecil (°) di pojok kanan
                atas huruf? Itu adalah tanda <i>Teng-teng</i> dan <i>Maru</i>.
                Fungsinya adalah untuk mengubah bunyi huruf dasar:
                <br />• <strong>Teng-teng (")</strong> mengubah bunyi K menjadi{" "}
                <b>G</b>, S menjadi <b>Z</b>, T menjadi <b>D</b>, dan H menjadi{" "}
                <b>B</b>. (Contoh: か <i>ka</i> → が <i>ga</i>).
                <br />• <strong>Maru (°)</strong> hanya menempel pada huruf H,
                mengubah bunyinya menjadi <b>P</b>. (Contoh: は <i>ha</i> → ぱ{" "}
                <i>pa</i>).
              </p>
              <p>
                <strong>3. Yoon (Huruf Gabungan):</strong> Kadang Anda akan
                melihat huruf <i>ya, yu, atau yo</i> (や, ゆ, よ) yang ditulis
                lebih kecil menempel setelah huruf berakhiran 'i' (seperti ki,
                shi, chi, dll). Cara membacanya digabung menjadi satu ketukan.
                <br />
                Misalnya, huruf <i>ki</i> (き) ditambah <i>ya</i> kecil (ゃ)
                tidak dibaca "ki-ya", melainkan langsung digabung menjadi{" "}
                <b>kya</b> (きゃ).
              </p>
              {type === "katakana" && (
                <p>
                  <strong>4. Gairaigo (Katakana Modern):</strong> Huruf tambahan
                  khusus yang digunakan untuk menulis kata serapan asing (
                  <i>Gairaigo</i>). Dalam bahasa Jepang tradisional tidak ada
                  bunyi seperti V, F, W, atau kombinasi seperti "ti" dan "di".
                  Karena itu, Katakana dikombinasikan dengan huruf vokal kecil
                  (seperti ァ, ィ, ゥ, ェ, ォ) untuk merepresentasikan pelafalan
                  asing. Huruf jenis ini tidak memiliki padanan dalam bentuk
                  Hiragana.
                </p>
              )}
            </div>
          </div>
        </>
      )}

      {type === "kanji_n5" && (
        <div className="glass-card guide-card">
          <h3 className="guide-title" style={{ color: "var(--accent-3)" }}>
            Panduan Membaca Kanji
          </h3>
          <div className="guide-copy">
            <p>
              Hampir semua huruf Kanji memiliki dua cara baca utama:{" "}
              <b>Onyomi (ON)</b> dan <b>Kunyomi (KUN)</b>.
            </p>
            <p>
              <strong className="romaji-label romaji-label-on">
                1. Onyomi (ON - Cara Baca Cina):
              </strong>
              <br />
              Merupakan cara baca serapan dari bahasa Tiongkok kuno.{" "}
              <b>Onyomi</b> umumnya digunakan ketika sebuah huruf Kanji{" "}
              <b>bergabung dengan Kanji lain</b> membentuk suatu kosa kata baru.
              <br />
              Contoh: Huruf air (水) dibaca <i>sui</i> pada kata{" "}
              <i>sui-youbi</i> (水曜日 = Hari Rabu).
            </p>
            <p>
              <strong className="romaji-label romaji-label-kun">
                2. Kunyomi (KUN - Cara Baca Jepang):
              </strong>
              <br />
              Merupakan cara baca asli bahasa Jepang. <b>Kunyomi</b> umumnya
              digunakan ketika huruf Kanji <b>berdiri sendiri</b> sebagai sebuah
              kata utuh, atau diikuti oleh huruf Hiragana di belakangnya.
              <br />
              Contoh: Huruf air (水) dibaca <i>mizu</i> jika berdiri sendiri
              yang berarti "Air".
            </p>
          </div>
        </div>
      )}

      <div
        className={`char-grid ${isVocabulary ? "vocab-size" : isKanji ? "kanji-size" : ""} stagger-children`}
      >
        {displayedCharacters.map((char, index) => (
          <div
            key={index}
            className="char-card"
            onClick={() =>
              playAudio(char.character, char.kana || char.audioText)
            }
          >
            <span className="char-audio-icon">▶</span>
            <div
              className="char-symbol"
              style={
                isVocabulary || char.character.length > 2
                  ? { fontSize: "1.8rem" }
                  : {}
              }
            >
              {char.character}
            </div>
            <div className="char-romaji" style={{ marginTop: "0.25rem" }}>
              {formatRomaji(char)}
            </div>
            {char.meaning && <div className="char-meaning">{char.meaning}</div>}

            {char.examples && char.examples.length > 0 && (
              <div
                style={{
                  marginTop: "0.8rem",
                  paddingTop: "0.8rem",
                  borderTop: "1px dashed var(--border)",
                  textAlign: "left",
                  cursor: "default",
                }}
                onClick={(e) => e.stopPropagation()} // Supaya tidak memicu klik kartu utama
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "space-between",
                    gap: "8px",
                  }}
                >
                  <div>
                    <div
                      style={{
                        fontSize: "0.8rem",
                        color: "var(--text-1)",
                        marginBottom: "2px",
                      }}
                    >
                      {char.examples[0].jp}
                    </div>
                    <div
                      style={{
                        fontSize: "0.7rem",
                        color: "var(--text-3)",
                        fontStyle: "italic",
                      }}
                    >
                      "{char.examples[0].id}"
                    </div>
                  </div>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      playAudio(char.examples[0].jp, char.examples[0].kana);
                    }}
                    style={{
                      background: "none",
                      border: "none",
                      color: "var(--accent)",
                      cursor: "pointer",
                      padding: "4px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                    title="Dengarkan kalimat"
                  >
                    ▶
                  </button>
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      <div style={{ marginTop: "3rem", textAlign: "center" }}>
        <button
          className="btn btn-primary btn-lg hover-lift"
          style={{
            padding: "1rem 3rem",
            display: "inline-flex",
            alignItems: "center",
            gap: "0.8rem",
            fontSize: "1.1rem",
          }}
          onClick={() => {
            // Generate IDs for SRS injection
            // Prefix: "kanji_" or "vocab_" + character
            const prefix = isKanji ? "kanji_" : "vocab_";
            // Only inject currently displayed characters
            const itemIds = displayedCharacters.map(
              (char) => prefix + char.character,
            );
            addItemsToSRS(itemIds);
            alert(
              `Berhasil menandai ${displayedCharacters.length} kartu sebagai selesai! Kartu-kartu ini telah dimasukkan ke dalam antrean SRS untuk di-review besok.`,
            );
            navigate("/");
          }}
        >
          ✓ Saya Mengerti (Tandai Selesai)
        </button>
        <p
          style={{
            marginTop: "1rem",
            color: "var(--text-3)",
            fontSize: "0.9rem",
          }}
        >
          Kartu yang ditandai selesai akan muncul secara acak di menu{" "}
          <b>Review Mode</b> mulai besok.
        </p>
      </div>
    </div>
  );
}
