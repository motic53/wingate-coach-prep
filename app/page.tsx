/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';

// מאגר שאלות וכרטיסיות חזותיות למבחני וינגייט
const WINGATE_QUESTIONS = [
  {
    id: 1,
    topic: 'אנטומיה וקינזיולוגיה',
    title: 'זיהוי שריר פעיל עיקרי (אגוניסט)',
    illustration: '🏋️‍♂️ 🦵 ⬇️ ⬆️',
    diagramUrl: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=800&auto=format&fit=crop&q=60',
    questionText: 'בתרגיל סקוואט (Squat), איזה שריר פועל כ"אגוניסט" (השריר העיקרי המבצע את הפשיטה בברך)?',
    hint: 'זהו השריר הגדול בקדמת הירך הבנוי מ-4 ראשים.',
    options: [
      { id: 'a', text: 'ארבע-ראשי (Quadriceps)', isCorrect: true },
      { id: 'b', text: 'שרירי מיתר הירך (Hamstrings)', isCorrect: false },
      { id: 'c', text: 'רחב גבי (Latissimus Dorsi)', isCorrect: false },
      { id: 'd', text: 'תאומים (Gastrocnemius)', isCorrect: false }
    ],
    explanation: 'הארבע-ראשי (Quadriceps) מבצע פשיטה (יישור) במפרק הברך כנגד כוח המשיכה בעלייה מהסקוואט, ולכן הוא האגוניסט העיקרי בתנועה זו.'
  },
  {
    id: 2,
    topic: 'קינזיולוגיה ותנועות מפרק',
    title: 'הגדרת שריר מנוגד (אנטגוניסט)',
    illustration: '💪 ↔️ 💥',
    diagramUrl: 'https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?w=800&auto=format&fit=crop&q=60',
    questionText: 'בתרגיל כפיפת מרפקים (Biceps Curl), מי השריר שמשמש כ"אנטגוניסט" (השריר הנגדי שנמתח ומרפה)?',
    hint: 'זהו השריר הממוקם בצד האחורי של הזרוע.',
    options: [
      { id: 'a', text: 'דו-ראשי זרועי (Biceps)', isCorrect: false },
      { id: 'b', text: 'תלת-ראשי זרועי (Triceps)', isCorrect: true },
      { id: 'c', text: 'דלתואיד (Deltoid - כתף)', isCorrect: false },
      { id: 'd', text: 'חזה גדול (Pectoralis Major)', isCorrect: false }
    ],
    explanation: 'בעת כפיפת המרפק, הדו-ראשי מתכווץ (אגוניסט) והתלת-ראשי שנמצא מאחור נרפה ומתארך (אנטגוניסט) כדי לאפשר את התנועה.'
  },
  {
    id: 3,
    topic: 'פיזיולוגיה של המאמץ',
    title: 'מערכות אנרגיה בגוף',
    illustration: '⚡ ⏱️ 🏃‍♂️',
    diagramUrl: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=800&auto=format&fit=crop&q=60',
    questionText: 'באימון כוח מקסימלי או בספרינט של עד 10 שניות, מהי מערכת האנרגיה הדומיננטית ביותר?',
    hint: 'מערכת אנאירובית מיידית שאינה מייצרת חומצת חלב.',
    options: [
      { id: 'a', text: 'מערכת אירובית (חמצן ושומנים)', isCorrect: false },
      { id: 'b', text: 'מערכת הגליקוליזה האנאירובית (חומצת חלב)', isCorrect: false },
      { id: 'c', text: 'מערכת הפוספוגנים (ATP-CP)', isCorrect: true },
      { id: 'd', text: 'פירוק חלבונים בשריר', isCorrect: false }
    ],
    explanation: 'מערכת ה-ATP-CP מספקת אנרגיה מיידית ומתפרצת למאמצים קצרים ועוצמתיים של עד 10 שניות ללא צורך בחמצן.'
  },
  {
    id: 4,
    topic: 'תורת האימון ובטיחות',
    title: 'ניתוח תנועת הכתף בלחיצת חזה',
    illustration: '🏋️‍♀️ 👐 📐',
    diagramUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=60',
    questionText: 'בשלב הדחיפה כלפי מעלה בלחיצת חזה (Bench Press), איזו תנועה מתרחשת במפרק הכתף?',
    hint: 'הזרועות נעות מקו הצד לכיוון מרכז הגוף במישור האופקי.',
    options: [
      { id: 'a', text: 'קירוב אופקי (Horizontal Adduction)', isCorrect: true },
      { id: 'b', text: 'הרחקה (Abduction)', isCorrect: false },
      { id: 'c', text: 'פשיטה (Extension)', isCorrect: false },
      { id: 'd', text: 'סיבוב פנימי בלבד (Internal Rotation)', isCorrect: false }
    ],
    explanation: 'במפרק הכתף מתבצע קירוב אופקי (קירוב הזרועות מקו הצדדים למרכז בית החזה) על ידי שריר החזה הגדול (Pectoralis Major).'
  }
];

export default function WingateCoachPrep() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  const currentQ = WINGATE_QUESTIONS[currentIndex];

  // פונקציית הקראה קולית בעברית (עוקפת קשיי קריאה לשמואל)
  const speakText = (text: string) => {
    if (!('speechSynthesis' in window)) {
      alert('דפדפן זה אינו תומך בהקראה קולית.');
      return;
    }

    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'he-IL';
    utterance.rate = 0.9; // קצב רגוע ומובן

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const speakCurrentQuestion = () => {
    const fullText = `שאלה בנושא ${currentQ.topic}. ${currentQ.questionText}. אפשרויות: ${currentQ.options.map((o, idx) => `אפשרות ${idx + 1}: ${o.text}`).join('. ')}`;
    speakText(fullText);
  };

  const handleSelectOption = (optionId: string) => {
    if (isAnswerChecked) return;
    setSelectedOption(optionId);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswerChecked) return;

    const chosen = currentQ.options.find(o => o.id === selectedOption);
    const isCorrect = chosen?.isCorrect;

    setIsAnswerChecked(true);
    setShowExplanation(true);

    if (isCorrect) {
      setScore(prev => prev + 25);
      setStreak(prev => prev + 1);
      speakText('נכון מאוד! תשובה מצוינת.');
    } else {
      setStreak(0);
      speakText(`לא מדויק. התשובה הנכונה היא: ${currentQ.options.find(o => o.isCorrect)?.text}. הנה ההסבר.`);
    }
  };

  const handleNextQuestion = () => {
    window.speechSynthesis.cancel();
    if (currentIndex < WINGATE_QUESTIONS.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
    } else {
      alert(`כל הכבוד שמואל! סיימת את המודול עם ${score + (currentQ.options.find(o => o.id === selectedOption)?.isCorrect ? 25 : 0)} נקודות!`);
      // איפוס
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
      setScore(0);
      setStreak(0);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-between p-4 max-w-md mx-auto" dir="rtl">
      
      {/* בר עליון חזותי בסגנון Duolingo */}
      <header className="w-full space-y-3 pt-2">
        <div className="flex justify-between items-center">
          <div className="flex items-center gap-1.5 bg-amber-500/10 border border-amber-500/30 px-3 py-1 rounded-full">
            <span className="text-lg">🔥</span>
            <span className="text-xs font-black text-amber-400">רצף: {streak}</span>
          </div>

          <div className="flex items-center gap-1.5 bg-emerald-500/10 border border-emerald-500/30 px-3 py-1 rounded-full">
            <span className="text-lg">⭐</span>
            <span className="text-xs font-black text-emerald-400">{score} XP</span>
          </div>

          <div className="text-xs font-bold text-slate-400 bg-slate-900 border border-slate-800 px-3 py-1 rounded-full">
            שאלה {currentIndex + 1} / {WINGATE_QUESTIONS.length}
          </div>
        </div>

        {/* מד התקדמות (Progress Bar) */}
        <div className="w-full bg-slate-900 h-2.5 rounded-full overflow-hidden border border-slate-800">
          <div 
            className="bg-gradient-to-r from-amber-500 to-emerald-500 h-full transition-all duration-500"
            style={{ width: `${((currentIndex + 1) / WINGATE_QUESTIONS.length) * 100}%` }}
          />
        </div>
      </header>

      {/* כרטיסיית הלמידה הראשית */}
      <div className="w-full space-y-4 my-auto py-2">
        
        {/* כותרת הנושא ואייקון המחשה */}
        <div className="bg-slate-900 border border-slate-800 p-3.5 rounded-2xl flex justify-between items-center shadow-lg">
          <div>
            <span className="text-[10px] uppercase font-bold tracking-wider text-amber-400 block">{currentQ.topic}</span>
            <h2 className="text-sm font-black text-white">{currentQ.title}</h2>
          </div>
          <span className="text-2xl p-2 bg-slate-950 rounded-xl border border-slate-800">{currentQ.illustration}</span>
        </div>

        {/* השאלה עצמה + כפתור הקראה קולית גדול ובולט */}
        <div className="bg-slate-900/90 border border-slate-800 p-4 rounded-2xl space-y-3 relative shadow-xl">
          <div className="flex justify-between items-start gap-3">
            <p className="text-base font-bold text-slate-100 leading-relaxed flex-1">
              {currentQ.questionText}
            </p>
            
            <button
              onClick={speakCurrentQuestion}
              className={`p-3 rounded-2xl border transition shadow-lg shrink-0 ${
                isSpeaking 
                  ? 'bg-amber-500 text-slate-950 border-amber-400 animate-pulse' 
                  : 'bg-purple-600 hover:bg-purple-500 text-white border-purple-500/50'
              }`}
              title="הקרא שאלה בעברית"
            >
              <span className="text-xl">🔊</span>
            </button>
          </div>

          {/* רמז חזותי קצרצר */}
          <div className="bg-slate-950/70 p-2.5 rounded-xl border border-slate-800/80 text-[11px] text-slate-400 flex items-center gap-2">
            <span>💡</span>
            <span>{currentQ.hint}</span>
          </div>
        </div>

        {/* אפשרויות בחירה (מבחן אמריקאי מותאם למגע בסמארטפון) */}
        <div className="space-y-2.5">
          {currentQ.options.map((opt) => {
            const isSelected = selectedOption === opt.id;
            let btnStyle = 'bg-slate-900 border-slate-800 text-slate-200 hover:border-slate-700';

            if (isSelected && !isAnswerChecked) {
              btnStyle = 'bg-amber-500/20 border-amber-400 text-amber-300 font-bold';
            } else if (isAnswerChecked) {
              if (opt.isCorrect) {
                btnStyle = 'bg-emerald-500/20 border-emerald-400 text-emerald-300 font-bold';
              } else if (isSelected && !opt.isCorrect) {
                btnStyle = 'bg-rose-500/20 border-rose-400 text-rose-300 font-bold';
              }
            }

            return (
              <button
                key={opt.id}
                onClick={() => handleSelectOption(opt.id)}
                className={`w-full p-4 rounded-2xl border text-right text-xs sm:text-sm transition flex items-center justify-between gap-3 shadow-md ${btnStyle}`}
              >
                <div className="flex items-center gap-2.5">
                  <span className="w-6 h-6 rounded-full bg-slate-950 border border-slate-700 flex items-center justify-center text-[10px] font-mono font-bold">
                    {opt.id.toUpperCase()}
                  </span>
                  <span>{opt.text}</span>
                </div>

                {isAnswerChecked && opt.isCorrect && <span className="text-emerald-400 font-bold text-sm">✔ נכון</span>}
                {isAnswerChecked && isSelected && !opt.isCorrect && <span className="text-rose-400 font-bold text-sm">✖ שגוי</span>}
              </button>
            );
          })}
        </div>

        {/* כרטיס הסבר חזותי מיידי (מופיע רק אחרי בחירה) */}
        {showExplanation && (
          <div className="bg-slate-900 border border-slate-800 p-4 rounded-2xl space-y-2 animate-fadeIn shadow-xl">
            <div className="flex justify-between items-center">
              <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                <span>📖</span> הסבר ויזואלי ומדויק למבחן:
              </span>
              <button 
                onClick={() => speakText(currentQ.explanation)} 
                className="text-[11px] text-purple-300 bg-purple-950/50 border border-purple-800 px-2 py-0.5 rounded-lg flex items-center gap-1"
              >
                🔊 שמע הסבר
              </button>
            </div>
            <p className="text-xs text-slate-300 leading-relaxed bg-slate-950 p-3 rounded-xl border border-slate-800">
              {currentQ.explanation}
            </p>
          </div>
        )}

      </div>

      {/* כפתור פעולה תחתון קבוע (בדיקה / שאלה הבאה) */}
      <footer className="w-full pt-3 pb-2">
        {!isAnswerChecked ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedOption}
            className="w-full bg-amber-500 hover:bg-amber-400 disabled:opacity-40 disabled:hover:bg-amber-500 text-slate-950 font-black py-4 rounded-2xl text-sm transition shadow-xl"
          >
            בדוק תשובה
          </button>
        ) : (
          <button
            onClick={handleNextQuestion}
            className="w-full bg-emerald-500 hover:bg-emerald-400 text-slate-950 font-black py-4 rounded-2xl text-sm transition shadow-xl flex items-center justify-center gap-2"
          >
            <span>{currentIndex === WINGATE_QUESTIONS.length - 1 ? '🎉 סיים מודול וסכם תוצאות' : 'שאלה הבאה'}</span>
            <span>➜</span>
          </button>
        )}
      </footer>

    </main>
  );
}
