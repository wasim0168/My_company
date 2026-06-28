import React, { useState } from "react";
import { 
  FiExternalLink, FiCode, FiShoppingCart, FiHeart, FiBookOpen, 
  FiHome, FiCoffee, FiAward, FiUsers, FiClock, FiCheckCircle,
  FiTrendingUp, FiZap, FiGlobe, FiMonitor, FiSmartphone,
  FiArrowRight, FiStar, FiBriefcase, FiCalendar, FiUserCheck,
  FiLayers, FiSettings, FiBarChart2, FiMail, FiMapPin, FiPhone,
  FiCpu, FiTrendingUp as FiTrendingUpIcon
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import "./Portfolio.css";

export default function Portfolio() {
  const [filter, setFilter] = useState("all");
  const [selectedProject, setSelectedProject] = useState(null);

  const stats = [
    { icon: <FiAward />, value: "10+", label: "Projects Completed", color: "#4F46E5", bg: "#EEF2FF" },
    { icon: <FiStar />, value: "98%", label: "Client Satisfaction", color: "#F59E0B", bg: "#FEF3C7" },
    { icon: <FiClock />, value: "3+", label: "Years Experience", color: "#10B981", bg: "#D1FAE5" },
    { icon: <FiUsers />, value: "7+", label: "Happy Clients", color: "#EF4444", bg: "#FEE2E2" },
  ];

  const industries = [
  { icon: <FiShoppingCart />, name: "E-commerce", color: "#4F46E5", bg: "#EEF2FF", gradient: "linear-gradient(135deg, #4F46E5, #818CF8)" },
  { icon: <FiHeart />, name: "Healthcare", color: "#EF4444", bg: "#FEE2E2", gradient: "linear-gradient(135deg, #EF4444, #F87171)" },
  { icon: <FiBookOpen />, name: "Education", color: "#10B981", bg: "#D1FAE5", gradient: "linear-gradient(135deg, #10B981, #34D399)" },
  { icon: <FiCpu />, name: "Technology", color: "#06B6D4", bg: "#CFFAFE", gradient: "linear-gradient(135deg, #06B6D4, #22D3EE)" },
  { icon: <FiHome />, name: "Real Estate", color: "#F59E0B", bg: "#FEF3C7", gradient: "linear-gradient(135deg, #F59E0B, #FBBF24)" },
  { icon: <FiCoffee />, name: "Food & Beverage", color: "#EC4899", bg: "#FCE7F3", gradient: "linear-gradient(135deg, #EC4899, #F472B6)" },
  { icon: <FiTrendingUp />, name: "Finance", color: "#8B5CF6", bg: "#EDE9FE", gradient: "linear-gradient(135deg, #8B5CF6, #A78BFA)" },
  { icon: <FiBriefcase />, name: "Consulting", color: "#F97316", bg: "#FFEDD5", gradient: "linear-gradient(135deg, #F97316, #FB923C)" },
];

  const projects = [
    {
      id: 1,
      title: "Ather Trading - E-commerce Platform",
      industry: "Wholeseller of Solar Panel",
      client: "Ather Traders",
      duration: "2 months",
      team: "2 developers",
      category: "ecommerce",
      tech: ["HTML & CSS", "Tailwind CSS", "Swiper.js", "Google Maps", "HSTS Security", "CDN Links"],
      description: "A modern e-commerce platform for solar panel wholesale business with integrated payment gateway and inventory management system.",
      image: "https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=600",
      gradient: "linear-gradient(135deg, #4F46E5, #7C3AED)"
    },
    {
      id: 2,
      title: "MedCare - Healthcare Management",
      industry: "Healthcare",
      client: "MedCare Hospitals",
      duration: "5 months",
      team: "6 developers",
      category: "healthcare",
      tech: ["React & TypeScript", "Django", "PostgreSQL", "WebRTC", "HIPAA Compliance", "Real-time Updates"],
      description: "Complete healthcare management solution with patient portals, appointment scheduling, and telemedicine features.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?w=600",
      gradient: "linear-gradient(135deg, #EF4444, #EC4899)"
    },
    {
      id: 3,
      title: "EduTech Pro - Learning Platform",
      industry: "Education",
      client: "EduTech Pro",
      duration: "4 months",
      team: "5 developers",
      category: "education",
      tech: ["Next.js", "Tailwind", "Firebase", "Video Streaming", "Analytics", "Certificates"],
      description: "Feature-rich LMS with video courses, quizzes, progress tracking, and certificate generation.",
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600",
      gradient: "linear-gradient(135deg, #10B981, #059669)"
    },
    {
      id: 4,
      title: "PrimeProperties - Real Estate Portal",
      industry: "Real Estate",
      client: "PrimeProperties",
      duration: "3 months",
      team: "4 developers",
      category: "realestate",
      tech: ["Vue.js", "Laravel", "Google Maps API", "Virtual Tours", "CRM Integration"],
      description: "Advanced property listing platform with virtual tours, mortgage calculator, and agent dashboard.",
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=600",
      gradient: "linear-gradient(135deg, #F59E0B, #EA580C)"
    },
    {
      id: 5,
      title: "QuickBites - Food Delivery App",
      industry: "Food & Beverage",
      client: "QuickBites",
      duration: "6 months",
      team: "8 developers",
      category: "food",
      tech: ["React Native", "Node.js", "MongoDB Atlas", "Real-time Tracking", "AI Recommendations"],
      description: "Cross-platform food delivery app with real-time order tracking and AI-powered recommendations.",
      image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38?w=600",
      gradient: "linear-gradient(135deg, #EC4899, #F43F5E)"
    },
    {
      id: 6,
      title: "TechInnovate - Corporate Website",
      industry: "Technology",
      client: "TechInnovate Solutions",
      duration: "2 months",
      team: "3 developers",
      category: "corporate",
      tech: ["Next.js", "Headless CMS", "SEO Optimized", "A/B Testing", "Fast Loading"],
      description: "Modern corporate website with blog, case studies, and lead generation capabilities.",
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?w=600",
      gradient: "linear-gradient(135deg, #06B6D4, #0284C7)"
    }
  ];

  const filterOptions = [
    { value: "all", label: "All Projects", icon: <FiGlobe /> },
    { value: "ecommerce", label: "E-commerce", icon: <FiShoppingCart /> },
    { value: "healthcare", label: "Healthcare", icon: <FiHeart /> },
    { value: "education", label: "Education", icon: <FiBookOpen /> },
    { value: "corporate", label: "Corporate", icon: <FiBriefcase /> },
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(p => p.category === filter);

  return (
    <div className="portfolio-page-wrapper">
      {/* Hero Section */}
      <section className="portfolio-hero-section">
        <div className="portfolio-hero-shape-1"></div>
        <div className="portfolio-hero-shape-2"></div>
        <div className="portfolio-container">
          <div className="portfolio-hero-content">
            <div className="portfolio-hero-badge">
              <HiOutlineSparkles />
              <span>Our Creative Portfolio</span>
            </div>
            <h1 className="portfolio-hero-title">
              Creating Digital <span>Masterpieces</span> <br />
              That Drive Results
            </h1>
            <p className="portfolio-hero-description">
              At Resicode, we transform ideas into exceptional digital experiences. 
              Explore our curated collection of projects that showcase our expertise 
              and commitment to excellence.
            </p>
            <div className="portfolio-hero-cta">
              <button className="portfolio-btn-primary">Explore Work <FiArrowRight /></button>
              <button className="portfolio-btn-secondary">Start a Project</button>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      {/* <section className="portfolio-stats-section">
        <div className="portfolio-container">
          <div className="portfolio-stats-grid">
            {stats.map((stat, i) => (
              <div key={i} className="portfolio-stat-card" style={{ backgroundColor: stat.bg }}>
                <div className="portfolio-stat-icon" style={{ color: stat.color }}>{stat.icon}</div>
                <h3 className="portfolio-stat-value" style={{ color: stat.color }}>{stat.value}</h3>
                <p className="portfolio-stat-label">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section> */}

                  {/* Industries Section - Modern Carousel */}
      <section className="portfolio-industries-section-carousel">
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <div className="portfolio-section-badge">Our Expertise</div>
            <h2>Industries <span>We Serve</span></h2>
            <p>Expertise across diverse sectors delivering tailored solutions</p>
            <div className="portfolio-section-divider"></div>
          </div>
          
          <div className="portfolio-industries-marquee">
            <div className="portfolio-industries-track">
              {[...industries, ...industries].map((item, i) => (
                <div 
                  key={i} 
                  className="portfolio-industry-card-marquee"
                  style={{ 
                    '--industry-color': item.color,
                    '--industry-gradient': item.gradient
                  }}
                >
                  <div className="portfolio-industry-card-inner-marquee">
                    <div className="portfolio-industry-icon-wrapper" style={{ background: item.bg }}>
                      <div className="portfolio-industry-icon-marquee" style={{ color: item.color }}>
                        {item.icon}
                      </div>
                    </div>
                    <h3 className="portfolio-industry-name-marquee">{item.name}</h3>
                    <div className="portfolio-industry-hover-line"></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section className="portfolio-projects-section">
        <div className="portfolio-container">
          <div className="portfolio-section-header">
            <h2>Featured <span>Projects</span></h2>
            <p>Explore our recent work across various industries</p>
            <div className="portfolio-section-divider"></div>
          </div>

          {/* Filter Buttons */}
          <div className="portfolio-filter-container">
            {filterOptions.map(option => (
              <button
                key={option.value}
                onClick={() => setFilter(option.value)}
                className={`portfolio-filter-btn ${filter === option.value ? 'active' : ''}`}
              >
                {option.icon}
                {option.label}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="portfolio-projects-grid">
            {filteredProjects.map((project) => (
              <div 
                key={project.id} 
                className="portfolio-project-card"
                onClick={() => setSelectedProject(project)}
              >
                <div className="portfolio-project-image-wrapper">
                  <img src={project.image} alt={project.title} className="portfolio-project-image" />
                  <div className="portfolio-project-overlay" style={{ background: project.gradient }}>
                    <button className="portfolio-view-details-btn">
                      View Details <FiArrowRight />
                    </button>
                  </div>
                  <div className="portfolio-project-category" style={{ background: project.gradient }}>
                    {project.industry}
                  </div>
                </div>
                <div className="portfolio-project-content">
                  <h3 className="portfolio-project-title">{project.title}</h3>
                  <div className="portfolio-project-meta">
                    <span><FiClock /> {project.duration}</span>
                    <span><FiUsers /> {project.team}</span>
                  </div>
                  <div className="portfolio-project-tech">
                    {project.tech.slice(0, 3).map((tech, idx) => (
                      <span key={idx} className="portfolio-tech-pill">{tech}</span>
                    ))}
                    {project.tech.length > 3 && (
                      <span className="portfolio-tech-pill more">+{project.tech.length - 3}</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="portfolio-cta-section">
        <div className="portfolio-container">
          <div className="portfolio-cta-card">
            <div className="portfolio-cta-content">
              <h2>Ready to Start Your Project?</h2>
              <p>Let's create something amazing together. Get in touch with us today.</p>
              <button className="portfolio-cta-button">
                Let's Talk <FiArrowRight />
              </button>
            </div>
            <div className="portfolio-cta-features">
              <div className="portfolio-cta-feature">
                <FiMail />
                <span>info@resicode.com</span>
              </div>
              <div className="portfolio-cta-feature">
                <FiPhone />
                <span>+91 9529468439</span>
              </div>
              <div className="portfolio-cta-feature">
                <FiMapPin />
                <span>Memon Colony Front Of Dadi Amma Masjid Nagpur 440026</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Project Modal */}
      {selectedProject && (
        <div className="portfolio-modal-overlay" onClick={() => setSelectedProject(null)}>
          <div className="portfolio-modal-container" onClick={(e) => e.stopPropagation()}>
            <button className="portfolio-modal-close" onClick={() => setSelectedProject(null)}>×</button>
            <div className="portfolio-modal-header" style={{ background: selectedProject.gradient }}>
              <div className="portfolio-modal-icon">
                {selectedProject.category === "ecommerce" && <FiShoppingCart />}
                {selectedProject.category === "healthcare" && <FiHeart />}
                {selectedProject.category === "education" && <FiBookOpen />}
                {selectedProject.category === "realestate" && <FiHome />}
                {selectedProject.category === "food" && <FiCoffee />}
                {selectedProject.category === "corporate" && <FiBriefcase />}
              </div>
              <h2>{selectedProject.title}</h2>
            </div>
            <div className="portfolio-modal-body">
              <div className="portfolio-modal-section">
                <h3>Project Overview</h3>
                <p>{selectedProject.description}</p>
              </div>
              <div className="portfolio-modal-details">
                <div className="portfolio-detail-item">
                  <FiUserCheck />
                  <strong>Client:</strong> {selectedProject.client}
                </div>
                <div className="portfolio-detail-item">
                  <FiClock />
                  <strong>Duration:</strong> {selectedProject.duration}
                </div>
                <div className="portfolio-detail-item">
                  <FiUsers />
                  <strong>Team Size:</strong> {selectedProject.team}
                </div>
              </div>
              <div className="portfolio-modal-section">
                <h3>Technologies Used</h3>
                <div className="portfolio-tech-stack">
                  {selectedProject.tech.map((tech, idx) => (
                    <span key={idx} className="portfolio-tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="portfolio-modal-actions">
                <button className="portfolio-modal-btn-primary">View Live Demo <FiExternalLink /></button>
                <button className="portfolio-modal-btn-secondary" onClick={() => setSelectedProject(null)}>Close</button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}