// TeamPage.jsx
import React, { useState, useEffect } from 'react';
import '../Style/Teampage.css';

const TeamPage = () => {
  const [selectedMember, setSelectedMember] = useState(null);
  const [activeDepartment, setActiveDepartment] = useState('all');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const teamMembers = [
    {
      id: 1,
      name: "Wasim Sheikh",
      position: "Chairman & Chief Technology Officer (CTO)",
      department: "leadership",
      image: "👩‍💼",
      bio: "Visionary leader with 5+ years in tech innovation",
      fullBio: "Visionary CTO and Chairman driving technical innovation and corporate strategy through scalable architecture and emerging technologies.",
      skills: ["Strategic Planning", "Business Development", "Leadership", "Innovation", "Backend"],
      email: "mohsinsheikh0168@gmail.com",
      linkedin: "https://www.linkedin.com/in/wasim-sheikh-481a88272/",
      projects: 20,
      experience: 5,
      funFact: "Loves hiking and coffee brewing"
    },
    {
      id: 2,
      name: "Manoj Nagpure",
      position: "Chief Executive Officer (CEO)",
      department: "leadership",
      image: "👨‍💻",
      bio: "Tech visionary specializing in scalable architectures",
      fullBio: "Visionary leader driving strategic growth and innovation at Web & Script with transformative digital solutions.",
      skills: ["HTML/CSS", "JavaScript", "NextJs"],
      email: "",
      linkedin: "",
      projects: 8,
      experience: 2,
      funFact: "Competitive chess player"
    },
    {
      id: 3,
      name: "Aditya Rahangdale",
      position: "Chief Marketing Officer (CMO)",
      department: "marketing",
      image: "👩‍🎨",
      bio: "Creative designer passionate about user-centered experiences",
      fullBio: "Marketing leader driving brand growth through data, digital transformation, and high-impact customer campaigns.",
      skills: ["Figma", "UX Research", "Prototyping"],
      email: "",
      linkedin: "",
      projects: 5,
      experience: 2,
      funFact: "Professional pottery artist"
    },
    {
      id: 4,
      name: "Kaustubh Nandankar",
      position: "Frontend Developer",
      department: "design",
      image: "👨‍💻",
      bio: "React expert crafting performant web applications",
      fullBio: "Crafting beautiful, responsive interfaces with pixel-perfect precision and exceptional user experience.",
      skills: ["HTML/CSS", "JavaScript", "UI/UX"],
      email: "",
      linkedin: "",
      projects: 5,
      experience: 2,
      funFact: "Avid rock climber"
    },
    {
      id: 5,
      name: "Devesh Wadibhasme",
      position: "Fullstack Developer",
      department: "development",
      image: "👩‍💻",
      bio: "Backend specialist building robust server architectures",
      fullBio: "Building dynamic, high-performance React applications with modern architectures and best practices.",
      skills: ["React", "Telwind css", "TypeScript"],
      email: "",
      linkedin: "",
      projects: 20,
      experience: 2,
      funFact: "Plays classical guitar"
    },
   
   
  ];

  const departments = [
    { value: 'all', label: 'All Team', count: teamMembers.length, icon: '👥' },
    { value: 'leadership', label: 'Leadership', count: teamMembers.filter(m => m.department === 'leadership').length, icon: '🌟' },
    { value: 'development', label: 'Development', count: teamMembers.filter(m => m.department === 'development').length, icon: '💻' },
    { value: 'design', label: 'Design', count: teamMembers.filter(m => m.department === 'design').length, icon: '🎨' },
    { value: 'marketing', label: 'Marketing', count: teamMembers.filter(m => m.department === 'marketing').length, icon: '📈' },
    { value: 'operations', label: 'Operations', count: teamMembers.filter(m => m.department === 'operations').length, icon: '⚙️' }
  ];

  const filteredMembers = activeDepartment === 'all' 
    ? teamMembers 
    : teamMembers.filter(member => member.department === activeDepartment);

  const TeamCard = ({ member, index }) => (
    <div 
      className={`team-card ${isVisible ? 'animate-in' : ''}`}
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => setSelectedMember(member)}
    >
      <div className="card-inner">
        <div className="card-front">
          <div className="member-image">{member.image}</div>
          <div className="member-glow"></div>
          <div className="member-info">
            <h3>{member.name}</h3>
            <p className="position">{member.position}</p>
            <p className="bio">{member.bio}</p>
            <div className="member-stats">
              <span className="stat">
                <strong>{member.projects}+</strong> Projects
              </span>
              <span className="stat">
                <strong>{member.experience}+</strong> Years
              </span>
            </div>
          </div>
          <div className="card-hover">
            <span>View Profile →</span>
          </div>
        </div>
      </div>
    </div>
  );

  const MemberDetail = ({ member, onClose }) => (
    <div className="member-detail-overlay" onClick={onClose}>
      <div className="member-detail" onClick={(e) => e.stopPropagation()}>
        <button className="close-btn" onClick={onClose}>
          <span>×</span>
        </button>
        
        <div className="detail-header">
          <div className="detail-image-container">
            <div className="detail-image">{member.image}</div>
            <div className="image-glow"></div>
          </div>
          <div className="detail-info">
            <h2>{member.name}</h2>
            <p className="detail-position">{member.position}</p>
            <div className="contact-buttons">
              <a href={`mailto:${member.email}`} className="contact-btn email">
                📧 Email
              </a>
              <a href={`https://linkedin.com/in/${member.linkedin}`} className="contact-btn linkedin">
                💼 LinkedIn
              </a>
            </div>
          </div>
        </div>

        <div className="detail-content">
          <div className="bio-section">
            <h4>About Me</h4>
            <p>{member.fullBio}</p>
          </div>

          <div className="fun-fact">
            <span>✨ Fun Fact: {member.funFact}</span>
          </div>

          <div className="skills-section">
            <h4>Expertise</h4>
            <div className="skills-grid">
              {member.skills.map((skill, index) => (
                <div key={index} className="skill-item">
                  <span className="skill-dot"></span>
                  {skill}
                </div>
              ))}
            </div>
          </div>

          <div className="achievements">
            <div className="achievement">
              <div className="achievement-icon">🚀</div>
              <div className="achievement-info">
                <span className="achievement-number">{member.projects}+</span>
                <span className="achievement-label">Projects Delivered</span>
              </div>
            </div>
            <div className="achievement">
              <div className="achievement-icon">⭐</div>
              <div className="achievement-info">
                <span className="achievement-number">{member.experience}+</span>
                <span className="achievement-label">Years Experience</span>
              </div>
            </div>
            <div className="achievement">
              <div className="achievement-icon">🏆</div>
              <div className="achievement-info">
                <span className="achievement-number">98%</span>
                <span className="achievement-label">Success Rate</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  const DepartmentFilter = () => (
    <div className="department-filter">
      {departments.map(dept => (
        <button
          key={dept.value}
          className={`filter-btn ${activeDepartment === dept.value ? 'active' : ''}`}
          onClick={() => setActiveDepartment(dept.value)}
        >
          <span className="filter-icon">{dept.icon}</span>
          <span className="filter-text">{dept.label}</span>
          <span className="member-count">{dept.count}</span>
        </button>
      ))}
    </div>
  );

  const TeamStats = () => (
    <div className="team-stats">
      <div className="stat-item">
        <div className="stat-icon">👥</div>
        <h3>{teamMembers.length}+</h3>
        <p>Team Members</p>
      </div>
      <div className="stat-item">
        <div className="stat-icon">🚀</div>
        <h3>500+</h3>
        <p>Projects Completed</p>
      </div>
      <div className="stat-item">
        <div className="stat-icon">🌎</div>
        <h3>50+</h3>
        <p>Countries Served</p>
      </div>
      <div className="stat-item">
        <div className="stat-icon">⭐</div>
        <h3>98%</h3>
        <p>Client Satisfaction</p>
      </div>
    </div>
  );

  return (
    <div className="team-page">
      {/* Hero Section */}
      <section className="team-hero">
        <div className="hero-background">
          <div className="floating-shapes">
            <div className="shape shape-1"></div>
            <div className="shape shape-2"></div>
            <div className="shape shape-3"></div>
          </div>
        </div>
        <div className="hero-content">
          <h1 className="hero-title">
            <span className="title-gradient">Meet Our Dream Team</span>
          </h1>
          <p className="hero-subtitle">Exceptional talent driving extraordinary results</p>
          <div className="scroll-indicator">
            <span>Scroll to explore</span>
            <div className="scroll-arrow"></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <div className="section-header">
            <h2>By The Numbers</h2>
            <p>Our achievements speak volumes about our team's dedication</p>
          </div>
          <TeamStats />
        </div>
      </section>

      {/* Team Grid */}
      <section className="team-grid-section">
        <div className="container">
          <div className="section-header">
            <h2>Our Creative Minds</h2>
            <p>Get to know the brilliant individuals behind our success</p>
          </div>

          <DepartmentFilter />

          <div className="team-container">
            {filteredMembers.map((member, index) => (
              <TeamCard key={member.id} member={member} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="join-team-section">
        <div className="cta-background">
          <div className="cta-shapes">
            <div className="cta-shape cta-shape-1"></div>
            <div className="cta-shape cta-shape-2"></div>
          </div>
        </div>
        <div className="container">
          <div className="cta-content">
            <h2>Ready to Join Our Family?</h2>
            <p>We're always looking for passionate individuals to grow with us</p>
            <div className="cta-buttons">
              <button className="cta-button primary">View Open Positions</button>
              <button className="cta-button secondary">Send Your CV</button>
            </div>
          </div>
        </div>
      </section>

      {/* Member Detail Modal */}
      {selectedMember && (
        <MemberDetail 
          member={selectedMember} 
          onClose={() => setSelectedMember(null)} 
        />
      )}
    </div>
  );
};

export default TeamPage;