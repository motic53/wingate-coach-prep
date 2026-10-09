"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

// טיפוס עבור שאלה
interface Question {
  id: string;
  institution: "wingate" | "meso";
  image?: string;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  distractorAnalysis?: string[];
}

// ==========================================
// 1. בנק השאלות המלא - מזו אקדמי (Meso)
// ==========================================
const mesoQuestions: Question[] = [
  {
    id: "meso-q1",
    institution: "meso",
    image: "/images/meso/meso_basic_tissus.jpg",
    question: "מהן ארבע רקמות היסוד (Basic Tissues) המרכיבות את גוף האדם, ומה תפקידן המשותף?",
    options: [
      "רקמת אפיתל, רקמת חיבור, רקמת שריר ורקמת עצב",
      "רקמת עצם, רקמת סחוס, רקמת דם ורקמת שומן",
      "רקמת שריר חלק, שריר שלד, שריר הלב ורקמת גיד",
      "רקמת עור, רקמת שומן, רקמת מוח ורקמת כלי דם"
    ],
    correctAnswer: 0,
    explanation: "בגוף האדם קיימות 4 רקמות יסוד ראשיות: אפיתל (ציפוי והגנה), חיבור (תמיכה, הזנה וקישור), שריר (ייצור כוח ותנועה) ועצב (העברת אותות ובקרה). עצם, סחוס ושומן הן תת-סוגים של רקמת חיבור.",
    distractorAnalysis: [
      "נכון: ארבע רקמות היסוד הבסיסיות.",
      "שגוי: עצם, סחוס, דם ושומן נמנים כולם תחת משפחת רקמות החיבור ולא מהווים רקמות יסוד נפרדות.",
      "שגוי: מדובר בסוגי רקמת שריר בלבד ולא בארבע רקמות היסוד של הגוף.",
      "שגוי: עור ומוח הם איברים המורכבים מכמה רקמות, ולא רקמות יסוד בפני עצמן."
    ]
  },
  {
    id: "meso-q2",
    institution: "meso",
    image: "/images/meso/meso_from_tissues_to_organs.jpg",
    question: "כיצד מוגדר המדרג הביולוגי במעבר מרקמה לאיבר ומאיבר למערכת?",
    options: [
      "איבר מורכב ממספר רקמות שונות הפועלות יחד לביצוע תפקיד מוגדר; מספר איברים מתאמים מערכת",
      "איבר הוא צבר של תאים זהים בלבד ללא רקמת חיבור",
      "מערכת הגוף בנויה מתאים בודדים ללא צורך במבנה של איברים",
      "רקמה נוצרת מחיבור של מספר איברים הפועלים במשותף"
    ],
    correctAnswer: 0,
    explanation: "המדרג הביולוגי נע מ: תאים -> רקמות (צבר תאים בעלי מבנה ותפקיד דומה) -> איברים (שילוב של מספר רקמות שונות) -> מערכות גוף (קבוצת איברים הפועלים יחד למטרה משותפת).",
    distractorAnalysis: [
      "נכון: הגדרה מדויקת של המדרג האנטומי מרקמה לאיבר ולמערכת.",
      "שגוי: איבר תמיד מורכב מלפחות שתיים או יותר רקמות שונות, ולא מתאים זהים בלבד.",
      "שגוי: המערכות מורכבות מאיברים ולא ישירות מתאים בודדים ללא תיווך רקמתי.",
      "שגוי: ההיררכיה הפוכה – רקמות מרכיבות איבר, ולא איברים מרכיבים רקמה."
    ]
  },
  {
    id: "meso-q3",
    institution: "meso",
    image: "/images/meso/meso_Introduction Summary.jpg",
    question: "על פי עקרונות המבוא האנטומי והפיזיולוגי, מהו הומאוסטזיס (Homeostasis)?",
    options: [
      "שמירה על סביבה פנימית יציבה וקבועה בטווח ערכים תקין למרות שינויים בסביבה החיצונית",
      "מצב של מנוחה מוחלטת ללא פעילות מטבולית של התאים",
      "תהליך גדילת השלד והתגרמות העצמות בילדות",
      "יכולת השריר לפתח כוח מרבי בעת כיווץ אקסצנטרי"
    ],
    correctAnswer: 0,
    explanation: "הומאוסטזיס הוא מנגנון הוויסות העצמי של הגוף לשמירה על יציבות הסביבה הפנימית (חום גוף, חומציות, לחץ דם, רמת סוכר וכו') חרף שינויים חיצוניים.",
    distractorAnalysis: [
      "נכון: הגדרת מפתח במבוא לפיזיולוגיה ואנטומיה.",
      "שגוי: הומאוסטזיס כרוך בפעילות מטבולית דינמית ומתמדת, ולא במנוחה מוחלטת ללא חילוף חומרים.",
      "שגוי: זהו תהליך אוסיפיקציה (Ossification), לא הומאוסטזיס.",
      "שגוי: זוהי הגדרה של כוח שריר / מתח מכני."
    ]
  },
  {
    id: "meso-q4",
    institution: "meso",
    image: "/images/meso/meso_apithelum.jpg",
    question: "מהו אחד המאפיינים המרכזיים של רקמת האפיתל (Epithelial Tissue)?",
    options: [
      "תאים צפופים עם מעט מאוד חומר בין-תאי, חסרת כלי דם (Avascular) הניזונה בדיפוזיה",
      "שפע של כלי דם וסיבי קולגן עבים המפרידים בין תא לתא",
      "יכולת כיווץ אקטיבית ופיתוח מומנט סיבובי סביב מפרק",
      "העברת דחפים עצמאיים באמצעות נוירוטרנסמיטרים"
    ],
    correctAnswer: 0,
    explanation: "רקמת אפיתל מצטיינת בתאים צפופים ביותר עם חומר בין-תאי מזערי. היא אינה מכילה כלי דם ישירים (Avascular) ומקבלת את הזנתה בדיפוזיה מרקמת החיבור שמתחתיה דרך קרום הבסיס.",
    distractorAnalysis: [
      "נכון: מאפיין ייחודי של אפיתל.",
      "שגוי: תיאור המאפיין רקמת חיבור תחוחה או צפופה, לא אפיתל.",
      "שגוי: מאפיין של רקמת שריר בלבד.",
      "שגוי: מאפיין ייחודי של רקמת עצב."
    ]
  },
  {
    id: "meso-q5",
    institution: "meso",
    image: "/images/meso/meso_Endothelium.jpg",
    question: "היכן מצויה רקמת האנדותל (Endothelium) ומה תפקידה העיקרי?",
    options: [
      "מרפדת את השכבה הפנימית של כלי הדם ומאפשרת זרימת דם חלקה ומבוקרת",
      "מרפדת את מערכת העיכול מבחוץ ומגנה עליה מפני חיכוך",
      "עוטפת את עצמות השלד ומהווה את שכבת הפריאוסט",
      "מייצרת את נוזל המפרק הסינוביאלי"
    ],
    correctAnswer: 0,
    explanation: "אנדותל הוא סוג ייחודי של אפיתל חד-שכבתי שטוח המרפד את הדופן הפנימית של כלי הדם, הלב ונימי הדם, ומאפשר זרימה למינרית והחלפת חומרים חלקה.",
    distractorAnalysis: [
      "נכון: מיקומה ותפקידה של רקמת האנדותל.",
      "שגוי: המעטפת החיצונית של איברי הבטן היא רקמת הסרוזה (פריטונאום).",
      "שגוי: מעטפת העצם החיצונית נקראת פריאוסטאום (Periosteum).",
      "שגוי: נוזל המפרק מופרש על ידי הממברנה הסינוביאלית."
    ]
  },
  {
    id: "meso-q6",
    institution: "meso",
    image: "/images/meso/meso_fibers.jpg",
    question: "מהו ההבדל העיקרי בין סיבי קולגן (Collagen) לבין סיבים אלסטיים (Elastin) ברקמת החיבור?",
    options: [
      "קולגן מעניק חוזק מתיחה גבוה ועמידות; סיבים אלסטיים מאפשרים גמישות וחזרה לצורה המקורית",
      "קולגן מאפשר התארכות של מאות אחוזים ללא התנגדות; אלסטין קשיח ובלתי גמיש",
      "סיבי קולגן נוצרים רק בעצמות; אלסטין קיים אך ורק בגידים",
      "שני הסיבים זהים במבנה ובתפקוד ואין הבדל מכני ביניהם"
    ],
    correctAnswer: 0,
    explanation: "סיבי קולגן הם בעלי חוזק מתיחה אדיר ומגנים מפני קריעה (חיוניים בגידים ורצועות). סיבים אלסטיים מעניקים לרקמות יכולת הימתחות והתאוששות חזרה לאורכן המקורי (כמו בדפנות עורקים וריאות).",
    distractorAnalysis: [
      "נכון: הבדל מכני מובהק בין קולגן לאלסטין.",
      "שגוי: ההפך הגמור – קולגן עמיד למתיחה וכמעט לא מתארך, בעוד אלסטין ניחן בגמישות רבה.",
      "שגוי: קולגן מצוי בשפע בגידים, רצועות, עור וסחוסים; אלסטין מצוי בריאות, עורקים ורצועות מסוימות.",
      "שגוי: קיימים הבדלים ביומכניים ומבניים חדים ביניהם."
    ]
  },
  {
    id: "meso-q7",
    institution: "meso",
    image: "/images/meso/meso_fiber_types.jpg",
    question: "אילו סוגי סיבי חלבון עיקריים מרכיבים את המטריקס החוץ-תאי (ECM) של רקמות החיבור?",
    options: [
      "סיבי קולגן, סיבים אלסטיים וסיבים רטיקולריים (Reticular)",
      "סיבי אקטין, מיוזין וטרופונין",
      "סיבי פיברינוגן, קרטין ומלנין",
      "סיבי המוגלובין, אלבומין ומיוגלובין"
    ],
    correctAnswer: 0,
    explanation: "המטריקס החוץ-תאי ברקמת חיבור כולל סיבי קולגן (חוזק), סיבים אלסטיים (גמישות) וסיבים רטיקולריים (רשת תמיכה עדינה באיברים פנימיים).",
    distractorAnalysis: [
      "נכון: שלושת סוגי הסיבים של רקמות חיבור.",
      "שגוי: אקטין ומיוזין הם חלבוני כיווץ תוך-תאיים ברקמת שריר.",
      "שגוי: קרטין הוא חלבון מבני באפיתל (עור/שיער), מלנין הוא פיגמנט ופיברינוגן הוא חלבון פלזמה.",
      "שגוי: חלבוני דם ושריר המשמשים להובלת חמצן, לא סיבי רקמת חיבור."
    ]
  },
  {
    id: "meso-q8",
    institution: "meso",
    image: "/images/meso/meso_muscle_tissues.jpg",
    question: "מהם שלושת סוגי רקמות השריר בגוף והמאפיין התפקודי המבדיל ביניהם?",
    options: [
      "שריר שלד (משורטט, רצוני), שריר הלב (משורטט, בלתי רצוני), שריר חלק (אינו משורטט, בלתי רצוני)",
      "שריר חלק (רצוני), שריר שלד (בלתי רצוני), שריר הלב (רצוני)",
      "שריר גידי (רצוני), שריר מפרקי (בלתי רצוני), שריר עורי (בלתי רצוני)",
      "שריר לבן (רצוני), שריר אדום (בלתי רצוני), שריר מעורב (אוטונומי)"
    ],
    correctAnswer: 0,
    explanation: "שריר שלד נשלט רצונית ומאופיין במבנה משורטט. שריר הלב פועל אוטונומית אך הוא בעל פסי רוחב (משורטט). שריר חלק (באיברים פנימיים וכלי דם) הוא בלתי רצוני ואינו משורטט.",
    distractorAnalysis: [
      "נכון: סיווג מדויק לפי מורפולוגיה ובקרה עצבית.",
      "שגוי: שריר חלק אינו רצוני ושריר שלד אינו בלתי רצוני.",
      "שגוי: גידים ומפרקים אינם סוגי רקמת שריר אלא רקמות חיבור.",
      "שגוי: חלוקה לצבע סיבים (לבן/אדום) מתייחסת לסוגי סיבי שריר שלד (סוג 1 מול סוג 2), ולא לסיווג הרקמתי הראשי."
    ]
  },
  {
    id: "meso-q9",
    institution: "meso",
    image: "/images/meso/meso_muscle_heart.jpg",
    question: "איזה מאפיין ייחודי קיים ברקמת שריר הלב (Myocardium) המאפשר לה לפעול כסינסיציום (יחידה תפקודית אחת)?",
    options: [
      "דיסקים מושחלים (Intercalated discs) עם צומתי מעבר (Gap junctions) להולכה חשמלית מהירה",
      "חיבור ישיר לגידים גרמיים המעבירים מומנט לשלד",
      "שליטה מוטורית ישירה מקליפת המוח הרצונית (Cerebral Cortex)",
      "היעדר מוחלט של מיטוכונדריה עקב הסתמכות על גליקוליזה אנאירובית"
    ],
    correctAnswer: 0,
    explanation: "שריר הלב מכיל Intercalated discs המקשרים מכנית וחשמלית בין תאי השריר דרך Gap junctions, מה שמאפשר מעבר פוטנציאל פעולה מיידי והתכווצות סדירה של כל חלל הלב כיחידה אחת.",
    distractorAnalysis: [
      "נכון: מאפיין ייחודי המבדיל את שריר הלב משריר שלד.",
      "שגוי: שריר הלב אינו נאחז בגידים אל עצמות השלד.",
      "שגוי: שריר הלב מבוקר על ידי מערכת העצבים האוטונומית וקוצב הלב הפנימי, ולא מרצונית.",
      "שגוי: שריר הלב עשיר מאוד במיטוכונדריה (כ-40% מנפח התא) ונסמך לחלוטין על מטבוליזם אירובי."
    ]
  },
  {
    id: "meso-q10",
    institution: "meso",
    image: "/images/meso/meso_cartilage_locations_in_body.jpg",
    question: "איזה סוג סחוס מצוי במשטחים המפרקיים של עצמות ארוכות (Articular Cartilage)?",
    options: [
      "סחוס היאליני (Hyaline cartilage)",
      "סחוס סיבי (Fibrocartilage)",
      "סחוס אלסטי (Elastic cartilage)",
      "סחוס גרמי (Bony cartilage)"
    ],
    correctAnswer: 0,
    explanation: "הסחוס המפרקי הוא סחוס היאליני (זגוגי) – חלק, בעל מקדם חיכוך נמוך במיוחד ועמיד בעומסי דחיסה. סחוס סיבי נמצא בדיסקים בין-חולייתיים ובמניסקוסים, וסחוס אלסטי נמצא באפרכסת האוזן ובאפיגלוטיס.",
    distractorAnalysis: [
      "נכון: סחוס היאליני מכסה את קצוות העצמות במפרקים סינוביאליים.",
      "שגוי: סחוס סיבי עמיד בעומסי גזירה ונמצא בדיסקים הבין-חולייתיים ובמניסקוס.",
      "שגוי: סחוס אלסטי מאפשר גמישות מרבית ואינו מיועד למשטחי נשיאת משקל במפרקים.",
      "שגוי: אין מונח אנטומי כזה; עצם וסחוס הן רקמות נפרדות."
    ]
  },
  {
    id: "meso-q11",
    institution: "meso",
    image: "/images/meso/meso_bone_cell_stricture.jpg",
    question: "מהו תפקידם של האוסטאובלסטים (Osteoblasts) לעומת האוסטאוקלסטים (Osteoclasts) ברקמת העצם?",
    options: [
      "אוסטאובלסטים בונים ומייצרים עצם חדשה; אוסטאוקלסטים מפרקים וסופגים עצם ישנה",
      "אוסטאוקלסטים בונים עצם; אוסטאובלסטים מפרקים עצם",
      "אוסטאובלסטים מייצרים תאי דם במח העצם; אוסטאוקלסטים בונים סחוס",
      "שני התאים מבצעים אך ורק פירוק של סיבי שריר סמוכים"
    ],
    correctAnswer: 0,
    explanation: "תהליך שחלוף העצם (Remodeling) מבוסס על שיווי משקל בין אוסטאובלסטים (בוני עצם - B for Build) המפרישים מטריקס אורגני, לבין אוסטאוקלסטים (סופגי/מפרקי עצם - C for Chew/Crush).",
    distractorAnalysis: [
      "נכון: תיאור תפקידי התאים ברקמת העצם.",
      "שגוי: התפקידים הוצגו בצורה הפוכה.",
      "שגוי: ייצור תאי דם מתרחש במח העצם על ידי תאי גזע המטופואטיים.",
      "שגוי: תאי עצם אינם מפרקים רקמת שריר."
    ]
  },
  {
    id: "meso-q12",
    institution: "meso",
    image: "/images/meso/meso_bone_stricture.jpg",
    question: "ממה מורכב המטריקס הבין-תאי של רקמת העצם המקנה לה שילוב של קשיחות ועמידות לכפיפה?",
    options: [
      "כ-65% מינרלים אנאורגניים (בעיקר הידרוקסיאפטיט/סידן) לכוח דחיסה, וכ-35% סיבי קולגן לעמידות במתיחה",
      "100% שומן ומים ללא כל מינרלים",
      "בעיקר סיבים אלסטיים המאפשרים התארכות מרבית ללא שלד מינרלי",
      "תאי אפיתל בלבד העטופים בנוזל תוך-מפרקי"
    ],
    correctAnswer: 0,
    explanation: "עצם היא חומר מרוכב: החלק המינרלי (מלחי סידן וזרחן) מעניק לה קשיחות ועמידות בעומסי דחיסה, בעוד החלק האורגני (סיבי קולגן) מונע שבירות ומעניק לה גמישות ועמידות במתיחה וכפיפה.",
    distractorAnalysis: [
      "נכון: ההרכב הכימי-מכני של רקמת העצם.",
      "שגוי: עצם מכילה אחוז גבוה של מינרלים ואינה עשויה כולה משומן ומים.",
      "שגוי: סיבים אלסטיים אינם המרכיב הדומיננטי בעצם, אלא קולגן ומינרלים.",
      "שגוי: עצם היא רקמת חיבור צפופה, לא אפיתל."
    ]
  },
  {
    id: "meso-q13",
    institution: "meso",
    image: "/images/meso/meso_spongi_compact_bone.jpg",
    question: "מה ההבדל בין עצם דחוסה (Compact Bone) לעצם ספוגית (Spongy/Cancellous Bone)?",
    options: [
      "עצם דחוסה בנויה ממערכות אוסטאונים צפופות ומצויה בקליפה החיצונית; עצם ספוגית בנויה מטרבקולות ומצויה בקצוות ובחלל הפנימי",
      "עצם ספוגית היא רקמת סחוס בלתי מפותחת; עצם דחוסה אינה מכילה כלי דם כלל",
      "עצם דחוסה נמצאת רק בגולגולת; עצם ספוגית נמצאת רק באצבעות",
      "אין ביניהן שום הבדל מבני, השמות מבטאים רק צבע חיצוני שונה"
    ],
    correctAnswer: 0,
    explanation: "עצם קורטיקלית (דחוסה) מהווה את הקליפה החיצונית ועמידה בעומסי כיפוף ודחיסה ציריים. עצם ספוגית (טרבקולרית) היא רשת תלת-ממדית סופגת זעזועים המותאמת לקווי מתח משתנים ומכילה מח עצם.",
    distractorAnalysis: [
      "נכון: אפיון מבני ואנטומי מדויק.",
      "שגוי: עצם ספוגית היא עצם אמיתית ומסוידת לחלוטין, לא רקמת סחוס.",
      "שגוי: שתי התצורות קיימות כמעט בכל עצמות השלד (למשל דיאפיזה מול אפיפיזה בעצמות ארוכות).",
      "שגוי: ההבדל הארכיטקטוני והמכני ביניהן משמעותי ביותר."
    ]
  },
  {
    id: "meso-q14",
    institution: "meso",
    image: "/images/meso/meso_bone_types.jpg",
    question: "כיצד מסווגות עצמות השלד לפי צורתן המורפולוגית?",
    options: [
      "עצמות ארוכות, קצרות, שטוחות, חסרות צורה (מיוחדות) ועצמות ססמואידיות",
      "עצמות חזקות, עצמות חלשות ועצמות אלסטיות",
      "עצמות שריריות, עצמות מפרקיות ועצמות גידיות",
      "עצמות קדמיות, עצמות אחוריות ועצמות אמצעיות"
    ],
    correctAnswer: 0,
    explanation: "הסיווג האנטומי המקובל מחלק עצמות לפי צורתן לחמש קבוצות: ארוכות (עצם הירך), קצרות (שורש כף היד), שטוחות (שכמה, עצמות הגולגולת), מיוחדות/אי-רגולריות (חוליות) וססמואידיות (פיקה).",
    distractorAnalysis: [
      "נכון: חמשת הסוגים המורפולוגיים המקובלים באנטומיה.",
      "שגוי: חלוקה איכותנית שאינה קיימת באנטומיה.",
      "שגוי: עצמות אינן מוגדרות כשריריות או גידיות.",
      "שגוי: אלו מונחי כיוון במרחב ולא סיווג צורני של עצמות."
    ]
  },
  {
    id: "meso-q15",
    institution: "meso",
    image: "/images/meso/meso_bone_Growth.jpg",
    question: "באמצעות איזה מבנה מתארכות עצמות ארוכות במהלך הילדות וההתבגרות?",
    options: [
      "לוחית הגדילה האפיפיזאלית (Epiphyseal plate) העשויה סחוס היאליני",
      "רקמת הפריאוסט המעבה את העצם מבחוץ בלבד",
      "נוזל המפרק הסינוביאלי המושך את הקצוות",
      "סיבי השריר הנאחזים באפיפיזה"
    ],
    correctAnswer: 0,
    explanation: "התארכות עצמות ארוכות מתבצעת בלוחיות הגדילה (Epiphyseal plates) שבקצות העצם על ידי חלוקת תאי סחוס היאליני והתגרמותם (Endochondral ossification) עד סגירת הלוחית בבגרות.",
    distractorAnalysis: [
      "נכון: המנגנון הבלעדי לגדילה לאורך של עצמות ארוכות.",
      "שגוי: הפריאוסט אחראי לגדילה לרוחב (עיבוי העצם), לא להתארכותה.",
      "שגוי: נוזל סינוביאלי מספק סיכוך והזנה, אינו משתתף בצמיחת אורך.",
      "שגוי: גידים ושרירים אינם מושכים עצמות לצמיחה אורכית."
    ]
  },
  {
    id: "meso-q16",
    institution: "meso",
    image: "/images/meso/meso_peak_bone_mass.jpg",
    question: "באיזה עשור לחיים מגיע האדם בדרך כלל לשיא מסת העצם (Peak Bone Mass)?",
    options: [
      "בסביבות גיל 20 עד 30",
      "בגיל הילדות המוקדמת (גיל 5–10)",
      "בעשור השישי לחיים (גיל 50–60)",
      "לאחר גיל 70 עם הירידה בפעילות ההורמונלית"
    ],
    correctAnswer: 0,
    explanation: "שיא מסת העצם נבנה בילדות ובגיל ההתבגרות ומגיע לשיאו בין סוף שנות העשרה לסביבות גיל 25–30. לאחר מכן קצב הפירוק מתחיל להשתוות לקצב הבנייה ובהמשך עולה עליו.",
    distractorAnalysis: [
      "נכון: טווח הגילאים המדעי שבו מושג שיא מסת העצם.",
      "שגוי: בגיל 5–10 העצם נמצאת בעיצומה של צמיחה מואצת אך רחוקה משיא המסה הסופי.",
      "שגוי: בגיל 50–60 קיימת ירידה במסת העצם, במיוחד בנשים סביב גיל המעבר.",
      "שגוי: בגיל 70 מתרחשת לעיתים קרובות אוסטאופניה או אוסטאופורוזיס עקב איבוד עצם."
    ]
  },
  {
    id: "meso-q17",
    institution: "meso",
    image: "/images/meso/meso_bone_lose.jpg",
    question: "מהו התהליך הפתולוגי המתרחש בירידה בצפיפות העצם (Osteoporosis)?",
    options: [
      "פעילות האוסטאוקלסטים גוברת על פעילות האוסטאובלסטים, דבר המוביל להידלדלות הטרבקולות ושבירות מוגברת",
      "שקיעת יתר של סידן הגורמת לחסימת כלי הדם בתוך תעלות הוורס",
      "התרבות מהירה של תאי סחוס הגורמת להתקשות בלתי הפיכה",
      "התארכות מואצת של עצמות השלד עקב פעילות יתר של בלוטת התריס"
    ],
    correctAnswer: 0,
    explanation: "אוסטאופורוזיס נגרמת כתוצאה מהפרת האיזון בשחלוף העצם: ספיגת העצם על ידי האוסטאוקלסטים מהירה מקצב הבנייה של האוסטאובלסטים, מה שמפחית את הצפיפות המינרלית ומגדיל את הסיכון לשברים.",
    distractorAnalysis: [
      "נכון: מנגנון האובדן הגרמי באוסטאופורוזיס.",
      "שגוי: באוסטאופורוזיס יש חוסר במינרליזציה ולא שקיעת יתר.",
      "שגוי: זו אינה מחלה סחוסית אלא מחלה של רקמת העצם.",
      "שגוי: אין מדובר בהתארכות העצם אלא באובדן צפיפות וחוזק מכני."
    ]
  },
  {
    id: "meso-q18",
    institution: "meso",
    image: "/images/meso/meso_bone_density_gym.jpg",
    question: "כיצד אימון התנגדות משפיע על צפיפות העצם על פי 'חוק וולף' (Wolff's Law)?",
    options: [
      "עומסים מכניים וכוחות כיווץ של שרירים מייצרים גירוי עיוותי המעודד אוסטאובלסטים להשקיע מטריקס עצם",
      "הרמת משקולות מפרקת את העצם ללא יכולת פיצוי כדי לפנות מקום לשריר",
      "אימון התנגדות מפחית את צפיפות העצם אך מגביר את גמישות הסחוס",
      "אימון גופני אינו משפיע כלל על העצם מכיוון שהיא רקמה מתה ובלתי משתנה"
    ],
    correctAnswer: 0,
    explanation: "חוק וולף קובע שעצם מתעצבת ומתחזקת בהתאם לעומסים המופעלים עליה. עומסי דחיסה ומשיכה מאימוני כוח מעוררים מתח מכני המעודד פעילות אוסטאובלסטית ועיבוי קורטיקלי.",
    distractorAnalysis: [
      "נכון: הבסיס הפיזיולוגי לחיזוק עצם באמצעות אימוני התנגדות ואימפקט.",
      "שגוי: אימון מתאים גורם לבנייה מחודשת ופיצוי-יתר, לא לפירוק מתמשך.",
      "שגוי: אימון כוח הוכח מחקרית כמעלה או משמר את צפיפות המינרלים בעצם.",
      "שגוי: עצם היא רקמה חיה, דינמית ומטבולית המתחדשת לאורך כל החיים."
    ]
  },
  {
    id: "meso-q19",
    institution: "meso",
    image: "/images/meso/meso_skeletal_system_summary.jpg",
    question: "מהם חמשת התפקידים המרכזיים של מערכת השלד באדם?",
    options: [
      "תמיכה מבנית, הגנה על איברים חיוניים, תנועה ומנופים, מאגר מינרלים (סידן וזרחן), וייצור תאי דם (המטופואזה)",
      "הובלת חמצן בדם, כיווץ רצוני, הפרשת אינסולין, סינון רעלים בכבד ושמירה על חום",
      "חישת כאב, הולכה עצבית חשמלית, ייצור לימפוציטים בבלוטת התימוס ואיזון נוזלים",
      "נשיאת משקל בלבד ללא שום פעילות ביוכימית או המטולוגית"
    ],
    correctAnswer: 0,
    explanation: "השלד משמש כפיגום מכני (תמיכה, מנוף לתנועה והגנה על מוח, לב וריאות) וכמפעל פיזיולוגי (מאגר הסידן העיקרי וייצור תאי דם במח העצם האדום).",
    distractorAnalysis: [
      "נכון: תפקידי השלד המלאים.",
      "שגוי: אלו תפקידים השייכים למערכות הדם, השרירים, העיכול והאנדוקרינית.",
      "שגוי: אלו תפקידים השייכים למערכת העצבים והחיסון.",
      "שגוי: העצם היא איבר פעיל ביוכימית והמטופואטית ולא רק עמוד תומך פסיבי."
    ]
  },
  {
    id: "meso-q20",
    institution: "meso",
    image: "/images/meso/meso_skeletonw_system.jpg",
    question: "כיצד מחולק שלד האדם לשני חלקיו הראשיים?",
    options: [
      "שלד צירי (Axial Skeleton - גולגולת, עמוד שדרה, כלוב בית החזה) ושלד תוספי (Appendicular Skeleton - גפיים וחגורות)",
      "שלד עליון (ראש וזרועות) ושלד תחתון (אגן ורגליים)",
      "שלד ימני ושלד שמאלי בלבד",
      "שלד קדמי ושלד אחורי ללא חלוקה לגפיים"
    ],
    correctAnswer: 0,
    explanation: "שלד האדם מונה 206 עצמות ומחולק ל: שלד צירי (80 עצמות המגנות על ציר המרכז והאיברים הפנימיים) ושלד תוספי (126 עצמות המאפשרות תנועה במרחב – גפיים עליונות ותחתונות וחגורות הכתפיים והאגן).",
    distractorAnalysis: [
      "נכון: החלוקה האנטומית התקנית של השלד.",
      "שגוי: חלוקה עממית שאינה משקפת את הסיווג האנטומי הרשמי.",
      "שגוי: הגוף אומנם סימטרי דו-צדדית אך זו אינה חלוקת השלד.",
      "שגוי: חלוקה זו אינה קיימת בספרות המדעית."
    ]
  },
  {
    id: "meso-q21",
    institution: "meso",
    image: "/images/meso/meso_axial_skeleton_spine.jpg",
    question: "מהו התפקיד המרכזי של עמוד השדרה כחלק מהשלד הצירי?",
    options: [
      "הגנה על חוט השדרה, נשיאת משקל הראש ופלג הגוף העליון, והענקת גמישות לתנועת הגו",
      "ייצור כל הורמוני הגדילה של הגוף",
      "חיבור ישיר של שרירי הנשימה לעצמות האצבעות",
      "בלימת זעזועים בלעדית של מפרקי הקרסול בלבד"
    ],
    correctAnswer: 0,
    explanation: "עמוד השדרה משלב יציבות והגנה לתעלה העצבית (חוט השדרה) יחד עם גמישות תנועתית ובלימת זעזועים בזכות המבנה הפרוק והעקומות הפיזיולוגיות שלו.",
    distractorAnalysis: [
      "נכון: תפקידיו הביומכניים והאנטומיים של עמוד השדרה.",
      "שגוי: הורמוני גדילה מופרשים מבלוטת יותרת המוח (היפופיזה), לא מעמוד השדרה.",
      "שגוי: שרירי הנשימה אינם מתחברים לעצמות האצבעות.",
      "שגוי: עמוד השדרה בולם זעזועים לגו ולגולגולת, לא למפרק הקרסול."
    ]
  },
  {
    id: "meso-q22",
    institution: "meso",
    image: "/images/meso/meso_spine_structure_and_regions.jpg",
    question: "מכמה חוליות מורכב כל אזור בעמוד השדרה מלמעלה למטה?",
    options: [
      "7 צוואריות (Cervical), 12 חזיות (Thoracic), 5 מותניות (Lumbar), 5 מאוחות בסקרום (Sacrum) ו-3-5 בקוקסיקס",
      "12 צוואריות, 7 חזיות, 5 מותניות ו-2 בעצם הזנב",
      "5 צוואריות, 5 חזיות, 12 מותניות וסקרום אחד",
      "8 צוואריות, 10 חזיות, 6 מותניות ו-4 בסקרום"
    ],
    correctAnswer: 0,
    explanation: "עמוד השדרה מחולק לפי: C1–C7 (צווארי - 7), T1–T12 (חזי - 12, מחוברות לצלעות), L1–L5 (מותני - 5, חוליות גדולות לנשיאת משקל), סקרום (5 מאוחות) ועצם העוקץ (Coccyx - 3 עד 5 מאוחות).",
    distractorAnalysis: [
      "נכון: החלוקה המספרית המדויקת של מקטעי עמוד השדרה.",
      "שגוי: המספרים בין הצווארי לחזי הוחלפו.",
      "שגוי: יש 7 חוליות צוואריות ו-12 חזיות, לא 5.",
      "שגוי: קיימות 7 חוליות צוואר בלבד (ולא 8, אם כי יש 8 שורשי עצבים צוואריים)."
    ]
  },
  {
    id: "meso-q23",
    institution: "meso",
    image: "/images/meso/meso_spinal_curves.jpg",
    question: "מהן ארבע העקומות הפיזיולוגיות של עמוד השדרה במבט מהצד (Sagittal View)?",
    options: [
      "לורדוזה צווארית ומותנית (קעירות אחורית), קיפוזה חזית וסקראלית (קמירות אחורית)",
      "קיפוזה צווארית ומותנית, לורדוזה חזית וסקראלית",
      "סקוליוזיס ימני בחזה וסקוליוזיס שמאלי במותן",
      "עקומה ישרה לחלוטין ללא קשתות במבט סגיטלי"
    ],
    correctAnswer: 0,
    explanation: "עמוד השדרה התקין במבט מהצד אינו ישר אלא בעל עקומות המגבירות את עמידותו לעומס דחיסה פי 10: לורדוזה (שקע אחורי) בצוואר ובמותן, וקיפוזה (קשת אחורית) בגב העליון ובסקרום.",
    distractorAnalysis: [
      "נכון: הגדרה נכונה של העקומות הראשוניות והמשניות.",
      "שגוי: העקומות הפוכות (המותן היא לורדוזה, לא קיפוזה).",
      "שגוי: סקוליוזיס (עקמת) היא סטייה במישור הפרונטלי (מבט מאחור) ונחשבת לליקוי יציבה.",
      "שגוי: עמוד שדרה ישר (Flat back) הוא ליקוי יציבתי הפוגע בבלימת זעזועים."
    ]
  },
  {
    id: "meso-q24",
    institution: "meso",
    image: "/images/meso/meso_vertebra_structure.jpg",
    question: "אילו רכיבים מרכזיים מרכיבים חוליה טיפוסית בעמוד השדרה?",
    options: [
      "גוף החוליה (Vertebral Body) מלפנים, קשת החוליה (Vertebral Arch) מאחור, והנקב החולייתי (Vertebral Foramen) ביניהם",
      "מפרק כדורי בלבד ללא בליטות גרמיות",
      "לוחית אפיפיזאלית ללא תעלה עצבית",
      "סחוס פיברוטי רך ללא מרכיב גרמי קשיח"
    ],
    correctAnswer: 0,
    explanation: "חוליה טיפוסית כוללת גוף חוליה נושא משקל מלפנים, קשת אחורית עם זיזים (Spinous ו-Transverse processes) לאחיזת שרירים ורצועות, ונקב חולייתי שדרכו עובר חוט השדרה.",
    distractorAnalysis: [
      "נכון: המבנה האנטומי הבסיסי של חוליה.",
      "שגוי: חוליה אינה מפרק כדורי ומכילה זיזים גרמיים בולטים.",
      "שגוי: בחוליה יש נקב חולייתי מרכזי שבו עובר חוט השדרה.",
      "שגוי: חוליה היא עצם אי-רגולרית גרמית, לא סחוס רך בלבד."
    ]
  },
  {
    id: "meso-q25",
    institution: "meso",
    image: "/images/meso/meso_three_connected_vertebrae.jpg",
    question: "מה תפקידו של הדיסק הבין-חולייתי (Intervertebral Disc) הממוקם בין גופי החוליות?",
    options: [
      "בלימת זעזועים, פיזור עומסי לחץ ואפשרות תנועה מבוקרת בין חוליה לחוליה",
      "נעילה מוחלטת של עמוד השדרה כדי למנוע כל תנועה",
      "הובלת נוזל מוחי-שדרתי (CSF) ישירות למוח",
      "ייצור תאי דם לבנים עבור מערכת החיסון"
    ],
    correctAnswer: 0,
    explanation: "הדיסק הבין-חולייתי בנוי מטבעת סיבית (Annulus fibrosus) וליבה ג'לטינית (Nucleus pulposus). הוא משמש כבולם זעזועים הידראולי המפזר לחצים ומאפשר תנועתיות בין חוליות סמוכות.",
    distractorAnalysis: [
      "נכון: תפקיד ביומכני מפתח של הדיסק הבין-חולייתי.",
      "שגוי: הדיסק מאפשר תנועה ולא מונע אותה לחלוטין.",
      "שגוי: ה-CSF זורם בחלל התת-עכבישי (Subarachnoid space) בתוך התעלה העצבית ולא בדיסק.",
      "שגוי: תאי דם מיוצרים במח העצם, לא בדיסק הסחוסי."
    ]
  },
  {
    id: "meso-q26",
    institution: "meso",
    image: "/images/meso/meso_three_connected_vertebrae_2.jpg",
    question: "איזה מפרק נוצר בין הזיזים המפרקיים (Articular processes) של חוליות סמוכות?",
    options: [
      "מפרקי הפאסט (Facet joints / Zygapophysial joints) המכוונים ומגבילים את כיווני התנועה",
      "מפרק סיבי ללא תנועה (Suture)",
      "מפרק כדורי חופשי בעל שלוש דרגות חופש מלאות לכל חוליה",
      "מפרק גומפוזיס (Gomphosis)"
    ],
    correctAnswer: 0,
    explanation: "מפרקי הפאסט הם מפרקים סינוביאליים מישוריים (Gliding joints) בין הזיזים המפרקיים של חוליות שכנות. הזווית שלהם בכל אזור (צווארי, חזי, מותני) מכתיבה אילו תנועות יתאפשרו ואילו יוגבלו.",
    distractorAnalysis: [
      "נכון: מפרקי הפאסט קובעים את כיוון התנועה האפשרי בכל מקטע שדרתי.",
      "שגוי: מפרק סוטורה קיים בין עצמות הגולגולת בלבד.",
      "שגוי: המפרקים אינם כדוריים (Ball and socket) והתנועה בכל מקטע מוגבלת מאוד.",
      "שגוי: גומפוזיס הוא מפרק החיבור הייחודי של השן למכתשית הלסת."
    ]
  },
  {
    id: "meso-q27",
    institution: "meso",
    image: "/images/meso/meso_typical_posture_defects.jpg",
    question: "כיצד מאופיין ליקוי יציבה מסוג 'היפר-קיפוזיס' (Hyper-kyphosis)?",
    options: [
      "הקשתה מוגברת של עמוד השדרה החזי לאחור, מלווה לעיתים קרובות בכתפיים שמוטות וראש קדימה",
      "הקשתה מוגברת של הגב התחתון לפנים עם הטיית אגן לפנים",
      "סטייה צידית של עמוד השדרה במישור החזיתי עם סיבוב חוליות",
      "יישור מוחלט של כל קשתות עמוד השדרה ומראה של גב שטוח"
    ],
    correctAnswer: 0,
    explanation: "היפר-קיפוזיס היא התעגלות מוגזמת של עמוד השדרה החזי לאחור (Round back), המתבטאת לרוב בשילוב עם קיצור שרירי החזה, חולשת שרירי השכמות (Rhomboids/Trapezius אמצעי ותחתון) ומנח ראש קדמי.",
    distractorAnalysis: [
      "נכון: הגדרה קלאסית של היפר-קיפוזיס חזית.",
      "שגוי: זהו תיאור של היפר-לורדוזה מותנית (Hyper-lordosis).",
      "שגוי: זהו תיאור של עקמת (Scoliosis).",
      "שגוי: זהו תיאור של גב שטוח (Flat back)."
    ]
  },
  {
    id: "meso-q28",
    institution: "meso",
    image: "/images/meso/meso_posture_defects_gym_floor.jpg",
    question: "בהתייחס לליקויי יציבה ואימון בחדר הכושר, מהו ההבדל המרכזי בין ליקוי יציבה מבני (Structural) לתפקודי (Functional)?",
    options: [
      "ליקוי תפקודי נובע מאי-איזון שרירי וניתן לשיפור באימון; ליקוי מבני נובע משינוי בגרמי העצם ואינו בר-תיקון מלא באימון",
      "ליקוי מבני עובר מעצמו תוך שבוע; ליקוי תפקודי מחייב ניתוח חירום",
      "שני הליקויים זהים לחלוטין ואין שום דרך להבדיל ביניהם בבדיקה פשוטה",
      "מדריך כושר רשאי לתת מרשמי תרופות לטיפול בליקוי מבני"
    ],
    correctAnswer: 0,
    explanation: "ליקוי תפקודי נובע מהרגלי יציבה, חוסר איזון שרירי (שרירים מקוצרים מול מוחלשים) ומשתפר במנחים שונים (כמו פשיטה/שכיבה). ליקוי מבני כולל שינוי בצורת החוליות או קיבוע גרמי ודורש בירור אורתופדי.",
    distractorAnalysis: [
      "נכון: עיקרון יסוד בליקויי יציבה בחדר הכושר ובגבולות הגזרה של המדריך.",
      "שגוי: ליקוי מבני אינו חולף מעצמו תוך שבוע.",
      "שגוי: בבדיקת כיפוף לפנים (Adams test) עקמת מבנית תציג דבשת גרמית, בעוד עקמת תפקודית תתיישר.",
      "שגוי: מתן מרשמי תרופות אינו בסמכותו של מדריך כושר אלא של רופא בלבד."
    ]
  }
];

// ==========================================
// 2. בנק השאלות המלא - וינגייט (Wingate)
// ==========================================
const wingateQuestions: Question[] = [
  {
    id: "w-q1",
    institution: "wingate",
    question: "איזה שריר הוא האגוניסט הראשי (Prime Mover) בפשיטת ירך במהלך תרגיל Deadlift קלאסי?",
    options: [
      "Gluteus Maximus (עכוז גדול) יחד עם שרירי ה-Hamstrings",
      "Quadriceps Femoris (ארבע ראשי)",
      "Iliopsoas (כסל ומותניים)",
      "Rectus Abdominis (ישר בטני)"
    ],
    correctAnswer: 0,
    explanation: "בפשיטת ירך, השריר המרכזי והחזק ביותר הוא Gluteus Maximus, הפועל בשיתוף עם שרירי מיתר הברך (Hamstrings) לפשיטת מפרק הירך כנגד התנגדות.",
    distractorAnalysis: [
      "נכון: האגוניסטים הראשיים בפשיטת ירך.",
      "שגוי: הארבע-ראשי מבצע פשיטה בברך, לא פשיטה בירך.",
      "שגוי: שריר זה הוא כופף ירך ראשי (אנטגוניסט לפשיטה).",
      "שגוי: שריר זה מייצב את הגו (איזומטרית) ואינו מניע את מפרק הירך."
    ]
  },
  {
    id: "w-q2",
    institution: "wingate",
    question: "מהו סוג הכיווץ של שריר ה-Biceps Brachii בעת שלב ההורדה המבוקרת בתרגיל כפיפת מרפקים בעמידה?",
    options: [
      "כיווץ אקסצנטרי (Eccentric)",
      "כיווץ קונצנטרי (Concentric)",
      "כיווץ איזומטרי (Isometric)",
      "כיווץ איזוקינטי (Isokinetic)"
    ],
    correctAnswer: 0,
    explanation: "שלב ההורדה המבוקרת מול כוח המשיכה מתבצע תוך כדי התארכות השריר תחת עומס – זהו כיווץ אקסצנטרי.",
    distractorAnalysis: [
      "נכון: השריר מייצר כוח תוך כדי התארכות.",
      "שגוי: כיווץ קונצנטרי מתרחש בשלב ההרמה כאשר השריר מתקצר.",
      "שגוי: כיווץ איזומטרי מתרחש כאשר אורך השריר אינו משתנה (סטטי).",
      "שגוי: כיווץ איזוקינטי דורש מכשור מיוחד השומר על מהירות קבועה."
    ]
  },
  {
    id: "w-q3",
    institution: "wingate",
    question: "באיזה מישור וסביב איזה ציר תנועה מתבצעת תנועת הרחקת ירך (Hip Abduction)?",
    options: [
      "מישור חזיתי (Frontal plane) סביב ציר סגיטלי (סגיטלי-אופקי)",
      "מישור סגיטלי (Sagittal plane) סביב ציר חזיתי",
      "מישור אופקי (Transverse plane) סביב ציר אנכי",
      "מישור אלכסוני סביב ציר קדמי-אחורי"
    ],
    correctAnswer: 0,
    explanation: "תנועות הרחקה וקירוב מתבצעות במישור החזיתי (Frontal Plane) סביב ציר סגיטלי (Sagittal Axis).",
    distractorAnalysis: [
      "נכון: שילוב מישור וציר נכון לתנועת הרחקה/קירוב.",
      "שגוי: במישור הסגיטלי מתבצעות תנועות כפיפה ופשיטה.",
      "שגוי: במישור האופקי מתבצעות תנועות סיבוב פנימה/החוצה.",
      "שגוי: המונח אינו חלק מצירי היסוד האנטומיים."
    ]
  },
  {
    id: "w-q4",
    institution: "wingate",
    question: "מהו התפקיד העיקרי של מסובבי הכתף (Rotator Cuff - SITS) בעת הרמת הזרוע מעל הראש?",
    options: [
      "מרכוז ראש עצם הזרוע (Humerus) במכתש הגלנואידי ומניעת פריקה/חיכוך",
      "ייצור מרבית הכוח להרמת המשקל",
      "סיבוב כף היד לפרונציה מלאה",
      "פשיטת בית החזה לאחור"
    ],
    correctAnswer: 0,
    explanation: "שרירי השרוול המסובב (Supraspinatus, Infraspinatus, Teres Minor, Subscapularis) פועלים כמייצבים דינמיים המושכים את ראש עצם הזרוע פנימה ולמטה כדי למנוע צביטה ואי-יציבות.",
    distractorAnalysis: [
      "נכון: שמירה על יציבות דינמית במפרק הגלנו-הומורלי.",
      "שגוי: שריר הדלתואיד (Deltoid) הוא המניע העיקרי המייצר את כוח ההרמה.",
      "שגוי: פרונציה מבוצעת על ידי שרירי האמה.",
      "שגוי: פשיטת בית חזה מבוצעת על ידי זוקפי הגו."
    ]
  }
];

// מאגר מאוחד
const allQuestions: Question[] = [...mesoQuestions, ...wingateQuestions];

// ==========================================
// 3. רכיב זום וגרירה (Pan & Zoom חסין שגיאות)
// ==========================================
function ZoomPanImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);
  const startPos = useRef({ x: 0, y: 0 });

  const handlePointerDown = (e: React.PointerEvent<HTMLDivElement>) => {
    if (scale <= 1) return;
    setIsDragging(true);
    startPos.current = { x: e.clientX - position.x, y: e.clientY - position.y };
    e.currentTarget.setPointerCapture(e.pointerId);
  };

  const handlePointerMove = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    setPosition({
      x: e.clientX - startPos.current.x,
      y: e.clientY - startPos.current.y
    });
  };

  const handlePointerUp = (e: React.PointerEvent<HTMLDivElement>) => {
    setIsDragging(false);
    try {
      e.currentTarget.releasePointerCapture(e.pointerId);
    } catch {
      // הגנה במקרה של שחרור בלתי צפוי
    }
  };

  const zoomIn = () => setScale((s) => Math.min(s + 0.4, 3.5));
  const zoomOut = () => {
    setScale((s) => {
      const next = Math.max(s - 0.4, 1);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };
  const resetZoom = () => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
  };

  return (
    <div className="relative w-full overflow-hidden rounded-xl border border-slate-700 bg-slate-950 select-none">
      <div
        className={`relative h-64 sm:h-80 w-full overflow-hidden ${
          scale > 1 ? "cursor-grab active:cursor-grabbing" : "cursor-default"
        }`}
        onPointerDown={handlePointerDown}
        onPointerMove={handlePointerMove}
        onPointerUp={handlePointerUp}
        onPointerCancel={handlePointerUp}
      >
        <div
          className="w-full h-full relative transition-transform duration-75"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "center center"
          }}
        >
          <Image
            src={src}
            alt={alt}
            fill
            className="object-contain pointer-events-none"
            priority
          />
        </div>
      </div>

      {/* פקדי זום */}
      <div className="absolute bottom-3 left-3 flex gap-1.5 bg-slate-900/90 p-1.5 rounded-lg border border-slate-700 shadow-lg backdrop-blur">
        <button
          type="button"
          onClick={zoomIn}
          aria-label="הגדל תמונה"
          className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-white font-bold hover:bg-slate-700 transition"
        >
          +
        </button>
        <button
          type="button"
          onClick={zoomOut}
          aria-label="הקטן תמונה"
          className="w-8 h-8 flex items-center justify-center rounded bg-slate-800 text-white font-bold hover:bg-slate-700 transition"
        >
          -
        </button>
        <button
          type="button"
          onClick={resetZoom}
          aria-label="איפוס זום"
          className="px-2.5 h-8 flex items-center justify-center rounded bg-slate-800 text-xs text-slate-200 hover:bg-slate-700 transition"
        >
          איפוס
        </button>
      </div>
    </div>
  );
}

// ==========================================
// 4. הרכיב הראשי של האפליקציה (Quiz App)
// ==========================================
export default function QuizPage() {
  const [selectedInst, setSelectedInst] = useState<"all" | "meso" | "wingate">("meso");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);

  // סינון השאלות לפי מוסד
  const filteredQuestions = allQuestions.filter((q) => {
    if (selectedInst === "all") return true;
    return q.institution === selectedInst;
  });

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

  // איפוס בעת מעבר מוסד
  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
  }, [selectedInst]);

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-4 sm:p-8" dir="rtl">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* כותרת ראשית ומעבר מוסדות */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              הכנה למבחני מאמני כושר
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              בנק תרגול אינטראקטיבי: מזו אקדמי & מכללת וינגייט
            </p>
          </div>

          <div className="inline-flex rounded-lg bg-slate-900 p-1 border border-slate-800">
            <button
              onClick={() => setSelectedInst("meso")}
              className={`px-4 py-1.5 text-sm font-semibold rounded-md transition ${
                selectedInst === "meso"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              מזו אקדמי ({mesoQuestions.length})
            </button>
            <button
              onClick={() => setSelectedInst("wingate")}
              className={`px-4 py-1.5 text-sm font-semibold rounded-md transition ${
                selectedInst === "wingate"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              וינגייט ({wingateQuestions.length})
            </button>
            <button
              onClick={() => setSelectedInst("all")}
              className={`px-4 py-1.5 text-sm font-semibold rounded-md transition ${
                selectedInst === "all"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              הכל ({allQuestions.length})
            </button>
          </div>
        </header>

        {/* בר התקדמות וניקוד */}
        <div className="flex items-center justify-between text-sm text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
          <span>
            שאלה <strong className="text-white">{currentIndex + 1}</strong> מתוך{" "}
            <strong className="text-white">{filteredQuestions.length}</strong>
          </span>
          <span>
            ציון מצטבר: <strong className="text-emerald-400">{score}</strong>
          </span>
        </div>

        {/* תוכן השאלה */}
        {currentQ ? (
          <div className="space-y-6 bg-slate-900/40 p-6 rounded-2xl border border-slate-800 shadow-xl">
            {/* תמונה עם מנגנון Pan & Zoom אם קיימת */}
            {currentQ.image && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 block">
                  תרשים עזר (ניתן להגדיל ולגרור):
                </span>
                <ZoomPanImage src={currentQ.image} alt={currentQ.question} />
              </div>
            )}

            {/* ניסוח השאלה */}
            <h2 className="text-lg sm:text-xl font-bold leading-relaxed text-slate-100">
              {currentQ.question}
            </h2>

            {/* אפשרויות מענה */}
            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = "bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-200";
                
                if (isAnswerSubmitted) {
                  if (idx === currentQ.correctAnswer) {
                    btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold";
                  } else if (idx === selectedAnswer) {
                    btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200";
                  } else {
                    btnStyle = "bg-slate-900/40 border-slate-800 text-slate-500 opacity-60";
                  }
                } else if (selectedAnswer === idx) {
                  btnStyle = "bg-indigo-950/60 border-indigo-500 text-indigo-200 ring-1 ring-indigo-500";
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswerSubmitted}
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-right p-4 rounded-xl border text-sm sm:text-base transition flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    <span className="text-xs px-2 py-1 rounded bg-slate-800/80 text-slate-400 font-mono">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* לחצני בדיקה וניווט */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-sm font-medium transition"
              >
                הקודם
              </button>

              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:pointer-events-none text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/20"
                >
                  בדוק תשובה
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex === filteredQuestions.length - 1}
                  className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 disabled:pointer-events-none text-white font-semibold text-sm transition shadow-lg shadow-emerald-600/20"
                >
                  לשאלה הבאה
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-sm font-medium transition"
              >
                הבא
              </button>
            </div>

            {/* נימוק והסבר פדגוגי לאחר הגשה */}
            {isAnswerSubmitted && (
              <div className="mt-6 p-5 rounded-xl bg-slate-900 border border-slate-700/80 space-y-4">
                <div>
                  <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                    הסבר מדעי:
                  </h3>
                  <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                    {currentQ.explanation}
                  </p>
                </div>

                {currentQ.distractorAnalysis && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2">
                      ניתוח ושלילת מסיחים:
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                      {currentQ.distractorAnalysis.map((item, dIdx) => (
                        <li key={dIdx} className="leading-normal">
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            )}
          </div>
        ) : (
          <div className="text-center py-12 text-slate-500">
            לא נמצאו שאלות במוסד זה.
          </div>
        )}
      </div>
    </main>
  );
}
