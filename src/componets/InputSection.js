import React from "react";
import "./css/InputSection.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt />,
    title: "Call Anytime",
    details: "+91 8130587803",
  },
  {
    icon: <FaEnvelope />,
    title: "Send Email",
    details: "support@brainsensei.com",
  },
  {
    icon: <FaMapMarkerAlt />,
    title: "Visit Us",
    details: "59-60, Block E, Noida Sector 3, Noida, Uttar Pradesh 201301",
  },
];

const socialIcons = [
  { icon: <FaLinkedin />, link: "https://linkedin.com" },
  { icon: <FaInstagram />, link: "https://instagram.com" },
  { icon: <FaTwitter />, link: "https://twitter.com" },
];

const InputSection = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-heading">Get In Touch</h2>
      <h3 className="contact-subheading">Hey! Let's Talk</h3>
      <div className="content-section">
        <div className="form-section">
          <form className="contact-form">
            <input type="text" placeholder="Name" />
            <input type="email" placeholder="Email" />
            <input type="tel" placeholder="Phone" />
            <textarea placeholder="Your Message"></textarea>
            <button type="submit">Send Now</button>
          </form>
        </div>
        <div className="info-section">
          {contactInfo.map((info, index) => (
            <div key={index} className="contact-info">
              <p>
                {info.icon}
                 {info.title}
                 
              </p>
              <span>{info.details}</span>
            </div>
          ))}
          <div className="social-icons">
            <p>Follow us</p>
            <div className="icons">
              {socialIcons.map((social, index) => (
                <a key={index} href={social.link} target="_blank" rel="noopener noreferrer">
                  {social.icon}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InputSection;