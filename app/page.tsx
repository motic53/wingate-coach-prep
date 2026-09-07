/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PART1_ANATOMY1 } from '../data/part1';
import { PART2_ANATOMY2 } from '../data/part2';
import { PART3_PHYSIO1 } from '../data/part3';
import { PART4_PHYSIO2 } from '../data/part4';

const ALL_WINGATE_DATA = [
  ...(PART1_ANATOMY1 || []),
  ...(PART2_ANATOMY2 || []),
  ...(PART3_PHYSIO1 || []),
  ...(PART4_PHYSIO2 || [])
];

function DiagramRenderer({ type, imageUrl }: { type: string; imageUrl?: string }) {
  // אם מוגדרת תמונה, נציג אותה בצורה ברורה
  if (imageUrl) {
    return (
      <div style={{ width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#020617', padding: '4px' }}>
        <img 
          src={imageUrl} 
          alt="איור אנטומי" 
          style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain', borderRadius: '8px' }}
        />
      </div>
    );
  }

  // תרשימי גיבוי (SVG)
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

  // זום
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const touchStartRef = useRef<{ dist: number; scale: number } | null>(null);

  useEffect(() => {
    setMounted(true);
    resetAndShuffle('all');
  }, []);

  const resetAndShuffle = (modId = activeModule) => {
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
  };

  const handleModuleClick = (modId: string) => {
    setActiveModule(modId);
    resetAndShuffle(modId);
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

    const fullScript = `שאלה בנושא ${currentQ.topic}. ${currentQ.questionText}. אפשרויות: ${optionsText}.`;

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

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartRef.current = { dist, scale: zoomScale };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartRef.current) {
      const newDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = newDist / touchStartRef.current.dist;
      const newScale = Math.min(Math.max(touchStartRef.current.scale * ratio, 0.8), 4);
      setZoomScale(newScale);
    }
  };

  const openZoomModal = () => {
    setZoomScale(1.3);
    setIsModalOpen(true);
  };

  if (!mounted || quizList.length === 0) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        טוען את אפליקציית וינגייט לשמואל...
      </div>
    );
  }

  const currentQ = quizList[currentIndex];

  const handleCheck = () => {
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

  const handleNext = () => {
    stopSpeech();

    if (currentIndex < quizList.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
    } else {
      alert(`כל הכבוד שמואל!\nסיימת את המודול בהצלחה!\nצברת ${score} נקודות!`);
      resetAndShuffle(activeModule);
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '14px', maxWidth: '520px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} dir="rtl">
      
      <div>
        <header style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '900', color: '#f59e0b' }}>
                🎓 ווינגייט קואוץ' - שמואל
              </h1>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>איורים מקוריים מהחוברת, זום בשתי אצבעות והקראה</span>
            </div>

            <button
              onClick={() => resetAndShuffle(activeModule)}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              🔄 איפוס וערבוב
            </button>
          </div>

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
              🎯 כל המבחן ({ALL_WINGATE_DATA.length})
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

        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div>
            <span style={{ color: '#f59e0b', fontSize: '10px', fontWeight: 'bold', display: 'block' }}>{currentQ.topic}</span>
            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '900' }}>{currentQ.title}</span>
          </div>
          <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 'bold' }}>איור מקורי 📸</span>
        </div>

        {/* שטח התמונה/תרשים */}
        <div 
          onClick={openZoomModal}
          style={{ width: '100%', height: '180px', borderRadius: '14px', overflow: 'hidden', marginBottom: '10px', border: '1px solid #334155', backgroundColor: '#020617', position: 'relative', cursor: 'pointer' }}
        >
          <DiagramRenderer type={currentQ.diagram} imageUrl={currentQ.imageUrl} />
          <div style={{ position: 'absolute', bottom: '6px', left: '6px', backgroundColor: 'rgba(2, 6, 23, 0.85)', color: '#fbbf24', fontSize: '10px', padding: '3px 8px', borderRadius: '6px', border: '1px solid #334155', fontWeight: 'bold' }}>
            🔍 לחץ להגדלה וזום
          </div>
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
              {isSpeaking ? '⏹ עצור' : '🔊 הקרא הכל'}
            </button>
          </div>

          <div style={{ marginTop: '8px', backgroundColor: 'rgba(2, 6, 23, 0.6)', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', color: '#94a3b8' }}>
            💡 <strong>רמז אסוציאטיבי:</strong> {currentQ.hint}
          </div>
        </div>

        {/* אפשרויות בחירה */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === opt.id;
            let bgColor = '#0f172a';
            let borderColor = '#1e293b';
            let textColor = '#e2e8f0';

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

            const letter = ['א', 'ב', 'ג', 'ד'][idx] || '';

            return (
              <button
                key={opt.id}
                onClick={() => !isAnswerChecked && setSelectedOption(opt.id)}
                style={{
                  backgroundColor: bgColor,
                  border: `2px solid ${borderColor}`,
                  borderRadius: '14px',
                  padding: '10px 12px',
                  textAlign: 'right',
                  color: textColor,
                  fontSize: '13px',
                  fontWeight: isSelected || (isAnswerChecked && opt.isCorrect) ? 'bold' : 'normal',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: isAnswerChecked ? 'default' : 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ backgroundColor: '#020617', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', border: '1px solid #334155' }}>
                    {letter}
                  </span>
                  <span>{opt.text}</span>
                </div>

                {isAnswerChecked && opt.isCorrect && <span style={{ color: '#34d399', fontWeight: 'bold' }}>✔ נכון</span>}
                {isAnswerChecked && isSelected && !opt.isCorrect && <span style={{ color: '#fb7185', fontWeight: 'bold' }}>✖ שגוי</span>}
              </button>
            );
          })}
        </div>

        {showExplanation && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '14px', padding: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: 'bold' }}>📖 הסבר רשמי ומפורט:</span>
              <button
                onClick={() => speakCustom(currentQ.explanation)}
                style={{ backgroundColor: '#3b0764', color: '#d8b4fe', border: '1px solid #6b21a8', borderRadius: '8px', padding: '2px 6px', fontSize: '10px', cursor: 'pointer' }}
              >
                🔊 הקרא הסבר
              </button>
            </div>
            <p style={{ margin: 0, fontSize: '11px', color: '#cbd5e1', lineHeight: '1.4', backgroundColor: '#020617', padding: '8px', borderRadius: '8px' }}>
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>

      <footer style={{ paddingTop: '6px', paddingBottom: '6px' }}>
        {!isAnswerChecked ? (
          <button
            onClick={handleCheck}
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
            onClick={handleNext}
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
        )}
      </footer>

      {/* חלון מודאל זום */}
      {isModalOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}
        >
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', zIndex: 110 }}>
            <button 
              onClick={() => setZoomScale((s) => Math.min(s + 0.3, 4))}
              style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px' }}
            >
              ➕ זום פנימה
            </button>
            <button 
              onClick={() => setZoomScale((s) => Math.max(s - 0.3, 0.8))}
              style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px' }}
            >
              ➖ זום החוצה
            </button>
            <button 
              onClick={() => setZoomScale(1)}
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
            style={{ 
              width: '100%', 
              maxWidth: '480px', 
              height: '340px', 
              borderRadius: '16px', 
              border: '2px solid #f59e0b', 
              overflow: 'hidden', 
              backgroundColor: '#020617',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              touchAction: 'none'
            }}
          >
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                transform: `scale(${zoomScale})`, 
                transition: 'transform 0.1s ease-out',
                transformOrigin: 'center center'
              }}
            >
              <DiagramRenderer type={currentQ.diagram} imageUrl={currentQ.imageUrl} />
            </div>
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '12px', marginTop: '10px' }}>
            💡 השתמש בשתי אצבעות (Pinch) להגדלה והקטנה
          </p>
        </div>
      )}

    </main>
  );
}
