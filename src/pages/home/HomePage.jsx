import React from "react";
import AboutSection from "./components/AboutSection";
import HeroSection from "./components/HeroSection";
import SpecialsSection from "./components/SpecialsSection";
import TestimonialsSection from "./components/TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <section
        id="hero-section-id"
        className="primary-bcolor-1"
        style={{ position: "relative" }}
      >
        <HeroSection />
      </section>
      <section id="specials-section-id" className="special-section">
        <SpecialsSection />
      </section>
      <section id="testimonials-section-id" className="testimonials-section">
        <TestimonialsSection />
      </section>
      <section id="about-section-id" className="about-section">
        <AboutSection />
      </section>
    </>
  );
};
export default HomePage;
