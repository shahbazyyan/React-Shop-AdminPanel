import React from 'react';
import './Footer.css';
import footerLogo from '../Assets/logo.png';
import insta from '../Assets/instagram_icon.png';
import pintester from '../Assets/pintester_icon.png';
import whatsapp from '../Assets/whatsapp_icon.png';

function Footer() {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={footerLogo} alt="logo" />
            <p>SHOPPING</p>
        </div>
       <ul className="footer-links">
         <li>Company</li>
         <li>Offices</li>
         <li>About</li>
         <li>Contact</li>
         <li>Producs</li>   
       </ul> 
       <div className="footer-social-icon">
          <div className="footer-icons-container">
            <img src={insta} alt="img"/>
          </div>
          <div className="footer-icons-container">
            <img src={pintester} alt="img"/>
          </div>
          <div className="footer-icons-container">
            <img src={whatsapp} alt="img"/>
          </div>
       </div>
       <div className="footer-copyright">
         <hr />
         <p>Copyright @ 2024 - All Rigths Reserved </p>
       </div>
    </div>
  )
}

export default Footer