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
      if (nextScale === 1) setPosition({ x: 0, y: 0 });
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

  return (
    <div
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
          key={src}
          src={src}
          alt={alt}
          className="w-full h-full object-contain pointer-events-none"
          loading="eager"
          decoding="async"
          onError={(e) => {
            const target = e.currentTarget;
            if (!target.src.includes("?retry=")) {
              target.src = `${src}?retry=${Date.now()}`;
            }
          }}
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

  // טעינה מוקדמת ברקע של כל התמו
