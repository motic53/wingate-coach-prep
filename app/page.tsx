"use client";

import React, { useState, useRef, useEffect, useCallback, useMemo } from "react";
import { allQuestions, Question } from "../data/questions";

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
}

function PinchZoomImage({ src, alt }: { src: string; alt: string }) {
  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [imgKey, setImgKey] = useState(src);
  const [isFailed, setIsFailed] = useState(false);

  useEffect(() => {
    setScale(1);
    setPosition({ x: 0, y: 0 });
    setImgKey(`${src}?t=${Date.now()}`);
    setIsFailed(false);
  }, [src]);

  return (
    <div className="relative w-full h-72 sm:h-96 overflow-hidden rounded-xl border border-slate-700 bg-slate-950 flex items-center justify-center select-none touch-none">
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
        <img
          key={imgKey}
          src={imgKey}
          alt={alt}
          className="w-full h-full object-contain pointer-events-none"
          onError={() => setIsFailed(true)}
        />
      )}
    </div>
  );
}

export default function App() {
  const [mode, setMode] = useState<"practice" | "exam">("practice");
  const [selectedInst, setSelectedInst] = useState<"all" | "meso" | "wingate">("meso");

  const [questionsList, setQuestionsList] = useState<ShuffledQuestion[]>([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [userAnswers, setUserAnswers] = useState<(number | null)[]>([]);
  const [isAnswerSubmitted, setIsAnswerSubmitted] = useState(false);
  const [isSpeaking, setIsSpeaking] = useState(false);

  const [examTimeLeft, setExamTimeLeft] = useState(45 * 60);
  const [examFinished, setExamFinished] = useState(false);

  const explanationRef = useRef<HTMLDivElement | null>(null);

  // ספירת כמויות השאלות לכל מוסד ולסך הכל
  const counts = useMemo(() => {
    const mesoCount = allQuestions.filter((q) => q.institution === "meso").length;
    const wingateCount = allQuestions.filter((q) => q.institution === "wingate").length;
    return {
      meso: mesoCount,
      wingate: wingateCount,
      total: allQuestions.length
    };
  }, []);

  const initQuestions = useCallback(() => {
    let base = allQuestions.filter((q) => {
      if (selectedInst === "all") return true;
      return q.institution === selectedInst;
    });

    if (mode === "exam") {
      base = shuffleArray(base).slice(0, 30);
    } else {
      base = shuffleArray(base);
    }

    const prepared: ShuffledQuestion[] = base.map((q) => {
      const correctText = q.options[q.correctAnswer];
      const shuffled = shuffleArray(q.options);
      const newIndex = shuffled.indexOf(correctText);
      return {
        ...q,
        shuffledOptions: shuffled,
        newCorrectAnswer: newIndex
      };
    });

    setQuestionsList(prepared);
    setCurrentIndex(0);
    setUserAnswers(new Array(prepared.length).fill(null));
    setIsAnswerSubmitted(false);
    setExamFinished(false);
    setExamTimeLeft(45 * 60);
  }, [mode, selectedInst]);

  useEffect(() => {
    initQuestions();
  }, [initQuestions]);

  // טיימר לבחינה
  useEffect(() => {
    if (mode !== "exam" || examFinished) return;

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
  }, [mode, examFinished]);

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
    if (currentQ.distractorAnalysis) {
      text += `ניתוח מסיחים ותשובות שגויות: ` + currentQ.distractorAnalysis.join(". ");
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
    <main className="min-h-screen bg-slate-950 text-slate-100 flex flex-col items-center p-3 sm:p-8" dir="rtl">
      <div className="w-full max-w-4xl space-y-6">
        
        {/* כותרת ומעבר מצבים */}
        <header className="flex flex-col sm:flex-row items-center justify-between gap-4 pb-4 border-b border-slate-800">
          <div>
            <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              סימולטור הכנה למבחני מאמני כושר
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              סה"כ במאגר: {counts.total} שאלות (מזו: {counts.meso} | וינגייט: {counts.wingate})
            </p>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => { setMode("practice"); }}
              className={`px-4 py-2 text-sm font-bold rounded-lg border transition ${
                mode === "practice"
                  ? "bg-indigo-600 border-indigo-500 text-white shadow-lg"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              📖 תרגול לימודי
            </button>
            <button
              onClick={() => { setMode("exam"); }}
              className={`px-4 py-2 text-sm font-bold rounded-lg border transition ${
                mode === "exam"
                  ? "bg-rose-600 border-rose-500 text-white shadow-lg shadow-rose-900/40 animate-pulse"
                  : "bg-slate-900 border-slate-800 text-slate-400 hover:text-white"
              }`}
            >
              ⏱️ מבחן אמת (30 שאלות)
            </button>
          </div>
        </header>

        {/* בחירת מוסד במצב תרגול עם כמויות */}
        {mode === "practice" && (
          <div className="flex flex-wrap justify-center gap-2">
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
        {mode === "exam" && !examFinished && (
          <div className="flex items-center justify-between p-4 bg-slate-900 border border-rose-500/40 rounded-xl">
            <div className="flex items-center gap-2">
              <span className="text-xl">⏱️</span>
              <div>
                <div className="text-xs text-slate-400">זמן שנותר לבחינה:</div>
                <div className={`text-lg font-mono font-bold ${examTimeLeft < 300 ? "text-rose-400 animate-ping" : "text-amber-400"}`}>
                  {formatTime(examTimeLeft)}
                </div>
              </div>
            </div>
            <button
              onClick={() => setExamFinished(true)}
              className="px-4 py-2 text-xs font-bold rounded-lg bg-rose-600 hover:bg-rose-500 text-white"
            >
              סיים והגש מבחן
            </button>
          </div>
        )}

        {/* מסך סיכום מבחן אמת */}
        {mode === "exam" && examFinished ? (
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
                      <span>שאלה {idx + 1}: {q.question}</span>
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

                    {q.distractorAnalysis && (
                      <div className="text-xs text-slate-400 bg-slate-950/60 p-2.5 rounded-lg border border-slate-800/80 space-y-1">
                        <strong className="text-indigo-300 block mb-1">ניתוח ושלילת התשובות השגויות:</strong>
                        {q.distractorAnalysis.map((dist, dIdx) => (
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
              התחל מבחן אמת חדש 🔄
            </button>
          </div>
        ) : currentQ ? (
          /* כרטיס השאלה הרגיל */
          <div className="space-y-6 bg-slate-900/40 p-5 sm:p-6 rounded-2xl border border-slate-800 shadow-xl">
            {/* מונה שאלה מתוך סך הכל ומוסד */}
            <div className="flex items-center justify-between text-xs text-slate-400 pb-2 border-b border-slate-800/80">
              <span>
                שאלה <strong className="text-indigo-400 font-mono text-sm">{currentIndex + 1}</strong> מתוך <strong className="font-mono text-sm">{questionsList.length}</strong>
              </span>
              <span className="px-2.5 py-0.5 rounded bg-slate-800 text-slate-300 font-medium">
                {currentQ.institution === "meso" ? "מזו אקדמי" : "וינגייט"}
              </span>
            </div>

            {currentQ.image && (
              <div className="space-y-2">
                <span className="text-xs font-semibold text-slate-400 block">
                  תרשים עזר (צביטה עם 2 אצבעות להגדלה):
                </span>
                <PinchZoomImage src={currentQ.image} alt={currentQ.question} />
              </div>
            )}

            <div className="flex items-start justify-between gap-3">
              <h2 className={`text-lg sm:text-xl font-bold leading-relaxed flex-1 ${
  currentQ.isExamPrep ? "text-amber-400" : "text-slate-100"
}`}>
  {currentQ.isExamPrep && <span className="text-amber-500 font-extrabold ml-2">⚡ [מבדק 3/11]</span>}
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

            {/* אפשרויות שעברו ערבוב אקראי */}
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

                {currentQ.distractorAnalysis && (
                  <div className="pt-3 border-t border-slate-800/80">
                    <h4 className="text-xs font-bold text-indigo-300 mb-2">
                      מדוע שאר התשובות שגויות? (ניתוח מסיחים):
                    </h4>
                    <ul className="space-y-1.5 text-xs text-slate-400 list-disc list-inside">
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
        ) : null}
      </div>
    </main>
  );
}
