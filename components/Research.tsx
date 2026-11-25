"use client";

import { publications } from "@/data";
import SectionReveal from "./ui/SectionReveal";
import SectionHeading from "./ui/SectionHeading";

export default function Research() {
  return (
    <section id="research" className="section-padding">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <SectionHeading
            label="Research"
            title="Research & Publications"
            description="Academic contributions to cybersecurity and machine learning."
          />
        </SectionReveal>

        <div className="space-y-6">
          {publications.map((pub, i) => (
            <SectionReveal key={i} delay={0.15}>
              <div className="glass-panel rounded-2xl p-6 md:p-8 relative overflow-hidden group">
                {/* Subtle accent */}
                <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-cyber-cyan via-cyber-blue to-transparent" />

                <div className="pl-4">
                  {/* Publication type */}
                  <div className="flex items-center gap-2 mb-3">
                    <svg className="w-4 h-4 text-cyber-cyan" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" />
                    </svg>
                    <span className="text-xs font-mono text-cyber-cyan tracking-wider uppercase">
                      Journal Article
                    </span>
                  </div>

                  {/* Title */}
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block"
                  >
                    <h3 className="text-lg md:text-xl font-bold text-white group-hover:text-cyber-cyan transition-colors leading-snug mb-3">
                      &ldquo;{pub.title}&rdquo;
                    </h3>
                  </a>

                  {/* Authors & year */}
                  <p className="text-sm text-slate-400 mb-2">
                    {pub.authors} ({pub.year})
                  </p>

                  {/* Journal */}
                  <p className="text-sm text-slate-500 italic mb-4">
                    {pub.journal}, {pub.volume}
                  </p>

                  {/* DOI link */}
                  <a
                    href={pub.doi}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-mono text-cyber-cyan hover:text-white transition-colors"
                  >
                    <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                    DOI: {pub.doi.replace("https://doi.org/", "")}
                  </a>
                </div>
              </div>
            </SectionReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
