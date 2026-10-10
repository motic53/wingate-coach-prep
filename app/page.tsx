"use client";

import React, { useState, useRef, useEffect, useCallback } from "react";
import { allQuestions, Question } from "@/data/questions";

// ==========================================
// רכיב זום בצביטה עם 2 אצבעות וגרירה (Pinch-to-Zoom)
// ==========================================
function PinchZoomImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  const initialDistance = useRef<number | null>(null);
  const initialScale = useRef(1);
  const isDragging = useRef(false);
  const dragStart = useRef({ x: 0, y: 0 });
  const lastTouchTime = useRef(0);

  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    initialDistance.current = null;
    isDragging.current = false;
  }, [src]);

  const getPinchDistance = (touches: React.TouchList) => {
    const dx = touches[0].clientX - touches[1].clientX;
    const dy = touches[0].clientY - touches[1].clientY;
    return Math.sqrt(dx * dx + dy * dy);
  };

  const handleTouchStart = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      initialDistance.current = getPinchDistance(e.touches);
      initialScale.current = scale;
      isDragging.current = false;
    } else if (e.touches.length === 1) {
      const now = Date.now();
      if (now - lastTouchTime.current < 300) {
        if (scale > 1) {
          setScale(1);
          setPosition({ x: 0, y: 0 });
        } else {
          setScale(2.5);
        }
      }
      lastTouchTime.current = now;

      if (scale > 1) {
        isDragging.current = true;
        dragStart.current = {
          x: e.touches[0].clientX - position.x,
          y: e.touches[0].clientY - position.y
        };
      }
    }
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && initialDistance.current !== null) {
      const currentDistance = getPinchDistance(e.touches);
      const ratio = currentDistance / initialDistance.current;
      const nextScale = Math.min(Math.max(initialScale.current * ratio, 1), 4.5);
      setScale(nextScale);
      if (nextScale === 1) {
        setPosition({ x: 0, y: 0 });
      }
    } else if (e.touches.length === 1 && isDragging.current && scale > 1) {
      const maxOffset = (scale - 1) * 220;
      const nextX = e.touches[0].clientX - dragStart.current.x;
      const nextY = e.touches[0].clientY - dragStart.current.y;
      setPosition({
        x: Math.max(-maxOffset, Math.min(maxOffset, nextX)),
        y: Math.max(-maxOffset, Math.min(maxOffset, nextY))
      });
    }
  };

  const handleTouchEnd = () => {
    initialDistance.current = null;
    isDragging.current = false;
  };

  const handleWheel = (e: React.WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const zoomFactor = e.deltaY < 0 ? 0.3 : -0.3;
    setScale((prev) => {
      const next = Math.min(Math.max(prev + zoomFactor, 1), 4.5);
      if (next === 1) setPosition({ x: 0, y: 0 });
      return next;
    });
  };

  return (
    <div
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
      onTouchCancel={handleTouchEnd}
      className="relative w-full h-72 sm:h-96 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 select-none touch-none flex items-center justify-center cursor-crosshair"
    >
      <div
        className="w-full h-full relative transition-transform duration-75 flex items-center justify-center pointer-events-none"
        style={{
          transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
          transformOrigin: "center center"
        }}
      >
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-contain pointer-events-none"
          loading="eager"
        />
      </div>

      {scale > 1 && (
        <button
          type="button"
          onClick={() => {
            setScale(1);
            setPosition({ x: 0, y: 0 });
          }}
          className="absolute bottom-3 left-3 bg-slate-900/90 text-xs text-indigo-300 font-bold px-3 py-1.5 rounded-full border border-indigo-500/40 shadow-lg backdrop-blur"
        >
          איפוס זום ({Math.round(scale * 100)}%)
        </button>
      )}

      {scale === 1 && (
        <div className="absolute bottom-2 right-3 pointer-events-none text-[11px] text-slate-400/80 bg-slate-900/70 px-2 py-0.5 rounded backdrop-blur">
          צבוט ב-2 אצבעות להגדלה 🔍
        </div>
      )}
    </div>
  );
}

// ==========================================
// עמוד המבחן הראשי
// ==========================================
export default function QuizPage() {
  const [selectedInst, setSelectedInst] = useState<"all" | "meso" | "wingate">("meso");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [score, setScore] = useState(0);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const filteredQuestions = allQuestions.filter((q) => {
    if (selectedInst === "all") return true;
    return q.institution === selectedInst;
  });

  const currentQ = filteredQuestions[currentIndex] || filteredQuestions[0];

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
      utterance.pitch = 1.0;

      utterance.onstart = () => setIsSpeaking(true);
      utterance.onend = () => setIsSpeaking(false);
      utterance.onerror = () => setIsSpeaking(false);

      window.speechSynthesis.speak(utterance);
    },
    [isSpeaking, stopSpeech]
  );

  const handleSpeakQuestion = () => {
    if (!currentQ) return;
    const optionsText = currentQ.options
      .map((opt, i) => `אפשרות ${i + 1}: ${opt}`)
      .join(". ");
    const fullText = `שאלה: ${currentQ.question}. ${optionsText}`;
    speakText(fullText);
  };

  const handleSpeakExplanation = () => {
    if (!currentQ) return;
    let text = `הסבר מדעי: ${currentQ.explanation}. `;
    if (currentQ.distractorAnalysis) {
      text += `ניתוח מסיחים: ` + currentQ.distractorAnalysis.join(". ");
    }
    speakText(text);
  };

  useEffect(() => {
    stopSpeech();
  }, [currentIndex, selectedInst, stopSpeech]);

  useEffect(() => {
    setCurrentIndex(0);
    setSelectedAnswer(null);
    setIsAnswerSubmitted(false);
    setScore(0);
  }, [selectedInst]);

  const handleSelectOption = (idx: number) => {
    if (isAnswerSubmitted) return;
    setSelectedAnswer(idx);
  };

  const handleSubmit = () => {
    if (selectedAnswer === null || isAnswerSubmitted) return;
    setIsAnswerSubmitted(true);
    if (selectedAnswer === currentQ.correctAnswer) {
      setScore((s) => s + 1);
    }
  };

  const handleNext = () => {
    if (currentIndex < filteredQuestions.length - 1) {
      setCurrentIndex((i) => i + 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((i) => i - 1);
      setSelectedAnswer(null);
      setIsAnswerSubmitted(false);
    }
  };

  const mesoCount = allQuestions.filter((q) => q.institution === "meso").length;
  const wingateCount = allQuestions.filter((q) => q.institution === "wingate").length;

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-3 sm:p-8" dir="rtl">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* כותרת ובחירת מוסד */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              הכנה למבחני מאמני כושר
            </h1>
            <p className="text-sm text-slate-400 mt-1">
              בנק תרגול מלא: מזו אקדמי ({mesoCount}) & וינגייט ({wingateCount}) — סה"כ {allQuestions.length} שאלות
            </p>
          </div>

          <div className="inline-flex rounded-lg bg-slate-900 p-1 border border-slate-800">
            <button
              onClick={() => setSelectedInst("meso")}
              className={`px-4 py-1.5 text-sm font-semibold rounded-md transition ${
                selectedInst === "meso"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              מזו אקדמי ({mesoCount})
            </button>
            <button
              onClick={() => setSelectedInst("wingate")}
              className={`px-4 py-1.5 text-sm font-semibold rounded-md transition ${
                selectedInst === "wingate"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              וינגייט ({wingateCount})
            </button>
            <button
              onClick={() => setSelectedInst("all")}
              className={`px-4 py-1.5 text-sm font-semibold rounded-md transition ${
                selectedInst === "all"
                  ? "bg-indigo-600 text-white shadow"
                  : "text-slate-400 hover:text-white"
              }`}
            >
              הכל ({allQuestions.length})
            </button>
          </div>
        </header>

        {/* סטטוס התקדמות */}
        <div className="flex items-center justify-between text-sm text-slate-400 bg-slate-900/60 p-3 rounded-lg border border-slate-800">
          <span>
            שאלה <strong className="text-white">{currentIndex + 1}</strong> מתוך{" "}
            <strong className="text-white">{filteredQuestions.length}</strong>
          </span>
          <span>
            ציון מצטבר: <strong className="text-emerald-400">{score}</strong>
          </span>
        </div>

        {/* כרטיס שאלה */}
        {currentQ ? (
          <div className="space-y-6 bg-slate-900/40 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-xl">
            {currentQ.image && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 block">
                  תרשים עזר (צביטה עם 2 אצבעות להגדלה וגרירה):
                </span>
                <PinchZoomImage src={currentQ.image} alt={currentQ.question} />
              </div>
            )}

            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg sm:text-xl font-bold leading-relaxed text-slate-100 flex-1">
                {currentQ.question}
              </h2>
              <button
                type="button"
                onClick={handleSpeakQuestion}
                className={`flex-shrink-0 p-2.5 rounded-xl border transition ${
                  isSpeaking
                    ? "bg-rose-950/80 border-rose-500 text-rose-300 animate-pulse"
                    : "bg-slate-800/80 border-slate-700 text-slate-300 hover:bg-slate-700 hover:text-white"
                }`}
                title={isSpeaking ? "עצור הקראה" : "הקרא שאלה ותשובות"}
                aria-label="הקראה קולית"
              >
                {isSpeaking ? "⏹️ עצור" : "🔊 הקרא"}
              </button>
            </div>

            <div className="space-y-3">
              {currentQ.options.map((opt, idx) => {
                let btnStyle = "bg-slate-900 border-slate-700 hover:border-slate-500 text-slate-200";
                
                if (isAnswerSubmitted) {
                  if (idx === currentQ.correctAnswer) {
                    btnStyle = "bg-emerald-950/80 border-emerald-500 text-emerald-200 font-semibold";
                  } else if (idx === selectedAnswer) {
                    btnStyle = "bg-rose-950/80 border-rose-500 text-rose-200";
                  } else {
                    btnStyle = "bg-slate-900/40 border-slate-800 text-slate-500 opacity-60";
                  }
                } else if (selectedAnswer === idx) {
                  btnStyle = "bg-indigo-950/60 border-indigo-500 text-indigo-200 ring-1 ring-indigo-500";
                }

                return (
                  <button
                    key={idx}
                    type="button"
                    disabled={isAnswerSubmitted}
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

            <div className="flex items-center justify-between pt-4 border-t border-slate-800 gap-3">
              <button
                type="button"
                onClick={handlePrev}
                disabled={currentIndex === 0}
                className="px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-sm font-medium transition"
              >
                הקודם
              </button>

              {!isAnswerSubmitted ? (
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={selectedAnswer === null}
                  className="px-6 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-500 disabled:opacity-40 disabled:pointer-events-none text-white font-semibold text-sm transition shadow-lg shadow-indigo-600/20"
                >
                  בדוק תשובה
                </button>
              ) : (
                <button
                  type="button"
                  onClick={handleNext}
                  disabled={currentIndex === filteredQuestions.length - 1}
                  className="px-6 py-2.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 disabled:opacity-30 disabled:pointer-events-none text-white font-semibold text-sm transition shadow-lg shadow-emerald-600/20"
                >
                  לשאלה הבאה
                </button>
              )}

              <button
                type="button"
                onClick={handleNext}
                disabled={currentIndex === filteredQuestions.length - 1}
                className="px-4 py-2.5 rounded-lg border border-slate-700 bg-slate-800 hover:bg-slate-700 disabled:opacity-30 disabled:pointer-events-none text-sm font-medium transition"
              >
                הבא
              </button>
            </div>

            {isAnswerSubmitted && (
              <div className="mt-6 p-5 rounded-xl bg-slate-900 border border-slate-700/80 space-y-4">
                <div className="flex items-center justify-between gap-2">
                  <h3 className="text-sm font-bold text-indigo-400 uppercase tracking-wider">
                    הסבר מדעי:
                  </h3>
                  <button
                    type="button"
                    onClick={handleSpeakExplanation}
                    className="text-xs px-2.5 py-1 rounded bg-slate-800 border border-slate-700 text-slate-300 hover:text-white hover:bg-slate-700 transition"
                  >
                    🔊 הקרא הסבר
                  </button>
                </div>

                <p className="mt-1 text-sm text-slate-300 leading-relaxed">
                  {currentQ.explanation}
                </p>

                {currentQ.distractorAnalysis && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <h4 className="text-xs font-semibold text-slate-400 mb-2">
                      ניתוח ושלילת מסיחים:
                    </h4>
                    <ul className="space-y-1 text-xs text-slate-400 list-disc list-inside">
                      {currentQ.distractorAnalysis.map((item, dIdx) => (
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
          <div className="text-center py-12 text-slate-500">
            לא נמצאו שאלות במוסד זה.
          </div>
        )}
      </div>
    </main>
  );
}
