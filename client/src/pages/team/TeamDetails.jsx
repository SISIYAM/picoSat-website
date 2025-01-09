import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios"; // Import axios

function TeamDetails() {
  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true); // Set loading to true initially
  const [error, setError] = useState(null); // Initialize error state

  const { id } = useParams(); // Destructure the `id` from the URL params

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_API_URL}/fetch/team/${id}` // Use dynamic `id`
        );
        setMembers(response.data.data); // Update state with fetched data
        console.log(response.data.data); // Optional: log the response for debugging
      } catch (error) {
        setError(error.message); // Set error message if the request fails
      } finally {
        setLoading(false); // Set loading to false when the request completes
      }
    };

    fetchMembers(); // Call the function to fetch data
  }, [id]); // Add `id` as a dependency so the effect runs when the URL parameter changes

  useEffect(() => {
    window.scrollTo(0, 0); // Scroll to the top when the component mounts
  }, []);

  if (loading) {
    return <div>Loading...</div>; // Show loading state while data is being fetched
  }

  if (error) {
    return <div>Error: {error}</div>; // Show error message if there's an error
  }

  return (
    <section className="section service" id="services" aria-label="service">
      <div className="container">
        <p className="section-subtitle text-center">
          -Meet the Experts Behind Our Success-
        </p>
        <h2 className="h2 section-title text-center">Software Team</h2>
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
        <a href="#" className="btn btn-primary">
          Get Started
        </a>
      </div>
    </section>
  );
}

export default TeamDetails;
