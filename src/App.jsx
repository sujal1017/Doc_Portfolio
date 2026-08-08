import React, { useState } from "react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { About } from "./components/About";
import { Expertise } from "./components/Expertise";
import { Education } from "./components/Education";
import { Experience } from "./components/Experience";
import { Awards } from "./components/Awards";
import { Clinic } from "./components/Clinic";
import { LocationMap } from "./components/LocationMap";
import { Reviews } from "./components/Reviews";
import { AppointmentCTA } from "./components/AppointmentCTA";
import { AppointmentModal } from "./components/AppointmentModal";
import { Footer } from "./components/Footer";

function App() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <div className="min-h-screen bg-white">
      <Navbar onBookAppointment={openModal} />
      <Hero onBookAppointment={openModal} />
      <About />
      <Expertise />
      <Education />
      <Experience />
      <Awards />
      <Clinic onBookAppointment={openModal} />
      <LocationMap />
      <Reviews />
      <AppointmentCTA onOpenModal={openModal} />
      <Footer onOpenModal={openModal} />
      <AppointmentModal isOpen={isModalOpen} onClose={closeModal} />

      <a
        href="#home"
        className="fixed bottom-6 right-6 z-40 w-12 h-12 rounded-full bg-[#0f1a2e] text-white flex items-center justify-center shadow-lg hover:bg-[#4a90d9] transition-all hover:scale-105 hover:shadow-xl"
        aria-label="Scroll to top"
      >
        <ArrowRight size={20} className="rotate-[-90deg]" />
      </a>
    </div>
  );
}

// ArrowRight is used in the scroll-to-top button; we need to import it
import { ArrowRight } from "lucide-react";

export default App;