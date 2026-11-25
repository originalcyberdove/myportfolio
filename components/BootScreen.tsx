"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { bootMessages } from "@/data";

interface BootScreenProps {
  onComplete: () => void;
}

export default function BootScreen({ onComplete }: BootScreenProps) {
  const [visibleMessages, setVisibleMessages] = useState<number>(0);
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<
    "wake" | "logo" | "init" | "ready" | "exit"
  >("wake");

  const skipIntro = useCallback(() => {
    setPhase("exit");
    setTimeout(onComplete, 400);
  }, [onComplete]);

  // Phase sequencing
  useEffect(() => {
    const timers: NodeJS.Timeout[] = [];

    // Phase 1: Screen wake (flicker)
    timers.push(
      setTimeout(() => setPhase("logo"), 600)
    );

    // Phase 2: Logo reveal → init
    timers.push(
      setTimeout(() => setPhase("init"), 1800)
    );

    return () => timers.forEach(clearTimeout);
  }, []);

  // Init messages
  useEffect(() => {
    if (phase !== "init") return;

    let msgIndex = 0;
    const totalMessages = bootMessages.length;

    const showNextMessage = () => {
      if (msgIndex < totalMessages) {
        const delay = bootMessages[msgIndex].delay;
        const timer = setTimeout(() => {
          msgIndex++;
          setVisibleMessages(msgIndex);
          setProgress(Math.round((msgIndex / totalMessages) * 100));
          showNextMessage();
        }, delay);
        return timer;
      } else {
        // All messages shown
        setTimeout(() => setPhase("ready"), 400);
      }
    };

    const timer = showNextMessage();
    return () => {
      if (timer) clearTimeout(timer);
    };
  }, [phase]);

  // Auto-complete after ready
  useEffect(() => {
    if (phase !== "ready") return;
    const timer = setTimeout(() => {
      setPhase("exit");
      setTimeout(onComplete, 600);
    }, 1200);
    return () => clearTimeout(timer);
  }, [phase, onComplete]);

  return (
    <AnimatePresence>
      {phase !== "exit" && (
        <motion.div
          className="fixed inset-0 z-[999] flex flex-col items-center justify-center bg-[#0b0d11] overflow-hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Vignette */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#0b0d11]/80 pointer-events-none" />

          {/* Skip button */}
          <button
            onClick={skipIntro}
            className="absolute top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 text-xs font-mono text-slate-500 hover:text-cyber-cyan border border-slate-800 hover:border-cyber-cyan/30 rounded-full transition-all duration-300 group"
          >
            <span>Skip Intro</span>
            <svg
              className="w-3 h-3 group-hover:translate-x-0.5 transition-transform"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </button>

          <div className="relative z-20 w-full max-w-xl px-6">
            {/* Phase: Wake — screen flicker */}
            <AnimatePresence>
              {phase === "wake" && (
                <motion.div
                  className="absolute inset-0 bg-white/[0.03]"
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: [0, 0.08, 0, 0.04, 0],
                  }}
                  transition={{ duration: 0.5, times: [0, 0.1, 0.3, 0.5, 0.8] }}
                />
              )}
            </AnimatePresence>

            {/* Cyberdove Logo / Brand */}
            <motion.div
              className="text-center mb-12"
              initial={{ opacity: 0, y: 10 }}
              animate={
                phase !== "wake"
                  ? { opacity: 1, y: 0 }
                  : { opacity: 0, y: 10 }
              }
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              {/* Logo mark */}
              <div className="mb-4 flex justify-center">
                <motion.div
                  className="relative"
                  initial={{ scale: 0.8, opacity: 0 }}
                  animate={
                    phase !== "wake"
                      ? { scale: 1, opacity: 1 }
                      : { scale: 0.8, opacity: 0 }
                  }
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {/* Shield/dove icon */}
                  <div className="w-16 h-16 relative">
                    <svg
                      viewBox="0 0 64 64"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                      className="w-full h-full"
                    >
                      {/* Shield outline */}
                      <motion.path
                        d="M32 4L8 16v16c0 14.4 10.24 27.84 24 32 13.76-4.16 24-17.6 24-32V16L32 4z"
                        stroke="url(#shieldGrad)"
                        strokeWidth="1.5"
                        fill="none"
                        initial={{ pathLength: 0 }}
                        animate={{ pathLength: 1 }}
                        transition={{ duration: 1.2, delay: 0.3, ease: "easeInOut" }}
                      />
                      {/* Dove/bird wing shape */}
                      <motion.path
                        d="M22 32c0-2 4-10 10-10s10 8 10 10c0 0-4 6-10 6s-10-6-10-6z"
                        stroke="url(#shieldGrad)"
                        strokeWidth="1"
                        fill="rgba(0, 229, 255, 0.08)"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.6, delay: 1 }}
                      />
                      {/* Inner dot */}
                      <motion.circle
                        cx="32"
                        cy="30"
                        r="3"
                        fill="#00e5ff"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: [0, 1, 0.6, 1] }}
                        transition={{ duration: 1.5, delay: 1.2 }}
                      />
                      <defs>
                        <linearGradient
                          id="shieldGrad"
                          x1="8"
                          y1="4"
                          x2="56"
                          y2="52"
                          gradientUnits="userSpaceOnUse"
                        >
                          <stop stopColor="#00e5ff" />
                          <stop offset="1" stopColor="#38bdf8" />
                        </linearGradient>
                      </defs>
                    </svg>
                  </div>
                </motion.div>
              </div>

              <motion.h1
                className="text-2xl md:text-3xl font-bold tracking-[0.2em] font-mono text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue"
                initial={{ opacity: 0 }}
                animate={phase !== "wake" ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.6, delay: 0.5 }}
              >
                CYBERDOVE
              </motion.h1>
              <motion.div
                className="mt-2 text-xs font-mono text-slate-600 tracking-[0.3em] uppercase"
                initial={{ opacity: 0 }}
                animate={phase !== "wake" ? { opacity: 1 } : { opacity: 0 }}
                transition={{ duration: 0.4, delay: 0.7 }}
              >
                SECURITY SYSTEM
              </motion.div>
              <motion.div
                className="mt-4 mx-auto w-48 h-px bg-gradient-to-r from-transparent via-cyber-cyan/40 to-transparent"
                initial={{ scaleX: 0 }}
                animate={phase !== "wake" ? { scaleX: 1 } : { scaleX: 0 }}
                transition={{ duration: 0.8, delay: 0.6 }}
              />
            </motion.div>

            {/* Init messages */}
            <AnimatePresence>
              {(phase === "init" || phase === "ready") && (
                <motion.div
                  className="space-y-1.5 font-mono text-sm mb-8"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                >
                  {bootMessages.slice(0, visibleMessages).map((msg, i) => (
                    <motion.div
                      key={i}
                      className="flex items-center gap-3"
                      initial={{ opacity: 0, x: -8 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <span className="text-cyber-emerald font-bold text-xs shrink-0">
                        [&nbsp;OK&nbsp;]
                      </span>
                      <span className="text-slate-400 text-xs md:text-sm">
                        {msg.text}
                      </span>
                    </motion.div>
                  ))}

                  {/* Blinking cursor at end */}
                  {visibleMessages < bootMessages.length && (
                    <div className="flex items-center gap-3">
                      <span className="text-cyber-cyan text-xs font-mono animate-blink">
                        ▌
                      </span>
                    </div>
                  )}
                </motion.div>
              )}
            </AnimatePresence>

            {/* Progress bar */}
            <AnimatePresence>
              {(phase === "init" || phase === "ready") && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  className="mb-8"
                >
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-[10px] font-mono text-slate-600 uppercase tracking-wider">
                      System Initialization
                    </span>
                    <span className="text-[10px] font-mono text-cyber-cyan">
                      {progress}%
                    </span>
                  </div>
                  <div className="w-full h-1 bg-slate-800/80 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-cyber-cyan to-cyber-blue rounded-full"
                      initial={{ width: "0%" }}
                      animate={{ width: `${progress}%` }}
                      transition={{ duration: 0.3, ease: "easeOut" }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Ready message */}
            <AnimatePresence>
              {phase === "ready" && (
                <motion.div
                  className="text-center space-y-3"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="text-sm font-mono font-bold text-cyber-cyan tracking-wider">
                    SYSTEM READY.
                  </div>
                  <div className="text-xs font-mono text-slate-500">
                    Welcome, visitor.
                  </div>
                  <div className="text-xs font-mono text-slate-600">
                    Entering Cyberdove&apos;s portfolio...
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
