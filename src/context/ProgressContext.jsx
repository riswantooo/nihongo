import { createContext, useContext, useState, useEffect } from 'react';

const ProgressContext = createContext();

export function ProgressProvider({ children }) {
  const [targetLevel, setTargetLevel] = useState(() => {
    return localStorage.getItem('target_level') || 'N5';
  });

  const [mnnProgress, setMnnProgress] = useState(() => {
    const saved = localStorage.getItem('mnn_progress');
    return saved ? JSON.parse(saved) : {};
  });

  const [quizScores, setQuizScores] = useState(() => {
    const saved = localStorage.getItem('quiz_scores');
    if (saved) return JSON.parse(saved);
    
    // Migrate old n5_quiz_scores if exists
    const oldN5 = localStorage.getItem('n5_quiz_scores');
    if (oldN5) {
      return { N5: JSON.parse(oldN5), N4: {} };
    }
    return { N5: {}, N4: {} };
  });

  const [isReviewMode, setIsReviewMode] = useState(() => {
    const saved = localStorage.getItem('review_mode');
    return saved === 'true';
  });

  useEffect(() => {
    localStorage.setItem('target_level', targetLevel);
  }, [targetLevel]);

  useEffect(() => {
    localStorage.setItem('mnn_progress', JSON.stringify(mnnProgress));
  }, [mnnProgress]);

  useEffect(() => {
    localStorage.setItem('quiz_scores', JSON.stringify(quizScores));
  }, [quizScores]);

  useEffect(() => {
    localStorage.setItem('review_mode', isReviewMode);
  }, [isReviewMode]);

  const updateQuizScore = (category, score) => {
    setQuizScores(prev => {
      const levelScores = prev[targetLevel] || {};
      if (!levelScores[category] || score > levelScores[category]) {
        return { 
          ...prev, 
          [targetLevel]: { ...levelScores, [category]: score } 
        };
      }
      return prev;
    });
  };

  const markTaskCompleted = (lessonId, taskName) => {
    setMnnProgress(prev => {
      const lessonProgress = prev[lessonId] || [];
      if (!lessonProgress.includes(taskName)) {
        return {
          ...prev,
          [lessonId]: [...lessonProgress, taskName]
        };
      }
      return prev;
    });
  };

  const isLessonCompleted = (lessonId) => {
    const prog = mnnProgress[lessonId] || [];
    return prog.includes("vocabulary") && prog.includes("grammar") && prog.includes("choukai") && prog.includes("dokkai");
  };

  const isLessonUnlocked = (lessonId) => {
    if (isReviewMode) return true;
    
    // Prasyarat mutlak: Bab 1 hanya terbuka jika sudah lulus Hiragana & Katakana
    if (lessonId === 1) {
      const hScore = quizScores?.N5?.hiragana || 0;
      const kScore = quizScores?.N5?.katakana || 0;
      return hScore >= 80 && kScore >= 80;
    }
    
    // Bab lainnya (termasuk 26) mensyaratkan bab sebelumnya selesai
    return isLessonCompleted(lessonId - 1);
  };

  return (
    <ProgressContext.Provider value={{ 
      targetLevel,
      setTargetLevel,
      mnnProgress, 
      markTaskCompleted, 
      isLessonCompleted, 
      isLessonUnlocked, 
      quizScores, // Export all quiz scores now
      updateQuizScore,
      isReviewMode,
      setIsReviewMode
    }}>
      {children}
    </ProgressContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProgress = () => useContext(ProgressContext);
