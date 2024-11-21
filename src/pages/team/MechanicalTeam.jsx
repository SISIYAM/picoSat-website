import React from "react";

function MechanicalTeam() {
  const members = [
    {
      name: "Fahim Sami",
      id: "23024005",
      department: "AE (Avionics)",
    },
  ];

  return (
    <section className="section service" id="services" aria-label="service">
      <div className="container">
        <p className="section-subtitle text-center">
          -Meet the Experts Behind Our Success-
        </p>
        <h2 className="h2 section-title text-center">Mechanical Team</h2>
        <p className="section-text text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <ul className="grid-list">
          {members.map((member, index) => (
            <li key={index}>
              <div className="service-card has-after">
                <figure className="card-icon">
                  <img
                    src="/assets/images/service-1.png"
                    width={140}
                    height={140}
                    loading="lazy"
                    alt={`${member.name}'s avatar`}
                    className="img"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">{member.name}</h3>
                  <p className="card-text">
                    ID: {member.id} <br />
                    Department: {member.department}
                  </p>
                  <a href="#" className="btn-link">
                    <span className="span">Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
        <a href="#" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default MechanicalTeam;
