import { useParams, Link, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import charactersData from "../data/characters.json";

const SingleStrokeOrderChar = ({ character }) => {
  const [svgContent, setSvgContent] = useState("");

  useEffect(() => {
    const charCode = character.charCodeAt(0);
    const hex = charCode.toString(16).padStart(5, "0");
    const url = `https://raw.githubusercontent.com/KanjiVG/kanjivg/master/kanji/${hex}.svg`;

    fetch(url)
      .then((res) => {
        if (!res.ok) throw new Error("Not found");
        return res.text();
      })
      .then((data) => {
        const svgStart = data.indexOf("<svg");
        if (svgStart !== -1) {
          setSvgContent(data.substring(svgStart));
        } else {
          setSvgContent(data);
        }
      })
      .catch((err) => {
        console.error("Gagal memuat stroke order untuk", character, err);
        setSvgContent("ERROR");
      });
  }, [character]);

  if (!svgContent) {
    return <span style={{ fontSize: "1rem", color: "#888" }}>Loading...</span>;
  }

  if (svgContent === "ERROR") {
    return (
      <span className="watermark-char" style={{ color: "#000", opacity: 1 }}>
        {character}
      </span>
    );
  }

  return (
    <div
      className="stroke-svg-container"
      dangerouslySetInnerHTML={{ __html: svgContent }}
      style={{
        flex: 1,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    />
  );
};

const StrokeOrderChar = ({ character }) => {
  if (character.length > 1) {
    return (
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        {character.split("").map((char, index) => (
          <SingleStrokeOrderChar key={index} character={char} />
        ))}
      </div>
    );
  }
  return <SingleStrokeOrderChar character={character} />;
};

export default function PrintWorksheet() {
  const { type } = useParams();
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search);
  const subtab = searchParams.get("subtab");

  const allCharacters = charactersData[type] || [];
  const characters = subtab
    ? allCharacters.filter((c) => c.category === subtab)
    : allCharacters;

  let subtabName = "";
  if (subtab === "gojuon") subtabName = " (Gojuon)";
  if (subtab === "dakuon") subtabName = " (Dakuon)";
  if (subtab === "yoon") subtabName = " (Yoon)";
  if (subtab === "gairaigo") subtabName = " (Gairaigo)";

  const title = type
    ? type.charAt(0).toUpperCase() +
      type.slice(1).replace("_", " ") +
      subtabName
    : "";

  return (
    <div className="container" style={{ maxWidth: "210mm", padding: "20px" }}>
      <div className="no-print">
        <Link
          to={`/learn/${type}`}
          className="back-btn"
          style={{ marginBottom: "1rem" }}
        >
          ← Kembali ke Pembelajaran
        </Link>
        <div
          style={{
            backgroundColor: "var(--bg-surface)",
            padding: "1.5rem",
            borderRadius: "2px",
            border: "1px solid var(--border)",
            textAlign: "center",
            marginBottom: "2rem",
          }}
        >
          <h2 style={{ color: "var(--kiniro)" }}>
            Mode Cetak Worksheet {title}
          </h2>
          <p className="text-secondary">
            Gunakan <strong>Ctrl+P (Windows)</strong> atau{" "}
            <strong>Cmd+P (Mac)</strong> untuk mencetak halaman ini.
          </p>
          <p style={{ color: "var(--sakura)", fontWeight: "500" }}>
            Tunggu sekitar 2-3 detik hingga angka merah petunjuk penulisan
            muncul sebelum mencetak.
          </p>
          <button
            onClick={() => window.print()}
            className="btn btn-primary"
            style={{ marginTop: "1rem" }}
          >
            Cetak Sekarang
          </button>
        </div>
      </div>

      <div
        className="worksheet-paper"
        style={{ textAlign: "center", marginBottom: "2rem" }}
      >
        <h1 className="print-title" style={{ fontSize: "1.5rem" }}>
          Lembar Latihan Menulis {title}
        </h1>
      </div>

      <div className="worksheet-paper worksheet-grid">
        {characters.map((char, index) => {
          return (
            <div key={`row-${index}`} className="worksheet-row">
              {/* Cell 1: Translation and Romaji */}
              <div
                className="worksheet-cell"
                style={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "4px",
                  textAlign: "center",
                  lineHeight: "1.2",
                }}
              >
                <span
                  style={{
                    fontSize: "11px",
                    color: "black",
                    fontWeight: "bold",
                  }}
                >
                  {char.meaning || char.romaji}
                </span>
                {char.meaning &&
                  char.romaji &&
                  char.meaning !== char.romaji && (
                    <span
                      style={{
                        fontSize: "9px",
                        color: "#555",
                        marginTop: "2px",
                      }}
                    >
                      ({char.romaji})
                    </span>
                  )}
              </div>

              {/* Cell 2: Stroke Order (KanjiVG) */}
              <div className="worksheet-cell" style={{ position: "relative" }}>
                <StrokeOrderChar character={char.character} />
              </div>

              {/* Cell 3 & 4: Watermark */}
              <div className="worksheet-cell">
                <span className="watermark-char">{char.character}</span>
              </div>
              <div className="worksheet-cell">
                <span className="watermark-char">{char.character}</span>
              </div>

              {/* Cell 5 to 9: Blanks */}
              {Array(5)
                .fill(null)
                .map((_, i) => (
                  <div
                    key={`blank-${index}-${i}`}
                    className="worksheet-cell"
                  ></div>
                ))}
            </div>
          );
        })}
      </div>
    </div>
  );
}
