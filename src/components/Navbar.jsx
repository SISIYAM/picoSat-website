import React, { useEffect, useRef } from "react";
import { useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);
  const location = useLocation();
  const navigate = useNavigate();

  const isRootPath = location.pathname === "/";

  // Function to toggle the navbar
  const toggleNavbar = () => {
    navbarRef.current.classList.toggle("active");
    overlayRef.current.classList.toggle("active");
  };

  // Close the navbar when a link is clicked
  const closeNavbar = () => {
    navbarRef.current.classList.remove("active");
    overlayRef.current.classList.remove("active");
  };

  // Scroll to a specific section
  const scrollToSection = (id) => {
    const targetElement = document.getElementById(id);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  // Handle link clicks
  const handleLinkClick = (e, sectionId) => {
    e.preventDefault();
    if (!isRootPath) {
      // Navigate to the root and scroll to the section after navigation
      navigate("/", { replace: false });
      setTimeout(() => scrollToSection(sectionId), 100);
    } else {
      scrollToSection(sectionId);
    }
    closeNavbar();
  };

  // Add scroll event listener to activate header on scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        headerRef.current.classList.add("active");
      } else {
        headerRef.current.classList.remove("active");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up event listener on component unmount
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="header" ref={headerRef} data-header>
      <div className="container">
        <a href="/" className="logo">
          PicoSat
        </a>
        <nav className="navbar" ref={navbarRef} data-navbar>
          <div className="wrapper">
            <a href="/" className="logo">
              PicoSat
            </a>
            <button
              className="nav-close-btn"
              aria-label="close menu"
              onClick={toggleNavbar}
            >
              <ion-icon name="close-outline" aria-hidden="true" />
            </button>
          </div>
          <ul className="navbar-list">
            <li>
              <a
                href="#home"
                className="navbar-link"
                onClick={(e) => handleLinkClick(e, "home")}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="navbar-link"
                onClick={(e) => handleLinkClick(e, "about")}
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#teams"
                className="navbar-link"
                onClick={(e) => handleLinkClick(e, "teams")}
              >
                Teams
              </a>
            </li>
            <li>
              <a
                href="#publications"
                className="navbar-link"
                onClick={(e) => handleLinkClick(e, "publications")}
              >
                Publications
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="navbar-link"
                onClick={(e) => handleLinkClick(e, "contact")}
              >
                Contact Us
              </a>
            </li>
          </ul>
        </nav>
        <button
          className="nav-open-btn"
          aria-label="open menu"
          onClick={toggleNavbar}
        >
          <ion-icon name="menu-outline" aria-hidden="true" />
        </button>
        <a href="#" className="btn-outline">
          Let's talk
        </a>
        <div className="overlay" ref={overlayRef} onClick={toggleNavbar} />
      </div>
    </header>
  );
}

export default Navbar;
