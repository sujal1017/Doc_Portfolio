import React from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { fadeUp, staggerContainer, slideInRight } from "../utils/animations";

export function Hero({ onBookAppointment }) {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center pt-20 md:pt-24 lg:pt-28 section-padding bg-[#f8f9fa] relative overflow-hidden"
    >
      <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#e8f0fe]/40 to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-r from-[#e8f0fe]/20 to-transparent pointer-events-none" />

      <div className="container-custom relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="order-2 lg:order-1"
          >
            <motion.span
              variants={fadeUp}
              className="inline-block text-xs md:text-sm font-semibold uppercase tracking-[0.2em] text-[#4a90d9] mb-4"
            >
              Consultant Physician
            </motion.span>

            <motion.h1 variants={fadeUp} className="heading-xl text-[#0f1a2e] mb-4">
              I AM <br />
              <span className="text-[#4a90d9]">DR. AYESHA</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-responsive-md text-[#475569] max-w-lg mb-8"
            >
              Expert care for your health, backed by experience, compassion, and modern medicine.
            </motion.p>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-4 items-center">
              <button onClick={onBookAppointment} className="btn-primary">
                Book Appointment
                <ArrowRight size={18} />
              </button>
              <a href="#about" className="btn-secondary">
                Explore My Profile
              </a>
            </motion.div>

            <motion.div variants={fadeUp} className="flex flex-wrap gap-3 mt-10">
              <div className="floating-stat">
                <span className="text-lg font-bold text-[#0f1a2e]">12+</span>
                <span className="text-xs text-[#64748b] ml-1">Years</span>
              </div>
              <div className="floating-stat">
                <span className="text-lg font-bold text-[#0f1a2e]">5000+</span>
                <span className="text-xs text-[#64748b] ml-1">Patients</span>
              </div>
              <div className="floating-stat">
                <span className="text-lg font-bold text-[#0f1a2e]">4.9/5</span>
                <span className="text-xs text-[#64748b] ml-1">Rating</span>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            animate="visible"
            className="order-1 lg:order-2"
          >
            <div className="relative">
              <div className="hero-image-container">
                <img
                  src="/images/doctor-hero.webp"
                  alt="Dr. Ayesha Sharma - Consultant Physician"
                  className="w-full h-full object-cover object-center"
                  loading="eager"
                  onError={(e) => {
                    e.currentTarget.src = "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=800&h=1000&fit=crop&crop=face&auto=format";
                  }}
                />
              </div>
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-[#4a90d9]/10 rounded-full blur-2xl pointer-events-none" />
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-[#4a90d9]/5 rounded-full blur-xl pointer-events-none" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}