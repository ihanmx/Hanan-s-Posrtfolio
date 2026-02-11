import React from "react";

function Social() {
  return (
    <div className="home__social">
      <a
        href="https://github.com/ihanmx"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/hanan-biazid-4a4487252/"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-linkedin"></i>
      </a>
      <a
        href="mailto:hanan.bayazeed56@gmail.com"
        className="home__social-icon"
        target="_blank"
        rel="noreferrer"
      >
        <i className="uil uil-envelope-alt"></i>
      </a>
    </div>
  );
}

export default Social;
