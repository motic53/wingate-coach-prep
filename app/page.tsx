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

// ספריית תרשימי SVG מגוונים ושונים לחלוטין בצורתם
function DiagramRenderer({ type }: { type: string }) {
  switch (type) {
    // 1. תא אנושי
    case 'cell':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="80" rx="140" ry="65" fill="#0f172a" stroke="#38bdf8" strokeWidth="2.5" />
          <circle cx="170" cy="80" r="30" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <circle cx="170" cy="80" r="12" fill="#7e22ce" />
          <text x="170" y="84" fill="#f3e8ff" fontSize="9" fontWeight="bold" textAnchor="middle">גרעין</text>
          <ellipse cx="85" cy="65" rx="18" ry="9" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
          <ellipse cx="255" cy="95" rx="18" ry="9" fill="#991b1b" stroke="#f87171" strokeWidth="1.5" />
          <circle cx="110" cy="110" r="4" fill="#38bdf8" />
          <circle cx="130" cy="120" r="4" fill="#38bdf8" />
          <circle cx="230" cy="50" r="4" fill="#38bdf8" />
          <text x="170" y="24" fill="#38bdf8" fontSize="10" fontWeight="bold" textAnchor="middle">קרום התא (חדיר למחצה)</text>
          <text x="85" y="88" fill="#f87171" fontSize="8" textAnchor="middle">מיטוכונדריון</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle">ציטופלזמה, ריבוזומים וייצור אנרגיה</text>
        </svg>
      );

    // 2. דיסק בין-חולייתי
    case 'disc':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="80" rx="135" ry="58" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
          <ellipse cx="170" cy="80" rx="100" ry="42" fill="#0f172a" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3" />
          <ellipse cx="170" cy="80" rx="68" ry="28" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
          <ellipse cx="170" cy="80" rx="36" ry="16" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
          <text x="170" y="84" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גרעין צמיגי (Nucleus Pulposus)</text>
          <text x="170" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעות קולגן סיביות (Annulus Fibrosus)</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">מבנה הדיסק הבין-חולייתי ובלימת זעזועים</text>
        </svg>
      );

    // 3. תא סחוס
    case 'chondrocyte':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="20" y="20" width="300" height="120" rx="15" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2" />
          <ellipse cx="90" cy="80" rx="32" ry="24" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="90" cy="80" r="10" fill="#082f49" />
          <ellipse cx="250" cy="80" rx="32" ry="24" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="250" cy="80" r="10" fill="#082f49" />
          <text x="90" y="120" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">תא סחוס</text>
          <text x="170" y="40" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">מטריקס: קולגן סוג 2 ופרוטאוגליקנים</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle">דיפוזיה מנוזל המפרק (ללא אספקת דם ישירה)</text>
        </svg>
      );

    // 4. מערכת הוורס בעצם צפופה
    case 'osteon':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <circle cx="170" cy="80" r="62" fill="#1e293b" stroke="#ca8a04" strokeWidth="3" />
          <circle cx="170" cy="80" r="46" fill="#0f172a" stroke="#eab308" strokeWidth="2" />
          <circle cx="170" cy="80" r="30" fill="#1e293b" stroke="#fde047" strokeWidth="1.5" />
          <circle cx="170" cy="80" r="12" fill="#dc2626" />
          <text x="170" y="84" fill="#ffffff" fontSize="8" fontWeight="bold" textAnchor="middle">כלי דם</text>
          <text x="170" y="14" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle">מערכת הוורס קונצנטרית (Osteon)</text>
          <text x="170" y="154" fill="#94a3b8" fontSize="9" textAnchor="middle">עצם צפופה (Compact Bone) ולמלות מעגליות</text>
        </svg>
      );

    // 5. חוליית צוואר
    case 'cervical':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="40" rx="55" ry="20" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <text x="170" y="44" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גוף החוליה</text>
          <ellipse cx="170" cy="90" rx="38" ry="24" fill="#020617" stroke="#38bdf8" strokeWidth="2" />
          <circle cx="85" cy="70" r="11" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
          <circle cx="255" cy="70" r="11" fill="#f43f5e" stroke="#fecdd3" strokeWidth="2" />
          <text x="85" y="105" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">נקב עורק הצוואר</text>
          <text x="85" y="118" fill="#f43f5e" fontSize="9" textAnchor="middle">(Transverse Foramen)</text>
          <path d="M 155 115 L 170 150 L 185 115 Z" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <text x="170" y="142" fill="#94a3b8" fontSize="10" textAnchor="middle">זיז מפוצל</text>
        </svg>
      );

    // 6. אטלס ואקסיס
    case 'atlas_axis':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="75" rx="85" ry="40" fill="none" stroke="#38bdf8" strokeWidth="4" />
          <circle cx="170" cy="50" r="13" fill="#f59e0b" stroke="#fde68a" strokeWidth="3" />
          <text x="170" y="54" fill="#020617" fontSize="10" fontWeight="bold" textAnchor="middle">שן Dens</text>
          <text x="170" y="105" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעת חוליית האטלס (C1)</text>
          <text x="170" y="25" fill="#10b981" fontSize="10" textAnchor="middle">רוטציה חופשית של הראש ("לא") סביב C2</text>
          <text x="170" y="145" fill="#94a3b8" fontSize="10" textAnchor="middle">מפרק Atlantoaxial</text>
        </svg>
      );

    // 7. עקומות עמוד השדרה
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

    // 8. עצם החזה סטרנום
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

    // 9. מישורי תנועה
    case 'planes':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="25" y="30" width="85" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="67" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">סגיטלי (חיצי)</text>
          <text x="67" y="80" fill="#cbd5e1" fontSize="9" textAnchor="middle">ימין ושמאל</text>
          <text x="67" y="100" fill="#fde047" fontSize="9" textAnchor="middle">כפיפה ופשיטה</text>
          <rect x="128" y="30" width="85" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="170" y="55" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">פרונטלי (חזית)</text>
          <text x="170" y="80" fill="#cbd5e1" fontSize="9" textAnchor="middle">קדמי ואחורי</text>
          <text x="170" y="100" fill="#fde047" fontSize="9" textAnchor="middle">הרחקה וקירוב</text>
          <rect x="230" y="30" width="85" height="90" rx="8" fill="#1e293b" stroke="#10b981" strokeWidth="2" />
          <text x="272" y="55" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">אופקי (רוחבי)</text>
          <text x="272" y="80" fill="#cbd5e1" fontSize="9" textAnchor="middle">עליון ותחתון</text>
          <text x="272" y="100" fill="#fde047" fontSize="9" textAnchor="middle">רוטציה (סיבוב)</text>
        </svg>
      );

    // 10. תאי עצם: בונה מול מפרק
    case 'cells':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <circle cx="95" cy="70" r="40" fill="#15803d" stroke="#4ade80" strokeWidth="2" />
          <text x="95" y="65" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">אוסטאובלסט</text>
          <text x="95" y="82" fill="#dcfce7" fontSize="9" textAnchor="middle">בונה עצם (Build)</text>
          <circle cx="245" cy="70" r="40" fill="#b91c1c" stroke="#f87171" strokeWidth="2" />
          <text x="245" y="65" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">אוסטאוקלסט</text>
          <text x="245" y="82" fill="#fee2e2" fontSize="9" textAnchor="middle">מפרק עצם (Clear)</text>
        </svg>
      );

    // 11. רצועה מול גיד
    case 'ligament_tendon':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="25" y="30" width="130" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="90" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">רצועה (Ligament)</text>
          <text x="90" y="80" fill="#cbd5e1" fontSize="9" textAnchor="middle">מחברת עצם לעצם</text>
          <text x="90" y="100" fill="#fde047" fontSize="9" textAnchor="middle">מייצבת ומגבילה טווח</text>
          <rect x="185" y="30" width="130" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="250" y="55" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">גיד (Tendon)</text>
          <text x="250" y="80" fill="#cbd5e1" fontSize="9" textAnchor="middle">מחבר שריר לעצם</text>
          <text x="250" y="100" fill="#fde047" fontSize="9" textAnchor="middle">מעביר כוח כיווץ</text>
        </svg>
      );

    // 12. ברך, ראש פיבולה ו-Biceps Femoris
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
        </svg>
      );

    // 13. שריר ה-Iliopsoas באגן
    case 'iliopsoas':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <line x1="170" y1="10" x2="170" y2="70" stroke="#64748b" strokeWidth="8" />
          <text x="210" y="30" fill="#94a3b8" fontSize="9">חוליות מותניים L1-L5</text>
          <path d="M 170 20 Q 150 70 120 120" stroke="#ef4444" strokeWidth="8" fill="none" />
          <text x="80" y="55" fill="#f87171" fontSize="10" fontWeight="bold">Psoas Major</text>
          <ellipse cx="100" cy="75" rx="35" ry="20" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <path d="M 100 75 Q 110 100 120 120" stroke="#f87171" strokeWidth="6" fill="none" />
          <text x="60" y="95" fill="#f87171" fontSize="9">Iliacus</text>
          <circle cx="120" cy="120" r="8" fill="#f59e0b" />
          <text x="120" y="145" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">אחז: Lesser Trochanter</text>
          <text x="230" y="110" fill="#34d399" fontSize="11" fontWeight="bold">כופף הירך הראשי</text>
        </svg>
      );

    // 14. שריר הפירמיפורמיס והעצב הסיאטי
    case 'piriformis':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <polygon points="170,15 140,75 200,75" fill="#334155" stroke="#64748b" strokeWidth="2" />
          <text x="170" y="50" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">עצם העצה (Sacrum)</text>
          <line x1="80" y1="90" x2="80" y2="150" stroke="#64748b" strokeWidth="10" />
          <text x="80" y="130" fill="#cbd5e1" fontSize="9" textAnchor="middle">עצם הירך</text>
          <path d="M 160 55 L 80 90" stroke="#ef4444" strokeWidth="8" />
          <text x="150" y="85" fill="#f87171" fontSize="10" fontWeight="bold">Piriformis (האגסי)</text>
          <path d="M 125 40 Q 120 90 115 155" stroke="#facc15" strokeWidth="5" strokeDasharray="4 2" fill="none" />
          <text x="145" y="135" fill="#facc15" fontSize="11" fontWeight="bold">עצב סיאטי (Sciatic)</text>
          <text x="170" y="154" fill="#94a3b8" fontSize="9" textAnchor="middle">העצב עובר מתחת לשריר; לחץ עליו גורם להקרנת כאב</text>
        </svg>
      );

    // 15. כף רגל, קרסול ושריר טיביאליס אחורי
    case 'ankle_foot':
    case 'tibialis':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <path d="M 120 15 L 120 90 L 80 120 L 220 120 Q 200 85 150 85 L 150 15 Z" fill="#1e293b" stroke="#64748b" strokeWidth="2" />
          <path d="M 110 20 L 110 95 Q 120 115 150 115" stroke="#0284c7" strokeWidth="6" fill="none" />
          <text x="60" y="45" fill="#38bdf8" fontSize="10" fontWeight="bold">Tibialis Posterior</text>
          <path d="M 90 120 Q 150 95 210 120" stroke="#f59e0b" strokeWidth="4" strokeDasharray="3 3" fill="none" />
          <text x="150" y="142" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">קשת כף הרגל המדיאלית</text>
          <text x="170" y="155" fill="#94a3b8" fontSize="9" textAnchor="middle">תמיכה בקשת ומניעת קריסה (פלטפוס)</text>
        </svg>
      );

    // 16. שרירי שכמה: טרפז ורומבואידים
    case 'scapula_muscles':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <line x1="170" y1="10" x2="170" y2="150" stroke="#64748b" strokeWidth="4" />
          <text x="170" y="22" fill="#94a3b8" fontSize="9" textAnchor="middle">עמוד שדרה</text>
          <polygon points="170,25 240,70 170,135" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
          <polygon points="170,25 100,70 170,135" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
          <text x="170" y="75" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">טרפז (Trapezius)</text>
          <line x1="170" y1="80" x2="210" y2="95" stroke="#ef4444" strokeWidth="5" />
          <line x1="170" y1="95" x2="210" y2="110" stroke="#ef4444" strokeWidth="5" />
          <text x="255" y="98" fill="#f87171" fontSize="9" fontWeight="bold">רומבואידים</text>
          <text x="255" y="112" fill="#cbd5e1" fontSize="8">קירוב שכמות</text>
        </svg>
      );

    // 17. סרקומר
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
        </svg>
      );

    // 18. שרוול מסובב Rotator Cuff
    case 'rotator_cuff':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="70" y="25" width="200" height="95" rx="10" fill="#1e293b" stroke="#3b82f6" strokeWidth="2" />
          <text x="170" y="48" fill="#60a5fa" fontSize="12" fontWeight="bold" textAnchor="middle">Subscapularis (קדמי)</text>
          <text x="170" y="65" fill="#93c5fd" fontSize="9" textAnchor="middle">רוטציה פנימית (מדיאלית) ➔ Lesser Tubercle</text>
          <text x="170" y="90" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">Infraspinatus & Teres Minor (אחורי)</text>
          <text x="170" y="105" fill="#fca5a5" fontSize="9" textAnchor="middle">רוטציה חיצונית (לטרלית) ➔ Greater Tubercle</text>
        </svg>
      );

    // 19. שרירי זרוע
    case 'arm_muscles':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="60" y="25" width="100" height="90" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="110" y="50" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">Biceps Brachii</text>
          <text x="110" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">נאחז ברדיוס</text>
          <text x="110" y="85" fill="#fde047" fontSize="9" textAnchor="middle">סופינציה וכפיפה</text>
          <rect x="180" y="25" width="100" height="90" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="230" y="50" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">Triceps Brachii</text>
          <text x="230" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">נאחז באולקרנון</text>
          <text x="230" y="85" fill="#fde047" fontSize="9" textAnchor="middle">פשיטת מרפק</text>
        </svg>
      );

    // 20. ארבע-ראשי
    case 'quadriceps':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="130" y="15" width="80" height="95" rx="12" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
          <rect x="145" y="10" width="50" height="100" rx="8" fill="#dc2626" stroke="#f87171" strokeWidth="2" />
          <text x="170" y="55" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Rectus Femoris</text>
          <text x="170" y="70" fill="#fecdd3" fontSize="9" textAnchor="middle">(דו-מפרקי: מהאגן AIIS)</text>
          <circle cx="170" cy="140" r="7" fill="#38bdf8" />
          <text x="170" y="155" fill="#38bdf8" fontSize="9" textAnchor="middle">אחז משותף: Tibial Tuberosity</text>
        </svg>
      );

    // 21. גלוטאוס מקסימוס
    case 'gluteus':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="170" cy="70" rx="85" ry="45" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
          <text x="170" y="65" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">Gluteus Maximus</text>
          <text x="170" y="85" fill="#fecdd3" fontSize="10" textAnchor="middle">פושט הירך העוצמתי ביותר</text>
          <circle cx="70" cy="110" r="14" fill="#ca8a04" />
          <text x="70" y="140" fill="#facc15" fontSize="9" textAnchor="middle">Greater Trochanter</text>
        </svg>
      );

    // 22. המסטרינגס
    case 'hamstrings':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="80" y="25" width="50" height="90" rx="6" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
          <text x="105" y="65" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">Biceps Femoris</text>
          <rect x="145" y="25" width="50" height="90" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="170" y="65" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Semitendinosus</text>
          <rect x="210" y="25" width="50" height="90" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="235" y="65" fill="#38bdf8" fontSize="9" fontWeight="bold" textAnchor="middle">Semimembranosus</text>
          <text x="170" y="148" fill="#94a3b8" fontSize="10" textAnchor="middle">שלושת שרירי הירך האחורית לפשיטת ירך וכפיפת ברך</text>
        </svg>
      );

    // 23. שוקיים וגיד אכילס
    case 'calves':
    case 'achilles':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <ellipse cx="145" cy="45" rx="22" ry="32" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
          <ellipse cx="195" cy="45" rx="22" ry="32" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
          <text x="170" y="50" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">תאומים</text>
          <rect x="164" y="80" width="12" height="40" fill="#e2e8f0" />
          <text x="110" y="105" fill="#e2e8f0" fontSize="11" fontWeight="bold">גיד אכילס</text>
          <path d="M 150 125 L 190 125 L 205 150 L 150 150 Z" fill="#475569" />
          <text x="170" y="142" fill="#fbbf24" fontSize="10" textAnchor="middle">עקב (Calcaneus) ➔ Plantarflexion</text>
        </svg>
      );

    // 24. תרשים מסלול הגליקוליזה
    case 'glycolysis':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="20" y="55" width="70" height="35" rx="6" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="55" y="76" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">גלוקוז</text>
          <path d="M 95 72 L 125 72" stroke="#f59e0b" strokeWidth="3" markerEnd="url(#arrow)" />
          <rect x="130" y="45" width="80" height="55" rx="8" fill="#78350f" stroke="#f59e0b" strokeWidth="2" />
          <text x="170" y="68" fill="#fbbf24" fontSize="11" fontWeight="bold" textAnchor="middle">PFK אנזים</text>
          <text x="170" y="85" fill="#fde68a" fontSize="8" textAnchor="middle">מעוכב בחומציות</text>
          <path d="M 215 72 L 245 72" stroke="#f59e0b" strokeWidth="3" />
          <rect x="250" y="55" width="75" height="35" rx="6" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
          <text x="287" y="76" fill="#fb7185" fontSize="11" fontWeight="bold" textAnchor="middle">לקטט + H+</text>
          <text x="170" y="130" fill="#34d399" fontSize="12" fontWeight="bold" textAnchor="middle">רווח נקי מהיר: 2 מולקולות ATP</text>
        </svg>
      );

    // 25. גרף צח"מ ופלאטו
    case 'vo2max':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <line x1="45" y1="130" x2="305" y2="130" stroke="#64748b" strokeWidth="2" />
          <line x1="45" y1="20" x2="45" y2="130" stroke="#64748b" strokeWidth="2" />
          <text x="30" y="30" fill="#38bdf8" fontSize="9">VO2</text>
          <text x="280" y="145" fill="#94a3b8" fontSize="9">עצימות</text>
          <path d="M 45 125 L 140 70 L 220 35 L 295 35" fill="none" stroke="#10b981" strokeWidth="4" />
          <line x1="220" y1="35" x2="295" y2="35" stroke="#f43f5e" strokeWidth="4" strokeDasharray="4 2" />
          <text x="255" y="24" fill="#f43f5e" fontSize="10" fontWeight="bold">מישור פלאטו (צח"מ)</text>
          <text x="170" y="152" fill="#94a3b8" fontSize="9" textAnchor="middle">העצימות עולה אך צריכת החמצן אינה עולה עוד</text>
        </svg>
      );

    // 26. לחץ דם במאמץ
    case 'blood_pressure':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="60" y="30" width="85" height="95" rx="8" fill="#1e293b" stroke="#ef4444" strokeWidth="2" />
          <text x="102" y="55" fill="#f87171" fontSize="11" fontWeight="bold" textAnchor="middle">לחץ סיסטולי</text>
          <text x="102" y="80" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">עולה ⬆</text>
          <text x="102" y="105" fill="#cbd5e1" fontSize="9" textAnchor="middle">תפוקת לב מוגברת</text>
          <rect x="195" y="30" width="85" height="95" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="237" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">לחץ דיאסטולי</text>
          <text x="237" y="80" fill="#ffffff" fontSize="13" fontWeight="bold" textAnchor="middle">יציב / יורד ⬇</text>
          <text x="237" y="105" fill="#cbd5e1" fontSize="9" textAnchor="middle">הרחבת כלי דם בשריר</text>
        </svg>
      );

    // 27. סוגי סיבי שריר
    case 'muscle_fibers':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <circle cx="95" cy="75" r="42" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
          <text x="95" y="65" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">סיב אדום Type I</text>
          <text x="95" y="82" fill="#fecdd3" fontSize="8" textAnchor="middle">הרבה מיטוכונדריות ונימים</text>
          <text x="95" y="95" fill="#fde047" fontSize="8" textAnchor="middle">עמידות גבוהה לעייפות</text>
          <circle cx="245" cy="75" r="42" fill="#1e293b" stroke="#e2e8f0" strokeWidth="2" />
          <text x="245" y="65" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">סיב לבן Type IIx</text>
          <text x="245" y="82" fill="#cbd5e1" fontSize="8" textAnchor="middle">גליקוליטי מהיר</text>
          <text x="245" y="95" fill="#f87171" fontSize="8" textAnchor="middle">הספק שיא, מתעייף מהר</text>
        </svg>
      );

    // 28. ויסות הורמונים במאמץ
    case 'hormones':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="35" y="30" width="115" height="95" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="92" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">אינסולין (אנאבולי)</text>
          <text x="92" y="80" fill="#f87171" fontSize="14" fontWeight="bold" textAnchor="middle">יורד במאמץ ⬇</text>
          <text x="92" y="105" fill="#cbd5e1" fontSize="8" textAnchor="middle">מאפשר שחרור סוכר ושומן</text>
          <rect x="190" y="30" width="115" height="95" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="247" y="55" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">גלוקגון וקורטיזול</text>
          <text x="247" y="80" fill="#34d399" fontSize="14" fontWeight="bold" textAnchor="middle">עולים במאמץ ⬆</text>
          <text x="247" y="105" fill="#cbd5e1" fontSize="8" textAnchor="middle">פירוק מאגרים לאנרגיה</text>
        </svg>
      );

    // 29. נאדיות הריאה
    case 'alveoli':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <circle cx="170" cy="75" r="50" fill="#042f2e" stroke="#14b8a6" strokeWidth="3" />
          <text x="170" y="70" fill="#2dd4bf" fontSize="12" fontWeight="bold" textAnchor="middle">נאדית הריאה</text>
          <text x="170" y="86" fill="#99f6e4" fontSize="9" textAnchor="middle">(Alveoli)</text>
          <path d="M 100 75 Q 100 135 170 135 Q 240 135 240 75" fill="none" stroke="#ef4444" strokeWidth="4" />
          <text x="170" y="35" fill="#38bdf8" fontSize="10" textAnchor="middle">חמצן (O2) עובר בדיפוזיה לדם ➔</text>
          <text x="170" y="120" fill="#f87171" fontSize="10" textAnchor="middle">פחמן דו-חמצני (CO2) נפלט לנאדית ➔</text>
        </svg>
      );

    // 30. שסתומי ורידים
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
          <text x="275" y="80" fill="#f59e0b" fontSize="10" textAnchor="middle">משאבת שרירי שלד</text>
        </svg>
      );

    // 31. כישור השריר מול גולג'י
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
        </svg>
      );

    // 32. BMR
    case 'bmr':
      return (
        <svg viewBox="0 0 340 160" className="w-full h-full bg-slate-950 p-2 rounded-xl">
          <rect x="15" y="20" width="95" height="110" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
          <text x="62" y="45" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">מסת שריר</text>
          <text x="62" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">צורכת פי 4 אנרגיה</text>
          <text x="62" y="112" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>
          <rect x="122" y="20" width="95" height="110" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
          <text x="170" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">שטח פני הגוף</text>
          <text x="170" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">איבוד חום מוגבר</text>
          <text x="170" y="112" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>
          <rect x="230" y="20" width="95" height="110" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
          <text x="277" y="45" fill="#a855f7" fontSize="11" fontWeight="bold" textAnchor="middle">גיל ומגדר</text>
          <text x="277" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">טסטוסטרון בגבר</text>
          <text x="277" y="112" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">משפיע ישירות</text>
        </svg>
      );

    // 33. מעגל קורי
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
        </svg>
      );

    // 34. הלב ומסתמים
    case 'heart':
    default:
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
  const touchStartRef = useRef<{ dist: number; scale: number } | null>(null);

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
      touchStartRef.current = { dist, scale: zoomScale };
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
              <span style={{ fontSize: '11px', color: '#94a3b8' }}>תרשימים מותאמים, זום בשתי אצבעות והקראה</span>
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
