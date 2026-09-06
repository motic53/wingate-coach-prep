/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect, useRef } from 'react';
import { PART1_ANATOMY1 } from '../data/part1';
import { PART2_ANATOMY2 } from '../data/part2';
import { PART3_PHYSIO1 } from '../data/part3';
import { PART4_PHYSIO2 } from '../data/part4';

// איחוד כלל השאלות
const ALL_WINGATE_DATA = [
  ...(PART1_ANATOMY1 || []),
  ...(PART2_ANATOMY2 || []),
  ...(PART3_PHYSIO1 || []),
  ...(PART4_PHYSIO2 || [])
];

// --- ספריית תרשימי SVG וקטוריים מורחבת (30+ תרשימים) ---
function DiagramRenderer({ type }: { type: string }) {
  switch (type) {
    case 'cell':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="80" rx="140" ry="65" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx="170" cy="80" r="32" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <circle cx="170" cy="80" r="14" fill="#6b21a8" />
          <text x="170" y="84" fill="#f3e8ff" fontSize="10" fontWeight="bold" textAnchor="middle">גרעין ו-DNA</text>
          <ellipse cx="90" cy="65" rx="20" ry="10" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
          <text x="90" y="69" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">מיטוכונדריון</text>
          <ellipse cx="250" cy="95" rx="20" ry="10" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
          <text x="250" y="99" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">מיטוכונדריון</text>
          <text x="170" y="24" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">קרום התא (חדיר למחצה)</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle">מבנה תא אנושי: ציטופלזמה, גרעין ואברוני אנרגיה</text>
        </svg>
      );

    case 'disc':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="80" rx="135" ry="60" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
          <ellipse cx="170" cy="80" rx="105" ry="46" fill="#0f172a" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3" />
          <ellipse cx="170" cy="80" rx="75" ry="32" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          <ellipse cx="170" cy="80" rx="40" ry="18" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
          <text x="170" y="84" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גרעין צמיגי (Nucleus Pulposus)</text>
          <text x="170" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעות קולגן סיביות (Annulus Fibrosus)</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">מבנה הדיסק הבין-חולייתי ובלימת זעזועים</text>
        </svg>
      );

    case 'chondrocyte':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="20" y="20" width="300" height="120" rx="15" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2" />
          <ellipse cx="100" cy="80" rx="35" ry="25" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="100" cy="80" r="10" fill="#082f49" />
          <ellipse cx="240" cy="80" rx="35" ry="25" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="240" cy="80" r="10" fill="#082f49" />
          <text x="100" y="120" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">תא סחוס (Chondrocyte)</text>
          <text x="170" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">מטריקס: סיבי קולגן ופרוטאוגליקנים</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">דיפוזיה של מזון מנוזל המפרק הסינוביאלי</text>
        </svg>
      );

    case 'osteon':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <circle cx="170" cy="80" r="60" fill="#1e293b" stroke="#ca8a04" strokeWidth="3" />
          <circle cx="170" cy="80" r="44" fill="#0f172a" stroke="#eab308" strokeWidth="2" />
          <circle cx="170" cy="80" r="28" fill="#1e293b" stroke="#fde047" strokeWidth="1.5" />
          <circle cx="170" cy="80" r="10" fill="#dc2626" />
          <text x="170" y="84" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">תעלת דם</text>
          <text x="170" y="14" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle">מערכת הוורס קונצנטרית (Osteon)</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">עצם צפופה (Compact Bone) ולמלות מעגליות</text>
        </svg>
      );

    case 'cervical':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="40" rx="55" ry="20" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <text x="170" y="44" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גוף החוליה (Body)</text>
          <ellipse cx="170" cy="90" rx="38" ry="24" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="85" cy="70" r="10" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
          <circle cx="255" cy="70" r="10" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
          <text x="85" y="105" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">נקב עורק הצוואר</text>
          <text x="85" y="118" fill="#f43f5e" fontSize="9" textAnchor="middle">(Transverse Foramen)</text>
          <path d="M 155 115 L 170 150 L 185 115 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <text x="170" y="142" fill="#94a3b8" fontSize="10" textAnchor="middle">זיז אחורי מפוצל (Spine)</text>
        </svg>
      );

    case 'atlas_axis':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="75" rx="85" ry="40" fill="none" stroke="#38bdf8" strokeWidth="4" />
          <circle cx="170" cy="50" r="13" fill="#f59e0b" stroke="#fde68a" strokeWidth="3" />
          <text x="170" y="54" fill="#020617" fontSize="10" fontWeight="bold" textAnchor="middle">שן Dens</text>
          <text x="170" y="105" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעת חוליית האטלס (C1 - ללא גוף חוליה)</text>
          <text x="170" y="25" fill="#10b981" fontSize="10" textAnchor="middle">רוטציה חופשית של הראש ("לא") סביב האקסיס (C2)</text>
          <text x="170" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle">מפרק Atlantoaxial C1-C2</text>
        </svg>
      );

    case 'spine_curves':
      return (
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
      );

    case 'sternum':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <polygon points="145,15 195,15 205,45 135,45" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <text x="170" y="34" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">ידית (Manubrium)</text>
          <rect x="150" y="50" width="40" height="65" rx="4" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          <text x="170" y="85" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גוף</text>
          <polygon points="160,120 180,120 170,145" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
          <text x="170" y="155" fill="#f43f5e" fontSize="9" fontWeight="bold" textAnchor="middle">זיז החרב (Xiphoid)</text>
        </svg>
      );

    case 'knee_fibula':
    case 'knee':
      return (
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
      );

    case 'sarcomere':
      return (
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
          <text x="170" y="150" fill="#94a3b8" fontSize="10" textAnchor="middle">מנגנון גשרי הרוחב והכיווץ בסרקומר</text>
        </svg>
      );

    case 'deltoid':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <line x1="70" y1="30" x2="270" y2="30" stroke="#94a3b8" strokeWidth="4" />
          <path d="M 90 35 Q 110 90 170 135" stroke="#38bdf8" strokeWidth="5" fill="none" />
          <path d="M 170 35 Q 170 90 170 135" stroke="#f59e0b" strokeWidth="5" fill="none" />
          <path d="M 250 35 Q 230 90 170 135" stroke="#a855f7" strokeWidth="5" fill="none" />
          <circle cx="170" cy="135" r="7" fill="#ef4444" />
          <text x="170" y="155" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">אחז: Deltoid Tuberosity</text>
          <text x="75" y="75" fill="#38bdf8" fontSize="9">קדמי (כפיפה/קירוב)</text>
          <text x="185" y="65" fill="#f59e0b" fontSize="9">אמצעי (הרחקה)</text>
          <text x="265" y="75" fill="#a855f7" fontSize="9">אחורי (פשיטה)</text>
        </svg>
      );

    case 'alveoli':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <circle cx="170" cy="75" r="50" fill="#042f2e" stroke="#14b8a6" strokeWidth="3" />
          <text x="170" y="70" fill="#2dd4bf" fontSize="12" fontWeight="bold" textAnchor="middle">נאדית הריאה</text>
          <text x="170" y="86" fill="#99f6e4" fontSize="9" textAnchor="middle">(Alveoli)</text>
          <path d="M 100 75 Q 100 135 170 135 Q 240 135 240 75" fill="none" stroke="#ef4444" strokeWidth="4" />
          <text x="170" y="35" fill="#38bdf8" fontSize="10" textAnchor="middle">חמצן (O2) עובר בדיפוזיה לדם ➔</text>
          <text x="170" y="120" fill="#f87171" fontSize="10" textAnchor="middle">פחמן דו-חמצני (CO2) נפלט לנאדית ➔</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle">שחלוף גזים בדיפוזיה פסיבית על פני שטח פנים ענק</text>
        </svg>
      );

    case 'veins':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="130" y="15" width="80" height="130" fill="#1e293b" stroke="#3b82f6" strokeWidth="3" />
          <line x1="130" y1="60" x2="165" y2="40" stroke="#60a5fa" strokeWidth="4" />
          <line x1="210" y1="60" x2="175" y2="40" stroke="#60a5fa" strokeWidth="4" />
          <line x1="130" y1="110" x2="165" y2="90" stroke="#60a5fa" strokeWidth="4" />
          <line x1="210" y1="110" x2="175" y2="90" stroke="#60a5fa" strokeWidth="4" />
          <path d="M 170 135 L 170 25" stroke="#38bdf8" strokeWidth="3" strokeDasharray="5 3" />
          <text x="65" y="80" fill="#38bdf8" fontSize="10" textAnchor="middle">שסתומים חד-כיווניים</text>
          <text x="65" y="95" fill="#94a3b8" fontSize="9" textAnchor="middle">מונעים חזרה מטה</text>
          <text x="275" y="80" fill="#f59e0b" fontSize="10" textAnchor="middle">משאבת שרירי שלד</text>
          <text x="170" y="155" fill="#94a3b8" fontSize="9" textAnchor="middle">החזר ורידי כנגד כוח המשיכה אל הלב</text>
        </svg>
      );

    case 'spindle':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="100" cy="75" rx="55" ry="30" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
          <path d="M 75 75 Q 100 60 125 75" stroke="#facc15" strokeWidth="3" fill="none" />
          <text x="100" y="70" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">כישור השריר</text>
          <text x="100" y="120" fill="#fecdd3" fontSize="8" textAnchor="middle">חש מתיחה מהירה ➔ כיווץ מגן</text>
          <rect x="195" y="62" width="85" height="24" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
          <circle cx="235" cy="74" r="8" fill="#a855f7" />
          <text x="235" y="55" fill="#d8b4fe" fontSize="10" fontWeight="bold" textAnchor="middle">אברון גולג'י (GTO)</text>
          <text x="235" y="120" fill="#cbd5e1" fontSize="8" textAnchor="middle">חש עומס יתר ➔ הרפיה מגינה</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle">בקרת רפלקסים בשריר ובגיד</text>
        </svg>
      );

    case 'bmr':
      return (
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
      );

    case 'cori':
      return (
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
      );

    case 'heart':
      return (
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
      );

    case 'energy':
    default:
      return (
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
          <text x="170" y="148" fill="#94a3b8" fontSize="10" textAnchor="middle">מסלולי האנרגיה לפי עצימות ומשך המאמץ</text>
        </svg>
      );
  }
}

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
  const [isSpeaking, setIsSpeaking] = useState(false);

  // מנגנון זום במסך מלא עם 2 אצבעות
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [zoomScale, setZoomScale] = useState(1);
  const [panPosition, setPanPosition] = useState({ x: 0, y: 0 });
  const touchStartRef = useRef<{ dist: number; scale: number; startX: number; startY: number } | null>(null);

  useEffect(() => {
    setMounted(true);
    resetAndShuffle('all');
  }, []);

  const resetAndShuffle = (modId = activeModule) => {
    stopSpeech();

    let source = ALL_WINGATE_DATA;
    if (modId !== 'all') {
      source = ALL_WINGATE_DATA.filter((q) => q.moduleId === modId);
    }

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

  const stopSpeech = () => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
      }
    } catch (e) {}
    setIsSpeaking(false);
  };

  const handleSpeakFullQuestion = () => {
    if (isSpeaking) {
      stopSpeech();
      return;
    }

    const currentQ = quizList[currentIndex];
    if (!currentQ || typeof window === 'undefined' || !('speechSynthesis' in window)) return;

    window.speechSynthesis.cancel();

    const letters = ['א', 'ב', 'ג', 'ד'];
    const optionsText = currentQ.options
      .map((opt, i) => `אפשרות ${letters[i]}: ${opt.text}`)
      .join('. ');

    const fullScript = `שאלה בנושא ${currentQ.topic}. ${currentQ.questionText}. אפשרויות: ${optionsText}.`;

    const utterance = new SpeechSynthesisUtterance(fullScript);
    utterance.lang = 'he-IL';
    utterance.rate = 0.88;

    utterance.onstart = () => setIsSpeaking(true);
    utterance.onend = () => setIsSpeaking(false);
    utterance.onerror = () => setIsSpeaking(false);

    window.speechSynthesis.speak(utterance);
  };

  const speakCustom = (text: string) => {
    try {
      if (typeof window !== 'undefined' && 'speechSynthesis' in window) {
        window.speechSynthesis.cancel();
        const u = new SpeechSynthesisUtterance(text);
        u.lang = 'he-IL';
        u.rate = 0.88;
        window.speechSynthesis.speak(u);
      }
    } catch (e) {}
  };

  // מחוות מגע לזום של שתי אצבעות (Pinch-to-Zoom) בחלון המוגדל
  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      touchStartRef.current = { dist, scale: zoomScale, startX: panPosition.x, startY: panPosition.y };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && touchStartRef.current) {
      const newDist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const ratio = newDist / touchStartRef.current.dist;
      const newScale = Math.min(Math.max(touchStartRef.current.scale * ratio, 0.8), 4);
      setZoomScale(newScale);
    }
  };

  const openZoomModal = () => {
    setZoomScale(1.3);
    setPanPosition({ x: 0, y: 0 });
    setIsModalOpen(true);
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
      speakCustom('נכון מאוד שמואל! תשובה מדויקת.');
    } else {
      setStreak(0);
      const right = currentQ.options.find((o) => o.isCorrect)?.text;
      speakCustom(`לא מדויק. התשובה הנכונה היא: ${right}.`);
    }
  };

  const handleNext = () => {
    stopSpeech();

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
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>מעל 100 שאלות, זום בשתי אצבעות והקראה</span>
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
              🎯 כל המבחן ({ALL_WINGATE_DATA.length})
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
              🦴 אנטומיה א' ({PART1_ANATOMY1.length})
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
              💪 אנטומיה ב' ({PART2_ANATOMY2.length})
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
              ⚡ פיזיולוגיה א' ({PART3_PHYSIO1.length})
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
              ❤️ פיזיולוגיה ב' ({PART4_PHYSIO2.length})
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

        {/* תרשים גרפי מותאם לשאלה + פתיחת מסך מלא */}
        <div 
          onClick={openZoomModal}
          style={{ width: '100%', height: '170px', borderRadius: '14px', overflow: 'hidden', marginBottom: '10px', border: '1px solid #334155', backgroundColor: '#020617', position: 'relative', cursor: 'pointer' }}
        >
          <DiagramRenderer type={currentQ.diagram} />
          <div style={{ position: 'absolute', bottom: '6px', left: '6px', backgroundColor: 'rgba(2, 6, 23, 0.85)', color: '#fbbf24', fontSize: '10px', padding: '3px 8px', borderRadius: '6px', border: '1px solid #334155', fontWeight: 'bold' }}>
            🔍 לחץ להגדלה וזום עם 2 אצבעות
          </div>
        </div>

        {/* שאלה + כפתור הקראה מלא (שאלה + תשובות!) */}
        <div style={{ backgroundColor: '#0b1329', border: '1px solid #1e293b', borderRadius: '14px', padding: '12px', marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
            <p style={{ margin: 0, fontSize: '14px', fontWeight: 'bold', color: '#f8fafc', lineHeight: '1.4' }}>
              {currentQ.questionText}
            </p>

            <button
              onClick={handleSpeakFullQuestion}
              style={{
                backgroundColor: isSpeaking ? '#ef4444' : '#9333ea',
                color: '#ffffff',
                border: 'none',
                borderRadius: '12px',
                padding: '8px 12px',
                fontSize: '15px',
                fontWeight: 'bold',
                cursor: 'pointer',
                flexShrink: 0,
                display: 'flex',
                alignItems: 'center',
                gap: '4px'
              }}
              title="הקרא שאלה ותשובות"
            >
              {isSpeaking ? '⏹ עצור' : '🔊 הקרא הכל'}
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
                onClick={() => speakCustom(currentQ.explanation)}
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

      {/* חלון מודאל מלא להגדלה עם תמיכה בזום של 2 אצבעות */}
      {isModalOpen && (
        <div 
          style={{ position: 'fixed', inset: 0, backgroundColor: 'rgba(0,0,0,0.95)', zIndex: 100, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '10px' }}
        >
          {/* סרגל כפתורי זום עליון */}
          <div style={{ display: 'flex', gap: '8px', marginBottom: '12px', zIndex: 110 }}>
            <button 
              onClick={() => setZoomScale((s) => Math.min(s + 0.3, 4))}
              style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px' }}
            >
              ➕ זום פנימה
            </button>
            <button 
              onClick={() => setZoomScale((s) => Math.max(s - 0.3, 0.8))}
              style={{ backgroundColor: '#1e293b', color: '#38bdf8', border: '1px solid #0284c7', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '15px' }}
            >
              ➖ זום החוצה
            </button>
            <button 
              onClick={() => setZoomScale(1)}
              style={{ backgroundColor: '#1e293b', color: '#fbbf24', border: '1px solid #d97706', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '13px' }}
            >
              🔄 איפוס זום
            </button>
            <button 
              onClick={() => setIsModalOpen(false)}
              style={{ backgroundColor: '#881337', color: '#ffffff', border: '1px solid #e11d48', padding: '6px 14px', borderRadius: '10px', fontWeight: 'bold', fontSize: '13px' }}
            >
              ✕ סגור
            </button>
          </div>

          {/* משטח התרשים עם זיהוי מחוות 2 אצבעות */}
          <div 
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            style={{ 
              width: '100%', 
              maxWidth: '480px', 
              height: '320px', 
              borderRadius: '16px', 
              border: '2px solid #f59e0b', 
              overflow: 'hidden', 
              backgroundColor: '#020617',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              touchAction: 'none'
            }}
          >
            <div 
              style={{ 
                width: '100%', 
                height: '100%', 
                transform: `scale(${zoomScale})`, 
                transition: 'transform 0.1s ease-out',
                transformOrigin: 'center center'
              }}
            >
              <DiagramRenderer type={currentQ.diagram} />
            </div>
          </div>

          <p style={{ color: '#cbd5e1', fontSize: '12px', marginTop: '10px' }}>
            💡 השתמש בשתי אצבעות (Pinch) להגדלה והקטנה על גבי המסך
          </p>
        </div>
      )}

    </main>
  );
}
