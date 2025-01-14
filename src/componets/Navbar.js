import React, { useState } from "react";
import "./Navbar.css";
import logo from "../image/logo.png"
const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      {/* Logo Section */}
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span>Brainy Sensei</span>
      </div>

      {/* Mobile Menu Toggle */}
      <div
        className={`menu-toggle ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>

      {/* Navbar Links */}
      <ul className={`navbar-links ${menuOpen ? "show" : ""}`}>
        {["Home", "About", "Services", "Portfolio", "Contact"].map((item) => (
          <li key={item} className="navbar-item">
            <a href={`#${item.toLowerCase()}`} className="navbar-link">
              {item}
            </a>
          </li>
        ))}
        <li className="navbar-item">
          <button className="navbar-button">Get In Touch</button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;