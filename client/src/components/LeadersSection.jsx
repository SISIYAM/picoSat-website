import React from "react";

const staticLeadersData = [
  {
    name: "Air Vice Marshal A K M Manirul Bahar, OSP, BSP, ndc, hdmc, afwc, psc, ADWC",
    rank: "Chief Patron",
    position: "Vice Chancellor, AAUB",
    image:
      "https://bsmraau.edu.bd/public/storage/upload/content/241018080310-6735vc_22.jpg",
  },
  {
    name: "Air Commodore M Neyamul Kabir, BUP, ndc, hdmc, psc, GD(N)",
    rank: "Chief Facilitator",
    position: "Pro Vice Chancellor, AAUB",
    image:
      "/assets/images/pro_vc.png",
  },
  {
    name: "Air Commodore FORHAD HOSSAIN MAHMUD, BSP,BPP,afwc,psc,pmp",
    rank: "Chief Facilitator",
    position: "Dean, Faculty of Aviation Engineering & Technology, AAUB",
    image:
      "https://bsmraau.edu.bd/public/storage/upload/facultyMembers/resize_356X390/241203100952-2982.jpg",
  },
  {
    name: "Dr. Nazmul Ula",
    rank: "Principal Investigator (PI)",
    position:
      "Associate Dean and Professor of Electrical and Computer Engineering, Loyola Marymount University, USA",
    image:
      "https://cse.lmu.edu/media/lmucse/departments/centerforstudentsuccess/images/Nazmul%20Ula%20214X300.jpg",
  },
  {
    name: "Air Cdre (Retd) Md Afzal Hossain, BUP, ndc, psc, Ph.D",
    rank: "Co Principal Investigator (CO PI)",
    position:
      "Distinguished Professor,Faculty of Aviation Engineering and Technology, AAUB",
    image:
      "https://bsmraau.edu.bd/public/storage/upload/facultyMembers/resize_356X390/221016111428-2983.jpg",
  },
  {
    name: "Md Samin Rahman",
    rank: "Coordinator and Investigator",
    position:
      "Assistant Professor, Faculty of Aviation Engineering and Technology, AAUB",
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
                  <h3 className="h3 card-title" style={{ padding: "10px" }}>
                    {leader.name}
                  </h3>
                  <span
                    style={{
                      position: "absolute",
                      top: "5px",
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
                    {leader.rank}
                  </span>
                  <p className="card-text">{leader.position}</p>
                  <a
                    href="#"
                    className="btn-link"
                    onClick={(e) => e.preventDefault()}
                  >
                    {/* <span className="span">Read More</span>
                    <ion-icon name="arrow-forward-outline" aria-hidden="true" /> */}
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
