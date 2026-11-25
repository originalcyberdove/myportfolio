"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { certifications, type Certification } from "@/data";
import EvidenceImage from "./ui/EvidenceImage";
import SectionHeading from "./ui/SectionHeading";
import SectionReveal from "./ui/SectionReveal";

export default function Certifications() {
  const [selectedCertificate, setSelectedCertificate] =
    useState<Certification | null>(null);

  return (
    <section id="certifications" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-navy/15 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <SectionHeading
            label="Certifications"
            title="Professional Credentials"
            description="Validated knowledge across cybersecurity education, LLM security, and industry standards."
          />
        </SectionReveal>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {certifications.map((cert, i) => (
            <SectionReveal key={cert.title} delay={0.1 * (i + 1)}>
              <article className="glass-panel rounded-2xl p-5 h-full flex flex-col group hover:shadow-card-hover transition-all duration-300">
                <button
                  type="button"
                  className="relative h-36 w-full rounded-xl mb-4 overflow-hidden text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-cyan"
                  onClick={() => setSelectedCertificate(cert)}
                  aria-label={`View ${cert.title} certificate`}
                >
                  <EvidenceImage
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fit="contain"
                    placeholderLabel="Certificate image placeholder"
                    className="h-full w-full rounded-xl p-2"
                  />
                  <span className="absolute inset-0 flex items-center justify-center bg-cyber-cyan/5 opacity-0 transition-opacity group-hover:opacity-100">
                    <span className="text-xs font-mono text-cyber-cyan">
                      View certificate
                    </span>
                  </span>
                </button>

                <h3 className="text-sm font-bold text-white mb-1.5 leading-snug">
                  {cert.title}
                </h3>
                <p className="text-xs text-slate-500 font-mono">{cert.issuer}</p>
                {cert.issueDate && (
                  <p className="text-xs text-slate-600 mt-2">
                    Issued {cert.issueDate}
                  </p>
                )}
              </article>
            </SectionReveal>
          ))}
        </div>
      </div>

      <AnimatePresence>
        {selectedCertificate && (
          <motion.div
            className="lightbox-overlay cursor-pointer"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedCertificate(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedCertificate.title} certificate viewer`}
          >
            <motion.div
              className="relative w-full max-w-5xl mx-4"
              initial={{ scale: 0.9 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0.9 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedCertificate(null)}
                className="absolute -top-10 right-0 z-10 w-8 h-8 rounded-full bg-white/10 backdrop-blur flex items-center justify-center text-white hover:bg-white/20 transition-colors"
                aria-label="Close certificate viewer"
              >
                <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
              <div className="relative h-[70vh] max-h-[760px] w-full overflow-hidden rounded-2xl border border-cyber-border bg-cyber-navy">
                <EvidenceImage
                  src={selectedCertificate.image}
                  alt={`${selectedCertificate.title} certificate`}
                  fit="contain"
                  placeholderLabel="Upload the original certificate image to view it here"
                  sizes="100vw"
                  className="h-full w-full p-4"
                />
              </div>
              <div className="mt-4 text-center">
                <h3 className="text-sm font-bold text-white">
                  {selectedCertificate.title}
                </h3>
                <p className="mt-1 text-xs text-slate-400">
                  {selectedCertificate.issuer}
                </p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
