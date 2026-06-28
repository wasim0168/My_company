import React, { useState } from 'react';
import "../Style/servicesCards.css";

const CardsWithHover = () => {
  const [hoveredCard, setHoveredCard] = useState(null);

  const services = [
    {
      id: 1,
      title: "Web Development",
      description: "Custom websites built with modern technologies for optimal performance, responsiveness, and user experience.",
      features: ["Responsive Design", "Fast Loading", "SEO Optimized", "Cross-browser Compatible"],
      techStack: ["React", "Next.js", "Node.js", "TypeScript"],
      color: "#4F46E5",
      gradient: "linear-gradient(135deg, #4F46E5, #7C3AED)",
      bgLight: "#EEF2FF"
    },
    {
      id: 2,
      title: "E-commerce Solutions",
      description: "Complete online stores with secure payment gateways, inventory management, and seamless shopping experiences.",
      features: ["Payment Integration", "Inventory Management", "Mobile Friendly", "Secure Checkout"],
      techStack: ["Shopify", "Stripe", "WooCommerce", "PayPal"],
      color: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #F97316)",
      bgLight: "#FEF3C7"
    },
    {
      id: 3,
      title: "UI/UX Design",
      description: "User-centered designs that create intuitive, engaging experiences and drive conversions.",
      features: ["User Research", "Wireframing", "Prototyping", "Usability Testing"],
      techStack: ["Figma", "Sketch", "InVision", "Adobe XD"],
      color: "#EC4899",
      gradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
      bgLight: "#FCE7F3"
    },
    {
      id: 4,
      title: "Web Applications",
      description: "Scalable web applications with robust backend systems and real-time features.",
      features: ["Real-time Features", "API Integration", "PWA Support", "Scalable Architecture"],
      techStack: ["MongoDB", "PostgreSQL", "Redis", "GraphQL"],
      color: "#06B6D4",
      gradient: "linear-gradient(135deg, #06B6D4, #0284C7)",
      bgLight: "#CFFAFE"
    },
    {
      id: 5,
      title: "SEO & Marketing",
      description: "Continuous optimization and marketing strategies to boost your online presence.",
      features: ["SEO Optimization", "Content Strategy", "Analytics", "Conversion Rate"],
      techStack: ["Google Analytics", "SEMrush", "Ahrefs", "Hotjar"],
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #059669)",
      bgLight: "#D1FAE5"
    },
    {
      id: 6,
      title: "Custom Solutions",
      description: "Tailored software solutions designed to meet your unique business requirements.",
      features: ["Custom Software", "API Development", "System Integration", "Legacy Modernization"],
      techStack: ["Python", "Django", "PostgreSQL", "REST API"],
      color: "#8B5CF6",
      gradient: "linear-gradient(135deg, #8B5CF6, #6D28D9)",
      bgLight: "#EDE9FE"
    }
  ];

  return (
    <div className="services-modern-wrapper">
      {/* Background Decorations */}
      <div className="services-bg-decoration"></div>
      <div className="services-bg-blob-1"></div>
      <div className="services-bg-blob-2"></div>
      
      {/* Section Header */}
      <div className="services-modern-header">
        <div className="services-modern-badge">
          <span>Our Expertise</span>
        </div>
        <h2 className="services-modern-title">
          Transforming Ideas Into
          <span className="gradient-text"> Digital Reality</span>
        </h2>
        <p className="services-modern-subtitle">
          We deliver cutting-edge digital solutions that help businesses grow and succeed in the modern era
        </p>
        <div className="services-modern-divider">
          <div className="divider-line"></div>
          <div className="divider-icon"></div>
          <div className="divider-line"></div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="services-modern-grid">
        {services.map((service, index) => (
          <div
            key={service.id}
            className={`service-modern-card ${hoveredCard === service.id ? 'hovered' : ''}`}
            onMouseEnter={() => setHoveredCard(service.id)}
            onMouseLeave={() => setHoveredCard(null)}
            style={{ '--service-color': service.color, '--service-gradient': service.gradient }}
          >
            {/* Card Number */}
            <div className="card-number">0{index + 1}</div>
            
            <div className="service-modern-card-inner">
              {/* Glow Effect */}
              <div className="card-modern-glow"></div>

              {/* Title */}
              <h3 className="service-modern-title">{service.title}</h3>
              <p className="service-modern-description">{service.description}</p>

              {/* Features */}
              <div className="service-modern-features">
                {service.features.map((feature, idx) => (
                  <div key={idx} className="feature-modern-item">
                    <span>{feature}</span>
                  </div>
                ))}
              </div>

              {/* Tech Stack */}
              <div className="service-tech-stack">
                {service.techStack.map((tech, idx) => (
                  <span key={idx} className="tech-stack-pill">{tech}</span>
                ))}
              </div>

              {/* Button */}
              <button className="service-modern-btn">
                <span>Discover Service</span>
                <div className="btn-shine"></div>
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Floating CTA */}
    </div>
  );
};

export default CardsWithHover;