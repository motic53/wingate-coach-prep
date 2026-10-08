/* eslint-disable */
// @ts-nocheck

export const MESO_FULL_COLLECTION = [
  // --- מצגת 1: חלק א' - אמריקאיות ---
  {
    id: 'meso_m1_1',
    topic: 'מבוא לאנטומיה',
    title: 'מקור המונח אנטומיה',
    diagramType: 'anatomy_intro',
    questionText: 'המילה "אנטומיה" מורכבת מהמילים Ana ו-Tome. מה פירושן?',
    options: [
      { id: '1', text: 'מבנה + גוף', isCorrect: false },
      { id: '2', text: 'מחדש + לחתוך (Ana = מחדש, Tome = לחתוך)', isCorrect: true },
      { id: '3', text: 'חקר + תנועה', isCorrect: false },
      { id: '4', text: 'תא + רקמה', isCorrect: false }
    ],
    hint: 'דיסקציה: לחתוך ולבחון שוב מחדש את מבנה הגוף.',
    explanation: 'המילה אנטומיה מגיעה מיוונית: Ana = מחדש, Tome = לחתוך (חקר מבנה איברי הגוף ומיקומם).'
  },
  {
    id: 'meso_m1_2',
    topic: 'מבוא לאנטומיה',
    title: 'אנטומיה מול פיזיולוגיה',
    diagramType: 'anatomy_intro',
    questionText: 'מה ההבדל בין אנטומיה לפיזיולוגיה?',
    options: [
      { id: '1', text: 'אנטומיה עוסקת בתפקוד, פיזיולוגיה במבנה', isCorrect: false },
      { id: '2', text: 'אין הבדל, אלו שמות נרדפים לחלוטין', isCorrect: false },
      { id: '3', text: 'אנטומיה עוסקת במבנה ובמיקום; פיזיולוגיה עוסקת באופן הפעולה של המערכות', isCorrect: true },
      { id: '4', text: 'אנטומיה עוסקת רק בשרירים, פיזיולוגיה רק באיברים פנימיים', isCorrect: false }
    ],
    hint: 'אנטומיה: מה יש ואיפה? פיזיולוגיה: איך זה עובד?',
    explanation: 'אנטומיה עונה על השאלה "מה יש שם ואיפה הוא ממוקם", ופיזיולוגיה עונה על "כיצד המערכות פועלות".'
  },
  {
    id: 'meso_m1_3',
    topic: 'ארגון הגוף',
    title: 'רמות הארגון של הגוף החי',
    diagramType: 'organization_levels',
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
    id: 'meso_m1_4',
    topic: 'התא ואברוניו',
    title: 'בית החרושת של החלבונים',
    diagramType: 'cell_organelles',
    questionText: 'איזה אברון מכונה "בית החרושת של החלבונים"?',
    options: [
      { id: '1', text: 'מיטוכונדריה', isCorrect: false },
      { id: '2', text: 'ציטופלזמה', isCorrect: false },
      { id: '3', text: 'ריבוזום (Ribosome)', isCorrect: true },
      { id: '4', text: 'גרעין התא (Nucleus)', isCorrect: false }
    ],
    hint: 'עליו מורכבות חומצות האמינו לבניית חלבוני הגוף והשריר.',
    explanation: 'הריבוזומים אחראים על סינתזת חלבונים בתא, ולכן מכונים "בית החרושת של החלבונים".'
  },
  {
    id: 'meso_m1_5',
    topic: 'התא ואברוניו',
    title: 'תפקיד המיטוכונדריה',
    diagramType: 'cell_organelles',
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
    id: 'meso_m1_6',
    topic: 'הומיאוסטזיס',
    title: 'הגדרת הומיאוסטזיס',
    diagramType: 'anatomy_intro',
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
    id: 'meso_m1_7',
    topic: 'רקמת אפיתל',
    title: 'הזנת רקמת האפיתל',
    diagramType: 'artery_endothelium',
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
    id: 'meso_m1_8',
    topic: 'רקמת חיבור',
    title: 'סיבים אלסטיים',
    diagramType: 'anatomy_intro',
    questionText: 'איזה סוג סיבים ברקמת חיבור אינו חזק אך בעל יכולת להימתח ולחזור לאורכו?',
    options: [
      { id: '1', text: 'סיבים קולגניים (חזקים וקשיחים מאוד)', isCorrect: false },
      { id: '2', text: 'סיבים רטיקולריים (עדינים מאוד)', isCorrect: false },
      { id: '3', text: 'סיבים אלסטיים (Elastic fibers)', isCorrect: true },
      { id: '4', text: 'סיבים שריריים', isCorrect: false }
    ],
    hint: 'פועל כמו גומייה – נמתח וחוזר לאורכו המקורי.',
    explanation: 'סיבים אלסטיים מקנים לרקמה גמישות ויכולת להימתח ולשוב לאורכם המקורי.'
  },
  {
    id: 'meso_m1_9',
    topic: 'רקמת חיבור',
    title: 'סיווג גיד ורצועה',
    diagramType: 'bone_joint',
    questionText: 'גיד ורצועה שייכים לאיזה סוג של רקמת חיבור?',
    options: [
      { id: '1', text: 'רקמת חיבור אמיתית (סיבית צפופה)', isCorrect: true },
      { id: '2', text: 'רקמת חיבור תומכת (שלדית - עצם וסחוס)', isCorrect: false },
      { id: '3', text: 'רקמת חיבור מיוחדת (שומן ודם)', isCorrect: false },
      { id: '4', text: 'רקמת אפיתל', isCorrect: false }
    ],
    hint: 'אמיתית = גידים ורצועות; תומכת = עצם וסחוס; מיוחדת = שומן ודם.',
    explanation: 'גיד ורצועה שייכים לרקמת חיבור אמיתית (סיבית מקבילה להעברת כוחות משיכה).'
  },

  // --- מצגת 1: חלק ב'-ו' (השלמות, נכון/לא נכון ויישום) ---
  {
    id: 'meso_m1_10',
    topic: 'רקמת אפיתל',
    title: 'אנדותל כלי הדם',
    diagramType: 'artery_endothelium',
    questionText: 'כיצד נקרא האפיתל המרפד את פנים כלי הדם וכלי הלימפה, ומה המשמעות של פגיעה בו?',
    options: [
      { id: '1', text: 'פריאוסט; גורם לדלקת במפרק', isCorrect: false },
      { id: '2', text: 'אנדותל (Endothelium); פגיעה בו עלולה להוביל להצטברות רובד טרשתי (פלאק)', isCorrect: true },
      { id: '3', text: 'אפידרמיס; גורם לקילוף העור', isCorrect: false },
      { id: '4', text: 'מזותל; פוגע בספיגת חמצן בריאות', isCorrect: false }
    ],
    hint: 'הציפוי הפנימי של העורק שפגיעה בו מובילה לטרשת עורקים.',
    explanation: 'האנדותל הוא אפיתל המצפה את כלי הדם. פגיעה בו (עישון, שומנים) מאפשרת שקיעת פלאק והיצרות העורק.'
  },
  {
    id: 'meso_m1_11',
    topic: 'רקמת שריר',
    title: 'השוואת שלושת סוגי השריר',
    diagramType: 'muscle_types',
    questionText: 'איזה שריר הוא בעל סיבים מוארכים, גליליים, בעלי פסים רוחביים, ונמצא תחת שליטה רצונית?',
    options: [
      { id: '1', text: 'שריר חלק (דפנות כלי דם ואיברים פנימיים)', isCorrect: false },
      { id: '2', text: 'שריר משורטט / שלד (Skeletal muscle)', isCorrect: true },
      { id: '3', text: 'שריר הלב (Cardiac muscle)', isCorrect: false },
      { id: '4', text: 'רקמת חיבור סיבית', isCorrect: false }
    ],
    hint: 'השריר היחיד שהמדריך מאמן באופן ישיר ומבוקר בחדר הכושר.',
    explanation: 'שריר השלד הוא משורטט ורצוני; שריר חלק ושריר הלב אינם רצוניים.'
  },
  {
    id: 'meso_m1_12',
    topic: 'רקמת עצב',
    title: 'תאי הנוירון והעברת אותות',
    diagramType: 'neuron_cell',
    questionText: 'מה תפקידו של הנוירון (Neuron) ברקמת העצב?',
    options: [
      { id: '1', text: 'ייצור אנרגיה ופירוק חומצות שומן', isCorrect: false },
      { id: '2', text: 'קליטת גירויים, התמרתם לפולסים חשמליים והעברתם ליעדים בגוף', isCorrect: true },
      { id: '3', text: 'הפרשת נוזל סיכה למפרקים', isCorrect: false },
      { id: '4', text: 'בלימת זעזועים בעמוד השדרה', isCorrect: false }
    ],
    hint: 'דנדריטים קולטים מידע, האקסון מעביר את הפולס החשמלי הלאה.',
    explanation: 'הנוירון קולט גירויים, ממיר אותם לאות חשמלי ומעביר אותם לשרירים, לבלוטות ולאיברים.'
  },
  {
    id: 'meso_m1_13',
    topic: 'יישום בחדר כושר',
    title: 'למידה מוטורית ותרגול',
    diagramType: 'neuron_cell',
    questionText: 'מדוע מתאמן מתחיל משפר את ביצועיו ומשקלי העבודה במהירות בשבועות הראשונים, עוד לפני שהשריר גדל פיזית?',
    options: [
      { id: '1', text: 'העצמות שלו הוכפלו בחוזקן תוך ימים ספורים', isCorrect: false },
      { id: '2', text: 'מערכת העצבים לומדת את התנועה ויוצרת רשתות וסנכרון בין-שרירי יעיל יותר (למידה מוטורית)', isCorrect: true },
      { id: '3', text: 'הגידים שלו הפכו לסיבים אלסטיים גמישים', isCorrect: false },
      { id: '4', text: 'בגלל ירידה חדה בכמות המיטוכונדריות', isCorrect: false }
    ],
    hint: 'השיפור הראשון באימון מקורו במערכת העצבים ולא בגודל השריר (היפרטרופיה).',
    explanation: 'בשבועות הראשונים השיפור נובע מסלילת רשתות עצביות ושיפור התיאום העצבי-שרירי.'
  },
  {
    id: 'meso_m1_14',
    topic: 'יישום בחדר כושר',
    title: 'גיד אכילס והרכבו הסיבי',
    diagramType: 'bone_joint',
    questionText: 'מתאמן מתלונן על כאב בגיד אכילס בריצה. מאיזה סוג סיבים בנוי הגיד בעיקר, ומה זה אומר על יכולת המתיחה שלו?',
    options: [
      { id: '1', text: 'בנוי מסיבים אלסטיים, ולכן הוא נמתח בקלות רבה כמו גומייה', isCorrect: false },
      { id: '2', text: 'בנוי מסיבים קולגניים חזקים מאוד שכמעט אינם נמתחים, ולכן הוא עמיד בעומס אך רגיש להעמסה חוזרת ולפציעה', isCorrect: true },
      { id: '3', text: 'בנוי מסיבי שריר חלק שמתכווצים לאט', isCorrect: false },
      { id: '4', text: 'בנוי מרקמת אפיתל ללא קולגן', isCorrect: false }
    ],
    hint: 'גיד מעביר כוח מעצם לשריר בלי "לבלוע" אותו במתיחה.',
    explanation: 'הגיד בנוי בעיקר מסיבי קולגן מקבילים: חזקים וקשיחים מאוד, וכמעט שאינם נמתחים.'
  },

  // --- מצגת 2: מערכת השלד, עצמות, סחוסים ומפרקים ---
  {
    id: 'meso_m2_1',
    topic: 'מערכת השלד',
    title: 'השלד הצירי מול השלד התוספי',
    diagramType: 'skeleton_axial_appendicular',
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
    id: 'meso_m2_2',
    topic: 'תפקידי העצם',
    title: 'תפקידי מערכת השלד',
    diagramType: 'bone_cross_section',
    questionText: 'איזה מהבאים אינו תפקיד של רקמת העצם?',
    options: [
      { id: '1', text: 'הגנה על המוח, הלב והריאות', isCorrect: false },
      { id: '2', text: 'מאגר מינרלים וייצור תאי דם במח העצם', isCorrect: false },
      { id: '3', text: 'התכווצות ליצירת כוח', isCorrect: true },
      { id: '4', text: 'בסיס מכני ומנוף לתנועה', isCorrect: false }
    ],
    hint: 'התכווצות היא תפקיד של השריר בלבד!',
    explanation: 'רקמת העצם אינה מתכווצת. התכווצות אקטיבית ליצירת כוח מתבצעת על ידי רקמת השריר.'
  },
  {
    id: 'meso_m2_3',
    topic: 'מבנה העצם',
    title: 'עצם צפופה (Compact)',
    diagramType: 'bone_cross_section',
    questionText: 'מה מאפיין עצם צפופה (Compact bone)?',
    options: [
      { id: '1', text: 'מכילה חללים רבים ומספקת נפח קל', isCorrect: false },
      { id: '2', text: 'נמצאת רק בעצמות שטוחות בגולגולת', isCorrect: false },
      { id: '3', text: 'בנויה מסחוס היאליני', isCorrect: false },
      { id: '4', text: 'נמצאת בעיקר במעטפת החיצונית ומספקת חוזק ועמידות בדחיסה', isCorrect: true }
    ],
    hint: 'המעטפת החיצונית הקשה והדחוסה של העצם.',
    explanation: 'עצם קומפקטית ממוקמת במעטפת החיצונית של העצמות ומספקת להן חוזק ועמידות מול כוחות דחיסה.'
  },
  {
    id: 'meso_m2_4',
    topic: 'סוגי עצמות',
    title: 'סיווג הפיקה והחוליה',
    diagramType: 'bone_cross_section',
    questionText: 'הפיקה (Patella) וחוליה בעמוד השדרה הן דוגמאות לעצמות מאיזה סוג (בהתאמה)?',
    options: [
      { id: '1', text: 'עצם ארוכה; עצם שטוחה', isCorrect: false },
      { id: '2', text: 'עצם שטוחה; עצם קצרה', isCorrect: false },
      { id: '3', text: 'ססמואידית (שומשומית); בלתי-סדירה (Irregular)', isCorrect: true },
      { id: '4', text: 'עצם קצרה; עצם ססמואידית', isCorrect: false }
    ],
    hint: 'הפיקה נמצאת בתוך גיד, ולחוליה יש צורה מורכבת עם זיזים.',
    explanation: 'הפיקה היא עצם ססמואידית (בתוך גיד הארבע-ראשי); חוליה בעמוד השדרה היא עצם בלתי-סדירה.'
  },
  {
    id: 'meso_m2_5',
    topic: 'תאי העצם',
    title: 'שלושת תאי העצם',
    diagramType: 'bone_cross_section',
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
    id: 'meso_m2_6',
    topic: 'גדילת העצם',
    title: 'לוחית הגדילה (Epiphyseal plate)',
    diagramType: 'bone_cross_section',
    questionText: 'היכן מתרחשת גדילת העצם הארוכה לאורך בגיל הצמיחה?',
    options: [
      { id: '1', text: 'בקליפת העצם (הפריאוסט)', isCorrect: false },
      { id: '2', text: 'בלוחית הגדילה (Epiphyseal plate / לוחית האפיפיזה)', isCorrect: true },
      { id: '3', text: 'בחלל מח העצם', isCorrect: false },
      { id: '4', text: 'בסחוס המפרקי החיצוני', isCorrect: false }
    ],
    hint: 'רצועת סחוס היאליני בין קצה העצם לגוף העצם שמתגרמת בבגרות.',
    explanation: 'הגדילה לאורך מתרחשת בלוחית הגדילה; בסיום גיל ההתבגרות הלוחית נסגרת ומתגרמת.'
  },
  {
    id: 'meso_m2_7',
    topic: 'עומס והסתגלות',
    title: 'חוק וולף (Wolff\'s Law)',
    diagramType: 'bone_cross_section',
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
    id: 'meso_m2_8',
    topic: 'סחוסים',
    title: 'סחוס היאליני',
    diagramType: 'disc_cartilage',
    questionText: 'איזה סוג סחוס הוא השכיח ביותר ומרפד את קצות העצמות במפרקים תנועתיים?',
    options: [
      { id: '1', text: 'היאליני (Hyaline cartilage)', isCorrect: true },
      { id: '2', text: 'סיבי / פיברוטי (עמיד בדחיסה - דיסקים ומניסקוס)', isCorrect: false },
      { id: '3', text: 'אלסטי (אפרכסת האוזן ומכסה הגרון)', isCorrect: false },
      { id: '4', text: 'רטיקולרי', isCorrect: false }
    ],
    hint: 'דק, רטוב וחלק מאוד – מפחית חיכוך ובולם זעזועים.',
    explanation: 'סחוס היאליני הוא הנפוץ ביותר, דק וחלק, ומרפד קצות עצמות במפרקים תנועתיים.'
  },
  {
    id: 'meso_m2_9',
    topic: 'סוגי מפרקים',
    title: 'סוג המפרק היציב ביותר',
    diagramType: 'bone_joint',
    questionText: 'איזה סוג מפרק הוא היציב ביותר בגוף האדם?',
    options: [
      { id: '1', text: 'סינוביאלי (התנועתי ביותר)', isCorrect: false },
      { id: '2', text: 'סחוסי (תנועה מינימלית)', isCorrect: false },
      { id: '3', text: 'סיבי (Fibrous joint - תפרי הגולגולת Suture)', isCorrect: true },
      { id: '4', text: 'רב-צירי', isCorrect: false }
    ],
    hint: 'ככל שמפרק פחות תנועתי – הוא יותר יציב!',
    explanation: 'מפרק סיבי מחובר ברקמה פיברוטית קשיחה ללא תנועה, ולכן הוא היציב ביותר מבין המפרקים.'
  },
  {
    id: 'meso_m2_10',
    topic: 'יישום בחדר כושר',
    title: 'אימוני כוח לנשים בנות 55',
    diagramType: 'bone_cross_section',
    questionText: 'מתאמנת בת 55 שואלת אם כדאי לה להתחיל אימוני כוח או שעדיף רק הליכה. מהי התשובה הנכונה לפי חוק וולף?',
    options: [
      { id: '1', text: 'עדיף רק הליכה, משקולות פוגעות בעצמות של מבוגרים', isCorrect: false },
      { id: '2', text: 'אימוני כוח מספקים עומס מכני שמגרה את האוסטאובלסטים ומסייע בבלימת אובדן צפיפות העצם לאחר הפסקת המחזור', isCorrect: true },
      { id: '3', text: 'מסת העצם אינה מושפעת כלל מאימונים בגיל זה', isCorrect: false },
      { id: '4', text: 'אימוני כוח יעילים רק עד גיל 25', isCorrect: false }
    ],
    hint: 'ירידת האסטרוגן מאיצה פירוק עצם – עומס כוח מגרה את הבנייה ומקזז את הירידה.',
    explanation: 'לפי חוק וולף עומס מכני מחזק עצם. בגיל המעבר ירידת האסטרוגן מאיצה פירוק, ואימוני התנגדות הם רפואה מונעת נגד אוסטאופורוזיס.'
  },
  {
    id: 'meso_m2_11',
    topic: 'סחוסים והחלמה',
    title: 'אספקת דם לסחוס',
    diagramType: 'disc_cartilage',
    questionText: 'לסחוס אין אספקת דם ישירה. מה המשמעות של עובדה זו לגבי החלמה מפציעת סחוס (כגון מניסקוס בברך)?',
    options: [
      { id: '1', text: 'הסחוס מחלים מהר יותר משריר בגלל עודף חמצן', isCorrect: false },
      { id: '2', text: 'ההחלמה איטית מאוד ולעיתים חלקית בלבד, כיוון שחומרי הזנה מגיעים בדיפוזיה מוגבלת מהנוזל שסביבו', isCorrect: true },
      { id: '3', text: 'סחוס מתחדש מיד עם שתיית מים מרובה', isCorrect: false },
      { id: '4', text: 'אין לכך שום משמעות קלינית', isCorrect: false }
    ],
    hint: 'רקמות ללא כלי דם ישירים תלויות בדיפוזיה ומחלימות לאט מאוד.',
    explanation: 'הסחוס הוא חסר כלי דם וניזון בדיפוזיה בלבד, ולכן פציעות סחוס מחלימות לאט ולעיתים מצריכות התערבות כירורגית.'
  },
  {
    id: 'meso_m2_12',
    topic: 'מפרקים ויציבות',
    title: 'השוואת כתף מול מרפק',
    diagramType: 'bone_joint',
    questionText: 'השוו בין מפרק הכתף למפרק המרפק לפי אפשרויות התנועה. מה ההבדל אומר על היציבות של כל מפרק?',
    options: [
      { id: '1', text: 'המרפק תנועתי יותר מהכתף ולכן פחות יציב', isCorrect: false },
      { id: '2', text: 'הכתף היא מפרק רב-צירי בעל טווח תנועה גדול אך יציבות נמוכה; המרפק הוא מפרק חד-צירי יציב ובעל טווח תנועה מוגבל', isCorrect: true },
      { id: '3', text: 'שני המפרקים בעלי אותה יציבות בדיוק', isCorrect: false },
      { id: '4', text: 'הכתף יציבה יותר כי ראש הזרוע עמוק מאוד בתוך השקע', isCorrect: false }
    ],
    hint: 'ככל שמפרק תנועתי יותר – הוא יציב פחות. פריקות כתף שכיחות, פריקות מרפק נדירות.',
    explanation: 'הכתף היא מפרק כדור ומכתש רב-צירי עם שקע רדוד (תנועה מקסימלית אך יציבות נמוכה); המרפק הוא מפרק ציר חד-צירי מיוצב.'
  }
];

// תרשימים ואיורים גרפיים עשירים מחוברת מזו אקדמי (איורי 1.2, 1.3, 1.6, 1.9, 2.1, 2.3)
function MesoIllustrationRenderer({ diagramType }: { diagramType: string }) {
  if (diagramType === 'skeleton_axial_appendicular') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #0284c7', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
          🦴 איור 2.1: שלד צירי (בז׳/סגול) מול שלד תוספי (ירוק) - מזו אקדמי:
        </span>
        <svg viewBox="0 0 340 100" style={{ width: '100%', height: 'auto', maxHeight: '110px' }}>
          <rect x="15" y="10" width="145" height="80" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="1.5" />
          <text x="87" y="30" fill="#a5b4fc" fontSize="11" fontWeight="bold" textAnchor="middle">שלד צירי (Axial)</text>
          <text x="87" y="48" fill="#f8fafc" fontSize="9" textAnchor="middle">גולגולת, עמוד שדרה,</text>
          <text x="87" y="62" fill="#f8fafc" fontSize="9" textAnchor="middle">עצם החזה (Sternum) וצלעות</text>
          <text x="87" y="78" fill="#38bdf8" fontSize="8" fontWeight="bold" textAnchor="middle">מגן על איברים חיוניים</text>

          <rect x="180" y="10" width="145" height="80" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="1.5" />
          <text x="252" y="30" fill="#6ee7b7" fontSize="11" fontWeight="bold" textAnchor="middle">שלד תוספי (Appendicular)</text>
          <text x="252" y="48" fill="#f8fafc" fontSize="9" textAnchor="middle">עצמות הגפיים, עצם הבריח,</text>
          <text x="252" y="62" fill="#f8fafc" fontSize="9" textAnchor="middle">השכמות ועצמות האגן</text>
          <text x="252" y="78" fill="#34d399" fontSize="8" fontWeight="bold" textAnchor="middle">הפקת תנועה ומנופים</text>
        </svg>
      </div>
    );
  }

  if (diagramType === 'bone_cross_section') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #d97706', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#fbbf24', display: 'block', marginBottom: '6px' }}>
          🔬 איור 2.3: מעטפת קומפקטית מול ליבה ספוגית - מזו אקדמי:
        </span>
        <svg viewBox="0 0 340 100" style={{ width: '100%', height: 'auto', maxHeight: '110px' }}>
          <rect x="25" y="15" width="290" height="70" rx="10" fill="#0f172a" stroke="#d97706" strokeWidth="2" />
          <rect x="25" y="15" width="290" height="16" fill="#b45309" />
          <text x="170" y="27" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">מעטפת קומפקטית (Compact) - מספקת חוזק ועמידות בדחיסה</text>
          <rect x="25" y="31" width="290" height="38" fill="#1e293b" strokeDasharray="3 3" />
          <text x="170" y="53" fill="#fde68a" fontSize="10" fontWeight="bold" textAnchor="middle">ליבה ספוגית (Spongy) - רשת חללים לבלימת זעזועים ומשקל קל</text>
          <rect x="25" y="69" width="290" height="16" fill="#b45309" />
          <text x="170" y="81" fill="#ffffff" fontSize="8" textAnchor="middle">פריאוסט (קרום העצם) עוטף מבחוץ עם כלי דם ועצבים</text>
        </svg>
      </div>
    );
  }

  if (diagramType === 'cell_organelles') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #0284c7', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
          🧬 איור 1.3: מבנה התא ואברוניו העיקריים - מזו אקדמי:
        </span>
        <svg viewBox="0 0 340 100" style={{ width: '100%', height: 'auto', maxHeight: '110px' }}>
          <ellipse cx="170" cy="50" rx="150" ry="42" fill="#0f172a" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="170" cy="50" r="20" fill="#581c87" stroke="#c084fc" strokeWidth="1.5" />
          <text x="170" y="54" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">גרעין (DNA)</text>
          <ellipse cx="85" cy="40" rx="18" ry="9" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
          <text x="85" y="44" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">מיטוכונדריון</text>
          <ellipse cx="255" cy="60" rx="18" ry="9" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
          <text x="255" y="64" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">מיטוכונדריון</text>
          <circle cx="120" cy="65" r="4" fill="#fbbf24" />
          <circle cx="220" cy="35" r="4" fill="#fbbf24" />
          <text x="120" y="78" fill="#fde68a" fontSize="7" textAnchor="middle">ריבוזום</text>
          <text x="220" y="27" fill="#fde68a" fontSize="7" textAnchor="middle">ריבוזום</text>
        </svg>
      </div>
    );
  }

  if (diagramType === 'artery_endothelium') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #ef4444', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#f87171', display: 'block', marginBottom: '6px' }}>
          🩸 איור 1.6: ציפוי האנדותל בכלי הדם וטרשת עורקים - מזו אקדמי:
        </span>
        <svg viewBox="0 0 340 90" style={{ width: '100%', height: 'auto', maxHeight: '100px' }}>
          <rect x="20" y="15" width="140" height="60" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="1.5" />
          <text x="90" y="32" fill="#34d399" fontSize="10" fontWeight="bold" textAnchor="middle">עורק תקין</text>
          <text x="90" y="52" fill="#cbd5e1" fontSize="8" textAnchor="middle">אנדותל שלם וחלק</text>
          <text x="90" y="66" fill="#6ee7b7" fontSize="8" textAnchor="middle">זרימת דם חופשית</text>

          <rect x="180" y="15" width="140" height="60" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="1.5" />
          <text x="250" y="32" fill="#f87171" fontSize="10" fontWeight="bold" textAnchor="middle">טרשת עורקים</text>
          <text x="250" y="52" fill="#fca5a5" fontSize="8" textAnchor="middle">פגיעה באנדותל</text>
          <text x="250" y="66" fill="#f87171" fontSize="8" fontWeight="bold" textAnchor="middle">הצטברות רובד שומני (פלאק)</text>
        </svg>
      </div>
    );
  }

  if (diagramType === 'muscle_types') {
    return (
      <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #a855f7', marginBottom: '10px' }}>
        <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#c084fc', display: 'block', marginBottom: '6px' }}>
          💪 איור 1.9: שלושת סוגי השריר - מזו אקדמי:
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

  return (
    <div style={{ backgroundColor: '#020617', padding: '10px', borderRadius: '12px', border: '1.5px solid #0284c7', marginBottom: '10px' }}>
      <span style={{ fontSize: '11px', fontWeight: 'bold', color: '#38bdf8', display: 'block', marginBottom: '6px' }}>
        📊 מפתח עקרונות אנטומיים ופיזיולוגיים - מזו אקדמי:
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

    const source = inst === 'meso' ? MESO_ACADEMY_FULL_DATA : WINGATE_ACADEMY_FULL_DATA;

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

                <MesoIllustrationRenderer diagramType={q.diagramType} />

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
              <span style={{ fontSize: '10px', opacity: 0.85 }}>מבוא, רקמות, שלד ({MESO_ACADEMY_FULL_DATA.length})</span>
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
              <span style={{ fontSize: '10px', opacity: 0.85 }}>תכנון אימון, אנטומיה ({WINGATE_ACADEMY_FULL_DATA.length})</span>
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
            <div style={{ backgroundColor: '#1e1b4b', border: '1px solid #4338ca', padding: '8px 12px', borderRadius: '12px', marginBottom: '8px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'gap', gap: '6px' }}>
              <div>
                <span style={{ fontSize: '10px', color: '#c7d2fe', display: 'block' }}>הקצבת זמן לשאלה:</span>
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

        {/* איור ותרשים מותאם מתוך החוברת */}
        <MesoIllustrationRenderer diagramType={currentQ.diagramType} />

        {/* כפתור פדגוגי זמין תמיד */}
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
                  stopSpeech();
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

      {/* חלון מודאל לימודי מעמיק */}
      {isDeepStudyOpen && (
        <div style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.92)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '14px' }}>
          <div style={{ backgroundColor: '#0b1329', border: '2px solid #38bdf8', borderRadius: '20px', maxWidth: '500px', width: '100%', maxHeight: '88vh', overflowY: 'auto', padding: '18px', display: 'flex', flexDirection: 'column', gap: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.8)' }}>
            
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid #1e293b', paddingBottom: '10px' }}>
              <div>
                <span style={{ color: '#38bdf8', fontSize: '11px', fontWeight: 'bold' }}>{currentQ.topic}</span>
                <h3 style={{ margin: 0, fontSize: '15px', color: '#fbbf24', fontWeight: '900' }}>🎓 ניתוח פדגוגי מעמיק ושלילת מסיחים</h3>
              </div>
              <button onClick={() => setIsDeepStudyOpen(false)} style={{ backgroundColor: '#881337', color: '#ffffff', border: 'none', width: '32px', height: '32px', borderRadius: '50%', fontWeight: 'bold', fontSize: '15px', cursor: 'pointer' }}>✕</button>
            </div>

            <MesoIllustrationRenderer diagramType={currentQ.diagramType} />

            <div style={{ backgroundColor: '#020617', padding: '10px 12px', borderRadius: '12px', border: '1px solid #10b981' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <span style={{ color: '#34d399', fontSize: '12px', fontWeight: '900' }}>✔ התשובה הנכונה והעיקרון המדעי:</span>
                <button onClick={() => speakCustom(currentQ.explanation)} style={{ backgroundColor: '#064e3b', color: '#34d399', border: '1px solid #059669', borderRadius: '6px', padding: '2px 6px', fontSize: '10px', cursor: 'pointer' }}>🔊 הקרא</button>
              </div>
              <p style={{ margin: 0, fontSize: '12px', color: '#e2e8f0', lineHeight: '1.4' }}>
                {currentQ.explanation}
              </p>
            </div>

            <div style={{ backgroundColor: '#020617', padding: '10px 12px', borderRadius: '12px', border: '1px solid #334155' }}>
              <span style={{ color: '#f43f5e', fontSize: '12px', fontWeight: '900', display: 'block', marginBottom: '6px' }}>
                ❌ למה שאר המסיחים שגויים?
              </span>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '6px' }}>
                {currentQ.options.map((opt, idx) => {
                  const letter = ['א', 'ב', 'ג', 'ד'][idx] || '';
                  if (opt.isCorrect) return null;
                  return (
                    <div key={opt.id} style={{ fontSize: '11px', color: '#cbd5e1', backgroundColor: '#0f172a', padding: '6px 8px', borderRadius: '6px', borderRight: '3px solid #f43f5e' }}>
                      <strong style={{ color: '#f87171' }}>אפשרות {letter} ({opt.text}):</strong>
                      <span style={{ color: '#94a3b8', display: 'block', marginTop: '2px' }}>
                        נפסלת לפי הדרישות המדעיות (בלבול נפוץ במבחן בין שלד צירי לתוספי, בין סחוס היאליני לסיבי, או בין אוסטאובלסט לאוסטאוקלסט).
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            <button
              onClick={() => setIsDeepStudyOpen(false)}
              style={{ width: '100%', backgroundColor: institution === 'meso' ? '#0284c7' : '#f59e0b', color: '#ffffff', border: 'none', padding: '12px', borderRadius: '12px', fontWeight: '900', fontSize: '14px', cursor: 'pointer', marginTop: '4px' }}
            >
              ✓ הבנתי, חזרה לשאלה
            </button>
          </div>
        </div>
      )}

    </main>
  );
}
