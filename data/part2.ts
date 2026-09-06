/* eslint-disable */
// @ts-nocheck

export const PART2_ANATOMY2 = [
  {
    id: 'a2_1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה (עמ׳ 124)',
    diagram: 'knee',
    questionText: 'מי מהשרירים הבאים נאחז (Insertion) בעצם השוקית (Fibula)?',
    hint: 'הפיבולה היא העצם החיצונית של השוק. איזה שריר מהירך האחורית פונה החוצה לצד הלטרלי בתרשים?',
    options: [
      { id: 'a', text: 'Biceps femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 124, 129: ה-Biceps Femoris יורד בצד הלטרלי ונאחז בראש הפיבולה, בעוד שני שרירי ה"סמי" נאחזים בטיביה.'
  },
  {
    id: 'a2_2',
    moduleId: 'anat2',
    topic: 'שרירי הבטן',
    title: 'שריר שלא מניע גו (עמ׳ 124)',
    diagram: 'sarcomere',
    questionText: 'מי מהשרירים הבאים אינו משתתף בכפיפה (Flexion) או רוטציה של הגו?',
    hint: 'חשוב על חגורת גב רחבה שהסיבים שלה רצים לרוחב (Transverse): היא יכולה רק להדק את הבטן, לא לכופף אותך.',
    options: [
      { id: 'a', text: 'Transversus abdominis (הרחב הבטני)', isCorrect: true },
      { id: 'b', text: 'External oblique', isCorrect: false },
      { id: 'c', text: 'Internal oblique', isCorrect: false },
      { id: 'd', text: 'Rectus abdominis', isCorrect: false }
    ],
    explanation: 'עמ׳ 96, 124: שריר הרחב הבטני (Transversus Abdominis) סיביו אופקיים לחלוטין ולכן תפקידו לייצב ולהעלות לחץ תוך-בטני.'
  },
  {
    id: 'a2_3',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'קירוב אופקי ורוטציה פנימית (עמ׳ 124)',
    diagram: 'deltoid',
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
    title: 'מסובבי הכתף Rotator Cuff (עמ׳ 125)',
    diagram: 'deltoid',
    questionText: 'מי מבין מייצבי הכתף (Rotator Cuff) מבצע רוטציה מדיאלית (פנימית)?',
    hint: 'כל שרירי השרוול יושבים מאחורי השכמה מלבד אחד בלבד שמתחבא מקדימה, מתחת (Sub) לשכמה.',
    options: [
      { id: 'a', text: 'Subscapularis', isCorrect: true },
      { id: 'b', text: 'Supraspinatus', isCorrect: false },
      { id: 'c', text: 'Infraspinatus', isCorrect: false },
      { id: 'd', text: 'Teres minor', isCorrect: false }
    ],
    explanation: 'עמ׳ 85, 125: ה-Subscapularis יושב בחלק הקדמי של השכמה ונאחז ב-Lesser Tubercle מקדימה, ולכן הוא היחיד שמסובב פנימה.'
  },
  {
    id: 'a2_5',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'פשיטת ירך ראשית (עמ׳ 126)',
    diagram: 'quadriceps',
    questionText: 'פשיטת ירך (Hip Extension) בעלייה מסקוואט או עלייה במדרגות מבוצעת בעוצמה ע״י:',
    hint: 'זהו השריר בעל המסה הגדולה והחזקה ביותר בישבן של האדם ההולך על שתיים.',
    options: [
      { id: 'a', text: 'Gluteus maximus', isCorrect: true },
      { id: 'b', text: 'Iliopsoas', isCorrect: false },
      { id: 'c', text: 'Rectus femoris', isCorrect: false },
      { id: 'd', text: 'Vastus medialis', isCorrect: false }
    ],
    explanation: 'עמ׳ 117, 126: ה-Gluteus Maximus הוא הפושט הראשי והחזק ביותר של מפרק הירך, הנכנס לפעולה מסיבית כנגד עומס.'
  },
  {
    id: 'a2_6',
    moduleId: 'anat2',
    topic: 'שרירי השוק',
    title: 'עלייה על קצות האצבעות (עמ׳ 126)',
    diagram: 'achilles',
    questionText: 'עלייה על קצות האצבעות (Plantarflexion) מבוצעת באמצעות:',
    hint: 'השרירים שמתחברים לחבל הביולוגי העבה ביותר בגוף – גיד אכילס שמושך את העקב למעלה.',
    options: [
      { id: 'a', text: 'Gastrocnemius (תאומים) ו-Soleus', isCorrect: true },
      { id: 'b', text: 'Tibialis anterior', isCorrect: false },
      { id: 'c', text: 'Hamstrings', isCorrect: false },
      { id: 'd', text: 'Quadriceps', isCorrect: false }
    ],
    explanation: 'עמ׳ 120, 126: הגסטרוקנמיוס והסולאוס מתחברים לגיד אכילס שנאחז בעצם העקב (Calcaneus) ומרימים את הגוף לעמידה על קצות האצבעות.'
  },
  {
    id: 'a2_7',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'השריר הדו-מפרקי בארבע-ראשי (עמ׳ 107)',
    diagram: 'quadriceps',
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
    id: 'a2_8',
    moduleId: 'anat2',
    topic: 'שרירי הגב העמוקים',
    title: 'זוקפי עמוד השדרה Erector Spinae (עמ׳ 98)',
    diagram: 'spine_curves',
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
  {
    id: 'a2_9',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'שריר שאינו מבצע רוטציה מדיאלית (עמ׳ 124)',
    diagram: 'deltoid',
    questionText: 'מי מהשרירים הבאים אינו מבצע רוטציה מדיאלית (סיבוב פנימי) של הכתף?',
    hint: 'זכור את צמד האחים שמסובבים את הזרוע החוצה: אינפראספינטוס וחברו הקטן "מינור".',
    options: [
      { id: 'a', text: 'Teres minor (מבצע רוטציה לטרלית/חיצונית)', isCorrect: true },
      { id: 'b', text: 'Teres major', isCorrect: false },
      { id: 'c', text: 'Anterior deltoid', isCorrect: false },
      { id: 'd', text: 'Latissimus dorsi', isCorrect: false }
    ],
    explanation: 'עמ׳ 85, 124: ה-Teres Minor ממוקם מאחור ונאחז בחלק האחורי של ה-Greater Tubercle ולכן מושך את הזרוע לרוטציה לטרלית.'
  },
  {
    id: 'a2_10',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'אחז ב-Greater Trochanter (עמ׳ 125)',
    diagram: 'knee',
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
    id: 'a2_11',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'תחל בעצם ה-Femur (עמ׳ 125)',
    diagram: 'quadriceps',
    questionText: 'מי מהשרירים הבאים מתחיל (Origin) מעצם הירך (Femur)?',
    hint: 'שלושת ה"וואסטוסים" מתחילים בירך עצמה. הרקטוס (הישר) לעומתם חייב לעלות עד לעצם האגן.',
    options: [
      { id: 'a', text: 'Vastus intermedius', isCorrect: true },
      { id: 'b', text: 'Rectus femoris (מתחיל באגן ב-AIIS)', isCorrect: false },
      { id: 'c', text: 'Iliopsoas', isCorrect: false },
      { id: 'd', text: 'Semitendinosus', isCorrect: false }
    ],
    explanation: 'עמ׳ 108, 125: שלושת ראשי ה-Vastus מתחילים ישירות על גבי הפמור, בעוד הרקטוס פמוריס מתחיל באגן.'
  },
  {
    id: 'a2_12',
    moduleId: 'anat2',
    topic: 'שרירי הקרסול',
    title: 'הרמת בהונות ועמידה על עקבים (עמ׳ 126)',
    diagram: 'knee',
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
    id: 'a2_13',
    moduleId: 'anat2',
    topic: 'שרירי השכמה',
    title: 'שריר המסור הקדמי Serratus Anterior (עמ׳ 87)',
    diagram: 'deltoid',
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
    topic: 'שרירי הזרוע',
    title: 'שריר ה-Brachialis (עמ׳ 89)',
    diagram: 'sarcomere',
    questionText: 'שריר ה-Brachialis נקרא "סוס העבודה" של כפיפת המרפק משום ש:',
    hint: 'הוא נאחז באולנה (שאינה מסתובבת). האם אכפת לו אם כף היד בפרונציה או בסופינציה?',
    options: [
      { id: 'a', text: 'הוא מכופף את המרפק באותה עוצמה בכל מצב של כף היד (אינו תלוי בסיבוב האמה)', isCorrect: true },
      { id: 'b', text: 'הוא מיישר את המרפק לאחור', isCorrect: false },
      { id: 'c', text: 'הוא שריר של הגב התחתון', isCorrect: false },
      { id: 'd', text: 'הוא פועל רק בזמן שינה', isCorrect: false }
    ],
    explanation: 'מכיוון שהברכיאליס נאחז באולנה הקבועה, הוא מכופף מרפק טהור שפועל במלוא העוצמה בכל מנח אחיזה.'
  },
  {
    id: 'a2_15',
    moduleId: 'anat2',
    topic: 'שרירי הזרוע',
    title: 'האחז של Biceps Brachii (עמ׳ 128)',
    diagram: 'sarcomere',
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
    id: 'a2_16',
    moduleId: 'anat2',
    topic: 'שרירי השכמה והזרוע',
    title: 'תחל משותף ב-Coracoid Process (עמ׳ 70, 124)',
    diagram: 'deltoid',
    questionText: 'לאיזה זוג שרירים יש תחל (Origin) משותף בזיז ה-Coracoid של השכמה?',
    hint: 'זיז מקור העורב בקדמת השכמה שמשמש נקודת מוצא לשני שרירי זרוע קדמיים.',
    options: [
      { id: 'a', text: 'הראש הקצר של Biceps Brachii ושריר ה-Coracobrachialis', isCorrect: true },
      { id: 'b', text: 'הראש הארוך של ה-Biceps ושריר ה-Triceps', isCorrect: false },
      { id: 'c', text: 'Deltoid ו-Trapezius', isCorrect: false },
      { id: 'd', text: 'Brachialis ו-Brachioradialis', isCorrect: false }
    ],
    explanation: 'עמ׳ 70, 88-89: זיז הקורקואיד (Coracoid process) משמש תחל לראש הקצר של הבייספס ולשריר הקורקובראכיאליס.'
  },
  {
    id: 'a2_17',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'פשיטת כתף ע״י ראש ארוך של טריספס (עמ׳ 127)',
    diagram: 'deltoid',
    questionText: 'פשיטת כתף (Shoulder Extension) תתבצע ע״י איזה שריר זרוע?',
    hint: 'הראש היחיד מבין שלושת ראשי פושט המרפק שחוצה גם את מפרק הכתף ומגיע עד לשכמה.',
    options: [
      { id: 'a', text: 'Long head of triceps (הראש הארוך של ה-Triceps Brachii)', isCorrect: true },
      { id: 'b', text: 'Long head of biceps', isCorrect: false },
      { id: 'c', text: 'Upper pectoralis', isCorrect: false },
      { id: 'd', text: 'Anterior deltoid', isCorrect: false }
    ],
    explanation: 'עמ׳ 90, 127: הראש הארוך של הטריספס מתחיל בשכמה (Infraglenoid tubercle) וחוצה את הכתף ולכן מבצע פשיטת כתף.'
  },
  {
    id: 'a2_18',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'שריר בחלק האחורי של הירך (עמ׳ 128)',
    diagram: 'knee',
    questionText: 'בחלק האחורי של עצם הירך נמצא השריר:',
    hint: 'אחד משלושת שרירי ה-Hamstrings המכופפים את הברך ופושטים את הירך.',
    options: [
      { id: 'a', text: 'Semitendinosus (מקבוצת ההמסטרינגס)', isCorrect: true },
      { id: 'b', text: 'Transversus abdominis', isCorrect: false },
      { id: 'c', text: 'Gluteus minimus', isCorrect: false },
      { id: 'd', text: 'Rectus femoris', isCorrect: false }
    ],
    explanation: 'עמ׳ 109, 128: ה-Semitendinosus נמצא במדור האחורי של הירך יחד עם Semimembranosus ו-Biceps Femoris.'
  },
  {
    id: 'a2_19',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'הרחקה אופקית של הכתף (עמ׳ 128)',
    diagram: 'deltoid',
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
    id: 'a2_20',
    moduleId: 'anat2',
    topic: 'שרירי השכמה',
    title: 'צמד כוחות בסיבוב שכמה (עמ׳ 78)',
    diagram: 'deltoid',
    questionText: 'איזה שריר עובד כ"צמד כוחות" (Couple Force) לביצוע סיבוב מעלה של השכמה יחד עם הסרטוס?',
    hint: 'שריר בצורת יהלום בגב העליון שחלקו העליון מושך מעלה וחלקו התחתון מושך מטה.',
    options: [
      { id: 'a', text: 'שריר הטרפז (Trapezius) - חלק עליון ותחתון יחד', isCorrect: true },
      { id: 'b', text: 'הרומבואידים בלבד', isCorrect: false },
      { id: 'c', text: 'הישר הבטני', isCorrect: false },
      { id: 'd', text: 'הדלתואיד האחורי', isCorrect: false }
    ],
    explanation: 'עמ׳ 78: הסיבים העליונים של הטרפז מושכים מעלה והתחתונים מושכים מטה, ויחד עם הסרטוס מסובבים את השכמה מעלה בעת הרמת היד מעל הראש.'
  }
];
