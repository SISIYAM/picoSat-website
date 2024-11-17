import React from "react";
import "./error.css";

function Error() {
  return (
    <div className="error-container">
      <div className="error-code">404</div>
      <div className="error-message">Oops! Page not found.</div>
      <div className="error-description">
        The page you are looking for might have been removed, renamed, or is
        temporarily unavailable.
      </div>
      <a href="/" className="btn-home">
        Go to Homepage
      </a>
    </div>
  );
}

export default Error;
