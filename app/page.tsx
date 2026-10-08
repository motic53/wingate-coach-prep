/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';

// ==========================================
// 1. בנק שאלות מזו אקדמי (Meso Academy)
// ==========================================
const MESO_ACADEMY_DATA = [
  {
    id: 'meso_1',
    moduleId: 'meso',
    topic: 'מבוא לאנטומיה',
    title: 'מקור המילה אנטומיה',
    questionText: 'המילה "אנטומיה" מורכבת מהמילים Ana ו-Tome. מה פירושן?',
    options: [
      { id: 'm1_1', text: 'מבנה + גוף', isCorrect: false },
      { id: 'm1_2', text: 'מחדש + לחתוך (Ana = מחדש, Tome = לחתוך)', isCorrect: true },
      { id: 'm1_3', text: 'חקר + תנועה', isCorrect: false },
      { id: 'm1_4', text: 'תא + רקמה', isCorrect: false }
    ],
    hint: 'דיסקציה: לחתוך שוב ושוב מחדש כדי לחקור את מבנה הגוף.',
    explanation: 'המילה אנטומיה מגיעה מיוונית: Ana פירושה "מחדש" ו-Tome פירושה "לחתוך" (חיתוך ובחינה של הגוף).'
  },
  {
    id: 'meso_2',
    moduleId: 'meso',
    topic: 'מבוא לאנטומיה',
    title: 'אנטומיה מול פיזיולוגיה',
    questionText: 'מה ההבדל בין אנטומיה לפיזיולוגיה?',
    options: [
      { id: 'm2_1', text: 'אנטומיה עוסקת בתפקוד, פיזיולוגיה במבנה', isCorrect: false },
      { id: 'm2_2', text: 'אין הבדל, אלו שמות נרדפים', isCorrect: false },
      { id: 'm2_3', text: 'אנטומיה עוסקת במבנה ובמיקום; פיזיולוגיה עוסקת באופן הפעולה של המערכות', isCorrect: true },
      { id: 'm2_4', text: 'אנטומיה עוסקת רק בשרירים, פיזיולוגיה רק באיברים פנימיים', isCorrect: false }
    ],
    hint: 'אנטומיה היא המבנה, פיזיולוגיה היא התפקוד.',
    explanation: 'אנטומיה חוקרת את מבנה ומיקום איברי הגוף; פיזיולוגיה חוקרת את תפקוד המערכות וכיצד הן פועלות.'
  },
  {
    id: 'meso_3',
    moduleId: 'meso',
    topic: 'ארגון הגוף',
    title: 'רמות הארגון של הגוף החי',
    questionText: 'מהו הסדר הנכון של רמות הארגון בגוף, מהקטן לגדול?',
    options: [
      { id: 'm3_1', text: 'רקמה ← תא ← מערכת ← איבר', isCorrect: false },
      { id: 'm3_2', text: 'תא ← רקמה ← איבר ← מערכת', isCorrect: true },
      { id: 'm3_3', text: 'תא ← איבר ← רקמה ← מערכת', isCorrect: false },
      { id: 'm3_4', text: 'איבר ← תא ← רקמה ← מערכת', isCorrect: false }
    ],
    hint: 'תאים יוצרים רקמה, רקמות יוצרות איבר, ואיברים יוצרים מערכת.',
    explanation: 'הסדר מהפשוט למורכב: תא (היחידה הבסיסית) ← רקמה ← איבר ← מערכת (כמו מערכת השלד או הנשימה).'
  },
  {
    id: 'meso_4',
    moduleId: 'meso',
    topic: 'התא ואברוניו',
    title: 'בית החרושת של החלבונים',
    questionText: 'איזה אברון מכונה "בית החרושת של החלבונים"?',
    options: [
      { id: 'm4_1', text: 'מיטוכונדריה', isCorrect: false },
      { id: 'm4_2', text: 'ציטופלזמה', isCorrect: false },
      { id: 'm4_3', text: 'ריבוזום (Ribosome)', isCorrect: true },
      { id: 'm4_4', text: 'גרעין התא', isCorrect: false }
    ],
    hint: 'מייצר את חלבוני הגוף והשריר.',
    explanation: 'הריבוזומים הם האברונים בתא שבהם מיוצרים ומורכבים החלבונים הנחוצים לקיום ולתפקוד.'
  },
  {
    id: 'meso_5',
    moduleId: 'meso',
    topic: 'התא ואברוניו',
    title: 'תפקיד המיטוכונדריה',
    questionText: 'מה התפקיד העיקרי של המיטוכונדריה?',
    options: [
      { id: 'm5_1', text: 'אספקת אנרגיה לתא (אברון הנשימה האירובית)', isCorrect: true },
      { id: 'm5_2', text: 'ייצור חלבונים', isCorrect: false },
      { id: 'm5_3', text: 'הגנה על התא מבחוץ', isCorrect: false },
      { id: 'm5_4', text: 'העברת אותות עצביים', isCorrect: false }
    ],
    hint: 'תחנת הכוח של התא - מספקת ATP בנוכחות חמצן.',
    explanation: 'המיטוכונדריה היא אברון הנשימה של התא וספקית האנרגיה העיקרית שלו במסלול האירובי.'
  },
  {
    id: 'meso_6',
    moduleId: 'meso',
    topic: 'הומיאוסטזיס',
    title: 'שמירה על סביבה פנימית',
    questionText: 'הומיאוסטזיס (Homeostasis) הוא:',
    options: [
      { id: 'm6_1', text: 'תהליך חלוקת התא', isCorrect: false },
      { id: 'm6_2', text: 'שמירה על מצב וסביבה פנימית קבועה ויציבה לתפקוד תקין', isCorrect: true },
      { id: 'm6_3', text: 'סוג מיוחד של רקמת חיבור', isCorrect: false },
      { id: 'm6_4', text: 'התכווצות שריר רצונית', isCorrect: false }
    ],
    hint: 'איזון פנימי קבוע (חום גוף, חומציות, נוזלים).',
    explanation: 'הומיאוסטזיס הוא האיזון הפנימי של הגוף הפועל באופן אקטיבי לשמור על תנאים קבועים.'
  },
  {
    id: 'meso_7',
    moduleId: 'meso',
    topic: 'רקמת אפיתל',
    title: 'הזנת האפיתל',
    questionText: 'כיצד מקבלת רקמת האפיתל חומרי מזון וחמצן?',
    options: [
      { id: 'm7_1', text: 'מכלי דם רבים שעוברים בתוכה', isCorrect: false },
      { id: 'm7_2', text: 'מהאוויר החיצוני', isCorrect: false },
      { id: 'm7_3', text: 'מרקמת החיבור הצמודה אליה בדיפוזיה, כי היא חסרת כלי דם', isCorrect: true },
      { id: 'm7_4', text: 'מרקמת העצב', isCorrect: false }
    ],
    hint: 'לאפיתל אין כלי דם משלו.',
    explanation: 'רקמת האפיתל חסרת כלי דם (Avascular) וניזונה מרקמת החיבור הצמודה אליה מתחתיה.'
  },
  {
    id: 'meso_8',
    moduleId: 'meso',
    topic: 'רקמת חיבור',
    title: 'סיבים אלסטיים',
    questionText: 'איזה סוג סיבים ברקמת חיבור אינו חזק אך בעל יכולת להימתח ולחזור לאורכו?',
    options: [
      { id: 'm8_1', text: 'קולגניים (חזקים וקשיחים)', isCorrect: false },
      { id: 'm8_2', text: 'רטיקולריים (סיבי רשת עדינים)', isCorrect: false },
      { id: 'm8_3', text: 'אלסטיים (Elastic fibers)', isCorrect: true },
      { id: 'm8_4', text: 'שריריים', isCorrect: false }
    ],
    hint: 'פועלים כמו גומייה – נמתחים וחוזרים.',
    explanation: 'סיבים אלסטיים מקנים לרקמה גמישות ויכולת להימתח ולשוב לאורכם המקורי.'
  },
  {
    id: 'meso_9',
    moduleId: 'meso',
    topic: 'רקמת חיבור',
    title: 'סיווג גיד ורצועה',
    questionText: 'גיד ורצועה שייכים לאיזה סוג של רקמת חיבור?',
    options: [
      { id: 'm9_1', text: 'רקמת חיבור אמיתית (סיבית צפופה)', isCorrect: true },
      { id: 'm9_2', text: 'רקמת חיבור תומכת (שלדית - עצם וסחוס)', isCorrect: false },
      { id: 'm9_3', text: 'רקמת חיבור מיוחדת (שומן ודם)', isCorrect: false },
      { id: 'm9_4', text: 'רקמת אפיתל', isCorrect: false }
    ],
    hint: 'רקמות חיבור: אמיתית (גידים/רצועות), תומכת (עצם/סחוס), מיוחדת (שומן/דם).',
    explanation: 'גידים ורצועות שייכים לרקמת חיבור אמיתית, שבה סיבי הקולגן מסודרים במקביל להעברת כוח משיכה.'
  },
  {
    id: 'meso_10',
    moduleId: 'meso',
    topic: 'מערכת השלד',
    title: 'השלד הצירי',
    questionText: 'איזו מהעצמות הבאות שייכת לשלד הצירי (Axial skeleton)?',
    options: [
      { id: 'm10_1', text: 'עצם הבריח (Clavicula)', isCorrect: false },
      { id: 'm10_2', text: 'עצם החזה (Sternum)', isCorrect: true },
      { id: 'm10_3', text: 'השכמה (Scapula)', isCorrect: false },
      { id: 'm10_4', text: 'עצמות האגן (Pelvis)', isCorrect: false }
    ],
    hint: 'השלד הצירי מורכב מגולגולת, עמוד שדרה, צלעות ועצם החזה.',
    explanation: 'עצם החזה (Sternum), הגולגולת, עמוד השדרה והצלעות מרכיבים את השלד הצירי. השכמה, הבריח והאגן שייכים לשלד התוספי.'
  },
  {
    id: 'meso_11',
    moduleId: 'meso',
    topic: 'תפקידי העצם',
    title: 'תפקיד שאינו של העצם',
    questionText: 'איזה מהבאים אינו תפקיד של מערכת העצמות?',
    options: [
      { id: 'm11_1', text: 'הגנה על איברים חיוניים', isCorrect: false },
      { id: 'm11_2', text: 'מאגר מינרלים וייצור תאי דם', isCorrect: false },
      { id: 'm11_3', text: 'התכווצות אקטיבית ליצירת כוח', isCorrect: true },
      { id: 'm11_4', text: 'בסיס מכני ומנוף לתנועה', isCorrect: false }
    ],
    hint: 'התכווצות היא תפקידו של השריר בלבד!',
    explanation: 'התכווצות אקטיבית ליצירת כוח מבוצעת על ידי תאי השריר, בעוד העצם מהווה מנוף מכני פסיבי.'
  },
  {
    id: 'meso_12',
    moduleId: 'meso',
    topic: 'מבנה העצם',
    title: 'עצם צפופה (Compact)',
    questionText: 'מה מאפיין עצם צפופה (Compact bone)?',
    options: [
      { id: 'm12_1', text: 'מכילה חללים רבים ומשמשת בעיקר לבלימת זעזועים', isCorrect: false },
      { id: 'm12_2', text: 'נמצאת רק בחוליות עמוד השדרה', isCorrect: false },
      { id: 'm12_3', text: 'נמצאת בעיקר במעטפת החיצונית ומספקת חוזק ועמידות', isCorrect: true },
      { id: 'm12_4', text: 'בנויה מסחוס היאליני', isCorrect: false }
    ],
    hint: 'המעטפת הקשה החיצונית של העצם.',
    explanation: 'עצם קומפקטית נמצאת במעטפת החיצונית של העצמות ומספקת להן חוזק ועמידות מול עומסים.'
  },
  {
    id: 'meso_13',
    moduleId: 'meso',
    topic: 'צורות עצמות',
    title: 'סיווג הפיקה והחוליה',
    questionText: 'הפיקה (Patella) וחוליה בעמוד השדרה הן דוגמאות לעצמות מאיזה סוג?',
    options: [
      { id: 'm13_1', text: 'עצם ארוכה; עצם שטוחה', isCorrect: false },
      { id: 'm13_2', text: 'עצם שטוחה; עצם קצרה', isCorrect: false },
      { id: 'm13_3', text: 'ססמואידית (שומשומית); בלתי-סדירה (Irregular)', isCorrect: true },
      { id: 'm13_4', text: 'עצם קצרה; עצם ססמואידית', isCorrect: false }
    ],
    hint: 'הפיקה גדלה בתוך גיד (ססמואידית), ולחוליה יש בליטות וזיזים מורכבים (בלתי-סדירה).',
    explanation: 'הפיקה היא עצם ססמואידית (בתוך גיד הארבע-ראשי); חוליה בעמוד השדרה היא עצם בלתי-סדירה.'
  },
  {
    id: 'meso_14',
    moduleId: 'meso',
    topic: 'תאי העצם',
    title: 'התא המפרק עצם',
    questionText: 'איזה תא אחראי על פירוק והמסה של רקמת עצם בתהליך השחלוף?',
    options: [
      { id: 'm14_1', text: 'אוסטאוציט (תא בוגר שמנטר עומס)', isCorrect: false },
      { id: 'm14_2', text: 'אוסטאובלסט (תא שבונה עצם)', isCorrect: false },
      { id: 'm14_3', text: 'אוסטאוקלסט (Osteoclast - תא הורס ומפרק עצם)', isCorrect: true },
      { id: 'm14_4', text: 'כונדרוציט', isCorrect: false }
    ],
    hint: 'B בונה (Blast), C קורע ומפרק (Clast).',
    explanation: 'האוסטאוקלסט מפרק וממיס עצם; האוסטאובלסט בונה עצם חדשה; והאוסטאוציט שומר עליה.'
  },
  {
    id: 'meso_15',
    moduleId: 'meso',
    topic: 'עומס והסתגלות',
    title: 'חוק וולף (Wolff\'s Law)',
    questionText: 'לפי חוק וולף (Wolff\'s Law):',
    options: [
      { id: 'm15_1', text: 'מסת העצם קבועה מגיל 20 ואינה משתנה עוד', isCorrect: false },
      { id: 'm15_2', text: 'רק תזונה משפיעה על חוזק העצם', isCorrect: false },
      { id: 'm15_3', text: 'עצם מסתגלת לעומס: עומס מוגבר מחזק אותה, וירידה בעומס מחלישה אותה', isCorrect: true },
      { id: 'm15_4', text: 'עומס מכני מחליש את העצמות תמיד', isCorrect: false }
    ],
    hint: 'העצם מתחזקת בתגובה למשקולות ונחלשת בשכיבה ללא תנועה.',
    explanation: 'חוק וולף קובע שעצם היא רקמה חיה המסתגלת לעומס מכני – עומס מבוקר מעודד בנייה וצפיפות, והיעדר עומס מנוון אותה.'
  },
  {
    id: 'meso_16',
    moduleId: 'meso',
    topic: 'סחוסים ומפרקים',
    title: 'סחוס היאליני ומפרקים',
    questionText: 'איזה סוג סחוס מרפד את קצות העצמות במפרקים תנועתיים, ואיזה מפרק הוא היציב ביותר?',
    options: [
      { id: 'm16_1', text: 'סחוס סיבי; מפרק סינוביאלי', isCorrect: false },
      { id: 'm16_2', text: 'סחוס אלסטי; מפרק סחוסי', isCorrect: false },
      { id: 'm16_3', text: 'סחוס היאליני (השכיח ביותר); מפרק סיבי (היציב ביותר, ללא תנועה)', isCorrect: true },
      { id: 'm16_4', text: 'סחוס רטיקולרי; מפרק רב-צירי', isCorrect: false }
    ],
    hint: 'היאליני מרפד מפרקים תנועתיים, ומפרק סיבי (כמו תפרי הגולגולת) הוא ללא תנועה ויציב ביותר.',
    explanation: 'סחוס היאליני הוא הנפוץ ביותר ומרפד קצות עצמות למניעת חיכוך; מפרק סיבי מחבר עצמות ללא תנועה והוא היציב ביותר.'
  }
];

// ==========================================
// 2. בנק שאלות מכללת וינגייט (Wingate)
// ==========================================
const WINGATE_ACADEMY_DATA = [
  {
    id: 'win_1',
    moduleId: 'wingate',
    topic: 'תכנון אימון',
    title: 'עקרון עומס יסף',
    questionText: 'מהו עקרון עומס יסף (Overload Principle) באימון התנגדות?',
    options: [
      { id: 'w1_1', text: 'אימון של אותה קבוצת שרירים בכל יום ללא מנוחה', isCorrect: false },
      { id: 'w1_2', text: 'חשיפת מערכות הגוף לעומס הגבוה מזה שהן מורגלות אליו כדי לעורר הסתגלות', isCorrect: true },
      { id: 'w1_3', text: 'ביצוע של לפחות 20 חזרות בכל סט', isCorrect: false },
      { id: 'w1_4', text: 'הרמת משקל מקסימלי 1RM בלבד', isCorrect: false }
    ],
    hint: 'כדי שהשריר יתפתח, יש לחשוף אותו לגירוי גבוה ממה שהוא מכיר כיום.',
    explanation: 'עקרון עומס יסף קובע שכדי לגרום לשיפור בכוח או במסת השריר, יש להעמיס על המערכת מעבר ליכולת הנוכחית שלה.'
  },
  {
    id: 'win_2',
    moduleId: 'wingate',
    topic: 'פיזיולוגיה',
    title: 'מערכות אנרגיה',
    questionText: 'איזו מערכת אנרגיה היא הדומיננטית במאמץ מרבי הנמשך עד 10 שניות (כגון ספרינט 60 מטר)?',
    options: [
      { id: 'w2_1', text: 'המערכת האירובית', isCorrect: false },
      { id: 'w2_2', text: 'מערכת ה-ATP-CP (פוספוגנית אנאירובית)', isCorrect: true },
      { id: 'w2_3', text: 'גליקוליזה אירובית', isCorrect: false },
      { id: 'w2_4', text: 'חמצון שומנים', isCorrect: false }
    ],
    hint: 'קריאטין פוספט ואנרגיה זמינה מיידית ללא צורך בחמצן.',
    explanation: 'מערכת הפוספוגנים (ATP-CP) מספקת אנרגיה מיידית בעצימות מקסימלית למשך עד כ-10 שניות ראשונות.'
  },
  {
    id: 'win_3',
    moduleId: 'wingate',
    topic: 'אנטומיה',
    title: 'מישורי תנועה',
    questionText: 'באיזה מישור תנועה מתבצע תרגיל הסקוואט (Squat)?',
    options: [
      { id: 'w3_1', text: 'במישור החזיתי (Frontal)', isCorrect: false },
      { id: 'w3_2', text: 'במישור החצי / סגיטלי (Sagittal)', isCorrect: true },
      { id: 'w3_3', text: 'במישור האופקי / טרנסברסלי (Transverse)', isCorrect: false },
      { id: 'w3_4', text: 'במישור האלכסוני בלבד', isCorrect: false }
    ],
    hint: 'תנועות כיפוף ופשיטה (קדימה-אחורה) מבוצעות במישור זה.',
    explanation: 'סקוואט מורכב מכפיפה ופשיטה במפרקי הירך, הברך והקרסול – תנועות המתרחשות במישור הסגיטלי.'
  },
  {
    id: 'win_4',
    moduleId: 'wingate',
    topic: 'אנטומיה',
    title: 'תפקידי השריר בתנועה',
    questionText: 'בתרגיל לחיצת חזה בשכיבה (Bench Press), איזה שריר פועל כאגוניסט הראשי במפרק הכתף?',
    options: [
      { id: 'w4_1', text: 'Triceps brachii (פושט המרפק)', isCorrect: false },
      { id: 'w4_2', text: 'Pectoralis major (חזה גדול)', isCorrect: true },
      { id: 'w4_3', text: 'Latissimus dorsi (רחב גבי)', isCorrect: false },
      { id: 'w4_4', text: 'Biceps brachii', isCorrect: false }
    ],
    hint: 'השריר הגדול של בית החזה המבצע קירוב אופקי בזרוע.',
    explanation: 'השריר האגוניסט הראשי במפרק הכתף בלחיצת חזה הוא Pectoralis major (מבצע קירוב אופקי).'
  }
];

// מנוע תרשימים ואיורים חזותיים מחוברות מזו ווינגייט
function IllustrationRenderer({ q }: { q: any }) {
  const text = `${q.topic || ''} ${q.title || ''} ${q.questionText || ''} ${q.explanation || ''}`.toLowerCase();

  if (text.includes('צירי') || text.includes('תוספי') || text.includes('sternum') || text.includes('axial')) {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
          🦴 תרשים שלד צירי מול שלד תוספי (מזו אקדמי):
        </span>
        <svg viewBox="0 0 340 95" style={{ width: '100%', height: 'auto', maxHeight: '105px' }}>
          <rect x="15" y="10" width="145" height="75" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <text x="87" y="30" fill="#a5b4fc" fontSize="11" fontWeight="bold" textAnchor="middle">שלד צירי (Axial)</text>
          <text x="87" y="48" fill="#f8fafc" fontSize="9" textAnchor="middle">גולגולת, עמוד שדרה,</text>
          <text x="87" y="62" fill="#f8fafc" fontSize="9" textAnchor="middle">עצם החזה (Sternum) וצלעות</text>
          <text x="87" y="76" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">הגנה על איברים חיוניים</text>

          <rect x="180" y="10" width="145" height="75" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          <text x="252" y="30" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">שלד תוספי (Appendicular)</text>
          <text x="252" y="48" fill="#f8fafc" fontSize="9" textAnchor="middle">עצמות הגפיים, עצם הבריח,</text>
          <text x="252" y="62" fill="#f8fafc" fontSize="9" textAnchor="middle">השכמות ועצמות האגן</text>
          <text x="252" y="76" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">הפקת תנועה ומנופים</text>
        </svg>
      </div>
    );
  }

  if (text.includes('צפופה') || text.includes('ספוגית') || text.includes('compact') || text.includes('spongy')) {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', display: 'block', marginBottom: '6px' }}>
          🔬 חתך עצם: מעטפת קומפקטית מול ליבה ספוגית (מזו אקדמי):
        </span>
        <svg viewBox="0 0 340 95" style={{ width: '100%', height: 'auto', maxHeight: '105px' }}>
          <rect x="25" y="15" width="290" height="65" rx="10" fill="#0f172a" stroke="#d97706" strokeWidth="2" />
          <rect x="25" y="15" width="290" height="15" fill="#b45309" />
          <text x="170" y="26" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">מעטפת קומפקטית (Compact) - מספקת חוזק ועמידות בדחיסה</text>
          <rect x="25" y="30" width="290" height="35" fill="#1e293b" strokeDasharray="3 3" />
          <text x="170" y="52" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">ליבה ספוגית (Spongy) - רשת חללים לבלימת זעזועים ומשקל קל</text>
          <rect x="25" y="65" width="290" height="15" fill="#b45309" />
          <text x="170" y="76" fill="#ffffff" fontSize="8" textAnchor="middle">פריאוסט (קרום העצם) עוטף מבחוץ עם כלי דם ועצבים</text>
        </svg>
      </div>
    );
  }

  return (
    <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1px solid #1e293b', marginBottom: '10px' }}>
      <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
        📊 מפתח עקרונות אנטומיים ופיזיולוגיים:
      </span>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center', fontSize: '9px' }}>
        <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #3b82f6' }}>
          <strong style={{ color: '#60a5fa', display: 'block' }}>רמות הארגון</strong>
          <span style={{ color: '#cbd5e1' }}>תא ← רקמה ← איבר ← מערכת</span>
        </div>
        <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #a855f7' }}>
          <strong style={{ color: '#c084fc', display: 'block' }}>4 רקמות היסוד</strong>
          <span style={{ color: '#cbd5e1' }}>אפיתל, חיבור, שריר, עצב</span>
        </div>
        <div style={{ backgroundColor: '#0f172a', padding: '6px', borderRadius: '6px', border: '1px solid #10b981' }}>
          <strong style={{ color: '#34d399', display: 'block' }}>חוק וולף</strong>
          <span style={{ color: '#cbd5e1' }}>עומס בונה עצם, חוסר מחליש</span>
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
  const [institution, setInstitution] = useState<'meso' | 'wingate'>('meso');

  const [quizList, setQuizList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [isDeepStudyOpen, setIsDeepStudyOpen] = useState(false);
  const [examMode, setExamMode] = useState<'practice' | 'real'>('practice');
  const [paceSecondsPerQ, setPaceSecondsPerQ] = useState(90);
  const [timeLeft, setTimeLeft] = useState(0);
  const [isExamCompleted, setIsExamCompleted] = useState(false);
  const [userAnswers, setUserAnswers] = useState<{ [qId: string]: string }>({});

  useEffect(() => {
    setMounted(true);
    resetAndShuffle('meso', 'practice', paceSecondsPerQ);
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

  const resetAndShuffle = (inst = institution, mode = examMode, paceSec = paceSecondsPerQ) => {
    stopSpeech();

    const source = inst === 'meso' ? MESO_ACADEMY_DATA : WINGATE_ACADEMY_DATA;

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
      setTimeLeft(randomized.length * paceSec);
    } else {
      setTimeLeft(0);
    }
  };

  const handleInstitutionSwitch = (newInst: 'meso' | 'wingate') => {
    setInstitution(newInst);
    resetAndShuffle(newInst, examMode, paceSecondsPerQ);
  };

  const handleModeChange = (newMode: 'practice' | 'real') => {
    setExamMode(newMode);
    resetAndShuffle(institution, newMode, paceSecondsPerQ);
  };

  const handlePaceChange = (sec: number) => {
    setPaceSecondsPerQ(sec);
    if (examMode === 'real') {
      resetAndShuffle(institution, 'real', sec);
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
        טוען את המערכת לשמואל...
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
      setIsDeepStudyOpen(false);
    } else {
      alert(`כל הכבוד שמואל!\nסיימת את תרגול ${institution === 'meso' ? 'מזו אקדמי' : 'וינגייט'} בהצלחה!\nצברת ${score} נקודות!`);
      resetAndShuffle(institution, 'practice');
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
              onClick={() => resetAndShuffle(institution, 'real', paceSecondsPerQ)}
              style={{ flex: 1, backgroundColor: institution === 'meso' ? '#0284c7' : '#f59e0b', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: '900', fontSize: '14px', cursor: 'pointer' }}
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

                <IllustrationRenderer q={q} />

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
                {institution === 'meso' ? '🏛️ מזו אקדמי (Meso)' : '🦁 מכללת וינגייט (Wingate)'}
              </h1>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>
                {institution === 'meso' ? 'מבוא לאנטומיה, רקמות, הומיאוסטזיס ושלד' : 'תכנון אימון, אנטומיה ופיזיולוגיה'}
              </span>
            </div>

            <button
              onClick={() => resetAndShuffle(institution, examMode, paceSecondsPerQ)}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
            >
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
                alignItems: 'center',
                boxShadow: institution === 'meso' ? '0 4px 14px rgba(2, 132, 199, 0.3)' : 'none'
              }}
            >
              <span>🏛️ מזו אקדמי</span>
              <span style={{ fontSize: '10px', opacity: 0.85 }}>מבוא, רקמות, שלד ({MESO_ACADEMY_DATA.length})</span>
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
              <span>🦁 מכללת וינגייט</span>
              <span style={{ fontSize: '10px', opacity: 0.85 }}>תכנון אימון, אנטומיה ({WINGATE_ACADEMY_DATA.length})</span>
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
        <IllustrationRenderer q={currentQ} />

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

        {/* שאלה והקראה */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '14px', padding: '12px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.4' }}>
              {currentQ.questionText}
            </p>

            <button
              onClick={handleSpeakFullQuestion}
              style={{ backgroundColor: isSpeaking ? '#ef4444' : (institution === 'meso' ? '#0284c7' : '#f59e0b'), color: '#ffffff', border: 'none', borderRadius: '12px', padding: '8px 12px', fontSize: '15px', fontWeight: 'bold', cursor: 'pointer', flexShrink: 0, display: 'flex', alignItems: 'center', gap: '4px' }}
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
                bgColor
