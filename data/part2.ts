/* eslint-disable */
// @ts-nocheck

export const PART2_ANATOMY2 = [
  {
    id: 'a2_1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה (עמ׳ 124)',
    diagram: 'knee_fibula',
    imageUrl: '/images/hamstrings.png',
    questionText: 'מי מהשרירים הבאים נאחז (Insertion) בעצם השוקית (Fibula)?',
    hint: 'התבונן בתמונה: החץ השחור התחתון מצביע על ה-Biceps Femoris היורד לראש הפיבולה בצד החיצוני.',
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
    imageUrl: '/images/transversus_abdominis.png',
    questionText: 'מי מהשרירים הבאים אינו משתתף בכפיפה (Flexion) או רוטציה של הגו?',
    hint: 'התבונן בתמונה הירוקה: הסיבים של ה-Transversus Abdominis אופקיים לחלוטין ולכן מהדקים את הבטן ללא הנעת גו.',
    options: [
      { id: 'a', text: 'Transversus abdominis (הרחב הבטני)', isCorrect: true },
      { id: 'b', text: 'External oblique', isCorrect: false },
      { id: 'c', text: 'Internal oblique', isCorrect: false },
      { id: 'd', text: 'Rectus abdominis', isCorrect: false }
    ],
    explanation: 'עמ׳ 96, 124: שריר הרחב הבטני (Transversus Abdominis) סיביו אופקיים לחלוטין ולכן תפקידו לייצב ולהעלות לחץ תוך-בטני.'
  },
  {
    id: 'a2_2b',
    moduleId: 'anat2',
    topic: 'שרירי הבטן',
    title: 'שרירי הבטן האלכסוניים (עמ׳ 94-95)',
    diagram: 'sarcomere',
    imageUrl: '/images/external_oblique.png',
    questionText: 'שריר ה-External Oblique (האלכסון החיצוני) ושריר ה-Internal Oblique בכיווץ חד-צדדי משתתפים בעיקר ב:',
    hint: 'התבונן בסיבי השריר הירוקים באלכסון: הם אחראים על רוטציה (פיתול) וכפיפה צידית של הגו.',
    options: [
      { id: 'a', text: 'רוטציה וכפיפה צידית של עמוד השדרה', isCorrect: true },
      { id: 'b', text: 'פשיטת גב מלאה לאחור', isCorrect: false },
      { id: 'c', text: 'כפיפת ברכיים', isCorrect: false },
      { id: 'd', text: 'הרחקה אופקית של הכתף', isCorrect: false }
    ],
    explanation: 'עמ׳ 94-95: האלכסונים הבטניים פועלים יחד לביצוע תנועות פיתול וכפיפה צידית ומייצבים את קיר הבטן.'
  },
  {
    id: 'a2_2c',
    moduleId: 'anat2',
    topic: 'שרירי הבטן',
    title: 'שריר הבטן האלכסוני הפנימי (עמ׳ 95)',
    diagram: 'sarcomere',
    imageUrl: '/images/internal_oblique.jpeg',
    questionText: 'שריר ה-Internal Abdominal Oblique (האלכסון הפנימי) ממוקם עמוק לאלכסון החיצוני וסיביו פונים:',
    hint: 'התבונן בתמונה: הסיבים הירוקים עולים מלמטה למעלה באלכסון (כמו ידיים בכיסים הפוכים).',
    options: [
      { id: 'a', text: 'מלמטה למעלה ובאלכסון לעבר הצלעות וה-Linea Alba', isCorrect: true },
      { id: 'b', text: 'אופקית לחלוטין כמו חגורה', isCorrect: false },
      { id: 'c', text: 'אנכית ישרה כמו הרקטוס', isCorrect: false },
      { id: 'd', text: 'סביב עצם הירך בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 95: סיבי ה-Internal Oblique יוצאים מה-Iliac crest ומהפאשיה המותנית ועולים מעלה ומדיאלית.'
  },
  {
    id: 'a2_3',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'קירוב אופקי ורוטציה פנימית (עמ׳ 124)',
    diagram: 'deltoid',
    imageUrl: '/images/deltoid.jpeg',
    questionText: 'התנועות קירוב אופקי (Horizontal Adduction) ורוטציה מדיאלית של הכתף מבוצעות ע״י:',
    hint: 'התבונן בתמונה: החץ העליון מצביע על הסיבים הקדמיים של הדלתואיד היוצאים מעצם הבריח.',
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
    diagram: 'rotator_cuff',
    imageUrl: '/images/subscapularis.jpeg',
    questionText: 'מי מבין מייצבי הכתף (Rotator Cuff) מבצע רוטציה מדיאלית (פנימית)?',
    hint: 'התבונן בתמונה: השריר שיושב בחלק הקדמי של השכמה ונאחז ב-Lesser Tubercle מקדימה.',
    options: [
      { id: 'a', text: 'Subscapularis', isCorrect: true },
      { id: 'b', text: 'Supraspinatus', isCorrect: false },
      { id: 'c', text: 'Infraspinatus', isCorrect: false },
      { id: 'd', text: 'Teres minor', isCorrect: false }
    ],
    explanation: 'עמ׳ 85, 125: ה-Subscapularis יושב בחלק הקדמי של השכמה ונאחז ב-Lesser Tubercle מקדימה, ולכן הוא היחיד שמסובב פנימה.'
  },
  {
    id: 'a2_4b',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'שריר ה-Supraspinatus (עמ׳ 83-85)',
    diagram: 'rotator_cuff',
    imageUrl: '/images/supraspinatus.jpeg',
    questionText: 'שריר ה-Supraspinatus משרוול המסובבים אחראי בעיקר על:',
    hint: 'התבונן בתמונה: השריר יושב מעל הספיין של השכמה ונאחז ב-Greater Tubercle, ומסייע לפתוח את תנועת ההרחקה (Abduction).',
    options: [
      { id: 'a', text: 'סיוע לדלתואיד בהרחקת הזרוע (30 מעלות ראשונות) וקיבוע ראש ההומרוס', isCorrect: true },
      { id: 'b', text: 'קירוב אופקי חזק של הזרוע', isCorrect: false },
      { id: 'c', text: 'פשיטת מרפק', isCorrect: false },
      { id: 'd', text: 'סופינציה של האמה', isCorrect: false }
    ],
    explanation: 'עמ׳ 83-85: הסופראספינטוס מתחיל ב-Supraspinous fossa ויוזם את הרחקת הזרוע לצד קיבוע ראש ההומרוס בשקע הגלנואיד.'
  },
  {
    id: 'a2_4c',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'שריר ה-Infraspinatus (עמ׳ 84-85)',
    diagram: 'rotator_cuff',
    imageUrl: '/images/infraspinatus.jpeg',
    questionText: 'שריר ה-Infraspinatus (הצבוע בירוק בתמונה) מבצע במפרק הכתף:',
    hint: 'התבונן בתמונה: השריר ממלא את החלק האחורי של השכמה ומסובב את הזרוע החוצה (רוטציה חיצונית).',
    options: [
      { id: 'a', text: 'רוטציה לטרלית (חיצונית) של הכתף וייצוב המפרק', isCorrect: true },
      { id: 'b', text: 'רוטציה מדיאלית (פנימית) בלבד', isCorrect: false },
      { id: 'c', text: 'כפיפת מרפק מלאה', isCorrect: false },
      { id: 'd', text: 'הורדת השכמה בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 84-85: האינפראספינטוס ממלא את ה-Infraspinous fossa ונאחז ב-Greater Tubercle לסיבוב חיצוני של הזרוע.'
  },
  {
    id: 'a2_5',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'פשיטת ירך ראשית (עמ׳ 126)',
    diagram: 'gluteus',
    imageUrl: '/images/gluteus.jpeg',
    questionText: 'פשיטת ירך (Hip Extension) בעלייה מסקוואט או עלייה במדרגות מבוצעת בעוצמה ע״י:',
    hint: 'התבונן בתמונה: השריר האדום הגדול (Gluteus Maximus) שמכסה את מרבית הישבן.',
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
    diagram: 'calves',
    questionText: 'עלייה על קצות האצבעות (Plantarflexion) מבוצעת באמצעות:',
    hint: 'השרירים שמתחברים לחבל הביולוגי העבה ביותר בגוף – גיד אכילס שמושך את העקב למעלה בתרשים.',
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
    imageUrl: '/images/rectus_femoris.png',
    questionText: 'מי מבין ארבעת ראשי ה-Quadriceps הוא שריר דו-מפרקי החוצה גם את מפרק הירך וגם את הברך?',
    hint: 'התבונן בתמונה: השריר הצבוע בירוק (Rectus Femoris) שעולה עד לעצם האגן ב-AIIS.',
    options: [
      { id: 'a', text: 'Rectus Femoris (הישר הירכי)', isCorrect: true },
      { id: 'b', text: 'Vastus Lateralis', isCorrect: false },
      { id: 'c', text: 'Vastus Medialis', isCorrect: false },
      { id: 'd', text: 'Vastus Intermedius', isCorrect: false }
    ],
    explanation: 'עמ׳ 107: הרקטוס פמוריס הוא היחיד מהארבעה שיוצא מעצם האגן ולכן משתתף בכפיפת ירך בנוסף לפשיטת ברך.'
  },
  {
    id: 'a2_7b',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'קבוצת הארבע-ראשי Quadriceps (עמ׳ 107-108)',
    diagram: 'quadriceps',
    imageUrl: '/images/quadriceps.jpeg',
    questionText: 'מהו התפקיד המשותף של כל ארבעת ראשי ה-Quadriceps Femoris?',
    hint: 'התבונן בתמונה: ארבעת הראשים מתאחדים לגיד משותף העובר מעל הפיקה ונאחז ב-Tibial Tuberosity.',
    options: [
      { id: 'a', text: 'פשיטת מפרק הברך (Knee Extension)', isCorrect: true },
      { id: 'b', text: 'כפיפת מפרק הברך', isCorrect: false },
      { id: 'c', text: 'סיבוב חיצוני של כף הרגל', isCorrect: false },
      { id: 'd', text: 'קירוב ירך בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 107-108: כל ארבעת הראשים (רקטוס ושלושת הוואסטוסים) פושטים בעוצמה את מפרק הברך.'
  },
  {
    id: 'a2_8',
    moduleId: 'anat2',
    topic: 'שרירי הגב העמוקים',
    title: 'זוקפי עמוד השדרה Erector Spinae (עמ׳ 98)',
    diagram: 'spine_curves',
    imageUrl: '/images/erector_spinae.jpeg',
    questionText: 'קבוצת שרירי ה-Erector Spinae כוללת שלושה שרירי אורך מלטראל למדיאל:',
    hint: 'התבונן בשלושת עמודי השריר שבתמונה: איליו-קוסטליס, לונגיסימוס וספינליס.',
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
    diagram: 'rotator_cuff',
    imageUrl: '/images/teres_minor.jpeg',
    questionText: 'מי מהשרירים הבאים אינו מבצע רוטציה מדיאלית (סיבוב פנימי) של הכתף?',
    hint: 'התבונן בתמונה: השריר הירוק (Teres Minor) ממוקם מאחור ונאחז בחלק האחורי של ה-Greater Tubercle.',
    options: [
      { id: 'a', text: 'Teres minor (מבצע רוטציה לטרלית/חיצונית)', isCorrect: true },
      { id: 'b', text: 'Teres major', isCorrect: false },
      { id: 'c', text: 'Anterior deltoid', isCorrect: false },
      { id: 'd', text: 'Latissimus dorsi', isCorrect: false }
    ],
    explanation: 'עמ׳ 85, 124: ה-Teres Minor ממוקם מאחור ונאחז בחלק האחורי של ה-Greater Tubercle ולכן מושך את הזרוע לרוטציה לטרלית.'
  },
  {
    id: 'a2_9b',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'שריר ה-Teres Major (עמ׳ 86)',
    diagram: 'deltoid',
    imageUrl: '/images/teres_major.jpeg',
    questionText: 'בניגוד ל-Teres Minor, שריר ה-Teres Major (הצבוע בירוק בתמונה) מבצע בזרוע:',
    hint: 'התבונן בתמונה: השריר יוצא מה-Inferior Angle של השכמה ונאחז בקדמת ההומרוס, ולכן מבצע רוטציה פנימית וקירוב.',
    options: [
      { id: 'a', text: 'רוטציה מדיאלית (פנימית), קירוב ופשיטה של הזרוע', isCorrect: true },
      { id: 'b', text: 'רוטציה לטרלית (חיצונית) בלבד', isCorrect: false },
      { id: 'c', text: 'הרחקת זרוע מעל הראש', isCorrect: false },
      { id: 'd', text: 'כפיפת מרפק', isCorrect: false }
    ],
    explanation: 'עמ׳ 86: ה-Teres Major פועל יחד עם ה-Latissimus Dorsi ומבצע קירוב, פשיטה ורוטציה פנימית של הכתף.'
  },
  {
    id: 'a2_10',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'אחז ב-Greater Trochanter (עמ׳ 125)',
    diagram: 'gluteus',
    imageUrl: '/images/gluteus.jpeg',
    questionText: 'ה-Greater Trochanter של הפמור מהווה נקודת אחיזה (Insertion) לשריר:',
    hint: 'התבונן בתמונה: השריר הירוק (Gluteus Medius) שיורד ונאחז בבליטה הגדולה של עצם הירך.',
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
    imageUrl: '/images/quadriceps.jpeg',
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
    diagram: 'tibialis',
    questionText: 'אתה הולך על העקבים ומרים את בהונות כף הרגל מעלה (Dorsiflexion). איזה שריר פועל?',
    hint: 'התבונן בתרשים: שריר שנמצא בקדמת השוק לאורך הטיביה ומבצע הרמת בהונות.',
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
    imageUrl: '/images/serratus_anterior.png',
    questionText: 'שריר ה-Serratus Anterior (המסור הקדמי) מצמיד את השכמה לצלעות. חולשה שלו גורמת ל:',
    hint: 'התבונן בתמונה: שיני המסור האדומות שמחזיקות את השכמה צמודה לבית החזה.',
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
    diagram: 'arm_muscles',
    imageUrl: '/images/brachialis.jpeg',
    questionText: 'שריר ה-Brachialis נקרא "סוס העבודה" של כפיפת המרפק משום ש:',
    hint: 'התבונן בחץ הכחול: הברכיאליס נאחז באולנה (Ulnar Tuberosity), שאינה מסתובבת לעולם.',
    options: [
      { id: 'a', text: 'הוא מכופף את המרפק באותה עוצמה בכל מצב של כף היד (אינו תלוי בסיבוב האמה)', isCorrect: true },
      { id: 'b', text: 'הוא מיישר את המרפק לאחור', isCorrect: false },
      { id: 'c', text: 'הוא שריר של הגב התחתון', isCorrect: false },
      { id: 'd', text: 'הוא פועל רק בזמן שינה', isCorrect: false }
    ],
    explanation: 'מכיוון שהברכיאליס נאחז באולנה הקבועה, הוא מכופף מרפק טהור שפועל במלוא העוצמה בכל מנח אחיזה.'
  },
  {
    id: 'a2_14b',
    moduleId: 'anat2',
    topic: 'שרירי האמה',
    title: 'שריר ה-Brachioradialis (עמ׳ 91)',
    diagram: 'arm_muscles',
    imageUrl: '/images/brachioradialis.jpeg',
    questionText: 'שריר ה-Brachioradialis (הצבוע בירוק בתמונה) פועל בעוצמה מרבית בכפיפת מרפק כאשר מנח כף היד הוא:',
    hint: 'התבונן בתמונה: השריר רץ לאורך הצד החיצוני של האמה, ופועל בעיקר באחיזת אמצע (Mid-position / פטישים).',
    options: [
      { id: 'a', text: 'מצב אמצע (Mid-position / אחיזת פטישים בין סופינציה לפרונציה)', isCorrect: true },
      { id: 'b', text: 'סופינציה מלאה בלבד', isCorrect: false },
      { id: 'c', text: 'פרונציה מלאה בלבד', isCorrect: false },
      { id: 'd', text: 'בפשיטת מרפק בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 91: הברכיורדיאליס יוצא מה-Lateral supracondylar ridge של ההומרוס ונאחז בקצה הרדיוס, ומכופף מרפק במנח ניטרלי.'
  },
  {
    id: 'a2_15',
    moduleId: 'anat2',
    topic: 'שרירי הזרוע',
    title: 'האחז של Biceps Brachii (עמ׳ 128)',
    diagram: 'arm_muscles',
    imageUrl: '/images/biceps_brachii.jpeg',
    questionText: 'מי מבין השרירים הבאים אינו מחובר לעצם ה-Ulna באמה?',
    hint: 'התבונן בתמונה: גיד ה-Biceps יורד ונאחז ברדיוס (Radial Tuberosity) כדי לסובב אותה בסופינציה.',
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
    diagram: 'arm_muscles',
    imageUrl: '/images/coracobrachialis.jpeg',
    questionText: 'לאיזה זוג שרירים יש תחל (Origin) משותף בזיז ה-Coracoid של השכמה?',
    hint: 'התבונן בתמונה: השריר האדום (Coracobrachialis) יוצא מזיז הקורקואיד יחד עם הראש הקצר של הבייספס.',
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
    diagram: 'arm_muscles',
    imageUrl: '/images/triceps_brachii.png',
    questionText: 'פשיטת כתף (Shoulder Extension) תתבצע ע״י איזה שריר זרוע?',
    hint: 'התבונן בחץ השחור שבתמונה: הראש הארוך שעולה מעלה עד לעצם השכמה.',
    options: [
      { id: 'a', text: 'Long head of triceps (הראש הארוך של ה-Triceps Brachii)', isCorrect: true },
      { id: 'b', text: 'Long head of biceps', isCorrect: false },
      { id: 'c', text: 'Upper pectoralis', isCorrect: false },
      { id: 'd', text: 'Anterior deltoid', isCorrect: false }
    ],
    explanation: 'עמ׳ 90, 127: הראש הארוך של הטריספס מתחיל בשכמה (Infraglenoid tubercle) וחוצה את הכתף ולכן מבצע פשיטת כתף.'
  },
  {
    id: 'a2_17b',
    moduleId: 'anat2',
    topic: 'שרירי הזרוע והמרפק',
    title: 'האחז של שריר הטריספס באולקרנון (עמ׳ 73, 90)',
    diagram: 'arm_muscles',
    imageUrl: '/images/olecranon.png',
    questionText: 'באיזה מבנה גרמי באולנה נאחז שריר ה-Triceps Brachii (שפגיעתו נראית בכחול בתמונה)?',
    hint: 'התבונן בחץ הכחול שבתמונה: בליטת המרפק האחורית של האולנה (Olecranon).',
    options: [
      { id: 'a', text: 'Olecranon process של עצם ה-Ulna', isCorrect: true },
      { id: 'b', text: 'Radial Tuberosity של הרדיוס', isCorrect: false },
      { id: 'c', text: 'Lesser Trochanter', isCorrect: false },
      { id: 'd', text: 'Acromion של השכמה', isCorrect: false }
    ],
    explanation: 'עמ׳ 73, 90: שריר הטריספס נאחז ישירות באולקרנון של האולנה ומהווה את הפושט הראשי של המרפק.'
  },
  {
    id: 'a2_18',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'שריר בחלק האחורי של הירך (עמ׳ 128)',
    diagram: 'hamstrings',
    imageUrl: '/images/hamstrings.png',
    questionText: 'בחלק האחורי של עצם הירך נמצא השריר:',
    hint: 'התבונן בתמונה: קבוצת ההמסטרינגס האחורית הכוללת את ה-Semitendinosus בכחול.',
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
    imageUrl: '/images/deltoid.jpeg',
    questionText: 'הרחקה אופקית (Horizontal Abduction) של הכתף מבוצעת ע״י:',
    hint: 'התבונן בחץ השחור שבתמונה: הסיבים האחוריים שמושכים את הזרוע לאחור.',
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
    imageUrl: '/images/trapezius.png',
    questionText: 'איזה שריר עובד כ"צמד כוחות" (Couple Force) לביצוע סיבוב מעלה של השכמה יחד עם הסרטוס?',
    hint: 'התבונן בתמונה הצבעונית: חלק עליון כתום מושך מעלה, חלק תחתון סגול מושך מטה.',
    options: [
      { id: 'a', text: 'שריר הטרפז (Trapezius) - חלק עליון ותחתון יחד', isCorrect: true },
      { id: 'b', text: 'הרומבואידים בלבד', isCorrect: false },
      { id: 'c', text: 'הישר הבטני', isCorrect: false },
      { id: 'd', text: 'הדלתואיד האחורי', isCorrect: false }
    ],
    explanation: 'עמ׳ 78: הסיבים העליונים של הטרפז מושכים מעלה והתחתונים מושכים מטה, ויחד עם הסרטוס מסובבים את השכמה מעלה בעת הרמת היד מעל הראש.'
  },
  {
    id: 'a2_21',
    moduleId: 'anat2',
    topic: 'שרירי הירך והאגן',
    title: 'כופף הירך העוצמתי ביותר Iliopsoas (עמ׳ 116)',
    diagram: 'knee_fibula',
    imageUrl: '/images/iliopsoas.jpeg',
    questionText: 'שריר ה-Iliopsoas (המותן-כסל) הוא כופף הירך החזק ביותר ונאחז ב:',
    hint: 'התבונן בתמונה: שני השרירים הירוקים מתאחדים ונאחזים בבליטה הקטנה של עצם הירך (Lesser Trochanter).',
    options: [
      { id: 'a', text: 'Lesser Trochanter של עצם הירך', isCorrect: true },
      { id: 'b', text: 'Greater Trochanter', isCorrect: false },
      { id: 'c', text: 'הפיקה (Patella)', isCorrect: false },
      { id: 'd', text: 'ראש הפיבולה', isCorrect: false }
    ],
    explanation: 'עמ׳ 116: שריר הפסואס מגזע הגו והאיליאקוס מהאגן מתאחדים ונאחזים ב-Lesser Trochanter של הירך לכפיפה חזקה.'
  },
  {
    id: 'a2_22',
    moduleId: 'anat2',
    topic: 'שרירי הישבן העמוקים',
    title: 'שריר הפירמיפורמיס Piriformis (עמ׳ 118)',
    diagram: 'gluteus',
    imageUrl: '/images/piriformis.jpeg',
    questionText: 'שריר ה-Piriformis (האגסי) יוצא מהסקרום לעבר הירך. מהי החשיבות הקלינית העיקרית שלו?',
    hint: 'התבונן בשריר האדום האופקי שבתמונה: מתחתיו עובר העצב הסיאטי העבה.',
    options: [
      { id: 'a', text: 'העצב הסיאטי (Sciatic nerve) עובר מתחתיו, ולחץ עליו גורם להקרנת כאב לרגל', isCorrect: true },
      { id: 'b', text: 'הוא מיישר את הברך בסקוואט', isCorrect: false },
      { id: 'c', text: 'הוא מפעיל את שרירי כף היד', isCorrect: false },
      { id: 'd', text: 'אין לו שום משמעות קלינית', isCorrect: false }
    ],
    explanation: 'עמ׳ 118: כיווץ יתר או ספאזם של הפירמיפורמיס יכול ללחוץ ישירות על העצב הסיאטי ולגרום לתסמונת הפירמיפורמיס (כאב מקרין).'
  },
  {
    id: 'a2_23',
    moduleId: 'anat2',
    topic: 'שרירי כף הרגל',
    title: 'קשת כף הרגל ושריר הטיביאליס האחורי (עמ׳ 122)',
    diagram: 'tibialis',
    questionText: 'שריר ה-Tibialis Posterior (השוקתי האחורי) חיוני לתפקוד כף הרגל מפני ש:',
    hint: 'הוא עובר מתחת למלאולוס המדיאלי ומחזיק את הקשת מלמטה כדי למנוע פלטפוס (קריסת כף הרגל פנימה).',
    options: [
      { id: 'a', text: 'הוא תומך ומחזיק את הקשת האורכית המדיאלית של כף הרגל ומבצע אינוורסיה', isCorrect: true },
      { id: 'b', text: 'הוא מיישר את מפרק הברך', isCorrect: false },
      { id: 'c', text: 'הוא מרים את הבהונות מעלה (Dorsiflexion)', isCorrect: false },
      { id: 'd', text: 'הוא מסובב את הירך החוצה בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 122: ה-Tibialis Posterior הוא השומר המרכזי של הקשת המדיאלית של כף הרגל; חולשה שלו מובילה לקריסה פנימה (Pronation/Flatfoot).'
  },
  {
    id: 'a2_24',
    moduleId: 'anat2',
    topic: 'שרירי השוק',
    title: 'ההבדל בין שריר הסולאוס לגסטרוקנמיוס (עמ׳ 120)',
    diagram: 'calves',
    questionText: 'בניגוד לשריר ה-Gastrocnemius (התאומים), שריר ה-Soleus נחשב שריר חד-מפרקי מכיוון ש:',
    hint: 'התאומים חוצים את הברך ומתחילים בפמור; איפה מתחיל הסולאוס?',
    options: [
      { id: 'a', text: 'הוא מתחיל בעצמות השוק (טיביה ופיבולה) ואינו חוצה את מפרק הברך', isCorrect: true },
      { id: 'b', text: 'הוא מתחיל באגן וחוצה את הירך', isCorrect: false },
      { id: 'c', text: 'הוא אינו מחובר לגיד אכילס כלל', isCorrect: false },
      { id: 'd', text: 'הוא פועל רק כאשר הברך ישרה לחלוטין', isCorrect: false }
    ],
    explanation: 'עמ׳ 120: הסולאוס יושב מתחת לתאומים, מתחיל בשוק בלבד (ולא בפמור), ולכן פועל בעוצמה רבה בכפיפה כפית גם כשהברך כפופה (כמו בישיבה).'
  },
  {
    id: 'a2_25',
    moduleId: 'anat2',
    topic: 'סוגי כיווץ שרירי',
    title: 'כיווץ אקסצנטרי לעומת קונצנטרי (עמ׳ 94)',
    diagram: 'sarcomere',
    questionText: 'מה מאפיין כיווץ אקסצנטרי (Eccentric Contraction) של שריר שלד?',
    hint: 'דמיין שלב ירידה איטית ומבוקרת בסקוואט או בהורדת משקולת: השריר מייצר כוח בלם תוך כדי שהוא נמתח ומתארך.',
    options: [
      { id: 'a', text: 'השריר מפתח כוח ומתארך תחת עומס (בלימה כנגד כוח המשיכה)', isCorrect: true },
      { id: 'b', text: 'השריר מתקצר ומרחיק עצמות זו מזו', isCorrect: false },
      { id: 'c', text: 'השריר נשאר בדיוק באותו אורך ללא שום כוח', isCorrect: false },
      { id: 'd', text: 'זהו מצב של שיתוק שרירי מוחלט', isCorrect: false }
    ],
    explanation: 'עמ׳ 94: בכיווץ אקסצנטרי העומס החיצוני גובר על כוח השריר, והשריר בולם את התנועה תוך כדי התארכות מבוקרת.'
  },
  {
    id: 'a2_26',
    moduleId: 'anat2',
    topic: 'שרירי הצוואר',
    title: 'שריר ה-Sternocleidomastoid SCM (עמ׳ 95)',
    diagram: 'cervical',
    imageUrl: '/images/sternocleidomastoid.png',
    questionText: 'שריר ה-Sternocleidomastoid (SCM) בצוואר, בכיווץ חד-צדדי (Unilateral), מבצע:',
    hint: 'התבונן בשריר האדום הבולט בצוואר: כיווץ שלו מושך את הראש הצידה ומסובב את הפנים לצד הנגדי.',
    options: [
      { id: 'a', text: 'כפיפה צידית של הצוואר לאותו הצד ורוטציה של הפנים לצד הנגדי', isCorrect: true },
      { id: 'b', text: 'פשיטת גו מלאה לאחור', isCorrect: false },
      { id: 'c', text: 'הרמת הידיים מעל הראש', isCorrect: false },
      { id: 'd', text: 'כפיפת ברכיים בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 95: שריר מפנה הראש (SCM) מתחיל בסטרנום ובבריח ונאחז במסטואיד של הגולגולת; כיווץ של צד אחד מסובב את הראש לצד הנגדי.'
  },
  {
    id: 'a2_26b',
    moduleId: 'anat2',
    topic: 'שרירי הצוואר',
    title: 'שרירי הסקלנים Scalenes (עמ׳ 95)',
    diagram: 'cervical',
    imageUrl: '/images/scalenes.png',
    questionText: 'שרירי ה-Scalenes (הסולמות) בצוואר נאחזים בצלעות 1 ו-2 ומשמשים בין היתר בתור:',
    hint: 'התבונן בתמונה: שלושת השרירים (Anterior, Medius, Posterior) מרימים את הצלעות העליונות בשאיפה מאומצת.',
    options: [
      { id: 'a', text: 'שרירי עזר לשאיפה (הרמת צלעות 1 ו-2) וכפיפה צידית של הצוואר', isCorrect: true },
      { id: 'b', text: 'כופפי ברך ראשיים', isCorrect: false },
      { id: 'c', text: 'מסובבי ירך החוצה', isCorrect: false },
      { id: 'd', text: 'מייצבי מפרק כף היד בלבד', isCorrect: false }
    ],
    explanation: 'שרירי הסקלנים מחברים את חוליות הצוואר לצלעות 1 ו-2 ומסייעים בנשימה עמוקה ומאומצת.'
  },
  {
    id: 'a2_27',
    moduleId: 'anat2',
    topic: 'שרירי הגב התחתון',
    title: 'שריר ה-Quadratus Lumborum QL (עמ׳ 99)',
    diagram: 'spine_curves',
    imageUrl: '/images/quadratus_lumborum.png',
    questionText: 'שריר ה-Quadratus Lumborum (המרובע המותני) מחבר בין עצם הכסל לצלע 12, ותפקידו העיקרי:',
    hint: 'התבונן בתמונה: השריר האדום שמחבר את כנף האגן התחתונה ישירות אל צלע 12 וחוליות L1-L4.',
    options: [
      { id: 'a', text: 'כפיפה צידית של עמוד השדרה המותני והרמת האגן (Hip Hiking)', isCorrect: true },
      { id: 'b', text: 'כפיפת מרפקים', isCorrect: false },
      { id: 'c', text: 'פשיטת אצבעות כף הרגל', isCorrect: false },
      { id: 'd', text: 'יישור הברך בספרינט', isCorrect: false }
    ],
    explanation: 'עמ׳ 99: ה-QL מייצב את עמוד השדרה המותני ומבצע כפיפה צידית של הגו או הרמת אגן באותו הצד.'
  },
  {
    id: 'a2_28',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'שריר החייטים Sartorius (עמ׳ 115)',
    diagram: 'knee',
    imageUrl: '/images/sartorius.jpeg',
    questionText: 'שריר ה-Sartorius (השריר הארוך ביותר בגוף) מבצע שילוב של התנועות הבאות בירך:',
    hint: 'התבונן ברצועת השריר הארוכה שחוצה את הירך באלכסון ומאפשרת ישיבה מזרחית (ישיבת חייט).',
    options: [
      { id: 'a', text: 'כפיפה, הרחקה ורוטציה לטרלית של הירך (וכפיפת ברך)', isCorrect: true },
      { id: 'b', text: 'פשיטת ירך ופשיטת ברך בעוצמה', isCorrect: false },
      { id: 'c', text: 'קירוב ירך הדוק בלבד', isCorrect: false },
      { id: 'd', text: 'רוטציה פנימית של הקרסול בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 115: הסרטוריוס יוצא מה-ASIS באגן וחוצה את הירך באלכסון עד לטיביה, ומאפשר את ישיבת ה"חייט" (ישיבה מזרחית).'
  },
  {
    id: 'a2_29',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'שריר ה-Tensor Fasciae Latae TFL (עמ׳ 119)',
    diagram: 'knee_fibula',
    imageUrl: '/images/tensor_fasciae_latae.jpeg',
    questionText: 'שריר ה-TFL מתחבר ישירות אל רצועת ה-ITB (Iliotibial Band) ותפקידו העיקרי:',
    hint: 'התבונן בתמונה: השריר האדום הקטן בצד הירך שממשיך כרצועת ITB לבנה עד לברך.',
    options: [
      { id: 'a', text: 'מתיחת ה-ITB, הרחקת ירך וייצוב צידי של האגן והברך', isCorrect: true },
      { id: 'b', text: 'כפיפת אצבעות כף הרגל', isCorrect: false },
      { id: 'c', text: 'פשיטת עמוד השדרה הצווארי', isCorrect: false },
      { id: 'd', text: 'עצירת זרימת הדם לירך', isCorrect: false }
    ],
    explanation: 'עמ׳ 119: ה-TFL מותח את שובל הכסל והשוקה (ITB) ומסייע בהרחקה ובייצוב האגן בזמן הליכה וריצה.'
  },
  {
    id: 'a2_30',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'מקרבי הירך Adductors (עמ׳ 114)',
    diagram: 'knee',
    imageUrl: '/images/adductors.jpeg',
    questionText: 'קבוצת שרירי ה-Adductors (מקרבי הירך: Brevis, Longus, Magnus, Gracilis) מתחילה ב:',
    hint: 'התבונן בשרירים הצבעוניים שבתמונה: כולם יוצאים מעצם הפוביס והאגן לעבר עצם הירך.',
    options: [
      { id: 'a', text: 'עצם החיק (Pubis) באגן ונאחזת בעצם הירך (Femur)', isCorrect: true },
      { id: 'b', text: 'עצם העקב (Calcaneus)', isCorrect: false },
      { id: 'c', text: 'עצם השכמה בלבד', isCorrect: false },
      { id: 'd', text: 'חוליות הצוואר', isCorrect: false }
    ],
    explanation: 'עמ׳ 114: שרירי המקרבים יוצאים מאזור הפיוביס והאיסכיום ונאחזים לאורך החלק המדיאלי של הפמור כדי לקרב את הירכיים.'
  },
  {
    id: 'a2_30b',
    moduleId: 'anat2',
    topic: 'שרירי הירך המקרבים',
    title: 'שריר ה-Gracilis (עמ׳ 113)',
    diagram: 'knee',
    imageUrl: '/images/gracilis.jpeg',
    questionText: 'בניגוד לשאר מקרבי הירך, שריר ה-Gracilis (הצבוע בירוק) חוצה גם את הברך ונאחז ב:',
    hint: 'התבונן בתמונה: השריר הירוק הדק יורד עד ל-Pes Anserinus בחלק הפנימי העליון של הטיביה.',
    options: [
      { id: 'a', text: 'Pes Anserinus בחלק הפנימי-עליון של עצם השוקה (Tibia)', isCorrect: true },
      { id: 'b', text: 'בעצם הפיבולה בלבד', isCorrect: false },
      { id: 'c', text: 'בעצם הירך בלבד ללא חציית הברך', isCorrect: false },
      { id: 'd', text: 'בעצם העקב', isCorrect: false }
    ],
    explanation: 'עמ׳ 113: הגרציליס הוא השריר היחיד ממקרבי הירך שחוצה את הברך ולכן משתתף גם בכפיפת ברך וסיבוב פנימי שלה.'
  },
  {
    id: 'a2_31',
    moduleId: 'anat2',
    topic: 'תפקידי שרירים בתנועה',
    title: 'אגוניסט מול אנטגוניסט (עמ׳ 93)',
    diagram: 'sarcomere',
    imageUrl: '/images/biceps_brachii.jpeg',
    questionText: 'בכפיפת מרפק בעלייה במתח או בעליית משקולת, שריר ה-Triceps Brachii משמש בתור:',
    hint: 'השריר הנגדי לפעולה שצריך להרפות או להתארך כדי לאפשר את הכפיפה.',
    options: [
      { id: 'a', text: 'אנטגוניסט (Antagonist - שריר מנוגד)', isCorrect: true },
      { id: 'b', text: 'אגוניסט ראשי (Prime mover)', isCorrect: false },
      { id: 'c', text: 'סינרגיסט בלבד', isCorrect: false },
      { id: 'd', text: 'שריר ניטרלי ללא שום קשר', isCorrect: false }
    ],
    explanation: 'עמ׳ 93: האגוניסט הוא המבצע הראשי (בייספס בכפיפת מרפק), והאנטגוניסט הוא השריר הנגדי (טריספס) המתארך ומבקר את התנועה.'
  },
  {
    id: 'a2_32',
    moduleId: 'anat2',
    topic: 'שרירי החזה',
    title: 'שריר ה-Pectoralis Major (עמ׳ 83)',
    diagram: 'deltoid',
    imageUrl: '/images/pectoralis_major.jpeg',
    questionText: 'שריר החזה הגדול (Pectoralis Major) מבצע את הפעולות הבאות במפרק הכתף:',
    hint: 'התבונן בתמונה: השריר הגדול שנאחז בזרוע ומבצע קירוב חזיתי (חיבוק / לחיצת חזה).',
    options: [
      { id: 'a', text: 'קירוב אופקי (Horizontal Adduction), קירוב ורוטציה פנימית של הזרוע', isCorrect: true },
      { id: 'b', text: 'פשיטת מרפק והרחקת שכמות בלבד', isCorrect: false },
      { id: 'c', text: 'פשיטת ירך וכפיפת ברך', isCorrect: false },
      { id: 'd', text: 'הרמת בהונות כף הרגל', isCorrect: false }
    ],
    explanation: 'עמ׳ 83: הפקטורליס מייג\'ור יוצא מהבריח, עצם החזה והצלעות, ונאחז בזרוע (Humerus) ומקרב אותה בעוצמה קדימה ואופקית.'
  },
  {
    id: 'a2_33',
    moduleId: 'anat2',
    topic: 'שרירי הגב הרחב',
    title: 'שריר ה-Latissimus Dorsi (עמ׳ 84)',
    diagram: 'deltoid',
    imageUrl: '/images/latissimus_dorsi.jpeg',
    questionText: 'שריר הרחב-גבי (Latissimus Dorsi) מבצע במפרק הכתף (כמו בעליית מתח):',
    hint: 'התבונן בחץ השחור שבתמונה: השריר מושך את הזרוע מלמעלה למטה ומלפנים לאחור.',
    options: [
      { id: 'a', text: 'פשיטה (Extension), קירוב (Adduction) ורוטציה פנימית של הזרוע', isCorrect: true },
      { id: 'b', text: 'הרחקה אופקית וכפיפת צוואר בלבד', isCorrect: false },
      { id: 'c', text: 'כפיפת ברכיים', isCorrect: false },
      { id: 'd', text: 'דחיקת כתפיים מעלה', isCorrect: false }
    ],
    explanation: 'עמ׳ 84: הרחב-גבי הוא השריר העיקרי המושך את הזרוע מלמעלה למטה ומלפנים לאחור (פשיטה וקירוב חזקים).'
  },
  {
    id: 'a2_34',
    moduleId: 'anat2',
    topic: 'שרירי הבטן',
    title: 'השריר הישר-בטני Rectus Abdominis (עמ׳ 96)',
    diagram: 'sarcomere',
    imageUrl: '/images/rectus_abdominis.jpeg',
    questionText: 'השריר הישר-בטני (Rectus Abdominis) מתחיל בפיוביס ונאחז בצלעות 5-7 ובקספואיד. מהי פעולתו העיקרית?',
    hint: 'התבונן בשריר ה"ריבועים" האדום: כיווץ שלו מקרב את בית החזה לאגן (כפיפת גו).',
    options: [
      { id: 'a', text: 'כפיפה (Flexion) של עמוד השדרה והטיית אגן לאחור (Posterior Pelvic Tilt)', isCorrect: true },
      { id: 'b', text: 'פשיטת גב לאחור (Hyper-extension)', isCorrect: false },
      { id: 'c', text: 'הרחקת ירכיים לצדדים', isCorrect: false },
      { id: 'd', text: 'נשיפה פסיבית בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 96: הרקטוס אבדומיניס מקרב את הצלעות לאגן ובכך מכופף את עמוד השדרה ומייצב את מרכז הגוף.'
  },
  {
    id: 'a2_35',
    moduleId: 'anat2',
    topic: 'שרירי השכמה',
    title: 'שרירי הרומבואידים Rhomboids (עמ׳ 76)',
    diagram: 'deltoid',
    imageUrl: '/images/rhomboids.jpeg',
    questionText: 'שרירי ה-Rhomboid Major ו-Minor מחברים את עמוד השדרה לגבול המדיאלי של השכמה ומבצעים:',
    hint: 'התבונן בתמונה: השרירים האלכסוניים שנמצאים מתחת לטרפז ומושכים את השכמות לאחור ולמעלה.',
    options: [
      { id: 'a', text: 'קירוב שכמות לאחור (Retraction/Adduction) ורוטציה מטה', isCorrect: true },
      { id: 'b', text: 'הרחקת שכמות קדימה (Protraction)', isCorrect: false },
      { id: 'c', text: 'כפיפת מרפק מלאה', isCorrect: false },
      { id: 'd', text: 'פשיטת ירך', isCorrect: false }
    ],
    explanation: 'עמ׳ 76: הרומבואידים מושכים את השכמות לכיוון עמוד השדרה (קירוב שכמות לאחור) ומונעים את שמיטת הכתפיים לפנים.'
  }
];
