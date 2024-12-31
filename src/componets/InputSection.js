import React from "react";
import "./InputSection.css";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt, FaLinkedin, FaInstagram, FaTwitter } from "react-icons/fa";

const contactInfo = [
  {
    icon: <FaPhoneAlt/>,        
    title: "Call Anytime",
    details: "+91 8130587803",
  },
  {
    icon: <FaEnvelope />,
    title: "Send Email",
    details: "support@brainsensei.com",
  },
  {
    icon: <FaMapMarkerAlt/>,
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
      {/* Form Section */}
      <div className="form-section">
        <h2>Get In Touch</h2>
        <h3>Hey! Let's Talk</h3>
        <form className="contact-form">
          <input type="text" placeholder="Name" />
          <input type="email" placeholder="Email" />
          <input type="tel" placeholder="Phone" />
          <textarea placeholder="Your Message"></textarea>
          <button type="submit">Send Now</button>
        </form>
      </div>

      {/* Info Section */}
      <div className="info-section">
        {contactInfo.map((info, index) => (
          <div key={index} className="contact-info">
            
            <p>
              {info.title}
            </p>
            <div className="contact-icon">
            {info.icon}
            </div>
         
            <span>{info.details}</span>
           
          </div>
        ))}

        <div className="social-icons">
          <p className="social">Follow us</p>
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
  );
};

export default InputSection;
