import React from "react";
import { MapPin, Phone, Mail, Clock, ArrowRight } from "lucide-react";
import { doctorData } from "../data/doctorData";

export function Footer({ onOpenModal }) {
  const navLinks = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Expertise", href: "#expertise" },
    { label: "Education", href: "#education" },
    { label: "Awards", href: "#awards" },
    { label: "Reviews", href: "#reviews" },
    { label: "Contact", href: "#contact" },
  ];

  const socialLinks = [
    { icon: "Instagram", label: "Instagram", href: doctorData.social.instagram },
    { icon: "Facebook", label: "Facebook", href: doctorData.social.facebook },
    { icon: "Twitter", label: "Twitter", href: doctorData.social.twitter },
    { icon: "Youtube", label: "YouTube", href: doctorData.social.youtube },
    { icon: "Linkedin", label: "LinkedIn", href: doctorData.social.linkedin },
  ];

  // Simple icon mapping to avoid importing all social icons
  const getSocialIcon = (name) => {
    const icons = {
      Instagram: "📸",
      Facebook: "📘",
      Twitter: "🐦",
      Youtube: "▶️",
      Linkedin: "🔗",
    };
    return icons[name] || "🔗";
  };

  return (
    <footer className="bg-[#0a1424] text-white pt-16 pb-8">
      <div className="container-custom">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          <div>
            <h2 className="text-2xl font-bold tracking-tight mb-3">
              Dr. <span className="text-[#4a90d9]">Ayesha</span>
            </h2>
            <p className="text-[#94a3b8] text-sm leading-relaxed max-w-xs">
              {doctorData.title} with {doctorData.experience} of experience dedicated to providing exceptional
              healthcare.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <a href={link.href} className="text-sm text-[#94a3b8] hover:text-white transition-colors">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3 text-[#94a3b8]">
                <MapPin size={16} className="text-[#4a90d9] flex-shrink-0 mt-0.5" />
                <span>{doctorData.address}</span>
              </li>
              <li className="flex items-center gap-3 text-[#94a3b8]">
                <Phone size={16} className="text-[#4a90d9] flex-shrink-0" />
                <span>{doctorData.phone}</span>
              </li>
              <li className="flex items-center gap-3 text-[#94a3b8]">
                <Mail size={16} className="text-[#4a90d9] flex-shrink-0" />
                <span>{doctorData.email}</span>
              </li>
              <li className="flex items-center gap-3 text-[#94a3b8]">
                <Clock size={16} className="text-[#4a90d9] flex-shrink-0" />
                <span>{doctorData.openingHours}</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-white mb-4">Connect</h4>
            <div className="flex gap-3 mb-6">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  aria-label={social.label}
                  className="w-10 h-10 rounded-full bg-white/10 hover:bg-[#4a90d9] transition-colors flex items-center justify-center text-[#94a3b8] hover:text-white text-lg"
                >
                  {getSocialIcon(social.icon)}
                </a>
              ))}
            </div>
            <button
              onClick={onOpenModal}
              className="btn-primary text-sm px-6 py-2.5 min-h-[44px] bg-[#4a90d9] hover:bg-[#3a7bd5] w-full sm:w-auto"
            >
              Book Appointment
              <ArrowRight size={16} />
            </button>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-[#64748b]">
          <span>&copy; {new Date().getFullYear()} {doctorData.name}. All rights reserved.</span>
          <span className="text-xs">Made with ❤️ for better healthcare</span>
        </div>
      </div>
    </footer>
  );
}