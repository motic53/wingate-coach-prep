/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';

// --- ספריית תרשימים גרפיים (SVG) ייעודיים לכל נושא ---
const DIAGRAMS_LIBRARY = {
  bmr: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <rect x="15" y="20" width="95" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
      <text x="62" y="45" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">מסת שריר</text>
      <text x="62" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">צורכת פי 4 אנרגיה</text>
      <text x="62" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">משומן במנוחה</text>
      <text x="62" y="112" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>

      <rect x="122" y="20" width="95" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
      <text x="170" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">שטח פני הגוף</text>
      <text x="170" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">איבוד חום מוגבר</text>
      <text x="170" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">בגוף גדול ממדים</text>
      <text x="170" y="112" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>

      <rect x="230" y="20" width="95" height="110" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
      <text x="277" y="45" fill="#a855f7" fontSize="11" fontWeight="bold" textAnchor="middle">גיל ומגדר</text>
      <text x="277" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">טסטוסטרון בגבר</text>
      <text x="277" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">ירידה טבעית בגיל</text>
      <text x="277" y="112" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">משפיע ישירות</text>
      <text x="170" y="150" fill="#94a3b8" fontSize="10" textAnchor="middle">הגורמים המשפיעים על חילוף החומרים הבסיסי (BMR)</text>
    </svg>
  ),

  disc: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <ellipse cx="170" cy="80" rx="135" ry="60" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
      <ellipse cx="170" cy="80" rx="105" ry="46" fill="#0f172a" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3" />
      <ellipse cx="170" cy="80" rx="75" ry="32" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
      <ellipse cx="170" cy="80" rx="40" ry="18" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
      <text x="170" y="84" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גרעין צמיגי (Nucleus Pulposus)</text>
      <text x="170" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעות קולגן סיביות (Annulus Fibrosus)</text>
      <text x="170" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">מבנה הדיסק הבין-חולייתי ובלימת זעזועים</text>
    </svg>
  ),

  chondrocyte: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <rect x="20" y="20" width="300" height="120" rx="15" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2" />
      <ellipse cx="110" cy="80" rx="35" ry="25" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="110" cy="80" r="10" fill="#082f49" />
      <ellipse cx="230" cy="80" rx="35" ry="25" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="230" cy="80" r="10" fill="#082f49" />
      <text x="110" y="120" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">תא סחוס (Chondrocyte)</text>
      <text x="170" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">מטריקס: קולגן סוג 2 ופרוטאוגליקנים</text>
    </svg>
  ),

  osteon: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <circle cx="170" cy="80" r="60" fill="#1e293b" stroke="#ca8a04" strokeWidth="3" />
      <circle cx="170" cy="80" r="44" fill="#0f172a" stroke="#eab308" strokeWidth="2" />
      <circle cx="170" cy="80" r="28" fill="#1e293b" stroke="#fde047" strokeWidth="1.5" />
      <circle cx="170" cy="80" r="10" fill="#dc2626" />
      <text x="170" y="84" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">תעלת דם</text>
      <text x="170" y="14" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle">מערכת הוורס קונצנטרית (Osteon)</text>
      <text x="170" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">עצם צפופה (Compact Bone)</text>
    </svg>
  ),

  cervical: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <ellipse cx="170" cy="40" rx="55" ry="20" fill="#334155" stroke="#64748b" strokeWidth="2" />
      <text x="170" y="44" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גוף החוליה (Body)</text>
      <ellipse cx="170" cy="90" rx="38" ry="24" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="85" cy="70" r="10" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
      <circle cx="255" cy="70" r="10" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
      <text x="85" y="105" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">נקב עורק הצוואר</text>
      <text x="85" y="118" fill="#f43f5e" fontSize="9" textAnchor="middle">(Transverse Foramen)</text>
      <path d="M 155 115 L 170 150 L 185 115 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
      <text x="170" y="142" fill="#94a3b8" fontSize="10" textAnchor="middle">זיז אחורי (Spine)</text>
    </svg>
  ),

  atlas_axis: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <ellipse cx="170" cy="75" rx="85" ry="40" fill="none" stroke="#38bdf8" strokeWidth="4" />
      <circle cx="170" cy="50" r="13" fill="#f59e0b" stroke="#fde68a" strokeWidth="3" />
      <text x="170" y="54" fill="#020617" fontSize="10" fontWeight="bold" textAnchor="middle">שן Dens</text>
      <text x="170" y="105" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעת חוליית האטלס (C1)</text>
      <text x="170" y="25" fill="#10b981" fontSize="10" textAnchor="middle">רוטציה חופשית של הראש ("לא")</text>
      <text x="170" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle">מפרק Atlantoaxial C1-C2</text>
    </svg>
  ),

  spine_curves: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <path d="M 170 15 Q 195 40 170 65 Q 140 95 170 120 Q 190 138 170 152" fill="none" stroke="#f59e0b" strokeWidth="5" strokeLinecap="round" />
      <circle cx="170" cy="18" r="4" fill="#38bdf8" />
      <circle cx="188" cy="40" r="4" fill="#38bdf8" />
      <circle cx="170" cy="65" r="4" fill="#38bdf8" />
      <circle cx="150" cy="95" r="4" fill="#10b981" />
      <circle cx="170" cy="120" r="4" fill="#a855f7" />
      <text x="255" y="40" fill="#38bdf8" fontSize="10" fontWeight="bold">לורדוזה צווארית (C1-C7)</text>
      <text x="65" y="95" fill="#10b981" fontSize="10" fontWeight="bold">קיפוזה חזית (T1-T12)</text>
      <text x="255" y="125" fill="#a855f7" fontSize="10" fontWeight="bold">לורדוזה מותנית (L1-L5)</text>
    </svg>
  ),

  sternum: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <polygon points="145,15 195,15 205,45 135,45" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
      <text x="170" y="34" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">ידית (Manubrium)</text>
      <rect x="150" y="50" width="40" height="70" rx="4" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
      <text x="170" y="88" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גוף</text>
      <polygon points="160,125 180,125 170,148" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
      <text x="170" y="158" fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="middle">זיז החרב (Xiphoid)</text>
    </svg>
  ),

  knee: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <path d="M 120 10 L 220 10 L 225 50 Q 210 70 170 65 Q 130 70 115 50 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
      <text x="170" y="32" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">עצם הירך (Femur)</text>
      <ellipse cx="135" cy="70" rx="16" ry="6" fill="#38bdf8" />
      <ellipse cx="205" cy="70" rx="16" ry="6" fill="#38bdf8" />
      <path d="M 130 80 Q 170 75 210 80 L 200 150 L 140 150 Z" fill="#1e293b" stroke="#475569" strokeWidth="2" />
      <text x="170" y="115" fill="#f8fafc" fontSize="11" fontWeight="bold" textAnchor="middle">שוק (Tibia)</text>
      <path d="M 95 85 L 115 85 L 110 150 L 90 150 Z" fill="#475569" stroke="#94a3b8" strokeWidth="2" />
      <circle cx="105" cy="88" r="10" fill="#e11d48" stroke="#fecdd3" strokeWidth="2" />
      <path d="M 85 20 Q 75 60 100 82" fill="none" stroke="#fb7185" strokeWidth="3" strokeDasharray="4 2" />
      <text x="45" y="32" fill="#fb7185" fontSize="10" fontWeight="bold">Biceps Femoris</text>
      <text x="45" y="110" fill="#f59e0b" fontSize="10" fontWeight="bold">ראש השוקית</text>
      <text x="45" y="122" fill="#f59e0b" fontSize="9">(Head of Fibula)</text>
    </svg>
  ),

  sarcomere: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <line x1="30" y1="20" x2="30" y2="140" stroke="#f43f5e" strokeWidth="4" />
      <line x1="310" y1="20" x2="310" y2="140" stroke="#f43f5e" strokeWidth="4" />
      <text x="30" y="15" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">Z-Line</text>
      <text x="310" y="15" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">Z-Line</text>
      <line x1="30" y1="50" x2="145" y2="50" stroke="#38bdf8" strokeWidth="3" />
      <line x1="195" y1="50" x2="310" y2="50" stroke="#38bdf8" strokeWidth="3" />
      <line x1="30" y1="110" x2="145" y2="110" stroke="#38bdf8" strokeWidth="3" />
      <line x1="195" y1="110" x2="310" y2="110" stroke="#38bdf8" strokeWidth="3" />
      <text x="85" y="42" fill="#38bdf8" fontSize="10" fontWeight="bold">אקטין (דק)</text>
      <rect x="95" y="70" width="150" height="20" rx="4" fill="#eab308" />
      <text x="170" y="84" fill="#020617" fontSize="10" fontWeight="bold" textAnchor="middle">מיוזין (עבה)</text>
      <text x="170" y="150" fill="#94a3b8" fontSize="10" textAnchor="middle">מנגנון גשרי הרוחב בסרקומר</text>
    </svg>
  ),

  deltoid: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <line x1="70" y1="30" x2="270" y2="30" stroke="#94a3b8" strokeWidth="4" />
      <path d="M 90 35 Q 110 90 170 135" stroke="#38bdf8" strokeWidth="5" fill="none" />
      <path d="M 170 35 Q 170 90 170 135" stroke="#f59e0b" strokeWidth="5" fill="none" />
      <path d="M 250 35 Q 230 90 170 135" stroke="#a855f7" strokeWidth="5" fill="none" />
      <circle cx="170" cy="135" r="7" fill="#ef4444" />
      <text x="170" y="155" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">אחז: Deltoid Tuberosity</text>
      <text x="75" y="75" fill="#38bdf8" fontSize="9">קדמי</text>
      <text x="185" y="65" fill="#f59e0b" fontSize="9">אמצעי</text>
      <text x="265" y="75" fill="#a855f7" fontSize="9">אחורי</text>
    </svg>
  ),

  quadriceps: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <rect x="130" y="15" width="80" height="95" rx="12" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
      <rect x="145" y="10" width="50" height="100" rx="8" fill="#dc2626" stroke="#f87171" strokeWidth="2" />
      <text x="170" y="55" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Rectus Femoris</text>
      <text x="170" y="70" fill="#fecdd3" fontSize="9" textAnchor="middle">(דו-מפרקי: מהאגן AIIS)</text>
      <circle cx="170" cy="140" r="7" fill="#38bdf8" />
      <text x="170" y="155" fill="#38bdf8" fontSize="9" textAnchor="middle">אחז משותף: Tibial Tuberosity</text>
    </svg>
  ),

  achilles: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <ellipse cx="145" cy="45" rx="22" ry="32" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
      <ellipse cx="195" cy="45" rx="22" ry="32" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
      <text x="170" y="50" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">תאומים</text>
      <rect x="164" y="80" width="12" height="40" fill="#e2e8f0" />
      <text x="110" y="105" fill="#e2e8f0" fontSize="11" fontWeight="bold">גיד אכילס</text>
      <path d="M 150 125 L 190 125 L 205 150 L 150 150 Z" fill="#475569" />
      <text x="170" y="142" fill="#fbbf24" fontSize="10" textAnchor="middle">עקב (Calcaneus)</text>
    </svg>
  ),

  energy: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <rect x="15" y="25" width="90" height="100" rx="8" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
      <text x="60" y="50" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">ATP-CrP</text>
      <text x="60" y="70" fill="#fde68a" fontSize="9" textAnchor="middle">אנאירובי אלקטי</text>
      <text x="60" y="95" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">0-10 שניות</text>
      <rect x="125" y="25" width="90" height="100" rx="8" fill="#064e3b" stroke="#10b981" strokeWidth="2" />
      <text x="170" y="50" fill="#34d399" fontSize="11" fontWeight="bold" textAnchor="middle">גליקוליזה</text>
      <text x="170" y="70" fill="#a7f3d0" fontSize="9" textAnchor="middle">אנאירובי לקטי</text>
      <text x="170" y="95" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">10-120 שנ'</text>
      <rect x="235" y="25" width="90" height="100" rx="8" fill="#1e1b4b" stroke="#6366f1" strokeWidth="2" />
      <text x="280" y="50" fill="#818cf8" fontSize="11" fontWeight="bold" textAnchor="middle">אירובי</text>
      <text x="280" y="70" fill="#c7d2fe" fontSize="9" textAnchor="middle">מיטוכונדריה</text>
      <text x="280" y="95" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">מעל 2 דקות</text>
      <text x="170" y="148" fill="#94a3b8" fontSize="10" textAnchor="middle">מסלולי האנרגיה לפי עצימות ומשך</text>
    </svg>
  ),

  cori: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <rect x="30" y="25" width="110" height="100" rx="10" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
      <text x="85" y="48" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">שריר פעיל</text>
      <text x="85" y="70" fill="#fecdd3" fontSize="10" textAnchor="middle">גלוקוז ➔ פירובט</text>
      <text x="85" y="95" fill="#fb7185" fontSize="10" fontWeight="bold" textAnchor="middle">לקטט + יוני מימן</text>
      <rect x="200" y="25" width="110" height="100" rx="10" fill="#14532d" stroke="#22c55e" strokeWidth="2" />
      <text x="255" y="48" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">כבד (מחזור)</text>
      <text x="255" y="70" fill="#bbf7d0" fontSize="10" textAnchor="middle">לקטט ➔ גלוקוז</text>
      <text x="255" y="95" fill="#86efac" fontSize="9" textAnchor="middle">(השקעת 6 ATP)</text>
      <text x="170" y="150" fill="#94a3b8" fontSize="10" textAnchor="middle">מעגל קורי: פינוי ומיחזור לקטט בכבד</text>
    </svg>
  ),

  heart: (
    <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
      <rect x="70" y="20" width="90" height="45" rx="8" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
      <text x="115" y="47" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">עלייה ימנית</text>
      <rect x="70" y="70" width="90" height="55" rx="8" fill="#1d4ed8" stroke="#3b82f6" strokeWidth="2" />
      <text x="115" y="102" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">חדר ימין</text>
      <line x1="170" y1="15" x2="170" y2="135" stroke="#64748b" strokeWidth="3" />
      <rect x="180" y="20" width="90" height="45" rx="8" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
      <text x="225" y="47" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">עלייה שמאלית</text>
      <rect x="180" y="70" width="90" height="55" rx="8" fill="#b91c1c" stroke="#ef4444" strokeWidth="3" />
      <text x="225" y="102" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">חדר שמאל</text>
      <text x="170" y="150" fill="#94a3b8" fontSize="10" textAnchor="middle">בדיאסטולה: מסתמים בין עליות לחדרים פתוחים למילוי</text>
    </svg>
  )
};

// מאגר השאלות המלא לפי חוברות וינגייט
const COMPLETE_WINGATE_QUESTIONS = [
  // --- אנטומיה א': שלד, רקמות ומפרקים ---
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
    topic: 'עמוד השדרה',
    title: 'מאפייני חוליות הצוואר (עמ׳ 65)',
    diagram: 'cervical',
    questionText: 'נקב בזיזים הרוחביים (Transverse Foramen) מאפיין את חוליות:',
    hint: 'המוח יושב בראש וחייב לקבל דם. באיזה אזור בעמוד השדרה העורקים צריכים מנהרה מוגנת בתוך העצם?',
    options: [
      { id: 'a', text: 'הצוואר (Cervical vertebrae)', isCorrect: true },
      { id: 'b', text: 'החזה (Thoracic)', isCorrect: false },
      { id: 'c', text: 'המותניים (Lumbar)', isCorrect: false },
      { id: 'd', text: 'הסקרום', isCorrect: false }
    ],
    explanation: 'עמ׳ 54, 65: נקב בזיז הרוחבי ייחודי לחוליות הצוואר (C1-C7) ומגן על עורק הצוואר המוביל דם למוח.'
  },
  {
    id: 'a1_6',
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
    id: 'a1_7',
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
    id: 'a1_8',
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
    id: 'a1_9',
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
    id: 'a1_10',
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

  // --- אנטומיה ב': שרירים ותנועות ---
  {
    id: 'anat2_1',
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
    id: 'anat2_2',
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
    id: 'anat2_3',
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
    id: 'anat2_4',
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
    id: 'anat2_5',
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
    id: 'anat2_6',
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
    id: 'anat2_7',
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

  // --- פיזיולוגיה א': אנרגיה ומטבוליזם ---
  {
    id: 'p1_bmr',
    moduleId: 'phys1',
    topic: 'חילוף חומרים בסיסי',
    title: 'משתנים המשפיעים על BMR (עמ׳ 9, 14)',
    diagram: 'bmr',
    questionText: 'אילו משתנים משפיעים ישירות על חילוף החומרים הבסיסי (BMR)?',
    hint: 'התבונן בתרשים BMR: שריר צורך פי 4 אנרגיה משומן במנוחה, ואדם גדול ממדים מאבד יותר חום דרך שטח העור.',
    options: [
      { id: 'a', text: 'מסת שריר ואחוז שומן, גיל, מגדר, שטח פני הגוף והורמונים', isCorrect: true },
      { id: 'b', text: 'צבע העיניים בלבד', isCorrect: false },
      { id: 'c', text: 'סוג הנעליים שלובשים', isCorrect: false },
      { id: 'd', text: 'כמות השיער על הראש', isCorrect: false }
    ],
    explanation: 'עמ׳ 9, 14: BMR מושפע ישירות ממסת השריר הפעילה, מגיל, מגדר, שטח פני הגוף ופעילות בלוטת התריס.'
  },
  {
    id: 'p1_marathon',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מקור אנרגיה במרתון (עמ׳ 47)',
    diagram: 'energy',
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
    id: 'p1_cori',
    moduleId: 'phys1',
    topic: 'מעגל קורי',
    title: 'פינוי לקטט במעגל קורי (עמ׳ 47)',
    diagram: 'cori',
    questionText: 'במסגרת מעגל קורי (Cori Cycle), מה מתרחש בכבד?',
    hint: 'הכבד הוא מפעל המיחזור של הגוף: הוא לוקח את הלקטט שנשפך לדם ומשקיע אנרגיה כדי לבנות ממנו שוב סוכר נקי.',
    options: [
      { id: 'a', text: 'לקטט הופך שוב לגלוקוז בתאי הכבד בהשקעת אנרגיה', isCorrect: true },
      { id: 'b', text: 'לקטט הופך לגלוקוז בתוך השריר הפעיל עצמו', isCorrect: false },
      { id: 'c', text: 'לקטט הופך לשומן בתוך הריאות', isCorrect: false },
      { id: 'd', text: 'לקטט מסולק מהגוף ישירות דרך הנשיפה', isCorrect: false }
    ],
    explanation: 'עמ׳ 39, 47: הכבד הופך 2 מולקולות לקטט חזרה לגלוקוז בתהליך גלוקונאוגנזה הדורש 6 מולקולות ATP.'
  },
  {
    id: 'p1_obla',
    moduleId: 'phys1',
    topic: 'סף אנאירובי',
    title: 'הגדרת הסף האנאירובי (עמ׳ 49)',
    diagram: 'energy',
    questionText: 'מהי ההגדרה של הסף האנאירובי (OBLA)?',
    hint: 'חשוב על ברז שפותח מים (ייצור) מול פתח ניקוז (פינוי). כל עוד הניקוז עומד בקצב, הכיור לא עולה על גדותיו.',
    options: [
      { id: 'a', text: 'קצב הפעילות המרבי שבו קצב ייצור הלקטט שווה עדיין לקצב הפינוי שלו (איזון)', isCorrect: true },
      { id: 'b', text: 'קצב ייצור הלקטט נמוך בהרבה מקצב הפינוי', isCorrect: false },
      { id: 'c', text: 'מצב בו אין שימוש בגלוקוז כלל', isCorrect: false },
      { id: 'd', text: 'הרגע שבו נגמרים מאגרי השומן', isCorrect: false }
    ],
    explanation: 'עמ׳ 40, 49: בסף האנאירובי (כ-4 מילימול/ליטר) קצב הפינוי הוא מקסימלי אך עדיין שווה לייצור. מעבר לו – החומציות מצטברים בחדות.'
  },

  // --- פיזיולוגיה ב': מערכות הגוף ---
  {
    id: 'p2_heart',
    moduleId: 'phys2',
    topic: 'מערכת הלב',
    title: 'מצב המסתמים בדיאסטולה (עמ׳ 74)',
    diagram: 'heart',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים ומילויים) בלב:',
    hint: 'דמיין דלתות שנפתחות כדי שהדם ייכנס מהעליות לתוך החדרים, בזמן שהדלת לעורקים סגורה.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים בין החדרים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'המסתמים בין החדרים לעורקים פתוחים', isCorrect: false },
      { id: 'c', text: 'כל המסתמים בלב סגורים לחלוטין', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'עמ׳ 55, 74: בדיאסטולה החדרים נרפים ומתמלאים בדם מהעליות דרך המסתמים הפתוחים ביניהם, בעוד מסתמי היציאה לעורקים סגורים.'
  }
];

// פונקציית ערבוב חכמה (Fisher-Yates)
function shuffleList(list) {
  const copy = [...list];
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy;
}

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [activeModule, setActiveModule] = useState('all');
  const [quizList, setQuizList] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [isAnswerChecked, setIsAnswerChecked] = useState(false);
  const [score, setScore] = useState(0);
  const [streak, setStreak] = useState(0);
  const [showExplanation, setShowExplanation] = useState(false);

  useEffect(() => {
    setMounted(true);
    resetAndShuffle('all');
  }, []);

  const resetAndShuffle = (modId = activeModule) => {
    if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }

    let source = COMPLETE_WINGATE_QUESTIONS;
    if (modId !== 'all') {
      source = COMPLETE_WINGATE_QUESTIONS.filter((q) => q.moduleId === modId);
    }

    // ערבוב כפול: גם שאלות וגם אפשרויות בחירה!
    const randomized = shuffleList(source).map((q) => ({
      ...q,
      options: shuffleList(q.options)
    }));

    setQuizList(randomized);
    setCurrentIndex(0);
    setSelectedOption(null);
    setIsAnswerChecked(false);
    setShowExplanation(false);
    setScore(0);
    setStreak(0);
  };

  const handleModuleClick = (modId: string) => {
    setActiveModule(modId);
    resetAndShuffle(modId);
  };

  const handleSpeak = (text: string) => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'he-IL';
        u.rate = 0.9;
        window.speechSynthesis.speak(u);
      }
    } catch (e) {}
  };

  if (!mounted || quizList.length === 0) {
    return (
      <div style={{ minHeight: '100vh', backgroundColor: '#020617', color: '#f59e0b', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '18px', fontWeight: 'bold' }}>
        טוען את אפליקציית וינגייט לשמואל...
      </div>
    );
  }

  const currentQ = quizList[currentIndex];

  const handleCheck = () => {
    if (!selectedOption || isAnswerChecked) return;
    const chosen = currentQ.options.find((o) => o.id === selectedOption);
    const correct = chosen?.isCorrect;

    setIsAnswerChecked(true);
    setShowExplanation(true);

    if (correct) {
      setScore((s) => s + 10);
      setStreak((s) => s + 1);
      handleSpeak('נכון מאוד שמואל! תשובה מדויקת.');
    } else {
      setStreak(0);
      const right = currentQ.options.find((o) => o.isCorrect)?.text;
      handleSpeak(`לא מדויק. התשובה הנכונה היא: ${right}.`);
    }
  };

  const handleNext = () => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}

    if (currentIndex < quizList.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedOption(null);
      setIsAnswerChecked(false);
      setShowExplanation(false);
    } else {
      alert(`כל הכבוד שמואל!\nסיימת את המודול בהצלחה!\nצברת ${score} נקודות!`);
      resetAndShuffle(activeModule);
    }
  };

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
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>תרשימים מותאמים ושפלינג מלא</span>
            </div>

            <button
              onClick={() => resetAndShuffle(activeModule)}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 12px', borderRadius: '12px', fontSize: '12px', fontWeight: 'bold', cursor: 'pointer' }}
            >
              🔄 איפוס וערבוב
            </button>
          </div>

          {/* סרגל בחירת מודולים עליון מלא */}
          <div style={{ display: 'flex', gap: '6px', overflowX: 'auto', paddingBottom: '6px', marginBottom: '8px' }}>
            <button
              onClick={() => handleModuleClick('all')}
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
              🎯 כל המבחן ({COMPLETE_WINGATE_QUESTIONS.length})
            </button>

            <button
              onClick={() => handleModuleClick('anat1')}
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
              🦴 אנטומיה א'
            </button>

            <button
              onClick={() => handleModuleClick('anat2')}
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
              💪 אנטומיה ב'
            </button>

            <button
              onClick={() => handleModuleClick('phys1')}
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
              ⚡ פיזיולוגיה א'
            </button>

            <button
              onClick={() => handleModuleClick('phys2')}
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
              ❤️ פיזיולוגיה ב'
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
            <span style={{ color: '#94a3b8', fontWeight: 'bold' }}>שאלה {currentIndex + 1} מתוך {quizList.length}</span>
          </div>

          <div style={{ width: '100%', backgroundColor: '#0f172a', height: '8px', borderRadius: '999px', overflow: 'hidden', border: '1px solid #1e293b' }}>
            <div 
              style={{ 
                width: `${((currentIndex + 1) / quizList.length) * 100}%`, 
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
          <span style={{ fontSize: '11px', color: '#38bdf8', fontWeight: 'bold' }}>תרשים מדויק 📊</span>
        </div>

        {/* תרשים גרפי מותאם לשאלה */}
        <div style={{ width: '100%', height: '170px', borderRadius: '14px', overflow: 'hidden', marginBottom: '10px', border: '1px solid #334155', backgroundColor: '#020617' }}>
          {DIAGRAMS_LIBRARY[currentQ.diagram] || DIAGRAMS_LIBRARY.disc}
        </div>

        {/* שאלה + כפתור הקראה */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '14px', padding: '12px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.4' }}>
              {currentQ.questionText}
            </p>

            <button
              onClick={() => handleSpeak(`${currentQ.questionText}. רמז: ${currentQ.hint}`)}
              style={{
                backgroundColor: '#9333ea',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '8px 12px',
                fontSize: '16px',
                cursor: 'pointer',
                flexShrink: 0
              }}
              title="הקרא שאלה"
            >
              🔊
            </button>
          </div>

          <div style={{ marginTop: '8px', backgroundColor: 'rgba(2, 6, 23, 0.6)', padding: '6px 10px', borderRadius: '8px', fontSize: '11px', color: '#94a3b8' }}>
            💡 <strong>רמז אסוציאטיבי:</strong> {currentQ.hint}
          </div>
        </div>

        {/* 4 אפשרויות בחירה מעורבבות */}
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

        {/* הסבר מלא */}
        {showExplanation && (
          <div style={{ backgroundColor: '#0f172a', border: '1px solid #334155', borderRadius: '14px', padding: '10px', marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <span style={{ color: '#f59e0b', fontSize: '11px', fontWeight: 'bold' }}>📖 הסבר רשמי ומפורט:</span>
              <button
                onClick={() => handleSpeak(currentQ.explanation)}
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

      {/* כפתור בדיקה / שאלה הבאה */}
      <footer style={{ paddingTop: '6px', paddingBottom: '6px' }}>
        {!isAnswerChecked ? (
          <button
            onClick={handleCheck}
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
            {currentIndex === quizList.length - 1 ? '🎉 סיום מודול ואיפוס' : 'שאלה הבאה ➜'}
          </button>
        )}
      </footer>

    </main>
  );
}
