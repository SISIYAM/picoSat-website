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
          <h2 className="h2-sm section-title">About us</h2>
          <p className="section-text" style={{ textAlign: "justify" }}>
            Our team "Pico Satellite for Bangladesh " is interested in
            developing A modern , cost-effective and high-performance cube
            satellite that will make a significant contribution to the
            development of Bangladesh's space research and exploration as well
            as to the progress of the research activities of students , teachers
            and researchers of higher education institutions at
            home and abroad .
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
