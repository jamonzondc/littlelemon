import React from "react";
import AboutSection from "../components/AboutSection";
import HeroSection from "../components/HeroSection";
import SpecialsSection from "../components/SpecialsSection";
import TestimonialsSection from "../components/TestimonialsSection";

const HomePage = () => {
  return (
    <>
      <section className="primary-bcolor-1" style={{ position: "relative" }}>
        <HeroSection />
      </section>
      <section className="special-section">
        <SpecialsSection />
      </section>
      <section className="testimonials-section">
        <TestimonialsSection />
      </section>
      <section className="about-section">
        <AboutSection />
      </section>
    </>
  );
};
export default HomePage;
