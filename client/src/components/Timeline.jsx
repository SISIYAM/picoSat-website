import React, { useState } from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css"; // Ensure this CSS is loaded

// Import Font Awesome icons
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBriefcase,
  faGraduationCap,
  faCheckCircle, // Check mark icon (unlocked)
  faLock, // Padlock icon (locked)
} from "@fortawesome/free-solid-svg-icons";

// Import react-responsive-modal for the modal functionality
import { Modal } from "react-responsive-modal";
import "react-responsive-modal/styles.css"; // Import modal styles

const Timeline = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({
    title: "",
    date: "",
    description: "",
  });

  const handleOpenModal = (title, date, description) => {
    setModalContent({ title, date, description });
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <h2 className="h2 section-title text-center">Our Journey</h2>
      <p className="section-text text-center">
        {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. */}
      </p>
      <VerticalTimeline>
        {/* Unlocked Events First */}

        {/* Unlocked Event */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/image1.jpg')",
            backgroundSize: "cover", // Ensures the image covers the element area
          }}
          contentArrowStyle={{
            borderRight: "7px solid #4DBC79",
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "Inception",
              "",
              "The journey of Pico satellite for Bangladesh project started back in 2019, at a two-day convention of NRB (Non-Resident Bangladeshis) engineers held by Economic Relations Division (ERD), A2I (Access to information in Bangladesh) and Bridge 2 Bangladesh jointly. A total of nine business sessions were held in the two-day conference. In the sessions, NRB engineers presented their innovative project proposals. Among those proposals, Professor Dr. Nazmul Ula, Associate Dean and Professor of Electrical and Computer Engineering at Loyola Marymount University in the United States who is also a valiant freedom fighter, shared his thoughts on developing space program in Bangladesh. He said, “The Bangabandhu Satellite-1 is Bangladesh's first geostationary communications and broadcasting satellite, it is of course a big achievement, besides this if we make number of small satellites to monitor the change of climate and weather. We propose to set up a Bangladesh space agency (BASA). Later we can provide training for the young engineers. It’s very effective to give an extra dimension with others developing country”. From there, an idea of developing a series of Pico satellites or cube satellites locally that are low in cost but high in return was developed"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Inception",
              "",
              "The journey of Pico satellite for Bangladesh project started back in 2019, at a two-day convention of NRB (Non-Resident Bangladeshis) engineers held by Economic Relations Division (ERD), A2I (Access to information in Bangladesh) and Bridge 2 Bangladesh jointly. A total of nine business sessions were held in the two-day conference. In the sessions, NRB engineers presented their innovative project proposals. Among those proposals, Professor Dr. Nazmul Ula, Associate Dean and Professor of Electrical and Computer Engineering at Loyola Marymount University in the United States who is also a valiant freedom fighter, shared his thoughts on developing space program in Bangladesh. He said, “The Bangabandhu Satellite-1 is Bangladesh's first geostationary communications and broadcasting satellite, it is of course a big achievement, besides this if we make number of small satellites to monitor the change of climate and weather. We propose to set up a Bangladesh space agency (BASA). Later we can provide training for the young engineers. It’s very effective to give an extra dimension with others developing country”. From there, an idea of developing a series of Pico satellites or cube satellites locally that are low in cost but high in return was developed"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">Inception</h3>
        </VerticalTimelineElement>

        {/* Unlocked Event */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/image2.jpg')",
            backgroundSize: "cover", // Ensure image fits element area
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "MOU sign: 6th March 2022",
              "",
              "A tripartite MoU (Memorandum of Understanding) for commercial production of space-life suitable modules in Bangladesh was signed on 6th March 2022. Our university signed the MoU with Bridge to Bangladesh (B2B), Aspire to Innovate (A2I), and Pico Satellite Company.Air Commodore Mohmmad Abdullah Al Mahbub on behalf of BSMRAAU, Faruq Ahmed Jewel, Head of Technology of A2I, Sajedul Islam, Vice President of B2B, and Professor Dr. Nazmul Ula signed the MoU for establishing Pico Satellite labs."
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "MOU sign: 6th March 2022",
              "",
              "A tripartite MoU (Memorandum of Understanding) for commercial production of space-life suitable modules in Bangladesh was signed on 6th March 2022. Our university signed the MoU with Bridge to Bangladesh (B2B), Aspire to Innovate (A2I), and Pico Satellite Company.Air Commodore Mohmmad Abdullah Al Mahbub on behalf of BSMRAAU, Faruq Ahmed Jewel, Head of Technology of A2I, Sajedul Islam, Vice President of B2B, and Professor Dr. Nazmul Ula signed the MoU for establishing Pico Satellite labs."
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            MOU sign: 6th March 2022
          </h3>
        </VerticalTimelineElement>

        {/* Unlocked Event */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/image3.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "Team Formation",
              "",
              `Under the supervision of Professor Dr. Nazmul Ula, BSMRAAU started Pico Satellite for Bangladesh with 6 teams, namely- Ground Station, Electronics and Power System, Mechanical, Communication, Control and Navigation, Software Team , documentation and finance team. The main objective of this project is to commercialize the manufacture of cube satellites having a 10 cm x 10 cm x 10 cm dimension and weighing not more than 1.3 kg. Besides commercializing the manufacturing process, the project also envisions for -
•	International collaboration on research in the field of design, development, and launching of CubeSats.  
•	International collaboration and cooperation with Pico Satellite Company. `
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Team Formation",
              "",
              `Under the supervision of Professor Dr. Nazmul Ula, BSMRAAU started Pico Satellite for Bangladesh with 6 teams, namely- Ground Station, Electronics and Power System, Mechanical, Communication, Control and Navigation, Software Team , documentation and finance team. The main objective of this project is to commercialize the manufacture of cube satellites having a 10 cm x 10 cm x 10 cm dimension and weighing not more than 1.3 kg. Besides commercializing the manufacturing process, the project also envisions for


              •	International collaboration on research in the field of design, development, and launching of CubeSats.  
              •	International collaboration and cooperation with Pico Satellite Company. `
            )
          }
        >
          <h3 className="vertical-timeline-element-title">Team Formation</h3>
        </VerticalTimelineElement>

        {/* Unlocked Event */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/image4.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "Ground Station Construction",
              "",
              `After accomplishing to make a 137 MHz QFH antenna , a cost-effective ground station installed with an automated tracking system was designed and built, on which a conference paper titled “Design and Development of an Indigenous Ground Station for LEO Orbit Satellites” was published from IEEE. To test the automated tracking system, a cross Yagi antenna was also designed. The tracking system corrects the azimuth and elevation as the satellite passes over the head.  The azimuth and elevation information were calculated using Two Line Element Set (TLE) of the sattelite using a raspberry pi, then according the that calculation the azimuth and elevation was controlled .`
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Ground Station Construction",
              "",
              `After accomplishing to make a 137 MHz QFH antenna , a cost-effective ground station installed with an automated tracking system was designed and built, on which a conference paper titled “Design and Development of an Indigenous Ground Station for LEO Orbit Satellites” was published from IEEE. To test the automated tracking system, a cross Yagi antenna was also designed. The tracking system corrects the azimuth and elevation as the satellite passes over the head.  The azimuth and elevation information were calculated using Two Line Element Set (TLE) of the sattelite using a raspberry pi, then according the that calculation the azimuth and elevation was controlled .`
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Ground Station Construction
          </h3>
        </VerticalTimelineElement>

        {/* Locked Events Below */}

        {/* Locked Event */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image1.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "Publication of 1st Conference Paper",
              "",
              `After installing a cost-effective ground station  with an automated tracking system  a conference paper titled “Design and Development of an Indigenous Ground Station for LEO Orbit Satellites” was published from IEEE .`
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Publication of 1st Conference Paper",
              "",
              `After installing a cost-effective ground station  with an automated tracking system  a conference paper titled “Design and Development of an Indigenous Ground Station for LEO Orbit Satellites” was published from IEEE .`
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Publication of 1st Conference Paper
          </h3>
        </VerticalTimelineElement>

        {/* Locked Event */}
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image2.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "Purchase of Space Grade CubeSat",
              "",
              "Description"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Purchase of Space Grade CubeSat",
              "",
              "Description"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Purchase of Space Grade CubeSat{" "}
          </h3>
        </VerticalTimelineElement>

        {/* Locked Event */}
        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image3.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "Study of the CMOS Purchased",
              "",
              "Description"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Study of the CMOS Purchased",
              "",
              "Description"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Study of the CMOS Purchased
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image3.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "Programming the CubeSat and Ground Station",
              "",
              "Description"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Programming the CubeSat and Ground Station",
              "",
              "Description"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Programming the CubeSat and Ground Station
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image3.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "Constriction of LORA based CubeSat",
              "",
              "Description"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Constriction of LORA based CubeSat",
              "",
              "Description"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Constriction of LORA based CubeSat
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "#4DBC79",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image3.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "#4DBC79",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faCheckCircle} />}
          iconOnClick={() =>
            handleOpenModal(
              "1st CubeSat Balloon Test",
              "",
              "Till now, the biggest achievement of the team is their successful balloon testing. On 28th February 2024, on the Fifth Foundation Anniversary of BSMRAAU, a commercially off the shelf satellite was attached to a ballon and sent to an altitude of 1126 feet. The on-board software programmed, and the payload board was designed by the picosatellite team. Alongside that a ground station was also designed by the team with a dashboard which showed the data received from the satellite. Temperature, pressure, altitude, and satellite camera images were recorded and sent to the ground station using the cube satellite. This type of test is the first in Bangladesh"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "1st CubeSat Balloon Test",
              "",
              "Till now, the biggest achievement of the team is their successful balloon testing. On 28th February 2024, on the Fifth Foundation Anniversary of BSMRAAU, a commercially off the shelf satellite was attached to a ballon and sent to an altitude of 1126 feet. The on-board software programmed, and the payload board was designed by the picosatellite team. Alongside that a ground station was also designed by the team with a dashboard which showed the data received from the satellite. Temperature, pressure, altitude, and satellite camera images were recorded and sent to the ground station using the cube satellite. This type of test is the first in Bangladesh"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            1st CubeSat Balloon Test
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "gray",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image3.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "gray",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faLock} />}
          iconOnClick={() =>
            handleOpenModal(
              "Publication of Balloon Test Research Paper",
              "",
              "Description"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Publication of Balloon Test Research Paper",
              "",
              "Description"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Publication of Balloon Test Research Paper
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "gray",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image3.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "gray",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faLock} />}
          iconOnClick={() =>
            handleOpenModal(
              "Building Space Grade CubeSat",
              "",
              "Description"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Building Space Grade CubeSat",
              "",
              "Description"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Building Space Grade CubeSat
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "gray",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image3.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "gray",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faLock} />}
          iconOnClick={() =>
            handleOpenModal(
              "Launching the CubeSat",
              "",
              "Description"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Launching the CubeSat",
              "",
              "Description"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Launching the CubeSat
          </h3>
        </VerticalTimelineElement>

        <VerticalTimelineElement
          className="vertical-timeline-element--education"
          contentStyle={{
            background: "gray",
            color: "#fff",
            backgroundImage: "url('path/to/your/locked-image3.jpg')",
            backgroundSize: "cover",
          }}
          iconStyle={{
            background: "gray",
            color: "#fff",
          }}
          icon={<FontAwesomeIcon icon={faLock} />}
          iconOnClick={() =>
            handleOpenModal(
              "Commercializing the CubeSats at an affordable price",
              "",
              "Description"
            )
          }
          onTimelineElementClick={() =>
            handleOpenModal(
              "Commercializing the CubeSats at an affordable price",
              "",
              "Description"
            )
          }
        >
          <h3 className="vertical-timeline-element-title">
            Commercializing the CubeSats at an affordable price
          </h3>
        </VerticalTimelineElement>

        {/* Add more locked events as per your need */}
      </VerticalTimeline>

      {/* Modal for displaying event details */}
      <Modal open={isModalOpen} onClose={handleCloseModal} center>
        <div style={{ padding: "30px 0" }}>
          <h2>{modalContent.title}</h2>
          <p>{modalContent.date}</p>
          <p>{modalContent.description}</p>
        </div>
      </Modal>
    </div>
  );
};

export default Timeline;
