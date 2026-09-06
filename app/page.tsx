/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';

// --- ספרית תרשימים גרפיים ייעודיים לכל נושא ---

const DIAGRAMS = {
  bmr: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="20" y="20" width="90" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
      <text x="65" y="45" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">מסת שריר</text>
      <text x="65" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">צורכת פי 4 אנרגיה</text>
      <text x="65" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">משומן במנוחה</text>
      <text x="65" y="115" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>
      <rect x="125" y="20" width="90" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
      <text x="170" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">שטח פני הגוף</text>
      <text x="170" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">איבוד חום מהיר</text>
      <text x="170" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">דרך שטח עור גדול</text>
      <text x="170" y="115" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>
      <rect x="230" y="20" width="90" height="120" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
      <text x="275" y="45" fill="#a855f7" fontSize="11" fontWeight="bold" textAnchor="middle">גיל ומגדר</text>
      <text x="275" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">טסטוסטרון בגבר</text>
      <text x="275" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">ירידה טבעית בגיל</text>
      <text x="275" y="115" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">משפיע ישירות</text>
      <text x="170" y="160" fill="#94a3b8" fontSize="10" textAnchor="middle">הגורמים הקובעים את חילוף החומרים הבסיסי (BMR)</text>
    </svg>
  ),

  disc: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <ellipse cx="170" cy="85" rx="140" ry="65" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
      <ellipse cx="170" cy="85" rx="110" ry="50" fill="#0f172a" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3" />
      <ellipse cx="170" cy="85" rx="80" ry="36" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
      <ellipse cx="170" cy="85" rx="45" ry="20" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
      <text x="170" y="89" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">גרעין צמיגי (Nucleus Pulposus)</text>
      <text x="170" y="38" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">טבעות קולגן סיביות (Annulus Fibrosus)</text>
      <text x="170" y="162" fill="#94a3b8" fontSize="10" textAnchor="middle">מבנה הדיסק הבין-חולייתי ובלימת זעזועים</text>
    </svg>
  ),

  cervical: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <ellipse cx="170" cy="45" rx="55" ry="22" fill="#334155" stroke="#64748b" strokeWidth="2" />
      <text x="170" y="49" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גוף החוליה (Body)</text>
      <ellipse cx="170" cy="98" rx="40" ry="26" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="85" cy="75" r="10" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
      <circle cx="255" cy="75" r="10" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
      <text x="85" y="115" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">נקב עורק הצוואר</text>
      <text x="85" y="128" fill="#f43f5e" fontSize="9" textAnchor="middle">(Transverse Foramen)</text>
      <path d="M 155 125 L 170 160 L 185 125 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
      <text x="170" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">זיז אחורי מפוצל (Spine)</text>
    </svg>
  ),

  spine_curves: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <path d="M 170 15 Q 195 42 170 68 Q 140 98 170 124 Q 190 144 170 162" fill="none" stroke="#f59e0b" strokeWidth="6" strokeLinecap="round" />
      <circle cx="170" cy="18" r="5" fill="#38bdf8" />
      <circle cx="188" cy="42" r="5" fill="#38bdf8" />
      <circle cx="170" cy="68" r="5" fill="#38bdf8" />
      <circle cx="150" cy="98" r="5" fill="#10b981" />
      <circle cx="170" cy="124" r="5" fill="#a855f7" />
      <text x="255" y="42" fill="#38bdf8" fontSize="11" fontWeight="bold">לורדוזה צווארית (C1-C7)</text>
      <text x="65" y="98" fill="#10b981" fontSize="11" fontWeight="bold">קיפוזה חזית (T1-T12)</text>
      <text x="255" y="132" fill="#a855f7" fontSize="11" fontWeight="bold">לורדוזה מותנית (L1-L5)</text>
      <text x="70" y="155" fill="#fbbf24" fontSize="10">סקרום וקוקסיקס</text>
    </svg>
  ),

  knee_fibula: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <path d="M 120 10 L 220 10 L 225 55 Q 210 75 170 70 Q 130 75 115 55 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
      <text x="170" y="35" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">עצם הירך (Femur)</text>
      <ellipse cx="135" cy="75" rx="16" ry="6" fill="#38bdf8" />
      <ellipse cx="205" cy="75" rx="16" ry="6" fill="#38bdf8" />
      <path d="M 130 85 Q 170 80 210 85 L 200 160 L 140 160 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <text x="170" y="125" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">שוק (Tibia)</text>
      <path d="M 95 90 L 115 90 L 110 160 L 90 160 Z" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="105" cy="94" r="11" fill="#e11d48" stroke="#fecdd3" strokeWidth="2" />
      <path d="M 85 25 Q 75 65 100 88" fill="none" stroke="#fb7185" strokeWidth="4" strokeDasharray="4 2" />
      <text x="45" y="38" fill="#fb7185" fontSize="10" fontWeight="bold">Biceps Femoris</text>
      <text x="45" y="115" fill="#f59e0b" fontSize="10" fontWeight="bold">ראש השוקית</text>
      <text x="45" y="128" fill="#f59e0b" fontSize="9">(Head of Fibula)</text>
    </svg>
  ),

  sarcomere: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <line x1="30" y1="20" x2="30" y2="150" stroke="#f43f5e" strokeWidth="4" />
      <line x1="310" y1="20" x2="310" y2="150" stroke="#f43f5e" strokeWidth="4" />
      <text x="30" y="15" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">Z-Line</text>
      <text x="310" y="15" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">Z-Line</text>
      <line x1="30" y1="50" x2="145" y2="50" stroke="#38bdf8" strokeWidth="3.5" />
      <line x1="195" y1="50" x2="310" y2="50" stroke="#38bdf8" strokeWidth="3.5" />
      <line x1="30" y1="120" x2="145" y2="120" stroke="#38bdf8" strokeWidth="3.5" />
      <line x1="195" y1="120" x2="310" y2="120" stroke="#38bdf8" strokeWidth="3.5" />
      <text x="85" y="42" fill="#38bdf8" fontSize="10" fontWeight="bold">אקטין (חלבון דק נגרר)</text>
      <rect x="95" y="75" width="150" height="20" rx="4" fill="#eab308" />
      <circle cx="115" cy="70" r="5" fill="#ca8a04" />
      <circle cx="135" cy="70" r="5" fill="#ca8a04" />
      <circle cx="205" cy="70" r="5" fill="#ca8a04" />
      <circle cx="225" cy="70" r="5" fill="#ca8a04" />
      <text x="170" y="89" fill="#020617" fontSize="10" fontWeight="bold" textAnchor="middle">מיוזין (חלבון עבה מושך)</text>
      <text x="170" y="162" fill="#94a3b8" fontSize="10" textAnchor="middle">מנגנון גשרי הרוחב בסרקומר</text>
    </svg>
  ),

  heart: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="70" y="25" width="90" height="50" rx="8" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
      <text x="115" y="55" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">עלייה ימנית</text>
      <rect x="70" y="80" width="90" height="60" rx="8" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="2" />
      <text x="115" y="115" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">חדר ימין</text>
      <line x1="170" y1="20" x2="170" y2="148" stroke="#64748b" strokeWidth="3" />
      <rect x="180" y="25" width="90" height="50" rx="8" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
      <text x="225" y="55" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">עלייה שמאלית</text>
      <rect x="180" y="80" width="90" height="60" rx="8" fill="#b91c1c" stroke="#ef4444" strokeWidth="3" />
      <text x="225" y="115" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">חדר שמאל (עבה)</text>
      <text x="115" y="16" fill="#60a5fa" fontSize="9" textAnchor="middle">דם דל בחמצן לריאות</text>
      <text x="225" y="16" fill="#f87171" fontSize="9" textAnchor="middle">דם מחומצן אל הגוף</text>
      <text x="170" y="162" fill="#94a3b8" fontSize="10" textAnchor="middle">בדיאסטולה: מסתמים בין עליות לחדרים פתוחים למילוי</text>
    </svg>
  ),

  cori: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="30" y="25" width="110" height="110" rx="12" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
      <text x="85" y="50" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">שריר פעיל</text>
      <text x="85" y="75" fill="#fecdd3" fontSize="11" textAnchor="middle">גלוקוז ➔ פירובט</text>
      <text x="85" y="100" fill="#fb7185" fontSize="11" fontWeight="bold" textAnchor="middle">לקטט + H+</text>
      <rect x="200" y="25" width="110" height="110" rx="12" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
      <text x="255" y="50" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">כבד (מחזור)</text>
      <text x="255" y="75" fill="#bbf7d0" fontSize="11" textAnchor="middle">לקטט ➔ גלוקוז</text>
      <text x="255" y="100" fill="#86efac" fontSize="10" textAnchor="middle">(השקעת 6 ATP)</text>
      <text x="170" y="45" fill="#f59e0b" fontSize="10" textAnchor="middle">לקטט בדם ➔</text>
      <text x="170" y="125" fill="#38bdf8" fontSize="10" textAnchor="middle">גלוקוז לשריר ➔</text>
      <text x="170" y="160" fill="#94a3b8" fontSize="10" textAnchor="middle">מעגל קורי: פינוי ומיחזור לקטט בכבד</text>
    </svg>
  ),

  energy: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="15" y="25" width="90" height="105" rx="10" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
      <text x="60" y="50" fill="#fbbf24" fontSize="12" fontWeight="bold" textAnchor="middle">ATP-CrP</text>
      <text x="60" y="70" fill="#fde68a" fontSize="10" textAnchor="middle">אנאירובי אלקטי</text>
      <text x="60" y="100" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">0-10 שניות</text>
      <rect x="125" y="25" width="90" height="105" rx="10" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
      <text x="170" y="50" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">גליקוליזה</text>
      <text x="170" y="70" fill="#a7f3d0" fontSize="10" textAnchor="middle">אנאירובי לקטי</text>
      <text x="170" y="100" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">10-120 שנ'</text>
      <rect x="235" y="25" width="90" height="105" rx="10" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
      <text x="280" y="50" fill="#818cf8" fontSize="12" fontWeight="bold" textAnchor="middle">אירובי</text>
      <text x="280" y="70" fill="#c7d2fe" fontSize="10" textAnchor="middle">מיטוכונדריה</text>
      <text x="280" y="100" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">מעל 2 דקות</text>
      <text x="170" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">תרומת מסלולי האנרגיה לפי עצימות ומשך המאמץ</text>
    </svg>
  )
};

// --- מאגר שאלות מקיף (אנטומיה ופיזיולוגיה) עם התאמה מלאה של תרשימים ורמזים ---

const ALL_WINGATE_QUESTIONS = [
  // --- אנטומיה א': שלד, רקמות ומפרקים ---
  {
    id: 'anat1_1',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'מבנה ותפקיד הדיסק הבין-חולייתי',
    diagramKey: 'disc',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו בעיקר:',
    hint: 'Annulus בלטינית פירושו טבעת. דמיין מעטפת של צמיג קשיח שמחזיקה את הנוזל בפנים וסופגת זעזועים.',
    options: [
      { id: 'a', text: 'למנוע חיכוך ולבלום זעזועים (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'להזין ישירות את חוט השדרה', isCorrect: false }
    ],
    explanation: 'ה-Annulus Fibrosus בנוי מטבעות קולגן צפופות העוטפות את הגרעין הצמיגי (Nucleus Pulposus), מונעות שחיקה ובולמות עומסים.'
  },
  {
    id: 'anat1_2',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'מבנה העצם הצפופה ומערכת הוורס',
    diagramKey: 'osteon',
    questionText: 'מה מייחד את העצם הצפופה (Compact Bone)?',
    hint: 'דמיין גזע עץ שנחתך לרוחב: טבעות עגולות זו בתוך זו סביב צינור מרכזי.',
    options: [
      { id: 'a', text: 'מורכבת מיחידות המסודרות בצורה קונצנטרית (מערכות הוורס - Osteons)', isCorrect: true },
      { id: 'b', text: 'חסרת אספקה דמית לחלוטין', isCorrect: false },
      { id: 'c', text: 'נמצאת בעיקר בחלקן הפנימי של האפיפיזות', isCorrect: false },
      { id: 'd', text: 'מורכבת מטרבקולות ספוגיות בלבד', isCorrect: false }
    ],
    explanation: 'העצם הצפופה מורכבת מאוסטאונים (מערכות הוורס) – גלילים של גבישי סידן וקולגן המקיפים תעלה שבה עוברים כלי דם ועצבים.'
  },
  {
    id: 'anat1_3',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'מאפייני חוליות הצוואר',
    diagramKey: 'cervical',
    questionText: 'נקב בזיזים הרוחביים (Transverse Foramen) מאפיין את חוליות:',
    hint: 'המוח יושב למעלה וחייב לקבל דם. באיזה אזור בעמוד השדרה העורקים צריכים מנהרה מוגנת בתוך העצם?',
    options: [
      { id: 'a', text: 'הצוואר (Cervical vertebrae)', isCorrect: true },
      { id: 'b', text: 'החזה (Thoracic)', isCorrect: false },
      { id: 'c', text: 'המותניים (Lumbar)', isCorrect: false },
      { id: 'd', text: 'הסקרום', isCorrect: false }
    ],
    explanation: 'נקב בזיז הרוחבי (C1-C7) מאפשר מעבר בטוח ומוגן של עורק הצוואר המוביל דם למוח.'
  },
  {
    id: 'anat1_4',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'עקומות עמוד השדרה',
    diagramKey: 'spine_curves',
    questionText: 'איזו עקומה קעורה קיימת בעמוד השדרה המותני (Lumbar)?',
    hint: 'שקע הגב התחתון הטבעי המאפשר לנו לעמוד זקוף על שתיים.',
    options: [
      { id: 'a', text: 'לורדוזה מותנית (Lumbar Lordosis)', isCorrect: true },
      { id: 'b', text: 'קיפוזה חזית (Thoracic Kyphosis)', isCorrect: false },
      { id: 'c', text: 'סקוליוזיס (עקמת)', isCorrect: false },
      { id: 'd', text: 'קיפוזה סקרלית', isCorrect: false }
    ],
    explanation: 'באזור המותני קיימת עקומת לורדוזה (שקע קעור) הנושאת את עיקר משקל הגו ובולמת זעזועים.'
  },

  // --- אנטומיה ב': שרירים ותנועות ---
  {
    id: 'anat2_1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה',
    diagramKey: 'knee_fibula',
    questionText: 'איזה שריר נאחז (Insertion) בראש עצם השוקית (Head of Fibula)?',
    hint: 'הפיבולה היא העצם החיצונית (לטרלית) של השוק. איזה שריר מהירך האחורית פונה החוצה לצד הלטרלי בתרשים?',
    options: [
      { id: 'a', text: 'Biceps Femoris (הדו-ראשי הירכי)', isCorrect: true },
      { id: 'b', text: 'Semitendinosus', isCorrect: false },
      { id: 'c', text: 'Semimembranosus', isCorrect: false },
      { id: 'd', text: 'Rectus Femoris', isCorrect: false }
    ],
    explanation: 'ה-Biceps Femoris יורד בצד הלטרלי ונאחז בראש הפיבולה, בעוד שני שרירי ה"סמי" נאחזים בצד הפנימי של הטיביה.'
  },
  {
    id: 'anat2_2',
    moduleId: 'anat2',
    topic: 'מערכת השרירים',
    title: 'מנגנון הסרקומר וחלבון הכיווץ',
    diagramKey: 'sarcomere',
    questionText: 'במהלך כיווץ שריר שלד, איזה חלבון נמשך אל עבר מרכז הסרקומר על ידי גשרי הרוחב?',
    hint: 'החוט הדק שמחובר לקו ה-Z ונגרר פנימה ע"י ראשי המיוזין העבים.',
    options: [
      { id: 'a', text: 'אקטין (Actin)', isCorrect: true },
      { id: 'b', text: 'מיוזין (Myosin)', isCorrect: false },
      { id: 'c', text: 'קולגן מסוג 1', isCorrect: false },
      { id: 'd', text: 'אלסטין', isCorrect: false }
    ],
    explanation: 'ראשי המיוזין נאחזים באקטין וגוררים אותו למרכז הסרקומר בתנועת חתירה (Power Stroke), וכך הסרקומר מתקצר.'
  },

  // --- פיזיולוגיה א': אנרגיה ומטבוליזם ---
  {
    id: 'phys1_1',
    moduleId: 'phys1',
    topic: 'חילוף חומרים בסיסי',
    title: 'משתנים המשפיעים על BMR',
    diagramKey: 'bmr',
    questionText: 'אילו משתנים משפיעים ישירות על חילוף החומרים הבסיסי (BMR)?',
    hint: 'התבונן בתרשים BMR: שריר צורך פי 4 אנרגיה משומן במנוחה, ואדם גדול ממדים מאבד יותר חום דרך שטח העור.',
    options: [
      { id: 'a', text: 'מסת שריר ואחוז שומן, גיל, מגדר, שטח פני הגוף והורמונים', isCorrect: true },
      { id: 'b', text: 'צבע העיניים בלבד', isCorrect: false },
      { id: 'c', text: 'סוג הנעליים שלובשים', isCorrect: false },
      { id: 'd', text: 'כמות השיער על הראש', isCorrect: false }
    ],
    explanation: 'BMR מושפע ממסת רקמת השריר הפעילה (שורפת פי 4 קלוריות מרקמת שומן במנוחה), מגיל, מגדר, שטח פני הגוף והורמונים כמו תירוקסין.'
  },
  {
    id: 'phys1_2',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מערכת הפוספוגנים (ATP-CrP)',
    diagramKey: 'energy',
    questionText: 'מה נכון לגבי הריכוז הזמין של ATP לעומת קריאטין פוספט (CrP) בתא שריר?',
    hint: 'קריאטין פוספט היא מולקולה קטנה בהרבה. כמה ממנה התא מסוגל לאגור ביחס ל-ATP?',
    options: [
      { id: 'a', text: 'הריכוז הזמין של CrP גדול לפחות פי 3 מריכוז ה-ATP', isCorrect: true },
      { id: 'b', text: 'הריכוז של ATP גדול פי 3 מ-CrP', isCorrect: false },
      { id: 'c', text: 'שתי המולקולות מספקות אנרגיה אך ורק בנוכחות חמצן', isCorrect: false },
      { id: 'd', text: 'המאגר של שתיהן מספיק לשעתיים של מאמץ מרבי', isCorrect: false }
    ],
    explanation: 'מולקולת ה-CrP קטנה יותר ולכן התא אוגר כמות הגדולה פי 3 לפחות מ-ATP, המספיקה יחד לכ-10 שניות מאמץ מרבי.'
  },
  {
    id: 'phys1_3',
    moduleId: 'phys1',
    topic: 'מטבוליזם ופינוי פסולת',
    title: 'מעגל קורי (Cori Cycle)',
    diagramKey: 'cori',
    questionText: 'במסגרת "מעגל קורי" (Cori Cycle), מה מתרחש בכבד?',
    hint: 'הכבד הוא מפעל המיחזור: הוא לוקח את הלקטט שנשפך לדם מהשרירים ומשקיע אנרגיה כדי לבנות ממנו שוב סוכר נקי.',
    options: [
      { id: 'a', text: 'לקטט המפונה מהשריר הופך מחדש לגלוקוז בכבד בהשקעת אנרגיה', isCorrect: true },
      { id: 'b', text: 'שומן הופך לחלבון בתוך הכבד', isCorrect: false },
      { id: 'c', text: 'פירובט נשרף ללא חמצן', isCorrect: false },
      { id: 'd', text: 'חומצות אמינו הופכות לסידן', isCorrect: false }
    ],
    explanation: 'הכבד קולט את הלקטט מהדם ובתהליך גלוקונאוגנזה (השקעת 6 ATP) מייצר ממנו גלוקוז המוזרם חזרה לשרירים.'
  },

  // --- פיזיולוגיה ב': מערכות הגוף ---
  {
    id: 'phys2_1',
    moduleId: 'phys2',
    topic: 'מערכת הלב וכלי הדם',
    title: 'שלבי פעולת הלב ומסתמיו',
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
  }
];

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
  const [isModalOpen, setIsModalOpen] = useState(false);

  const initModule = (modId = activeModule) => {
    if ('speechSynthesis' in window) window.speechSynthesis.cancel();
    
    let base = ALL_WINGATE_QUESTIONS;
    if (modId !== 'all') {
      base = ALL_WINGATE_QUESTIONS.filter(q => q.moduleId === modId);
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
        <p style={{ fontWeight: 'bold' }}>טוען שאלות ותרשימים אנטומיים מדויקים...</p>
      </main>
    );
  }

  return (
    <main style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f8fafc', padding: '14px', maxWidth: '520px', margin: '0 auto', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }} dir="rtl">
      
      <div>
        {/* כותרת עליונה */}
        <header style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
            <div>
              <h1 style={{ margin: 0, fontSize: '18px', fontWeight: '900', color: '#f59e0b' }}>
                🎓 ווינגייט קואוץ' - שמואל
              </h1>
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>תרשימים אנטומיים מדויקים והקראה קולית</span>
            </div>

            <button
              onClick={() => initModule(activeModule)}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
              title="ערבוב מחדש של כל השאלות והתשובות"
            >
              🔄 איפוס וערבוב
            </button>
          </div>

          {/* תפריט מודולים */}
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
              🎯 כל המבחן ({ALL_WINGATE_QUESTIONS.length})
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
              💪 אנטומיה ב' (שרירים ותנועה)
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
        <div style={{ backgroundColor: '#0f172a', border: '1px solid #1e293b', borderRadius: '14px', padding: '8px 12px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <div>
            <span style={{ color: '#f59e0b', fontSize: '10px', fontWeight: 'bold', display: 'block' }}>{currentQ.topic}</span>
            <span style={{ color: '#ffffff', fontSize: '13px', fontWeight: '900' }}>{currentQ.title}</span>
          </div>
          <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 'bold' }}>תרשים מותאם אישית 📊</span>
        </div>

        {/* הצגת התרשים המדויק מתוך ספרית הדיאגרמות */}
        <div 
          onClick={() => setIsModalOpen(true)}
          style={{ 
            width: '100%', 
            height: '170px', 
            borderRadius: '14px', 
            overflow: 'hidden', 
            marginBottom: '10px', 
            border: '1px solid #334155', 
            backgroundColor: '#020617',
            position: 'relative', 
            cursor: 'pointer' 
          }}
        >
          {DIAGRAMS[currentQ.diagramKey] || DIAGRAMS.disc}

          <span style={{ position: 'absolute', bottom: '6px', left: '6px', backgroundColor: 'rgba(2, 6, 23, 0.85)', color: '#fbbf24', fontSize: '10px', padding: '3px 8px', borderRadius: '6px', fontWeight: 'bold', border: '1px solid #334155' }}>
            🔍 לחץ להגדלה במסך מלא
          </span>
        </div>

        {/* השאלה + כפתור הקראה קולית */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '14px', padding: '12px', marginBottom: '10px', position: 'relative' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.4' }}>
              {currentQ.questionText}
            </p>

            <button
              onClick={speakQuestion}
              style={{
                backgroundColor: isSpeaking ? '#f59e0b' : '#9333ea',
                color: isSpeaking ? '#020617' : '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '8px 12px',
                fontSize: '16px',
                cursor: 'pointer',
                flexShrink: 0
              }}
              title="הקרא שאלה בעברית"
            >
              🔊
            </button>
          </div>

          <div style={{ marginTop: '8px', backgroundColor: 'rgba(2, 6, 23, 0.6)', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', color: '#94a3b8' }}>
            💡 <strong>רמז אסוציאטיבי:</strong> {currentQ.hint}
          </div>
        </div>

        {/* 4 אפשרויות בחירה (מעורבבות) */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '10px' }}>
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
                  borderRadius: '14px',
                  padding: '10px 12px',
                  textAlign: 'right',
                  color: textColor,
                  fontSize: '13px',
                  fontWeight: isSelected || (isAnswerChecked && opt.isCorrect) ? 'bold' : 'normal',
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                  cursor: isAnswerChecked ? 'default' : 'pointer'
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ backgroundColor: '#020617', width: '22px', height: '22px', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '11px', fontWeight: 'bold', border: '1px solid #334155' }}>
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

        {/* הסבר מפורט מתוך חוברות וינגייט */}
        {showExplanation && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '14px', padding: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: 'bold' }}>📖 הסבר רשמי מתוך חוברת וינגייט:</span>
              <button
                onClick={() => speak(currentQ.explanation)}
                style={{ backgroundColor: '#3b0764', color: '#d8b4fe', border: '1px solid #6b21a8', borderRadius: '8px', padding: '2px 6px', fontSize: '10px', cursor: 'pointer' }}
              >
                🔊 הקרא הסבר
              </button>
            </div>
            <p style={{ margin: 0, fontSize: '11px', color: '#cbd5e1', lineHeight: '1.4', backgroundColor: '#020617', padding: '8px', borderRadius: '8px' }}>
              {currentQ.explanation}
            </p>
          </div>
        )}
      </div>

      {/* כפתור פעולה תחתון */}
      <footer style={{ paddingTop: '6px', paddingBottom: '6px' }}>
        {!isAnswerChecked ? (
          <button
            onClick={handleCheckAnswer}
            disabled={!selectedOption}
            style={{
              width: '100%',
              backgroundColor: selectedOption ? '#f59e0b' : '#334155',
              color: selectedOption ? '#020617' : '#94a3b8',
              border: 'none',
              borderRadius: '14px',
              padding: '14px',
              fontSize: '15px',
              fontWeight: '900',
              cursor: selectedOption ? 'pointer' : 'not-allowed'
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
              borderRadius: '14px',
              padding: '14px',
              fontSize: '15px',
              fontWeight: '900',
              cursor: 'pointer'
            }}
          >
            {currentIndex === questions.length - 1 ? '🎉 סיים מודול וסכם ציון' : 'שאלה הבאה ➜'}
          </button>
        )}
      </footer>

      {/* חלון צף להגדלת איור במסך מלא */}
      {isModalOpen && (
        <div 
          onClick={() => setIsModalOpen(false)}
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 100, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '16px' }}
        >
          <div style={{ width: '100%', maxWidth: '480px', textAlign: 'center' }}>
            <div style={{ height: '260px', borderRadius: '14px', border: '2px solid #f59e0b', overflow: 'hidden' }}>
              {DIAGRAMS[currentQ.diagramKey] || DIAGRAMS.disc}
            </div>
            <p style={{ color: '#ffffff', fontSize: '13px', marginTop: '10px', fontWeight: 'bold' }}>{currentQ.title} - לחץ לסגירה ✕</p>
          </div>
        </div>
      )}

    </main>
  );
}
