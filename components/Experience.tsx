"use client";

import { experiences } from "@/data";
import SectionReveal from "./ui/SectionReveal";
import SectionHeading from "./ui/SectionHeading";

export default function Experience() {
  return (
    <section id="experience" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-navy/15 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <SectionHeading
            label="Experience"
            title="Professional Experience"
            description="Teaching, security operations, and hands-on cybersecurity work."
          />
        </SectionReveal>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] md:left-[23px] top-0 bottom-0 w-px bg-gradient-to-b from-cyber-cyan/30 via-cyber-border to-transparent hidden sm:block" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <SectionReveal key={i} delay={0.15 * (i + 1)}>
                <div className="flex gap-6 sm:gap-8">
                  {/* Timeline dot */}
                  <div className="hidden sm:flex flex-col items-center pt-1.5">
                    <div className="w-3 h-3 rounded-full bg-cyber-dark border-2 border-cyber-cyan relative z-10">
                      <div className="absolute inset-0 rounded-full bg-cyber-cyan/20 animate-pulse" />
                    </div>
                  </div>

                  {/* Card */}
                  <div className="flex-1 glass-panel rounded-2xl p-6 md:p-8">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-white">
                          {exp.role}
                        </h3>
                        <p className="text-sm text-cyber-blue mt-0.5">
                          {exp.company} — {exp.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-mono text-slate-500 bg-cyber-navy/60 px-3 py-1 rounded-full border border-cyber-border/50">
                          {exp.period}
                        </span>
                        {exp.type && (
                          <span className="text-[10px] font-mono text-cyber-emerald bg-cyber-emerald/5 px-2 py-0.5 rounded-full border border-cyber-emerald/15">
                            {exp.type}
                          </span>
                        )}
                      </div>
                    </div>

                    <ul className="space-y-2.5">
                      {exp.responsibilities.map((resp, j) => (
                        <li key={j} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-cyber-cyan mt-2 shrink-0" />
                          {resp}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </SectionReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
