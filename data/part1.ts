/* eslint-disable */
// @ts-nocheck

export const PART1_ANATOMY1 = [
  {
    id: 'a1_cell',
    moduleId: 'anat1',
    topic: 'ביולוגיה של התא',
    title: 'מיטוכונדריון בתא האנושי (עמ׳ 12)',
    diagram: 'cell',
    questionText: 'איזה אברון בתא מכונה "תחנת הכוח של התא" ובו מתבצע תהליך הנשימה התאית האירובית?',
    hint: 'האברון האדום המוארך בתרשים התא שמייצר את מרבית מולקולות ה-ATP בנוכחות חמצן.',
    options: [
      { id: 'a', text: 'מיטוכונדריון (Mitochondrion)', isCorrect: true },
      { id: 'b', text: 'גרעין התא', isCorrect: false },
      { id: 'c', text: 'ריבוזום', isCorrect: false },
      { id: 'd', text: 'מנגנון גולג׳י', isCorrect: false }
    ],
    explanation: 'עמ׳ 12: המיטוכונדריה היא אברון תוך-תאי המכיל את אנזימי מעגל קרבס ושרשרת הנשימה שבהם מופקת עיקר אנרגיית ה-ATP.'
  },
  {
    id: 'a1_membrane',
    moduleId: 'anat1',
    topic: 'ביולוגיה של התא',
    title: 'קרום התא (עמ׳ 10-11)',
    diagram: 'cell',
    questionText: 'קרום התא (Cell Membrane) מורכב בעיקר משכבה כפולה של:',
    hint: 'שכבת פוספוליפידים עם ראש הידרופילי וזנב הידרופובי המאפשרת חדירות בררנית.',
    options: [
      { id: 'a', text: 'פוספוליפידים וחלבונים משובצים', isCorrect: true },
      { id: 'b', text: 'סידן טהור בלבד', isCorrect: false },
      { id: 'c', text: 'קולגן מסוג 1 בלבד', isCorrect: false },
      { id: 'd', text: 'סחוס היאליני', isCorrect: false }
    ],
    explanation: 'עמ׳ 10: קרום התא בנוי משכבה כפולה של פוספוליפידים וחלבונים ומשמש מחסום בררני בין הסביבה התוך-תאית לחוץ-תאית.'
  },
  {
    id: 'a1_ribosome',
    moduleId: 'anat1',
    topic: 'ביולוגיה של התא',
    title: 'תפקיד הריבוזומים (עמ׳ 12)',
    diagram: 'cell',
    questionText: 'מהו התפקיד המרכזי של הריבוזומים בתא?',
    hint: 'הם מקבלים את פקודת ה-RNA מהגרעין ומרכיבים לפיה חומצות אמינו לשרשראות חלבון.',
    options: [
      { id: 'a', text: 'סינתזה (בנייה) של חלבונים', isCorrect: true },
      { id: 'b', text: 'פירוק שומנים לייצור חום', isCorrect: false },
      { id: 'c', text: 'אגירת גליקוגן בלבד', isCorrect: false },
      { id: 'd', text: 'ייצור תאי דם אדומים', isCorrect: false }
    ],
    explanation: 'עמ׳ 12: הריבוזומים אחראים על תרגום המידע הגנטי ובניית חלבונים הדרושים לתפקוד התא ולבניית השריר.'
  },
  {
    id: 'a1_1',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'מבנה הדיסק הבין-חולייתי (עמ׳ 35)',
    diagram: 'disc',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו בעיקר:',
    hint: 'Annulus בלטינית זה טבעת. דמיין מעטפת של צמיג קשיח שמחזיקה ג\'ל בפנים ובולמת זעזועים.',
    options: [
      { id: 'a', text: 'למנוע חיכוך ולבלום זעזועים (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'להזין ישירות את חוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 35: Annulus Fibrosus הוא טבעת סיבית קולגנית צפופה העוטפת את הגרעין הצמיגי ובולמת עומסים.'
  },
  {
    id: 'a1_2',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'תאי סחוס - Chondrocyte (עמ׳ 35)',
    diagram: 'chondrocyte',
    questionText: 'תא הסחוס (Chondrocyte):',
    hint: '"כונדרו" = סחוס, "ציט" = תא בוגר. מה התא מייצר ומפריש כדי לבנות את הרקמה?',
    options: [
      { id: 'a', text: 'מייצר קולגן ורכיבי חומר חוץ-תאי בסחוס', isCorrect: true },
      { id: 'b', text: 'נמצא ברקמת העצם הצפופה', isCorrect: false },
      { id: 'c', text: 'הוא חלק מהחומר האנאורגני של הסחוס', isCorrect: false },
      { id: 'd', text: 'נמצא ברקמת חיבור צפופה בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 35: הכונדרוציטים מייצרים ומפרישים ללא הרף את סיבי הקולגן והפרוטאוגליקנים למטריקס.'
  },
  {
    id: 'a1_3',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'הזנת סחוס היאליני (עמ׳ 35)',
    diagram: 'chondrocyte',
    questionText: 'בעניין הסחוס ההיאליני שבקצות העצמות, מי מבין המשפטים הבאים הוא הנכון:',
    hint: 'חשוב על ספוג: אין לו כלי דם משלו, הוא יונק נוזל מהסביבה הסינוביאלית בזמן תנועה ועומס.',
    options: [
      { id: 'a', text: 'מקבל חומרי מזון וחמצן בדיפוזיה מנוזל המפרק', isCorrect: true },
      { id: 'b', text: 'עשיר באספקת דם ישירה', isCorrect: false },
      { id: 'c', text: 'אלסטי מאוד הודות לאחוז גבוה של אלסטין', isCorrect: false },
      { id: 'd', text: 'נמצא בדיסק הבין חולייתי', isCorrect: false }
    ],
    explanation: 'עמ׳ 21, 35: הסחוס ההיאליני חסר כלי דם ישירים וניזון בדיפוזיה מתוך הנוזל הסינוביאלי בעת עומס ותנועה.'
  },
  {
    id: 'a1_4',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'מבנה העצם הצפופה (עמ׳ 35)',
    diagram: 'osteon',
    questionText: 'מה מייחד את העצם הצפופה (Compact Bone)?',
    hint: 'דמיין גזע עץ שנחתך לרוחב: טבעות עגולות זו בתוך זו סביב תעלה מרכזית.',
    options: [
      { id: 'a', text: 'מורכבת מיחידות המסודרות בצורה קונצנטרית (מערכות הוורס - Osteons)', isCorrect: true },
      { id: 'b', text: 'חסרת אספקה דמית לחלוטין', isCorrect: false },
      { id: 'c', text: 'נמצאת בעיקר בחלקן הפנימי של האפיפיזות', isCorrect: false },
      { id: 'd', text: 'מורכבת מטרבקולות ספוגיות בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 28, 35: העצם הצפופה בנויה מאוסטאונים – גלילים של גבישי סידן וקולגן סביב תעלת דם ועצבים.'
  },
  {
    id: 'a1_5',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'רקמת חיבור רפה (עמ׳ 35)',
    diagram: 'disc',
    questionText: 'Loose connective tissue (רקמת חיבור אמיתית רפה/אוורירית) נמצאת:',
    hint: 'הריפוד הביולוגי שמאגד את סיבי השריר מבלי ליצור חבל נוקשה כמו גיד.',
    options: [
      { id: 'a', text: 'בין סיבי השריר וסביב כלי דם ועצבים', isCorrect: true },
      { id: 'b', text: 'בשכבה הפנימית של כלי הדם', isCorrect: false },
      { id: 'c', text: 'בגיד אכילס', isCorrect: false },
      { id: 'd', text: 'בסחוס האף', isCorrect: false }
    ],
    explanation: 'עמ׳ 17, 35: רקמת חיבור רפה מאגדת את צרורות סיבי השריר ומאפשרת מעבר חופשי של כלי דם ועצבים.'
  },
  {
    id: 'a1_6',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'המים שברקמת הסחוס (עמ׳ 36)',
    diagram: 'chondrocyte',
    questionText: 'המים שברקמת הסחוס:',
    hint: 'מים אינם נדחסים. כשקושרים אותם חזק למולקולות סוכריות גדולות, מקבלים כרית נוקשת שבולמת עומס.',
    options: [
      { id: 'a', text: 'קשורים אל הפרוטאוגליקנים ויוצרים עמידות לדחיסה', isCorrect: true },
      { id: 'b', text: 'נאגרים בצורה חופשית ללא קשר כימי', isCorrect: false },
      { id: 'c', text: 'נמצאים אך ורק בתוך גרעין התא', isCorrect: false },
      { id: 'd', text: 'מתאדים לחלוטין בזמן מאמץ גופני', isCorrect: false }
    ],
    explanation: 'עמ׳ 22, 36: כ-60%-80% מהסחוס ההיאליני הם מים הקשורים כימית לפרוטאוגליקנים, דבר המעניק לו יכולת עמידה בדחיסה.'
  },
  {
    id: 'a1_7',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'קולגן מסוג 1 (עמ׳ 36)',
    diagram: 'disc',
    questionText: 'קולגן מסוג 1 (Type 1 Collagen) מספק את התכונה העיקרית הבאה:',
    hint: 'חשוב על כבל פלדה של מעלית: הוא חייב להחזיק משקל עצום במשיכה מבלי להתארך.',
    options: [
      { id: 'a', text: 'עומד בכוחות מתיחה גדולים וכמעט ואינו נמתח', isCorrect: true },
      { id: 'b', text: 'אלסטיות גבוהה מאוד כמו גומייה', isCorrect: false },
      { id: 'c', text: 'רכות ונזילות', isCorrect: false },
      { id: 'd', text: 'יכולת כיווץ אקטיבית', isCorrect: false }
    ],
    explanation: 'עמ׳ 17, 36: קולגן סוג 1 מרכיב גידים, רצועות ועצמות ומספק חוזק מכני אדיר כנגד מתיחה.'
  },
  {
    id: 'a1_8',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'נקב בזיזים רוחביים (עמ׳ 65)',
    diagram: 'cervical',
    questionText: 'נקב בזיזים הרוחביים (Transverse Foramen) מאפיין את חוליות:',
    hint: 'באיזה אזור בעמוד השדרה עורקי הדם צריכים מנהרה מוגנת בתוך העצם בדרכם למוח?',
    options: [
      { id: 'a', text: 'הצוואר (Cervical vertebrae)', isCorrect: true },
      { id: 'b', text: 'החזה (Thoracic)', isCorrect: false },
      { id: 'c', text: 'המותניים (Lumbar)', isCorrect: false },
      { id: 'd', text: 'הסקרום', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 65: נקב בזיז הרוחבי קיים רק בשבע חוליות הצוואר (C1-C7) ומגן על עורק הצוואר המוביל דם למוח.'
  },
  {
    id: 'a1_9',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'תפקיד הזיז הרוחבי (עמ׳ 65)',
    diagram: 'cervical',
    questionText: 'תפקידו העיקרי של הזיז הרוחבי (Transverse Process) בחוליה הוא:',
    hint: 'כשקושרים חבל למוט ארוך שבולט הצידה – המנוף להזזת המשקל גדול וחזק בהרבה.',
    options: [
      { id: 'a', text: 'לשמש מנוף ואחז לשרירים ורצועות המניעים ומייצבים את החוליה', isCorrect: true },
      { id: 'b', text: 'לשאת ישירות את כל משקל הגוף', isCorrect: false },
      { id: 'c', text: 'להגן על כיס המרה', isCorrect: false },
      { id: 'd', text: 'לייצר תאי דם לבנים', isCorrect: false }
    ],
    explanation: 'עמ׳ 53, 65: גוף החוליה נושא את המשקל, ואילו הזיזים הבולטים לצדדים משמשים כמנופים לשרירים המניעים ומייצבים.'
  },
  {
    id: 'a1_10',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'חוליה C1 אטלס (עמ׳ 65)',
    diagram: 'atlas_axis',
    questionText: 'חוליה C1 (Atlas) יוצאת דופן מכל שאר החוליות כי:',
    hint: 'אטלס נושא את כדור הארץ. החוליה הזו היא טבעת רחבה שמחזיקה ישירות את הראש, ואין בה גוף חוליה רגיל.',
    options: [
      { id: 'a', text: 'אין לה גוף חוליה והיא נושאת את הגולגולת (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'היא החוליה הגדולה והכבדה ביותר בשלד', isCorrect: false },
      { id: 'c', text: 'היא מחוברת ישירות לצלע הראשונה', isCorrect: false },
      { id: 'd', text: 'אין לה תעלה עבור חוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 65: חוליית האטלס (C1) היא טבעת גרמית ללא גוף חוליה מרכזי, הבנויה לשאת את הגולגולת.'
  },
  {
    id: 'a1_11',
    moduleId: 'anat1',
    topic: 'מפרקים',
    title: 'מפרק Atlantoaxial C1-C2 (עמ׳ 66)',
    diagram: 'atlas_axis',
    questionText: 'ה-Atlantoaxial joint מאפשר את התנועה העיקרית הבאה:',
    hint: 'חוליה C2 נקראת Axis (ציר) וממנה בולטת שן שעליה C1 מסתובבת כמו גלגל על ציר.',
    options: [
      { id: 'a', text: 'רוטציה (סיבוב ראש ימינה ושמאלה)', isCorrect: true },
      { id: 'b', text: 'כפיפה ופשיטה בלבד', isCorrect: false },
      { id: 'c', text: 'כפיפה צידית בלבד', isCorrect: false },
      { id: 'd', text: 'הרחקה וקירוב', isCorrect: false }
    ],
    explanation: 'עמ׳ 56, 66: השן של אקסיס (Dens) משמשת כציר סביבו חוליית אטלס מסתובבת ומספקת כ-50% מכלל תנועת הסיבוב של הראש.'
  },
  {
    id: 'a1_12',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'עקומות עמוד השדרה (עמ׳ 50, 65)',
    diagram: 'spine_curves',
    questionText: 'כמה חוליות יש בכל עקומה בעמוד השדרה של אדם בוגר?',
    hint: 'זכור: 7 בצוואר, 12 בחזה, 5 במותניים, 5 בסקרום, 4 בזנב.',
    options: [
      { id: 'a', text: '7 צוואריות, 12 חזיות, 5 מותניות, 5 בסקרום, 4 בקוקסיקס', isCorrect: true },
      { id: 'b', text: '12 צוואריות, 7 חזיות, 5 מותניות', isCorrect: false },
      { id: 'c', text: '5 צוואריות, 10 חזיות, 10 מותניות', isCorrect: false },
      { id: 'd', text: '33 חוליות מותניות בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 50: סה״כ 33 חוליות: 7 צוואריות (לורדוזה), 12 חזיות (קיפוזה), 5 מותניות (לורדוזה), 5 סקרליות ו-4 בקוקסיקס.'
  },
  {
    id: 'a1_13',
    moduleId: 'anat1',
    topic: 'שלד בית החזה',
    title: 'חלקי עצם החזה Sternum (עמ׳ 63, 65)',
    diagram: 'sternum',
    questionText: 'עצם החזה (Sternum) מורכבת מ-3 חלקים עיקריים מלמעלה למטה:',
    hint: 'דמיין חרב: למעלה הידית הרחבה, באמצע הלהב הארוך, ולמטה השפיץ החד.',
    options: [
      { id: 'a', text: 'Manubrium (ידית), Body (גוף), Xiphoid process (סיף)', isCorrect: true },
      { id: 'b', text: 'אטלס, אקסיס וסקרום', isCorrect: false },
      { id: 'c', text: 'איליום, איסכיום ופיוביס', isCorrect: false },
      { id: 'd', text: 'אפיפיזה, דיאפיזה ומטפיזה', isCorrect: false }
    ],
    explanation: 'עמ׳ 63: עצם הסטרנום בנויה מידית (מנובריום), גוף העצם, וזיז החרב התחתון (קספואיד).'
  },
  {
    id: 'a1_14',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'משטחים מפרקיים של חוליות המותניים (עמ׳ 58, 65)',
    diagram: 'spine_curves',
    questionText: 'המשטחים המפרקיים (Facet Joints) של חוליות המותניים נמצאים בעיקר במישור:',
    hint: 'בגב התחתון קל להתכופף קדימה וליישר אחורה, אך קשה ומסוכן להסתובב. איזה מישור מאפשר כפיפה ופשיטה?',
    options: [
      { id: 'a', text: 'הסגיטלי (מאפשר כפיפה ופשיטה, ומגביל רוטציה)', isCorrect: true },
      { id: 'b', text: 'הפרונטלי (מאפשר רק הרחקה)', isCorrect: false },
      { id: 'c', text: 'האופקי בלבד', isCorrect: false },
      { id: 'd', text: 'אין מפרקים בין חוליות המותניים', isCorrect: false }
    ],
    explanation: 'עמ׳ 58, 62: המשטחים במותניים מונחים במישור הסגיטלי, מה שמאפשר כפיפה ופשיטה יעילות אך נועל ומגן על הגב מרוטציה מזיקה.'
  },
  {
    id: 'a1_15',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'מפרקי חוליות L3 ו-L2 (עמ׳ 65)',
    diagram: 'spine_curves',
    questionText: 'המשטחים המפרקיים העליונים של חוליה L3 יוצרים מפרק סינוביאלי עם המשטחים המפרקיים:',
    hint: 'החלק העליון של קובייה מתחבר לחלק התחתון של הקובייה שמעליה.',
    options: [
      { id: 'a', text: 'התחתונים של חוליה L2', isCorrect: true },
      { id: 'b', text: 'העליונים של חוליה L4', isCorrect: false },
      { id: 'c', text: 'התחתונים של חוליה L4', isCorrect: false },
      { id: 'd', text: 'הצלעות הצפות', isCorrect: false }
    ],
    explanation: 'משטחים עליונים של חוליה יוצרים מפרקים עם המשטחים התחתונים של החוליה הנמצאת מעליה.'
  },
  {
    id: 'a1_16',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'סיום חוט השדרה (עמ׳ 61)',
    diagram: 'spine_curves',
    questionText: 'באיזה גובה של עמוד השדרה מסתיים חוט השדרה (Spinal Cord) אצל אדם בוגר?',
    hint: 'חוט השדרה מפסיק להיות כבל אחד עבה מיד מתחת לקו הצלעות האחרונות.',
    options: [
      { id: 'a', text: 'בגובה חוליות המותניים L1-L2 (ומשם ממשיך כ"זנב סוס")', isCorrect: true },
      { id: 'b', text: 'בקצה עצם הזנב (Coccyx)', isCorrect: false },
      { id: 'c', text: 'בגובה הצוואר C3 בלבד', isCorrect: false },
      { id: 'd', text: 'בגובה חוליה T6', isCorrect: false }
    ],
    explanation: 'עמ׳ 61: חוט השדרה מסתיים בגובה L1-L2; מתחת לגובה זה העצבים יורדים כחוטים נפרדים (Cauda Equina).'
  },
  {
    id: 'a1_17',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'תאי אוסטאובלסטים מול אוסטאוקלסטים (עמ׳ 27, 34)',
    diagram: 'cells',
    questionText: 'מה תפקידם של האוסטאובלסטים (Osteoblasts) לעומת האוסטאוקלסטים (Osteoclasts)?',
    hint: 'התבונן בתרשים: תא ירוק בונה (Build), תא אדום מפרק (Clear/Clash).',
    options: [
      { id: 'a', text: 'אוסטאובלסטים בונים ומפרישים חומר עצם, אוסטאוקלסטים מפרקים עצם בלויה', isCorrect: true },
      { id: 'b', text: 'אוסטאוקלסטים בונים עצם, אוסטאובלסטים מייצרים שומן', isCorrect: false },
      { id: 'c', text: 'שניהם מפרקים גידים ורצועות', isCorrect: false },
      { id: 'd', text: 'הם תאי עצב בחוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 27, 36: אוסטאובלסטים מייצרים ומפרישים מטריקס עצם חדש, ואוסטאוקלסטים מפרקים עצם ישנה לצורך התחדשות.'
  },
  {
    id: 'a1_18',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'עצם ססמואידית (עמ׳ 27, 34)',
    diagram: 'knee',
    questionText: 'איזו עצם בגופנו היא הדוגמה המובהקת ביותר לעצם ססמואידית (השזורה בתוך גיד)?',
    hint: 'העצם המגנה על הברך ומגדילה את מנוף הארבע-ראשי.',
    options: [
      { id: 'a', text: 'הפיקה (Patella) בתוך גיד הארבע-ראשי', isCorrect: true },
      { id: 'b', text: 'עצם הזרוע (Humerus)', isCorrect: false },
      { id: 'c', text: 'עצם הירך (Femur)', isCorrect: false },
      { id: 'd', text: 'עצם הבריח (Clavicle)', isCorrect: false }
    ],
    explanation: 'עמ׳ 27, 36: עצם ססמואידית נמצאת בתוך גיד; הפיקה (Patella) בגיד הארבע-ראשי משפרת את מנוף הכוח בפשיטת ברך.'
  },
  {
    id: 'a1_19',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'לוחית האפיפיזה (עמ׳ 30, 34)',
    diagram: 'spine_curves',
    questionText: 'לוחית האפיפיזה (Epiphyseal Plate) בעצם ארוכה מורכבת מ:',
    hint: 'מאיזה סחוס עשויה לוחית הצמיחה לגובה אצל ילדים ומתבגרים?',
    options: [
      { id: 'a', text: 'סחוס היאליני המתרבה ומאפשר את צמיחת העצם לאורך', isCorrect: true },
      { id: 'b', text: 'עצם צפופה וקשיחה בלבד ללא סחוס', isCorrect: false },
      { id: 'c', text: 'רקמת שומן צהובה', isCorrect: false },
      { id: 'd', text: 'סיבי אלסטין גמישים בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 30, 36: לוחית האפיפיזה בנויה מסחוס היאליני המתרבה ומתגרם לעצם עד לסיום הגדילה לגובה.'
  },
  {
    id: 'a1_20',
    moduleId: 'anat1',
    topic: 'מישורי התנועה',
    title: 'המישור הסגיטלי Sagittal Plane (עמ׳ 44, 127)',
    diagram: 'planes',
    questionText: 'המישור החיצי (Sagittal Plane) מחלק את גוף האדם ל:',
    hint: 'התבונן בתרשים המישורים: איזה חלקים נוצרים מהמישור הסגיטלי?',
    options: [
      { id: 'a', text: 'חלק ימני וחלק שמאלי (בו מתבצעות תנועות כפיפה ופשיטה)', isCorrect: true },
      { id: 'b', text: 'חלק עליון וחלק תחתון', isCorrect: false },
      { id: 'c', text: 'חלק קדמי וחלק אחורי', isCorrect: false },
      { id: 'd', text: 'שכבה שטחית ושכבה עמוקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 44, 127: המישור הסגיטלי חוצה את הגוף לימין ושמאל, ובו מתרחשות כפיפה (Flexion) ופשיטה (Extension).'
  },
  {
    id: 'a1_21',
    moduleId: 'anat1',
    topic: 'מישורי התנועה',
    title: 'המישור הרוחבי Transverse Plane (עמ׳ 44, 127)',
    diagram: 'planes',
    questionText: 'המישור הרוחבי (Transverse Plane) מחלק את הגוף ל:',
    hint: 'התבונן בתרשים המישורים: כמו חגורה שמחלקת את הגוף.',
    options: [
      { id: 'a', text: 'חלק עליון (Superior) וחלק תחתון (Inferior)', isCorrect: true },
      { id: 'b', text: 'חלק ימני וחלק שמאלי', isCorrect: false },
      { id: 'c', text: 'חלק קדמי וחלק אחורי', isCorrect: false },
      { id: 'd', text: 'שני חצאים זהים לחלוטין', isCorrect: false }
    ],
    explanation: 'עמ׳ 44, 127: המישור הרוחבי מקביל לאופק ומחלק לעליון ותחתון; במישור זה מתבצעות תנועות רוטציה.'
  },
  {
    id: 'a1_22',
    moduleId: 'anat1',
    topic: 'מישורי התנועה',
    title: 'המישור הפרונטלי Frontal Plane (עמ׳ 44)',
    diagram: 'planes',
    questionText: 'במישור החזיתי (Frontal Plane) מתבצעות בעיקר התנועות הבאות:',
    hint: 'תנועות פריסה הצידה והתקרבות למרכז הגוף (הרחקה וקירוב).',
    options: [
      { id: 'a', text: 'הרחקה (Abduction) וקירוב (Adduction), וכפיפה צידית', isCorrect: true },
      { id: 'b', text: 'כפיפה ופשיטה בלבד', isCorrect: false },
      { id: 'c', text: 'רוטציה ימינה ושמאלה בלבד', isCorrect: false },
      { id: 'd', text: 'אין תנועה במישור זה', isCorrect: false }
    ],
    explanation: 'במישור הפרונטלי (המחלק את הגוף לקדמי ואחורי) מתבצעות תנועות הרחקה וקירוב וכפיפה צידית של עמוד השדרה.'
  },
  {
    id: 'a1_23',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'הגדרת רצועה Ligament',
    diagram: 'ligament_tendon',
    questionText: 'מהו תפקידה המרכזי של רצועה (Ligament)?',
    hint: 'התבונן בתרשים: מה מחובר בצד הכחול? עצם לעצם!',
    options: [
      { id: 'a', text: 'לחבר עצם לעצם, לשמור על יציבות המפרק ולהגביל עודף תנועה', isCorrect: true },
      { id: 'b', text: 'לחבר שריר לעצם ולהעביר את כוח הכיווץ', isCorrect: false },
      { id: 'c', text: 'לייצר נוזל סינוביאלי לחלל המפרק', isCorrect: false },
      { id: 'd', text: 'לספוג סוכר מזרם הדם', isCorrect: false }
    ],
    explanation: 'רצועה מחברת עצם לעצם ומספקת יציבות פסיבית ע״י הגבלת טווח תנועה עודף במפרק.'
  },
  {
    id: 'a1_24',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'הגדרת גיד Tendon',
    diagram: 'ligament_tendon',
    questionText: 'מהו תפקידו המרכזי של גיד (Tendon)?',
    hint: 'התבונן בתרשים: מה מחובר בצד הכתום? שריר לעצם!',
    options: [
      { id: 'a', text: 'לחבר שריר לעצם ולהעביר את כוח כיווץ השריר אל השלד', isCorrect: true },
      { id: 'b', text: 'לחבר עצם לעצם במפרק סינוביאלי', isCorrect: false },
      { id: 'c', text: 'לבלום זעזועים כמו מניסקוס', isCorrect: false },
      { id: 'd', text: 'לייצר סידן בעצמות', isCorrect: false }
    ],
    explanation: 'גיד הוא המשכה הישיר של מעטפת השריר ומעביר את כוח הכיווץ לעצם לצורך יצירת תנועה.'
  },
  {
    id: 'a1_25',
    moduleId: 'anat1',
    topic: 'שלד בית החזה',
    title: 'חלוקת הצלעות בכלוב בית החזה (עמ׳ 63)',
    diagram: 'sternum',
    questionText: '12 זוגות הצלעות באדם מחולקות לשלוש קבוצות עיקריות:',
    hint: '7 אמיתיות (ישירות לסטרנום), 3 מדומות (לסחוס צלע 7), ו-2 צפות (חופשיות).',
    options: [
      { id: 'a', text: 'צלעות 1-7 אמיתיות, 8-10 מדומות, 11-12 צפות', isCorrect: true },
      { id: 'b', text: 'צלעות 1-10 אמיתיות ו-2 צפות', isCorrect: false },
      { id: 'c', text: 'כל 12 הצלעות מחוברות ישירות לסטרנום', isCorrect: false },
      { id: 'd', text: 'צלעות 1-5 אמיתיות וכל השאר צפות', isCorrect: false }
    ],
    explanation: 'עמ׳ 63: צלעות 1-7 מחוברות ישירות בעצמן לסטרנום, 8-10 מתחברות לסחוס הצלע שמעליהן, וצלעות 11-12 צפות מאחור.'
  },
  {
    id: 'a1_26',
    moduleId: 'anat1',
    topic: 'סוגי מפרקים',
    title: 'מפרק סינוביאלי (עמ׳ 38-40)',
    diagram: 'knee',
    questionText: 'מה מאפיין מפרק סינוביאלי (Diarthrosis)?',
    hint: 'חלל מפרק עם קפסולה ונוזל סיכה המאפשר טווח תנועה חופשי ורחב.',
    options: [
      { id: 'a', text: 'קפסולה מפרקית, חלל מפרק המכיל נוזל סינוביאלי ותנועה חופשית', isCorrect: true },
      { id: 'b', text: 'חיבור גרמי ללא שום תנועה כלל', isCorrect: false },
      { id: 'c', text: 'היעדר סחוס מפרקי בקצות העצמות', isCorrect: false },
      { id: 'd', text: 'הוא קיים אך ורק בין עצמות הגולגולת', isCorrect: false }
    ],
    explanation: 'עמ׳ 38: מפרק סינוביאלי הוא המפרק הנפוץ ביותר בגפיים, עטוף בקופסית ומאפשר תנועה רחבה וחופשית ללא חיכוך.'
  },
  {
    id: 'a1_27',
    moduleId: 'anat1',
    topic: 'סוגי מפרקים',
    title: 'מפרק כדורי Ball and Socket (עמ׳ 41)',
    diagram: 'deltoid',
    questionText: 'אילו מפרקים בגוף שייכים לסוג "מפרק כדורי ומכתש" (Ball and Socket) בעל מספר דרגות החופש הגבוה ביותר?',
    hint: 'המפרקים שמאפשרים תנועה מעגלית של 360 מעלות בכתף ובירך.',
    options: [
      { id: 'a', text: 'מפרק הכתף (Glenohumeral) ומפרק הירך (Acetabulofemoral)', isCorrect: true },
      { id: 'b', text: 'מפרק המרפק והברך בלבד', isCorrect: false },
      { id: 'c', text: 'מפרקי האצבעות בלבד', isCorrect: false },
      { id: 'd', text: 'מפרקי החוליות בגב התחתון בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 41: מפרק כדורי (כתף וירך) הוא תלת-צירי ומאפשר כפיפה, פשיטה, הרחקה, קירוב ורוטציה חופשית.'
  },
  {
    id: 'a1_28',
    moduleId: 'anat1',
    topic: 'סוגי סחוס',
    title: 'סחוס סיבי פיברוטי (עמ׳ 21)',
    diagram: 'disc',
    questionText: 'איזה סוג סחוס עשיר בסיבי קולגן צפופים, עומד בכוחות גזירה ודחיסה ונמצא במניסקוסים ובדיסקים?',
    hint: 'הסחוס הסיבי הקשוח ביותר בגוף (Fibrocartilage).',
    options: [
      { id: 'a', text: 'סחוס סיבי (Fibrocartilage)', isCorrect: true },
      { id: 'b', text: 'סחוס היאליני זגוגי בלבד', isCorrect: false },
      { id: 'c', text: 'סחוס אלסטי של תנוך האוזן בלבד', isCorrect: false },
      { id: 'd', text: 'רקמת שומן חוץ-תאית', isCorrect: false }
    ],
    explanation: 'עמ׳ 21: סחוס סיבי (Fibrocartilage) מכיל שפע סיבי קולגן עבים ועמידים ביותר, ונמצא בדיסקים הבין-חולייתיים ובמיניסקוסים של הברך.'
  },
  {
    id: 'a1_29',
    moduleId: 'anat1',
    topic: 'עצם ספוגית',
    title: 'עצם ספוגית וטרבקולות (עמ׳ 28)',
    diagram: 'osteon',
    questionText: 'בניגוד לעצם הצפופה, העצם הספוגית (Spongy/Cancellous Bone):',
    hint: 'בנויה מקוריות עצם סריגיות (Trabeculae) המותאמות לקווי העומס, ומכילה מח עצם אדום.',
    options: [
      { id: 'a', text: 'בנויה מקוריות וקוריות (Trabeculae) המקטינות את משקל השלד ומכילות מח עצם', isCorrect: true },
      { id: 'b', text: 'אינה מכילה סידן כלל ורכה כמו עור', isCorrect: false },
      { id: 'c', text: 'נמצאת אך ורק בשכבה החיצונית ביותר של הדיאפיזה', isCorrect: false },
      { id: 'd', text: 'חסרת גמישות לחלוטין', isCorrect: false }
    ],
    explanation: 'עמ׳ 28: העצם הספוגית ממוקמת בעיקר בקצוות (אפיפיזות), בנויה מקוריות סריגיות המעניקות חוזק מבני במשקל קל ומאכלסות מח עצם אדום.'
  },
  {
    id: 'a1_30',
    moduleId: 'anat1',
    topic: 'מפרקי שלד',
    title: 'מפרק סיבי / תפרים (עמ׳ 37)',
    diagram: 'disc',
    questionText: 'תפרי הגולגולת (Sutures) הם דוגמה למפרק מסוג:',
    hint: 'מפרק ללא חלל מפרק, המחובר בסיבי קולגן הדוקים ואינו מאפשר תנועה (Synarthrosis).',
    options: [
      { id: 'a', text: 'מפרק סיבי ללא תנועה (Synarthrosis)', isCorrect: true },
      { id: 'b', text: 'מפרק סינוביאלי בעל תנועה מלאה', isCorrect: false },
      { id: 'c', text: 'מפרק כדורי ומכתש', isCorrect: false },
      { id: 'd', text: 'מפרק ציר כמו הברך', isCorrect: false }
    ],
    explanation: 'עמ׳ 37: מפרקים סיביים מחברים עצמות ברקמת חיבור צפופה ללא תנועה כלל, במטרה להגן על איברים רגישים כמו המוח.'
  },
  {
    id: 'a1_31',
    moduleId: 'anat1',
    topic: 'שלד האגן',
    title: 'מפרק ה-Sacroiliac SIJ (עמ׳ 64)',
    diagram: 'spine_curves',
    questionText: 'מפרק ה-Sacroiliac (SI Joint) מחבר בין:',
    hint: 'החיבור בין המשולש התחתון של עמוד השדרה (סקרום) לכנף האגן (איליום).',
    options: [
      { id: 'a', text: 'עצם העצה (Sacrum) ועצם הכסל (Ilium) של האגן', isCorrect: true },
      { id: 'b', text: 'עצם הירך ועצם השוקה', isCorrect: false },
      { id: 'c', text: 'עצם החזה לצלעות', isCorrect: false },
      { id: 'd', text: 'עצם הבריח לשכמה', isCorrect: false }
    ],
    explanation: 'מפרק ה-SI מעביר את משקל כל פלג הגוף העליון מעמוד השדרה אל חגורת האגן והגפיים התחתונות.'
  },
  {
    id: 'a1_32',
    moduleId: 'anat1',
    topic: 'שלד הגולגולת',
    title: 'נקב ה-Foramen Magnum (עמ׳ 48)',
    diagram: 'cervical',
    questionText: 'הפתח הגדול בבסיס הגולגולת (Foramen Magnum) משמש מעבר עבור:',
    hint: 'מאיפה יוצא חוט השדרה מהמוח לעבר עמוד השדרה?',
    options: [
      { id: 'a', text: 'גזע המוח והמשכו כחוט השדרה', isCorrect: true },
      { id: 'b', text: 'עצב הראייה בלבד', isCorrect: false },
      { id: 'c', text: 'שריר הלסת הראשי', isCorrect: false },
      { id: 'd', text: 'קנה הנשימה', isCorrect: false }
    ],
    explanation: 'ה-Foramen Magnum הוא הנקב הגדול בעצם האוקסיפיטלית דרכו גזע המוח מתחבר לחוט השדרה.'
  },
  {
    id: 'a1_33',
    moduleId: 'anat1',
    topic: 'עצמות הגפה העליונה',
    title: 'האנטומיה של עצם הבריח Clavicle (עמ׳ 69)',
    diagram: 'deltoid',
    questionText: 'עצם הבריח (Clavicle) מהווה את החיבור הגרמי היחיד בין:',
    hint: 'איך היד וכל חגורת הכתף מחוברות פיזית לעצמות בית החזה (שלד הציר)?',
    options: [
      { id: 'a', text: 'חגורת הכתף (השכמה) אל שלד בית החזה (עצם הסטרנום במפרק SC)', isCorrect: true },
      { id: 'b', text: 'עצם הזרוע לעצם הירך', isCorrect: false },
      { id: 'c', text: 'עמוד השדרה המותני לצלעות', isCorrect: false },
      { id: 'd', text: 'הגולגולת לחוליה הראשונה', isCorrect: false }
    ],
    explanation: 'עמ׳ 69: עצם הבריח מחברת במפרק ה-Sternoclavicular (SC) את כל חגורת הגפה העליונה לשלד המרכזי.'
  },
  {
    id: 'a1_34',
    moduleId: 'anat1',
    topic: 'שלד הגפה התחתונה',
    title: 'מבנה האצטבולום Acetabulum (עמ׳ 104)',
    diagram: 'knee',
    questionText: 'האצטבולום (Acetabulum), שקע המפרק של הירך, נוצר מחיבור של שלוש העצמות:',
    hint: 'שלוש העצמות שמתאחות בבגרות לעצם האגן: כסל, שת וחיק.',
    options: [
      { id: 'a', text: 'Ilium, Ischium, Pubis', isCorrect: true },
      { id: 'b', text: 'Femur, Patella, Tibia', isCorrect: false },
      { id: 'c', text: 'Sacrum, Coccyx, Lumbar', isCorrect: false },
      { id: 'd', text: 'Atlas, Axis, C3', isCorrect: false }
    ],
    explanation: 'עמ׳ 104: השקע המפרקי העמוק באגן (אצטבולום) נוצר מנקודת המפגש של עצמות האיליום, האיסכיום והפיוביס.'
  },
  {
    id: 'a1_35',
    moduleId: 'anat1',
    topic: 'מפרק הברך',
    title: 'רצועות צולבות ACL ו-PCL (עמ׳ 106)',
    diagram: 'knee',
    questionText: 'מהו התפקיד הביומכני העיקרי של הרצועה הצולבת הקדמית (ACL) בברך?',
    hint: 'היא מונעת מעצם השוק (Tibia) להחליק קדימה ביחס לעצם הירך.',
    options: [
      { id: 'a', text: 'מניעת תזוזה קדמית של הטיביה ביחס לפמור וייצוב סיבובי', isCorrect: true },
      { id: 'b', text: 'מניעת תזוזה אחורית של הטיביה (תפקיד ה-PCL)', isCorrect: false },
      { id: 'c', text: 'חיבור הפיקה לשריר התאומים', isCorrect: false },
      { id: 'd', text: 'ייצור נוזל סינוביאלי למפרק', isCorrect: false }
    ],
    explanation: 'עמ׳ 106: ה-ACL (הרצועה הצולבת הקדמית) בולמת תנועה קדמית של השוק ביחס לירך ומייצבת את הברך בנחיתות ושינויי כיוון.'
  }
];
