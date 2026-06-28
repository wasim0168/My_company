// SocialLink.jsx
import React from 'react';
import './SocialLink.css'; // Changed to match your filename

const SocialLinks = () => {
  const socialPlatforms = [
    { name: 'Facebook', icon: 'fab fa-facebook-f', url: '#', color: '#1877F2' },
    { name: 'Twitter', icon: 'fab fa-twitter', url: '#', color: '#1DA1F2' },
    { name: 'LinkedIn', icon: 'fab fa-linkedin-in', url: '#', color: '#0077B5' },
    { name: 'Instagram', icon: 'fab fa-instagram', url: '#', color: '#E4405F' },
    { name: 'YouTube', icon: 'fab fa-youtube', url: '#', color: '#FF0000' }
  ];

  return (
    <div className="social-links-section">
      <h3>Follow Us</h3>
      <div className="social-links">
        {socialPlatforms.map((platform) => (
          <a
            key={platform.name}
            href={platform.url}
            className="social-link"
            style={{ '--hover-color': platform.color }}
            aria-label={platform.name}
          >
            <i className={platform.icon}></i>
          </a>
        ))}
      </div>
    </div>
  );
};

export default SocialLinks;