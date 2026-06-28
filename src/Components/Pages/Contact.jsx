import React, { useState } from "react";
import { 
  FiMail, FiPhone, FiMapPin, FiClock, FiSend, FiCheckCircle, 
  FiAlertCircle, FiUser, FiMessageSquare, FiBriefcase, FiGlobe,
  FiTwitter, FiLinkedin, FiGithub, FiInstagram, FiArrowRight,
  FiCalendar, FiAward, FiThumbsUp, FiUsers, FiStar,
  FiFacebook
} from "react-icons/fi";
import { HiOutlineSparkles } from "react-icons/hi";
import "../Style/Contact.css";

const ContactPage = () => {
  const API_URL = "https://react-resicode-1.onrender.com";

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    serviceType: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formErrors, setFormErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const serviceTypes = [
    "Web Development",
    "Mobile App Development",
    "UI/UX Design",
    "Digital Marketing",
    "Consulting",
    "Other",
  ];

  const contactInfo = [
    { icon: <FiMail />, title: "Email Us", primary: "contact@resicode.com", secondary: "contact@resicode.com", link: "mailto:info@resicode.com" },
    { icon: <FiPhone />, title: "Call Us", primary: "+91 9529468439", link: "tel:+919529468439" },
    { icon: <FiMapPin />, title: "Visit Us", primary: "Memon Colony", secondary: "Nagpur, Maharashtra 440026", link: "https://maps.google.com" },
    { icon: <FiClock />, title: "Working Hours", primary: "Mon - Sat", secondary: "10:00 AM - 7:00 PM", link: "#" },
  ];

  const stats = [
    { icon: <FiAward />, value: "50+", label: "Projects Completed" },
    { icon: <FiUsers />, value: "30+", label: "Happy Clients" },
    { icon: <FiThumbsUp />, value: "98%", label: "Satisfaction Rate" },
    { icon: <FiStar />, value: "24/7", label: "Support Available" },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    if (formErrors[name]) setFormErrors({ ...formErrors, [name]: "" });
    if (successMessage) setSuccessMessage("");
    if (errorMessage) setErrorMessage("");
  };

  const validateForm = () => {
    const errors = {};
    if (!formData.name.trim()) errors.name = "Name is required";
    if (!formData.email.trim()) {
      errors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errors.email = "Please enter a valid email";
    }
    if (!formData.message.trim()) errors.message = "Message is required";
    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errors = validateForm();
    if (Object.keys(errors).length > 0) {
      setFormErrors(errors);
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");
    setSuccessMessage("");

    try {
      const response = await fetch(`${API_URL}/api/contact/send`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      const result = await response.json();
      if (response.ok && result.success) {
        setSuccessMessage(result.message || "Message sent successfully!");
        setFormData({ name: "", email: "", phone: "", serviceType: "", subject: "", message: "" });
      } else {
        setErrorMessage(result.message || "Failed to send message. Please try again.");
      }
    } catch (error) {
      console.error("Error sending contact form:", error);
      setErrorMessage("Failed to connect to server. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page-modern">
      {/* Hero Section */}
      <section className="contact-hero-modern">
        <div className="hero-bg-gradient"></div>
        <div className="hero-particles"></div>
        <div className="contact-container-modern">
          <div className="hero-content-modern">
            <div className="hero-badge-modern">
              <HiOutlineSparkles />
              <span>Get In Touch</span>
            </div>
            <h1 className="hero-title-modern">
              Let's <span>Create</span> Something<br />Amazing Together
            </h1>
            <p className="hero-description-modern">
              Have a project in mind? We'd love to hear about it. Our team is ready to bring your ideas to life.
            </p>
          </div>
        </div>
      </section>

      {/* Main Contact Section */}
      <section className="contact-main-modern">
        <div className="contact-container-modern">
          <div className="contact-grid-modern">
            {/* Left Side - Contact Info */}
            <div className="contact-info-modern">
              <div className="info-header-modern">
                <h2>Contact <span>Information</span></h2>
                <p>Reach out to us through any of the following channels</p>
              </div>
              
              <div className="contact-cards-modern">
                {contactInfo.map((item, i) => (
                  <a key={i} href={item.link} className="contact-card-modern">
                    <div className="card-icon-modern">{item.icon}</div>
                    <div className="card-content-modern">
                      <h3>{item.title}</h3>
                      <p className="primary">{item.primary}</p>
                      <p className="secondary">{item.secondary}</p>
                    </div>
                    <FiArrowRight className="card-arrow" />
                  </a>
                ))}
              </div>

              <div className="social-section-modern">
                <h3>Follow Us</h3>
                <div className="social-icons-modern">
                  <a href="https://www.facebook.com/share/1Cw4XifXPf/" className="social-icon"><FiFacebook /></a>
                  <a href="https://www.linkedin.com/company/megascript/" className="social-icon"><FiLinkedin /></a>
                  <a href="https://www.instagram.com/resicode_solutions?igsh=MmZjd3MxNW43OTFk" className="social-icon"><FiInstagram /></a>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="contact-form-modern">
              <div className="form-header-modern">
                <h2>Send us a <span>Message</span></h2>
                <p>We'll get back to you within 24 hours</p>
              </div>

              {successMessage && (
                <div className="alert-success-modern">
                  <FiCheckCircle />
                  <span>{successMessage}</span>
                </div>
              )}

              {errorMessage && (
                <div className="alert-error-modern">
                  <FiAlertCircle />
                  <span>{errorMessage}</span>
                </div>
              )}

              <form onSubmit={handleSubmit} className="form-modern">
                <div className="form-row-modern">
                  <div className="form-group-modern">
                    <label><FiUser /> Full Name *</label>
                    <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Enter Your Full Name" />
                    {formErrors.name && <span className="error-text">{formErrors.name}</span>}
                  </div>
                  <div className="form-group-modern">
                    <label><FiMail /> Email Address *</label>
                    <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter Your Email" />
                    {formErrors.email && <span className="error-text">{formErrors.email}</span>}
                  </div>
                </div>

                <div className="form-row-modern">
                  <div className="form-group-modern">
                    <label><FiPhone /> Phone Number</label>
                    <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="+91" />
                  </div>
                  <div className="form-group-modern">
                    <label><FiBriefcase /> Service Type</label>
                    <select name="serviceType" value={formData.serviceType} onChange={handleChange}>
                      <option value="">Select a service</option>
                      {serviceTypes.map((s, i) => <option key={i} value={s}>{s}</option>)}
                    </select>
                  </div>
                </div>

                <div className="form-group-modern">
                  <label><FiMessageSquare /> Subject</label>
                  <input type="text" name="subject" value={formData.subject} onChange={handleChange} placeholder="Project Inquiry" />
                </div>

                <div className="form-group-modern">
                  <label><FiMessageSquare /> Message *</label>
                  <textarea name="message" rows="5" value={formData.message} onChange={handleChange} placeholder="Tell us about your project..." />
                  {formErrors.message && <span className="error-text">{formErrors.message}</span>}
                </div>

                <button type="submit" disabled={isSubmitting} className="submit-btn-modern">
                  {isSubmitting ? "Sending..." : "Send Message"}
                  <FiSend />
                </button>

                <p className="form-note">We respect your privacy. Your information is safe with us.</p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="contact-map-modern">
        <div className="contact-container-modern">
          <div className="map-header">
            <h2>Find <span>Us</span></h2>
            <p>Visit our office location</p>
          </div>
          <div className="map-container-modern">
            <iframe 
              src="https://maps.google.com/maps?q=RESICODE%20SOLUTIONS%20Memon%20Colony%20Old%20Kamptee%20Road%20Opposite%20Dadima%20Masjid%20Kalamna%20Bhilgaon%20Nagpur%20Maharashtra%20440026&t=&z=15&ie=UTF8&iwloc=&output=embed" 
              width="100%" 
              height="100%" 
              style={{ border: 0 }} 
              allowFullScreen="" 
              loading="lazy" 
              title="Office Location"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;