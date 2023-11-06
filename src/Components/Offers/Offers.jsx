import React from 'react';
import './Offers.css';
import exclusive from '../Assets/exclusive_image.png';

function Offers() {
  return (
    <div className='offers'>
        <div className="offers-left">
           <h1>Exclusive</h1>
           <h1>Offers FOR YOU</h1>
           <p>ONLY ON BEST SELLERS PRODUCTS</p>
           <button>Check Now</button>
        </div>
        <div className="offers-right">
            <img src={exclusive} alt="img" />
        </div>
    </div>
  )
}

export default Offers