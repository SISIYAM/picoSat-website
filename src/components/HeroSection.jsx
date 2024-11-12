import React from "react";

function HeroSection() {
  return (
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
  );
}

export default HeroSection;
