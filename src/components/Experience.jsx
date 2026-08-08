import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { experienceData } from "../data/experienceData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function Experience() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="experience" ref={ref} className="section-padding bg-[#f8f9fa]">
      <div className="container-custom">
        <SectionHeading title="Professional Experience" subtitle="Where I've Worked" />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {experienceData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 30 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <h3 className="heading-sm text-[#0f1a2e]">{item.position}</h3>
                  <p className="text-[#4a90d9] font-medium text-sm">{item.institution}</p>
                </div>
                <span className="text-xs font-semibold text-[#64748b] bg-[#f1f5f9] px-3 py-1 rounded-full whitespace-nowrap">
                  {item.years}
                </span>
              </div>
              <p className="text-[#64748b] text-sm mt-3 leading-relaxed">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}