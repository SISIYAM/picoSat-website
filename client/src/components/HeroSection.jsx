import React from "react";

function HeroSection({ title, description }) {
  return (
    <section className="section hero" id="home" aria-label="hero">
      <div className="container">
        <div className="hero-content">
          <p className="hero-subtitle has-before">
            Welcome to Pico Satellite for Bangladesh
          </p>
          <h1 className="h1 hero-title">{title}</h1>
          <p className="hero-text">{description}</p>
          <div className="btn-group">
            <a href="#" className="btn btn-primary">
              Explore Now
            </a>
            {/* <button className="flex-btn">
              <div className="btn-icon">
                <ion-icon name="play" aria-hidden="true" />
              </div>
              <span className="span">How it works</span>
            </button> */}
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
  );
}

export default HeroSection;
