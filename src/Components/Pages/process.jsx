import React from "react";

const Process = () => {
  const steps = [
    { id: "01", title: "Consultation", color: "text-[#ffff]" },
    { id: "02", title: "Planning", color: "text-[#ffff]" },
    { id: "03", title: "Design & Development", color: "text-[#ffff]" },
    { id: "04", title: "Testing", color: "text-[#ffff]" },
    { id: "05", title: "Launch & Support", color: "text-[#ffff]" },
    { id: "06", title: "Optimization", color: "text-[#ffff]" },
  ];

  return (
    <section className="bg-gray-900 py-20 px-4">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-14">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Our Process
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto">
            A structured approach that ensures quality, speed, and long-term success.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {steps.map((step) => (
            <div
              key={step.id}
              className="group bg-white/5 backdrop-blur-xl border border-white/10 
              rounded-2xl p-8 text-center transition-all duration-500
              hover:-translate-y-3 hover:shadow-[0_25px_60px_rgba(0,0,0,0.5)]"
            >
              {/* Step Number */}
              <div
                className={`text-5xl font-extrabold mb-6 ${step.color} opacity-90`}
              >
                {step.id}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-white mb-3">
                {step.title}
              </h3>

              {/* Divider */}
              <div className="w-12 h-1 mx-auto rounded-full bg-gradient-to-r from-pink-500 via-yellow-400 to-cyan-400 opacity-70 group-hover:w-20 transition-all duration-500" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
