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
      title: "01. How to build your own UX strategy?",
      content: "Your answer content goes here.",
    },
    {
      id: 2,
      title: "02. What makes us unique?",
      content: "Your answer content goes here.",
    },
    {
      id: 3,
      title: "03. How can we help with your project?",
      content: "Your answer content goes here.",
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
