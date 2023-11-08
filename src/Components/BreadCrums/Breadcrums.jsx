import React from 'react';
import './Breadcrum.css';
import arrow from '../Assets/breadcrum_arrow.png';

function Breadcrums (props) {
    const {product} = props;
  return (
    <div className='breadcrum'>
        HOME <img src={arrow} alt="arrow_icon" /> SHOP <img src={arrow} alt="arrow_icon" /> {product.category} <img src={arrow} alt="arrow" /> {product.name}
    </div>
  )
}

export default Breadcrums