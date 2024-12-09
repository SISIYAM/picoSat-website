import React from "react";
import "./style.css";
function PublicationDetails() {
  const publication = {
    title: "PICOSAT4BANGLADESH: Advancements in Picosatellite Ground Stations",
    authors:
      "Aliul Hassan Olee, Md. Rafi, and Benzir Ahmmed, with Dr. Nazmul Ula, Dr. Md. Afzal Hossain, and Assistant Professor Md. Samin Rahman",
    date: "December 2023",
    conference: "NELEX23 Conference, Vellore Institute of Technology, India",
    journal: "Published in IEEE Xplore",
    content: `
      Aliul Hassan Olee, Md. Rafi, and Benzir Ahmmed from the PICOSAT4BANGLADESH
      project at our university, along with Dr. Nazmul Ula, Dr. Md. Afzal Hossain, 
      and Assistant Professor Md. Samin Rahman, presented their conference paper 
      at the IEEE-organized NELEX23 conference on December 2023 at Vellore Institute 
      of Technology, India. 

      Published in renowned IEEE Xplore, the paper presents the 'PICOSAT4BANGLADESH' 
      project, which successfully designed an adaptable, locally sourced, and 
      budget-friendly ground station for picosatellite tracking. 

      This included the design of a custom unidirectional antenna and the implementation 
      of an automated tracking system, each optimized for a specific frequency to ensure 
      maximum performance, with a focus on specialized, cost-efficient engineering.
    `,
    journalLink: "https://ieeexplore.ieee.org/document/123456789",
  };

  return (
    <section className="section service" id="services" aria-label="service">
      <div className="container">
        <article>
          <header className="publication-header text-center">
            <h3 className="h3 publication-title">{publication.title}</h3>
            <p className="publication-authors">{publication.authors}</p>
            <p className="publication-meta">
              <strong>Date:</strong> {publication.date} |{" "}
              <strong>Conference:</strong> {publication.conference} |{" "}
              <strong>Journal:</strong> {publication.journal}
            </p>
          </header>
          <div className="publication-content">
            <p>{publication.content}</p>
          </div>
          <div className="text-center" style={{ marginTop: "20px" }}>
            <a
              href={publication.journalLink}
              target="_blank"
              rel="noopener noreferrer"
              className="viewBtn btn-primary"
            >
              View Original Journal
            </a>
          </div>
        </article>
      </div>
    </section>
  );
}

export default PublicationDetails;
