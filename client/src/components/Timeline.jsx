import React from "react";
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

const Timeline = () => {
  return (
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
        date="2011 - present"
        iconStyle={{
          background: "#4DBC79",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faCheckCircle} />}
      >
        <h3 className="vertical-timeline-element-title">
          Inception: need find out
        </h3>
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
        date="2008 - 2010"
        iconStyle={{
          background: "#4DBC79",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faCheckCircle} />}
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
        date="April 2013"
        iconStyle={{
          background: "#4DBC79",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faCheckCircle} />}
      >
        <h3 className="vertical-timeline-element-title">
          Team Formation: date
        </h3>
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
        date="2002 - 2006"
        iconStyle={{
          background: "#4DBC79",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faCheckCircle} />}
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
          background: "gray",
          color: "#fff",
          backgroundImage: "url('path/to/your/locked-image1.jpg')",
          backgroundSize: "cover",
        }}
        date="2010 - 2011"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
      >
        <h3 className="vertical-timeline-element-title">
          Publication of 1st Conference Paper
        </h3>
      </VerticalTimelineElement>

      {/* Locked Event */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "gray",
          color: "#fff",
          backgroundImage: "url('path/to/your/locked-image2.jpg')",
          backgroundSize: "cover",
        }}
        date="2006 - 2008"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
      >
        <h3 className="vertical-timeline-element-title">
          Purchase of Space Grade CubeSat{" "}
        </h3>
      </VerticalTimelineElement>

      {/* Locked Event */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{
          background: "gray",
          color: "#fff",
          backgroundImage: "url('path/to/your/locked-image3.jpg')",
          backgroundSize: "cover",
        }}
        date="November 2012"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
      >
        <h3 className="vertical-timeline-element-title">
          Study of the CMOS Purchased
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
        date="November 2012"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
      >
        <h3 className="vertical-timeline-element-title">
          Programming the CubeSat and Ground Station
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
        date="November 2012"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
      >
        <h3 className="vertical-timeline-element-title">
          Constriction of LORA based CubeSat
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
        date="November 2012"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
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
        date="November 2012"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
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
        date="November 2012"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
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
        date="November 2012"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
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
        date="November 2012"
        iconStyle={{
          background: "gray",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faLock} />}
      >
        <h3 className="vertical-timeline-element-title">
          Commercializing the CubeSats at an affordable price
        </h3>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
