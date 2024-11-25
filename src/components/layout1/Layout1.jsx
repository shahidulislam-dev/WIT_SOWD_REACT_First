import React from "react";
import './layout1.css';
import Product1 from '../../assets/product1.png';
import Product2 from '../../assets/product2.png';

const Layout1 = ()=>{
    return(
        <section>
            <div className="layout1-container">
                <div className="layout1-text">
                    <p className="green-text">Practice Advice</p>
                    <h2>Approdable Packages</h2>
                    <p className="newtonion">Problems trying to resolve the conflict between <br />
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
                <div className="layout1-carousel">
                    <img src={Product1} alt="" />
                    <img src={Product2} alt="" />
                </div>
            </div>
        </section>
    );
}
export default Layout1;