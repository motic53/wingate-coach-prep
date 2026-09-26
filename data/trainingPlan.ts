export const PART5_TRAINING_PLAN = [
  {
    id: 'tp_1',
    moduleId: 'train_plan',
    topic: 'תכנון אימון',
    title: 'נפח אימון שבועי',
    questionText: 'מתאמן בעל ותק של שנה - פעמיים בשבוע בחדר הכושר, מה מספר הסטים שרצוי שיבצע לכל קבוצת שרירים בשבוע?',
    hint: 'למתאמן המגיע פעמיים בשבוע נדרש נפח בסיסי התחלתי.',
    explanation: 'מתאמן המגיע רק פעמיים בשבוע מתאים לביצוע נפח בסיסי של 2-3 סטים שבועיים או עד 8-10 סטים בהתאם להמלצות הבסיס.',
    diagram: 'general',
    options: [
      { id: 'tp_1_a', text: '8-10 סטים', isCorrect: false },
      { id: 'tp_1_b', text: '2-3 סטים', isCorrect: true },
      { id: 'tp_1_c', text: '4 סטים', isCorrect: false },
      { id: 'tp_1_d', text: 'עשרה סטים ומעלה', isCorrect: false }
    ]
  },
  {
    id: 'tp_2',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'חזרות שליליות',
    questionText: 'בשיטת ההחזרות השליליות - אימון אקצנטרי על מירבי:',
    hint: 'השריר מסוגל לייצר יותר כוח בבלימה מאשר בדחיפה.',
    explanation: 'בכיווץ אקסצנטרי השריר מסוגל לייצר כ-20%-40% יותר כוח מכיווץ קונצנטרי, ולכן עומדים בעומס אשר מגיע עד 130 אחוז מ-1RM.',
    diagram: 'general',
    options: [
      { id: 'tp_2_a', text: 'העומס על השריר קטן בשלב הקונצנטרי', isCorrect: false },
      { id: 'tp_2_b', text: 'שיטה יעילה לפיתוח סבולת שריר', isCorrect: false },
      { id: 'tp_2_c', text: 'לא ניתן להתנגד למשקל הגדול מ-1RM ולכן תהיה היפרטרופיה מקסימלית', isCorrect: false },
      { id: 'tp_2_d', text: 'השריר עומד בשלב האקצנטרי בעומס אשר מגיע עד 130 אחוז מ-1RM', isCorrect: true }
    ]
  },
  {
    id: 'tp_3',
    moduleId: 'train_plan',
    topic: 'תכנון אימון',
    title: 'המלצות למתחילים',
    questionText: 'מספר האימונים והסטים המומלצים בשבוע למתחיל הם:',
    hint: 'למתחיל נדרש גירוי מתון של יומיים-שלושה בשבוע.',
    explanation: 'למתחילים מומלץ לבצע 2-3 אימונים בשבוע (לרוב FBW) עם 8-10 סטים שבועיים סך הכל לכל קבוצת שרירים.',
    diagram: 'general',
    options: [
      { id: 'tp_3_a', text: '4 אימוני כוח הכוללים 6 סטים לכל קבוצת שרירים', isCorrect: false },
      { id: 'tp_3_b', text: 'שניים עד שלושה אימונים ושמונה עד עשרה סטים לכל קבוצת שרירים', isCorrect: true },
      { id: 'tp_3_c', text: 'ארבעה עד חמישה אימונים ושניים עד ארבעה סטים לכל קבוצת שרירים', isCorrect: false },
      { id: 'tp_3_d', text: 'שניים עד שלושה אימונים ואחד עד שלושה סטים לכל קבוצת שרירים', isCorrect: false }
    ]
  },
  {
    id: 'tp_4',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'חזרות חלקיות',
    questionText: 'בשיטת אימון המכונה "חזרות חלקיות" - Partial Repetition:',
    hint: 'כאשר נתקעים ולא מצליחים להשלים טווח מלא.',
    explanation: 'חזרות חלקיות מבוצעות כאשר המתאמן מגיע לכשל בטווח מלא וממשיך לבצע חזרות בטווח תנועה חלקי כדי לסחוט את השריר.',
    diagram: 'general',
    options: [
      { id: 'tp_4_a', text: 'המתאמן יבצע סט עד כישלון יפחית משקל ויבצע סט נוסף', isCorrect: false },
      { id: 'tp_4_b', text: 'המתאמן יבצע סט עד כישלון וימשיך את התרגיל בטווח תנועה חלקי', isCorrect: true },
      { id: 'tp_4_c', text: 'המתאמן יבצע שני תרגילים ללא מנוחה לאותה קבוצת שרירים', isCorrect: false },
      { id: 'tp_4_d', text: 'המתאמן יבצע תרגיל של פלג גוף עליון ומיד של פלג גוף תחתון', isCorrect: false }
    ]
  },
  {
    id: 'tp_5',
    moduleId: 'train_plan',
    topic: 'חלוקת עומסים',
    title: 'תוכנית ABC',
    questionText: 'חלוקת הגוף ל-"ABC" מומלצת בעיקר ל:',
    hint: 'כדי שכל שריר יקבל לפחות 2 גירויים בשבוע עם 3 חלוקות.',
    explanation: 'כדי לפצל ל-ABC בצורה מיטבית יש להתאמן לפחות 5-6 אימונים בשבוע, אחרת תדירות הגירוי תהיה נמוכה מדי.',
    diagram: 'general',
    options: [
      { id: 'tp_5_a', text: 'מתאמן לפחות 5 אימונים בשבוע', isCorrect: true },
      { id: 'tp_5_b', text: 'מתאמן המחלק את גופו ל-3 קבוצות שרירים באימון', isCorrect: false },
      { id: 'tp_5_c', text: 'מתאמן 3 אימונים בשבוע', isCorrect: false },
      { id: 'tp_5_d', text: 'מתאמן המבצע 3 סטים מכל קבוצות השרירים באימון', isCorrect: false }
    ]
  },
  {
    id: 'tp_6',
    moduleId: 'train_plan',
    topic: 'תכנון אימון',
    title: 'תדירות אימוני FBW',
    questionText: 'מהי תדירות האימונים המומלצת בשבוע למתאמנים מתחילים המבצעים אימון FBW?',
    hint: 'אימון גוף מלא דורש יום מנוחה בין אימונים.',
    explanation: 'אימון FBW למתחילים מומלץ לבצע 2-3 פעמים בשבוע עם יום התאוששות בין אימון לאימון.',
    diagram: 'general',
    options: [
      { id: 'tp_6_a', text: '2-3 אימונים בשבוע', isCorrect: true },
      { id: 'tp_6_b', text: '3-4 אימונים בשבוע', isCorrect: false },
      { id: 'tp_6_c', text: '5-6 אימונים בשבוע', isCorrect: false },
      { id: 'tp_6_d', text: '1-2 אימונים בשבוע', isCorrect: false }
    ]
  },
  {
    id: 'tp_7',
    moduleId: 'train_plan',
    topic: 'תדירות גירוי',
    title: 'תדירות הפעלת שריר למתחיל',
    questionText: 'מהי תדירות הפעלת השרירים המומלצת בקרב מתאמנים מתחילים?',
    hint: 'זמן ההתאוששות של שריר לאחר אימון ראשוני.',
    explanation: 'הפעלת השריר מומלצת כל יומיים-שלושה (48-72 שעות) לשמירה על גירוי והתאוששות מאוזנים.',
    diagram: 'general',
    options: [
      { id: 'tp_7_a', text: 'כל יומיים - שלושה', isCorrect: true },
      { id: 'tp_7_b', text: 'כל יום - יומיים', isCorrect: false },
      { id: 'tp_7_c', text: 'כל שלושה - ארבעה ימים', isCorrect: false },
      { id: 'tp_7_d', text: 'אין המלצה ספציפית לתדירות הפעלת השרירים', isCorrect: false }
    ]
  },
  {
    id: 'tp_8',
    moduleId: 'train_plan',
    topic: 'נפח אימון',
    title: 'מספר סטים באימון למתחיל',
    questionText: 'מהו מספר הסטים המומלץ להפעלת קבוצת שרירים ספציפית באימון בקרב מתאמנים מתחילים?',
    hint: 'נפח נמוך בתחילת הדרך למניעת פציעות.',
    explanation: 'מתאמן מתחיל זקוק ל-1 עד 4 סטים לקבוצת שריר באימון בודד.',
    diagram: 'general',
    options: [
      { id: 'tp_8_a', text: '10-20 סטים', isCorrect: false },
      { id: 'tp_8_b', text: 'עד 10 סטים', isCorrect: false },
      { id: 'tp_8_c', text: '5-10 סטים', isCorrect: false },
      { id: 'tp_8_d', text: '1-4 סטים', isCorrect: true }
    ]
  },
  {
    id: 'tp_9',
    moduleId: 'train_plan',
    topic: 'חזרות ועומס',
    title: 'טווח חזרות למתחיל',
    questionText: 'מהו טווח החזרות המומלץ בסט אחד בקרב מתאמנים מתחילים?',
    hint: 'טווח בטוח ללימוד טכניקה והיפרטרופיה.',
    explanation: 'טווח של 8-15 חזרות נחשב לאופטימלי ובטוח למתאמנים מתחילים.',
    diagram: 'general',
    options: [
      { id: 'tp_9_a', text: '1-6 חזרות', isCorrect: false },
      { id: 'tp_9_b', text: '8-15 חזרות', isCorrect: true },
      { id: 'tp_9_c', text: '20 חזרות ומעלה', isCorrect: false },
      { id: 'tp_9_d', text: 'מקסימום 10 חזרות', isCorrect: false }
    ]
  },
  {
    id: 'tp_10',
    moduleId: 'train_plan',
    topic: 'עקרונות אימון',
    title: 'תדירות מול נפח',
    questionText: 'האם תדירות הפעלת השריר חשובה יותר מנפח האימון בהקשר לפיתוח כוח והיפרטרופיה בתוכנית האימון?',
    hint: 'איזה משתנה מכתיב את מרבית התוצאות השבועיות?',
    explanation: 'נפח האימון (מספר הסטים והחזרות הכולל בשבוע) חשוב יותר מהתדירות שבה הוא מחולק.',
    diagram: 'general',
    options: [
      { id: 'tp_10_a', text: 'לא נכון - עצימות האימון חשובה יותר מתדירות הפעלת השריר', isCorrect: false },
      { id: 'tp_10_b', text: 'לא נכון - נפח האימון חשוב יותר מתדירות הפעלת השריר', isCorrect: true },
      { id: 'tp_10_c', text: 'נכון - תדירות הפעלת השריר חשובה יותר מנפח האימון', isCorrect: false },
      { id: 'tp_10_d', text: 'אין תשובה נכונה', isCorrect: false }
    ]
  },
  {
    id: 'tp_11',
    moduleId: 'train_plan',
    topic: 'הגדרות מתאמן',
    title: 'הגדרת מתאמן מתחיל',
    questionText: 'מהי ההגדרה למתאמן מתחיל?',
    hint: 'כמה חודשי הפסקה מחזירים מתאמן למעמד מתחיל?',
    explanation: 'לפי הגדרות וינגייט, אדם שחזר מהפסקה של 6 חודשים ומעלה נחשב למתאמן מתחיל.',
    diagram: 'general',
    options: [
      { id: 'tp_11_a', text: 'אדם שחזר מהפסקה של 6 חודשים ומעלה יהיה בבחינת מתחיל', isCorrect: true },
      { id: 'tp_11_b', text: 'אדם שחזר מהפסקה של שנתיים ומעלה יהיה בבחינת מתחיל', isCorrect: false },
      { id: 'tp_11_c', text: 'אדם שחזר מהפסקה של שנה ומעלה יהיה בבחינת מתחיל', isCorrect: false },
      { id: 'tp_11_d', text: 'אדם שחזר מהפסקה של 3 חודשים יהיה בבחינת מתחיל', isCorrect: false }
    ]
  },
  {
    id: 'tp_12',
    moduleId: 'train_plan',
    topic: 'תכנון אימון',
    title: 'תדירות לבינוניים',
    questionText: 'מהי תדירות האימונים המומלצת בשבוע למתאמנים בינוניים?',
    hint: 'לרוב מתאמנים בתוכנית AB.',
    explanation: 'למתאמנים בינוניים מומלץ להתאמן 3-4 פעמים בשבוע.',
    diagram: 'general',
    options: [
      { id: 'tp_12_a', text: '4-5 אימונים', isCorrect: false },
      { id: 'tp_12_b', text: '1-2 אימונים', isCorrect: false },
      { id: 'tp_12_c', text: '5-6 אימונים', isCorrect: false },
      { id: 'tp_12_d', text: '3-4 אימונים', isCorrect: true }
    ]
  },
  {
    id: 'tp_13',
    moduleId: 'train_plan',
    topic: 'נפח אימון',
    title: 'סטים באימון לבינוני',
    questionText: 'מהו מספר הסטים המומלץ להפעלת שריר באימון בקרב מתאמנים בינוניים?',
    hint: 'נפח בינוני באימון ספציפי.',
    explanation: 'למתאמן בינוני מומלץ לבצע 5-10 סטים לקבוצת שריר באימון בודד.',
    diagram: 'general',
    options: [
      { id: 'tp_13_a', text: '5-10 סטים', isCorrect: true },
      { id: 'tp_13_b', text: '10-12 סטים', isCorrect: false },
      { id: 'tp_13_c', text: '1-10 סטים', isCorrect: false },
      { id: 'tp_13_d', text: '15-20 סטים', isCorrect: false }
    ]
  },
  {
    id: 'tp_14',
    moduleId: 'train_plan',
    topic: 'נפח שבועי',
    title: 'סטים שבועיים לבינוני',
    questionText: 'מהו מספר הסטים השבועי המומלץ לקבוצת שרירים בקרב מתאמנים בינוניים?',
    hint: 'הגבול העליון המומלץ לדרגת ביניים.',
    explanation: 'מתאמן בינוני מבצע עד 20 סטים שבועיים לקבוצת שרירים.',
    diagram: 'general',
    options: [
      { id: 'tp_14_a', text: '20 ומעלה', isCorrect: false },
      { id: 'tp_14_b', text: 'עד 20 סטים', isCorrect: true },
      { id: 'tp_14_c', text: '10-15 סטים', isCorrect: false },
      { id: 'tp_14_d', text: '6-10 סטים', isCorrect: false }
    ]
  },
  {
    id: 'tp_15',
    moduleId: 'train_plan',
    topic: 'חזרות ועומס',
    title: 'טווח חזרות לבינוני',
    questionText: 'מהו טווח החזרות המומלץ בסט אחד בקרב מתאמנים בינוניים?',
    hint: 'טווח מגוון הכולל כוח והיפרטרופיה.',
    explanation: 'מתאמנים בינוניים מגוונים בטווח רחב הנע בין 6 ל-25 חזרות.',
    diagram: 'general',
    options: [
      { id: 'tp_15_a', text: '6-25 חזרות', isCorrect: true },
      { id: 'tp_15_b', text: '6-12 חזרות', isCorrect: false },
      { id: 'tp_15_c', text: '1-6 חזרות', isCorrect: false },
      { id: 'tp_15_d', text: '20 ומעלה', isCorrect: false }
    ]
  },
  {
    id: 'tp_16',
    moduleId: 'train_plan',
    topic: 'מתודיקה',
    title: 'סדר הפעלת שרירים',
    questionText: 'מהו כיוון וסדר הפעלת השרירים המומלצת בקרב מתאמנים בינוניים?',
    hint: 'מניעת התשת שרירים קטנים ומסייעים.',
    explanation: 'הסדר המומלץ הוא מהשריר הגדול לקטן, עם עדיפות לתחילת האימון לשרירים חלשים.',
    diagram: 'general',
    options: [
      { id: 'tp_16_a', text: 'מהגדול לקטן עם עדיפות לחלשים', isCorrect: true },
      { id: 'tp_16_b', text: 'מהקטן לגדול עם עדיפות לחלשים', isCorrect: false },
      { id: 'tp_16_c', text: 'מהגדול לקטן עם עדיפות לחזקים', isCorrect: false },
      { id: 'tp_16_d', text: 'מהקטן לגדול עם עדיפות לחזקים', isCorrect: false }
    ]
  },
  {
    id: 'tp_17',
    moduleId: 'train_plan',
    topic: 'תכנון אימון',
    title: 'תדירות למתקדמים',
    questionText: 'מהי תדירות האימונים המומלצת בשבוע למתאמנים מתקדמים?',
    hint: 'תוכניות מפוצלות לנפחים גבוהים.',
    explanation: 'מתאמנים מתקדמים מתאמנים בתדירות גבוהה של 4-6 אימונים שבועיים.',
    diagram: 'general',
    options: [
      { id: 'tp_17_a', text: '1-2 אימונים', isCorrect: false },
      { id: 'tp_17_b', text: '4-6 אימונים', isCorrect: true },
      { id: 'tp_17_c', text: '3-4 אימונים', isCorrect: false },
      { id: 'tp_17_d', text: '2-3 אימונים', isCorrect: false }
    ]
  },
  {
    id: 'tp_18',
    moduleId: 'train_plan',
    topic: 'נפח שבועי',
    title: 'סטים שבועיים למתקדמים',
    questionText: 'מהו מספר הסטים השבועי המומלץ לקבוצת שרירים ספציפית בקרב מתאמנים מתקדמים?',
    hint: 'טווח עליון לגירוי מסת שריר גבוהה.',
    explanation: 'מתקדמים מגיעים ל-20 עד 40 סטים שבועיים לקבוצת שריר בתוכניות ייעודיות.',
    diagram: 'general',
    options: [
      { id: 'tp_18_a', text: '20 עד 40 סטים', isCorrect: true },
      { id: 'tp_18_b', text: '15 סטים', isCorrect: false },
      { id: 'tp_18_c', text: 'כמה שיותר ללא הגבלה', isCorrect: false },
      { id: 'tp_18_d', text: '10 סטים', isCorrect: false }
    ]
  },
  {
    id: 'tp_19',
    moduleId: 'train_plan',
    topic: 'חזרות ועומס',
    title: 'טווח חזרות למתקדמים',
    questionText: 'מהו טווח החזרות המומלץ בסט אחד בקרב מתאמנים מתקדמים?',
    hint: 'שימוש בכל ספקטרום החזרות.',
    explanation: 'מתקדמים משתמשים בכל טווח החזרות מ-1 עד 25 חזרות למטרות כוח מרבי, היפרטרופיה וסבולת שריר.',
    diagram: 'general',
    options: [
      { id: 'tp_19_a', text: '1-6 חזרות', isCorrect: false },
      { id: 'tp_19_b', text: '8-20 חזרות', isCorrect: false },
      { id: 'tp_19_c', text: '1-25 חזרות', isCorrect: true },
      { id: 'tp_19_d', text: '20 ומעלה', isCorrect: false }
    ]
  },
  {
    id: 'tp_20',
    moduleId: 'train_plan',
    topic: 'עצימות וכשל',
    title: 'עומס מומלץ למתקדמים',
    questionText: 'מהו העומס המומלץ באימון בקרב מתאמנים מתקדמים?',
    hint: 'אימון בעצימות גבוהה וקרוב מאוד לכשל.',
    explanation: 'למתקדמים מומלץ מאמץ ניכר עד רזרבת חזרות 0 (RIR 0) לגיוס יחידות מוטוריות גבוהות.',
    diagram: 'general',
    options: [
      { id: 'tp_20_a', text: 'ממאמץ ניכר עד רזרבת חזרות 0', isCorrect: true },
      { id: 'tp_20_b', text: 'ממאמץ קל עד רזרבת חזרות 2-3', isCorrect: false },
      { id: 'tp_20_c', text: 'ממאמץ קל עד רזרבת חזרות 3-4', isCorrect: false },
      { id: 'tp_20_d', text: 'ממאמץ קל עד רזרבת חזרות 4-5', isCorrect: false }
    ]
  },
  {
    id: 'tp_21',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'חזרות מאולצות',
    questionText: 'חזרות מאולצות (Forced Reps):',
    hint: 'עזרה של שותף מעבר לנקודת הכשל.',
    explanation: 'בחזרות מאולצות המאמן או השותף מסייע למתאמן לבצע עוד 2-4 חזרות נוספות כשהוא מותש.',
    diagram: 'general',
    options: [
      { id: 'tp_21_a', text: 'היתרון הבולט של שיטה זו הוא החיסכון בזמן האימון', isCorrect: false },
      { id: 'tp_21_b', text: 'בן הזוג מסייע בהרמה והמתאמן בולם בהורדה', isCorrect: false },
      { id: 'tp_21_c', text: 'שלושה תרגילים או יותר המבוצעים ללא הפסקה ביניהם', isCorrect: false },
      { id: 'tp_21_d', text: 'המאמן עוזר למתאמן לבצע עוד 3-4 חזרות נוספות בסט כשהוא מותש', isCorrect: true }
    ]
  },
  {
    id: 'tp_22',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'חזרות שליליות',
    questionText: 'חזרות שליליות (Negative Reps):',
    hint: 'עזרה בשלב הקונצנטרי ובלימה באקסצנטרי.',
    explanation: 'בן הזוג מסייע בשלב ההרמה (הקונצנטרי) והמתאמן בולם לבד בשלב ההורדה (האקסצנטרי).',
    diagram: 'general',
    options: [
      { id: 'tp_22_a', text: 'מבוססת על ביצוע חזרות עד הגעה לכשל, הפחתת משקל וביצוע סט נוסף', isCorrect: false },
      { id: 'tp_22_b', text: 'בן הזוג מסייע בהרמה (קונצנטרי) והמתאמן בולם בהורדה (אקסצנטרי)', isCorrect: true },
      { id: 'tp_22_c', text: 'ביצוע תרגיל מבודד חד מפרקי ומיד לאחר מכן ביצוע תרגיל מורכב', isCorrect: false },
      { id: 'tp_22_d', text: 'התשת השריר הגדול לפני השרירים הקטנים', isCorrect: false }
    ]
  },
  {
    id: 'tp_23',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'שיטת ההפשטה - דרופ סט',
    questionText: 'מהי שיטת ההפשטה - Drop Set?',
    hint: 'הורדת משקל מיידית והמשך ביצוע.',
    explanation: 'דרופ סט: חזרות עד כשל, הפחתת משקל מידית וביצוע סט נוסף ללא הפסקה (3-4 דרופים).',
    diagram: 'general',
    options: [
      { id: 'tp_23_a', text: 'חזרות עד כשל, הפחתת משקל וביצוע סט נוסף ללא הפסקה (3-4 סטים)', isCorrect: true },
      { id: 'tp_23_b', text: 'הרמת משקל תוך שימוש בתנופה של הגוף', isCorrect: false },
      { id: 'tp_23_c', text: 'בשיא הכיווץ הקונצנטרי בכל חזרה יש לבצע כיווץ סטטי ל-2-3 שניות', isCorrect: false },
      { id: 'tp_23_d', text: 'כשמו כן הוא - להפשיט את התרגיל למספר תרגילים פונקציונליים', isCorrect: false }
    ]
  },
  {
    id: 'tp_24',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'התשה מוקדמת',
    questionText: 'מהי שיטת ההתשה המוקדמת (Pre Exhaust Training Method)?',
    hint: 'מבודד לפני מורכב.',
    explanation: 'התשה מוקדמת: ביצוע תרגיל מבודד חד מפרקי ומיד לאחריו תרגיל מורכב לאותה קבוצת שרירים.',
    diagram: 'general',
    options: [
      { id: 'tp_24_a', text: 'ביצוע מספר סטים רצופים לאותה קבוצת שרירים', isCorrect: false },
      { id: 'tp_24_b', text: 'ביצוע תרגיל מבודד חד מפרקי ולאחריו תרגיל מורכב לאותה קבוצת שרירים', isCorrect: true },
      { id: 'tp_24_c', text: 'שיטת אימון המתאימה בעיקר למתחילים', isCorrect: false },
      { id: 'tp_24_d', text: 'שיטת אימון המתאימה בעיקר לגיל השלישי', isCorrect: false }
    ]
  },
  {
    id: 'tp_25',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'שימושי חזרות חלקיות',
    questionText: 'שיטת החזרות החלקיות - Partial Reps:',
    hint: 'מתאימה לפציעות וגם להגברת עצימות.',
    explanation: 'חזרות חלקיות מתאימות הן לפציעות ומגבלות תנועה והן להמשך עבודה לאחר כשל בטווח מלא.',
    diagram: 'general',
    options: [
      { id: 'tp_25_a', text: 'ביצוע חזרות חלקיות - בטווח תנועה קטן יותר', isCorrect: false },
      { id: 'tp_25_b', text: 'כאשר מתאמן סובל מפציעה כלשהי ולא יכול לבצע בטווח תנועה מלא', isCorrect: false },
      { id: 'tp_25_c', text: 'כאשר המתאמן אינו יכול לבצע חזרות מלאות לכל אורך טווח התנועה', isCorrect: false },
      { id: 'tp_25_d', text: 'כל התשובות נכונות', isCorrect: true }
    ]
  },
  {
    id: 'tp_26',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'כיווץ איזומטרי בשיא',
    questionText: 'מהי שיטת הכיווץ האיזומטרי בשיא - Peak Contraction?',
    hint: 'עצירה סטטית בסוף שלב ההרמה.',
    explanation: 'בשיא הכיווץ הקונצנטרי מבצעים עצירה/כיווץ סטטי למשך 2-3 שניות.',
    diagram: 'general',
    options: [
      { id: 'tp_26_a', text: 'אימון בו קצב הכיווץ האקצנטרי הוא 4-5 שניות', isCorrect: false },
      { id: 'tp_26_b', text: 'בשלב בו לשריר יש רכיב פריקתי מירבי, משהים את ההתנגדות ל-2-3 שניות', isCorrect: false },
      { id: 'tp_26_c', text: 'אימון בו קצב הכיווץ הקונצנטרי הוא 4-5 שניות', isCorrect: false },
      { id: 'tp_26_d', text: 'בשיא הכיווץ הקונצנטרי מבצעים כיווץ סטטי למשך 2-3 שניות', isCorrect: true }
    ]
  },
  {
    id: 'tp_27',
    moduleId: 'train_plan',
    topic: 'אוכלוסיות מיוחדות',
    title: 'עודף משקל והרזיה',
    questionText: 'מתאמן הסובל מעודף משקל - מעוניין לרדת במשקל, מה אתן לו לעשות בתכנית האימונים?',
    hint: 'שילוב אירובי והתנגדות להוצאה אנרגטית ושימור מסת שריר.',
    explanation: 'שילוב של אימוני אירובי יחד עם אימוני כוח והתנגדות מוביל לירידה במשקל תוך שמירה על קצב חילוף החומרים.',
    diagram: 'general',
    options: [
      { id: 'tp_27_a', text: 'אימוני אירובי בלבד - כדי "לשרוף" קלוריות', isCorrect: false },
      { id: 'tp_27_b', text: 'אימוני כוח והתנגדות בלבד', isCorrect: false },
      { id: 'tp_27_c', text: 'שילוב של אימוני אירובי ואימוני כוח והתנגדות בחדר כושר', isCorrect: true },
      { id: 'tp_27_d', text: 'אין צורך לאמן אותו - להפנות אותו במידי לתזונאית', isCorrect: false }
    ]
  },
  {
    id: 'tp_28',
    moduleId: 'train_plan',
    topic: 'תכנון אימון',
    title: 'הגעה של פעמיים בשבוע',
    questionText: 'מתאמנת רוצה להעלות מסת שריר אך יכולה להגיע רק פעמיים לחדר כושר, מה אתן לה?',
    hint: 'איזו חלוקה מפעילה כל שריר פעמיים בשבוע?',
    explanation: 'כאשר מגיעים רק פעמיים בשבוע, תוכנית FBW היא היחידה שמבטיחה גירוי דו-שבועי לכל שריר.',
    diagram: 'general',
    options: [
      { id: 'tp_28_a', text: 'אבנה לה תוכנית אימונים של תרגילי אירובי בלבד', isCorrect: false },
      { id: 'tp_28_b', text: 'אבנה לה תוכנית אימונים של AB', isCorrect: false },
      { id: 'tp_28_c', text: 'אבנה לה תוכנית אימונים איכותית של FBW', isCorrect: true },
      { id: 'tp_28_d', text: 'אבנה לה תוכנית אימונים של ABC', isCorrect: false }
    ]
  },
  {
    id: 'tp_29',
    moduleId: 'train_plan',
    topic: 'תכנון אימון',
    title: 'תוכנית ל-4 אימונים',
    questionText: 'מתאמנת בחדר כושר פעילה כבר 8 חודשים מעוניינת להגיע 4 פעמים בשבוע בלבד כדי להעלות שריר, מה אתן לה?',
    hint: 'פיצול מושלם ל-4 ימים בשבוע.',
    explanation: 'תוכנית AB מאפשרת חלוקה של A-B-מנוחה-A-B ומתאימה אידיאלית ל-4 אימונים בשבוע.',
    diagram: 'general',
    options: [
      { id: 'tp_29_a', text: 'תוכנית אימונים ABCD', isCorrect: false },
      { id: 'tp_29_b', text: 'תוכנית אימונים FBW', isCorrect: false },
      { id: 'tp_29_c', text: 'תוכנית אימונים של משקל גוף בלבד', isCorrect: false },
      { id: 'tp_29_d', text: 'תוכנית אימונים AB', isCorrect: true }
    ]
  },
  {
    id: 'tp_30',
    moduleId: 'train_plan',
    topic: 'בחירת תרגילים',
    title: 'תרגילים למתחיל',
    questionText: 'מתאמן מתחיל בחדר כושר מעוניין להגיע בהתחלה פעמיים בשבוע ולהעלות מסת שריר בהדרגה, מה אתן לו?',
    hint: 'תרגילים המפעילים מקסימום שרירים באימון קצר.',
    explanation: 'תוכנית FBW המבוססת על תרגילים מורכבים ופונקציונליים תספק את הגירוי היעיל ביותר למתחיל שמגיע פעמיים בשבוע.',
    diagram: 'general',
    options: [
      { id: 'tp_30_a', text: 'בעיקר תרגילים מורכבים ופונקציונליים בתוך תוכנית FBW', isCorrect: true },
      { id: 'tp_30_b', text: 'בעיקר תרגילים פשוטים ומבודדים בתוכנית של FBW', isCorrect: false },
      { id: 'tp_30_c', text: 'תוכנית אימון של AB הכוללים תרגילים מורכבים ופונקציונליים', isCorrect: false },
      { id: 'tp_30_d', text: 'תוכנית אימון של AB הכוללים תרגילים פשוטים ומבודדים', isCorrect: false }
    ]
  },
  {
    id: 'tp_31',
    moduleId: 'train_plan',
    topic: 'סיווג מתאמן',
    title: 'הגדרת רמת מתאמן',
    questionText: 'מתאמן מבצע שלושה אימונים בשבוע (AB+FBW). בכל אימון בו הוא עובד על שריר החזה, הוא מבצע 6 סטים של 12 חזרות. איזה סוג מתאמן הוא?',
    hint: '6 סטים באימון לחזה מעידים על שלב ביניים.',
    explanation: 'מתאמן המבצע 6 סטים באימון לשריר ועובד ברוטציית AB+FBW מוגדר כמתאמן בינוני.',
    diagram: 'general',
    options: [
      { id: 'tp_31_a', text: 'מתקדם', isCorrect: false },
      { id: 'tp_31_b', text: 'בינוני', isCorrect: true },
      { id: 'tp_31_c', text: 'לא ניתן לקבוע', isCorrect: false },
      { id: 'tp_31_d', text: 'מתחיל', isCorrect: false }
    ]
  },
  {
    id: 'tp_32',
    moduleId: 'train_plan',
    topic: 'בטיחות ושיטות',
    title: 'שיטות לא מומלצות למתחיל',
    questionText: 'איזו מצורות האימון הבאות אינה מומלצת לאדם "מתחיל" המתאמן כ-6 חודשים?',
    hint: 'שיטות עצימות מתקדמות.',
    explanation: 'כל השיטות הללו (דרופ סט, חזרות שליליות, סופר סט) אינן מומלצות למתחילים בשל עומס יתר על הרקמות.',
    diagram: 'general',
    options: [
      { id: 'tp_32_a', text: 'כל צורות האימון לא מומלצות (Negative Reps, Super Set, Drop Set)', isCorrect: true },
      { id: 'tp_32_b', text: 'Negative Reps', isCorrect: false },
      { id: 'tp_32_c', text: 'Super Set', isCorrect: false },
      { id: 'tp_32_d', text: 'Drop Set', isCorrect: false }
    ]
  },
  {
    id: 'tp_33',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'יתרון סופר סט',
    questionText: 'מה היתרון המהותי בביצוע "סופר סט" לקבוצות שרירים שונות?',
    hint: 'עבודה על שריר אחד בזמן שהאחר נח.',
    explanation: 'היתרון המהותי והבולט ביותר בסופר סט לשרירים שונים הוא חיסכון משמעותי בזמן האימון.',
    diagram: 'general',
    options: [
      { id: 'tp_33_a', text: 'שיפור מרכיבים קרדיווסקולריים', isCorrect: false },
      { id: 'tp_33_b', text: 'שיפור סבולת שריר', isCorrect: false },
      { id: 'tp_33_c', text: 'השגת היפרטרופיה מיטבית', isCorrect: false },
      { id: 'tp_33_d', text: 'חיסכון בזמן אימון', isCorrect: true }
    ]
  },
  {
    id: 'tp_34',
    moduleId: 'train_plan',
    topic: 'סיווג מתאמן',
    title: 'זיהוי תוכנית אימון',
    questionText: 'תוכנית בעלת 4 תרגילים שונים בכל אימון לכל קבוצת שרירים. מי סביר להניח מבצע תוכנית זו?',
    hint: 'ללא נתוני תדירות וחלוקת הגוף.',
    explanation: 'לא ניתן לקבוע את רמת המתאמן מבלי לדעת מהי חלוקת הגוף (Split) ומספר האימונים השבועי הכולל.',
    diagram: 'general',
    options: [
      { id: 'tp_34_a', text: 'מפתח גוף לפני תחרות', isCorrect: false },
      { id: 'tp_34_b', text: 'לא ניתן לקבוע', isCorrect: true },
      { id: 'tp_34_c', text: 'מתחיל', isCorrect: false },
      { id: 'tp_34_d', text: 'בינוני', isCorrect: false }
    ]
  },
  {
    id: 'tp_35',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'דרופ סט בפועל',
    questionText: 'מה מתאמן צריך לבצע בצורת אימון המכונה "DROP SET"?',
    hint: 'הפחתת משקל מיידית.',
    explanation: 'המתאמן מבצע סט עד כשל, מפחית מיד במשקל וממשיך לבצע סט נוסף ברצף.',
    diagram: 'general',
    options: [
      { id: 'tp_35_a', text: 'המתאמן יבצע סט עד כשל יפחית משקל ויבצע סט נוסף', isCorrect: true },
      { id: 'tp_35_b', text: 'על המתאמן להימנע מטווח תנועה מלא במפרק', isCorrect: false },
      { id: 'tp_35_c', text: 'המתאמן יבצע משקל קל 6-10 חזרות, יוסיף משקל ויבצע סט נוסף עד כשל', isCorrect: false },
      { id: 'tp_35_d', text: 'המתאמן יבצע סט, ינוח 15 שניות ויבצע סט נוסף עם אותו משקל', isCorrect: false }
    ]
  },
  {
    id: 'tp_36',
    moduleId: 'train_plan',
    topic: 'נפח שבועי',
    title: 'סטים שבועיים לבינוני',
    questionText: 'מהו מספר הסטים לכל קבוצת שרירים אשר יבצע מתאמן בינוני בשבוע?',
    hint: 'טווח ממוצע לבינוני.',
    explanation: 'מתאמן בינוני מבצע בממוצע כ-15 סטים שבועיים לכל קבוצת שרירים.',
    diagram: 'general',
    options: [
      { id: 'tp_36_a', text: '8 סטים', isCorrect: false },
      { id: 'tp_36_b', text: 'לא ניתן לקבוע כיוון שחלוקת הגוף אינה ידועה', isCorrect: false },
      { id: 'tp_36_c', text: '15 סטים', isCorrect: true },
      { id: 'tp_36_d', text: '5 סטים', isCorrect: false }
    ]
  },
  {
    id: 'tp_37',
    moduleId: 'train_plan',
    topic: 'תדירות מול נפח',
    title: 'השוואת נפח שבועי',
    questionText: 'בחור צעיר שאינו מוגבל בזמן, המתאמן שנתיים, מעוניין להוסיף מסת שריר. באיזו תדירות עליו להפעיל כל קבוצת שרירים בגופו?',
    hint: 'כאשר הנפח השבועי מושווה.',
    explanation: 'כל עוד הנפח השבועי שווה (מספר הסטים הכולל זהה), לתדירות אין השפעה מכרעת על ההיפרטרופיה.',
    diagram: 'general',
    options: [
      { id: 'tp_37_a', text: 'כל 120-134 שעות', isCorrect: false },
      { id: 'tp_37_b', text: 'כל עוד הנפח השבועי שווה, זה לא משנה', isCorrect: true },
      { id: 'tp_37_c', text: 'כל 144-168 שעות', isCorrect: false },
      { id: 'tp_37_d', text: 'כל 72-96 שעות', isCorrect: false }
    ]
  },
  {
    id: 'tp_38',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'דוגמה להתשה מוקדמת',
    questionText: 'שיטת ההתשה המוקדמת - Pre Exhaustion:',
    hint: 'מבודד ואז מורכב לאותו שריר.',
    explanation: 'הרחקת זרועות עם פולי (מבודד לכתף אמצעית) ואחריה חתירה בעמידה (תרגיל מורכב לאותה קבוצה) מיישמת התשה מוקדמת.',
    diagram: 'general',
    options: [
      { id: 'tp_38_a', text: 'ביצוע לחיצת חזה עם מוט ולאחר מכן מקבילים באחיזה רחבה', isCorrect: false },
      { id: 'tp_38_b', text: 'ביצוע הרחקת זרועות עם פולי תחתון ולאחר מכן חתירה בעמידה ישרה עם פולי', isCorrect: true },
      { id: 'tp_38_c', text: 'חתירה בשכיבה עם מוט ולאחר פולאובר עם מוט', isCorrect: false },
      { id: 'tp_38_d', text: 'ביצוע לחיצת חזה עם מכונה תוך הורדת המשקל בקצב 5 שניות בשלב האקסצנטרי', isCorrect: false }
    ]
  },
  {
    id: 'tp_39',
    moduleId: 'train_plan',
    topic: 'קינזיולוגיה יישומית',
    title: 'ספסל כומר ושיטות אימון',
    questionText: 'בתרגיל כפיפת מרפקים בישיבה עם מוט על ספסל כומר, איזו צורת אימון אינה מתאימה לתרגיל זה?',
    hint: 'בסוף הכפיפה הזרוע מאונכת לקרקע.',
    explanation: 'בספסל כומר בשיא הכיווץ (למעלה) זרוע המומנט מתאפסת ואין עומס, ולכן כיווץ איזומטרי בשיא (Peak Contraction) אינו מתאים.',
    diagram: 'general',
    options: [
      { id: 'tp_39_a', text: 'Partial Reps', isCorrect: false },
      { id: 'tp_39_b', text: 'Continuous Tension', isCorrect: false },
      { id: 'tp_39_c', text: 'Drop Set', isCorrect: false },
      { id: 'tp_39_d', text: 'Peak Contraction', isCorrect: true }
    ]
  },
  {
    id: 'tp_40',
    moduleId: 'train_plan',
    topic: 'עקרון עומס יסף',
    title: 'התקדמות בתוכנית אימון',
    questionText: 'מתאמן בן 60 שביצע 4 סטים לכל קבוצת שרירים והתאמן 3 אימונים בשבוע FBW, מה סביר שיקרה במהלך תוכנית האימונים הבאה?',
    hint: 'דרכים שונות להעלאת עומס.',
    explanation: 'התקדמות יכולה להתבצע דרך העלאת משקלים, העלאת נפח או הוספת שיטות אימון מגוונות.',
    diagram: 'general',
    options: [
      { id: 'tp_40_a', text: 'יעלה במשקלי האימון', isCorrect: false },
      { id: 'tp_40_b', text: 'יעלה את נפח האימון', isCorrect: false },
      { id: 'tp_40_c', text: 'יוסיף צורות (שיטות) אימון', isCorrect: false },
      { id: 'tp_40_d', text: 'כל התשובות נכונות', isCorrect: true }
    ]
  },
  {
    id: 'tp_41',
    moduleId: 'train_plan',
    topic: 'תרגילים ושיטות',
    title: 'Hip Thrust ושיטות',
    questionText: 'מתאמן המבצע את התרגיל "Hip Thrust" עם מוט. איזו צורת אימון מתאימה לביצוע?',
    hint: 'בפשיטה מלאה המומנט על העכוז הוא מקסימלי.',
    explanation: 'ב-Hip Thrust בסוף הפשיטה העומס על הישבן מרבי, ולכן החזקה סטטית בשיא הכיווץ (כיווץ איזומטרי בשיא) מתאימה ביותר.',
    diagram: 'general',
    options: [
      { id: 'tp_41_a', text: 'חזרות מאולצות', isCorrect: false },
      { id: 'tp_41_b', text: 'סופר סט אנטגוניסטים עם Stiff legged Dead lift', isCorrect: false },
      { id: 'tp_41_c', text: 'התשה מוקדמת עם סקוואט', isCorrect: false },
      { id: 'tp_41_d', text: 'כיווץ איזומטרי בשיא', isCorrect: true }
    ]
  },
  {
    id: 'tp_42',
    moduleId: 'train_plan',
    topic: 'סיווג מתאמן',
    title: '25 סטים שבועיים לחזה',
    questionText: 'מתאמן מבצע לשריר החזה 25 סטים בשבוע. סביר להניח כי מתאמן זה מוגדר כמתאמן:',
    hint: 'נפח גבוה מעל 20 סטים.',
    explanation: 'ביצוע 25 סטים שבועיים לשריר אחד מעיד בבירור על מתאמן מתקדם.',
    diagram: 'general',
    options: [
      { id: 'tp_42_a', text: 'לא ניתן לקבוע את הגדרתו כיוון שלא מפורטות ימי האימון', isCorrect: false },
      { id: 'tp_42_b', text: 'בינוני', isCorrect: false },
      { id: 'tp_42_c', text: 'מתקדם', isCorrect: true },
      { id: 'tp_42_d', text: 'מתחיל', isCorrect: false }
    ]
  },
  {
    id: 'tp_43',
    moduleId: 'train_plan',
    topic: 'בטיחות ושיטות',
    title: 'צורך במסייע',
    questionText: 'באיזו מצורות האימונים הבאות יזדקק המתאמן לחבר / מדריך לשם ביצועה?',
    hint: 'מעבר נקודת תקיעה בעזרת הזולת.',
    explanation: 'בחזרות מאולצות (Forced Reps) בלחיצת כתפיים חייבים מדריך או שותף שיעזור לעבור את הכשל.',
    diagram: 'general',
    options: [
      { id: 'tp_43_a', text: 'כיווץ איזומטרי בשיא בתרגיל "בעמידה הרחקת זרועות עם משקולות יד"', isCorrect: false },
      { id: 'tp_43_b', text: 'חזרות מאולצות Forced Reps "בישיבה לחיצת כתפיים עם משקולת יד"', isCorrect: true },
      { id: 'tp_43_c', text: 'צורת ההפשטה בתרגיל "בישיבה - Drop Set משיכת פולי עליון לחזה"', isCorrect: false },
      { id: 'tp_43_d', text: 'סופר סט פשיטת ברכיים עם מכונה ייעודית וכפיפת מרפקים', isCorrect: false }
    ]
  },
  {
    id: 'tp_44',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'שיטת Rest-Pause',
    questionText: 'איזה ביצוע מתאים ליישום שיטת האימון Rest Pause?',
    hint: 'כשל, מנוחה של חצי דקה ואותו משקל.',
    explanation: 'רסט-פוז מתבצע ע״י הגעה לכשל, הפסקה קצרה של כ-30 שניות וחזרה לסט עד כשל עם אותו המשקל.',
    diagram: 'general',
    options: [
      { id: 'tp_44_a', text: 'ביצוע לחיצת רגליים עד כשל, הפחתה במשקל וביצוע של סט נוסף מייד ללא הפסקה', isCorrect: false },
      { id: 'tp_44_b', text: 'חתירה בשכיבה עם מוט עד כשל, הפסקה של 30 שניות וביצוע חוזר עד כשל עם אותו משקל', isCorrect: true },
      { id: 'tp_44_c', text: 'ביצוע לחיצת כתפיים עם מוט ולאחר מכן הרחקת כתפיים עם מכונה ייעודית', isCorrect: false },
      { id: 'tp_44_d', text: 'ביצוע לחיצת חזה עם מכונה תוך הורדת המשקל בקצב 5 שניות בשלב האקסצנטרי', isCorrect: false }
    ]
  },
  {
    id: 'tp_45',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'עקרון חזרות חלקיות',
    questionText: 'מהו העיקרון לביצוע צורת האימון חזרות חלקיות? Partial Repetition',
    hint: 'טווח מלא עד כשל ואז חלקי.',
    explanation: 'עקרון השיטה הוא הגעה לכשל בטווח תנועה מלא ואז ביצוע מספר חזרות נוספות בטווח חלקי.',
    diagram: 'general',
    options: [
      { id: 'tp_45_a', text: 'להשהות את התנועה בשלב הקשה של התרגיל בו השריר הכי מקוצר', isCorrect: false },
      { id: 'tp_45_b', text: 'לשנות מנח גוף על מנת להתגבר על משקל בנקודת השיא', isCorrect: false },
      { id: 'tp_45_c', text: 'לבצע תרגיל בו השריר נמצא במהלך כל הסט ברכיב סיבובי', isCorrect: false },
      { id: 'tp_45_d', text: 'לבצע סט עם טווח תנועה מלא עד כשל ואז לבצע עוד מספר חזרות בטווח חלקי', isCorrect: true }
    ]
  },
  {
    id: 'tp_46',
    moduleId: 'train_plan',
    topic: 'חלוקת תוכניות',
    title: 'התאמת תוכנית ABC',
    questionText: 'חלוקת הגוף ל-ABC מומלצת בעיקר ל:',
    hint: 'תדירות אימונים גבוהה.',
    explanation: 'תוכנית ABC מומלצת למתאמנים המגיעים ל-5 או 6 אימונים בשבוע.',
    diagram: 'general',
    options: [
      { id: 'tp_46_a', text: 'מתאמן המגיע לשלושה אימונים בשבוע', isCorrect: false },
      { id: 'tp_46_b', text: 'מתאמן המאמן ארבע או חמש קבוצות שרירים באימון', isCorrect: false },
      { id: 'tp_46_c', text: 'מתאמן המגיע לחמישה או שישה אימונים בשבוע', isCorrect: true },
      { id: 'tp_46_d', text: 'אדם עם וותק של שנתיים ומעלה', isCorrect: false }
    ]
  },
  {
    id: 'tp_47',
    moduleId: 'train_plan',
    topic: 'סדר אימון',
    title: 'כוח מול אירובי למתחיל',
    questionText: 'למתאמן מתחיל שלא לצורך ספורטיבי, מה תהיה ההמלצה? לאימון - כוח לפני אירובי או אירובי לפני כוח?',
    hint: 'היעדר מטרת ביצוע ספציפית.',
    explanation: 'ברמה של מתאמן מתחיל שאינו ספורטאי תחרותי אין יתרון ממשי לאחד על פני השני.',
    diagram: 'general',
    options: [
      { id: 'tp_47_a', text: 'אימון כוח לפני אירובי', isCorrect: false },
      { id: 'tp_47_b', text: 'אימון אירובי לפני כוח', isCorrect: false },
      { id: 'tp_47_c', text: 'עדיף לעשות תקופת אימונים רק אירובי ורק אחר כך להתחיל באימוני כוח', isCorrect: false },
      { id: 'tp_47_d', text: 'ברמה זו אין יתרון לאחד על פני השני', isCorrect: true }
    ]
  },
  {
    id: 'tp_48',
    moduleId: 'train_plan',
    topic: 'זמני מנוחה',
    title: 'מנוחה בכוח מרבי',
    questionText: 'זמן מנוחה בין סט לסט באימון כוח מרבי משקולות הוא:',
    hint: 'חידוש מלא של מערכת ה-ATP-CP.',
    explanation: 'באימון כוח מרבי נדרשת מנוחה מלאה של 3-5 דקות בין הסטים.',
    diagram: 'general',
    options: [
      { id: 'tp_48_a', text: 'עד 30 שניות', isCorrect: false },
      { id: 'tp_48_b', text: '3-5 דקות', isCorrect: true },
      { id: 'tp_48_c', text: '2 דקות ומעלה', isCorrect: false },
      { id: 'tp_48_d', text: '60-90 שניות', isCorrect: false }
    ]
  },
  {
    id: 'tp_49',
    moduleId: 'train_plan',
    topic: 'בחירת תרגילים',
    title: 'תרגילים מומלצים למתחיל',
    questionText: 'אילו תרגילים מתאמן מתחיל, כדאי שיבצע?',
    hint: 'בניית בסיס תנועתי מגוון.',
    explanation: 'למתאמן מתחיל כדאי לבצע תרגילים מורכבים תוך שימוש במגוון אמצעי אימון (מכונות, משקולות, משקל גוף).',
    diagram: 'general',
    options: [
      { id: 'tp_49_a', text: 'תרגילים מורכבים עם מגוון אמצעי אימון', isCorrect: true },
      { id: 'tp_49_b', text: 'תרגילים חד מפרקיים בלבד', isCorrect: false },
      { id: 'tp_49_c', text: 'כדאי שיתחיל עם אימון אירובי ולא עם אימון התנגדות', isCorrect: false },
      { id: 'tp_49_d', text: 'תרגילים עם משקל גוף', isCorrect: false }
    ]
  },
  {
    id: 'tp_50',
    moduleId: 'train_plan',
    topic: 'פיזיולוגיה של המאמץ',
    title: 'הסתגלות לאימוני סבולת',
    questionText: 'ארבעת השינויים הפיזיולוגיים המתרחשים בעקבות אימוני סבולת הם:',
    hint: 'שיפור בצריכת חמצן, דופק נמוך במנוחה ולב גדול יותר.',
    explanation: 'אימוני סבולת מובילים לשיפור צח"מ, ירידה בדופק במנוחה, הגדלת נפח חדרי הלב ושיפור תפקוד מערכת לב-ריאה.',
    diagram: 'heart',
    options: [
      { id: 'tp_50_a', text: 'שיפור צח"מ, ירידה בדופק במנוחה, הגדלת נפח חדרים בלב, שיפור תפקוד מערכת לב/ריאות', isCorrect: true },
      { id: 'tp_50_b', text: 'הגדלת נפח חדרים בלב, ירידה בדופק במנוחה, ירידה בדופק מרבי, גידול נפח הדם', isCorrect: false },
      { id: 'tp_50_c', text: 'שיפור פעולת האנזימים בתאי השריר, גידול נפח הדם, שיפור תפקוד מערכת לב/ריאות', isCorrect: false },
      { id: 'tp_50_d', text: 'גידול נפח הדם, ירידה בדופק מרבי, הגדלת נפח חדרים בלב, שיפור תפקוד מערכת לב/ריאות', isCorrect: false }
    ]
  },
  {
    id: 'tp_51',
    moduleId: 'train_plan',
    topic: 'אימון אירובי',
    title: 'שיטות לפיתוח סבולת',
    questionText: 'באילו שיטות אימון עיקריות ניתן לשפר את הסבולת האירובית?',
    hint: 'שתי שיטות היסוד: רצף והפוגות.',
    explanation: 'השיטות העיקריות לשיפור סבולת אירובית הן אימון הפוגות נרחב ואימון בשיטת הרצף.',
    diagram: 'general',
    options: [
      { id: 'tp_51_a', text: 'הפוגות נרחבות ושיטת רצף', isCorrect: true },
      { id: 'tp_51_b', text: 'חזרות והפוגות נרחבות', isCorrect: false },
      { id: 'tp_51_c', text: 'שיטת רצף והפוגות עצימות', isCorrect: false },
      { id: 'tp_51_d', text: 'שיטת רצף וחזרות', isCorrect: false }
    ]
  },
  {
    id: 'tp_52',
    moduleId: 'train_plan',
    topic: 'אימון אירובי',
    title: 'אימון פארטלק',
    questionText: 'אימון פרטלאק הוא:',
    hint: 'משחקי מהירות בשוודית.',
    explanation: 'פארטלק הוא אימון רצוף המשלב שינויי מהירויות וקצבים שונים.',
    diagram: 'general',
    options: [
      { id: 'tp_52_a', text: 'אימון סבולת אנאירובית', isCorrect: false },
      { id: 'tp_52_b', text: 'אימון התאוששות', isCorrect: false },
      { id: 'tp_52_c', text: 'אימון לשיפור הכוח מתפרץ', isCorrect: false },
      { id: 'tp_52_d', text: 'אימון שינויי מהירויות', isCorrect: true }
    ]
  },
  {
    id: 'tp_53',
    moduleId: 'train_plan',
    topic: 'מתודיקה באירובי',
    title: 'העלאת עומס באירובי',
    questionText: 'מהן ההמלצות לאימון סבולת לשיפור מערכת לב-ריאה לאדם שאינו מאומן אירובית?',
    hint: 'קודם משך ונפח, ורק אחר כך קצב.',
    explanation: 'מתחילים ב-20-30 דקות בעצימות קלה-בינונית; מעלים קודם את משך המאמץ (הנפח) ורק בהמשך את העצימות.',
    diagram: 'general',
    options: [
      { id: 'tp_53_a', text: '20-30 דקות בעצימות קלה-בינונית. בכל שבוע נעלה את משך המאמץ ורק לאחר מכן עצימות', isCorrect: true },
      { id: 'tp_53_b', text: '20-30 דקות. אין חשיבות לסדר העלאת העומס (משך או עצימות המאמץ)', isCorrect: false },
      { id: 'tp_53_c', text: '20-30 דקות בעצימות קלה-בינונית. בכל שבוע נעלה מעט את העצימות ורק לאחר מכן משך', isCorrect: false },
      { id: 'tp_53_d', text: '45-60 דקות בעצימות 70% מהדופק המרבי. בכל שבוע נעלה מעט את העצימות ואז משך', isCorrect: false }
    ]
  },
  {
    id: 'tp_54',
    moduleId: 'train_plan',
    topic: 'אימון לבריאות',
    title: 'אימון אירובי לבריאות',
    questionText: 'מהי שיטת האימון הדומיננטית ביותר באימון האירובי למטרת בריאות?',
    hint: 'פעילות ממושכת ברצף קבוע.',
    explanation: 'אימון רצף הוא השיטה הדומיננטית והבטוחה ביותר לשיפור בריאות מערכת לב-ריאה באוכלוסייה הכללית.',
    diagram: 'general',
    options: [
      { id: 'tp_54_a', text: 'פארטלק', isCorrect: false },
      { id: 'tp_54_b', text: 'רצף', isCorrect: true },
      { id: 'tp_54_c', text: 'הפוגות נרחב', isCorrect: false },
      { id: 'tp_54_d', text: 'הפוגות עצים', isCorrect: false }
    ]
  },
  {
    id: 'tp_55',
    moduleId: 'train_plan',
    topic: 'דופק ומאמץ',
    title: 'חישוב רזרבת דופק',
    questionText: 'מהו טווח רזרבת הדופק לשיפור יכולת אירובית לאדם בן 50 בריא ומאומן מאוד (דופק מנוחה 50)?',
    hint: 'חישוב: 220-50=170, רזרבה 120, בתוספת דופק מנוחה.',
    explanation: 'דופק מרבי 170, רזרבה 120 פעימות. בחישוב עצימות מתאימה הטווח מגיע ל-145-150 פעימות לדקה.',
    diagram: 'heart',
    options: [
      { id: 'tp_55_a', text: '145-150 פעימות', isCorrect: true },
      { id: 'tp_55_b', text: '105-115 פעימות', isCorrect: false },
      { id: 'tp_55_c', text: '160-165 פעימות', isCorrect: false },
      { id: 'tp_55_d', text: '120-130 פעימות', isCorrect: false }
    ]
  },
  {
    id: 'tp_56',
    moduleId: 'train_plan',
    topic: 'הגיל השלישי',
    title: 'המלצות אירובי לקשישים',
    questionText: 'מהן ההמלצות האירוביות לפעילות גופנית לקשישים?',
    hint: 'עצימות מתונה ובטוחה.',
    explanation: 'לקשישים מומלץ אימון אירובי מתון בעצימות של 55%-60% מהדופק המרבי.',
    diagram: 'general',
    options: [
      { id: 'tp_56_a', text: 'אימוני מהירות ואינטרוולים', isCorrect: false },
      { id: 'tp_56_b', text: 'ריצה למרחקים ארוכים בתדירות יומית', isCorrect: false },
      { id: 'tp_56_c', text: 'אימון אירובי בעצימות של 55%-60% מדופק מרבי', isCorrect: true },
      { id: 'tp_56_d', text: 'הימנעות מאימון אירובי', isCorrect: false }
    ]
  },
  {
    id: 'tp_57',
    moduleId: 'train_plan',
    topic: 'אימון ילדים',
    title: 'התנגדות לילדים',
    questionText: 'אימוני התנגדות אצל ילדים יכללו:',
    hint: 'גיוון באמצעים ללמידה מוטורית.',
    explanation: 'אצל ילדים שמים דגש על גיוון צורות ההתנגדות: תרגילי משקל גוף, גומיות, משקולות ומכונות מותאמות.',
    diagram: 'general',
    options: [
      { id: 'tp_57_a', text: 'מספר מצומצם של תרגילים הממוקדים בגפיים העליונות', isCorrect: false },
      { id: 'tp_57_b', text: '15-20 תרגילים באימון אחד', isCorrect: false },
      { id: 'tp_57_c', text: 'גיוון של צורות ההתנגדות: משקל גוף, משקולות, מכונות', isCorrect: true },
      { id: 'tp_57_d', text: 'מספר רב של תרגילים לקבוצות שרירים קטנות', isCorrect: false }
    ]
  },
  {
    id: 'tp_58',
    moduleId: 'train_plan',
    topic: 'אימון ילדים',
    title: 'צמיחה לגובה וכוח',
    questionText: 'בהתייחס לשיא הצמיחה לגובה ועלייה בכוח אצל ילדים:',
    hint: 'בנות מקדימות את הבנים בהתבגרות.',
    explanation: 'שיא העלייה בכוח השריר ושיא הצמיחה לגובה מתרחש אצל בנות מוקדם יותר מאשר אצל בנים.',
    diagram: 'general',
    options: [
      { id: 'tp_58_a', text: 'שיא העלייה בכוח השריר מתרחש אצל בנות מוקדם מהבנים', isCorrect: true },
      { id: 'tp_58_b', text: 'שיא העלייה בכוח השריר מתרחש אצל בנים מוקדם מהבנות', isCorrect: false },
      { id: 'tp_58_c', text: 'שיא העלייה בכוח אצל בנים ובנות זהה', isCorrect: false },
      { id: 'tp_58_d', text: 'אין קשר בין שיא העלייה בכוח השריר אצל ילדים לבין שיא הצמיחה לגובה', isCorrect: false }
    ]
  },
  {
    id: 'tp_59',
    moduleId: 'train_plan',
    topic: 'אוכלוסיות מיוחדות',
    title: 'מתאמן עם יתר לחץ דם',
    questionText: 'איזו מהשיטות הבאות אינה מומלצת לאדם "מתחיל" המתאמן כ-3 חודשים וסובל מלחץ דם?',
    hint: 'שיטות שמעלות לחץ תוך-בטני ודופק באופן קיצוני.',
    explanation: 'אף אחת משיטות העצימות (דרופ סט, חזרות מאולצות, סופר סט) אינה מומלצת לסובלים מיתר לחץ דם.',
    diagram: 'general',
    options: [
      { id: 'tp_59_a', text: 'כל השיטות לא מומלצות', isCorrect: true },
      { id: 'tp_59_b', text: 'DROP SET', isCorrect: false },
      { id: 'tp_59_c', text: 'חזרות מאולצות FORCED REP', isCorrect: false },
      { id: 'tp_59_d', text: 'SUPERSET', isCorrect: false }
    ]
  },
  {
    id: 'tp_60',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'קצב איטי בהורדה',
    questionText: 'מתאמן מבצע תרגיל ובשלב האקצנטרי, מבצע את שלב ההורדה בקצב של 3-4 שניות. מהי צורת האימון המבוצעת?',
    hint: 'TUT - הארכת הזמן תחת מתח.',
    explanation: 'הורדה איטית ומבוקרת של 3-4 שניות מיישמת את שיטת Time Under Tension (מתח מתמשך / זמן תחת עומס).',
    diagram: 'general',
    options: [
      { id: 'tp_60_a', text: 'Time Under Tension - מתח מתמשך', isCorrect: true },
      { id: 'tp_60_b', text: 'אקצנטרי על מרבי', isCorrect: false },
      { id: 'tp_60_c', text: 'Rest Pause', isCorrect: false },
      { id: 'tp_60_d', text: 'מתח מתפרץ', isCorrect: false }
    ]
  },
  {
    id: 'tp_61',
    moduleId: 'train_plan',
    topic: 'שיטות אימון',
    title: 'יישום אקצנטרי על מרבי',
    questionText: 'מהי דוגמא ליישום צורת האימון אקצנטרי על מרבי?',
    hint: 'מאמן עוזר בהרמה והמתאמן בולם לבד.',
    explanation: 'באימון אקצנטרי על-מרבי המאמן מסייע בהרמת משקל שמעל 1RM והמתאמן בולם אותו באופן עצמאי.',
    diagram: 'general',
    options: [
      { id: 'tp_61_a', text: 'חתירה כנגד מכונה והשהייה כל סוף חזרה ל- 3-4 שניות', isCorrect: false },
      { id: 'tp_61_b', text: 'ביצוע פול אובר עם משקולת יד ולאחר מכן עליות מתח באחיזה צרה', isCorrect: false },
      { id: 'tp_61_c', text: 'ביצוע לחיצת חזה כנגד מכונה תוך הורדת המשקל בקצב 4-5 שניות בשלב האקסצנטרי', isCorrect: false },
      { id: 'tp_61_d', text: 'ביצוע לחיצת חזה עם מוט, עזרה בשלב הקונצנטרי ע"י מאמן ובלימה עצמאית', isCorrect: true }
    ]
  },
  {
    id: 'tp_62',
    moduleId: 'train_plan',
    topic: 'סיווג מתאמן',
    title: 'הערכת רמה בלחיצת חזה',
    questionText: 'מתאמן מבצע תרגיל לחיצת חזה: 3 סטים של 12 חזרות, 3 פעמים בשבוע (זהו התרגיל היחיד לקבוצת שרירים זו). מה סביר להניח רמת המתאמן?',
    hint: '3 סטים באימון, תרגיל בסיס יחיד.',
    explanation: 'נפח של 3 סטים באימון ותרגיל יחיד מתאים באופן מובהק למתאמן מתחיל.',
    diagram: 'general',
    options: [
      { id: 'tp_62_a', text: 'מתחיל', isCorrect: true },
      { id: 'tp_62_b', text: 'בינוני', isCorrect: false },
      { id: 'tp_62_c', text: 'לא ניתן לקבוע את הגדרתו כי לא מפורטות קבוצות שרירים נוספות אותן יחזק באימון', isCorrect: false },
      { id: 'tp_62_d', text: 'מתקדם', isCorrect: false }
    ]
  },
  {
    id: 'tp_63',
    moduleId: 'train_plan',
    topic: 'קינזיולוגיה יישומית',
    title: 'התאמה ל-Peak Contraction',
    questionText: 'איזה מהתרגילים הבאים מתאים ביותר ליישום צורת אימון כיווץ איזומטרי בשיא (Peak Contraction)?',
    hint: 'בתרגיל זה בסוף התנועה העומס הוא הגדול ביותר.',
    explanation: 'בחתירה בשכיבה עם T-Bar בסוף התנועה המומנט והעומס הם בשיאם, ולכן כיווץ בשיא מתאים בו במיוחד.',
    diagram: 'general',
    options: [
      { id: 'tp_63_a', text: 'בשכיבה חתירה באחיזה רחבה עם T-Bar', isCorrect: true },
      { id: 'tp_63_b', text: 'פרפר עם משקולת יד', isCorrect: false },
      { id: 'tp_63_c', text: 'לחיצת חזה עם מוט', isCorrect: false },
      { id: 'tp_63_d', text: 'בעמידה כפיפת מרפקים עם מוט', isCorrect: false }
    ]
  },
  {
    id: 'tp_64',
    moduleId: 'train_plan',
    topic: 'נשים בהיריון',
    title: 'פעילות גופנית בהיריון',
    questionText: 'פעילות גופנית בהיריון מותרת ומומלצת במקרים הבאים:',
    hint: 'מומלץ לכל אישה בריאה.',
    explanation: 'פעילות גופנית מותאמת מומלצת בכל שלב גם לנשים שלא התאמנו לפני ההיריון (בכפוף לאישור רפואי).',
    diagram: 'general',
    options: [
      { id: 'tp_64_a', text: 'רצוי ומומלץ לבצע פעילות גופנית בכל שלב גם אם לא התאמנה לפני ההריון', isCorrect: true },
      { id: 'tp_64_b', text: 'אם התאמנה בעבר תוכל להמשיך בהיריון', isCorrect: false },
      { id: 'tp_64_c', text: 'אין לבצע פעילות גופנית בהיריון', isCorrect: false },
      { id: 'tp_64_d', text: 'אם נמצא שיש לה לחץ דם גבוה', isCorrect: false }
    ]
  },
  {
    id: 'tp_65',
    moduleId: 'train_plan',
    topic: 'נשים בהיריון',
    title: 'שכיבה על הגב בהיריון',
    questionText: 'האם מותר לאישה הרה לשכב על הגב במהלך הפעילות הגופנית?',
    hint: 'מותר בשלבים ראשונים / בהתאמה.',
    explanation: 'מותר לשכב על הגב (במיוחד בטרימסטר הראשון, ובהמשך מומלצת הגבהה למניעת לחץ על הווריד הנבוב).',
    diagram: 'general',
    options: [
      { id: 'tp_65_a', text: 'כן', isCorrect: true },
      { id: 'tp_65_b', text: 'רק עם הגבהה', isCorrect: false },
      { id: 'tp_65_c', text: 'עד שבוע 30', isCorrect: false },
      { id: 'tp_65_d', text: 'לא', isCorrect: false }
    ]
  },
  {
    id: 'tp_66',
    moduleId: 'train_plan',
    topic: 'הגיל השלישי',
    title: 'תרגיל פונקציונלי לגיל 65',
    questionText: 'בתכנית אימון לאדם בן 65, בריא, אשר מסוגל לתפקד בחיי היום יום בצורה עצמאית, באיזה תרגיל תבחר בעדיפות ראשונה?',
    hint: 'תנועת קימה מישיבה לעמידה.',
    explanation: 'סקוואט חופשי (או כנגד משקל גוף/כיסא) הוא התרגיל הפונקציונלי החשוב ביותר לשמירה על תפקוד יומיומי ועצמאות.',
    diagram: 'general',
    options: [
      { id: 'tp_66_a', text: 'פשיטת ברכיים עם מכונה', isCorrect: false },
      { id: 'tp_66_b', text: 'סקוואט חופשי', isCorrect: true },
      { id: 'tp_66_c', text: 'לחיצת רגליים במכונה', isCorrect: false },
      { id: 'tp_66_d', text: 'כפיפת ברכיים עם מכונה', isCorrect: false }
    ]
  },
  {
    id: 'tp_67',
    moduleId: 'train_plan',
    topic: 'הגיל השלישי',
    title: 'טווחי תנועה בגיל 70',
    questionText: 'מה צריך לקחת בחשבון בתכנון תכנית אימונים לאדם בן 70?',
    hint: 'השפעת אימון כוח נכון על מפרקים.',
    explanation: 'טווח התנועה יורד עם הגיל, אך ניתן לשפר אותו באמצעות אימון כוח נכון ושיפור דרגות החופש במפרקים.',
    diagram: 'general',
    options: [
      { id: 'tp_67_a', text: 'אימון כוח, גם כשהוא מתוכנן ומבוצע בצורה מיטבית, יפגע בטווח התנועה', isCorrect: false },
      { id: 'tp_67_b', text: 'טווח התנועה יורד אך ניתן להשפיע עליו בעזרת שיפור דרגות החופש במפרקים וכוח', isCorrect: true },
      { id: 'tp_67_c', text: 'טווח התנועה לא יורד עם הגיל ולכן טווחי תנועה הם לא נושא מעניין', isCorrect: false },
      { id: 'tp_67_d', text: 'טווח התנועה יורד עם הגיל אך אימון כוח לא יכול להשפיע לטובה על טווח תנועה', isCorrect: false }
    ]
  },
  {
    id: 'tp_68',
    moduleId: 'train_plan',
    topic: 'אימון אירובי',
    title: 'הכנה למרוץ 5 ק"מ',
    questionText: 'באיזה שיטת אימון יבחר מתאמן מתחיל בן 30 המתכונן למרוץ עממי (5 ק"מ)?',
    hint: 'בניית בסיס אירובי בטוח.',
    explanation: 'למתאמן מתחיל שבונה בסיס אירובי מומלץ להתחיל באימון רצף נרחב.',
    diagram: 'general',
    options: [
      { id: 'tp_68_a', text: 'אימון רצף נרחב', isCorrect: true },
      { id: 'tp_68_b', text: 'אימון הפוגות עצים', isCorrect: false },
      { id: 'tp_68_c', text: 'אימון פארטלק', isCorrect: false },
      { id: 'tp_68_d', text: 'אימון חזרות', isCorrect: false }
    ]
  },
  {
    id: 'tp_69',
    moduleId: 'train_plan',
    topic: 'אימון ילדים',
    title: 'אימון התנגדות לגיל 10',
    questionText: 'הרכב אימון ההתנגדות לילדים בגיל 10 יכלול:',
    hint: 'דגש על לימוד טכניקה נכונה.',
    explanation: 'בגיל 10 הדגש המרכזי הוא לימוד טכניקת ביצוע של תרגילי התנגדות בסיסיים ושליטה מוטורית.',
    diagram: 'general',
    options: [
      { id: 'tp_69_a', text: 'לימוד טכניקת ביצוע של תרגילי התנגדות בסיסיים', isCorrect: true },
      { id: 'tp_69_b', text: 'יישום תרגילים ספציפיים ותוכניות ספציפיות לענפי ספורט', isCorrect: false },
      { id: 'tp_69_c', text: 'יישום של תוכניות אימון כמו שניתנות למבוגרים', isCorrect: false },
      { id: 'tp_69_d', text: 'לימוד טכניקת ביצוע של תרגילי התנגדות מורכבים', isCorrect: false }
    ]
  },
  {
    id: 'tp_70',
    moduleId: 'train_plan',
    topic: 'אימון ילדים',
    title: 'מערכת דומיננטית בשיפור כוח בילדים',
    questionText: 'איזו מערכת נוטה להגיב טוב יותר באימון לקטינים?',
    hint: 'לפני גיל ההתבגרות אין מספיק הורמונים לבניית מסה.',
    explanation: 'בילדים עיקר השיפור בכוח נובע מהסתגלות של המערכת העצבית (גיוס ותיאום יחידות מוטוריות).',
    diagram: 'general',
    options: [
      { id: 'tp_70_a', text: 'מערכת השרירים', isCorrect: false },
      { id: 'tp_70_b', text: 'המערכת ההורמונלית', isCorrect: false },
      { id: 'tp_70_c', text: 'המערכת העצבית', isCorrect: true },
      { id: 'tp_70_d', text: 'מערכת הנשימה', isCorrect: false }
    ]
  },
  {
    id: 'tp_71',
    moduleId: 'train_plan',
    topic: 'אימון אירובי',
    title: 'אימון שינויי קצב',
    questionText: 'אימון שינויי קצב הינו:',
    hint: 'רצף עם מעבר מעל ומתחת לסף האנאירובי.',
    explanation: 'אימון שינויי קצב הוא אימון רצף שבו משנים את דרגת הקושי מעל ומתחת לסף האנאירובי.',
    diagram: 'general',
    options: [
      { id: 'tp_71_a', text: 'אימון רצף, בשינוי קושי במהלך האימון, דרגה גבוהה ונמוכה מעל ותחת לסף האנארובי', isCorrect: true },
      { id: 'tp_71_b', text: 'אימון בו ישנה עלייה הדרגתית קבועה בקצב הריצה או בדרגת הקושי עד למאמץ מרבי', isCorrect: false },
      { id: 'tp_71_c', text: 'שיטת אימון שמתאימה רק למתאמנים מנוסים', isCorrect: false },
      { id: 'tp_71_d', text: 'שיטת אימון הכוללת קטעי מאמץ קשים וקטעי מנוחה מוחלטים', isCorrect: false }
    ]
  },
  {
    id: 'tp_72',
    moduleId: 'train_plan',
    topic: 'מטבוליזם',
    title: 'עומס מטבולי בהיפרטרופיה',
    questionText: 'מהו ההיגד הנכון בהקשר של עומס מטבולי?',
    hint: 'תוצרי גליקוליזה אנאירובית עם מנוחות קצרות.',
    explanation: 'עומס מטבולי מאופיין בהצטברות של מימן ותוצרים מהגליקוליזה האנאירובית כתוצאה ממנוחות קצרות והרבה חזרות.',
    diagram: 'cell',
    options: [
      { id: 'tp_72_a', text: 'הצטברות של לקטט ותוצרים מהגליקוליזה אנארובית, זמני מנוחה ארוכים, הרבה חזרות', isCorrect: false },
      { id: 'tp_72_b', text: 'הצטברות של מימן ותוצרים מהגליקוליזה האירובית, זמני מנוחה ארוכים, מעט חזרות', isCorrect: false },
      { id: 'tp_72_c', text: 'הצטברות של מימן ועוד תוצרים מהגליקוליזה האנאירובית (מנוחה קצרה, הרבה חזרות)', isCorrect: true },
      { id: 'tp_72_d', text: 'הצטברות של מימן ותוצרים מהגליקוליזה האנאירובית, זמני מנוחה קצרים, מעט חזרות', isCorrect: false }
    ]
  },
  {
    id: 'tp_73',
    moduleId: 'train_plan',
    topic: 'נפח שבועי למתחיל',
    title: 'סטים שבועיים למתחיל',
    questionText: 'מהו מספר הסטים השבועי המומלץ לקבוצת שרירים ספציפית בקרב מתאמנים מתחילים?',
    hint: 'סך שבועי מתון.',
    explanation: 'למתאמן מתחיל מומלץ סך שבועי של עד 10 סטים לכל קבוצת שרירים (8-10 סטים).',
    diagram: 'general',
    options: [
      { id: 'tp_73_a', text: 'עד 10 סטים', isCorrect: true },
      { id: 'tp_73_b', text: '15-20 סטים', isCorrect: false },
      { id: 'tp_73_c', text: '20-25 סטים', isCorrect: false },
      { id: 'tp_73_d', text: '1-4 סטים', isCorrect: false }
    ]
  }
];
