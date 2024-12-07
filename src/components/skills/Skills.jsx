import React from "react";
import "./skills.css";
import Frontend from "./FrontEnd";
import Backend from "./Backend";
import Design from "./Design";
import Version from "./Version";
const Skills = () => {
  return (
    <section className="section skills" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">My technical level</span>
      <div className="skills__container container grid">
        <Frontend />
        <Backend />
        <Design />
        <Version />
      </div>
    </section>
  );
};

export default Skills;
