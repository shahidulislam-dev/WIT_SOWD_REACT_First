import React from "react";
import './hero.css'
import heroImage from '../../assets/hero_image.png'

const Hero = ()=>{
    return(
        <div className="container">
            <div className="hero-content">
                <div className="hero-left">
                    <p className="welcome">welcom</p>
                    <h1>Best Learning Opportunities</h1>
                    <p className="text-our-goal">Our goal is to make online <br />education work for everyone</p>
                    <div className="buttons">
                        <button className="btn-left">Join Us</button>
                        <button className="btn-right">Learn More</button>
                    </div>
                </div>
                <div className="image">
                    <img src={heroImage} alt="Learning Opportunities" />
                </div>
            </div>
        </div>
    );
}
export default Hero