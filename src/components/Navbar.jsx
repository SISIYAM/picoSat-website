import React, { useEffect, useRef } from "react";

function Navbar() {
  const headerRef = useRef(null);
  const navbarRef = useRef(null);
  const overlayRef = useRef(null);

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
        <a href="#" className="logo">
          PicoSat
        </a>
        <nav className="navbar" ref={navbarRef} data-navbar>
          <div className="wrapper">
            <a href="#" className="logo">
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
              <a href="#home" className="navbar-link" onClick={closeNavbar}>
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="navbar-link" onClick={closeNavbar}>
                About
              </a>
            </li>
            <li>
              <a href="#services" className="navbar-link" onClick={closeNavbar}>
                Teams
              </a>
            </li>
            <li>
              <a
                href="#publications"
                className="navbar-link"
                onClick={closeNavbar}
              >
                Publications
              </a>
            </li>
            {/* <li>
              <a href="#" className="navbar-link" onClick={closeNavbar}>
                Blog
              </a>
            </li> */}
            <li>
              <a href="#" className="navbar-link" onClick={closeNavbar}>
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
