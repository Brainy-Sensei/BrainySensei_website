import React from 'react';
import './Footer.css';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../image/logo.png';
 // Adjust the path as needed

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brainy Sensei Section */}
        <div className="footer-section brainy-sensei">
          <div className="logo-text-container">
            <img src={logo} alt="Brainy Sensei Logo" className="footer-logo" />
            <h4>Brainy Sensei</h4>
          </div>
          <p className='p'>
            Better insights drive smarter decisions, stronger relationships, and new growth opportunities for long-term success.
          </p>
          <div className="social-icons1">
            <a href="#"><FaLinkedinIn className="icon1" /></a>
            <a href="#"><FaInstagram className="icon1" /></a>
            <a href="#"><FaTwitter className="icon1" /></a>
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <div className="footer-section services"> 
            <h4>Services</h4></div>
         
          <ul>
            <li>Software Development</li>
            <li>Generative AI</li>
            <li>LLM and Chatbot Development</li>
            <li>AI Customization</li>
            <li>Tech Team for Your Company</li>
            <li>Edtech Solution</li>
          </ul>
        </div>

        {/* Quick Links Section */}
        <div className="footer-section">
          <div className="footer-section quick-links">
            <h4>Quick Link</h4>
          </div>
          
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        {/* Get in Touch Section */}
        <div className="footer-section get-in-touch">
          <div className="footer-section get-in-touch"> <h4>Get in touch</h4></div>
         
          <p>Better Insights For Business Growth</p>
          <form>
            <input type="email" placeholder="Email" />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
