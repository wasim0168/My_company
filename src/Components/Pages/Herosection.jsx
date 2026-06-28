import React from 'react'
import HeroVideo from '../video/backgroundV.mp4';

const Herosection = () => {
  return (
    <div className="relative flex items-center justify-center w-full hero-section overflow-hidden mb-5">

      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover z-0"
        src={HeroVideo}
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Dark Overlay (important for text visibility) */}
      <div className="absolute top-0 left-0 w-full h-full bg-black/60 z-10 "></div>

      {/* Hero Content */}
      <div className="hero-content relative z-20 text-center px-4 w-full max-w-6xl mx-auto">
        <h1 className="hero-title transition-all duration-300 ease-in-out transform hover:scale-105">
    "
    <span style={{ color: '#F45DA2'  }}>RESI</span>
    <span style={{ color: '#FBDB57' }}>CODE</span>
    {" - WE BUILD WHAT YOU IMAGINE"}
    "
  </h1>
       
 <p style={{color:'white' , fontweight:'bold', fontSize:'22px', margin:'0 auto'}}>
  Resicode Solutions is a web development company helping startups, businesses, and enterprises build user-friendly and powerful web solutions that drive growth and success.
 </p>
        <div className="hero-buttons flex flex-col sm:flex-row gap-4 justify-center items-center mt-8 sm:mt-16">
          <button className="hero-button bg-transparent text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black">
            Visit Our Project
          </button>

          <button className="hero-button bg-transparent text-white font-bold py-3 px-6 rounded-lg transition-all duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl border-2 border-yellow-300 hover:bg-yellow-300 hover:text-black">
            Book Free Consultation
          </button>
</div>
{/* Stats Section */}
<div className="hero-stats-wrapper">
  <div className="hero-stats-grid">
    {[
      ['10+', 'Projects Completed'],
      ['98%', 'Client Satisfaction'],
      ['4.9/5', 'Rating'],
      ['24/7', 'Support'],
    ].map(([value, label], i) => (
      <div key={i} className="stat-card">
        <h2 className="stat-number">{value}</h2>
        <p className="stat-label">{label}</p>
      </div>
    ))}
  </div>
</div>


      </div>

      {/* Styles */}
      <style jsx>{`
      .hero-stats-wrapper {
  margin-top: 50px;
  padding: 20px;
}

/* Responsive grid */
.hero-stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(160px, 1fr));
  gap: 20px;
  max-width: 900px;
  margin: 0 auto;
}

/* Glass card */
.stat-card {
  background: rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 22px 16px;
  text-align: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  transition: all 0.35s ease;
}

/* Hover effect */
.stat-card:hover {
  transform: translateY(-6px) scale(1.03);
  background: rgba(255, 255, 255, 0.18);
  box-shadow: 0 20px 40px rgba(0, 0, 0, 0.4);
}

/* Numbers */
.stat-number {
  font-size: clamp(22px, 3vw, 30px);
  font-weight: 800;
  color: #fbdb57;
  text-shadow: 0 0 15px rgba(251, 219, 87, 0.6);
}

/* Labels */
.stat-label {
  margin-top: 6px;
  font-size: 14px;
  color: #eaeaea;
  letter-spacing: 0.4px;
}

/* Mobile optimization */
@media (max-width: 480px) {
  .stat-card {
    padding: 18px 14px;
  }

  .stat-label {
    font-size: 13px;
  }
}

       .hero-section {
          min-height: 100vh;
        }

        /* TITLE */
        .hero-title {
          color: white;
          font-size: clamp(22px, 4vw, 42px);
          font-weight: 700;
          line-height: 1.3;
          margin-bottom: 24px;
          text-shadow: 2px 4px 10px rgba(0,0,0,0.7);
        }

        .resi { color: #F45DA2; }
        .code { color: #FBDB57; }

        /* DESCRIPTION */
        .hero-desc {
          color: #e5e5e5;
          font-size: clamp(14px, 2.2vw, 20px);
          max-width: 720px;
          margin: 0 auto;
          line-height: 1.7;
        }

        /* BUTTON */
        .hero-btn {
          padding: 14px 26px;
          font-size: 16px;
          border-radius: 12px;
          border: 2px solid #FBDB57;
          background: transparent;
          color: white;
          font-weight: 600;
          transition: all 0.3s ease;
        }

        .hero-btn:hover {
          background: #FBDB57;
          color: black;
          transform: translateY(-2px);
        }

        /* STATS GRID */
        .hero-stats {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(140px, 1fr));
          gap: 16px;
          margin-top: 48px;
        }

        
        .stat-card h2 {
          font-size: clamp(20px, 3vw, 28px);
          font-weight: 700;
          color: #FBDB57;
        }

        .stat-card p {
          font-size: 14px;
          margin-top: 6px;
        }

        /* MOBILE HEIGHT FIX */
        @media (max-width: 768px) {
          .hero-section {

            min-height: 90vh;
          }
            .hero-section h2{
            margin-top:10px;
            }
        }

        @media (max-width: 480px) {
          .hero-section {
            min-height: 85vh;
          }
            .hero-section h2{
            margin-bottom:30px;
            }
        }
             @media (max-width: 360px) {
          .hero-section {
            min-height: 85vh;
          }
            h1{
            margin-top:20px;
            }
        }
      `}</style>

    </div>
  )
}

export default Herosection
