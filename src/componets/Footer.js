import React from 'react';
import './css/Footer.css';
import { FaLinkedinIn, FaInstagram, FaTwitter } from 'react-icons/fa';
import logo from '../image/logo.png';
 
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
      
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

      
        <div className="footer-section">
          <div className="footer-section services"> 
            <h4>Services</h4>
            </div>
         
          <ul>
          <li><a href="#software-development">Software Development</a></li>
            <li><a href="#generative-ai">Generative AI</a></li>
            <li><a href="#llm-chatbot">LLM and Chatbot Development</a></li>
            <li><a href="#ai-customization">AI Customization</a></li>
            <li><a href="#tech-team">Tech Team for Your Company</a></li>
            <li><a href="#edtech-solution">Edtech Solution</a></li>
          </ul>
        </div>

       
        <div className="footer-section">
          <div className="footer-section quick-links">
            <h4>Quick Link</h4>
          </div>
          
          <ul>
          <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#portfolio">Portfolio</a></li>
            <li><a href="#contact">Contact</a></li>
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
