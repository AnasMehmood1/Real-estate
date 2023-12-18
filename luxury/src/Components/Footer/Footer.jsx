import React from 'react'
import "./Footer.css"
const Footer = () => {
  return (
    <div>
      <div className="footer-container">
       <div className="inner-container">
        <div className="footer-logo">
            <h3>Luxury</h3>
            <p>Our vision is to make all people <br /> the best place to live for them.</p>
        </div>
        <div className="footer-about">
            <h3>About</h3>
             <li>About Us</li>
             <li>Features</li>
             <li>News & Blog</li>
        </div>
        <div className="company">
            <h3>Company</h3>
            <li>How We Work?</li>
            <li>Capital</li>
            <li>Security</li>
        </div>
        <div className="support">
            <h3>Support</h3>
            <li>FAQs</li>
            <li>Support center</li>
            <li>Contact Us</li>
        </div>
        <div className="follow">
            <h3>Follow US</h3>
            <box-icon type='logo' name='facebook-circle'></box-icon>
            <box-icon name='instagram-alt' type='logo' ></box-icon>
            <box-icon name='behance' type='logo' ></box-icon>
        </div>
       </div>
       <p className='footer-sec'>@Luxury All right reserved</p>
      </div>
    </div>
  )
}

export default Footer
