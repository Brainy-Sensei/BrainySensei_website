import React from "react";
import "./Footer.css";
import { FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-section">
        <div className="footer-brand">
          <h2>Brainy Sensei</h2>
          <p>
            Better insights drive smarter decisions, stronger relationships, and
            new growth opportunities for long-term success.
          </p>
          <div className="social-icons">
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </div>

        <div className="footer-links">
          <h3>Services</h3>
          <ul>
            <li>Software Development</li>
            <li>Generative AI</li>
            <li>LLM and Chatbot Development</li>
            <li>AI Customization</li>
            <li>Tech Team for Your Company</li>
            <li>Edtech Solution</li>
          </ul>
        </div>

        <div className="footer-links">
          <h3>Quick Link</h3>
          <ul>
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Portfolio</li>
            <li>Contact</li>
          </ul>
        </div>

        <div className="footer-contact">
          <h3>Get in touch</h3>
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
