import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">Hanan</h1>

        <ul className="footer__list">
          <li>
            <a href="#about" className="footer__link">
              About
            </a>
          </li>
          <li>
            <a href="#skills" className="footer__link">
              Skills
            </a>
          </li>
          <li>
            <a href="#services" className="footer__link">
              Services
            </a>
          </li>
          <li>
            <a href="#portfolio" className="footer__link">
              Portfolio
            </a>
          </li>{" "}
          {/* <li>
            <a href="#qualification" className="footer__link">
              Qualification
            </a>
          </li> */}
        </ul>
        <div className="footer__social">
          <a
            href="https://github.com/ihanmx"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-github"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/hanan-biazid-4a4487252/details/projects/"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-linkedin"></i>
          </a>
          <a
            href="mailto:hanan.bayazeed56@gmail.com"
            className="footer__social-link"
            target="_blank"
            rel="noreferrer"
          >
            <i className="uil uil-envelope-alt"></i>
          </a>
        </div>

        <span className="footer__copy">
          &#169; Crypticalcoder,Hanan Biazid. All rights reserved
        </span>
      </div>
    </footer>
  );
};

export default Footer;
