import React, { useState } from "react";

const FAQAccordion = () => {
  const [activeAccordion, setActiveAccordion] = useState(null);

  const toggleAccordion = (index) => {
    console.log(`Toggling accordion: ${index}`); // Debugging line
    setActiveAccordion(activeAccordion === index ? null : index);
  };

  const faqData = [
    {
      id: 1,
      title: "01. What is PicoSat Bangladesh?",
      content:
        "PicoSat Bangladesh is an educational and research initiative aimed at promoting satellite technology awareness and hands-on learning. Through the project, students and enthusiasts can learn about satellite design, data collection, and ground station operations, helping to pave the way for more advanced space-related projects in Bangladesh.",
    },
    {
      id: 2,
      title: "02. Why is PicoSat Bangladesh important?",
      content:
        "The project empowers young engineers and students to gain practical experience with satellite systems, contributing to Bangladesh's growing capabilities in space technology. By learning about satellite operations, participants can develop skills in areas such as data analysis, remote sensing, and communication, all crucial for future space missions.",
    },
    {
      id: 3,
      title: "03. How can I participate in PicoSat Bangladesh?",
      content:
        "Participation is open to students, researchers, and technology enthusiasts. You can join workshops, take part in hands-on satellite building activities, and even contribute to the design and testing phases of our pico-satellite missions. Contact our team for details on how to get involved and make a difference in the space technology sector of Bangladesh.",
    },
  ];

  return (
    <section className="section faq" aria-label="frequently asked questions">
      <div className="container">
        <div className="title-wrapper">
          <h2 className="h2 section-title">
            Discover Frequently Asked Questions
          </h2>
          <a href="#" className="btn btn-primary">
            Work Together
          </a>
        </div>
        <ul className="grid-list">
          {faqData.map((item, index) => (
            <li key={item.id}>
              <div className="faq-card">
                <button
                  className="card-action"
                  onClick={() => toggleAccordion(index)}
                  aria-expanded={activeAccordion === index}
                >
                  <h3 className="h3 card-title">{item.title}</h3>
                  <div className="action-icon">
                    <ion-icon
                      name={
                        activeAccordion === index
                          ? "remove-outline"
                          : "add-outline"
                      }
                      aria-hidden="true"
                      className={activeAccordion === index ? "close" : "open"}
                    />
                  </div>
                </button>
                {/* Debugging: check if activeAccordion is updating correctly */}
                {activeAccordion === index && (
                  <div className="card-content">
                    <p>{item.content}</p>
                  </div>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default FAQAccordion;
