import React from "react";
import { NavLink } from "react-router-dom";
import "./css/Navbar.css";
import logo from "../image/logo.png";

const Navbar = () => {
  let isOpen = false;

  const toggleMenu = () => {
    isOpen = !isOpen;
    document.querySelector(".menu").classList.toggle("open", isOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="logo">
          <img src={logo} alt="Brainy Sensei" />
          <span>Brainy Sensei</span>
        </div>
        <ul className="menu">
          <li>
            <NavLink to="/" className="menu-item">Home</NavLink>
          </li>
          <li>
            <NavLink to="/about" className="menu-item">About</NavLink>
          </li>
          <li>
            <NavLink to="/services" className="menu-item">Services</NavLink>
          </li>
          <li>
            <NavLink to="/portfolio" className="menu-item">Portfolio</NavLink>
          </li>
          <li>
            <NavLink to="/contact" className="menu-item">Contact</NavLink>
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