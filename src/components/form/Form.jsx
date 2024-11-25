import React from "react";
import "./form.css";

const Form = () => {
  return (
    <section>
      <div className="form-container">
        <div className="content-area">
          <div className="form-text">
            <p className="green-text" style={{textAlign: "center"}}>Newsletter</p>
            <h3>Watch our Courses</h3>
            <p className="content-newtonion">
              Problems trying to resolve the conflict between <br />
              the two major realms of Classical physics: Newtonian mechanics{" "}
            </p>
          </div>
          <div className="input-area">
            <input type="text" placeholder="Your Email" />
            <button>Subscribe</button>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Form;
