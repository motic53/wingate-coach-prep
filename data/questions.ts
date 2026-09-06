/* eslint-disable */
// @ts-nocheck

export const ALL_WINGATE_QUESTIONS = [
  // ==========================================
  // מודול 1: אנטומיה א' - תאים, רקמות, שלד ומפרקים
  // ==========================================
  {
    id: 'anat1_q1',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'תפקיד Annulus Fibrosus (שאלות רשמיות עמ׳ 35)',
    diagramKey: 'disc',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו:',
    hint: 'עיין בעמוד 35 בחוברת משה שחר.',
    options: [
      { id: 'a', text: 'לבלום זעזועים ולמנוע חיכוך (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'להזין ישירות את חוט השדרה בכלי דם', isCorrect: false }
    ],
    explanation: 'מתוך חוברת אנטומיה עמ׳ 35-36: Annulus Fibrosus הוא טבעת סיבית המורכבת מקולגן צפוף הבולמת זעזועים ומונעת חיכוך בין גופי החוליות.'
  },
  {
    id: 'anat1_q2',
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
    explanation: 'עמ׳ 35-36: תאי הסחוס (Chondrocytes) אחראים על ייצור סיבי הקולגן והפרוטאוגליקנים המרכיבים את רקמת הסחוס.'
  },
  {
    id: 'anat1_q3',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'סחוס היאליני בקצות עצמות (עמ׳ 35)',
    diagramKey: 'knee',
    questionText: 'בעניין הסחוס ההיאליני שבקצות העצמות, מי מבין המשפטים הבאים הוא הנכון:',
    hint: 'האם לסחוס מפרקי יש כלי דם עצמאיים?',
    options: [
      { id: 'a', text: 'מקבל חומרי מזון וחמצן בדיפוזיה', isCorrect: true },
      { id: 'b', text: 'עשיר באספקת דם ישירה', isCorrect: false },
      { id: 'c', text: 'אלסטי מאוד הודות לאחוז גבוה של סיבי אלסטין', isCorrect: false },
      { id: 'd', text: 'נמצא בדיסק הבין חולייתי', isCorrect: false }
    ],
    explanation: 'עמ׳ 21-22, 35: הסחוס ההיאליני חסר כלי דם ישירים (Avascular) וניזון בדיפוזיה מתוך הנוזל הסינוביאלי בעת עומס ותנועה.'
  },
  {
    id: 'anat1_q4',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'מבנה העצם הצפופה (עמ׳ 35)',
    diagramKey: 'bone',
    questionText: 'מה מייחד את העצם הצפופה (Compact Bone)?',
    hint: 'איזו מערכת מעגלית מאפיינת אותה תחת המיקרוסקופ?',
    options: [
      { id: 'a', text: 'מורכבת מיחידות המסודרות בצורה קונצנטרית (מערכות הוורס - Osteons)', isCorrect: true },
      { id: 'b', text: 'חסרת אספקה דמית לחלוטין', isCorrect: false },
      { id: 'c', text: 'נמצאת בעיקר בחלקן הפנימי של האפיפיזות', isCorrect: false },
      { id: 'd', text: 'מורכבת מטרבקולות ספוגיות בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 28, 35: העצם הצפופה בנויה מיחידות גליליות קונצנטריות הנקראות מערכות הוורס (Haversian Systems / Osteons) שבמרכזן עוברים כלי דם ועצבים.'
  },
  {
    id: 'anat1_q5',
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
    explanation: 'עמ׳ 17, 35: רקמת חיבור רפה מאגדת את צרורות סיבי השריר (Fascicles) ומרפדת חללים וכלי דם.'
  },
  {
    id: 'anat1_q6',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'מאפייני חוליות הצוואר (עמ׳ 65)',
    diagramKey: 'cervical',
    questionText: 'נקב בזיזים הרוחביים (Transverse Foramen) מאפיין את חוליות:',
    hint: 'דרכו עוברים עורקי הדם אל המוח.',
    options: [
      { id: 'a', text: 'הצוואר (Cervical vertebrae)', isCorrect: true },
      { id: 'b', text: 'החזה (Thoracic)', isCorrect: false },
      { id: 'c', text: 'המותניים (Lumbar)', isCorrect: false },
      { id: 'd', text: 'הסקרום', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 65: נקב בזיזים הרוחביים ייחודי אך ורק ל-7 חוליות הצוואר (C1-C7).'
  },
  {
    id: 'anat1_q7',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'חוליית C1 אטלס (עמ׳ 65)',
    diagramKey: 'cervical',
    questionText: 'חוליה C1 (Atlas) יוצאת דופן בכך ש:',
    hint: 'האם יש לה גוף חוליה רגיל? עם מי היא נפגשת מעליה?',
    options: [
      { id: 'a', text: 'אין לה גוף והיא יוצרת מפרק עם הגולגולת (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'היא בעלת גוף ענק הנושא את משקל האגן', isCorrect: false },
      { id: 'c', text: 'היא מחוברת ישירות לעצם החזה', isCorrect: false },
      { id: 'd', text: 'אין לה קשת חוליה', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 65: חוליית C1 (אטלס) חסרת גוף חוליה וחסרת זיז אחורי בולט, והיא נושאת ישירות את הגולגולת.'
  },
  {
    id: 'anat1_q8',
    moduleId: 'anat1',
    topic: 'מפרקים',
    title: 'מפרק Atlantoaxial C1-C2 (עמ׳ 66)',
    diagramKey: 'cervical',
    questionText: 'מפרק ה-Atlantoaxial joint מאפשר את התנועה העיקרית הבאה:',
    hint: 'תנועת ה"לא" של הראש.',
    options: [
      { id: 'a', text: 'רוטציה (סיבוב ראש כ-45 מעלות לכל צד)', isCorrect: true },
      { id: 'b', text: 'כפיפה ופשיטה בלבד', isCorrect: false },
      { id: 'c', text: 'כפיפה צידית בלבד', isCorrect: false },
      { id: 'd', text: 'הרחקה וקירוב', isCorrect: false }
    ],
    explanation: 'עמ׳ 56, 66: במפרק שבין C1 ל-C2 (השן Dens של C2 בתוך קשת C1) מתבצעת תנועת הרוטציה של הראש.'
  },
  {
    id: 'anat1_q9',
    moduleId: 'anat1',
    topic: 'שלד בית החזה',
    title: 'חיבור הצלעות (עמ׳ 63, 65)',
    diagramKey: 'spine',
    questionText: 'איזה צלעות מוגדרות כ"צלעות אמיתיות" ומחוברות ישירות בעצמן לעצם החזה (Sternum)?',
    hint: 'כמה זוגות צלעות מגיעים ישירות לסטרנום מלפנים?',
    options: [
      { id: 'a', text: 'צלעות 1 עד 7', isCorrect: true },
      { id: 'b', text: 'צלעות 8 עד 10', isCorrect: false },
      { id: 'c', text: 'צלעות 11 ו-12 בלבד', isCorrect: false },
      { id: 'd', text: 'כל 24 הצלעות', isCorrect: false }
    ],
    explanation: 'עמ׳ 63: צלעות 1-7 נקראות צלעות אמיתיות כי הן מתחברות ישירות לעצם החזה; 8-10 מתחברות לצלע 7, ו-11-12 הן צלעות צפות.'
  },
  {
    id: 'anat1_q10',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'עקומות עמוד השדרה (עמ׳ 50, 65)',
    diagramKey: 'spine',
    questionText: 'כמה חוליות יש בכל עקומה בעמוד השדרה של אדם בוגר?',
    hint: '7, 12, 5, 5, 4.',
    options: [
      { id: 'a', text: '7 צוואריות, 12 חזיות, 5 מותניות, 5 בסקרום, 4 בקוקסיקס', isCorrect: true },
      { id: 'b', text: '12 צוואריות, 7 חזיות, 5 מותניות', isCorrect: false },
      { id: 'c', text: '5 צוואריות, 10 חזיות, 10 מותניות', isCorrect: false },
      { id: 'd', text: '33 חוליות מותניות בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 50: סה״כ 33 חוליות: 7 צוואריות (לורדוזה), 12 חזיות (קיפוזה), 5 מותניות (לורדוזה), 5 סקרליות מאוחות ו-4 בעצם הזנב.'
  },

  // ==========================================
  // מודול 2: אנטומיה ב' - שרירים, תחל, אחז ותנועות
  // ==========================================
  {
    id: 'anat2_q1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה (עמ׳ 124)',
    diagramKey: 'knee',
    questionText: 'מי מהשרירים הבאים נאחז (Insertion) בעצם השוקית (Fibula)?',
    hint: 'שאלה מס׳ 1 במבחן הסיכום עמ׳ 124 בחוברת משה שחר.',
    options: [
      { id: 'a', text: 'Biceps femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'מבחן וינגייט עמ׳ 124, 129: Biceps Femoris נאחז בראש הפיבולה. סמיטנדינוסוס וסמיממברנוסוס נאחזים בטיביה.'
  },
  {
    id: 'anat2_q2',
    moduleId: 'anat2',
    topic: 'שרירי הבטן',
    title: 'תפקידי שרירי הבטן (עמ׳ 124)',
    diagramKey: 'sarcomere',
    questionText: 'מי מהשרירים הבאים אינו משתתף בכפיפה (Flexion) או רוטציה של הגו?',
    hint: 'שאלה מס׳ 2 במבחן הסיכום עמ׳ 124.',
    options: [
      { id: 'a', text: 'Transversus abdominis (הרחב הבטני)', isCorrect: true },
      { id: 'b', text: 'External oblique', isCorrect: false },
      { id: 'c', text: 'Internal oblique', isCorrect: false },
      { id: 'd', text: 'Rectus abdominis', isCorrect: false }
    ],
    explanation: 'עמ׳ 96, 124: ה-Transversus Abdominis סיביו אופקיים והוא מעלה לחץ תוך-בטני ומייצב, ללא הנעת שלד בכפיפה או סיבוב.'
  },
  {
    id: 'anat2_q3',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'קירוב אופקי וסיבוב פנימי (עמ׳ 124)',
    diagramKey: 'sarcomere',
    questionText: 'התנועות קירוב אופקי (Horizontal Adduction) ורוטציה מדיאלית של הכתף מבוצעות ע״י:',
    hint: 'שאלה מס׳ 3 במבחן הסיכום עמ׳ 124.',
    options: [
      { id: 'a', text: 'Anterior deltoid (הדלתואיד הקדמי)', isCorrect: true },
      { id: 'b', text: 'Posterior deltoid', isCorrect: false },
      { id: 'c', text: 'Brachialis', isCorrect: false },
      { id: 'd', text: 'Infraspinatus', isCorrect: false }
    ],
    explanation: 'עמ׳ 81, 124: הדלתואיד הקדמי מבצע כפיפה, קירוב אופקי ורוטציה מדיאלית (פנימית) במפרק הכתף.'
  },
  {
    id: 'anat2_q4',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'שרירי מסובבי הכתף Rotator Cuff (עמ׳ 125)',
    diagramKey: 'sarcomere',
    questionText: 'מי מבין שרירי ה-Rotator Cuff של הכתף מבצע רוטציה מדיאלית (סיבוב פנימי)?',
    hint: 'שאלה מס׳ 8 בעמ׳ 125.',
    options: [
      { id: 'a', text: 'Subscapularis', isCorrect: true },
      { id: 'b', text: 'Supraspinatus', isCorrect: false },
      { id: 'c', text: 'Infraspinatus', isCorrect: false },
      { id: 'd', text: 'Teres minor', isCorrect: false }
    ],
    explanation: 'עמ׳ 85, 125: ה-Subscapularis הוא השריר הקדמי היחיד בקבוצה ונאחז ב-Lesser Tubercle ולכן מבצע רוטציה מדיאלית.'
  },
  {
    id: 'anat2_q5',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'אחז ב-Greater Trochanter (עמ׳ 125)',
    diagramKey: 'knee',
    questionText: 'ה-Greater Trochanter מהווה נקודת אחיזה (Insertion) לשריר:',
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
    id: 'anat2_q6',
    moduleId: 'anat2',
    topic: 'שרירי השוק והקרסול',
    title: 'הרמת בהונות ועמידה על עקבים (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'אתה הולך על העקבים ומרים את בהונות כף הרגל (Dorsiflexion). איזה שריר פעל?',
    hint: 'שאלה מס׳ 16 בעמ׳ 126.',
    options: [
      { id: 'a', text: 'Tibialis anterior', isCorrect: true },
      { id: 'b', text: 'Gastrocnemius', isCorrect: false },
      { id: 'c', text: 'Soleus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 122, 126: ה-Tibialis Anterior הוא המבצע העיקרי של Dorsiflexion (הרמת אצבעות כף הרגל מעלה).'
  },
  {
    id: 'anat2_q7',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'פשיטת ירך ראשית (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'פשיטת ירך (Hip Extension) בעלייה מסקוואט או עלייה במדרגות מבוצעת בעוצמה ע״י:',
    hint: 'שאלה מס׳ 17 בעמ׳ 126.',
    options: [
      { id: 'a', text: 'Gluteus maximus', isCorrect: true },
      { id: 'b', text: 'Iliopsoas', isCorrect: false },
      { id: 'c', text: 'Rectus femoris', isCorrect: false },
      { id: 'd', text: 'Vastus medialis', isCorrect: false }
    ],
    explanation: 'עמ׳ 117, 126: ה-Gluteus Maximus הוא הפושט העוצמתי ביותר של מפרק הירך כנגד התנגדות.'
  },
  {
    id: 'anat2_q8',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'תחל ואחז של Psoas Major (עמ׳ 126)',
    diagramKey: 'spine',
    questionText: 'שריר ה-Psoas Major:',
    hint: 'שאלה מס׳ 18 בעמ׳ 126.',
    options: [
      { id: 'a', text: 'מתחיל בחוליות המותניים T12-L5 ומסתיים ב-Lesser Trochanter ומבצע כפיפת ירך', isCorrect: true },
      { id: 'b', text: 'מתחיל באגן ומסתיים בטיביה', isCorrect: false },
      { id: 'c', text: 'מבצע פשיטת ברך בלבד', isCorrect: false },
      { id: 'd', text: 'נאחז ב-Greater Trochanter ומבצע פשיטת ירך', isCorrect: false }
    ],
    explanation: 'עמ׳ 116, 126: ה-Psoas Major יוצא מגופי ודיסקי חוליות T12-L5, נאחז ב-Lesser Trochanter של הפמור ומבצע כפיפת ירך חזקה.'
  },
  {
    id: 'anat2_q9',
    moduleId: 'anat2',
    topic: 'שרירי השוק',
    title: 'עלייה על קצות האצבעות (עמ׳ 126)',
    diagramKey: 'knee',
    questionText: 'עלייה על קצות האצבעות (Plantarflexion) מבוצעת בעוצמה באמצעות:',
    hint: 'שאלה מס׳ 20 בעמ׳ 126.',
    options: [
      { id: 'a', text: 'Gastrocnemius (תאומים) ו-Soleus', isCorrect: true },
      { id: 'b', text: 'Tibialis anterior', isCorrect: false },
      { id: 'c', text: 'Hamstrings', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 120-121, 126: הגסטרוקנמיוס והסולאוס מתחברים לגיד אכילס ונאחזים בעקב (Calcaneus) ומבצעים Plantarflexion.'
  },
  {
    id: 'anat2_q10',
    moduleId: 'anat2',
    topic: 'שרירי הזרוע והמרפק',
    title: 'האחז של שריר Triceps Brachii (עמ׳ 128)',
    diagramKey: 'sarcomere',
    questionText: 'שריר ה-Triceps Brachii (יד אחורית) נאחז ב:',
    hint: 'באיזה חלק של עצם ה-Ulna במרפק הוא נאחז?',
    options: [
      { id: 'a', text: 'בבליטת ה-Olecranon של עצם ה-Ulna', isCorrect: true },
      { id: 'b', text: 'ב-Radial Tuberosity של הרדיוס', isCorrect: false },
      { id: 'c', text: 'בעצם הבריח', isCorrect: false },
      { id: 'd', text: 'באצטבולום', isCorrect: false }
    ],
    explanation: 'עמ׳ 90: גיד הטריספס נאחז בזיז האולקרנון (Olecranon) של האולנה ומבצע פשיטת מרפק.'
  },

  // ==========================================
  // מודול 3: פיזיולוגיה א' - אנרגיה ומטבוליזם
  // ==========================================
  {
    id: 'phys1_q1',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מקור אנרגיה בריצת מרתון (חוברת פיזיו עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'מקורם העיקרי של מולקולות ה-ATP במהלך ריצת מרתון הוא:',
    hint: 'שאלה מס׳ 1 בעמ׳ 47 בחוברת פיזיולוגיה של וינגייט.',
    options: [
      { id: 'a', text: 'בשומנים (ובפחמימות במסלול האירובי)', isCorrect: true },
      { id: 'b', text: 'במסלול האנאירובי אלקטי בלבד', isCorrect: false },
      { id: 'c', text: 'בחלבונים בלבד', isCorrect: false },
      { id: 'd', text: 'בוויטמינים', isCorrect: false }
    ],
    explanation: 'פיזיולוגיה עמ׳ 47, 50: במאמץ אירובי ממושך מעל חצי שעה, שומנים מהווים מקור אנרגיה עיקרי במסלול האירובי (בנוכחות חמצן במיטוכונדריה).'
  },
  {
    id: 'phys1_q2',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'יעילות שומנים מול פחמימות (עמ׳ 33, 47)',
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
    id: 'phys1_q3',
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
    id: 'phys1_q4',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מאגרי גליקוגן בגוף (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'עיקר הגליקוגן בגוף האדם נאגר ב:',
    hint: 'שאלה מס׳ 7 בעמ׳ 47.',
    options: [
      { id: 'a', text: 'בשרירי השלד ובכבד', isCorrect: true },
      { id: 'b', text: 'במוח ובעצמות', isCorrect: false },
      { id: 'c', text: 'ברקמת השומן ובריאות', isCorrect: false },
      { id: 'd', text: 'בקיבה ובמעיים בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 13, 47: כ-300-400 גרם גליקוגן נאגרים בשרירי השלד ועוד כ-70-100 גרם בכבד.'
  },
  {
    id: 'phys1_q5',
    moduleId: 'phys1',
    topic: 'סף אנאירובי וצח"מ',
    title: 'יתרון סף אנאירובי גבוה (עמ׳ 48)',
    diagramKey: 'energy',
    questionText: 'בהשוואה בין שני אתלטים בעלי צח"מ (VO2max) זהה, אך סף אנאירובי שונה:',
    hint: 'שאלה מס׳ 8 בעמ׳ 48.',
    options: [
      { id: 'a', text: 'לבעל הסף האנאירובי הגבוה יותר יתרון ברור בריצת מרתון ומאמצי סיבולת', isCorrect: true },
      { id: 'b', text: 'לבעל הסף האנאירובי הנמוך יתרון בריצת מרתון', isCorrect: false },
      { id: 'c', text: 'אין כל הבדל בביצועים ביניהם', isCorrect: false },
      { id: 'd', text: 'הסף האנאירובי משפיע רק על ספרינט של 60 מטר', isCorrect: false }
    ],
    explanation: 'עמ׳ 42, 48: סף אנאירובי גבוה מאפשר להתמיד בקצב ריצה מהיר יותר לאורך זמן מבלי לצבור חומציות ולקטט.'
  },
  {
    id: 'phys1_q6',
    moduleId: 'phys1',
    topic: 'גליקוליזה ועייפות',
    title: 'השפעת חומציות על אנזים PFK (עמ׳ 48)',
    diagramKey: 'energy',
    questionText: 'עלייה בחומציות עקב הצטברות יוני מימן (H+) במאמץ עצים גורמת ל:',
    hint: 'שאלה מס׳ 13 בעמ׳ 48.',
    options: [
      { id: 'a', text: 'לירידה בפעילות האנזים המרכזי PFK ולירידה ביכולת כיווץ השריר', isCorrect: true },
      { id: 'b', text: 'לעלייה מואצת בפעילות PFK', isCorrect: false },
      { id: 'c', text: 'לחוסר שינוי בפעילות האנזימטית', isCorrect: false },
      { id: 'd', text: 'לייצור מוגבר של סידן', isCorrect: false }
    ],
    explanation: 'עמ׳ 23, 48: אנזים ה-PFK רגיש לעלייה בחומציות; נטרולו מעכב את המשך הגליקוליזה ומוביל לעייפות שרירית.'
  },
  {
    id: 'phys1_q7',
    moduleId: 'phys1',
    topic: 'התאוששות',
    title: 'הורדת חומציות לאחר מאמץ עצים (עמ׳ 49)',
    diagramKey: 'cori',
    questionText: 'מהי הדרך היעילה ביותר להורדת רמת החומציות ופינוי לקטט מהשריר לאחר מאמץ עצים?',
    hint: 'שאלה מס׳ 15 בעמ׳ 49. האם ישיבה או פעילות קלה?',
    options: [
      { id: 'a', text: 'התאוששות אקטיבית קלה (35%-50% מצח"מ, כגון ריצה קלה)', isCorrect: true },
      { id: 'b', text: 'מנוחה פסיבית בשכיבה או ישיבה מוחלטת', isCorrect: false },
      { id: 'c', text: 'ביצוע ספרינטים נוספים', isCorrect: false },
      { id: 'd', text: 'שתיית קפה מרוכזת', isCorrect: false }
    ],
    explanation: 'עמ׳ 46, 49: פעילות קלה מזרימה דם ומפנה את הלקטט ויוני המימן ללב, לכבד ולשרירים הפחות פעילים המשמשים בו כדלק.'
  },
  {
    id: 'phys1_q8',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מערכת הפוספוגנים (CrP-ATP) (עמ׳ 19, 33)',
    diagramKey: 'energy',
    questionText: 'התהליך הפוספוגני (ATP-CrP) הוא דומיננטי ביותר ב:',
    hint: 'שאלה מס׳ 7 בעמ׳ 33.',
    options: [
      { id: 'a', text: 'קפיצה לגובה או ספרינט של עד 10 שניות', isCorrect: true },
      { id: 'b', text: 'ריצת 400 מטר באולימפיאדה (כ-50 שניות)', isCorrect: false },
      { id: 'c', text: 'שיעור ספינינג של שעה', isCorrect: false },
      { id: 'd', text: 'שחיית 800 מטר', isCorrect: false }
    ],
    explanation: 'עמ׳ 19, 33: מערכת ה-ATP-CrP מספקת הספק כוח מרבי מיידי שאינו תלוי בחמצן ומספיק ל-10 שניות ראשונות.'
  },

  // ==========================================
  // מודול 4: פיזיולוגיה ב' - לב, כלי דם ונשימה
  // ==========================================
  {
    id: 'phys2_q1',
    moduleId: 'phys2',
    topic: 'מערכת הלב',
    title: 'תפוקת לב מרבית בלא מאומן (עמ׳ 73)',
    diagramKey: 'heart',
    questionText: 'תפוקת הלב (Cardiac Output) באדם לא מאומן במאמץ מרבי היא בערך:',
    hint: 'שאלה מס׳ 1 בעמ׳ 73.',
    options: [
      { id: 'a', text: '20-22 ליטר לדקה (עליה של פי 4 ממנוחה)', isCorrect: true },
      { id: 'b', text: '40 ליטר לדקה', isCorrect: false },
      { id: 'c', text: '5 ליטר לדקה בלבד', isCorrect: false },
      { id: 'd', text: '100 ליטר לדקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 65, 73: באדם לא מאומן תפוקת הלב המרבית מגיעה ל-20-22 ל/דק (פי 4 ממנוחה), בעוד אצל ספורטאי סיבולת היא עשויה להגיע ל-35-40 ל/דק.'
  },
  {
    id: 'phys2_q2',
    moduleId: 'phys2',
    topic: 'כלי דם',
    title: 'צפיפות נימי דם ואימון (עמ׳ 73)',
    diagramKey: 'heart',
    questionText: 'עלייה בצפיפות נימי הדם (Angiogenesis) סביב סיבי השריר מתרחשת בעיקר כתגובה ל:',
    hint: 'שאלה מס׳ 2 בעמ׳ 73.',
    options: [
      { id: 'a', text: 'אימון אירובי מתמשך (סבולת אירובית)', isCorrect: true },
      { id: 'b', text: 'אימון כוח מקסימלי של חזרה אחת בלבד', isCorrect: false },
      { id: 'c', text: 'מנוחה מוחלטת ללא פעילות', isCorrect: false },
      { id: 'd', text: 'צום מתמשך', isCorrect: false }
    ],
    explanation: 'עמ׳ 69, 73: אימון אירובי מעודד צמיחת נימים חדשים סביב סיבי השריר (בעיקר סביב סיבים אדומים) לשיפור אספקת החמצן.'
  },
  {
    id: 'phys2_q3',
    moduleId: 'phys2',
    topic: 'כלי דם ומחזורי הדם',
    title: 'תפקיד הוורידים ומחזורי הדם (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'מה נכון לגבי הוורידים במחזורי הדם?',
    hint: 'שאלה מס׳ 5 בעמ׳ 74. זכור: ורידי הריאה מגיעים מהריאות אל הלב.',
    options: [
      { id: 'a', text: 'במחזור הדם הקטן (ריאתי) זורם בהם דם עשיר בחמצן, אך במחזור הגדול זורם בהם דם עני בחמצן', isCorrect: true },
      { id: 'b', text: 'בכל הוורידים בגוף זורם תמיד רק דם עני בחמצן', isCorrect: false },
      { id: 'c', text: 'בוורידים זורם דם רק תחת לחץ של 200 מ״מ כספית', isCorrect: false },
      { id: 'd', text: 'הוורידים מובילים דם אך ורק מהלב אל הרקמות', isCorrect: false }
    ],
    explanation: 'עמ׳ 53, 74: ורידי הריאה מחזירים דם מחומצן מהריאות לעלייה השמאלית, בעוד הוורידים הנבובים מחזירים דם ורידי דל בחמצן מהגוף.'
  },
  {
    id: 'phys2_q4',
    moduleId: 'phys2',
    topic: 'מערכת הלב',
    title: 'מצב המסתמים בדיאסטולה (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים) של הלב:',
    hint: 'שאלה מס׳ 6 בעמ׳ 74.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים בין החדרים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'המסתמים בין החדרים לעורקים פתוחים', isCorrect: false },
      { id: 'c', text: 'כל המסתמים בלב סגורים', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'עמ׳ 55, 74: בדיאסטולה החדרים מתמלאים בדם מהעליות ולכן מסתמי העליות-חדרים פתוחים, בעוד מסתמי העורקים סגורים למניעת חזרת דם.'
  },
  {
    id: 'phys2_q5',
    moduleId: 'phys2',
    topic: 'מערכת השרירים',
    title: 'הגדרת יחידה מוטורית (עמ׳ 89)',
    diagramKey: 'sarcomere',
    questionText: 'יחידה מוטורית (Motor Unit) כוללת:',
    hint: 'שאלה מס׳ 3 ו-6 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'נוירון מוטורי אחד וכל סיבי השריר המעוצבבים על ידו', isCorrect: true },
      { id: 'b', text: 'סיב שריר אחד וכל העצבים שסביבו', isCorrect: false },
      { id: 'c', text: 'שריר שלם והעצם שאליה הוא מחובר', isCorrect: false },
      { id: 'd', text: 'כל הסרקומרים בתוך סיב בודד', isCorrect: false }
    ],
    explanation: 'עמ׳ 79, 89: יחידה מוטורית היא נוירון מוטורי יחיד וכל סיבי השריר אליהם שלוחות האקסון שלו מתחברות, הפועלים יחד לפי חוק "הכל או לא כלום".'
  },
  {
    id: 'phys2_q6',
    moduleId: 'phys2',
    topic: 'מערכת השרירים',
    title: 'חוק הכל או לא כלום (עמ׳ 79, 89)',
    diagramKey: 'sarcomere',
    questionText: 'במתן גירוי תת-סיפי (מתחת לסף העירור) לנוירון מוטורי:',
    hint: 'שאלה מס׳ 2 בעמ׳ 89.',
    options: [
      { id: 'a', text: 'אין כיווץ כלל של סיבי השריר השייכים לאותה יחידה', isCorrect: true },
      { id: 'b', text: 'כל הסיבים מתכווצים בעוצמה חלשה', isCorrect: false },
      { id: 'c', text: 'רק מחצית מהסיבים מתכווצים', isCorrect: false },
      { id: 'd', text: 'השריר נקרע', isCorrect: false }
    ],
    explanation: 'עמ׳ 79, 89: לפי חוק הכל או לא כלום, גירוי מתחת לסף אינו מייצר דחף ואין כיווץ כלל; גירוי מעל הסף מכווץ את כל הסיבים במלוא העוצמה.'
  },
  {
    id: 'phys2_q7',
    moduleId: 'phys2',
    topic: 'מערכת העצבים והשריר',
    title: 'רפלקס אברון גולג׳י GTO (עמ׳ 90)',
    diagramKey: 'sarcomere',
    questionText: 'בהפעלת רפלקס אברון הגיד ע״ש גולג׳י (Golgi Tendon Organ):',
    hint: 'שאלה מס׳ 9 בעמ׳ 90.',
    options: [
      { id: 'a', text: 'מתרחשת הרפיה רפלקסיבית של השריר בתגובה למתיחת-יתר של הגיד', isCorrect: true },
      { id: 'b', text: 'מתרחש כיווץ רפלקסיבי של השריר בתגובה למתיחה מהירה', isCorrect: false },
      { id: 'c', text: 'השריר מתקצר פי שניים', isCorrect: false },
      { id: 'd', text: 'לחץ הדם יורד לאפס', isCorrect: false }
    ],
    explanation: 'עמ׳ 87-88, 90: אברון גולג׳י יושב בצומת גיד-שריר; מתח מופרז מפעיל נוירון מקשר מעכב שמרפה את השריר ומגן עליו מקרע.'
  },
  {
    id: 'phys2_q8',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'אוורור ריאות - Ventilation (עמ׳ 103)',
    diagramKey: 'heart',
    questionText: 'נפח האוויר המוחלף בין הריאות לסביבה החיצונית בדקה מוגדר כ:',
    hint: 'שאלה מס׳ 1 בעמ׳ 103.',
    options: [
      { id: 'a', text: 'אוורור ריאות (Pulmonary Ventilation)', isCorrect: true },
      { id: 'b', text: 'הנפח המתחלף בלבד', isCorrect: false },
      { id: 'c', text: 'תפוקת הלב', isCorrect: false },
      { id: 'd', text: 'נפח שארית', isCorrect: false }
    ],
    explanation: 'עמ׳ 96, 103: אוורור ריאות הוא מכפלת הנפח המתחלף (עומק הנשימה) בתדירות הנשימות בדקה (במנוחה כ-6 ליטר/דקה).'
  },
  {
    id: 'phys2_q9',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'הורמוני הלבלב (עמ׳ 117)',
    diagramKey: 'cori',
    questionText: 'איזה הורמון מופרש מתאי בטא בלבלב בתגובה לעליית סוכר ואחראי על הכנסת הגלוקוז לתאים?',
    hint: 'שאלה מס׳ 6 בעמ׳ 117.',
    options: [
      { id: 'a', text: 'אינסולין (Insulin)', isCorrect: true },
      { id: 'b', text: 'גלוקגון (המופרש מתאי אלפא)', isCorrect: false },
      { id: 'c', text: 'קורטיזול', isCorrect: false },
      { id: 'd', text: 'אדרנלין', isCorrect: false }
    ],
    explanation: 'עמ׳ 112, 117: אינסולין מופרש מתאי בטא בלבלב במצב שובע, נקשר לקולטנים ופותח תעלות להכנסת גלוקוז לשריר, לכבד ולשומן.'
  },
  {
    id: 'phys2_q10',
    moduleId: 'phys2',
    topic: 'מערכת החיסון',
    title: 'תאי בליעה פגוציטים (עמ׳ 124)',
    diagramKey: 'cori',
    questionText: 'מי מבין תאי הדם הלבנים הבאים פועל כ"פגוציט" (בולע גורמים זרים בתגובה הדלקתית)?',
    hint: 'שאלה מס׳ 1 בעמ׳ 124.',
    options: [
      { id: 'a', text: 'נויטרופילים ומאקרופאגים (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'לימפוציטים מסוג B בלבד', isCorrect: false },
      { id: 'c', text: 'תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'טסיות דם', isCorrect: false }
    ],
    explanation: 'עמ׳ 120, 124: נויטרופילים ומונוציטים/מאקרופאגים הם תאים בולעניים המהווים את קו ההגנה השני בתגובה הדלקתית.'
  }
];
