import React from 'react';
import "../Style/Cards.css";

const CardsWithHover = () => {
  const stats = [
    { value: "3+", label: "Years Excellence", color: "#4F46E5", bg: "linear-gradient(135deg, #EEF2FF, #E0E7FF)" },
    { value: "10+", label: "Projects Complete", color: "#10B981", bg: "linear-gradient(135deg, #D1FAE5, #A7F3D0)" },
    { value: "100%", label: "Client Success", color: "#F59E0B", bg: "linear-gradient(135deg, #FEF3C7, #FDE68A)" },
    { value: "30+", label: "Happy Clients", color: "#EC4899", bg: "linear-gradient(135deg, #FCE7F3, #FBCFE8)" },
  ];

  const visionMission = [
    {
      title: "Our Vision",
      description: "To be the global leader in digital innovation, creating transformative web solutions that empower businesses to reach new heights of success.",
      color: "#4F46E5",
      gradient: "linear-gradient(135deg, #4F46E5, #7C3AED)",
      accent: "radial-gradient(circle at 0% 0%, rgba(79, 70, 229, 0.1), transparent)"
    },
    {
      title: "Our Mission",
      description: "To deliver exceptional web solutions through innovation, collaboration, and unwavering commitment to quality, helping businesses thrive in the digital landscape.",
      color: "#EC4899",
      gradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
      accent: "radial-gradient(circle at 0% 0%, rgba(236, 72, 153, 0.1), transparent)"
    },
    {
      title: "Our Values",
      description: "Innovation, Integrity, Excellence, Collaboration, and Client-Centricity are the core values that guide every decision we make.",
      color: "#10B981",
      gradient: "linear-gradient(135deg, #10B981, #059669)",
      accent: "radial-gradient(circle at 0% 0%, rgba(16, 185, 129, 0.1), transparent)"
    }
  ];

  const whyChooseUs = [
    {
      title: "Trust & Security",
      description: "Enterprise-grade security protocols and transparent communication ensure your project is always in safe hands.",
      color: "#4F46E5"
    },
    {
      title: "Innovation First",
      description: "We leverage cutting-edge technologies to deliver future-proof solutions that give you a competitive edge.",
      color: "#F59E0B"
    },
    {
      title: "Cost Efficiency",
      description: "Premium quality solutions at competitive prices, maximizing your ROI without compromising excellence.",
      color: "#10B981"
    }
  ];

  return (
    <div className="about-ultra-wrapper">
      {/* Animated Background Elements */}
      <div className="about-ultra-bg">
        <div className="bg-glow-1"></div>
        <div className="bg-glow-2"></div>
        <div className="bg-glow-3"></div>
        <div className="bg-grid"></div>
      </div>
      
      {/* Hero Section */}
      <div className="about-ultra-hero">
        <div className="about-ultra-container">
          <div className="hero-floating-elements">
            <div className="float-1"></div>
            <div className="float-2"></div>
            <div className="float-3"></div>
            <div className="float-4"></div>
          </div>
          
          <h1 className="about-ultra-title">
            Crafting Digital 
            <span className=""> Masterpieces</span>
          </h1>
          <p className="about-ultra-description">
            We're not just developers — we're digital architects, creative problem-solvers, 
            and your trusted partners in building extraordinary web experiences.
          </p>
         
        </div>
      </div>

      {/* Stats Section - Glassmorphism */}
      <div className="about-ultra-stats">
        <div className="about-ultra-container">
          <div className="stats-grid-ultra">
            {stats.map((stat, index) => (
              <div key={index} className="stat-card-ultra" style={{ background: stat.bg }}>
                <div className="stat-glow"></div>
                <div className="stat-info">
                  <h3 className="stat-value-ultra" style={{ color: stat.color }}>{stat.value}</h3>
                  <p className="stat-label-ultra">{stat.label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Vision Mission Values - 3D Cards */}
      <div className="about-ultra-vmv">
        <div className="about-ultra-container">
          <div className="section-header-ultra">
            <div className="header-badge">Core Principles</div>
            <h2>Our <span className="gradient-text">Foundation</span></h2>
            <p>The pillars that define who we are and guide our journey</p>
            <div className="header-decoration">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="vmv-grid-ultra">
            {visionMission.map((item, index) => (
              <div key={index} className="vmv-card-ultra" style={{ '--vmv-color': item.color }}>
                <div className="vmv-card-bg" style={{ background: item.accent }}></div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
                <div className="vmv-card-footer">
                  <div className="vmv-dot" style={{ background: item.color }}></div>
                  <div className="vmv-line" style={{ background: item.gradient }}></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us - Premium Cards */}
      <div className="about-ultra-whyus">
        <div className="about-ultra-container">
          <div className="section-header-ultra">
            <div className="header-badge">Why Choose Us</div>
            <h2>What Makes Us <span className="gradient-text">Different</span></h2>
            <p>Discover the advantages of partnering with RESICODE</p>
            <div className="header-decoration">
              <span></span>
              <span></span>
            </div>
          </div>
          <div className="whyus-grid-ultra">
            {whyChooseUs.map((item, index) => (
              <div key={index} className="whyus-card-ultra" style={{ '--whyus-color': item.color }}>
                <div className="whyus-card-inner">
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                  <div className="whyus-hover-line"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Delivery Section - Premium CTA */}
      <div className="about-ultra-delivery">
        <div className="about-ultra-container">
          <div className="delivery-card-ultra">
            <div className="delivery-bg-pattern"></div>
            <div className="delivery-content">
              <div className="delivery-text">
                <h3>Fast & Agile Delivery</h3>
                <p>We combine speed with precision, delivering high-quality solutions faster than industry standards.</p>
                <div className="delivery-features">
                  <div className="feature-chip">Agile Methodology</div>
                  <div className="feature-chip">Rapid Prototyping</div>
                  <div className="feature-chip">Quality Assurance</div>
                  <div className="feature-chip">24/7 Support</div>
                </div>
              </div>
            </div>
            <div className="delivery-stats">
              <div className="delivery-stat">
                <span className="stat-number">98%</span>
                <span className="stat-text">On-Time Delivery</span>
              </div>
              <div className="delivery-stat">
                <span className="stat-number">100%</span>
                <span className="stat-text">Client Retention</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardsWithHover;