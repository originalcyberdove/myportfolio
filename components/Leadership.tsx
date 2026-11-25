"use client";

import { leadership } from "@/data";
import SectionReveal from "./ui/SectionReveal";
import SectionHeading from "./ui/SectionHeading";

export default function Leadership() {
  return (
    <section id="leadership" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <SectionHeading
            label="Leadership"
            title="Leadership & Community"
            description="Coordinating learning, organising events, and building cybersecurity communities."
          />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {leadership.map((role, i) => (
            <SectionReveal key={i} delay={0.15 * (i + 1)}>
              <div className="glass-panel rounded-2xl p-6 md:p-8 h-full relative overflow-hidden group">
                {/* Subtle gradient corner */}
                <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-bl from-cyber-cyan/3 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                <div className="relative">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyber-cyan/5 border border-cyber-cyan/15 flex items-center justify-center">
                      <svg className="w-5 h-5 text-cyber-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                        <path strokeLinecap="round" strokeLinejoin="round" d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-white">{role.role}</h3>
                      {role.org && (
                        <p className="text-xs text-cyber-blue">{role.org}</p>
                      )}
                    </div>
                  </div>

                  <span className="inline-block text-xs font-mono text-slate-500 bg-cyber-navy/60 px-3 py-1 rounded-full border border-cyber-border/50 mb-4">
                    {role.period}
                  </span>

                  <ul className="space-y-2">
                    {role.details.map((detail, j) => (
                      <li key={j} className="flex items-start gap-3 text-sm text-slate-300 leading-relaxed">
                        <span className="w-1 h-1 rounded-full bg-cyber-cyan mt-2 shrink-0" />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
