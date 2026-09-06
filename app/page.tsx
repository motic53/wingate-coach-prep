/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect } from 'react';

// --- ספריית תרשימים גרפיים (SVG) מותאמים לכל נושא ---
const DIAGRAMS_LIBRARY = {
  // BMR וחילוף חומרים
  bmr: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="20" y="20" width="90" height="120" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
      <text x="65" y="45" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">מסת שריר</text>
      <text x="65" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">צורכת פי 4 אנרגיה</text>
      <text x="65" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">משומן במנוחה</text>
      <text x="65" y="115" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>
      <rect x="125" y="20" width="90" height="120" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
      <text x="170" y="45" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">שטח פני הגוף</text>
      <text x="170" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">איבוד חום מוגבר</text>
      <text x="170" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">בגוף גדול ממדים</text>
      <text x="170" y="115" fill="#10b981" fontSize="11" fontWeight="bold" textAnchor="middle">מעלה BMR ⬆</text>
      <rect x="230" y="20" width="90" height="120" rx="8" fill="#1e293b" stroke="#a855f7" strokeWidth="2" />
      <text x="275" y="45" fill="#a855f7" fontSize="11" fontWeight="bold" textAnchor="middle">גיל ומגדר</text>
      <text x="275" y="70" fill="#cbd5e1" fontSize="9" textAnchor="middle">טסטוסטרון בגבר</text>
      <text x="275" y="85" fill="#cbd5e1" fontSize="9" textAnchor="middle">ירידה טבעית עם הגיל</text>
      <text x="275" y="115" fill="#fbbf24" fontSize="10" fontWeight="bold" textAnchor="middle">משפיע ישירות</text>
      <text x="170" y="160" fill="#94a3b8" fontSize="10" textAnchor="middle">הגורמים המשפיעים על חילוף החומרים הבסיסי (BMR)</text>
    </svg>
  ),

  // דיסק בין חולייתי
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

  // תא סחוס
  chondrocyte: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="20" y="20" width="300" height="130" rx="15" fill="#0c4a6e" stroke="#0284c7" strokeWidth="2" />
      <ellipse cx="110" cy="85" rx="35" ry="25" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="110" cy="85" r="10" fill="#082f49" />
      <ellipse cx="230" cy="85" rx="35" ry="25" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
      <circle cx="230" cy="85" r="10" fill="#082f49" />
      <path d="M 50 40 Q 170 30 290 50 M 50 130 Q 170 140 290 120" stroke="#bae6fd" strokeWidth="2" strokeDasharray="6 4" />
      <text x="110" y="125" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">תא סחוס (Chondrocyte)</text>
      <text x="170" y="35" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">מטריקס חוץ-תאי: קולגן סוג 2 ופרוטאוגליקנים</text>
    </svg>
  ),

  // עצם צפופה ומערכת הוורס
  osteon: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <circle cx="170" cy="85" r="65" fill="#1e293b" stroke="#ca8a04" strokeWidth="3" />
      <circle cx="170" cy="85" r="48" fill="#0f172a" stroke="#eab308" strokeWidth="2" />
      <circle cx="170" cy="85" r="30" fill="#1e293b" stroke="#fde047" strokeWidth="1.5" />
      <circle cx="170" cy="85" r="12" fill="#dc2626" />
      <text x="170" y="89" fill="#ffffff" fontSize="9" fontWeight="bold" textAnchor="middle">תעלת דם</text>
      <text x="170" y="14" fill="#facc15" fontSize="11" fontWeight="bold" textAnchor="middle">מערכת הוורס קונצנטרית (Osteon)</text>
      <text x="50" y="85" fill="#cbd5e1" fontSize="10">למלות מעגליות</text>
      <text x="170" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle">עצם צפופה (Compact Bone)</text>
    </svg>
  ),

  // חוליית צוואר
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

  // אטלס ואקסיס
  atlas_axis: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <ellipse cx="170" cy="80" rx="90" ry="45" fill="none" stroke="#38bdf8" strokeWidth="4" />
      <circle cx="170" cy="55" r="14" fill="#f59e0b" stroke="#fde68a" strokeWidth="3" />
      <text x="170" y="59" fill="#020617" fontSize="10" fontWeight="bold" textAnchor="middle">שן Dens</text>
      <text x="170" y="110" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">טבעת חוליית האטלס (C1)</text>
      <path d="M 130 55 Q 170 30 210 55" fill="none" stroke="#10b981" strokeWidth="3" strokeDasharray="3 3" />
      <text x="170" y="25" fill="#10b981" fontSize="10" textAnchor="middle">רוטציה חופשית של הראש ("לא")</text>
      <text x="170" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">מפרק Atlantoaxial C1-C2</text>
    </svg>
  ),

  // עקומות עמוד השדרה
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

  // סטרנום
  sternum: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <polygon points="145,15 195,15 205,45 135,45" fill="#0284c7" stroke="#38bdf8" strokeWidth="2" />
      <text x="170" y="34" fill="#ffffff" fontSize="10" fontWeight="bold" textAnchor="middle">ידית (Manubrium)</text>
      <rect x="150" y="50" width="40" height="75" rx="4" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
      <text x="170" y="90" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">גוף</text>
      <polygon points="160,130 180,130 170,155" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
      <text x="170" y="168" fill="#f43f5e" fontSize="10" fontWeight="bold" textAnchor="middle">זיז החרב (Xiphoid)</text>
      <text x="80" y="85" fill="#94a3b8" fontSize="10">חיבור צלעות 1-7</text>
    </svg>
  ),

  // ברך וראש פיבולה
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

  // סרקומר
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

  // דלתואיד בכתף
  deltoid: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <line x1="70" y1="30" x2="270" y2="30" stroke="#94a3b8" strokeWidth="4" />
      <text x="170" y="22" fill="#cbd5e1" fontSize="10" textAnchor="middle">עצם הבריח והאקרומיון</text>
      <path d="M 90 35 Q 110 90 170 140" stroke="#38bdf8" strokeWidth="6" fill="none" />
      <path d="M 170 35 Q 170 90 170 140" stroke="#f59e0b" strokeWidth="6" fill="none" />
      <path d="M 250 35 Q 230 90 170 140" stroke="#a855f7" strokeWidth="6" fill="none" />
      <circle cx="170" cy="140" r="8" fill="#ef4444" />
      <text x="170" y="160" fill="#ef4444" fontSize="10" fontWeight="bold" textAnchor="middle">אחז: Deltoid Tuberosity</text>
      <text x="75" y="80" fill="#38bdf8" fontSize="9">קדמי (כפיפה וקירוב אופקי)</text>
      <text x="185" y="70" fill="#f59e0b" fontSize="9">אמצעי (הרחקה)</text>
      <text x="265" y="80" fill="#a855f7" fontSize="9">אחורי (פשיטה)</text>
    </svg>
  ),

  // ארבע-ראשי
  quadriceps: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="130" y="20" width="80" height="100" rx="15" fill="#1e3a8a" stroke="#3b82f6" strokeWidth="2" />
      <rect x="145" y="15" width="50" height="105" rx="10" fill="#dc2626" stroke="#f87171" strokeWidth="2" />
      <text x="170" y="65" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Rectus Femoris</text>
      <text x="170" y="80" fill="#fecdd3" fontSize="9" textAnchor="middle">(דו-מפרקי: מגיע מהאגן AIIS)</text>
      <polygon points="160,130 180,130 170,145" fill="#f59e0b" />
      <circle cx="170" cy="155" r="7" fill="#38bdf8" />
      <text x="170" y="168" fill="#38bdf8" fontSize="9" textAnchor="middle">אחז משותף: Tibial Tuberosity</text>
    </svg>
  ),

  // גיד אכילס ושוק
  achilles: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <ellipse cx="145" cy="50" rx="25" ry="35" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
      <ellipse cx="195" cy="50" rx="25" ry="35" fill="#991b1b" stroke="#ef4444" strokeWidth="2" />
      <text x="170" y="55" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">Gastrocnemius (תאומים)</text>
      <rect x="163" y="90" width="14" height="45" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
      <text x="110" y="115" fill="#e2e8f0" fontSize="11" fontWeight="bold">גיד אכילס</text>
      <path d="M 150 135 L 190 135 L 205 160 L 150 160 Z" fill="#475569" />
      <text x="170" y="152" fill="#fbbf24" fontSize="10" textAnchor="middle">עקב (Calcaneus)</text>
    </svg>
  ),

  // זוקפי הגב
  erector_spinae: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <line x1="170" y1="20" x2="170" y2="150" stroke="#64748b" strokeWidth="4" />
      <line x1="125" y1="30" x2="125" y2="140" stroke="#38bdf8" strokeWidth="5" />
      <line x1="145" y1="25" x2="145" y2="145" stroke="#f59e0b" strokeWidth="5" />
      <line x1="160" y1="20" x2="160" y2="150" stroke="#10b981" strokeWidth="5" />
      <text x="70" y="60" fill="#38bdf8" fontSize="10">Iliocostalis (לטרלי)</text>
      <text x="70" y="90" fill="#f59e0b" fontSize="10">Longissimus (אמצעי)</text>
      <text x="70" y="120" fill="#10b981" fontSize="10">Spinalis (מדיאלי)</text>
      <text x="170" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle">שלושת עמודי ה-Erector Spinae לפשיטת גו</text>
    </svg>
  ),

  // מסלולי אנרגיה
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
  ),

  // מעגל קורי
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

  // עקומת לקטט ו-OBLA
  obla: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <line x1="40" y1="130" x2="310" y2="130" stroke="#64748b" strokeWidth="2" />
      <line x1="40" y1="20" x2="40" y2="130" stroke="#64748b" strokeWidth="2" />
      <path d="M 40 120 Q 180 115 220 90 T 300 25" fill="none" stroke="#f43f5e" strokeWidth="4" />
      <circle cx="220" cy="90" r="7" fill="#f59e0b" />
      <text x="220" y="75" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">סף אנאירובי (4 מילימול)</text>
      <text x="110" y="110" fill="#10b981" fontSize="10">קצב ייצור = קצב פינוי</text>
      <text x="270" y="45" fill="#ef4444" fontSize="10">הצטברות לקטט חדה</text>
      <text x="170" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">עקומת הלקטט וקביעת סף אנאירובי (OBLA)</text>
    </svg>
  ),

  // לב ומסתמים
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

  // שסתומי ורידים
  veins: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="130" y="15" width="80" height="135" fill="#1e293b" stroke="#3b82f6" strokeWidth="3" />
      <line x1="130" y1="65" x2="165" y2="45" stroke="#60a5fa" strokeWidth="4" />
      <line x1="210" y1="65" x2="175" y2="45" stroke="#60a5fa" strokeWidth="4" />
      <line x1="130" y1="120" x2="165" y2="100" stroke="#60a5fa" strokeWidth="4" />
      <line x1="210" y1="120" x2="175" y2="100" stroke="#60a5fa" strokeWidth="4" />
      <path d="M 170 140 L 170 30" stroke="#38bdf8" strokeWidth="3" strokeDasharray="5 3" />
      <polygon points="165,30 175,30 170,18" fill="#38bdf8" />
      <text x="70" y="85" fill="#38bdf8" fontSize="10" textAnchor="middle">שסתומים חד-כיווניים</text>
      <text x="70" y="100" fill="#94a3b8" fontSize="9" textAnchor="middle">מונעים חזרת דם מטה</text>
      <text x="270" y="85" fill="#f59e0b" fontSize="10" textAnchor="middle">משאבת שרירי השלד</text>
      <text x="170" y="165" fill="#94a3b8" fontSize="10" textAnchor="middle">החזר ורידי אל הלב כנגד כוח המשיכה</text>
    </svg>
  ),

  // נאדיות ריאה
  alveoli: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <circle cx="170" cy="80" r="55" fill="#042f2e" stroke="#14b8a6" strokeWidth="3" />
      <text x="170" y="75" fill="#2dd4bf" fontSize="12" fontWeight="bold" textAnchor="middle">נאדית הריאה</text>
      <text x="170" y="92" fill="#99f6e4" fontSize="10" textAnchor="middle">(Alveoli)</text>
      <path d="M 95 80 Q 95 145 170 145 Q 245 145 245 80" fill="none" stroke="#ef4444" strokeWidth="4" />
      <text x="170" y="40" fill="#38bdf8" fontSize="10" textAnchor="middle">חמצן (O2) עובר בדיפוזיה לדם ➔</text>
      <text x="170" y="125" fill="#f87171" fontSize="10" textAnchor="middle">פחמן דו-חמצני (CO2) נפלט לנאדית ➔</text>
      <text x="170" y="162" fill="#94a3b8" fontSize="10" textAnchor="middle">שחלוף גזים בדיפוזיה על פני שטח פנים ענק</text>
    </svg>
  ),

  // כישור השריר מול גולג'י
  spindle: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <ellipse cx="110" cy="80" rx="60" ry="30" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
      <path d="M 80 80 Q 110 65 140 80" stroke="#facc15" strokeWidth="3" fill="none" />
      <text x="110" y="75" fill="#ffffff" fontSize="11" fontWeight="bold" textAnchor="middle">כישור השריר (Spindle)</text>
      <text x="110" y="125" fill="#fecdd3" fontSize="9" textAnchor="middle">חש מתיחה מהירה ➔ פוקד כיווץ מגן</text>
      <rect x="200" y="68" width="85" height="24" rx="4" fill="#e2e8f0" stroke="#cbd5e1" strokeWidth="2" />
      <circle cx="240" cy="80" r="8" fill="#a855f7" />
      <text x="240" y="60" fill="#d8b4fe" fontSize="11" fontWeight="bold" textAnchor="middle">אברון גולג'י (GTO)</text>
      <text x="240" y="125" fill="#cbd5e1" fontSize="9" textAnchor="middle">חש עומס יתר בגיד ➔ פוקד הרפיה</text>
      <text x="170" y="160" fill="#94a3b8" fontSize="10" textAnchor="middle">בקרה עצבית: כישור השריר מכווץ, גולג'י מרפה</text>
    </svg>
  ),

  // אינסולין וסוכר
  insulin: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="40" y="40" width="260" height="100" rx="15" fill="#1e293b" stroke="#64748b" strokeWidth="3" />
      <text x="170" y="110" fill="#94a3b8" fontSize="12" fontWeight="bold" textAnchor="middle">פנים התא (שריר / כבד)</text>
      <circle cx="100" cy="40" r="12" fill="#a855f7" />
      <text x="100" y="25" fill="#c084fc" fontSize="9" textAnchor="middle">אינסולין (המפתח)</text>
      <rect x="190" y="32" width="25" height="16" fill="#10b981" />
      <text x="202" y="25" fill="#34d399" fontSize="9" textAnchor="middle">תעלה פתוחה</text>
      <circle cx="202" cy="70" r="6" fill="#f59e0b" />
      <text x="202" y="90" fill="#fbbf24" fontSize="10" textAnchor="middle">גלוקוז נכנס</text>
      <text x="170" y="160" fill="#94a3b8" fontSize="10" textAnchor="middle">אינסולין נקשר לקולטן ופותח מעבר לגלוקוז</text>
    </svg>
  ),

  // מערכת החיסון
  immune: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <rect x="20" y="30" width="85" height="95" rx="8" fill="#1e293b" stroke="#38bdf8" strokeWidth="2" />
      <text x="62" y="55" fill="#38bdf8" fontSize="11" fontWeight="bold" textAnchor="middle">קו ראשון</text>
      <text x="62" y="75" fill="#e2e8f0" fontSize="9" textAnchor="middle">עור, ריריות</text>
      <text x="62" y="90" fill="#e2e8f0" fontSize="9" textAnchor="middle">והפרשות</text>
      <rect x="125" y="30" width="90" height="95" rx="8" fill="#1e293b" stroke="#f59e0b" strokeWidth="2" />
      <text x="170" y="55" fill="#f59e0b" fontSize="11" fontWeight="bold" textAnchor="middle">קו שני</text>
      <text x="170" y="75" fill="#e2e8f0" fontSize="9" textAnchor="middle">תגובה דלקתית</text>
      <text x="170" y="90" fill="#e2e8f0" fontSize="9" textAnchor="middle">פגוציטים בולעים</text>
      <rect x="235" y="30" width="85" height="95" rx="8" fill="#1e293b" stroke="#ec4899" strokeWidth="2" />
      <text x="277" y="55" fill="#ec4899" fontSize="11" fontWeight="bold" textAnchor="middle">קו שלישי</text>
      <text x="277" y="75" fill="#e2e8f0" fontSize="9" textAnchor="middle">לימפוציטים B,T</text>
      <text x="277" y="90" fill="#e2e8f0" fontSize="9" textAnchor="middle">נוגדנים ספציפיים</text>
      <text x="170" y="155" fill="#94a3b8" fontSize="10" textAnchor="middle">שלושת קווי ההגנה מפני פתוגנים</text>
    </svg>
  )
};

// --- מאגר השאלות המלא והרשמי (אנטומיה ופיזיולוגיה) ---
const ALL_WINGATE_QUESTIONS = [
  // ==========================================
  // מודול 1: אנטומיה א' - שלד, רקמות ומפרקים
  // ==========================================
  {
    id: 'anat1_1',
    moduleId: 'anat1',
    topic: 'רקמות חיבור',
    title: 'מבנה ותפקיד הדיסק הבין-חולייתי',
    diagramKey: 'disc',
    questionText: 'חומר ה-Annulus Fibrosus בדיסק הבין-חולייתי תפקידו בעיקר:',
    hint: 'Annulus בלטינית זה טבעת. דמיין מעטפת של צמיג קשיח שמחזיקה ג\'ל בפנים ובולמת זעזועים.',
    options: [
      { id: 'a', text: 'למנוע חיכוך ולבלום זעזועים (תשובות א׳+ב׳ נכונות)', isCorrect: true },
      { id: 'b', text: 'להציג יכולת החלקה בלבד', isCorrect: false },
      { id: 'c', text: 'לייצר תאי דם אדומים', isCorrect: false },
      { id: 'd', text: 'להזין ישירות את חוט השדרה', isCorrect: false }
    ],
    explanation: 'עמ׳ 35: Annulus Fibrosus הוא טבעת סיבית קולגנית צפופה העוטפת את הגרעין הצמיגי (Nucleus Pulposus) ובולמת עומסים.'
  },
  {
    id: 'anat1_2',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'תאי סחוס - Chondrocyte',
    diagramKey: 'chondrocyte',
    questionText: 'תא הסחוס (Chondrocyte):',
    hint: 'הסיומת "ציט" פירושה תא בוגר, ו"כונדרו" זה סחוס. מה התא מייצר ומפריש כדי לבנות את הרקמה?',
    options: [
      { id: 'a', text: 'מייצר קולגן ורכיבי חומר חוץ-תאי בסחוס', isCorrect: true },
      { id: 'b', text: 'נמצא ברקמת העצם הצפופה', isCorrect: false },
      { id: 'c', text: 'הוא חלק מהחומר האנאורגני של הסחוס', isCorrect: false },
      { id: 'd', text: 'נמצא ברקמת חיבור צפופה בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 35: תאי הסחוס (כונדרוציטים) מייצרים ומפרישים ללא הרף את סיבי הקולגן והפרוטאוגליקנים למטריקס.'
  },
  {
    id: 'anat1_3',
    moduleId: 'anat1',
    topic: 'רקמת הסחוס',
    title: 'הזנת סחוס היאליני',
    diagramKey: 'chondrocyte',
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
    id: 'anat1_4',
    moduleId: 'anat1',
    topic: 'רקמת העצם',
    title: 'מבנה העצם הצפופה',
    diagramKey: 'osteon',
    questionText: 'מה מייחד את העצם הצפופה (Compact Bone)?',
    hint: 'דמיין גזע עץ שנחתך לרוחב: טבעות עגולות זו בתוך זו סביב תעלה מרכזית.',
    options: [
      { id: 'a', text: 'מורכבת מיחידות המסודרות בצורה קונצנטרית (מערכות הוורס - Osteons)', isCorrect: true },
      { id: 'b', text: 'חסרת אספקה דמית לחלוטין', isCorrect: false },
      { id: 'c', text: 'נמצאת בעיקר בחלקן הפנימי של האפיפיזות', isCorrect: false },
      { id: 'd', text: 'מורכבת מטרבקולות ספוגיות בלבד', isCorrect: false }
    ],
    explanation: 'עמ׳ 28, 35: העצם הצפופה בנויה מאוסטאונים (מערכות הוורס) – גלילים של גבישי סידן וקולגן סביב תעלת דם ועצבים.'
  },
  {
    id: 'anat1_5',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'מאפייני חוליות הצוואר',
    diagramKey: 'cervical',
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
    id: 'anat1_6',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'חוליה C1 אטלס',
    diagramKey: 'atlas_axis',
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
    id: 'anat1_7',
    moduleId: 'anat1',
    topic: 'מפרקים',
    title: 'מפרק Atlantoaxial C1-C2',
    diagramKey: 'atlas_axis',
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
    id: 'anat1_8',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'עקומות עמוד השדרה',
    diagramKey: 'spine_curves',
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
    id: 'anat1_9',
    moduleId: 'anat1',
    topic: 'שלד בית החזה',
    title: 'חלקי עצם החזה Sternum',
    diagramKey: 'sternum',
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
    id: 'anat1_10',
    moduleId: 'anat1',
    topic: 'עמוד השדרה',
    title: 'משטחים מפרקיים של חוליות המותניים',
    diagramKey: 'spine_curves',
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

  // ==========================================
  // מודול 2: אנטומיה ב' - שרירים ותנועות
  // ==========================================
  {
    id: 'anat2_1',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'אחז בראש הפיבולה (עמ׳ 124)',
    diagramKey: 'knee_fibula',
    questionText: 'מי מהשרירים הבאים נאחז (Insertion) בעצם השוקית (Fibula)?',
    hint: 'הפיבולה היא העצם החיצונית (לטרלית) של השוק. איזה שריר מהירך האחורית פונה החוצה לצד הלטרלי בתרשים?',
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
    diagramKey: 'sarcomere',
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
    diagramKey: 'deltoid',
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
    title: 'שריר שאינו מבצע רוטציה מדיאלית (עמ׳ 124)',
    diagramKey: 'deltoid',
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
    id: 'anat2_5',
    moduleId: 'anat2',
    topic: 'שרירי הכתף',
    title: 'מסובבי הכתף Rotator Cuff (עמ׳ 125)',
    diagramKey: 'deltoid',
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
    id: 'anat2_6',
    moduleId: 'anat2',
    topic: 'שרירי האגן',
    title: 'אחז ב-Greater Trochanter (עמ׳ 125)',
    diagramKey: 'knee_fibula',
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
    id: 'anat2_7',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'תחל בעצם ה-Femur (עמ׳ 125)',
    diagramKey: 'quadriceps',
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
    id: 'anat2_8',
    moduleId: 'anat2',
    topic: 'שרירי הקרסול',
    title: 'הרמת בהונות ועמידה על עקבים (עמ׳ 126)',
    diagramKey: 'knee_fibula',
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
    id: 'anat2_9',
    moduleId: 'anat2',
    topic: 'שרירי הירך',
    title: 'פשיטת ירך ראשית (עמ׳ 126)',
    diagramKey: 'quadriceps',
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
    id: 'anat2_10',
    moduleId: 'anat2',
    topic: 'שרירי השוק',
    title: 'עלייה על קצות האצבעות (עמ׳ 126)',
    diagramKey: 'achilles',
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

  // ==========================================
  // מודול 3: פיזיולוגיה א' - אנרגיה ומטבוליזם
  // ==========================================
  {
    id: 'p1_bmr',
    moduleId: 'phys1',
    topic: 'חילוף חומרים בסיסי',
    title: 'משתנים המשפיעים על BMR (עמ׳ 9, 14)',
    diagramKey: 'bmr',
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
    id: 'phys1_1',
    moduleId: 'phys1',
    topic: 'מערכות אנרגיה',
    title: 'מקור אנרגיה במרתון (עמ׳ 47)',
    diagramKey: 'energy',
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
    id: 'phys1_2',
    moduleId: 'phys1',
    topic: 'דלק מטבולי במאמץ',
    title: 'תרומת שומנים מול עצימות (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'בזמן מאמץ גופני, התרומה היחסית של השומנים כמקור אנרגיה:',
    hint: 'ככל שאתה רץ מהר יותר, השריר צריך ATP כאן ועכשיו. שומן מתפרק לאט ודורש המון חמצן, אז מה קורה לחלקו היחסי?',
    options: [
      { id: 'a', text: 'יורדת ככל שמתגברת עצימות המאמץ (ועולה חלקן של הפחמימות)', isCorrect: true },
      { id: 'b', text: 'עולה ככל שמתגברת עצימות המאמץ', isCorrect: false },
      { id: 'c', text: 'זהה בכל דרגות המאמץ', isCorrect: false },
      { id: 'd', text: 'שומן משמש רק באימוני ספרינט של 10 שניות', isCorrect: false }
    ],
    explanation: 'עמ׳ 32-33: בעצימות גבוהה הגוף עובר לדלק מהיר וחסכוני בחמצן (פחמימות), בעוד חלקו היחסי של השומן יורד.'
  },
  {
    id: 'phys1_3',
    moduleId: 'phys1',
    topic: 'מעגל קורי',
    title: 'פינוי לקטט במעגל קורי (עמ׳ 47)',
    diagramKey: 'cori',
    questionText: 'במעגל קורי (Cori Cycle):',
    hint: 'הכבד הוא מפעל המיחזור של הגוף: הוא לוקח את הלקטט שנשפך לדם ומשקיע אנרגיה כדי לבנות ממנו שוב סוכר נקי.',
    options: [
      { id: 'a', text: 'לקטט הופך שוב לגלוקוז בתאי הכבד (בהשקעת אנרגיה)', isCorrect: true },
      { id: 'b', text: 'לקטט הופך לגלוקוז בתוך השריר הפעיל עצמו', isCorrect: false },
      { id: 'c', text: 'לקטט הופך לשומן בתוך הריאות', isCorrect: false },
      { id: 'd', text: 'לקטט מסולק מהגוף ישירות דרך הנשיפה', isCorrect: false }
    ],
    explanation: 'עמ׳ 39, 47: הכבד הופך 2 מולקולות לקטט חזרה לגלוקוז בתהליך גלוקונאוגנזה הדורש 6 מולקולות ATP.'
  },
  {
    id: 'phys1_4',
    moduleId: 'phys1',
    topic: 'מאגרי אנרגיה',
    title: 'מאגרי הגליקוגן (עמ׳ 47)',
    diagramKey: 'energy',
    questionText: 'עיקר הגליקוגן נאגר בגוף ב:',
    hint: 'המאגר המקומי הגדול נמצא בשרירים שזזים, והמאגר המרכזי שנשלח לדם נמצא באיבר הגדול בבטן.',
    options: [
      { id: 'a', text: 'בשרירי השלד ובכבד', isCorrect: true },
      { id: 'b', text: 'במוח ובעצמות', isCorrect: false },
      { id: 'c', text: 'ברקמת השומן בלבד', isCorrect: false },
      { id: 'd', text: 'בקיבה ובמעיים', isCorrect: false }
    ],
    explanation: 'עמ׳ 13, 47: כ-300-400 גרם גליקוגן שמורים בשרירים לשימושם העצמי, ועוד כ-70-100 גרם בכבד לשמירה על רמת הסוכר בדם.'
  },
  {
    id: 'phys1_5',
    moduleId: 'phys1',
    topic: 'סף אנאירובי וצח"מ',
    title: 'השוואה בין שני אתלטים (עמ׳ 48)',
    diagramKey: 'obla',
    questionText: 'בהשוואה בין שני אתלטים בעלי VO2max זהה אך סף אנאירובי שונה:',
    hint: 'לשניהם מנוע באותו גודל, אבל לאחד מהם נורית החומציות נדלקת רק במהירות גבוהה בהרבה.',
    options: [
      { id: 'a', text: 'לבעל הסף האנאירובי הגבוה יותר יתרון ברור בריצת מרתון ומאמצי סיבולת', isCorrect: true },
      { id: 'b', text: 'לבעל הסף האנאירובי הנמוך יתרון במרתון', isCorrect: false },
      { id: 'c', text: 'אין שום הבדל בביצועים ביניהם', isCorrect: false },
      { id: 'd', text: 'שניהם יתעייפו בדיוק באותה דקה', isCorrect: false }
    ],
    explanation: 'עמ׳ 42, 48: סף אנאירובי גבוה מאפשר להתחרות בקצב מהיר יותר לאורך זמן מבלי לצבור חומציות הגורמת לעייפות.'
  },
  {
    id: 'phys1_6',
    moduleId: 'phys1',
    topic: 'גליקוליזה ועייפות',
    title: 'השפעת חומציות על PFK (עמ׳ 48)',
    diagramKey: 'energy',
    questionText: 'עלייה בחומציות עקב הצטברות יוני מימן (H+) במאמץ עצים גורמת ל:',
    hint: 'אנזימים הם חלבונים עדינים: בסביבה חומצית הם משנים צורה ומפסיקים לעבוד, כמו מפתח שהתעקם בחור המנעול.',
    options: [
      { id: 'a', text: 'לירידה בפעילות האנזים המרכזי PFK ולירידה ביכולת הכיווץ', isCorrect: true },
      { id: 'b', text: 'לעלייה מואצת בפעילות PFK', isCorrect: false },
      { id: 'c', text: 'לחוסר שינוי בפעילות האנזים', isCorrect: false },
      { id: 'd', text: 'לייצור מוגבר של סידן', isCorrect: false }
    ],
    explanation: 'עמ׳ 23, 48: החומציות העולה (H+) מעכבת את אנזים ה-PFK (שלב 3 בגליקוליזה) ו"תוקעת" את חידוש ה-ATP, מה שמוביל לעייפות מהירה.'
  },
  {
    id: 'phys1_7',
    moduleId: 'phys1',
    topic: 'התאוששות',
    title: 'הורדת חומציות לאחר מאמץ (עמ׳ 49)',
    diagramKey: 'cori',
    questionText: 'מה הדרך היעילה ביותר להורדת החומציות בשריר לאחר מאמץ עצים?',
    hint: 'אם תשב במקום – זרם הדם יאט. אם תמשיך ללכת או לרוץ קל – המשאבה תמשיך לשטוף את השריר.',
    options: [
      { id: 'a', text: 'התאוששות אקטיבית קלה (ריצה קלה ב-35%-50% מצח"מ)', isCorrect: true },
      { id: 'b', text: 'ספרינט נוסף', isCorrect: false },
      { id: 'c', text: 'ישיבה פסיבית מוחלטת', isCorrect: false },
      { id: 'd', text: 'עמידה ללא תנועה', isCorrect: false }
    ],
    explanation: 'עמ׳ 46, 49: פעילות אירובית קלה שומרת על זרימת דם מוגברת שמפנה את יוני המימן והלקטט לשרירים הפחות פעילים ולכבד.'
  },
  {
    id: 'phys1_8',
    moduleId: 'phys1',
    topic: 'סף אנאירובי',
    title: 'הגדרת הסף האנאירובי (עמ׳ 49)',
    diagramKey: 'obla',
    questionText: 'מהי ההגדרה של הסף האנאירובי (OBLA)?',
    hint: 'חשוב על ברז שפותח מים (ייצור) מול פתח ניקוז (פינוי). כל עוד הניקוז עומד בקצב, הכיור לא עולה על גדותיו.',
    options: [
      { id: 'a', text: 'קצב הפעילות המרבי שבו קצב ייצור הלקטט שווה עדיין לקצב הפינוי שלו (איזון)', isCorrect: true },
      { id: 'b', text: 'קצב ייצור הלקטט נמוך בהרבה מקצב הפינוי', isCorrect: false },
      { id: 'c', text: 'מצב בו אין שימוש בגלוקוז כלל', isCorrect: false },
      { id: 'd', text: 'הרגע שבו נגמרים מאגרי השומן', isCorrect: false }
    ],
    explanation: 'עמ׳ 40, 49: בסף האנאירובי (כ-4 מילימול/ליטר) קצב הפינוי הוא מקסימלי אך עדיין שווה לייצור. מעבר לו – הלקטט והחומציות מצטברים בחדות.'
  },
  {
    id: 'phys1_9',
    moduleId: 'phys1',
    topic: 'זמני חידוש מאגרים',
    title: 'זמן מילוי ATP-CrP לאחר מאמץ (עמ׳ 46, 50)',
    diagramKey: 'energy',
    questionText: 'כמה זמן נדרש למילוי מלא של מאגרי ה-ATP וה-CrP בתום מאמץ מרבי של 10 שניות?',
    hint: 'זמן המנוחה בין סטים כבדים בחדר כושר כדי להרגיש רענן וכוח מלא לסט הבא.',
    options: [
      { id: 'a', text: 'כ-2 עד 4 דקות מנוחה (בנוכחות חמצן)', isCorrect: true },
      { id: 'b', text: '3 ימים תמימים', isCorrect: false },
      { id: 'c', text: 'שנייה אחת בלבד', isCorrect: false },
      { id: 'd', text: 'שעה שלמה', isCorrect: false }
    ],
    explanation: 'עמ׳ 20, 46: המיטוכונדריות צריכות 2-4 דקות של חמצן ומנוחה כדי לייצר ATP חדש שיטעין מחדש את מאגרי הקריאטין פוספט.'
  },

  // ==========================================
  // מודול 4: פיזיולוגיה ב' - לב, כלי דם, נשימה והורמונים
  // ==========================================
  {
    id: 'phys2_1',
    moduleId: 'phys2',
    topic: 'מערכת הלב',
    title: 'מצב המסתמים בדיאסטולה (עמ׳ 74)',
    diagramKey: 'heart',
    questionText: 'בזמן שלב הדיאסטולה (הרפיית החדרים ומילויים) בלב:',
    hint: 'דמיין דלתות שנפתחות כדי שהאורחים ייכנסו מהמרפסת (העלייה) לתוך הסלון (החדר), בזמן שהדלת לרחוב סגורה.',
    options: [
      { id: 'a', text: 'המסתמים בין העליות לחדרים פתוחים, והמסתמים בין החדרים לעורקים סגורים', isCorrect: true },
      { id: 'b', text: 'המסתמים בין החדרים לעורקים פתוחים', isCorrect: false },
      { id: 'c', text: 'כל המסתמים בלב סגורים לחלוטין', isCorrect: false },
      { id: 'd', text: 'כל המסתמים פתוחים יחד', isCorrect: false }
    ],
    explanation: 'עמ׳ 55, 74: בדיאסטולה החדרים נרפים ומתמלאים בדם מהעליות דרך המסתמים הפתוחים ביניהם, בעוד מסתמי היציאה לעורקים סגורים.'
  },
  {
    id: 'phys2_2',
    moduleId: 'phys2',
    topic: 'כלי דם ומחזורי הדם',
    title: 'הוורידים במחזורי הדם (עמ׳ 74)',
    diagramKey: 'veins',
    questionText: 'מה נכון לגבי הוורידים במחזורי הדם של גוף האדם?',
    hint: 'וריד תמיד נכנס ללב. מאיפה ורידי הריאה מגיעים? מהריאות שבהן הרגע נשמנו חמצן נקי!',
    options: [
      { id: 'a', text: 'במחזור הריאתי (הקטן) זורם בהם דם עשיר בחמצן, ובמחזור הגדול דם עני בחמצן', isCorrect: true },
      { id: 'b', text: 'בכל הוורידים בגוף תמיד זורם רק דם דל בחמצן', isCorrect: false },
      { id: 'c', text: 'ורידים מובילים דם מהלב אל הרקמות', isCorrect: false },
      { id: 'd', text: 'אין שסתומים בוורידים כלל', isCorrect: false }
    ],
    explanation: 'עמ׳ 53, 74: ההגדרה של וריד היא כיוון הזרימה (אל הלב): ורידי הריאה מחזירים דם מחומצן מהריאות לעלייה השמאלית, בעוד ורידי הגוף מחזירים דם ורידי.'
  },
  {
    id: 'phys2_3',
    moduleId: 'phys2',
    topic: 'מערכת הנשימה',
    title: 'שחלוף גזים בנאדיות (עמ׳ 93)',
    diagramKey: 'alveoli',
    questionText: 'שחלוף הגזים (חמצן ופחמן דו-חמצני) בין נאדיות הריאה לנימי הדם מתבצע באמצעות מנגנון פיזיקלי של:',
    hint: 'מעבר פסיבי ספונטני מריכוז גבוה לריכוז נמוך ללא צורך בהשקעת אנרגיה.',
    options: [
      { id: 'a', text: 'דיפוזיה פסיבית על פני שטח פנים ענק של הנאדיות', isCorrect: true },
      { id: 'b', text: 'משאבות חשמליות הצורכות ATP', isCorrect: false },
      { id: 'c', text: 'סינון מכני של כדוריות דם אדומות', isCorrect: false },
      { id: 'd', text: 'עיכול כימי ע״י חומצה', isCorrect: false }
    ],
    explanation: 'עמ׳ 93: בנאדיות הריאה החמצן והפחמן הדו-חמצני חוצים את הממברנה הדקה בדיפוזיה פשוטה לפי מפל הלחצים והריכוזים שלהם.'
  },
  {
    id: 'phys2_4',
    moduleId: 'phys2',
    topic: 'מערכת העצבים והשריר',
    title: 'כישור השריר מול אברון גולג\'י (עמ׳ 87-88)',
    diagramKey: 'spindle',
    questionText: 'איזה מנגנון גורם להרפיה רפלקסיבית של שריר בתגובה למתיחת-יתר או עומס קיצוני בגיד?',
    hint: 'זהו מפסק הביטחון: אם המשקל כבד מדי ומאיים לתלוש את הגיד מהעצם, הוא פוקד: "שחרר הכל ותרפה מיד!".',
    options: [
      { id: 'a', text: 'אברון הגיד ע״ש גולג׳י (Golgi Tendon Organ - GTO)', isCorrect: true },
      { id: 'b', text: 'כישור השריר (Muscle Spindle המכווץ כנגד מתיחה)', isCorrect: false },
      { id: 'c', text: 'רשת הסרקופלזמה', isCorrect: false },
      { id: 'd', text: 'תאי הלוויין', isCorrect: false }
    ],
    explanation: 'עמ׳ 87-88: אברון גולג\'י בצומת גיד-שריר חש במתח מופרז ומעכב את הנוירון המוטורי כדי להרפות את השריר ולהצילו מתלישה.'
  },
  {
    id: 'phys2_5',
    moduleId: 'phys2',
    topic: 'המערכת ההורמונלית',
    title: 'פעולת אינסולין וסוכר (עמ׳ 111-112)',
    diagramKey: 'insulin',
    questionText: 'איזה הורמון מופרש מתאי בטא בלבלב במצב שובע ואחראי על פתיחת תעלות להכנסת גלוקוז לתאי השריר והכבד?',
    hint: 'אחרי ארוחה טובה, ההורמון הזה משמש כמפתח שפותח את דלתות התא לסוכר.',
    options: [
      { id: 'a', text: 'אינסולין (Insulin)', isCorrect: true },
      { id: 'b', text: 'גלוקגון (הורמון הרעב)', isCorrect: false },
      { id: 'c', text: 'קורטיזול (הורמון סטרס)', isCorrect: false },
      { id: 'd', text: 'אדרנלין', isCorrect: false }
    ],
    explanation: 'עמ׳ 111-112: אינסולין נקשר לקולטן בקרום התא, פותח תעלות גלוקוז ומאפשר לסוכר להיכנס מהדם לתאים לצורך אנרגיה או אגירה כגליקוגן.'
  },
  {
    id: 'phys2_6',
    moduleId: 'phys2',
    topic: 'מערכת החיסון',
    title: 'קווי ההגנה של הגוף (עמ׳ 119-120)',
    diagramKey: 'immune',
    questionText: 'העור, הריריות בדרכי הנשימה והפרשות הזיעה והדמעות מהווים את:',
    hint: 'המחסום הפיזי והכימי הראשון שחיידק או נגיף פוגש לפני שהוא חודר לגוף.',
    options: [
      { id: 'a', text: 'קו ההגנה הראשון של מערכת החיסון (מחסום מכני וכימי רציף)', isCorrect: true },
      { id: 'b', text: 'קו ההגנה השלישי (נוגדנים ספציפיים)', isCorrect: false },
      { id: 'c', text: 'מערכת ה-ATP', isCorrect: false },
      { id: 'd', text: 'מנגנון ה-DOMS', isCorrect: false }
    ],
    explanation: 'עמ׳ 119: קו ההגנה הראשון כולל מחסומים פיזיים וכימיים (עור, ריריות, חומציות, אנזימים ברוק ובדמעות) המונעים כניסת מזהמים.'
  }
];
