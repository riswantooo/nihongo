import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="container">
      <div className="not-found animate-fade-in">
        <div className="not-found-kanji">迷子</div>
        <h1>Halaman Tidak Ditemukan</h1>
        <p
          className="text-secondary"
          style={{ marginBottom: "2rem", fontSize: "1.1rem" }}
        >
          Sepertinya Anda tersesat. Halaman yang Anda cari tidak tersedia.
        </p>
        <Link to="/" className="btn btn-primary">
          ← Kembali ke Beranda
        </Link>
      </div>
    </div>
  );
}
