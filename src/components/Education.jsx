import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { educationData } from "../data/educationData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function Education() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="education" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading title="Education & Qualifications" subtitle="Academic Background" />

        <div className="relative max-w-3xl mx-auto">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-[#e2e8f0] -translate-x-1/2 hidden sm:block" />

          <div className="space-y-8">
            {educationData.map((item, index) => {
              const isEven = index % 2 === 0;
              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isVisible ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-0`}
                >
                  <div className="absolute left-4 sm:left-1/2 top-1 -translate-x-1/2 z-10">
                    <div className="timeline-dot" />
                  </div>

                  <div
                    className={`w-full sm:w-5/12 ${
                      isEven ? "sm:pr-12 sm:text-right" : "sm:pl-12 sm:ml-auto"
                    } pl-12 sm:pl-0`}
                  >
                    <div className="bg-[#f8f9fa] rounded-2xl p-5 md:p-6 border border-[#e2e8f0]">
                      <span className="inline-block text-sm font-bold text-[#4a90d9] mb-1">{item.year}</span>
                      <h3 className="heading-sm text-[#0f1a2e]">{item.title}</h3>
                      <p className="text-sm font-medium text-[#64748b] mb-1">{item.institution}</p>
                      <p className="text-sm text-[#64748b] leading-relaxed">{item.description}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}