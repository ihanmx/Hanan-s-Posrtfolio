import React from "react";

const Version = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title"> Version Control</h3>
      <div className="skills__box">
        <div className="skills__group">
          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">Git</h3>
              {/* <span className="skills__level">Intermediate</span> */}
            </div>
          </div>

          <div className="skills__data">
            <i class="bx bx-badge-check"></i>

            <div>
              <h3 className="skills__name">GitHub</h3>
              {/* <span className="skills__level">Basic</span> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Version;
