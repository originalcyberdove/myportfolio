"use client";

import { about } from "@/data";
import SectionReveal from "./ui/SectionReveal";
import SectionHeading from "./ui/SectionHeading";

export default function About() {
  return (
    <section id="about" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <SectionHeading
            label="About Me"
            title="Who I Am"
            description="A cybersecurity professional driven by curiosity about how systems work, how they break, and how to defend them."
          />
        </SectionReveal>

        <div className="grid lg:grid-cols-5 gap-10 lg:gap-16">
          {/* Story text */}
          <div className="lg:col-span-3 space-y-6">
            {about.paragraphs.map((p, i) => (
              <SectionReveal key={i} delay={0.1 * (i + 1)}>
                <p className="text-slate-300 text-base md:text-lg leading-relaxed">
                  {p}
                </p>
              </SectionReveal>
            ))}

            {/* Interests */}
            <SectionReveal delay={0.3}>
              <div className="mt-8">
                <h3 className="text-sm font-mono font-semibold text-cyber-cyan tracking-wider uppercase mb-4">
                  Areas of Interest
                </h3>
                <div className="grid sm:grid-cols-2 gap-2">
                  {about.interests.map((interest, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 px-4 py-2.5 rounded-lg bg-cyber-navy/30 border border-transparent hover:border-cyber-border transition-colors duration-200"
                    >
                      <span className="w-1 h-1 rounded-full bg-cyber-cyan shrink-0" />
                      <span className="text-sm text-slate-300">{interest}</span>
                    </div>
                  ))}
                </div>
              </div>
            </SectionReveal>
          </div>

          {/* Education card */}
          <SectionReveal delay={0.2} direction="right" className="lg:col-span-2">
            <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden">
              {/* Subtle accent corner */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-bl from-cyber-cyan/5 to-transparent rounded-bl-full" />

              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-cyber-cyan/10 border border-cyber-cyan/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-cyber-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-white">Education</h3>
                    <p className="text-xs text-slate-500 font-mono">Academic Background</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <div>
                    <p className="text-base font-semibold text-white">
                      {about.education.degree}
                    </p>
                    <p className="text-sm text-cyber-blue mt-0.5">
                      {about.education.institution}, {about.education.location}
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3">
                    <div className="p-3 rounded-xl bg-cyber-darkest/50 border border-cyber-border/50">
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                        Period
                      </p>
                      <p className="text-sm font-semibold text-white">
                        {about.education.period}
                      </p>
                    </div>
                    <div className="p-3 rounded-xl bg-cyber-darkest/50 border border-cyber-border/50">
                      <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                        CGPA
                      </p>
                      <p className="text-sm font-semibold text-cyber-cyan">
                        {about.education.cgpa}
                      </p>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-gradient-to-r from-cyber-cyan/5 to-cyber-blue/5 border border-cyber-cyan/15">
                    <p className="text-[10px] font-mono text-slate-500 uppercase tracking-wider mb-1">
                      Classification
                    </p>
                    <p className="text-base font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyber-cyan to-cyber-blue">
                      {about.education.classification}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </SectionReveal>
        </div>
      </div>
    </section>
  );
}
