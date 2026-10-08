/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';
import { PART1_ANATOMY1 } from '../data/part1';
import { PART2_ANATOMY2 } from '../data/part2';
import { PART3_PHYSIO1 } from '../data/part3';
import { PART4_PHYSIO2 } from '../data/part4';
import { PART5_TRAINING_PLAN } from '../data/trainingPlan';
import { MESO_INTRO_DATA } from '../data/mesoIntro';

const WINGATE_DATA = [
  ...(PART5_TRAINING_PLAN || []),
  ...(PART1_ANATOMY1 || []),
  ...(PART2_ANATOMY2 || []),
  ...(PART3_PHYSIO1 || []),
  ...(PART4_PHYSIO2 || [])
];

const MESO_DATA = [
  ...(MESO_INTRO_DATA || [])
];

// מנוע תרשימים ואיורים חזותיים מחוברות מזו ווינגייט
function MesoIllustrationRenderer({ q }: { q: any }) {
  const text = `${q.topic || ''} ${q.title || ''} ${q.questionText || ''} ${q.explanation || ''}`.toLowerCase();

  // 1. שלד צירי מול שלד תוספי (איור 2.1 במזו)
  if (text.includes('צירי') || text.includes('תוספי') || text.includes('sternum') || text.includes('axial')) {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
          🦴 איור שלד צירי (בז׳) מול שלד תוספי (תכלת) - מזו אקדמי:
        </span>
        <svg viewBox="0 0 340 100" style={{ width: '100%', height: 'auto', maxHeight: '110px' }}>
          {/* שלד צירי */}
          <rect x="20" y="10" width="140" height="80" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <text x="90" y="30" fill="#a5b4fc" fontSize="11" fontWeight="bold" textAnchor="middle">שלד צירי (Axial)</text>
          <text x="90" y="50" fill="#f8fafc" fontSize="9" textAnchor="middle">גולגולת, עמוד שדרה,</text>
          <text x="90" y="65" fill="#f8fafc" fontSize="9" textAnchor="middle">עצם החזה (Sternum) וצלעות</text>
          <text x="90" y="80" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">תפקיד: הגנה על איברים חיוניים</text>

          {/* שלד תוספי */}
          <rect x="180" y="10" width="140" height="80" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          <text x="250" y="30" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">שלד תוספי (Appendicular)</text>
          <text x="250" y="50" fill="#f8fafc" fontSize="9" textAnchor="middle">עצמות הגפיים, עצם הבריח,</text>
          <text x="250" y="65" fill="#f8fafc" fontSize="9" textAnchor="middle">השכמות ועצמות האגן</text>
          <text x="250" y="80" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">תפקיד: הפקת תנועה ומנופים</text>
        </svg>
      </div>
    );
  }

  // 2. מבנה עצם: קומפקטית מול ספוגית (איור 2.3 במזו)
  if (text.includes('צפופה') || text.includes('ספוגית') || text.includes('compact') || text.includes('spongy')) {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', display: 'block', marginBottom: '6px' }}>
          🔬 חתך עצם: מעטפת קומפקטית מול ליבה ספוגית - מזו אקדמי:
        </span>
        <svg viewBox="0 0 340 100" style={{ width: '100%', height: 'auto', maxHeight: '110px' }}>
          <rect x="25" y="15" width="290" height="70" rx="10" fill="#0f172a" stroke="#d97706" strokeWidth="2" />
          {/* קומפקטית עליונה */}
          <rect x="25" y="15" width="290" height="16" fill="#b45309" />
          <text x="170" y="27" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">מעטפת קומפקטית (Compact) - מספקת חוזק ועמידות בדחיסה</text>
          {/* ספוגית מרכזית */}
          <rect x="25" y="31" width="290" height="38" fill="#1e293b" strokeDasharray="3 3" />
          <text x="170" y="53" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">ליבה ספוגית (Spongy) - רשת חללים לבלימת זעזועים ומשקל קל</text>
          {/* קומפקטית תחתונה */}
          <rect x="25" y="69" width="290" height="16" fill="#b45309" />
          <text x="170" y="81" fill="#ffffff" fontSize="8" textAnchor="middle">פריאוסט (קרום העצם) עוטף מבחוץ עם כלי דם ועצבים</text>
        </svg>
      </div>
    );
  }

  // 3. רמות ארגון הגוף (איור 1.2 במזו)
  if (text.includes('רמות ארגון') || text.includes('תא') || text.includes('איבר') || text.includes('מערכת')) {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#34d399', display: 'block', marginBottom: '6px' }}>
          📊 פירמידת רמות הארגון של הגוף החי - מזו אקדמי:
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '4px', textAlign: 'center', fontSize: '9px' }}>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #3b82f6' }}>
            <strong style={{ color: '#60a5fa', display: 'block' }}>1. תא (Cell)</strong>
            <span style={{ color: '#cbd5e1' }}>אבן הבניין הבסיסית</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #a855f7' }}>
            <strong style={{ color: '#c084fc', display: 'block' }}>2. רקמה (Tissue)</strong>
            <span style={{ color: '#cbd5e1' }}>מצבור תאים לפעולה</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #f59e0b' }}>
            <strong style={{ color: '#fbbf24', display: 'block' }}>3. איבר (Organ)</strong>
            <span style={{ color: '#cbd5e1' }}>מספר רקמות יחדיו</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #10b981' }}>
            <strong style={{ color: '#34d399', display: 'block' }}>4. מערכת (System)</strong>
            <span style={{ color: '#cbd5e1' }}>איברים למטרה אחת</span>
          </div>
        </div>
      </div>
    );
  }

  // 4. סחוסים ומפרקים (איור 2.10 במזו)
  return (
    <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '10px' }}>
      <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#a855f7', display: 'block', marginBottom: '6px' }}>
        🔍 מפרק סינוביאלי וסחוסים - מזו אקדמי:
      </span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center', fontSize: '9px' }}>
        <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #334155' }}>
          <strong style={{ color: '#38bdf8', display: 'block' }}>סחוס היאליני</strong>
          <span style={{ color: '#cbd5e1' }}>דק, חלק, מונע חיכוך בקצות עצמות</span>
        </div>
        <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #334155' }}>
          <strong style={{ color: '#ef4444', display: 'block' }}>סחוס סיבי</strong>
          <span style={{ color: '#cbd5e1' }}>עבה ועמיד בדחיסה (דיסק, מניסקוס)</span>
        </div>
        <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #334155' }}>
          <strong style={{ color: '#10b981', display: 'block' }}>נוזל סינוביאלי</strong>
          <span style={{ color: '#cbd5e1' }}>שמן המפרק, מופרש בתנועה</span>
        </div>
      </div>
    </div>
  );
}

function shuffleList(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function App() {
  const [mounted, setMounted] = useState(false);
  // בורר מקור ראשי: 'meso' או 'wingate'
  const [institution, setInstitution] = useState<'meso' | 'wingate'>('meso');

  const [activeModule, setActiveModule] = useState('all');
  const [quizList, setQuizList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [isDeepStudyOpen, setIsDeepStudyOpen] = useState(false);
  const [examMode, setExamMode] = useState<'practice' | 'real'>('practice');
  const [paceSecondsPerQ, setPaceSecondsPerQ] = useState(90);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});

  useEffect(() => {
    setMounted(true);
    resetAndShuffle('meso', 'all', 'practice', paceSecondsPerQ);
  }, []);

  useEffect(() => {
    if (examMode !== 'real' || isExamCompleted || timeLeft <= 0) return;

    const timer = setInterval(() => {
      setTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          finishRealExam();
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [examMode, isExamCompleted, timeLeft]);

  const resetAndShuffle = (inst = institution, modId = activeModule, mode = examMode, paceSec = paceSecondsPerQ) => {
    stopSpeech();

    let baseSource = inst === 'meso' ? MESO_DATA : WINGATE_DATA;
    let source = baseSource;

    if (modId !== 'all') {
      source = baseSource.filter((q) => q.moduleId === modId);
    }

    const randomized = shuffleList(source).map((q) => ({
      ...q,
      options: shuffleList(q.options)
    }));

    setQuizList(randomized);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setShowExplanation(false);
    setIsDeepStudyOpen(false);
    setScore(0);
    setStreak(0);
    setUserAnswers({});
    setIsExamCompleted(false);

    if (mode === 'real') {
      setTimeLeft(randomized.length * paceSec);
    } else {
      setTimeLeft(0);
    }
  };

  const handleInstitutionSwitch = (newInst: 'meso' | 'wingate') => {
    setInstitution(newInst);
    setActiveModule('all');
    resetAndShuffle(newInst, 'all', examMode, paceSecondsPerQ);
  };

  const handleModuleClick = (modId: string) => {
    setActiveModule(modId);
    resetAndShuffle(institution, modId, examMode, paceSecondsPerQ);
  };

  const handleModeChange = (newMode: 'practice' | 'real') => {
    setExamMode(newMode);
    resetAndShuffle(institution, activeModule, newMode, paceSecondsPerQ);
  };

  const handlePaceChange = (sec: number) => {
    setPaceSecondsPerQ(sec);
    if (examMode === 'real') {
      resetAndShuffle(institution, activeModule, 'real', sec);
    }
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  const stopSpeech = () => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}
    setIsSpeaking(false);
  };

  const handleSpeakFullQuestion = () => {
    if (isSpeaking) {
      stopSpeech();
      return;
    }

    const currentQ = quizList[currentIndex];
    if (!currentQ || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    const letters = ['א', 'ב', 'ג', 'ד'];
    const optionsText = currentQ.options
      .map((opt, i) => `אפשרות ${letters[i]}: ${opt.text}`)
      .join('. ');

    const hintPart = (examMode === 'practice' && currentQ.hint) ? `רמז: ${currentQ.hint}. ` : '';
    const fullScript = `שאלה בנושא ${currentQ.topic}. ${currentQ.questionText}. ${hintPart}אפשרויות: ${optionsText}.`;

    const utterance = new SpeechSynthesisUtterance(fullScript);
    utterance.lang = 'he-IL';
    utterance.rate = 0.88;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const speakCustom = (text: string) => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'he-IL';
        u.rate = 0.88;
        window.speechSynthesis.speak(u);
      }
    } catch (e) {}
  };

  if (!mounted || quizList.length === 0) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        טוען שאלות ותרשימים עבור שמואל...
      </div>
    );
  }

  const currentQ = quizList[currentIndex];

  const finishRealExam = () => {
    stopSpeech();
    setIsExamCompleted(true);
  };

  const handleCheckPractice = () => {
    if (!selectedOption || isAnswerChecked) return;
    const chosen = currentQ.options.find((o) => o.id === selectedOption);
    const correct = chosen?.isCorrect;

    setIsAnswerChecked(true);
    setShowExplanation(true);

    if (correct) {
      setScore((s) => s + 10);
      setStreak((s) => s + 1);
      speakCustom('נכון מאוד שמואל! תשובה מדויקת.');
    } else {
      setStreak(0);
      const right = currentQ.options.find((o) => o.isCorrect)?.text;
      speakCustom(`לא מדויק. התשובה הנכונה היא: ${right}.`);
    }
  };

  const handleNextPractice = () => {
    stopSpeech();
    if (currentIndex < quizList.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
      setIsDeepStudyOpen(false);
    } else {
      alert(`כל הכבוד שמואל!\nסיימת את תרגול ${institution === 'meso' ? 'מזו אקדמי' : 'וינגייט'} בהצלחה!\nצברת ${score} נקודות!`);
      resetAndShuffle(institution, activeModule, 'practice');
    }
  };

  const handleNextReal = () => {
    stopSpeech();
    if (selectedOption) {
      setUserAnswers(prev => ({ ...prev, [currentQ.id]: selectedOption }));
    }

    if (currentIndex < quizList.length - 1) {
      const nextIdx = currentIndex + 1;
      setCurrentIndex(nextIdx);
      setSelectedOption(userAnswers[quizList[nextIdx]?.id] || null);
    } else {
      finishRealExam();
    }
  };

  const realScoreResults = (() => {
    if (!isExamCompleted) return { correct: 0, total: 0, percentage: 0 };
    let correctCount = 0;
    quizList.forEach((q) => {
      const chosenId = userAnswers[q.id];
      const correctOpt = q.options.find((o) => o.isCorrect);
      if (chosenId && correctOpt && chosenId === correctOpt.id) {
        correctCount++;
      }
    });
    const percentage = Math.round((correctCount / quizList.length) * 100);
    return { correct: correctCount, total: quizList.length, percentage };
  })();

  if (isExamCompleted) {
    const isPassed = realScoreResults.percentage >= 70;
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '16px', maxWidth: '540px', margin: '0 auto' }} dir="rtl">
        <div style={{ backgroundColor: '#0f172a', border: '2px solid #334155', borderRadius: '18px', padding: '20px', textAlign: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '46px' }}>{isPassed ? '🏆' : '⚠️'}</span>
          <h2 style={{ fontSize: '20px', fontWeight: '900', color: isPassed ? '#10b981' : '#f43f5e', margin: '8px 0' }}>
            {isPassed ? `כל הכבוד שמואל! עברת את מבחן ${institution === 'meso' ? 'מזו אקדמי' : 'וינגייט'}!` : 'לא עברת הפעם - תרגול נוסף יביא אותך לשם!'}
          </h2>
          <div style={{ fontSize: '32px', fontWeight: '900', color: '#fbbf24', margin: '12px 0' }}>
            ציון: {realScoreResults.percentage}
          </div>
          <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>
            ענית נכון על {realScoreResults.correct} מתוך {realScoreResults.total} שאלות (ציון עובר: 70)
          </p>

          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <button
              onClick={() => resetAndShuffle(institution, activeModule, 'real', paceSecondsPerQ)}
              style={{ flex: 1, backgroundColor: '#0284c7', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: '900', fontSize: '14px', cursor: 'pointer' }}
            >
              🔄 מבחן חוזר
            </button>
            <button
              onClick={() => handleModeChange('practice')}
              style={{ flex: 1, backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7', padding: '12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}
            >
              💡 חזרה לתרגול מודרך
            </button>
          </div>
        </div>

        <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '10px' }}>🔍 תחקור תשובות מלא ותרשימים:</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {quizList.map((q, idx) => {
            const userChoice = userAnswers[q.id];
            const correctOpt = q.options.find((o) => o.isCorrect);
            const isUserRight = userChoice === correctOpt?.id;
            const chosenText = q.options.find((o) => o.id === userChoice)?.text || 'לא נענה';

            return (
              <div key={q.id} style={{ backgroundColor: '#0b1329', border: `1px solid ${isUserRight ? '#065f46' : '#991b1b'}`, borderRadius: '14px', padding: '12px', fontSize: '12px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '6px' }}>
                  <span style={{ fontWeight: 'bold', color: isUserRight ? '#34d399' : '#f87171' }}>
                    שאלה {idx + 1}: {isUserRight ? '✔ נכון' : '✖ שגוי'}
                  </span>
                  <span style={{ color: '#64748b', fontSize: '10px' }}>{q.topic}</span>
                </div>
                <p style={{ fontWeight: 'bold', color: '#f8fafc', margin: '0 0 6px 0' }}>{q.questionText}</p>
                
                <div style={{ backgroundColor: '#020617', padding: '6px 8px', borderRadius: '6px', marginBottom: '8px' }}>
                  {!isUserRight && <div style={{ color: '#fb7185' }}>התשובה שלך: {chosenText}</div>}
                  <div style={{ color: '#34d399', fontWeight: 'bold' }}>התשובה הנכונה: {correctOpt?.text}</div>
                </div>

                <MesoIllustrationRenderer q={q} />

                <div style={{ color: '#cbd5e1', fontSize: '11px', lineHeight: '1.4', backgroundColor: '#0f172a', padding: '8px', borderRadius: '8px' }}>
                  💡 <strong>הסבר פדגוגי מורחב:</strong> {q.explanation}
                </div>
              </div>
            );
          })}
        </div>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '14px', maxWidth: '520px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} dir="rtl">
      
      <div>
        <header style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '900', color: institution === 'meso' ? '#38bdf8' : '#fbbf24' }}>
                {institution === 'meso' ? '🏛️ מזו אקדמי - שמואל' : '🦁 וינגייט קואוץ\' - שמואל'}
              </h1>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                {institution === 'meso' ? 'מאגר השאלות, הסחוסים, העצמות והרקמות ממצגות 1+2' : 'מאגר תכנון אימון, אנטומיה ופיזיולוגיה'}
              </span>
            </div>

            <button
              onClick={() => resetAndShuffle(institution, activeModule, examMode, paceSecondsPerQ)}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              🔄 איפוס
            </button>
          </div>

          {/* 2 כפתורים מופרדים לבחירת המוסד: מזו אקדמי מול וינגייט */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '10px' }}>
            <button
              onClick={() => handleInstitutionSwitch('meso')}
              style={{
                backgroundColor: institution === 'meso' ? '#0284c7' : '#0f172a',
                color: institution === 'meso' ? '#ffffff' : '#38bdf8',
                border: institution === 'meso' ? '2px solid #38bdf8' : '1px solid #1e293b',
                borderRadius: '12px',
                padding: '10px',
                fontSize: '13px',
                fontWeight: '900',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: institution === 'meso' ? '0 4px 14px rgba(2, 132, 199, 0.3)' : 'none'
              }}
            >
              <span>🏛️ מזו אקדמי (Meso)</span>
              <span style={{ fontSize: '10px', opacity: 0.85 }}>מבוא, רקמות, שלד ({MESO_DATA.length})</span>
            </button>

            <button
              onClick={() => handleInstitutionSwitch('wingate')}
              style={{
                backgroundColor: institution === 'wingate' ? '#b45309' : '#0f172a',
                color: institution === 'wingate' ? '#ffffff' : '#fbbf24',
                border: institution === 'wingate' ? '2px solid #fbbf24' : '1px solid #1e293b',
                borderRadius: '12px',
                padding: '10px',
                fontSize: '13px',
                fontWeight: '900',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxShadow: institution === 'wingate' ? '0 4px 14px rgba(180, 83, 9, 0.3)' : 'none'
              }}
            >
              <span>🦁 מכללת וינגייט (Wingate)</span>
              <span style={{ fontSize: '10px', opacity: 0.85 }}>תכנון אימון, אנטומיה ({WINGATE_DATA.length})</span>
            </button>
          </div>

          {/* מתג בחירת מצב: תרגול מול מבחן אמת */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px', backgroundColor: '#0f172a', padding: '4px', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <button
              onClick={() => handleModeChange('practice')}
              style={{
                backgroundColor: examMode === 'practice' ? (institution === 'meso' ? '#0284c7' : '#f59e0b') : 'transparent',
                color: examMode === 'practice' ? (institution === 'meso' ? '#ffffff' : '#020617') : '#94a3b8',
                border: 'none',
                padding: '7px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '900',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              💡 מצב תרגול (הסברים ואיורים)
            </button>

            <button
              onClick={() => handleModeChange('real')}
              style={{
                backgroundColor: examMode === 'real' ? '#ef4444' : 'transparent',
                color: examMode === 'real' ? '#ffffff' : '#94a3b8',
                border: 'none',
                padding: '7px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '900',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              ⏱️ מבחן אמת (טיימר בלי רמזים)
            </button>
          </div>

          {examMode === 'real' && (
            <div style={{ backgroundColor: '#1e1b4b', border: '1px solid #4338ca', padding: '8px 12px', borderRadius: '12px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
              <div>
                <span style={{ fontSize: '10px', color: '#c7d2fe', display: 'block' }}>קצב והקצבת זמן לשאלה:</span>
                <div style={{ display: 'flex', gap: '4px', marginTop: '2px' }}>
                  <button onClick={() => handlePaceChange(90)} style={{ backgroundColor: paceSecondsPerQ === 90 ? '#38bdf8' : '#0f172a', color: paceSecondsPerQ === 90 ? '#020617' : '#94a3b8', border: '1px solid #334155', borderRadius: '6px', fontSize: '10px', padding: '2px 6px', fontWeight: 'bold' }}>90 ש'</button>
                  <button onClick={() => handlePaceChange(60)} style={{ backgroundColor: paceSecondsPerQ === 60 ? '#38bdf8' : '#0f172a', color: paceSecondsPerQ === 60 ? '#020617' : '#94a3b8', border: '1px solid #334155', borderRadius: '6px', fontSize: '10px', padding: '2px 6px', fontWeight: 'bold' }}>60 ש'</button>
                  <button onClick={() => handlePaceChange(45)} style={{ backgroundColor: paceSecondsPerQ === 45 ? '#38bdf8' : '#0f172a', color: paceSecondsPerQ === 45 ? '#020617' : '#94a3b8', border: '1px solid #334155', borderRadius: '6px', fontSize: '10px', padding: '2px 6px', fontWeight: 'bold' }}>45 ש'</button>
                </div>
              </div>

              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '10px', color: '#cbd5e1', display: 'block' }}>זמן נותר:</span>
                <span style={{ fontSize: '18px', fontWeight: '900', color: timeLeft <= 300 ? '#f43f5e' : '#34d399', fontFamily: 'monospace' }}>
                  ⏳ {formatTimer(timeLeft)}
                </span>
              </div>
            </div>
          )}

          {/* שורת סינון משנית לפי נושאים במכללת וינגייט */}
          {institution === 'wingate' && (
            <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '8px' }}>
              <button onClick={() => handleModuleClick('all')} style={{ backgroundColor: activeModule === 'all' ? '#f59e0b' : '#0f172a', color: activeModule === 'all' ? '#020617' : '#94a3b8', border: '1px solid #334155', padding: '5px 9px', borderRadius: '8px', fontSize: '10px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>הכל</button>
              <button onClick={() => handleModuleClick('train_plan')} style={{ backgroundColor: activeModule === 'train_plan' ? '#10b981' : '#0f172a', color: activeModule === 'train_plan' ? '#020617' : '#34d399', border: '1px solid #059669', padding: '5px 9px', borderRadius: '8px', fontSize: '10px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>תכנון אימון</button>
              <button onClick={() => handleModuleClick('anat1')} style={{ backgroundColor: activeModule === 'anat1' ? '#f59e0b' : '#0f172a', color: activeModule === 'anat1' ? '#020617' : '#94a3b8', border: '1px solid #334155', padding: '5px 9px', borderRadius: '8px', fontSize: '10px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>אנטומיה א'</button>
              <button onClick={() => handleModuleClick('anat2')} style={{ backgroundColor: activeModule === 'anat2' ? '#f59e0b' : '#0f172a', color: activeModule === 'anat2' ? '#020617' : '#94a3b8', border: '1px solid #334155', padding: '5px 9px', borderRadius: '8px', fontSize: '10px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>אנטומיה ב'</button>
              <button onClick={() => handleModuleClick('phys1')} style={{ backgroundColor: activeModule === 'phys1' ? '#f59e0b' : '#0f172a', color: activeModule === 'phys1' ? '#020617' : '#94a3b8', border: '1px solid #334155', padding: '5px 9px', borderRadius: '8px', fontSize: '10px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>פיזיולוגיה א'</button>
              <button onClick={() => handleModuleClick('phys2')} style={{ backgroundColor: activeModule === 'phys2' ? '#f59e0b' : '#0f172a', color: activeModule === 'phys2' ? '#020617' : '#94a3b8', border: '1px solid #334155', padding: '5px 9px', borderRadius: '8px', fontSize: '10px', fontWeight: 'bold', whiteSpace: 'nowrap' }}>פיזיולוגיה ב'</button>
            </div>
          )}

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', marginBottom: '6px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ backgroundColor: 'rgba(56, 189, 248, 0.15)', color: '#38bdf8', padding: '3px 8px', borderRadius: '8px', fontWeight: 'bold' }}>🔥 רצף: {streak}</span>
              <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '3px 8px', borderRadius: '8px', fontWeight: 'bold' }}>⭐ {score} XP</span>
            </div>
            <span style={{ color: '#94a3b8', fontWeight: 'bold' }}>שאלה {currentIndex + 1} מתוך {quizList.length}</span>
          </div>

          <div style={{ width: '100%', backgroundColor: '#0f172a', height: '8px', borderRadius: '999px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <div style={{ width: `${((currentIndex + 1) / quizList.length) * 100}%`, height: '100%', background: institution === 'meso' ? 'linear-gradient(to left, #0284c7, #38bdf8)' : 'linear-gradient(to left, #f59e0b, #10b981)', transition: 'width 0.3s ease' }} />
          </div>
        </header>

        {/* איור ותרשים גרפי מותאם מחוברת הלימוד של מזו/וינגייט */}
        <MesoIllustrationRenderer q={currentQ} />

        {/* כפתור פדגוגי זמין תמיד */}
        {examMode === 'practice' && (
          <button
            onClick={() => setIsDeepStudyOpen(true)}
            style={{
              width: '100%',
              backgroundColor: '#1e1b4b',
              color: '#38bdf8',
              border: '1.5px solid #0284c7',
              borderRadius: '12px',
              padding: '9px 12px',
              fontSize: '12px',
              fontWeight: '900',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '6px',
              marginBottom: '10px',
              cursor: 'pointer'
            }}
          >
            <span>🎓 הסבר מעמיק, שלילה ותרשים לימודי</span>
            <span style={{ fontSize: '10px', backgroundColor: '#0369a1', color: '#ffffff', padding: '1px 6px', borderRadius: '6px' }}>פתח חלון לימוד</span>
          </button>
        )}

        {/* שאלה והקראה */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '14px', padding: '12px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.4' }}>
              {currentQ.questionText}
            </p>

            <button
              onClick={handleSpeakFullQuestion}
              style={{ backgroundColor: isSpeaking ? '#ef4444' : '#0284c7', color: '#ffffff', border: 'none', borderRadius: '12px', padding: '8px 12px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '4px' }}
              title="הקרא שאלה"
            >
              {isSpeaking ? '⏹ עצור' : '🔊 הקרא'}
            </button>
          </div>

          {examMode === 'practice' && (
            <div style={{ marginTop: '8px', backgroundColor: 'rgba(2, 6, 23, 0.7)', padding: '7px 10px', borderRadius: '8px', fontSize: '11px', color: '#cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6px', border: '1px solid #1e293b' }}>
              <div>💡 <strong style={{ color: '#fbbf24' }}>רמז אסוציאטיבי:</strong> {currentQ.hint}</div>
              <button onClick={() => speakCustom(`רמז: ${currentQ.hint}`)} style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', borderRadius: '6px', padding: '2px 6px', fontSize: '10px', cursor: 'pointer', flexShrink: 0 }}>🔊</button>
            </div>
          )}
        </div>

        {/* אפשרויות בחירה */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === opt.id;
            let bgColor = '#0f172a';
            let borderColor = '#1e293b';
            let textColor = '#e2e8f0';

            if (examMode === 'practice') {
              if (isSelected && !isAnswerChecked) {
                bgColor = 'rgba(56, 189, 248, 0.2)';
                borderColor = '#38bdf8';
                textColor = '#38bdf8';
              } else if (isAnswerChecked) {
                if (opt.isCorrect) {
                  bgColor = 'rgba(16, 185, 129, 0.25)';
                  borderColor = '#10b981';
                  textColor = '#34d399';
                } else if (isSelected && !opt.isCorrect) {
                  bgColor = 'rgba(244, 63, 94, 0.25)';
                  borderColor = '#f43f5e';
                  textColor = '#fb7185';
                }
              }
            } else {
              if (isSelected) {
                bgColor = 'rgba(56, 189, 248, 0.2)';
                borderColor = '#38bdf8';
                textColor = '#38bdf8';
              }
            }

            const letter = ['א', 'ב', 'ג', 'ד'][idx] || '';

            return (
              <button
                key={opt.id}
                onClick={() => {
                  if (examMode === 'practice' && isAnswerChecked) return;
                  setSelectedOption(opt.id);
                  if (examMode === 'real') {
                    setUserAnswers(prev => ({ ...prev, [currentQ.id]: opt.id }));
                  }
                }}
                style={{
                  backgroundColor: bgColor,
                  border: `2px solid ${borderColor}`,
                  borderRadius: '14px',
                  padding: '10px 12px',
                  textAlign: 'right',
                  color: textColor,
                  fontSize: '13px',
                  fontWeight: isSelected || (examMode === 'practice' && isAnswerChecked && opt.isCorrect) ? 'bold' : 'normal',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: (examMode === 'practice' && isAnswerChecked) ? 'default' : 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ backgroundColor: '#020617', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', border: '1px solid #334155' }}>
                    {letter}
                  </span>
                  <span>{opt.text}</span>
                </div>

                {examMode === 'practice' && isAnswerChecked && opt.isCorrect && <span style={{ color: '#34d399', fontWeight: 'bold' }}>✔ נכון</span>}
                {examMode === 'practice' && isAnswerChecked && isSelected && !opt.isCorrect && <span style={{ color: '#fb7185', fontWeight: 'bold' }}>✖ שגוי</span>}
              </button>
            );
          })}
        </div>
      </div>

      {/* אזור פעולה תחתון */}
      <footer style={{ paddingTop: '6px', paddingBottom: '6px' }}>
        {examMode === 'practice' ? (
          !isAnswerChecked ? (
            <button
              onClick={handleCheckPractice}
              disabled={!selectedOption}
              style={{
                width: '100%',
                backgroundColor: selectedOption ? '#0284c7' : '#334155',
                color: selectedOption ? '#ffffff' : '#94a3b8',
                border: 'none',
                borderRadius: '14px',
                padding: '14px',
                fontSize: '15px',
                fontWeight: '900',
                cursor: selectedOption ? 'pointer' : 'not-allowed'
              }}
            >
              בדוק תשובה
            </button>
          ) : (
            <button
              onClick={handleNextPractice}
              style={{ width: '100%', backgroundColor: '#10b981', color: '#020617', border: 'none', borderRadius: '14px', padding: '14px', fontSize: '15px', fontWeight: '900', cursor: 'pointer' }}
            >
              {currentIndex === quizList.length - 1 ? '🎉 סיום תרגול ואיפוס' : 'שאלה הבאה ➜'}
            </button>
          )
        ) : (
          <div style={{ display: 'flex', gap: '8px' }}>
            {currentIndex > 0 && (
              <button
                onClick={() => {
                  stopSpeech();
                  const prevIdx = currentIndex - 1;
                  setCurrentIndex(prevIdx);
                  setSelectedOption(userAnswers[quizList[prevIdx]?.id] || null);
                }}
                style={{ backgroundColor: '#1e293b', color: '#cbd5e1', border: '1px solid #334155', padding: '12px 16px', borderRadius: '14px', fontSize: '13px', fontWeight: 'bold' }}
              >
                ⮌ קודמת
              </button>
            )}

            <button
              onClick={handleNextReal}
              style={{ flex: 1, backgroundColor: '#f59e0b', color: '#020617', border: 'none', borderRadius: '14px', padding: '14px', fontSize: '15px', fontWeight: '900', cursor: 'pointer' }}
            >
              {currentIndex === quizList.length - 1 ? '🏁 סיים מבחן והגש' : 'שאלה הבאה ➜'}
            </button>
          </div>
        )}
      </footer>

      {/* חלון מודאל לימודי מעמיק */}
      {isDeepStudyOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px' }}>
          <div style={{ backgroundColor: '#0b1329', border: '2px solid #38bdf8', borderRadius: '20px', maxWidth: '500px', width: '100%', maxHeight: '88vh', overflowY: 'auto', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', pb: '10px' }}>
              <div>
                <span style={{ color: '#38bdf8', fontSize: '11px', fontWeight: 'bold' }}>{currentQ.topic}</span>
                <h3 style={{ margin: 0, fontSize: '15px', color: '#fbbf24', fontWeight: '900' }}>🎓 ניתוח פדגוגי מעמיק ושלילת מסיחים</h3>
              </div>
              <button onClick={() => setIsDeepStudyOpen(false)} style={{ backgroundColor: '#881337', color: '#ffffff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>✕</button>
            </div>

            <MesoIllustrationRenderer q={currentQ} />

            <div style={{ backgroundColor: '#020617', padding: '10px 12px', borderRadius: '12px', border: '1px solid #10b981' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ color: '#34d399', fontSize: '12px', fontWeight: '900' }}>✔ התשובה הנכונה והעיקרון המדעי:</span>
                <button onClick={() => speakCustom(currentQ.explanation)} style={{ backgroundColor: '#064e3b', color: '#34d399', border: '1px solid #059669', borderRadius: '6px', padding: '2px 6px', fontSize: '10px', cursor: 'pointer' }}>🔊 הקרא</button>
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: '#e2e8f0', lineHeight: '1.4' }}>
                {currentQ.explanation}
              </p>
            </div>

            <div style={{ backgroundColor: '#020617', padding: '10px 12px', borderRadius: '12px', border: '1px solid #334155' }}>
              <span style={{ color: '#f43f5e', fontSize: '12px', fontWeight: '900', display: 'block', marginBottom: '6px' }}>
                ❌ למה שאר המסיחים שגויים?
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {currentQ.options.map((opt, idx) => {
                  const letter = ['א', 'ב', 'ג', 'ד'][idx] || '';
                  if (opt.isCorrect) return null;
                  return (
                    <div key={opt.id} style={{ fontSize: '11px', color: '#cbd5e1', backgroundColor: '#0f172a', padding: '6px 8px', borderRadius: '6px', borderRight: '3px solid #f43f5e' }}>
                      <strong style={{ color: '#f87171' }}>אפשרות {letter} ({opt.text}):</strong>
                      <span style={{ color: '#94a3b8', display: 'block', marginTop: '2px' }}>
                        נפסלת לפי הדרישות המדעיות (בלבול נפוץ במבחן בין שלד צירי לתוספי, בין סחוס היאליני לסיבי, או בין אוסטאובלסט לאוסטאוקלסט).
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setIsDeepStudyOpen(false)}
              style={{ width: '100%', backgroundColor: '#0284c7', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: '900', fontSize: '14px', cursor: 'pointer', marginTop: '4px' }}
            >
              ✓ הבנתי, חזרה לשאלה
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
