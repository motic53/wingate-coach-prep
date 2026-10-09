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
          <p style={{ color: '#94a3b8', fontSize: '12px' }}>הנתונים אותחלו. לחץ לרענון מהיר:</p>
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
    diagramType: 'anatomy_intro',
    imageSrc: '/images/anatomy_intro.png',
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
    diagramType: 'anatomy_intro',
    imageSrc: '/images/anatomy_intro.png',
    questionText: 'מה ההבדל העקרוני בין אנטומיה לבין פיזיולוגיה?',
    options: [
      { id: '1', text: 'אנטומיה עוסקת בתפקוד, פיזיולוגיה במבנה', isCorrect: false, whyWrong: 'ההגדרות הפוכות: אנטומיה היא המבנה והמיקום, בעוד פיזיולוגיה עוסקת בתפקוד המערכות.' },
      { id: '2', text: 'אין הבדל, אלו שמות נרדפים לחלוטין', isCorrect: false, whyWrong: 'מדובר בשני תחומי מדע נפרדים המשלימים זה את זה.' },
      { id: '3', text: 'אנטומיה עוסקת במבנה ובמיקום; פיזיולוגיה עוסקת באופן הפעולה של המערכות', isCorrect: true },
      { id: '4', text: 'אנטומיה עוסקת רק בשרירים, פיזיולוגיה רק באיברים פנימיים', isCorrect: false, whyWrong: 'שני התחומים עוסקים בכל רקמות הגוף ומערכותיו.' }
    ],
    hint: 'אנטומיה: מה יש ואיפה? פיזיולוגיה: איך זה עובד?',
    explanation: 'אנטומיה חוקרת את מבנה הגוף ומיקומו ("מה יש שם"); פיזיולוגיה חוקרת את אופן פעולת המערכות ("איך זה עובד").'
  },
  {
    id: 'm_3',
    topic: 'ארגון הגוף',
    title: 'רמות הארגון של הגוף החי',
    diagramType: 'levels',
    imageSrc: '/images/levels.png',
    questionText: 'מהו הסדר הנכון של רמות הארגון בגוף האדם, מהקטן לגדול?',
    options: [
      { id: '1', text: 'רקמה ← תא ← מערכת ← איבר', isCorrect: false, whyWrong: 'התא הוא היחידה הקטנה הבונה את הרקמה, והאיבר מקדים את המערכת.' },
      { id: '2', text: 'תא ← רקמה ← איבר ← מערכת', isCorrect: true },
      { id: '3', text: 'תא ← איבר ← רקמה ← מערכת', isCorrect: false, whyWrong: 'רקמה מקדימה איבר, שכן איבר מורכב ממספר רקמות שונות.' },
      { id: '4', text: 'איבר ← תא ← רקמה ← מערכת', isCorrect: false, whyWrong: 'האיבר אינו נקודת ההתחלה, אלא התא הבודד.' }
    ],
    hint: 'איור 1.2: תאים יוצרים רקמה, רקמות בונות איבר, ואיברים חוברים למערכת.',
    explanation: 'הסדר ההיררכי לפי חוברת מזו: תא (Cell) ← רקמה (Tissue) ← איבר (Organ) ← מערכת (System).'
  },
  {
    id: 'm_4',
    topic: 'התא ואברוניו',
    title: 'בית החרושת של החלבונים',
    diagramType: 'cell',
    imageSrc: '/images/cell.png',
    questionText: 'איזה אברון בתא מכונה "בית החרושת של החלבונים"?',
    options: [
      { id: '1', text: 'מיטוכונדריה', isCorrect: false, whyWrong: 'המיטוכונדריה היא תחנת הכוח של האנרגיה (ATP), אינה מייצרת את החלבונים.' },
      { id: '2', text: 'ציטופלזמה', isCorrect: false, whyWrong: 'הציטופלזמה היא הנוזל התוך-תאי הממלא את גוף התא.' },
      { id: '3', text: 'ריבוזום (Ribosome)', isCorrect: true },
      { id: '4', text: 'גרעין התא (Nucleus)', isCorrect: false, whyWrong: 'הגרעין מכיל את ה-DNA ומנהל את התא, אך החלבונים מורכבים בריבוזומים.' }
    ],
    hint: 'האברון שעליו מורכבות חומצות האמינו לבניית חלבוני השריר.',
    explanation: 'הריבוזומים הם האברונים שבהם מורכבים חלבוני הגוף והשריר מחומצות אמינו.'
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
      { id: '2', text: 'ייצור חלבונים מתמשך לשריר', isCorrect: false, whyWrong: 'ייצור חלבונים מתבצע בריבוזומים.' },
      { id: '3', text: 'הגנה מכנית על התא מבחוץ', isCorrect: false, whyWrong: 'ההגנה וההפרדה נעשות על ידי קרום התא (פלזמה).' },
      { id: '4', text: 'העברת אותות עצביים חשמליים', isCorrect: false, whyWrong: 'העברת פולסים חשמליים היא תפקידו של הנוירון ברקמת העצב.' }
    ],
    hint: 'תחנת הכוח של התא – מפיקה ATP בנוכחות חמצן.',
    explanation: 'המיטוכונדריה היא אברון הנשימה של התא, שבו מופקת האנרגיה האירובית הדרושה למאמץ ממושך.'
  },
  {
    id: 'm_6',
    topic: 'הומיאוסטזיס',
    title: 'שמירה על סביבה פנימית',
    diagramType: 'anatomy_intro',
    imageSrc: '/images/anatomy_intro.png',
    questionText: 'הומיאוסטזיס (Homeostasis) מוגדר כ:',
    options: [
      { id: '1', text: 'תהליך התחלקות והתרבות תאי הגוף', isCorrect: false, whyWrong: 'חלוקת תאים מוגדרת כמיטוזה או מיוזה.' },
      { id: '2', text: 'שמירה על מצב וסביבה פנימית קבועה ויציבה לתפקוד תקין של הגוף', isCorrect: true },
      { id: '3', text: 'סוג מיוחד של רקמת חיבור צפופה', isCorrect: false, whyWrong: 'הומיאוסטזיס הוא מנגנון ויסות ביולוגי כולל, לא רקמה.' },
      { id: '4', text: 'התכווצות שריר רצונית בזמן אימון', isCorrect: false, whyWrong: 'התכווצות שריר היא פעולה מכנית המערערת זמנית את ההומיאוסטזיס.' }
    ],
    hint: 'איזון פנימי פעיל (טמפרטורה, חומציות, נוזלים).',
    explanation: 'הומיאוסטזיס הוא כושר הגוף החי לפעול באופן אקטיבי לשמירה על סביבה פנימית יציבה (חום, נוזלים, מלחים).'
  },
  {
    id: 'm_7',
    topic: 'רקמת אפיתל',
    title: 'הזנת האפיתל והיעדר כלי דם',
    diagramType: 'artery',
    imageSrc: '/images/artery.png',
    questionText: 'כיצד מקבלת רקמת האפיתל חומרי מזון וחמצן?',
    options: [
      { id: '1', text: 'מרשת כלי דם עשירה העוברת בתוכה', isCorrect: false, whyWrong: 'רקמת האפיתל היא Avascular (חסרת כלי דם לחלוטין).' },
      { id: '2', text: 'ישירות מספיגת חמצן מהאוויר החיצוני', isCorrect: false, whyWrong: 'רק תאים שטחיים בודדים באים במגע עם אוויר; רוב האפיתל בגוף מרפד איברים פנימיים.' },
      { id: '3', text: 'מרקמת החיבור הצמודה אליה בדיפוזיה, כי היא חסרת כלי דם', isCorrect: true },
      { id: '4', text: 'מנוזל מערכת העצבים', isCorrect: false, whyWrong: 'מערכת העצבים אינה מזינה רקמות אפיתל.' }
    ],
    hint: 'האפיתל חסר כלי דם משלו ויושב על רקמת חיבור.',
    explanation: 'האפיתל חסר כלי דם משלו, וניזון בדיפוזיה מרקמת החיבור העשירה בכלי דם הצמודה אליו.'
  },
  {
    id: 'm_8',
    topic: 'רקמת אפיתל',
    title: 'אנדותל כלי הדם וטרשת',
    diagramType: 'artery',
    imageSrc: '/images/artery.png',
    questionText: 'כיצד נקרא האפיתל המרפד את פנים כלי הדם, ומה משמעות הפגיעה בו?',
    options: [
      { id: '1', text: 'פריאוסט; גורם לשבר בעצם', isCorrect: false, whyWrong: 'פריאוסט הוא קרום העצם החיצוני, לא ציפוי כלי דם.' },
      { id: '2', text: 'אנדותל (Endothelium); פגיעה בו עלולה להוביל להצטברות רובד טרשתי (פלאק)', isCorrect: true },
      { id: '3', text: 'אפידרמיס; גורם לקילוף העור', isCorrect: false, whyWrong: 'אפידרמיס הוא שכבת העור העליונה.' },
      { id: '4', text: 'מזותל; גורם לפגיעה בסחוס המפרקי', isCorrect: false, whyWrong: 'מזותל מרפד את חללי הגוף הסגורים (כמו חלל הבטן והחזה).' }
    ],
    hint: 'איור 1.6: הציפוי הפנימי של העורק שפגיעה בו מאפשרת שקיעת שומנים ופלאק.',
    explanation: 'האנדותל מצפה את פנים כלי הדם. עישון ותזונה לקויה פוגעים בו ומאפשרים שקיעת רובד שומני (טרשת עורקים).'
  },
  {
    id: 'm_9',
    topic: 'רקמת חיבור',
    title: 'סיווג סיבי רקמת חיבור',
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
    questionText: 'איזה סוג סיבים ברקמת חיבור אינו חזק אך בעל יכולת להימתח ולחזור לאורכו המקורי?',
    options: [
      { id: '1', text: 'סיבים קולגניים', isCorrect: false, whyWrong: 'סיבי קולגן חזקים וקשיחים מאוד וכמעט אינם ניתנים למתיחה.' },
      { id: '2', text: 'סיבים רטיקולריים', isCorrect: false, whyWrong: 'סיבים רטיקולריים הם סיבי קולגן עדינים היוצרים רשת תומכת בלבד.' },
      { id: '3', text: 'סיבים אלסטיים (Elastic fibers)', isCorrect: true },
      { id: '4', text: 'סיבים שריריים', isCorrect: false, whyWrong: 'סיבי שריר הם תאי כיווץ אקטיביים ולא סיבי חומר בין-תאי ברקמת חיבור.' }
    ],
    hint: 'עשויים מאלסטין ופועלים בדיוק כמו גומייה.',
    explanation: 'סיבים אלסטיים מקנים לרקמה גמישות ויכולת מתיחה וחזרה (טווח אלסטי) ללא עיוות פלסטי.'
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
      { id: '2', text: 'רקמת חיבור תומכת (שלדית)', isCorrect: false, whyWrong: 'רקמת חיבור תומכת כוללת אך ורק עצם וסחוס.' },
      { id: '3', text: 'רקמת חיבור מיוחדת', isCorrect: false, whyWrong: 'רקמת חיבור מיוחדת כוללת רקמת שומן ודם.' },
      { id: '4', text: 'רקמת אפיתל', isCorrect: false, whyWrong: 'אפיתל הוא רקמת ציפוי וכיסוי, בעוד גידים מחברים שריר לעצם.' }
    ],
    hint: 'רקמות חיבור: אמיתית (גידים/רצועות), תומכת (עצם/סחוס), מיוחדת (שומן/דם).',
    explanation: 'גידים ורצועות שייכים לרקמת חיבור אמיתית (סיבית מקבילה) המיועדת להעברת כוחות משיכה חזקים.'
  },
  {
    id: 'm_11',
    topic: 'רקמת שריר',
    title: 'מאפייני שלושת סוגי השריר',
    diagramType: 'muscles',
    imageSrc: '/images/muscles.png',
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
    diagramType: 'skeleton',
    imageSrc: '/images/skeleton.png',
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
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
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
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
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
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
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
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
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
    diagramType: 'bone',
    imageSrc: '/images/bone.png',
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
    diagramType: 'joint',
    imageSrc: '/images/joint.png',
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
    diagramType: 'joint',
    imageSrc: '/images/joint.png',
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
    diagramType: 'joint',
    imageSrc: '/images/joint.png',
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
    diagramType: 'muscles',
    imageSrc: '/images/muscles.png',
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
    diagramType: 'cell',
    imageSrc: '/images/cell.png',
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
    diagramType: 'skeleton',
    imageSrc: '/images/skeleton.png',
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
    diagramType: 'muscles',
    imageSrc: '/images/muscles.png',
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
// מנוע תרשימים ותמונות אינטראקטיבי (Pan & Zoom)
// משלב קובצי תמונה מתיקיית public/images עם SVG וקטורי חד
// ==========================================
function InteractiveImageViewer({ currentQ }: { currentQ: any }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    // איפוס זום ומיקום בכל מעבר שאלה
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
    setPosition({
