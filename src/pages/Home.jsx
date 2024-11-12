import React, { useState } from "react";
import FAQAccordion from "../components/FAQAccordion";
import Features from "../components/Features";
import AboutSection from "../components/AboutSection";
import TeamsSection from "../components/TeamsSection";
import HeroSection from "../components/HeroSection";

function Home() {
  return (
    <article>
      {/* HERO Section */}
      <HeroSection />
      {/* ABOUT Section */}
      <AboutSection />

      {/* TEAMS Section */}
      <TeamsSection />
      {/* FEATURES Section */}
      <Features />

      {/* FAQ Section */}
      <FAQAccordion />
    </article>
  );
}

export default Home;
