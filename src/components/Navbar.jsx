import React, { useState, useEffect } from "react";
import { Menu, X, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useScrollPosition } from "../hooks/useScrollPosition";

export function Navbar({ onBookAppointment }) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const scrollY = useScrollPosition();

  useEffect(() => {
    setIsScrolled(scrollY > 40);
  }, [scrollY]);

  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Education", href: "#education" },
    { label: "Awards", href: "#awards" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const handleLinkClick = () => setIsOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "glass-nav-solid shadow-sm" : "glass-nav"
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16 md:h-20">
          <a href="#home" className="flex items-center gap-2 text-[#0f1a2e] no-underline">
            <span className="text-xl md:text-2xl font-bold tracking-tight">
              Dr. <span className="text-[#4a90d9]">Ayesha</span>
            </span>
            <span className="hidden sm:inline text-xs font-medium text-[#64748b] tracking-wider uppercase border-l border-[#e2e8f0] pl-3">
              Physician
            </span>
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a key={link.label} href={link.href} className="nav-link text-sm font-medium text-[#1e293b] hover:text-[#4a90d9] transition-colors">
                {link.label}
              </a>
            ))}
            <button onClick={onBookAppointment} className="btn-primary text-sm px-6 py-2.5 min-h-[44px]">
              Book Appointment
            </button>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 rounded-lg hover:bg-[#f1f5f9] transition-colors"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 top-16 lg:hidden mobile-menu-overlay z-40"
              onClick={() => setIsOpen(false)}
            />
            <motion.div
              initial={{ x: "100%", opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "100%", opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="fixed top-16 right-0 bottom-0 w-full max-w-sm lg:hidden mobile-menu-panel z-40 overflow-y-auto"
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <nav className="flex flex-col p-6 gap-1">
                {navLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    onClick={handleLinkClick}
                    className="flex items-center justify-between py-3 px-4 text-[#1e293b] font-medium text-base rounded-lg hover:bg-[#f1f5f9] transition-colors"
                  >
                    {link.label}
                    <ChevronRight size={18} className="text-[#94a3b8]" />
                  </a>
                ))}
                <div className="mt-4 pt-4 border-t border-[#e2e8f0]">
                  <button
                    onClick={() => {
                      handleLinkClick();
                      onBookAppointment();
                    }}
                    className="btn-primary w-full text-center"
                  >
                    Book Appointment
                  </button>
                </div>
              </nav>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}