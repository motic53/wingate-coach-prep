/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';

// מאגר שאלות עם איורים אנטומיים ופיזיולוגיים ריאליסטיים (Wikimedia / OpenStax CDN)
const WINGATE_QUESTION_BANK = [
  // --- מודול 1: אנטומיה א' - תאים, רקמות, שלד ומפרקים ---
  {
    id: 'a1_1',
    moduleId: 'anat1',
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'עמוד השדרה והדיסק',
    title: 'מבנה הדיסק הבין-חולייתי',
    illustration: '🦴 💿',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/716_Intervertebral_Disk.jpg/800px-716_Intervertebral_Disk.jpg',
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
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'עמוד השדרה',
    title: 'עקומות עמוד השדרה',
    illustration: '🦒 🦴',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e0/715_Vertebral_Column.jpg/500px-715_Vertebral_Column.jpg',
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
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'מפרקים ורצועות',
    title: 'מבנה מפרק הברך',
    illustration: '🦵 🦴',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/86/812_Knee_Joint.jpg/800px-812_Knee_Joint.jpg',
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
    id: 'a1_4',
    moduleId: 'anat1',
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'עמוד השדרה הצווארי',
    title: 'חוליית האטלס והאקסיס (C1-C2)',
    illustration: '🔄 🗣️',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0e/718_Vertebra-Atlas_and_Axis.jpg/800px-718_Vertebra-Atlas_and_Axis.jpg',
    questionText: 'מפרק ה-Atlantoaxial (בין C1 ל-C2) מאפשר בעיקר את תנועת:',
    hint: 'תנועת סיבוב הראש לצדדים ("לא").',
    options: [
      { id: 'a', text: 'רוטציה (סיבוב הראש לצדדים)', isCorrect: true },
      { id: 'b', text: 'פשיטה לאחור בלבד', isCorrect: false },
      { id: 'c', text: 'הרחקה וקירוב', isCorrect: false },
      { id: 'd', text: 'החלקה ללא תנועה', isCorrect: false }
    ],
    explanation: 'השן של חוליית האקסיס (C2) נכנסת לקשת של חוליית האטלס (C1) ומאפשרת תנועת סיבוב של הראש.'
  },

  // --- מודול 2: אנטומיה ב' - שרירים, תחל/אחז ותנועות ---
  {
    id: 'a2_1',
    moduleId: 'anat2',
    moduleName: "אנטומיה ב': שרירים ותנועות",
    topic: 'מערכת השרירים',
    title: 'מבנה הסרקומר והמיופיבריל',
    illustration: '🔬 💪',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/73/1022_Muscle_Fibers_%28sarcomere%29.jpg/800px-1022_Muscle_Fibers_%28sarcomere%29.jpg',
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
    id: 'a2_2',
    moduleId: 'anat2',
    moduleName: "אנטומיה ב': שרירים ותנועות",
    topic: 'שרירי חגורת הכתף',
    title: 'שריר הדלתואיד (Deltoid)',
    illustration: '🏋️‍♂️ 👐',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c2/Deltoid_muscle_-_animation02.gif/500px-Deltoid_muscle_-_animation02.gif',
    questionText: 'איזה חלק משריר הדלתואיד אחראי על קירוב אופקי (Horizontal Adduction) וכפיפת כתף?',
    hint: 'החלק הקדמי שמתחיל בשליש הלטרלי של עצם הבריח.',
    options: [
      { id: 'a', text: 'הדלתואיד הקדמי (Anterior Deltoid)', isCorrect: true },
      { id: 'b', text: 'הדלתואיד האחורי (Posterior Deltoid)', isCorrect: false },
      { id: 'c', text: 'הדלתואיד האמצעי (Middle Deltoid)', isCorrect: false },
      { id: 'd', text: 'שריר הטרפז', isCorrect: false }
    ],
    explanation: 'הדלתואיד הקדמי יוצא מעצם הבריח ונאחז ב-Deltoid Tuberosity, ומבצע כפיפה וקירוב אופקי במפרק הכתף.'
  },
  {
    id: 'a2_3',
    moduleId: 'anat2',
    moduleName: "אנטומיה ב': שרירים ותנועות",
    topic: 'שרירי הגב',
    title: 'שריר הרחב גבי (Latissimus Dorsi)',
    illustration: '🧗‍♂️ ⬇️',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4e/Latissimus_dorsi_muscle_animation.gif/500px-Latissimus_dorsi_muscle_animation.gif',
    questionText: 'במשיכת פולי עליון לחזה (Lat Pulldown), איזה שריר הוא האגוניסט הראשי במפרק הכתף?',
    hint: 'שריר "הכנפיים" הרחב בגב המבצע קירוב ופשיטה.',
    options: [
      { id: 'a', text: 'רחב גבי (Latissimus Dorsi)', isCorrect: true },
      { id: 'b', text: 'חזה קטן (Pectoralis Minor)', isCorrect: false },
      { id: 'c', text: 'טרפז עליון', isCorrect: false },
      { id: 'd', text: 'זוקפי הגב', isCorrect: false }
    ],
    explanation: 'הרחב גבי מתחיל בעמוד השדרה והאגן ונאחז בחריץ הביציפיטלי של ההומרוס, ומבצע קירוב ופשיטה של הזרוע.'
  },
  {
    id: 'a2_4',
    moduleId: 'anat2',
    moduleName: "אנטומיה ב': שרירים ותנועות",
    topic: 'שרירי הירך הקדמיים',
    title: 'שריר הארבע-ראשי (Quadriceps)',
    illustration: '🦵 ⬆️',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a2/Quadriceps_muscle_animation.gif/500px-Quadriceps_muscle_animation.gif',
    questionText: 'מי מבין ארבעת ראשי ה-Quadriceps הוא שריר דו-מפרקי המבצע גם כפיפת ירך?',
    hint: 'הראש הישר האמצעי שמתחיל בעצם האגן (AIIS).',
    options: [
      { id: 'a', text: 'Rectus Femoris (הישר הירכי)', isCorrect: true },
      { id: 'b', text: 'Vastus Lateralis', isCorrect: false },
      { id: 'c', text: 'Vastus Medialis', isCorrect: false },
      { id: 'd', text: 'Vastus Intermedius', isCorrect: false }
    ],
    explanation: 'ה-Rectus Femoris הוא היחיד מבין ארבעת הראשים שחוצה את מפרק הירך (מתחיל ב-AIIS) ומבצע כפיפת ירך בנוסף לפשיטת ברך.'
  },

  // --- מודול 3: פיזיולוגיה א' - אנרגיה ומטבוליזם ---
  {
    id: 'p1_1',
    moduleId: 'phys1',
    moduleName: "פיזיולוגיה א': אנרגיה ומטבוליזם",
    topic: 'מערכות אנרגיה',
    title: 'מולקולת ה-ATP והאנרגיה התאית',
    illustration: '⚡ 🔋',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/36/ATP_structure.svg/800px-ATP_structure.svg.png',
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
    id: 'p1_2',
    moduleId: 'phys1',
    moduleName: "פיזיולוגיה א': אנרגיה ומטבוליזם",
    topic: 'מיחזור לקטט',
    title: 'מעגל קורי (Cori Cycle)',
    illustration: '🔄 🩸',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Cori_cycle.svg/800px-Cori_cycle.svg.png',
    questionText: 'במסגרת "מעגל קורי" (Cori Cycle), מה מתרחש בכבד?',
    hint: 'איזה איבר הופך את הלקטט חזרה לגלוקוז בהשקעת אנרגיה?',
    options: [
      { id: 'a', text: 'לקטט המפונה מהשריר הופך מחדש לגלוקוז בכבד בהשקעת אנרגיה', isCorrect: true },
      { id: 'b', text: 'שומן הופך לחלבון בתוך הכבד', isCorrect: false },
      { id: 'c', text: 'פירובט נשרף ללא חמצן', isCorrect: false },
      { id: 'd', text: 'חומצות אמינו הופכות לסידן', isCorrect: false }
    ],
    explanation: 'הכבד קולט את הלקטט שהצטבר בדם מהשרירים ובתהליך גלוקונאוגנזה (השקעת 6 ATP) מייצר ממנו גלוקוז חדש.'
  },

  // --- מודול 4: פיזיולוגיה ב' - לב, דם ונשימה ---
  {
    id: 'p2_1',
    moduleId: 'phys2',
    moduleName: "פיזיולוגיה ב': לב, דם ונשימה",
    topic: 'מערכת הלב',
    title: 'מבנה הלב ומחזורי הדם',
    illustration: '❤️ 🩸',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e5/Diagram_of_the_human_heart_%28cropped%29.svg/800px-Diagram_of_the_human_heart_%28cropped%29.svg.png',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים) של הלב, מהו מצב המסתמים?',
    hint: 'הדם צריך לזרום מהעליות אל תוך החדרים.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'כל המסתמים בלב סגורים לחלוטין', isCorrect: false },
      { id: 'c', text: 'המסתמים לעורקים פתוחים והמסתמים לעליות סגורים', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'בדיאסטולה החדרים נרפים ומתמלאים בדם מהעליות דרך המסתמים הפתוחים, בעוד המסתמים לאבי העורקים ולעורק הריאה סגורים למניעת חזרת דם.'
  },
  {
    id: 'p2_2',
    moduleId: 'phys2',
    moduleName: "פיזיולוגיה ב': לב, דם ונשימה",
    topic: 'מערכת הנשימה',
    title: 'שחלוף גזים בנאדיות הריאה',
    illustration: '🫁 💨',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/2309_The_Respiratory_Zone.jpg/800px-2309_The_Respiratory_Zone.jpg',
    questionText: 'מהו "נפח מת אנטומי" (Anatomical Dead Space)?',
    hint: 'חלק מנפח האוויר הנשאף שנשאר בדרכי הנשימה המובילות.',
    options: [
      { id: 'a', text: 'כ-150 מ"ל אוויר שנשאר בדרכי הנשימה המוליכות ואינו משתתף בחילוף הגזים', isCorrect: true },
      { id: 'b', text: 'נפח הריאות המלא של אדם מבוגר', isCorrect: false },
      { id: 'c', text: 'כמות האוויר שננשפת במאמץ מרבי בלבד', isCorrect: false },
      { id: 'd', text: 'אוויר מזוהם שלא ניתן לפנותו', isCorrect: false }
    ],
    explanation: 'נפח מת אנטומי (כ-150 מ"ל) ממלא את האף, הקנה והסימפונות, שבהם אין נאדיות ולכן לא מתבצע חילוף גזים עם הדם.'
  },
  {
    id: 'p2_3',
    moduleId: 'phys2',
    moduleName: "פיזיולוגיה ב': לב, דם ונשימה",
    topic: 'שריר ומערכת העצבים',
    title: 'כישור השריר (Muscle Spindle)',
    illustration: '⚡ 🧠',
    imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/1027_Muscle_Spindle.jpg/800px-1027_Muscle_Spindle.jpg',
    questionText: 'איזה מנגנון גורם להרפיה רפלקסיבית של שריר בתגובה למתיחת-יתר או עומס קיצוני בגיד?',
    hint: 'החיישן שנמצא בצומת שבין הגיד לשריר ומגן עליו מקרע.',
    options: [
      { id: 'a', text: 'אברון הגיד ע"ש גולג\'י (Golgi Tendon Organ - GTO)', isCorrect: true },
      { id: 'b', text: 'כישור השריר (Muscle Spindle)', isCorrect: false },
      { id: 'c', text: 'רשת הסרקופלזמה', isCorrect: false },
      { id: 'd', text: 'תאי הלוויין', isCorrect: false }
    ],
    explanation: 'אברון גולג\'י (GTO) חש במתח יתר בגיד ומעכב רפלקסיבית את האגוניסט כדי למנוע תלישה, בעוד כישור השריר גורם לכיווץ כנגד מתיחה מהירה.'
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
  const [isImageModalOpen, setIsImageModalOpen] = useState(false);

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
    } else {
      const finalScore = score + (currentQ.options.find(o => o.id === selectedOption)?.isCorrect ? 10 : 0);
      alert(`כל הכבוד שמואל!\nסיימת את המודול בהצלחה!\nצברת ${finalScore} נקודות מתוך ${questions.length * 10}!`);
      initModule(activeModule);
    }
  };

  if (!currentQ) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontWeight: 'bold' }}>טוען שאלות ואיורים אנטומיים...</p>
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
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>אטלס איורים אנטומיים ריאליסטי והקראה קולית</span>
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
              🦴 אנטומיה א' (שלד ורקמות)
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
              💪 אנטומיה ב' (שרירים ותנועות)
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
          <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 'bold' }}>איור אנטומי מפורט 🖼️</span>
        </div>

        {/* הצגת האיור האנטומי הריאליסטי */}
        {currentQ.imageUrl && (
          <div 
            onClick={() => setIsImageModalOpen(true)}
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
            <img 
              src={currentQ.imageUrl} 
              alt={currentQ.title} 
              style={{ width: '100%', height: '100%', objectFit: 'contain' }} 
            />
            <span style={{ position: 'absolute', bottom: '6px', left: '6px', backgroundColor: 'rgba(2, 6, 23, 0.85)', color: '#fbbf24', fontSize: '10px', padding: '3px 8px', borderRadius: '6px', fontWeight: 'bold', border: '1px solid #334155' }}>
              🔍 לחץ להגדלה במסך מלא
            </span>
          </div>
        )}

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

        {/* הסבר מלא מתוך חומרי הלימוד */}
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

      {/* חלון צף להגדלת איור אנטומי במסך מלא */}
      {isImageModalOpen && (
        <div 
          onClick={() => setIsImageModalOpen(false)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
        >
          <div style={{ maxWidth: '95%', maxHeight: '90%', textAlign: 'center' }}>
            <img src={currentQ.imageUrl} alt={currentQ.title} style={{ maxWidth: '100%', maxHeight: '78vh', borderRadius: '12px', border: '2px solid #f59e0b', objectFit: 'contain' }} />
            <p style={{ color: '#ffffff', fontSize: '13px', marginTop: '10px', fontWeight: 'bold' }}>{currentQ.title} - לחץ לסגירה ✕</p>
          </div>
        </div>
      )}

    </main>
  );
}
