import React, { useRef } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { doctorData } from "../data/doctorData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function Clinic({ onBookAppointment }) {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="clinic" ref={ref} className="section-padding bg-[#f8f9fa]">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            <span className="inline-block text-sm font-semibold uppercase tracking-widest text-[#4a90d9] mb-3">
              Visit Us
            </span>
            <h2 className="heading-lg text-[#0f1a2e] mb-6">Clinic Information</h2>

            <div className="space-y-5">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center text-[#4a90d9] flex-shrink-0">
                  <MapPin size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1a2e] text-sm">Address</h4>
                  <p className="text-[#475569] text-sm leading-relaxed">{doctorData.address}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center text-[#4a90d9] flex-shrink-0">
                  <Phone size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1a2e] text-sm">Phone</h4>
                  <p className="text-[#475569] text-sm">{doctorData.phone}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center text-[#4a90d9] flex-shrink-0">
                  <Mail size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1a2e] text-sm">Email</h4>
                  <p className="text-[#475569] text-sm">{doctorData.email}</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-[#e8f0fe] flex items-center justify-center text-[#4a90d9] flex-shrink-0">
                  <Clock size={22} />
                </div>
                <div>
                  <h4 className="font-semibold text-[#0f1a2e] text-sm">Opening Hours</h4>
                  <p className="text-[#475569] text-sm">{doctorData.openingHours}</p>
                </div>
              </div>
            </div>

            <div className="flex flex-wrap gap-4 mt-8">
              <button onClick={onBookAppointment} className="btn-primary">
                Book Appointment
              </button>
              <a href="#location" className="btn-secondary">
                Get Directions
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isVisible ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="lg:mt-8"
          >
            <div className="map-placeholder shadow-lg">
              <div className="map-placeholder-inner">
                <div className="map-pin">
                  <MapPin size={24} />
                </div>
                <p className="font-semibold text-[#0f1a2e] text-center px-4">{doctorData.clinic}</p>
                <p className="text-sm text-[#475569] text-center px-4">{doctorData.address}</p>
                <div className="absolute bottom-4 right-4 text-xs text-[#94a3b8] bg-white/80 px-3 py-1 rounded-full">
                  📍 Map View
                </div>
                <div
                  className="absolute inset-0 opacity-[0.03] pointer-events-none"
                  style={{
                    backgroundImage: "radial-gradient(circle at 20px 20px, #0f1a2e 1px, transparent 1px)",
                    backgroundSize: "40px 40px",
                  }}
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}