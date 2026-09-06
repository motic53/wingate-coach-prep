/* eslint-disable */
// @ts-nocheck

export const ALL_WINGATE_QUESTIONS = [
  // =========================================================================
  // מודול 1: אנטומיה א' - תאים, רקמות, שלד ומפרקים (30 שאלות)
  // =========================================================================
  {
    id: 'anat1_1',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'תפקיד Annulus Fibrosus (עמ׳ 35)',
    diagramKey: 'disc',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו בעיקר:',
    hint: 'עיין בעמוד 35 בחוברת משה שחר.',
    options: [
      { id: 'a', text: 'למנוע חיכוך ולבלום זעזועים (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'להזין ישירות את חוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 35: Annulus Fibrosus הוא טבעת סיבית המורכבת מקולגן צפוף הבולמת זעזועים ומונעת חיכוך בין החוליות.'
  },
  {
    id: 'anat1_2',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'תאי סחוס - Chondrocyte (עמ׳ 35)',
    diagramKey: 'knee',
    questionText: 'תא הסחוס (Chondrocyte):',
    hint: 'מהו התפקיד התאי המרכזי של כונדרוציט?',
    options: [
      { id: 'a', text: 'מייצר קולגן ורכיבי חומר חוץ-תאי בסחוס', isCorrect: true },
      { id: 'b', text: 'נמצא ברקמת העצם הצפופה', isCorrect: false },
      { id: 'c', text: 'הוא חלק מהחומר האנאורגני של הסחוס', isCorrect: false },
      { id: 'd', text: 'נמצא ברקמת חיבור צפופה בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 35: תאי הסחוס (כונדרוציטים) מייצרים את סיבי הקולגן והפרוטאוגליקנים של רקמת הסחוס.'
  },
  {
    id: 'anat1_3',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'סחוס היאליני בקצות עצמות (עמ׳ 35)',
    diagramKey: 'knee',
    questionText: 'בעניין הסחוס ההיאליני שבקצות העצמות, מי מבין המשפטים הבאים הוא הנכון:',
    hint: 'האם לסחוס מפרקי יש כלי דם ישירים?',
    options: [
      { id: 'a', text: 'מקבל חומרי מזון וחמצן בדיפוזיה מנוזל המפרק', isCorrect: true },
      { id: 'b', text: 'עשיר באספקת דם ישירה', isCorrect: false },
      { id: 'c', text: 'אלסטי מאוד הודות לאחוז גבוה של אלסטין', isCorrect: false },
      { id: 'd', text: 'נמצא בדיסק הבין חולייתי', isCorrect: false }
    ],
    explanation: 'עמ׳ 21, 35: הסחוס ההיאליני חסר כלי דם ישירים וניזון בדיפוזיה מתוך הנוזל הסינוביאלי בעת עומס ותנועה.'
  },
  {
    id: 'anat1_4',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'מבנה העצם הצפופה (עמ׳ 35)',
    diagramKey: 'spine',
    questionText: 'מה מייחד את העצם הצפופה (Compact Bone)?',
    hint: 'איזו מערכת מעגלית מאפיינת אותה תחת המיקרוסקופ?',
    options: [
      { id: 'a', text: 'מורכבת מיחידות המסודרות בצורה קונצנטרית (מערכות הוורס - Osteons)', isCorrect: true },
      { id: 'b', text: 'חסרת אספקה דמית לחלוטין', isCorrect: false },
      { id: 'c', text: 'נמצאת בעיקר בחלקן הפנימי של האפיפיזות', isCorrect: false },
      { id: 'd', text: 'מורכבת מטרבקולות ספוגיות בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 28, 35: העצם הצפופה בנויה מיחידות גליליות קונצנטריות הנקראות מערכות הוורס (Osteons) שבמרכזן עוברים כלי דם ועצבים.'
  },
  {
    id: 'anat1_5',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'מיקום רקמת חיבור רפה (עמ׳ 35)',
    diagramKey: 'disc',
    questionText: 'Loose connective tissue (רקמת חיבור אמיתית רפה/אוורירית) נמצאת:',
    hint: 'היכן היא עוטפת ומאגדת את סיבי התנועה בגוף?',
    options: [
      { id: 'a', text: 'בין סיבי השריר וסביב כלי דם ועצבים', isCorrect: true },
      { id: 'b', text: 'בשכבה הפנימית של כלי הדם', isCorrect: false },
      { id: 'c', text: 'בגיד אכילס', isCorrect: false },
      { id: 'd', text: 'בסחוס האף', isCorrect: false }
    ],
    explanation: 'עמ׳ 17, 35: רקמת חיבור רפה מאגדת את צרורות סיבי השריר (Fascicles) ומרפדת כלי דם ועצבים.'
  },
  {
    id: 'anat1_6',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'המים שברקמת הסחוס (עמ׳ 36)',
    diagramKey: 'knee',
    questionText: 'המים שברקמת הסחוס:',
    hint: 'שאלה מס׳ 6 בעמ׳ 36.',
    options: [
      { id: 'a', text: 'קשורים אל הפרוטאוגליקנים ויוצרים עמידות לדחיסה', isCorrect: true },
      { id: 'b', text: 'נאגרים בצורה חופשית ללא קשר כימי', isCorrect: false },
      { id: 'c', text: 'נמצאים אך ורק בתוך גרעין התא', isCorrect: false },
      { id: 'd', text: 'מתאדים לחלוטין בזמן מאמץ גופני', isCorrect: false }
    ],
    explanation: 'עמ׳ 22, 36: כ-60%-80% מהסחוס ההיאליני הם מים הקשורים כימית לפרוטאוגליקנים, דבר המעניק לו יכולת עמידה ובלימת דחיסה.'
  },
  {
    id: 'anat1_7',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'תכונות קולגן סוג 1 (עמ׳ 36)',
    diagramKey: 'disc',
    questionText: 'קולגן מסוג 1 (Type 1 Collagen) מספק את התכונה העיקרית הבאה:',
    hint: 'שאלה מס׳ 7 בעמ׳ 36.',
    options: [
      { id: 'a', text: 'עומד בכוחות מתיחה גדולים וכמעט ואינו נמתח', isCorrect: true },
      { id: 'b', text: 'אלסטיות גבוהה מאוד כמו גומייה', isCorrect: false },
      { id: 'c', text: 'רכות ונזילות', isCorrect: false },
      { id: 'd', text: 'יכולת כיווץ אקטיבית', isCorrect: false }
    ],
    explanation: 'עמ׳ 17, 36: קולגן מסוג 1 הוא סיב עבה וקשיח המרכיב גידים, רצועות, קפסולות ועצמות ועומד בעומסי מתיחה אדירים.'
  },
  {
    id: 'anat1_8',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'מאפייני חוליות הצוואר (עמ׳ 65)',
    diagramKey: 'cervical',
    questionText: 'נקב בזיזים הרוחביים (Transverse Foramen) מאפיין את חוליות:',
    hint: 'שאלה מס׳ 1 בעמ׳ 65.',
    options: [
      { id: 'a', text: 'הצוואר (Cervical vertebrae)', isCorrect: true },
      { id: 'b', text: 'החזה (Thoracic)', isCorrect: false },
      { id: 'c', text: 'המותניים (Lumbar)', isCorrect: false },
      { id: 'd', text: 'הסקרום', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 65: נקב בזיז הרוחבי ייחודי לחוליות הצוואר בלבד (C1-C7) ומאפשר מעבר בטוח של כלי הדם למוח.'
  },
  {
    id: 'anat1_9',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'תפקיד הזיז הרוחבי (עמ׳ 65)',
    diagramKey: 'cervical',
    questionText: 'תפקידו העיקרי של הזיז הרוחבי (Transverse Process) בחוליה הוא:',
    hint: 'שאלה מס׳ 2 בעמ׳ 65.',
    options: [
      { id: 'a', text: 'לשמש מנוף ואחז לשרירים ורצועות המניעים ומייצבים את החוליה', isCorrect: true },
      { id: 'b', text: 'לשאת ישירות את כל משקל הגוף', isCorrect: false },
      { id: 'c', text: 'להגן על כיס המרה', isCorrect: false },
      { id: 'd', text: 'לייצר תאי דם לבנים', isCorrect: false }
    ],
    explanation: 'עמ׳ 53, 65: הזיזים הרוחביים והזיז האחורי משמשים כמנופים מכניים לחיבור השרירים והרצועות של עמוד השדרה.'
  },
  {
    id: 'anat1_10',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'חוליה C1 אטלס (עמ׳ 65)',
    diagramKey: 'cervical',
    questionText: 'חוליה C1 (Atlas) יוצאת דופן מכל שאר החוליות כי:',
    hint: 'שאלה מס׳ 3 בעמ׳ 65.',
    options: [
      { id: 'a', text: 'אין לה גוף חוליה והיא נושאת את הגולגולת (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'היא החוליה הגדולה והכבדה ביותר בשלד', isCorrect: false },
      { id: 'c', text: 'היא מחוברת ישירות לצלע הראשונה', isCorrect: false },
      { id: 'd', text: 'אין לה תעלה עבור חוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 65: C1 חסרת גוף חוליה וחסרת זיז קוצי, ומורכבת משתי קשתות ומסות לטרליות הנושאות את עצם העורף של הגולגולת.'
  },
  {
    id: 'anat1_11',
    moduleId: 'anat1',
    topic: 'מפרקים',
    title: 'מפרק Atlantoaxial C1-C2 (עמ׳ 66)',
    diagramKey: 'cervical',
    questionText: 'ה-Atlantoaxial joint מאפשר את התנועה העיקרית הבאה:',
    hint: 'שאלה מס׳ 4 בעמ׳ 66.',
    options: [
      { id: 'a', text: 'רוטציה (סיבוב ראש ימינה ושמאלה)', isCorrect: true },
      { id: 'b', text: 'כפיפה ופשיטה בלבד', isCorrect: false },
      { id: 'c', text: 'כפיפה צידית בלבד', isCorrect: false },
      { id: 'd', text: 'הרחקה וקירוב', isCorrect: false }
    ],
    explanation: 'עמ׳ 56, 66: השן (Dens) של C2 בתוך קשת C1 מאפשרת כ-45 מעלות של רוטציה לכל צד.'
  },
  {
    id: 'anat1_12',
    moduleId: 'anat1',
    topic: 'שלד בית החזה',
    title: 'חלקי עצם החזה Sternum (עמ׳ 63, 65)',
    diagramKey: 'spine',
    questionText: 'עצם החזה (Sternum) מורכבת מ-3 חלקים עיקריים מלמעלה למטה:',
    hint: 'עיין בעמוד 63 בחוברת משה שחר.',
    options: [
      { id: 'a', text: 'Manubrium (ידית), Body (גוף), Xiphoid process (סיף)', isCorrect: true },
      { id: 'b', text: 'אטלס, אקסיס וסקרום', isCorrect: false },
      { id: 'c', text: 'איליום, איסכיום ופיוביס', isCorrect: false },
      { id: 'd', text: 'אפיפיזה, דיאפיזה ומטפיזה', isCorrect: false }
    ],
    explanation: 'עמ׳ 63: הסטרנום מורכבת מהמנובריום (עליו מתחברות עצמות הבריח וצלעות 1-2), גוף העצם, והזיז הקוצני התחתון (קספואיד).'
  },
  {
    id: 'anat1_13',
    moduleId: 'anat1',
    topic: 'שרירי נשימה',
    title: 'שריר הסרעפת Diaphragm (עמ׳ 64, 65)',
    diagramKey: 'spine',
    questionText: 'שריר הסרעפת (Diaphragm) מפריד בין:',
    hint: 'עיין בעמוד 64-65.',
    options: [
      { id: 'a', text: 'איברי בית החזה (לב וריאות) לבין חלל הבטן (קיבה ומעיים)', isCorrect: true },
      { id: 'b', text: 'חלל הגולגולת לחלל הצוואר', isCorrect: false },
      { id: 'c', text: 'האגן לגפיים התחתונות', isCorrect: false },
      { id: 'd', text: 'השכמות לעמוד השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 64: הסרעפת היא שריר הנשימה העיקרי החוצץ בין חלל בית החזה לחלל הבטן.'
  },
  {
    id: 'anat1_14',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'משטחים מפרקיים של חוליות המותניים (עמ׳ 58, 65)',
    diagramKey: 'spine',
    questionText: 'המשטחים המפרקיים (Facet Joints) של חוליות המותניים נמצאים בעיקר במישור:',
    hint: 'איזו תנועה מותרת במותניים ואיזו מוגבלת?',
    options: [
      { id: 'a', text: 'הסגיטלי (מאפשר כפיפה ופשיטה, ומגביל רוטציה)', isCorrect: true },
      { id: 'b', text: 'הפרונטלי (מאפשר רק הרחקה)', isCorrect: false },
      { id: 'c', text: 'האופקי בלבד', isCorrect: false },
      { id: 'd', text: 'אין מפרקים בין חוליות המותניים', isCorrect: false }
    ],
    explanation: 'עמ׳ 58, 62: במותניים המשטחים פונים פנימה והחוצה במישור הסגיטלי, ולכן מאפשרים כפיפה ופשיטה אך נועלים רוטציה.'
  },
  {
    id: 'anat1_15',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'מפרקי חוליות L3 ו-L2 (עמ׳ 65)',
    diagramKey: 'spine',
    questionText: 'המשטחים המפרקיים העליונים של חוליה L3 יוצרים מפרק סינוביאלי עם המשטחים המפרקיים:',
    hint: 'עיין בשאלה 15 בעמוד 65.',
    options: [
      { id: 'a', text: 'התחתונים של חוליה L2', isCorrect: true },
      { id: 'b', text: 'העליונים של חוליה L4', isCorrect: false },
      { id: 'c', text: 'התחתונים של חוליה L4', isCorrect: false },
      { id: 'd', text: 'הצלעות הצפות', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 66: משטחים מפרקיים עליונים של כל חוליה נפגשים ומתחברים למשטחים המפרקיים התחתונים של החוליה שמעליה.'
  },
  {
    id: 'anat1_16',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'סיום חוט השדרה (עמ׳ 61)',
    diagramKey: 'spine',
    questionText: 'באיזה גובה של עמוד השדרה מסתיים חוט השדרה (Spinal Cord) אצל אדם בוגר?',
    hint: 'היכן מתחיל "זנב הסוס" (Cauda Equina)?',
    options: [
      { id: 'a', text: 'בגובה חוליות L1-L2 (ומשם ממשיך כ-Cauda Equina)', isCorrect: true },
      { id: 'b', text: 'בקצה עצם הזנב (Coccyx)', isCorrect: false },
      { id: 'c', text: 'בגובה הצוואר C3 בלבד', isCorrect: false },
      { id: 'd', text: 'בגובה חוליה T6', isCorrect: false }
    ],
    explanation: 'עמ׳ 61: חוט השדרה מסתיים בגובה חוליות המותניים L1-L2, ומתחתיו ממשיך כאוסף שורשי עצבים דמוי זנב סוס (Cauda Equina).'
  },
  {
    id: 'anat1_17',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'תאי עצם אוסטאובלסטים מול אוסטאוקלסטים (עמ׳ 27, 34)',
    diagramKey: 'spine',
    questionText: 'מה תפקידם של האוסטאובלסטים (Osteoblasts) לעומת האוסטאוקלסטים (Osteoclasts)?',
    hint: 'מי בונה עצם ומי מפרק עצם ישנה?',
    options: [
      { id: 'a', text: 'אוסטאובלסטים בונים ומפרישים חומר עצם, אוסטאוקלסטים מפרקים עצם בלויה', isCorrect: true },
      { id: 'b', text: 'אוסטאוקלסטים בונים עצם, אוסטאובלסטים מייצרים שומן', isCorrect: false },
      { id: 'c', text: 'שניהם מפרקים גידים ורצועות', isCorrect: false },
      { id: 'd', text: 'הם תאי עצב בחוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 27, 36: אוסטאובלסטים מייצרים ומפרישים את החומר החוץ-תאי של העצם, בעוד אוסטאוקלסטים מפרקים חלקי עצם בלויים לצורך התחדשות.'
  },
  {
    id: 'anat1_18',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'עצם ססמואידית Sesamoid bone (עמ׳ 27, 34)',
    diagramKey: 'knee',
    questionText: 'איזו עצם בגופנו היא הדוגמה המובהקת ביותר לעצם ססמואידית (הנמצאת בתוך גיד)?',
    hint: 'הפיקה בברך.',
    options: [
      { id: 'a', text: 'הפיקה (Patella) בתוך גיד הארבע-ראשי', isCorrect: true },
      { id: 'b', text: 'עצם הזרוע (Humerus)', isCorrect: false },
      { id: 'c', text: 'עצם הירך (Femur)', isCorrect: false },
      { id: 'd', text: 'עצם הבריח (Clavicle)', isCorrect: false }
    ],
    explanation: 'עמ׳ 27, 36: עצם ססמואידית שזורה בתוך גיד; ה-Patella נמצאת בגיד הארבע-ראשי ומשפרת את זווית היישום והמנוף המכני ביישור הברך.'
  },
  {
    id: 'anat1_19',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'לוחית האפיפיזה Epiphyseal Plate (עמ׳ 30, 34)',
    diagramKey: 'spine',
    questionText: 'לוחית האפיפיזה (Epiphyseal Plate) בעצם ארוכה מורכבת מ:',
    hint: 'מאיזה סחוס עשויה לוחית הצמיחה לגובה?',
    options: [
      { id: 'a', text: 'סחוס היאליני המתרבה ומאפשר את צמיחת העצם לאורך', isCorrect: true },
      { id: 'b', text: 'עצם צפופה וקשיחה בלבד ללא סחוס', isCorrect: false },
      { id: 'c', text: 'רקמת שומן צהובה', isCorrect: false },
      { id: 'd', text: 'סיבי אלסטין גמישים בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 30, 36: לוחית האפיפיזה בנויה מסחוס היאליני פעיל המתרבה ומאפשר את התארכות העצם עד סיום גיל ההתבגרות (שם נותר קו אפיפיזה גרמי).'
  },
  {
    id: 'anat1_20',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'הגדרת רצועה Ligament (עמ׳ 18, צפי רביב עמ׳ 30)',
    diagramKey: 'knee',
    questionText: 'מהו תפקידה המרכזי של רצועה (Ligament)?',
    hint: 'מה היא מחברת ומה היא מגבילה?',
    options: [
      { id: 'a', text: 'לחבר עצם לעצם, לשמור על יציבות המפרק ולהגביל עודף תנועה', isCorrect: true },
      { id: 'b', text: 'לחבר שריר לעצם ולהעביר את כוח הכיווץ', isCorrect: false },
      { id: 'c', text: 'לייצר נוזל סינוביאלי לחלל המפרק', isCorrect: false },
      { id: 'd', text: 'לספוג סוכר מזרם הדם', isCorrect: false }
    ],
    explanation: 'עמ׳ 18 וצפי רביב עמ׳ 30: רצועה היא רקמת חיבור צפופה המחברת עצם לעצם ומייצבת את המפרק ע״י הגבלת טווח תנועה עודף.'
  },
  {
    id: 'anat1_21',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'הגדרת גיד Tendon (עמ׳ 17, צפי רביב עמ׳ 31)',
    diagramKey: 'sarcomere',
    questionText: 'מהו תפקידו המרכזי של גיד (Tendon)?',
    hint: 'איזה איבר הוא מחבר לעצם?',
    options: [
      { id: 'a', text: 'לחבר שריר לעצם ולהעביר את כוח כיווץ השריר אל השלד', isCorrect: true },
      { id: 'b', text: 'לחבר עצם לעצם במפרק סינוביאלי', isCorrect: false },
      { id: 'c', text: 'לבלום זעזועים כמו מניסקוס', isCorrect: false },
      { id: 'd', text: 'לייצר סידן בעצמות', isCorrect: false }
    ],
    explanation: 'עמ׳ 17 וצפי רביב עמ׳ 31: גיד הוא המשכה של מעטפת השריר (Fascia), עשוי קולגן צפוף מקביל, ומעביר את כוח השריר לעצם.'
  },
  {
    id: 'anat1_22',
    moduleId: 'anat1',
    topic: 'ביולוגיה של התא',
    title: 'תפקיד המיטוכונדריון (עמ׳ 8, 14)',
    diagramKey: 'energy',
    questionText: 'תפקידו הראשי של אברון המיטוכונדריון בתא הוא:',
    hint: 'שאלה מס׳ 7 בעמ׳ 14.',
    options: [
      { id: 'a', text: 'ייצור אנרגיה זמינה (ATP) בנוכחות חמצן', isCorrect: true },
      { id: 'b', text: 'בניית חלבונים על גבי ה-DNA', isCorrect: false },
      { id: 'c', text: 'פינוי פסולת שתן מהגוף', isCorrect: false },
      { id: 'd', text: 'הגנה מפני קרינת שמש', isCorrect: false }
    ],
    explanation: 'עמ׳ 8, 14: המיטוכונדריון הוא "תחנת הכוח" של התא, שבו מתרחשים מעגל קרבס ושרשרת הנשימה המפיקים ATP בנוכחות חמצן.'
  },
  {
    id: 'anat1_23',
    moduleId: 'anat1',
    topic: 'ביולוגיה של התא',
    title: 'גרעין התא וה-DNA (עמ׳ 11, 14)',
    diagramKey: 'sarcomere',
    questionText: 'מה תפקידו של גרעין התא (Nucleus)?',
    hint: 'שאלה מס׳ 5 בעמ׳ 14.',
    options: [
      { id: 'a', text: 'להכיל את המידע הגנטי (DNA) המשמש כתבנית לבניית חלבוני הגוף', isCorrect: true },
      { id: 'b', text: 'לסנן את זרם הדם מכדוריות אדומות', isCorrect: false },
      { id: 'c', text: 'להניע את גלגל העין', isCorrect: false },
      { id: 'd', text: 'לאגור סידן בשריר השלד', isCorrect: false }
    ],
    explanation: 'עמ׳ 11, 14: גרעין התא מכיל את ה-DNA שבו אגור המידע לבניית כל החלבונים הדרושים לתפקוד התא.'
  },
  {
    id: 'anat1_24',
    moduleId: 'anat1',
    topic: 'ביולוגיה של התא',
    title: 'קרום התא Cell Membrane (עמ׳ 11, 14)',
    diagramKey: 'sarcomere',
    questionText: 'קרום התא (Cell Membrane) מתאפיין בכך שהוא:',
    hint: 'שאלה מס׳ 6 בעמ׳ 14.',
    options: [
      { id: 'a', text: 'גבול סלקטיבי חדיר למחצה המווסת כניסה ויציאה של חומרים אל התא וממנו', isCorrect: true },
      { id: 'b', text: 'קיר אטום לחלוטין ששום חומר אינו יכול לחצות', isCorrect: false },
      { id: 'c', text: 'מורכב מעצם קשיחה וסידן', isCorrect: false },
      { id: 'd', text: 'מייצר כדוריות דם לבנות', isCorrect: false }
    ],
    explanation: 'עמ׳ 11, 14: קרום התא הוא ממברנה ברירנית המאפשרת כניסת מזון וחמצן ופליטת חומרי פסולת.'
  },
  {
    id: 'anat1_25',
    moduleId: 'anat1',
    topic: 'מישורי התנועה',
    title: 'המישור הסגיטלי Sagittal Plane (עמ׳ 44, 127)',
    diagramKey: 'spine',
    questionText: 'המישור החיצי (Sagittal Plane) מחלק את גוף האדם ל:',
    hint: 'שאלה מס׳ 22 בעמ׳ 127.',
    options: [
      { id: 'a', text: 'חלק ימני וחלק שמאלי (בו מתבצעות תנועות כפיפה ופשיטה)', isCorrect: true },
      { id: 'b', text: 'חלק עליון וחלק תחתון', isCorrect: false },
      { id: 'c', text: 'חלק קדמי וחלק אחורי', isCorrect: false },
      { id: 'd', text: 'שכבה שטחית ושכבה עמוקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 44, 127: המישור הסגיטלי חוצה את הגוף לימין ולשמאל; במישור זה מתרחשות תנועות כפיפה (Flexion) ופשיטה (Extension).'
  },
  {
    id: 'anat1_26',
    moduleId: 'anat1',
    topic: 'מישורי התנועה',
    title: 'המישור הרוחבי Transverse Plane (עמ׳ 44, 127)',
    diagramKey: 'spine',
    questionText: 'המישור הרוחבי (Transverse Plane) מחלק את הגוף ל:',
    hint: 'שאלה מס׳ 21 בעמ׳ 127.',
    options: [
      { id: 'a', text: 'חלק עליון (Superior) וחלק תחתון (Inferior)', isCorrect: true },
      { id: 'b', text: 'חלק ימני וחלק שמאלי', isCorrect: false },
      { id: 'c', text: 'חלק קדמי וחלק אחורי', isCorrect: false },
      { id: 'd', text: 'שני חצאים זהים לחלוטין', isCorrect: false }
    ],
    explanation: 'עמ׳ 44, 127: המישור הרוחבי מקביל לאופק ומחלק את הגוף לחלק עליון ותחתון; במישור זה מתבצעות תנועות רוטציה (סיבוב).'
  },
  {
    id: 'anat1_27',
    moduleId: 'anat1',
    topic: 'מישורי התנועה',
    title: 'המישור החזיתי Frontal Plane (עמ׳ 44)',
    diagramKey: 'spine',
    questionText: 'במישור החזיתי (Frontal / Coronal Plane) מתבצעות בעיקר התנועות:',
    hint: 'תנועות התרחקות והתקרבות לקו האמצע.',
    options: [
      { id: 'a', text: 'הרחקה (Abduction) וקירוב (Adduction), וכפיפה צידית', isCorrect: true },
      { id: 'b', text: 'כפיפה ופשיטה בלבד', isCorrect: false },
      { id: 'c', text: 'רוטציה פנימית וחיצונית בלבד', isCorrect: false },
      { id: 'd', text: 'אין תנועה במישור זה', isCorrect: false }
    ],
    explanation: 'עמ׳ 44-45: המישור החזיתי מחלק את הגוף לחלק קדמי ואחורי, ובו מתבצעות הרחקה וקירוב.'
  },
  {
    id: 'anat1_28',
    moduleId: 'anat1',
    topic: 'מושגי יחס אנטומיים',
    title: 'המונח מדיאלי Medial (עמ׳ 45, 127)',
    diagramKey: 'spine',
    questionText: 'חלק מוגדר כ"מדיאלי" (Medial) כאשר הוא:',
    hint: 'שאלה מס׳ 23 בעמ׳ 127.',
    options: [
      { id: 'a', text: 'קרוב יותר לקו האמצע הדמיוני של הגוף', isCorrect: true },
      { id: 'b', text: 'רחוק יותר מקו האמצע לכיוון הצדדים (Lateral)', isCorrect: false },
      { id: 'c', text: 'קרוב יותר לקודקוד הראש (Superior)', isCorrect: false },
      { id: 'd', text: 'רחוק מאוד מהגו בגפיים (Distal)', isCorrect: false }
    ],
    explanation: 'עמ׳ 45, 127: מדיאלי מתאר איבר הקרוב לקו האמצע (למשל: האף מדיאלי לאוזניים; עצם השוק הטיביה מדיאלית לפיבולה).'
  },
  {
    id: 'anat1_29',
    moduleId: 'anat1',
    topic: 'מושגי יחס אנטומיים',
    title: 'פרוקסימלי מול דיסטלי (עמ׳ 45)',
    diagramKey: 'spine',
    questionText: 'בגפה העליונה, מפרק המרפק ביחס למפרק שורש כף היד הוא:',
    hint: 'מי קרוב יותר לחיבור אל הגו?',
    options: [
      { id: 'a', text: 'פרוקסימלי (Proximal - קרוב יותר לנקודת המוצא בגו)', isCorrect: true },
      { id: 'b', text: 'דיסטלי (Distal - רחוק יותר מהגו)', isCorrect: false },
      { id: 'c', text: 'אנטריורי בלבד', isCorrect: false },
      { id: 'd', text: 'פוסטריורי בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 45: פרוקסימלי מתאר נקודה הקרובה יותר לחיבור הגף אל הגו (המרפק פרוקסימלי לכף היד).'
  },
  {
    id: 'anat1_30',
    moduleId: 'anat1',
    topic: 'שלד התוספת',
    title: 'חלקי עצם האגן Pelvis (עמ׳ 76)',
    diagramKey: 'knee',
    questionText: 'כל אחת משתי עצמות האגן (Os Coxae) מורכבת מאיחוי של 3 עצמות:',
    hint: 'עיין בעמוד 76 בחוברת משה שחר.',
    options: [
      { id: 'a', text: 'Ilium (כסל), Ischium (שת/ישיבה), Pubis (חיק)', isCorrect: true },
      { id: 'b', text: 'פמור, טיביה ופיבולה', isCorrect: false },
      { id: 'c', text: 'סקרום, קוקסיקס ואטלס', isCorrect: false },
      { id: 'd', text: 'סטרנום, קלביקולה וסקפולה', isCorrect: false }
    ],
    explanation: 'עמ׳ 76: עצם האגן מורכבת משלוש עצמות שהתאחו: האיליום העליונה, האיסכיום התחתונה-אחורית (עצם הישיבה), והפיוביס הקדמית.'
  },

  // =========================================================================
  // מודול 2: אנטומיה ב' - שרירים, תחל, אחז וניתוח תנועות (35 שאלות)
  // =========================================================================
  {
    id: 'anat2_1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה (עמ׳ 124)',
    diagramKey: 'knee',
    questionText: 'מי מהשרירים הבאים נאחז (Insertion) בעצם השוקית (Fibula)?',
    hint: 'שאלה מס׳ 1 בעמ׳ 124.',
    options: [
      { id: 'a', text: 'Biceps femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 124, 129: Biceps Femoris נאחז בראש הפיבולה; סמיטנדינוסוס וסמיממברנוסוס נאחזים בטיביה.'
  },
  {
    id: 'anat2_2',
    moduleId: 'anat2',
    topic: 'שרירי הבטן',
    title: 'שריר שלא מניע גו (עמ׳ 124)',
    diagramKey: 'sarcomere',
    questionText: 'מי מהשרירים הבאים אינו משתתף בכפיפה (Flexion) או רוטציה של הגו?',
    hint: 'שאלה מס׳ 2 בעמ׳ 124.',
    options: [
      { id: 'a', text: 'Transversus abdominis (הרחב הבטני)', isCorrect: true },
      { id: 'b', text: 'External oblique', isCorrect: false },
      { id: 'c', text: 'Internal oblique', isCorrect: false },
      { id: 'd', text: 'Rectus abdominis', isCorrect: false }
    ],
    explanation: 'עמ׳ 96, 124: ה-Transversus Abdominis סיביו אופקיים והוא מייצב ומעלה לחץ תוך-בטני, אך אינו מניע את השלד.'
  },
  {
    id: 'anat2_3',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'קירוב אופקי ורוטציה פנימית (עמ׳ 124)',
    diagramKey: 'sarcomere',
    questionText: 'התנועות קירוב אופקי (Horizontal Adduction) ורוטציה מדיאלית של הכתף מבוצעות ע״י:',
    hint: 'שאלה מס׳ 3 בעמ׳ 124.',
    options: [
      { id: 'a', text: 'Anterior deltoid (הדלתואיד הקדמי)', isCorrect: true },
      { id: 'b', text: 'Posterior deltoid', isCorrect: false },
      { id: 'c', text: 'Brachialis', isCorrect: false },
      { id: 'd', text: 'Infraspinatus', isCorrect: false }
    ],
    explanation: 'עמ׳ 81, 124: הדלתואיד הקדמי אחראי על כפיפה, קירוב אופקי וסיבוב פנימי במפרק הכתף.'
  },
  {
    id: 'anat2_4',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'שריר שאינו מבצע רוטציה מדיאלית (עמ׳ 124)',
    diagramKey: 'sarcomere',
    questionText: 'מי מהשרירים הבאים אינו מבצע רוטציה מדיאלית (סיבוב פנימי) של הכתף?',
    hint: 'שאלה מס׳ 6 בעמ׳ 124.',
    options: [
      { id: 'a', text: 'Teres minor (מבצע רוטציה לטרלית/חיצונית)', isCorrect: true },
      { id: 'b', text: 'Teres major', isCorrect: false },
      { id: 'c', text: 'Anterior deltoid', isCorrect: false },
      { id: 'd', text: 'Latissimus dorsi', isCorrect: false }
    ],
    explanation: 'עמ׳ 85, 124: Teres Minor ו-Infraspinatus מבצעים רוטציה לטרלית (חיצונית), בעוד שאר הרשומים מבצעים מדיאלית.'
  },
  {
    id: 'anat2_5',
    moduleId: 'anat2',
    topic: 'שרירי השכמה והזרוע',
    title: 'תחל משותף ב-Coracoid Process (עמ׳ 70, 124)',
    diagramKey: 'sarcomere',
    questionText: 'לאיזה זוג שרירים יש תחל (Origin) משותף בזיז ה-Coracoid של השכמה?',
    hint: 'שאלה מס׳ 7 בעמ׳ 124.',
    options: [
      { id: 'a', text: 'הראש הקצר של Biceps Brachii ושריר ה-Coracobrachialis', isCorrect: true },
      { id: 'b', text: 'הראש הארוך של ה-Biceps ושריר ה-Triceps', isCorrect: false },
      { id: 'c', text: 'Deltoid ו-Trapezius', isCorrect: false },
      { id: 'd', text: 'Brachialis ו-Brachioradialis', isCorrect: false }
    ],
    explanation: 'עמ׳ 70, 88-89: זיז הקורקואיד (Coracoid process) משמש תחל לראש הקצר של הבייספס ולשריר הקורקובראכיאליס.'
  },
  {
    id: 'anat2_6',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'מסובבי הכתף Rotator Cuff (עמ׳ 125)',
    diagramKey: 'sarcomere',
    questionText: 'מי מבין מייצבי הכתף (Rotator Cuff) מבצע רוטציה מדיאלית (פנימית)?',
    hint: 'שאלה מס׳ 8 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'Subscapularis', isCorrect: true },
      { id: 'b', text: 'Supraspinatus', isCorrect: false },
      { id: 'c', text: 'Infraspinatus', isCorrect: false },
      { id: 'd', text: 'Teres minor', isCorrect: false }
    ],
    explanation: 'עמ׳ 85, 125: ה-Subscapularis יושב בחלק הקדמי של השכמה ונאחז ב-Lesser Tubercle, ומסובב את הזרוע פנימה.'
  },
  {
    id: 'anat2_7',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'רוטציה לטרלית של הירך (עמ׳ 125)',
    diagramKey: 'knee',
    questionText: 'מי מהשרירים הבאים מבצע רוטציה לטרלית (סיבוב חיצוני) של מפרק הירך?',
    hint: 'שאלה מס׳ 9 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'Iliopsoas (וגם Gluteus maximus, Piriformis)', isCorrect: true },
      { id: 'b', text: 'Latissimus dorsi', isCorrect: false },
      { id: 'c', text: 'Rhomboids', isCorrect: false },
      { id: 'd', text: 'Pectineus בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 115, 125: שריר ה-Iliopsoas מבצע כפיפת ירך וסיבוב חיצוני (רוטציה לטרלית) במפרק הירך.'
  },
  {
    id: 'anat2_8',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'קירוב מפרק הכתף Adduction (עמ׳ 125)',
    diagramKey: 'sarcomere',
    questionText: 'מי מהשרירים הבאים מבצע קירוב (Adduction) במפרק הכתף?',
    hint: 'שאלה מס׳ 10 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'Teres major (יחד עם Latissimus dorsi ו-Pectoralis major)', isCorrect: true },
      { id: 'b', text: 'Gluteus minimus', isCorrect: false },
      { id: 'c', text: 'Supraspinatus (מבצע הרחקה)', isCorrect: false },
      { id: 'd', text: 'Serratus anterior', isCorrect: false }
    ],
    explanation: 'עמ׳ 86, 125: ה-Teres Major נאחז בחריץ הביציפיטלי של ההומרוס ומבצע קירוב, פשיטה וסיבוב פנימי בכתף.'
  },
  {
    id: 'anat2_9',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'אחז ב-Greater Trochanter (עמ׳ 125)',
    diagramKey: 'knee',
    questionText: 'ה-Greater Trochanter של הפמור מהווה נקודת אחיזה (Insertion) לשריר:',
    hint: 'שאלה מס׳ 11 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'Gluteus medius', isCorrect: true },
      { id: 'b', text: 'Iliopsoas', isCorrect: false },
      { id: 'c', text: 'Gluteus maximus', isCorrect: false },
      { id: 'd', text: 'Hamstrings', isCorrect: false }
    ],
    explanation: 'עמ׳ 118, 125: Gluteus Medius (וגם Minimus) נאחזים ב-Greater Trochanter ומרחיקים את הירך.'
  },
  {
    id: 'anat2_10',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'תחל בעצם ה-Femur (עמ׳ 125)',
    diagramKey: 'knee',
    questionText: 'מי מהשרירים הבאים מתחיל (Origin) מעצם הירך (Femur)?',
    hint: 'שאלה מס׳ 12 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'Vastus intermedius', isCorrect: true },
      { id: 'b', text: 'Rectus femoris (מתחיל באגן ב-AIIS)', isCorrect: false },
      { id: 'c', text: 'Iliopsoas', isCorrect: false },
      { id: 'd', text: 'Semitendinosus', isCorrect: false }
    ],
    explanation: 'עמ׳ 108, 125: שלושת ראשי ה-Vastus מתחילים בפמור עצמה, בניגוד לרקטוס פמוריס שמתחיל באגן.'
  },
  {
    id: 'anat2_11',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'תחל בשליש הלטרלי של הבריח (עמ׳ 125)',
    diagramKey: 'sarcomere',
    questionText: 'לאיזה שריר יש תחל (Origin) בשליש הלטרלי של עצם הבריח (Clavicle)?',
    hint: 'שאלה מס׳ 13 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'Anterior deltoid', isCorrect: true },
      { id: 'b', text: 'Lower trapezius', isCorrect: false },
      { id: 'c', text: 'Upper pectoralis major', isCorrect: false },
      { id: 'd', text: 'Latissimus dorsi', isCorrect: false }
    ],
    explanation: 'עמ׳ 81, 125: הדלתואיד הקדמי מתחיל בשליש הלטרלי של עצם הבריח.'
  },
  {
    id: 'anat2_12',
    moduleId: 'anat2',
    topic: 'מפרק הברך',
    title: 'רצועות קולטרליות LCL ו-MCL (עמ׳ 125)',
    diagramKey: 'knee',
    questionText: 'הרצועות הקולטרליות בברך (MCL ו-LCL):',
    hint: 'שאלה מס׳ 14 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'שומרות על יציבות לטרלית ומדיאלית (מונעות קריסה פנימה והחוצה)', isCorrect: true },
      { id: 'b', text: 'שומרות על יציבות קדמית-אחורית', isCorrect: false },
      { id: 'c', text: 'מונעות כפיפה בירך', isCorrect: false },
      { id: 'd', text: 'יוצרות נוזל סינוביאלי', isCorrect: false }
    ],
    explanation: 'עמ׳ 110, 125: ה-MCL וה-LCL נמצאות בצידי הברך ומגנות מפני עומסי ואלגוס ווארוס (קריסה לצדדים).'
  },
  {
    id: 'anat2_13',
    moduleId: 'anat2',
    topic: 'שרירי הבטן',
    title: 'רוטציה של הגו שמאלה (עמ׳ 125)',
    diagramKey: 'sarcomere',
    questionText: 'השרירים המבצעים רוטציה של הגו שמאלה הם:',
    hint: 'שאלה מס׳ 15 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'אלכסון פנימי שמאל + אלכסון חיצוני ימין', isCorrect: true },
      { id: 'b', text: 'אלכסון פנימי ימין + אלכסון חיצוני שמאל', isCorrect: false },
      { id: 'c', text: 'הישר הבטני משני הצדדים', isCorrect: false },
      { id: 'd', text: 'זוקפי הגב בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 94-95, 125: שריר האלכסון הפנימי מסובב לאותו צד, והאלכסון החיצוני מסובב לצד הנגדי.'
  },
  {
    id: 'anat2_14',
    moduleId: 'anat2',
    topic: 'שרירי הקרסול',
    title: 'הליכה על עקבים Dorsiflexion (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'אתה הולך על העקבים ומרים את בהונות כף הרגל מעלה. איזה שריר פעל?',
    hint: 'שאלה מס׳ 16 בעמ׳ 126.',
    options: [
      { id: 'a', text: 'Tibialis anterior', isCorrect: true },
      { id: 'b', text: 'Gastrocnemius', isCorrect: false },
      { id: 'c', text: 'Soleus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 122, 126: ה-Tibialis Anterior הוא המבצע העיקרי של Dorsiflexion והרמת כף הרגל.'
  },
  {
    id: 'anat2_15',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'פשיטת ירך ראשית (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'פשיטת ירך (Hip Extension) מבוצעת בעוצמה ע״י:',
    hint: 'שאלה מס׳ 17 בעמ׳ 126.',
    options: [
      { id: 'a', text: 'Gluteus maximus', isCorrect: true },
      { id: 'b', text: 'Iliopsoas', isCorrect: false },
      { id: 'c', text: 'Rectus femoris', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 117, 126: הגלוטאוס מקסימוס הוא השריר העיקרי המבצע פשיטת ירך כנגד התנגדות.'
  },
  {
    id: 'anat2_16',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'תחל ואחז של Psoas Major (עמ׳ 126)',
    diagramKey: 'spine',
    questionText: 'שריר ה-Psoas Major:',
    hint: 'שאלה מס׳ 18 בעמ׳ 126.',
    options: [
      { id: 'a', text: 'מתחיל בחוליות T12-L5, מסתיים ב-Lesser Trochanter ומבצע כפיפת ירך', isCorrect: true },
      { id: 'b', text: 'מתחיל באגן ומסתיים בטיביה', isCorrect: false },
      { id: 'c', text: 'מסתיים ב-Greater Trochanter ומבצע פשיטת ירך', isCorrect: false },
      { id: 'd', text: 'מבצע פשיטת ברך בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 116, 126: הפסואס מייג\'ור יוצא מחוליות המותניים ונאחז ב-Lesser Trochanter של הפמור ומבצע כפיפת ירך.'
  },
  {
    id: 'anat2_17',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'פגיעה בהרחקת ירך Abduction (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'תנועת ה-Abduction נחלשת בירך. איזה שריר נפגע?',
    hint: 'שאלה מס׳ 19 בעמ׳ 126.',
    options: [
      { id: 'a', text: 'Gluteus medius', isCorrect: true },
      { id: 'b', text: 'Quadriceps', isCorrect: false },
      { id: 'c', text: 'Vastus medialis', isCorrect: false },
      { id: 'd', text: 'Hamstrings', isCorrect: false }
    ],
    explanation: 'עמ׳ 118, 126: הגלוטאוס מדיוס הוא המרחיק (Abductor) הראשי של מפרק הירך.'
  },
  {
    id: 'anat2_18',
    moduleId: 'anat2',
    topic: 'שרירי השוק',
    title: 'עלייה על קצות האצבעות (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'עלייה על קצות האצבעות (Plantarflexion) מבוצעת באמצעות:',
    hint: 'שאלה מס׳ 20 בעמ׳ 126.',
    options: [
      { id: 'a', text: 'Gastrocnemius ו-Soleus', isCorrect: true },
      { id: 'b', text: 'Quadriceps', isCorrect: false },
      { id: 'c', text: 'Hamstrings', isCorrect: false },
      { id: 'd', text: 'Tibialis anterior', isCorrect: false }
    ],
    explanation: 'עמ׳ 120, 126: שרירי השוק האחוריים (תאומים וסולאוס) מרימים את העקב ומבצעים פלנטרפלקשן.'
  },
  {
    id: 'anat2_19',
    moduleId: 'anat2',
    topic: 'שרירי השכמה',
    title: 'שרירים הנאחזים בגבול הלטרלי של השכמה (עמ׳ 127)',
    diagramKey: 'sarcomere',
    questionText: 'מי מהשרירים הבאים מחובר לגבול הלטרלי (חיצוני) של השכמה?',
    hint: 'שאלה מס׳ 25 בעמ׳ 127.',
    options: [
      { id: 'a', text: 'Teres minor, Teres major, והראש הארוך של Triceps (כל התשובות נכונות)', isCorrect: true },
      { id: 'b', text: 'Pectoralis major', isCorrect: false },
      { id: 'c', text: 'Biceps brachii', isCorrect: false },
      { id: 'd', text: 'Trapezius', isCorrect: false }
    ],
    explanation: 'עמ׳ 70, 84-86, 127: בגבול הלטרלי של השכמה נאחזים טרז מייג\'ור, טרז מינור, ומתחת לגלנואיד הראש הארוך של הטריספס.'
  },
  {
    id: 'anat2_20',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'פשיטת כתף ע״י ראש ארוך של טריספס (עמ׳ 127)',
    diagramKey: 'sarcomere',
    questionText: 'פשיטת כתף (Shoulder Extension) תתבצע ע״י איזה שריר זרוע?',
    hint: 'שאלה מס׳ 26 בעמ׳ 127.',
    options: [
      { id: 'a', text: 'Long head of triceps (הראש הארוך של ה-Triceps Brachii)', isCorrect: true },
      { id: 'b', text: 'Long head of biceps', isCorrect: false },
      { id: 'c', text: 'Upper pectoralis', isCorrect: false },
      { id: 'd', text: 'Anterior deltoid', isCorrect: false }
    ],
    explanation: 'עמ׳ 90, 127: הראש הארוך של הטריספס מתחיל בשכמה (Infraglenoid tubercle) וחוצה את מפרק הכתף ולכן מבצע פשיטת כתף.'
  },
  {
    id: 'anat2_21',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'שריר בחלק האחורי של הירך (עמ׳ 128)',
    diagramKey: 'knee',
    questionText: 'בחלק האחורי של עצם הירך נמצא השריר:',
    hint: 'שאלה מס׳ 27 בעמ׳ 128.',
    options: [
      { id: 'a', text: 'Semitendinosus (מקבוצת ההמסטרינגס)', isCorrect: true },
      { id: 'b', text: 'Transversus abdominis', isCorrect: false },
      { id: 'c', text: 'Gluteus minimus', isCorrect: false },
      { id: 'd', text: 'Rectus femoris', isCorrect: false }
    ],
    explanation: 'עמ׳ 109, 128: ה-Semitendinosus נמצא במדור האחורי של הירך יחד עם Semimembranosus ו-Biceps Femoris.'
  },
  {
    id: 'anat2_22',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'קירוב מפרק הכתף (עמ׳ 128)',
    diagramKey: 'sarcomere',
    questionText: 'מי מהשרירים הבאים מבצע קירוב (Adduction) במפרק הכתף?',
    hint: 'שאלה מס׳ 28 בעמ׳ 128.',
    options: [
      { id: 'a', text: 'Lower pectoralis major', isCorrect: true },
      { id: 'b', text: 'Supraspinatus', isCorrect: false },
      { id: 'c', text: 'Brachioradialis', isCorrect: false },
      { id: 'd', text: 'Middle deltoid', isCorrect: false }
    ],
    explanation: 'עמ׳ 82, 128: הסיבים התחתונים של ה-Pectoralis Major מבצעים קירוב חזק של הזרוע לכיוון מרכז הגוף.'
  },
  {
    id: 'anat2_23',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'פשיטת ברך ע״י הארבע-ראשי (עמ׳ 128)',
    diagramKey: 'knee',
    questionText: 'פשיטת ברך (Knee Extension) תתבצע ע״י:',
    hint: 'שאלה מס׳ 29 בעמ׳ 128.',
    options: [
      { id: 'a', text: 'כל ראשי הארבע-ראשי: Rectus femoris, Vastus lateralis, Vastus medialis (כל התשובות נכונות)', isCorrect: true },
      { id: 'b', text: 'Biceps femoris', isCorrect: false },
      { id: 'c', text: 'Gastrocnemius', isCorrect: false },
      { id: 'd', text: 'Gracilis', isCorrect: false }
    ],
    explanation: 'עמ׳ 107-108, 128: כל ארבעת ראשי ה-Quadriceps מתחברים לגיד הפיקה ול-Tibial Tuberosity ומבצעים פשיטת ברך.'
  },
  {
    id: 'anat2_24',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'הרחקה אופקית של הכתף (עמ׳ 128)',
    diagramKey: 'sarcomere',
    questionText: 'הרחקה אופקית (Horizontal Abduction) של הכתף מבוצעת ע״י:',
    hint: 'שאלה מס׳ 30 בעמ׳ 128.',
    options: [
      { id: 'a', text: 'Posterior Deltoid (דלתואיד אחורי)', isCorrect: true },
      { id: 'b', text: 'Middle deltoid', isCorrect: false },
      { id: 'c', text: 'Pectoralis major', isCorrect: false },
      { id: 'd', text: 'Biceps brachii', isCorrect: false }
    ],
    explanation: 'עמ׳ 81, 128: הדלתואיד האחורי הוא המבצע העיקרי של הרחקה אופקית ופשיטה בכתף.'
  },
  {
    id: 'anat2_25',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'קבוצת שרירי Hamstrings (עמ׳ 128)',
    diagramKey: 'knee',
    questionText: 'שריר ה-Biceps Femoris הוא חלק מקבוצת:',
    hint: 'שאלה מס׳ 31 בעמ׳ 128.',
    options: [
      { id: 'a', text: 'Hamstrings (שרירי מיתר הירך)', isCorrect: true },
      { id: 'b', text: 'Quadriceps', isCorrect: false },
      { id: 'c', text: 'Triceps brachii', isCorrect: false },
      { id: 'd', text: 'Rotator cuff', isCorrect: false }
    ],
    explanation: 'עמ׳ 109, 128: קבוצת ההמסטרינגס כוללת את Biceps Femoris, Semitendinosus ו-Semimembranosus.'
  },
  {
    id: 'anat2_26',
    moduleId: 'anat2',
    topic: 'שרירי הזרוע והאמה',
    title: 'חיבור לעצם האולנה Ulna (עמ׳ 128)',
    diagramKey: 'sarcomere',
    questionText: 'מי מבין השרירים הבאים אינו מחובר לעצם ה-Ulna באמה?',
    hint: 'שאלה מס׳ 32 בעמ׳ 128. זכור לאן מתחבר Biceps Brachii!',
    options: [
      { id: 'a', text: 'Biceps brachii (נאחז ברדיוס ב-Radial Tuberosity)', isCorrect: true },
      { id: 'b', text: 'Triceps brachii (נאחז באולקרנון באולנה)', isCorrect: false },
      { id: 'c', text: 'Brachialis (נאחז ב-Ulnar Tuberosity)', isCorrect: false },
      { id: 'd', text: 'Anconeus', isCorrect: false }
    ],
    explanation: 'עמ׳ 73, 88, 128: ה-Biceps Brachii נאחז בעצם הרדיוס ומבצע סופינציה; הוא אינו מתחבר לאולנה.'
  },
  {
    id: 'anat2_27',
    moduleId: 'anat2',
    topic: 'מפרקי השלד',
    title: 'חיבור שלד ציר לשלד תוספת (עמ׳ 128)',
    diagramKey: 'spine',
    questionText: 'איזה מפרק משמש לחיבור בין שלד הציר לבין שלד התוספת התחתונה?',
    hint: 'שאלה מס׳ 33 בעמ׳ 128.',
    options: [
      { id: 'a', text: 'Sacroiliac joint (SIJ - מפרק העצה והכסל)', isCorrect: true },
      { id: 'b', text: 'Hip joint', isCorrect: false },
      { id: 'c', text: 'Pubic symphysis', isCorrect: false },
      { id: 'd', text: 'Knee joint', isCorrect: false }
    ],
    explanation: 'עמ׳ 103, 128: מפרק ה-Sacroiliac (SIJ) מחבר את עצם הסקרום (שלד ציר) לעצם האיליום של האגן (שלד תוספת).'
  },
  {
    id: 'anat2_28',
    moduleId: 'anat2',
    topic: 'שרירי השכמה',
    title: 'הרחקה והצמדת שכמות Serratus Anterior (עמ׳ 87)',
    diagramKey: 'sarcomere',
    questionText: 'שריר ה-Serratus Anterior (המסור הקדמי) מתחיל בצלעות ונאחז בגבול המדיאלי של השכמה. תפקידו העיקרי הוא:',
    hint: 'הצמדת השכמה לבית החזה והרחקתה (Protraction).',
    options: [
      { id: 'a', text: 'הרחקת שכמות (Protraction), סיבוב מעלה (Upward rotation) והצמדת השכמה לצלעות', isCorrect: true },
      { id: 'b', text: 'קירוב שכמות לאחור (Retraction)', isCorrect: false },
      { id: 'c', text: 'פשיטת מרפק', isCorrect: false },
      { id: 'd', text: 'כפיפת ברך', isCorrect: false }
    ],
    explanation: 'עמ׳ 87: הסרטוס אנטריור מצמיד את השכמה לכלוב בית החזה; חולשתו גורמת לתופעת "שכמה מכונפת" (Winged Scapula).'
  },
  {
    id: 'anat2_29',
    moduleId: 'anat2',
    topic: 'שרירי השכמה',
    title: 'צמד כוחות בסיבוב שכמה (עמ׳ 78)',
    diagramKey: 'sarcomere',
    questionText: 'איזה שריר עובד כ"צמד כוחות" (Couple Force) לביצוע סיבוב מעלה (Upward Rotation) של השכמה יחד עם הסרטוס?',
    hint: 'חלקיו העליונים והתחתונים מושכים בכיוונים מנוגדים.',
    options: [
      { id: 'a', text: 'שריר הטרפז (Trapezius) - חלק עליון ותחתון יחד', isCorrect: true },
      { id: 'b', text: 'הרומבואידים בלבד', isCorrect: false },
      { id: 'c', text: 'הישר הבטני', isCorrect: false },
      { id: 'd', text: 'הדלתואיד האחורי', isCorrect: false }
    ],
    explanation: 'עמ׳ 78: הסיבים העליונים של הטרפז מושכים מעלה והתחתונים מושכים מטה, ויחד עם הסרטוס מסובבים את השכמה מעלה בעת הרמת היד מעל הראש.'
  },
  {
    id: 'anat2_30',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'שריר ה-Sartorius שריר החייטים (עמ׳ 108, סיכום אנטומיה ב׳)',
    diagramKey: 'knee',
    questionText: 'שריר ה-Sartorius (שריר החייטים) הוא השריר הארוך ביותר בגוף. אילו פעולות הוא מבצע?',
    hint: 'תנוחת הישיבה המזרחית של החייט.',
    options: [
      { id: 'a', text: 'כפיפה, הרחקה וסיבוב חיצוני בירך, יחד עם כפיפת ברך', isCorrect: true },
      { id: 'b', text: 'פשיטת ברך ופשיטת ירך', isCorrect: false },
      { id: 'c', text: 'קירוב ירך בלבד', isCorrect: false },
      { id: 'd', text: 'Dorsiflexion בקרסול', isCorrect: false }
    ],
    explanation: 'סיכום אנטומיה ב׳: הסרטוריוס מתחיל ב-ASIS ומסתיים ב-Pes Anserinus בטיביה ומבצע כפיפה, הרחקה ורוטציה לטרלית בירך וכפיפה בברך.'
  },
  {
    id: 'anat2_31',
    moduleId: 'anat2',
    topic: 'שרירי האמה',
    title: 'שריר הסופינטור העיקרי במרפק כפוף (עמ׳ 88)',
    diagramKey: 'sarcomere',
    questionText: 'מי מבין השרירים הבאים הוא ה"סופינטור" (Supinator) העוצמתי ביותר כאשר מפרק המרפק כפוף ב-90 מעלות?',
    hint: 'השריר הדו-ראשי הזרועי.',
    options: [
      { id: 'a', text: 'Biceps Brachii', isCorrect: true },
      { id: 'b', text: 'Brachialis', isCorrect: false },
      { id: 'c', text: 'Triceps Brachii', isCorrect: false },
      { id: 'd', text: 'Pronator Teres', isCorrect: false }
    ],
    explanation: 'עמ׳ 88: ה-Biceps Brachii נאחז ברדיוס ובזווית של 90 מעלות מרפק הוא הסופינטור החזק ביותר בגוף.'
  },
  {
    id: 'anat2_32',
    moduleId: 'anat2',
    topic: 'שרירי הגב העמוקים',
    title: 'זוקפי עמוד השדרה Erector Spinae (עמ׳ 98)',
    diagramKey: 'spine',
    questionText: 'קבוצת שרירי ה-Erector Spinae כוללת שלושה שרירי אורך מלטראל למדיאל:',
    hint: 'איליו-קוסטליס, לונגיסימוס, ספינליס.',
    options: [
      { id: 'a', text: 'Iliocostalis (לטרלי), Longissimus (אמצעי), Spinalis (מדיאלי)', isCorrect: true },
      { id: 'b', text: 'טרפז, דלתואיד ורחב גבי', isCorrect: false },
      { id: 'c', text: 'פסואס, איליאקוס וגלוטאוס', isCorrect: false },
      { id: 'd', text: 'המסטרינגס, קוודריספס וגסטרוקנמיוס', isCorrect: false }
    ],
    explanation: 'עמ׳ 98: שרירי זוקפי הגב השטחיים מסודרים ב-3 עמודות שריריות המיישרות וזוקפות את עמוד השדרה.'
  },
  {
    id: 'anat2_33',
    moduleId: 'anat2',
    topic: 'שרירי הגב העמוקים',
    title: 'שריר ה-Quadratus Lumborum (עמ׳ 100)',
    diagramKey: 'spine',
    questionText: 'שריר ה-Quadratus Lumborum מחבר את האגן לחוליות המותניים L1-L4 ולצלע 12. בכיווץ חד-צדדי הוא מבצע:',
    hint: 'הרמת אגן או הטיית גו הצידה.',
    options: [
      { id: 'a', text: 'כפיפה צידית של הגו (Ipsilateral Side Flexion) והרמת אגן', isCorrect: true },
      { id: 'b', text: 'כפיפת ראש קדימה', isCorrect: false },
      { id: 'c', text: 'כפיפת ברך', isCorrect: false },
      { id: 'd', text: 'סיבוב פנימי של הזרוע', isCorrect: false }
    ],
    explanation: 'עמ׳ 100: ה-Quadratus Lumborum הוא שריר עמוק בדופן הבטן האחורית המבצע כפיפה צידית של הגו והרמת אגן.'
  },
  {
    id: 'anat2_34',
    moduleId: 'anat2',
    topic: 'שרירי השוק והקרסול',
    title: 'השריר השומר על קשת כף הרגל (עמ׳ 122)',
    diagramKey: 'knee',
    questionText: 'איזה שריר תומך בצורה משמעותית בקשת המדיאלית של כף הרגל ומונע קריסה (פלטפוס)?',
    hint: 'עיין בעמוד 122 בחוברת שחר ובטבלת התנועות.',
    options: [
      { id: 'a', text: 'Tibialis Posterior ו-Tibialis Anterior', isCorrect: true },
      { id: 'b', text: 'Biceps Femoris', isCorrect: false },
      { id: 'c', text: 'Gluteus Maximus', isCorrect: false },
      { id: 'd', text: 'Triceps Brachii', isCorrect: false }
    ],
    explanation: 'עמ׳ 122 וטבלת תנועות: ה-Tibialis Posterior וה-Anterior נאחזים מתחת לקשת המדיאלית ותומכים בה בעת דריכה והליכה.'
  },
  {
    id: 'anat2_35',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'שריר ה-Piriformis והעצב הסיאטי (סיכום אנטומיה ב׳)',
    diagramKey: 'knee',
    questionText: 'מתחת לאיזה שריר עמוק בישבן עובר העצב הגדול ביותר בגוף (Sciatic Nerve)?',
    hint: 'שריר האגס המבצע רוטציה לטרלית בירך.',
    options: [
      { id: 'a', text: 'Piriformis (שריר האגס)', isCorrect: true },
      { id: 'b', text: 'Pectineus', isCorrect: false },
      { id: 'c', text: 'Rectus Abdominis', isCorrect: false },
      { id: 'd', text: 'Serratus Anterior', isCorrect: false }
    ],
    explanation: 'סיכום אנטומיה ב׳: העצב הסיאטי (Sciatic nerve) עובר ישירות מתחת לשריר ה-Piriformis; עווית בשריר עלולה ללחוץ על העצב ולהקרין כאב לכל אורך הרגל.'
  },

  // =========================================================================
  // מודול 3: פיזיולוגיה א' - אנרגיה, מטבוליזם וגליקוליזה (27 שאלות)
  // =========================================================================
  {
    id: 'phys1_1',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מקור אנרגיה במרתון (חוברת פיזיו עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'מקורם העיקרי של מולקולות ה-ATP במהלך ריצת מרתון הוא:',
    hint: 'שאלה מס׳ 1 בעמ׳ 47.',
    options: [
      { id: 'a', text: 'בשומנים (ובפחמימות במסלול האירובי)', isCorrect: true },
      { id: 'b', text: 'במסלול האנאירובי אלקטי בלבד', isCorrect: false },
      { id: 'c', text: 'בחלבונים בלבד', isCorrect: false },
      { id: 'd', text: 'בוויטמינים', isCorrect: false }
    ],
    explanation: 'פיזיולוגיה עמ׳ 47, 50: במאמץ אירובי ממושך מעל חצי שעה, שומנים מהווים מקור אנרגיה עיקרי במסלול האירובי (בנוכחות חמצן במיטוכונדריה).'
  },
  {
    id: 'phys1_2',
    moduleId: 'phys1',
    topic: 'סף אנאירובי ומרתון',
    title: 'הצלחה בריצת מרתון (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'כדי להצליח להגיע למקום הראשון בריצת מרתון יש משמעות מכרעת ל:',
    hint: 'שאלה מס׳ 2 בעמ׳ 47.',
    options: [
      { id: 'a', text: 'סף אנאירובי גבוה, צח"מ גבוה, ותפריט עשיר בפחמימות (כל התשובות נכונות)', isCorrect: true },
      { id: 'b', text: 'כוח מתפרץ בלבד', isCorrect: false },
      { id: 'c', text: 'מאגרי שומן בלתי מוגבלים ללא צורך בחמצן', isCorrect: false },
      { id: 'd', text: 'אימון של 10 שניות בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 41-43, 47: במרתון דרוש שילוב של סף אנאירובי גבוה (המאפשר קצב מהיר ללא הצטברות לקטט), צח"מ ומאגרי גליקוגן מלאים.'
  },
  {
    id: 'phys1_3',
    moduleId: 'phys1',
    topic: 'דלק מטבולי במאמץ',
    title: 'תרומת שומנים מול עצימות (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'בזמן מאמץ גופני, התרומה היחסית של השומנים כמקור אנרגיה:',
    hint: 'שאלה מס׳ 3 בעמ׳ 47.',
    options: [
      { id: 'a', text: 'יורדת ככל שמתגברת עצימות המאמץ (ועולה חלקן של הפחמימות)', isCorrect: true },
      { id: 'b', text: 'עולה ככל שמתגברת עצימות המאמץ', isCorrect: false },
      { id: 'c', text: 'זהה בכל דרגות המאמץ', isCorrect: false },
      { id: 'd', text: 'שומן משמש רק באימוני ספרינט של 10 שניות', isCorrect: false }
    ],
    explanation: 'עמ׳ 32-33: ככל שהעצימות עולה התא מעדיף פחמימות כי הן מפיקות יותר ATP עבור כל ליטר חמצן (יעילות מטבולית).'
  },
  {
    id: 'phys1_4',
    moduleId: 'phys1',
    topic: 'צריכת חמצן מרבית',
    title: 'הגעה לצח"מ (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'מה לא סביר שיקרה עם ההגעה לצריכת החמצן המרבית (צח"מ)?',
    hint: 'שאלה מס׳ 4 בעמ׳ 47. כמה זמן אפשר להחזיק מעמד בצח"מ?',
    options: [
      { id: 'a', text: 'התמדה באותה עצימות מרבית במשך 20 דקות רצופות', isCorrect: true },
      { id: 'b', text: 'השגת דופק מרבי', isCorrect: false },
      { id: 'c', text: 'השגת אוורור ריאות מרבי', isCorrect: false },
      { id: 'd', text: 'הצטברות משמעותית של לקטט ויוני מימן', isCorrect: false }
    ],
    explanation: 'עמ׳ 36, 47: בצח"מ הגוף פועל בהספק אירובי מקסימלי עם עזרה אנאירובית מסיבית וניתן להחזיק בו מעמד רק 2-4 דקות.'
  },
  {
    id: 'phys1_5',
    moduleId: 'phys1',
    topic: 'חשיבות צח"מ בענפי ספורט',
    title: 'ענפי ספורט וצח"מ (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'באילו מענפי הספורט הבאים קיימת חשיבות גבוהה ביותר לצח"מ גבוה?',
    hint: 'שאלה מס׳ 5 בעמ׳ 47.',
    options: [
      { id: 'a', text: 'שחיית 400 מטר (מאמץ של כ-4 דקות)', isCorrect: true },
      { id: 'b', text: 'ריצת 200 מטר (כ-20 שניות)', isCorrect: false },
      { id: 'c', text: 'הטלת כידון', isCorrect: false },
      { id: 'd', text: 'משחק באולינג', isCorrect: false }
    ],
    explanation: 'עמ׳ 36, 47: שחיית 400 מטר נמשכת כ-4 דקות ומסתמכת בלמעלה מ-70% על המערכת האירובית בהספק מרבי.'
  },
  {
    id: 'phys1_6',
    moduleId: 'phys1',
    topic: 'מעגל קורי',
    title: 'פינוי לקטט במעגל קורי (עמ׳ 47)',
    diagramKey: 'cori',
    questionText: 'במעגל קורי (Cori Cycle):',
    hint: 'שאלה מס׳ 6 בעמ׳ 47.',
    options: [
      { id: 'a', text: 'לקטט הופך שוב לגלוקוז בתאי הכבד (בהשקעת אנרגיה)', isCorrect: true },
      { id: 'b', text: 'לקטט הופך לגלוקוז בתוך השריר הפעיל עצמו', isCorrect: false },
      { id: 'c', text: 'לקטט הופך לשומן בתוך הריאות', isCorrect: false },
      { id: 'd', text: 'לקטט מסולק מהגוף ישירות דרך הנשיפה', isCorrect: false }
    ],
    explanation: 'עמ׳ 39, 47: הלקטט המפונה מהשריר לדם מגיע לכבד ובתהליך גלוקונאוגנזה ממוחזר חזרה לגלוקוז.'
  },
  {
    id: 'phys1_7',
    moduleId: 'phys1',
    topic: 'מאגרי אנרגיה',
    title: 'מאגרי הגליקוגן (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'עיקר הגליקוגן נאגר בגוף ב:',
    hint: 'שאלה מס׳ 7 בעמ׳ 47.',
    options: [
      { id: 'a', text: 'בשרירי השלד ובכבד', isCorrect: true },
      { id: 'b', text: 'במוח ובעצמות', isCorrect: false },
      { id: 'c', text: 'ברקמת השומן בלבד', isCorrect: false },
      { id: 'd', text: 'בקיבה ובמעיים', isCorrect: false }
    ],
    explanation: 'עמ׳ 13, 47: כ-300-400 גרם גליקוגן נאגרים בשרירי השלד ועוד כ-70-100 גרם בכבד.'
  },
  {
    id: 'phys1_8',
    moduleId: 'phys1',
    topic: 'סף אנאירובי וצח"מ',
    title: 'השוואה בין שני אתלטים (עמ׳ 48)',
    diagramKey: 'energy',
    questionText: 'בהשוואה בין שני אתלטים בעלי VO2max זהה אך סף אנאירובי שונה:',
    hint: 'שאלה מס׳ 8 בעמ׳ 48.',
    options: [
      { id: 'a', text: 'לבעל הסף האנאירובי הגבוה יותר יתרון ברור בריצת מרתון ומאמצי סיבולת', isCorrect: true },
      { id: 'b', text: 'לבעל הסף האנאירובי הנמוך יתרון במרתון', isCorrect: false },
      { id: 'c', text: 'אין שום הבדל בביצועים ביניהם', isCorrect: false },
      { id: 'd', text: 'שניהם יתעייפו בדיוק באותה דקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 42, 48: סף אנאירובי גבוה מאפשר להתמיד בקצב ריצה מהיר יותר לאורך זמן מבלי לצבור חומציות ולקטט.'
  },
  {
    id: 'phys1_9',
    moduleId: 'phys1',
    topic: 'התאוששות',
    title: 'עצימות התאוששות אקטיבית (עמ׳ 48)',
    diagramKey: 'cori',
    questionText: 'עצימות ההתאוששות האקטיבית המומלצת לפינוי מהיר של לקטט לאחר מאמץ עצים היא:',
    hint: 'שאלה מס׳ 9 בעמ׳ 48.',
    options: [
      { id: 'a', text: '35%-50% מצח"מ (פעילות קלה כמו ריצה קלה)', isCorrect: true },
      { id: 'b', text: '80%-100% מצח"מ', isCorrect: false },
      { id: 'c', text: 'מנוחה מוחלטת במיטה', isCorrect: false },
      { id: 'd', text: 'אימון משקולות כבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 46, 48: פעילות אירובית קלה מזרימה דם ומפנה את הלקטט במהירות לפירוק בלב, בכבד ובשרירים הפחות פעילים.'
  },
  {
    id: 'phys1_10',
    moduleId: 'phys1',
    topic: 'גליקוגן וביצועים',
    title: 'ריכוז גליקוגן בשריר (עמ׳ 48)',
    diagramKey: 'energy',
    questionText: 'בהשוואה בין שני אתלטים, ספורטאי בעל ריכוז גבוה יותר של גליקוגן בשריר:',
    hint: 'שאלה מס׳ 11 בעמ׳ 48.',
    options: [
      { id: 'a', text: 'נהנה מיתרון ברור במאמצים בינוניים (1500 מ׳) וגם במרתון', isCorrect: true },
      { id: 'b', text: 'אין שום חשיבות לריכוז הגליקוגן', isCorrect: false },
      { id: 'c', text: 'יתעייף מהר יותר', isCorrect: false },
      { id: 'd', text: 'לא יוכל לשרוף שומנים', isCorrect: false }
    ],
    explanation: 'עמ׳ 13, 48: מאגרי גליקוגן מלאים הם תנאי הכרחי לשמירה על קצב ריצה גבוה ודחיית עייפות במאמצים בינוניים וממושכים.'
  },
  {
    id: 'phys1_11',
    moduleId: 'phys1',
    topic: 'תזונת ספורט',
    title: 'תפריט יומי של רץ מרתון (עמ׳ 48)',
    diagramKey: 'energy',
    questionText: 'תפריט יומי של רץ מרתון צריך לכלול בעיקר:',
    hint: 'שאלה מס׳ 12 בעמ׳ 48.',
    options: [
      { id: 'a', text: '60% פחמימות בשגרה ועד 70% פחמימות בימים שלפני התחרות', isCorrect: true },
      { id: 'b', text: '80% שומן מהחי', isCorrect: false },
      { id: 'c', text: 'חלבונים בלבד ללא פחמימות', isCorrect: false },
      { id: 'd', text: 'מים ומינרלים בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 10, 48: תזונה עשירה בפחמימות מבטיחה מילוי מרבי של מאגרי הגליקוגן בכבד ובשרירים לקראת המאמץ.'
  },
  {
    id: 'phys1_12',
    moduleId: 'phys1',
    topic: 'גליקוליזה ועייפות',
    title: 'השפעת חומציות על PFK (עמ׳ 48)',
    diagramKey: 'energy',
    questionText: 'עלייה בחומציות עקב הצטברות יוני מימן (H+) במאמץ עצים גורמת ל:',
    hint: 'שאלה מס׳ 13 בעמ׳ 48.',
    options: [
      { id: 'a', text: 'לירידה בפעילות האנזים המרכזי PFK ולירידה ביכולת הכיווץ', isCorrect: true },
      { id: 'b', text: 'לעלייה מואצת בפעילות PFK', isCorrect: false },
      { id: 'c', text: 'לחוסר שינוי בפעילות האנזים', isCorrect: false },
      { id: 'd', text: 'לייצור מוגבר של סידן', isCorrect: false }
    ],
    explanation: 'עמ׳ 23, 48: יוני המימן מורידים את ה-pH בתא, פוגעים בפעילות אנזים ה-PFK ובכך מעכבים את המשך ייצור ה-ATP בגליקוליזה.'
  },
  {
    id: 'phys1_13',
    moduleId: 'phys1',
    topic: 'גורמי עייפות',
    title: 'הסיבות לעייפות שריר במאמץ (עמ׳ 49)',
    diagramKey: 'energy',
    questionText: 'מהן הסיבות האפשריות להתעייפות השריר במהלך מאמץ גופני?',
    hint: 'שאלה מס׳ 14 בעמ׳ 49.',
    options: [
      { id: 'a', text: 'עלייה בחומציות, דלדול CrP וגליקוגן, וירידה בהולכה עצבית (כל התשובות נכונות)', isCorrect: true },
      { id: 'b', text: 'עודף חמצן בריאות בלבד', isCorrect: false },
      { id: 'c', text: 'היפרטרופיה פתאומית של העצם', isCorrect: false },
      { id: 'd', text: 'עלייה מופרזת ב-BMR', isCorrect: false }
    ],
    explanation: 'עמ׳ 24, 49: עייפות שרירית היא מולטי-פקטוריאלית: הצטברות יוני מימן ופסולת, דלדול מאגרים זמינים, ועייפות מערכת העצבים המרכזית.'
  },
  {
    id: 'phys1_14',
    moduleId: 'phys1',
    topic: 'התאוששות',
    title: 'הורדת חומציות לאחר מאמץ (עמ׳ 49)',
    diagramKey: 'cori',
    questionText: 'מה הדרך היעילה ביותר להורדת החומציות בשריר לאחר מאמץ עצים?',
    hint: 'שאלה מס׳ 15 בעמ׳ 49.',
    options: [
      { id: 'a', text: 'ריצה קלה (התאוששות אקטיבית)', isCorrect: true },
      { id: 'b', text: 'ספרינט נוסף', isCorrect: false },
      { id: 'c', text: 'ישיבה פסיבית מוחלטת', isCorrect: false },
      { id: 'd', text: 'עמידה ללא תנועה', isCorrect: false }
    ],
    explanation: 'עמ׳ 46, 49: פעילות קלה מזרימה דם לרקמות ומאיצה את פינוי הלקטט ויוני המימן ללב ולכבד.'
  },
  {
    id: 'phys1_15',
    moduleId: 'phys1',
    topic: 'סף אנאירובי וצח"מ',
    title: 'ההבדל בין צח"מ לסף אנאירובי (עמ׳ 49)',
    diagramKey: 'energy',
    questionText: 'ההבדל בין ריצה בקצב צריכת החמצן המרבית (צח"מ) לבין ריצה בקצב הסף האנאירובי הוא:',
    hint: 'שאלה מס׳ 16 בעמ׳ 49.',
    options: [
      { id: 'a', text: 'בצח"מ יש שילוב של המנגנון האירובי עם מעורבות מסיבית של המסלול האנאירובי לקטי (חוסר איזון)', isCorrect: true },
      { id: 'b', text: 'בסף אנאירובי רצים מהר יותר מאשר בצח"מ', isCorrect: false },
      { id: 'c', text: 'בצח"מ אין שימוש בחמצן כלל', isCorrect: false },
      { id: 'd', text: 'אין שום הבדל ביניהם', isCorrect: false }
    ],
    explanation: 'עמ׳ 40, 49: בסף האנאירובי יש שיווי משקל בין ייצור לקטט לפינויו; בצח"מ המערכת האנאירובית תורמת 50% מהאנרגיה והעייפות מצטברת במהירות.'
  },
  {
    id: 'phys1_16',
    moduleId: 'phys1',
    topic: 'גירעון חמצן',
    title: 'הגדרת גירעון חמצן (עמ׳ 49)',
    diagramKey: 'energy',
    questionText: 'גירעון חמצן (Oxygen Deficit) הוא:',
    hint: 'שאלה מס׳ 17 בעמ׳ 49.',
    options: [
      { id: 'a', text: 'שימוש במסלולים אנאירוביים בדקות הראשונות של המאמץ טרם ההגעה למצב יציב (תשובות א׳+ב׳)', isCorrect: true },
      { id: 'b', text: 'מצב שבו הדופק יורד לאפס', isCorrect: false },
      { id: 'c', text: 'היעדר חמצן מוחלט באוויר החדר', isCorrect: false },
      { id: 'd', text: 'שריפת חלבונים בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 44, 49: גירעון חמצן מתרחש בתחילת מאמץ עד שהמערכת האירובית מגיעה ל-Steady State, והאנרגיה מסופקת אנאירובית.'
  },
  {
    id: 'phys1_17',
    moduleId: 'phys1',
    topic: 'סף אנאירובי',
    title: 'הגדרת הסף האנאירובי (עמ׳ 49)',
    diagramKey: 'energy',
    questionText: 'מהי ההגדרה של הסף האנאירובי (OBLA)?',
    hint: 'שאלה מס׳ 18 בעמ׳ 49.',
    options: [
      { id: 'a', text: 'קצב הפעילות המרבי שבו קצב ייצור הלקטט שווה עדיין לקצב הפינוי שלו', isCorrect: true },
      { id: 'b', text: 'קצב ייצור הלקטט נמוך בהרבה מקצב הפינוי', isCorrect: false },
      { id: 'c', text: 'מצב בו אין שימוש בגלוקוז כלל', isCorrect: false },
      { id: 'd', text: 'הרגע שבו נגמרים מאגרי השומן', isCorrect: false }
    ],
    explanation: 'עמ׳ 40, 49: הסף האנאירובי מסמן את נקודת העצימות המרבית שבה קצב ייצור הלקטט שווה לקצב הפינוי; מעבר לו – הלקטט מצטבר בדם.'
  },
  {
    id: 'phys1_18',
    moduleId: 'phys1',
    topic: 'דרכי פינוי לקטט',
    title: 'פינוי לקטט מהדם (עמ׳ 49)',
    diagramKey: 'cori',
    questionText: 'הדרכים לפינוי הלקטט מהדם הן:',
    hint: 'שאלה מס׳ 19 בעמ׳ 49.',
    options: [
      { id: 'a', text: 'הפיכתו לפירובט בלב ובמוח, שימוש בשרירים הפחות פעילים, והפיכתו לגלוקוז בכבד (כל התשובות נכונות)', isCorrect: true },
      { id: 'b', text: 'פליטה ישירה דרך מערכת השתן בלבד', isCorrect: false },
      { id: 'c', text: 'אידוי דרך העור בלבד', isCorrect: false },
      { id: 'd', text: 'הפיכתו לסידן בעצם', isCorrect: false }
    ],
    explanation: 'עמ׳ 38, 49: לקטט אינו חומר פסולת אבוד אלא דלק מטבולי יקר הממוחזר בלב, במוח, בשרירים פחות פעילים ובכבד (מעגל קורי).'
  },
  {
    id: 'phys1_19',
    moduleId: 'phys1',
    topic: 'סף אנאירובי באדם מאומן',
    title: 'אחוז מדופק מרבי בסף (עמ׳ 49)',
    diagramKey: 'energy',
    questionText: 'הסף האנאירובי באדם מאומן יתרחש בדרך כלל ב:',
    hint: 'שאלה מס׳ 20 בעמ׳ 49.',
    options: [
      { id: 'a', text: '85%-90% מהדופק המרבי (קרוב מאוד לצח"מ)', isCorrect: true },
      { id: 'b', text: '50% מהדופק המרבי', isCorrect: false },
      { id: 'c', text: '60% מהדופק המרבי בלבד', isCorrect: false },
      { id: 'd', text: '100% מהדופק המרבי', isCorrect: false }
    ],
    explanation: 'עמ׳ 41, 50: באדם לא מאומן הסף מופיע סביב 50%-60% מצח"מ; באדם מאומן הוא נדחה ל-80%-90% מהיכולת המרבית.'
  },
  {
    id: 'phys1_20',
    moduleId: 'phys1',
    topic: 'זמני חידוש מאגרים',
    title: 'זמן מילוי ATP-CrP לאחר מאמץ (עמ׳ 46, 50)',
    diagramKey: 'energy',
    questionText: 'כמה זמן נדרש למילוי מלא של מאגרי ה-ATP וה-CrP בתום מאמץ מרבי של 10 שניות?',
    hint: 'עיין בעמוד 20 ו-46 בחוברת פיזיולוגיה.',
    options: [
      { id: 'a', text: 'כ-2 עד 4 דקות מנוחה (בנוכחות חמצן)', isCorrect: true },
      { id: 'b', text: '3 ימים תמימים', isCorrect: false },
      { id: 'c', text: 'שנייה אחת בלבד', isCorrect: false },
      { id: 'd', text: 'שעה שלמה', isCorrect: false }
    ],
    explanation: 'עמ׳ 20, 46: תוך 2-4 דקות התאוששות אירובית, המיטוכונדריות מייצרות ATP המטעין מחדש את מאגר הקריאטין פוספט (CrP).'
  },
  {
    id: 'phys1_21',
    moduleId: 'phys1',
    topic: 'צריכת חמצן עודפת',
    title: 'הגורמים ל-EPOC (עמ׳ 44-45, 50)',
    diagramKey: 'energy',
    questionText: 'מהן הסיבות לצריכת חמצן עודפת בהתאוששות (EPOC)?',
    hint: 'עיין בעמוד 45 ו-50.',
    options: [
      { id: 'a', text: 'חידוש מאגרי ATP-CrP, פינוי לקטט, חום גוף גבוה ורמות אדרנלין (כל התשובות נכונות)', isCorrect: true },
      { id: 'b', text: 'חוסר מים בריאות בלבד', isCorrect: false },
      { id: 'c', text: 'הפסקה של פעילות הלב', isCorrect: false },
      { id: 'd', text: 'שריפת ויטמינים בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 44-45, 50: לאחר מאמץ הגוף ממשיך לצרוך חמצן בקצב מוגבר כדי למלא פוספטים, לסלק חומציות, לקרר את הגוף ולהחזיר הומיאוסטזיס.'
  },
  {
    id: 'phys1_22',
    moduleId: 'phys1',
    topic: 'חילוף חומרים בסיסי',
    title: 'משתנים המשפיעים על BMR (עמ׳ 9, 14)',
    diagramKey: 'energy',
    questionText: 'אילו משתנים משפיעים ישירות על חילוף החומרים הבסיסי (BMR)?',
    hint: 'עיין בעמוד 9 ו-14 בחוברת פיזיולוגיה.',
    options: [
      { id: 'a', text: 'מסת שריר ואחוז שומן, גיל, מגדר, שטח פני הגוף והורמונים', isCorrect: true },
      { id: 'b', text: 'צבע העיניים בלבד', isCorrect: false },
      { id: 'c', text: 'סוג הנעליים שלובשים', isCorrect: false },
      { id: 'd', text: 'כמות השיער על הראש', isCorrect: false }
    ],
    explanation: 'עמ׳ 9, 14: BMR מושפע ממסת רקמת השריר הפעילה (שורפת פי 4 אנרגיה משומן במנוחה), מגיל, מגדר ושטח פני הגוף.'
  },
  {
    id: 'phys1_23',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'התהליך הפוספוגני - אנאירובי אלקטי (עמ׳ 19)',
    diagramKey: 'energy',
    questionText: 'התהליך הפוספוגני מכונה "אנאירובי אלקטי" משום ש:',
    hint: 'האם הוא דורש חמצן? והאם נוצרת בו חומצת חלב (לקטט)?',
    options: [
      { id: 'a', text: 'הוא מתבצע ללא צורך בחמצן ואינו מייצר חומצת חלב / לקטט', isCorrect: true },
      { id: 'b', text: 'הוא מייצר כמויות אדירות של חומצת חלב', isCorrect: false },
      { id: 'c', text: 'הוא דורש 10 ליטר חמצן בכל שנייה', isCorrect: false },
      { id: 'd', text: 'הוא פועל רק בכבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 19: אנאירובי = ללא חמצן; אלקטי = ללא ייצור חומצת חלב (לקטט). פירוק ה-CrP אינו מייצר לקטט.'
  },
  {
    id: 'phys1_24',
    moduleId: 'phys1',
    topic: 'מעגל קרבס',
    title: 'החומר האוניברסלי בכניסה למעגל קרבס (עמ׳ 26)',
    diagramKey: 'energy',
    questionText: 'איזה חומר מהווה את "המכנה המשותף" שאליו מתפרקים כל אבות המזון בכניסה למעגל קרבס?',
    hint: 'מולקולה בעלת 2 פחמנים הנוצרת מפירובט, שומן וחומצות אמינו.',
    options: [
      { id: 'a', text: 'אצטיל קואנזים A (Acetyl CoA)', isCorrect: true },
      { id: 'b', text: 'קריאטין פוספט', isCorrect: false },
      { id: 'c', text: 'המוגלובין', isCorrect: false },
      { id: 'd', text: 'חומצה קרבונית', isCorrect: false }
    ],
    explanation: 'עמ׳ 26: אצטיל CoA (מולקולת 2 פחמנים) הוא הצומת המטבולי המשותף שאליו מומרים גלוקוז, שומנים וחומצות אמינו בכניסה למעגל קרבס.'
  },
  {
    id: 'phys1_25',
    moduleId: 'phys1',
    topic: 'שרשרת הנשימה',
    title: 'קולט המימנים הסופי בשרשרת הנשימה (עמ׳ 28)',
    diagramKey: 'energy',
    questionText: 'בסיום שרשרת הנשימה במיטוכונדריה, איזה גז קולט את יוני המימן ליצירת מים ומניעת רדיקלים חופשיים?',
    hint: 'לשם מה אנו שואפים אוויר?',
    options: [
      { id: 'a', text: 'חמצן אטמוספרי (O2)', isCorrect: true },
      { id: 'b', text: 'פחמן דו-חמצני', isCorrect: false },
      { id: 'c', text: 'חנקן', isCorrect: false },
      { id: 'd', text: 'הליום', isCorrect: false }
    ],
    explanation: 'עמ׳ 28: החמצן האטמוספרי הוא קולט המימנים הסופי בשרשרת הנשימה; קשירתו למימנים יוצרת מים (H2O) ומאפשרת ייצור מסיבי של ATP.'
  },
  {
    id: 'phys1_26',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'תוצר ה-ATP בפירוק גלוקוז אירובי (עמ׳ 29)',
    diagramKey: 'energy',
    questionText: 'כמה מולקולות ATP מתקבלות מפירוק מלא של מולקולת גלוקוז אחת בנוכחות חמצן?',
    hint: '2 בציטופלזמה ועוד 34 במיטוכונדריה.',
    options: [
      { id: 'a', text: '36 מולקולות ATP', isCorrect: true },
      { id: 'b', text: '2 מולקולות ATP בלבד', isCorrect: false },
      { id: 'c', text: '129 מולקולות ATP (זה מחומצת שומן)', isCorrect: false },
      { id: 'd', text: '1000 מולקולות ATP', isCorrect: false }
    ],
    explanation: 'עמ׳ 29: מפירוק גלוקוז מלא מתקבלות 36 ATP (2 בגליקוליזה בציטופלזמה ו-34 במיטוכונדריה במעגל קרבס ושרשרת הנשימה).'
  },
  {
    id: 'phys1_27',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'פירוק שומנים ליפוליזה (עמ׳ 30-31)',
    diagramKey: 'energy',
    questionText: 'פירוק מלא של חומצת שומן (בעלת 16 פחמנים) מספק כ-129 מולקולות ATP, אך דורש:',
    hint: 'מדוע הגוף מעדיף פחמימות במאמץ עצים?',
    options: [
      { id: 'a', text: 'כמות גדולה בהרבה של חמצן (23 מולקולות חמצן)', isCorrect: true },
      { id: 'b', text: 'אפס חמצן', isCorrect: false },
      { id: 'c', text: 'פירוק של העצמות', isCorrect: false },
      { id: 'd', text: 'ייצור של סידן בשריר', isCorrect: false }
    ],
    explanation: 'עמ׳ 31: שומן הוא מאגר ענק של אנרגיה אך פירוקו דורש הרבה יותר חמצן פר מולקולת ATP ביחס לפחמימה, ולכן אינו יעיל במאמץ עצים.'
  },

  // =========================================================================
  // מודול 4: פיזיולוגיה ב' - מערכות הגוף: לב, דם, נשימה, עצבוב והורמונים (28 שאלות)
  // =========================================================================
  {
    id: 'phys2_1',
    moduleId: 'phys2',
    topic: 'מערכת הלב',
    title: 'תפוקת לב מרבית (עמ׳ 73)',
    diagramKey: 'heart',
    questionText: 'תפוקת הלב (Cardiac Output) באדם לא מאומן במאמץ מרבי היא בערך:',
    hint: 'שאלה מס׳ 1 בעמ׳ 73.',
    options: [
      { id: 'a', text: '20-22 ליטר לדקה (עליה של פי 4 ממנוחה)', isCorrect: true },
      { id: 'b', text: '40 ליטר לדקה', isCorrect: false },
      { id: 'c', text: '5 ליטר לדקה בלבד', isCorrect: false },
      { id: 'd', text: '100 ליטר לדקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 65, 73: באדם לא מאומן תפוקת הלב המרבית היא כ-20-22 ל/דק; אצל ספורטאי סיבולת מאומן היא מגיעה ל-35-40 ל/דק.'
  },
  {
    id: 'phys2_2',
    moduleId: 'phys2',
    topic: 'כלי דם',
    title: 'צפיפות נימי דם בשריר (עמ׳ 73)',
    diagramKey: 'heart',
    questionText: 'עלייה בצפיפות נימי הדם סביב סיבי השריר מתרחשת בעיקר כתגובה לאימון:',
    hint: 'שאלה מס׳ 2 בעמ׳ 73.',
    options: [
      { id: 'a', text: 'אירובי ממושך (סיבולת אירובית)', isCorrect: true },
      { id: 'b', text: 'כוח מרבי של חזרה אחת בלבד', isCorrect: false },
      { id: 'c', text: 'מנוחה וצום', isCorrect: false },
      { id: 'd', text: 'גמישות פסיבית בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 69, 73: אימון אירובי מעודד אנגיוגנזה (צמיחת נימי דם חדשים) סביב סיבי השריר להגברת מעבר החמצן.'
  },
  {
    id: 'phys2_3',
    moduleId: 'phys2',
    topic: 'כלי דם',
    title: 'ערכי לחץ דם תקינים (עמ׳ 73)',
    diagramKey: 'heart',
    questionText: 'לחץ דם במנוחה של 120/80 מ״מ כספית מוגדר כ:',
    hint: 'שאלה מס׳ 3 בעמ׳ 73.',
    options: [
      { id: 'a', text: 'לחץ דם תקין ומאוזן', isCorrect: true },
      { id: 'b', text: 'יתר לחץ דם מסוכן', isCorrect: false },
      { id: 'c', text: 'תת לחץ דם חמור', isCorrect: false },
      { id: 'd', text: 'מחייב טיפול תרופתי מיידי', isCorrect: false }
    ],
    explanation: 'עמ׳ 57, 73: 120/80 מ״מ כספית הוא לחץ דם תקין ממוצע (120 סיסטולי ו-80 דיאסטולי).'
  },
  {
    id: 'phys2_4',
    moduleId: 'phys2',
    topic: 'דופק מטרה',
    title: 'נוסחת קרבונן (עמ׳ 71, 73)',
    diagramKey: 'heart',
    questionText: 'חשב דופק מטרה לאישה בת 40, דופק מנוחה 70 פוד, עצימות 80% לפי נוסחת קרבונן:',
    hint: 'שאלה מס׳ 4 בעמ׳ 73. דופק מרבי: 220-40=180.',
    options: [
      { id: 'a', text: '158 פעימות בדקה (רזרבה: 180-70=110; 110*0.8=88; 88+70=158)', isCorrect: true },
      { id: 'b', text: '180 פעימות בדקה', isCorrect: false },
      { id: 'c', text: '120 פעימות בדקה', isCorrect: false },
      { id: 'd', text: '140 פעימות בדקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 71-73: נוסחת קרבונן = דופק מנוחה + (עצימות * רזרבת דופק). רזרבה: 180-70=110. 110*0.8=88. 88+70=158.'
  },
  {
    id: 'phys2_5',
    moduleId: 'phys2',
    topic: 'כלי דם',
    title: 'הוורידים במחזורי הדם (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'מה נכון לגבי הוורידים במחזורי הדם?',
    hint: 'שאלה מס׳ 5 בעמ׳ 74.',
    options: [
      { id: 'a', text: 'במחזור הריאתי זורם בהם דם עשיר בחמצן, ובמחזור הגדול דם עני בחמצן', isCorrect: true },
      { id: 'b', text: 'בכל הוורידים בגוף תמיד זורם רק דם דל בחמצן', isCorrect: false },
      { id: 'c', text: 'ורידים מובילים דם מהלב אל הרקמות', isCorrect: false },
      { id: 'd', text: 'אין שסתומים בוורידים כלל', isCorrect: false }
    ],
    explanation: 'עמ׳ 53, 74: ורידי הריאה מחזירים דם מחומצן מהריאות לעלייה השמאלית, בעוד הוורידים הנבובים מחזירים דם ורידי מהגוף.'
  },
  {
    id: 'phys2_6',
    moduleId: 'phys2',
    topic: 'מערכת הלב',
    title: 'מצב המסתמים בדיאסטולה (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים ומילויים) בלב:',
    hint: 'שאלה מס׳ 6 בעמ׳ 74.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים בין החדרים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'המסתמים בין החדרים לעורקים פתוחים', isCorrect: false },
      { id: 'c', text: 'כל המסתמים בלב סגורים לחלוטין', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'עמ׳ 55, 74: בדיאסטולה החדרים מתמלאים בדם מהעליות ולכן מסתמי העליות-חדרים פתוחים, בעוד מסתמי היציאה לעורקים סגורים.'
  },
  {
    id: 'phys2_7',
    moduleId: 'phys2',
    topic: 'דופק מרבי',
    title: 'דופק מרבי וכושר גופני (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'מה מבין הגורמים הבאים אינו משפיע על הדופק המרבי של אדם?',
    hint: 'שאלה מס׳ 7 בעמ׳ 74.',
    options: [
      { id: 'a', text: 'רמת הכושר הגופני (הדופק המרבי תלוי בגיל ובגנטיקה בלבד)', isCorrect: true },
      { id: 'b', text: 'גיל הנבדק', isCorrect: false },
      { id: 'c', text: 'גורמים גנטיים', isCorrect: false },
      { id: 'd', text: 'מערכת העצבים האוטונומית', isCorrect: false }
    ],
    explanation: 'עמ׳ 63, 74: אימון אירובי אינו מעלה את הדופק המרבי אלא מוריד את דופק המנוחה ומעלה את נפח הפעימה.'
  },
  {
    id: 'phys2_8',
    moduleId: 'phys2',
    topic: 'נפח פעימה',
    title: 'הגורמים המשפיעים על נפח פעימה (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'מה מבין הגורמים הבאים משפיע ישירות על נפח הפעימה של הלב?',
    hint: 'שאלה מס׳ 8 בעמ׳ 74.',
    options: [
      { id: 'a', text: 'יכולת כיווץ הלב, החזר ורידי, ומנח הגוף (כל התשובות נכונות)', isCorrect: true },
      { id: 'b', text: 'אורך השיער בלבד', isCorrect: false },
      { id: 'c', text: 'מספר השיניים בלסת', isCorrect: false },
      { id: 'd', text: 'צבע העור', isCorrect: false }
    ],
    explanation: 'עמ׳ 61, 74: נפח הפעימה מושפע מעוצמת כיווץ שריר הלב, ממילוי דיאסטולי (החזר ורידי) וממנח הגוף (שכיבה לעומת עמידה).'
  },
  {
    id: 'phys2_9',
    moduleId: 'phys2',
    topic: 'כלי דם',
    title: 'מנגנון ירידת לחץ דם (עמ׳ 75)',
    diagramKey: 'heart',
    questionText: 'לחץ הדם בכלי הדם יורד כאשר:',
    hint: 'שאלה מס׳ 10 בעמ׳ 75.',
    options: [
      { id: 'a', text: 'קוטר כלי הדם גדל (הרפיית שריר חלק) וצמיגות הדם יורדת', isCorrect: true },
      { id: 'b', text: 'קוטר כלי הדם קטן וצמיגות הדם עולה', isCorrect: false },
      { id: 'c', text: 'נפח הדם מוכפל פי 10', isCorrect: false },
      { id: 'd', text: 'קצב הלב עולה ל-250', isCorrect: false }
    ],
    explanation: 'עמ׳ 57, 75: הרחבת כלי דם (Vasodilation) והפחתת צמיגות הדם מורידות את ההתנגדות לזרימה ומפחיתות את לחץ הדם.'
  },
  {
    id: 'phys2_10',
    moduleId: 'phys2',
    topic: 'מערכת העצבים והשריר',
    title: 'כישור השריר (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'כישור השריר (Muscle Spindle):',
    hint: 'שאלה מס׳ 1 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'הוא חלק מרפלקס המתיחה ומגיב למתיחה פתאומית של השריר', isCorrect: true },
      { id: 'b', text: 'נמצא בגיד ומעכב כיווץ', isCorrect: false },
      { id: 'c', text: 'מייצר כדוריות דם אדומות', isCorrect: false },
      { id: 'd', text: 'מפרק שומנים במאמץ', isCorrect: false }
    ],
    explanation: 'עמ׳ 87, 89: כישור השריר ממוקם בסיבי השריר, חש מתיחה מהירה וגורם לכיווץ רפלקסיבי של השריר להגנה מקריעה.'
  },
  {
    id: 'phys2_11',
    moduleId: 'phys2',
    topic: 'מערכת השרירים',
    title: 'חוק הכל או לא כלום (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'במתן גירוי תת-סיפי לנוירון מוטורי:',
    hint: 'שאלה מס׳ 2 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'אין כיווץ כלל של סיבי השריר השייכים לאותה יחידה מוטורית', isCorrect: true },
      { id: 'b', text: 'כל הסיבים מתכווצים בעוצמה חלשה', isCorrect: false },
      { id: 'c', text: 'רק חלק מהסיבים מתכווצים', isCorrect: false },
      { id: 'd', text: 'השריר נרפה למשך שעה', isCorrect: false }
    ],
    explanation: 'עמ׳ 79, 89: לפי חוק הכל או לא כלום, גירוי מתחת לסף אינו מפעיל אף סיב ביחידה המוטורית.'
  },
  {
    id: 'phys2_12',
    moduleId: 'phys2',
    topic: 'מערכת השרירים',
    title: 'הגדרת יחידה מוטורית (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'יחידה מוטורית (Motor Unit) היא:',
    hint: 'שאלה מס׳ 3 ו-6 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'נוירון מוטורי אחד וכל סיבי השריר המעוצבבים על ידו', isCorrect: true },
      { id: 'b', text: 'סיב שריר בודד וכל כלי הדם שסביבו', isCorrect: false },
      { id: 'c', text: 'שריר שלם והעצם שאליה הוא מחובר', isCorrect: false },
      { id: 'd', text: 'קבוצת סרקומרים במנוחה', isCorrect: false }
    ],
    explanation: 'עמ׳ 79, 89: יחידה מוטורית כוללת נוירון מוטורי יחיד וכל סיבי השריר אליהם האקסון שלו מתחבר.'
  },
  {
    id: 'phys2_13',
    moduleId: 'phys2',
    topic: 'סיבי שריר',
    title: 'ריכוז גליקוגן בסיבים (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'ריכוז הגליקוגן הגבוה ביותר ופעילות אנזימים אנאירוביים מרבית נמצאים ב:',
    hint: 'שאלה מס׳ 4 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'סיב שריר לבן מהיר (Type IIb)', isCorrect: true },
      { id: 'b', text: 'סיב שריר אדום איטי (Type I)', isCorrect: false },
      { id: 'c', text: 'רקמת שומן תת-עורית', isCorrect: false },
      { id: 'd', text: 'גיד אכילס', isCorrect: false }
    ],
    explanation: 'עמ׳ 80-82, 89: סיבים לבנים (Fast-Twitch) מתמחים בכוח מתפרץ ומכילים מאגרי גליקוגן ואנזימים גליקוליטיים בריכוז גבוה.'
  },
  {
    id: 'phys2_14',
    moduleId: 'phys2',
    topic: 'הסתגלות לאימוני כוח',
    title: 'הסתגלות מאוחרת (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'מה קורה בהסתגלות המאוחרת (מעבר ל-6-8 השבועות הראשונים) לאימוני כוח?',
    hint: 'שאלה מס׳ 5 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'מתרחשת עלייה בכוח עקב היפרטרופיה (עלייה בכמות החלבונים המתכווצים)', isCorrect: true },
      { id: 'b', text: 'השריר מתנוון ונעלם', isCorrect: false },
      { id: 'c', text: 'יש רק שיפור עצבי ללא שינוי שרירי', isCorrect: false },
      { id: 'd', text: 'מספר סיבי השריר מוכפל פי 10 (היפרפלזיה)', isCorrect: false }
    ],
    explanation: 'עמ׳ 84, 89: בשבועות הראשונים השיפור הוא עצבי (גיוס יחידות); בהמשך השיפור נובע מהיפרטרופיה שרירית ותוספת מיופיברילים.'
  },
  {
    id: 'phys2_15',
    moduleId: 'phys2',
    topic: 'סיבי שריר',
    title: 'מאפייני סיבים אדומים (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'סיבי השריר האדומים (Type I) מאופיינים ב:',
    hint: 'שאלה מס׳ 7 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'כמות גדולה של מיטוכונדריות, מיוגלובין, צפיפות נימים גבוהה וסבולת גבוהה', isCorrect: true },
      { id: 'b', text: 'מהירות כיווץ אדירה ועייפות תוך 5 שניות', isCorrect: false },
      { id: 'c', text: 'היעדר מוחלט של חמצן', isCorrect: false },
      { id: 'd', text: 'חתך רוחב ענק ביחס לסיבים הלבנים', isCorrect: false }
    ],
    explanation: 'עמ׳ 80, 89: סיבים אדומים מתמחים במטבוליזם אירובי, עשירים במיוגלובין ובמיטוכונדריות ומתכווצים לאורך זמן ללא עייפות מהירה.'
  },
  {
    id: 'phys2_16',
    moduleId: 'phys2',
    topic: 'מערכת העצבים והשריר',
    title: 'רפלקס אברון גולג׳י GTO (עמ׳ 90)',
    diagramKey: 'sarcomere',
    questionText: 'בהפעלת רפלקס אברון הגיד ע״ש גולג׳י (Golgi Tendon Organ):',
    hint: 'שאלה מס׳ 9 בעמ׳ 90.',
    options: [
      { id: 'a', text: 'מתרחשת הרפיה רפלקסיבית של השריר בתגובה למתיחת-יתר של הגיד', isCorrect: true },
      { id: 'b', text: 'מתרחש כיווץ רפלקסיבי של השריר בתגובה למתיחה מהירה', isCorrect: false },
      { id: 'c', text: 'השריר נקרע באופן מיידי', isCorrect: false },
      { id: 'd', text: 'קצב הלב מוכפל', isCorrect: false }
    ],
    explanation: 'עמ׳ 87-88, 90: אברון גולג\'י בצומת גיד-שריר חש מתח גבוה ומעכב את הנוירון המוטורי כדי להרפות את השריר ולמנוע נזק.'
  },
  {
    id: 'phys2_17',
    moduleId: 'phys2',
    topic: 'סיבי שריר',
    title: 'השוואה בין סיבים מהירים לאיטיים (עמ׳ 90)',
    diagramKey: 'sarcomere',
    questionText: 'בהשוואה בין סיבים מהירים (FT) לבין סיבים איטיים (ST):',
    hint: 'שאלה מס׳ 10 בעמ׳ 90.',
    options: [
      { id: 'a', text: 'בסיבים המהירים קצב שחרור הסידן מהמאגרים מהיר יותר משמעותית', isCorrect: true },
      { id: 'b', text: 'בסיבים המהירים יש יותר מיוגלובין', isCorrect: false },
      { id: 'c', text: 'בסיבים המהירים יש יותר מיטוכונדריות', isCorrect: false },
      { id: 'd', text: 'הסיבים המהירים מעוצבבים ע״י נוירון דק יותר', isCorrect: false }
    ],
    explanation: 'עמ׳ 81, 90: סיבים מהירים משחררים סידן במהירות ומפעילים את האנזים ATPase בקצב גבוה בהרבה, מה שמאפשר כיווץ מהיר.'
  },
  {
    id: 'phys2_18',
    moduleId: 'phys2',
    topic: 'הסתגלות לאימון',
    title: 'היפרטרופיה מול היפרפלזיה (עמ׳ 90)',
    diagramKey: 'sarcomere',
    questionText: 'מה ההבדל בין היפרטרופיה להיפרפלזיה של רקמה?',
    hint: 'שאלה מס׳ 11 בעמ׳ 90.',
    options: [
      { id: 'a', text: 'בהיפרטרופיה יש עלייה בגודל ונפח התאים הקיימים, ובהיפרפלזיה עלייה במספר התאים', isCorrect: true },
      { id: 'b', text: 'בהיפרטרופיה תאים מתחלקים ובהיפרפלזיה תאים נעלמים', isCorrect: false },
      { id: 'c', text: 'היפרטרופיה מתרחשת רק בשומן והיפרפלזיה רק בשריר', isCorrect: false },
      { id: 'd', text: 'אין כל הבדל בין המונחים', isCorrect: false }
    ],
    explanation: 'עמ׳ 83, 90: בשרירי שלד של אדם העלייה במסה מתרחשת אך ורק ע״י היפרטרופיה (הגדלת נפח הסיבים עקב תוספת חלבונים מתכווצים).'
  },
  {
    id: 'phys2_19',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'אוורור ריאות - Ventilation (עמ׳ 102)',
    diagramKey: 'heart',
    questionText: 'נפח האוויר המוחלף בין הריאות לסביבה החיצונית בדקה מוגדר כ:',
    hint: 'שאלה מס׳ 1 בעמ׳ 102.',
    options: [
      { id: 'a', text: 'אוורור ריאות (Pulmonary Ventilation - VE)', isCorrect: true },
      { id: 'b', text: 'תפוקת הלב', isCorrect: false },
      { id: 'c', text: 'הנפח המתחלף בלבד', isCorrect: false },
      { id: 'd', text: 'קיבולת חיונית', isCorrect: false }
    ],
    explanation: 'עמ׳ 96, 102: אוורור ריאות שווה למכפלת הנפח המתחלף (עומק הנשימה) במספר הנשימות בדקה (כ-6 ליטר בדקה במנוחה).'
  },
  {
    id: 'phys2_20',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'אוורור במאמץ מרבי (עמ׳ 102)',
    diagramKey: 'heart',
    questionText: 'באדם מאומן אירובית במאמץ מרבי (בצח"מ):',
    hint: 'שאלה מס׳ 2 בעמ׳ 102.',
    options: [
      { id: 'a', text: 'אוורור הריאות המרבי גבוה משמעותית בהשוואה לאדם לא מאומן (עד 180-200 ל/דק)', isCorrect: true },
      { id: 'b', text: 'אוורור הריאות נמוך בהרבה מזה של לא מאומן', isCorrect: false },
      { id: 'c', text: 'אוורור הריאות שווה בדיוק ל-6 ליטר בדקה', isCorrect: false },
      { id: 'd', text: 'הנשימה נעצרת לחלוטין', isCorrect: false }
    ],
    explanation: 'עמ׳ 99, 102: במאמץ מרבי מאומן צורך הרבה יותר חמצן ומייצר יותר עבודה, ולכן אוורור הריאות המרבי שלו מגיע ל-180-200 ל/דק (לעומת כ-100 ל/דק בלא מאומן).'
  },
  {
    id: 'phys2_21',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'נפח מתחלף Tidal Volume (עמ׳ 102)',
    diagramKey: 'heart',
    questionText: 'נפח האוויר הנכנס ויוצא מהריאות בכל מחזור נשימה בודד מוגדר כ:',
    hint: 'שאלה מס׳ 3 בעמ׳ 102.',
    options: [
      { id: 'a', text: 'הנפח המתחלף (Tidal Volume - TV, כ-500 מ"ל במנוחה)', isCorrect: true },
      { id: 'b', text: 'תדירות הנשימה', isCorrect: false },
      { id: 'c', text: 'אוורור הריאות הכולל', isCorrect: false },
      { id: 'd', text: 'נפח הפעימה', isCorrect: false }
    ],
    explanation: 'עמ׳ 96, 102: הנפח המתחלף הוא עומק הנשימה הרגיל; במנוחה כ-500 מ"ל ובמאמץ יכול לעלות עד פי 7 (כ-3-3.5 ליטר).'
  },
  {
    id: 'phys2_22',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'אוורור במאמץ תת-מרבי (עמ׳ 102)',
    diagramKey: 'heart',
    questionText: 'הסיבה לאוורור ריאות גבוה יותר במאמץ תת-מרבי נתון בקרב לא מאומן לעומת מאומן היא:',
    hint: 'שאלה מס׳ 4 בעמ׳ 102.',
    options: [
      { id: 'a', text: 'הסתמכות רבה יותר על גליקוליזה אנאירובית וצורך מוגבר בפינוי CO2 מסתירת חומציות', isCorrect: true },
      { id: 'b', text: 'ריאות קטנות פי 5', isCorrect: false },
      { id: 'c', text: 'חוסר יכולת לפלוט אוויר מהגוף', isCorrect: false },
      { id: 'd', text: 'עצירת נשימה בלתי רצונית', isCorrect: false }
    ],
    explanation: 'עמ׳ 97, 102: הלא-מאומן מייצר יותר לקטט וחומציות; הביקרבונט בדם סותר את החומציות ויוצר עודף CO2 שהריאות נדרשות לאוורר בנשימה מוגברת.'
  },
  {
    id: 'phys2_23',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'הנפח המתחלף במאמץ נתון (עמ׳ 102)',
    diagramKey: 'heart',
    questionText: 'הנפח המתחלף (עומק הנשימה) במאמץ תת-מרבי נתון:',
    hint: 'שאלה מס׳ 5 בעמ׳ 102.',
    options: [
      { id: 'a', text: 'גבוה יותר באדם מאומן מאשר בלא מאומן (המאומן נושם עמוק יותר ולאט יותר)', isCorrect: true },
      { id: 'b', text: 'נמוך יותר במאומן', isCorrect: false },
      { id: 'c', text: 'זהה תמיד בכל מצב', isCorrect: false },
      { id: 'd', text: 'תלוי רק בצבע השיער', isCorrect: false }
    ],
    explanation: 'עמ׳ 98-99, 102: אדם מאומן מגדיל את אוורור הריאות בעיקר ע״י הגדלת עומק הנשימה (נפח מתחלף), בעוד לא-מאומן נושם נשימות שטחיות ומהירות.'
  },
  {
    id: 'phys2_24',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'הרזרבה הנשימתית (עמ׳ 103)',
    diagramKey: 'heart',
    questionText: 'הרזרבה הנשימתית (הפער בין האוורור הרצוני המרבי MVV לבין האוורור המרבי במאמץ):',
    hint: 'שאלה מס׳ 6 בעמ׳ 103.',
    options: [
      { id: 'a', text: 'מוכיחה שמערכת הנשימה אינה הגורם המגביל אדם בריא במאמץ אירובי מרבי', isCorrect: true },
      { id: 'b', text: 'שווה לאפס בכל אדם', isCorrect: false },
      { id: 'c', text: 'מגבילה את הספורטאי מלהגיע לצח"מ', isCorrect: false },
      { id: 'd', text: 'קיימת רק אצל ילדים קטנים', isCorrect: false }
    ],
    explanation: 'עמ׳ 100, 103: לריאות יש עודף כושר אוורור שלא מנוצל גם בצח"מ, ולכן הלב (ולא הריאות) הוא הגורם המגביל את הביצוע האירובי.'
  },
  {
    id: 'phys2_25',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'הורמונים חלבוניים ושומניים (עמ׳ 117)',
    diagramKey: 'cori',
    questionText: 'הורמון חלבוני (כגון אינסולין או גלוקגון):',
    hint: 'שאלה מס׳ 1 בעמ׳ 117.',
    options: [
      { id: 'a', text: 'נקשר לקולטן ספציפי הנמצא על גבי קרום התא', isCorrect: true },
      { id: 'b', text: 'חוצה בקלות את קרום התא ונקשר לקולטן בגרעין', isCorrect: false },
      { id: 'c', text: 'אינו זקוק לקולטן כלל', isCorrect: false },
      { id: 'd', text: 'מיוצר רק בתוך תאי שומן', isCorrect: false }
    ],
    explanation: 'עמ׳ 105, 117: הורמונים חלבוניים אינם חודרים את ממברנת השומן של התא ולכן נקשרים לקולטנים בקרום התא, בעוד הורמונים סטרואידיים נקשרים בתוך הציטופלזמה.'
  },
  {
    id: 'phys2_26',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'הפרשות הלבלב (עמ׳ 117)',
    diagramKey: 'cori',
    questionText: 'בלוטת הלבלב מפרישה לזרם הדם:',
    hint: 'שאלה מס׳ 2 בעמ׳ 117.',
    options: [
      { id: 'a', text: 'אינסולין (מתאי בטא) וגלוקגון (מתאי אלפא)', isCorrect: true },
      { id: 'b', text: 'קורטיזול ואלדוסטרון', isCorrect: false },
      { id: 'c', text: 'הורמון גדילה ופרולקטין', isCorrect: false },
      { id: 'd', text: 'אדרנלין בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 111-113, 117: הלבלב האנדוקריני מפריש אינסולין (מוריד סוכר) וגלוקגון (מעלה סוכר) לוויסות רמות הגלוקוז בדם.'
  },
  {
    id: 'phys2_27',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'הורמון קורטיזול Cortisol (עמ׳ 117)',
    diagramKey: 'cori',
    questionText: 'מה נכון לגבי הורמון הקורטיזול (Cortisol)?',
    hint: 'שאלה מס׳ 7 בעמ׳ 117.',
    options: [
      { id: 'a', text: 'מופרש מקליפת יותרת הכליה במצבי סטרס ומעודד פירוק מאגרים', isCorrect: true },
      { id: 'b', text: 'מופרש מליבת יותרת הכליה ומעודד בניית שומן', isCorrect: false },
      { id: 'c', text: 'מופרש מהלבלב ומוריד סוכר בדם', isCorrect: false },
      { id: 'd', text: 'מגביר את פעילות מערכת החיסון פי עשרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 109, 117: קורטיזול הוא גלוקוקורטיקואיד המופרש מקליפת האדרנל בסטרס ומאמץ ממושך, מפרק חלבונים ושומנים ומעלה סוכר בדם.'
  },
  {
    id: 'phys2_28',
    moduleId: 'phys2',
    topic: 'מערכת החיסון',
    title: 'ייצור והפרשת נוגדנים (עמ׳ 124)',
    diagramKey: 'cori',
    questionText: 'מי מבין התאים הבאים מייצר ומפריש נוגדנים (Antibodies)?',
    hint: 'שאלה מס׳ 2 בעמ׳ 124.',
    options: [
      { id: 'a', text: 'לימפוציט מסוג B (ההופך לתא פלזמה)', isCorrect: true },
      { id: 'b', text: 'נויטרופיל', isCorrect: false },
      { id: 'c', text: 'מאקרופאג׳', isCorrect: false },
      { id: 'd', text: 'לימפוציט מסוג T ציטוטוקסי', isCorrect: false }
    ],
    explanation: 'עמ׳ 120, 124: לימפוציטים מסוג B מתמיינים לתאי פלזמה המייצרים ומפרישים נוגדנים ייחודיים לנטרול אנטיגנים.'
  }
];
