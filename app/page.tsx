/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect, useRef, Component } from 'react';

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
// בנק שאלות מזו אקדמי (Meso Academy) - מקיף ומלא
// ==========================================
const MESO_FULL_DATA = [
  {
    id: 'm_1',
    topic: 'מבוא לאנטומיה',
    title: 'מקור המונח אנטומיה',
    diagram: 'intro',
    questionText: 'המילה "אנטומיה" מורכבת מהמילים Ana ו-Tome ביוונית. מה פירושן?',
    options: [
      { id: '1', text: 'מבנה + גוף', isCorrect: false, whyWrong: 'מבנה הגוף הוא מה שנחקר, אך המילים היווניות המקוריות אינן "מבנה" ו"גוף".' },
      { id: '2', text: 'מחדש + לחתוך (Ana = מחדש, Tome = לחתוך)', isCorrect: true },
      { id: '3', text: 'חקר + תנועה', isCorrect: false, whyWrong: 'חקר התנועה מוגדר כקינזיולוגיה/ביומכניקה, ולא אנטומיה.' },
      { id: '4', text: 'תא + רקמה', isCorrect: false, whyWrong: 'חקר תאים נקרא ציטולוגיה וחקר רקמות נקרא היסטולוגיה.' }
    ],
    hint: 'דיסקציה: לחתוך ולבחון שוב מחדש את מבנה הגוף.',
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
      { id: '4', text: 'גרעין התא (Nucleus)', isCorrect: false, whyWrong: 'הגרעין מכיל את ה-DNA ומנהל את התא, אך אינו מרכיב פיזית את החלבונים.' }
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
      { id: '4', text: 'רקמת אפיתל', isCorrect: false, whyWrong: 'אפיתל הוא רקמת ציפוי וכיסוי, בעוד גידים מחברים שריר לעצם.' }
    ],
    hint: 'רקמות חיבור: אמיתית (גידים/רצועות), תומכת (עצם/סחוס), מיוחדת (שומן/דם).',
    explanation: 'גידים ורצועות שייכים לרקמת חיבור אמיתית (סיבית מקבילה) המיועדת להעברת כוחות משיכה חזקים.'
  },
  {
    id: 'm_11',
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
    explanation: 'עצם החזה, הגולגולת, עמוד השדרה והצלעות מרכיבים את השלד הצירי (הגנה על
