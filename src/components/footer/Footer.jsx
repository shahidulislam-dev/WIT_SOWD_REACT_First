import React from "react";
import './footer.css';
import { FiPhone } from "react-icons/fi";
import { SlLocationPin } from "react-icons/sl";
import { IoIosMail } from "react-icons/io";
const Footer = ()=>{
    return(
        <section>
            <div className="footer-container">
                <div className="footer-content">
                    <div className="footer-text">
                        <h5>Company Info</h5>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                    <div className="footer-text">
                        <h5>Legal</h5>
                        <p>About Us</p>
                        <p>Carrier</p>
                        <p>We are hiring</p>
                        <p>Blog</p>
                    </div>
                    <div className="footer-text">
                        <h5>Features</h5>
                        <p>Business Marketing</p>
                        <p>User Analytic</p>
                        <p>Live Chat</p>
                        <p>Unlimited Support</p>
                    </div>
                    <div className="footer-text">
                        <h5>Resources</h5>
                        <p>IOS & Android</p>
                        <p>Watch a Demo</p>
                        <p>Customers</p>
                        <p>API</p>
                    </div>
                    <div className="footer-text">
                        <h5>Get In Touch</h5>
                        <p><FiPhone color="#96BB7C" style={{height:"24px", width:"24px"}}/>(480) 555-0103</p>
                        <p><SlLocationPin color="#96BB7C" style={{height:"24px", width:"24px"}}/>4517 Washington Ave. Manchester,<br /> 
                        Kentucky 39495</p>
                        <p><IoIosMail color="#96BB7C" style={{height:"24px", width:"24px"}}/>debra.holt@example.com</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;