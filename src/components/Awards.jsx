import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { awardsData } from "../data/awardsData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { fadeUp, staggerContainer } from "../utils/animations";

export function Awards() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="awards" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading title="Awards & Achievements" subtitle="Recognitions" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {awardsData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="bg-[#f8f9fa] rounded-2xl p-6 text-center border border-[#e2e8f0] hover:border-[#4a90d9]/30 transition-all hover:shadow-md"
              >
                <div className="w-14 h-14 rounded-full bg-[#e8f0fe] flex items-center justify-center mx-auto mb-4 text-[#4a90d9]">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3 className="font-semibold text-[#0f1a2e] text-sm leading-tight mb-1">{item.title}</h3>
                <span className="text-sm font-bold text-[#4a90d9]">{item.year}</span>
                <p className="text-xs text-[#64748b] mt-2 leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}