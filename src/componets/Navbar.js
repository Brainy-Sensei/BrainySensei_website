import React from 'react';
import './Navbar.css';
import logo from '../image/logo.png'

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <img src={logo} alt="Logo" className="logo" />
        <span>Brainy Sensei</span>
      </div>
      <ul className="navbar-menu">
        <li className="nav-item active">Home</li>
        <li className="nav-item ">About</li>
        <li className="nav-item">Services</li>
        <li className="nav-item">Portfolio</li>
        <li className="nav-item">Contact</li>
      </ul>
      <button className="contact-button">Get In Touch</button>
    </nav>
  );
};

export default Navbar;
