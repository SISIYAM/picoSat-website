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
              {/* Lorem ipsum dolor sit amet consecte tur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore. */}
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
              <a href="#" className="footer-link">
                Strategy &amp; Research
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

            <li>
              <a href="#" className="footer-link">
                Latest News
              </a>
            </li>
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
                Lalmonirhat,Rangpur
              </address>
            </li>
            <li className="footer-item">
              <ion-icon name="call" aria-hidden="true" />
              <a href="tel:+7894631546876" className="contact-link">
                +7894631546876
              </a>
            </li>
            <li className="footer-item">
              <ion-icon name="mail" aria-hidden="true" />
              <a href="mailto:info@hoolix.com" className="contact-link">
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
                    <ion-icon name="logo-instagram" />
                  </a>
                </li>
                <li>
                  <a href="#" className="social-link">
                    <ion-icon name="logo-pinterest" />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="container">
          <p className="copyright">
            © 2022 PicoSat4Bangladesh | All Rights Reserved by{" "}
            <a href="#" className="copyright-link">
              PicoSat4Bangladesh
            </a>
          </p>
          <ul className="footer-bottom-list">
            <li>
              <a href="#" className="footer-bottom-link">
                Privacy Policy
              </a>
            </li>
            <li>
              <a href="#" className="footer-bottom-link">
                Terms of Use
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
