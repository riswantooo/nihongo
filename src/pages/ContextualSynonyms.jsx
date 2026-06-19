import { useState, useMemo, useEffect } from "react";
import contextualSynonyms from "../data/contextualSynonyms";

const nuanceColors = {
  formal: { bg: "rgba(100, 149, 237, 0.12)", color: "#6495ed", border: "rgba(100, 149, 237, 0.3)" },
  "very-formal": { bg: "rgba(138, 96, 208, 0.12)", color: "#a17bdb", border: "rgba(138, 96, 208, 0.3)" },
  casual: { bg: "rgba(76, 175, 80, 0.12)", color: "#66bb6a", border: "rgba(76, 175, 80, 0.3)" },
  neutral: { bg: "rgba(200, 169, 126, 0.12)", color: "var(--accent)", border: "rgba(200, 169, 126, 0.3)" },
  masculine: { bg: "rgba(33, 150, 243, 0.12)", color: "#42a5f5", border: "rgba(33, 150, 243, 0.3)" },
  feminine: { bg: "rgba(236, 64, 122, 0.12)", color: "#ec407a", border: "rgba(236, 64, 122, 0.3)" },
  archaic: { bg: "rgba(161, 136, 97, 0.12)", color: "#a18861", border: "rgba(161, 136, 97, 0.3)" },
  regional: { bg: "rgba(255, 167, 38, 0.12)", color: "#ffa726", border: "rgba(255, 167, 38, 0.3)" },
  written: { bg: "rgba(120, 144, 156, 0.12)", color: "#90a4ae", border: "rgba(120, 144, 156, 0.3)" },
  spoken: { bg: "rgba(255, 202, 40, 0.12)", color: "#ffca28", border: "rgba(255, 202, 40, 0.3)" },
  special: { bg: "rgba(0, 188, 212, 0.12)", color: "#26c6da", border: "rgba(0, 188, 212, 0.3)" },
  emotional: { bg: "rgba(239, 83, 80, 0.12)", color: "#ef5350", border: "rgba(239, 83, 80, 0.3)" },
};

function NuanceBadge({ label, type }) {
  const style = nuanceColors[type] || nuanceColors.neutral;
  return (
    <span
      className="cs-badge"
      style={{
        background: style.bg,
        color: style.color,
        border: `1px solid ${style.border}`,
      }}
    >
      {label}
    </span>
  );
}

const playAudio = (text) => {
  if ("speechSynthesis" in window) {
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "ja-JP";
    window.speechSynthesis.speak(utterance);
  }
};

function WordCard({ word, index }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div
      className={`cs-card ${isOpen ? "cs-card--open" : ""}`}
      style={{ animationDelay: `${index * 60}ms` }}
    >
      {/* Card Header */}
      <button
        className="cs-card-header"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
      >
        <div className="cs-card-main">
          <div className="cs-card-jp-row">
            <span className="cs-card-jp text-jp">{word.japanese}</span>
            <span
              className="cs-voice-btn"
              onClick={(e) => {
                e.stopPropagation();
                playAudio(word.japanese);
              }}
              title="Dengarkan kata"
              role="button"
              tabIndex={0}
              onKeyDown={(e) => {
                if (e.key === "Enter" || e.key === " ") {
                  e.stopPropagation();
                  playAudio(word.japanese);
                }
              }}
            >
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
              </svg>
            </span>
          </div>
          <div className="cs-card-meta">
            <span className="cs-card-reading">{word.reading}</span>
            <span className="cs-card-dot">·</span>
            <span className="cs-card-romaji">{word.romaji}</span>
          </div>
          <span className="cs-card-translation">{word.translation}</span>
        </div>
        <div className="cs-card-right">
          <div className="cs-card-badges">
            {word.nuances.map((n, i) => (
              <NuanceBadge key={i} label={n.label} type={n.type} />
            ))}
          </div>
          <span className={`cs-card-chevron ${isOpen ? "cs-card-chevron--open" : ""}`}>
            ▾
          </span>
        </div>
      </button>

      {/* Card Body */}
      <div className={`cs-card-body ${isOpen ? "cs-card-body--open" : ""}`}>
        <div className="cs-card-body-inner">
          {/* Context */}
          <div className="cs-detail-section">
            <h4 className="cs-detail-label">Nuansa & Konteks</h4>
            <p className="cs-detail-text">{word.context}</p>
          </div>

          {/* Example */}
          <div className="cs-detail-section cs-example-section">
            <h4 className="cs-detail-label">Contoh Kalimat</h4>
            <div className="cs-example-box">
              <div className="cs-example-jp-row">
                <p className="cs-example-jp text-jp">{word.example.jp}</p>
                <button
                  className="cs-voice-btn cs-voice-btn--example"
                  onClick={(e) => {
                    e.stopPropagation();
                    playAudio(word.example.jp);
                  }}
                  title="Dengarkan kalimat"
                  aria-label="Dengarkan kalimat"
                >
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
                    <path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
                    <path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
                  </svg>
                </button>
              </div>
              <p className="cs-example-reading">{word.example.reading}</p>
              <p className="cs-example-romaji">{word.example.romaji}</p>
              <p className="cs-example-id">{word.example.id}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function CategorySection({ category }) {
  return (
    <section className="cs-category-section" id={`cat-section-${category.id}`}>
      <div className="cs-category-header">
        <span className="cs-category-icon">{category.icon}</span>
        <div>
          <h2 className="cs-category-title">{category.title}</h2>
          <p className="cs-category-subtitle">
            Terjemahan Indonesia: <strong>"{category.subtitle}"</strong>
          </p>
        </div>
      </div>
      <p className="cs-category-desc">{category.description}</p>

      {/* Word count */}
      <div className="cs-word-count">
        {category.words.length} kata sinonim
      </div>

      {/* Word Cards */}
      <div className="cs-cards-list">
        {category.words.map((word, idx) => (
          <WordCard key={`${word.romaji}-${idx}`} word={word} index={idx} />
        ))}
      </div>
    </section>
  );
}

const THEMES_ORDER = [
  "Kata Ganti (Pronomina)",
  "Keigo (Bahasa Sopan)",
  "Kata Hubung (Konjungsi)",
  "Kata Kerja (Verba)",
  "Kata Sifat (Adjektiva)",
  "Kata Keterangan (Adverba)",
  "Kata Benda (Nomina)",
  "Kata Tanya",
  "Ekspresi & Percakapan",
  "Partikel Akhir"
];

const getCategoryGroup = (id) => {
  if (id.includes("person") || id.includes("pronoun")) {
    return "Kata Ganti (Pronomina)";
  }
  if (id.startsWith("keigo-")) {
    return "Keigo (Bahasa Sopan)";
  }
  if (
    id.includes("conjunction") ||
    id.includes("conditional") ||
    id === "conditional-if" ||
    id === "adversative" ||
    id === "nevertheless"
  ) {
    return "Kata Hubung (Konjungsi)";
  }
  if (
    id.includes("adverb") ||
    [
      "together-jointly", "alone-independently", "slowly-gradually", "quickly-rapidly",
      "frequently-often", "rarely-seldom", "suddenly-abruptly", "finally-at-last",
      "probably-perhaps", "certainly-surely", "no-problem-ok", "whatever-indifferent",
      "sincerely-truly", "by-chance-coincidence", "no-wonder", "be-careful-cautious"
    ].includes(id)
  ) {
    return "Kata Keterangan (Adverba)";
  }
  if (
    id.includes("adj") ||
    [
      "big-large", "small-tiny", "new-modern", "old-ancient", "smart-intelligent",
      "foolish-dumb", "serious-earnest", "funny-interesting"
    ].includes(id)
  ) {
    return "Kata Sifat (Adjektiva)";
  }
  if (
    id.includes("expression") ||
    id === "thanks" ||
    id === "apology"
  ) {
    return "Ekspresi & Percakapan";
  }
  if (id.includes("particle")) {
    return "Partikel Akhir";
  }
  if (
    id.includes("noun") ||
    [
      "effort-hardwork", "hope-wish", "luck-happiness", "worry-anxiety",
      "human-relations", "reason-cause"
    ].includes(id)
  ) {
    return "Kata Benda (Nomina)";
  }
  if (
    id.includes("verb") ||
    [
      "understand-general", "ability-general", "try-general", "think-feel",
      "want-desire", "like-love", "dislike-hate", "listen-hear", "wait-expect",
      "enter-inside", "leave-exit", "buy-purchase", "sell-market", "use-utilize",
      "start-begin", "stop-finish", "return-go-back", "eating", "speaking"
    ].includes(id)
  ) {
    return "Kata Kerja (Verba)";
  }
  if (["why-reason", "how-manner", "how-much-many"].includes(id) || id.includes("question")) {
    return "Kata Tanya";
  }
  return "Lainnya";
};

export default function ContextualSynonyms() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeCategoryId, setActiveCategoryId] = useState("");
  const [isBottomSheetOpen, setIsBottomSheetOpen] = useState(false);
  const [expandedThemes, setExpandedThemes] = useState({});

  const filteredCategories = useMemo(() => {
    let cats = contextualSynonyms;

    if (searchQuery.trim()) {
      const q = searchQuery.trim().toLowerCase();
      cats = cats
        .map((cat) => ({
          ...cat,
          words: cat.words.filter(
            (w) =>
              w.japanese.includes(q) ||
              w.reading.includes(q) ||
              w.romaji.toLowerCase().includes(q) ||
              w.translation.toLowerCase().includes(q) ||
              w.context.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.words.length > 0);
    }

    return cats;
  }, [searchQuery]);

  const totalWords = useMemo(
    () => filteredCategories.reduce((sum, c) => sum + c.words.length, 0),
    [filteredCategories]
  );

  // Group categories by theme
  const groupedCategories = useMemo(() => {
    const groups = {};
    THEMES_ORDER.forEach((theme) => {
      groups[theme] = [];
    });

    filteredCategories.forEach((cat) => {
      const theme = getCategoryGroup(cat.id);
      if (!groups[theme]) {
        groups[theme] = [];
      }
      groups[theme].push(cat);
    });

    // Remove empty groups
    return Object.keys(groups)
      .filter((theme) => groups[theme].length > 0)
      .reduce((acc, theme) => {
        acc[theme] = groups[theme];
        return acc;
      }, {});
  }, [filteredCategories]);

  // Scroll-spy logic using IntersectionObserver
  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: "-10% 0px -75% 0px",
      threshold: 0,
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.id.replace("cat-section-", "");
          setActiveCategoryId(id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);
    const sections = document.querySelectorAll(".cs-category-section");
    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, [filteredCategories]);

  // Expanded state is computed dynamically based on active category during render

  const handleCategoryClick = (categoryId) => {
    const element = document.getElementById(`cat-section-${categoryId}`);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
    setIsBottomSheetOpen(false);
  };

  const toggleTheme = (themeName) => {
    setExpandedThemes((prev) => ({
      ...prev,
      [themeName]: prev[themeName] === false ? true : false,
    }));
  };

  return (
    <div className="cs-page container">
      {/* Page Header */}
      <header className="cs-page-header">
        <p className="eyebrow">Fenomena Bahasa Jepang</p>
        <h1 className="cs-page-title">
          <span className="text-jp" style={{ marginRight: "12px" }}>
            同義語
          </span>
          Sinonim Kontekstual
        </h1>
        <p className="cs-page-subtitle">
          Kata-kata Jepang yang berbeda namun memiliki terjemahan serupa dalam
          bahasa Indonesia — perbedaannya terletak pada <em>nuansa</em>,{" "}
          <em>formalitas</em>, dan <em>konteks pemakaian</em>.
        </p>
      </header>

      {/* Stats Bar */}
      <div className="cs-stats-bar">
        <div className="cs-stat">
          <span className="cs-stat-num">{contextualSynonyms.length}</span>
          <span className="cs-stat-label">Kategori</span>
        </div>
        <div className="cs-stat-sep" />
        <div className="cs-stat">
          <span className="cs-stat-num">
            {contextualSynonyms.reduce((s, c) => s + c.words.length, 0)}
          </span>
          <span className="cs-stat-label">Total Kata</span>
        </div>
        <div className="cs-stat-sep" />
        <div className="cs-stat">
          <span className="cs-stat-num">12</span>
          <span className="cs-stat-label">Jenis Nuansa</span>
        </div>
      </div>

      {/* Toolbar (Search only) */}
      <div className="cs-toolbar">
        <div className="cs-search-wrap">
          <span className="cs-search-icon"></span>
          <input
            type="text"
            className="cs-search-input"
            placeholder="Cari kata (romaji, kanji, arti)..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          {searchQuery && (
            <button
              className="cs-search-clear"
              onClick={() => setSearchQuery("")}
              aria-label="Hapus pencarian"
            />
          )}
        </div>
      </div>

      {/* Results info */}
      {searchQuery && (
        <div className="cs-results-info">
          Menampilkan <strong>{totalWords}</strong> kata dari{" "}
          <strong>{filteredCategories.length}</strong> kategori untuk pencarian "<em>{searchQuery}</em>"
        </div>
      )}

      {/* Legend */}
      <div className="cs-legend">
        <span className="cs-legend-title">Legenda Nuansa:</span>
        <div className="cs-legend-items">
          {Object.entries({
            formal: "Formal",
            "very-formal": "Sangat Formal",
            casual: "Kasual",
            neutral: "Netral",
            masculine: "Maskulin",
            feminine: "Feminin",
            archaic: "Arkaik",
            regional: "Regional",
            written: "Tulisan",
            spoken: "Lisan",
            special: "Khusus",
            emotional: "Emosional",
          }).map(([type, label]) => (
            <NuanceBadge key={type} label={label} type={type} />
          ))}
        </div>
      </div>

      {/* Layout Grid: Sidebar + Main Content */}
      <div className="cs-layout-grid">
        {/* Sidebar Nav (Desktop) */}
        <aside className="cs-sidebar">
          <div className="cs-sidebar-sticky">
            <h3 className="cs-sidebar-title">Daftar Tema</h3>
            <div className="cs-sidebar-groups">
              {Object.entries(groupedCategories).map(([themeName, categories]) => {
                const hasActive = categories.some((c) => c.id === activeCategoryId);
                const isExpanded = expandedThemes[themeName] === true || (expandedThemes[themeName] !== false && hasActive);

                return (
                  <div
                    key={themeName}
                    className={`cs-sidebar-group ${isExpanded ? "cs-sidebar-group--expanded" : ""} ${
                      hasActive ? "cs-sidebar-group--has-active" : ""
                    }`}
                  >
                    <button
                      className="cs-sidebar-group-header"
                      onClick={() => toggleTheme(themeName)}
                    >
                      <span className="cs-sidebar-group-name">{themeName}</span>
                      <span className="cs-sidebar-group-count">{categories.length}</span>
                      <span className="cs-sidebar-group-chevron">▾</span>
                    </button>

                    {isExpanded && (
                      <div className="cs-sidebar-group-list">
                        {categories.map((cat) => {
                          const isActive = cat.id === activeCategoryId;
                          return (
                            <button
                              key={cat.id}
                              className={`cs-sidebar-item ${isActive ? "cs-sidebar-item--active" : ""}`}
                              onClick={() => handleCategoryClick(cat.id)}
                            >
                              <span className="cs-sidebar-item-sub">{cat.subtitle}</span>
                              <span className="cs-sidebar-item-title">{cat.title}</span>
                            </button>
                          );
                        })}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>
        </aside>

        {/* Categories Content (Right column on desktop, full-width on mobile) */}
        <div className="cs-categories">
          {Object.keys(groupedCategories).length > 0 ? (
            Object.entries(groupedCategories).map(([themeName, categories]) => (
              <div key={themeName} className="cs-theme-group-section">
                <h3 className="cs-theme-group-title">{themeName}</h3>
                <div className="cs-theme-group-list">
                  {categories.map((cat) => (
                    <CategorySection key={cat.id} category={cat} />
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="cs-empty">
              <span className="cs-empty-icon"></span>
              <p>Tidak ditemukan kata yang cocok.</p>
              <button
                className="btn btn-outline"
                onClick={() => {
                  setSearchQuery("");
                }}
              >
                Reset Pencarian
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Floating Action Button (FAB) for Mobile */}
      <button
        className="cs-mobile-fab"
        onClick={() => setIsBottomSheetOpen(true)}
        aria-label="Buka filter kategori"
      >
        <span className="cs-mobile-fab-icon"></span>
        <span className="cs-mobile-fab-text">Kategori</span>
        <span className="cs-mobile-fab-badge">{filteredCategories.length}</span>
      </button>

      {/* Bottom Sheet for Mobile */}
      <div
        className={`cs-bottom-sheet-backdrop ${isBottomSheetOpen ? "cs-bottom-sheet-backdrop--open" : ""}`}
        onClick={() => setIsBottomSheetOpen(false)}
      >
        <div
          className={`cs-bottom-sheet ${isBottomSheetOpen ? "cs-bottom-sheet--open" : ""}`}
          onClick={(e) => e.stopPropagation()}
        >
          <div className="cs-bottom-sheet-header">
            <div className="cs-bottom-sheet-drag-handle" />
            <div className="cs-bottom-sheet-title-row">
              <h3 className="cs-bottom-sheet-title">Pilih Kategori</h3>
              <button
                className="cs-bottom-sheet-close"
                onClick={() => setIsBottomSheetOpen(false)}
              >
                &times;
              </button>
            </div>
          </div>

          <div className="cs-bottom-sheet-content">
            {Object.entries(groupedCategories).map(([themeName, categories]) => (
              <div key={themeName} className="cs-bs-group">
                <h4 className="cs-bs-group-title">{themeName}</h4>
                <div className="cs-bs-grid">
                  {categories.map((cat) => {
                    const isActive = cat.id === activeCategoryId;
                    return (
                      <button
                        key={cat.id}
                        className={`cs-bs-item ${isActive ? "cs-bs-item--active" : ""}`}
                        onClick={() => handleCategoryClick(cat.id)}
                      >
                        <span className="cs-bs-item-sub">{cat.subtitle}</span>
                        <span className="cs-bs-item-title">{cat.title}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
