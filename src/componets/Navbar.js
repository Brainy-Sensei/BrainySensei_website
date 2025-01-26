import React, { useState } from "react";
import "./css/Navbar.css"
import logo from "../image/logo.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Brainy Sensei" />
          <span>Brainy Sensei</span>
        </div>
        <div className={`menu ${isOpen ? "open" : ""}`}>
          <a href="#home" className="menu-item active">
            Home
          </a>
          <a href="#about" className="menu-item">
            About
          </a>
          <a href="#services" className="menu-item">
            Services
          </a>
          <a href="#portfolio" className="menu-item">
            Portfolio
          </a>
          <a href="#contact" className="menu-item">
            Contact
          </a>
          <button className="btn-contact">Get In Touch</button>
        </div>
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
