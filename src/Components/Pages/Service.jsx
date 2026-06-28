import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { 
  FiArrowRight, FiCheck, FiChevronRight, FiX, FiFilter, 
  FiMonitor, FiSmartphone, FiPenTool, FiShoppingCart, 
  FiTrendingUp, FiBriefcase, FiClock, FiAward, FiUsers,
  FiStar, FiHeart, FiZap, FiGlobe, FiCode, FiLayout,
  FiShoppingBag, FiTrendingUp as FiTrending,
  FiCloud, FiShield, FiServer, FiDatabase,
  FiUserCheck, FiMessageCircle, FiThumbsUp, FiBarChart2,
  FiBox, FiCpu, FiHexagon
} from 'react-icons/fi';
import { 
  SiReact, SiNodedotjs, SiTailwindcss, SiMongodb,
  SiFigma, SiStripe, SiShopify, SiGoogleanalytics,
  SiPython, SiDjango, SiPostgresql, SiTypescript,
  SiNextdotjs, SiDocker, SiKubernetes,
  SiFlutter, SiSwift, SiKotlin, SiFirebase, SiRedis,
  SiGraphql, SiVuedotjs, SiLaravel, SiMysql
} from 'react-icons/si';
import { HiOutlineSparkles } from 'react-icons/hi';
import "../Style/Service.css";
import atherWebsite from '../Logos/ather-website.png';
import atherLogo from '../Logos/ather.jpg';
import jkwebsite from '../Logos/jk-website.png';
import jkLogo from '../Logos/JKlogo.jpg';
import shamshWebsite from '../Logos/shamsh-website.png';
import shamshLogo from '../Logos/shamsheco.jpeg';

const ServicesPage = () => {
  const [selectedService, setSelectedService] = useState(null);
  const [filter, setFilter] = useState('all');
  const [setActiveFilter] = useState(null);
  const location = useLocation();

  useEffect(() => {
    if (location.state && location.state.filter) {
      setFilter(location.state.filter);
      setActiveFilter(location.state.filter);
    }
  }, [location.state]);

  // Testimonial Data - Easy to update
  const testimonials = [
    {
      id: 1,
      name: "Ather Trading",
      category: "E-commerce Platform",
      text: "Resicode delivered our project ahead of schedule with exceptional quality. Their team was professional, communicative, and truly understood our vision. The results exceeded our expectations!",
      rating: 5,
      website: "https://athertrading.com/",
      websiteDisplay: "athertrading.com",
      websiteImage: atherWebsite,
      logoImage: atherLogo,
      gradient: "from-indigo-500 to-purple-600",
      bgColor: "#4F46E5"
    },
    {
      id: 2,
      name: "JK AUTO ELECTRONIC WORKS",
      category: "Automotive Electronics",
      text: "The team at Resicode transformed our online presence completely. They built a robust e-commerce platform that has increased our sales by 40%. Their technical expertise and customer support are outstanding!",
      rating: 5,
      website: "https://www.jkautoelectronicworks.com/",
      websiteDisplay: "jkautoelectronicworks.com",
      websiteImage: jkwebsite,
      logoImage: jkLogo,
      gradient: "from-orange-500 to-red-600",
      bgColor: "#EA580C"
    },
    {
      id: 3,
      name: "SHAMSH ECO RENEW RECYCLING",
      category: "Sustainable Solutions",
      text: "Working with Resicode was a game-changer for our recycling business. They created a modern, user-friendly platform that has streamlined our operations and attracted more eco-conscious customers. Highly recommended!",
      rating: 5,
      website: "https://shamsheco.com/",
      websiteDisplay: "shamsheco.com",
      websiteImage: shamshWebsite,
      logoImage: shamshLogo,
      gradient: "from-emerald-500 to-teal-600",
      bgColor: "#10B981"
    }
  ];

  const services = [
    {
      id: 1,
      title: "Web Development",
      icon: <FiCode className="service-icon-svg" />,
      category: "web",
      description: "Custom web applications built with modern technologies",
      fullDescription: "We create responsive, scalable web applications using React, Node.js, and other cutting-edge technologies. Our solutions are tailored to your business needs and deliver exceptional performance across all devices.",
      features: ["Responsive Design", "SEO Optimized", "Fast Performance", "Cross-browser Compatible", "Scalable Architecture", "Secure Implementation"],
      techStack: [
        { name: "React", icon: <SiReact /> },
        { name: "Node.js", icon: <SiNodedotjs /> },
        { name: "Next.js", icon: <SiNextdotjs /> },
        { name: "TypeScript", icon: <SiTypescript /> }
      ],
      cardIcon: <SiReact />,
      price: "",
      color: "#4F46E5",
      gradient: "from-indigo-500 to-purple-600"
    },
    {
      id: 2,
      title: "Mobile App Development",
      icon: <FiSmartphone className="service-icon-svg" />,
      category: "app",
      description: "Native and cross-platform mobile applications",
      fullDescription: "Develop high-performance mobile apps for iOS and Android that provide exceptional user experiences with smooth animations and native functionality.",
      features: ["iOS & Android", "React Native", "Native Performance", "App Store Deployment", "Push Notifications", "Offline Support"],
      techStack: [
        { name: "React Native", icon: <SiReact /> },
        { name: "Flutter", icon: <SiFlutter /> },
        { name: "Swift", icon: <SiSwift /> },
        { name: "Kotlin", icon: <SiKotlin /> }
      ],
      cardIcon: <SiFlutter />,
      price: "",
      color: "#059669",
      gradient: "from-emerald-500 to-teal-600"
    },
    {
      id: 3,
      title: "UI/UX Design",
      icon: <FiLayout className="service-icon-svg" />,
      category: "uiux",
      description: "User-centered design that converts visitors to customers",
      fullDescription: "Our design team creates intuitive interfaces that enhance user engagement and drive business growth through thoughtful design principles.",
      features: ["User Research", "Wireframing", "Prototyping", "Design Systems", "Usability Testing", "Design Handoff"],
      techStack: [
        { name: "Figma", icon: <SiFigma /> },
        { name: "Adobe XD", icon: <FiLayout /> },
        { name: "Sketch", icon: <FiPenTool /> },
        { name: "InVision", icon: <FiMonitor /> }
      ],
      cardIcon: <SiFigma />,
      price: "",
      color: "#DB2777",
      gradient: "from-pink-500 to-rose-600"
    },
    {
      id: 4,
      title: "E-commerce Solutions",
      icon: <FiShoppingBag className="service-icon-svg" />,
      category: "web",
      description: "Complete online store development and optimization",
      fullDescription: "Build and optimize your online store with secure payment processing, inventory management, and seamless shopping experiences.",
      features: ["Payment Integration", "Inventory Management", "Security", "Cart Optimization", "Order Tracking", "Analytics Dashboard"],
      techStack: [
        { name: "Shopify", icon: <SiShopify /> },
        { name: "Stripe", icon: <SiStripe /> },
        { name: "WooCommerce", icon: <FiShoppingCart /> },
        { name: "Custom", icon: <FiCode /> }
      ],
      cardIcon: <SiShopify />,
      price: "",
      color: "#EA580C",
      gradient: "from-orange-500 to-red-600"
    },
    {
      id: 5,
      title: "SEO & Digital Marketing",
      icon: <FiTrending className="service-icon-svg" />,
      category: "web",
      description: "Boost your online visibility and drive targeted traffic",
      fullDescription: "Comprehensive SEO strategies and digital marketing campaigns to grow your business online through organic reach and targeted advertising.",
      features: ["Keyword Research", "Content Strategy", "Link Building", "Performance Tracking", "Competitor Analysis", "ROI Optimization"],
      techStack: [
        { name: "Google Analytics", icon: <SiGoogleanalytics /> },
        { name: "SEMrush", icon: <FiBarChart2 /> },
        { name: "Ahrefs", icon: <FiTrendingUp /> },
        { name: "Moz", icon: <FiAward /> }
      ],
      cardIcon: <SiGoogleanalytics />,
      price: "",
      color: "#0891B2",
      gradient: "from-cyan-500 to-blue-600"
    },
    {
      id: 6,
      title: "Cloud & DevOps",
      icon: <FiCloud className="service-icon-svg" />,
      category: "web",
      description: "Scalable cloud infrastructure and DevOps solutions",
      fullDescription: "Leverage the power of cloud computing with our expert DevOps solutions. We help you build, deploy, and scale applications efficiently.",
      features: ["Cloud Migration", "CI/CD Pipeline", "Containerization", "Monitoring", "Auto-scaling", "Security Compliance"],
      techStack: [
        { name: "AWS", icon: <FiCloud /> },
        { name: "Docker", icon: <SiDocker /> },
        { name: "Kubernetes", icon: <SiKubernetes /> },
        { name: "Azure", icon: <FiServer /> }
      ],
      cardIcon: <SiDocker />,
      price: "",
      color: "#7C3AED",
      gradient: "from-purple-500 to-indigo-600"
    }
  ];

  const filterOptions = [
    { value: 'all', label: 'All Services', icon: <FiGlobe />, color: '#4F46E5' },
    { value: 'web', label: 'Web Development', icon: <FiCode />, color: '#3B82F6' },
    { value: 'app', label: 'App Development', icon: <FiSmartphone />, color: '#10B981' },
    { value: 'uiux', label: 'UI/UX Design', icon: <FiLayout />, color: '#EC4899' }
  ];

  const filteredServices = filter === 'all' 
    ? services 
    : services.filter(service => service.category === filter);

  const processSteps = [
    {
      number: "1",
      title: "Discovery & Consultation",
      description: "We dive deep into your business goals, target audience, and project requirements.",
      duration: "1-2 Days",
      activities: ["Initial Meeting", "Requirement Analysis", "Goal Setting", "Scope Definition"],
      // icon: <FiUsers />
    },
    {
      number: "2",
      title: "Planning & Strategy",
      description: "We create a comprehensive roadmap with detailed specifications and timeline.",
      duration: "3-5 Days",
      activities: ["Project Planning", "Tech Stack Selection", "Timeline Creation", "Resource Allocation"],
      // icon: <FiBriefcase />
    },
    {
      number: "3",
      title: "Design & Development",
      description: "Our team brings your vision to life with creative design and robust development.",
      duration: "2-4 Weeks",
      activities: ["UI/UX Design", "Development", "Quality Checks", "Client Review"],
      // icon: <FiPenTool />
    },
    {
      number: "4",
      title: "Testing & Quality Assurance",
      description: "Rigorous testing ensures flawless performance and security.",
      duration: "1-2 Weeks",
      activities: ["Testing", "Bug Fixing", "Performance Optimization", "Security Audit"],
      // icon: <FiCheck />
    },
    {
      number: "5",
      title: "Deployment & Launch",
      description: "Smooth deployment to production environment with documentation.",
      duration: "3-5 Days",
      activities: ["Deployment", "Final Testing", "Documentation", "Training"],
      // icon: <FiZap />
    },
    {
      number: "6",
      title: "Support & Maintenance",
      description: "Ongoing support and optimization for long-term success.",
      duration: "Ongoing",
      activities: ["Technical Support", "Updates", "Performance Monitoring", "Enhancements"],
      // icon: <FiHeart />
    }
  ];

  const stats = [
    { value: "150+", label: "Projects Delivered", icon: <FiAward />, trend: "+45%" },
    { value: "99%", label: "Client Satisfaction", icon: <FiThumbsUp />, trend: "+12%" },
    { value: "24/7", label: "Support Available", icon: <FiMessageCircle />, trend: "Always" },
    { value: "25+", label: "Expert Team", icon: <FiUsers />, trend: "+8" }
  ];

  return (
    <div className="services-page-wrapper">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="hero-background"></div>
        <div className="hero-gradient-1"></div>
        <div className="hero-gradient-2"></div>
        <div className="hero-gradient-3"></div>
        
        <div className="container">
          <div className="hero-content">
            <div className="hero-badge">
              <HiOutlineSparkles />
              <span>Premium Services</span>
            </div>
            
            <h1 className="hero-title">
              Digital Solutions That
              <br />
              <span>Drive Exponential Growth</span>
            </h1>
            
            <p className="hero-description">
              At Resicode, we provide enterprise-grade web development and digital solutions tailored 
              to meet the unique needs of your business. Our goal is to help you scale online with 
              modern, secure, and high-performance solutions.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="services-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Service <span>Portfolio</span></h2>
            <p>Explore our comprehensive range of digital services designed to elevate your business</p>
            <div className="section-divider"></div>
          </div>

          <div className="filter-buttons">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`filter-btn ${filter === option.value ? 'active' : ''}`}
                style={{ '--filter-color': option.color }}
              >
                {option.icon}
                {option.label}
                {filter === option.value && <span className="filter-active-dot"></span>}
              </button>
            ))}
          </div>

          <div className="services-grid">
            {filteredServices.map((service) => (
              <div
                key={service.id}
                onClick={() => setSelectedService(service)}
                className="service-card"
                style={{ '--service-color': service.color, '--service-gradient': `linear-gradient(135deg, ${service.gradient.split(' ')[1]}, ${service.gradient.split(' ')[3]})` }}
              >
                <div className="service-card-inner">
                  <div className="service-card-glow"></div>
                  <div className={`service-icon ${service.gradient}`}>
                    {service.icon}
                  </div>
                  <div className="card-icon-badge">
                    {service.cardIcon}
                  </div>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                  <div className="service-features">
                    {service.features.slice(0, 3).map((feature, idx) => (
                      <span key={idx} className="feature-tag">
                        <FiCheck className="feature-check" />
                        {feature}
                      </span>
                    ))}
                    {service.features.length > 3 && (
                      <span className="feature-tag more-tag">+{service.features.length - 3} more</span>
                    )}
                  </div>
                  <div className="service-tech-stack">
                    {service.techStack && service.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-tag">
                        <span className="tech-icon">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                  <button className="learn-more-btn">
                    <span>Discover Service</span>
                    <FiArrowRight className="btn-arrow" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Proven <span>Process</span></h2>
            <p>A transparent, step-by-step approach to delivering exceptional digital solutions</p>
            <div className="section-divider"></div>
          </div>
          <div className="process-grid">
            {processSteps.map((step, index) => (
              <div key={index} className="process-card">
                <div className="process-card-glow"></div>
                <div className="process-header">
                  <div className="process-number">{step.number}</div>
                  <div className="process-duration">
                    <FiClock />
                    {step.duration}
                  </div>
                </div>
                <div className="process-icon">{step.icon}</div>
                <h3 className="process-title">{step.title}</h3>
                <p className="process-description">{step.description}</p>
                <div className="process-activities">
                  {step.activities.map((activity, idx) => (
                    <span key={idx} className="activity-tag">{activity}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <div className="cta-wrapper">
            <div className="cta-glow"></div>
            <div className="cta-content">
              <span className="cta-badge">Limited Time Offer</span>
              <h2>Ready to Transform Your Business?</h2>
              <p>Let's transform your ideas into a powerful digital solution. Get started with a free consultation and see how we can help your business grow.</p>
              <div className="cta-features">
                <div className="cta-feature"><FiCheck /> <span>Free Initial Consultation</span></div>
                <div className="cta-feature"><FiCheck /> <span>No Commitment Required</span></div>
                <div className="cta-feature"><FiCheck /> <span>Response Within 24 Hours</span></div>
              </div>
            </div>
            <div className="cta-buttons">
              <button className="btn-primary">Get Free Consultation <FiArrowRight /></button>
              <button className="btn-secondary">View Case Studies</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="testimonial-section">
        <div className="container">
          <div className="testimonial-header">
            <h2>What Our <span>Clients Say</span></h2>
            <p>Real stories from businesses we've helped transform</p>
            <div className="section-divider"></div>
          </div>
          
          <div className="testimonials-grid">
            {testimonials.map((testimonial) => (
              <div key={testimonial.id} className="testimonial-card">
                <div className="card-badge">Featured Client</div>
                <div className="website-preview">
                  <img 
                    src={testimonial.websiteImage}
                    alt={`${testimonial.name} Website`}
                    className="website-image"
                  />
                  <div className="website-overlay">
                    <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="website-link">
                      <FiGlobe /> Live Preview
                    </a>
                  </div>
                </div>
                <div className="testimonial-content">
                  <div className="client-logo">
                    <img 
                      src={testimonial.logoImage} 
                      alt={`${testimonial.name} Logo`}
                      className="logo-image"
                    />
                  </div>
                  <div className="rating-section">
                    <div className="testimonial-rating">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <FiStar key={i} className="star-icon" />
                      ))}
                    </div>
                    <div className="verified-badge">
                      <FiCheck className="verified-icon" />
                      <span>Verified Review</span>
                    </div>
                  </div>
                  <p className="testimonial-text">"{testimonial.text}"</p>
                  <div className="testimonial-author">
                    <div className="author-info">
                      <strong>{testimonial.name}</strong>
                      <span>{testimonial.category}</span>
                    </div>
                  </div>
                  <div className="testimonial-footer">
                    <div className="footer-logo">
                      <div className="small-logo">
                        <img src={testimonial.logoImage} alt="logo" className="small-logo-img" />
                      </div>
                      <a href={testimonial.website} target="_blank" rel="noopener noreferrer" className="client-website">
                        {testimonial.websiteDisplay}
                      </a>
                    </div>
                    <div className="project-stats">
                      <span className="stat-badge">Completed 2026</span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Detail Modal */}
      {selectedService && (
        <div className="modal-overlay" onClick={() => setSelectedService(null)}>
          <div className="modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setSelectedService(null)}><FiX /></button>
            <div className={`modal-header ${selectedService.gradient}`}>
              <div className="modal-icon">{selectedService.icon}</div>
              <div>
                <h2>{selectedService.title}</h2>
                <span className="modal-category">
                  {filterOptions.find(f => f.value === selectedService.category)?.label}
                </span>
              </div>
            </div>
            <div className="modal-body">
              <div className="modal-section">
                <h3><HiOutlineSparkles /> Service Overview</h3>
                <p>{selectedService.fullDescription}</p>
              </div>
              <div className="modal-section">
                <h3><FiCheck /> What's Included</h3>
                <div className="features-grid">
                  {selectedService.features.map((feature, idx) => (
                    <div key={idx} className="feature-item"><FiCheck /><span>{feature}</span></div>
                  ))}
                </div>
              </div>
              {selectedService.techStack && (
                <div className="modal-section">
                  <h3><FiServer /> Technologies We Use</h3>
                  <div className="tech-stack-grid">
                    {selectedService.techStack.map((tech, idx) => (
                      <span key={idx} className="tech-stack-tag">
                        <span className="tech-stack-icon">{tech.icon}</span>
                        {tech.name}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="modal-pricing">
                <h3>Pricing</h3>
                <p>Flexible plans available based on project scope. Contact us for a customized quote.</p>
               
              </div>
              <div className="modal-actions">
                <button className="btn-primary">Get Started Now</button>
                <button className="btn-secondary" onClick={() => setSelectedService(null)}>Browse More Services</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ServicesPage;