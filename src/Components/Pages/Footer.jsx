import React, { useState, useEffect } from 'react';
import { 
  FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram, FaGithub, 
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowRight, 
  FaHeart, FaShieldAlt, FaFileContract, FaCookieBite,
  FaPaperPlane, FaRegEnvelope
} from 'react-icons/fa';
import { HiOutlineSparkles } from 'react-icons/hi';
import { useNavigate } from 'react-router-dom';
import "../Style/Footer.css";

const Footer = () => {
  const [email, setEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState(null);
  const [showBackToTop, setShowBackToTop] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleSubscribe = (e) => {
    e.preventDefault();
    if (email) {
      setSubscribeStatus("success");
      setTimeout(() => setSubscribeStatus(null), 3000);
      setEmail("");
    }
  };

  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Our Team", path: "/team" },
    { name: "Contact", path: "/contact" },
  ];

  const services = [
    { name: "Web Development", path: "/services" },
    { name: "Mobile Apps", path: "/services" },
    { name: "UI/UX Design", path: "/services" },
    { name: "E-commerce", path: "/services" },
    { name: "SEO Optimization", path: "/services" },
    { name: "Cloud Solutions", path: "/services" },
  ];

  const policyLinks = [
    { name: "Privacy Policy", path: "/privacy", icon: <FaShieldAlt /> },
    { name: "Terms of Service", path: "/terms", icon: <FaFileContract /> },
    { name: "Cookie Policy", path: "/cookies", icon: <FaCookieBite /> },
  ];

  const socialIcons = [
    { icon: <FaFacebookF />, name: "Facebook", url: "https://www.facebook.com/share/1Cw4XifXPf/", color: "#1877F2" },
    { icon: <FaLinkedinIn />, name: "LinkedIn", url: "https://www.linkedin.com/company/megascript/", color: "#0A66C2" },
    { icon: <FaInstagram />, name: "Instagram", url: "https://www.instagram.com/resicode_solutions?igsh=MmZjd3MxNW43OTFk", color: "#E4405F" },
  ];

  return (
    <footer className="footer-modern">
      {/* Main Footer Content */}
      <div className="footer-container">
        <div className="footer-grid">
          
          {/* Company Info - Column 1 */}
          <div className="footer-column footer-brand">
            <div className="footer-logo">
              {/* <div className="logo-icon">
                <HiOutlineSparkles />
              </div> */}
              <span className="logo-text">RESICODE <span>SOLUTION</span></span>
            </div>
            <p className="footer-description">
              We are a leading web development and design company dedicated to creating 
              innovative and user-friendly digital solutions. We empower businesses to thrive 
              in the digital world with cutting-edge technology and creative expertise.
            </p>
            <div className="footer-social">
              {socialIcons.map((social, index) => (
                <a 
                  key={index} 
                  href={social.url} 
                  className="social-link"
                  style={{ '--social-color': social.color }}
                  aria-label={social.name}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links - Column 2 */}
          <div className="footer-column">
            <h3 className="footer-title">Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a onClick={() => handleNavigation(link.path)}>
                    <FaArrowRight className="link-icon" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services - Column 3 */}
          <div className="footer-column">
            <h3 className="footer-title">Our Services</h3>
            <ul className="footer-links">
              {services.map((service, index) => (
                <li key={index}>
                  <a onClick={() => handleNavigation(service.path)}>
                    <FaArrowRight className="link-icon" />
                    {service.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Newsletter - Column 4 */}
          <div className="footer-column">
            <h3 className="footer-title">Get In Touch</h3>
            <div className="footer-contact">
              <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon" />
                <span>Memon Colony, Front Of Dadi Amma Masjid, Nagpur 440026</span>
              </div>
              <div className="contact-item">
                <FaPhone className="contact-icon" />
                <a href="tel:+919529468439">+91 95294 68439</a>
              </div>
              <div className="contact-item">
                <FaEnvelope className="contact-icon" />
                <a href="mailto:contact@resicode.com">contact@resicode.com</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer-bottom">
        <div className="footer-container">
          <div className="bottom-content">
            <p className="copyright">
              &copy; {new Date().getFullYear()} <span>RESICODE SOLUTION</span>. All rights reserved.
            </p>
            <div className="footer-policies">
              {policyLinks.map((policy, index) => (
                <a key={index} onClick={() => handleNavigation(policy.path)}>
                  {policy.icon}
                  {policy.name}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;