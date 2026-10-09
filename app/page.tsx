/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect, Component } from 'react';

// Error Boundary למניעת קריסות צד-לקוח
class SafeBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError() {
    return { hasError: true };
  }
  componentDidCatch(err) {
    console.error('Client exception caught:', err);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '20px', textAlign: 'center' }} dir="rtl">
          <h2 style={{ color: '#f43f5e', fontSize: '18px', fontWeight: 'bold' }}>אירעה תקלה בטעינת הרכיב</h2>
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>הנתונים אותחלו. לחץ לרענון:</p>
          <button onClick={() => { this.setState({ hasError: false }); window.location.reload(); }} style={{ backgroundColor: '#0284c7', color: '#fff', border: 'none', padding: '10px 18px', borderRadius: '10px', fontWeight: 'bold', cursor: 'pointer' }}>
            🔄 רענן עמוד
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// 1. בנק שאלות מזו אקדמי (Meso Academy)
const MESO_QUESTIONS = [
  {
    id: 'm1',
    topic: 'מבוא לאנטומיה',
    title: 'מקור המונח אנטומיה',
    diagram: 'skeleton',
    questionText: 'המילה "אנטומיה" מורכבת מהמילים Ana ו-Tome. מה פירושן?',
    options: [
      { id: '1', text: 'מבנה + גוף', isCorrect: false },
      { id: '2', text: 'מחדש + לחתוך (Ana = מחדש, Tome = לחתוך)', isCorrect: true },
      { id: '3', text: 'חקר + תנועה', isCorrect: false },
      { id: '4', text: 'תא + רקמה', isCorrect: false }
    ],
    hint: 'דיסקציה: לחתוך ולבחון שוב מחדש את מבנה הגוף.',
    explanation: 'המילה אנטומיה מקורה ביוונית: Ana = מחדש, Tome = לחתוך (חקר מבנה הגוף ואיבריו).'
  },
  {
    id: 'm2',
    topic: 'מבוא לאנטומיה',
    title: 'אנטומיה מול פיזיולוגיה',
    diagram: 'cell',
    questionText: 'מה ההבדל בין אנטומיה לפיזיולוגיה?',
    options: [
      { id: '1', text: 'אנטומיה עוסקת בתפקוד, פיזיולוגיה במבנה', isCorrect: false },
      { id: '2', text: 'אין הבדל, אלו שמות נרדפים לחלוטין', isCorrect: false },
      { id: '3', text: 'אנטומיה עוסקת במבנה ובמיקום; פיזיולוגיה עוסקת באופן הפעולה של המערכות', isCorrect: true },
      { id: '4', text: 'אנטומיה עוסקת רק בשרירים, פיזיולוגיה רק באיברים פנימיים', isCorrect: false }
    ],
    hint: 'אנטומיה: מה יש ואיפה? פיזיולוגיה: איך זה פועל?',
    explanation: 'אנטומיה עונה על "מה המבנה והמיקום", ופיזיולוגיה על "כיצד המערכות פועלות ומבצעות את תפקידן".'
  },
  {
    id: 'm3',
    topic: 'ארגון הגוף',
    title: 'רמות הארגון של הגוף החי',
    diagram: 'cell',
    questionText: 'מהו הסדר הנכון של רמות הארגון בגוף, מהקטן לגדול?',
    options: [
      { id: '1', text: 'רקמה ← תא ← מערכת ← איבר', isCorrect: false },
      { id: '2', text: 'תא ← רקמה ← איבר ← מערכת', isCorrect: true },
      { id: '3', text: 'תא ← איבר ← רקמה ← מערכת', isCorrect: false },
      { id: '4', text: 'איבר ← תא ← רקמה ← מערכת', isCorrect: false }
    ],
    hint: 'תאים יוצרים רקמה, רקמות בונות איבר, ואיברים חוברים למערכת.',
    explanation: 'הסדר ההיררכי: תא (Cell) ← רקמה (Tissue) ← איבר (Organ) ← מערכת (System).'
  },
  {
    id: 'm4',
    topic: 'התא ואברוניו',
    title: 'בית החרושת של החלבונים',
    diagram: 'cell',
    questionText: 'איזה אברון מכונה "בית החרושת של החלבונים"?',
    options: [
      { id: '1', text: 'מיטוכונדריה', isCorrect: false },
      { id: '2', text: 'ציטופלזמה', isCorrect: false },
      { id: '3', text: 'ריבוזום (Ribosome)', isCorrect: true },
      { id: '4', text: 'גרעין התא', isCorrect: false }
    ],
    hint: 'עליו מורכבות חומצות האמינו לבניית חלבוני הגוף והשריר.',
    explanation: 'הריבוזומים אחראים על סינתזת חלבונים בתא, ולכן מכונים "בית החרושת של החלבונים".'
  },
  {
    id: 'm5',
    topic: 'התא ואברוניו',
    title: 'תפקיד המיטוכונדריה',
    diagram: 'cell',
    questionText: 'מה התפקיד העיקרי של המיטוכונדריה בתא?',
    options: [
      { id: '1', text: 'אספקת אנרגיה לתא (אברון הנשימה התאית)', isCorrect: true },
      { id: '2', text: 'ייצור חלבונים מתמשך', isCorrect: false },
      { id: '3', text: 'הגנה על התא מפני לחץ חיצוני', isCorrect: false },
      { id: '4', text: 'העברת פולסים חשמליים', isCorrect: false }
    ],
    hint: 'תחנת הכוח של התא – מפיקה ATP במסלול האירובי בנוכחות חמצן.',
    explanation: 'המיטוכונדריה היא אברון הנשימה של התא וספקית האנרגיה העיקרית שלו במסלול האירובי.'
  },
  {
    id: 'm6',
    topic: 'הומיאוסטזיס',
    title: 'הגדרת הומיאוסטזיס',
    diagram: 'cell',
    questionText: 'הומיאוסטזיס (Homeostasis) הוא:',
    options: [
      { id: '1', text: 'תהליך התחלקות והתרבות התא', isCorrect: false },
      { id: '2', text: 'שמירה על מצב וסביבה פנימית קבועה לתפקוד תקין של התא והגוף', isCorrect: true },
      { id: '3', text: 'סוג של רקמת חיבור צפופה', isCorrect: false },
      { id: '4', text: 'התכווצות שריר רצונית', isCorrect: false }
    ],
    hint: 'איזון פנימי פעיל (טמפרטורה, חומציות, נוזלים).',
    explanation: 'הומיאוסטזיס הוא כושר הגוף לשמור על סביבה פנימית יציבה וקבועה למרות שינויים סביבתיים.'
  },
  {
    id: 'm7',
    topic: 'רקמת אפיתל',
    title: 'הזנת רקמת האפיתל',
    diagram: 'cell',
    questionText: 'כיצד מקבלת רקמת האפיתל חומרי מזון וחמצן?',
    options: [
      { id: '1', text: 'מכלי דם רבים העוברים בתוכה', isCorrect: false },
      { id: '2', text: 'ישירות מהאוויר שמסביב', isCorrect: false },
      { id: '3', text: 'מרקמת החיבור הצמודה אליה בדיפוזיה, כי היא חסרת כלי דם', isCorrect: true },
      { id: '4', text: 'מנוזל רקמת העצב', isCorrect: false }
    ],
    hint: 'האפיתל חסר כלי דם (Avascular).',
    explanation: 'לרקמת האפיתל אין כלי דם משלה, והיא מקבלת הזנה וחמצן בדיפוזיה מרקמת החיבור שמתחתיה.'
  },
  {
    id: 'm8',
    topic: 'רקמת חיבור',
    title: 'סיווג גיד ורצועה',
    diagram: 'bone',
    questionText: 'גיד ורצועה שייכים לאיזה סוג של רקמת חיבור?',
    options: [
      { id: '1', text: 'רקמת חיבור אמיתית (סיבית צפופה)', isCorrect: true },
      { id: '2', text: 'רקמת חיבור תומכת (שלדית - עצם וסחוס)', isCorrect: false },
      { id: '3', text: 'רקמת חיבור מיוחדת (שומן ודם)', isCorrect: false },
      { id: '4', text: 'רקמת אפיתל', isCorrect: false }
    ],
    hint: 'אמיתית = גידים ורצועות; תומכת = עצם וסחוס; מיוחדת = שומן ודם.',
    explanation: 'גיד ורצועה שייכים לרקמת חיבור אמיתית (סיבית מקבילה להעברת כוחות משיכה חזקים).'
  },
  {
    id: 'm9',
    topic: 'מערכת השלד',
    title: 'השלד הצירי מול השלד התוספי',
    diagram: 'skeleton',
    questionText: 'איזו מהעצמות הבאות שייכת לשלד הצירי (Axial skeleton)?',
    options: [
      { id: '1', text: 'עצם הבריח (Clavicula)', isCorrect: false },
      { id: '2', text: 'עצם החזה (Sternum)', isCorrect: true },
      { id: '3', text: 'השכמה (Scapula)', isCorrect: false },
      { id: '4', text: 'עצמות האגן (Pelvis)', isCorrect: false }
    ],
    hint: 'השלד הצירי כולל: גולגולת, עמוד שדרה, צלעות ועצם החזה.',
    explanation: 'עצם החזה (Sternum), יחד עם הגולגולת, עמוד השדרה והצלעות, מרכיבות את השלד הצירי. השכמות, הבריח והאגן שייכים לתוספי.'
  },
  {
    id: 'm10',
    topic: 'מבנה העצם',
    title: 'עצם צפופה (Compact)',
    diagram: 'bone',
    questionText: 'מה מאפיין עצם צפופה (Compact bone)?',
    options: [
      { id: '1', text: 'מכילה חללים רבים ומשמשת בעיקר לבלימת זעזועים', isCorrect: false },
      { id: '2', text: 'נמצאת רק בחוליות עמוד השדרה', isCorrect: false },
      { id: '3', text: 'נמצאת בעיקר במעטפת החיצונית ומספקת חוזק ועמידות בדחיסה', isCorrect: true },
      { id: '4', text: 'בנויה מסחוס היאליני', isCorrect: false }
    ],
    hint: 'המעטפת הקשה החיצונית של העצם.',
    explanation: 'עצם קומפקטית ממוקמת במעטפת החיצונית של העצמות ומספקת להן חוזק ועמידות מול כוחות דחיסה.'
  },
  {
    id: 'm11',
    topic: 'תאי העצם',
    title: 'שלושת תאי העצם',
    diagram: 'bone',
    questionText: 'איזה תא אחראי על פירוק והמסה של רקמת עצם בתהליך השחלוף?',
    options: [
      { id: '1', text: 'אוסטאוציט (תא בוגר שמתפקד כחיישן עומס)', isCorrect: false },
      { id: '2', text: 'אוסטאובלסט (תא הבונה עצם חדשה)', isCorrect: false },
      { id: '3', text: 'אוסטאוקלסט (Osteoclast - תא הורס ומפרק עצם)', isCorrect: true },
      { id: '4', text: 'כונדרוציט (תא סחוס)', isCorrect: false }
    ],
    hint: 'B בונה (OsteoBlast), C קורע ומפרק (OsteoClast).',
    explanation: 'האוסטאוקלסט מפרק וממיס עצם; האוסטאובלסט בונה עצם חדשה; האוסטאוציט מנטר עומסים.'
  },
  {
    id: 'm12',
    topic: 'עומס והסתגלות',
    title: 'חוק וולף (Wolff\'s Law)',
    diagram: 'bone',
    questionText: 'מה קובע חוק וולף (Wolff\'s Law)?',
    options: [
      { id: '1', text: 'מסת העצם קבועה מגיל 20 ואינה משתנה עוד', isCorrect: false },
      { id: '2', text: 'רק תזונה משפיעה על צפיפות העצם', isCorrect: false },
      { id: '3', text: 'עצם מסתגלת לעומס: עומס מוגבר מחזק אותה, וירידה בעומס מחלישה אותה', isCorrect: true },
      { id: '4', text: 'אימוני כוח מחלישים את העצמות תמיד', isCorrect: false }
    ],
    hint: 'העצם מתחזקת בהעמסה מבוקרת ונחלשת בחוסר תנועה.',
    explanation: 'חוק וולף קובע שעצם היא רקמה חיה המסתגלת לעומס מכני המופעל עליה.'
  },
  {
    id: 'm13',
    topic: 'סחוסים',
    title: 'סחוס היאליני ומפרקים',
    diagram: 'bone',
    questionText: 'איזה סוג סחוס מרפד את קצות העצמות במפרקים תנועתיים, ואיזה מפרק הוא היציב ביותר?',
    options: [
      { id: '1', text: 'סחוס סיבי; מפרק סינוביאלי', isCorrect: false },
      { id: '2', text: 'סחוס אלסטי; מפרק סחוסי', isCorrect: false },
      { id: '3', text: 'סחוס היאליני (השכיח ביותר); מפרק סיבי (היציב ביותר, ללא תנועה)', isCorrect: true },
      { id: '4', text: 'סחוס רטיקולרי; מפרק רב-צירי', isCorrect: false }
    ],
    hint: 'היאליני מרפד מפרקים תנועתיים, ומפרק סיבי (כמו תפרי הגולגולת) הוא ללא תנועה ויציב ביותר.',
    explanation: 'סחוס היאליני הוא הנפוץ ביותר ומרפד קצות עצמות למניעת חיכוך; מפרק סיבי מחבר עצמות ללא תנועה והוא היציב ביותר.'
  }
];

// 2. בנק שאלות מכללת וינגייט (Wingate)
const WINGATE_QUESTIONS = [
  {
    id: 'w1',
    topic: 'תכנון אימון',
    title: 'עקרון עומס יסף',
    diagram: 'muscle',
    questionText: 'מהו עקרון עומס יסף (Overload Principle) באימון התנגדות?',
    options: [
      { id: '1', text: 'אימון של אותה קבוצת שרירים בכל יום ללא מנוחה', isCorrect: false },
      { id: '2', text: 'חשיפת מערכות הגוף לעומס הגבוה מזה שהן מורגלות אליו כדי לעורר הסתגלות', isCorrect: true },
      { id: '3', text: 'ביצוע של לפחות 20 חזרות בכל סט', isCorrect: false },
      { id: '4', text: 'הרמת משקל מקסימלי 1RM בלבד', isCorrect: false }
    ],
    hint: 'כדי שהשריר יתפתח, יש לחשוף אותו לגירוי גבוה ממה שהוא מכיר כיום.',
    explanation: 'עקרון עומס יסף קובע שכדי לגרום לשיפור בכוח או במסת השריר, יש להעמיס על המערכת מעבר ליכולת הנוכחית שלה.'
  },
  {
    id: 'w2',
    topic: 'פיזיולוגיה של המאמץ',
    title: 'מערכות אנרגיה',
    diagram: 'cell',
    questionText: 'איזו מערכת אנרגיה היא הדומיננטית במאמץ מרבי הנמשך עד 10 שניות (כגון ספרינט 60 מטר)?',
    options: [
      { id: '1', text: 'המערכת האירובית', isCorrect: false },
      { id: '2', text: 'מערכת ה-ATP-CP (פוספוגנית אנאירובית)', isCorrect: true },
      { id: '3', text: 'גליקוליזה אירובית', isCorrect: false },
      { id: '4', text: 'חמצון שומנים', isCorrect: false }
    ],
    hint: 'קריאטין פוספט ואנרגיה זמינה מיידית ללא צורך בחמצן.',
    explanation: 'מערכת הפוספוגנים (ATP-CP) מספקת אנרגיה מיידית בעצימות מקסימלית למשך עד כ-10 שניות ראשונות.'
  },
  {
    id: 'w3',
    topic: 'אנטומיה וניתוח תנועה',
    title: 'מישורי תנועה',
    diagram: 'skeleton',
    questionText: 'באיזה מישור תנועה מתבצע תרגיל הסקוואט (Squat)?',
    options: [
      { id: '1', text: 'במישור החזיתי (Frontal)', isCorrect: false },
      { id: '2', text: 'במישור החצי / סגיטלי (Sagittal)', isCorrect: true },
      { id: '3', text: 'במישור האופקי / טרנסברסלי (Transverse)', isCorrect: false },
      { id: '4', text: 'במישור האלכסוני בלבד', isCorrect: false }
    ],
    hint: 'תנועות כיפוף ופשיטה (קדימה-אחורה) מבוצעות במישור זה.',
    explanation: 'סקוואט מורכב מכפיפה ופשיטה במפרקי הירך, הברך והקרסול – תנועות המתרחשות במישור הסגיטלי.'
  },
  {
    id: 'w4',
    topic: 'אנטומיה של השריר',
    title: 'תפקידי השריר בתנועה',
    diagram: 'muscle',
    questionText: 'בתרגיל לחיצת חזה בשכיבה (Bench Press), איזה שריר פועל כאגוניסט הראשי במפרק הכתף?',
    options: [
      { id: '1', text: 'Triceps brachii (פושט המרפק)', isCorrect: false },
      { id: '2', text: 'Pectoralis major (חזה גדול)', isCorrect: true },
      { id: '3', text: 'Latissimus dorsi (רחב גבי)', isCorrect: false },
      { id: '4', text: 'Biceps brachii', isCorrect: false }
    ],
    hint: 'השריר הגדול של בית החזה המבצע קירוב אופקי בזרוע.',
    explanation: 'השריר האגוניסט הראשי במפרק הכתף בלחיצת חזה הוא Pectoralis major (מבצע קירוב אופקי).'
  }
];

// מנוע תרשימים גרפיים (SVG)
function SafeDiagram({ diagram }: { diagram?: string }) {
  const d = diagram || 'cell';
  if (d === 'skeleton') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #0284c7', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
          🦴 תרשים שלד צירי (סגול) מול תוספי (ירוק):
        </span>
        <svg viewBox="0 0 340 85" style={{ width: '100%', height: 'auto', maxHeight: '95px' }}>
          <rect x="15" y="8" width="145" height="70" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <text x="87" y="28" fill="#a5b4fc" fontSize="11" fontWeight="bold" textAnchor="middle">שלד צירי (Axial)</text>
          <text x="87" y="46" fill="#f8fafc" fontSize="8.5" textAnchor="middle">גולגולת, עמוד שדרה,</text>
          <text x="87" y="58" fill="#f8fafc" fontSize="8.5" textAnchor="middle">עצם החזה (Sternum) וצלעות</text>
          <text x="87" y="70" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">הגנה על איברים חיוניים</text>

          <rect x="180" y="8" width="145" height="70" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          <text x="252" y="28" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">שלד תוספי (Appendicular)</text>
          <text x="252" y="46" fill="#f8fafc" fontSize="8.5" textAnchor="middle">עצמות הגפיים, עצם הבריח,</text>
          <text x="252" y="58" fill="#f8fafc" fontSize="8.5" textAnchor="middle">השכמות ועצמות האגן</text>
          <text x="252" y="70" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">הפקת תנועה ומנופים</text>
        </svg>
      </div>
    );
  }

  if (d === 'bone') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #d97706', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', display: 'block', marginBottom: '6px' }}>
          🔬 חתך עצם: מעטפת קומפקטית מול ליבה ספוגית:
        </span>
        <svg viewBox="0 0 340 85" style={{ width: '100%', height: 'auto', maxHeight: '95px' }}>
          <rect x="25" y="10" width="290" height="65" rx="8" fill="#0f172a" stroke="#d97706" strokeWidth="2" />
          <rect x="25" y="10" width="290" height="15" fill="#b45309" />
          <text x="170" y="21" fill="#ffffff" fontSize="8.5" fontWeight="bold" textAnchor="middle">מעטפת קומפקטית (Compact) - מספקת חוזק ועמידות בדחיסה</text>
          <rect x="25" y="25" width="290" height="35" fill="#1e293b" strokeDasharray="3 3" />
          <text x="170" y="45" fill="#fde68a" fontSize="9.5" fontWeight="bold" textAnchor="middle">ליבה ספוגית (Spongy) - רשת חללים לבלימת זעזועים ומשקל קל</text>
          <rect x="25" y="60" width="290" height="15" fill="#b45309" />
          <text x="170" y="71" fill="#ffffff" fontSize="8" textAnchor="middle">פריאוסט (קרום העצם) עוטף מבחוץ עם כלי דם ועצבים</text>
        </svg>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #0284c7', marginBottom: '10px' }}>
      <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
        🧬 מבנה התא: גרעין, מיטוכונדריון וריבוזומים:
      </span>
      <svg viewBox="0 0 340 85" style={{ width: '100%', height: 'auto', maxHeight: '95px' }}>
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
    const source = inst === 'meso' ? MESO_QUESTIONS : WINGATE_QUESTIONS;

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

                <SafeDiagram diagram={q.diagram} />

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

          {/* 2 כפתורים מופרדים לבחירת המוסד */}
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
              <span style={{ fontSize: '10px', opacity: 0.85 }}>מבוא, רקמות, שלד ({MESO_QUESTIONS.length})</span>
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
              <span style={{ fontSize: '10px', opacity: 0.85 }}>תכנון אימון, אנטומיה ({WINGATE_QUESTIONS.length})</span>
            </button>
          </div>

          {/* מתג מצב תרגול / מבחן */}
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

        {/* איור ותרשים מותאם */}
        <SafeDiagram diagram={currentQ?.diagram} />

        {/* כפתור חלון לימוד פדגוגי */}
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

        {/* שאלה */}
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

        {/* אפשרויות בחירה */}
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
                  <span style={{ backgroundColor: '#020617', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11
