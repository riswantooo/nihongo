import { useState } from "react";

import charactersData from "../data/characters.json";

export default function VoiceTypist() {
  const [text, setText] = useState("");
  const [rate, setRate] = useState(1);
  const [keyboardType, setKeyboardType] = useState("hiragana");
  const [subType, setSubType] = useState("gojuon");

  const playAudio = () => {
    if ("speechSynthesis" in window && text.trim()) {
      const utterance = new SpeechSynthesisUtterance(text);
      utterance.lang = "ja-JP";
      utterance.rate = rate;
      window.speechSynthesis.speak(utterance);
    }
  };

  const handleKeyPress = (char) => {
    setText((prev) => prev + char);
  };

  const handleDelete = () => {
    setText((prev) => prev.slice(0, -1));
  };

  const handleClear = () => {
    setText("");
  };

  const activeCharacters =
    charactersData[keyboardType]?.filter((c) => c.category === subType) || [];

  return (
    <div className="container animate-fade-in">
      <header className="section-header" style={{ textAlign: "center" }}>
        <h1>
          Pengeja <span className="text-gradient">Suara</span>
        </h1>
        <p>
          Ketik atau gunakan keyboard virtual di bawah untuk merangkai kalimat
          bahasa Jepang, lalu dengarkan pelafalannya.
        </p>
      </header>

      <div
        className="glass-card"
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "2rem",
          marginBottom: "2rem",
        }}
      >
        <div style={{ marginBottom: "1.5rem" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-end",
              marginBottom: "0.5rem",
            }}
          >
            <label style={{ color: "var(--text-secondary)" }}>
              Teks Bahasa Jepang:
            </label>
            <div style={{ display: "flex", gap: "0.5rem" }}>
              <button
                className="btn btn-ghost"
                style={{
                  padding: "0.35rem 0.75rem",
                  fontSize: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                onClick={handleDelete}
              >
                ← Hapus
              </button>
              <button
                className="btn btn-ghost"
                style={{
                  padding: "0.35rem 0.75rem",
                  fontSize: "0.85rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "0.25rem",
                }}
                onClick={handleClear}
              >
                ✕ Bersihkan
              </button>
            </div>
          </div>
          <textarea
            className="input-field"
            rows="3"
            placeholder="Ketik di sini atau pilih huruf dari keyboard virtual..."
            value={text}
            onChange={(e) => setText(e.target.value)}
            style={{
              width: "100%",
              padding: "1rem",
              borderRadius: "2px",
              border: "1px solid var(--border)",
              backgroundColor: "var(--bg-elevated)",
              color: "var(--text-primary)",
              fontSize: "1.8rem",
              resize: "vertical",
              fontFamily: '"Noto Sans JP", sans-serif',
            }}
          />
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
            marginBottom: "2rem",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "1rem" }}>
            <label style={{ color: "var(--text-secondary)" }}>Kecepatan:</label>
            <input
              type="range"
              min="0.5"
              max="1.5"
              step="0.1"
              value={rate}
              onChange={(e) => setRate(parseFloat(e.target.value))}
              style={{ accentColor: "var(--sakura)" }}
            />
            <span style={{ minWidth: "40px", fontWeight: "bold" }}>
              {rate}x
            </span>
          </div>
          <button
            className="btn btn-primary"
            onClick={playAudio}
            disabled={!text.trim()}
            style={{
              display: "flex",
              alignItems: "center",
              gap: "0.5rem",
              opacity: text.trim() ? 1 : 0.5,
              cursor: text.trim() ? "pointer" : "not-allowed",
            }}
          >
            ▶ Putar Suara
          </button>
        </div>

        <div
          style={{
            borderTop: "1px solid var(--border)",
            paddingTop: "1.5rem",
          }}
        >
          <h3
            style={{
              fontSize: "1.1rem",
              marginBottom: "1rem",
              color: "var(--text-secondary)",
            }}
          >
            Keyboard Virtual
          </h3>
          <div
            style={{
              display: "flex",
              gap: "1rem",
              marginBottom: "1rem",
              flexWrap: "wrap",
            }}
          >
            <div
              className="tab-nav"
              style={{ margin: 0, padding: 0, justifyContent: "flex-start" }}
            >
              <button
                className={`tab-btn ${keyboardType === "hiragana" ? "active" : ""}`}
                onClick={() => {
                  setKeyboardType("hiragana");
                  setSubType("gojuon");
                }}
                style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
              >
                Hiragana
              </button>
              <button
                className={`tab-btn ${keyboardType === "katakana" ? "active" : ""}`}
                onClick={() => {
                  setKeyboardType("katakana");
                  setSubType("gojuon");
                }}
                style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
              >
                Katakana
              </button>
            </div>

            <div
              className="tab-nav"
              style={{ margin: 0, padding: 0, justifyContent: "flex-start" }}
            >
              <button
                className={`tab-btn ${subType === "gojuon" ? "active" : ""}`}
                onClick={() => setSubType("gojuon")}
                style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
              >
                Dasar
              </button>
              <button
                className={`tab-btn ${subType === "dakuon" ? "active" : ""}`}
                onClick={() => setSubType("dakuon")}
                style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
              >
                Turunan
              </button>
              <button
                className={`tab-btn ${subType === "yoon" ? "active" : ""}`}
                onClick={() => setSubType("yoon")}
                style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
              >
                Gabungan
              </button>
              {keyboardType === "katakana" && (
                <button
                  className={`tab-btn ${subType === "gairaigo" ? "active" : ""}`}
                  onClick={() => setSubType("gairaigo")}
                  style={{ padding: "0.5rem 1rem", fontSize: "0.9rem" }}
                >
                  Modern
                </button>
              )}
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(55px, 1fr))",
              gap: "8px",
              backgroundColor: "rgba(0,0,0,0.15)",
              padding: "1rem",
              borderRadius: "2px",
              maxHeight: "300px",
              overflowY: "auto",
            }}
          >
            {activeCharacters.map((char, idx) => (
              <button
                key={idx}
                onClick={() => handleKeyPress(char.character)}
                style={{
                  padding: "8px 0",
                  fontSize: "1.4rem",
                  backgroundColor: "var(--bg-surface)",
                  border: "1px solid var(--border)",
                  borderRadius: "2px",
                  color: "var(--text-primary)",
                  cursor: "pointer",
                  transition: "all 0.15s ease",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  gap: "2px",
                }}
                onMouseOver={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--accent)";
                  e.currentTarget.style.color = "#fff";
                  e.currentTarget.style.borderColor = "var(--accent)";
                }}
                onMouseOut={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg-surface)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "var(--bg-surface)";
                  e.currentTarget.style.color = "var(--text-primary)";
                  e.currentTarget.style.borderColor = "var(--border)";
                }}
              >
                <span>{char.character}</span>
                <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>
                  {char.romaji}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
