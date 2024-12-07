import React from "react";
import "./header.css";
import { useState } from "react";
const Header = () => {
  // change background header
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });
  // Toggle Menu
  const [Toggle, showMenu] = useState(false);
  const [activeNav, setActiveNav] = useState("");
  return (
    <header className="header">
      <nav className="nav container">
        <a href="" className="nav__logo">
          Hanan
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>
          <ul className={"nav__list"}>
            <li className="nav__item">
              <a
                href="#home"
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link "
                }
                onClick={() => {
                  setActiveNav("#home");
                }}
              >
                <i class="uil uil-estate nav__icon"></i> Home
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#about"
                className={
                  activeNav === "#about"
                    ? "nav__link active-link"
                    : "nav__link "
                }
                onClick={() => {
                  setActiveNav("#about");
                }}
              >
                <i class="uil uil-user nav__icon"></i>About
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#skills"
                className={
                  activeNav === "#skills"
                    ? "nav__link active-link"
                    : "nav__link "
                }
                onClick={() => {
                  setActiveNav("#skills");
                }}
              >
                <i class="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#services"
                className={
                  activeNav === "#services"
                    ? "nav__link active-link"
                    : "nav__link "
                }
                onClick={() => {
                  setActiveNav("#services");
                }}
              >
                <i className="uil uil-briefcase-alt nav__icon "></i>Services
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#portfolio"
                className={
                  activeNav === "#portfolio"
                    ? "nav__link active-link"
                    : "nav__link "
                }
                onClick={() => {
                  setActiveNav("#portfolio");
                }}
              >
                <i class="uil uil-scenery nav__icon"></i>Portfolio
              </a>
            </li>

            <li className="nav__item">
              <a
                href="#contact"
                className={
                  activeNav === "#contact"
                    ? "nav__link active-link"
                    : "nav__link "
                }
                onClick={() => {
                  setActiveNav("#contact");
                }}
              >
                <i class="uil uil-message nav__icon"></i>Contact
              </a>
            </li>
          </ul>

          <i
            class="uil uil-times nav__icon nav__close"
            onClick={() => showMenu(!Toggle)}
          ></i>
        </div>

        <div className="nav__toggle" onClick={() => showMenu(!Toggle)}>
          <i class="uil uil-apps"></i>
        </div>
      </nav>
    </header>
  );
};

export default Header;
