import React, { useRef } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";

export function LocationMap() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });

  return (
    <section id="location" ref={ref} className="section-padding bg-white">
      <div className="container-custom">
        <SectionHeading title="Find Us Here" subtitle="Our Location" />

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="rounded-3xl overflow-hidden shadow-lg border border-[#e2e8f0]"
        >
          <div className="relative w-full" style={{ paddingBottom: "45%" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d248849.88654057692!2d77.49085310000001!3d12.9538474!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae1670c9b44e6d%3A0xf8dfc3e8517e4fe0!2sBengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1700000000000"
              className="absolute top-0 left-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Ayesha Medical & Wellness Clinic location"
              aria-label="Map showing clinic location in Bangalore, India"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}