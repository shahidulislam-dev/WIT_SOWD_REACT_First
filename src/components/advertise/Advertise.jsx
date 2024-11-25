import React from 'react';
import './advertise.css';
import CardPic1 from '../../assets/cardpic1.png';
import CardPic2 from '../../assets/cardpic2.png';
import CardPic3 from '../../assets/cardpic3.png';
import CardPic4 from '../../assets/cardpic4.png';

const Advertise = ()=>{
    return(
        <section>
            <div className="advertise-container">
        <div className="courses-text">
          <p className="green-text">Team</p>
          <h3>Get Quality Education</h3>
          <p className="newtonion">
            Problems trying to resolve the conflict between <br />
            the two major realms of Classical physics: Newtonian mechanics
          </p>
        </div>
        <div className="advertise-card">
          <img src={CardPic1} />
          <img src={CardPic2} />
          <img src={CardPic3} />
          <img src={CardPic4} />
        </div>
      </div>
        </section>
    )
}
export default Advertise;