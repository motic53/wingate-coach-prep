/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect, Suspense, useCallback, useMemo, useRef, Component } from 'react';
import { useSearchParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { WorkoutTab, buildDynamicWorkoutPlan } from '@/components/WorkoutTab';
import { NutritionTab } from '@/components/NutritionTab';
import { AgreementsTab } from '@/components/AgreementsTab';
import { ChatTab } from '@/components/ChatTab';

class SafeErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  componentDidCatch(error, errorInfo) {
    console.error('Captured Client Error:', error, errorInfo);
  }
  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center justify-center p-6 text-center" dir="rtl">
          <div className="bg-slate-900 border border-rose-500/50 p-6 rounded-2xl max-w-md w-full space-y-4 shadow-2xl">
            <span className="text-4xl">⚠️</span>
            <h2 className="text-lg font-bold text-rose-400">אירעה תקלה זמנית בטעינת הנתונים</h2>
            <p className="text-xs text-slate-400 leading-relaxed">
              הנתונים מאופסים כעת לתצוגה יציבה. לחץ על הכפתור למטה כדי להמשיך:
            </p>
            <button
              onClick={() => {
                this.setState({ hasError: false });
                window.location.href = window.location.pathname;
              }}
              className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-2.5 rounded-xl text-xs transition"
            >
              🔄 רענן וטען מחדש
            </button>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}

const SUPABASE_URL = 'https://gvinzpijoapupqthxbae.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2aW56cGlqb2FwdXBxdGh4YmFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NzkxODUsImV4cCI6MjEwMjU1NTE4NX0.HJxsZtSeBT_pu45sknJsSqz1jdNfUiDCEr28lVa5_Lc';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const DEFAULT_MALE_MEASURE_GUIDE = 'https://www.youtube.com/embed/0T26e3P8_O8';
const DEFAULT_FEMALE_MEASURE_GUIDE = 'https://www.youtube.com/embed/8vRzY6zD7_0';

const RECIPES_DATA = [
  {
    id: 'k1',
    title: 'קערת סלמון צרוב וקינואה קריספית',
    category: 'עשיר בחלבון',
    mealType: 'צהריים',
    cals: 520,
    protein: 44,
    carbs: 48,
    fats: 16,
    prepTime: '20 דק׳',
    ingredients: ['180 גרם פילה סלמון צרוב', '150 גרם קינואה מבושלת', 'מלפפון, צנונית, אדממה', 'כף טחינה גולמית ולימון'],
    instructions: 'צורבים את הסלמון במחבת פסים 3 דקות מכל צד. מניחים בקערה את הקינואה, הירקות ומעל את הסלמון עם זילוף טחינה.',
    icon: '🥗'
  },
  {
    id: 'k2',
    title: 'פנקייק חלבון שיבולת שועל ובננה (ללא סוכר)',
    category: 'חיטוב',
    mealType: 'בוקר',
    cals: 380,
    protein: 36,
    carbs: 42,
    fats: 6,
    prepTime: '10 דק׳',
    ingredients: ['1 בננה בשלה', '40 גרם שיבולת שועל דקה', 'סקופ חלבון וניל', 'ביצה אחת + 2 חלבוני ביצה'],
    instructions: 'טוחנים בבלנדר מוט למרקם חלק ויוצקים על מחבת נון-סטיק משומנת קלות כ-2 דקות מכל צד.',
    icon: '🥞'
  },
  {
    id: 'k3',
    title: 'שווארמה עוף ביתית דלת שומן בטורטייה מלאה',
    category: 'עשיר בחלבון',
    mealType: 'צהריים',
    cals: 460,
    protein: 52,
    carbs: 38,
    fats: 9,
    prepTime: '15 דק׳',
    ingredients: ['200 גרם חזה עוף חתוך לרצועות', 'בצל סגול', 'תבלין שווארמה, כמון ופפריקה', 'טורטייה מלאה', 'סלט ירקות וטחינה דקה'],
    instructions: 'מקפיצים את הבצל והעוף עד השחמה יפה. ממלאים את הטורטייה יחד עם סלט וטחינה ומגלגלים.',
    icon: '🌯'
  },
  {
    id: 'k4',
    title: 'טוסט קראנץ׳ טונה וגבינה צהובה 9%',
    category: 'חיטוב',
    mealType: 'ערב',
    cals: 340,
    protein: 38,
    carbs: 28,
    fats: 8,
    prepTime: '8 דק׳',
    ingredients: ['2 פרוסות לחם כוסמין', 'קופסת טונה במים מסוננת', 'פרוסת צהובה 9%', 'עגבניה ואורגנו'],
    instructions: 'מערבבים את הטונה עם תבלינים, מרכיבים את הטוסט וקולים בטוסטר לחיצה.',
    icon: '🥪'
  },
  {
    id: 'k5',
    title: 'שייק התאוששות אולטימטיבי למסת שריר',
    category: 'מסה',
    mealType: 'נשנוש',
    cals: 610,
    protein: 48,
    carbs: 75,
    fats: 15,
    prepTime: '3 דק׳',
    ingredients: ['1.5 סקופ חלבון', '300 מ״ל חלב / משקה סויה', '1 בננה + תמר', '30 גרם שיבולת שועל', 'כף חמאת בוטנים'],
    instructions: 'מכניסים הכל לבלנדר עם קרח וטוחנים למרקם עשיר.',
    icon: '🥤'
  },
  {
    id: 'k6',
    title: 'קערת יוגורט פרו קפוא עם גרנולה ביתית',
    category: 'קלוריות נמוכות',
    mealType: 'נשנוש',
    cals: 260,
    protein: 26,
    carbs: 28,
    fats: 4,
    prepTime: '5 דק׳',
    ingredients: ['גביע יוגורט פרו 20g חלבון', '100g פירות יער', '20g גרנולה ללא סוכר', 'כפית צ׳יה וקינמון'],
    instructions: 'מניחים יוגורט בקערה, מפזרים מעל פירות יער וגרנולה.',
    icon: '🍨'
  }
];

const RESTAURANT_CALCULATOR = [
  { name: 'שווארמה פרגית בצלחת (ללא פיתה)', cals: 580, prot: 55, carbs: 12, fat: 34, tip: 'העדף צלחת עם סלט וטחינה קלה במקום פיתה/לאפה' },
  { name: 'סושי רול סלמון אבוקדו (8 יח׳)', cals: 360, prot: 14, carbs: 48, fat: 12, tip: 'הימנע מרולים מטוגנים/טמפורה ורטבי מיונז' },
  { name: 'המבורגר בקר 200 גרם בלחמניה', cals: 690, prot: 42, carbs: 50, fat: 36, tip: 'החלף צ׳יפס בסלט ירוק או פלח תפוח אדמה אפוי' },
  { name: 'סלט חזה עוף בבית קפה (רוטב בצד)', cals: 420, prot: 46, carbs: 18, fat: 18, tip: 'בקש תמיד את הרוטב בצד והשתמש ב-1-2 כפות בלבד' }
];

function ShmuelKitchenEmbed({ onClose }: { onClose?: () => void }) {
  const [activeSection, setActiveSection] = useState<'recipes' | 'guides' | 'restaurant' | 'calc'>('recipes');
  const [selectedCategory, setSelectedCategory] = useState<string>('הכל');
  const [searchQuery, setSearchQuery] = useState('');
  const [calorieTargetInput, setCalorieTargetInput] = useState<number>(500);

  const filteredRecipes = useMemo(() => {
    return RECIPES_DATA.filter((r) => {
      const matchesCategory = selectedCategory === 'הכל' || r.category === selectedCategory || r.mealType === selectedCategory;
      const matchesSearch = r.title.toLowerCase().includes(searchQuery.toLowerCase()) || r.ingredients.some(i => i.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const recommendedRecipe = useMemo(() => {
    return RECIPES_DATA.reduce((prev, curr) => {
      return Math.abs(curr.cals - calorieTargetInput) < Math.abs(prev.cals - calorieTargetInput) ? curr : prev;
    });
  }, [calorieTargetInput]);

  return (
    <div className="bg-slate-950 text-slate-100 rounded-2xl border border-amber-500/30 overflow-hidden shadow-2xl p-4 sm:p-6 space-y-6" dir="rtl">
      <div className="relative rounded-2xl bg-gradient-to-br from-slate-900 via-slate-900 to-amber-950/40 p-6 sm:p-8 border border-amber-500/20 text-center space-y-3">
        {onClose && (
          <button onClick={onClose} className="absolute top-4 left-4 text-slate-400 hover:text-white bg-slate-800/80 px-3 py-1 rounded-xl text-xs font-bold transition">
            ✕ חזרה לאפליקציה
          </button>
        )}
        <div className="w-16 h-16 mx-auto rounded-2xl bg-amber-500/10 border border-amber-500/40 flex items-center justify-center text-3xl shadow-lg">
          🍳
        </div>
        <h1 className="text-2xl sm:text-3xl font-black text-amber-400">המטבח והתזונה של שמואל</h1>
        <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto leading-relaxed">
          מתכונים עתירי חלבון, מדריכים מעשיים לשמירה על הגזרה, וערכים תזונתיים לאכילה נכונה בחוץ.
        </p>

        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <button onClick={() => setActiveSection('recipes')} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${activeSection === 'recipes' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'}`}>
            📖 ספר מתכונים ({RECIPES_DATA.length})
          </button>
          <button onClick={() => setActiveSection('restaurant')} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${activeSection === 'restaurant' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'}`}>
            🍽 אוכל בחוץ ומסעדות
          </button>
          <button onClick={() => setActiveSection('calc')} className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition flex items-center gap-1.5 ${activeSection === 'calc' ? 'bg-amber-500 text-slate-950 shadow-md' : 'bg-slate-900 text-slate-300 hover:text-white border border-slate-800'}`}>
            🎯 התאמה לפי קלוריות
          </button>
        </div>
      </div>

      {activeSection === 'recipes' && (
        <div className="space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-3 bg-slate-900 p-3 rounded-xl border border-slate-800">
            <input
              type="text"
              placeholder="🔍 חיפוש מתכון או מרכיב..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="bg-slate-950 border border-slate-700 rounded-lg px-3 py-1.5 text-xs text-white flex-1 min-w-[200px]"
            />
            <div className="flex gap-1.5 overflow-x-auto text-xs">
              {['הכל', 'חיטוב', 'עשיר בחלבון', 'מסה', 'בוקר', 'צהריים', 'ערב'].map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-2.5 py-1 rounded-lg font-semibold transition ${selectedCategory === cat ? 'bg-amber-500 text-slate-950' : 'bg-slate-800 text-slate-400 hover:text-white'}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredRecipes.map((recipe) => (
              <div key={recipe.id} className="bg-slate-900/90 border border-slate-800 hover:border-amber-500/40 rounded-2xl p-4 space-y-3 transition duration-200 shadow-md flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-start">
                    <span className="text-3xl">{recipe.icon}</span>
                    <span className="bg-slate-800 text-amber-400 text-[10px] font-bold px-2 py-0.5 rounded-full border border-amber-500/30">
                      ⏱ {recipe.prepTime}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-white mt-2 leading-snug">{recipe.title}</h3>
                  
                  <div className="grid grid-cols-4 gap-1.5 py-2.5 my-2 border-y border-slate-800 text-center">
                    <div>
                      <span className="text-[10px] text-slate-400 block">קלוריות</span>
                      <strong className="text-xs text-amber-400 font-mono">{recipe.cals}</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">חלבון</span>
                      <strong className="text-xs text-emerald-400 font-mono">{recipe.protein}g</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">פחמימה</span>
                      <strong className="text-xs text-sky-400 font-mono">{recipe.carbs}g</strong>
                    </div>
                    <div>
                      <span className="text-[10px] text-slate-400 block">שומן</span>
                      <strong className="text-xs text-rose-400 font-mono">{recipe.fats}g</strong>
                    </div>
                  </div>

                  <div className="text-[11px] text-slate-300 space-y-1">
                    <strong className="text-amber-400 block">מרכיבים:</strong>
                    <ul className="list-disc list-inside text-slate-400 space-y-0.5">
                      {recipe.ingredients.map((ing, i) => <li key={i}>{ing}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 text-[11px] text-slate-300 mt-2">
                  <strong className="text-emerald-400 block mb-0.5">הכנה:</strong>
                  {recipe.instructions}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'restaurant' && (
        <div className="space-y-3">
          <p className="text-xs text-slate-400 bg-slate-900 p-3 rounded-xl border border-slate-800">
            💡 אוכלים בחוץ? הנה מנות נבחרות עם פירוט ערכים וטיפ זהב לשמירה על התפריט.
          </p>
          <div className="grid sm:grid-cols-2 gap-3">
            {RESTAURANT_CALCULATOR.map((item, i) => (
              <div key={i} className="bg-slate-900 border border-slate-800 p-3.5 rounded-xl space-y-2">
                <div className="flex justify-between items-center">
                  <h4 className="text-xs font-bold text-amber-300">{item.name}</h4>
                  <span className="text-xs font-mono font-bold text-emerald-400">{item.cals} קק״ל</span>
                </div>
                <div className="flex gap-3 text-[11px] text-slate-400 border-b border-slate-800 pb-2">
                  <span>חלבון: <strong className="text-white">{item.prot}g</strong></span>
                  <span>פחמימה: <strong className="text-white">{item.carbs}g</strong></span>
                  <span>שומן: <strong className="text-white">{item.fat}g</strong></span>
                </div>
                <p className="text-[11px] text-slate-300">📌 <strong>טיפ המאמן:</strong> {item.tip}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      {activeSection === 'calc' && (
        <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl max-w-xl mx-auto space-y-4 text-center">
          <h3 className="text-base font-bold text-amber-400">🎯 מנוע התאמת ארוחה ליעד הקלורי שלך</h3>
          <div className="space-y-2">
            <div className="flex justify-between text-xs text-slate-300">
              <span>250 קק״ל</span>
              <strong className="text-base text-amber-400 font-mono font-black">{calorieTargetInput} קק״ל</strong>
              <span>650 קק״ל</span>
            </div>
            <input
              type="range"
              min="250"
              max="650"
              step="20"
              value={calorieTargetInput}
              onChange={(e) => setCalorieTargetInput(Number(e.target.value))}
              className="w-full accent-amber-500 cursor-pointer"
            />
          </div>

          <div className="bg-slate-950 p-4 rounded-xl border border-amber-500/30 text-right space-y-2">
            <span className="text-[10px] bg-emerald-500/20 text-emerald-300 px-2 py-0.5 rounded font-bold">ההתאמה המושלמת עבורך:</span>
            <h4 className="text-sm font-bold text-white flex items-center gap-2">
              <span>{recommendedRecipe.icon}</span>
              <span>{recommendedRecipe.title}</span>
            </h4>
            <div className="flex gap-4 text-xs font-mono text-slate-300">
              <span>קלוריות: <strong className="text-amber-400">{recommendedRecipe.cals}</strong></span>
              <span>חלבון: <strong className="text-emerald-400">{recommendedRecipe.protein}g</strong></span>
              <span>הכנה: <strong className="text-sky-400">{recommendedRecipe.prepTime}</strong></span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

function MainApp() {
  const searchParams = useSearchParams();
  const [role, setRole] = useState<'admin' | 'coach' | 'trainee'>('admin');
  const [activeTab, setActiveTab] = useState<'profile' | 'workout' | 'nutrition' | 'coach_dashboard' | 'kitchen' | 'agreements' | 'chat'>('profile');

  const [coachesList, setCoachesList] = useState<any[]>([]);
  const [traineesList, setTraineesList] = useState<any[]>([]);
  const [selectedCoachId, setSelectedCoachId] = useState<string>('');
  const [selectedTraineeId, setSelectedTraineeId] = useState<string>('');
  const [currentTraineeUser, setCurrentTraineeUser] = useState<any>(null);
  const [currentCoachUser, setCurrentCoachUser] = useState<any>(null);

  const [isAddCustomMealModalOpen, setIsAddCustomMealModalOpen] = useState(false);
  const [customMealName, setCustomMealName] = useState('');
  const [customMealGrams, setCustomMealGrams] = useState('');
  const [customMealCals, setCustomMealCals] = useState('');
  const [customMealProt, setCustomMealProt] = useState('');

  const [exerciseVideos, setExerciseVideos] = useState<{ [key: string]: string }>({});
  const [maleGuideUrl, setMaleGuideUrl] = useState(DEFAULT_MALE_MEASURE_GUIDE);
  const [femaleGuideUrl, setFemaleGuideUrl] = useState(DEFAULT_FEMALE_MEASURE_GUIDE);
  const [activeMeasurementVideoModal, setActiveMeasurementVideoModal] = useState<string | null>(null);

  const [selectedNutritionDate, setSelectedNutritionDate] = useState(() => new Date().toISOString().split('T')[0]);
  const [openDaysState, setOpenDaysState] = useState<{ [key: string]: boolean }>({ [new Date().toISOString().split('T')[0]]: true });

  const [traineeProfile, setTraineeProfile] = useState<any>({
    full_name: '',
    email: '',
    phone: '',
    city: '',
    age: 26,
    gender: 'זכר',
    height_cm: 175,
    current_weight_kg: 75,
    fitness_level: 'בינוני',
    goal: 'כושר כללי',
    dietary_preference: 'הכל (אוכל כל)',
    days_per_week: 3,
    equipment_access: 'אימון ביתי / משקל גוף',
    health_declaration_signed: false,
    contract_signed: false,
    signature_name: '',
    signature_date: ''
  });

  const [traineeMeals, setTraineeMeals] = useState<any[]>([]);
  const [traineeMetrics, setTraineeMetrics] = useState<any[]>([]);
  const [assignedPlan, setAssignedPlan] = useState<any>({ title: 'תוכנית אימונים', routine: [] });
  const [nutritionPlan, setNutritionPlan] = useState<any>({ calories: 2200, protein: 165, carbs: 210, fats: 65, detailedMenu: [] });
  const [messages, setMessages] = useState<any[]>([]);
  const [statusMsg, setStatusMsg] = useState('');

  const [weightInput, setWeightInput] = useState('');
  const [waistInput, setWaistInput] = useState('');
  const [chestInput, setChestInput] = useState('');
  const [thighInput, setThighInput] = useState('');
  const [armInput, setArmInput] = useState('');

  const [traineePhotos, setTraineePhotos] = useState<any[]>([]);
  const [selectedPhotoBase64, setSelectedPhotoBase64] = useState<string>('');
  const [photoTypeInput, setPhotoTypeInput] = useState('חזית');
  const [photoNotesInput, setPhotoNotesInput] = useState('');
  const [isPhotoUploadOpen, setIsPhotoUploadOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadExerciseVideos = useCallback(async () => {
    try {
      const { data } = await supabase.from('exercise_videos').select('*');
      if (data && Array.isArray(data)) {
        const map: { [key: string]: string } = {};
        data.forEach((v) => { 
          if (v && v.video_url) {
            map[v.exercise_id] = v.video_url;
            if (v.exercise_id === 'measurement_guide_male') setMaleGuideUrl(v.video_url);
            if (v.exercise_id === 'measurement_guide_female') setFemaleGuideUrl(v.video_url);
          }
        });
        setExerciseVideos(map);
      }
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    loadExerciseVideos();
  }, [loadExerciseVideos]);

  useEffect(() => {
    try {
      const urlRole = searchParams.get('role');
      const urlUserId = searchParams.get('userId');

      if (urlRole === 'coach' && urlUserId) {
        setRole('coach');
        setSelectedCoachId(urlUserId);
        supabase.from('users').select('*').eq('id', urlUserId).single().then(({ data }) => { if (data) setCurrentCoachUser(data); });
      } else if (urlRole === 'trainee' && urlUserId) {
        setRole('trainee');
        setSelectedTraineeId(urlUserId);
      } else if (urlRole === 'admin') {
        setRole('admin');
      }
    } catch (e) {}
  }, [searchParams]);

  const loadSystemUsers = useCallback(async () => {
    try {
      const { data: allUsers } = await supabase.from('users').select('*').order('created_at', { ascending: false });
      if (allUsers && Array.isArray(allUsers)) {
        const coaches = allUsers.filter(u => u.role === 'coach');
        const trainees = allUsers.filter(u => u.role === 'trainee');
        setCoachesList(coaches);
        setTraineesList(trainees);

        if (coaches.length > 0 && !selectedCoachId) setSelectedCoachId(coaches[0].id);
        if (trainees.length > 0 && (!selectedTraineeId || !trainees.some(t => t.id === selectedTraineeId))) {
          setSelectedTraineeId(trainees[0].id);
        }
      }
    } catch (e) {
      console.error(e);
    }
  }, [selectedCoachId, selectedTraineeId]);

  useEffect(() => {
    loadSystemUsers();
  }, [loadSystemUsers]);

  const loadTraineeData = useCallback(async (traineeId: string) => {
    if (!traineeId) return;

    try {
      const { data: uData } = await supabase.from('users').select('*').eq('id', traineeId).single();
      if (uData) setCurrentTraineeUser(uData);

      const { data: pData } = await supabase.from('trainee_profiles').select('*').eq('trainee_id', traineeId).single();
      if (pData) {
        const age = Number(pData.age) || 26;
        const weight = Number(pData.current_weight_kg) || 75;
        const height = Number(pData.height_cm) || 175;
        const gender = pData.gender || 'זכר';
        const days = Number(pData.days_per_week) || 3;
        const goal = pData.goal || 'כושר כללי';
        const diet = pData.dietary_preference || 'הכל (אוכל כל)';
        const equipment = pData.equipment_access || 'אימון ביתי / משקל גוף';

        let currentPlan = pData.assigned_plan;
        if (!currentPlan || !Array.isArray(currentPlan.routine) || (currentPlan.routine.length > 0 && typeof currentPlan.routine[0] === 'string')) {
          currentPlan = buildDynamicWorkoutPlan({ ...pData, age, equipment_access: equipment }, 'סנכרון תוכנית מותאמת');
        }

        setTraineeProfile({
          ...pData,
          full_name: uData?.full_name || '',
          email: uData?.email || '',
          phone: pData.phone || '',
          city: pData.city || '',
          age: age,
          gender: gender,
          height_cm: height,
          current_weight_kg: weight,
          fitness_level: pData.fitness_level || 'בינוני',
          goal: goal,
          dietary_preference: diet,
          days_per_week: days,
          equipment_access: equipment,
          health_declaration_signed: !!pData.health_declaration_signed,
          contract_signed: !!pData.contract_signed,
          signature_name: pData.signature_name || '',
          signature_date: pData.signature_date || ''
        });

        setAssignedPlan(currentPlan || { title: 'תוכנית אימונים', routine: [] });
        setNutritionPlan(pData.nutrition_plan || { calories: 2200, protein: 165, carbs: 210, fats: 65, detailedMenu: [] });
      }

      const { data: wData } = await supabase.from('progress_metrics').select('*').eq('trainee_id', traineeId).order('recorded_date', { ascending: false }).limit(20);
      setTraineeMetrics(wData || []);

      const { data: photoData } = await supabase.from('progress_photos').select('*').eq('trainee_id', traineeId).order('recorded_date', { ascending: false });
      setTraineePhotos(photoData || []);

      const { data: mData } = await supabase.from('meal_logs').select('*').eq('trainee_id', traineeId).order('logged_at', { ascending: false }).limit(40);
      setTraineeMeals(mData || []);

      const { data: cData } = await supabase.from('chat_messages').select('*').eq('trainee_id', traineeId).order('created_at', { ascending: true });
      setMessages(cData || []);
    } catch (e) {
      console.error(e);
    }
  }, []);

  useEffect(() => {
    if (selectedTraineeId) loadTraineeData(selectedTraineeId);
  }, [selectedTraineeId, role, loadTraineeData]);

  const handleSendWhatsAppLink = (traineeId: string, traineeName: string, phone?: string) => {
    const origin = typeof window !== 'undefined' ? window.location.origin : 'https://fitness-coach-360.vercel.app';
    const traineeUrl = `${origin}/?role=trainee&userId=${traineeId}`;
    const message = `שלום ${traineeName}! 💪\nהנה הקישור האישי שלך לאפליקציית האימון והתזונה:\n${traineeUrl}\n\n*טיפ:* פתח את הקישור בדפדפן ולחץ "הוסף למסך הבית" כדי להתקין את האפליקציה בטלפון!`;
    let cleanPhone = phone ? phone.replace(/[^0-9]/g, '') : '';
    if (cleanPhone.startsWith('0')) cleanPhone = '972' + cleanPhone.substring(1);
    const waUrl = cleanPhone ? `https://api.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(message)}` : `https://api.whatsapp.com/send?text=${encodeURIComponent(message)}`;
    window.open(waUrl, '_blank');
  };

  const handleSaveProfile = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedTraineeId) return;

    try {
      const userUpdates: any = {};
      if (traineeProfile.full_name) userUpdates.full_name = traineeProfile.full_name.trim();
      if (traineeProfile.email) userUpdates.email = traineeProfile.email.trim();
      if (Object.keys(userUpdates).length > 0) {
        await supabase.from('users').update(userUpdates).eq('id', selectedTraineeId);
      }

      await supabase.from('trainee_profiles').upsert([{
        trainee_id: selectedTraineeId,
        gender: traineeProfile.gender || 'זכר',
        age: Number(traineeProfile.age),
        height_cm: Number(traineeProfile.height_cm),
        current_weight_kg: Number(traineeProfile.current_weight_kg),
        fitness_level: traineeProfile.fitness_level,
        goal: traineeProfile.goal,
        dietary_preference: traineeProfile.dietary_preference,
        days_per_week: Number(traineeProfile.days_per_week),
        equipment_access: traineeProfile.equipment_access,
        phone: traineeProfile.phone,
        city: traineeProfile.city,
        assigned_plan: assignedPlan,
        nutrition_plan: nutritionPlan
      }], { onConflict: 'trainee_id' });

      setStatusMsg(`הפרופיל נשמר בהצלחה!`);
      loadTraineeData(selectedTraineeId);
    } catch (err) {
      console.error(err);
    }
  };

  const handleLogMetrics = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!weightInput || !selectedTraineeId) return;

    await supabase.from('progress_metrics').insert([{
      trainee_id: selectedTraineeId,
      weight_kg: Number(weightInput),
      waist_cm: waistInput ? Number(waistInput) : null,
      chest_cm: chestInput ? Number(chestInput) : null,
      thigh_cm: thighInput ? Number(thighInput) : null,
      arm_cm: armInput ? Number(armInput) : null,
      recorded_date: new Date().toISOString().split('T')[0]
    }]);

    setStatusMsg(`השקילה נשמרה בהצלחה!`);
    setWeightInput('');
    setWaistInput('');
    setChestInput('');
    setThighInput('');
    setArmInput('');
    loadTraineeData(selectedTraineeId);
  };

  const handlePhotoSelect = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setSelectedPhotoBase64(reader.result as string);
      reader.readAsDataURL(file);
    }
  };

  const handleSavePhoto = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedPhotoBase64 || !selectedTraineeId) return;

    await supabase.from('progress_photos').insert([{
      trainee_id: selectedTraineeId,
      photo_url: selectedPhotoBase64,
      photo_type: photoTypeInput,
      notes: photoNotesInput,
      recorded_date: new Date().toISOString().split('T')[0]
    }]);

    setStatusMsg('תמונת ההתקדמות נשמרה בהצלחה!');
    setSelectedPhotoBase64('');
    setPhotoNotesInput('');
    setIsPhotoUploadOpen(false);
    if (fileInputRef.current) fileInputRef.current.value = '';
    loadTraineeData(selectedTraineeId);
  };

  const handleDeletePhoto = async (photoId: string) => {
    if (!window.confirm('האם למחוק תמונה זו?')) return;
    await supabase.from('progress_photos').delete().eq('id', photoId);
    loadTraineeData(selectedTraineeId);
  };

  const handleAddCustomMealToMenu = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!customMealName.trim() || !selectedTraineeId) return;

    const newMeal = {
      id: 'custom_' + Date.now(),
      name: customMealName.trim(),
      time: '12:00',
      description: `${customMealGrams ? customMealGrams + ' גרם' : ''} בהתאמה אישית מהמאמן`,
      gramsDetails: customMealGrams ? `${customMealGrams}g` : 'לפי הנחיית המאמן',
      cals: Number(customMealCals) || 400,
      protein: Number(customMealProt) || 30,
      carbs: 35,
      fats: 10
    };

    const currentMenu = Array.isArray(nutritionPlan?.detailedMenu) ? nutritionPlan.detailedMenu : [];
    const updatedMenu = [...currentMenu, newMeal];
    const updatedNutritionPlan = { ...nutritionPlan, detailedMenu: updatedMenu };

    await supabase.from('trainee_profiles').update({ nutrition_plan: updatedNutritionPlan }).eq('trainee_id', selectedTraineeId);

    setNutritionPlan(updatedNutritionPlan);
    setStatusMsg(`המנה "${customMealName}" נוספה בהצלחה לתפריט המתאמן!`);
    setCustomMealName('');
    setCustomMealGrams('');
    setCustomMealCals('');
    setCustomMealProt('');
    setIsAddCustomMealModalOpen(false);
  };

  const safeDailyNutrition = useMemo(() => {
    const mealsList = Array.isArray(traineeMeals) ? traineeMeals : [];
    const mealsForTargetDate = mealsList.filter((m) => (m && m.logged_at ? new Date(m.logged_at).toISOString().split('T')[0] : '') === selectedNutritionDate);
    let totalCals = 0, totalProt = 0, totalCarbs = 0, totalFats = 0;

    mealsForTargetDate.forEach((m) => {
      const c = Number(m.estimated_calories) || 0;
      totalCals += c;
      totalProt += c ? Math.round(c * 0.08) : 25;
      totalCarbs += c ? Math.round(c * 0.1) : 30;
      totalFats += c ? Math.round(c * 0.03) : 8;
    });

    const targetC = Number(nutritionPlan?.calories) || 2100;
    const targetP = Number(nutritionPlan?.protein) || 160;
    const targetCb = Number(nutritionPlan?.carbs) || 200;
    const targetF = Number(nutritionPlan?.fats) || 60;

    return {
      date: selectedNutritionDate,
      cals: totalCals,
      prot: totalProt,
      carbs: totalCarbs,
      fats: totalFats,
      targetCals: targetC,
      targetProt: targetP,
      targetCarbs: targetCb,
      targetFats: targetF,
      isCalsOverLimit: totalCals > targetC + 150
    };
  }, [traineeMeals, nutritionPlan, selectedNutritionDate]);

  const isFemale = traineeProfile?.gender === 'נקבה';

  return (
    <SafeErrorBoundary>
      <main className="min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-4 md:p-6 pb-24 md:pb-6" dir="rtl">
        <div className="max-w-6xl mx-auto space-y-5">

          {/* בר עליון */}
          <header className="flex flex-wrap justify-between items-center bg-slate-900 border border-slate-800 p-3 sm:p-4 rounded-2xl gap-3 shadow-xl">
            <div>
              <h1 className="text-xl sm:text-2xl font-black text-amber-400">Coach &amp; Athlete 360 Pro</h1>
              <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">מערכת מקצועית מודולרית - אימון חי, סרטוני תרגילים, היקפים ותזונה</p>
            </div>

            <div className="flex gap-1.5 bg-slate-950 p-1 rounded-xl border border-slate-800">
              <button onClick={() => setRole('admin')} className={`px-2.5 sm:px-3 py-1.5 text-xs rounded-lg font-bold transition ${role === 'admin' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}>👑 מנהל</button>
              <button onClick={() => setRole('coach')} className={`px-2.5 sm:px-3 py-1.5 text-xs rounded-lg font-bold transition ${role === 'coach' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}>📋 מאמן</button>
              <button onClick={() => setRole('trainee')} className={`px-2.5 sm:px-3 py-1.5 text-xs rounded-lg font-bold transition ${role === 'trainee' ? 'bg-amber-500 text-slate-950 shadow-md' : 'text-slate-400 hover:text-white'}`}>🏋️ מתאמן</button>
            </div>
          </header>

          {/* שורת פעולות */}
          <div className="bg-slate-900 border border-slate-800 p-3.5 sm:p-4 rounded-2xl space-y-3 shadow-xl">
            {role !== 'trainee' && (
              <div className="flex flex-wrap items-center justify-between gap-2.5 pb-2 border-b border-slate-800/80">
                <div className="flex items-center gap-2 flex-1 min-w-[220px]">
                  <span className="text-xs font-bold text-slate-300 shrink-0">מתאמן:</span>
                  <select value={selectedTraineeId} onChange={(e) => setSelectedTraineeId(e.target.value)} className="w-full bg-slate-950 border border-slate-700 text-amber-400 font-bold rounded-xl px-2.5 py-1.5 text-xs truncate">
                    {traineesList.map(t => (
                      <option key={t.id} value={t.id}>{t.full_name} {t.email ? `(${t.email})` : ''}</option>
                    ))}
                  </select>
                </div>

                <div className="flex items-center gap-1.5 shrink-0 flex-wrap">
                  {selectedTraineeId && (
                    <button onClick={() => handleSendWhatsAppLink(selectedTraineeId, traineeProfile?.full_name, traineeProfile?.phone)} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-2.5 py-1.5 rounded-lg text-xs transition shadow flex items-center gap-1">
                      <span>📲</span><span className="hidden sm:inline">וואטסאפ</span>
                    </button>
                  )}
                  <button onClick={() => setIsAddCustomMealModalOpen(true)} className="bg-sky-600 hover:bg-sky-500 text-white font-bold px-2.5 py-1.5 rounded-lg text-xs transition shadow flex items-center gap-1">
                    <span>🥗</span><span>+ מנה לתפריט</span>
                  </button>
                  <button onClick={() => setActiveTab('kitchen')} className="bg-gradient-to-r from-amber-600 to-amber-500 text-slate-950 font-black px-3 py-1.5 rounded-lg text-xs transition shadow flex items-center gap-1">
                    <span>🍳</span><span>המטבח של שמואל</span>
                  </button>
                </div>
              </div>
            )}

            <div className="flex flex-wrap items-center justify-between gap-2.5 text-xs text-slate-400">
              <span>מתאמן פעיל: <strong className="text-amber-400">{traineeProfile?.full_name || 'שמואל'}</strong></span>
              <span>משקל: <strong className="text-sky-400">{traineeProfile?.current_weight_kg || 75} ק״ג</strong></span>
              <span>מטרה: <strong className="text-emerald-400">{traineeProfile?.goal || 'כושר כללי'}</strong></span>
            </div>
          </div>

          {statusMsg && (
            <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs px-4 py-2 rounded-xl flex justify-between items-center">
              <span>{statusMsg}</span>
              <button onClick={() => setStatusMsg('')} className="font-bold text-sm">✕</button>
            </div>
          )}

          {/* תפריט ניווט ראשי */}
          <div className="hidden md:flex border-b border-slate-800 gap-2 overflow-x-auto pb-1">
            <button onClick={() => setActiveTab('profile')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'profile' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>👤 פרופיל ומעקב</button>
            <button onClick={() => setActiveTab('workout')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'workout' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>💪 אימון ווידאו</button>
            <button onClick={() => setActiveTab('nutrition')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'nutrition' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>🥗 תפריט שקול</button>
            <button onClick={() => setActiveTab('coach_dashboard')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'coach_dashboard' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>📊 דשבורד מאמן</button>
            <button onClick={() => setActiveTab('kitchen')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'kitchen' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>🍳 המטבח של שמואל</button>
            <button onClick={() => setActiveTab('agreements')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'agreements' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>📝 הסכמים</button>
            <button onClick={() => setActiveTab('chat')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'chat' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>💬 צ׳אט</button>
          </div>

          {/* 1. פרופיל ומעקב */}
          {activeTab === 'profile' && (
            <div className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                
                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl">
                  <h2 className="text-base font-bold text-slate-200">👤 פרטים אישיים והגדרת אימון</h2>
                  <form onSubmit={handleSaveProfile} className="space-y-3 text-xs">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-slate-400 block mb-1">שם מלא</label>
                        <input type="text" value={traineeProfile?.full_name || ''} onChange={(e) => setTraineeProfile({...traineeProfile, full_name: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white" />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1">דוא״ל</label>
                        <input type="email" value={traineeProfile?.email || ''} onChange={(e) => setTraineeProfile({...traineeProfile, email: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-sky-400 font-medium" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-slate-400 block mb-1">מגדר</label>
                        <select value={traineeProfile?.gender || 'זכר'} onChange={(e) => setTraineeProfile({...traineeProfile, gender: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white">
                          <option value="זכר">זכר</option>
                          <option value="נקבה">נקבה</option>
                        </select>
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1">גיל</label>
                        <input type="number" value={traineeProfile?.age || ''} onChange={(e) => setTraineeProfile({...traineeProfile, age: Number(e.target.value)})} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white font-bold text-amber-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-slate-400 block mb-1">גובה (ס״מ)</label>
                        <input type="number" value={traineeProfile?.height_cm || ''} onChange={(e) => setTraineeProfile({...traineeProfile, height_cm: Number(e.target.value)})} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white" />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1">משקל (ק״ג)</label>
                        <input type="number" step="0.1" value={traineeProfile?.current_weight_kg || ''} onChange={(e) => setTraineeProfile({...traineeProfile, current_weight_kg: Number(e.target.value)})} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white font-bold text-blue-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3">
                      <div>
                        <label className="text-slate-400 block mb-1">עיר מגורים</label>
                        <input type="text" value={traineeProfile?.city || ''} onChange={(e) => setTraineeProfile({...traineeProfile, city: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white" />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1">טלפון (לוואטסאפ)</label>
                        <input type="text" value={traineeProfile?.phone || ''} onChange={(e) => setTraineeProfile({...traineeProfile, phone: e.target.value})} className="w-full bg-slate-950 border border-slate-800 rounded-xl p-2.5 text-white font-mono" />
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-amber-500 hover:bg-amber-400 text-slate-950 font-bold py-3 rounded-xl text-xs transition shadow">
                      💾 שמור פרופיל
                    </button>
                  </form>
                </div>

                <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl">
                  <div className="flex justify-between items-center border-b border-slate-800 pb-3 flex-wrap gap-2">
                    <div>
                      <h2 className="text-base font-bold text-amber-400">📏 מעקב שקילות והיקפים</h2>
                      <span className="text-xs text-slate-400">מדידות שוטפות</span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setActiveMeasurementVideoModal(isFemale ? femaleGuideUrl : maleGuideUrl)}
                      className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition shadow flex items-center gap-1.5"
                    >
                      🎥 הדרכת מדידה ({isFemale ? 'נשים' : 'גברים'})
                    </button>
                  </div>

                  <form onSubmit={handleLogMetrics} className="space-y-2.5 text-xs">
                    <div className="grid grid-cols-2 gap-2">
                      <div>
                        <label className="text-slate-400 block mb-1 text-[11px]">משקל (ק״ג) *</label>
                        <input type="number" step="0.1" placeholder="75.5" required value={weightInput} onChange={(e) => setWeightInput(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white font-bold" />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1 text-[11px]">מותניים (ס״מ)</label>
                        <input type="number" step="0.5" placeholder="מותניים" value={waistInput} onChange={(e) => setWaistInput(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white" />
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-2">
                      <div>
                        <label className="text-slate-400 block mb-1 text-[11px]">חזה (ס״מ)</label>
                        <input type="number" step="0.5" placeholder="חזה" value={chestInput} onChange={(e) => setChestInput(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white" />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1 text-[11px]">ירך (ס״מ)</label>
                        <input type="number" step="0.5" placeholder="ירך" value={thighInput} onChange={(e) => setThighInput(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white" />
                      </div>
                      <div>
                        <label className="text-slate-400 block mb-1 text-[11px]">זרוע (ס״מ)</label>
                        <input type="number" step="0.5" placeholder="זרוע" value={armInput} onChange={(e) => setArmInput(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2 text-white" />
                      </div>
                    </div>

                    <button type="submit" className="w-full bg-blue-600 hover:bg-blue-500 text-white font-bold py-2.5 rounded-xl text-xs transition shadow">
                      ✓ שמור שקילה
                    </button>
                  </form>

                  <div className="max-h-40 overflow-y-auto space-y-1.5 text-xs pt-1">
                    {traineeMetrics.map((m) => (
                      <div key={m.id} className="bg-slate-950 p-2 rounded-xl border border-slate-800 flex justify-between items-center">
                        <span className="text-amber-400 font-bold font-mono">⚖️ {m.weight_kg} ק״ג</span>
                        <span className="text-slate-500 text-[10px] font-mono">{m.recorded_date}</span>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* תמונות התקדמות */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3 flex-wrap gap-2">
                  <div>
                    <h2 className="text-base font-bold text-amber-400">📸 תמונות התקדמות</h2>
                    <span className="text-xs text-slate-400">מעקב חזותי</span>
                  </div>
                  <button onClick={() => setIsPhotoUploadOpen(!isPhotoUploadOpen)} className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition shadow flex items-center gap-1">
                    {isPhotoUploadOpen ? '✕ סגור' : '📷 העלה תמונה'}
                  </button>
                </div>

                {isPhotoUploadOpen && (
                  <form onSubmit={handleSavePhoto} className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 space-y-3 text-xs">
                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <label className="text-slate-300 block mb-1 font-bold">זווית:</label>
                        <select value={photoTypeInput} onChange={(e) => setPhotoTypeInput(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white">
                          <option value="חזית">חזית</option>
                          <option value="צד">פרופיל / צד</option>
                          <option value="גב">גב</option>
                        </select>
                      </div>

                      <div>
                        <label className="text-slate-300 block mb-1 font-bold">קובץ תמונה:</label>
                        <input type="file" accept="image/*" ref={fileInputRef} required onChange={handlePhotoSelect} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-slate-300 text-xs" />
                      </div>
                    </div>

                    <button type="submit" disabled={!selectedPhotoBase64} className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-black py-2.5 rounded-xl text-xs transition shadow">
                      💾 שמור תמונה
                    </button>
                  </form>
                )}

                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                  {traineePhotos.map((p) => (
                    <div key={p.id} className="bg-slate-950 p-2 rounded-xl border border-slate-800 space-y-1 group relative">
                      <img src={p.photo_url} alt={p.photo_type} className="w-full aspect-[3/4] object-cover rounded-lg" />
                      <div className="flex justify-between items-center text-[10px] text-slate-400 px-1">
                        <span className="font-bold text-amber-400">{p.photo_type}</span>
                        <span>{p.recorded_date}</span>
                      </div>
                      {role !== 'trainee' && (
                        <button onClick={() => handleDeletePhoto(p.id)} className="absolute top-2 left-2 bg-rose-600 text-white p-1 rounded-md text-[10px] opacity-0 group-hover:opacity-100 transition shadow">🗑️</button>
                      )}
                    </div>
                  ))}
                </div>
              </div>

            </div>
          )}

          {/* 2. אימון חי ווידאו */}
          {activeTab === 'workout' && (
            <WorkoutTab
              role={role}
              assignedPlan={assignedPlan}
              traineeProfile={traineeProfile}
              exerciseVideos={exerciseVideos}
              onGeneratePlan={() => setAssignedPlan(buildDynamicWorkoutPlan(traineeProfile, 'אימון מותאם'))}
              supabase={supabase}
              onRefreshVideos={loadExerciseVideos}
            />
          )}

          {/* 3. תפריט שקול */}
          {activeTab === 'nutrition' && (
            <NutritionTab
              role={role}
              traineeProfile={traineeProfile}
              nutritionPlan={nutritionPlan}
              setNutritionPlan={setNutritionPlan}
              dailyNutritionLive={safeDailyNutrition}
              detailedMenuToDisplay={Array.isArray(nutritionPlan?.detailedMenu) ? nutritionPlan.detailedMenu : []}
              groupedMealsByDate={{}}
              selectedNutritionDate={selectedNutritionDate}
              setSelectedNutritionDate={setSelectedNutritionDate}
              openDaysState={openDaysState}
              setOpenDaysState={setOpenDaysState}
              onRecalculateMacros={() => {}}
              onSaveNutritionPlan={() => {}}
              onLogMeal={() => {}}
              onDeleteMealLog={() => {}}
            />
          )}

          {/* 4. דשבורד מאמן */}
          {activeTab === 'coach_dashboard' && (
            <div className="space-y-5">
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl">
                <h2 className="text-base font-bold text-amber-400">📊 דשבורד מאמן: מגמות משקל</h2>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">שקילה אחרונה</span>
                    <strong className="text-lg font-mono text-amber-400">{traineeMetrics[0]?.weight_kg || traineeProfile?.current_weight_kg || '--'} ק״ג</strong>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">היקף מותניים</span>
                    <strong className="text-lg font-mono text-sky-400">{traineeMetrics[0]?.waist_cm || '--'} ס״מ</strong>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">עמידה ביעד</span>
                    <strong className="text-lg font-mono text-emerald-400">92%</strong>
                  </div>
                  <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                    <span className="text-[11px] text-slate-400 block">התמדה</span>
                    <strong className="text-lg font-mono text-purple-400">גבוהה 🔥</strong>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* 5. המטבח של שמואל */}
          {activeTab === 'kitchen' && (
            <ShmuelKitchenEmbed onClose={() => setActiveTab('nutrition')} />
          )}

          {/* 6. הסכמים */}
          {activeTab === 'agreements' && (
            <AgreementsTab
              role={role}
              currentTraineeUser={currentTraineeUser}
              traineeProfile={traineeProfile}
              onSignDocuments={async (name) => {
                const signDate = new Date().toLocaleString('he-IL');
                await supabase.from('trainee_profiles').upsert([{ trainee_id: selectedTraineeId, health_declaration_signed: true, contract_signed: true, signature_name: name.trim(), signature_date: signDate }], { onConflict: 'trainee_id' });
                setTraineeProfile(prev => ({ ...prev, health_declaration_signed: true, contract_signed: true, signature_name: name.trim(), signature_date: signDate }));
              }}
              onSimulateBotSigning={() => {}}
            />
          )}

          {/* 7. צ׳אט */}
          {activeTab === 'chat' && (
            <ChatTab
              role={role}
              currentTraineeUser={currentTraineeUser}
              currentCoachUser={currentCoachUser}
              messages={messages}
              onSendMessage={async (msg) => {
                const temp = { id: 'temp_' + Date.now(), message_text: msg, sender_role: role, created_at: new Date().toISOString() };
                setMessages(prev => [...prev, temp]);
                await supabase.from('chat_messages').insert([{ trainee_id: selectedTraineeId, sender_role: role, message_text: msg }]);
              }}
            />
          )}

        </div>

        {/* סרגל ניווט תחתון בנייד */}
        <nav className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-slate-900/95 backdrop-blur-md border-t border-slate-800 py-1 px-2 flex justify-around items-center shadow-2xl">
          <button onClick={() => setActiveTab('profile')} className={`flex flex-col items-center flex-1 py-1 rounded-xl ${activeTab === 'profile' ? 'text-amber-400 font-black' : 'text-slate-400'}`}>
            <span className="text-lg">👤</span>
            <span className="text-[10px]">פרופיל</span>
          </button>
          <button onClick={() => setActiveTab('workout')} className={`flex flex-col items-center flex-1 py-1 rounded-xl ${activeTab === 'workout' ? 'text-amber-400 font-black' : 'text-slate-400'}`}>
            <span className="text-lg">💪</span>
            <span className="text-[10px]">אימון</span>
          </button>
          <button onClick={() => setActiveTab('kitchen')} className={`flex flex-col items-center flex-1 py-1 rounded-xl ${activeTab === 'kitchen' ? 'text-amber-400 font-black' : 'text-slate-400'}`}>
            <span className="text-lg">🍳</span>
            <span className="text-[10px]">מטבח</span>
          </button>
          <button onClick={() => setActiveTab('coach_dashboard')} className={`flex flex-col items-center flex-1 py-1 rounded-xl ${activeTab === 'coach_dashboard' ? 'text-amber-400 font-black' : 'text-slate-400'}`}>
            <span className="text-lg">📊</span>
            <span className="text-[10px]">דשבורד</span>
          </button>
          <button onClick={() => setActiveTab('chat')} className={`flex flex-col items-center flex-1 py-1 rounded-xl ${activeTab === 'chat' ? 'text-amber-400 font-black' : 'text-slate-400'}`}>
            <span className="text-lg">💬</span>
            <span className="text-[10px]">צ׳אט</span>
          </button>
        </nav>

        {/* מודאל הוספת מנה אישית לתפריט */}
        {isAddCustomMealModalOpen && (
          <div className="fixed inset-0 bg-slate-950/85 backdrop-blur-sm z-50 flex items-center justify-center p-4" dir="rtl">
            <div className="bg-slate-900 border border-sky-500/50 rounded-2xl max-w-md w-full p-5 space-y-4 shadow-2xl">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <h3 className="text-base font-bold text-sky-400">🥗 הוספת מנה שקולה לתפריט המתאמן</h3>
                <button onClick={() => setIsAddCustomMealModalOpen(false)} className="text-slate-400 hover:text-white font-bold">✕</button>
              </div>

              <form onSubmit={handleAddCustomMealToMenu} className="space-y-3 text-xs">
                <div>
                  <label className="text-slate-300 block mb-1 font-bold">שם המנה / פריט המזון *</label>
                  <input type="text" required placeholder="לדוגמה: 200 גרם פילה דניס בתנור" value={customMealName} onChange={(e) => setCustomMealName(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2.5 text-white" />
                </div>

                <div className="grid grid-cols-3 gap-2">
                  <div>
                    <label className="text-slate-300 block mb-1 font-bold">משקל (גרם)</label>
                    <input type="text" placeholder="200g" value={customMealGrams} onChange={(e) => setCustomMealGrams(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-white" />
                  </div>
                  <div>
                    <label className="text-slate-300 block mb-1 font-bold">קלוריות</label>
                    <input type="number" placeholder="450" value={customMealCals} onChange={(e) => setCustomMealCals(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-amber-400 font-bold" />
                  </div>
                  <div>
                    <label className="text-slate-300 block mb-1 font-bold">חלבון (גרם)</label>
                    <input type="number" placeholder="35" value={customMealProt} onChange={(e) => setCustomMealProt(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-xl p-2 text-emerald-400 font-bold" />
                  </div>
                </div>

                <div className="flex gap-2 pt-2">
                  <button type="submit" className="flex-1 bg-sky-600 hover:bg-sky-500 text-white font-bold py-2.5 rounded-xl text-xs transition shadow">✓ שמור מנה בתפריט</button>
                  <button type="button" onClick={() => setIsAddCustomMealModalOpen(false)} className="bg-slate-800 text-slate-300 px-4 py-2.5 rounded-xl text-xs">ביטול</button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* חלון צף לנגן וידאו הדרכת מדידת היקפים */}
        {activeMeasurementVideoModal && (
          <div className="fixed inset-0 bg-slate-950/80 backdrop-blur-sm z-50 flex items-center justify-center p-4">
            <div className="bg-slate-900 border border-purple-500/60 rounded-2xl max-w-2xl w-full p-4 space-y-3 shadow-2xl">
              <div className="flex justify-between items-center border-b border-slate-800 pb-2">
                <h3 className="text-sm font-bold text-amber-400">📏 הדרכה מקצועית: מדידת היקפים ({isFemale ? 'נשים' : 'גברים'})</h3>
                <button onClick={() => setActiveMeasurementVideoModal(null)} className="text-slate-400 hover:text-white font-bold text-sm">✕ סגור</button>
              </div>
              <div className="aspect-video w-full rounded-xl overflow-hidden bg-black flex items-center justify-center">
                <iframe src={activeMeasurementVideoModal} title="Measurement Guide" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen className="w-full h-full border-0" />
              </div>
            </div>
          </div>
        )}

      </main>
    </SafeErrorBoundary>
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-amber-400 flex items-center justify-center font-bold">טוען מערכת...</div>}>
      <MainApp />
    </Suspense>
  );
}
