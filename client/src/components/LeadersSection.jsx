import React from "react";

const staticLeadersData = [
  {
    name: "Air Vice Marshal A K M Manirul Bahar, BSP, ndc, hdmc, afwc, psc, ADWC",
    position: "Chief Patron - Vice Chancellor, BSMRAAU",
    image: "/chief_patron.jpg",
  },
  {
    name: "Air Cdre Md Moinul Hasnain, BUP, ndc, afwc, psc, PEng, Engg",
    position: "Chief Facilitator - Pro Vice Chancellor, BSMRAAU",
    image: "/chief_facilitator.jpg",
  },
  {
    name: "Dr. Nazmul Ula",
    position:
      "Principal Investigator (PI) - Associate Dean and Professor of Electrical and Computer Engineering, Loyola Marymount University, USA",
    image: "/principal_investigator.jpg",
  },
  {
    name: "Air Cdre (Retd) Md Afzal Hossain",
    position:
      "Chief Coordinator and Investigator - Distinguished Professor and Dean, Faculty of Aviation Operations Management, BSMRAAU",
    image:
      "https://bsmraau.edu.bd/public/storage/upload/facultyMembers/resize_356X390/221016111428-2983.jpg",
  },
  {
    name: "Md Samin Rahman",
    position:
      "Coordinator and Investigator - Lecturer, Dept. of Avionics Engineering, BSMRAAU",
    image:
      "https://bsmraau.edu.bd/public/storage/upload/facultyMembers/resize_356X390/221017061045-6106.jpeg",
  },
];

function LeadersSection() {
  return (
    <section className="section service" id="leaders" aria-label="service">
      <div className="container">
        <h2 className="h2 section-title text-center">Our Leaders</h2>
        <p className="section-text text-center">
          Meet the dedicated leaders behind our success.
        </p>
        <ul className="grid-list">
          {staticLeadersData.map((leader, index) => (
            <li key={index}>
              <div className="service-card has-after">
                <figure className="card-icon">
                  <img
                    src={leader.image}
                    width={140}
                    height={140}
                    loading="lazy"
                    alt={leader.name}
                    className="img"
                    style={{
                      width: "140px",
                      height: "140px",
                      borderRadius: "50%",
                      objectFit: "fill",
                      backgroundColor: "#f0f0f0",
                      border: "2px solid #ddd",
                      padding: "5px",
                    }}
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">{leader.name}</h3>
                  <p className="card-text">{leader.position}</p>
                  <a
                    href="#"
                    className="btn-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    <span className="span">Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </a>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default LeadersSection;
