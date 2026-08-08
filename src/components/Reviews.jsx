import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { SectionHeading } from "./SectionHeading";
import { reviewsData } from "../data/reviewsData";
import { useIntersectionObserver } from "../hooks/useIntersectionObserver";
import { fadeUp, staggerContainer } from "../utils/animations";

export function Reviews() {
  const ref = useRef(null);
  const isVisible = useIntersectionObserver(ref, { threshold: 0.1, rootMargin: "0px 0px -40px 0px" });
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const visibleReviews = isMobile ? [reviewsData[activeIndex]] : reviewsData;

  return (
    <section id="reviews" ref={ref} className="section-padding bg-[#f8f9fa]">
      <div className="container-custom">
        <SectionHeading title="Patient Reviews" subtitle="What My Patients Say" />

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          animate={isVisible ? "visible" : "hidden"}
          className="relative"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {visibleReviews.map((review) => (
              <motion.div
                key={review.id}
                variants={fadeUp}
                className="review-card bg-white rounded-2xl p-6 border border-[#e2e8f0] shadow-sm"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-full bg-[#e8f0fe] flex items-center justify-center text-[#0f1a2e] font-bold text-sm flex-shrink-0">
                    {review.avatar}
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#0f1a2e] text-sm">{review.name}</h4>
                    <div className="stars text-xs">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <span key={i} className={i < review.rating ? "text-[#f59e0b]" : "text-[#d1d5db]"}>
                          ★
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <p className="text-[#475569] text-sm leading-relaxed">"{review.review}"</p>
              </motion.div>
            ))}
          </div>

          {isMobile && reviewsData.length > 1 && (
            <div className="flex justify-center gap-2 mt-6">
              {reviewsData.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveIndex(index)}
                  className={`h-2 rounded-full transition-all ${
                    index === activeIndex ? "w-8 bg-[#4a90d9]" : "w-2 bg-[#d1d5db] hover:bg-[#94a3b8]"
                  }`}
                  aria-label={`Go to review ${index + 1}`}
                />
              ))}
            </div>
          )}

          {!isMobile && (
            <div className="text-center mt-8">
              <span className="text-sm text-[#64748b]">{reviewsData.length} reviews • 4.9/5 average rating</span>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}