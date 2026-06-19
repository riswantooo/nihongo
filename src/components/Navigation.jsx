import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useProgress } from "../context/ProgressContext";

const links = [
  { to: "/", label: "Beranda", match: (p) => p === "/" },
  {
    to: "/roadmap",
    label: "Silabus",
    match: (p) => p.startsWith("/roadmap") || p.startsWith("/mnn"),
  },
  {
    to: "/quiz",
    label: "Ujian & Latihan",
    match: (p) =>
      p.startsWith("/quiz") ||
      p.startsWith("/flashcard") ||
      p.startsWith("/trainer") ||
      p.startsWith("/jlpt"),
  },
  {
    to: "/dashboard",
    label: "Progress",
    match: (p) => p.startsWith("/dashboard"),
  },
  { to: "/voice", label: "Suara", match: (p) => p.startsWith("/voice") },
  {
    to: "/review",
    label: "Review SRS",
    match: (p) => p.startsWith("/review"),
  },
  {
    to: "/synonyms",
    label: "Sinonim",
    match: (p) => p.startsWith("/synonyms"),
  },
];

export default function Navigation() {
  const location = useLocation();
  const { isReviewMode, setIsReviewMode } = useProgress();
  const [theme, setTheme] = useState(
    () => localStorage.getItem("theme") || "dark",
  );
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  useEffect(() => {
    if (theme === "light") {
      document.documentElement.classList.add("light");
    } else {
      document.documentElement.classList.remove("light");
    }
  }, [theme]);

  const toggleTheme = () => {
    const newTheme = theme === "dark" ? "light" : "dark";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  if (location.pathname.startsWith("/print")) return null;

  const themeShort = theme === "dark" ? "暗" : "明";

  return (
    <>
      {/* ── Topbar (semua ukuran layar) ── */}
      <header className="topbar no-print">
        {/* Kiri: Logo */}
        <Link to="/" className="topbar-logo">
          <span className="topbar-logo-jp">日本語</span>
          <span className="topbar-logo-sep" />
          <span className="topbar-logo-latin">Nihongo</span>
        </Link>

        {/* Tengah: Nav links (desktop) */}
        <nav className="topbar-nav">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`topbar-link ${link.match(location.pathname) ? "active" : ""}`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Kanan: Aksi */}
        <div className="topbar-actions">
          <button
            className={`topbar-review ${isReviewMode ? "active" : ""}`}
            onClick={() => setIsReviewMode(!isReviewMode)}
          >
            {isReviewMode ? "Review: Aktif" : "Review"}
          </button>
          <button className="topbar-theme" onClick={toggleTheme}>
            {themeShort}
          </button>
          {/* Hamburger (mobile only) */}
          <button
            className={`hamburger-btn ${isDrawerOpen ? "open" : ""}`}
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            aria-label="Buka menu"
          >
            <span className="hamburger-line" />
            <span className="hamburger-line" />
            <span className="hamburger-line" />
          </button>
        </div>
      </header>

      {/* ── Mobile Drawer Overlay ── */}
      <div
        className={`mobile-drawer-overlay ${isDrawerOpen ? "open" : ""}`}
        onClick={() => setIsDrawerOpen(false)}
      />

      {/* ── Mobile Drawer ── */}
      <nav className={`mobile-drawer no-print ${isDrawerOpen ? "open" : ""}`}>
        <div className="mobile-drawer-logo">
          <Link to="/" onClick={() => setIsDrawerOpen(false)}>
            <span className="sidebar-logo-jp">日本語</span>
            <span className="sidebar-logo-latin">Nihongo</span>
          </Link>
        </div>
        <div className="mobile-drawer-nav">
          {links.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`sidebar-link ${link.match(location.pathname) ? "active" : ""}`}
              onClick={() => setIsDrawerOpen(false)}
            >
              {link.label}
            </Link>
          ))}
        </div>
        <div className="mobile-drawer-footer">
          <button
            className={`review-toggle ${isReviewMode ? "active" : ""}`}
            onClick={() => setIsReviewMode(!isReviewMode)}
          >
            {isReviewMode ? "Review Mode: Aktif" : "Review Mode: Off"}
          </button>
        </div>
      </nav>
    </>
  );
}
