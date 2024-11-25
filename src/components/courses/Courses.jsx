import React from "react";
import "./courses.css";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";
import Girl from '../../assets/girl.jpg';
import Boy from '../../assets/boy.jpg';

const Courses = () => {
  return (
    <section>
      <div className="courses-container">
        <div className="courses-text">
          <p className="green-text">Testimonials</p>
          <h2>Watch our Courses</h2>
          <p className="newtonion">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="courses-card">
          <div className="courses-card-item">
            <img src={Girl} alt="" />
            <p>
              Slate helps you see how many more days <br /> you need to work to reach
              your financial <br /> goal for the month and year.
            </p>
            <div className="ratings">
            <FaStar color="#F3CD03"/>
            <FaStar color="#F3CD03"/>
            <FaStar color="#F3CD03"/>
            <FaStar color="#F3CD03"/>
            <FaRegStar color="#F3CD03"/>
            </div>
            <h5>Regina Miles</h5>
            <h6>Designer</h6>
          </div>

          <div className="courses-card-item">
            <img src={Boy} alt="" />
            <p>
              Slate helps you see how many more days <br /> you need to work to reach
              your financial <br /> goal for the month and year.
            </p>
            <div className="ratings">
            <FaStar className="ratings" color="#F3CD03"/>
            <FaStar color="#F3CD03"/>
            <FaStar color="#F3CD03"/>
            <FaStar color="#F3CD03"/>
            <FaRegStar color="#F3CD03"/>
            </div>
            <h5>Regina Miles</h5>
            <h6>Designer</h6>
          </div>
        </div>
      </div>
    </section>
  );
};
export default Courses;
