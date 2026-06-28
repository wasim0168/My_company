import React, { useState, useEffect } from 'react';
import { 
  FiFileText, FiCheckCircle, FiAlertCircle, FiClock, 
  FiDollarSign, FiRefreshCw, FiServer, FiShield, FiBookOpen,
  FiArrowRight, FiHeart, FiGlobe, FiCode, FiUsers,
  FiCalendar, FiEdit, FiLock, FiBriefcase, FiHome,
  FiChevronRight, FiSearch
} from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineGavel, MdOutlinePrivacyTip, MdOutlineSecurity } from 'react-icons/md';
import "../Style/Terms.css";

const TermsPage = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [searchTerm, setSearchTerm] = useState('');
  const [lastUpdated] = useState("April 2026");

  const sections = [
    { id: 'introduction', title: 'Introduction', icon: <HiOutlineSparkles />, color: '#4F46E5' },
    { id: 'services', title: 'Services', icon: <FiCode />, color: '#10B981' },
    { id: 'requirements', title: 'Project Requirements', icon: <FiFileText />, color: '#F59E0B' },
    { id: 'payment', title: 'Payment Terms', icon: <FiDollarSign />, color: '#EC4899' },
    { id: 'revisions', title: 'Revisions Policy', icon: <FiRefreshCw />, color: '#06B6D4' },
    { id: 'delivery', title: 'Delivery Timeline', icon: <FiClock />, color: '#8B5CF6' },
    { id: 'hosting', title: 'Domain & Hosting', icon: <FiServer />, color: '#EF4444' },
    { id: 'intellectual', title: 'Intellectual Property', icon: <FiLock />, color: '#F97316' },
    { id: 'maintenance', title: 'Maintenance Services', icon: <FiShield />, color: '#14B8A6' },
    { id: 'liability', title: 'Limitation of Liability', icon: <FiAlertCircle />, color: '#F43F5E' },
    { id: 'termination', title: 'Termination', icon: <FiBookOpen />, color: '#A855F7' },
    { id: 'governing', title: 'Governing Law', icon: <MdOutlineGavel />, color: '#3B82F6' }
  ];

  const content = {
    introduction: {
      title: "Introduction",
      content: "Welcome to Resicode Solutions. By accessing our services, you agree to comply with and be bound by these Terms and Conditions. These terms govern your relationship with Resicode Solutions and outline the rights and obligations of both parties."
    },
    services: {
      title: "Services",
      content: "Resicode Solutions provides website development, web application development, hosting support setup, maintenance services, and related IT solutions. All services are delivered with professional care and industry best practices."
    },
    requirements: {
      title: "Project Requirements",
      content: "Clients must provide all required content, images, credentials, and approvals necessary for project completion. Delays in providing materials may affect delivery timelines. We recommend preparing all materials before project initiation."
    },
    payment: {
      title: "Payment Terms",
      content: "50% advance payment is required before project initiation. Remaining 50% must be paid before final delivery or deployment. Maintenance services are billed monthly or annually as agreed in the service agreement."
    },
    revisions: {
      title: "Revisions Policy",
      content: "Up to 2–3 minor revisions are included unless otherwise specified. Major changes after approval may incur additional charges. Revisions must be requested within 14 days of delivery."
    },
    delivery: {
      title: "Delivery Timeline",
      content: "Estimated timelines are shared at the start of the project. Timelines may change based on scope modifications or delayed client responses. We strive to meet all deadlines while maintaining quality standards."
    },
    hosting: {
      title: "Domain & Hosting",
      content: "If domain and hosting are arranged by Resicode Solutions, ownership remains with the client after full payment. Renewal responsibility lies with the client unless under maintenance plan. We recommend maintaining regular backups."
    },
    intellectual: {
      title: "Intellectual Property Rights",
      content: "Upon full payment completion, website ownership transfers to the client. Source code rights transfer unless third‑party licensed components are used. All custom code developed specifically for your project is your property."
    },
    maintenance: {
      title: "Maintenance Services",
      content: "Maintenance plans include updates, backups, and minor modifications as agreed. Major feature upgrades are billed separately. We offer 24/7 monitoring for critical applications under premium plans."
    },
    liability: {
      title: "Limitation of Liability",
      content: "Resicode Solutions is not responsible for third‑party hosting downtime, domain registrar issues, or cyber‑attacks beyond standard security practices. Our liability is limited to the service fees paid."
    },
    termination: {
      title: "Termination",
      content: "Either party may terminate services with written notice. Payments made are non‑refundable once work has begun. Upon termination, we will provide all completed work and source code."
    },
    governing: {
      title: "Governing Law",
      content: "These terms shall be governed under the laws of India. Any disputes shall be subject to the exclusive jurisdiction of the courts in Nagpur, Maharashtra."
    }
  };

  const filteredSections = searchTerm 
    ? sections.filter(section => 
        section.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        content[section.id].content.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : sections;

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 100;
      const sectionElements = sections.map(section => ({
        id: section.id,
        offset: document.getElementById(section.id)?.offsetTop || 0
      }));
      
      const current = sectionElements.reduce((prev, curr) => {
        return (curr.offset <= scrollPosition && curr.offset > prev.offset) ? curr : prev;
      }, { id: 'introduction', offset: 0 });
      
      setActiveSection(current.id);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(sectionId);
    }
  };

  return (
    <div className="terms-modern-wrapper">
      {/* Background Decorations */}
      <div className="terms-bg-glow-1"></div>
      <div className="terms-bg-glow-2"></div>
      <div className="terms-bg-grid"></div>

      {/* Hero Section */}
      <section className="terms-hero-modern">
        <div className="terms-container">
          <div className="hero-content-modern">
            <div className="hero-badge-modern">
              <MdOutlineGavel />
              <span>Legal Information</span>
            </div>
            <h1 className="hero-title-modern">
              Terms & <span className="gradient-text">Conditions</span>
            </h1>
            <p className="hero-description-modern">
              Please read these terms carefully before using our services. 
              By accessing our services, you agree to be bound by these terms.
            </p>
            <div className="hero-meta-modern">
              <span><FiCalendar /> Last Updated: {lastUpdated}</span>
              <span><FiUsers /> Effective for all clients</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="terms-main-modern">
        <div className="terms-container">
          <div className="terms-grid-modern">
            {/* Sidebar Navigation */}
            <div className="terms-sidebar-modern">
              <div className="sidebar-header">
                <h3>Contents</h3>
                <p>Jump to section</p>
              </div>
              
              {/* Search Bar */}
              <div className="search-bar-modern">
                <FiSearch />
                <input 
                  type="text" 
                  placeholder="Search terms..." 
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Navigation Links */}
              <div className="sidebar-nav-modern">
                {filteredSections.map((section) => (
                  <button
                    key={section.id}
                    className={`nav-link-modern ${activeSection === section.id ? 'active' : ''}`}
                    onClick={() => scrollToSection(section.id)}
                    style={{ '--nav-color': section.color }}
                  >
                    <span className="nav-icon">{section.icon}</span>
                    <span className="nav-text">{section.title}</span>
                    <FiChevronRight className="nav-arrow" />
                  </button>
                ))}
              </div>

              {/* Contact Card */}
              <div className="sidebar-contact-modern">
                <div className="contact-icon">💬</div>
                <h4>Have Questions?</h4>
                <p>Our legal team is here to help</p>
                <button className="contact-btn">Contact Support</button>
              </div>
            </div>

            {/* Content Area */}
            <div className="terms-content-modern">
              {filteredSections.map((section) => (
                <div key={section.id} id={section.id} className="terms-card-modern">
                  <div className="terms-card-header" style={{ borderLeftColor: section.color }}>
                    <div className="card-icon" style={{ background: `linear-gradient(135deg, ${section.color}, ${section.color}dd)` }}>
                      {section.icon}
                    </div>
                    <h2>{content[section.id].title}</h2>
                  </div>
                  <div className="terms-card-body">
                    <p>{content[section.id].content}</p>
                    
                    {/* Additional info for certain sections */}
                    {section.id === 'payment' && (
                      <div className="info-box">
                        <FiDollarSign />
                        <div>
                          <strong>Payment Methods Accepted:</strong>
                          <p>Bank Transfer, UPI, Credit/Debit Cards, PayPal</p>
                        </div>
                      </div>
                    )}
                    
                    {section.id === 'revisions' && (
                      <div className="info-box">
                        <FiRefreshCw />
                        <div>
                          <strong>What counts as a revision?</strong>
                          <p>Minor changes include text updates, color adjustments, and layout tweaks. Major changes include new features, additional pages, or structural changes.</p>
                        </div>
                      </div>
                    )}
                    
                    {section.id === 'intellectual' && (
                      <div className="info-box">
                        <FiLock />
                        <div>
                          <strong>Third-party licenses:</strong>
                          <p>Some components may use MIT, GPL, or other open-source licenses. These will be disclosed in your project documentation.</p>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              ))}

              {/* Acceptance Banner */}
              <div className="acceptance-banner-modern">
                <div className="banner-icon">
                  <FiCheckCircle />
                </div>
                <div className="banner-content">
                  <h3>By using our services, you agree to these terms</h3>
                  <p>These terms constitute a legally binding agreement between you and Resicode Solutions</p>
                </div>
                <button className="banner-btn">
                  I Agree <FiArrowRight />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="terms-footer-modern">
        <div className="terms-container">
          <div className="footer-note-modern">
            <p>
              <MdOutlinePrivacyTip /> This document was last updated in {lastUpdated}. 
              Resicode Solutions reserves the right to modify these terms at any time. 
              Changes will be communicated via email or our website.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;