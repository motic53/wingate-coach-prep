/* eslint-disable */
// @ts-nocheck
'use client';

import React, { useState, useEffect, Suspense, useCallback, useMemo, useRef } from 'react';
import { useSearchParams } from 'next/navigation';
import { createClient } from '@supabase/supabase-js';
import { WorkoutTab, buildDynamicWorkoutPlan } from '@/components/WorkoutTab';
import { NutritionTab } from '@/components/NutritionTab';
import { AgreementsTab } from '@/components/AgreementsTab';
import { ChatTab } from '@/components/ChatTab';
import { ShmuelKitchen } from '@/components/ShmuelKitchen';

const SUPABASE_URL = 'https://gvinzpijoapupqthxbae.supabase.co';
const SUPABASE_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imd2aW56cGlqb2FwdXBxdGh4YmFlIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODY5NzkxODUsImV4cCI6MjEwMjU1NTE4NX0.HJxsZtSeBT_pu45sknJsSqz1jdNfUiDCEr28lVa5_Lc';

const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const DEFAULT_MALE_MEASURE_GUIDE = 'https://www.youtube.com/embed/0T26e3P8_O8';
const DEFAULT_FEMALE_MEASURE_GUIDE = 'https://www.youtube.com/embed/8vRzY6zD7_0';

function generateDetailedMealPlan(weightKg: number, goal: string, diet: string, totalCals: number, totalProt: number) {
  const w = Number(weightKg) || 75;
  const isBulk = goal === 'עליה במסה';
  const carbPortion = isBulk ? 220 : 140;

  if (diet === 'טבעוני') {
    const tofuPortion = isBulk ? Math.round(w * 3.2) : Math.round(w * 2.8);
    return [
      { id: 'v1', name: 'ארוחה 1: מקושקשת טופו ופרוסות לחם מלא 🌱', time: '08:00', description: '180 גרם טופו מפורר מוקפץ עם כורכום, עגבניות ותרד + 2 פרוסות לחם מלא + חצי אבוקדו ומלפפון', gramsDetails: '180g טופו קשה, 2 פרוסות לחם (60g), 50g אבוקדו, סלט ירקות', cals: Math.round(totalCals * 0.24), protein: Math.round(totalProt * 0.25), carbs: 35, fats: 14 },
      { id: 'v2', name: 'ארוחה 2: קערת בודהה בול - טופו צרוב, קינואה ועדשים 🌱', time: '13:00', description: `${tofuPortion} גרם טופו אפוי/צרוב + ${carbPortion} גרם קינואה / אורז מלא + 100 גרם עדשים שחורות מבושלות + ירקות ירוקים וכף טחינה גולמית מלאה`, gramsDetails: `${tofuPortion}g טופו מתובל, ${carbPortion}g קינואה, 100g עדשים, 15g טחינה`, cals: Math.round(totalCals * 0.38), protein: Math.round(totalProt * 0.40), carbs: Math.round(carbPortion * 0.45), fats: 12 },
      { id: 'v3', name: 'ארוחה 3: שייק חלבון צמחי וזרעי צ׳יה 🌱', time: '16:30', description: 'סקופ אבקת חלבון צמחי (30 גרם) + 250 מ״ל משקה סויה ללא סוכר + בננה בינונית + כף חמאת בוטנים טבעית', gramsDetails: '30g חלבון צמחי, 250ml משקה סויה, 100g בננה, 15g חמאת בוטנים', cals: Math.round(totalCals * 0.16), protein: Math.round(totalProt * 0.18), carbs: 35, fats: 6 },
      { id: 'v4', name: 'ארוחה 4: תבשיל קארי חומוס, אדממה וירקות שורש 🌱', time: '20:00', description: '150 גרם גרגרי חומוס מבושלים + 100 גרם פולי אדממה + בטטה אפויה בינונית + סלט ירוק עם שמן זית ולימון', gramsDetails: '150g חומוס, 100g אדממה, 150g בטטה, סלט, 5ml שמן זית', cals: Math.round(totalCals * 0.22), protein: Math.round(totalProt * 0.17), carbs: 45, fats: 10 }
    ];
  }

  const meatPortion = isBulk ? Math.round(w * 2.5) : Math.round(w * 2.2);
  return [
    { id: 'om1', name: 'ארוחה 1: ארוחת בוקר קלאסית מאוזנת', time: '08:00', description: 'אומלט מ-2 ביצים שלמות + 2 חלבונים + 2 פרוסות לחם כוסמין מלא + 60 גרם קוטג׳ 5% + מלפפון ועגבניה', gramsDetails: '2 ביצים + 2 חלבונים (160g), 2 פרוסות לחם (60g), 60g קוטג׳', cals: Math.round(totalCals * 0.23), protein: Math.round(totalProt * 0.25), carbs: Math.round(carbPortion * 0.25), fats: 12 },
    { id: 'om2', name: 'ארוחה 2: צהריים - עוף ואורז שקול', time: '13:00', description: `${meatPortion} גרם חזה עוף שקול לפני בישול + ${carbPortion} גרם אורז בסמטי / בטטה + 150 גרם ירקות ירוקים`, gramsDetails: `${meatPortion}g חלבון, ${carbPortion}g אורז, 150g ירקות`, cals: Math.round(totalCals * 0.38), protein: Math.round(totalProt * 0.40), carbs: Math.round(carbPortion * 0.45), fats: 8 },
    { id: 'om3', name: 'ארוחה 3: שייק חלבון ופחמימה (סביב אימון)', time: '16:30', description: 'סקופ חלבון Whey (30 גרם) + בננה בינונית + 30 גרם שיבולת שועל + מים/חלב שקדים', gramsDetails: '30g אבקת חלבון, 100g בננה, 30g שיבולת שועל', cals: Math.round(totalCals * 0.16), protein: Math.round(totalProt * 0.18), carbs: 35, fats: 4 },
    { id: 'om4', name: 'ארוחה 4: ערב - דג / טונה וסלט עשיר', time: '20:00', description: '180 גרם פילה סלמון / קופסת טונה במים + ביצה קשה + סלט ירקות עם כפית שמן זית', gramsDetails: '180g חלבון/דג, סלט ירקות, 5ml שמן זית', cals: Math.round(totalCals * 0.23), protein: Math.round(totalProt * 0.22), carbs: 20, fats: 16 }
  ];
}

function calculateCustomNutrition(weightKg: number, heightCm: number, age: number, gender: string, daysPerWeek: number, goal: string) {
  const w = Number(weightKg) || 75;
  const h = Number(heightCm) || 175;
  const a = Number(age) || 26;
  let bmr = 10 * w + 6.25 * h - 5 * a;
  bmr = (gender === 'נקבה') ? bmr - 161 : bmr + 5;
  let activityFactor = daysPerWeek >= 4 ? 1.55 : daysPerWeek <= 2 ? 1.25 : 1.35;
  const tdee = Math.round(bmr * activityFactor);

  let targetCalories = tdee;
  if (goal === 'חיטוב' || goal === 'ירידה במשקל') targetCalories = Math.round(tdee - 450);
  else if (goal === 'עליה במסה') targetCalories = Math.round(tdee + 350);

  const proteinGrams = Math.round(w * 2.0);
  const fatsGrams = Math.max(45, Math.round(w * 0.85));
  const remainingCals = targetCalories - (proteinGrams * 4 + fatsGrams * 9);
  const carbsGrams = Math.max(50, Math.round(remainingCals / 4));

  return { calories: targetCalories, protein: proteinGrams, carbs: carbsGrams, fats: fatsGrams };
}

function MainApp() {
  const searchParams = useSearchParams();
  const [role, setRole] = useState<'admin' | 'coach' | 'trainee'>('admin');
  const [isLockedByLink, setIsLockedByLink] = useState(false);
  const [activeTab, setActiveTab] = useState<'profile' | 'workout' | 'nutrition' | 'coach_dashboard' | 'kitchen' | 'agreements' | 'chat'>('profile');

  const [coachesList, setCoachesList] = useState<any[]>([]);
  const [traineesList, setTraineesList] = useState<any[]>([]);
  const [selectedCoachId, setSelectedCoachId] = useState<string>('');
  const [selectedTraineeId, setSelectedTraineeId] = useState<string>('');
  const [currentTraineeUser, setCurrentTraineeUser] = useState<any>(null);
  const [currentCoachUser, setCurrentCoachUser] = useState<any>(null);

  // מודאלים
  const [isAddUserModalOpen, setIsAddUserModalOpen] = useState(false);
  const [isManageUsersModalOpen, setIsManageUsersModalOpen] = useState(false);
  const [isAddCustomMealModalOpen, setIsAddCustomMealModalOpen] = useState(false);
  const [newUserName, setNewUserName] = useState('');
  const [newUserEmail, setNewUserEmail] = useState('');
  const [newUserRole, setNewUserRole] = useState<'coach' | 'trainee'>('trainee');
  const [newUserGender, setNewUserGender] = useState('זכר');

  // שדות הוספת מנה אישית
  const [customMealName, setCustomMealName] = useState('');
  const [customMealGrams, setCustomMealGrams] = useState('');
  const [customMealCals, setCustomMealCals] = useState('');
  const [customMealProt, setCustomMealProt] = useState('');

  // סרטוני וידאו
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
  const [assignedPlan, setAssignedPlan] = useState<any>(null);
  const [nutritionPlan, setNutritionPlan] = useState<any>({ calories: 2200, protein: 165, carbs: 210, fats: 65, detailedMenu: [] });
  const [messages, setMessages] = useState<any[]>([]);
  const [statusMsg, setStatusMsg] = useState('');

  // שדות מדידה
  const [weightInput, setWeightInput] = useState('');
  const [waistInput, setWaistInput] = useState('');
  const [chestInput, setChestInput] = useState('');
  const [thighInput, setThighInput] = useState('');
  const [armInput, setArmInput] = useState('');

  // מודול תמונות התקדמות
  const [traineePhotos, setTraineePhotos] = useState<any[]>([]);
  const [selectedPhotoBase64, setSelectedPhotoBase64] = useState<string>('');
  const [photoTypeInput, setPhotoTypeInput] = useState('חזית');
  const [photoNotesInput, setPhotoNotesInput] = useState('');
  const [isPhotoUploadOpen, setIsPhotoUploadOpen] = useState(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const loadExerciseVideos = useCallback(async () => {
    const { data } = await supabase.from('exercise_videos').select('*');
    if (data) {
      const map: { [key: string]: string } = {};
      data.forEach((v) => { 
        if (v.video_url) {
          map[v.exercise_id] = v.video_url;
          if (v.exercise_id === 'measurement_guide_male') setMaleGuideUrl(v.video_url);
          if (v.exercise_id === 'measurement_guide_female') setFemaleGuideUrl(v.video_url);
        }
      });
      setExerciseVideos(map);
    }
  }, []);

  useEffect(() => {
    loadExerciseVideos();
  }, [loadExerciseVideos]);

  useEffect(() => {
    const urlRole = searchParams.get('role');
    const urlUserId = searchParams.get('userId');

    if (urlRole === 'coach' && urlUserId) {
      setRole('coach');
      setSelectedCoachId(urlUserId);
      setIsLockedByLink(true);
      supabase.from('users').select('*').eq('id', urlUserId).single().then(({ data }) => { if (data) setCurrentCoachUser(data); });
    } else if (urlRole === 'trainee' && urlUserId) {
      setRole('trainee');
      setSelectedTraineeId(urlUserId);
      setIsLockedByLink(true);
    } else if (urlRole === 'admin') {
      setRole('admin');
      setIsLockedByLink(false);
    }
  }, [searchParams]);

  const loadSystemUsers = useCallback(async () => {
    const { data: allUsers } = await supabase.from('users').select('*').order('created_at', { ascending: false });
    if (allUsers) {
      const coaches = allUsers.filter(u => u.role === 'coach');
      const trainees = allUsers.filter(u => u.role === 'trainee');
      setCoachesList(coaches);
      setTraineesList(trainees);

      if (coaches.length > 0 && !selectedCoachId) setSelectedCoachId(coaches[0].id);
      if (trainees.length > 0 && (!selectedTraineeId || !trainees.some(t => t.id === selectedTraineeId))) {
        setSelectedTraineeId(trainees[0].id);
      }
    }
  }, [selectedCoachId, selectedTraineeId]);

  useEffect(() => {
    loadSystemUsers();
  }, [loadSystemUsers]);

  const loadTraineeData = useCallback(async (traineeId: string) => {
    if (!traineeId) return;

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
        supabase.from('trainee_profiles').update({ assigned_plan: currentPlan }).eq('trainee_id', traineeId).then();
      }

      const defaultNutri = calculateCustomNutrition(weight, height, age, gender, days, goal);
      const generatedMenu = generateDetailedMealPlan(weight, goal, diet, defaultNutri.calories, defaultNutri.protein);

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

      setAssignedPlan(currentPlan);
      setNutritionPlan(pData.nutrition_plan || { ...defaultNutri, detailedMenu: generatedMenu });
    }

    const { data: wData } = await supabase.from('progress_metrics').select('*').eq('trainee_id', traineeId).order('recorded_date', { ascending: false }).limit(20);
    setTraineeMetrics(wData || []);

    const { data: photoData } = await supabase.from('progress_photos').select('*').eq('trainee_id', traineeId).order('recorded_date', { ascending: false });
    setTraineePhotos(photoData || []);

    const { data: mData } = await supabase.from('meal_logs').select('*').eq('trainee_id', traineeId).order('logged_at', { ascending: false }).limit(40);
    setTraineeMeals(mData || []);

    const { data: cData } = await supabase.from('chat_messages').select('*').eq('trainee_id', traineeId).order('created_at', { ascending: true });
    setMessages(cData || []);
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
    if (selectedTraineeId) {
      const userUpdates: any = {};
      if (traineeProfile.full_name) userUpdates.full_name = traineeProfile.full_name.trim();
      if (traineeProfile.email) userUpdates.email = traineeProfile.email.trim();
      if (Object.keys(userUpdates).length > 0) {
        await supabase.from('users').update(userUpdates).eq('id', selectedTraineeId);
      }
    }

    const updatedNutri = calculateCustomNutrition(
      Number(traineeProfile.current_weight_kg),
      Number(traineeProfile.height_cm),
      Number(traineeProfile.age),
      traineeProfile.gender || 'זכר',
      Number(traineeProfile.days_per_week),
      traineeProfile.goal
    );

    const generatedMenu = generateDetailedMealPlan(
      Number(traineeProfile.current_weight_kg),
      traineeProfile.goal,
      traineeProfile.dietary_preference,
      updatedNutri.calories,
      updatedNutri.protein
    );

    const newWorkoutPlan = buildDynamicWorkoutPlan(traineeProfile, 'אימון מותאם אישית ומסונכרן');
    const mergedNutrition = { ...nutritionPlan, ...updatedNutri, detailedMenu: generatedMenu };

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
      assigned_plan: newWorkoutPlan,
      nutrition_plan: mergedNutrition
    }], { onConflict: 'trainee_id' });

    setAssignedPlan(newWorkoutPlan);
    setNutritionPlan(mergedNutrition);
    setStatusMsg(`הפרופיל, התפריט ותוכנית האימונים נשמרו בהצלחה!`);
    loadTraineeData(selectedTraineeId);
    loadSystemUsers();
  };

  const handleLogMetrics = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!weightInput) return;

    await supabase.from('progress_metrics').insert([{
      trainee_id: selectedTraineeId,
      weight_kg: Number(weightInput),
      waist_cm: waistInput ? Number(waistInput) : null,
      chest_cm: chestInput ? Number(chestInput) : null,
      thigh_cm: thighInput ? Number(thighInput) : null,
      arm_cm: armInput ? Number(armInput) : null,
      recorded_date: new Date().toISOString().split('T')[0]
    }]);

    setStatusMsg(`השקילה וההיקפים נשמרו בהצלחה!`);
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

    const updatedMenu = [...(nutritionPlan.detailedMenu || []), newMeal];
    const updatedNutritionPlan = { ...nutritionPlan, detailedMenu: updatedMenu };

    await supabase.from('trainee_profiles').update({ nutrition_plan: updatedNutritionPlan }).eq('trainee_id', selectedTraineeId);

    setNutritionPlan(updatedNutritionPlan);
    setStatusMsg(`המנה "${customMealName}" נוספה בהצלחה לתפריט של המתאמן!`);
    setCustomMealName('');
    setCustomMealGrams('');
    setCustomMealCals('');
    setCustomMealProt('');
    setIsAddCustomMealModalOpen(false);
  };

  const isFemale = traineeProfile?.gender === 'נקבה';

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-3 sm:p-4 md:p-6 pb-24 md:pb-6" dir="rtl">
      <div className="max-w-6xl mx-auto space-y-5">

        {/* בר עליון */}
        <header className="flex flex-wrap justify-between items-center bg-slate-900 border border-slate-800 p-3 sm:p-4 rounded-2xl gap-3 shadow-xl">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-amber-400">Coach &amp; Athlete 360 Pro</h1>
            <p className="text-[11px] sm:text-xs text-slate-400 mt-0.5">מערכת מקצועית מודולרית - אימון חי, סרטוני תרגילים, היקפים, תמונות ותזונה</p>
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
            <span>משקל נוכחי: <strong className="text-sky-400">{traineeProfile?.current_weight_kg || 75} ק״ג</strong></span>
            <span>מטרה: <strong className="text-emerald-400">{traineeProfile?.goal || 'כושר כללי'}</strong></span>
          </div>
        </div>

        {statusMsg && (
          <div className="bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs px-4 py-2.5 rounded-xl flex justify-between items-center">
            <span>{statusMsg}</span>
            <button onClick={() => setStatusMsg('')} className="font-bold text-sm">✕</button>
          </div>
        )}

        {/* תפריט עליון */}
        <div className="hidden md:flex border-b border-slate-800 gap-2 overflow-x-auto pb-1">
          <button onClick={() => setActiveTab('profile')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'profile' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>👤 פרופיל ומעקב</button>
          <button onClick={() => setActiveTab('workout')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'workout' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>💪 אימון חי ווידאו תרגילים</button>
          <button onClick={() => setActiveTab('nutrition')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'nutrition' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>🥗 תפריט שקול</button>
          <button onClick={() => setActiveTab('coach_dashboard')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'coach_dashboard' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>📊 דשבורד מאמן</button>
          <button onClick={() => setActiveTab('kitchen')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'kitchen' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>🍳 המטבח של שמואל</button>
          <button onClick={() => setActiveTab('agreements')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'agreements' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>📝 הסכמים</button>
          <button onClick={() => setActiveTab('chat')} className={`pb-3 px-4 text-sm font-semibold border-b-2 whitespace-nowrap transition ${activeTab === 'chat' ? 'border-amber-400 text-amber-400' : 'border-transparent text-slate-400'}`}>💬 צ׳אט</button>
        </div>

        {/* 1. פרופיל ומעקב היקפים, שקילות ותמונות */}
        {activeTab === 'profile' && (
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              
              {/* פרטים אישיים */}
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
                      <label className="text-slate-400 block mb-1">משקל נוכחי (ק״ג)</label>
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
                    💾 שמור פרופיל וסנכרן תוכניות
                  </button>
                </form>
              </div>

              {/* שקילות והיקפים + סרטון הדרכה */}
              <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl">
                <div className="flex justify-between items-center border-b border-slate-800 pb-3 flex-wrap gap-2">
                  <div>
                    <h2 className="text-base font-bold text-amber-400">📏 מעקב שקילות ומדדי היקפים</h2>
                    <span className="text-xs text-slate-400">מדידות מדויקות סביב הגוף</span>
                  </div>

                  <button
                    type="button"
                    onClick={() => setActiveMeasurementVideoModal(isFemale ? femaleGuideUrl : maleGuideUrl)}
                    className="bg-purple-600 hover:bg-purple-500 text-white font-bold px-3 py-1.5 rounded-xl text-xs transition shadow flex items-center gap-1.5"
                  >
                    🎥 סרטון הדרכה למדידת היקפים ({isFemale ? 'נשים' : 'גברים'})
                  </button>
                </div>

                <form onSubmit={handleLogMetrics} className="space-y-2.5 text-xs">
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <label className="text-slate-400 block mb-1 text-[11px]">משקל (ק״ג) *</label>
                      <input type="number" step="0.1" placeholder="75.5" required value={weightInput} onChange={(e) => setWeightInput(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white font-bold" />
                    </div>
                    <div>
                      <label className="text-slate-400 block mb-1 text-[11px]">מותניים (ס״מ)</label>
                      <input type="number" step="0.5" placeholder="היקף מותניים" value={waistInput} onChange={(e) => setWaistInput(e.target.value)} className="w-full bg-slate-950 border border-slate-700 rounded-lg p-2.5 text-white" />
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
                    ✓ שמור שקילה ומדדים
                  </button>
                </form>

                <div className="max-h-48 overflow-y-auto space-y-1.5 text-xs pt-1">
                  {traineeMetrics.map((m) => (
                    <div key={m.id} className="bg-slate-950 p-2.5 rounded-xl border border-slate-800 flex justify-between items-center">
                      <span className="text-amber-400 font-bold font-mono">⚖️ {m.weight_kg} ק״ג</span>
                      <div className="flex gap-2 text-[11px] text-slate-300">
                        {m.waist_cm && <span>מותניים: <strong className="text-blue-300">{m.waist_cm}</strong></span>}
                        {m.chest_cm && <span>חזה: <strong className="text-emerald-300">{m.chest_cm}</strong></span>}
                      </div>
                      <span className="text-slate-500 text-[10px] font-mono">{m.recorded_date}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* כרטיס תמונות התקדמות */}
            <div className="bg-slate-900 border border-slate-800 p-5 rounded-2xl space-y-4 shadow-xl">
              <div className="flex justify-between items-center border-b border-slate-800 pb-3 flex-wrap gap-2">
                <div>
                  <h2 className="text-base font-bold text-amber-400">📸 תיעוד תמונות התקדמות גוף</h2>
                  <span className="text-xs text-slate-400">מעקב חזותי אחר שינוי הרכב הגוף</span>
                </div>
                <button
                  onClick={() => setIsPhotoUploadOpen(!isPhotoUploadOpen)}
                  className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold px-3.5 py-1.5 rounded-xl text-xs transition shadow flex items-center gap-1"
                >
                  {isPhotoUploadOpen ? '✕ סגור העלאה' : '📷 העלה תמונה חדשה'}
                </button>
              </div>

              {isPhotoUploadOpen && (
                <form onSubmit={handleSavePhoto} className="bg-slate-950 p-4 rounded-xl border border-emerald-500/30 space-y-3 text-xs">
                  <div className="grid sm:grid-cols-2 gap-3">
                    <div>
                      <label className="text-slate-300 block mb-1 font-bold">זווית צילום:</label>
                      <select value={photoTypeInput} onChange={(e) => setPhotoTypeInput(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white">
                        <option value="חזית">חזית (פרונט)</option>
                        <option value="צד ימין">פרופיל / צד</option>
                        <option value="גב">גב</option>
                      </select>
                    </div>

                    <div>
                      <label className="text-slate-300 block mb-1 font-bold">בחר קובץ תמונה:</label>
                      <input type="file" accept="image/*" ref={fileInputRef} required onChange={handlePhotoSelect} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-1.5 text-slate-300 text-xs" />
                    </div>
                  </div>

                  <div>
                    <label className="text-slate-300 block mb-1 font-bold">הערות:</label>
                    <input type="text" placeholder="לדוגמה: שקילה בבוקר בצום" value={photoNotesInput} onChange={(e) => setPhotoNotesInput(e.target.value)} className="w-full bg-slate-900 border border-slate-700 rounded-lg p-2 text-white" />
                  </div>

                  {selectedPhotoBase64 && (
                    <div className="flex items-center gap-3 bg-slate-900 p-2.5 rounded-lg border border-slate-800">
                      <img src={selectedPhotoBase64} alt="תצוגה מקדימה" className="w-16 h-16 object-cover rounded-lg border border-slate-700" />
                      <span className="text-emerald-400 text-xs font-semibold">✓ התמונה נטענה ומוכנה לשמירה</span>
                    </div>
                  )}

                  <button type="submit" disabled={!selectedPhotoBase64} className="w-full bg-emerald-500 hover:bg-emerald-400 disabled:opacity-50 text-slate-950 font-black py-2.5 rounded-xl text-xs transition shadow">
                    💾 שמור תמונת התקדמות במערכת
                  </button>
                </form>
              )}

              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 pt-2">
                {traineePhotos.map((p) => (
                  <div key={p.id} className="bg-slate-950 p-2 rounded-xl border border-slate-800 space-y-1.5 group relative">
                    <div className="aspect-[3/4] w-full rounded-lg overflow-hidden bg-slate-900 flex items-center justify-center">
                      <img src={p.photo_url} alt={p.photo_type} className="w-full h-full object-cover group-hover:scale-105 transition duration-300" />
                    </div>
                    <div className="flex justify-between items-center text-[11px] px-1">
                      <span className="font-bold text-amber-400">{p.photo_type}</span>
                      <span className="text-slate-500 font-mono text-[10px]">{p.recorded_date}</span>
                    </div>
                    {p.notes && <p className="text-[10px] text-slate-400 px-1 truncate">{p.notes}</p>}
                    {role !== 'trainee' && (
                      <button onClick={() => handleDeletePhoto(p.id)} className="absolute top-3 left-3 bg-rose-600 text-white p-1 rounded-md text-[10px] opacity-0 group-hover:opacity-100 transition shadow" title="מחק תמונה">🗑️</button>
                    )}
                  </div>
                ))}
              </div>
            </div>

          </div>
        )}

        {/* 2. אימון חי ווידאו תרגילים */}
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
            dailyNutritionLive={{ date: selectedNutritionDate, cals: 1950, prot: 155, carbs: 180, fats: 55, targetCals: 2100, targetProt: 160, targetCarbs: 200, targetFats: 60 }}
            detailedMenuToDisplay={nutritionPlan.detailedMenu || []}
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
              <h2 className="text-base font-bold text-amber-400">📊 דשבורד מאמן: מגמות משקל והתמדה</h2>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">שקילה אחרונה</span>
                  <strong className="text-lg font-mono text-amber-400">{traineeMetrics[0]?.weight_kg || traineeProfile?.current_weight_kg || '--'} ק״ג</strong>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">היקף מותניים אחרון</span>
                  <strong className="text-lg font-mono text-sky-400">{traineeMetrics[0]?.waist_cm || '--'} ס״מ</strong>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">עמידה בארוחות</span>
                  <strong className="text-lg font-mono text-emerald-400">92%</strong>
                </div>
                <div className="bg-slate-950 p-3 rounded-xl border border-slate-800">
                  <span className="text-[11px] text-slate-400 block">סטטוס אימונים</span>
                  <strong className="text-lg font-mono text-purple-400">מעולה 🔥</strong>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* 5. המטבח של שמואל */}
        {activeTab === 'kitchen' && (
          <ShmuelKitchen onClose={() => setActiveTab('nutrition')} />
        )}

        {/* 6. הסכמים והצהרת בריאות */}
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
  );
}

export default function Home() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-slate-950 text-amber-400 flex items-center justify-center font-bold">טוען מערכת...</div>}>
      <MainApp />
    </Suspense>
  );
}
