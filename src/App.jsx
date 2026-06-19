import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { useEffect } from "react";
import Navigation from "./components/Navigation";
import Home from "./pages/Home";
import Learn from "./pages/Learn";
import PrintWorksheet from "./pages/PrintWorksheet";
import QuizMenu from "./pages/QuizMenu";
import EvaluationQuiz from "./pages/EvaluationQuiz";
import FlashcardPage from "./pages/FlashcardPage";
import MNNRoadmap from "./pages/MNNRoadmap";
import LessonDashboard from "./pages/LessonDashboard";
import MnnVocabulary from "./pages/MnnVocabulary";
import MnnGrammar from "./pages/MnnGrammar";
import DokkaiQuiz from "./pages/DokkaiQuiz";
import ChoukaiQuiz from "./pages/ChoukaiQuiz";
import VoiceTypist from "./pages/VoiceTypist";
import ConjugationTrainer from "./pages/ConjugationTrainer";
import ParticleTrainer from "./pages/ParticleTrainer";
import ReviewMode from "./pages/ReviewMode";
import ContextualSynonyms from "./pages/ContextualSynonyms";
import ProgressDashboard from "./pages/ProgressDashboard";
import JLPTMiniTest from "./pages/JLPTMiniTest";
import NotFound from "./pages/NotFound";

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="layout">
        <Navigation />
        <div className="main-content">
          <main className="page-content">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/learn/:type" element={<Learn />} />
              <Route path="/print/:type" element={<PrintWorksheet />} />
              <Route path="/roadmap" element={<MNNRoadmap />} />
              <Route path="/mnn/:id" element={<LessonDashboard />} />
              <Route path="/mnn/:id/vocabulary" element={<MnnVocabulary />} />
              <Route path="/mnn/:id/grammar" element={<MnnGrammar />} />
              <Route path="/mnn/:id/dokkai" element={<DokkaiQuiz />} />
              <Route path="/mnn/:id/choukai" element={<ChoukaiQuiz />} />
              <Route path="/quiz" element={<QuizMenu />} />
              <Route path="/quiz/:type" element={<EvaluationQuiz />} />
              <Route path="/jlpt-test" element={<JLPTMiniTest />} />
              <Route
                path="/trainer/conjugation"
                element={<ConjugationTrainer />}
              />
              <Route path="/trainer/particle" element={<ParticleTrainer />} />
              <Route path="/review" element={<ReviewMode />} />
              <Route path="/synonyms" element={<ContextualSynonyms />} />
              <Route path="/dashboard" element={<ProgressDashboard />} />
              <Route path="/flashcard" element={<FlashcardPage />} />
              <Route path="/voice" element={<VoiceTypist />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;
