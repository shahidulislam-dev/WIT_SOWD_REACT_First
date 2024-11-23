import React from "react";
import "./card.css";
import Icon1 from "../../assets/desktop_icon.png";
import Icon2 from "../../assets/binocular_icon.png";

const Card = () => {
  return (
    <div className="card">
      <div className="text-package">
        <div className="red-line"></div>
        <h1>Approdable Packages</h1>
        <p>
          Problems trying to resolve the conflict between <br /> the two major
          realms of Classical physics: <br /> Newtonian mechanics
        </p>
        <a href="">Learn More</a>
      </div>
      <div className="right-cards">
        <div className="teacher-card">
          <div className="icon">
            <img src={Icon1} className="icon" />
          </div>
          <h4>Expert instruction</h4>
          <div className="red-line"></div>
          <p>The gradual <br /> accumulation of <br /> information about </p>
        </div>
        <div className="expart-card">
        <div className="icon">
            <img src={Icon2} className="icon" />
          </div>
          <h4>Certified Teacher</h4>
          <div className="red-line"></div>
          <p>The gradual <br /> accumulation of <br /> information about </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
