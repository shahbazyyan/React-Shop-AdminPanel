import React from 'react';
import './Hero.css';
import hand_icon from '../Assets/hand_icon.png';
import arrow_icon from '../Assets/arrow.png';
import hero_img from '../Assets/hero_image.png';

function Hero() {
  return (
    <div className='hero'>
        <div className="hero-left">
           <h2>NEW ARRIVELS ONLY</h2>
           <div>
            <div className="hand-icon">
                <p>new</p>
                <img src={hand_icon} alt="img"/>
            </div>
            <p>collections</p>
            <p>for everyone</p>
          </div>
          <div className="hero-latest-btn">
            <div>Latest Collection</div>
            <img src={arrow_icon} alt="img" />
          </div>
        </div>

    <div className="hero-right">
            <img src={hero_img} alt="hero" />
        </div>
    </div>
  )
}

export default Hero