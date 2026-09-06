/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';

// --- תרשימים גרפיים וקטוריים מובנים (משמשים כגיבוי בטוח ללא תלות ברשת) ---

function DiagramDisc() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full bg-slate-950 p-2">
      <ellipse cx="160" cy="80" rx="130" ry="60" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
      <ellipse cx="160" cy="80" rx="95" ry="44" fill="#0f172a" stroke="#0284c7" strokeWidth="2" strokeDasharray="4 3" />
      <ellipse cx="160" cy="80" rx="70" ry="32" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
      <ellipse cx="160" cy="80" rx="38" ry="18" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
      <text x="160" y="84" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גרעין צמיגי (Nucleus Pulposus)</text>
      <text x="160" y="32" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעות סיביות (Annulus Fibrosus)</text>
    </svg>
  );
}

function DiagramSpine() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full bg-slate-950 p-2">
      <path d="M 160 20 Q 185 45 160 65 Q 130 95 160 120 Q 180 135 160 150" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
      <circle cx="160" cy="22" r="5" fill="#38bdf8" />
      <circle cx="178" cy="45" r="5" fill="#38bdf8" />
      <circle cx="160" cy="65" r="5" fill="#38bdf8" />
      <circle cx="140" cy="95" r="5" fill="#10b981" />
      <circle cx="160" cy="120" r="5" fill="#a855f7" />
      <text x="240" y="42" fill="#38bdf8" fontSize="11" fontWeight="bold">לורדוזה צווארית (C1-C7)</text>
      <text x="70" y="92" fill="#10b981" fontSize="11" fontWeight="bold">קיפוזה חזית (T1-T12)</text>
      <text x="240" y="130" fill="#a855f7" fontSize="11" fontWeight="bold">לורדוזה מותנית (L1-L5)</text>
    </svg>
  );
}

function DiagramKnee() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full bg-slate-950 p-2">
      <path d="M 120 15 L 200 15 L 205 60 Q 190 75 160 70 Q 130 75 115 60 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
      <text x="160" y="38" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">עצם הירך (Femur)</text>
      <ellipse cx="132" cy="80" rx="18" ry="6" fill="#38bdf8" />
      <ellipse cx="188" cy="80" rx="18" ry="6" fill="#38bdf8" />
      <line x1="140" y1="68" x2="180" y2="92" stroke="#f43f5e" strokeWidth="3" />
      <line x1="180" y1="68" x2="140" y2="92" stroke="#fbbf24" strokeWidth="3" />
      <path d="M 115 95 Q 160 90 205 95 L 195 145 L 125 145 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <text x="160" y="125" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">עצם השוק (Tibia)</text>
      <text x="55" y="83" fill="#38bdf8" fontSize="10" fontWeight="bold">מניסקוס</text>
      <text x="265" y="80" fill="#f43f5e" fontSize="10" fontWeight="bold">רצועות צולבות (ACL/PCL)</text>
    </svg>
  );
}

function DiagramSarcomere() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full bg-slate-950 p-2">
      <line x1="30" y1="20" x2="30" y2="140" stroke="#f43f5e" strokeWidth="4" />
      <line x1="290" y1="20" x2="290" y2="140" stroke="#f43f5e" strokeWidth="4" />
      <line x1="30" y1="45" x2="135" y2="45" stroke="#38bdf8" strokeWidth="3" />
      <line x1="185" y1="45" x2="290" y2="45" stroke="#38bdf8" strokeWidth="3" />
      <line x1="30" y1="115" x2="135" y2="115" stroke="#38bdf8" strokeWidth="3" />
      <line x1="185" y1="115" x2="290" y2="115" stroke="#38bdf8" strokeWidth="3" />
      <rect x="85" y="70" width="150" height="20" rx="4" fill="#eab308" />
      <text x="80" y="38" fill="#38bdf8" fontSize="10" fontWeight="bold">אקטין (חלבון דק)</text>
      <text x="160" y="84" fill="#020617" fontSize="10" fontWeight="bold" textAnchor="middle">מיוזין (חלבון עבה)</text>
      <text x="160" y="150" fill="#94a3b8" fontSize="10" textAnchor="middle">מנגנון הסרקומר: החלקת חלבוני הכיווץ</text>
    </svg>
  );
}

function DiagramHeart() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full bg-slate-950 p-2">
      <rect x="65" y="25" width="85" height="50" rx="8" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
      <text x="107" y="55" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">עלייה ימין</text>
      <rect x="65" y="80" width="85" height="55" rx="8" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="2" />
      <text x="107" y="112" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">חדר ימין</text>
      <line x1="160" y1="20" x2="160" y2="140" stroke="#64748b" strokeWidth="3" />
      <rect x="170" y="25" width="85" height="50" rx="8" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
      <text x="212" y="55" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">עלייה שמאל</text>
      <rect x="170" y="80" width="85" height="55" rx="8" fill="#b91c1c" stroke="#ef4444" strokeWidth="3" />
      <text x="212" y="112" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">חדר שמאל</text>
      <text x="160" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">מבנה מדורי הלב והמסתמים</text>
    </svg>
  );
}

function DiagramEnergy() {
  return (
    <svg viewBox="0 0 320 160" className="w-full h-full bg-slate-950 p-2">
      <rect x="15" y="30" width="85" height="90" rx="10" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
      <text x="57" y="55" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">ATP-CrP</text>
      <text x="57" y="75" fill="#fde68a" fontSize="10" textAnchor="middle">אלקטי</text>
      <text x="57" y="102" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">0-10 שניות</text>
      <rect x="115" y="30" width="85" height="90" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
      <text x="157" y="55" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">גליקוליזה</text>
      <text x="157" y="75" fill="#a7f3d0" fontSize="10" textAnchor="middle">לקטי</text>
      <text x="157" y="102" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">10-120 שנ'</text>
      <rect x="215" y="30" width="85" height="90" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
      <text x="257" y="55" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">אירובי</text>
      <text x="257" y="75" fill="#c7d2fe" fontSize="10" textAnchor="middle">מיטוכונדריה</text>
      <text x="257" y="102" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">מעל 2 דק'</text>
    </svg>
  );
}

const DIAGRAMS = {
  disc: <DiagramDisc />,
  spine: <DiagramSpine />,
  knee: <DiagramKnee />,
  sarcomere: <DiagramSarcomere />,
  heart: <DiagramHeart />,
  energy: <DiagramEnergy />
};

// מאגר שאלות עם קישורי תמונות ישירים וגיבוי וקטורי
const WINGATE_QUESTION_BANK = [
  {
    id: 'a1_1',
    moduleId: 'anat1',
    topic: 'עמוד השדרה והדיסק',
    title: 'מבנה הדיסק הבין-חולייתי',
    diagramKey: 'disc',
    imageUrl: 'https://images.unsplash.com/photo-1530497610245-94d3c16cda28?w=800&auto=format&fit=crop&q=80',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו בעיקר:',
    hint: 'חשוב על הטבעות הסיביות החיצוניות שמחזיקות את הדיסק.',
    options: [
      { id: 'a', text: 'למנוע חיכוך ולבלום זעזועים', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'לחבר בין העור לשריר', isCorrect: false }
    ],
    explanation: 'ה-Annulus Fibrosus בנוי מטבעות קולגן צפופות המקיפות את הגרעין הצמיגי (Nucleus Pulposus), בולמות זעזועים ומחברות בין החוליות.'
  },
  {
    id: 'a1_2',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'עקומות עמוד השדרה',
    diagramKey: 'spine',
    imageUrl: 'https://images.unsplash.com/photo-1507413245164-6160d8298b31?w=800&auto=format&fit=crop&q=80',
    questionText: 'איזו עקומה קעורה קיימת בעמוד השדרה המותני (Lumbar)?',
    hint: 'שקע הגב התחתון הטבעי הנושא את עיקר משקל הגו.',
    options: [
      { id: 'a', text: 'לורדוזה מותנית (Lumbar Lordosis)', isCorrect: true },
      { id: 'b', text: 'קיפוזה חזית (Thoracic Kyphosis)', isCorrect: false },
      { id: 'c', text: 'סקוליוזיס (עקמת)', isCorrect: false },
      { id: 'd', text: 'קיפוזה סקרלית', isCorrect: false }
    ],
    explanation: 'באזור המותני (L1-L5) קיימת עקומת לורדוזה קעורה קדימה המאפשרת עמידה זקופה ובלימת עומסים אנכיים.'
  },
  {
    id: 'a1_3',
    moduleId: 'anat1',
    topic: 'מפרקים ורצועות',
    title: 'מבנה מפרק הברך',
    diagramKey: 'knee',
    imageUrl: 'https://images.unsplash.com/photo-1434493789847-2f02dc6ca35d?w=800&auto=format&fit=crop&q=80',
    questionText: 'איזה שריר נאחז (Insertion) בראש עצם השוקית (Head of Fibula)?',
    hint: 'השריר הלטרלי מבין שרירי מיתר הירך (Hamstrings).',
    options: [
      { id: 'a', text: 'Biceps Femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Rectus Femoris', isCorrect: false }
    ],
    explanation: 'ה-Biceps Femoris מגיע מהאגן והפמור ונאחז בראש הפיבולה בצד החיצוני של הברך.'
  },
  {
    id: 'a2_1',
    moduleId: 'anat2',
    topic: 'מערכת השרירים',
    title: 'מבנה הסרקומר והמיופיבריל',
    diagramKey: 'sarcomere',
    imageUrl: 'https://images.unsplash.com/photo-1576086213369-97a306d36557?w=800&auto=format&fit=crop&q=80',
    questionText: 'במהלך כיווץ שריר שלד, איזה חלבון נמשך אל עבר מרכז הסרקומר?',
    hint: 'זהו החוט הדק (Thin Filament) המחובר לקו ה-Z.',
    options: [
      { id: 'a', text: 'אקטין (Actin)', isCorrect: true },
      { id: 'b', text: 'מיוזין (Myosin)', isCorrect: false },
      { id: 'c', text: 'קולגן מסוג 1', isCorrect: false },
      { id: 'd', text: 'אלסטין', isCorrect: false }
    ],
    explanation: 'ראשי המיוזין העבים נאחזים באתרי הקשירה של חלבוני האקטין הדקים וגוררים אותם למרכז הסרקומר (Power Stroke).'
  },
  {
    id: 'p1_1',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מסלולים אנרגטיים במאמץ',
    diagramKey: 'energy',
    imageUrl: 'https://images.unsplash.com/photo-1517838277536-f5f99be501cd?w=800&auto=format&fit=crop&q=80',
    questionText: 'מה נכון לגבי הריכוז הזמין של ATP לעומת קריאטין פוספט (CrP) בתא שריר?',
    hint: 'איזו מולקולה נאגרת בכמות גדולה פי 3 לפחות?',
    options: [
      { id: 'a', text: 'הריכוז הזמין של CrP גדול לפחות פי 3 מהריכוז של ATP', isCorrect: true },
      { id: 'b', text: 'הריכוז של ATP גדול פי 3 מ-CrP', isCorrect: false },
      { id: 'c', text: 'שתי המולקולות מספקות אנרגיה אך ורק בנוכחות חמצן', isCorrect: false },
      { id: 'd', text: 'המאגר של שניהם יחד מספיק לפעילות מרבית של 20 דקות', isCorrect: false }
    ],
    explanation: 'מולקולת ה-CrP קטנה יותר ולכן התא אוגר כמות הגדולה פי 3 לפחות ממאגר ה-ATP, המספיקה יחד לכ-10 שניות מאמץ מרבי.'
  },
  {
    id: 'p2_1',
    moduleId: 'phys2',
    topic: 'מערכת הלב וכלי הדם',
    title: 'שלבי פעולת הלב ומסתמיו',
    diagramKey: 'heart',
    imageUrl: 'https://images.unsplash.com/photo-1559757175-5700dde675bc?w=800&auto=format&fit=crop&q=80',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים) של הלב, מהו מצב המסתמים?',
    hint: 'הדם צריך לזרום מהעליות אל תוך החדרים.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'כל המסתמים בלב סגורים לחלוטין', isCorrect: false },
      { id: 'c', text: 'המסתמים לעורקים פתוחים והמסתמים לעליות סגורים', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'בדיאסטולה החדרים נרפים ומתמלאים בדם מהעליות דרך המסתמים הפתוחים, בעוד המסתמים לאבי העורקים ולעורק הריאה סגורים למניעת חזרת דם.'
  }
];

function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function WingateExamApp() {
  const [activeModule, setActiveModule] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);
  const [imageFailed, setImageFailed] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initModule = (modId = activeModule) => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    let base = WINGATE_QUESTION_BANK;
    if (modId !== 'all') {
      base = WINGATE_QUESTION_BANK.filter(q => q.moduleId === modId);
    }

    const shuffled = shuffleArray(base).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setShowExplanation(false);
    setImageFailed(false);
    setScore(0);
    setStreak(0);
  };

  useEffect(() => {
    initModule('all');
  }, []);

  const handleModuleChange = (newMod) => {
    setActiveModule(newMod);
    initModule(newMod);
  };

  const currentQ = questions[currentIndex];

  const speak = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'he-IL';
    u.rate = 0.88;

    u.onstart = () => setIsSpeaking(true);
    u.onend = () => setIsSpeaking(false);
    u.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(u);
  };

  const speakQuestion = () => {
    if (!currentQ) return;
    const text = `שאלה בנושא ${currentQ.topic}. ${currentQ.questionText}. אפשרויות: ${currentQ.options.map((o, idx) => `אפשרות ${['א','ב','ג','ד'][idx]}: ${o.text}`).join('. ')}`;
    speak(text);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswerChecked || !currentQ) return;

    const chosen = currentQ.options.find(o => o.id === selectedOption);
    const correct = chosen?.isCorrect;

    setIsAnswerChecked(true);
    setShowExplanation(true);

    if (correct) {
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
      speak('נכון מאוד שמואל! תשובה מדויקת.');
    } else {
      setStreak(0);
      const right = currentQ.options.find(o => o.isCorrect)?.text;
      speak(`לא מדויק. התשובה הנכונה היא: ${right}. שים לב להסבר.`);
    }
  };

  const handleNext = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
      setImageFailed(false);
    } else {
      const finalScore = score + (currentQ.options.find(o => o.id === selectedOption)?.isCorrect ? 10 : 0);
      alert(`כל הכבוד שמואל!\nסיימת את המודול בהצלחה!\nצברת ${finalScore} נקודות מתוך ${questions.length * 10}!`);
      initModule(activeModule);
    }
  };

  if (!currentQ) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontWeight: 'bold' }}>טוען שאלות ותרשימים...</p>
      </main>
    );
  }

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
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>איורים מובנים והקראה קולית</span>
            </div>

            <button
              onClick={() => initModule(activeModule)}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
              title="ערבוב מחדש של כל השאלות והתשובות"
            >
              🔄 איפוס וערבוב
            </button>
          </div>

          {/* תפריט מודולים */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '8px' }}>
            <button
              onClick={() => handleModuleChange('all')}
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
              🎯 הכל מעורבב
            </button>

            <button
              onClick={() => handleModuleChange('anat1')}
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
              🦴 אנטומיה א' (שלד)
            </button>

            <button
              onClick={() => handleModuleChange('anat2')}
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
              💪 אנטומיה ב' (שרירים)
            </button>

            <button
              onClick={() => handleModuleChange('phys1')}
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
              ⚡ פיזיולוגיה א' (אנרגיה)
            </button>

            <button
              onClick={() => handleModuleChange('phys2')}
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
              ❤️ פיזיולוגיה ב' (לב ודם)
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
            <span style={{ color: '#94a3b8', fontWeight: 'bold' }}>שאלה {currentIndex + 1} מתוך {questions.length}</span>
          </div>

          <div style={{ width: '100%', backgroundColor: '#0f172a', height: '8px', borderRadius: '999px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <div 
              style={{ 
                width: `${((currentIndex + 1) / questions.length) * 100}%`, 
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
          <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 'bold' }}>איור המחשה 🖼️</span>
        </div>

        {/* תצוגת איור: תמונה עם גיבוי וקטורי מובנה שמבטיח טעינה של 100% */}
        <div 
          onClick={() => setIsModalOpen(true)}
          style={{ 
            width: '100%', 
            height: '160px', 
            borderRadius: '14px', 
            overflow: 'hidden', 
            marginBottom: '10px', 
            border: '1px solid #334155', 
            backgroundColor: '#020617',
            position: 'relative', 
            cursor: 'pointer' 
          }}
        >
          {!imageFailed && currentQ.imageUrl ? (
            <img 
              src={currentQ.imageUrl} 
              alt={currentQ.title} 
              referrerPolicy="no-referrer"
              crossOrigin="anonymous"
              onError={() => setImageFailed(true)}
              style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
            />
          ) : (
            DIAGRAMS[currentQ.diagramKey] || <DiagramDisc />
          )}

          <span style={{ position: 'absolute', bottom: '6px', left: '6px', backgroundColor: 'rgba(2, 6, 23, 0.85)', color: '#fbbf24', fontSize: '10px', padding: '3px 8px', borderRadius: '6px', fontWeight: 'bold', border: '1px solid #334155' }}>
            🔍 לחץ להגדלה במסך מלא
          </span>
        </div>

        {/* השאלה + כפתור הקראה קולית */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '14px', padding: '12px', marginBottom: '10px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.4' }}>
              {currentQ.questionText}
            </p>

            <button
              onClick={speakQuestion}
              style={{
                backgroundColor: isSpeaking ? '#f59e0b' : '#9333ea',
                color: isSpeaking ? '#020617' : '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '8px 12px',
                fontSize: '16px',
                cursor: 'pointer',
                flexShrink: 0
              }}
              title="הקרא שאלה בעברית"
            >
              🔊
            </button>
          </div>

          <div style={{ marginTop: '8px', backgroundColor: 'rgba(2, 6, 23, 0.6)', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', color: '#94a3b8' }}>
            💡 <strong>רמז:</strong> {currentQ.hint}
          </div>
        </div>

        {/* 4 אפשרויות בחירה (מעורבבות) */}
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

        {/* הסבר מלא מתוך חוברות וינגייט */}
        {showExplanation && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '14px', padding: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: 'bold' }}>📖 הסבר מתוך חוברת וינגייט:</span>
              <button
                onClick={() => speak(currentQ.explanation)}
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

      {/* כפתור פעולה תחתון */}
      <footer style={{ paddingTop: '6px', paddingBottom: '6px' }}>
        {!isAnswerChecked ? (
          <button
            onClick={handleCheckAnswer}
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
            {currentIndex === questions.length - 1 ? '🎉 סיים מודול וסכם ציון' : 'שאלה הבאה ➜'}
          </button>
        )}
      </footer>

      {/* חלון צף להגדלת איור במסך מלא */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
        >
          <div style={{ width: '100%', maxWidth: '460px', textAlign: 'center' }}>
            <div style={{ height: '240px', borderRadius: '12px', border: '2px solid #f59e0b', overflow: 'hidden' }}>
              {!imageFailed && currentQ.imageUrl ? (
                <img src={currentQ.imageUrl} alt={currentQ.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              ) : (
                DIAGRAMS[currentQ.diagramKey] || <DiagramDisc />
              )}
            </div>
            <p style={{ color: '#ffffff', fontSize: '13px', marginTop: '10px', fontWeight: 'bold' }}>{currentQ.title} - לחץ לסגירה ✕</p>
          </div>
        </div>
      )}

    </main>
  );
}
