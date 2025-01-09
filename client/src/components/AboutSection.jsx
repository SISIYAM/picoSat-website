import React from "react";

function AboutSection() {
  return (
    <section className="section about" id="about" aria-label="about">
      <div className="container">
        <figure className="about-banner">
          <img
            src="/assets/images/ballonPico.jpg"
            width={802}
            height={654}
            style={{ borderRadius: "3%" }}
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
            advancement in space research and exploration. We design and develop
            cutting-edge pico and CubeSats that are tailored for success,
            combining affordability with high-performance to meet the needs of
            our country.
          </p>

          {/* <div className="btn-group">
            <a href="#" className="btn btn-primary">
              Know More
            </a>
          </div> */}
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
