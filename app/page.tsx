/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect, useMemo } from 'react';

// מאגר שאלות מקיף המבוסס במדויק על חוברות ומבחני וינגייט
const WINGATE_QUESTION_BANK = [
  // --- מודול 1: אנטומיה א' - תאים, רקמות, שלד ומפרקים ---
  {
    id: 'a1_1',
    moduleId: 'anat1',
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'רקמות חיבור',
    title: 'מבנה ותפקיד הדיסק הבין-חולייתי',
    illustration: '🦴 💿',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו בעיקר:',
    hint: 'חשוב על הטבעות הסיביות החיצוניות שמחזיקות את הדיסק.',
    options: [
      { id: 'a', text: 'למנוע חיכוך ולבלום זעזועים', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'לחבר בין העור לשריר', isCorrect: false }
    ],
    explanation: 'ה-Annulus Fibrosus בנוי מסיבי קולגן צפופים המקיפים את הגרעין הצמיגי (Nucleus Pulposus), בולמים זעזועים ומונעים חיכוך בין החוליות.'
  },
  {
    id: 'a1_2',
    moduleId: 'anat1',
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'רקמת הסחוס',
    title: 'תא הסחוס - Chondrocyte',
    illustration: '🔬 🧬',
    questionText: 'מה נכון לגבי תא הסחוס (Chondrocyte)?',
    hint: 'זהו התא המרכיב ומתחזק את רקמת הסחוס.',
    options: [
      { id: 'a', text: 'מייצר קולגן ורכיבי חומר חוץ-תאי בסחוס', isCorrect: true },
      { id: 'b', text: 'נמצא ברקמת העצם הצפופה', isCorrect: false },
      { id: 'c', text: 'מהווה חלק מהחומר האנאורגני של השלד', isCorrect: false },
      { id: 'd', text: 'נמצא בשכבה החיצונית של העור', isCorrect: false }
    ],
    explanation: 'כונדרוציטים (Chondrocytes) הם תאי הסחוס המייצרים קולגן ופרוטאוגליקנים ומתחזקים את המבנה המפרקי.'
  },
  {
    id: 'a1_3',
    moduleId: 'anat1',
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'רקמת הסחוס',
    title: 'הסחוס ההיאליני במפרקים',
    illustration: '🧊 🦴',
    questionText: 'בעניין הסחוס ההיאליני שבקצות העצמות, איזה משפט הוא הנכון?',
    hint: 'שים לב לאספקת הדם וההזנה של הסחוס.',
    options: [
      { id: 'a', text: 'הוא מקבל חומרי מזון וחמצן בדיפוזיה מנוזל המפרק', isCorrect: true },
      { id: 'b', text: 'הוא עשיר מאוד בכלי דם ישירים', isCorrect: false },
      { id: 'c', text: 'הוא מורכב בעיקר מסיבי אלסטין', isCorrect: false },
      { id: 'd', text: 'הוא נמצא בעיקר בדיסק הבין חולייתי', isCorrect: false }
    ],
    explanation: 'הסחוס ההיאליני הוא רקמה חסרת אספקת דם ישירה (Avascular) הניזונה בדיפוזיה מתוך הנוזל הסינוביאלי בעת תנועה ועומס.'
  },
  {
    id: 'a1_4',
    moduleId: 'anat1',
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'עמוד השדרה',
    title: 'חוליות הצוואר הייחודיות',
    illustration: '🦒 🦴',
    questionText: 'מה מייחד את חוליות הצוואר מכל שאר חוליות עמוד השדרה?',
    hint: 'דרכו עוברים כלי דם חשובים המובילים דם אל המוח.',
    options: [
      { id: 'a', text: 'נקב מיוחד בכל זיז רוחבי (Transverse Foramen)', isCorrect: true },
      { id: 'b', text: 'גוף חוליה ענק בהשוואה לחוליות המותניים', isCorrect: false },
      { id: 'c', text: 'מפרקים עם צלעות', isCorrect: false },
      { id: 'd', text: 'היעדר תעלה עבור חוט השדרה', isCorrect: false }
    ],
    explanation: 'בחוליות הצוואר (C1-C7) קיים נקב בזיז הרוחבי (Foramen transversarium) שדרכו עוברים עורקי הצוואר אל המוח.'
  },
  {
    id: 'a1_5',
    moduleId: 'anat1',
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'מפרקים',
    title: 'מפרק ה-Atlantoaxial',
    illustration: '🔄 🗣️',
    questionText: 'מפרק ה-Atlantoaxial (בין C1 ל-C2) מאפשר בעיקר את התנועה הבאה של הראש:',
    hint: 'תנועת ה"לא".',
    options: [
      { id: 'a', text: 'רוטציה (סיבוב הראש לצדדים)', isCorrect: true },
      { id: 'b', text: 'פשיטה לאחור בלבד', isCorrect: false },
      { id: 'c', text: 'הרחקה וקירוב', isCorrect: false },
      { id: 'd', text: 'החלקה ללא תנועה', isCorrect: false }
    ],
    explanation: 'השן של חוליית C2 (Dens) נכנסת לקשת של חוליית C1 (Atlas) ויוצרת ציר סיבוב של כ-45 מעלות לכל צד.'
  },
  {
    id: 'a1_6',
    moduleId: 'anat1',
    moduleName: "אנטומיה א': תאים, רקמות ושלד",
    topic: 'עצמות ושלד',
    title: 'עצם הבריח ומפרקיה',
    illustration: '🦴 🔗',
    questionText: 'עצם הבריח (Clavicle) יוצרת מפרקים עם:',
    hint: 'חיבור אחד במרכז בית החזה וחיבור אחד בשכמה.',
    options: [
      { id: 'a', text: 'האקרומיון בשכמה (Acromion) ועצם החזה (Sternum)', isCorrect: true },
      { id: 'b', text: 'עצם הזרוע (Humerus) בלבד', isCorrect: false },
      { id: 'c', text: 'חוליות עמוד השדרה הצווארי', isCorrect: false },
      { id: 'd', text: 'עצם הירך (Femur)', isCorrect: false }
    ],
    explanation: 'הבריח מחברת את שלד הגפה העליונה לשלד הציר דרך מפרק ה-Sternoclavicular ומפרק ה-Acromioclavicular.'
  },

  // --- מודול 2: אנטומיה ב' - שרירים, תחל/אחז ותנועות ---
  {
    id: 'a2_1',
    moduleId: 'anat2',
    moduleName: "אנטומיה ב': שרירים ותנועות",
    topic: 'שרירי הירך והשוק',
    title: 'אחז בראש הפיבולה',
    illustration: '🦵 🦶',
    questionText: 'איזה שריר נאחז (Insertion) בראש עצם השוקית (Head of Fibula)?',
    hint: 'זהו השריר הלטרלי מבין שרירי מיתר הירך (Hamstrings).',
    options: [
      { id: 'a', text: 'Biceps Femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Rectus Femoris', isCorrect: false }
    ],
    explanation: 'שני הראשים של ה-Biceps Femoris נאחזים בראש הפיבולה ומבצעים כפיפת ברך ופשיטת ירך (הראש הארוך).'
  },
  {
    id: 'a2_2',
    moduleId: 'anat2',
    moduleName: "אנטומיה ב': שרירים ותנועות",
    topic: 'מייצבי הכתף (Rotator Cuff)',
    title: 'סיבוב פנימי במפרק הכתף',
    illustration: '🛡️ 💪',
    questionText: 'מי מבין שרירי ה-Rotator Cuff מבצע רוטציה מדיאלית (סיבוב פנימי) של הכתף?',
    hint: 'השריר היחיד מהקבוצה שנמצא בצד הקדמי של השכמה ונאחז ב-Lesser Tubercle.',
    options: [
      { id: 'a', text: 'Subscapularis', isCorrect: true },
      { id: 'b', text: 'Supraspinatus', isCorrect: false },
      { id: 'c', text: 'Infraspinatus', isCorrect: false },
      { id: 'd', text: 'Teres Minor', isCorrect: false }
    ],
    explanation: 'ה-Subscapularis יושב בשקע הקדמי של השכמה (Subscapular fossa) ומבצע רוטציה מדיאלית (פנימית) במפרק הכתף.'
  },
  {
    id: 'a2_3',
    moduleId: 'anat2',
    moduleName: "אנטומיה ב': שרירים ותנועות",
    topic: 'שרירי הגו והאגן',
    title: 'האחז ב-Greater Trochanter',
    illustration: '🍑 🦴',
    questionText: 'בליטת ה-Greater Trochanter בעצם הירך מהווה נקודת אחז מרכזית לשריר:',
    hint: 'השריר המרכזי המרחיק את הירך ומייצב את האגן בהליכה.',
    options: [
      { id: 'a', text: 'Gluteus Medius (וגם Minimus)', isCorrect: true },
      { id: 'b', text: 'Gluteus Maximus', isCorrect: false },
      { id: 'c', text: 'Iliopsoas', isCorrect: false },
      { id: 'd', text: 'Hamstrings', isCorrect: false }
    ],
    explanation: 'השרירים Gluteus Medius ו-Minimus נאחזים ב-Greater Trochanter ומונעים את צניחת האגן בצד הנגדי בעת עמידה והליכה (מבחן טרנדלנבורג).'
  },
  {
    id: 'a2_4',
    moduleId: 'anat2',
    moduleName: "אנטומיה ב': שרירים ותנועות",
    topic: 'שרירי כף הרגל והקרסול',
    title: 'הליכה על עקבים (Dorsiflexion)',
    illustration: '🦶 ⬆️',
    questionText: 'אדם ההולך על עקביו ומרים את בהונותיו מעלה מפעיל בעיקר את שריר ה:',
    hint: 'השריר הקדמי של השוק המגן על קשת כף הרגל.',
    options: [
      { id: 'a', text: 'Tibialis Anterior', isCorrect: true },
      { id: 'b', text: 'Gastrocnemius (תאומים)', isCorrect: false },
      { id: 'c', text: 'Soleus (סולאוס)', isCorrect: false },
      { id: 'd', text: 'Peroneus Longus', isCorrect: false }
    ],
    explanation: 'ה-Tibialis Anterior מתחיל בקדמת השוק ונאחז בעצמות שורש כף הרגל, והוא המבצע הראשי של Dorsiflexion והרמת כף הרגל.'
  },
  {
    id: 'a2_5',
    moduleId: 'anat2',
    moduleName: "אנטומיה ב': שרירים ותנועות",
    topic: 'שרירי הבטן',
    title: 'שריר הבטן העמוק ביותר',
    illustration: '🧘 🛡️',
    questionText: 'איזה משרירי הבטן אינו משתתף ישירות בתנועות כפיפה או סיבוב של הגו, אלא מייצב ומעלה לחץ תוך-בטני?',
    hint: 'השריר הרוחבי הפועל כמחוך פנימי לעמוד השדרה.',
    options: [
      { id: 'a', text: 'Transversus Abdominis (הרחב הבטני)', isCorrect: true },
      { id: 'b', text: 'Rectus Abdominis (הישר הבטני)', isCorrect: false },
      { id: 'c', text: 'External Oblique (אלכסון חיצוני)', isCorrect: false },
      { id: 'd', text: 'Internal Oblique (אלכסון פנימי)', isCorrect: false }
    ],
    explanation: 'ה-Transversus Abdominis מקיף את חלל הבטן בסיבים אופקיים ומייצב את עמוד השדרה בעזרת לחץ תוך-בטני (IAP).'
  },

  // --- מודול 3: פיזיולוגיה א' - אספקת אנרגיה ומסלולים מטבוליים ---
  {
    id: 'p1_1',
    moduleId: 'phys1',
    moduleName: "פיזיולוגיה א': אנרגיה ומטבוליזם",
    topic: 'מערכות אנרגיה',
    title: 'ריכוזי פוספטים תוך-תאיים',
    illustration: '🔋 ⚡',
    questionText: 'מה נכון לגבי הריכוז הזמין של ATP לעומת קריאטין פוספט (CrP) בתא שריר?',
    hint: 'איזו מולקולה נאגרת בכמות גדולה יותר בציטופלזמה?',
    options: [
      { id: 'a', text: 'הריכוז הזמין של CrP גדול לפחות פי 3 מהריכוז של ATP', isCorrect: true },
      { id: 'b', text: 'הריכוז של ATP גדול פי 3 מ-CrP', isCorrect: false },
      { id: 'c', text: 'שתי המולקולות משחררות אנרגיה אך ורק בנוכחות חמצן', isCorrect: false },
      { id: 'd', text: 'המאגר של שניהם יחד מספיק לפעילות מרבית של 20 דקות', isCorrect: false }
    ],
    explanation: 'מולקולת ה-CrP קטנה יותר ולכן התא אוגר כמות הגדולה פי 3 לפחות ממאגר ה-ATP, המספיקה יחד לכ-10 שניות מאמץ מרבי.'
  },
  {
    id: 'p1_2',
    moduleId: 'phys1',
    moduleName: "פיזיולוגיה א': אנרגיה ומטבוליזם",
    topic: 'מערכות אנרגיה',
    title: 'גורמי עייפות בגליקוליזה',
    illustration: '🧪 🏃‍♂️',
    questionText: 'במאמץ מרבי הנמשך 40-60 שניות (גליקוליזה אנאירובית), מהי הסיבה המרכזית לעייפות ולירידה בהספק?',
    hint: 'איזה יון נפלט ופוגע בפעילות אנזים ה-PFK?',
    options: [
      { id: 'a', text: 'עלייה בחומציות עקב הצטברות יוני מימן (H+) ופגיעה באנזים PFK ובכיווץ', isCorrect: true },
      { id: 'b', text: 'סיום מוחלט של כל מאגרי השומן בגוף', isCorrect: false },
      { id: 'c', text: 'מחסור באוויר בריאות', isCorrect: false },
      { id: 'd', text: 'ירידה בלתי הפיכה בנפח הלב', isCorrect: false }
    ],
    explanation: 'הצטברות יוני מימן (H+) מורידה את ה-pH בתא, מעכבת את האנזים המרכזי בגליקוליזה (PFK) ופוגעת בקשירת הסידן לטרופונין.'
  },
  {
    id: 'p1_3',
    moduleId: 'phys1',
    moduleName: "פיזיולוגיה א': אנרגיה ומטבוליזם",
    topic: 'פינוי חומרי פסולת',
    title: 'מעגל קורי (Cori Cycle)',
    illustration: '🔄 🩸',
    questionText: 'מה מתרחש במסגרת "מעגל קורי" (Cori Cycle)?',
    hint: 'איזה איבר בגוף ממחזר את הלקטט שנוצר בשריר חזרה לגלוקוז?',
    options: [
      { id: 'a', text: 'הלקטט המפונה מהשריר הופך מחדש לגלוקוז בכבד בהשקעת אנרגיה', isCorrect: true },
      { id: 'b', text: 'שומן הופך לחלבון בתוך הכליה', isCorrect: false },
      { id: 'c', text: 'פירובט הופך לסידן בעצם', isCorrect: false },
      { id: 'd', text: 'חומצות אמינו מתפרקות ללא צורך באנרגיה', isCorrect: false }
    ],
    explanation: 'הכבד קולט את הלקטט מהדם ובתהליך גלוקונאוגנזה (השקעת 6 מולקולות ATP) מייצר ממנו גלוקוז המוזרם חזרה לשרירים.'
  },
  {
    id: 'p1_4',
    moduleId: 'phys1',
    moduleName: "פיזיולוגיה א': אנרגיה ומטבוליזם",
    topic: 'סף אנאירובי וצח"מ',
    title: 'הגדרת הסף האנאירובי (OBLA)',
    illustration: '📈 ⏱️',
    questionText: 'מהי ההגדרה הפיזיולוגית של הסף האנאירובי?',
    hint: 'הנקודה שבה קצב ייצור הלקטט מתחיל לעלות על קצב הפינוי שלו.',
    options: [
      { id: 'a', text: 'עצימות המאמץ המרבית שבה קצב ייצור הלקטט שווה לקצב פינויו (איזון דינמי)', isCorrect: true },
      { id: 'b', text: 'המצב שבו אין חמצן בגוף כלל', isCorrect: false },
      { id: 'c', text: 'הרגע שבו מגיעים לדופק מרבי של 220 פחות הגיל', isCorrect: false },
      { id: 'd', text: 'הרגע שבו האדם מתעלף מאימון', isCorrect: false }
    ],
    explanation: 'בסף האנאירובי (לרוב סביב 4 מילימול לקטט/ליטר), פינוי הלקטט פועל במקסימום ומשמר שיווי משקל. מעבר לו – הלקטט והחומציות מצטברים בחדות.'
  },

  // --- מודול 4: פיזיולוגיה ב' - לב, כלי דם ונשימה ---
  {
    id: 'p2_1',
    moduleId: 'phys2',
    moduleName: "פיזיולוגיה ב': לב, דם ונשימה",
    topic: 'מערכת הלב',
    title: 'שלב הדיאסטולה בלב',
    illustration: '❤️ 🩸',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים) של הלב, מהו מצב המסתמים?',
    hint: 'הדם צריך לזרום מהעליות אל תוך החדרים.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'כל המסתמים בלב סגורים לחלוטין', isCorrect: false },
      { id: 'c', text: 'המסתמים לעורקים פתוחים והמסתמים לעליות סגורים', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'בדיאסטולה החדרים נרפים ומתמלאים בדם מהעליות דרך המסתמים הפתוחים ביניהם, בעוד המסתמים לאבי העורקים ולעורק הריאה סגורים למניעת חזרת דם.'
  },
  {
    id: 'p2_2',
    moduleId: 'phys2',
    moduleName: "פיזיולוגיה ב': לב, דם ונשימה",
    topic: 'מערכת הלב וכלי הדם',
    title: 'תפוקת הלב והחזר ורידי',
    illustration: '🚴‍♂️ ❤️',
    questionText: 'על פי חוק פרנק-סטרלינג, מה גורם לעלייה בעוצמת כיווץ הלב ובנפח הפעימה במאמץ?',
    hint: 'ככל שדופן החדר נמתחת יותר בשלב המילוי...',
    options: [
      { id: 'a', text: 'עלייה בהחזר הוורידי המותחת את שריר הלב בשלב הדיאסטולה', isCorrect: true },
      { id: 'b', text: 'ירידה בלחת הדם מתחת ל-50', isCorrect: false },
      { id: 'c', text: 'עצירת אספקת הדם לשרירים', isCorrect: false },
      { id: 'd', text: 'היצרות כלי הדם במוח', isCorrect: false }
    ],
    explanation: 'חוק פרנק-סטרלינג קובע שככל שמילוי החדר בדם (החזר ורידי) מותח יותר את סיבי שריר הלב, כך כוח הכיווץ בסיסטולה יהיה חזק יותר ונפח הפעימה יגדל.'
  },
  {
    id: 'p2_3',
    moduleId: 'phys2',
    moduleName: "פיזיולוגיה ב': לב, דם ונשימה",
    topic: 'מערכת הנשימה',
    title: 'נפח מת ואוורור ריאתי',
    illustration: '🫁 💨',
    questionText: 'מהו "נפח מת אנטומי" (Anatomical Dead Space)?',
    hint: 'חלק מנפח האוויר הנשאף שנשאר בדרכי הנשימה המובילות.',
    options: [
      { id: 'a', text: 'כ-150 מ"ל אוויר שנשאר בדרכי הנשימה המוליכות ואינו משתתף בחילוף הגזים', isCorrect: true },
      { id: 'b', text: 'נפח הריאות של אדם מבוגר שאינו מתאמן', isCorrect: false },
      { id: 'c', text: 'אוויר מזוהם בלבד שאינו ניתן לנשיפה', isCorrect: false },
      { id: 'd', text: 'כמות החמצן שהשריר פולט במנוחה', isCorrect: false }
    ],
    explanation: 'נפח מת אנטומי (כ-150 מ"ל) ממלא את האף, הקנה והסימפונות, שבהם אין נאדיות ולכן לא מתבצע חילוף גזים עם הדם.'
  },
  {
    id: 'p2_4',
    moduleId: 'phys2',
    moduleName: "פיזיולוגיה ב': לב, דם ונשימה",
    topic: 'התאמות לאימון אירובי',
    title: 'הגורם המגביל במאמץ אירובי מרבי',
    illustration: '🫀 ⚡',
    questionText: 'אצל אדם בריא, מהו הגורם העיקרי המגביל את צריכת החמצן המרבית (צח"מ)?',
    hint: 'האם זו מערכת הנשימה או משאבת הלב?',
    options: [
      { id: 'a', text: 'תפוקת הלב המרבית (היכולת להזרים דם מחומצן לשרירים)', isCorrect: true },
      { id: 'b', text: 'קיבולת הריאות (אוורור הריאות)', isCorrect: false },
      { id: 'c', text: 'מספר העצמות ברגליים', isCorrect: false },
      { id: 'd', text: 'כמות המים בעור', isCorrect: false }
    ],
    explanation: 'למערכת הנשימה קיימת "רזרבה נשימתית" גדולה (MVV) שאינה מנוצלת עד תומה, ולכן תפוקת הלב ויכולת הובלת הדם היא הגורם המגביל המרכזי.'
  },
  {
    id: 'p2_5',
    moduleId: 'phys2',
    moduleName: "פיזיולוגיה ב': לב, דם ונשימה",
    topic: 'שריר ומערכת העצבים',
    title: 'כישור השריר מול אברון גולג\'י',
    illustration: '⚡ 🧠',
    questionText: 'איזה מנגנון גורם להרפיה רפלקסיבית של שריר בתגובה למתיחת-יתר או עומס קיצוני בגיד?',
    hint: 'החיישן שנמצא בצומת שבין הגיד לשריר ומגן עליו מקרע.',
    options: [
      { id: 'a', text: 'אברון הגיד ע"ש גולג\'י (Golgi Tendon Organ - GTO)', isCorrect: true },
      { id: 'b', text: 'כישור השריר (Muscle Spindle)', isCorrect: false },
      { id: 'c', text: 'רשת הסרקופלזמה', isCorrect: false },
      { id: 'd', text: 'תאי הלוויין', isCorrect: false }
    ],
    explanation: 'אברון גולג\'י (GTO) חש במתח יתר בגיד ומעכב רפלקסיבית את האגוניסט כדי למנוע תלישה, בעוד כישור השריר גורם דווקא לכיווץ כנגד מתיחה מהירה.'
  }
];

// פונקציית ערבוב חכמה (Fisher-Yates)
function shuffleArray(arr) {
  const copy = [...arr];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function WingateExamApp() {
  const [activeModule, setActiveModule] = useState('all');
  const [questions, setQuestions] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [showExplanation, setShowExplanation] = useState(false);

  // אתחול מודול וערבוב מחדש של השאלות והתשובות
  const initModule = (modId = activeModule) => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    let base = WINGATE_QUESTION_BANK;
    if (modId !== 'all') {
      base = WINGATE_QUESTION_BANK.filter(q => q.moduleId === modId);
    }

    const shuffled = shuffleArray(base).map(q => ({
      ...q,
      options: shuffleArray(q.options)
    }));

    setQuestions(shuffled);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setShowExplanation(false);
    setScore(0);
    setStreak(0);
  };

  useEffect(() => {
    initModule('all');
  }, []);

  const handleModuleChange = (newMod) => {
    setActiveModule(newMod);
    initModule(newMod);
  };

  const currentQ = questions[currentIndex];

  // מנוע הקראה קולית ברור בעברית
  const speak = (text) => {
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text);
    u.lang = 'he-IL';
    u.rate = 0.88;

    u.onstart = () => setIsSpeaking(true);
    u.onend = () => setIsSpeaking(false);
    u.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(u);
  };

  const speakQuestion = () => {
    if (!currentQ) return;
    const text = `שאלה בנושא ${currentQ.topic}. ${currentQ.questionText}. אפשרויות: ${currentQ.options.map((o, idx) => `אפשרות ${['א','ב','ג','ד'][idx]}: ${o.text}`).join('. ')}`;
    speak(text);
  };

  const handleCheckAnswer = () => {
    if (!selectedOption || isAnswerChecked || !currentQ) return;

    const chosen = currentQ.options.find(o => o.id === selectedOption);
    const correct = chosen?.isCorrect;

    setIsAnswerChecked(true);
    setShowExplanation(true);

    if (correct) {
      setScore(prev => prev + 10);
      setStreak(prev => prev + 1);
      speak('נכון מאוד שמואל! תשובה מדויקת.');
    } else {
      setStreak(0);
      const right = currentQ.options.find(o => o.isCorrect)?.text;
      speak(`לא מדויק. התשובה הנכונה היא: ${right}. שים לב להסבר.`);
    }
  };

  const handleNext = () => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();

    if (currentIndex < questions.length - 1) {
      setCurrentIndex(prev => prev + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
    } else {
      const finalScore = score + (currentQ.options.find(o => o.id === selectedOption)?.isCorrect ? 10 : 0);
      alert(`כל הכבוד שמואל!\nסיימת את המודול בהצלחה!\nצברת ${finalScore} נקודות מתוך ${questions.length * 10}!`);
      initModule(activeModule);
    }
  };

  if (!currentQ) {
    return (
      <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <p style={{ fontWeight: 'bold' }}>טוען שאלות מחוברת וינגייט...</p>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '14px', maxWidth: '520px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} dir="rtl">
      
      <div>
        {/* כותרת עליונה */}
        <header style={{ marginBottom: '12px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '900', color: '#f59e0b' }}>
                🎓 ווינגייט קואוץ' - שמואל
              </h1>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>הכנה רשמית למבחני הסמכת מאמנים</span>
            </div>

            <button
              onClick={() => initModule(activeModule)}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
              title="ערבוב מחדש של כל השאלות והתשובות"
            >
              🔄 איפוס וערבוב
            </button>
          </div>

          {/* תפריט מודולים לבחירה */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '8px' }}>
            <button
              onClick={() => handleModuleChange('all')}
              style={{
                backgroundColor: activeModule === 'all' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'all' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              🎯 הכל מעורבב
            </button>

            <button
              onClick={() => handleModuleChange('anat1')}
              style={{
                backgroundColor: activeModule === 'anat1' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'anat1' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              🦴 אנטומיה א' (שלד ורקמות)
            </button>

            <button
              onClick={() => handleModuleChange('anat2')}
              style={{
                backgroundColor: activeModule === 'anat2' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'anat2' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              💪 אנטומיה ב' (שרירים ותנועות)
            </button>

            <button
              onClick={() => handleModuleChange('phys1')}
              style={{
                backgroundColor: activeModule === 'phys1' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'phys1' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              ⚡ פיזיולוגיה א' (אנרגיה)
            </button>

            <button
              onClick={() => handleModuleChange('phys2')}
              style={{
                backgroundColor: activeModule === 'phys2' ? '#f59e0b' : '#0f172a',
                color: activeModule === 'phys2' ? '#020617' : '#94a3b8',
                border: '1px solid #334155',
                padding: '6px 10px',
                borderRadius: '10px',
                fontSize: '11px',
                fontWeight: 'bold',
                whiteSpace: 'nowrap',
                cursor: 'pointer'
              }}
            >
              ❤️ פיזיולוגיה ב' (לב ודם)
            </button>
          </div>

          {/* מד התקדמות וניקוד */}
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: '12px', marginBottom: '6px' }}>
            <div style={{ display: 'flex', gap: '8px' }}>
              <span style={{ backgroundColor: 'rgba(245, 158, 11, 0.15)', color: '#fbbf24', padding: '3px 8px', borderRadius: '8px', fontWeight: 'bold' }}>
                🔥 רצף: {streak}
              </span>
              <span style={{ backgroundColor: 'rgba(16, 185, 129, 0.15)', color: '#34d399', padding: '3px 8px', borderRadius: '8px', fontWeight: 'bold' }}>
                ⭐ {score} XP
              </span>
            </div>
            <span style={{ color: '#94a3b8', fontWeight: 'bold' }}>שאלה {currentIndex + 1} מתוך {questions.length}</span>
          </div>

          <div style={{ width: '100%', backgroundColor: '#0f172a', height: '8px', borderRadius: '999px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <div 
              style={{ 
                width: `${((currentIndex + 1) / questions.length) * 100}%`, 
                height: '100%', 
                background: 'linear-gradient(to left, #10b981, #f59e0b)',
                transition: 'width 0.3s ease'
              }} 
            />
          </div>
        </header>

        {/* כרטיסיית נושא */}
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '16px', padding: '10px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
          <div>
            <span style={{ color: '#f59e0b', fontSize: '10px', fontWeight: 'bold', display: 'block' }}>{currentQ.topic}</span>
            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '900' }}>{currentQ.title}</span>
          </div>
          <span style={{ fontSize: '22px' }}>{currentQ.illustration}</span>
        </div>

        {/* השאלה + כפתור הקראה קולית */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '16px', padding: '14px', marginBottom: '14px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '10px' }}>
            <p style={{ margin: 0, fontSize: '15px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.5' }}>
              {currentQ.questionText}
            </p>

            <button
              onClick={speakQuestion}
              style={{
                backgroundColor: isSpeaking ? '#f59e0b' : '#9333ea',
                color: isSpeaking ? '#020617' : '#ffffff',
                border: 'none',
                borderRadius: '14px',
                padding: '10px 14px',
                fontSize: '18px',
                cursor: 'pointer',
                flexShrink: 0,
                boxShadow: '0 4px 10px rgba(0,0,0,0.3)'
              }}
              title="הקרא שאלה בעברית"
            >
              🔊
            </button>
          </div>

          <div style={{ marginTop: '10px', backgroundColor: 'rgba(2, 6, 23, 0.6)', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', color: '#94a3b8' }}>
            💡 <strong>רמז:</strong> {currentQ.hint}
          </div>
        </div>

        {/* 4 אפשרויות בחירה (מעורבבות) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginBottom: '14px' }}>
          {currentQ.options.map((opt, idx) => {
            const isSelected = selectedOption === opt.id;
            let bgColor = '#0f172a';
            let borderColor = '#1e293b';
            let textColor = '#e2e8f0';

            if (isSelected && !isAnswerChecked) {
              bgColor = 'rgba(245, 158, 11, 0.2)';
              borderColor = '#f59e0b';
              textColor = '#fbbf24';
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

            const letter = ['א', 'ב', 'ג', 'ד'][idx] || '';

            return (
              <button
                key={opt.id}
                onClick={() => !isAnswerChecked && setSelectedOption(opt.id)}
                style={{
                  backgroundColor: bgColor,
                  border: `2px solid ${borderColor}`,
                  borderRadius: '16px',
                  padding: '12px 14px',
                  textAlign: 'right',
                  color: textColor,
                  fontSize: '14px',
                  fontWeight: isSelected || (isAnswerChecked && opt.isCorrect) ? 'bold' : 'normal',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: isAnswerChecked ? 'default' : 'pointer',
                  boxShadow: '0 2px 6px rgba(0,0,0,0.2)'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ backgroundColor: '#020617', width: '24px', height: '24px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', border: '1px solid #334155' }}>
                    {letter}
                  </span>
                  <span>{opt.text}</span>
                </div>

                {isAnswerChecked && opt.isCorrect && <span style={{ color: '#34d399', fontWeight: 'bold' }}>✔ נכון</span>}
                {isAnswerChecked && isSelected && !opt.isCorrect && <span style={{ color: '#fb7185', fontWeight: 'bold' }}>✖ שגוי</span>}
              </button>
            );
          })}
        </div>

        {/* הסבר מלא מתוך חומרי הלימוד */}
        {showExplanation && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '16px', padding: '12px', marginBottom: '14px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ color: '#f59e0b', fontSize: '12px', fontWeight: 'bold' }}>📖 הסבר מתוך חוברת וינגייט:</span>
              <button
                onClick={() => speak(currentQ.explanation)}
                style={{ backgroundColor: '#3b0764', color: '#d8b4fe', border: '1px solid #6b21a8', borderRadius: '8px', padding: '3px 8px', fontSize: '11px', cursor: 'pointer' }}
              >
                🔊 הקרא הסבר
              </button>
            </div>
            <p style={{ margin: 0, fontSize: '12px', color: '#cbd5e1', lineHeight: '1.5', backgroundColor: '#020617', padding: '10px', borderRadius: '10px' }}>
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>

      {/* כפתור בדיקה / שאלה הבאה */}
      <footer style={{ paddingTop: '8px', paddingBottom: '10px' }}>
        {!isAnswerChecked ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedOption}
            style={{
              width: '100%',
              backgroundColor: selectedOption ? '#f59e0b' : '#334155',
              color: selectedOption ? '#020617' : '#94a3b8',
              border: 'none',
              borderRadius: '16px',
              padding: '15px',
              fontSize: '16px',
              fontWeight: '900',
              cursor: selectedOption ? 'pointer' : 'not-allowed',
              boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
            }}
          >
            בדוק תשובה
          </button>
        ) : (
          <button
            onClick={handleNext}
            style={{
              width: '100%',
              backgroundColor: '#10b981',
              color: '#020617',
              border: 'none',
              borderRadius: '16px',
              padding: '15px',
              fontSize: '16px',
              fontWeight: '900',
              cursor: 'pointer',
              boxShadow: '0 4px 14px rgba(0,0,0,0.4)'
            }}
          >
            {currentIndex === questions.length - 1 ? '🎉 סיים מודול וסכם ציון' : 'שאלה הבאה ➜'}
          </button>
        )}
      </footer>

    </main>
  );
}
