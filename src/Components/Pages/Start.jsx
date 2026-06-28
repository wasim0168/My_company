import React from "react";
import Ar from "../Logos/ather.jpg";

const Start = () => {
  return (
    <section className="bg-gray-900 py-20 px-4 mt-1">
      <div className="max-w-6xl mx-auto text-center">

        {/* Heading */}
        <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
          Ready to Start Your Project with{" "}
          <span className="text-yellow-300">Resicode?</span>
        </h2>

        <p className="text-gray-300 text-lg md:text-xl max-w-3xl mx-auto mb-10">
          Let’s transform your ideas into a powerful digital solution.  
          Get started with a free consultation and see how we help businesses grow.
        </p>

        {/* CTA Button */}
        <div className="mb-16">
          <button className="bg-yellow-300 text-black font-bold py-3 px-8 rounded-xl 
          transition-all duration-300 transform hover:scale-105 hover:shadow-2xl 
          border-2 border-yellow-300 hover:bg-transparent hover:text-yellow-300">
            Book Free Consultation
          </button>
        </div>

        {/* Testimonial */}
        <div className="flex justify-center">
          <div className="bg-white/5 backdrop-blur-lg border border-white/10 
          rounded-2xl p-8 md:p-10 max-w-3xl w-full shadow-xl">

            {/* Rating */}
            <div className="flex justify-center items-center gap-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">★</span>
              ))}
              <span className="text-gray-400 text-sm ml-2">4.9/5</span>
            </div>

            {/* Review */}
            <p className="text-gray-300 italic leading-relaxed text-base md:text-lg">
              “Resicode delivered our project ahead of schedule with exceptional
              quality. Their team was professional, communicative, and truly
              understood our vision. We highly recommend their services to anyone
              looking for top-notch web development.”
            </p>

            {/* Client */}
            <div className="flex flex-col items-center mt-6">
              <img
                src={Ar}
                alt="Ather Trading"
                className="w-14 h-14 rounded-full object-cover border-2 border-yellow-300 mb-2"
              />
              <p className="text-yellow-300 font-bold">Ather Trading</p>
              <span className="text-gray-400 text-sm">Verified Client</span>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default Start;
