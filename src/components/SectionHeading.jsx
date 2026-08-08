import React from "react";

export function SectionHeading({ title, subtitle, centered = true }) {
  return (
    <div className={`${centered ? "text-center" : "text-left"} mb-12 md:mb-16`}>
      {subtitle && (
        <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#4a90d9] mb-3">
          {subtitle}
        </span>
      )}
      <h2 className="heading-lg text-[#0f1a2e]">{title}</h2>
      {centered && <div className="w-16 h-1 bg-[#4a90d9] rounded-full mx-auto mt-4" />}
    </div>
  );
}