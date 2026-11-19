"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { allQuestions, Question } from "../data/questions";
import { fitnessIntroQuestions } from "../data/fitnessIntroQuestions";

function shuffleArray<T>(array: T[]): T[] {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

interface ShuffledQuestion extends Question {
  shuffledOptions: string[];
  newCorrectAnswer: number;
  shuffledDistractorAnalysis?: string[];
}

function PinchZoomImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imgKey, setImgKey] = useState(src);
  const [isFailed, setIsFailed] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const initialDistance = useRef<number | null>(null);
  const initialScale = useRef(1);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastTouchTime = useRef(0);

  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setImgKey(`${src}?t=${Date.now()}`);
    setIsFailed(false);
  }, [src]);

  const handleWheel = (e: React.WheelEvent) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 1.2 : 0.8;
    setScale((prev) => {
      const next = Math.min(Math.max(prev * zoomFactor, 1), 4);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    const now = Date.now();
    if (e.touches.length === 1 && now - lastTouchTime.current < 300) {
      if (scale > 1) {
        setScale(1);
        setPosition({ x: 0, y: 0 });
      } else {
        setScale(2.5);
      }
      lastTouchTime.current = 0;
      return;
    }
    lastTouchTime.current = now;

    if (e.touches.length === 2) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      initialDistance.current = dist;
      initialScale.current = scale;
    } else if (e.touches.length === 1 && scale > 1) {
      isDragging.current = true;
      dragStart.current = {
        x: e.touches[0].clientX - position.x,
        y: e.touches[0].clientY - position.y,
      };
    }
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (e.touches.length === 2 && initialDistance.current !== null) {
      const dist = Math.hypot(
        e.touches[0].clientX - e.touches[1].clientX,
        e.touches[0].clientY - e.touches[1].clientY
      );
      const newScale = Math.min(
        Math.max((dist / initialDistance.current) * initialScale.current, 1),
        4
      );
      setScale(newScale);
      if (newScale === 1) setPosition({ x: 0, y: 0 });
    } else if (e.touches.length === 1 && isDragging.current && scale > 1) {
      setPosition({
        x: e.touches[0].clientX - dragStart.current.x,
        y: e.touches[0].clientY - dragStart.current.y,
      });
    }
  };

  const handleTouchEnd = () => {
    initialDistance.current = null;
    isDragging.current = false;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    if (scale <= 1) return;
    isDragging.current = true;
    dragStart.current = {
      x: e.clientX - position.x,
      y: e.clientY - position.y,
    };
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isDragging.current || scale <= 1) return;
    setPosition({
      x: e.clientX - dragStart.current.x,
      y: e.clientY - dragStart.current.y,
    });
  };

  const handleMouseUp = () => {
    isDragging.current = false;
  };

  return (
    <div
      ref={containerRef}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onMouseLeave={handleMouseUp}
      className="relative w-full h-72 sm:h-96 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 flex items-center justify-center select-none touch-none"
      style={{ cursor: scale > 1 ? (isDragging.current ? "grabbing" : "grab") : "zoom-in" }}
    >
      {isFailed ? (
        <div className="text-center p-4">
          <p className="text-rose-400 text-sm mb-2">לא ניתן לטעון את התמונה</p>
          <button
            type="button"
            onClick={() => {
              setIsFailed(false);
              setImgKey(`${src}?retry=${Date.now()}`);
            }}
            className="px-3 py-1 bg-indigo-600 hover:bg-indigo-500 text-white text-xs rounded"
          >
            נסה שוב 🔄
          </button>
        </div>
      ) : (
        <div
          className="w-full h-full flex items-center justify-center pointer-events-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            transformOrigin: "center center",
            transition: isDragging.current ? "none" : "transform 0.1s ease-out",
          }}
        >
          <img
            key={imgKey}
            src={imgKey}
            alt={alt}
            className="w-full h-full object-contain pointer-events-none"
            onError={() => setIsFailed(true)}
          />
        </div>
      )}

      {scale > 1 && (
        <button
          type="button"
          onClick={() => {
            setScale(1);
            setPosition({ x: 0, y: 0 });
          }}
          className="absolute bottom-3 left-3 bg-slate-900/90 text-xs text-indigo-300 font-bold px-3 py-1.5 rounded-full border border-indigo-500/40 shadow-lg backdrop-blur z-20 hover:bg-slate-800"
        >
          איפוס זום ({Math.round(scale * 100)}%) ✖
        </button>
      )}
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState<"practice" | "exam" | "final_anatomy" | "final_fitness">("practice");
  const [selectedInst, setSelectedInst] = useState<"all" | "meso" | "wingate" | "exam_prep" | "final_sim" | "fitness_intro">("fitness_intro");

  const [questionsList, setQuestionsList] = useState<ShuffledQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [examTimeLeft, setExamTimeLeft] = useState(40 * 60);
  const [examFinished, setExamFinished] = useState(false);

  const explanationRef = useRef<HTMLDivElement | null>(null);

  const counts = useMemo(() => {
    const fitnessIntroCount = fitnessIntroQuestions.length;
    const finalSimCount = allQuestions.filter((q) => q.id.startsWith("final-sim-")).length;
    const examPrepCount = allQuestions.filter((q) => q.isExamPrep && !q.id.startsWith("final-sim-")).length;
    const mesoCount = allQuestions.filter((q) => q.institution === "meso" && !q.isExamPrep).length;
    const wingateCount = allQuestions.filter((q) => q.institution === "wingate").length;
    return {
      fitnessIntro: fitnessIntroCount,
      finalSim: finalSimCount,
      examPrep: examPrepCount,
      meso: mesoCount,
      wingate: wingateCount,
      total: allQuestions.length + fitnessIntroCount,
    };
  }, []);

  const initQuestions = useCallback(() => {
    let base: Question[] = [];

    if (mode === "final_fitness") {
      // מבחן אמת מסכם: מבוא לכושר גופני - 30 שאלות רנדומליות מתוך 40 שאלות המיקוד
      base = shuffleArray(fitnessIntroQuestions).slice(0, 30);
    } else if (mode === "final_anatomy") {
      // מבחן אמת מסכם באנטומיה: 25 שאלות המיקוד
      base = shuffleArray(allQuestions.filter((q) => q.id.startsWith("final-sim-"))).slice(0, 25);
    } else if (mode === "exam") {
      base = shuffleArray([...allQuestions, ...fitnessIntroQuestions]).slice(0, 30);
    } else {
      if (selectedInst === "fitness_intro") {
        base = shuffleArray(fitnessIntroQuestions);
      } else {
        base = allQuestions.filter((q) => {
          if (selectedInst === "final_sim") return q.id.startsWith("final-sim-");
          if (selectedInst === "exam_prep") return q.isExamPrep && !q.id.startsWith("final-sim-");
          if (selectedInst === "meso") return q.institution === "meso" && !q.isExamPrep;
          if (selectedInst === "wingate") return q.institution === "wingate";
          return true;
        });
        if (selectedInst === "all") {
          base = [...base, ...fitnessIntroQuestions];
        }
        base = shuffleArray(base);
      }
    }

    // ערבוב כפול: גם סדר השאלות וגם סדר 4 האפשרויות בכל שאלה (תוך סנכרון מלא של ניתוח המסיחים)
    const prepared: ShuffledQuestion[] = base.map((q) => {
      const indexedOptions = q.options.map((optText, idx) => ({
        text: optText,
        isCorrect: idx === q.correctAnswer,
        analysis: q.distractorAnalysis ? q.distractorAnalysis[idx] : undefined,
      }));

      const shuffledItems = shuffleArray(indexedOptions);
      const newIndex = shuffledItems.findIndex((item) => item.isCorrect);

      return {
        ...q,
        shuffledOptions: shuffledItems.map((item) => item.text),
        newCorrectAnswer: newIndex,
        shuffledDistractorAnalysis: q.distractorAnalysis
          ? shuffledItems.map((item) => item.analysis || "")
          : undefined,
      };
    });

    setQuestionsList(prepared);
    setCurrentIndex(0);
    setUserAnswers(new Array(prepared.length).fill(null));
    setIsAnswerSubmitted(false);
    setExamFinished(false);
    setExamTimeLeft(mode === "final_anatomy" ? 35 * 60 : 45 * 60);
  }, [mode, selectedInst]);

  useEffect(() => {
    initQuestions();
  }, [initQuestions]);

  const isTimedExam = mode === "exam" || mode === "final_anatomy" || mode === "final_fitness";

  useEffect(() => {
    if (!isTimedExam || examFinished) return;

    const timer = setInterval(() => {
      setExamTimeLeft((prev) => {
        if (prev <= 1) {
          clearInterval(timer);
          setExamFinished(true);
          return 0;
        }
        return prev - 1;
      });
    }, 1000);

    return () => clearInterval(timer);
  }, [isTimedExam, examFinished]);

  const currentQ = questionsList[currentIndex];

  const stopSpeech = useCallback(() => {
    if (typeof window !== "undefined" && "speechSynthesis" in window) {
      window.speechSynthesis.cancel();
      setIsSpeaking(false);
    }
  }, []);

  const speakText = useCallback(
    (textToRead: string) => {
      if (typeof window === "undefined" || !("speechSynthesis" in window)) {
        alert("הדפדפן אינו תומך בהקראה קולית.");
        return;
      }
      if (isSpeaking) {
        stopSpeech();
        return;
      }
      window.speechSynthesis.cancel();
      const utterance = new SpeechSynthesisUtterance(textToRead);
      utterance.lang = "he-IL";
      utterance.rate = 0.95;
      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);
      window.speechSynthesis.speak(utterance);
    },
    [isSpeaking, stopSpeech]
  );

  const handleSpeakQuestion = () => {
    if (!currentQ) return;
    const opts = currentQ.shuffledOptions.map((opt, i) => `אפשרות ${i + 1}: ${opt}`).join(". ");
    speakText(`שאלה: ${currentQ.question}. ${opts}`);
  };

  const handleSpeakExplanation = () => {
    if (!currentQ) return;
    let text = `הסבר מדעי: ${currentQ.explanation}. `;
    if (currentQ.shuffledDistractorAnalysis) {
      text += `ניתוח מסיחים ותשובות שגויות: ` + currentQ.shuffledDistractorAnalysis.join(". ");
    }
    speakText(text);
  };

  const handleSelectOption = (idx: number) => {
    if (mode === "practice" && isAnswerSubmitted) return;
    const nextAnswers = [...userAnswers];
    nextAnswers[currentIndex] = idx;
    setUserAnswers(nextAnswers);
  };

  const handlePracticeSubmit = () => {
    if (userAnswers[currentIndex] === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    setTimeout(() => {
      if (explanationRef.current) {
        explanationRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }, 100);
  };

  const handleNext = () => {
    if (currentIndex < questionsList.length - 1) {
      setCurrentIndex((i) => i + 1);
      setIsAnswerSubmitted(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setIsAnswerSubmitted(false);
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const examScore = useMemo(() => {
    if (!questionsList.length) return 0;
    let correct = 0;
    questionsList.forEach((q, idx) => {
      if (userAnswers[idx] === q.newCorrectAnswer) correct++;
    });
    return Math.round((correct / questionsList.length) * 100);
  }, [questionsList, userAnswers]);

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs < 10 ? "0" : ""}${secs}`;
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-3 sm:p-8 font-['Heebo']" dir="rtl">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* כותרת ומעבר מצבים */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              סימולטור הכנה למבחני מאמני כושר
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              סה"כ במאגר: {counts.total} שאלות | מבוא לכושר: {counts.fitnessIntro} | אנטומיה: {counts.finalSim} | מזו: {counts.meso} | וינגייט: {counts.wingate}
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setMode("practice")}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-lg border transition ${
                mode === "practice"
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-lg"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              📖 תרגול לימודי
            </button>

            <button
              onClick={() => {
                if (mode === "final_fitness") {
                  initQuestions();
                } else {
                  setMode("final_fitness");
                }
              }}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-lg border transition ${
                mode === "final_fitness"
                  ? "bg-sky-600 border-sky-400 text-white shadow-lg shadow-sky-900/40"
                  : "bg-slate-900 border-sky-500/40 text-sky-400 hover:bg-slate-800"
              }`}
            >
              🏃 מבחן מבוא לכושר (30 שאלות)
            </button>

            <button
              onClick={() => {
                if (mode === "final_anatomy") {
                  initQuestions();
                } else {
                  setMode("final_anatomy");
                }
              }}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-lg border transition ${
                mode === "final_anatomy"
                  ? "bg-emerald-600 border-emerald-400 text-white shadow-lg shadow-emerald-900/40"
                  : "bg-slate-900 border-emerald-500/40 text-emerald-400 hover:bg-slate-800"
              }`}
            >
              🎯 מבחן אנטומיה ({counts.finalSim} שאלות)
            </button>

            <button
              onClick={() => {
                if (mode === "exam") {
                  initQuestions();
                } else {
                  setMode("exam");
                }
              }}
              className={`px-3.5 py-2 text-xs sm:text-sm font-bold rounded-lg border transition ${
                mode === "exam"
                  ? "bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-900/40"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              ⏱️ מבחן כללי (30)
            </button>
          </div>
        </header>

        {/* לשוניות בחירה במצב תרגול */}
        {mode === "practice" && (
          <div className="flex flex-wrap justify-center gap-2">
            <button
              onClick={() => setSelectedInst("fitness_intro")}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition flex items-center gap-1.5 ${
                selectedInst === "fitness_intro"
                  ? "bg-sky-500 border-sky-400 text-slate-950 shadow-lg shadow-sky-500/20"
                  : "bg-slate-900 border-sky-500/40 text-sky-400 hover:bg-slate-800"
              }`}
            >
              <span>🏃 מיקוד מבוא לכושר גופני</span>
              <span>({counts.fitnessIntro})</span>
            </button>

            <button
              onClick={() => setSelectedInst("final_sim")}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition flex items-center gap-1.5 ${
                selectedInst === "final_sim"
                  ? "bg-emerald-500 border-emerald-400 text-slate-950 shadow-lg shadow-emerald-500/20"
                  : "bg-slate-900 border-emerald-500/40 text-emerald-400 hover:bg-slate-800"
              }`}
            >
              <span>🎯 מיקוד אנטומיה</span>
              <span>({counts.finalSim})</span>
            </button>

            <button
              onClick={() => setSelectedInst("exam_prep")}
              className={`px-4 py-1.5 text-xs font-bold rounded-lg border transition flex items-center gap-1.5 ${
                selectedInst === "exam_prep"
                  ? "bg-amber-500 border-amber-400 text-slate-950 shadow-lg shadow-amber-500/20"
                  : "bg-slate-900 border-amber-500/40 text-amber-400 hover:bg-slate-800"
              }`}
            >
              <span>⚡ מבדק 3/11</span>
              <span>({counts.examPrep})</span>
            </button>

            <button
              onClick={() => setSelectedInst("meso")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition ${
                selectedInst === "meso"
                  ? "bg-indigo-900/70 border-indigo-500 text-indigo-100 shadow"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              מזו אקדמי ({counts.meso})
            </button>

            <button
              onClick={() => setSelectedInst("wingate")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition ${
                selectedInst === "wingate"
                  ? "bg-indigo-900/70 border-indigo-500 text-indigo-100 shadow"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              וינגייט ({counts.wingate})
            </button>

            <button
              onClick={() => setSelectedInst("all")}
              className={`px-3.5 py-1.5 text-xs font-semibold rounded-lg border transition ${
                selectedInst === "all"
                  ? "bg-indigo-900/70 border-indigo-500 text-indigo-100 shadow"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              הכל משולב ({counts.total})
            </button>
          </div>
        )}

        {/* סרגל עליון של מבחן אמת */}
        {isTimedExam && !examFinished && (
          <div className="flex items-center justify-between p-4 bg-slate-900 border border-rose-500/40 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-xl">⏱️</span>
              <div>
                <div className="text-xs text-slate-400">
                  {mode === "final_fitness"
                    ? "מבחן מסכם מבוא לכושר גופני (30 שאלות רנדומליות מתוך 40):"
                    : mode === "final_anatomy"
                    ? "מבחן מסכם אנטומיה (25 שאלות מעורבבות):"
                    : "זמן שנותר לבחינה:"}
                </div>
                <div className={`text-lg font-mono font-bold ${examTimeLeft < 300 ? "text-rose-400 animate-ping" : "text-amber-400"}`}>
                  {formatTime(examTimeLeft)}
                </div>
              </div>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => initQuestions()}
                className="px-3 py-2 text-xs font-bold rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700"
              >
                ערבב מחדש 🔄
              </button>
              <button
                onClick={() => setExamFinished(true)}
                className="px-4 py-2 text-xs font-bold rounded-lg bg-rose-600 hover:bg-rose-500 text-white"
              >
                סיים והגש מבחן
              </button>
            </div>
          </div>
        )}

        {/* מסך סיכום מבחן אמת */}
        {isTimedExam && examFinished ? (
          <div className="p-6 bg-slate-900 border border-indigo-500/40 rounded-2xl space-y-6">
            <div className="text-center space-y-2">
              <span className="text-5xl">{examScore >= 70 ? "🏆" : "⚠️"}</span>
              <h2 className="text-2xl font-bold">
                {examScore >= 70 ? "עברת את מבחן האמת בהצלחה!" : "לא עברת. נדרש תרגול נוסף."}
              </h2>
              <div className="text-4xl font-black font-mono text-indigo-400">
                ציון סופי: {examScore}%
              </div>
              <p className="text-sm text-slate-400">ציון עובר: 70% ומעלה</p>
            </div>

            <div className="border-t border-slate-800 pt-4 space-y-4">
              <h3 className="font-bold text-slate-300">סקירת תשובות, מסיחים והסברים מדעיים:</h3>
              {questionsList.map((q, idx) => {
                const userChoice = userAnswers[idx];
                const isCorrect = userChoice === q.newCorrectAnswer;
                return (
                  <div key={idx} className={`p-4 rounded-xl border ${isCorrect ? "bg-emerald-950/20 border-emerald-900" : "bg-rose-950/20 border-rose-900"} space-y-3`}>
                    <div className="flex justify-between font-semibold text-sm">
                      <span className={q.isExamPrep ? "text-amber-400" : ""}>
                        {q.isExamPrep && "⚡ "}שאלה {idx + 1}: {q.question}
                      </span>
                      <span>{isCorrect ? "✅ נכון" : "❌ שגוי"}</span>
                    </div>
                    <div className="text-xs text-slate-400">
                      תשובתך: {userChoice !== null ? q.shuffledOptions[userChoice] : "לא סומן"}
                    </div>
                    {!isCorrect && (
                      <div className="text-xs text-emerald-400">
                        תשובה נכונה: {q.shuffledOptions[q.newCorrectAnswer]}
                      </div>
                    )}
                    <div className="text-xs text-slate-300 bg-slate-900/80 p-2.5 rounded-lg border border-slate-800">
                      💡 <strong>הסבר מדעי:</strong> {q.explanation}
                    </div>

                    {q.shuffledDistractorAnalysis && (
                      <div className="text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 space-y-1">
                        <strong className="text-indigo-300 block mb-1">ניתוח ושלילת התשובות השגויות:</strong>
                        {q.shuffledDistractorAnalysis.map((dist, dIdx) => (
                          <div key={dIdx}>• {dist}</div>
                        ))}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>

            <button
              onClick={() => initQuestions()}
              className="w-full py-3 bg-indigo-600 hover:bg-indigo-500 text-white font-bold rounded-xl"
            >
              התחל מבחן אמת חדש ומעורבב 🔄
            </button>
          </div>
        ) : currentQ ? (
          /* כרטיס השאלה */
          <div className="space-y-6 bg-slate-900/40 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-xl">
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
              <span>
                שאלה <strong className="text-indigo-400 font-mono text-sm">{currentIndex + 1}</strong> מתוך <strong className="font-mono text-sm">{questionsList.length}</strong>
              </span>
              <div className="flex items-center gap-1.5">
                {currentQ.id.startsWith("fit-intro-") && (
                  <span className="px-2 py-0.5 rounded bg-sky-500/20 text-sky-300 border border-sky-500/40 font-bold">
                    🏃 מבוא לכושר גופני
                  </span>
                )}
                {currentQ.id.startsWith("final-sim-") && (
                  <span className="px-2 py-0.5 rounded bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 font-bold">
                    🎯 מיקוד אנטומיה
                  </span>
                )}
                {currentQ.isExamPrep && !currentQ.id.startsWith("final-sim-") && !currentQ.id.startsWith("fit-intro-") && (
                  <span className="px-2 py-0.5 rounded bg-amber-500/20 text-amber-300 border border-amber-500/40 font-bold">
                    ⚡ שאלת מבדק
                  </span>
                )}
                <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                  {currentQ.institution === "meso" ? "מזו אקדמי" : "וינגייט"}
                </span>
              </div>
            </div>

            {currentQ.image && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 block">
                  תרשים עזר (צביטה עם 2 אצבעות או גלגלת עכבר להגדלה):
                </span>
                <PinchZoomImage src={currentQ.image} alt={currentQ.question} />
              </div>
            )}

            <div className="flex items-start justify-between gap-3">
              <h2 className={`text-lg sm:text-xl font-bold leading-relaxed flex-1 ${
                currentQ.id.startsWith("fit-intro-")
                  ? "text-sky-300"
                  : currentQ.id.startsWith("final-sim-")
                  ? "text-emerald-300"
                  : currentQ.isExamPrep
                  ? "text-amber-400"
                  : "text-slate-100"
              }`}>
                {currentQ.isExamPrep && <span className="text-amber-500 font-black ml-2">⚡</span>}
                {currentQ.question}
              </h2>
              <button
                type="button"
                onClick={handleSpeakQuestion}
                className="flex-shrink-0 p-2.5 rounded-xl border border-slate-700 bg-slate-800 text-slate-300 hover:text-white"
                title="הקרא שאלה"
              >
                {isSpeaking ? "⏹️" : "🔊"}
              </button>
            </div>

            {/* אפשרויות תשובה (מעורבבות בכל פתיחה) */}
            <div className="space-y-3">
              {currentQ.shuffledOptions.map((opt, idx) => {
                const isSelected = userAnswers[currentIndex] === idx;
                let btnStyle = "bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-200";

                if (mode === "practice" && isAnswerSubmitted) {
                  if (idx === currentQ.newCorrectAnswer) {
                    btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold ring-1 ring-emerald-500";
                  } else if (isSelected) {
                    btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200 ring-1 ring-rose-500";
                  } else {
                    btnStyle = "bg-slate-900/40 border-slate-800 text-slate-500 opacity-60";
                  }
                } else if (isSelected) {
                  btnStyle = "bg-indigo-950/60 border-indigo-500 text-indigo-200 ring-1 ring-indigo-500";
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    onClick={() => handleSelectOption(idx)}
                    className={`w-full text-right p-4 rounded-xl border text-sm sm:text-base transition flex items-center justify-between ${btnStyle}`}
                  >
                    <span>{opt}</span>
                    <span className="text-xs px-2.5 py-1 rounded bg-slate-800/80 text-slate-400 font-mono">
                      {idx + 1}
                    </span>
                  </button>
                );
              })}
            </div>

            {/* לחצני ניווט ובדיקה */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-800 gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 disabled:opacity-30 text-sm font-medium"
              >
                הקודם
              </button>

              {mode === "practice" && !isAnswerSubmitted ? (
                <button
                  type="button"
                  onClick={handlePracticeSubmit}
                  disabled={userAnswers[currentIndex] === null}
                  className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 text-white font-semibold text-sm shadow-lg"
                >
                  בדוק תשובה
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex === questionsList.length - 1}
                  className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 text-white font-semibold text-sm"
                >
                  לשאלה הבאה ⬅️
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === questionsList.length - 1}
                className="px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 disabled:opacity-30 text-sm font-medium"
              >
                הבא
              </button>
            </div>

            {/* בלוק הסבר במצב תרגול */}
            {mode === "practice" && isAnswerSubmitted && (
              <div
                ref={explanationRef}
                className="mt-6 p-5 rounded-xl bg-slate-900 border border-indigo-500/50 shadow-2xl space-y-4 scroll-mt-6"
              >
                <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                  <div className="flex items-center gap-2">
                    <span>{userAnswers[currentIndex] === currentQ.newCorrectAnswer ? "✅" : "❌"}</span>
                    <h3 className="text-base font-bold text-indigo-300">
                      {userAnswers[currentIndex] === currentQ.newCorrectAnswer ? "תשובה נכונה!" : "תשובה שגויה. להלן ההסבר המדעי:"}
                    </h3>
                  </div>
                  <button
                    type="button"
                    onClick={handleSpeakExplanation}
                    className="text-xs px-3 py-1.5 rounded-lg bg-slate-800 text-slate-300 hover:text-white"
                  >
                    🔊 הקרא הסבר
                  </button>
                </div>
                
                <p className="text-sm text-slate-200 leading-relaxed">
                  {currentQ.explanation}
                </p>

                {currentQ.shuffledDistractorAnalysis && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <h4 className="text-xs font-bold text-indigo-300 mb-2">
                      מדוע שאר התשובות שגויות? (ניתוח מסיחים):
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
                      {currentQ.shuffledDistractorAnalysis.map((item, dIdx) => (
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
          <div className="text-center p-8 bg-slate-900 rounded-xl border border-slate-800 text-slate-400">
            לא נמצאו שאלות בקטגוריה זו.
          </div>
        )}
      </div>
    </main>
  );
}
