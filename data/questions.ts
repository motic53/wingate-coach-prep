/* eslint-disable */
// @ts-nocheck
import { DIAGRAMS_LIBRARY } from './diagrams';

export { DIAGRAMS_LIBRARY };

export const ALL_WINGATE_QUESTIONS = [
  // ==========================================
  // מודול 1: אנטומיה א' - תאים, רקמות, שלד ומפרקים (30 שאלות)
  // ==========================================
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
    explanation: 'עמ׳ 35: Annulus Fibrosus הוא טבעת סיבית קולגנית רב-שכבתית העוטפת את הגרעין הג׳לטיני, מונעת את שחיקת החוליות ובולמת זעזועים אנכיים.'
  },
  {
    id: 'anat1_2',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'תאי סחוס - Chondrocyte (עמ׳ 35)',
    diagramKey: 'chondrocyte',
    questionText: 'תא הסחוס (Chondrocyte):',
    hint: 'הסיומת "ציט" פירושה תא בוגר, ו"כונדרו" זה סחוס. מה תא שיושב בתוך רקמה צריך להמשיך להפריש כדי שהיא לא תתפרק?',
    options: [
      { id: 'a', text: 'מייצר קולגן ורכיבי חומר חוץ-תאי בסחוס', isCorrect: true },
      { id: 'b', text: 'נמצא ברקמת העצם הצפופה', isCorrect: false },
      { id: 'c', text: 'הוא חלק מהחומר האנאורגני של הסחוס', isCorrect: false },
      { id: 'd', text: 'נמצא ברקמת חיבור צפופה בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 35: הכונדרוציטים הם "פועלי התחזוקה" של הסחוס: הם מייצרים ומפרישים ללא הרף סיבי קולגן ופרוטאוגליקנים למטריקס החוץ-תאי.'
  },
  {
    id: 'anat1_3',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'סחוס היאליני בקצות עצמות (עמ׳ 35)',
    diagramKey: 'chondrocyte',
    questionText: 'בעניין הסחוס ההיאליני שבקצות העצמות, מי מבין המשפטים הבאים הוא הנכון:',
    hint: 'חשוב על ספוג: כשלוחצים עליו נוזל יוצא, וכשמרפים הוא יונק נוזל מהסביבה. אין בו צינורות דם משלו!',
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
    diagramKey: 'osteon',
    questionText: 'מה מייחד את העצם הצפופה (Compact Bone)?',
    hint: 'דמיין גזע עץ שנחתך לרוחב – רואים בו טבעות גדילה עגולות זו בתוך זו סביב צינור מרכזי.',
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
    explanation: 'עמ׳ 54, 65: נקב בזיז הרוחבי קיים רק בשבע חוליות הצוואר (C1-C7) ומשמש להגנה על עורק הצוואר המוביל דם למוח.'
  },
  {
    id: 'anat1_6',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'חוליה C1 אטלס (עמ׳ 65)',
    diagramKey: 'atlas_axis',
    questionText: 'חוליה C1 (Atlas) יוצאת דופן מכל שאר החוליות כי:',
    hint: 'אטלס במיתולוגיה נשא את כדור הארץ על כתפיו. החוליה הזו היא טבעת רחבה שמחזיקה ישירות את הגולגולת, ואין בה את ה"גוש" הרגיל של גוף החוליה.',
    options: [
      { id: 'a', text: 'אין לה גוף חוליה והיא נושאת את הגולגולת (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'היא החוליה הגדולה והכבדה ביותר בשלד', isCorrect: false },
      { id: 'c', text: 'היא מחוברת ישירות לצלע הראשונה', isCorrect: false },
      { id: 'd', text: 'אין לה תעלה עבור חוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 65: חוליית האטלס (C1) היא טבעת גרמית ללא גוף חוליה מרכזי וללא זיז קוצי, הבנויה לקלוט את עצם העורף של הגולגולת.'
  },
  {
    id: 'anat1_7',
    moduleId: 'anat1',
    topic: 'מפרקים',
    title: 'מפרק Atlantoaxial C1-C2 (עמ׳ 66)',
    diagramKey: 'atlas_axis',
    questionText: 'ה-Atlantoaxial joint מאפשר את התנועה העיקרית הבאה:',
    hint: 'חוליה C2 נקראת Axis (ציר), וממנה בולטת שן כלפי מעלה שעליה C1 מסתובבת כמו גלגל על ציר.',
    options: [
      { id: 'a', text: 'רוטציה (סיבוב ראש ימינה ושמאלה)', isCorrect: true },
      { id: 'b', text: 'כפיפה ופשיטה בלבד', isCorrect: false },
      { id: 'c', text: 'כפיפה צידית בלבד', isCorrect: false },
      { id: 'd', text: 'הרחקה וקירוב', isCorrect: false }
    ],
    explanation: 'עמ׳ 56, 66: השן של אקסיס (Dens) משמשת כציר סביבו חוליית אטלס מסתובבת ומספקת כ-50% מכלל תנועת הרוטציה (ה"לא") של הראש.'
  },
  {
    id: 'anat1_8',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'עקומות עמוד השדרה (עמ׳ 50, 65)',
    diagramKey: 'spine_curves',
    questionText: 'כמה חוליות יש בכל עקומה בעמוד השדרה של אדם בוגר?',
    hint: 'זכור את סדר הארוחות: 7 (בוקר), 12 (צהריים), 5 (ערב), 5 (סקרום), 4 (זנב).',
    options: [
      { id: 'a', text: '7 צוואריות, 12 חזיות, 5 מותניות, 5 בסקרום, 4 בקוקסיקס', isCorrect: true },
      { id: 'b', text: '12 צוואריות, 7 חזיות, 5 מותניות', isCorrect: false },
      { id: 'c', text: '5 צוואריות, 10 חזיות, 10 מותניות', isCorrect: false },
      { id: 'd', text: '33 חוליות מותניות בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 50: סה״כ 33 חוליות: 7 צוואריות (לורדוזה), 12 חזיות (קיפוזה), 5 מותניות (לורדוזה), 5 סקרליות מאוחות ו-4 בעצם הזנב.'
  },
  {
    id: 'anat1_9',
    moduleId: 'anat1',
    topic: 'שלד בית החזה',
    title: 'חלקי עצם החזה Sternum (עמ׳ 63, 65)',
    diagramKey: 'sternum',
    questionText: 'עצם החזה (Sternum) מורכבת מ-3 חלקים עיקריים מלמעלה למטה:',
    hint: 'דמיין חרב קדומה: למעלה הידית הרחבה, באמצע הלהב הארוך, ולמטה השפיץ החד של קצה החרב.',
    options: [
      { id: 'a', text: 'Manubrium (ידית), Body (גוף), Xiphoid process (סיף)', isCorrect: true },
      { id: 'b', text: 'אטלס, אקסיס וסקרום', isCorrect: false },
      { id: 'c', text: 'איליום, איסכיום ופיוביס', isCorrect: false },
      { id: 'd', text: 'אפיפיזה, דיאפיזה ומטפיזה', isCorrect: false }
    ],
    explanation: 'עמ׳ 63: עצם הסטרנום בנויה מידית (מנובריום), גוף העצם, והזיז התחתון (קספואיד - מיוונית: דמוי חרב סיף).'
  },
  {
    id: 'anat1_10',
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
    explanation: 'עמ׳ 58, 62: המשטחים המפרקיים במותניים מונחים במישור הסגיטלי, מה שמאפשר כפיפה ופשיטה יעילות אך "נועל" ומגן על הגב התחתון מרוטציה מזיקה.'
  },

  // ==========================================
  // מודול 2: אנטומיה ב' - שרירים, תחל, אחז ותנועות (35 שאלות)
  // ==========================================
  {
    id: 'anat2_1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה (עמ׳ 124)',
    diagramKey: 'knee_fibula',
    questionText: 'מי מהשרירים הבאים נאחז (Insertion) בעצם השוקית (Fibula)?',
    hint: 'הפיבולה היא העצם החיצונית (לטרלית) של השוק. איזה שריר מהירך האחורית פונה החוצה לצד הלטרלי?',
    options: [
      { id: 'a', text: 'Biceps femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 124, 129: ה-Biceps Femoris יורד בצד הלטרלי ונאחז בראש הפיבולה, בעוד שני שרירי ה"סמי" פונים פנימה ונאחזים בעצם הטיביה.'
  },
  {
    id: 'anat2_2',
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
    id: 'anat2_3',
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
    id: 'anat2_4',
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
    id: 'anat2_5',
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
    id: 'anat2_6',
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
    id: 'anat2_7',
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
    id: 'anat2_8',
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

  // ==========================================
  // מודול 3: פיזיולוגיה א' - אנרגיה, מטבוליזם וגליקוליזה (27 שאלות)
  // ==========================================
  {
    id: 'phys1_1',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מקור אנרגיה במרתון (עמ׳ 47)',
    diagramKey: 'energy_pathways',
    questionText: 'מקורם העיקרי של מולקולות ה-ATP במהלך ריצת מרתון הוא:',
    hint: 'מאגרי הפחמימות בגוף מספיקים לכשעה וחצי. מאיזה מחסן ענק של עשרות אלפי קלוריות הגוף שואב דלק לאורך שעות?',
    options: [
      { id: 'a', text: 'בשומנים (ובפחמימות במסלול האירובי)', isCorrect: true },
      { id: 'b', text: 'במסלול האנאירובי אלקטי בלבד', isCorrect: false },
      { id: 'c', text: 'בחלבונים בלבד', isCorrect: false },
      { id: 'd', text: 'בוויטמינים', isCorrect: false }
    ],
    explanation: 'פיזיולוגיה עמ׳ 47, 50: במאמצים אירוביים ממושכים מעל חצי שעה, שומנים מהווים את מקור הדלק המרכזי במיטוכונדריות בנוכחות חמצן.'
  },
  {
    id: 'phys1_2',
    moduleId: 'phys1',
    topic: 'מעגל קורי',
    title: 'פינוי לקטט במעגל קורי (עמ׳ 47)',
    diagramKey: 'cori_cycle',
    questionText: 'במעגל קורי (Cori Cycle):',
    hint: 'הכבד הוא "מפעל המיחזור" של הגוף: הוא לוקח את הלקטט שנשפך לדם מהשרירים ומשקיע אנרגיה כדי לבנות ממנו שוב סוכר נקי.',
    options: [
      { id: 'a', text: 'לקטט הופך שוב לגלוקוז בתאי הכבד (בהשקעת אנרגיה)', isCorrect: true },
      { id: 'b', text: 'לקטט הופך לגלוקוז בתוך השריר הפעיל עצמו', isCorrect: false },
      { id: 'c', text: 'לקטט הופך לשומן בתוך הריאות', isCorrect: false },
      { id: 'd', text: 'לקטט מסולק מהגוף ישירות דרך הנשיפה', isCorrect: false }
    ],
    explanation: 'עמ׳ 39, 47: הכבד הופך 2 מולקולות לקטט חזרה לגלוקוז בתהליך גלוקונאוגנזה הדורש 6 מולקולות ATP.'
  },
  {
    id: 'phys1_3',
    moduleId: 'phys1',
    topic: 'סף אנאירובי וצח"מ',
    title: 'השוואה בין שני אתלטים (עמ׳ 48)',
    diagramKey: 'obla_graph',
    questionText: 'בהשוואה בין שני אתלטים בעלי VO2max זהה אך סף אנאירובי שונה:',
    hint: 'לשניהם מנוע באותו גודל, אבל לאחד מהם ה"נורית האדומה של החומציות" נדלקת רק במהירות גבוהה בהרבה.',
    options: [
      { id: 'a', text: 'לבעל הסף האנאירובי הגבוה יותר יתרון ברור בריצת מרתון ומאמצי סיבולת', isCorrect: true },
      { id: 'b', text: 'לבעל הסף האנאירובי הנמוך יתרון במרתון', isCorrect: false },
      { id: 'c', text: 'אין שום הבדל בביצועים ביניהם', isCorrect: false },
      { id: 'd', text: 'שניהם יתעייפו בדיוק באותה דקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 42, 48: סף אנאירובי גבוה מאפשר להתחרות בקצב מהיר יותר לאורך זמן מבלי לצבור חומציות הגורמת לעייפות.'
  },
  {
    id: 'phys1_4',
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
    id: 'phys1_5',
    moduleId: 'phys1',
    topic: 'התאוששות',
    title: 'הורדת חומציות לאחר מאמץ (עמ׳ 49)',
    diagramKey: 'cori_cycle',
    questionText: 'מה הדרך היעילה ביותר להורדת החומציות בשריר לאחר מאמץ עצים?',
    hint: 'אם תשב במקום – זרם הדם יאט והחומצה תיתקע בשריר. אם תמשיך ללכת או לרוץ קל – המשאבה תמשיך לשטוף את השריר.',
    options: [
      { id: 'a', text: 'התאוששות אקטיבית קלה (ריצה קלה ב-35%-50% מצח"מ)', isCorrect: true },
      { id: 'b', text: 'ספרינט נוסף', isCorrect: false },
      { id: 'c', text: 'ישיבה פסיבית מוחלטת', isCorrect: false },
      { id: 'd', text: 'עמידה ללא תנועה', isCorrect: false }
    ],
    explanation: 'עמ׳ 46, 49: פעילות אירובית קלה שומרת על זרימת דם מוגברת שמפנה את יוני המימן והלקטט לשרירים הפחות פעילים ולכבד.'
  },
  {
    id: 'phys1_6',
    moduleId: 'phys1',
    topic: 'סף אנאירובי',
    title: 'הגדרת הסף האנאירובי (עמ׳ 49)',
    diagramKey: 'obla_graph',
    questionText: 'מהי ההגדרה של הסף האנאירובי (OBLA)?',
    hint: 'חשוב על ברז שפותח מים (ייצור) מול פתח ניקוז בכיור (פינוי). כל עוד הניקוז עומד בקצב, הכיור לא עולה על גדותיו.',
    options: [
      { id: 'a', text: 'קצב הפעילות המרבי שבו קצב ייצור הלקטט שווה עדיין לקצב הפינוי שלו (איזון)', isCorrect: true },
      { id: 'b', text: 'קצב ייצור הלקטט נמוך בהרבה מקצב הפינוי', isCorrect: false },
      { id: 'c', text: 'מצב בו אין שימוש בגלוקוז כלל', isCorrect: false },
      { id: 'd', text: 'הרגע שבו נגמרים מאגרי השומן', isCorrect: false }
    ],
    explanation: 'עמ׳ 40, 49: בסף האנאירובי (כ-4 מילימול/ליטר) קצב הפינוי הוא מקסימלי אך עדיין שווה לייצור. מעבר לו – הלקטט והחומציות מצטברים בחדות.'
  },

  // ==========================================
  // מודול 4: פיזיולוגיה ב' - לב, כלי דם, נשימה והורמונים (28 שאלות)
  // ==========================================
  {
    id: 'phys2_1',
    moduleId: 'phys2',
    topic: 'מערכת הלב',
    title: 'מצב המסתמים בדיאסטולה (עמ׳ 74)',
    diagramKey: 'heart_structure',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים ומילויים) בלב:',
    hint: 'דמיין דלתות שנפתחות כדי שהאורחים (הדם) ייכנסו מהמרפסת (העלייה) לתוך הסלון (החדר), בזמן שהדלת לרחוב סגורה.',
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
    hint: 'זכור את הכלל: וריד תמיד נכנס ללב. מאיפה ורידי הריאה מגיעים? מהריאות שבהן הרגע נשמנו חמצן נקי!',
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
