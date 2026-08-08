import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { expertiseData } from "../data/expertiseData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { fadeUp, staggerContainer } from "../utils/animations";

export function Expertise() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="expertise" ref={ref} className="section-padding bg-[#f8f9fa]">
      <div className="container-custom">
        <SectionHeading title="Areas of Expertise" subtitle="What I Specialize In" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8"
        >
          {expertiseData.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={fadeUp}
                className="expertise-card bg-white rounded-2xl p-6 md:p-8 border border-[#e2e8f0] shadow-sm hover:border-[#4a90d9]/20"
              >
                <div className="expertise-icon w-14 h-14 rounded-2xl bg-[#e8f0fe] flex items-center justify-center text-[#4a90d9] mb-5">
                  <Icon size={28} strokeWidth={1.8} />
                </div>
                <h3 className="heading-sm text-[#0f1a2e] mb-2">{item.title}</h3>
                <p className="text-[#64748b] text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}