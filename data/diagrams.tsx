/* eslint-disable */
// @ts-nocheck
import React from 'react';

export const DIAGRAMS_LIBRARY = {
  // 1. דיסק בין-חולייתי
  disc: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <ellipse cx="170" cy="85" rx="140" ry="65" fill="#1e293b" stroke="#38bdf8" strokeWidth="3" />
      <ellipse cx="170" cy="85" rx="110" ry="50" fill="#0f172a" stroke="#0284c7" strokeWidth="2" strokeDasharray="5 3" />
      <ellipse cx="170" cy="85" rx="80" ry="36" fill="#0369a1" stroke="#38bdf8" strokeWidth="2" />
      <ellipse cx="170" cy="85" rx="45" ry="20" fill="#f43f5e" stroke="#fda4af" strokeWidth="2" />
      <text x="170" y="89" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">גרעין צמיגי (Nucleus Pulposus)</text>
      <text x="170" y="38" fill="#38bdf8" fontSize="12" fontWeight="bold" textAnchor="middle">טבעות קולגן סיביות (Annulus Fibrosus)</text>
      <text x="170" y="162" fill="#94a3b8" fontSize="10" textAnchor="middle">בלימת זעזועים בעמוד השדרה</text>
    </svg>
  ),

  // 2. תא סחוס וחומר חוץ-תאי
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

  // 3. עצם צפופה ומערכת הוורס
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

  // 4. חוליית צוואר ונקב עורק הצוואר
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
      <text x="170" y="152" fill="#94a3b8" fontSize="10" textAnchor="middle">זיז אחורי (Spine)</text>
    </svg>
  ),

  // 5. מפרק אטלס ואקסיס
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

  // 6. עקומות עמוד השדרה
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

  // 7. עצם החזה סטרנום
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

  // 8. מפרק הברך וראש הפיבולה
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

  // 9. סרקומר וחלבון הכיווץ
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

  // 10. שריר הדלתואיד בכתף
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

  // 11. שריר הרחב גבי Latissimus Dorsi
  latissimus: (
    <svg viewBox="0 0 340 170" className="w-full h-full bg-slate-950 p-2">
      <path d="M 170 20 L 170 140 L 130 140 Q 60 70 80 30 Z" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
      <path d="M 170 20 L 170 140 L 210 140 Q 280 70 260 30 Z" fill="#881337" stroke="#f43f5e" strokeWidth="2" />
      <circle cx="80" cy="30" r="6" fill="#fbbf24" />
      <circle cx="260" cy="30" r="6" fill="#fbbf24" />
      <text x="170" y="80" fill="#ffffff" fontSize="12" fontWeight="bold" textAnchor="middle">Latissimus Dorsi</text>
      <text x="170" y="98" fill="#fecdd3" fontSize="10" textAnchor="middle">שריר "הכנפיים" של הגב</text>
      <text x="170" y="155" fill="#fbbf24" fontSize="10" textAnchor="middle">אחז: חריץ ביציפיטלי בהומרוס (קירוב ופשיטת זרוע)</text>
    </svg>
  ),

  // 12. שריר הארבע-ראשי Quadriceps
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

  // 13. שריר השוק וגיד אכילס
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

  // 14. שרירי הגו העמוקים - זוקפי הגב
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

  // 15. מסלולי האנרגיה
  energy_pathways: (
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

  // 16. מעגל קורי ופינוי לקטט
  cori_cycle: (
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

  // 17. סף אנאירובי OBLA
  obla_graph: (
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

  // 18. מדורי הלב ומסתמים
  heart_structure: (
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

  // 19. שסתומי ורידים והחזר ורידי
  vein_valves: (
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

  // 20. נאדיות הריאה ושחלוף גזים
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

  // 21. כישור השריר מול אברון גולג'י
  spindle_gto: (
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

  // 22. פעולת אינסולין וסוכר בתא
  insulin_glucose: (
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

  // 23. קווי הגנה של מערכת החיסון
  immune_system: (
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
