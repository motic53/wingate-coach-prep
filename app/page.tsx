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

// ==========================================
// 1. בנק שאלות מורחב: מזו אקדמי (Meso Academy)
// כולל שלילת מסיחים אישית ומדויקת לכל תשובה
// ==========================================
const MESO_FULL_DATA = [
  {
    id: 'm_1',
    topic: 'מבוא לאנטומיה',
    title: 'מקור המונח אנטומיה',
    diagram: 'intro',
    questionText: 'המילה "אנטומיה" מורכבת מהמילים Ana ו-Tome ביוונית. מה פירושן?',
    options: [
      { id: '1', text: 'מבנה + גוף', isCorrect: false, whyWrong: 'מבנה הגוף הוא מושא המחקר, אך המילים היווניות המקוריות אינן "מבנה" ו"גוף".' },
      { id: '2', text: 'מחדש + לחתוך (Ana = מחדש, Tome = לחתוך)', isCorrect: true },
      { id: '3', text: 'חקר + תנועה', isCorrect: false, whyWrong: 'חקר התנועה מוגדר כקינזיולוגיה/ביומכניקה, ולא אנטומיה.' },
      { id: '4', text: 'תא + רקמה', isCorrect: false, whyWrong: 'חקר תאים נקרא ציטולוגיה וחקר רקמות נקרא היסטולוגיה.' }
    ],
    hint: 'דיסקציה: חיתוך ובחינה מחדש של מבנה הגוף.',
    explanation: 'המילה אנטומיה מקורה ביוונית: Ana = מחדש, Tome = לחתוך (חקר מבנה איברי הגוף, מיקומם והקשר ביניהם).'
  },
  {
    id: 'm_2',
    topic: 'מבוא לאנטומיה',
    title: 'אנטומיה מול פיזיולוגיה',
    diagram: 'intro',
    questionText: 'מה ההבדל העקרוני בין אנטומיה לבין פיזיולוגיה?',
    options: [
      { id: '1', text: 'אנטומיה עוסקת בתפקוד, פיזיולוגיה במבנה', isCorrect: false, whyWrong: 'ההגדרות הפוכות: אנטומיה היא המבנה, ופיזיולוגיה היא התפקוד.' },
      { id: '2', text: 'אין הבדל, אלו שמות נרדפים לחלוטין', isCorrect: false, whyWrong: 'מדובר בשני תחומי מדע נפרדים המשלימים זה את זה.' },
      { id: '3', text: 'אנטומיה עוסקת במבנה ובמיקום; פיזיולוגיה עוסקת באופן הפעולה של המערכות', isCorrect: true },
      { id: '4', text: 'אנטומיה עוסקת רק בשרירים, פיזיולוגיה רק באיברים פנימיים', isCorrect: false, whyWrong: 'שני התחומים עוסקים בכל הרקמות והמערכות בגוף ללא חלוקה שכזו.' }
    ],
    hint: 'אנטומיה: מה יש ואיפה? פיזיולוגיה: איך זה עובד?',
    explanation: 'אנטומיה חוקרת את מבנה הגוף ומיקומו ("מה יש שם"); פיזיולוגיה חוקרת את אופן פעולת המערכות ("איך זה עובד").'
  },
  {
    id: 'm_3',
    topic: 'ארגון הגוף',
    title: 'רמות הארגון של הגוף החי',
    diagram: 'levels',
    questionText: 'מהו הסדר הנכון של רמות הארגון בגוף האדם, מהקטן לגדול?',
    options: [
      { id: '1', text: 'רקמה ← תא ← מערכת ← איבר', isCorrect: false, whyWrong: 'התא קטן מהרקמה, והאיבר קודם למערכת.' },
      { id: '2', text: 'תא ← רקמה ← איבר ← מערכת', isCorrect: true },
      { id: '3', text: 'תא ← איבר ← רקמה ← מערכת', isCorrect: false, whyWrong: 'רקמה מקדימה איבר, שכן איבר מורכב ממספר רקמות.' },
      { id: '4', text: 'איבר ← תא ← רקמה ← מערכת', isCorrect: false, whyWrong: 'האיבר אינו נקודת ההתחלה, אלא התא הבודד.' }
    ],
    hint: 'תאים יוצרים רקמה, רקמות בונות איבר, ואיברים חוברים למערכת.',
    explanation: 'הסדר ההיררכי לפי איור 1.2 בחוברת: תא (Cell) ← רקמה (Tissue) ← איבר (Organ) ← מערכת (System).'
  },
  {
    id: 'm_4',
    topic: 'התא ואברוניו',
    title: 'בית החרושת של החלבונים',
    diagram: 'cell',
    questionText: 'איזה אברון בתא מכונה "בית החרושת של החלבונים"?',
    options: [
      { id: '1', text: 'מיטוכונדריה', isCorrect: false, whyWrong: 'המיטוכונדריה היא תחנת הכוח של האנרגיה, אינה מייצרת את חלבוני הגוף.' },
      { id: '2', text: 'ציטופלזמה', isCorrect: false, whyWrong: 'הציטופלזמה היא הנוזל הצמיגי הממלא את התא, אינה אברון ייצור.' },
      { id: '3', text: 'ריבוזום (Ribosome)', isCorrect: true },
      { id: '4', text: 'גרעין התא (Nucleus)', isCorrect: false, whyWrong: 'הגרעין מכיל את המידע הגנטי (DNA) ומנהל את התא, אך אינו מרכיב את החלבונים.' }
    ],
    hint: 'האברון שעליו מורכבות חומצות האמינו לבניית חלבוני השריר.',
    explanation: 'הריבוזומים הם האברונים שבהם מורכבים חלבוני הגוף והשריר מחומצות אמינו.'
  },
  {
    id: 'm_5',
    topic: 'התא ואברוניו',
    title: 'תפקיד המיטוכונדריה',
    diagram: 'cell',
    questionText: 'מה התפקיד העיקרי של המיטוכונדריה בתא?',
    options: [
      { id: '1', text: 'אספקת אנרגיה לתא (אברון הנשימה התאית האירובית)', isCorrect: true },
      { id: '2', text: 'ייצור חלבונים מתמשך לשריר', isCorrect: false, whyWrong: 'ייצור חלבונים מתבצע בריבוזומים.' },
      { id: '3', text: 'הגנה מכנית על התא מבחוץ', isCorrect: false, whyWrong: 'ההגנה וההפרדה נעשות על ידי קרום התא.' },
      { id: '4', text: 'העברת אותות עצביים חשמליים', isCorrect: false, whyWrong: 'העברת פולסים חשמליים היא תפקידו של הנוירון ברקמת העצב.' }
    ],
    hint: 'תחנת הכוח של התא – מפיקה ATP בנוכחות חמצן.',
    explanation: 'המיטוכונדריה היא אברון הנשימה של התא, שבו מופקת האנרגיה האירובית (ATP) הדרושה למאמץ ממושך.'
  },
  {
    id: 'm_6',
    topic: 'הומיאוסטזיס',
    title: 'שמירה על סביבה פנימית',
    diagram: 'intro',
    questionText: 'הומיאוסטזיס (Homeostasis) מוגדר כ:',
    options: [
      { id: '1', text: 'תהליך התחלקות והתרבות תאי הגוף', isCorrect: false, whyWrong: 'חלוקת תאים מוגדרת כמיטוזה/מיוזה.' },
      { id: '2', text: 'שמירה על מצב וסביבה פנימית קבועה ויציבה לתפקוד תקין של הגוף', isCorrect: true },
      { id: '3', text: 'סוג מיוחד של רקמת חיבור צפופה', isCorrect: false, whyWrong: 'הומיאוסטזיס הוא מנגנון ויסות ביולוגי, לא רקמה.' },
      { id: '4', text: 'התכווצות שריר רצונית בזמן אימון', isCorrect: false, whyWrong: 'התכווצות שריר היא תפקוד מכני המערער זמנית את ההומיאוסטזיס.' }
    ],
    hint: 'איזון פנימי פעיל (טמפרטורה קבועה, רמת חומציות, לחץ דם).',
    explanation: 'הומיאוסטזיס הוא כושר הגוף החי לפעול באופן אקטיבי לשמירה על סביבה פנימית יציבה (חום, נוזלים, מלחים).'
  },
  {
    id: 'm_7',
    topic: 'רקמת אפיתל',
    title: 'הזנת האפיתל והיעדר כלי דם',
    diagram: 'artery',
    questionText: 'כיצד מקבלת רקמת האפיתל חומרי מזון וחמצן?',
    options: [
      { id: '1', text: 'מרשת כלי דם עשירה העוברת בתוכה', isCorrect: false, whyWrong: 'רקמת האפיתל היא Avascular (חסרת כלי דם לחלוטין).' },
      { id: '2', text: 'ישירות מספיגת חמצן מהאוויר החיצוני', isCorrect: false, whyWrong: 'רק תאים שטחיים בודדים באים במגע עם אוויר; רוב האפיתל בגוף מרפד איברים פנימיים.' },
      { id: '3', text: 'מרקמת החיבור הצמודה אליה בדיפוזיה, כי היא חסרת כלי דם', isCorrect: true },
      { id: '4', text: 'מנוזל מערכת העצבים', isCorrect: false, whyWrong: 'מערכת העצבים אינה מזינה רקמות אפיתל.' }
    ],
    hint: 'האפיתל "יושב" על רקמת חיבור שמזינה אותו בדיפוזיה.',
    explanation: 'האפיתל חסר כלי דם משלו, וניזון בחילוף חומרים (דיפוזיה) מרקמת החיבור העשירה בכלי דם הצמודה אליו.'
  },
  {
    id: 'm_8',
    topic: 'רקמת אפיתל',
    title: 'אנדותל כלי הדם וטרשת',
    diagram: 'artery',
    questionText: 'כיצד נקרא האפיתל המרפד את פנים כלי הדם, ומה משמעות הפגיעה בו?',
    options: [
      { id: '1', text: 'פריאוסט; גורם להחלשת קליפת העצם', isCorrect: false, whyWrong: 'פריאוסט הוא קרום העצם החיצוני, לא ציפוי כלי דם.' },
      { id: '2', text: 'אנדותל (Endothelium); פגיעה בו עלולה להוביל להצטברות רובד טרשתי (פלאק)', isCorrect: true },
      { id: '3', text: 'אפידרמיס; גורם לקילוף ויובש בעור', isCorrect: false, whyWrong: 'אפידרמיס הוא שכבת העור העליונה.' },
      { id: '4', text: 'מזותל; גורם לפגיעה בסחוס המפרקי', isCorrect: false, whyWrong: 'מזותל מרפד את חללי הגוף הסגורים (כמו הצפק והאדר).' }
    ],
    hint: 'איור 1.6: הציפוי החלק של העורק, שפגיעה בו מאפשרת הצטברות שומנים ופלאק.',
    explanation: 'האנדותל מצפה את פנים כלי הדם והלימפה. עישון ותזונה לקויה פוגעים בו ומאפשרים שקיעת רובד שומני (טרשת עורקים).'
  },
  {
    id: 'm_9',
    topic: 'רקמת חיבור',
    title: 'סיווג סיבי רקמת חיבור',
    diagram: 'bone',
    questionText: 'איזה סוג סיבים ברקמת חיבור אינו חזק אך בעל יכולת להימתח ולחזור לאורכו המקורי?',
    options: [
      { id: '1', text: 'סיבים קולגניים', isCorrect: false, whyWrong: 'סיבי קולגן חזקים וקשיחים מאוד וכמעט אינם ניתנים למתיחה.' },
      { id: '2', text: 'סיבים רטיקולריים', isCorrect: false, whyWrong: 'סיבים רטיקולריים הם סיבי קולגן עדינים היוצרים רשת תומכת בלבד.' },
      { id: '3', text: 'סיבים אלסטיים (Elastic fibers)', isCorrect: true },
      { id: '4', text: 'סיבים שריריים', isCorrect: false, whyWrong: 'סיבי שריר הם תאי כיווץ אקטיביים ולא סיבי חומר בין-תאי ברקמת חיבור.' }
    ],
    hint: 'עשויים מהחלבון אלסטין ופועלים בדיוק כמו גומייה.',
    explanation: 'סיבים אלסטיים מקנים לרקמה גמישות ויכולת מתיחה וחזרה (טווח אלסטי) ללא עיוות פלסטי.'
  },
  {
    id: 'm_10',
    topic: 'רקמת חיבור',
    title: 'סיווג גיד ורצועה',
    diagram: 'joint',
    questionText: 'גיד (Tendon) ורצועה (Ligament) שייכים לאיזו קבוצה של רקמת חיבור?',
    options: [
      { id: '1', text: 'רקמת חיבור אמיתית (סיבית צפופה)', isCorrect: true },
      { id: '2', text: 'רקמת חיבור תומכת (שלדית)', isCorrect: false, whyWrong: 'רקמת חיבור תומכת כוללת אך ורק עצם וסחוס.' },
      { id: '3', text: 'רקמת חיבור מיוחדת', isCorrect: false, whyWrong: 'רקמת חיבור מיוחדת כוללת רקמת שומן ודם.' },
      { id: '4', text: 'רקמת אפיתל', isCorrect: false, whyWrong: 'אפיתל הוא רקמת ציור וכיסוי, בעוד גידים מחברים שריר לעצם.' }
    ],
    hint: 'רקמות חיבור: אמיתית (גידים/רצועות), תומכת (עצם/סחוס), מיוחדת (שומן/דם).',
    explanation: 'גידים ורצועות שייכים לרקמת חיבור אמיתית (סיבית מקבילה) המיועדת להעברת כוחות משיכה חזקים.'
  },
  {
    id: 'm_11',
    topic: 'רקמת שריר',
    title: 'מאפייני שלושת סוגי השריר',
    diagram: 'muscles',
    questionText: 'איזה סוג שריר מתאפיין בסיבים גליליים משורטטים, מהירות כיווץ גבוהה ושליטה רצונית מלאה?',
    options: [
      { id: '1', text: 'שריר חלק', isCorrect: false, whyWrong: 'שריר חלק אינו משורטט, כיווצו איטי וממושך והוא אינו רצוני.' },
      { id: '2', text: 'שריר שלד / משורטט (Skeletal muscle)', isCorrect: true },
      { id: '3', text: 'שריר הלב', isCorrect: false, whyWrong: 'שריר הלב משורטט אך אינו רצוני והסיבים שלו מסתעפים.' },
      { id: '4', text: 'שריר כלי הדם', isCorrect: false, whyWrong: 'שרירי כלי הדם הם שרירים חלקים ואינם רצוניים.' }
    ],
    hint: 'השריר היחיד שהמדריך מאמן ומפעיל באופן רצוני בחדר הכושר.',
    explanation: 'שריר השלד הוא השריר המשורטט הרצוני היחיד המחובר לעצמות ויוצר תנועה במפרקים.'
  },
  {
    id: 'm_12',
    topic: 'מערכת השלד',
    title: 'השלד הצירי מול השלד התוספי',
    diagram: 'skeleton',
    questionText: 'איזו מהעצמות הבאות שייכת לשלד הצירי (Axial skeleton)?',
    options: [
      { id: '1', text: 'עצם הבריח (Clavicula)', isCorrect: false, whyWrong: 'עצם הבריח שייכת לחגורת הכתף שהיא חלק מהשלד התוספי.' },
      { id: '2', text: 'עצם החזה (Sternum)', isCorrect: true },
      { id: '3', text: 'השכמה (Scapula)', isCorrect: false, whyWrong: 'השכמה שייכת לשלד התוספי (חגורת הגפה העליונה).' },
      { id: '4', text: 'עצמות האגן (Pelvis)', isCorrect: false, whyWrong: 'עצמות האגן הן חגורת הגפה התחתונה ושייכות לשלד התוספי.' }
    ],
    hint: 'איור 2.1: השלד הצירי כולל גולגולת, עמוד שדרה, צלעות ועצם החזה (סטרנום).',
    explanation: 'עצם החזה, הגולגולת, עמוד השדרה והצלעות מרכיבים את השלד הצירי (הגנה על איברים ותמיכת הציר).'
  },
  {
    id: 'm_13',
    topic: 'תפקידי העצם',
    title: 'מה אינו תפקיד של רקמת העצם?',
    diagram: 'bone',
    questionText: 'איזה מהבאים אינו נמנה עם תפקידי מערכת השלד?',
    options: [
      { id: '1', text: 'הגנה על המוח, הלב והריאות', isCorrect: false, whyWrong: 'זהו תפקיד מרכזי של עצמות הגולגולת וכלוב בית החזה.' },
      { id: '2', text: 'מאגר מינרלים וייצור תאי דם במח העצם', isCorrect: false, whyWrong: 'העצם אוגרת סידן ומייצרת דם (Hematopoiesis).' },
      { id: '3', text: 'התכווצות אקטיבית ליצירת כוח תנועה', isCorrect: true },
      { id: '4', text: 'בסיס מכני ומנוף לתנועה', isCorrect: false, whyWrong: 'העצמות משמשות כמנופים פסיביים שעליהם פועלים השרירים.' }
    ],
    hint: 'התכווצות ויצירת כוח שייכים באופן בלעדי לרקמת השריר.',
    explanation: 'העצם היא מנוף קשיח פסיבי. התכווצות אקטיבית ליצירת כוח נעשית אך ורק על ידי תאי השריר.'
  },
  {
    id: 'm_14',
    topic: 'מבנה העצם',
    title: 'עצם צפופה מול עצם ספוגית',
    diagram: 'bone',
    questionText: 'מה מאפיין עצם צפופה (Compact bone) לפי איור 2.3 בחוברת?',
    options: [
      { id: '1', text: 'מכילה חללים רבים ומשמשת בעיקר כליבה קלת משקל', isCorrect: false, whyWrong: 'זהו המאפיין של העצם הספוגית (Spongy bone).' },
      { id: '2', text: 'נמצאת אך ורק בחוליות עמוד השדרה', isCorrect: false, whyWrong: 'עצם קומפקטית מהווה את המעטפת של כל העצמות בגוף.' },
      { id: '3', text: 'נמצאת בעיקר במעטפת החיצונית ומספקת חוזק ועמידות בדחיסה', isCorrect: true },
      { id: '4', text: 'בנויה מסחוס היאליני גמיש', isCorrect: false, whyWrong: 'עצם צפופה היא רקמת עצם מינרלית קשה וערוכה באוסטאונים, לא סחוס.' }
    ],
    hint: 'השכבה החיצונית הקשה המגנה על העצם ומעניקה לה חוזק מכני.',
    explanation: 'עצם צפופה בנויה אוסטאונים דחוסים במעטפת החיצונית ומספקת עמידות מכנית וכוח נשיאה.'
  },
  {
    id: 'm_15',
    topic: 'סוגי עצמות',
    title: 'סיווג הפיקה והחוליה',
    diagram: 'bone',
    questionText: 'הפיקה (Patella) וחוליה בעמוד השדרה מסווגות בהתאמה כעצם:',
    options: [
      { id: '1', text: 'ארוכה; שטוחה', isCorrect: false, whyWrong: 'עצם ארוכה היא כמו הירך; עצם שטוחה היא כמו הגולגולת.' },
      { id: '2', text: 'שטוחה; קצרה', isCorrect: false, whyWrong: 'עצמות קצרות הן שורש כף היד/רגל.' },
      { id: '3', text: 'ססמואידית (שומשומית); בלתי-סדירה (Irregular)', isCorrect: true },
      { id: '4', text: 'קצרה; ססמואידית', isCorrect: false, whyWrong: 'הסדר וההגדרות שגויים לחלוטין.' }
    ],
    hint: 'איור 2.2: הפיקה גדלה בתוך גיד, ולחוליה יש בליטות וזיזים מגוונים.',
    explanation: 'הפיקה מתפתחת בתוך גיד הארבע-ראשי (ססמואידית); חוליה היא בעלת צורה מורכבת וזיזים (בלתי-סדירה).'
  },
  {
    id: 'm_16',
    topic: 'תאי העצם',
    title: 'שלושת התאים המנהלים את העצם',
    diagram: 'bone',
    questionText: 'איזה תא אחראי על פירוק והמסה של רקמת עצם בתהליך השחלוף (Remodeling)?',
    options: [
      { id: '1', text: 'אוסטאוציט (Osteocyte)', isCorrect: false, whyWrong: 'אוסטאוציט הוא תא עצם בוגר המשמש כחיישן עומס ומשמר רקמה.' },
      { id: '2', text: 'אוסטאובלסט (Osteoblast)', isCorrect: false, whyWrong: 'אוסטאובלסט הוא התא הבונה עצם (B = Build).' },
      { id: '3', text: 'אוסטאוקלסט (Osteoclast)', isCorrect: true },
      { id: '4', text: 'כונדרוציט', isCorrect: false, whyWrong: 'כונדרוציט הוא תא סחוס ואינו קשור לשחלוף העצם.' }
    ],
    hint: 'זכור: B בונה (OsteoBlast), C קורע ומפרק (OsteoClast).',
    explanation: 'האוסטאוקלסט מפריש חומצות ואנזימים המפרקים את המינרלים והקולגן בעצם לצורך שחלוף והתחדשות.'
  },
  {
    id: 'm_17',
    topic: 'עומס והסתגלות',
    title: 'חוק וולף בעבודת המאמן',
    diagram: 'bone',
    questionText: 'מה קובע חוק וולף (Wolff\'s Law) בנוגע לעצמות מתאמנים?',
    options: [
      { id: '1', text: 'מסת העצם קבועה מראש מגיל 20 ואינה מגיבה עוד לאימון', isCorrect: false, whyWrong: 'העצם היא רקמה דינמית המשתנה לאורך כל החיים בתגובה לגירויים.' },
      { id: '2', text: 'רק תזונה וסידן משפיעים על חוזק העצם', isCorrect: false, whyWrong: 'תזונה היא תנאי הכרחי, אך ללא עומס מכני לא יתרחש גירוי בנייה.' },
      { id: '3', text: 'עצם מסתגלת לעומס: עומס מוגבר מחזק ומעלה צפיפות, וירידה בעומס מחלישה אותה', isCorrect: true },
      { id: '4', text: 'עומס משקולות בגיל מבוגר גורם תמיד לשברים ולהיחלשות', isCorrect: false, whyWrong: 'עומס כוח מבוקר הוא הטיפול והמניעה הטובים ביותר לאוסטאופורוזיס.' }
    ],
    hint: 'עצם נבנית ומתחזקת היכן שמופעל עליה לחץ מכני, ונחלשת בחוסר פעילות.',
    explanation: 'לפי חוק וולף, עומס מכני חוזר ומבוקר מגרה את האוסטאובלסטים ומעלה את צפיפות העצם; חוסר תנועה מוביל לפירוק.'
  },
  {
    id: 'm_18',
    topic: 'סחוסים',
    title: 'סוגי סחוס ומאפייניהם',
    diagram: 'joint',
    questionText: 'איזה סוג סחוס הוא השכיח ביותר, דק וחלק, ומרפד את קצות העצמות במפרקים תנועתיים?',
    options: [
      { id: '1', text: 'סחוס היאליני (Hyaline cartilage)', isCorrect: true },
      { id: '2', text: 'סחוס סיבי / פיברוטי', isCorrect: false, whyWrong: 'סחוס סיבי עבה ועמיד בדחיסה, ונמצא בדיסקים הבין-חולייתיים ובמניסקוס.' },
      { id: '3', text: 'סחוס אלסטי', isCorrect: false, whyWrong: 'סחוס אלסטי גמיש ומרכיב את אפרכסת האוזן ומכסה הגרון.' },
      { id: '4', text: 'סחוס רטיקולרי', isCorrect: false, whyWrong: 'אין סיווג של סחוס רטיקולרי (רטיקולריים הם סיבי רקמת חיבור).' }
    ],
    hint: 'דק, רטוב וחלק מאוד – בולם זעזועים ומפחית חיכוך במפרק הסינוביאלי.',
    explanation: 'סחוס היאליני הוא הנפוץ ביותר בשלד, מצפה קצות עצמות במפרקים תנועתיים ומונע חיכוך ישיר.'
  },
  {
    id: 'm_19',
    topic: 'סוגי מפרקים',
    title: 'יציבות מול תנועתיות במפרקים',
    diagram: 'joint',
    questionText: 'איזה סוג מפרק הוא היציב ביותר בגוף האדם (ללא תנועה כלל)?',
    options: [
      { id: '1', text: 'מפרק סינוביאלי', isCorrect: false, whyWrong: 'מפרק סינוביאלי הוא התנועתי ביותר בגוף, ולכן המבנה שלו הכי פחות יציב.' },
      { id: '2', text: 'מפרק סחוסי', isCorrect: false, whyWrong: 'מפרק סחוסי מאפשר תנועה מינימלית (כמו חיבור הצלעות לסטרנום).' },
      { id: '3', text: 'מפרק סיבי (Fibrous joint)', isCorrect: true },
      { id: '4', text: 'מפרק רב-צירי', isCorrect: false, whyWrong: 'מפרק רב-צירי (כמו הכתף) מאפשר תנועה בכל המישורים ויציבותו נמוכה.' }
    ],
    hint: 'ככל שמפרק פחות תנועתי – כך יציבותו המבנית גבוהה יותר (למשל תפרי הגולגולת).',
    explanation: 'מפרק סיבי מחבר עצמות ברקמה פיברוטית קשיחה ללא תנועה (כמו Suture בגולגולת), ולכן הוא היציב ביותר.'
  },
  {
    id: 'm_20',
    topic: 'יישום בחדר כושר',
    title: 'החלמת סחוס מול שריר',
    diagram: 'joint',
    questionText: 'לסחוס אין אספקת דם ישירה. מה המשמעות המעשית של עובדה זו לגבי החלמה מפציעת סחוס (כגון קרע במניסקוס)?',
    options: [
      { id: '1', text: 'הסחוס מחלים מהר מאוד בגלל היעדר דלקות דם', isCorrect: false, whyWrong: 'היעדר דם מונע הגעת חומרי בניין וחמצן החיוניים להחלמה מהירה.' },
      { id: '2', text: 'ההחלמה איטית מאוד ולעיתים חלקית בלבד, כיוון שההזנה מתבצעת בדיפוזיה מוגבלת מהנוזל שסביבו', isCorrect: true },
      { id: '3', text: 'סחוס מתחדש מיידית על ידי מתיחות סטטיות', isCorrect: false, whyWrong: 'מתיחות אינן מייצרות אספקת דם או תאי סחוס חדשים.' },
      { id: '4', text: 'אין שום הבדל בין קצב החלמת סחוס לקצב החלמת שריר', isCorrect: false, whyWrong: 'שריר עשיר בנימי דם ומחלים בשבועות, בעוד סחוס מחלים בחודשים רבים או כלל לא.' }
    ],
    hint: 'רקמות ללא כלי דם ישירים תלויות בדיפוזיה ומחלימות בקצב איטי במיוחד.',
    explanation: 'הסחוס ניזון בדיפוזיה בלבד מהנוזל הסינוביאלי. לכן פציעות סחוס (מניסקוס, סחוס מפרקי) מחלימות לאט מאוד ולעיתים מצריכות ניתוח.'
  }
];

// ==========================================
// 2. בנק שאלות מכללת וינגייט (Wingate Academy)
// ==========================================
const WINGATE_FULL_DATA = [
  {
    id: 'w_1',
    topic: 'תכנון אימון',
    title: 'עקרון עומס יסף',
    diagram: 'muscles',
    questionText: 'מהו עקרון עומס יסף (Overload Principle) באימון התנגדות?',
    options: [
      { id: '1', text: 'אימון של אותה קבוצת שרירים בכל יום ברציפות ללא מנוחה', isCorrect: false, whyWrong: 'אימון יומיומי ללא התאוששות מוביל לאימון יתר (Overtraining) ולפציעות.' },
      { id: '2', text: 'חשיפת מערכות הגוף לעומס הגבוה מזה שהן מורגלות אליו כדי לעורר הסתגלות', isCorrect: true },
      { id: '3', text: 'ביצוע של לפחות 25 חזרות בכל סט בכל התרגילים', isCorrect: false, whyWrong: 'טווח חזרות של 25 מפתח סבולת שריר, אך אינו ההגדרה של עומס יסף.' },
      { id: '4', text: 'הרמת משקל מקסימלי 1RM בכל אימון', isCorrect: false, whyWrong: 'הרמת 1RM קבועה מעמיסה יתר על המידה על מערכת העצבים והמפרקים ואינה נדרשת.' }
    ],
    hint: 'כדי שהשריר יתפתח, יש לחשוף אותו לגירוי מעבר ליכולתו המוכרת כיום.',
    explanation: 'עקרון עומס יסף קובע שכדי לגרום לשיפור בכוח או במסת השריר, יש להעמיס על המערכת מעבר ליכולת הנוכחית שלה.'
  },
  {
    id: 'w_2',
    topic: 'פיזיולוגיה של המאמץ',
    title: 'מערכות אנרגיה במאמץ מרבי',
    diagram: 'cell',
    questionText: 'איזו מערכת אנרגיה היא הדומיננטית במאמץ מרבי הנמשך עד 10 שניות (כגון ספרינט 60 מטר או הרמת משקל כבד)?',
    options: [
      { id: '1', text: 'המערכת האירובית', isCorrect: false, whyWrong: 'המערכת האירובית מספקת אנרגיה במאמצים ארוכים וקצב הפקת האנרגיה שלה איטי.' },
      { id: '2', text: 'מערכת ה-ATP-CP (פוספוגנית אנאירובית)', isCorrect: true },
      { id: '3', text: 'גליקוליזה אירובית', isCorrect: false, whyWrong: 'גליקוליזה אירובית פועלת בנוכחות חמצן ומתאימה למאמצים תת-מרביים ממושכים.' },
      { id: '4', text: 'חמצון שומנים (בטא-אוקסידציה)', isCorrect: false, whyWrong: 'חמצון שומנים הוא מסלול איטי מאוד המשרת פעילות בעצימות נמוכה (מנוחה, הליכה).' }
    ],
    hint: 'קריאטין פוספט ואנרגיה זמינה מיידית ללא צורך בחמצן.',
    explanation: 'מערכת הפוספוגנים (ATP-CP) מספקת אנרגיה מיידית בעצימות מקסימלית למשך עד כ-10 שניות ראשונות.'
  },
  {
    id: 'w_3',
    topic: 'אנטומיה וניתוח תנועה',
    title: 'מישורי תנועה בסקוואט',
    diagram: 'skeleton',
    questionText: 'באיזה מישור תנועה מתבצע תרגיל הסקוואט (Squat)?',
    options: [
      { id: '1', text: 'במישור החזיתי (Frontal)', isCorrect: false, whyWrong: 'במישור החזיתי מתבצעות תנועות הרחקה וקירוב לצדדים (כמו הרחקת כתפיים).' },
      { id: '2', text: 'במישור החצי / סגיטלי (Sagittal)', isCorrect: true },
      { id: '3', text: 'במישור האופקי / טרנסברסלי (Transverse)', isCorrect: false, whyWrong: 'במישור האופקי מתבצעות רוטציות וקירוב/הרחקה אופקית (כמו פרפר לחזה).' },
      { id: '4', text: 'במישור האלכסוני בלבד', isCorrect: false, whyWrong: 'הסקוואט מתבצע בציר ישר קדימה-אחורה ולא במישור אלכסוני.' }
    ],
    hint: 'תנועות כיפוף ופשיטה (קדימה-אחורה) מבוצעות במישור זה.',
    explanation: 'סקוואט מורכב מכפיפה ופשיטה במפרקי הירך, הברך והקרסול – תנועות המתרחשות במישור הסגיטלי.'
  },
  {
    id: 'w_4',
    topic: 'אנטומיה של השריר',
    title: 'תפקידי השריר בלחיצת חזה',
    diagram: 'muscles',
    questionText: 'בתרגיל לחיצת חזה בשכיבה (Bench Press), איזה שריר פועל כאגוניסט הראשי במפרק הכתף?',
    options: [
      { id: '1', text: 'Triceps brachii', isCorrect: false, whyWrong: 'התלת-ראשי הוא האגוניסט במפרק המרפק (פשיטת מרפק), לא במפרק הכתף.' },
      { id: '2', text: 'Pectoralis major (חזה גדול)', isCorrect: true },
      { id: '3', text: 'Latissimus dorsi (רחב גבי)', isCorrect: false, whyWrong: 'הרחב גבי הוא אנטגוניסט לפעולת הקירוב האופקי בלחיצת חזה.' },
      { id: '4', text: 'Biceps brachii', isCorrect: false, whyWrong: 'הדו-ראשי פועל כמכופף מרפק ומייצב קל, ואינו אגוניסט בלחיצה.' }
    ],
    hint: 'השריר הגדול של בית החזה המבצע קירוב אופקי בזרוע.',
    explanation: 'השריר האגוניסט הראשי במפרק הכתף בלחיצת חזה הוא Pectoralis major (מבצע קירוב אופקי).'
  }
];

// ==========================================
// מנוע תרשימים גרפיים (SVG) מעמיק ומפורט
// ==========================================
function VisualDiagramRenderer({ diagram }: { diagram?: string }) {
  const d = diagram || 'cell';

  // תרשים שלד צירי מול תוספי
  if (d === 'skeleton') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #0284c7', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
          🦴 תרשים חלוקת השלד: צירי (סגול) מול תוספי (ירוק):
        </span>
        <svg viewBox="0 0 340 90" style={{ width: '100%', height: 'auto', maxHeight: '100px' }}>
          <rect x="15" y="8" width="145" height="74" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <text x="87" y="28" fill="#a5b4fc" fontSize="11" fontWeight="bold" textAnchor="middle">שלד צירי (Axial)</text>
          <text x="87" y="46" fill="#f8fafc" fontSize="8.5" textAnchor="middle">גולגולת, עמוד שדרה,</text>
          <text x="87" y="58" fill="#f8fafc" fontSize="8.5" textAnchor="middle">עצם החזה (Sternum) וצלעות</text>
          <text x="87" y="72" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">תפקיד: הגנה על איברים חיוניים</text>

          <rect x="180" y="8" width="145" height="74" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          <text x="252" y="28" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">שלד תוספי (Appendicular)</text>
          <text x="252" y="46" fill="#f8fafc" fontSize="8.5" textAnchor="middle">עצמות הגפיים, עצם הבריח,</text>
          <text x="252" y="58" fill="#f8fafc" fontSize="8.5" textAnchor="middle">השכמות ועצמות האגן</text>
          <text x="252" y="72" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">תפקיד: הפקת תנועה ומנופים</text>
        </svg>
      </div>
    );
  }

  // תרשים מבנה עצם (קומפקטית מול ספוגית)
  if (d === 'bone') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #d97706', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', display: 'block', marginBottom: '6px' }}>
          🔬 חתך עצם: מעטפת קומפקטית מול ליבה ספוגית:
        </span>
        <svg viewBox="0 0 340 90" style={{ width: '100%', height: 'auto', maxHeight: '100px' }}>
          <rect x="25" y="10" width="290" height="70" rx="8" fill="#0f172a" stroke="#d97706" strokeWidth="2" />
          <rect x="25" y="10" width="290" height="16" fill="#b45309" />
          <text x="170" y="22" fill="#ffffff" fontSize="8.5" fontWeight="bold" textAnchor="middle">מעטפת קומפקטית (Compact) - מספקת חוזק ועמידות בדחיסה</text>
          <rect x="25" y="26" width="290" height="38" fill="#1e293b" strokeDasharray="3 3" />
          <text x="170" y="48" fill="#fde68a" fontSize="9.5" fontWeight="bold" textAnchor="middle">ליבה ספוגית (Spongy) - רשת חללים לבלימת זעזועים ומשקל קל</text>
          <rect x="25" y="64" width="290" height="16" fill="#b45309" />
          <text x="170" y="76" fill="#ffffff" fontSize="8" textAnchor="middle">פריאוסט (קרום העצם) עוטף מבחוץ עם כלי דם ועצבים</text>
        </svg>
      </div>
    );
  }

  // תרשים עורק ואנדותל
  if (d === 'artery') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #ef4444', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#f87171', display: 'block', marginBottom: '6px' }}>
          🩸 ציפוי האנדותל בכלי הדם וטרשת עורקים:
        </span>
        <svg viewBox="0 0 340 85" style={{ width: '100%', height: 'auto', maxHeight: '95px' }}>
          <rect x="20" y="12" width="140" height="60" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="90" y="30" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">עורק תקין</text>
          <text x="90" y="48" fill="#cbd5e1" fontSize="8" textAnchor="middle">אנדותל שלם וחלק</text>
          <text x="90" y="62" fill="#6ee7b7" fontSize="8" textAnchor="middle">זרימת דם חופשית</text>

          <rect x="180" y="12" width="140" height="60" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
          <text x="250" y="30" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">טרשת עורקים</text>
          <text x="250" y="48" fill="#fca5a5" fontSize="8" textAnchor="middle">פגיעה באנדותל</text>
          <text x="250" y="62" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">הצטברות רובד שומני (פלאק)</text>
        </svg>
      </div>
    );
  }

  // תרשים מפרק וסחוסים
  if (d === 'joint') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #0284c7', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
          🔍 מפרק סינוביאלי, קפסולה וסחוסים:
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center', fontSize: '9px' }}>
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
      </div>
    );
  }

  // תרשים רקמת שריר
  if (d === 'muscles') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #a855f7', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#c084fc', display: 'block', marginBottom: '6px' }}>
          💪 השוואת שלושת סוגי השריר:
        </span>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '6px', textAlign: 'center', fontSize: '9px' }}>
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
      </div>
    );
  }

  // תרשים ברירת מחדל: התא ואברוניו
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

                <VisualDiagramRenderer diagram={q.diagram} />

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
        <VisualDiagramRenderer diagram={currentQ?.diagram} />

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

      {/* אזור פעולה תחתון */}
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

      {/* חלון מודאל לימודי מעמיק עם שלילת מסיחים אישית ומדויקת */}
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

            <VisualDiagramRenderer diagram={currentQ?.diagram} />

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
