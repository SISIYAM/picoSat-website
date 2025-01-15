import React from "react";

function Publication() {
  const publicationData = [
    {
      title:
        "Design and Development of an Indigenous Ground Station for LEO Orbit Satellites",
      description:
        "This paper details designing an economical, versatile ground station for LEO CubeSats with automated tracking and data acquisition.",
      link: "https://ieeexplore.ieee.org/document/10421680",
    },
  ];

  const truncateDescription = (description, maxWords) => {
    const words = description.split(" ");
    return words.length > maxWords
      ? words.slice(0, maxWords).join(" ") + "..."
      : description;
  };

  return (
    <section
      className="section features"
      id="publications"
      aria-label="features"
    >
      <div className="container">
        <p className="section-subtitle text-center">
          {/* -Explore Our Insights and Discover Our Expertise- */}
        </p>
        <h2 className="h2 section-title text-center">Our Publications</h2>
        <p className="section-text text-center">
          {/* Lorem ipsum dolor sit amet consectetur, adipisicing elit. */}
        </p>
        <ul className="grid-list">
          {publicationData.map((publication, index) => (
            <li key={index}>
              <div className="features-card">
                <data className="card-number" value={index + 1}>
                  {index + 1}
                </data>
                <h3 className="h3 card-title">{publication.title}</h3>
                <p className="card-text">
                  {truncateDescription(publication.description, 15)}
                </p>
                <a
                  href={publication.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-link"
                >
                  <span className="span">Read Publication</span>
                  <ion-icon
                    name="arrow-forward-outline"
                    aria-hidden="true"
                  ></ion-icon>
                </a>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default Publication;
