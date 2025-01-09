import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function TeamsSection() {
  const [teamData, setTeamData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeams = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/fetch/teams`
        );
        setTeamData(response.data.data);
      } catch (err) {
        console.error("Error fetching teams:", err);
        setError("Failed to load teams.");
      } finally {
        setLoading(false);
      }
    };

    fetchTeams();
  }, []);

  if (loading) {
    return <p>Loading teams...</p>;
  }

  if (error) {
    return <p style={{ color: "red" }}>{error}</p>;
  }

  return (
    <>
      {teamData && teamData.length > 0 && (
        <section className="section service" id="teams" aria-label="service">
          <div className="container">
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
                        src={team.image || "/placeholder-image.jpg"}
                        width={140}
                        height={140}
                        loading="lazy"
                        alt={team.teamName}
                        className="img"
                      />
                    </figure>
                    <div className="card-content">
                      <h3 className="h3 card-title">{team.teamName}</h3>
                      <p className="card-text">{team.description}</p>
                      <Link to={`team/${team._id}`} className="btn-link">
                        <span className="span">Read More</span>
                        <ion-icon
                          name="arrow-forward-outline"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}
    </>
  );
}

export default TeamsSection;
