import React, { useState } from "react";
import FAQAccordion from "../components/FAQAccordion";
import Publication from "../components/Publication";
import AboutSection from "../components/AboutSection";
import TeamsSection from "../components/TeamsSection";
import HeroSection from "../components/HeroSection";
import ImageGallery from "../components/ImageGallery";
import PartnersCarousel from "../components/PartnersCarousel";
import Slider from "../components/Slider";
import Timeline from "../components/Timeline";
import LeadersSection from "../components/LeadersSection";

function Home() {
  return (
    <article>
      {/* HERO Section */}
      <HeroSection
        title={"Developing and Commercializing Low-Cost CubeSats in Bangladesh"}
        description={
          "We dream of developing a cost-effective CubeSat that helps Bangladeshi students to awaken their latent talents in satellite or space exploration and also open the door to space exploration in Bangladesh at par with other countries in the world."
        }
      />

      {/* ABOUT Section */}
      <AboutSection />
      <Slider></Slider>
      {/* TEAMS Section */}
      <LeadersSection />
      <TeamsSection />
      <Timeline />
      {/* <ImageGallery></ImageGallery> */}
      <PartnersCarousel></PartnersCarousel>

      {/* Publication Section */}
      <Publication />

      {/* FAQ Section */}
      {/* <FAQAccordion /> */}
    </article>
  );
}

export default Home;
