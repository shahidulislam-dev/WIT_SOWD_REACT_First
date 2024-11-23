import React from "react";
import './navbar.css';
import { FaArrowRight } from "react-icons/fa";

const Navbar = ()=>{
    return(
        <div className="container">
            <div className="nav-container">
                <div className="nav-content">
                    <h3 className="text-logo">Brandname</h3>
                    <div className="nav-items">
                        <a href="">Home</a>
                        <a href="">Product</a>
                        <a href="">Pricing</a>
                        <a href="">Contact</a>
                    </div>
                    <div className="buttons-container">
                        <h4>Login</h4>
                        <button>Join Us<FaArrowRight /></button>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Navbar