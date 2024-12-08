import React from "react";
import { Link } from "react-router-dom";

function TeamsSection() {
  const teamData = [
    {
      name: "Software Team",
      slug: "software",
      image:
        "https://www.scnsoft.com/blog-pictures/software-development-outsourcing/sw-development-teams.png",
      description:
        "Lorem ipsum dolor sit amet, consectetur adi piscing semper turpis. Nullam eget luctlie gula and adipiscing elit.",
    },
    {
      name: "Ground Station Team",
      slug: "ground-station",
      image:
        "https://cdn.satsearch.com/product-images/image-fossa-systems-fossa-s-band-tuntkey-ground-station-rcags1.jpg",
      description:
        "Ground Station Team ensures seamless communication between satellites and the Earth station.",
    },
    {
      name: "Mechanical Team",
      slug: "mechanical",
      image:
        "https://img1.wsimg.com/isteam/stock/51136/:/cr=t:12.36%25,l:0%25,w:100%25,h:75.28%25/rs=w:600,h:300,cg:true",
      description:
        "The Mechanical Team focuses on designing robust and reliable satellite structures.",
    },
    {
      name: "EPS Team",
      slug: "eps",
      image:
        "https://img.freepik.com/premium-vector/electric-workers-team-transformer-service-electrical-power-lines-technician-work-box-power-repairs-teamwork-vector-illustration_229548-4006.jpg",
      description:
        "EPS Team works on advanced power systems to keep satellites operational.",
    },
    {
      name: "CCN Team",
      slug: "ccn",
      image:
        "https://coamplifi.com/wp-content/uploads/2022/08/coamplifi_effectivecomm.jpg",
      description:
        "CCN Team specializes in communication and networking systems for space missions.",
    },
  ];

  return (
    <section className="section service" id="teams" aria-label="service">
      <div className="container">
        {/* <p className="section-subtitle text-center">
          -Meet the Experts Behind Our Success-
        </p> */}
        <h2 className="h2 section-title text-center">Our Teams</h2>
        <p className="section-text text-center">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <ul className="grid-list">
          {teamData.map((team, index) => (
            <li key={index}>
              <div className="service-card has-after">
                <figure className="card-icon">
                  <img
                    src={`${team.image}`}
                    width={140}
                    height={140}
                    loading="lazy"
                    alt={team.name}
                    className="img"
                  />
                </figure>
                <div className="card-content">
                  <h3 className="h3 card-title">{team.name}</h3>
                  <p className="card-text">{team.description}</p>
                  <Link to={`team/${team.slug}`} className="btn-link">
                    <span className="span">Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default TeamsSection;
