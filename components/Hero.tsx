"use client";

import { hero } from "@/data";
import SectionReveal from "./ui/SectionReveal";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      <div className="absolute inset-0 hero-gradient" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 md:px-8 py-24 md:py-32">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content */}
          <div className="order-1">
            <SectionReveal delay={0.1}>
              <div className="inline-flex items-center gap-2 px-3 py-1.5 mb-6 text-xs font-mono text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/15 rounded-md">
                <span className="w-1.5 h-1.5 rounded-full bg-cyber-emerald" />
                Available for opportunities
              </div>
            </SectionReveal>

            <SectionReveal delay={0.2}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-[1.1] mb-4">
                <span className="text-white">{hero.fullName}</span>
              </h1>
            </SectionReveal>

            <SectionReveal delay={0.3}>
              <p className="text-lg md:text-xl text-cyber-blue font-medium mb-6 tracking-wide">
                {hero.tagline}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.4}>
              <p className="text-slate-400 text-base md:text-lg leading-relaxed mb-8 max-w-xl">
                {hero.intro}
              </p>
            </SectionReveal>

            <SectionReveal delay={0.5}>
              <div className="flex flex-wrap gap-3">
                <a
                  href="#projects"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#projects")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-cyber-electric rounded-md hover:bg-cyber-blue transition-colors duration-200"
                >
                  Explore My Work
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                  </svg>
                </a>
                <a
                  href="#contact"
                  onClick={(e) => {
                    e.preventDefault();
                    document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-semibold text-slate-200 border border-cyber-border rounded-md hover:border-cyber-cyan/40 hover:text-cyber-cyan transition-colors duration-200"
                >
                  Get in Touch
                </a>
                <a
                  href={hero.cvPath}
                  download
                  className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-400 hover:text-cyber-cyan transition-colors duration-200"
                >
                  <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                  </svg>
                  Download CV
                </a>
              </div>
            </SectionReveal>

            {/* Quick stats */}
            <SectionReveal delay={0.6}>
              <div className="mt-12 flex gap-8 md:gap-12">
                <div>
                  <div className="text-2xl font-bold text-white">40+</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">Learners Trained</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">92%</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">ML Model Accuracy</div>
                </div>
                <div>
                  <div className="text-2xl font-bold text-white">4.61</div>
                  <div className="text-xs text-slate-500 font-mono mt-1">CGPA / 5.00</div>
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Right: profile photo placeholder */}
          <SectionReveal
            delay={0.3}
            direction="right"
            className="order-2 flex justify-center"
          >
            <div className="relative">
              <div className="relative w-72 h-80 md:w-80 md:h-96 rounded-lg overflow-hidden border border-cyber-border bg-[#151a21] shadow-2xl shadow-black/30">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center space-y-4">
                    <div className="w-24 h-24 mx-auto rounded-full bg-cyber-cyan/5 border border-cyber-cyan/20 flex items-center justify-center">
                      <svg className="w-12 h-12 text-cyber-cyan/40" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                      </svg>
                    </div>
                    <p className="text-xs font-mono text-slate-600">
                      Profile photo placeholder
                    </p>
                  </div>
                </div>

                <div className="absolute inset-x-0 bottom-0 h-1 bg-cyber-electric" />
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>

    </section>
  );
}
