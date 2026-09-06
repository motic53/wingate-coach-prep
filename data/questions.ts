/* eslint-disable */
// @ts-nocheck

export const ALL_WINGATE_QUESTIONS = [
  // =========================================================================
  // מודול 1: אנטומיה א' - תאים, רקמות, שלד ומפרקים (משה שחר + צפי רביב)
  // =========================================================================
  {
    id: 'anat1_1',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'תפקיד Annulus Fibrosus (עמ׳ 35)',
    diagramKey: 'disc',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו:',
    hint: 'עיין בעמוד 35 בחוברת משה שחר.',
    options: [
      { id: 'a', text: 'לבלום זעזועים ולמנוע חיכוך (תשובות א׳+ב׳ נכונות)', isCorrect: true },
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
    hint: 'שאלה מס׳ 6 בעמ׳ 36 בחוברת משה שחר.',
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
    topic: 'מפרקים',
    title: 'סוגי מפרקים לפי תנועה (צפי רביב עמ׳ 29)',
    diagramKey: 'knee',
    questionText: 'מפרק סינוביאלי (Diarthrosis) מוגדר כ:',
    hint: 'עיין במצגת צפי רביב עמ׳ 29 ובחוברת שחר עמ׳ 18.',
    options: [
      { id: 'a', text: 'מפרק בעל תנועה חופשית עם חלל מפרק, קפסולה ונוזל סינוביאלי', isCorrect: true },
      { id: 'b', text: 'מפרק ללא תנועה כלל כמו תפרי הגולגולת', isCorrect: false },
      { id: 'c', text: 'חיבור סחוסי קשיח ללא תנועה', isCorrect: false },
      { id: 'd', text: 'רקמת שומן בלבד', isCorrect: false }
    ],
    explanation: 'צפי רביב עמ׳ 29-30: מפרקים סינוביאליים מאופיינים בקפסולה דו-שכבתית, סחוס היאליני ונוזל סינוביאלי המאפשר תנועה חופשית.'
  },

  // =========================================================================
  // מודול 2: אנטומיה ב' - שרירים, תחל/אחז וניתוח תנועות (משה שחר + אנטומיה ב׳)
  // =========================================================================
  {
    id: 'anat2_1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה (עמ׳ 124)',
    diagramKey: 'knee',
    questionText: 'מי מהשרירים הבאים נאחז (Insertion) בעצם השוקית (Fibula)?',
    hint: 'שאלה מס׳ 1 בעמ׳ 124 בחוברת משה שחר.',
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
    hint: 'שאלה מס׳ 6 בעמ׳ 124. שים לב ל-Teres Minor!',
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
    id: 'anat2_6',
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
    id: 'anat2_7',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'תחל בעצם ה-Femur (עמ׳ 125)',
    diagramKey: 'knee',
    questionText: 'מי מהשרירים הבאים מתחיל (Origin) מעצם הירך (Femur)?',
    hint: 'שאלה מס׳ 12 בעמ׳ 125. חשוב על שריר הארבע-ראשי העמוק.',
    options: [
      { id: 'a', text: 'Vastus intermedius', isCorrect: true },
      { id: 'b', text: 'Rectus femoris (מתחיל באגן ב-AIIS)', isCorrect: false },
      { id: 'c', text: 'Iliopsoas', isCorrect: false },
      { id: 'd', text: 'Semitendinosus', isCorrect: false }
    ],
    explanation: 'עמ׳ 108, 125: שלושת ראשי ה-Vastus מתחילים בפמור עצמה, בניגוד לרקטוס פמוריס שמתחיל באגן.'
  },
  {
    id: 'anat2_8',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'תחל בשליש הלטרלי של הבריח (עמ׳ 125)',
    diagramKey: 'sarcomere',
    questionText: 'לאיזה שריר יש תחל (Origin) בשליש הלטרלי של עצם הבריח (Clavicle)?',
    hint: 'שאלה מס׳ 13 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'Anterior deltoid', isCorrect: true },
      { id: 'b', text: 'Lower trapezius', isCorrect: false },
      { id: 'c', text: 'Upper pectoralis major (מתחיל בשני שליש המדיאליים)', isCorrect: false },
      { id: 'd', text: 'Latissimus dorsi', isCorrect: false }
    ],
    explanation: 'עמ׳ 81, 125: הדלתואיד הקדמי מתחיל בשליש הלטרלי של עצם הבריח.'
  },
  {
    id: 'anat2_9',
    moduleId: 'anat2',
    topic: 'מפרק הברך',
    title: 'רצועות קולטרליות LCL ו-MCL (עמ׳ 125)',
    diagramKey: 'knee',
    questionText: 'הרצועות הקולטרליות בברך (MCL ו-LCL):',
    hint: 'שאלה מס׳ 14 בעמ׳ 125. לאיזה כיוון הן שומרות על יציבות?',
    options: [
      { id: 'a', text: 'שומרות על יציבות לטרלית ומדיאלית (מונעות קריסה פנימה והחוצה)', isCorrect: true },
      { id: 'b', text: 'שומרות על יציבות קדמית-אחורית (זה תפקיד הצולבות)', isCorrect: false },
      { id: 'c', text: 'מונעות כפיפה בירך', isCorrect: false },
      { id: 'd', text: 'יוצרות נוזל סינוביאלי', isCorrect: false }
    ],
    explanation: 'עמ׳ 110, 125: ה-MCL וה-LCL נמצאות בצידי הברך ומגנות מפני עומסי ואלגוס ווארוס (קריסה לצדדים).'
  },
  {
    id: 'anat2_10',
    moduleId: 'anat2',
    topic: 'שרירי הבטן',
    title: 'רוטציה של הגו שמאלה (עמ׳ 125)',
    diagramKey: 'sarcomere',
    questionText: 'השרירים המבצעים רוטציה של הגו שמאלה הם:',
    hint: 'שאלה מס׳ 15 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'אלכסון פנימי שמאל (איפסילטרלי) + אלכסון חיצוני ימין (קונטרלטרלי)', isCorrect: true },
      { id: 'b', text: 'אלכסון פנימי ימין + אלכסון חיצוני שמאל', isCorrect: false },
      { id: 'c', text: 'הישר הבטני משני הצדדים', isCorrect: false },
      { id: 'd', text: 'זוקפי הגב בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 94-95, 125: שריר האלכסון הפנימי מסובב לאותו צד, והאלכסון החיצוני מסובב לצד הנגדי.'
  },
  {
    id: 'anat2_11',
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
    id: 'anat2_12',
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
    id: 'anat2_13',
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
    id: 'anat2_14',
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
    id: 'anat2_15',
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
    id: 'anat2_16',
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
    id: 'anat2_17',
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
    id: 'anat2_18',
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

  // =========================================================================
  // מודול 3: פיזיולוגיה א' - אנרגיה, מטבוליזם וגליקוליזה (אירה שקד)
  // =========================================================================
  {
    id: 'phys1_1',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'ייצור ATP במסלול אלקטי (חוברת פיזיו עמ׳ 33)',
    diagramKey: 'energy',
    questionText: 'באיזה מהמאמצים הבאים ייצור ה-ATP מגיע בעיקר מהמסלול האנאירובי אלקטי (ATP-CrP)?',
    hint: 'שאלה מס׳ 1 בעמ׳ 33 בחוברת פיזיולוגיה.',
    options: [
      { id: 'a', text: 'קפיצה לגובה או הדיפת כדור ברזל', isCorrect: true },
      { id: 'b', text: 'הליכה איטית', isCorrect: false },
      { id: 'c', text: 'ריצה קלה של 20 דקות', isCorrect: false },
      { id: 'd', text: 'ריצת 400 מטר תחרותית (כ-50 שניות)', isCorrect: false }
    ],
    explanation: 'פיזיולוגיה עמ׳ 19, 33: מאמצים מתפרצים קצרים של שניות בודדות מופעלים בעיקר ע״י מאגר ה-ATP והקריאטין פוספט (CrP).'
  },
  {
    id: 'phys1_2',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מסלול עיקרי במאמץ של 5 דקות (עמ׳ 33)',
    diagramKey: 'energy',
    questionText: 'המסלול העיקרי שמספק אנרגיה לספורטאי במאמץ רציף של 5 דקות הוא:',
    hint: 'שאלה מס׳ 3 בעמ׳ 33.',
    options: [
      { id: 'a', text: 'מסלול אירובי (בנוכחות חמצן במיטוכונדריה)', isCorrect: true },
      { id: 'b', text: 'מסלול אנאירובי אלקטי בלבד', isCorrect: false },
      { id: 'c', text: 'מסלול לקטי בלבד ללא חמצן', isCorrect: false },
      { id: 'd', text: 'פירוק חלבונים בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 25, 33: בכל מאמץ הנמשך מעל 2 דקות, המערכת האירובית הופכת להיות הדומיננטית באספקת ATP.'
  },
  {
    id: 'phys1_3',
    moduleId: 'phys1',
    topic: 'ערך קלורי של אבות המזון',
    title: 'הכנסה קלורית לגרם (עמ׳ 34)',
    diagramKey: 'energy',
    questionText: 'מה נכון לגבי כמות האנרגיה שמספק כל גרם של אבות המזון?',
    hint: 'שאלה מס׳ 5 בעמ׳ 34.',
    options: [
      { id: 'a', text: 'גרם שומן מספק 9 קק״ל, גרם פחמימה 4 קק״ל, גרם חלבון 4 קק״ל', isCorrect: true },
      { id: 'b', text: 'גרם שומן מספק 4 קק״ל ופחמימה 9 קק״ל', isCorrect: false },
      { id: 'c', text: 'כל אבות המזון מספקים בדיוק 4 קק״ל לגרם', isCorrect: false },
      { id: 'd', text: 'חלבון אינו מכיל קלוריות כלל', isCorrect: false }
    ],
    explanation: 'עמ׳ 10, 34: שומן מספק 9 קק״ל לכל גרם; פחמימות וחלבונים מספקים 4 קק״ל לגרם.'
  },
  {
    id: 'phys1_4',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'ריכוז CrP מול ATP בתא (עמ׳ 34)',
    diagramKey: 'energy',
    questionText: 'מה נכון לגבי ATP וקריאטין פוספט (CrP)?',
    hint: 'שאלה מס׳ 6 בעמ׳ 34.',
    options: [
      { id: 'a', text: 'הריכוז הזמין של CrP בתא שריר גדול פי 3 מריכוז ה-ATP', isCorrect: true },
      { id: 'b', text: 'הריכוז של ATP גדול פי 3 מ-CrP', isCorrect: false },
      { id: 'c', text: 'שתי המולקולות משחררות אנרגיה רק בנוכחות חמצן', isCorrect: false },
      { id: 'd', text: 'המאגר של שתיהן מספיק לשעתיים של מאמץ מרבי', isCorrect: false }
    ],
    explanation: 'עמ׳ 19, 34: מולקולת ה-CrP קטנה יותר ולכן התא אוגר כמות גדולה פי 3 לפחות מ-ATP.'
  },
  {
    id: 'phys1_5',
    moduleId: 'phys1',
    topic: 'גליקוליזה',
    title: 'הגדרת הגליקוליזה (עמ׳ 34)',
    diagramKey: 'energy',
    questionText: 'בתהליך הגליקוליזה (Glycolysis):',
    hint: 'שאלה מס׳ 8 בעמ׳ 34. היכן מתפרק הגלוקוז?',
    options: [
      { id: 'a', text: 'הגלוקוז מתפרק ל-2 מולקולות פירובט בציטופלזמה של תאי השריר', isCorrect: true },
      { id: 'b', text: 'הטריגליצריד מתפרק במיטוכונדריה', isCorrect: false },
      { id: 'c', text: 'הגלוקוז נכנס ישירות למיטוכונדריה ללא שלב מקדים', isCorrect: false },
      { id: 'd', text: 'חלבונים מיוצרים מחדש', isCorrect: false }
    ],
    explanation: 'עמ׳ 22, 34: גליקוליזה היא סדרה של 10 ריאקציות בציטופלזמה המפרקות גלוקוז ל-2 פירובט ומייצרות 2 ATP נטו ללא חמצן.'
  },
  {
    id: 'phys1_6',
    moduleId: 'phys1',
    topic: 'גליקוליזה אנאירובית',
    title: 'דומיננטיות הגליקוליזה האנאירובית (עמ׳ 34)',
    diagramKey: 'energy',
    questionText: 'הגליקוליזה האנאירובית (מסלול אנאירובי לקטי) דומיננטית בעיקר ב:',
    hint: 'שאלה מס׳ 9 בעמ׳ 34. מהו טווח הזמנים?',
    options: [
      { id: 'a', text: 'מאמצים מרביים הנמשכים בין 10 שניות ל-2 דקות (כגון שחיית 100 מטר או ריצת 400 מטר)', isCorrect: true },
      { id: 'b', text: 'קפיצה לרוחק מהמקום (פחות מ-2 שניות)', isCorrect: false },
      { id: 'c', text: 'רכיבה ממושכת על אופניים של 3 שעות', isCorrect: false },
      { id: 'd', text: 'במצב שינה ומנוחה מוחלטת', isCorrect: false }
    ],
    explanation: 'עמ׳ 24-25, 34: הגליקוליזה האנאירובית מספקת אנרגיה בקצב מהיר במאמצים מרביים של 10-120 שניות ומלווה בהצטברות לקטט ויוני מימן.'
  },
  {
    id: 'phys1_7',
    moduleId: 'phys1',
    topic: 'המערכת האירובית',
    title: 'מאפייני המערכת האירובית (עמ׳ 34)',
    diagramKey: 'energy',
    questionText: 'מה אינו נכון לגבי המערכת האירובית?',
    hint: 'שאלה מס׳ 10 בעמ׳ 34. האם היא דומיננטית בשניות הראשונות?',
    options: [
      { id: 'a', text: 'היא דומיננטית בשניות הראשונות של כל מאמץ מתפרץ', isCorrect: true },
      { id: 'b', text: 'היא דורשת נוכחות של חמצן במיטוכונדריה', isCorrect: false },
      { id: 'c', text: 'היא מפרקת פחמימות ושומנים לפחמן דו-חמצני (CO2) ומים', isCorrect: false },
      { id: 'd', text: 'היא דומיננטית במאמצים הנמשכים מעל 2-3 דקות', isCorrect: false }
    ],
    explanation: 'עמ׳ 25, 35: המערכת האירובית עובדת לאט ומגיעה להספק מלא רק אחרי כ-2 דקות; בשניות הראשונות שולטת מערכת ה-ATP-CrP.'
  },
  {
    id: 'phys1_8',
    moduleId: 'phys1',
    topic: 'מעגל קורי',
    title: 'מיחזור הלקטט בכבד (עמ׳ 47)',
    diagramKey: 'cori',
    questionText: 'במעגל קורי (Cori Cycle):',
    hint: 'שאלה מס׳ 6 בעמ׳ 47.',
    options: [
      { id: 'a', text: 'לקטט שפונה מהשריר הופך שוב לגלוקוז בתאי הכבד בהשקעת אנרגיה', isCorrect: true },
      { id: 'b', text: 'הלקטט מתפרק לאוויר בתוך הריאות', isCorrect: false },
      { id: 'c', text: 'שומן הופך ישירות לחלבון בכליה', isCorrect: false },
      { id: 'd', text: 'הלקטט הופך לסידן בעצם', isCorrect: false }
    ],
    explanation: 'עמ׳ 39, 47: הכבד ממחזר 2 מולקולות לקטט בחזרה למולקולת גלוקוז בעזרת 6 מולקולות ATP.'
  },
  {
    id: 'phys1_9',
    moduleId: 'phys1',
    topic: 'סף אנאירובי וצח"מ',
    title: 'הגדרת הסף האנאירובי OBLA (עמ׳ 49)',
    diagramKey: 'energy',
    questionText: 'מהי ההגדרה המדויקת של הסף האנאירובי (OBLA)?',
    hint: 'שאלה מס׳ 18 בעמ׳ 49.',
    options: [
      { id: 'a', text: 'קצב הפעילות המרבי שבו קצב ייצור הלקטט שווה עדיין לקצב הפינוי שלו (כ-4 מילימול/ליטר)', isCorrect: true },
      { id: 'b', text: 'המצב שבו אוזל כל החמצן בגוף', isCorrect: false },
      { id: 'c', text: 'רגע ההגעה לדופק המרבי', isCorrect: false },
      { id: 'd', text: 'קצב שבו נשרף שומן בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 40, 49: מעבר לסף האנאירובי קצב ייצור הלקטט עולה על קצב הפינוי, ומתחילה עלייה חדה בחומציות ובלקטט בדם המובילה לעייפות.'
  },
  {
    id: 'phys1_10',
    moduleId: 'phys1',
    topic: 'התאוששות וגירעון חמצן',
    title: 'גירעון חמצן בתחילת מאמץ (עמ׳ 49)',
    diagramKey: 'energy',
    questionText: 'גירעון חמצן (Oxygen Deficit) בתחילת מאמץ נובע מ:',
    hint: 'שאלה מס׳ 17 בעמ׳ 49.',
    options: [
      { id: 'a', text: 'הפער בין צריכת החמצן הנדרשת בפועל לבין יכולת המערכת האירובית לספקו בדקות הראשונות (מסופק אנאירובית)', isCorrect: true },
      { id: 'b', text: 'חוסר מוחלט של אוויר באטמוספירה', isCorrect: false },
      { id: 'c', text: 'עצירת נשימה מכוונת של הספורטאי', isCorrect: false },
      { id: 'd', text: 'ירידה פתאומית בנפח הלב', isCorrect: false }
    ],
    explanation: 'עמ׳ 44, 49: בדקות הראשונות עד שהמיטוכונדריות ומערכת הלב-ריאה מגיעות ל-Steady State, האנרגיה החסרה מסופקת במסלולים אנאירוביים.'
  },

  // =========================================================================
  // מודול 4: פיזיולוגיה ב' - מערכות הגוף: לב, דם, נשימה, שרירים והורמונים
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
    title: 'חישוב דופק אימון לפי נוסחת קרבונן (עמ׳ 71, 73)',
    diagramKey: 'heart',
    questionText: 'חשב דופק מטרה לאישה בת 40, עם דופק מנוחה של 70 פעימות/דקה, שרוצה להתאמן בעצימות 80% לפי נוסחת קרבונן:',
    hint: 'שאלה מס׳ 4 בעמ׳ 73. דופק מרבי מוערך: 220-40=180.',
    options: [
      { id: 'a', text: '158 פעימות בדקה (רזרבה: 180-70=110; 110*0.8=88; 88+70=158)', isCorrect: true },
      { id: 'b', text: '180 פעימות בדקה', isCorrect: false },
      { id: 'c', text: '120 פעימות בדקה', isCorrect: false },
      { id: 'd', text: '140 פעימות בדקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 71-73: נוסחת קרבונן = דופק מנוחה + (אחוז העצימות * רזרבת הדופק). רזרבה: 180-70=110. 110*0.8=88. 88+70=158 פעימות/דקה.'
  },
  {
    id: 'phys2_5',
    moduleId: 'phys2',
    topic: 'כלי דם ומחזורי הדם',
    title: 'הוורידים במחזורי הדם (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'מה נכון לגבי הוורידים במחזורי הדם של גוף האדם?',
    hint: 'שאלה מס׳ 5 בעמ׳ 74.',
    options: [
      { id: 'a', text: 'במחזור הריאתי (הקטן) זורם בהם דם עשיר בחמצן, ובמחזור הגדול דם עני בחמצן', isCorrect: true },
      { id: 'b', text: 'בכל הוורידים בגוף תמיד זורם רק דם דל בחמצן', isCorrect: false },
      { id: 'c', text: 'ורידים מובילים דם אך ורק מהלב אל הרקמות', isCorrect: false },
      { id: 'd', text: 'אין שסתומים באף וריד בגוף', isCorrect: false }
    ],
    explanation: 'עמ׳ 53, 74: ורידי הריאה מביאים דם מחומצן מהריאות לעלייה השמאלית, בעוד הוורידים הנבובים מחזירים דם ורידי מהגוף.'
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
    title: 'גורמים המשפיעים על דופק מרבי (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'מה מבין הגורמים הבאים אינו משפיע על הדופק המרבי?',
    hint: 'שאלה מס׳ 7 בעמ׳ 74. האם כושר גופני מעלה דופק מרבי?',
    options: [
      { id: 'a', text: 'רמת הכושר הגופני (הדופק המרבי תלוי בגיל ובגנטיקה, ולא ברמת הכושר)', isCorrect: true },
      { id: 'b', text: 'גיל הנבדק', isCorrect: false },
      { id: 'c', text: 'גורמים גנטיים', isCorrect: false },
      { id: 'd', text: 'מערכת העצבים האוטונומית', isCorrect: false }
    ],
    explanation: 'עמ׳ 63, 74: אימון אירובי אינו מעלה את הדופק המרבי (הנקבע לפי גיל: 220 פחות הגיל) אלא מוריד את דופק המנוחה ומעלה את נפח הפעימה.'
  },
  {
    id: 'phys2_8',
    moduleId: 'phys2',
    topic: 'מערכת העצבים והשריר',
    title: 'כישור השריר Muscle Spindle (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'כישור השריר (Muscle Spindle):',
    hint: 'שאלה מס׳ 1 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'הוא חלק מרפלקס המתיחה ומגיב למתיחה פתאומית של סיבי השריר', isCorrect: true },
      { id: 'b', text: 'נמצא בתוך גיד השריר ומעכב כיווץ', isCorrect: false },
      { id: 'c', text: 'מייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'מפרק שומנים במאמץ', isCorrect: false }
    ],
    explanation: 'עמ׳ 87, 89: כישור השריר ממוקם במקביל לסיבי השריר, חש במתיחה מהירה וגורם לכיווץ רפלקסיבי של השריר להגנה מקריעה.'
  },
  {
    id: 'phys2_9',
    moduleId: 'phys2',
    topic: 'מערכת השרירים',
    title: 'חוק הכל או לא כלום ביחידה מוטורית (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'במתן גירוי תת-סיפי (מתחת לסף הגירוי החשמלי) לנוירון מוטורי:',
    hint: 'שאלה מס׳ 2 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'אין כיווץ כלל של סיבי השריר השייכים לאותה יחידה מוטורית', isCorrect: true },
      { id: 'b', text: 'כל הסיבים מתכווצים בעוצמה חלשה', isCorrect: false },
      { id: 'c', text: 'רק חלק מהסיבים מתכווצים', isCorrect: false },
      { id: 'd', text: 'השריר נרפה למשך שעה', isCorrect: false }
    ],
    explanation: 'עמ׳ 79, 89: יחידה מוטורית פועלת לפי חוק הכל או לא כלום: גירוי תת-סיפי אינו מפעיל אף סיב, גירוי על-סיפי מפעיל את כולם במלוא העוצמה.'
  },
  {
    id: 'phys2_10',
    moduleId: 'phys2',
    topic: 'מערכת השרירים',
    title: 'הגדרת יחידה מוטורית (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'יחידה מוטורית (Motor Unit) היא:',
    hint: 'שאלה מס׳ 3 ו-6 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'נוירון מוטורי אחד וכל סיבי השריר המעוצבבים על ידו', isCorrect: true },
      { id: 'b', text: 'סיב שריר בודד וכל כלי הדם שסביבו', isCorrect: false },
      { id: 'c', text: 'כל השרירים של הגפה התחתונה', isCorrect: false },
      { id: 'd', text: 'קבוצת סרקומרים במנוחה', isCorrect: false }
    ],
    explanation: 'עמ׳ 79, 89: יחידה מוטורית היא היחידה התפקודית הקטנה ביותר של פיתוח כוח, הכוללת נוירון מוטורי אחד וכל הסיבים שהוא מפעיל.'
  },
  {
    id: 'phys2_11',
    moduleId: 'phys2',
    topic: 'סיבי שריר',
    title: 'ריכוז גליקוגן בסיבים (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'ריכוז הגליקוגן ופעילות האנזימים האנאירוביים הגבוהים ביותר נמצאים ב:',
    hint: 'שאלה מס׳ 4 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'סיב לבן מהיר (Fast Twitch - Type IIb)', isCorrect: true },
      { id: 'b', text: 'סיב אדום איטי (Slow Twitch - Type I)', isCorrect: false },
      { id: 'c', text: 'רקמת חיבור', isCorrect: false },
      { id: 'd', text: 'גיד אכילס', isCorrect: false }
    ],
    explanation: 'עמ׳ 80-82, 89: סיבים לבנים (Type II) מתמחים בכוח מתפרץ מהיר ומכילים מאגרי גליקוגן ואנזימים גליקוליטיים בריכוז גבוה.'
  },
  {
    id: 'phys2_12',
    moduleId: 'phys2',
    topic: 'מערכת העצבים והשריר',
    title: 'רפלקס אברון גולג׳י GTO (עמ׳ 90)',
    diagramKey: 'sarcomere',
    questionText: 'בהפעלת רפלקס אברון הגיד ע״ש גולג׳י (Golgi Tendon Organ):',
    hint: 'שאלה מס׳ 9 בעמ׳ 90.',
    options: [
      { id: 'a', text: 'מתרחשת הרפיה רפלקסיבית של השריר בתגובה למתיחת-יתר או עומס קיצוני בגיד', isCorrect: true },
      { id: 'b', text: 'מתרחש כיווץ רפלקסיבי של השריר בתגובה למתיחה מהירה', isCorrect: false },
      { id: 'c', text: 'השריר נקרע באופן מיידי', isCorrect: false },
      { id: 'd', text: 'קצב הלב מוכפל', isCorrect: false }
    ],
    explanation: 'עמ׳ 87-88, 90: אברון גולג\'י בצומת גיד-שריר חש מתח גבוה ומעכב את הנוירון המוטורי כדי להרפות את השריר ולמנוע נזק.'
  },
  {
    id: 'phys2_13',
    moduleId: 'phys2',
    topic: 'הסתגלות לאימון',
    title: 'היפרטרופיה מול היפרפלזיה (עמ׳ 90)',
    diagramKey: 'sarcomere',
    questionText: 'מה ההבדל בין היפרטרופיה (Hypertrophy) להיפרפלזיה (Hyperplasia) של רקמה?',
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
    id: 'phys2_14',
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
    id: 'phys2_15',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'אוורור במאמץ תת-מרבי (עמ׳ 102)',
    diagramKey: 'heart',
    questionText: 'הסיבה לאוורור ריאות גבוה יותר במאמץ תת-מרבי נתון בקרב אדם לא מאומן לעומת מאומן היא:',
    hint: 'שאלה מס׳ 4 בעמ׳ 102.',
    options: [
      { id: 'a', text: 'הסתמכות רבה יותר על גליקוליזה אנאירובית וצורך מוגבר בפינוי CO2 שנוצר מסתירת חומציות', isCorrect: true },
      { id: 'b', text: 'ריאות קטנות פי 5', isCorrect: false },
      { id: 'c', text: 'אי יכולת לפלוט אוויר מהגוף', isCorrect: false },
      { id: 'd', text: 'עצירת נשימה בלתי רצונית', isCorrect: false }
    ],
    explanation: 'עמ׳ 97, 102: הלא-מאומן מייצר יותר לקטט וחומציות; הביקרבונט בדם סותר את החומציות ויוצר עודף CO2 שהריאות נדרשות לאוורר בנשימה מוגברת.'
  },
  {
    id: 'phys2_16',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'קולטנים להורמונים חלבוניים ושומניים (עמ׳ 117)',
    diagramKey: 'cori',
    questionText: 'הורמון חלבוני (כגון אינסולין או גלוקגון):',
    hint: 'שאלה מס׳ 1 בעמ׳ 117. היכן נמצא הקולטן שלו?',
    options: [
      { id: 'a', text: 'נקשר לקולטן ספציפי הנמצא על גבי קרום התא', isCorrect: true },
      { id: 'b', text: 'חוצה בקלות את קרום התא ונקשר לקולטן בגרעין', isCorrect: false },
      { id: 'c', text: 'אינו זקוק לקולטן כלל', isCorrect: false },
      { id: 'd', text: 'מיוצר רק בתוך תאי שומן', isCorrect: false }
    ],
    explanation: 'עמ׳ 105, 117: הורמונים חלבוניים אינם חודרים את ממברנת השומן של התא ולכן נקשרים לקולטנים בקרום התא, בעוד הורמונים סטרואידיים נקשרים בתוך הציטופלזמה.'
  },
  {
    id: 'phys2_17',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'הורמון קורטיזול Cortisol (עמ׳ 117)',
    diagramKey: 'cori',
    questionText: 'מה נכון לגבי הורמון הקורטיזול (Cortisol)?',
    hint: 'שאלה מס׳ 7 בעמ׳ 117.',
    options: [
      { id: 'a', text: 'מופרש מקליפת יותרת הכליה (Adrenal Cortex) במצבי סטרס ומעודד פירוק מאגרים', isCorrect: true },
      { id: 'b', text: 'מופרש מליבת יותרת הכליה ומעודד בניית שומן', isCorrect: false },
      { id: 'c', text: 'מופרש מהלבלב ומוריד סוכר בדם', isCorrect: false },
      { id: 'd', text: 'מגביר את פעילות מערכת החיסון פי עשרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 109, 117: קורטיזול הוא גלוקוקורטיקואיד המופרש מקליפת האדרנל בסטרס ומאמץ ממושך, מפרק חלבונים ושומנים ומעלה סוכר בדם.'
  },
  {
    id: 'phys2_18',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'הורמון אנאבולי (עמ׳ 117)',
    diagramKey: 'cori',
    questionText: 'מי מבין ההורמונים הבאים הוא בעל אפקט אנאבולי (בונה מאגרים וחלבונים)?',
    hint: 'שאלה מס׳ 8 בעמ׳ 117. מה תפקיד האינסולין?',
    options: [
      { id: 'a', text: 'אינסולין (מעודד כניסת גלוקוז, בניית גליקוגן, חלבונים ושומן)', isCorrect: true },
      { id: 'b', text: 'אדרנלין (הורמון קטבולי)', isCorrect: false },
      { id: 'c', text: 'קורטיזול (הורמון קטבולי)', isCorrect: false },
      { id: 'd', text: 'גלוקגון (הורמון קטבולי)', isCorrect: false }
    ],
    explanation: 'עמ׳ 111-112, 117: אינסולין הוא הורמון אנאבולי מובהק המעודד אגירת מזון ובניית מאגרים; אדרנלין, קורטיזול וגלוקגון הם קטבוליים.'
  },
  {
    id: 'phys2_19',
    moduleId: 'phys2',
    topic: 'מערכת החיסון',
    title: 'תאי פגוציטים (עמ׳ 124)',
    diagramKey: 'cori',
    questionText: 'מי מבין התאים הבאים פועל כ"פגוציט" (תא בולעני במערכת החיסון)?',
    hint: 'שאלה מס׳ 1 בעמ׳ 124.',
    options: [
      { id: 'a', text: 'נויטרופיל ומאקרופאג׳ (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'לימפוציט מסוג B בלבד', isCorrect: false },
      { id: 'c', text: 'כדורית דם אדומה', isCorrect: false },
      { id: 'd', text: 'טסיות דם', isCorrect: false }
    ],
    explanation: 'עמ׳ 120, 124: נויטרופילים ומונוציטים/מאקרופאגים בולעים חיידקים ורקמות פגועות ומהווים את קו ההגנה השני.'
  },
  {
    id: 'phys2_20',
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
