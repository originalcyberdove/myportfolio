"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { mediaItems, type MediaCategory, type MediaItem } from "@/data";
import EvidenceImage from "./ui/EvidenceImage";
import SectionHeading from "./ui/SectionHeading";
import SectionReveal from "./ui/SectionReveal";

const categories: MediaCategory[] = [
  "All",
  "Teaching",
  "Certifications",
  "Projects",
  "Research & Labs",
  "Community Activities",
];

function MediaCard({
  item,
  onClick,
}: {
  item: MediaItem;
  onClick: () => void;
}) {
  return (
    <motion.button
      layout
      type="button"
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.3 }}
      className="glass-panel rounded-2xl overflow-hidden group text-left focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-cyan"
      onClick={onClick}
      aria-label={`${item.type === "video" ? "Play" : "View"} ${item.title}`}
    >
      <div className="relative h-44 overflow-hidden bg-gradient-to-br from-cyber-navy to-cyber-surface">
        <EvidenceImage
          src={item.type === "video" ? item.thumbnail : item.src}
          alt={item.title}
          fit="cover"
          placeholderLabel={
            item.type === "video" ? "Video thumbnail placeholder" : "Image placeholder"
          }
          className="h-full w-full transition-transform duration-300 group-hover:scale-105"
        />
        {item.type === "video" && (
          <span className="absolute inset-0 flex items-center justify-center">
            <span className="flex h-14 w-14 items-center justify-center rounded-full border border-cyber-cyan/30 bg-cyber-dark/70 text-cyber-cyan shadow-lg backdrop-blur transition-colors group-hover:bg-cyber-cyan/20">
              <svg className="ml-1 h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M8 5v14l11-7z" />
              </svg>
            </span>
          </span>
        )}
        <span className="absolute left-3 top-3 rounded-full bg-black/50 px-2 py-1 text-[10px] font-mono text-slate-200 backdrop-blur">
          {item.category}
        </span>
        <span className="absolute right-3 top-3 rounded-full border border-white/10 bg-black/50 px-2 py-1 text-[10px] font-mono uppercase text-slate-200 backdrop-blur">
          {item.type}
        </span>
      </div>
      <span className="block p-4">
        <span className="mb-1 block text-sm font-bold text-white transition-colors group-hover:text-cyber-cyan">
          {item.title}
        </span>
        <span className="block text-xs leading-relaxed text-slate-400">
          {item.description}
        </span>
        {item.topic && (
          <span className="mt-3 block text-[11px] font-mono text-cyber-blue">
            Topic: {item.topic}
          </span>
        )}
      </span>
    </motion.button>
  );
}

export default function ProofOfWork() {
  const [activeCategory, setActiveCategory] = useState<MediaCategory>("All");
  const [selectedItem, setSelectedItem] = useState<MediaItem | null>(null);

  const filtered =
    activeCategory === "All"
      ? mediaItems
      : mediaItems.filter((item) => item.category === activeCategory);

  useEffect(() => {
    if (!selectedItem) return;

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setSelectedItem(null);
    };

    window.addEventListener("keydown", closeOnEscape);
    return () => window.removeEventListener("keydown", closeOnEscape);
  }, [selectedItem]);

  return (
    <section id="proof-of-work" className="section-padding relative">
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-cyber-navy/15 to-transparent pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 md:px-8">
        <SectionReveal>
          <SectionHeading
            label="Proof of Work"
            title="Evidence Portfolio"
            description="A curated place for real teaching, certification, project, research, and community media."
          />
        </SectionReveal>

        <SectionReveal delay={0.1}>
          <div className="mb-10 flex flex-wrap gap-2" aria-label="Filter evidence by category">
            {categories.map((category) => (
              <button
                key={category}
                type="button"
                onClick={() => setActiveCategory(category)}
                aria-pressed={activeCategory === category}
                className={`rounded-full border px-4 py-2 text-xs font-medium transition-all duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-cyber-cyan ${
                  activeCategory === category
                    ? "border-cyber-cyan/30 bg-cyber-cyan/10 text-cyber-cyan"
                    : "border-cyber-border bg-transparent text-slate-400 hover:border-slate-600 hover:text-slate-200"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </SectionReveal>

        {filtered.length > 0 ? (
          <motion.div
            layout
            className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((item) => (
                <MediaCard
                  key={item.id}
                  item={item}
                  onClick={() => setSelectedItem(item)}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="py-16 text-center">
            <p className="text-sm font-mono text-slate-500">
              No media in this category yet. Add your files under public/media
              and update the media list.
            </p>
          </div>
        )}
      </div>

      <AnimatePresence>
        {selectedItem && (
          <motion.div
            className="lightbox-overlay cursor-pointer px-4 py-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedItem(null)}
            role="dialog"
            aria-modal="true"
            aria-label={`${selectedItem.title} viewer`}
          >
            <motion.div
              key={selectedItem.id}
              className="relative w-full max-w-5xl"
              initial={{ scale: 0.95, y: 16 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 16 }}
              onClick={(event) => event.stopPropagation()}
            >
              <button
                type="button"
                onClick={() => setSelectedItem(null)}
                className="absolute -top-10 right-0 z-10 flex h-8 w-8 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur transition-colors hover:bg-white/20"
                aria-label="Close media viewer"
              >
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {selectedItem.type === "video" && selectedItem.embedUrl ? (
                <div className="aspect-video overflow-hidden rounded-2xl bg-black">
                  <iframe
                    src={selectedItem.embedUrl}
                    title={selectedItem.title}
                    className="h-full w-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowFullScreen
                  />
                </div>
              ) : selectedItem.type === "video" && selectedItem.src ? (
                <div className="overflow-hidden rounded-2xl bg-black">
                  <video
                    key={selectedItem.id}
                    controls
                    playsInline
                    preload="metadata"
                    poster={selectedItem.thumbnail}
                    className="max-h-[75vh] w-full"
                  >
                    <source src={selectedItem.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
              ) : selectedItem.type === "video" ? (
                <div className="flex min-h-64 items-center justify-center rounded-2xl border border-cyber-border bg-cyber-navy p-8 text-center">
                  <p className="text-sm font-mono text-slate-400">
                    Video placeholder — add an MP4 file or an embedded video URL
                    to this media item.
                  </p>
                </div>
              ) : (
                <div className="relative h-[70vh] max-h-[800px] overflow-hidden rounded-2xl border border-cyber-border bg-cyber-navy">
                  <EvidenceImage
                    src={selectedItem.src}
                    alt={selectedItem.title}
                    fit="contain"
                    placeholderLabel="Add the original image to view it here"
                    sizes="100vw"
                    className="h-full w-full p-4"
                  />
                </div>
              )}

              <div className="mt-4 text-center">
                <h3 className="text-sm font-bold text-white">
                  {selectedItem.title}
                </h3>
                <p className="mt-1 text-sm text-slate-400">
                  {selectedItem.description}
                </p>
                {selectedItem.topic && (
                  <p className="mt-2 text-xs font-mono text-cyber-blue">
                    Topic: {selectedItem.topic}
                  </p>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
