/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PART1_ANATOMY1 } from '../data/part1';
import { PART2_ANATOMY2 } from '../data/part2';
import { PART3_PHYSIO1 } from '../data/part3';
import { PART4_PHYSIO2 } from '../data/part4';
import { PART5_TRAINING_PLAN } from '../data/trainingPlan';

const ALL_WINGATE_DATA = [
  ...(PART1_ANATOMY1 || []),
  ...(PART2_ANATOMY2 || []),
  ...(PART3_PHYSIO1 || []),
  ...(PART4_PHYSIO2 || []),
  ...(PART5_TRAINING_PLAN || [])
];

// רכיב איורים גרפיים עשירים להסברים פדגוגיים
function VisualExplainingChart({ topic, title }: { topic: string; title: string }) {
  const isRepTopic = topic?.includes('חזרות') || title?.includes('חזרות') || title?.includes('עומס');
  const isVolumeTopic = topic?.includes('נפח') || title?.includes('סטים');
  const isSplitTopic = topic?.includes('חלוקת') || title?.includes('ABC') || title?.includes('AB') || title?.includes('FBW');

  if (isRepTopic) {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '10px', border: '1px solid #1e293b', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '4px' }}>📊 ספקטרום החזרות והמטרות (ווינגייט):</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', textAlign: 'center', fontSize: '10px' }}>
          <div style={{ backgroundColor: '#1e1b4b', padding: '6px', borderRadius: '6px', border: '1px solid #4338ca' }}>
            <strong style={{ color: '#818cf8', display: 'block' }}>1-5 חזרות</strong>
            <span style={{ color: '#c7d2fe' }}>כוח מרבי (ATP-CP)</span>
            <span style={{ display: 'block', fontSize: '9px', color: '#94a3b8' }}>מנוחה 3-5 דק'</span>
          </div>
          <div style={{ backgroundColor: '#064e3b', padding: '6px', borderRadius: '6px', border: '1px solid #059669' }}>
            <strong style={{ color: '#34d399', display: 'block' }}>6-12 חזרות</strong>
            <span style={{ color: '#a7f3d0' }}>היפרטרופיה מיטבית</span>
            <span style={{ display: 'block', fontSize: '9px', color: '#94a3b8' }}>מנוחה 60-90 שניות</span>
          </div>
          <div style={{ backgroundColor: '#701a75', padding: '6px', borderRadius: '6px', border: '1px solid #c026d3' }}>
            <strong style={{ color: '#f472b6', display: 'block' }}>15+ חזרות</strong>
            <span style={{ color: '#fbcfe8' }}>סבולת שריר / מטבולי</span>
            <span style={{ display: 'block', fontSize: '9px', color: '#94a3b8' }}>מנוחה קצרה 30-45 שניות</span>
          </div>
        </div>
      </div>
    );
  }

  if (isVolumeTopic) {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '10px', border: '1px solid #1e293b', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', display: 'block', marginBottom: '4px' }}>📈 פירמידת נפח שבועי מומלץ לקבוצת שריר:</span>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '3px', fontSize: '10px' }}>
          <div style={{ backgroundColor: '#1e293b', padding: '4px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', borderRight: '3px solid #10b981' }}>
            <span style={{ color: '#f1f5f9' }}>מתחיל (עד 6 חודשים):</span>
            <strong style={{ color: '#34d399' }}>8-10 סטים בשבוע (1-4 באימון)</strong>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '4px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', borderRight: '3px solid #3b82f6' }}>
            <span style={{ color: '#f1f5f9' }}>בינוני (6 חודשים - שנתיים):</span>
            <strong style={{ color: '#60a5fa' }}>10-20 סטים בשבוע (5-10 באימון)</strong>
          </div>
          <div style={{ backgroundColor: '#1e293b', padding: '4px 8px', borderRadius: '4px', display: 'flex', justifyContent: 'space-between', borderRight: '3px solid #ef4444' }}>
            <span style={{ color: '#f1f5f9' }}>מתקדם (מעל שנתיים):</span>
            <strong style={{ color: '#f87171' }}>20-40 סטים בשבוע (קרוב לכשל RIR 0)</strong>
          </div>
        </div>
      </div>
    );
  }

  if (isSplitTopic) {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '10px', border: '1px solid #1e293b', marginBottom: '8px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#a855f7', display: 'block', marginBottom: '4px' }}>🗺️ מפת חלוקת תוכניות (Splits) לפי תדירות שבועית:</span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '4px', textAlign: 'center', fontSize: '10px' }}>
          <div style={{ backgroundColor: '#0f172a', padding: '4px', borderRadius: '4px', border: '1px solid #334155' }}>
            <strong style={{ color: '#e2e8f0', display: 'block' }}>2-3 אימונים</strong>
            <span style={{ color: '#38bdf8' }}>FBW (גוף מלא)</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '4px', borderRadius: '4px', border: '1px solid #334155' }}>
            <strong style={{ color: '#e2e8f0', display: 'block' }}>3-4 אימונים</strong>
            <span style={{ color: '#38bdf8' }}>AB (עליון/תחתון)</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '4px', borderRadius: '4px', border: '1px solid #334155' }}>
            <strong style={{ color: '#e2e8f0', display: 'block' }}>5-6 אימונים</strong>
            <span style={{ color: '#38bdf8' }}>ABC / PPL</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}

function DiagramRenderer({ type, imageUrl, moduleId, topic, title, qNum, totalQ }: any) {
  if (moduleId === 'train_plan') {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', backgroundColor: '#090d16', padding: '14px', borderRadius: '12px', border: '1px solid #1e293b', textAlign: 'center' }}>
        <span style={{ fontSize: '28px', marginBottom: '4px' }}>📋</span>
        <span style={{ color: '#10b981', fontSize: '12px', fontWeight: 'bold' }}>תכנון אימון והדרכה</span>
        <span style={{ color: '#f8fafc', fontSize: '14px', fontWeight: '900', marginTop: '2px' }}>{title || topic}</span>
        <span style={{ color: '#94a3b8', fontSize: '11px', marginTop: '6px', backgroundColor: '#020617', padding: '3px 8px', borderRadius: '6px', border: '1px solid #1e293b' }}>
          שאלה {qNum} מתוך {totalQ}
        </span>
      </div>
    );
  }

  if (imageUrl) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', padding: '4px' }}>
        <img 
          src={imageUrl} 
          alt="איור אנטומי" 
          draggable={false}
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px', userSelect: 'none', pointerEvents: 'none' }}
        />
      </div>
    );
  }

  switch (type) {
    case 'cell':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="80" rx="140" ry="65" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx="170" cy="80" r="30" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <circle cx="170" cy="80" r="12" fill="#7e22ce" />
          <text x="170" y="84" fill="#f3e8ff" fontSize="9" fontWeight="bold" textAnchor="middle">גרעין</text>
          <ellipse cx="85" cy="65" rx="18" ry="9" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
          <ellipse cx="255" cy="95" rx="18" ry="9" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
          <text x="170" y="24" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">קרום התא</text>
          <text x="85" y="88" fill="#f87171" fontSize="8" textAnchor="middle">מיטוכונדריון</text>
        </svg>
      );
    case 'disc':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="80" rx="135" ry="58" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
          <ellipse cx="170" cy="80" rx="100" ry="42" fill="#0f172a" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3" />
          <ellipse cx="170" cy="80" rx="68" ry="28" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          <ellipse cx="170" cy="80" rx="36" ry="16" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
          <text x="170" y="84" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גרעין צמיגי (Nucleus Pulposus)</text>
          <text x="170" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעות סיביות (Annulus Fibrosus)</text>
        </svg>
      );
    case 'cervical':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="40" rx="55" ry="20" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <text x="170" y="44" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גוף החוליה</text>
          <circle cx="85" cy="70" r="11" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
          <circle cx="255" cy="70" r="11" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
          <text x="85" y="105" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">נקב עורק הצוואר</text>
        </svg>
      );
    default:
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="70" y="20" width="90" height="45" rx="8" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
          <text x="115" y="47" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">עלייה ימנית</text>
          <rect x="70" y="70" width="90" height="55" rx="8" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="2" />
          <text x="115" y="102" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">חדר ימין</text>
          <line x1="170" y1="15" x2="170" y2="135" stroke="#64748b" strokeWidth="3" />
          <rect x="180" y="20" width="90" height="45" rx="8" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
          <text x="225" y="47" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">עלייה שמאלית</text>
          <rect x="180" y="70" width="90" height="55" rx="8" fill="#b91c1c" stroke="#ef4444" strokeWidth="3" />
          <text x="225" y="102" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">חדר שמאל</text>
        </svg>
      );
  }
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
  const [activeModule, setActiveModule] = useState('all');
  const [quizList, setQuizList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  // הגדרות מצב מבחן וטיימר אקטיבי
  const [examMode, setExamMode] = useState<'practice' | 'real'>('practice');
  const [paceSecondsPerQ, setPaceSecondsPerQ] = useState(90); // 90 שניות למתחיל, 60 לבינוני, 45 למתקדם
  const [timeLeft, setTimeLeft] = useState(0);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});

  // זום + גרירה (Pan & Zoom)
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [panOffset, setPanOffset] = useState({ x: 0, y: 0 });
  const touchStartRef = useRef<any>(null);
  const isDraggingRef = useRef(false);
  const mouseStartRef = useRef<any>(null);

  useEffect(() => {
    setMounted(true);
    resetAndShuffle('all', 'practice', paceSecondsPerQ);
  }, []);

  // ניהול טיימר רץ במצב מבחן אמת
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

  const resetAndShuffle = (modId = activeModule, mode = examMode, paceSec = paceSecondsPerQ) => {
    stopSpeech();

    let source = ALL_WINGATE_DATA;
    if (modId !== 'all') {
      source = ALL_WINGATE_DATA.filter((q) => q.moduleId === modId);
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

  const handleModuleClick = (modId: string) => {
    setActiveModule(modId);
    resetAndShuffle(modId, examMode, paceSecondsPerQ);
  };

  const handleModeChange = (newMode: 'practice' | 'real') => {
    setExamMode(newMode);
    resetAndShuffle(activeModule, newMode, paceSecondsPerQ);
  };

  const handlePaceChange = (sec: number) => {
    setPaceSecondsPerQ(sec);
    if (examMode === 'real') {
      resetAndShuffle(activeModule, 'real', sec);
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

  // מחוות מגע וזום
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      touchStartRef.current = { dist, scale: zoomScale, x: 0, y: 0, originPan: { ...panOffset } };
    } else if (e.touches.length === 1) {
      touchStartRef.current = { dist: 0, scale: zoomScale, x: e.touches[0].clientX, y: e.touches[0].clientY, originPan: { ...panOffset } };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!touchStartRef.current) return;
    if (e.touches.length === 2 && touchStartRef.current.dist > 0) {
      const newDist = Math.hypot(e.touches[0].clientX - e.touches[1].clientX, e.touches[0].clientY - e.touches[1].clientY);
      const ratio = newDist / touchStartRef.current.dist;
      setZoomScale(Math.min(Math.max(touchStartRef.current.scale * ratio, 0.8), 5));
    } else if (e.touches.length === 1 && touchStartRef.current.dist === 0) {
      setPanOffset({
        x: touchStartRef.current.originPan.x + (e.touches[0].clientX - touchStartRef.current.x),
        y: touchStartRef.current.originPan.y + (e.touches[0].clientY - touchStartRef.current.y)
      });
    }
  };

  const handleTouchEnd = () => { touchStartRef.current = null; };

  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    mouseStartRef.current = { x: e.clientX, y: e.clientY, originPan: { ...panOffset } };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || !mouseStartRef.current) return;
    setPanOffset({
      x: mouseStartRef.current.originPan.x + (e.clientX - mouseStartRef.current.x),
      y: mouseStartRef.current.originPan.y + (e.clientY - mouseStartRef.current.y)
    });
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
    mouseStartRef.current = null;
  };

  const openZoomModal = () => {
    if (quizList[currentIndex]?.moduleId === 'train_plan') return;
    setZoomScale(1.4);
    setPanOffset({ x: 0, y: 0 });
    setIsModalOpen(true);
  };

  const resetZoomAndPan = () => {
    setZoomScale(1);
    setPanOffset({ x: 0, y: 0 });
  };

  if (!mounted || quizList.length === 0) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        טוען את סימולטור וינגייט לשמואל...
      </div>
    );
  }

  const currentQ = quizList[currentIndex];

  const finishRealExam = () => {
    stopSpeech();
    setIsExamCompleted(true);
  };

  // בדיקת תשובה (במצב תרגול)
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

  // מעבר לשאלה הבאה (במצב תרגול)
  const handleNextPractice = () => {
    stopSpeech();
    if (currentIndex < quizList.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
    } else {
      alert(`כל הכבוד שמואל!\nסיימת את התרגול בהצלחה!\nצברת ${score} נקודות!`);
      resetAndShuffle(activeModule, 'practice');
    }
  };

  // מעבר שאלה במצב מבחן אמת
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

  // חישוב תוצאות במצב מבחן אמת
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

  // מסך סיכום מבחן אמת
  if (isExamCompleted) {
    const isPassed = realScoreResults.percentage >= 70;
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '16px', maxWidth: '540px', margin: '0 auto' }} dir="rtl">
        <div style={{ backgroundColor: '#0f172a', border: '2px solid #334155', borderRadius: '18px', padding: '20px', textAlign: 'center', marginBottom: '16px' }}>
          <span style={{ fontSize: '46px' }}>{isPassed ? '🏆' : '⚠️'}</span>
          <h2 style={{ fontSize: '20px', fontWeight: '900', color: isPassed ? '#10b981' : '#f43f5e', margin: '8px 0' }}>
            {isPassed ? 'כל הכבוד שמואל! עברת את המבחן!' : 'לא עברת הפעם - תרגול נוסף יביא אותך לשם!'}
          </h2>
          <div style={{ fontSize: '32px', fontWeight: '900', color: '#fbbf24', margin: '12px 0' }}>
            ציון: {realScoreResults.percentage}
          </div>
          <p style={{ color: '#94a3b8', fontSize: '13px', margin: 0 }}>
            ענית נכון על {realScoreResults.correct} מתוך {realScoreResults.total} שאלות (ציון עובר: 70)
          </p>

          <div style={{ display: 'flex', gap: '8px', marginTop: '16px' }}>
            <button
              onClick={() => resetAndShuffle(activeModule, 'real', paceSecondsPerQ)}
              style={{ flex: 1, backgroundColor: '#f59e0b', color: '#020617', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: '900', fontSize: '14px', cursor: 'pointer' }}
            >
              🔄 מבחן חוזר באותו קצב
            </button>
            <button
              onClick={() => handleModeChange('practice')}
              style={{ flex: 1, backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7', padding: '12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}
            >
              💡 חזרה לתרגול עם רמזים
            </button>
          </div>
        </div>

        {/* תחקור שאלות שנכשלו */}
        <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#f59e0b', marginBottom: '10px' }}>🔍 תחקור תשובות והסברים גרפיים:</h3>
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
                
                <div style={{ backgroundColor: '#020617', padding: '6px 8px', borderRadius: '6px', marginBottom: '6px' }}>
                  {!isUserRight && <div style={{ color: '#fb7185' }}>התשובה שלך: {chosenText}</div>}
                  <div style={{ color: '#34d399', fontWeight: 'bold' }}>התשובה הנכונה: {correctOpt?.text}</div>
                </div>

                <VisualExplainingChart topic={q.topic} title={q.title} />

                <div style={{ color: '#94a3b8', fontSize: '11px', lineHeight: '1.4' }}>
                  💡 <strong>הסבר:</strong> {q.explanation}
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
              <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '900', color: '#f59e0b' }}>
                🎓 ווינגייט קואוץ' - שמואל
              </h1>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>סימולציית מבחן אמיתי עם שעון עצר והסברים גרפיים</span>
            </div>

            <button
              onClick={() => resetAndShuffle(activeModule, examMode, paceSecondsPerQ)}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              🔄 איפוס
            </button>
          </div>

          {/* מתג בחירת מצב: תרגול מול מבחן אמת */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '8px', backgroundColor: '#0f172a', padding: '4px', borderRadius: '12px', border: '1px solid #1e293b' }}>
            <button
              onClick={() => handleModeChange('practice')}
              style={{
                backgroundColor: examMode === 'practice' ? '#f59e0b' : 'transparent',
                color: examMode === 'practice' ? '#020617' : '#94a3b8',
                border: 'none',
                padding: '7px',
                borderRadius: '8px',
                fontSize: '12px',
                fontWeight: '900',
                cursor: 'pointer',
                transition: 'all 0.2s'
              }}
            >
              💡 מצב תרגול (עם רמזים)
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

          {/* במצב מבחן אמת: בורר קצב אקטיבי + שעון חי */}
          {examMode === 'real' && (
            <div style={{ backgroundColor: '#1e1b4b', border: '1px solid #4338ca', padding: '8px 12px', borderRadius: '12px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '6px' }}>
              <div>
                <span style={{ fontSize: '10px', color: '#c7d2fe', display: 'block' }}>קצב והקצבת זמן לשאלה:</span>
                <div style={{ display: 'flex', gap: '4px', marginTop: '2px' }}>
                  <button onClick={() => handlePaceChange(90)} style={{ backgroundColor: paceSecondsPerQ === 90 ? '#38bdf8' : '#0f172a', color: paceSecondsPerQ === 90 ? '#020617' : '#94a3b8', border: '1px solid #334155', borderRadius: '6px', fontSize: '10px', padding: '2px 6px', fontWeight: 'bold' }}>90 שניות (הסתגלות)</button>
                  <button onClick={() => handlePaceChange(60)} style={{ backgroundColor: paceSecondsPerQ === 60 ? '#38bdf8' : '#0f172a', color: paceSecondsPerQ === 60 ? '#020617' : '#94a3b8', border: '1px solid #334155', borderRadius: '6px', fontSize: '10px', padding: '2px 6px', fontWeight: 'bold' }}>60 שניות (תקן)</button>
                  <button onClick={() => handlePaceChange(45)} style={{ backgroundColor: paceSecondsPerQ === 45 ? '#38bdf8' : '#0f172a', color: paceSecondsPerQ === 45 ? '#020617' : '#94a3b8', border: '1px solid #334155', borderRadius: '6px', fontSize: '10px', padding: '2px 6px', fontWeight: 'bold' }}>45 שניות (לחץ)</button>
                </div>
              </div>

              <div style={{ textAlign: 'left' }}>
                <span style={{ fontSize: '10px', color: '#cbd5e1', display: 'block' }}>זמן נותר למבחן:</span>
                <span style={{ fontSize: '18px', fontWeight: '900', color: timeLeft <= 300 ? '#f43f5e' : '#34d399', fontFamily: 'monospace' }}>
                  ⏳ {formatTimer(timeLeft)}
                </span>
              </div>
            </div>
          )}

          {/* שורת בחירת נושאים */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '8px' }}>
            <button
              onClick={() => handleModuleClick('all')}
              style={{
                backgroundColor: activeModule === 'all' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'all' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              🎯 הכל ({ALL_WINGATE_DATA.length})
            </button>

            <button
              onClick={() => handleModuleClick('train_plan')}
              style={{
                backgroundColor: activeModule === 'train_plan' ? '#10b981' : '#0f172a',
                color: activeModule === 'train_plan' ? '#020617' : '#34d399',
                border: activeModule === 'train_plan' ? '1px solid #10b981' : '1px solid #059669',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              📋 תכנון אימון ({PART5_TRAINING_PLAN.length})
            </button>

            <button
              onClick={() => handleModuleClick('anat1')}
              style={{
                backgroundColor: activeModule === 'anat1' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'anat1' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              🦴 אנטומיה א' ({PART1_ANATOMY1.length})
            </button>

            <button
              onClick={() => handleModuleClick('anat2')}
              style={{
                backgroundColor: activeModule === 'anat2' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'anat2' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              💪 אנטומיה ב' ({PART2_ANATOMY2.length})
            </button>

            <button
              onClick={() => handleModuleClick('phys1')}
              style={{
                backgroundColor: activeModule === 'phys1' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'phys1' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              ⚡ פיזיולוגיה א' ({PART3_PHYSIO1.length})
            </button>

            <button
              onClick={() => handleModuleClick('phys2')}
              style={{
                backgroundColor: activeModule === 'phys2' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'phys2' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              ❤️ פיזיולוגיה ב' ({PART4_PHYSIO2.length})
            </button>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', marginBottom: '6px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', padding: '3px 8px', borderRadius: '8px', fontWeight: 'bold' }}>
                🔥 רצף: {streak}
              </span>
              <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '3px 8px', borderRadius: '8px', fontWeight: 'bold' }}>
                ⭐ {score} XP
              </span>
            </div>
            <span style={{ color: '#94a3b8', fontWeight: 'bold' }}>שאלה {currentIndex + 1} מתוך {quizList.length}</span>
          </div>

          <div style={{ width: '100%', backgroundColor: '#0f172a', height: '8px', borderRadius: '999px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <div 
              style={{ 
                width: `${((currentIndex + 1) / quizList.length) * 100}%`, 
                height: '100%', 
                background: 'linear-gradient(to left, #10b981, #f59e0b)',
                transition: 'width 0.3s ease'
              }} 
            />
          </div>
        </header>

        {/* שטח תמונה / כרטיס תכנון אימון */}
        <div 
          onClick={openZoomModal}
          style={{ 
            width: '100%', 
            height: currentQ.moduleId === 'train_plan' ? '120px' : '180px', 
            borderRadius: '14px', 
            overflow: 'hidden', 
            marginBottom: '10px', 
            border: '1px solid #334155', 
            backgroundColor: '#020617', 
            position: 'relative', 
            cursor: currentQ.moduleId === 'train_plan' ? 'default' : 'pointer' 
          }}
        >
          <DiagramRenderer 
            type={currentQ.diagram} 
            imageUrl={currentQ.imageUrl} 
            moduleId={currentQ.moduleId}
            topic={currentQ.topic}
            title={currentQ.title}
            qNum={currentIndex + 1}
            totalQ={quizList.length}
          />
          {currentQ.moduleId !== 'train_plan' && (
            <div style={{ position: 'absolute', bottom: '6px', left: '6px', backgroundColor: 'rgba(2, 6, 23, 0.85)', color: '#fbbf24', fontSize: '10px', padding: '3px 8px', borderRadius: '6px', border: '1px solid #334155', fontWeight: 'bold' }}>
              🔍 לחץ להגדלה, זום והזזה
            </div>
          )}
        </div>

        {/* שאלה + כפתור הקראה */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '14px', padding: '12px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.4' }}>
              {currentQ.questionText}
            </p>

            <button
              onClick={handleSpeakFullQuestion}
              style={{
                backgroundColor: isSpeaking ? '#ef4444' : '#9333ea',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '8px 12px',
                fontSize: '15px',
                fontWeight: 'bold',
                cursor: 'pointer',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              title="הקרא שאלה ותשובות"
            >
              {isSpeaking ? '⏹ עצור' : '🔊 הקרא'}
            </button>
          </div>

          {/* כרטיס הרמז - מוצג רק במצב תרגול, מבוטל במצב מבחן אמת */}
          {examMode === 'practice' && (
            <div style={{ marginTop: '8px', backgroundColor: 'rgba(2, 6, 23, 0.7)', padding: '7px 10px', borderRadius: '8px', fontSize: '11px', color: '#cbd5e1', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '6px', border: '1px solid #1e293b' }}>
              <div>
                💡 <strong style={{ color: '#fbbf24' }}>רמז אסוציאטיבי:</strong> {currentQ.hint}
              </div>
              <button
                onClick={() => speakCustom(`רמז: ${currentQ.hint}`)}
                style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', borderRadius: '6px', padding: '2px 6px', fontSize: '10px', cursor: 'pointer', flexShrink: 0 }}
                title="הקרא רמז"
              >
                🔊
              </button>
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
                bgColor = 'rgba(245, 158, 11, 0.2)';
                borderColor = '#f59e0b';
                textColor = '#fbbf24';
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
              // במצב מבחן אמת: רק צבע בחירה ללא חשיפת תשובה נכונה
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

        {/* הסברים מורחבים וגרפיים (מוצג במצב תרגול לאחר בדיקה) */}
        {examMode === 'practice' && showExplanation && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '14px', padding: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: 'bold' }}>📖 הסבר רשמי והמחשה גרפית:</span>
              <button
                onClick={() => speakCustom(currentQ.explanation)}
                style={{ backgroundColor: '#3b0764', color: '#d8b4fe', border: '1px solid #6b21a8', borderRadius: '8px', padding: '2px 6px', fontSize: '10px', cursor: 'pointer' }}
              >
                🔊 הקרא הסבר
              </button>
            </div>

            <VisualExplainingChart topic={currentQ.topic} title={currentQ.title} />

            <p style={{ margin: 0, fontSize: '11px', color: '#cbd5e1', lineHeight: '1.4', backgroundColor: '#020617', padding: '8px', borderRadius: '8px' }}>
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>

      {/* אזור הפעולה בתחתית המסך */}
      <footer style={{ paddingTop: '6px', paddingBottom: '6px' }}>
        {examMode === 'practice' ? (
          !isAnswerChecked ? (
            <button
              onClick={handleCheckPractice}
              disabled={!selectedOption}
              style={{
                width: '100%',
                backgroundColor: selectedOption ? '#f59e0b' : '#334155',
                color: selectedOption ? '#020617' : '#94a3b8',
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
              style={{
                width: '100%',
                backgroundColor: '#10b981',
                color: '#020617',
                border: 'none',
                borderRadius: '14px',
                padding: '14px',
                fontSize: '15px',
                fontWeight: '900',
                cursor: 'pointer'
              }}
            >
              {currentIndex === quizList.length - 1 ? '🎉 סיום מודול ואיפוס' : 'שאלה הבאה ➜'}
            </button>
          )
        ) : (
          /* כפתור מעבר במצב מבחן אמת */
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
              style={{
                flex: 1,
                backgroundColor: '#f59e0b',
                color: '#020617',
                border: 'none',
                borderRadius: '14px',
                padding: '14px',
                fontSize: '15px',
                fontWeight: '900',
                cursor: 'pointer'
              }}
            >
              {currentIndex === quizList.length - 1 ? '🏁 סיים מבחן והגש' : 'שאלה הבאה ➜'}
            </button>
          </div>
        )}
      </footer>

      {/* חלון מודאל זום וגרירה (פעיל עבור אנטומיה ופיזיולוגיה שיש בהן איור) */}
      {isModalOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', zIndex: 110, flexWrap: 'wrap', justifyContent: 'center' }}>
            <button 
              onClick={() => setZoomScale((s) => Math.min(s + 0.3, 5))}
              style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px' }}
            >
              ➕ זום
            </button>
            <button 
              onClick={() => setZoomScale((s) => Math.max(s - 0.3, 0.8))}
              style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px' }}
            >
              ➖ הקטן
            </button>
            <button 
              onClick={resetZoomAndPan}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '13px' }}
            >
              🔄 איפוס
            </button>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{ backgroundColor: '#881337', color: '#ffffff', border: '1px solid #e11d48', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '13px' }}
            >
              ✕ סגור
            </button>
          </div>

          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
            onMouseDown={handleMouseDown}
            onMouseMove={handleMouseMove}
            onMouseUp={handleMouseUp}
            onMouseLeave={handleMouseUp}
            style={{ 
              width: '100%', 
              maxWidth: '480px', 
              height: '380px', 
              borderRadius: '16px', 
              border: '2px solid #f59e0b', 
              overflow: 'hidden', 
              backgroundColor: '#020617', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'center', 
              touchAction: 'none', 
              cursor: isDraggingRef.current ? 'grabbing' : 'grab', 
              position: 'relative' 
            }}
          >
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                transform: `translate(${panOffset.x}px, ${panOffset.y}px) scale(${zoomScale})`, 
                transition: isDraggingRef.current ? 'none' : 'transform 0.08s ease-out', 
                transformOrigin: 'center center', 
                display: 'flex', 
                alignItems: 'center', 
                justifyContent: 'center' 
              }}
            >
              <DiagramRenderer type={currentQ.diagram} imageUrl={currentQ.imageUrl} />
            </div>
          </div>
        </div>
      )}

    </main>
  );
}
