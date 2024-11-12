import React from "react";

function Features() {
  return (
    <section className="section features" id="features" aria-label="features">
      <div className="container">
        <p className="section-subtitle text-center">
          -Explore Our Insights and Discover Our Expertise-
        </p>
        <h2 className="h2 section-title text-center">Our Publications</h2>
        <p className="section-text text-center">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit.
        </p>
        <ul className="grid-list">
          <li>
            <div className="features-card">
              <data className="card-number" value={"01"}>
                01
              </data>
              <h3 className="h3 card-title">Publication one</h3>
              <p className="card-text">
                Nullam ullamcorper condimentum urna eu accumsan.
              </p>
            </div>
          </li>
          {/* Repeat similar feature cards */}
        </ul>
      </div>
    </section>
  );
}

export default Features;
