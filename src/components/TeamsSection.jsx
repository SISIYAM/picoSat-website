import React from "react";

function TeamsSection() {
  return (
    <section className="section service" id="teams" aria-label="service">
      <div className="container">
        <p className="section-subtitle text-center">
          -Meet the Experts Behind Our Success-
        </p>
        <h2 className="h2 section-title text-center">Our Teams</h2>
        <p className="section-text text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
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
                <h3 className="h3 card-title">Software Team</h3>
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

          {/* Repeat similar service cards for other teams */}
        </ul>
        <a href="#" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default TeamsSection;
