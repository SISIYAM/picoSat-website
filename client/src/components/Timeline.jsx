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
          background: "rgb(33, 150, 243)",
          color: "#fff",
          backgroundImage: "url('path/to/your/image1.jpg')",
          backgroundSize: "cover", // Ensures the image covers the element area
        }}
        contentArrowStyle={{
          borderRight: "7px solid rgb(33, 150, 243)",
        }}
        date="2011 - present"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faCheckCircle} />}
      >
        <h3 className="vertical-timeline-element-title">Creative Director</h3>
        <h4 className="vertical-timeline-element-subtitle">Miami, FL</h4>
        <p>
          Creative Direction, User Experience, Visual Design, Project
          Management, Team Leading
        </p>
      </VerticalTimelineElement>

      {/* Unlocked Event */}
      <VerticalTimelineElement
        className="vertical-timeline-element--work"
        contentStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
          backgroundImage: "url('path/to/your/image2.jpg')",
          backgroundSize: "cover", // Ensure image fits element area
        }}
        date="2008 - 2010"
        iconStyle={{
          background: "rgb(33, 150, 243)",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faCheckCircle} />}
      >
        <h3 className="vertical-timeline-element-title">Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">Los Angeles, CA</h4>
        <p>User Experience, Visual Design</p>
      </VerticalTimelineElement>

      {/* Unlocked Event */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{
          background: "rgb(233, 30, 99)",
          color: "#fff",
          backgroundImage: "url('path/to/your/image3.jpg')",
          backgroundSize: "cover",
        }}
        date="April 2013"
        iconStyle={{
          background: "rgb(233, 30, 99)",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faCheckCircle} />}
      >
        <h3 className="vertical-timeline-element-title">
          Content Marketing for Web, Mobile and Social Media
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Online Course</h4>
        <p>Strategy, Social Media</p>
      </VerticalTimelineElement>

      {/* Unlocked Event */}
      <VerticalTimelineElement
        className="vertical-timeline-element--education"
        contentStyle={{
          background: "rgb(233, 30, 99)",
          color: "#fff",
          backgroundImage: "url('path/to/your/image4.jpg')",
          backgroundSize: "cover",
        }}
        date="2002 - 2006"
        iconStyle={{
          background: "rgb(233, 30, 99)",
          color: "#fff",
        }}
        icon={<FontAwesomeIcon icon={faCheckCircle} />}
      >
        <h3 className="vertical-timeline-element-title">
          Bachelor of Science in Interactive Digital Media Visual Imaging
        </h3>
        <h4 className="vertical-timeline-element-subtitle">Bachelor Degree</h4>
        <p>Creative Direction, Visual Design</p>
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
        <h3 className="vertical-timeline-element-title">Locked Project</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>This project is currently locked and not accessible yet.</p>
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
        <h3 className="vertical-timeline-element-title">Locked Web Designer</h3>
        <h4 className="vertical-timeline-element-subtitle">
          San Francisco, CA
        </h4>
        <p>This role is locked and not available yet.</p>
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
        <h3 className="vertical-timeline-element-title">Locked Scrum Master</h3>
        <h4 className="vertical-timeline-element-subtitle">Certification</h4>
        <p>This certification is locked and not available yet.</p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
};

export default Timeline;
