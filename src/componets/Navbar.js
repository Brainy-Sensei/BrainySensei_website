import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../image/logo.png";

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
        <ul className={`menu ${isOpen ? "open" : ""}`}>
          <li>
            <NavLink
              to="/home"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              About
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Services
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Portfolio
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "menu-item active" : "menu-item"
              }
            >
              Contact
            </NavLink>
          </li>
          <li>
            <button className="btn-contact">Get In Touch</button>
          </li>
        </ul>
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
