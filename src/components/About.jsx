import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { doctorData } from "../data/doctorData";

export function About() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.15, rootMargin: "0px 0px -60px 0px" });

  const [counters, setCounters] = useState({
    years: 0,
    patients: 0,
    awards: 0,
    satisfaction: 0,
  });

  useEffect(() => {
    if (isVisible) {
      const duration = 2000;
      const steps = 60;
      const interval = duration / steps;

      const targetYears = doctorData.stats.yearsExperience;
      const targetPatients = doctorData.stats.patientsTreated;
      const targetAwards = doctorData.stats.awards;
      const targetSatisfaction = doctorData.stats.satisfaction;

      let step = 0;
      const timer = setInterval(() => {
        step++;
        const progress = step / steps;
        const ease = 1 - Math.pow(1 - progress, 3);

        setCounters({
          years: Math.min(Math.round(ease * targetYears), targetYears),
          patients: Math.min(Math.round(ease * targetPatients), targetPatients),
          awards: Math.min(Math.round(ease * targetAwards), targetAwards),
          satisfaction: Math.min(Math.round(ease * targetSatisfaction), targetSatisfaction),
        });

        if (step >= steps) clearInterval(timer);
      }, interval);

      return () => clearInterval(timer);
    }
  }, [isVisible]);

  return (
    <section id="about" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={isVisible ? { opacity: 1, scale: 1 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-xl aspect-[4/5] bg-[#e8f0fe]">
                <img
                  src="/images/doctor-about.webp"
                  alt="Dr. Ayesha Sharma in her clinic"
                  className="w-full h-full object-cover object-center"
                  loading="lazy"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=600&h=800&fit=crop&crop=face&auto=format";
                  }}
                />
              </div>
              <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#4a90d9]/5 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-[#4a90d9]/5 rounded-full blur-xl pointer-events-none" />
            </div>
          </motion.div>

          {/* Right Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="order-1 lg:order-2"
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#4a90d9] mb-3">
              About Me
            </span>
            <h2 className="heading-lg text-[#0f1a2e] mb-4">Dedicated to Better Healthcare</h2>
            <p className="text-[#475569] text-responsive-md mb-6 leading-relaxed">{doctorData.bio}</p>
            <p className="text-[#475569] text-responsive-md mb-8 leading-relaxed">
              With a commitment to excellence and a patient-centered approach, I strive to make a positive difference in the lives of those I care for.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-[#f8f9fa] rounded-2xl p-4 text-center">
                <div className="stat-number">{counters.years}+</div>
                <div className="stat-label">Years Experience</div>
              </div>
              <div className="bg-[#f8f9fa] rounded-2xl p-4 text-center">
                <div className="stat-number">{counters.patients}+</div>
                <div className="stat-label">Patients Treated</div>
              </div>
              <div className="bg-[#f8f9fa] rounded-2xl p-4 text-center">
                <div className="stat-number">{counters.awards}+</div>
                <div className="stat-label">Awards</div>
              </div>
              <div className="bg-[#f8f9fa] rounded-2xl p-4 text-center">
                <div className="stat-number">{counters.satisfaction}%</div>
                <div className="stat-label">Satisfaction</div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}