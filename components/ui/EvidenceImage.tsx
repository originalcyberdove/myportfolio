"use client";

import Image from "next/image";
import { useState } from "react";

interface EvidenceImageProps {
  src?: string;
  alt: string;
  className?: string;
  fit?: "contain" | "cover";
  placeholderLabel?: string;
  sizes?: string;
}

export default function EvidenceImage({
  src,
  alt,
  className = "",
  fit = "cover",
  placeholderLabel = "Personal media placeholder",
  sizes = "(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw",
}: EvidenceImageProps) {
  const [failedSource, setFailedSource] = useState<string | null>(null);

  if (!src || failedSource === src) {
    return (
      <div
        className={`flex items-center justify-center bg-gradient-to-br from-cyber-navy to-cyber-surface ${className}`}
        role="img"
        aria-label={`${alt} — image not uploaded yet`}
      >
        <div className="px-5 text-center">
          <svg
            className="mx-auto mb-2 h-8 w-8 text-cyber-cyan/40"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={1.25}
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.41a2.25 2.25 0 013.182 0l2.909 2.91m-18 3.75h16.5a1.5 1.5 0 001.5-1.5V6a1.5 1.5 0 00-1.5-1.5H3.75A1.5 1.5 0 002.25 6v12a1.5 1.5 0 001.5 1.5z"
            />
          </svg>
          <p className="text-xs font-mono text-slate-400">{placeholderLabel}</p>
        </div>
      </div>
    );
  }

  return (
    <div className={`relative ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        className={fit === "contain" ? "object-contain" : "object-cover"}
        onError={() => setFailedSource(src)}
      />
    </div>
  );
}
