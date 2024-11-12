import React, { useState } from "react";
import FAQAccordion from "../components/FAQAccordion";

function Home() {
  return (
    <article>
      {/* HERO Section */}
      <section className="section hero" id="home" aria-label="hero">
        <div className="container">
          <div className="hero-content">
            <p className="hero-subtitle has-before">
              Welcome to Pico Satellite for Bangladesh
            </p>
            <h1 className="h1 hero-title">
              Innovative Satellite Solutions for Bangladesh’s Future
            </h1>
            <p className="hero-text">
              We bring bold ideas and smart solutions to revolutionize
              Bangladesh’s space technology. Through our dedicated research and
              hands-on development, we aim to build affordable yet
              high-performance pico and CubeSat satellites that can drive
              Bangladesh's presence in the global space economy. Our project
              empowers students and faculty with cutting-edge knowledge in
              satellite design and development, laying the foundation for a
              sustainable space economy.
            </p>
            <div className="btn-group">
              <a href="#" className="btn btn-primary">
                Discover More
              </a>
              <button className="flex-btn">
                <div className="btn-icon">
                  <ion-icon name="play" aria-hidden="true" />
                </div>
                <span className="span">How it works</span>
              </button>
            </div>
          </div>
          <figure className="hero-banner">
            <img
              src="/assets/images/picosat.png"
              width={650}
              height={650}
              alt="hero banner"
              className="img-cover"
            />
          </figure>
        </div>
      </section>

      {/* ABOUT Section */}
      <section className="section about" id="about" aria-label="about">
        <div className="container">
          <figure className="about-banner">
            <img
              src="./assets/images/about-banner.png"
              width={802}
              height={654}
              loading="lazy"
              alt="about banner"
              className="w-100"
            />
          </figure>
          <div className="about-content">
            <h2 className="h2-sm section-title">
              Building a Bright Future with Innovative Satellite Design.
            </h2>
            <p className="section-text">
              Our team at Pico Satellite for Bangladesh is dedicated to creating
              groundbreaking satellite technology to support Bangladesh’s
              advancement in space research and exploration. We design and
              develop cutting-edge pico and CubeSats that are tailored for
              success, combining affordability with high-performance to meet the
              needs of our country.
            </p>
            <ul className="about-list">
              <li className="has-before">
                Price of additional materials or parts (if needed)
              </li>
              <li className="has-before">
                Transportation cost for carrying new materials/parts
              </li>
              <li className="has-before">
                You will get 100% money back offer.
              </li>
            </ul>
            <div className="btn-group">
              <a href="#" className="btn btn-primary">
                Know More
              </a>
              <button className="flex-btn">
                <div className="btn-icon">
                  <ion-icon name="medal-outline" aria-hidden="true" />
                </div>
                <span className="span">10+ Years Experience</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICE Section */}
      <section className="section service" id="services" aria-label="service">
        <div className="container">
          <p className="section-subtitle text-center">-What We Offer-</p>
          <h2 className="h2 section-title text-center">
            Our Creative Services
          </h2>
          <p className="section-text text-center">
            Get the most of reduction in your team’s operating costs for the
            whole product which creates amazing UI/UX experiences.
          </p>
          <ul className="grid-list">
            <li>
              <div className="service-card has-after">
                <figure className="card-icon">
                  <img
                    src="./assets/images/service-1.png"
                    width={140}
                    height={140}
                    loading="lazy"
                    alt="UI/UX Creative Design"
                    className="img"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">UI/UX Creative Design</h3>
                  <p className="card-text">
                    Lorem ipsum dolor sit amet, consectetur adi piscing semper
                    turpis. Nullam eget luctlie gula and adipiscing elit.
                  </p>
                  <a href="#" className="btn-link">
                    <span className="span">Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>

            {/* Repeat similar service cards for other services */}
          </ul>
          <a href="#" className="btn btn-primary">
            Get Started
          </a>
        </div>
      </section>

      {/* FEATURES Section */}
      <section className="section features" id="features" aria-label="features">
        <div className="container">
          <p className="section-subtitle text-center">-Why Choose Us-</p>
          <h2 className="h2 section-title text-center">Reasons to Choose Us</h2>
          <p className="section-text text-center">
            Get the most of reduction in your team’s operating costs for the
            whole product which creates amazing UI/UX experiences.
          </p>
          <ul className="grid-list">
            <li>
              <div className="features-card">
                <data className="card-number" value={"01"}>
                  01
                </data>
                <h3 className="h3 card-title">Free Icon Plugin</h3>
                <p className="card-text">
                  Nullam ullamcorper condimentum urna eu accumsan.
                </p>
              </div>
            </li>
            {/* Repeat similar feature cards */}
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQAccordion />
    </article>
  );
}

export default Home;
