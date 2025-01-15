import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios

function TeamDetails() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const { id, teamName } = useParams();

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/fetch/team/${id}`
        );
        setMembers(response.data.data);
        console.log(response.data.data);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMembers();
  }, [id]);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <section className="section service" id="services" aria-label="service">
      <div className="container">
        <p className="section-subtitle text-center">
          -Meet the Experts Behind Our Success-
        </p>
        <h2 className="h2 section-title text-center">{teamName}</h2>
        <p className="section-text text-center">
          {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
        </p>
        {loading && <h1>Loading...</h1>}
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
                  <span
                    style={{
                      position: "absolute",
                      top: "10px",
                      right: "10px",
                      backgroundColor: "#ff6347",
                      color: "#fff",
                      fontSize: "1rem",
                      fontWeight: "bold",
                      padding: "5px 10px",
                      borderRadius: "20px",
                      boxShadow: "0 2px 4px rgba(0, 0, 0, 0.2)",
                      zIndex: 1,
                    }}
                  >
                    {member.role}
                  </span>
                  <p className="card-text">
                    {member.email} <br />
                    {member.department}
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
      </div>
    </section>
  );
}

export default TeamDetails;
