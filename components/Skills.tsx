"use client";

import { skillCategories } from "@/data";
import SectionReveal from "./ui/SectionReveal";
import SectionHeading from "./ui/SectionHeading";

const iconMap: Record<string, React.ReactNode> = {
  shield: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
    </svg>
  ),
  bug: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 12.75c1.148 0 2.278.08 3.383.237 1.037.146 1.866.966 1.866 2.013 0 3.728-2.35 6.75-5.25 6.75S6.75 18.728 6.75 15c0-1.046.83-1.867 1.866-2.013A24.204 24.204 0 0112 12.75zm0 0c2.883 0 5.647.508 8.207 1.44a23.91 23.91 0 01-1.152-6.135 3 3 0 10-5.984.155c.066.588.09 1.184.065 1.78A24.03 24.03 0 0112 12.75zM2.695 18.678a23.97 23.97 0 012.058-7.67A3 3 0 017.77 8.56a3 3 0 01-.357 1.49A23.89 23.89 0 002.695 18.678z" />
    </svg>
  ),
  terminal: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z" />
    </svg>
  ),
  brain: (
    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456z" />
    </svg>
  ),
};

const colorAccents = [
  "from-cyber-cyan/10 to-cyber-blue/5 border-cyber-cyan/15 hover:border-cyber-cyan/30",
  "from-cyber-crimson/10 to-amber-500/5 border-cyber-crimson/15 hover:border-cyber-crimson/30",
  "from-cyber-emerald/10 to-cyan-500/5 border-cyber-emerald/15 hover:border-cyber-emerald/30",
  "from-purple-500/10 to-cyber-blue/5 border-purple-500/15 hover:border-purple-500/30",
];

const tagColors = [
  "text-cyber-cyan bg-cyber-cyan/5 border-cyber-cyan/15",
  "text-red-400 bg-red-400/5 border-red-400/15",
  "text-cyber-emerald bg-cyber-emerald/5 border-cyber-emerald/15",
  "text-purple-400 bg-purple-400/5 border-purple-400/15",
];

export default function Skills() {
  return (
    <section id="skills" className="section-padding relative">
      {/* Background accent */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-navy/20 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <SectionHeading
            label="Technical Skills"
            title="Cybersecurity Toolkit"
            description="Tools, technologies, and techniques I work with across security operations, application security, and AI research."
          />
        </SectionReveal>

        <div className="grid md:grid-cols-2 gap-6">
          {skillCategories.map((cat, i) => (
            <SectionReveal key={cat.title} delay={0.1 * (i + 1)}>
              <div
                className={`glass-panel rounded-2xl p-6 h-full bg-gradient-to-br ${colorAccents[i]} transition-all duration-300`}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center bg-gradient-to-br ${colorAccents[i]}`}>
                    <span className={tagColors[i].split(" ")[0]}>
                      {iconMap[cat.icon]}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white">{cat.title}</h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {cat.skills.map((skill) => (
                    <span
                      key={skill}
                      className={`inline-flex items-center px-3 py-1.5 text-xs font-medium rounded-lg border transition-colors duration-200 ${tagColors[i]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
