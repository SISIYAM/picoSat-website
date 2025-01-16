import React from "react";

function Footer() {
  return (
    <footer className="footer" id="footer">
      <div className="footer-top section">
        <div className="container">
          <div className="footer-brand">
            <a href="#" className="logo">
              PicoSat4Bangladesh
            </a>
            <p className="footer-text">
              subscribe to our newsletter.
            </p>
            <form action className="newsletter-form">
              <input
                type="email"
                name="email_address"
                placeholder="Enter your email"
                required
                className="email-field"
              />
              <button type="submit" className="form-btn">
                <ion-icon name="paper-plane" aria-hidden="true" />
              </button>
            </form>
          </div>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Our Vision</p>
            </li>
            <li>
              <a href="#timeline" className="footer-link">
                Timeline
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Company</p>
            </li>
            <li>
              <a href="#" className="footer-link">
                About Company
              </a>
            </li>

            {/* <li>
              <a href="#" className="footer-link">
                Latest News
              </a>
            </li> */}
            <li>
              <a href="#" className="footer-link">
                Contact Us
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <p className="footer-list-title">Contact Us</p>
            </li>
            <li className="footer-item">
              <ion-icon name="location" aria-hidden="true" />
              <address className="contact-link address">
                AAUB, Lalmonirhat,Rangpur
              </address>
            </li>
            <li className="footer-item">
              <ion-icon name="call" aria-hidden="true" />
              <a href="tel:+8800000000000" className="contact-link">
                +8800000000000
              </a>
            </li>
            <li className="footer-item">
              <ion-icon name="mail" aria-hidden="true" />
              <a href="mailto:picosat@bsmraau.edu.bd" className="contact-link">
                picosat@bsmraau.edu.bd
              </a>
            </li>
            <li className="footer-item">
              <ul className="social-list">
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-facebook" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-twitter" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-linkedin" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="copyright">
          © 2024 PicoSat4Bangladesh | All Rights Reserved by{" "}
          <a href="#" className="copyright-link">
            PicoSat4Bangladesh
          </a>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
