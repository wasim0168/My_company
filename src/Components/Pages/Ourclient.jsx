import React from 'react';
import logo1 from '../Logos/jk_auto.png';
import logo3 from '../Logos/WhatsApp Image 2025-08-22 at 23.05.05_781dc1c4.jpg';

const OurClients = () => {
  const clientsData = [
    {
      id: 1,
      name: "JK Automobile",
      logo: logo1,
      industry: "Automotive",
      testimonial:
        "Resicode delivered exceptional results that exceeded our expectations. Their team is highly professional and skilled.",
      rating: 5,
      project: "E-commerce Platform",
    },
    {
      id: 2,
      name: "Healthcare Solutions",
      logo: "🏥",
      industry: "Health Care",
      testimonial:
        "Reliable and innovative solutions. Their team understood our unique needs and delivered perfectly.",
      rating: 5,
      project: "Medical Portal",
    },
    {
      id: 3,
      name: "Ather Trading",
      logo: logo3,
      industry: "Private Limited",
      testimonial:
        "Reliable and innovative solutions. Their team understood our unique needs and delivered perfectly.",
      rating: 4,
      project: "E-commerce",
    },
  ];

  // ⭐ Function to show stars
  const starRating = (rating) => (
    <div className="flex justify-center">
      {[...Array(5)].map((_, i) => (
        <span
          key={i}
          className={`text-lg ${i < rating ? "text-yellow-400" : "text-gray-300"}`}
        >
          ★
        </span>
      ))}
    </div>
  );

  // ⭐ Function to render logo
  const renderLogo = (client) => {
    // ✅ If logo is image
    if (typeof client.logo !== "string" || client.logo.endsWith(".jpg") || client.logo.endsWith(".png")) {
      // Apply special style if id = 3
      const logoStyle =
        client.id === 3
          ? {
              width: "140px",
              height: "140px",
              objectFit: "cover",
              borderRadius: "60%",
              border: "2px solid #000",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
            }
          : { height: "64px", width: "auto" };

      return <img src={client.logo} alt={client.name} style={logoStyle} />;
    }

    // ✅ If logo is emoji
    return <div className="text-6xl">{client.logo}</div>;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 to-black py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold text-white mb-4">
            Our <span className="text-yellow-400">Valued Clients</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We take pride in building lasting relationships with our clients.
          </p>
        </div>

        {/* Clients Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {clientsData.map((client) => (
            <div
              key={client.id}
              className="bg-gray-800 rounded-2xl p-8 hover:scale-105 transition-all"
            >
              <div className="flex justify-center mb-6">{renderLogo(client)}</div>
              <h3 className="text-2xl text-center font-bold text-white">
                {client.name}
              </h3>
              <p className="text-center text-gray-400">{client.industry}</p>
              <p className="text-center text-blue-400 text-sm">{client.project}</p>
              <div className="mt-4">{starRating(client.rating)}</div>
              <p className="text-gray-300 text-center mt-4">
                "{client.testimonial}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OurClients;
