import React from "react";
import { FaRocket, FaGem, FaHandshake, FaBolt, FaUserTie, FaChartLine, FaClock, FaCheckCircle } from "react-icons/fa";

// Import images - ALL WITH PROPER FALLBACKS
import web_dev from '../Logos/web_dev.png';
import commer from '../Logos/E-commer.png';
import web_app from '../Logos/webapp.png';
import ui from '../Logos/ui.png';
import seo from '../Logos/seo.png';
import custom from '../Logos/custom.png';
import wasim from '../Logos/wasim.jpg';
import devesh from '../Logos/devesh.jpeg';
// Sufiyan is commented out because the image is missing
// import sufiyan from '../Logos/sufiyan.jpeg';

const AboutUs = () => {
  const teamMembers = [
    {
      id: 2,
      name: "Devesh Wadibhasme",
      position: "Full Stack Developer",
      image: devesh,
      description: "Full-stack development expert specializing in scalable architecture and backend systems.",
      skills: ["Node.js", "System Architecture", "API Development", "DevOps", "Database Design"],
      stats: [
        { value: "3+", label: "Years Experience" },
        { value: "20+", label: "Projects Delivered" },
        { value: "100%", label: "Success Rate" }
      ]
    }
    // Sufiyan temporarily removed until image is added
    // {
    //   id: 3,
    //   name: "Sufiyan Khan",
    //   position: "Frontend Developer & UI/UX Director",
    //   image: sufiyan,
    //   description: "Creating beautiful, responsive user interfaces with focus on user experience and modern design.",
    //   skills: ["React", "UI/UX Design", "Next.js", "Tailwind CSS", "Frontend Architecture"],
    //   stats: [
    //     { value: "3+", label: "Years Experience" },
    //     { value: "15+", label: "Projects Delivered" },
    //     { value: "98%", label: "Success Rate" }
    //   ]
    // }
  ];

  const values = [
    { icon: FaRocket, title: "Innovation", description: "We stay ahead of technology trends to deliver cutting-edge solutions." },
    { icon: FaGem, title: "Quality", description: "Excellence is our standard in every project we deliver." },
    { icon: FaHandshake, title: "Collaboration", description: "We work closely with clients to understand their unique needs." },
    { icon: FaBolt, title: "Reliability", description: "Consistent delivery and ongoing support you can count on." },
  ];

  const services = [
    { 
      title: "Web Development", 
      icon: web_dev,
      description: "Custom websites built with modern technologies for optimal performance, responsiveness, and user experience.",
      tags: ["Responsive", "Fast", "SEO Ready"],
      gradient: "from-pink-500 to-purple-600"
    },
    { 
      title: "UI/UX Design", 
      icon: ui,
      description: "User-centered designs that create intuitive, engaging experiences and drive conversions for your business.",
      tags: ["User Research", "Wireframing", "Prototypes"],
      gradient: "from-indigo-500 to-purple-500"
    },
    { 
      title: "E-commerce Solutions", 
      icon: commer,
      description: "Complete online stores with secure payment gateways, inventory management, and seamless shopping experiences.",
      tags: ["Payments", "Inventory", "Secure"],
      gradient: "from-yellow-400 to-orange-500"
    },
    { 
      title: "SEO & Maintenance", 
      icon: seo,
      description: "Continuous optimization, security updates, and performance monitoring to keep your website at peak performance.",
      tags: ["SEO Optimization", "Security", "Monitoring"],
      gradient: "from-green-400 to-emerald-500"
    },
    { 
      title: "Web Applications", 
      icon: web_app,
      description: "Scalable web applications with robust backend systems, real-time features, and cross-platform compatibility.",
      tags: ["Scalable", "Real-time", "API Integration"],
      gradient: "from-cyan-400 to-blue-500"
    },
    { 
      title: "Custom Solutions", 
      icon: custom,
      description: "Tailored software solutions designed to meet your unique business requirements and workflow needs.",
      tags: ["Custom Software", "API Development", "Integration"],
      gradient: "from-red-400 to-pink-500"
    }
  ];

  const whyChooseUs = [
    { title: "Proven Experience", desc: "With 3+ years and 10+ successful projects, we bring proven expertise to every engagement." },
    { title: "Quality First", desc: "We never compromise on quality. Every project undergoes rigorous testing and quality assurance." },
    { title: "24/7 Support", desc: "Round-the-clock support ensures your business never faces downtime or technical issues alone." },
    { title: "Cutting-Edge Innovation", desc: "We stay ahead of technology trends to deliver future-proof solutions that give you a competitive edge." },
    { title: "Tailored Solutions", desc: "Every project is customized to your unique business needs, goals, and target audience." },
    { title: "Results-Driven Approach", desc: "We focus on delivering measurable results that contribute directly to your business growth and success." }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      
      {/* HERO SECTION */}
      <section className="relative bg-gradient-to-r from-gray-900 via-blue-900 to-purple-900 text-white py-24 px-4 overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative max-w-7xl mx-auto text-center">
          <p className="mb-4 text-sm bg-white/10 inline-block px-4 py-1 rounded-full backdrop-blur-sm">
            ✨ Welcome to Resicode
          </p>
          <h1 className="font-bold leading-tight">
            Transforming Ideas into <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-cyan-400">
              Digital Excellence
            </span>
          </h1>
          <p className="text-lg md:text-xl text-blue-200 max-w-3xl mx-auto mb-8">
            We craft scalable, modern web solutions that empower businesses to thrive in the digital era with innovation and excellence.
          </p>
          <div className="flex justify-center gap-4 mb-12 flex-wrap">
            <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:from-yellow-500 hover:to-yellow-600 transition-all duration-300 shadow-lg">
              Get Started →
            </button>
            <button className="border-2 border-white/30 backdrop-blur-sm px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-all duration-300">
              View Our Work
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { num: "10+", label: "Projects Delivered" },
              { num: "3+", label: "Years Experience" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "24/7", label: "Support Available" },
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm p-6 rounded-xl hover:bg-white/20 transition-all duration-300">
                <h3 className="text-3xl font-bold text-yellow-400">{item.num}</h3>
                <p className="text-sm text-gray-200 mt-2">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ABOUT RESICODE SECTION - WITH ENLARGED CHAIRMAN PHOTO */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-blue-600 font-semibold mb-2 uppercase tracking-wide">About Resicode</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-600">Resicode</span>
            </h2>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
            <p className="text-xl text-gray-700 leading-relaxed max-w-4xl mx-auto">
              Resicode is a web development service-based company dedicated to creating 
              <span className="font-semibold text-blue-600"> scalable, modern, and user-friendly</span> digital solutions for businesses worldwide.
            </p>
          </div>

          {/* Leadership Excellence Section */}
          <div className="mt-16">
            <div className="text-center mb-10">
              <h3 className="text-3xl font-bold text-gray-800 mb-2">Leadership Excellence</h3>
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-8 items-start">
              {/* Chairman Profile - ENLARGED PHOTO */}
              <div className="bg-gradient-to-br from-gray-50 to-blue-50 rounded-2xl p-8 shadow-xl hover:shadow-2xl transition-all duration-300">
                <div className="flex flex-col md:flex-row gap-8 items-center md:items-start">
                  <div className="w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg flex-shrink-0">
                    <img 
                      src={wasim} 
                      alt="Waseem Sheikh"
                      className="w-full h-full object-cover object-top"
                    />
                  </div>
                  <div className="flex-1 text-center md:text-left">
                    <h4 className="text-2xl font-bold text-gray-800">Wasim Sheikh</h4>
                    <p className="text-blue-600 font-semibold mb-3">Chairman & Founder</p>
                    
                    <div className="mb-4">
                      <h5 className="text-lg font-semibold text-gray-700 mb-2">Strategic Vision & Business Development</h5>
                      <p className="text-gray-600 leading-relaxed">
                        Your leadership as a CTO proves that technology with purpose can change the scenario of Digital Business.
                      </p>
                    </div>
                    
                    <p className="text-gray-600 italic border-l-4 border-blue-500 pl-4 mt-4">
                      Leading Resicode with innovation, dedication, and a commitment to empowering businesses through cutting-edge web solutions.
                    </p>
                  </div>
                </div>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mt-6 pt-6 border-t border-gray-200">
                  {[
                    { icon: FaClock, value: "4+", label: "Years Experience" },
                    { icon: FaChartLine, value: "15+", label: "Projects Delivered" },
                    { icon: FaCheckCircle, value: "98%", label: "Success Rate" }
                  ].map((stat, idx) => {
                    const Icon = stat.icon;
                    return (
                      <div key={idx} className="text-center">
                        <Icon className="text-2xl text-blue-500 mx-auto mb-2" />
                        <div className="text-xl font-bold text-gray-800">{stat.value}</div>
                        <div className="text-xs text-gray-500">{stat.label}</div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* Leadership Stats & Badge */}
              <div className="space-y-6">
                <div className="bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl p-6 text-white text-center transform hover:scale-105 transition-all duration-300">
                  <FaUserTie className="text-5xl mx-auto mb-3 opacity-80" />
                  <h4 className="text-2xl font-bold mb-1">Chairman</h4>
                  <p className="text-blue-100">Strategic Leadership</p>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition">
                    <div className="text-3xl font-bold text-blue-600">4+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition">
                    <div className="text-3xl font-bold text-blue-600">15+</div>
                    <div className="text-sm text-gray-600">Projects Delivered</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition">
                    <div className="text-3xl font-bold text-blue-600">98%</div>
                    <div className="text-sm text-gray-600">Client Satisfaction</div>
                  </div>
                  <div className="bg-white rounded-xl p-4 text-center shadow-md hover:shadow-lg transition">
                    <div className="text-3xl font-bold text-blue-600">24/7</div>
                    <div className="text-sm text-gray-600">Support Available</div>
                  </div>
                </div>

                <div className="bg-gradient-to-r from-gray-800 to-gray-900 rounded-2xl p-6 text-white">
                  <p className="text-sm italic leading-relaxed">
                    "Technology with purpose can change the landscape of digital business. 
                    At Resicode, we're committed to making that vision a reality."
                  </p>
                  <p className="text-xs text-blue-300 mt-3">— Wasim Sheikh, Chairman</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* OUR STORY + PURPOSE */}
      <section className="py-16 max-w-7xl mx-auto px-4 grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-4">
          <h2 className="text-3xl font-bold text-gray-900">Our Story</h2>
          <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
          <p className="text-gray-600 leading-relaxed">
            Founded with a vision to simplify technology for businesses, Resicode helps brands go digital 
            with innovative and custom web solutions that drive real results.
          </p>
          <p className="text-gray-600 leading-relaxed">
            Our journey began when we recognized the growing gap between businesses and technology. 
            Many companies struggled to establish a strong online presence despite having incredible 
            products and services.
          </p>
          <p className="text-gray-600 leading-relaxed">
            We set out to bridge this gap by making advanced web technologies accessible and affordable 
            for everyone. What started as a small team of passionate developers has grown into a 
            full-service web development agency, but our core mission remains the same.
          </p>
          <div className="flex gap-4 pt-4">
            <button className="bg-gradient-to-r from-blue-600 to-cyan-600 text-white px-6 py-2 rounded-lg hover:shadow-lg transition">
              Our Portfolio
            </button>
            <button className="border-2 border-gray-300 text-gray-700 px-6 py-2 rounded-lg hover:bg-gray-100 transition">
              Contact Us
            </button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-blue-600 to-purple-600 text-white p-8 rounded-2xl shadow-xl transform hover:scale-105 transition-all duration-300">
          <div className="text-6xl mb-4">"</div>
          <h3 className="text-2xl font-bold mb-4">Our Purpose</h3>
          <p className="text-lg italic leading-relaxed">
            Our purpose is simple: to make technology accessible and empower businesses 
            to thrive in the digital world through innovative web solutions.
          </p>
          <div className="mt-6 pt-4 border-t border-white/30">
            <p className="text-sm text-white/80">— Resicode Team</p>
          </div>
        </div>
      </section>

      {/* OUR COMMITMENT */}
      <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Commitment</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mb-6"></div>
          <p className="text-xl text-gray-700 leading-relaxed">
            We're committed to delivering exceptional web solutions that drive real business results 
            and help our clients succeed in the ever-evolving digital landscape.
          </p>
        </div>
      </section>

      {/* TIMELINE SECTION */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Our Long Term Vision with Timeline</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              { year: "2024", title: "Foundation", desc: "Resicode was born with a vision to simplify technology for businesses", color: "from-blue-500 to-cyan-500" },
              { year: "2025", title: "First Breakthrough", desc: "Delivered 5+ successful projects with 100% client satisfaction", color: "from-cyan-500 to-teal-500" },
              { year: "2025", title: "Expansion", desc: "Expanding our team and starting to serve Indian & international clients", color: "from-teal-500 to-green-500" },
              { year: "2026", title: "Innovation", desc: "Introduced AI-powered solutions and advanced web technologies", color: "from-green-500 to-yellow-500" }
            ].map((item, i) => (
              <div key={i} className={`bg-gradient-to-br ${item.color} p-6 rounded-xl shadow-lg hover:scale-105 transition-all duration-300`}>
                <span className="text-2xl font-bold text-white drop-shadow-lg">{item.year}</span>
                <h3 className="text-xl font-bold mt-2">{item.title}</h3>
                <p className="text-sm text-white/90 mt-2">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE VALUES SECTION */}
      <section className="py-20 bg-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <p className="text-purple-600 font-semibold mb-2">Our Core Values</p>
            <h2 className="text-4xl font-bold text-gray-900 mb-4">The Principles That Guide Us</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto"></div>
          </div>
          <div className="grid md:grid-cols-4 gap-6">
            {values.map((v, i) => {
              const Icon = v.icon;
              return (
                <div key={i} className="bg-gradient-to-br from-gray-50 to-gray-100 p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 text-center group">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition">
                    <Icon className="text-3xl text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2">{v.title}</h3>
                  <p className="text-gray-600 text-sm">{v.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* WHAT WE DO SECTION */}
      <section className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              What We Do <span className="text-yellow-400">...</span>
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              Comprehensive web solutions tailored to drive your digital transformation and business growth
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:shadow-2xl transition-all duration-300 group">
                <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${service.gradient} flex items-center justify-center mb-4 group-hover:scale-110 transition`}>
                  <img src={service.icon} alt={service.title} className="w-7 h-7" />
                </div>
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 text-sm mb-4 leading-relaxed">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag, idx) => (
                    <span key={idx} className="px-2 py-1 text-xs rounded-full bg-white/10 text-gray-300">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM SECTION - CENTERED WITH INCREASED WIDTH */}
      <section className="py-20 bg-gray-100 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Our Amazing Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The passionate professionals behind Resicode's success story
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto mt-4"></div>
            <p className="text-blue-600 font-semibold mt-4">Leadership Team</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {teamMembers.map((member) => (
              <div key={member.id} className="bg-white rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2">
                <div className="relative h-80 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name}
                    className="w-full h-full object-cover object-top"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
                </div>
                <div className="p-6 text-center">
                  <h3 className="text-2xl font-bold text-gray-800 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-semibold mb-3">{member.position}</p>
                  <p className="text-gray-600 text-sm mb-4">{member.description}</p>
                  <div className="flex flex-wrap justify-center gap-2">
                    {member.skills.slice(0, 3).map((skill, idx) => (
                      <span key={idx} className="px-2 py-1 text-xs rounded-full bg-gray-100 text-gray-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* WHY CHOOSE US SECTION */}
      <section className="py-20 bg-gray-900 text-white px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Why Choose <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-orange-500">Resicode</span>?
            </h2>
            <p className="text-lg text-gray-300 max-w-2xl mx-auto">
              We don't just build websites, we build solutions that help your business grow and succeed in the digital world.
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 mx-auto mt-4"></div>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {whyChooseUs.map((item, i) => (
              <div key={i} className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 hover:-translate-y-2 hover:bg-white/10 transition-all duration-300">
                <h3 className="text-xl font-bold text-yellow-400 mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-4">Ready to Experience the Resicode Difference?</p>
          <p className="text-lg text-white/80 mb-8">
            Join 10+ satisfied clients who have transformed their digital presence with our expert solutions.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            <button className="bg-yellow-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-yellow-300 transition-all duration-300 shadow-lg">
              Start Your Project →
            </button>
            <button className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-gray-900 transition-all duration-300">
              View Case Studies
            </button>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { num: "10+", label: "Projects Completed" },
              { num: "98%", label: "Client Satisfaction" },
              { num: "3+", label: "Years Experience" },
              { num: "24/7", label: "Support Available" }
            ].map((item, i) => (
              <div key={i} className="bg-white/10 backdrop-blur-sm rounded-xl p-4">
                <div className="text-2xl font-bold text-yellow-400">{item.num}</div>
                <div className="text-sm text-white/80">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
};

export default AboutUs;
