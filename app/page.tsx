/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect, Component } from 'react';

class SafeBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.error('Client error caught:', err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }} dir="rtl">
          <h2 style={{ color: '#f43f5e', fontSize: '18px', fontWeight: 'bold' }}>אירעה תקלה בטעינת הרכיב</h2>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>לחץ לרענון מהיר:</p>
          <button onClick={() => { this.setState({ hasError: false }); window.location.reload(); }} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
            🔄 רענן עמוד
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// 1. בנק שאלות מזו אקדמי
const MESO_FULL_DATA = [
  {
    id: 'm_1',
    topic: 'מבוא לאנטומיה',
    title: 'מקור המונח אנטומיה',
    diagramType: 'anatomy_intro',
    imageSrc: '/images/anatomy_intro.png',
    questionText: 'המילה "אנטומיה" מורכבת מהמילים Ana ו-Tome ביוונית. מה פירושן?',
    options: [
      { id: '1', text: 'מבנה + גוף', isCorrect: false, whyWrong: 'מבנה הגוף הוא מושא המחקר, אך המילים המקוריות אינן "מבנה" ו"גוף".' },
      { id: '2', text: 'מחדש + לחתוך (Ana = מחדש, Tome = לחתוך)', isCorrect: true },
      { id: '3', text: 'חקר + תנועה', isCorrect: false, whyWrong: 'חקר התנועה מוגדר כקינזיולוגיה/ביומכניקה.' },
      { id: '4', text: 'תא + רקמה', isCorrect: false, whyWrong: 'חקר תאים נקרא ציטולוגיה וחקר רקמות נקרא היסטולוגיה.' }
    ],
    hint: 'דיסקציה: חיתוך ובחינה מחדש של מבנה הגוף.',
    explanation: 'המילה אנטומיה מקורה ביוונית: Ana = מחדש, Tome = לחתוך (חקר מבנה איברי הגוף ומיקומם).'
  },
  {
    id: 'm_2',
    topic: 'מבוא לאנטומיה',
    title: 'אנטומיה מול פיזיולוגיה',
    diagramType: 'anatomy_intro',
    imageSrc: '/images/anatomy_intro.png',
    questionText: 'מה ההבדל העקרוני בין אנטומיה לבין פיזיולוגיה?',
    options: [
      { id: '1', text: 'אנטומיה עוסקת בתפקוד, פיזיולוגיה במבנה', isCorrect: false, whyWrong: 'ההגדרות הפוכות: אנטומיה היא המבנה, ופיזיולוגיה היא התפקוד.' },
      { id: '2', text: 'אין הבדל, אלו שמות נרדפים לחלוטין', isCorrect: false, whyWrong: 'מדובר בשני תחומי מדע נפרדים המשלימים זה את זה.' },
      { id: '3', text: 'אנטומיה עוסקת במבנה ובמיקום; פיזיולוגיה עוסקת באופן הפעולה של המערכות', isCorrect: true },
      { id: '4', text: 'אנטומיה עוסקת רק בשרירים, פיזיולוגיה רק באיברים פנימיים', isCorrect: false, whyWrong: 'שני התחומים עוסקים בכל הרקמות והמערכות בגוף.' }
    ],
    hint: 'אנטומיה: מה יש ואיפה? פיזיולוגיה: איך זה עובד?',
    explanation: 'אנטומיה חוקרת את מבנה הגוף ומיקומו; פיזיולוגיה חוקרת את תפקוד המערכות.'
  },
  {
    id: 'm_3',
    topic: 'ארגון הגוף',
    title: 'רמות הארגון של הגוף החי',
    diagramType: 'levels',
    imageSrc: '/images/levels.png',
    questionText: 'מהו הסדר הנכון של רמות הארגון בגוף האדם, מהקטן לגדול?',
    options: [
      { id: '1', text: 'רקמה ← תא ← מערכת ← איבר', isCorrect: false, whyWrong: 'התא הוא היחידה הבסיסית הבונה את הרקמה, והאיבר מקדים את המערכת.' },
      { id: '2', text: 'תא ← רקמה ← איבר ← מערכת', isCorrect: true },
      { id: '3', text: 'תא ← איבר ← רקמה ← מערכת', isCorrect: false, whyWrong: 'רקמה מקדימה איבר, שכן איבר מורכב ממספר רקמות.' },
      { id: '4', text: 'איבר ← תא ← רקמה ← מערכת', isCorrect: false, whyWrong: 'האיבר אינו נקודת ההתחלה, אלא התא.' }
    ],
    hint: 'איור 1.2: תאים יוצרים רקמה, רקמות בונות איבר, ואיברים חוברים למערכת.',
    explanation: 'הסדר ההיררכי: תא (Cell) ← רקמה (Tissue) ← איבר (Organ) ← מערכת (System).'
  },
  {
    id: 'm_4',
    topic: 'התא ואברוניו',
    title: 'בית החרושת של החלבונים',
    diagramType: 'cell',
    imageSrc: '/images/cell.png',
    questionText: 'איזה אברון בתא מכונה "בית החרושת של החלבונים"?',
    options: [
      { id: '1', text: 'מיטוכונדריה', isCorrect: false, whyWrong: 'המיטוכונדריה אחראית על הפקת אנרגיה (ATP).' },
      { id: '2', text: 'ציטופלזמה', isCorrect: false, whyWrong: 'הציטופלזמה היא הנוזל התוך-תאי הצמיגי.' },
      { id: '3', text: 'ריבוזום (Ribosome)', isCorrect: true },
      { id: '4', text: 'גרעין התא', isCorrect: false, whyWrong: 'הגרעין מנהל את התא ומכיל DNA, אך החלבונים מורכבים בריבוזומים.' }
    ],
    hint: 'עליו מורכבות חומצות האמינו לבניית חלבוני הגוף והשריר.',
    explanation: 'הריבוזומים אחראים על הרכבת חלבונים מחומצות אמינו.'
  },
  {
    id: 'm_5',
    topic: 'התא ואברוניו',
    title: 'תפקיד המיטוכונדריה',
    diagramType: 'cell',
    imageSrc: '/images/cell.png',
    questionText: 'מה התפקיד העיקרי של המיטוכונדריה בתא?',
    options: [
      { id: '1', text: 'אספקת אנרגיה לתא (אברון הנשימה התאית האירובית)', isCorrect: true },
      { id: '2', text: 'ייצור חלבונים מתמשך', isCorrect: false, whyWrong: 'ייצור חלבונים מתבצע בריבוזומים.' },
      { id: '3', text: 'הגנה מכנית על התא מבחוץ', isCorrect: false, whyWrong: 'ההגנה וההפרדה נעשות על ידי קרום התא.' },
      { id: '4', text: 'העברת אותות עצביים חשמליים', isCorrect: false, whyWrong: 'העברת פולסים חשמליים נעשית על ידי תאי נוירון ברקמת העצב.' }
    ],
    hint: 'תחנת הכוח של התא – מפיקה ATP בנוכחות חמצן.',
    explanation: 'המיטוכונדריה היא אברון הנשימה שבו מופקת אנרגיה אירובית (ATP).'
  },
  {
    id: 'm_6',
    topic: 'הומיאוסטזיס',
    title: 'שמירה על סביבה פנימית',
    diagramType: 'anatomy_intro',
    imageSrc: '/images/anatomy_intro.png',
    questionText: 'הומיאוסטזיס (Homeostasis) מוגדר כ:',
    options: [
      { id: '1', text: 'תהליך התחלקות והתרבות התא', isCorrect: false, whyWrong: 'חלוקת תאים מוגדרת כמיטוזה או מיוזה.' },
      { id: '2', text: 'שמירה על מצב וסביבה פנימית קבועה ויציבה לתפקוד תקין', isCorrect: true },
      { id: '3', text: 'סוג מיוחד של רקמת חיבור צפופה', isCorrect: false, whyWrong: 'זהו מנגנון ויסות ביולוגי, לא רקמה.' },
      { id: '4', text: 'התכווצות שריר רצונית בזמן אימון', isCorrect: false, whyWrong: 'התכווצות שריר מפרה זמנית את ההומיאוסטזיס.' }
    ],
    hint: 'איזון פנימי פעיל (טמפרטורה, חומציות, נוזלים).',
    explanation: 'הומיאוסטזיס הוא כושר הגוף לשמור על סביבה פנימית יציבה.'
  },
  {
    id: 'm_7',
    topic: 'רקמת אפיתל',
    title: 'הזנת רקמת האפיתל',
    diagramType: 'artery',
    imageSrc: '/images/artery.png',
    questionText: 'כיצד מקבלת רקמת האפיתל חומרי מזון וחמצן?',
    options: [
      { id: '1', text: 'מרשת כלי דם עשירה העוברת בתוכה', isCorrect: false, whyWrong: 'רקמת האפיתל היא Avascular (חסרת כלי דם).' },
      { id: '2', text: 'ישירות מהאוויר החיצוני', isCorrect: false, whyWrong: 'רוב רקמות האפיתל מרפדות איברים פנימיים ואינן באות במגע עם אוויר.' },
      { id: '3', text: 'מרקמת החיבור הצמודה אליה בדיפוזיה, כי היא חסרת כלי דם', isCorrect: true },
      { id: '4', text: 'מנוזל מערכת העצבים', isCorrect: false, whyWrong: 'מערכת העצבים אינה מזינה רקמות אפיתל.' }
    ],
    hint: 'לאפיתל אין כלי דם משלו והוא יושב על רקמת חיבור.',
    explanation: 'האפיתל חסר כלי דם וניזון בדיפוזיה מרקמת החיבור שמתחתיו.'
  },
  {
    id: 'm_8',
    topic: 'רקמת אפיתל',
    title: 'אנדותל כלי הדם וטרשת',
    diagramType: 'artery',
    imageSrc: '/images/artery.png',
    questionText: 'כיצד נקרא האפיתל המרפד את פנים כלי הדם, ומה משמעות הפגיעה בו?',
    options: [
      { id: '1', text: 'פריאוסט; גורם להחלשת קליפת העצם', isCorrect: false, whyWrong: 'פריאוסט הוא קרום העצם החיצוני.' },
      { id: '2', text: 'אנדותל (Endothelium); פגיעה בו עלולה להוביל להצטברות רובד טרשתי (פלאק)', isCorrect: true },
      { id: '3', text: 'אפידרמיס; גורם ליובש בעור', isCorrect: false, whyWrong: 'אפידרמיס הוא שכבת העור החיצונית.' },
      { id: '4', text: 'מזותל; גורם לפגיעה בסחוס המפרקי', isCorrect: false, whyWrong: 'מזותל מרפד את החללים הפנימיים הסגורים של הגוף.' }
    ],
    hint: 'איור 1.6: הציפוי הפנימי של העורק שפגיעה בו מאפשרת שקיעת שומנים.',
    explanation: 'האנדותל מצפה את פנים כלי הדם. פגיעה בו מאפשרת היווצרות טרשת עורקים.'
  },
  {
    id: 'm_9',
    topic: 'רקמת חיבור',
    title: 'סיבים אלסטיים',
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
    questionText: 'איזה סוג סיבים ברקמת חיבור אינו חזק אך בעל יכולת להימתח ולחזור לאורכו המקורי?',
    options: [
      { id: '1', text: 'סיבים קולגניים', isCorrect: false, whyWrong: 'קולגן חזק וקשיח מאוד וכמעט אינו נמתח.' },
      { id: '2', text: 'סיבים רטיקולריים', isCorrect: false, whyWrong: 'סיבים רטיקולריים הם סיבי קולגן דקים היוצרים רשת תומכת.' },
      { id: '3', text: 'סיבים אלסטיים (Elastic fibers)', isCorrect: true },
      { id: '4', text: 'סיבים שריריים', isCorrect: false, whyWrong: 'סיבי שריר הם תאי כיווץ פעילים, לא סיבי חומר בין-תאי.' }
    ],
    hint: 'פועלים כמו גומייה – נמתחים וחוזרים.',
    explanation: 'סיבים אלסטיים מקנים לרקמה יכולת מתיחה וחזרה לצורתה המקורית.'
  },
  {
    id: 'm_10',
    topic: 'רקמת חיבור',
    title: 'סיווג גיד ורצועה',
    diagramType: 'joint',
    imageSrc: '/images/joint.png',
    questionText: 'גיד (Tendon) ורצועה (Ligament) שייכים לאיזו קבוצה של רקמת חיבור?',
    options: [
      { id: '1', text: 'רקמת חיבור אמיתית (סיבית צפופה)', isCorrect: true },
      { id: '2', text: 'רקמת חיבור תומכת (שלדית)', isCorrect: false, whyWrong: 'רקמת חיבור תומכת כוללת עצם וסחוס בלבד.' },
      { id: '3', text: 'רקמת חיבור מיוחדת', isCorrect: false, whyWrong: 'רקמת חיבור מיוחדת כוללת שומן ודם.' },
      { id: '4', text: 'רקמת אפיתל', isCorrect: false, whyWrong: 'אפיתל היא רקמת ציפוי ומרפדת, לא גידים.' }
    ],
    hint: 'אמיתית = גידים/רצועות; תומכת = עצם/סחוס; מיוחדת = שומן/דם.',
    explanation: 'גידים ורצועות הם רקמת חיבור אמיתית סיבית המיועדת להעברת כוחות משיכה.'
  },
  {
    id: 'm_11',
    topic: 'מערכת השלד',
    title: 'השלד הצירי מול השלד התוספי',
    diagramType: 'skeleton',
    imageSrc: '/images/skeleton.png',
    questionText: 'איזו מהעצמות הבאות שייכת לשלד הצירי (Axial skeleton)?',
    options: [
      { id: '1', text: 'עצם הבריח (Clavicula)', isCorrect: false, whyWrong: 'הבריח שייך לחגורת הכתף (שלד תוספי).' },
      { id: '2', text: 'עצם החזה (Sternum)', isCorrect: true },
      { id: '3', text: 'השכמה (Scapula)', isCorrect: false, whyWrong: 'השכמה שייכת לשלד התוספי.' },
      { id: '4', text: 'עצמות האגן (Pelvis)', isCorrect: false, whyWrong: 'עצמות האגן שייכות לשלד התוספי.' }
    ],
    hint: 'איור 2.1: גולגולת, עמוד שדרה, צלעות ועצם החזה (סטרנום).',
    explanation: 'עצם החזה, הגולגולת, עמוד השדרה והצלעות מרכיבים את השלד הצירי.'
  },
  {
    id: 'm_12',
    topic: 'מבנה העצם',
    title: 'עצם צפופה מול עצם ספוגית',
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
    questionText: 'מה מאפיין עצם צפופה (Compact bone) לפי איור 2.3 בחוברת?',
    options: [
      { id: '1', text: 'מכילה חללים רבים ומשמשת כליבה קלת משקל', isCorrect: false, whyWrong: 'זהו מאפיין של העצם הספוגית (Spongy bone).' },
      { id: '2', text: 'נמצאת אך ורק בחוליות עמוד השדרה', isCorrect: false, whyWrong: 'עצם קומפקטית עוטפת את כל העצמות בגוף.' },
      { id: '3', text: 'נמצאת בעיקר במעטפת החיצונית ומספקת חוזק ועמידות בדחיסה', isCorrect: true },
      { id: '4', text: 'בנויה מסחוס היאליני גמיש', isCorrect: false, whyWrong: 'עצם צפופה היא רקמת עצם מינרלית קשה, לא סחוס.' }
    ],
    hint: 'המעטפת החיצונית הקשה של העצם.',
    explanation: 'עצם צפופה בנויה אוסטאונים דחוסים במעטפת החיצונית ומספקת חוזק ועמידות.'
  },
  {
    id: 'm_13',
    topic: 'תאי העצם',
    title: 'שלושת התאים המנהלים את העצם',
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
    questionText: 'איזה תא אחראי על פירוק והמסה של רקמת עצם בתהליך השחלוף (Remodeling)?',
    options: [
      { id: '1', text: 'אוסטאוציט (Osteocyte)', isCorrect: false, whyWrong: 'אוסטאוציט הוא תא עצם בוגר המנטר עומסים.' },
      { id: '2', text: 'אוסטאובלסט (Osteoblast)', isCorrect: false, whyWrong: 'אוסטאובלסט הוא התא הבונה עצם (B = Build).' },
      { id: '3', text: 'אוסטאוקלסט (Osteoclast)', isCorrect: true },
      { id: '4', text: 'כונדרוציט', isCorrect: false, whyWrong: 'כונדרוציט הוא תא סחוס.' }
    ],
    hint: 'B בונה (OsteoBlast), C קורע ומפרק (OsteoClast).',
    explanation: 'האוסטאוקלסט מפרק וממיס עצם בתהליך השחלוף המתמיד.'
  },
  {
    id: 'm_14',
    topic: 'עומס והסתגלות',
    title: 'חוק וולף בעבודת המאמן',
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
    questionText: 'מה קובע חוק וולף (Wolff\'s Law) בנוגע לעצמות מתאמנים?',
    options: [
      { id: '1', text: 'מסת העצם קבועה מראש מגיל 20 ואינה משתנה', isCorrect: false, whyWrong: 'העצם היא רקמה דינמית המשתנה לאורך כל החיים בתגובה לגירויים.' },
      { id: '2', text: 'רק תזונה משפיעה על חוזק העצם', isCorrect: false, whyWrong: 'תזונה ללא עומס מכני לא תעורר בניית עצם.' },
      { id: '3', text: 'עצם מסתגלת לעומס: עומס מוגבר מחזק אותה, וירידה בעומס מחלישה אותה', isCorrect: true },
      { id: '4', text: 'עומס משקולות גורם תמיד לשברים', isCorrect: false, whyWrong: 'עומס מבוקר מחזק את העצמות ומונע אוסטאופורוזיס.' }
    ],
    hint: 'עצם נבנית ומתחזקת בעומס מכני, ונחלשת בהיעדר עומס.',
    explanation: 'חוק וולף קובע שעצם מתחזקת בהעמסה מכנית ונחלשת בחוסר תנועה.'
  },
  {
    id: 'm_15',
    topic: 'סחוסים',
    title: 'סחוס היאליני',
    diagramType: 'joint',
    imageSrc: '/images/joint.png',
    questionText: 'איזה סוג סחוס מרפד את קצות העצמות במפרקים תנועתיים להפחתת חיכוך?',
    options: [
      { id: '1', text: 'סחוס היאליני (Hyaline cartilage)', isCorrect: true },
      { id: '2', text: 'סחוס סיבי / פיברוטי', isCorrect: false, whyWrong: 'סחוס סיבי נמצא בדיסקים בין-חולייתיים ובמניסקוס ועמיד בדחיסה.' },
      { id: '3', text: 'סחוס אלסטי', isCorrect: false, whyWrong: 'סחוס אלסטי גמיש ומרכיב את האוזן ומכסה הגרון.' },
      { id: '4', text: 'סחוס רטיקולרי', isCorrect: false, whyWrong: 'אין סיווג סחוס כזה.' }
    ],
    hint: 'דק, רטוב וחלק – השכיח ביותר במפרקים סינוביאליים.',
    explanation: 'סחוס היאליני מצפה קצות עצמות במפרקים תנועתיים ומונע חיכוך.'
  }
];

// 2. בנק שאלות מכללת וינגייט (Wingate Academy)
const WINGATE_FULL_DATA = [
  {
    id: 'w_1',
    topic: 'תכנון אימון',
    title: 'עקרון עומס יסף',
    diagramType: 'muscles',
    imageSrc: '/images/muscles.png',
    questionText: 'מהו עקרון עומס יסף (Overload Principle) באימון התנגדות?',
    options: [
      { id: '1', text: 'אימון של אותה קבוצת שרירים בכל יום ברציפות ללא מנוחה', isCorrect: false, whyWrong: 'אימון יומיומי ללא התאוששות מוביל לאימון יתר (Overtraining).' },
      { id: '2', text: 'חשיפת מערכות הגוף לעומס הגבוה מזה שהן מורגלות אליו כדי לעורר הסתגלות', isCorrect: true },
      { id: '3', text: 'ביצוע של לפחות 25 חזרות בכל סט', isCorrect: false, whyWrong: 'טווח חזרות של 25 מפתח סבולת שריר, אך אינו הגדרת עומס יסף.' },
      { id: '4', text: 'הרמת משקל 1RM בכל אימון', isCorrect: false, whyWrong: 'הרמת 1RM קבועה גורמת לעומס עצבי חריג ופציעות.' }
    ],
    hint: 'כדי להתקדם, יש לחשוף את השריר לגירוי מעבר ליכולתו הנוכחית.',
    explanation: 'עקרון עומס יסף קובע שחשיפה לגירוי גבוה מהרגיל הכרחית ליצירת הסתגלות.'
  },
  {
    id: 'w_2',
    topic: 'פיזיולוגיה של המאמץ',
    title: 'מערכות אנרגיה',
    diagramType: 'cell',
    imageSrc: '/images/cell.png',
    questionText: 'איזו מערכת אנרגיה היא הדומיננטית במאמץ מרבי הנמשך עד 10 שניות (כגון ספרינט 60 מטר)?',
    options: [
      { id: '1', text: 'המערכת האירובית', isCorrect: false, whyWrong: 'המערכת האירובית מספקת אנרגיה במאמצים ארוכים וקצבה איטי.' },
      { id: '2', text: 'מערכת ה-ATP-CP (פוספוגנית אנאירובית)', isCorrect: true },
      { id: '3', text: 'גליקוליזה אירובית', isCorrect: false, whyWrong: 'גליקוליזה אירובית פועלת בנוכחות חמצן ומתאימה למאמצים תת-מרביים ממושכים.' },
      { id: '4', text: 'חמצון שומנים', isCorrect: false, whyWrong: 'חמצון שומנים הוא מסלול איטי מאוד המשרת עצימות נמוכה ומנוחה.' }
    ],
    hint: 'קריאטין פוספט ואנרגיה זמינה מיידית ללא צורך בחמצן.',
    explanation: 'מערכת ה-ATP-CP מספקת אנרגיה מיידית בעצימות מקסימלית ל-10 השניות הראשונות.'
  },
  {
    id: 'w_3',
    topic: 'אנטומיה וניתוח תנועה',
    title: 'מישורי תנועה בסקוואט',
    diagramType: 'skeleton',
    imageSrc: '/images/skeleton.png',
    questionText: 'באיזה מישור תנועה מתבצע תרגיל הסקוואט (Squat)?',
    options: [
      { id: '1', text: 'במישור החזיתי (Frontal)', isCorrect: false, whyWrong: 'במישור החזיתי מתבצעות תנועות הרחקה וקירוב לצדדים.' },
      { id: '2', text: 'במישור החצי / סגיטלי (Sagittal)', isCorrect: true },
      { id: '3', text: 'במישור האופקי / טרנסברסלי (Transverse)', isCorrect: false, whyWrong: 'במישור האופקי מתבצעות רוטציות וקירוב/הרחקה אופקית.' },
      { id: '4', text: 'במישור האלכסוני בלבד', isCorrect: false, whyWrong: 'הסקוואט מתבצע בציר ישר קדימה-אחורה.' }
    ],
    hint: 'תנועות כיפוף ופשיטה (קדימה-אחורה) מבוצעות במישור זה.',
    explanation: 'סקוואט מורכב מכפיפה ופשיטה במפרקי הירך, הברך והקרסול – תנועות במישור הסגיטלי.'
  },
  {
    id: 'w_4',
    topic: 'אנטומיה של השריר',
    title: 'תפקידי השריר בלחיצת חזה',
    diagramType: 'muscles',
    imageSrc: '/images/muscles.png',
    questionText: 'בתרגיל לחיצת חזה בשכיבה (Bench Press), איזה שריר פועל כאגוניסט הראשי במפרק הכתף?',
    options: [
      { id: '1', text: 'Triceps brachii', isCorrect: false, whyWrong: 'התלת-ראשי הוא האגוניסט במפרק המרפק (פשיטת מרפק), לא בכתף.' },
      { id: '2', text: 'Pectoralis major (חזה גדול)', isCorrect: true },
      { id: '3', text: 'Latissimus dorsi (רחב גבי)', isCorrect: false, whyWrong: 'הרחב גבי הוא אנטגוניסט לקירוב האופקי בלחיצת חזה.' },
      { id: '4', text: 'Biceps brachii', isCorrect: false, whyWrong: 'הדו-ראשי פועל כמכופף מרפק ומייצב קל, ואינו אגוניסט בלחיצה.' }
    ],
    hint: 'השריר הגדול של בית החזה המבצע קירוב אופקי בזרוע.',
    explanation: 'האגוניסט הראשי במפרק הכתף בלחיצת חזה הוא Pectoralis major (מבצע קירוב אופקי).'
  }
];

// מנוע תרשימים ותמונות אינטראקטיבי עם זום וגרירה (Pan & Zoom)
function InteractiveImageViewer({ currentQ }: { currentQ: any }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setImgError(false);
  }, [currentQ?.id]);

  const handleMouseDown = (e: React.MouseEvent) => {
    setIsDragging(true);
    setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y });
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging) return;
    setPosition({ x: e.clientX - dragStart.x, y: e.clientY - dragStart.y });
  };

  const handleMouseUp = () => setIsDragging(false);

  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  const d = currentQ?.diagramType || 'cell';

  const renderFallbackSvg = () => {
    if (d === 'skeleton') {
      return (
        <svg viewBox="0 0 340 90" style={{ width: '100%', height: '100%' }}>
          <rect x="15" y="8" width="145" height="74" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <text x="87" y="28" fill="#a5b4fc" fontSize="11" fontWeight="bold" textAnchor="middle">שלד צירי (Axial)</text>
          <text x="87" y="46" fill="#f8fafc" fontSize="8.5" textAnchor="middle">גולגולת, עמוד שדרה,</text>
          <text x="87" y="58" fill="#f8fafc" fontSize="8.5" textAnchor="middle">עצם החזה (Sternum) וצלעות</text>
          <text x="87" y="72" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">הגנה על איברים חיוניים</text>

          <rect x="180" y="8" width="145" height="74" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          <text x="252" y="28" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">שלד תוספי (Appendicular)</text>
          <text x="252" y="46" fill="#f8fafc" fontSize="8.5" textAnchor="middle">עצמות הגפיים, עצם הבריח,</text>
          <text x="252" y="58" fill="#f8fafc" fontSize="8.5" textAnchor="middle">השכמות ועצמות האגן</text>
          <text x="252" y="72" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">הפקת תנועה ומנופים</text>
        </svg>
      );
    }

    if (d === 'bone') {
      return (
        <svg viewBox="0 0 340 90" style={{ width: '100%', height: '100%' }}>
          <rect x="25" y="10" width="290" height="70" rx="8" fill="#0f172a" stroke="#d97706" strokeWidth="2" />
          <rect x="25" y="10" width="290" height="16" fill="#b45309" />
          <text x="170" y="22" fill="#ffffff" fontSize="8.5" fontWeight="bold" textAnchor="middle">מעטפת קומפקטית (Compact) - מספקת חוזק ועמידות בדחיסה</text>
          <rect x="25" y="26" width="290" height="38" fill="#1e293b" strokeDasharray="3 3" />
          <text x="170" y="48" fill="#fde68a" fontSize="9.5" fontWeight="bold" textAnchor="middle">ליבה ספוגית (Spongy) - רשת חללים לבלימת זעזועים ומשקל קל</text>
          <rect x="25" y="64" width="290" height="16" fill="#b45309" />
          <text x="170" y="76" fill="#ffffff" fontSize="8" textAnchor="middle">פריאוסט (קרום העצם) עוטף מבחוץ עם כלי דם ועצבים</text>
        </svg>
      );
    }

    if (d === 'artery') {
      return (
        <svg viewBox="0 0 340 85" style={{ width: '100%', height: '100%' }}>
          <rect x="20" y="12" width="140" height="60" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="90" y="30" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">עורק תקין</text>
          <text x="90" y="48" fill="#cbd5e1" fontSize="8" textAnchor="middle">אנדותל שלם וחלק</text>
          <text x="90" y="62" fill="#6ee7b7" fontSize="8" textAnchor="middle">זרימת דם חופשית</text>

          <rect x="180" y="12" width="140" height="60" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
          <text x="250" y="30" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">טרשת עורקים</text>
          <text x="250" y="48" fill="#fca5a5" fontSize="8" textAnchor="middle">פגיעה באנדותל</text>
          <text x="250" y="62" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">הצטברות רובד שומני (פלאק)</text>
        </svg>
      );
    }

    if (d === 'joint') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center', fontSize: '9px', width: '100%', padding: '6px' }}>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #3b82f6' }}>
            <strong style={{ color: '#60a5fa', display: 'block' }}>סחוס היאליני</strong>
            <span style={{ color: '#cbd5e1' }}>דק, חלק, מונע חיכוך בקצות עצמות</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #a855f7' }}>
            <strong style={{ color: '#c084fc', display: 'block' }}>סחוס סיבי</strong>
            <span style={{ color: '#cbd5e1' }}>עבה ועמיד בדחיסה (דיסק, מניסקוס)</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #10b981' }}>
            <strong style={{ color: '#34d399', display: 'block' }}>נוזל סינוביאלי</strong>
            <span style={{ color: '#cbd5e1' }}>שמן המפרק, מופרש בתנועה</span>
          </div>
        </div>
      );
    }

    if (d === 'muscles') {
      return (
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center', fontSize: '9px', width: '100%', padding: '6px' }}>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #3b82f6' }}>
            <strong style={{ color: '#60a5fa', display: 'block' }}>שריר שלד</strong>
            <span style={{ color: '#cbd5e1' }}>משורטט, רצוני, מהיר מאוד</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #a855f7' }}>
            <strong style={{ color: '#c084fc', display: 'block' }}>שריר חלק</strong>
            <span style={{ color: '#cbd5e1' }}>לא רצוני, איטי וממושך</span>
          </div>
          <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #ef4444' }}>
            <strong style={{ color: '#f87171', display: 'block' }}>שריר הלב</strong>
            <span style={{ color: '#cbd5e1' }}>משורטט מסתעף, לא רצוני</span>
          </div>
        </div>
      );
    }

    return (
      <svg viewBox="0 0 340 85" style={{ width: '100%', height: '100%' }}>
        <ellipse cx="170" cy="42" rx="145" ry="36" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
        <circle cx="170" cy="42" r="18" fill="#581c87" stroke="#c084fc" strokeWidth="1.5" />
        <text x="170" y="46" fill="#ffffff" fontSize="8.5" fontWeight="bold" textAnchor="middle">גרעין</text>
        <ellipse cx="85" cy="35" rx="16" ry="8" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
        <text x="85" y="38" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">מיטוכונדריון</text>
        <ellipse cx="255" cy="50" rx="16" ry="8" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
        <text x="255" y="53" fill="#ffffff" fontSize="7.5" fontWeight="bold" textAnchor="middle">מיטוכונדריון</text>
        <circle cx="120" cy="55" r="3.5" fill="#fbbf24" />
        <circle cx="220" cy="30" r="3.5" fill="#fbbf24" />
        <text x="120" y="66" fill="#fde68a" fontSize="7" textAnchor="middle">ריבוזום</text>
        <text x="220" y="23" fill="#fde68a" fontSize="7" textAnchor="middle">ריבוזום</text>
      </svg>
    );
  };

  return (
    <div style={{ backgroundColor: '#020617', padding: '8px', borderRadius: '14px', border: '1.5px solid #1e293b', marginBottom: '10px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', borderBottom: '1px solid #1e293b', paddingBottom: '4px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8' }}>
          🔍 תמונה / תרשים (ניתן להגדלה וגרירה):
        </span>
        <div style={{ display: 'flex', gap: '4px' }}>
          <button onClick={() => setScale(s => Math.min(s + 0.3, 3.0))} style={{ backgroundColor: '#0f172a', color: '#38bdf8', border: '1px solid #334155', borderRadius: '6px', padding: '2px 7px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }} title="הגדל">➕</button>
          <button onClick={() => setScale(s => Math.max(s - 0.3, 0.7))} style={{ backgroundColor: '#0f172a', color: '#38bdf8', border: '1px solid #334155', borderRadius: '6px', padding: '2px 7px', fontSize: '11px', fontWeight: 'bold', cursor: 'pointer' }} title="הקטן">➖</button>
          <button onClick={resetZoom} style={{ backgroundColor: '#0f172a', color: '#fbbf24', border: '1px solid #334155', borderRadius: '6px', padding: '2px 7px', fontSize: '10px', fontWeight: 'bold', cursor: 'pointer' }}>איפוס</button>
        </div>
      </div>

      <div
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{
          width: '100%',
          height: '115px',
          overflow: 'hidden',
          cursor: isDragging ? 'grabbing' : 'grab',
          position: 'relative',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#050a15',
          borderRadius: '8px'
        }}
      >
        <div
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: 'center center',
            transition: isDragging ? 'none' : 'transform 0.15s ease-out',
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}
        >
          {currentQ?.imageSrc && !imgError ? (
            <img
              src={currentQ.imageSrc}
              alt={currentQ.title}
              onError={() => setImgError(true)}
              style={{ maxHeight: '100%', maxWidth: '100%', objectFit: 'contain', pointerEvents: 'none' }}
            />
          ) : (
            renderFallbackSvg()
          )}
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

function MainApp() {
  const [mounted, setMounted] = useState(false);
  const [institution, setInstitution] = useState<'meso' | 'wingate'>('meso');

  const [quizList, setQuizList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);

  const [isDeepStudyOpen, setIsDeepStudyOpen] = useState(false);
  const [examMode, setExamMode] = useState<'practice' | 'real'>('practice');
  const [timeLeft, setTimeLeft] = useState(0);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});

  useEffect(() => {
    setMounted(true);
    resetAndShuffle('meso', 'practice');
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

  const resetAndShuffle = (inst = institution, mode = examMode) => {
    const source = inst === 'meso' ? MESO_FULL_DATA : WINGATE_FULL_DATA;

    const randomized = shuffleList(source).map((q) => ({
      ...q,
      options: shuffleList(q.options)
    }));

    setQuizList(randomized);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setIsDeepStudyOpen(false);
    setScore(0);
    setStreak(0);
    setUserAnswers({});
    setIsExamCompleted(false);

    if (mode === 'real') {
      setTimeLeft(randomized.length * 90);
    } else {
      setTimeLeft(0);
    }
  };

  const handleInstitutionSwitch = (newInst: 'meso' | 'wingate') => {
    setInstitution(newInst);
    resetAndShuffle(newInst, examMode);
  };

  const handleModeChange = (newMode: 'practice' | 'real') => {
    setExamMode(newMode);
    resetAndShuffle(institution, newMode);
  };

  const formatTimer = (totalSeconds: number) => {
    const mins = Math.floor(totalSeconds / 60);
    const secs = totalSeconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  if (!mounted || quizList.length === 0) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#38bdf8', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        טוען את המערכת לשמואל...
      </div>
    );
  }

  const currentQ = quizList[currentIndex] || {};

  const finishRealExam = () => {
    setIsExamCompleted(true);
  };

  const handleCheckPractice = () => {
    if (!selectedOption || isAnswerChecked) return;
    const chosen = currentQ?.options?.find((o) => o.id === selectedOption);
    const correct = chosen?.isCorrect;

    setIsAnswerChecked(true);

    if (correct) {
      setScore((s) => s + 10);
      setStreak((s) => s + 1);
    } else {
      setStreak(0);
    }
  };

  const handleNextPractice = () => {
    if (currentIndex < quizList.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setIsDeepStudyOpen(false);
    } else {
      alert(`כל הכבוד שמואל!\nסיימת את תרגול ${institution === 'meso' ? 'מזו אקדמי' : 'וינגייט'} בהצלחה!\nצברת ${score} נקודות!`);
      resetAndShuffle(institution, 'practice');
    }
  };

  const handleNextReal = () => {
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
      const correctOpt = q.options?.find((o) => o.isCorrect);
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
            <button onClick={() => resetAndShuffle(institution, 'real')} style={{ flex: 1, backgroundColor: institution === 'meso' ? '#0284c7' : '#f59e0b', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: '900', fontSize: '14px', cursor: 'pointer' }}>
              🔄 מבחן חוזר
            </button>
            <button onClick={() => handleModeChange('practice')} style={{ flex: 1, backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7', padding: '12px', borderRadius: '12px', fontWeight: 'bold', fontSize: '13px', cursor: 'pointer' }}>
              💡 חזרה לתרגול מודרך
            </button>
          </div>
        </div>

        <h3 style={{ fontSize: '15px', fontWeight: 'bold', color: '#38bdf8', marginBottom: '10px' }}>🔍 תחקור תשובות מלא ותרשימים:</h3>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          {quizList.map((q, idx) => {
            const userChoice = userAnswers[q.id];
            const correctOpt = q.options?.find((o) => o.isCorrect);
            const isUserRight = userChoice === correctOpt?.id;
            const chosenText = q.options?.find((o) => o.id === userChoice)?.text || 'לא נענה';

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

                <InteractiveImageViewer currentQ={q} />

                <div style={{ color: '#cbd5e1', fontSize: '11px', lineHeight: '1.4', backgroundColor: '#0f172a', padding: '8px', borderRadius: '8px' }}>
                  💡 <strong>הסבר פדגוגי:</strong> {q.explanation}
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
                {institution === 'meso' ? '🏛️ מזו אקדמי (Meso)' : '🦁 מכללת וינגייט (Wingate)'}
              </h1>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                {institution === 'meso' ? 'מבוא לאנטומיה, רקמות, הומיאוסטזיס ושלד' : 'תכנון אימון, אנטומיה ופיזיולוגיה'}
              </span>
            </div>

            <button onClick={() => resetAndShuffle(institution, examMode)} style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}>
              🔄 איפוס
            </button>
          </div>

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
                alignItems: 'center'
              }}
            >
              <span>🏛️ מזו אקדמי</span>
              <span style={{ fontSize: '10px', opacity: 0.85 }}>מבוא, רקמות, שלד ({MESO_FULL_DATA.length})</span>
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
                alignItems: 'center'
              }}
            >
              <span>🦁 מכללת וינגייט</span>
              <span style={{ fontSize: '10px', opacity: 0.85 }}>תכנון אימון, אנטומיה ({WINGATE_FULL_DATA.length})</span>
            </button>
          </div>

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
                cursor: 'pointer'
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
                cursor: 'pointer'
              }}
            >
              ⏱️ מבחן אמת (טיימר בלי רמזים)
            </button>
          </div>

          {examMode === 'real' && (
            <div style={{ backgroundColor: '#1e1b4b', border: '1px solid #4338ca', padding: '8px 12px', borderRadius: '12px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span style={{ fontSize: '11px', color: '#c7d2fe' }}>מבחן אמת במדידת זמן</span>
              <span style={{ fontSize: '18px', fontWeight: '900', color: timeLeft <= 300 ? '#f43f5e' : '#34d399', fontFamily: 'monospace' }}>
                ⏳ {formatTimer(timeLeft)}
              </span>
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

        {/* מנוע התצוגה של התמונות והתרשימים עם זום והזזה */}
        <InteractiveImageViewer currentQ={currentQ} />

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
            <span>🎓 הסבר מעמיק, שלילת מסיחים ותרשים</span>
            <span style={{ fontSize: '10px', backgroundColor: '#0369a1', color: '#ffffff', padding: '1px 6px', borderRadius: '6px' }}>פתח חלון לימוד</span>
          </button>
        )}

        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '14px', padding: '12px', marginBottom: '10px' }}>
          <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.4' }}>
            {currentQ?.questionText}
          </p>

          {examMode === 'practice' && (
            <div style={{ marginTop: '8px', backgroundColor: 'rgba(2, 6, 23, 0.7)', padding: '7px 10px', borderRadius: '8px', fontSize: '11px', color: '#cbd5e1', border: '1px solid #1e293b' }}>
              💡 <strong style={{ color: '#fbbf24' }}>רמז אסוציאטיבי:</strong> {currentQ?.hint}
            </div>
          )}
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
          {currentQ?.options?.map((opt, idx) => {
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

      <footer style={{ paddingTop: '6px', paddingBottom: '6px' }}>
        {examMode === 'practice' ? (
          !isAnswerChecked ? (
            <button
              onClick={handleCheckPractice}
              disabled={!selectedOption}
              style={{
                width: '100%',
                backgroundColor: selectedOption ? (institution === 'meso' ? '#0284c7' : '#f59e0b') : '#334155',
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
              style={{ flex: 1, backgroundColor: institution === 'meso' ? '#0284c7' : '#f59e0b', color: '#ffffff', border: 'none', borderRadius: '14px', padding: '14px', fontSize: '15px', fontWeight: '900', cursor: 'pointer' }}
            >
              {currentIndex === quizList.length - 1 ? '🏁 סיים מבחן והגש' : 'שאלה הבאה ➜'}
            </button>
          </div>
        )}
      </footer>

      {isDeepStudyOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px' }}>
          <div style={{ backgroundColor: '#0b1329', border: '2px solid #38bdf8', borderRadius: '20px', maxWidth: '500px', width: '100%', maxHeight: '88vh', overflowY: 'auto', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>
              <div>
                <span style={{ color: '#38bdf8', fontSize: '11px', fontWeight: 'bold' }}>{currentQ?.topic}</span>
                <h3 style={{ margin: 0, fontSize: '15px', color: '#fbbf24', fontWeight: '900' }}>🎓 ניתוח פדגוגי מעמיק ושלילת מסיחים</h3>
              </div>
              <button onClick={() => setIsDeepStudyOpen(false)} style={{ backgroundColor: '#881337', color: '#ffffff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>✕</button>
            </div>

            <InteractiveImageViewer currentQ={currentQ} />

            <div style={{ backgroundColor: '#020617', padding: '10px 12px', borderRadius: '12px', border: '1px solid #10b981' }}>
              <span style={{ color: '#34d399', fontSize: '12px', fontWeight: '900', display: 'block', marginBottom: '4px' }}>✔ התשובה הנכונה:</span>
              <p style={{ margin: 0, fontSize: '12px', color: '#e2e8f0', lineHeight: '1.4' }}>
                {currentQ?.explanation}
              </p>
            </div>

            <div style={{ backgroundColor: '#020617', padding: '10px 12px', borderRadius: '12px', border: '1px solid #334155' }}>
              <span style={{ color: '#f43f5e', fontSize: '12px', fontWeight: '900', display: 'block', marginBottom: '6px' }}>
                ❌ ניתוח מדעי: מדוע שאר התשובות שגויות?
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {currentQ?.options?.map((opt, idx) => {
                  const letter = ['א', 'ב', 'ג', 'ד'][idx] || '';
                  if (opt.isCorrect) return null;
                  return (
                    <div key={opt.id} style={{ fontSize: '11px', color: '#cbd5e1', backgroundColor: '#0f172a', padding: '6px 8px', borderRadius: '6px', borderRight: '3px solid #f43f5e' }}>
                      <strong style={{ color: '#f87171' }}>אפשרות {letter} ({opt.text}):</strong>
                      <span style={{ color: '#94a3b8', display: 'block', marginTop: '2px' }}>
                        {opt.whyWrong || 'נפסלת לפי הדרישות המדעיות וההגדרות של מזו אקדמי.'}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button onClick={() => setIsDeepStudyOpen(false)} style={{ width: '100%', backgroundColor: institution === 'meso' ? '#0284c7' : '#f59e0b', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: '900', fontSize: '14px', cursor: 'pointer' }}>
              ✓ הבנתי, חזרה לשאלה
            </button>
          </div>
        </div>
      )}
    </main>
  );
}

export default function App() {
  return (
    <SafeBoundary>
      <MainApp />
    </SafeBoundary>
  );
}
