/* eslint-disable */
// @ts-nocheck

export const ALL_WINGATE_QUESTIONS = [
  // =========================================================================
  // מודול 1: אנטומיה א' - תאים, רקמות, שלד ומפרקים
  // =========================================================================
  {
    id: 'anat1_1',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'תפקיד Annulus Fibrosus (עמ׳ 35)',
    diagramKey: 'disc',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו בעיקר:',
    hint: 'Annulus בלטינית פירושו "טבעת". דמיין מעטפת של צמיג קשיח שמחזיקה את הנוזל בפנים וסופגת את מהמורות הכביש.',
    options: [
      { id: 'a', text: 'למנוע חיכוך ולבלום זעזועים (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'להזין ישירות את חוט השדרה', isCorrect: false }
    ],
    explanation: 'ה-Annulus Fibrosus הוא טבעת סיבית קולגנית רב-שכבתית העוטפת את הגרעין הג׳לטיני, מונעת את שחיקת החוליות ובולמת זעזועים אנכיים.'
  },
  {
    id: 'anat1_2',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'תאי סחוס - Chondrocyte (עמ׳ 35)',
    diagramKey: 'knee',
    questionText: 'תא הסחוס (Chondrocyte):',
    hint: 'הסיומת "ציט" פירושה תא בוגר, ו"כונדרו" זה סחוס. מה תא שיושב בתוך רקמה צריך להמשיך להפריש כדי שהיא לא תתפרק?',
    options: [
      { id: 'a', text: 'מייצר קולגן ורכיבי חומר חוץ-תאי בסחוס', isCorrect: true },
      { id: 'b', text: 'נמצא ברקמת העצם הצפופה', isCorrect: false },
      { id: 'c', text: 'הוא חלק מהחומר האנאורגני של הסחוס', isCorrect: false },
      { id: 'd', text: 'נמצא ברקמת חיבור צפופה בלבד', isCorrect: false }
    ],
    explanation: 'הכונדרוציטים הם "פועלי התחזוקה" של הסחוס: הם מייצרים ומפרישים ללא הרף סיבי קולגן ופרוטאוגליקנים למטריקס החוץ-תאי.'
  },
  {
    id: 'anat1_3',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'סחוס היאליני בקצות עצמות (עמ׳ 35)',
    diagramKey: 'knee',
    questionText: 'בעניין הסחוס ההיאליני שבקצות העצמות, מי מבין המשפטים הבאים הוא הנכון:',
    hint: 'חשוב על ספוג: כשלוחצים עליו נוזל יוצא, וכשמרפים הוא יונק נוזל מהסביבה. אין בו צינורות דם משלו!',
    options: [
      { id: 'a', text: 'מקבל חומרי מזון וחמצן בדיפוזיה מנוזל המפרק', isCorrect: true },
      { id: 'b', text: 'עשיר באספקת דם ישירה', isCorrect: false },
      { id: 'c', text: 'אלסטי מאוד הודות לאחוז גבוה של אלסטין', isCorrect: false },
      { id: 'd', text: 'נמצא בדיסק הבין חולייתי', isCorrect: false }
    ],
    explanation: 'בשל העומס המכני העצום, כלי דם לא יכולים לשרוד בסחוס המפרקי. לכן הוא מקבל מזון עקיף בדיפוזיה מתוך הנוזל הסינוביאלי בעת תנועה.'
  },
  {
    id: 'anat1_4',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'מבנה העצם הצפופה (עמ׳ 35)',
    diagramKey: 'spine',
    questionText: 'מה מייחד את העצם הצפופה (Compact Bone)?',
    hint: 'דמיין גזע עץ שנחתך לרוחב – רואים בו טבעות גדילה עגולות זו בתוך זו סביב צינור מרכזי.',
    options: [
      { id: 'a', text: 'מורכבת מיחידות המסודרות בצורה קונצנטרית (מערכות הוורס - Osteons)', isCorrect: true },
      { id: 'b', text: 'חסרת אספקה דמית לחלוטין', isCorrect: false },
      { id: 'c', text: 'נמצאת בעיקר בחלקן הפנימי של האפיפיזות', isCorrect: false },
      { id: 'd', text: 'מורכבת מטרבקולות ספוגיות בלבד', isCorrect: false }
    ],
    explanation: 'העצם הצפופה מורכבת מ"מערכות הוורס" (אוסטאונים) – יחידות גליליות של גבישי מינרלים וקולגן המסודרות במעגלים סביב תעלה מרכזית המזינה אותן.'
  },
  {
    id: 'anat1_5',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'מיקום רקמת חיבור רפה (עמ׳ 35)',
    diagramKey: 'disc',
    questionText: 'Loose connective tissue (רקמת חיבור אמיתית רפה/אוורירית) נמצאת:',
    hint: 'זו ה"צמר גפן הביולוגי" שמרפד רווחים ומפריד בין סיבי שריר בלי ליצור חבל קשיח כמו גיד.',
    options: [
      { id: 'a', text: 'בין סיבי השריר וסביב כלי דם ועצבים', isCorrect: true },
      { id: 'b', text: 'בשכבה הפנימית של כלי הדם', isCorrect: false },
      { id: 'c', text: 'בגיד אכילס', isCorrect: false },
      { id: 'd', text: 'בסחוס האף', isCorrect: false }
    ],
    explanation: 'רקמת חיבור רפה מאגדת את סיבי השריר בצרורות, מעניקה גמישות ומאפשרת מעבר קל של כלי דם זעירים ועצבים ביניהם.'
  },
  {
    id: 'anat1_6',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'המים שברקמת הסחוס (עמ׳ 36)',
    diagramKey: 'knee',
    questionText: 'המים שברקמת הסחוס:',
    hint: 'מים לא יכולים להידחס. אם קושרים אותם חזק למולקולות סוכריות גדולות, מקבלים כרית נוקשת שעומדת בעומס של מאות קילוגרמים.',
    options: [
      { id: 'a', text: 'קשורים אל הפרוטאוגליקנים ויוצרים עמידות לדחיסה', isCorrect: true },
      { id: 'b', text: 'נאגרים בצורה חופשית ללא קשר כימי', isCorrect: false },
      { id: 'c', text: 'נמצאים אך ורק בתוך גרעין התא', isCorrect: false },
      { id: 'd', text: 'מתאדים לחלוטין בזמן מאמץ גופני', isCorrect: false }
    ],
    explanation: 'הפרוטאוגליקנים הם כמו מגנט מולקולרי למים. הקשר הכימי יוצר ג\'ל הידראולי שמתנגד לדחיסה ומחזיר את הסחוס לצורתו המקורית כקפיץ.'
  },
  {
    id: 'anat1_7',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'תכונות קולגן סוג 1 (עמ׳ 36)',
    diagramKey: 'disc',
    questionText: 'קולגן מסוג 1 (Type 1 Collagen) מספק את התכונה העיקרית הבאה:',
    hint: 'חשוב על כבל מפלדה של מעלית: הוא חייב להחזיק משקל עצום במשיכה מבלי להימתח או להתארך.',
    options: [
      { id: 'a', text: 'עומד בכוחות מתיחה גדולים וכמעט ואינו נמתח', isCorrect: true },
      { id: 'b', text: 'אלסטיות גבוהה מאוד כמו גומייה', isCorrect: false },
      { id: 'c', text: 'רכות ונזילות', isCorrect: false },
      { id: 'd', text: 'יכולת כיווץ אקטיבית', isCorrect: false }
    ],
    explanation: 'קולגן סוג 1 הוא החלבון המבני העיקרי של גידים ועצמות, המתוכנן מכנית לספוג כוחות מתיחה חזקים עם התארכות מינימלית בלבד.'
  },
  {
    id: 'anat1_8',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'מאפייני חוליות הצוואר (עמ׳ 65)',
    diagramKey: 'cervical',
    questionText: 'נקב בזיזים הרוחביים (Transverse Foramen) מאפיין את חוליות:',
    hint: 'המוח יושב בראש וחייב לקבל דם כל הזמן. באיזה אזור בעמוד השדרה העורקים צריכים "מנהרה מוגנת" בתוך העצם בדרכם למעלה?',
    options: [
      { id: 'a', text: 'הצוואר (Cervical vertebrae)', isCorrect: true },
      { id: 'b', text: 'החזה (Thoracic)', isCorrect: false },
      { id: 'c', text: 'המותניים (Lumbar)', isCorrect: false },
      { id: 'd', text: 'הסקרום', isCorrect: false }
    ],
    explanation: 'הנקב בזיז הרוחבי קיים רק בשבע חוליות הצוואר (C1-C7) ומשמש להגנה על עורק הצוואר המוביל דם למוח.'
  },
  {
    id: 'anat1_9',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'תפקיד הזיז הרוחבי (עמ׳ 65)',
    diagramKey: 'cervical',
    questionText: 'תפקידו העיקרי של הזיז הרוחבי (Transverse Process) בחוליה הוא:',
    hint: 'כשרוצים להזיז משהו כבד בעזרת חבל, ככל שקושרים אותו למוט ארוך יותר שבולט לצדדים – המנוף חזק יותר.',
    options: [
      { id: 'a', text: 'לשמש מנוף ואחז לשרירים ורצועות המניעים ומייצבים את החוליה', isCorrect: true },
      { id: 'b', text: 'לשאת ישירות את כל משקל הגוף', isCorrect: false },
      { id: 'c', text: 'להגן על כיס המרה', isCorrect: false },
      { id: 'd', text: 'לייצר תאי דם לבנים', isCorrect: false }
    ],
    explanation: 'גוף החוליה נושא את המשקל, ואילו הזיזים הבולטים לצדדים ולאחור משמשים כמנופים מכניים לחיבור השרירים המניעים ומייצבים את הגב.'
  },
  {
    id: 'anat1_10',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'חוליה C1 אטלס (עמ׳ 65)',
    diagramKey: 'cervical',
    questionText: 'חוליה C1 (Atlas) יוצאת דופן מכל שאר החוליות כי:',
    hint: 'אטלס במיתולוגיה נשא את כדור הארץ על כתפיו. החוליה הזו היא טבעת רחבה שמחזיקה ישירות את הגולגולת, ואין בה את ה"גוש" הרגיל של גוף החוליה.',
    options: [
      { id: 'a', text: 'אין לה גוף חוליה והיא נושאת את הגולגולת (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'היא החוליה הגדולה והכבדה ביותר בשלד', isCorrect: false },
      { id: 'c', text: 'היא מחוברת ישירות לצלע הראשונה', isCorrect: false },
      { id: 'd', text: 'אין לה תעלה עבור חוט השדרה', isCorrect: false }
    ],
    explanation: 'חוליית האטלס (C1) היא טבעת גרמית ללא גוף חוליה מרכזי וללא זיז קוצי, הבנויה לקלוט את עצם העורף של הגולגולת.'
  },
  {
    id: 'anat1_11',
    moduleId: 'anat1',
    topic: 'מפרקים',
    title: 'מפרק Atlantoaxial C1-C2 (עמ׳ 66)',
    diagramKey: 'cervical',
    questionText: 'ה-Atlantoaxial joint מאפשר את התנועה העיקרית הבאה:',
    hint: 'חוליה C2 נקראת Axis (ציר), וממנה בולטת שן כלפי מעלה שעליה C1 מסתובבת כמו גלגל על ציר.',
    options: [
      { id: 'a', text: 'רוטציה (סיבוב ראש ימינה ושמאלה)', isCorrect: true },
      { id: 'b', text: 'כפיפה ופשיטה בלבד', isCorrect: false },
      { id: 'c', text: 'כפיפה צידית בלבד', isCorrect: false },
      { id: 'd', text: 'הרחקה וקירוב', isCorrect: false }
    ],
    explanation: 'השן של אקסיס (Dens) משמשת כציר סביבו חוליית אטלס מסתובבת ומספקת כ-50% מכלל תנועת הרוטציה (ה"לא") של הראש.'
  },
  {
    id: 'anat1_12',
    moduleId: 'anat1',
    topic: 'שלד בית החזה',
    title: 'חלקי עצם החזה Sternum (עמ׳ 63, 65)',
    diagramKey: 'spine',
    questionText: 'עצם החזה (Sternum) מורכבת מ-3 חלקים עיקריים מלמעלה למטה:',
    hint: 'דמיין חרב קדומה: למעלה הידית הרחבה, באמצע הלהב הארוך, ולמטה השפיץ החד של קצה החרב.',
    options: [
      { id: 'a', text: 'Manubrium (ידית), Body (גוף), Xiphoid process (סיף)', isCorrect: true },
      { id: 'b', text: 'אטלס, אקסיס וסקרום', isCorrect: false },
      { id: 'c', text: 'איליום, איסכיום ופיוביס', isCorrect: false },
      { id: 'd', text: 'אפיפיזה, דיאפיזה ומטפיזה', isCorrect: false }
    ],
    explanation: 'עצם הסטרנום בנויה מידית (מנובריום), גוף העצם, והזיז התחתון (קספואיד - מיוונית: דמוי חרב סיף).'
  },
  {
    id: 'anat1_13',
    moduleId: 'anat1',
    topic: 'שרירי נשימה',
    title: 'שריר הסרעפת Diaphragm (עמ׳ 64, 65)',
    diagramKey: 'spine',
    questionText: 'שריר הסרעפת (Diaphragm) מפריד בין:',
    hint: 'דמיין רצפה לקומה העליונה (שבה הלב נושם ופועם) ותקרה לקומה התחתונה (שבה הקיבה והמעיים מעכלים).',
    options: [
      { id: 'a', text: 'איברי בית החזה (לב וריאות) לבין חלל הבטן (קיבה ומעיים)', isCorrect: true },
      { id: 'b', text: 'חלל הגולגולת לחלל הצוואר', isCorrect: false },
      { id: 'c', text: 'האגן לגפיים התחתונות', isCorrect: false },
      { id: 'd', text: 'השכמות לעמוד השדרה', isCorrect: false }
    ],
    explanation: 'הסרעפת היא שריר כיפתי גדול החוצץ בין חלל בית החזה העליון לבין חלל הבטן התחתון, ויורדת מטה כדי להכניס אוויר לריאות.'
  },
  {
    id: 'anat1_14',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'משטחים מפרקיים של חוליות המותניים (עמ׳ 58, 65)',
    diagramKey: 'spine',
    questionText: 'המשטחים המפרקיים (Facet Joints) של חוליות המותניים נמצאים בעיקר במישור:',
    hint: 'בגב התחתון אפשר להתכופף קדימה וליישר אחורה בקלות, אבל קשה מאוד להסתובב סביב הציר. איזה מישור מאפשר תנועה כזו קדימה-אחורה?',
    options: [
      { id: 'a', text: 'הסגיטלי (מאפשר כפיפה ופשיטה, ומגביל רוטציה)', isCorrect: true },
      { id: 'b', text: 'הפרונטלי (מאפשר רק הרחקה)', isCorrect: false },
      { id: 'c', text: 'האופקי בלבד', isCorrect: false },
      { id: 'd', text: 'אין מפרקים בין חוליות המותניים', isCorrect: false }
    ],
    explanation: 'המשטחים המפרקיים במותניים מונחים במישור הסגיטלי, מה שמאפשר כפיפה ופשיטה יעילות אך "נועל" ומגן על הגב התחתון מרוטציה מזיקה.'
  },
  {
    id: 'anat1_15',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'סיום חוט השדרה (עמ׳ 61)',
    diagramKey: 'spine',
    questionText: 'באיזה גובה של עמוד השדרה מסתיים חוט השדרה (Spinal Cord) אצל אדם בוגר?',
    hint: 'חוט השדרה קצר בהרבה מתעלת השדרה! הוא מפסיק להיות "כבל אחד עבה" מיד מתחת לקו הצלעות האחרונות.',
    options: [
      { id: 'a', text: 'בגובה חוליות המותניים L1-L2 (ומשם ממשיך כ"זנב סוס")', isCorrect: true },
      { id: 'b', text: 'בקצה עצם הזנב (Coccyx)', isCorrect: false },
      { id: 'c', text: 'בגובה הצוואר C3 בלבד', isCorrect: false },
      { id: 'd', text: 'בגובה חוליה T6', isCorrect: false }
    ],
    explanation: 'חוט השדרה מסתיים בגובה L1-L2; מתחת לגובה זה העצבים יורדים כחוטים נפרדים (Cauda Equina - זנב סוס), שם בטוח לבצע ניקור מותני.'
  },

  // =========================================================================
  // מודול 2: אנטומיה ב' - שרירים, תחל, אחז וניתוח תנועות
  // =========================================================================
  {
    id: 'anat2_1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה (עמ׳ 124)',
    diagramKey: 'knee',
    questionText: 'מי מהשרירים הבאים נאחז (Insertion) בעצם השוקית (Fibula)?',
    hint: 'הפיבולה היא העצם החיצונית (לטרלית) של השוק. איזה שריר מהירך האחורית פונה החוצה לצד הלטרלי?',
    options: [
      { id: 'a', text: 'Biceps femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'ה-Biceps Femoris יורד בצד הלטרלי ונאחז בראש הפיבולה, בעוד שני שרירי ה"סמי" פונים פנימה ונאחזים בעצם הטיביה.'
  },
  {
    id: 'anat2_2',
    moduleId: 'anat2',
    topic: 'שרירי הבטן',
    title: 'שריר שלא מניע גו (עמ׳ 124)',
    diagramKey: 'sarcomere',
    questionText: 'מי מהשרירים הבאים אינו משתתף בכפיפה (Flexion) או רוטציה של הגו?',
    hint: 'חשוב על חגורת גב רחבה שהסיבים שלה רצים לרוחב (Transverse): היא יכולה רק להדק את הבטן, לא לכופף אותך.',
    options: [
      { id: 'a', text: 'Transversus abdominis (הרחב הבטני)', isCorrect: true },
      { id: 'b', text: 'External oblique', isCorrect: false },
      { id: 'c', text: 'Internal oblique', isCorrect: false },
      { id: 'd', text: 'Rectus abdominis', isCorrect: false }
    ],
    explanation: 'שריר הרחב הבטני (Transversus Abdominis) סיביו אופקיים לחלוטין ולכן תפקידו לייצב ולהעלות לחץ תוך-בטני, ללא תנועת שלד.'
  },
  {
    id: 'anat2_3',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'קירוב אופקי ורוטציה פנימית (עמ׳ 124)',
    diagramKey: 'sarcomere',
    questionText: 'התנועות קירוב אופקי (Horizontal Adduction) ורוטציה מדיאלית של הכתף מבוצעות ע״י:',
    hint: 'שים יד על החלק הקדמי של הכתף וקרב את המרפק אל החזה – תרגיש את הסיבים האלה מתכווצים מיד.',
    options: [
      { id: 'a', text: 'Anterior deltoid (הדלתואיד הקדמי)', isCorrect: true },
      { id: 'b', text: 'Posterior deltoid', isCorrect: false },
      { id: 'c', text: 'Brachialis', isCorrect: false },
      { id: 'd', text: 'Infraspinatus', isCorrect: false }
    ],
    explanation: 'הדלתואיד הקדמי מושך את הזרוע מלפנים ומבצע כפיפה, קירוב אופקי וסיבוב פנימי (מדיאלי).'
  },
  {
    id: 'anat2_4',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'שריר שאינו מבצע רוטציה מדיאלית (עמ׳ 124)',
    diagramKey: 'sarcomere',
    questionText: 'מי מהשרירים הבאים אינו מבצע רוטציה מדיאלית (סיבוב פנימי) של הכתף?',
    hint: 'זכור את צמד האחים שמסובבים את הזרוע החוצה (חיצוני): אינפראספינטוס וחברו הקטן "מינור".',
    options: [
      { id: 'a', text: 'Teres minor (מבצע רוטציה לטרלית/חיצונית)', isCorrect: true },
      { id: 'b', text: 'Teres major', isCorrect: false },
      { id: 'c', text: 'Anterior deltoid', isCorrect: false },
      { id: 'd', text: 'Latissimus dorsi', isCorrect: false }
    ],
    explanation: 'ה-Teres Minor ממוקם מאחור ונאחז בחלק האחורי של ה-Greater Tubercle ולכן מושך את הזרוע לרוטציה לטרלית (חיצונית).'
  },
  {
    id: 'anat2_5',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'מסובבי הכתף Rotator Cuff (עמ׳ 125)',
    diagramKey: 'sarcomere',
    questionText: 'מי מבין מייצבי הכתף (Rotator Cuff) מבצע רוטציה מדיאלית (פנימית)?',
    hint: 'כל שרירי השרוול יושבים מאחורי השכמה מלבד אחד בלבד שמתחבא מקדימה, מתחת (Sub) לשכמה.',
    options: [
      { id: 'a', text: 'Subscapularis', isCorrect: true },
      { id: 'b', text: 'Supraspinatus', isCorrect: false },
      { id: 'c', text: 'Infraspinatus', isCorrect: false },
      { id: 'd', text: 'Teres minor', isCorrect: false }
    ],
    explanation: 'ה-Subscapularis יושב בחלק הקדמי של השכמה ונאחז ב-Lesser Tubercle מקדימה, ולכן הוא היחיד בקבוצה שמסובב פנימה.'
  },
  {
    id: 'anat2_6',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'אחז ב-Greater Trochanter (עמ׳ 125)',
    diagramKey: 'knee',
    questionText: 'ה-Greater Trochanter של הפמור מהווה נקודת אחיזה (Insertion) לשריר:',
    hint: 'הבליטה הענקית שאתה יכול למשש בצד החיצוני של הירך. איזה שריר צריך למשוך שם למעלה כדי שלא תיפול הצידה בעמידה על רגל אחת?',
    options: [
      { id: 'a', text: 'Gluteus medius', isCorrect: true },
      { id: 'b', text: 'Iliopsoas', isCorrect: false },
      { id: 'c', text: 'Gluteus maximus', isCorrect: false },
      { id: 'd', text: 'Hamstrings', isCorrect: false }
    ],
    explanation: 'השרירים Gluteus Medius ו-Minimus נאחזים ב-Greater Trochanter ומרחיקים את הירך ומייצבים את האגן בהליכה.'
  },
  {
    id: 'anat2_7',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'תחל בעצם ה-Femur (עמ׳ 125)',
    diagramKey: 'knee',
    questionText: 'מי מהשרירים הבאים מתחיל (Origin) מעצם הירך (Femur)?',
    hint: 'שלושת ה"וואסטוסים" מתחילים בירך עצמה. הרקטוס (הישר) לעומתם חייב לעלות עד לעצם האגן.',
    options: [
      { id: 'a', text: 'Vastus intermedius', isCorrect: true },
      { id: 'b', text: 'Rectus femoris (מתחיל באגן ב-AIIS)', isCorrect: false },
      { id: 'c', text: 'Iliopsoas', isCorrect: false },
      { id: 'd', text: 'Semitendinosus', isCorrect: false }
    ],
    explanation: 'שלושת ראשי ה-Vastus (לטרליס, מדיאליס, אינטרמדיוס) מתחילים ישירות על גבי הפמור, בעוד הרקטוס פמוריס מתחיל באגן.'
  },
  {
    id: 'anat2_8',
    moduleId: 'anat2',
    topic: 'שרירי הקרסול',
    title: 'הרמת בהונות ועמידה על עקבים (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'אתה הולך על העקבים ומרים את בהונות כף הרגל מעלה (Dorsiflexion). איזה שריר פועל?',
    hint: 'גע בקדמת השוק שלך והרם את האצבעות מעלה – תרגיש שריר קדמי (Anterior) מתקשה מיד לאורך הטיביה.',
    options: [
      { id: 'a', text: 'Tibialis anterior', isCorrect: true },
      { id: 'b', text: 'Gastrocnemius', isCorrect: false },
      { id: 'c', text: 'Soleus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'ה-Tibialis Anterior נמצא בקדמת השוק ומבצע Dorsiflexion ו-Inversion ושומר על קשת כף הרגל מפני צניחה.'
  },
  {
    id: 'anat2_9',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'פשיטת ירך ראשית (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'פשיטת ירך (Hip Extension) בעלייה מסקוואט או עלייה במדרגות מבוצעת בעוצמה ע״י:',
    hint: 'זהו השריר בעל המסה הגדולה והחזקה ביותר בישבן של האדם ההולך על שתיים.',
    options: [
      { id: 'a', text: 'Gluteus maximus', isCorrect: true },
      { id: 'b', text: 'Iliopsoas', isCorrect: false },
      { id: 'c', text: 'Rectus femoris', isCorrect: false },
      { id: 'd', text: 'Vastus medialis', isCorrect: false }
    ],
    explanation: 'ה-Gluteus Maximus הוא הפושט הראשי והחזק ביותר של מפרק הירך, הנכנס לפעולה מסיבית כנגד עומס (מדרגות, סקוואט).'
  },
  {
    id: 'anat2_10',
    moduleId: 'anat2',
    topic: 'שרירי השוק',
    title: 'עלייה על קצות האצבעות (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'עלייה על קצות האצבעות (Plantarflexion) מבוצעת באמצעות:',
    hint: 'השרירים שמתחברים לחבל הביולוגי העבה ביותר בגוף – גיד אכילס שמושך את העקב למעלה.',
    options: [
      { id: 'a', text: 'Gastrocnemius (תאומים) ו-Soleus', isCorrect: true },
      { id: 'b', text: 'Tibialis anterior', isCorrect: false },
      { id: 'c', text: 'Hamstrings', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'הגסטרוקנמיוס והסולאוס מתחברים לגיד אכילס שנאחז בעצם העקב (Calcaneus) ומרימים את הגוף כולו לעמידה על קצות האצבעות.'
  },
  {
    id: 'anat2_11',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'הרחקה אופקית של הכתף (עמ׳ 128)',
    diagramKey: 'sarcomere',
    questionText: 'הרחקה אופקית (Horizontal Abduction) של הכתף (כמו במכשיר "פרפר הפוך") מבוצעת ע״י:',
    hint: 'החלק של שריר הכתף שנמצא מאחור (Posterior) ומושך את המרפקים לאחור.',
    options: [
      { id: 'a', text: 'Posterior Deltoid (דלתואיד אחורי)', isCorrect: true },
      { id: 'b', text: 'Middle deltoid', isCorrect: false },
      { id: 'c', text: 'Pectoralis major', isCorrect: false },
      { id: 'd', text: 'Biceps brachii', isCorrect: false }
    ],
    explanation: 'הדלתואיד האחורי יוצא מעצם השכמה ונאחז בזרוע, ומושך אותה לאחור במישור האופקי.'
  },
  {
    id: 'anat2_12',
    moduleId: 'anat2',
    topic: 'שרירי הזרוע',
    title: 'האחז של Biceps Brachii (עמ׳ 128)',
    diagramKey: 'sarcomere',
    questionText: 'מי מבין השרירים הבאים אינו מחובר לעצם ה-Ulna באמה?',
    hint: 'הרדיוס היא העצם שמסתובבת בסופינציה (כף יד כלפי מעלה כמו קערת מרק). איזה שריר מפורסם מסובב אותה ולכן חייב להיאחז בה?',
    options: [
      { id: 'a', text: 'Biceps brachii (נאחז ברדיוס ב-Radial Tuberosity)', isCorrect: true },
      { id: 'b', text: 'Triceps brachii (נאחז באולקרנון באולנה)', isCorrect: false },
      { id: 'c', text: 'Brachialis (נאחז ב-Ulnar Tuberosity)', isCorrect: false },
      { id: 'd', text: 'Anconeus', isCorrect: false }
    ],
    explanation: 'ה-Biceps Brachii נאחז בבליטת הרדיוס (Radial Tuberosity) ומבצע סופינציה וכפיפת מרפק; הוא אינו מתחבר לאולנה.'
  },
  {
    id: 'anat2_13',
    moduleId: 'anat2',
    topic: 'שרירי השכמה',
    title: 'שריר המסור הקדמי Serratus Anterior (עמ׳ 87)',
    diagramKey: 'sarcomere',
    questionText: 'שריר ה-Serratus Anterior (המסור הקדמי) מצמיד את השכמה לצלעות. חולשה שלו גורמת ל:',
    hint: 'כשהשכמה לא צמודה לגב, הגבול שלה בולט החוצה כמו כנף של ציפור.',
    options: [
      { id: 'a', text: 'תופעת "שכמה מכונפת" (Winged Scapula) ובריחת השכמה לאחור', isCorrect: true },
      { id: 'b', text: 'שיתוק של מפרק הקרסול', isCorrect: false },
      { id: 'c', text: 'חוסר יכולת ליישר את הברך', isCorrect: false },
      { id: 'd', text: 'עצירת דופק', isCorrect: false }
    ],
    explanation: 'הסרטוס אנטריור מושך את השכמה קדימה ומצמיד אותה לבית החזה; פגיעה בעצבוב שלו גורמת לשכמה לבלוט החוצה ככנף.'
  },
  {
    id: 'anat2_14',
    moduleId: 'anat2',
    topic: 'שרירי הזרוע',
    title: 'שריר ה-Brachialis (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'שריר ה-Brachialis נקרא "סוס העבודה" של כפיפת המרפק משום ש:',
    hint: 'הוא נאחז באולנה (שאינה מסתובבת). האם אכפת לו אם כף היד בפרונציה או בסופינציה?',
    options: [
      { id: 'a', text: 'הוא מכופף את המרפק באותה עוצמה בכל מצב של כף היד (אינו תלוי בסיבוב האמה)', isCorrect: true },
      { id: 'b', text: 'הוא מיישר את המרפק לאחור', isCorrect: false },
      { id: 'c', text: 'הוא שריר של הגב התחתון', isCorrect: false },
      { id: 'd', text: 'הוא פועל רק בזמן שינה', isCorrect: false }
    ],
    explanation: 'מכיוון שהברכיאליס נאחז באולנה הקבועה, הוא מכופף מרפק טהור שפועל במלוא העוצמה גם באחיזה עילית, תחתית או ניטרלית.'
  },
  {
    id: 'anat2_15',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'השריר הדו-מפרקי בארבע-ראשי (עמ׳ 107)',
    diagramKey: 'knee',
    questionText: 'מי מבין ארבעת ראשי ה-Quadriceps הוא שריר דו-מפרקי החוצה גם את מפרק הירך וגם את הברך?',
    hint: 'הראש הישר המרכזי שמתחיל בעצם האגן (AIIS).',
    options: [
      { id: 'a', text: 'Rectus Femoris (הישר הירכי)', isCorrect: true },
      { id: 'b', text: 'Vastus Lateralis', isCorrect: false },
      { id: 'c', text: 'Vastus Medialis', isCorrect: false },
      { id: 'd', text: 'Vastus Intermedius', isCorrect: false }
    ],
    explanation: 'הרקטוס פמוריס הוא היחיד מהארבעה שיוצא מעצם האגן ולכן משתתף בכפיפת ירך בנוסף לפשיטת ברך.'
  },

  // =========================================================================
  // מודול 3: פיזיולוגיה א' - אנרגיה, מטבוליזם וגליקוליזה
  // =========================================================================
  {
    id: 'phys1_1',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מקור אנרגיה במרתון (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'מקורם העיקרי של מולקולות ה-ATP במהלך ריצת מרתון הוא:',
    hint: 'מאגרי הפחמימות בגוף מספיקים לכשעה וחצי. מאיזה מחסן ענק של עשרות אלפי קלוריות הגוף שואב דלק לאורך שעות?',
    options: [
      { id: 'a', text: 'בשומנים (ובפחמימות במסלול האירובי)', isCorrect: true },
      { id: 'b', text: 'במסלול האנאירובי אלקטי בלבד', isCorrect: false },
      { id: 'c', text: 'בחלבונים בלבד', isCorrect: false },
      { id: 'd', text: 'בוויטמינים', isCorrect: false }
    ],
    explanation: 'במאמצים אירוביים ממושכים מעל חצי שעה, שומנים מהווים את מקור הדלק המרכזי במיטוכונדריות בנוכחות חמצן.'
  },
  {
    id: 'phys1_2',
    moduleId: 'phys1',
    topic: 'דלק מטבולי במאמץ',
    title: 'תרומת שומנים מול עצימות (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'בזמן מאמץ גופני, התרומה היחסית של השומנים כמקור אנרגיה:',
    hint: 'ככל שאתה רץ מהר יותר, השריר צריך ATP כאן ועכשיו. שומן מתפרק לאט ודורש המון חמצן, אז מה קורה לחלקו היחסי?',
    options: [
      { id: 'a', text: 'יורדת ככל שמתגברת עצימות המאמץ (ועולה חלקן של הפחמימות)', isCorrect: true },
      { id: 'b', text: 'עולה ככל שמתגברת עצימות המאמץ', isCorrect: false },
      { id: 'c', text: 'זהה בכל דרגות המאמץ', isCorrect: false },
      { id: 'd', text: 'שומן משמש רק באימוני ספרינט של 10 שניות', isCorrect: false }
    ],
    explanation: 'בעצימות גבוהה הגוף עובר לדלק מהיר וחסכוני בחמצן (פחמימות), בעוד חלקו היחסי של השומן יורד.'
  },
  {
    id: 'phys1_3',
    moduleId: 'phys1',
    topic: 'מעגל קורי',
    title: 'פינוי לקטט במעגל קורי (עמ׳ 47)',
    diagramKey: 'cori',
    questionText: 'במעגל קורי (Cori Cycle):',
    hint: 'הכבד הוא "מפעל המיחזור" של הגוף: הוא לוקח את הלקטט שנשפך לדם מהשרירים ומשקיע אנרגיה כדי לבנות ממנו שוב סוכר נקי.',
    options: [
      { id: 'a', text: 'לקטט הופך שוב לגלוקוז בתאי הכבד (בהשקעת אנרגיה)', isCorrect: true },
      { id: 'b', text: 'לקטט הופך לגלוקוז בתוך השריר הפעיל עצמו', isCorrect: false },
      { id: 'c', text: 'לקטט הופך לשומן בתוך הריאות', isCorrect: false },
      { id: 'd', text: 'לקטט מסולק מהגוף ישירות דרך הנשיפה', isCorrect: false }
    ],
    explanation: 'הכבד הופך 2 מולקולות לקטט חזרה לגלוקוז בתהליך גלוקונאוגנזה הדורש 6 מולקולות ATP.'
  },
  {
    id: 'phys1_4',
    moduleId: 'phys1',
    topic: 'מאגרי אנרגיה',
    title: 'מאגרי הגליקוגן (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'עיקר הגליקוגן נאגר בגוף ב:',
    hint: 'המאגר המקומי הגדול נמצא בשרירים שזזים, והמאגר המרכזי שנשלח לדם נמצא באיבר הגדול בבטן.',
    options: [
      { id: 'a', text: 'בשרירי השלד ובכבד', isCorrect: true },
      { id: 'b', text: 'במוח ובעצמות', isCorrect: false },
      { id: 'c', text: 'ברקמת השומן בלבד', isCorrect: false },
      { id: 'd', text: 'בקיבה ובמעיים', isCorrect: false }
    ],
    explanation: 'כ-300-400 גרם גליקוגן שמורים בשרירים לשימושם העצמי, ועוד כ-70-100 גרם בכבד לשמירה על רמת הסוכר בדם.'
  },
  {
    id: 'phys1_5',
    moduleId: 'phys1',
    topic: 'סף אנאירובי וצח"מ',
    title: 'השוואה בין שני אתלטים (עמ׳ 48)',
    diagramKey: 'energy',
    questionText: 'בהשוואה בין שני אתלטים בעלי VO2max זהה אך סף אנאירובי שונה:',
    hint: 'לשניהם מנוע באותו גודל, אבל לאחד מהם ה"נורית האדומה של החומציות" נדלקת רק במהירות גבוהה בהרבה.',
    options: [
      { id: 'a', text: 'לבעל הסף האנאירובי הגבוה יותר יתרון ברור בריצת מרתון ומאמצי סיבולת', isCorrect: true },
      { id: 'b', text: 'לבעל הסף האנאירובי הנמוך יתרון במרתון', isCorrect: false },
      { id: 'c', text: 'אין שום הבדל בביצועים ביניהם', isCorrect: false },
      { id: 'd', text: 'שניהם יתעייפו בדיוק באותה דקה', isCorrect: false }
    ],
    explanation: 'סף אנאירובי גבוה מאפשר להתחרות בקצב מהיר יותר לאורך זמן מבלי לצבור חומציות הגורמת לעייפות.'
  },
  {
    id: 'phys1_6',
    moduleId: 'phys1',
    topic: 'גליקוליזה ועייפות',
    title: 'השפעת חומציות על PFK (עמ׳ 48)',
    diagramKey: 'energy',
    questionText: 'עלייה בחומציות עקב הצטברות יוני מימן (H+) במאמץ עצים גורמת ל:',
    hint: 'אנזימים הם חלבונים עדינים: בסביבה חומצית הם משנים צורה ומפסיקים לעבוד, כמו מפתח שהתעקם בחור המנעול.',
    options: [
      { id: 'a', text: 'לירידה בפעילות האנזים המרכזי PFK ולירידה ביכולת הכיווץ', isCorrect: true },
      { id: 'b', text: 'לעלייה מואצת בפעילות PFK', isCorrect: false },
      { id: 'c', text: 'לחוסר שינוי בפעילות האנזים', isCorrect: false },
      { id: 'd', text: 'לייצור מוגבר של סידן', isCorrect: false }
    ],
    explanation: 'החומציות העולה (H+) מעכבת את אנזים ה-PFK (שלב 3 בגליקוליזה) ו"תוקעת" את חידוש ה-ATP, מה שמוביל לעייפות מהירה.'
  },
  {
    id: 'phys1_7',
    moduleId: 'phys1',
    topic: 'התאוששות',
    title: 'הורדת חומציות לאחר מאמץ (עמ׳ 49)',
    diagramKey: 'cori',
    questionText: 'מה הדרך היעילה ביותר להורדת החומציות בשריר לאחר מאמץ עצים?',
    hint: 'אם תשב במקום – זרם הדם יאט והחומצה תיתקע בשריר. אם תמשיך ללכת או לרוץ קל – המשאבה תמשיך לשטוף את השריר.',
    options: [
      { id: 'a', text: 'התאוששות אקטיבית קלה (ריצה קלה ב-35%-50% מצח"מ)', isCorrect: true },
      { id: 'b', text: 'ספרינט נוסף', isCorrect: false },
      { id: 'c', text: 'ישיבה פסיבית מוחלטת', isCorrect: false },
      { id: 'd', text: 'עמידה ללא תנועה', isCorrect: false }
    ],
    explanation: 'פעילות אירובית קלה שומרת על זרימת דם מוגברת שמפנה את יוני המימן והלקטט לשרירים הפחות פעילים ולכבד.'
  },
  {
    id: 'phys1_8',
    moduleId: 'phys1',
    topic: 'סף אנאירובי',
    title: 'הגדרת הסף האנאירובי (עמ׳ 49)',
    diagramKey: 'energy',
    questionText: 'מהי ההגדרה של הסף האנאירובי (OBLA)?',
    hint: 'חשוב על ברז שפותח מים (ייצור) מול פתח ניקוז בכיור (פינוי). כל עוד הניקוז עומד בקצב, הכיור לא עולה על גדותיו.',
    options: [
      { id: 'a', text: 'קצב הפעילות המרבי שבו קצב ייצור הלקטט שווה עדיין לקצב הפינוי שלו (איזון)', isCorrect: true },
      { id: 'b', text: 'קצב ייצור הלקטט נמוך בהרבה מקצב הפינוי', isCorrect: false },
      { id: 'c', text: 'מצב בו אין שימוש בגלוקוז כלל', isCorrect: false },
      { id: 'd', text: 'הרגע שבו נגמרים מאגרי השומן', isCorrect: false }
    ],
    explanation: 'בסף האנאירובי (כ-4 מילימול/ליטר) קצב הפינוי הוא מקסימלי אך עדיין שווה לייצור. מעבר לו – הלקטט והחומציות מצטברים בחדות.'
  },
  {
    id: 'phys1_9',
    moduleId: 'phys1',
    topic: 'זמני חידוש מאגרים',
    title: 'זמן מילוי ATP-CrP לאחר מאמץ (עמ׳ 46, 50)',
    diagramKey: 'energy',
    questionText: 'כמה זמן נדרש למילוי מלא של מאגרי ה-ATP וה-CrP בתום מאמץ מרבי של 10 שניות?',
    hint: 'זמן המנוחה בין סטים כבדים בחדר כושר כדי להרגיש רענן וכוח מלא לסט הבא.',
    options: [
      { id: 'a', text: 'כ-2 עד 4 דקות מנוחה (בנוכחות חמצן)', isCorrect: true },
      { id: 'b', text: '3 ימים תמימים', isCorrect: false },
      { id: 'c', text: 'שנייה אחת בלבד', isCorrect: false },
      { id: 'd', text: 'שעה שלמה', isCorrect: false }
    ],
    explanation: 'המיטוכונדריות צריכות 2-4 דקות של חמצן ומנוחה כדי לייצר ATP חדש שיטעין מחדש את מאגרי הקריאטין פוספט.'
  },
  {
    id: 'phys1_10',
    moduleId: 'phys1',
    topic: 'חילוף חומרים בסיסי',
    title: 'משתנים המשפיעים על BMR (עמ׳ 9, 14)',
    diagramKey: 'energy',
    questionText: 'אילו משתנים משפיעים ישירות על חילוף החומרים הבסיסי (BMR)?',
    hint: 'שריר צורך פי 4 יותר קלוריות משומן במנוחה, ואדם גדול ממדים מאבד יותר חום דרך העור לסביבה.',
    options: [
      { id: 'a', text: 'מסת שריר ואחוז שומן, גיל, מגדר, שטח פני הגוף והורמונים', isCorrect: true },
      { id: 'b', text: 'צבע העיניים בלבד', isCorrect: false },
      { id: 'c', text: 'סוג הנעליים שלובשים', isCorrect: false },
      { id: 'd', text: 'כמות השיער על הראש', isCorrect: false }
    ],
    explanation: 'BMR הוא סך האנרגיה לתחזוקת החיים במנוחה, והוא נקבע בעיקר ע״י מסת השריר, גיל, מגדר ואיבוד חום דרך שטח העור.'
  },

  // =========================================================================
  // מודול 4: פיזיולוגיה ב' - לב, כלי דם, נשימה, שרירים והורמונים
  // =========================================================================
  {
    id: 'phys2_1',
    moduleId: 'phys2',
    topic: 'מערכת הלב',
    title: 'מצב המסתמים בדיאסטולה (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים ומילויים) בלב:',
    hint: 'דמיין דלתות שנפתחות כדי שהאורחים (הדם) ייכנסו מהמרפסת (העלייה) לתוך הסלון (החדר), בזמן שהדלת לרחוב סגורה.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים בין החדרים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'המסתמים בין החדרים לעורקים פתוחים', isCorrect: false },
      { id: 'c', text: 'כל המסתמים בלב סגורים לחלוטין', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'בדיאסטולה החדרים נרפים ומתמלאים בדם מהעליות דרך המסתמים הפתוחים ביניהם, בעוד מסתמי היציאה לעורקים סגורים.'
  },
  {
    id: 'phys2_2',
    moduleId: 'phys2',
    topic: 'כלי דם ומחזורי הדם',
    title: 'הוורידים במחזורי הדם (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'מה נכון לגבי הוורידים במחזורי הדם של גוף האדם?',
    hint: 'זכור את הכלל: וריד תמיד נכנס ללב. מאיפה ורידי הריאה מגיעים? מהריאות שבהן הרגע נשמנו חמצן נקי!',
    options: [
      { id: 'a', text: 'במחזור הריאתי (הקטן) זורם בהם דם עשיר בחמצן, ובמחזור הגדול דם עני בחמצן', isCorrect: true },
      { id: 'b', text: 'בכל הוורידים בגוף תמיד זורם רק דם דל בחמצן', isCorrect: false },
      { id: 'c', text: 'ורידים מובילים דם מהלב אל הרקמות', isCorrect: false },
      { id: 'd', text: 'אין שסתומים בוורידים כלל', isCorrect: false }
    ],
    explanation: 'ההגדרה של וריד היא כיוון הזרימה (אל הלב): ורידי הריאה מחזירים דם מחומצן מהריאות לעלייה השמאלית, בעוד ורידי הגוף מחזירים דם ורידי.'
  },
  {
    id: 'phys2_3',
    moduleId: 'phys2',
    topic: 'דופק מרבי',
    title: 'דופק מרבי וכושר גופני (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'מה מבין הגורמים הבאים אינו משפיע על הדופק המרבי של אדם?',
    hint: 'הנוסחה היא 220 פחות הגיל. האם הנוסחה שואלת כמה קילומטרים אתה רץ בשבוע?',
    options: [
      { id: 'a', text: 'רמת הכושר הגופני (הדופק המרבי תלוי בגיל ובגנטיקה, ולא ברמת הכושר)', isCorrect: true },
      { id: 'b', text: 'גיל הנבדק', isCorrect: false },
      { id: 'c', text: 'גורמים גנטיים', isCorrect: false },
      { id: 'd', text: 'מערכת העצבים האוטונומית', isCorrect: false }
    ],
    explanation: 'אימון גופני משפר את יעילות הלב ונפח הפעימה ומוריד את דופק המנוחה, אך אינו משנה את הדופק המרבי שנקבע לפי גיל.'
  },
  {
    id: 'phys2_4',
    moduleId: 'phys2',
    topic: 'נפח פעימה',
    title: 'חוק סטרלינג ונפח פעימה (עמ׳ 61, 74)',
    diagramKey: 'heart',
    questionText: 'על פי חוק פרנק-סטרלינג, מה גורם ללב להתכווץ בעוצמה רבה יותר ולהגדיל את נפח הפעימה?',
    hint: 'דמיין גומייה: ככל שתמתח אותה יותר לאחור לפני השחרור, כך היא תזנק קדימה בעוצמה רבה יותר.',
    options: [
      { id: 'a', text: 'עלייה בהחזר הוורידי המותחת את דפנות החדר בשלב המילוי', isCorrect: true },
      { id: 'b', text: 'ירידה מוחלטת בלחץ הדם', isCorrect: false },
      { id: 'c', text: 'עצירת זרימת הדם בגוף', isCorrect: false },
      { id: 'd', text: 'נשימה איטית בלבד', isCorrect: false }
    ],
    explanation: 'ככל שיותר דם חוזר מהשרירים ללב (החזר ורידי), דפנות החדר נמתחות יותר בדיאסטולה והכיווץ בסיסטולה חזק יותר.'
  },
  {
    id: 'phys2_5',
    moduleId: 'phys2',
    topic: 'מערכת העצבים והשריר',
    title: 'כישור השריר Muscle Spindle (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'כישור השריר (Muscle Spindle):',
    hint: 'כשאתה מועד על אבן והקרסול מתעקם פתאום, איזה חיישן בשריר גורם לו להתכווץ בבהלה בשבריר שנייה כדי שלא תיפול?',
    options: [
      { id: 'a', text: 'הוא חלק מרפלקס המתיחה ומגיב למתיחה פתאומית של השריר בכיווץ מגן', isCorrect: true },
      { id: 'b', text: 'נמצא בגיד ומעכב כיווץ', isCorrect: false },
      { id: 'c', text: 'מייצר כדוריות דם אדומות', isCorrect: false },
      { id: 'd', text: 'מפרק שומנים במאמץ', isCorrect: false }
    ],
    explanation: 'כישור השריר מלופף סביב סיבי השריר, חש מתיחה פתאומית ומעביר מסר מהיר לחוט השדרה שמכווץ את השריר למניעת קרע.'
  },
  {
    id: 'phys2_6',
    moduleId: 'phys2',
    topic: 'מערכת העצבים והשריר',
    title: 'רפלקס אברון גולג׳י GTO (עמ׳ 90)',
    diagramKey: 'sarcomere',
    questionText: 'בהפעלת רפלקס אברון הגיד ע״ש גולג׳י (Golgi Tendon Organ):',
    hint: 'זהו מפסק הביטחון: אם המשקל כבד מדי ומאיים לתלוש את הגיד מהעצם, גולג\'י פוקד: "שחרר הכל ותרפה מיד!".',
    options: [
      { id: 'a', text: 'מתרחשת הרפיה רפלקסיבית של השריר בתגובה למתיחת-יתר או עומס קיצוני בגיד', isCorrect: true },
      { id: 'b', text: 'מתרחש כיווץ רפלקסיבי של השריר בתגובה למתיחה מהירה', isCorrect: false },
      { id: 'c', text: 'השריר נקרע באופן מיידי', isCorrect: false },
      { id: 'd', text: 'קצב הלב מוכפל', isCorrect: false }
    ],
    explanation: 'אברון גולג\'י בצומת גיד-שריר חש במתח מופרז ומעכב את הנוירון המוטורי כדי להרפות את השריר ולהצילו מתלישה.'
  },
  {
    id: 'phys2_7',
    moduleId: 'phys2',
    topic: 'סיבי שריר',
    title: 'מאפייני סיבים אדומים (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'סיבי השריר האדומים (Type I) מאופיינים ב:',
    hint: 'הם אדומים כי יש בהם המון חמצן, כלי דם ומיוגלובין – ממש כמו רצי מרתון שלא מתעייפים.',
    options: [
      { id: 'a', text: 'כמות גדולה של מיטוכונדריות, מיוגלובין, צפיפות נימים גבוהה וסבולת גבוהה', isCorrect: true },
      { id: 'b', text: 'מהירות כיווץ אדירה ועייפות תוך 5 שניות', isCorrect: false },
      { id: 'c', text: 'היעדר מוחלט של חמצן', isCorrect: false },
      { id: 'd', text: 'חתך רוחב ענק ביחס לסיבים הלבנים', isCorrect: false }
    ],
    explanation: 'הסיבים האדומים (איטיים) עשירים במיוגלובין ומיטוכונדריות ומסתמכים על חמצן, מה שמעניק להם עמידות יוצאת דופן לעייפות.'
  },
  {
    id: 'phys2_8',
    moduleId: 'phys2',
    topic: 'הסתגלות לאימון',
    title: 'היפרטרופיה מול היפרפלזיה (עמ׳ 90)',
    diagramKey: 'sarcomere',
    questionText: 'מה ההבדל בין היפרטרופיה (Hypertrophy) להיפרפלזיה (Hyperplasia) של רקמה?',
    hint: 'חשוב על חדר כושר: לא נולדים לנו סיבי שריר חדשים, אלא הסיבים הקיימים מתעבים ומתנפחים כמו בלון שמילאו בו עוד חלבון.',
    options: [
      { id: 'a', text: 'בהיפרטרופיה יש עלייה בגודל ונפח התאים הקיימים, ובהיפרפלזיה עלייה במספר התאים', isCorrect: true },
      { id: 'b', text: 'בהיפרטרופיה תאים מתחלקים ובהיפרפלזיה תאים נעלמים', isCorrect: false },
      { id: 'c', text: 'היפרטרופיה מתרחשת רק בשומן והיפרפלזיה רק בשריר', isCorrect: false },
      { id: 'd', text: 'אין כל הבדל בין המונחים', isCorrect: false }
    ],
    explanation: 'בשרירי אדם העלייה במסה מתרחשת באמצעות היפרטרופיה (גדילת נפח התאים עקב תוספת מיופיברילים), ולא על ידי התרבות תאים.'
  },
  {
    id: 'phys2_9',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'הרזרבה הנשימתית (עמ׳ 103)',
    diagramKey: 'heart',
    questionText: 'הרזרבה הנשימתית (הפער בין האוורור הרצוני המרבי MVV לבין האוורור המרבי במאמץ):',
    hint: 'גם כשאנחנו גמורים מספרינט בצח"מ, אם יבקשו מאיתנו לנשום בכוח מהר ועמוק למשך 10 שניות – הריאות מסוגלות להכניס עוד המון אוויר.',
    options: [
      { id: 'a', text: 'מוכיחה שמערכת הנשימה אינה הגורם המגביל אדם בריא במאמץ אירובי מרבי', isCorrect: true },
      { id: 'b', text: 'שווה לאפס בכל אדם', isCorrect: false },
      { id: 'c', text: 'מגבילה את הספורטאי מלהגיע לצח"מ', isCorrect: false },
      { id: 'd', text: 'קיימת רק אצל ילדים קטנים', isCorrect: false }
    ],
    explanation: 'קיבולת האוורור של הריאות (MVV) גבוהה ב-20%-30% מהאוורור המרבי במאמץ, ולכן משאבת הלב (ולא הריאות) היא הגורם המגביל בריא.'
  },
  {
    id: 'phys2_10',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'הורמון אנאבולי (עמ׳ 117)',
    diagramKey: 'cori',
    questionText: 'מי מבין ההורמונים הבאים הוא בעל אפקט אנאבולי (בונה מאגרים וחלבונים)?',
    hint: 'אחרי ארוחה טובה, ההורמון הזה מכניס את הסוכר וחומצות האמינו לבנייה ונעילה בתוך המחסנים.',
    options: [
      { id: 'a', text: 'אינסולין (מעודד כניסת גלוקוז, בניית גליקוגן, חלבונים ושומן)', isCorrect: true },
      { id: 'b', text: 'אדרנלין (הורמון קטבולי)', isCorrect: false },
      { id: 'c', text: 'קורטיזול (הורמון קטבולי)', isCorrect: false },
      { id: 'd', text: 'גלוקגון (הורמון קטבולי)', isCorrect: false }
    ],
    explanation: 'אינסולין הוא ההורמון האנאבולי המרכזי שדואג לאגירת מזון ובניית רקמות; אדרנלין, קורטיזול וגלוקגון הם הורמונים מפרקים (קטבוליים).'
  }
];
