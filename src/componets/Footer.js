import React from "react";
import "./Footer.css";
import logo from "../image/logo.png"; // Replace with your actual logo path
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Brainy Sensei Section */}
        <div className="footer-section brainy-sensei">
          <img src={logo} alt="Brainy Sensei Logo" className="footer-logo" />
          <h4 className="footer-title">Brainy Sensei</h4>
          <p className="footer-title1">
            Better insights drive smarter decisions, stronger relationships, and
            new growth opportunities for long-term success.
          </p>
          <div className="social-icons1">
            <FaLinkedin className="icon1" />
            <FaInstagram className="icon1" />
            <FaTwitter className="icon1" />
          </div>
        </div>

        {/* Services Section */}
        <div className="footer-section">
          <h4>Services</h4>
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
          <h4>Quick Link</h4>
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
          <h4>Get in touch</h4>
          <p className="p">Better Insights For Business Growth</p>
          <form>
            <input type="email" placeholder="Email" required />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
