import { useParams, Link, useNavigate } from "react-router-dom";
import mnnData from "../data/mnn.json";
import { useProgress } from "../context/ProgressContext";

export default function LessonDashboard() {
  const { id } = useParams();
  const navigate = useNavigate();
  const lessonId = parseInt(id);
  const lesson = mnnData.find((d) => d.id === lessonId);
  const { mnnProgress } = useProgress();

  if (!lesson)
    return (
      <div className="container">
        Materi Bab {lessonId} tidak ditemukan atau belum tersedia.
      </div>
    );

  const progress = mnnProgress[lessonId] || [];

  const tasks = [
    {
      id: "vocabulary",
      name: "Kosakata (Hafalan)",
      path: `/mnn/${lessonId}/vocabulary`,
    },
    {
      id: "grammar",
      name: "Tata Bahasa (Bunpou)",
      path: `/mnn/${lessonId}/grammar`,
    },
    {
      id: "choukai",
      name: "Ujian Mendengar (Choukai)",
      path: `/mnn/${lessonId}/choukai`,
    },
    {
      id: "dokkai",
      name: "Ujian Membaca (Dokkai)",
      path: `/mnn/${lessonId}/dokkai`,
    },
  ];

  return (
    <div className="container animate-fade-in" style={{ maxWidth: "800px" }}>
      <button onClick={() => navigate("/roadmap")} className="back-btn">
        ← Kembali ke Silabus
      </button>

      <header className="section-header lesson-dashboard-summary glass-card no-hover">
        <div className="eyebrow">Bab {lessonId}</div>
        <h1>{lesson.title}</h1>
        <p>
          Selesaikan keempat pilar di bawah ini untuk membuka kunci Bab
          selanjutnya.
        </p>
      </header>

      <div className="dashboard-grid stagger-children">
        {tasks.map((task) => {
          const isCompleted = progress.includes(task.id);
          return (
            <Link
              key={task.id}
              to={task.path}
              className={`task-card ${isCompleted ? "completed" : ""}`}
            >
              <div className="task-name">{task.name}</div>
              {isCompleted && <span className="task-check">✓</span>}
            </Link>
          );
        })}
      </div>
    </div>
  );
}
