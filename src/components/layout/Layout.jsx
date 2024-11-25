import React from "react";
import "./layout.css";
import Img2 from "../../assets/image2.png";

const Layout = () => {
  return (
    <section>
      <div className="layout-container">
        <div className="layout-image">
          <img src={Img2} alt="" />
        </div>
        <div className="layout-text">
          <div className="red-line"></div>
          <h1>
            Video in Live <br />
            Action
          </h1>
          <p>
            Problems trying to resolve the conflict between <br />the two major realms
            of Classical physics: <br/> Newtonian mechanics
          </p>
          <a href="">Learn More</a>
        </div>
      </div>
    </section>
  );
};

export default Layout;
