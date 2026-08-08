import React, { useRef } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function AppointmentCTA({ onOpenModal }) {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.15, rootMargin: "0px 0px -40px 0px" });

  return (
    <section ref={ref} className="section-padding bg-[#0f1a2e] relative overflow-hidden">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#4a90d9]/5 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-[#4a90d9]/5 to-transparent pointer-events-none" />
      <div className="absolute -top-24 -right-24 w-64 h-64 bg-[#4a90d9]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="heading-lg text-white mb-4">Your Health Deserves the Right Care.</h2>
          <p className="text-[#94a3b8] text-responsive-md mb-8">
            Schedule a consultation and take the next step toward better health.
          </p>
          <button
            onClick={onOpenModal}
            className="inline-flex items-center gap-2 px-8 py-3.5 bg-white text-[#0f1a2e] font-semibold rounded-full hover:bg-[#e8f0fe] transition-all hover:shadow-xl hover:-translate-y-0.5 text-base min-h-[52px]"
          >
            Book an Appointment
            <ArrowRight size={20} />
          </button>
        </motion.div>
      </div>
    </section>
  );
}