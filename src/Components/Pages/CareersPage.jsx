import React, { useState } from 'react';
import { 
  FiBriefcase, FiMapPin, FiClock, FiTrendingUp, FiAward, 
  FiUsers, FiGlobe, FiStar, FiArrowRight, FiCheck, 
  FiHeart, FiZap, FiCalendar, FiMail, FiLinkedin, 
  FiGithub, FiFileText, FiUpload, FiX, FiFilter,
  FiCode, FiSmartphone, FiLayout, FiCloud, FiBarChart2
} from 'react-icons/fi';
import { HiOutlineSparkles, HiOutlineLightBulb } from 'react-icons/hi';
import { MdOutlineRocketLaunch, MdOutlinePsychology } from 'react-icons/md';
import "../Style/CareersPage.css";

const CareersPage = () => {
  const [activeTab, setActiveTab] = useState('all');
  const [applicationForm, setApplicationForm] = useState({
    fullName: '',
    email: '',
    phone: '',
    position: '',
    experience: '',
    resume: null,
    coverLetter: '',
    portfolio: '',
    linkedin: '',
    referral: '',
    noticePeriod: 'immediate'
  });
  const [isApplying, setIsApplying] = useState(false);
  const [showApplicationForm, setShowApplicationForm] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [resumeName, setResumeName] = useState('');

  const jobListings = [
    {
      id: 1,
      title: "Senior Full Stack Developer",
      department: "Engineering",
      type: "Full-time",
      location: "Nagpur, Maharashtra",
      experience: "3-5 years",
      postedDate: "2 days ago",
      icon: <FiCode />,
      gradient: "linear-gradient(135deg, #4F46E5, #7C3AED)",
      description: "We're looking for an experienced Full Stack Developer to join our growing team. You'll be working on cutting-edge web applications using React, Node.js, and modern cloud technologies.",
      responsibilities: [
        "Design and develop scalable web applications",
        "Collaborate with cross-functional teams",
        "Write clean, maintainable code",
        "Participate in code reviews",
        "Mentor junior developers"
      ],
      requirements: [
        "3+ years experience with React/Node.js",
        "Strong knowledge of MongoDB/PostgreSQL",
        "Experience with AWS/GCP",
        "Excellent problem-solving skills",
        "Bachelor's degree in Computer Science"
      ],
      perks: ["Remote work options", "Health insurance", "Learning budget", "Flexible hours"]
    },
    {
      id: 2,
      title: "UI/UX Designer",
      department: "Design",
      type: "Full-time",
      location: "Remote",
      experience: "2-4 years",
      postedDate: "1 week ago",
      icon: <FiLayout />,
      gradient: "linear-gradient(135deg, #EC4899, #F43F5E)",
      description: "Create beautiful and intuitive user experiences for our products. Work closely with developers and product managers to bring designs to life.",
      responsibilities: [
        "Design user interfaces for web and mobile",
        "Create prototypes and wireframes",
        "Conduct user research and testing",
        "Develop design systems",
        "Collaborate with development teams"
      ],
      requirements: [
        "Proficiency in Figma, Adobe Creative Suite",
        "Portfolio showcasing UI/UX work",
        "Understanding of responsive design",
        "Knowledge of accessibility standards",
        "Excellent communication skills"
      ],
      perks: ["Remote-first", "Design tools subscription", "Conference budget", "Creative freedom"]
    },
    {
      id: 3,
      title: "DevOps Engineer",
      department: "Operations",
      type: "Full-time",
      location: "Nagpur, Maharashtra",
      experience: "2-3 years",
      postedDate: "3 days ago",
      icon: <FiCloud />,
      gradient: "linear-gradient(135deg, #06B6D4, #0284C7)",
      description: "Help us build and maintain our cloud infrastructure. Implement CI/CD pipelines and ensure system reliability.",
      responsibilities: [
        "Manage AWS/GCP infrastructure",
        "Implement CI/CD pipelines",
        "Monitor system performance",
        "Ensure security best practices",
        "Automate deployment processes"
      ],
      requirements: [
        "Experience with Docker/Kubernetes",
        "Knowledge of Terraform/CloudFormation",
        "Familiarity with monitoring tools",
        "Understanding of networking concepts",
        "Scripting skills (Bash/Python)"
      ],
      perks: ["Certification support", "Latest hardware", "On-call compensation", "Cloud credits"]
    },
    {
      id: 4,
      title: "Marketing Specialist",
      department: "Marketing",
      type: "Full-time",
      location: "Nagpur, Maharashtra",
      experience: "1-3 years",
      postedDate: "5 days ago",
      icon: <FiBarChart2 />,
      gradient: "linear-gradient(135deg, #F59E0B, #F97316)",
      description: "Drive our marketing initiatives and help grow our brand presence across digital channels.",
      responsibilities: [
        "Develop and execute marketing strategies",
        "Manage social media campaigns",
        "Create engaging content",
        "Analyze campaign performance",
        "Build brand awareness"
      ],
      requirements: [
        "Experience in digital marketing",
        "Strong writing and communication skills",
        "Knowledge of SEO/SEM",
        "Analytical mindset",
        "Creative problem-solving abilities"
      ],
      perks: ["Performance bonus", "Marketing budget", "Flexible hours", "Growth opportunities"]
    }
  ];

  const departments = [
    { id: 'all', name: 'All Roles', count: jobListings.length, icon: <FiBriefcase /> },
    { id: 'engineering', name: 'Engineering', count: 2, icon: <FiCode /> },
    { id: 'design', name: 'Design', count: 1, icon: <FiLayout /> },
    { id: 'marketing', name: 'Marketing', count: 1, icon: <FiBarChart2 /> },
    { id: 'operations', name: 'Operations', count: 1, icon: <FiCloud /> }
  ];

  const benefits = [
    { icon: <MdOutlineRocketLaunch />, title: "Growth & Learning", desc: "Annual learning budget, certifications, and mentorship programs", color: "#4F46E5" },
    { icon: <FiHeart />, title: "Work-Life Balance", desc: "Flexible hours, remote options, and generous time off", color: "#EC4899" },
    { icon: <FiTrendingUp />, title: "Career Development", desc: "Clear growth paths and regular advancement opportunities", color: "#10B981" },
    { icon: <FiUsers />, title: "Great Culture", desc: "Supportive, inclusive environment with regular team events", color: "#F59E0B" },
    { icon: <FiAward />, title: "Competitive Pay", desc: "Attractive salary with performance bonuses and equity", color: "#06B6D4" },
    { icon: <FiHeart />, title: "Health & Wellness", desc: "Health insurance and mental wellness programs", color: "#8B5CF6" }
  ];

  const processSteps = [
    { number: "01", title: "Application Review", desc: "We review your application within 48 hours", icon: <FiFileText /> },
    { number: "02", title: "Initial Screening", desc: "30-minute call with HR to discuss fit", icon: <FiUsers /> },
    { number: "03", title: "Technical Assessment", desc: "Practical assignment or technical interview", icon: <FiCode /> },
    { number: "04", title: "Team Interview", desc: "Meet with team leads and potential colleagues", icon: <FiUsers /> },
    { number: "05", title: "Offer & Onboarding", desc: "Offer letter and smooth onboarding process", icon: <HiOutlineSparkles /> }
  ];

  const handleApplyClick = (job) => {
    setSelectedJob(job);
    setApplicationForm({ ...applicationForm, position: job.title });
    setShowApplicationForm(true);
  };

  const handleFormChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'resume') {
      const file = files[0];
      setApplicationForm({ ...applicationForm, resume: file });
      setResumeName(file?.name || '');
    } else {
      setApplicationForm({ ...applicationForm, [name]: value });
    }
  };

  const handleSubmitApplication = async (e) => {
    e.preventDefault();
    setIsApplying(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      alert('Application submitted successfully!');
      setShowApplicationForm(false);
      setResumeName('');
      setApplicationForm({
        fullName: '', email: '', phone: '', position: '', experience: '',
        resume: null, coverLetter: '', portfolio: '', linkedin: '', referral: '', noticePeriod: 'immediate'
      });
    } catch (error) {
      alert('Error submitting application. Please try again.');
    } finally {
      setIsApplying(false);
    }
  };

  const filteredJobs = activeTab === 'all' 
    ? jobListings 
    : jobListings.filter(job => job.department.toLowerCase() === activeTab);

  return (
    <div className="careers-modern-wrapper">
      {/* Animated Background */}
      <div className="careers-bg-glow"></div>
      
      {/* Hero Section */}
      <section className="careers-hero-modern">
        <div className="careers-container">
          <div className="hero-content-modern">
            <div className="hero-badge">
              <HiOutlineSparkles />
              <span>Join Our Team</span>
            </div>
            <h1 className="hero-title-modern">
              Build Your Career at
              <span className="gradient-text"> RESICODE</span>
            </h1>
            <p className="hero-description-modern">
              Join our team of innovators and problem-solvers. Create impactful solutions that make a difference in the digital world.
            </p>
            <div className="hero-stats-modern">
              <div className="stat-card-modern">
                <div className="stat-icon"><FiUsers /></div>
                <div className="stat-number">50+</div>
                <div className="stat-label">Team Members</div>
              </div>
              <div className="stat-card-modern">
                <div className="stat-icon"><FiGlobe /></div>
                <div className="stat-number">100+</div>
                <div className="stat-label">Projects Delivered</div>
              </div>
              <div className="stat-card-modern">
                <div className="stat-icon"><FiStar /></div>
                <div className="stat-number">4.9</div>
                <div className="stat-label">Client Rating</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-modern-section">
        <div className="careers-container">
          <div className="section-header-modern">
            <div className="header-badge">Why Join Us</div>
            <h2>Amazing <span>Benefits</span></h2>
            <p>We believe in creating an environment where talent thrives</p>
            <div className="header-divider"></div>
          </div>
          <div className="benefits-grid-modern">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card-modern" style={{ '--benefit-color': benefit.color }}>
                <div className="benefit-icon-modern" style={{ background: `linear-gradient(135deg, ${benefit.color}, ${benefit.color}dd)` }}>
                  {benefit.icon}
                </div>
                <h3>{benefit.title}</h3>
                <p>{benefit.desc}</p>
                <div className="benefit-hover-line"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Openings Section */}
      <section className="openings-modern-section">
        <div className="careers-container">
          <div className="section-header-modern">
            <div className="header-badge">Current Openings</div>
            <h2>Find Your <span>Perfect Role</span></h2>
            <p>Join our growing team and make an impact</p>
            <div className="header-divider"></div>
          </div>

          {/* Department Tabs */}
          <div className="department-tabs-modern">
            {departments.map(dept => (
              <button
                key={dept.id}
                className={`tab-btn-modern ${activeTab === dept.id ? 'active' : ''}`}
                onClick={() => setActiveTab(dept.id)}
              >
                {dept.icon}
                {dept.name}
                <span className="job-count-modern">{dept.count}</span>
              </button>
            ))}
          </div>

          {/* Job Listings */}
          <div className="job-listings-modern">
            {filteredJobs.map(job => (
              <div key={job.id} className="job-card-modern" style={{ '--job-gradient': job.gradient }}>
                <div className="job-card-header">
                  <div className="job-icon" style={{ background: job.gradient }}>
                    {job.icon}
                  </div>
                  <div className="job-info">
                    <h3>{job.title}</h3>
                    <div className="job-meta-modern">
                      <span><FiBriefcase /> {job.department}</span>
                      <span><FiClock /> {job.type}</span>
                      <span><FiMapPin /> {job.location}</span>
                    </div>
                  </div>
                  <div className="job-exp">
                    <span className="exp-badge">{job.experience}</span>
                    <span className="date-badge">{job.postedDate}</span>
                  </div>
                </div>
                <p className="job-description-modern">{job.description}</p>
                <div className="job-perks-modern">
                  {job.perks.map((perk, idx) => (
                    <span key={idx} className="perk-modern">{perk}</span>
                  ))}
                </div>
                <div className="job-actions-modern">
                  <button 
                    className="view-details-modern"
                    onClick={() => setSelectedJob(selectedJob?.id === job.id ? null : job)}
                  >
                    {selectedJob?.id === job.id ? 'Hide Details' : 'View Details'}
                  </button>
                  <button className="apply-modern" onClick={() => handleApplyClick(job)}>
                    Apply Now <FiArrowRight />
                  </button>
                </div>

                {selectedJob?.id === job.id && (
                  <div className="job-details-modern">
                    <div className="details-grid">
                      <div className="details-col">
                        <h4>Key Responsibilities</h4>
                        <ul>
                          {job.responsibilities.map((item, idx) => (
                            <li key={idx}><FiCheck /> {item}</li>
                          ))}
                        </ul>
                      </div>
                      <div className="details-col">
                        <h4>Requirements</h4>
                        <ul>
                          {job.requirements.map((item, idx) => (
                            <li key={idx}><FiCheck /> {item}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="process-modern-section">
        <div className="careers-container">
          <div className="section-header-modern">
            <div className="header-badge">How We Hire</div>
            <h2>Our <span>Hiring Process</span></h2>
            <p>Simple, transparent, and respectful</p>
            <div className="header-divider"></div>
          </div>
          <div className="process-steps-modern">
            {processSteps.map((step, index) => (
              <div key={index} className="step-modern">
                <div className="step-number-modern">{step.number}</div>
                <div className="step-icon-modern">{step.icon}</div>
                <h3>{step.title}</h3>
                <p>{step.desc}</p>
                {index < processSteps.length - 1 && <div className="step-connector"></div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-modern-section">
        <div className="careers-container">
          <div className="cta-card-modern">
            <div className="cta-icon"><HiOutlineLightBulb /></div>
            <h2>Don't See Your Role?</h2>
            <p>We're always looking for talented individuals. Send us your resume and we'll keep you in mind for future opportunities.</p>
            <button className="cta-btn-modern">
              Submit General Application <FiArrowRight />
            </button>
          </div>
        </div>
      </section>

      {/* Application Modal */}
      {showApplicationForm && (
        <div className="modal-overlay-modern" onClick={() => setShowApplicationForm(false)}>
          <div className="modal-container-modern" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close-modern" onClick={() => setShowApplicationForm(false)}><FiX /></button>
            <div className="modal-header-modern" style={{ background: selectedJob?.gradient }}>
              <h2>Apply for {selectedJob?.title}</h2>
              <p>We can't wait to learn more about you</p>
            </div>
            <form onSubmit={handleSubmitApplication} className="application-form-modern">
              <div className="form-grid-modern">
                <div className="form-group-modern">
                  <label><FiUsers /> Full Name *</label>
                  <input type="text" name="fullName" value={applicationForm.fullName} onChange={handleFormChange} required placeholder="John Doe" />
                </div>
                <div className="form-group-modern">
                  <label><FiMail /> Email Address *</label>
                  <input type="email" name="email" value={applicationForm.email} onChange={handleFormChange} required placeholder="john@example.com" />
                </div>
                <div className="form-group-modern">
                  <label><FiClock /> Phone Number *</label>
                  <input type="tel" name="phone" value={applicationForm.phone} onChange={handleFormChange} required placeholder="+91 9876543210" />
                </div>
                <div className="form-group-modern">
                  <label><FiTrendingUp /> Years of Experience *</label>
                  <select name="experience" value={applicationForm.experience} onChange={handleFormChange} required>
                    <option value="">Select experience</option>
                    <option value="0-1">0-1 years</option>
                    <option value="1-3">1-3 years</option>
                    <option value="3-5">3-5 years</option>
                    <option value="5+">5+ years</option>
                  </select>
                </div>
                <div className="form-group-modern full-width">
                  <label><FiFileText /> Cover Letter</label>
                  <textarea name="coverLetter" value={applicationForm.coverLetter} onChange={handleFormChange} rows="4" placeholder="Tell us why you're interested in this position..." />
                </div>
                <div className="form-group-modern">
                  <label><FiUpload /> Resume/CV *</label>
                  <div className="file-input-modern">
                    <input type="file" id="resume" name="resume" onChange={handleFormChange} accept=".pdf,.doc,.docx" required />
                    <label htmlFor="resume" className="file-label">{resumeName || 'Choose file'}</label>
                  </div>
                  <small>PDF, DOC, DOCX (Max 5MB)</small>
                </div>
                <div className="form-group-modern">
                  <label><FiGithub /> Portfolio/GitHub Link</label>
                  <input type="url" name="portfolio" value={applicationForm.portfolio} onChange={handleFormChange} placeholder="https://github.com/username" />
                </div>
                <div className="form-group-modern">
                  <label><FiLinkedin /> LinkedIn Profile</label>
                  <input type="url" name="linkedin" value={applicationForm.linkedin} onChange={handleFormChange} placeholder="https://linkedin.com/in/username" />
                </div>
                <div className="form-group-modern">
                  <label><FiClock /> Notice Period</label>
                  <select name="noticePeriod" value={applicationForm.noticePeriod} onChange={handleFormChange}>
                    <option value="immediate">Immediate</option>
                    <option value="15">15 days</option>
                    <option value="30">30 days</option>
                    <option value="60">60 days</option>
                    <option value="90">90 days</option>
                  </select>
                </div>
              </div>
              <div className="form-actions-modern">
                <button type="button" className="cancel-btn-modern" onClick={() => setShowApplicationForm(false)}>Cancel</button>
                <button type="submit" className="submit-btn-modern" disabled={isApplying}>
                  {isApplying ? 'Submitting...' : 'Submit Application'}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default CareersPage;