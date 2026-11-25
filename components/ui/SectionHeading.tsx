"use client";

interface SectionHeadingProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeading({
  label,
  title,
  description,
  align = "left",
}: SectionHeadingProps) {
  const alignClass = align === "center" ? "text-center items-center" : "text-left items-start";

  return (
    <div className={`flex flex-col gap-3 mb-12 md:mb-16 ${alignClass}`}>
      <span className="inline-flex items-center gap-2 px-3 py-1 text-xs font-mono font-semibold tracking-wider uppercase text-cyber-cyan bg-cyber-cyan/5 border border-cyber-cyan/15 rounded-full w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-cyber-cyan animate-pulse" />
        {label}
      </span>
      <h2 className="section-heading text-white">{title}</h2>
      {description && (
        <p className={`section-subtext ${align === "center" ? "mx-auto" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}
