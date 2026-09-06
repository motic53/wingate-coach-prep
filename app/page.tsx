'use client';

import React, { useState, useEffect } from 'react';

// מאגר השאלות והתרשימים המובנים ישירות
const QUIZ_DATA = [
  // 1. שאלה על BMR
  {
    id: 'p1_bmr',
    moduleId: 'phys1',
    topic: 'חילוף חומרים בסיסי',
    title: 'משתנים המשפיעים על BMR',
    diagramType: 'bmr',
    questionText: 'אילו משתנים משפיעים ישירות על חילוף החומרים הבסיסי (BMR)?',
    hint: 'שריר צורך פי 4 אנרגיה משומן במנוחה, ואדם גדול ממדים מאבד יותר חום דרך שטח העור לסביבה.',
    options: [
      { id: 'a', text: 'מסת שריר ואחוז שומן, גיל, מגדר, שטח פני הגוף והורמונים', isCorrect: true },
      { id: 'b', text: 'צבע העיניים בלבד', isCorrect: false },
      { id: 'c', text: 'סוג הנעליים שלובשים באימון', isCorrect: false },
      { id: 'd', text: 'כמות השיער על הראש', isCorrect: false }
    ],
    explanation: 'BMR מושפע ממסת רקמת השריר הפעילה (שורפת פי 4 קלוריות משומן במנוחה), מגיל, מגדר ושטח פני הגוף.'
  },
  // 2. שאלה על מפרק הברך וראש הפיבולה
  {
    id: 'a1_fibula',
    moduleId: 'anat1',
    topic: 'שרירי הירך ומפרק הברך',
    title: 'אחז בראש הפיבולה',
    diagramType: 'knee',
    questionText: 'איזה שריר נאחז (Insertion) בראש עצם השוקית (Head of Fibula)?',
    hint: 'הפיבולה היא העצם החיצונית של השוק. איזה שריר מהירך האחורית פונה החוצה לצד הלטרלי?',
    options: [
      { id: 'a', text: 'Biceps Femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Rectus Femoris', isCorrect: false }
    ],
    explanation: 'ה-Biceps Femoris יורד בצד הלטרלי ונאחז בראש הפיבולה, בעוד שני שרירי ה"סמי" נאחזים בצד הפנימי של הטיביה.'
  },
  // 3. שאלה על הדיסק הבין-חולייתי
  {
    id: 'a1_disc',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'מבנה הדיסק הבין-חולייתי',
    diagramType: 'disc',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו בעיקר:',
    hint: 'Annulus בלטינית זה טבעת. דמיין מעטפת של צמיג קשיח שמחזיקה ג\'ל בפנים ובולמת זעזועים.',
    options: [
      { id: 'a', text: 'למנוע חיכוך ולבלום זעזועים (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'להזין ישירות את חוט השדרה', isCorrect: false }
    ],
    explanation: 'ה-Annulus Fibrosus בנוי מטבעות קולגן צפופות העוטפות את הגרעין הצמיגי (Nucleus Pulposus) ובולמות עומסים.'
  },
  // 4. שאלה על חוליות הצוואר
  {
    id: 'a1_cervical',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'מאפייני חוליות הצוואר',
    diagramType: 'cervical',
    questionText: 'נקב בזיזים הרוחביים (Transverse Foramen) מאפיין את חוליות:',
    hint: 'המוח יושב למעלה וחייב לקבל דם. באיזה אזור בעמוד השדרה העורקים צריכים מנהרה מוגנת בתוך העצם?',
    options: [
      { id: 'a', text: 'הצוואר (Cervical vertebrae)', isCorrect: true },
      { id: 'b', text: 'החזה (Thoracic)', isCorrect: false },
      { id: 'c', text: 'המותניים (Lumbar)', isCorrect: false },
      { id: 'd', text: 'הסקרום', isCorrect: false }
    ],
    explanation: 'נקב בזיז הרוחבי (C1-C7) מאפשר מעבר בטוח ומוגן של עורק הצוואר המוביל דם למוח.'
  },
  // 5. שאלה על הלב ומסתמים
  {
    id: 'p2_heart',
    moduleId: 'phys2',
    topic: 'מערכת הלב וכלי הדם',
    title: 'שלבי פעולת הלב ומסתמיו',
    diagramType: 'heart',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים ומילויים) בלב:',
    hint: 'דמיין דלתות שנפתחות כדי שהדם ייכנס מהעליות לתוך החדרים, בזמן שהדלת לעורקים סגורה.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים בין החדרים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'המסתמים בין החדרים לעורקים פתוחים', isCorrect: false },
      { id: 'c', text: 'כל המסתמים בלב סגורים לחלוטין', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'בדיאסטולה החדרים נרפים ומתמלאים בדם מהעליות דרך המסתמים הפתוחים ביניהם, בעוד מסתמי היציאה לעורקים סגורים.'
  },
  // 6. שאלה על הסרקומר
  {
    id: 'a2_sarcomere',
    moduleId: 'anat2',
    topic: 'מערכת השרירים',
    title: 'מנגנון הסרקומר וחלבון הכיווץ',
    diagramType: 'sarcomere',
    questionText: 'במהלך כיווץ שריר שלד, איזה חלבון נמשך אל עבר מרכז הסרקומר על ידי גשרי הרוחב?',
    hint: 'החוט הדק שמחובר לקו ה-Z ונגרר פנימה ע"י ראשי המיוזין העבים.',
    options: [
      { id: 'a', text: 'אקטין (Actin)', isCorrect: true },
      { id: 'b', text: 'מיוזין (Myosin)', isCorrect: false },
      { id: 'c', text: 'קולגן מסוג 1', isCorrect: false },
      { id: 'd', text: 'אלסטין', isCorrect: false }
    ],
    explanation: 'ראשי המיוזין נאחזים באקטין וגוררים אותו למרכז הסרקומר בתנועת חתירה (Power Stroke), וכך הסרקומר מתקצר.'
  }
];

// רכיב התרשימים הגרפיים
function VisualDiagram({ type }: { type: string }) {
  if (type === 'bmr') {
    return (
      <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
        <rect x="15" y="20" width="95" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
        <text x="62" y="45" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">מסת שריר</text>
        <text x="62" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">צורכת פי 4 אנרגיה</text>
        <text x="62" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">משומן במנוחה</text>
        <text x="62" y="112" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>

        <rect x="122" y="20" width="95" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
        <text x="170" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">שטח פני הגוף</text>
        <text x="170" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">איבוד חום מוגבר</text>
        <text x="170" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">בגוף גדול ממדים</text>
        <text x="170" y="112" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>

        <rect x="230" y="20" width="95" height="110" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
        <text x="277" y="45" fill="#a855f7" fontSize="11" fontWeight="bold" textAnchor="middle">גיל ומגדר</text>
        <text x="277" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">טסטוסטרון בגבר</text>
        <text x="277" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">ירידה טבעית בגיל</text>
        <text x="277" y="112" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">משפיע ישירות</text>
        <text x="170" y="150" fill="#94a3b8" fontSize="10" textAnchor="middle">הגורמים המשפיעים על חילוף החומרים הבסיסי (BMR)</text>
      </svg>
    );
  }

  if (type === 'knee') {
    return (
      <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
        <path d="M 120 10 L 220 10 L 225 50 Q 210 70 170 65 Q 130 70 115 50 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <text x="170" y="32" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">עצם הירך (Femur)</text>
        <ellipse cx="135" cy="70" rx="16" ry="6" fill="#38bdf8" />
        <ellipse cx="205" cy="70" rx="16" ry="6" fill="#38bdf8" />
        <path d="M 130 80 Q 170 75 210 80 L 200 150 L 140 150 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />
        <text x="170" y="115" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">שוק (Tibia)</text>
        <path d="M 95 85 L 115 85 L 110 150 L 90 150 Z" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
        <circle cx="105" cy="88" r="10" fill="#e11d48" stroke="#fecdd3" strokeWidth="2" />
        <path d="M 85 20 Q 75 60 100 82" fill="none" stroke="#fb7185" strokeWidth="3" strokeDasharray="4 2" />
        <text x="45" y="32" fill="#fb7185" fontSize="10" fontWeight="bold">Biceps Femoris</text>
        <text x="45" y="110" fill="#f59e0b" fontSize="10" fontWeight="bold">ראש השוקית</text>
        <text x="45" y="122" fill="#f59e0b" fontSize="9">(Head of Fibula)</text>
      </svg>
    );
  }

  if (type === 'disc') {
    return (
      <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
        <ellipse cx="170" cy="80" rx="135" ry="60" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
        <ellipse cx="170" cy="80" rx="105" ry="46" fill="#0f172a" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3" />
        <ellipse cx="170" cy="80" rx="75" ry="32" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
        <ellipse cx="170" cy="80" rx="40" ry="18" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
        <text x="170" y="84" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גרעין צמיגי (Nucleus Pulposus)</text>
        <text x="170" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעות קולגן סיביות (Annulus Fibrosus)</text>
        <text x="170" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">מבנה הדיסק הבין-חולייתי ובלימת זעזועים</text>
      </svg>
    );
  }

  if (type === 'cervical') {
    return (
      <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
        <ellipse cx="170" cy="40" rx="55" ry="20" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <text x="170" y="44" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גוף החוליה (Body)</text>
        <ellipse cx="170" cy="90" rx="38" ry="24" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="85" cy="70" r="10" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
        <circle cx="255" cy="70" r="10" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
        <text x="85" y="105" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">נקב עורק הצוואר</text>
        <text x="85" y="118" fill="#f43f5e" fontSize="9" textAnchor="middle">(Transverse Foramen)</text>
        <path d="M 155 115 L 170 150 L 185 115 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
        <text x="170" y="142" fill="#94a3b8" fontSize="10" textAnchor="middle">זיז אחורי (Spine)</text>
      </svg>
    );
  }

  if (type === 'heart') {
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
        <text x="170" y="150" fill="#94a3b8" fontSize="10" textAnchor="middle">בדיאסטולה: מסתמים בין עליות לחדרים פתוחים למילוי</text>
      </svg>
    );
  }

  // ברירת מחדל: סרקומר
  return (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <line x1="30" y1="20" x2="30" y2="140" stroke="#f43f5e" strokeWidth="4" />
      <line x1="310" y1="20" x2="310" y2="140" stroke="#f43f5e" strokeWidth="4" />
      <text x="30" y="15" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">Z-Line</text>
      <text x="310" y="15" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">Z-Line</text>
      <line x1="30" y1="50" x2="145" y2="50" stroke="#38bdf8" strokeWidth="3" />
      <line x1="195" y1="50" x2="310" y2="50" stroke="#38bdf8" strokeWidth="3" />
      <line x1="30" y1="110" x2="145" y2="110" stroke="#38bdf8" strokeWidth="3" />
      <line x1="195" y1="110" x2="310" y2="110" stroke="#38bdf8" strokeWidth="3" />
      <text x="85" y="42" fill="#38bdf8" fontSize="10" fontWeight="bold">אקטין (דק)</text>
      <rect x="95" y="70" width="150" height="20" rx="4" fill="#eab308" />
      <text x="170" y="84" fill="#020617" fontSize="10" fontWeight="bold" textAnchor="middle">מיוזין (עבה)</text>
      <text x="170" y="150" fill="#94a3b8" fontSize="10" textAnchor="middle">מנגנון גשרי הרוחב בסרקומר</text>
    </svg>
  );
}

export default function App() {
  const [isClient, setIsClient] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        טוען את אפליקציית וינגייט לשמואל...
      </div>
    );
  }

  const currentQ = QUIZ_DATA[currentIndex];

  const handleSpeak = (text: string) => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'he-IL';
        u.rate = 0.9;
        window.speechSynthesis.speak(u);
      }
    } catch (e) {}
  };

  const handleCheck = () => {
    if (!selectedOption || isAnswerChecked) return;
    const chosen = currentQ.options.find((o) => o.id === selectedOption);
    const correct = chosen?.isCorrect;

    setIsAnswerChecked(true);
    setShowExplanation(true);

    if (correct) {
      setScore((s) => s + 10);
      setStreak((s) => s + 1);
      handleSpeak('נכון מאוד שמואל! תשובה מדויקת.');
    } else {
      setStreak(0);
      const right = currentQ.options.find((o) => o.isCorrect)?.text;
      handleSpeak(`לא מדויק. התשובה הנכונה היא: ${right}.`);
    }
  };

  const handleNext = () => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}

    if (currentIndex < QUIZ_DATA.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
    } else {
      alert(`כל הכבוד שמואל!\nסיימת את המבחן בהצלחה!\nצברת ${score} נקודות!`);
      setCurrentIndex(0);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
      setScore(0);
      setStreak(0);
    }
  };

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '14px', maxWidth: '520px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} dir="rtl">
      
      <div>
        {/* כותרת עליונה */}
        <header style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '900', color: '#f59e0b' }}>
                🎓 ווינגייט קואוץ' - שמואל
              </h1>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>תרשימים מותאמים והקראה קולית</span>
            </div>

            <button
              onClick={() => {
                setCurrentIndex(0);
                setSelectedOption(null);
                setIsAnswerChecked(false);
                setShowExplanation(false);
                setScore(0);
                setStreak(0);
              }}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              🔄 איפוס מבחן
            </button>
          </div>

          {/* מד התקדמות וניקוד */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', marginBottom: '6px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', padding: '3px 8px', borderRadius: '8px', fontWeight: 'bold' }}>
                🔥 רצף: {streak}
              </span>
              <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '3px 8px', borderRadius: '8px', fontWeight: 'bold' }}>
                ⭐ {score} XP
              </span>
            </div>
            <span style={{ color: '#94a3b8', fontWeight: 'bold' }}>שאלה {currentIndex + 1} מתוך {QUIZ_DATA.length}</span>
          </div>

          <div style={{ width: '100%', backgroundColor: '#0f172a', height: '8px', borderRadius: '999px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <div 
              style={{ 
                width: `${((currentIndex + 1) / QUIZ_DATA.length) * 100}%`, 
                height: '100%', 
                background: 'linear-gradient(to left, #10b981, #f59e0b)',
                transition: 'width 0.3s ease'
              }} 
            />
          </div>
        </header>

        {/* כרטיסיית נושא */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div>
            <span style={{ color: '#f59e0b', fontSize: '10px', fontWeight: 'bold', display: 'block' }}>{currentQ.topic}</span>
            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '900' }}>{currentQ.title}</span>
          </div>
          <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 'bold' }}>תרשים מדויק 📊</span>
        </div>

        {/* תרשים ויזואלי מותאם אישית */}
        <div style={{ width: '100%', height: '170px', borderRadius: '14px', overflow: 'hidden', marginBottom: '10px', border: '1px solid #334155', backgroundColor: '#020617' }}>
          <VisualDiagram type={currentQ.diagramType} />
        </div>

        {/* שאלה + כפתור הקראה */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '14px', padding: '12px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.4' }}>
              {currentQ.questionText}
            </p>

            <button
              onClick={() => handleSpeak(`${currentQ.questionText}. רמז: ${currentQ.hint}`)}
              style={{
                backgroundColor: '#9333ea',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '8px 12px',
                fontSize: '16px',
                cursor: 'pointer',
                flexShrink: 0
              }}
              title="הקרא שאלה"
            >
              🔊
            </button>
          </div>

          <div style={{ marginTop: '8px', backgroundColor: 'rgba(2, 6, 23, 0.6)', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', color: '#94a3b8' }}>
            💡 <strong>רמז אסוציאטיבי:</strong> {currentQ.hint}
          </div>
        </div>

        {/* 4 אפשרויות בחירה */}
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

        {/* הסבר מלא */}
        {showExplanation && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '14px', padding: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: 'bold' }}>📖 הסבר רשמי ומפורט:</span>
              <button
                onClick={() => handleSpeak(currentQ.explanation)}
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

      {/* כפתור בדיקה / שאלה הבאה */}
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
            {currentIndex === QUIZ_DATA.length - 1 ? '🎉 סיום מבחן ואיפוס' : 'שאלה הבאה ➜'}
          </button>
        )}
      </footer>

    </main>
  );
}
