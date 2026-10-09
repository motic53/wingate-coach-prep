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

// ==========================================
// 1. בנק שאלות מזו אקדמי (Meso Academy)
// ==========================================
const MESO_FULL_DATA = [
  {
    id: 'm_1',
    topic: 'מבוא לאנטומיה',
    title: 'מקור המונח אנטומיה',
    imageSrc: '/images/phys2_p53_muscle_anatomy.jpg',
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
    imageSrc: '/images/phys2_p53_muscle_anatomy.jpg',
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
    imageSrc: '/images/phys2_p53_muscle_anatomy.jpg',
    questionText: 'מהו הסדר הנכון של רמות הארגון בגוף האדם, מהקטן לגדול?',
    options: [
      { id: '1', text: 'רקמה ← תא ← מערכת ← איבר', isCorrect: false, whyWrong: 'התא הוא היחידה הבסיסית הבונה את הרקמה, והאיבר מקדים את המערכת.' },
      { id: '2', text: 'תא ← רקמה ← איבר ← מערכת', isCorrect: true },
      { id: '3', text: 'תא ← איבר ← רקמה ← מערכת', isCorrect: false, whyWrong: 'רקמה מקדימה איבר, שכן איבר מורכב ממספר רקמות.' },
      { id: '4', text: 'איבר ← תא ← רקמה ← מערכת', isCorrect: false, whyWrong: 'האיבר אינו נקודת ההתחלה, אלא התא.' }
    ],
    hint: 'תאים יוצרים רקמה, רקמות בונות איבר, ואיברים חוברים למערכת.',
    explanation: 'הסדר ההיררכי: תא (Cell) ← רקמה (Tissue) ← איבר (Organ) ← מערכת (System).'
  },
  {
    id: 'm_4',
    topic: 'התא ואברוניו',
    title: 'תפקיד המיטוכונדריה ו-ATP',
    imageSrc: '/images/phys1_p12_atp.jpg',
    questionText: 'מה התפקיד העיקרי של המיטוכונדריה בתא לפי תהליכי הפקת האנרגיה?',
    options: [
      { id: '1', text: 'אספקת אנרגיה לתא (אברון הנשימה התאית האירובית וייצור ATP)', isCorrect: true },
      { id: '2', text: 'ייצור חלבונים מתמשך', isCorrect: false, whyWrong: 'ייצור חלבונים מתבצע בריבוזומים.' },
      { id: '3', text: 'הגנה מכנית על התא מבחוץ', isCorrect: false, whyWrong: 'ההגנה וההפרדה נעשות על ידי קרום התא.' },
      { id: '4', text: 'העברת אותות עצביים חשמליים', isCorrect: false, whyWrong: 'העברת פולסים חשמליים נעשית על ידי תאי נוירון ברקמת העצב.' }
    ],
    hint: 'תחנת הכוח של התא – מפיקה ATP בנוכחות חמצן.',
    explanation: 'המיטוכונדריה היא אברון הנשימה שבו מופקת אנרגיה אירובית (ATP).'
  },
  {
    id: 'm_5',
    topic: 'הומיאוסטזיס',
    title: 'שמירה על סביבה פנימית',
    imageSrc: '/images/phys2_p113_thermoregulation.jpg',
    questionText: 'הומיאוסטזיס (Homeostasis) מוגדר כ:',
    options: [
      { id: '1', text: 'תהליך התחלקות והתרבות התא', isCorrect: false, whyWrong: 'חלוקת תאים מוגדרת כמיטוזה או מיוזה.' },
      { id: '2', text: 'שמירה על מצב וסביבה פנימית קבועה ויציבה לתפקוד תקין של הגוף', isCorrect: true },
      { id: '3', text: 'סוג מיוחד של רקמת חיבור צפופה', isCorrect: false, whyWrong: 'זהו מנגנון ויסות ביולוגי, לא רקמה.' },
      { id: '4', text: 'התכווצות שריר רצונית בזמן אימון', isCorrect: false, whyWrong: 'התכווצות שריר מפרה זמנית את ההומיאוסטזיס.' }
    ],
    hint: 'איזון פנימי פעיל (טמפרטורה, חומציות, נוזלים).',
    explanation: 'הומיאוסטזיס הוא כושר הגוף לשמור על סביבה פנימית יציבה.'
  },
  {
    id: 'm_6',
    topic: 'רקמת אפיתל וכלי דם',
    title: 'אנדותל כלי הדם וטרשת',
    imageSrc: '/images/phys2_p35_circulation.jpg',
    questionText: 'כיצד נקרא האפיתל המרפד את פנים כלי הדם, ומה משמעות הפגיעה בו?',
    options: [
      { id: '1', text: 'פריאוסט; גורם להחלשת קליפת העצם', isCorrect: false, whyWrong: 'פריאוסט הוא קרום העצם החיצוני.' },
      { id: '2', text: 'אנדותל (Endothelium); פגיעה בו עלולה להוביל להצטברות רובד טרשתי (פלאק)', isCorrect: true },
      { id: '3', text: 'אפידרמיס; גורם ליובש בעור', isCorrect: false, whyWrong: 'אפידרמיס הוא שכבת העור החיצונית.' },
      { id: '4', text: 'מזותל; גורם לפגיעה בסחוס המפרקי', isCorrect: false, whyWrong: 'מזותל מרפד את החללים הפנימיים הסגורים של הגוף.' }
    ],
    hint: 'הציפוי הפנימי של העורק שפגיעה בו מאפשרת שקיעת שומנים.',
    explanation: 'האנדותל מצפה את פנים כלי הדם. פגיעה בו מאפשרת היווצרות טרשת עורקים.'
  },
  {
    id: 'm_7',
    topic: 'מערכת השלד',
    title: 'השלד הצירי מול השלד התוספי',
    imageSrc: '/images/vertebra_bone.jpeg',
    questionText: 'איזו מהעצמות הבאות שייכת לשלד הצירי (Axial skeleton)?',
    options: [
      { id: '1', text: 'עצם הבריח (Clavicula)', isCorrect: false, whyWrong: 'הבריח שייך לחגורת הכתף (שלד תוספי).' },
      { id: '2', text: 'עצם החזה (Sternum) וחוליות עמוד השדרה', isCorrect: true },
      { id: '3', text: 'השכמה (Scapula)', isCorrect: false, whyWrong: 'השכמה שייכת לשלד התוספי.' },
      { id: '4', text: 'עצמות האגן (Pelvis)', isCorrect: false, whyWrong: 'עצמות האגן שייכות לשלד התוספי.' }
    ],
    hint: 'גולגולת, עמוד שדרה, צלעות ועצם החזה (סטרנום).',
    explanation: 'עצם החזה, הגולגולת, עמוד השדרה והצלעות מרכיבים את השלד הצירי.'
  },
  {
    id: 'm_8',
    topic: 'עמוד השדרה וחוליות',
    title: 'מבנה החוליה',
    imageSrc: '/images/vertebra_bone.jpeg',
    questionText: 'חוליה בעמוד השדרה מסווגת כאיזה סוג של עצם?',
    options: [
      { id: '1', text: 'עצם ארוכה', isCorrect: false, whyWrong: 'עצם ארוכה היא כמו עצם הירך או הזרוע.' },
      { id: '2', text: 'עצם שטוחה', isCorrect: false, whyWrong: 'עצמות שטוחות הן עצמות הגולגולת והשכמה.' },
      { id: '3', text: 'עצם בלתי-סדירה (Irregular bone)', isCorrect: true },
      { id: '4', text: 'עצם ססמואידית', isCorrect: false, whyWrong: 'עצם ססמואידית גדלה בתוך גיד (כמו הפיקה).' }
    ],
    hint: 'בעלת צורה מורכבת עם זיזים (זיז קוצי, זיזים רוחביים) וגוף חוליה.',
    explanation: 'חוליה היא עצם בלתי-סדירה (Irregular) בעלת מבנה מורכב שנועד לתמוך במשקל ולהגן על חוט השדרה.'
  },
  {
    id: 'm_9',
    topic: 'עצמות חגורת הכתף',
    title: 'השכמה (Scapula)',
    imageSrc: '/images/scapula_bones.jpeg',
    questionText: 'איזה מפרק נוצר בין עצם השכמה (Scapula) לבין עצם הזרוע (Humerus)?',
    options: [
      { id: '1', text: 'מפרק הכתף (Glenohumeral joint) - מפרק כדורי רב-צירי', isCorrect: true },
      { id: '2', text: 'מפרק ציר חד-צירי', isCorrect: false, whyWrong: 'מפרק הכתף הוא רב-צירי ומאפשר תנועה בכל המישורים.' },
      { id: '3', text: 'מפרק סיבי ללא תנועה', isCorrect: false, whyWrong: 'מפרק הכתף הוא התנועתי ביותר בגוף.' },
      { id: '4', text: 'מפרק סחוסי', isCorrect: false, whyWrong: 'מפרק הכתף הוא מפרק סינוביאלי עם קפסולה ונוזל.' }
    ],
    hint: 'מכתש הגלנואיד בשכמה מתחבר לראש הזרוע.',
    explanation: 'המפרק הגלנו-הומורלי הוא מפרק כדור ומכתש רב-צירי המאפשר טווח תנועה מקסימלי.'
  },
  {
    id: 'm_10',
    topic: 'תאי העצם',
    title: 'שלושת התאים המנהלים את העצם',
    imageSrc: '/images/vertebra_bone.jpeg',
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
    id: 'm_11',
    topic: 'עומס והסתגלות',
    title: 'חוק וולף בעבודת המאמן',
    imageSrc: '/images/vertebra_bone.jpeg',
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
    id: 'm_12',
    topic: 'סחוסים ומפרקים',
    title: 'סחוס היאליני',
    imageSrc: '/images/scapula_bones.jpeg',
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

// ==========================================
// 2. בנק שאלות מכללת וינגייט (Wingate Academy)
// ==========================================
const WINGATE_FULL_DATA = [
  {
    id: 'w_1',
    topic: 'שרירי החזה',
    title: 'חזה גדול (Pectoralis Major)',
    imageSrc: '/images/pectoralis_major.jpeg',
    questionText: 'מהי הפעולה המרכזית שמבצע שריר החזה הגדול (Pectoralis Major) במפרק הכתף בתרגיל לחיצת חזה?',
    options: [
      { id: '1', text: 'קירוב אופקי (Horizontal Adduction) וקירוב הזרוע', isCorrect: true },
      { id: '2', text: 'הרחקה אופקית של הזרוע', isCorrect: false, whyWrong: 'הרחקה אופקית מבוצעת על ידי הדלתא האחורית והרחב גבי.' },
      { id: '3', text: 'פשיטת מרפק', isCorrect: false, whyWrong: 'פשיטת מרפק מבוצעת על ידי שריר הטרייספס.' },
      { id: '4', text: 'הרמת השכמה (Elevation)', isCorrect: false, whyWrong: 'הרמת שכמה מבוצעת על ידי הטרפז העליון וה-Levator Scapulae.' }
    ],
    hint: 'מקרב את הזרועות זו לקראת זו בקדמת בית החזה.',
    explanation: 'Pectoralis Major הוא האגוניסט בקירוב וקירוב אופקי של הזרוע במפרק הכתף.'
  },
  {
    id: 'w_2',
    topic: 'שרירי הגב',
    title: 'רחב גבי (Latissimus Dorsi)',
    imageSrc: '/images/latissimus_dorsi.jpeg',
    questionText: 'איזו תנועה במפרק הכתף מבצע שריר הרחב גבי (Latissimus Dorsi) בתרגיל משיכת פולי עליון?',
    options: [
      { id: '1', text: 'קירוב (Adduction) ופשיטה (Extension) של הזרוע', isCorrect: true },
      { id: '2', text: 'כפיפה (Flexion) של הזרוע קדימה', isCorrect: false, whyWrong: 'כפיפת כתף מבוצעת על ידי הדלתא הקדמית והחזה העליון.' },
      { id: '3', text: 'הרחקת הזרוע לצדדים', isCorrect: false, whyWrong: 'הרחקת זרוע מבוצעת על ידי הדלתא האמצעית וה-Supraspinatus.' },
      { id: '4', text: 'סיבוב חיצוני (External Rotation)', isCorrect: false, whyWrong: 'הרחב גבי מבצע סיבוב פנימי (Internal Rotation).' }
    ],
    hint: 'מושך את הזרוע מלמעלה למטה ומאחורי הגב.',
    explanation: 'Latissimus Dorsi הוא הפושט והמקרב הראשי של הזרוע במפרק הכתף.'
  },
  {
    id: 'w_3',
    topic: 'שרירי הכתף',
    title: 'דלתא (Deltoid)',
    imageSrc: '/images/deltoid.jpeg',
    questionText: 'איזה חלק של שריר הדלתא (Deltoid) הוא האגוניסט הראשי בהרחקת הזרוע (Abduction) עד 90 מעלות?',
    options: [
      { id: '1', text: 'הדלתא האמצעית (Lateral / Middle Deltoid)', isCorrect: true },
      { id: '2', text: 'הדלתא הקדמית', isCorrect: false, whyWrong: 'הדלתא הקדמית פועלת בעיקר בכפיפה ובקירוב אופקי.' },
      { id: '3', text: 'הדלתא האחורית', isCorrect: false, whyWrong: 'הדלתא האחורית פועלת בפשיטה ובהרחקה אופקית.' },
      { id: '4', text: 'שריר הטרפז התחתון', isCorrect: false, whyWrong: 'הטרפז פועל על השכמה ולא מרחיק ישירות את הזרוע.' }
    ],
    hint: 'החלק הצדי של הכתף.',
    explanation: 'הדלתא האמצעית אחראית על הרחקת הזרוע במישור החזיתי.'
  },
  {
    id: 'w_4',
    topic: 'שרירי הרגליים',
    title: 'ארבע-ראשי (Quadriceps)',
    imageSrc: '/images/quadriceps.jpeg',
    questionText: 'איזה ראש של שריר הארבע-ראשי (Quadriceps) חוצה שני מפרקים ומבצע גם כפיפה בירך?',
    options: [
      { id: '1', text: 'הישר הירכי (Rectus Femoris)', isCorrect: true },
      { id: '2', text: 'הנרחב הצדי (Vastus Lateralis)', isCorrect: false, whyWrong: 'שלושת ראשי ה-Vastus חוצים את הברך בלבד ופושטים אותה.' },
      { id: '3', text: 'הנרחב התיכון (Vastus Medialis)', isCorrect: false, whyWrong: 'חוצה את הברך בלבד.' },
      { id: '4', text: 'הנרחב הביניימי (Vastus Intermedius)', isCorrect: false, whyWrong: 'חוצה את הברך בלבד.' }
    ],
    hint: 'מתחיל בעצם האגן (AIIS) ומסתיים דרך הפיקה בשוקה.',
    explanation: 'Rectus Femoris הוא שריר דו-מפרקי (Bi-articular) הפושט את הברך ומכופף את הירך.'
  },
  {
    id: 'w_5',
    topic: 'שרירי הירך האחורית',
    title: 'פושטי הירך / המסטרינגס (Hamstrings)',
    imageSrc: '/images/hamstrings.png',
    questionText: 'אילו תנועות מבצעת קבוצת פושטי הירך (Hamstrings)?',
    options: [
      { id: '1', text: 'פשיטה במפרק הירך וכפיפה במפרק הברך', isCorrect: true },
      { id: '2', text: 'כפיפה בירך ופשיטה בברך', isCorrect: false, whyWrong: 'זו פעולתו של ה-Rectus Femoris.' },
      { id: '3', text: 'הרחקת ירך ונעילת ברך', isCorrect: false, whyWrong: 'הרחקת ירך מבוצעת על ידי ה-Gluteus Medius.' },
      { id: '4', text: 'פשיטת קרסול בלבד', isCorrect: false, whyWrong: 'ההמסטרינגס אינם חוצים את הקרסול.' }
    ],
    hint: 'פועלים בספרינט ובדדליפט לפשיטת ירך וכפיפת ברך.',
    explanation: 'ההמסטרינגס פושטים את מפרק הירך ומכופפים את מפרק הברך.'
  },
  {
    id: 'w_6',
    topic: 'מערכות אנרגיה',
    title: 'מערכת ATP-CP וקריאטין פוספט',
    imageSrc: '/images/phys1_p15_crp.jpg',
    questionText: 'מה מאפיין את מערכת ה-ATP-CP (פוספוגנית) במאמץ מרבי?',
    options: [
      { id: '1', text: 'אספקת אנרגיה מיידית בעצימות מקסימלית למשך עד כ-10 שניות ראשונות ללא חומצת חלב', isCorrect: true },
      { id: '2', text: 'פעילות ממושכת מעל שעתיים בנוכחות חמצן', isCorrect: false, whyWrong: 'זו המערכת האירובית.' },
      { id: '3', text: 'פירוק גלוקוז ליצירת חומצת חלב', isCorrect: false, whyWrong: 'זו גליקוליזה אנאירובית.' },
      { id: '4', text: 'חמצון שומנים תוך-תאיים', isCorrect: false, whyWrong: 'חמצון שומנים פועל במנוחה ובמאמץ קל.' }
    ],
    hint: 'מקור האנרגיה המהיר ביותר הזמין בשריר לספרינטים קצרים והרמות כבדות.',
    explanation: 'מערכת ה-ATP-CP מספקת אנרגיה מיידית ללא צורך בחמצן ומתמצה בתוך שניות בודדות.'
  },
  {
    id: 'w_7',
    topic: 'מערכות אנרגיה',
    title: 'השוואת שלוש מערכות האנרגיה',
    imageSrc: '/images/phys1_p32_energy_systems.jpg',
    questionText: 'במאמץ מרבי הנמשך בין 30 שניות לשתי דקות (כמו ריצת 400 מטר), איזו מערכת אנרגיה היא הדומיננטית ביותר?',
    options: [
      { id: '1', text: 'גליקוליזה אנאירובית (מערכת חומצת החלב / לקטאט)', isCorrect: true },
      { id: '2', text: 'מערכת ה-ATP-CP בלבד', isCorrect: false, whyWrong: 'ה-CP מתרוקן כמעט לחלוטין לאחר 10-15 שניות ראשונות.' },
      { id: '3', text: 'חמצון שומנים אירובי', isCorrect: false, whyWrong: 'חמצון שומנים דורש זמן רב ואינו תומך בעצימות מרבית קצרה.' },
      { id: '4', text: 'מעגל קרבס הבלעדי', isCorrect: false, whyWrong: 'המסלול האירובי טרם הגיע להספק מלא בזמן קצר כזה.' }
    ],
    hint: 'מפרקת גליקוגן ללא חמצן ויוצרת לקטאט וירידה ב-pH.',
    explanation: 'גליקוליזה אנאירובית היא המערכת הדומיננטית במאמצים עצימים שנמשכים בין חצי דקה לשתי דקות.'
  },
  {
    id: 'w_8',
    topic: 'פיזיולוגיה של השריר',
    title: 'כישור השריר מול אברון גולג\'י',
    imageSrc: '/images/phys2_p62_spindle_gto.jpg',
    questionText: 'מה ההבדל בתפקיד בין כישור השריר (Muscle Spindle) לאברון הגיד על שם גולג\'י (GTO)?',
    options: [
      { id: '1', text: 'כישור השריר מזהה שינוי באורך השריר ומעורר כיווץ מגן; ה-GTO מזהה עומס ומתח בגיד וגורם להרפיה', isCorrect: true },
      { id: '2', text: 'ה-GTO מעורר כיווץ מיידי והכישור גורם לקריעה', isCorrect: false, whyWrong: 'ה-GTO הוא מנגנון מגן המרפה את השריר בעומס יתר.' },
      { id: '3', text: 'שניהם מזהים רק טמפרטורה בשריר', isCorrect: false, whyWrong: 'אלו פרופריוספטורים מכניים של מתיחה ומתח.' },
      { id: '4', text: 'כישור השריר נמצא בעצם וה-GTO במוח', isCorrect: false, whyWrong: 'הכישור בתוך בטן השריר וה-GTO בחיבור הגיד-שריר.' }
    ],
    hint: 'כישור השריר = רפלקס מתיחה (כיווץ); GTO = רפלקס הפוך (הרפיה מפני עומס יתר).',
    explanation: 'כישור השריר מגן ממתיחת יתר מהירה על ידי כיווץ; ה-GTO מגן מקריעת גיד על ידי הרפיית השריר.'
  }
];

// מנוע תצוגת תמונות אינטראקטיבי (Pan & Zoom)
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

  return (
    <div style={{ backgroundColor: '#020617', padding: '8px', borderRadius: '14px', border: '1.5px solid #1e293b', marginBottom: '10px', position: 'relative' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px', borderBottom: '1px solid #1e293b', paddingBottom: '4px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8' }}>
          🔍 תמונה רפואית / אנטומית (ניתן להגדלה וגרירה):
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
          height: '140px',
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
            <div style={{ color: '#64748b', fontSize: '12px', textAlign: 'center' }}>
              🦴 תרשים אנטומי: {currentQ?.title || currentQ?.topic}
            </div>
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
                {institution === 'meso' ? 'מבוא לאנטומיה, רקמות, הומיאוסטזיס ושלד' : 'אנטומיה, קינזיולוגיה, שרירים ופיזיולוגיה'}
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
              <span style={{ fontSize: '10px', opacity: 0.85 }}>שרירים, מפרקים, פיזיולוגיה ({WINGATE_FULL_DATA.length})</span>
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

        {/* מנוע התצוגה של התמונות עם זום והזזה */}
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
