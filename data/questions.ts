/* eslint-disable */
// @ts-nocheck
import { DIAGRAMS_LIBRARY } from './diagrams';

export { DIAGRAMS_LIBRARY };

export const ALL_WINGATE_QUESTIONS = [
  // =========================================================================
  // חלק 1: אנטומיה א' - רקמות, שלד, עמוד שדרה ומפרקים (שאלות 1-25)
  // =========================================================================
  {
    id: 'a1_1',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'מבנה הדיסק הבין-חולייתי (עמ׳ 35)',
    diagramKey: 'disc',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו בעיקר:',
    hint: 'Annulus בלטינית זה טבעת. דמיין מעטפת קשיחה של צמיג שמחזיקה ג\'ל בפנים ובולמת זעזועים.',
    options: [
      { id: 'a', text: 'למנוע חיכוך ולבלום זעזועים (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'להזין ישירות את חוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 35: Annulus Fibrosus הוא טבעת סיבית קולגנית צפופה העוטפת את הגרעין הצמיגי (Nucleus Pulposus) ובולמת עומסי דחיסה.'
  },
  {
    id: 'a1_2',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'תאי סחוס - Chondrocyte (עמ׳ 35)',
    diagramKey: 'chondrocyte',
    questionText: 'תא הסחוס (Chondrocyte):',
    hint: '"כונדרו" = סחוס, "ציט" = תא בוגר. מה התא מייצר ומפריש סביבו כדי לתחזק את הסחוס?',
    options: [
      { id: 'a', text: 'מייצר קולגן ורכיבי חומר חוץ-תאי בסחוס', isCorrect: true },
      { id: 'b', text: 'נמצא ברקמת העצם הצפופה', isCorrect: false },
      { id: 'c', text: 'הוא חלק מהחומר האנאורגני של הסחוס', isCorrect: false },
      { id: 'd', text: 'נמצא ברקמת חיבור צפופה בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 35: הכונדרוציטים מייצרים ומפרישים ללא הרף את סיבי הקולגן והפרוטאוגליקנים של המטריקס הסחוסי.'
  },
  {
    id: 'a1_3',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'הזנת סחוס היאליני (עמ׳ 35)',
    diagramKey: 'chondrocyte',
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
    diagramKey: 'osteon',
    questionText: 'מה מייחד את העצם הצפופה (Compact Bone)?',
    hint: 'דמיין גזע עץ שנחתך לרוחב: טבעות עגולות זו בתוך זו סביב תעלה מרכזית.',
    options: [
      { id: 'a', text: 'מורכבת מיחידות המסודרות בצורה קונצנטרית (מערכות הוורס - Osteons)', isCorrect: true },
      { id: 'b', text: 'חסרת אספקה דמית לחלוטין', isCorrect: false },
      { id: 'c', text: 'נמצאת בעיקר בחלקן הפנימי של האפיפיזות', isCorrect: false },
      { id: 'd', text: 'מורכבת מטרבקולות ספוגיות בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 28, 35: העצם הצפופה בנויה מאוסטאונים (מערכות הוורס) – גלילים של גבישי סידן וקולגן סביב תעלת דם ועצבים.'
  },
  {
    id: 'a1_5',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'מיקום רקמת חיבור רפה (עמ׳ 35)',
    diagramKey: 'disc',
    questionText: 'Loose connective tissue (רקמת חיבור אמיתית רפה/אוורירית) נמצאת:',
    hint: 'הריפוד הביולוגי שמאגד את סיבי השריר מבלי ליצור חבל נוקשה כמו גיד.',
    options: [
      { id: 'a', text: 'בין סיבי השריר וסביב כלי דם ועצבים', isCorrect: true },
      { id: 'b', text: 'בשכבה הפנימית של כלי הדם', isCorrect: false },
      { id: 'c', text: 'בגיד אכילס', isCorrect: false },
      { id: 'd', text: 'בסחוס האף', isCorrect: false }
    ],
    explanation: 'עמ׳ 17, 35: רקמת חיבור רפה מאגדת את צרורות סיבי השריר (Fascicles) ומאפשרת מעבר חופשי של כלי דם ועצבים.'
  },
  {
    id: 'a1_6',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'המים שברקמת הסחוס (עמ׳ 36)',
    diagramKey: 'chondrocyte',
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
    title: 'תכונות קולגן סוג 1 (עמ׳ 36)',
    diagramKey: 'disc',
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
    diagramKey: 'cervical',
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
    diagramKey: 'cervical',
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
    diagramKey: 'atlas_axis',
    questionText: 'חוליה C1 (Atlas) יוצאת דופן מכל שאר החוליות כי:',
    hint: 'אטלס נושא את כדור הארץ. החוליה הזו היא טבעת רחבה שמחזיקה ישירות את הראש, ואין בה את הגוש הרגיל של גוף החוליה.',
    options: [
      { id: 'a', text: 'אין לה גוף חוליה והיא נושאת את הגולגולת (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'היא החוליה הגדולה והכבדה ביותר בשלד', isCorrect: false },
      { id: 'c', text: 'היא מחוברת ישירות לצלע הראשונה', isCorrect: false },
      { id: 'd', text: 'אין לה תעלה עבור חוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 65: חוליית האטלס (C1) היא טבעת גרמית ללא גוף חוליה מרכזי וללא זיז קוצי, הבנויה לשאת את עצם העורף של הגולגולת.'
  },
  {
    id: 'a1_11',
    moduleId: 'anat1',
    topic: 'מפרקים',
    title: 'מפרק Atlantoaxial C1-C2 (עמ׳ 66)',
    diagramKey: 'atlas_axis',
    questionText: 'ה-Atlantoaxial joint מאפשר את התנועה העיקרית הבאה:',
    hint: 'חוליה C2 נקראת Axis (ציר) וממנה בולטת שן שעליה C1 מסתובבת כמו גלגל על ציר.',
    options: [
      { id: 'a', text: 'רוטציה (סיבוב ראש ימינה ושמאלה)', isCorrect: true },
      { id: 'b', text: 'כפיפה ופשיטה בלבד', isCorrect: false },
      { id: 'c', text: 'כפיפה צידית בלבד', isCorrect: false },
      { id: 'd', text: 'הרחקה וקירוב', isCorrect: false }
    ],
    explanation: 'עמ׳ 56, 66: השן של אקסיס (Dens) משמשת כציר סביבו חוליית אטלס מסתובבת ומספקת כ-50% מתנועת הרוטציה (ה"לא") של הראש.'
  },
  {
    id: 'a1_12',
    moduleId: 'anat1',
    topic: 'שלד בית החזה',
    title: 'חלקי עצם החזה Sternum (עמ׳ 63, 65)',
    diagramKey: 'sternum',
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
    id: 'a1_13',
    moduleId: 'anat1',
    topic: 'שרירי נשימה',
    title: 'שריר הסרעפת Diaphragm (עמ׳ 64, 65)',
    diagramKey: 'spine_curves',
    questionText: 'שריר הסרעפת (Diaphragm) מפריד בין:',
    hint: 'רצפה לקומה העליונה (לב וריאות) ותקרה לקומה התחתונה (קיבה ומעיים).',
    options: [
      { id: 'a', text: 'איברי בית החזה (לב וריאות) לבין חלל הבטן (קיבה ומעיים)', isCorrect: true },
      { id: 'b', text: 'חלל הגולגולת לחלל הצוואר', isCorrect: false },
      { id: 'c', text: 'האגן לגפיים התחתונות', isCorrect: false },
      { id: 'd', text: 'השכמות לעמוד השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 64: הסרעפת היא שריר כיפתי גדול החוצץ בין חלל בית החזה לחלל הבטן ויורד מטה כדי להכניס אוויר לריאות.'
  },
  {
    id: 'a1_14',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'משטחים מפרקיים של חוליות המותניים (עמ׳ 58, 65)',
    diagramKey: 'spine_curves',
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
    title: 'סיום חוט השדרה (עמ׳ 61)',
    diagramKey: 'spine_curves',
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
    id: 'a1_16',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'תאי אוסטאובלסטים מול אוסטאוקלסטים (עמ׳ 27, 34)',
    diagramKey: 'osteon',
    questionText: 'מה תפקידם של האוסטאובלסטים (Osteoblasts) לעומת האוסטאוקלסטים (Osteoclasts)?',
    hint: 'B = Build (בונה), C = Clash/Clear (מפרק ומפנה).',
    options: [
      { id: 'a', text: 'אוסטאובלסטים בונים ומפרישים חומר עצם, אוסטאוקלסטים מפרקים עצם בלויה', isCorrect: true },
      { id: 'b', text: 'אוסטאוקלסטים בונים עצם, אוסטאובלסטים מייצרים שומן', isCorrect: false },
      { id: 'c', text: 'שניהם מפרקים גידים ורצועות', isCorrect: false },
      { id: 'd', text: 'הם תאי עצב בחוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 27, 36: אוסטאובלסטים מייצרים ומפרישים מטריקס עצם חדש, ואוסטאוקלסטים מפרקים עצם ישנה לצורך התחדשות.'
  },
  {
    id: 'a1_17',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'עצם ססמואידית (עמ׳ 27, 34)',
    diagramKey: 'knee_fibula',
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
    id: 'a1_18',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'לוחית האפיפיזה (עמ׳ 30, 34)',
    diagramKey: 'spine_curves',
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
    id: 'a1_19',
    moduleId: 'anat1',
    topic: 'מישורי התנועה',
    title: 'המישור הסגיטלי Sagittal Plane (עמ׳ 44, 127)',
    diagramKey: 'spine_curves',
    questionText: 'המישור החיצי (Sagittal Plane) מחלק את גוף האדם ל:',
    hint: 'באיזה מישור זזים קדימה ואחורה (כפיפה ופשיטה)?',
    options: [
      { id: 'a', text: 'חלק ימני וחלק שמאלי (בו מתבצעות תנועות כפיפה ופשיטה)', isCorrect: true },
      { id: 'b', text: 'חלק עליון וחלק תחתון', isCorrect: false },
      { id: 'c', text: 'חלק קדמי וחלק אחורי', isCorrect: false },
      { id: 'd', text: 'שכבה שטחית ושכבה עמוקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 44, 127: המישור הסגיטלי חוצה את הגוף לימין ושמאל, ובו מתרחשות כפיפה (Flexion) ופשיטה (Extension).'
  },
  {
    id: 'a1_20',
    moduleId: 'anat1',
    topic: 'מישורי התנועה',
    title: 'המישור הרוחבי Transverse Plane (עמ׳ 44, 127)',
    diagramKey: 'spine_curves',
    questionText: 'המישור הרוחבי (Transverse Plane) מחלק את הגוף ל:',
    hint: 'כמו חגורה שמחלקת את הגוף לחלק שמעליה ולחלק שמתחתיה.',
    options: [
      { id: 'a', text: 'חלק עליון (Superior) וחלק תחתון (Inferior)', isCorrect: true },
      { id: 'b', text: 'חלק ימני וחלק שמאלי', isCorrect: false },
      { id: 'c', text: 'חלק קדמי וחלק אחורי', isCorrect: false },
      { id: 'd', text: 'שני חצאים זהים לחלוטין', isCorrect: false }
    ],
    explanation: 'עמ׳ 44, 127: המישור הרוחבי מקביל לאופק ומחלק לעליון ותחתון; במישור זה מתבצעות תנועות רוטציה.'
  },

  // =========================================================================
  // חלק 2: אנטומיה ב' - שרירים, תחל, אחז וניתוח תנועות (שאלות 26-55)
  // =========================================================================
  {
    id: 'a2_1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה (עמ׳ 124)',
    diagramKey: 'knee_fibula',
    questionText: 'מי מהשרירים הבאים נאחז (Insertion) בעצם השוקית (Fibula)?',
    hint: 'הפיבולה היא העצם החיצונית (לטרלית) של השוק. איזה שריר מהירך האחורית פונה החוצה לצד הלטרלי בתרשים?',
    options: [
      { id: 'a', text: 'Biceps femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 124, 129: ה-Biceps Femoris יורד בצד הלטרלי ונאחז בראש הפיבולה, בעוד שני שרירי ה"סמי" נאחזים בצד הפנימי של הטיביה.'
  },
  {
    id: 'a2_2',
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
    explanation: 'עמ׳ 96, 124: שריר הרחב הבטני (Transversus Abdominis) סיביו אופקיים לחלוטין ולכן תפקידו לייצב ולהעלות לחץ תוך-בטני, ללא תנועת שלד.'
  },
  {
    id: 'a2_3',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'קירוב אופקי ורוטציה פנימית (עמ׳ 124)',
    diagramKey: 'deltoid',
    questionText: 'התנועות קירוב אופקי (Horizontal Adduction) ורוטציה מדיאלית של הכתף מבוצעות ע״י:',
    hint: 'שים יד על קדמת הכתף וקרב את הזרוע אל החזה – תרגיש את הסיבים הקדמיים של שריר הכתף מתקשים מיד.',
    options: [
      { id: 'a', text: 'Anterior deltoid (הדלתואיד הקדמי)', isCorrect: true },
      { id: 'b', text: 'Posterior deltoid', isCorrect: false },
      { id: 'c', text: 'Brachialis', isCorrect: false },
      { id: 'd', text: 'Infraspinatus', isCorrect: false }
    ],
    explanation: 'עמ׳ 81, 124: הדלתואיד הקדמי מושך את הזרוע מלפנים ומבצע כפיפה, קירוב אופקי וסיבוב פנימי (מדיאלי).'
  },
  {
    id: 'a2_4',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'שריר שאינו מבצע רוטציה מדיאלית (עמ׳ 124)',
    diagramKey: 'deltoid',
    questionText: 'מי מהשרירים הבאים אינו מבצע רוטציה מדיאלית (סיבוב פנימי) של הכתף?',
    hint: 'זכור את צמד האחים שמסובבים את הזרוע החוצה: אינפראספינטוס וחברו הקטן "מינור".',
    options: [
      { id: 'a', text: 'Teres minor (מבצע רוטציה לטרלית/חיצונית)', isCorrect: true },
      { id: 'b', text: 'Teres major', isCorrect: false },
      { id: 'c', text: 'Anterior deltoid', isCorrect: false },
      { id: 'd', text: 'Latissimus dorsi', isCorrect: false }
    ],
    explanation: 'עמ׳ 85, 124: ה-Teres Minor ממוקם מאחור ונאחז בחלק האחורי של ה-Greater Tubercle ולכן מושך את הזרוע לרוטציה לטרלית (חיצונית).'
  },
  {
    id: 'a2_5',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'מסובבי הכתף Rotator Cuff (עמ׳ 125)',
    diagramKey: 'deltoid',
    questionText: 'מי מבין מייצבי הכתף (Rotator Cuff) מבצע רוטציה מדיאלית (פנימית)?',
    hint: 'כל שרירי השרוול יושבים מאחורי השכמה מלבד אחד בלבד שמתחבא מקדימה, מתחת (Sub) לשכמה.',
    options: [
      { id: 'a', text: 'Subscapularis', isCorrect: true },
      { id: 'b', text: 'Supraspinatus', isCorrect: false },
      { id: 'c', text: 'Infraspinatus', isCorrect: false },
      { id: 'd', text: 'Teres minor', isCorrect: false }
    ],
    explanation: 'עמ׳ 85, 125: ה-Subscapularis יושב בחלק הקדמי של השכמה ונאחז ב-Lesser Tubercle מקדימה, ולכן הוא היחיד בקבוצה שמסובב פנימה.'
  },
  {
    id: 'a2_6',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'אחז ב-Greater Trochanter (עמ׳ 125)',
    diagramKey: 'knee_fibula',
    questionText: 'ה-Greater Trochanter של הפמור מהווה נקודת אחיזה (Insertion) לשריר:',
    hint: 'הבליטה שאתה יכול למשש בצד החיצוני של הירך. איזה שריר מושך שם כדי לייצב את האגן בעמידה על רגל אחת?',
    options: [
      { id: 'a', text: 'Gluteus medius', isCorrect: true },
      { id: 'b', text: 'Iliopsoas', isCorrect: false },
      { id: 'c', text: 'Gluteus maximus', isCorrect: false },
      { id: 'd', text: 'Hamstrings', isCorrect: false }
    ],
    explanation: 'עמ׳ 118, 125: השרירים Gluteus Medius ו-Minimus נאחזים ב-Greater Trochanter ומרחיקים את הירך ומייצבים את האגן בהליכה.'
  },
  {
    id: 'a2_7',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'תחל בעצם ה-Femur (עמ׳ 125)',
    diagramKey: 'quadriceps',
    questionText: 'מי מהשרירים הבאים מתחיל (Origin) מעצם הירך (Femur)?',
    hint: 'שלושת ה"וואסטוסים" מתחילים בירך עצמה. הרקטוס (הישר) לעומתם חייב לעלות עד לעצם האגן.',
    options: [
      { id: 'a', text: 'Vastus intermedius', isCorrect: true },
      { id: 'b', text: 'Rectus femoris (מתחיל באגן ב-AIIS)', isCorrect: false },
      { id: 'c', text: 'Iliopsoas', isCorrect: false },
      { id: 'd', text: 'Semitendinosus', isCorrect: false }
    ],
    explanation: 'עמ׳ 108, 125: שלושת ראשי ה-Vastus (לטרליס, מדיאליס, אינטרמדיוס) מתחילים ישירות על גבי הפמור, בעוד הרקטוס פמוריס מתחיל באגן.'
  },
  {
    id: 'a2_8',
    moduleId: 'anat2',
    topic: 'שרירי הקרסול',
    title: 'הרמת בהונות ועמידה על עקבים (עמ׳ 126)',
    diagramKey: 'knee_fibula',
    questionText: 'אתה הולך על העקבים ומרים את בהונות כף הרגל מעלה (Dorsiflexion). איזה שריר פועל?',
    hint: 'גע בקדמת השוק שלך והרם את האצבעות מעלה – תרגיש שריר קדמי מתקשה מיד לאורך הטיביה.',
    options: [
      { id: 'a', text: 'Tibialis anterior', isCorrect: true },
      { id: 'b', text: 'Gastrocnemius', isCorrect: false },
      { id: 'c', text: 'Soleus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 122, 126: ה-Tibialis Anterior נמצא בקדמת השוק ומבצע Dorsiflexion ו-Inversion ושומר על קשת כף הרגל מפני צניחה.'
  },
  {
    id: 'a2_9',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'פשיטת ירך ראשית (עמ׳ 126)',
    diagramKey: 'quadriceps',
    questionText: 'פשיטת ירך (Hip Extension) בעלייה מסקוואט או עלייה במדרגות מבוצעת בעוצמה ע״י:',
    hint: 'זהו השריר בעל המסה הגדולה והחזקה ביותר בישבן של האדם ההולך על שתיים.',
    options: [
      { id: 'a', text: 'Gluteus maximus', isCorrect: true },
      { id: 'b', text: 'Iliopsoas', isCorrect: false },
      { id: 'c', text: 'Rectus femoris', isCorrect: false },
      { id: 'd', text: 'Vastus medialis', isCorrect: false }
    ],
    explanation: 'עמ׳ 117, 126: ה-Gluteus Maximus הוא הפושט הראשי והחזק ביותר של מפרק הירך, הנכנס לפעולה מסיבית כנגד עומס (מדרגות, סקוואט).'
  },
  {
    id: 'a2_10',
    moduleId: 'anat2',
    topic: 'שרירי השוק',
    title: 'עלייה על קצות האצבעות (עמ׳ 126)',
    diagramKey: 'achilles',
    questionText: 'עלייה על קצות האצבעות (Plantarflexion) מבוצעת באמצעות:',
    hint: 'השרירים שמתחברים לחבל הביולוגי העבה ביותר בגוף – גיד אכילס שמושך את העקב למעלה.',
    options: [
      { id: 'a', text: 'Gastrocnemius (תאומים) ו-Soleus', isCorrect: true },
      { id: 'b', text: 'Tibialis anterior', isCorrect: false },
      { id: 'c', text: 'Hamstrings', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 120, 126: הגסטרוקנמיוס והסולאוס מתחברים לגיד אכילס שנאחז בעצם העקב (Calcaneus) ומרימים את הגוף כולו לעמידה על קצות האצבעות.'
  },
  {
    id: 'a2_11',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'הרחקה אופקית של הכתף (עמ׳ 128)',
    diagramKey: 'deltoid',
    questionText: 'הרחקה אופקית (Horizontal Abduction) של הכתף מבוצעת ע״י:',
    hint: 'החלק של שריר הכתף שנמצא מאחור (Posterior) ומושך את המרפקים לאחור.',
    options: [
      { id: 'a', text: 'Posterior Deltoid (דלתואיד אחורי)', isCorrect: true },
      { id: 'b', text: 'Middle deltoid', isCorrect: false },
      { id: 'c', text: 'Pectoralis major', isCorrect: false },
      { id: 'd', text: 'Biceps brachii', isCorrect: false }
    ],
    explanation: 'עמ׳ 81, 128: הדלתואיד האחורי יוצא מעצם השכמה ונאחז בזרוע, ומושך אותה לאחור במישור האופקי.'
  },
  {
    id: 'a2_12',
    moduleId: 'anat2',
    topic: 'שרירי הזרוע',
    title: 'האחז של Biceps Brachii (עמ׳ 128)',
    diagramKey: 'sarcomere',
    questionText: 'מי מבין השרירים הבאים אינו מחובר לעצם ה-Ulna באמה?',
    hint: 'הרדיוס היא העצם שמסתובבת בסופינציה (כף יד כלפי מעלה). איזה שריר מפורסם מסובב אותה ולכן חייב להיאחז בה?',
    options: [
      { id: 'a', text: 'Biceps brachii (נאחז ברדיוס ב-Radial Tuberosity)', isCorrect: true },
      { id: 'b', text: 'Triceps brachii (נאחז באולקרנון באולנה)', isCorrect: false },
      { id: 'c', text: 'Brachialis (נאחז ב-Ulnar Tuberosity)', isCorrect: false },
      { id: 'd', text: 'Anconeus', isCorrect: false }
    ],
    explanation: 'עמ׳ 73, 88, 128: ה-Biceps Brachii נאחז בבליטת הרדיוס (Radial Tuberosity) ומבצע סופינציה וכפיפת מרפק; הוא אינו מתחבר לאולנה.'
  },
  {
    id: 'a2_13',
    moduleId: 'anat2',
    topic: 'שרירי השכמה',
    title: 'שריר המסור הקדמי Serratus Anterior (עמ׳ 87)',
    diagramKey: 'deltoid',
    questionText: 'שריר ה-Serratus Anterior (המסור הקדמי) מצמיד את השכמה לצלעות. חולשה שלו גורמת ל:',
    hint: 'כשהשכמה לא צמודה לגב, הגבול שלה בולט החוצה כמו כנף של ציפור.',
    options: [
      { id: 'a', text: 'תופעת "שכמה מכונפת" (Winged Scapula) ובריחת השכמה לאחור', isCorrect: true },
      { id: 'b', text: 'שיתוק של מפרק הקרסול', isCorrect: false },
      { id: 'c', text: 'חוסר יכולת ליישר את הברך', isCorrect: false },
      { id: 'd', text: 'עצירת דופק', isCorrect: false }
    ],
    explanation: 'עמ׳ 87: הסרטוס אנטריור מושך את השכמה קדימה ומצמיד אותה לבית החזה; פגיעה בעצבוב שלו גורמת לשכמה לבלוט החוצה ככנף.'
  },
  {
    id: 'a2_14',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'השריר הדו-מפרקי בארבע-ראשי (עמ׳ 107)',
    diagramKey: 'quadriceps',
    questionText: 'מי מבין ארבעת ראשי ה-Quadriceps הוא שריר דו-מפרקי החוצה גם את מפרק הירך וגם את הברך?',
    hint: 'הראש הישר המרכזי שמתחיל בעצם האגן (AIIS).',
    options: [
      { id: 'a', text: 'Rectus Femoris (הישר הירכי)', isCorrect: true },
      { id: 'b', text: 'Vastus Lateralis', isCorrect: false },
      { id: 'c', text: 'Vastus Medialis', isCorrect: false },
      { id: 'd', text: 'Vastus Intermedius', isCorrect: false }
    ],
    explanation: 'עמ׳ 107: הרקטוס פמוריס הוא היחיד מהארבעה שיוצא מעצם האגן ולכן משתתף בכפיפת ירך בנוסף לפשיטת ברך.'
  },
  {
    id: 'a2_15',
    moduleId: 'anat2',
    topic: 'שרירי הגב העמוקים',
    title: 'זוקפי עמוד השדרה Erector Spinae (עמ׳ 98)',
    diagramKey: 'erector_spinae',
    questionText: 'קבוצת שרירי ה-Erector Spinae כוללת שלושה שרירי אורך מלטראל למדיאל:',
    hint: 'איליו-קוסטליס (צלעות בחוץ), לונגיסימוס (ארוך באמצע), ספינליס (צמוד לקוצים בפנים).',
    options: [
      { id: 'a', text: 'Iliocostalis (לטרלי), Longissimus (אמצעי), Spinalis (מדיאלי)', isCorrect: true },
      { id: 'b', text: 'טרפז, דלתואיד ורחב גבי', isCorrect: false },
      { id: 'c', text: 'פסואס, איליאקוס וגלוטאוס', isCorrect: false },
      { id: 'd', text: 'המסטרינגס וארבע-ראשי', isCorrect: false }
    ],
    explanation: 'עמ׳ 98: שרירי זוקפי הגב השטחיים מסודרים ב-3 עמודות שריריות המיישרות וזוקפות את עמוד השדרה לאורכו.'
  },

  // =========================================================================
  // חלק 3: פיזיולוגיה א' - אנרגיה, מטבוליזם וגליקוליזה (שאלות 56-78)
  // =========================================================================
  {
    id: 'p1_bmr',
    moduleId: 'phys1',
    topic: 'חילוף חומרים בסיסי',
    title: 'משתנים המשפיעים על BMR (עמ׳ 9, 14)',
    diagramKey: 'bmr',
    questionText: 'אילו משתנים משפיעים ישירות על חילוף החומרים הבסיסי (BMR)?',
    hint: 'התבונן בתרשים BMR: שריר צורך פי 4 אנרגיה משומן במנוחה, ואדם גדול ממדים מאבד יותר חום דרך שטח העור.',
    options: [
      { id: 'a', text: 'מסת שריר ואחוז שומן, גיל, מגדר, שטח פני הגוף והורמונים', isCorrect: true },
      { id: 'b', text: 'צבע העיניים בלבד', isCorrect: false },
      { id: 'c', text: 'סוג הנעליים שלובשים', isCorrect: false },
      { id: 'd', text: 'כמות השיער על הראש', isCorrect: false }
    ],
    explanation: 'פיזיולוגיה עמ׳ 9, 14: BMR מושפע ישירות ממסת רקמת השריר, גיל, מגדר, שטח פני הגוף ופעילות בלוטת התריס.'
  },
  {
    id: 'phys1_1',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מקור אנרגיה במרתון (עמ׳ 47)',
    diagramKey: 'energy_pathways',
    questionText: 'מקורם העיקרי של מולקולות ה-ATP במהלך ריצת מרתון הוא:',
    hint: 'מאגרי הפחמימות מספיקים לכשעה וחצי. מאיזה מחסן ענק של עשרות אלפי קלוריות הגוף שואב דלק לאורך שעות?',
    options: [
      { id: 'a', text: 'בשומנים (ובפחמימות במסלול האירובי)', isCorrect: true },
      { id: 'b', text: 'במסלול האנאירובי אלקטי בלבד', isCorrect: false },
      { id: 'c', text: 'בחלבונים בלבד', isCorrect: false },
      { id: 'd', text: 'בוויטמינים', isCorrect: false }
    ],
    explanation: 'עמ׳ 47, 50: במאמצים אירוביים ממושכים מעל חצי שעה, שומנים מהווים את מקור הדלק המרכזי במיטוכונדריות בנוכחות חמצן.'
  },
  {
    id: 'phys1_2',
    moduleId: 'phys1',
    topic: 'דלק מטבולי במאמץ',
    title: 'תרומת שומנים מול עצימות (עמ׳ 47)',
    diagramKey: 'energy_pathways',
    questionText: 'בזמן מאמץ גופני, התרומה היחסית של השומנים כמקור אנרגיה:',
    hint: 'ככל שאתה רץ מהר יותר, השריר צריך ATP כאן ועכשיו. שומן מתפרק לאט ודורש המון חמצן, אז מה קורה לחלקו היחסי?',
    options: [
      { id: 'a', text: 'יורדת ככל שמתגברת עצימות המאמץ (ועולה חלקן של הפחמימות)', isCorrect: true },
      { id: 'b', text: 'עולה ככל שמתגברת עצימות המאמץ', isCorrect: false },
      { id: 'c', text: 'זהה בכל דרגות המאמץ', isCorrect: false },
      { id: 'd', text: 'שומן משמש רק באימוני ספרינט של 10 שניות', isCorrect: false }
    ],
    explanation: 'עמ׳ 32-33: בעצימות גבוהה הגוף עובר לדלק מהיר וחסכוני בחמצן (פחמימות), בעוד חלקו היחסי של השומן יורד.'
  },
  {
    id: 'phys1_3',
    moduleId: 'phys1',
    topic: 'מעגל קורי',
    title: 'פינוי לקטט במעגל קורי (עמ׳ 47)',
    diagramKey: 'cori_cycle',
    questionText: 'במעגל קורי (Cori Cycle):',
    hint: 'הכבד הוא מפעל המיחזור של הגוף: הוא לוקח את הלקטט שנשפך לדם ומשקיע אנרגיה כדי לבנות ממנו שוב סוכר נקי.',
    options: [
      { id: 'a', text: 'לקטט הופך שוב לגלוקוז בתאי הכבד (בהשקעת אנרגיה)', isCorrect: true },
      { id: 'b', text: 'לקטט הופך לגלוקוז בתוך השריר הפעיל עצמו', isCorrect: false },
      { id: 'c', text: 'לקטט הופך לשומן בתוך הריאות', isCorrect: false },
      { id: 'd', text: 'לקטט מסולק מהגוף ישירות דרך הנשיפה', isCorrect: false }
    ],
    explanation: 'עמ׳ 39, 47: הכבד הופך 2 מולקולות לקטט חזרה לגלוקוז בתהליך גלוקונאוגנזה הדורש 6 מולקולות ATP.'
  },
  {
    id: 'phys1_4',
    moduleId: 'phys1',
    topic: 'מאגרי אנרגיה',
    title: 'מאגרי הגליקוגן (עמ׳ 47)',
    diagramKey: 'energy_pathways',
    questionText: 'עיקר הגליקוגן נאגר בגוף ב:',
    hint: 'המאגר המקומי הגדול נמצא בשרירים שזזים, והמאגר המרכזי שנשלח לדם נמצא באיבר הגדול בבטן.',
    options: [
      { id: 'a', text: 'בשרירי השלד ובכבד', isCorrect: true },
      { id: 'b', text: 'במוח ובעצמות', isCorrect: false },
      { id: 'c', text: 'ברקמת השומן בלבד', isCorrect: false },
      { id: 'd', text: 'בקיבה ובמעיים', isCorrect: false }
    ],
    explanation: 'עמ׳ 13, 47: כ-300-400 גרם גליקוגן שמורים בשרירים לשימושם העצמי, ועוד כ-70-100 גרם בכבד לשמירה על רמת הסוכר בדם.'
  },
  {
    id: 'phys1_5',
    moduleId: 'phys1',
    topic: 'סף אנאירובי וצח"מ',
    title: 'השוואה בין שני אתלטים (עמ׳ 48)',
    diagramKey: 'obla_graph',
    questionText: 'בהשוואה בין שני אתלטים בעלי VO2max זהה אך סף אנאירובי שונה:',
    hint: 'לשניהם מנוע באותו גודל, אבל לאחד מהם נורית החומציות נדלקת רק במהירות גבוהה בהרבה.',
    options: [
      { id: 'a', text: 'לבעל הסף האנאירובי הגבוה יותר יתרון ברור בריצת מרתון ומאמצי סיבולת', isCorrect: true },
      { id: 'b', text: 'לבעל הסף האנאירובי הנמוך יתרון במרתון', isCorrect: false },
      { id: 'c', text: 'אין שום הבדל בביצועים ביניהם', isCorrect: false },
      { id: 'd', text: 'שניהם יתעייפו בדיוק באותה דקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 42, 48: סף אנאירובי גבוה מאפשר להתחרות בקצב מהיר יותר לאורך זמן מבלי לצבור חומציות הגורמת לעייפות.'
  },
  {
    id: 'phys1_6',
    moduleId: 'phys1',
    topic: 'גליקוליזה ועייפות',
    title: 'השפעת חומציות על PFK (עמ׳ 48)',
    diagramKey: 'energy_pathways',
    questionText: 'עלייה בחומציות עקב הצטברות יוני מימן (H+) במאמץ עצים גורמת ל:',
    hint: 'אנזימים הם חלבונים עדינים: בסביבה חומצית הם משנים צורה ומפסיקים לעבוד, כמו מפתח שהתעקם בחור המנעול.',
    options: [
      { id: 'a', text: 'לירידה בפעילות האנזים המרכזי PFK ולירידה ביכולת הכיווץ', isCorrect: true },
      { id: 'b', text: 'לעלייה מואצת בפעילות PFK', isCorrect: false },
      { id: 'c', text: 'לחוסר שינוי בפעילות האנזים', isCorrect: false },
      { id: 'd', text: 'לייצור מוגבר של סידן', isCorrect: false }
    ],
    explanation: 'עמ׳ 23, 48: החומציות העולה (H+) מעכבת את אנזים ה-PFK (שלב 3 בגליקוליזה) ו"תוקעת" את חידוש ה-ATP, מה שמוביל לעייפות מהירה.'
  },
  {
    id: 'phys1_7',
    moduleId: 'phys1',
    topic: 'התאוששות',
    title: 'הורדת חומציות לאחר מאמץ (עמ׳ 49)',
    diagramKey: 'cori_cycle',
    questionText: 'מה הדרך היעילה ביותר להורדת החומציות בשריר לאחר מאמץ עצים?',
    hint: 'אם תשב במקום – זרם הדם יאט. אם תמשיך ללכת או לרוץ קל – המשאבה תמשיך לשטוף את השריר.',
    options: [
      { id: 'a', text: 'התאוששות אקטיבית קלה (ריצה קלה ב-35%-50% מצח"מ)', isCorrect: true },
      { id: 'b', text: 'ספרינט נוסף', isCorrect: false },
      { id: 'c', text: 'ישיבה פסיבית מוחלטת', isCorrect: false },
      { id: 'd', text: 'עמידה ללא תנועה', isCorrect: false }
    ],
    explanation: 'עמ׳ 46, 49: פעילות אירובית קלה שומרת על זרימת דם מוגברת שמפנה את יוני המימן והלקטט לשרירים הפחות פעילים ולכבד.'
  },
  {
    id: 'phys1_8',
    moduleId: 'phys1',
    topic: 'סף אנאירובי',
    title: 'הגדרת הסף האנאירובי (עמ׳ 49)',
    diagramKey: 'obla_graph',
    questionText: 'מהי ההגדרה של הסף האנאירובי (OBLA)?',
    hint: 'חשוב על ברז שפותח מים (ייצור) מול פתח ניקוז (פינוי). כל עוד הניקוז עומד בקצב, הכיור לא עולה על גדותיו.',
    options: [
      { id: 'a', text: 'קצב הפעילות המרבי שבו קצב ייצור הלקטט שווה עדיין לקצב הפינוי שלו (איזון)', isCorrect: true },
      { id: 'b', text: 'קצב ייצור הלקטט נמוך בהרבה מקצב הפינוי', isCorrect: false },
      { id: 'c', text: 'מצב בו אין שימוש בגלוקוז כלל', isCorrect: false },
      { id: 'd', text: 'הרגע שבו נגמרים מאגרי השומן', isCorrect: false }
    ],
    explanation: 'עמ׳ 40, 49: בסף האנאירובי (כ-4 מילימול/ליטר) קצב הפינוי הוא מקסימלי אך עדיין שווה לייצור. מעבר לו – הלקטט והחומציות מצטברים בחדות.'
  },
  {
    id: 'phys1_9',
    moduleId: 'phys1',
    topic: 'זמני חידוש מאגרים',
    title: 'זמן מילוי ATP-CrP לאחר מאמץ (עמ׳ 46, 50)',
    diagramKey: 'energy_pathways',
    questionText: 'כמה זמן נדרש למילוי מלא של מאגרי ה-ATP וה-CrP בתום מאמץ מרבי של 10 שניות?',
    hint: 'זמן המנוחה בין סטים כבדים בחדר כושר כדי להרגיש רענן וכוח מלא לסט הבא.',
    options: [
      { id: 'a', text: 'כ-2 עד 4 דקות מנוחה (בנוכחות חמצן)', isCorrect: true },
      { id: 'b', text: '3 ימים תמימים', isCorrect: false },
      { id: 'c', text: 'שנייה אחת בלבד', isCorrect: false },
      { id: 'd', text: 'שעה שלמה', isCorrect: false }
    ],
    explanation: 'עמ׳ 20, 46: המיטוכונדריות צריכות 2-4 דקות של חמצן ומנוחה כדי לייצר ATP חדש שיטעין מחדש את מאגרי הקריאטין פוספט.'
  },

  // =========================================================================
  // חלק 4: פיזיולוגיה ב' - לב, כלי דם, נשימה, שרירים והורמונים (שאלות 79-100)
  // =========================================================================
  {
    id: 'phys2_1',
    moduleId: 'phys2',
    topic: 'מערכת הלב',
    title: 'מצב המסתמים בדיאסטולה (עמ׳ 74)',
    diagramKey: 'heart_structure',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים ומילויים) בלב:',
    hint: 'דמיין דלתות שנפתחות כדי שהאורחים ייכנסו מהמרפסת (העלייה) לתוך הסלון (החדר), בזמן שהדלת לרחוב סגורה.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים בין החדרים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'המסתמים בין החדרים לעורקים פתוחים', isCorrect: false },
      { id: 'c', text: 'כל המסתמים בלב סגורים לחלוטין', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'עמ׳ 55, 74: בדיאסטולה החדרים נרפים ומתמלאים בדם מהעליות דרך המסתמים הפתוחים ביניהם, בעוד מסתמי היציאה לעורקים סגורים.'
  },
  {
    id: 'phys2_2',
    moduleId: 'phys2',
    topic: 'כלי דם ומחזורי הדם',
    title: 'הוורידים במחזורי הדם (עמ׳ 74)',
    diagramKey: 'vein_valves',
    questionText: 'מה נכון לגבי הוורידים במחזורי הדם של גוף האדם?',
    hint: 'וריד תמיד נכנס ללב. מאיפה ורידי הריאה מגיעים? מהריאות שבהן הרגע נשמנו חמצן נקי!',
    options: [
      { id: 'a', text: 'במחזור הריאתי (הקטן) זורם בהם דם עשיר בחמצן, ובמחזור הגדול דם עני בחמצן', isCorrect: true },
      { id: 'b', text: 'בכל הוורידים בגוף תמיד זורם רק דם דל בחמצן', isCorrect: false },
      { id: 'c', text: 'ורידים מובילים דם מהלב אל הרקמות', isCorrect: false },
      { id: 'd', text: 'אין שסתומים בוורידים כלל', isCorrect: false }
    ],
    explanation: 'עמ׳ 53, 74: ההגדרה של וריד היא כיוון הזרימה (אל הלב): ורידי הריאה מחזירים דם מחומצן מהריאות לעלייה השמאלית, בעוד ורידי הגוף מחזירים דם ורידי.'
  },
  {
    id: 'phys2_3',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'שחלוף גזים בנאדיות (עמ׳ 93)',
    diagramKey: 'alveoli',
    questionText: 'שחלוף הגזים (חמצן ופחמן דו-חמצני) בין נאדיות הריאה לנימי הדם מתבצע באמצעות מנגנון פיזיקלי של:',
    hint: 'מעבר פסיבי ספונטני מריכוז גבוה לריכוז נמוך ללא צורך בהשקעת אנרגיה.',
    options: [
      { id: 'a', text: 'דיפוזיה פסיבית על פני שטח פנים ענק של הנאדיות', isCorrect: true },
      { id: 'b', text: 'משאבות חשמליות הצורכות ATP', isCorrect: false },
      { id: 'c', text: 'סינון מכני של כדוריות דם אדומות', isCorrect: false },
      { id: 'd', text: 'עיכול כימי ע״י חומצה', isCorrect: false }
    ],
    explanation: 'עמ׳ 93: בנאדיות הריאה החמצן והפחמן הדו-חמצני חוצים את הממברנה הדקה בדיפוזיה פשוטה לפי מפל הלחצים והריכוזים שלהם.'
  },
  {
    id: 'phys2_4',
    moduleId: 'phys2',
    topic: 'מערכת העצבים והשריר',
    title: 'כישור השריר מול אברון גולג\'י (עמ׳ 87-88)',
    diagramKey: 'spindle_gto',
    questionText: 'איזה מנגנון גורם להרפיה רפלקסיבית של שריר בתגובה למתיחת-יתר או עומס קיצוני בגיד?',
    hint: 'זהו מפסק הביטחון: אם המשקל כבד מדי ומאיים לתלוש את הגיד מהעצם, הוא פוקד: "שחרר הכל ותרפה מיד!".',
    options: [
      { id: 'a', text: 'אברון הגיד ע״ש גולג׳י (Golgi Tendon Organ - GTO)', isCorrect: true },
      { id: 'b', text: 'כישור השריר (Muscle Spindle המכווץ כנגד מתיחה)', isCorrect: false },
      { id: 'c', text: 'רשת הסרקופלזמה', isCorrect: false },
      { id: 'd', text: 'תאי הלוויין', isCorrect: false }
    ],
    explanation: 'עמ׳ 87-88: אברון גולג\'י בצומת גיד-שריר חש במתח מופרז ומעכב את הנוירון המוטורי כדי להרפות את השריר ולהצילו מתלישה.'
  },
  {
    id: 'phys2_5',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'פעולת אינסולין וסוכר (עמ׳ 111-112)',
    diagramKey: 'insulin_glucose',
    questionText: 'איזה הורמון מופרש מתאי בטא בלבלב במצב שובע ואחראי על פתיחת תעלות להכנסת גלוקוז לתאי השריר והכבד?',
    hint: 'אחרי ארוחה טובה, ההורמון הזה משמש כמפתח שפותח את דלתות התא לסוכר.',
    options: [
      { id: 'a', text: 'אינסולין (Insulin)', isCorrect: true },
      { id: 'b', text: 'גלוקגון (הורמון הרעב)', isCorrect: false },
      { id: 'c', text: 'קורטיזול (הורמון סטרס)', isCorrect: false },
      { id: 'd', text: 'אדרנלין', isCorrect: false }
    ],
    explanation: 'עמ׳ 111-112: אינסולין נקשר לקולטן בקרום התא, פותח תעלות גלוקוז ומאפשר לסוכר להיכנס מהדם לתאים לצורך אנרגיה או אגירה כגליקוגן.'
  },
  {
    id: 'phys2_6',
    moduleId: 'phys2',
    topic: 'מערכת החיסון',
    title: 'קווי ההגנה של הגוף (עמ׳ 119-120)',
    diagramKey: 'immune_system',
    questionText: 'העור, הריריות בדרכי הנשימה והפרשות הזיעה והדמעות מהווים את:',
    hint: 'המחסום הפיזי והכימי הראשון שחיידק או נגיף פוגש לפני שהוא חודר לגוף.',
    options: [
      { id: 'a', text: 'קו ההגנה הראשון של מערכת החיסון (מחסום מכני וכימי רציף)', isCorrect: true },
      { id: 'b', text: 'קו ההגנה השלישי (נוגדנים ספציפיים)', isCorrect: false },
      { id: 'c', text: 'מערכת ה-ATP', isCorrect: false },
      { id: 'd', text: 'מנגנון ה-DOMS', isCorrect: false }
    ],
    explanation: 'עמ׳ 119: קו ההגנה הראשון כולל מחסומים פיזיים וכימיים (עור, ריריות, חומציות, אנזימים ברוק ובדמעות) המונעים כניסת מזהמים.'
  }
];
