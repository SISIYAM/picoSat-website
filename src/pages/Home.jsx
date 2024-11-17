import React, { useState } from "react";
import FAQAccordion from "../components/FAQAccordion";
import Publication from "../components/Publication";
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
      {/* Publication Section */}
      <Publication />

      {/* FAQ Section */}
      <FAQAccordion />
    </article>
  );
}

export default Home;
