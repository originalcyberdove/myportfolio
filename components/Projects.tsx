"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { projects, type Project } from "@/data";
import SectionReveal from "./ui/SectionReveal";
import SectionHeading from "./ui/SectionHeading";
import EvidenceImage from "./ui/EvidenceImage";

function StatusBadge({ status }: { status: string }) {
  return (
    <span
      className={`status-badge ${
        status === "Completed" ? "status-completed" : "status-ongoing"
      }`}
    >
      <span
        className={`w-1.5 h-1.5 rounded-full ${
          status === "Completed" ? "bg-cyber-blue" : "bg-amber-400 animate-pulse"
        }`}
      />
      {status}
    </span>
  );
}

function CategoryTag({ category }: { category: string }) {
  return (
    <span className="text-[10px] font-mono text-cyber-blue uppercase tracking-wider">
      {category}
    </span>
  );
}

// ───── Project Detail Modal ─────
function ProjectModal({
  project,
  onClose,
}: {
  project: Project;
  onClose: () => void;
}) {
  return (
    <motion.div
      className="lightbox-overlay"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div
        className="relative w-full max-w-3xl max-h-[90vh] mx-4 bg-cyber-dark border border-cyber-border rounded-2xl overflow-hidden"
        initial={{ scale: 0.95, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.95, y: 20 }}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header gradient */}
        <div className="relative h-32 bg-gradient-to-br from-cyber-navy via-cyber-surface to-cyber-dark flex items-end p-6">
          <button
            onClick={onClose}
            className="absolute top-4 right-4 w-8 h-8 rounded-lg bg-black/30 backdrop-blur flex items-center justify-center text-slate-400 hover:text-white transition-colors"
          >
            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
          <div className="relative z-10">
            <CategoryTag category={project.category} />
            <h2 className="text-2xl font-bold text-white mt-1">
              {project.title}
            </h2>
          </div>
        </div>

        {/* Content */}
        <div className="overflow-y-auto max-h-[calc(90vh-8rem)] p-6 space-y-6">
          <div className="flex items-center gap-3">
            <StatusBadge status={project.status} />
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-cyber-cyan hover:text-white transition-colors"
              >
                <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
                Live Application
              </a>
            )}
          </div>

          {/* Description */}
          <div className="space-y-3">
            {project.description.map((para, i) => (
              <p key={i} className="text-slate-300 text-sm leading-relaxed">
                {para}
              </p>
            ))}
          </div>

          {project.screenshots && project.screenshots.length > 0 && (
            <div>
              <h3 className="text-sm font-mono font-semibold text-cyber-cyan tracking-wider uppercase mb-3">
                Project Evidence
              </h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {project.screenshots.map((screenshot) => (
                  <figure key={screenshot.src}>
                    <EvidenceImage
                      src={screenshot.src}
                      alt={screenshot.caption}
                      placeholderLabel="Project screenshot placeholder"
                      className="aspect-video w-full overflow-hidden rounded-xl border border-cyber-border"
                    />
                    <figcaption className="mt-2 text-xs text-slate-400">
                      {screenshot.caption}
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          )}

          {/* Key Details */}
          <div>
            <h3 className="text-sm font-mono font-semibold text-cyber-cyan tracking-wider uppercase mb-3">
              Key Details
            </h3>
            <ul className="space-y-2">
              {project.keyDetails.map((detail, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-slate-300">
                  <span className="w-1 h-1 rounded-full bg-cyber-cyan mt-2 shrink-0" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          {(project.technologies.length > 0 || (project.tools && project.tools.length > 0)) && (
            <div>
              <h3 className="text-sm font-mono font-semibold text-cyber-cyan tracking-wider uppercase mb-3">
                {project.technologies.length > 0 ? "Technologies" : "Tools"}
              </h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
                {project.tools?.map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
}

// ───── Featured Project Card (FraudLock NG) ─────
function FeaturedProjectCard({
  project,
  onClick,
}: {
  project: Project;
  onClick: () => void;
}) {
  return (
    <SectionReveal delay={0.1}>
      <motion.div
        className="glass-panel rounded-2xl overflow-hidden group cursor-pointer"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
      >
        <div className="grid md:grid-cols-2">
          {/* Visual side */}
          <div className="relative h-48 md:h-auto bg-gradient-to-br from-cyber-navy via-cyber-surface to-cyber-dark overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-cyber-cyan/5 via-transparent to-cyber-emerald/5" />

            {/* Featured badge */}
            <div className="absolute top-4 left-4 px-3 py-1 text-[10px] font-mono font-bold text-cyber-cyan bg-cyber-cyan/10 border border-cyber-cyan/20 rounded-full uppercase tracking-wider">
              ★ Featured Project
            </div>

            <EvidenceImage
              src={project.screenshots?.[0]?.src}
              alt={project.screenshots?.[0]?.caption ?? `${project.title} screenshot`}
              placeholderLabel="Actual project screenshot pending"
              className="absolute inset-0"
            />
          </div>

          {/* Content side */}
          <div className="p-6 md:p-8 flex flex-col justify-between">
            <div>
              <CategoryTag category={project.category} />
              <h3 className="text-2xl font-bold text-white mt-2 mb-3 group-hover:text-cyber-cyan transition-colors">
                {project.title}
              </h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4">
                {project.summary}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.technologies.slice(0, 5).map((t) => (
                  <span key={t} className="tech-tag">{t}</span>
                ))}
                {project.technologies.length > 5 && (
                  <span className="tech-tag">+{project.technologies.length - 5}</span>
                )}
              </div>
            </div>

            <div className="flex items-center gap-4">
              <StatusBadge status={project.status} />
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-medium text-cyber-cyan hover:text-white transition-colors"
                  onClick={(e) => e.stopPropagation()}
                >
                  <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                  Visit Live
                </a>
              )}
              <span className="ml-auto text-xs text-slate-500 group-hover:text-cyber-cyan transition-colors flex items-center gap-1">
                View Case Study
                <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </span>
            </div>
          </div>
        </div>
      </motion.div>
    </SectionReveal>
  );
}

// ───── Standard Project Card ─────
function ProjectCard({
  project,
  index,
  onClick,
}: {
  project: Project;
  index: number;
  onClick: () => void;
}) {
  return (
    <SectionReveal delay={0.1 * (index + 1)}>
      <motion.div
        className="glass-panel rounded-2xl p-6 h-full flex flex-col cursor-pointer group"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
        onClick={onClick}
      >
        {/* Visual header */}
        <div className="h-32 rounded-xl bg-gradient-to-br from-cyber-navy to-cyber-surface mb-5 relative overflow-hidden">
          <EvidenceImage
            src={project.screenshots?.[0]?.src}
            alt={project.screenshots?.[0]?.caption ?? `${project.title} screenshot`}
            placeholderLabel="Actual project screenshot pending"
            className="absolute inset-0"
          />
          <div className="absolute top-3 right-3">
            <StatusBadge status={project.status} />
          </div>
        </div>

        <div className="flex-1 flex flex-col">
          <CategoryTag category={project.category} />
          <h3 className="text-lg font-bold text-white mt-1.5 mb-2 group-hover:text-cyber-cyan transition-colors">
            {project.title}
          </h3>
          <p className="text-sm text-slate-400 leading-relaxed mb-4 flex-1">
            {project.summary}
          </p>

          <div className="flex flex-wrap gap-1.5 mb-4">
            {(project.tools || project.technologies).slice(0, 3).map((t) => (
              <span key={t} className="tech-tag text-[10px] px-2 py-1">{t}</span>
            ))}
          </div>

          <span className="text-xs text-slate-500 group-hover:text-cyber-cyan transition-colors flex items-center gap-1 mt-auto">
            View Details
            <svg className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </span>
        </div>
      </motion.div>
    </SectionReveal>
  );
}

// ───── Main Projects Section ─────
export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="section-padding relative">
      <div className="max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <SectionHeading
            label="Projects"
            title="Security Research & Projects"
            description="Practical work across application security, threat detection, machine learning, and vulnerability assessment."
          />
        </SectionReveal>

        {/* Featured project */}
        {featured && (
          <div className="mb-8">
            <FeaturedProjectCard
              project={featured}
              onClick={() => setSelectedProject(featured)}
            />
          </div>
        )}

        {/* Other projects grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {others.map((project, i) => (
            <ProjectCard
              key={project.id}
              project={project}
              index={i}
              onClick={() => setSelectedProject(project)}
            />
          ))}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
}
