'use client';
import React from 'react';

const AboutHeroSection = () => {
  return (
    <section className="min-h-screen bg-gray-50 flex items-center">
      <div className="container mx-auto px-6 lg:px-20 flex flex-col-reverse lg:flex-row items-center">
        {/* Left Text Content */}
        <div className="w-full lg:w-1/2 mt-10 lg:mt-0">
          <h1 className="text-4xl lg:text-6xl font-bold text-gray-800 mb-6">
            A New Generation in Health Innovation
          </h1>
          <p className="text-gray-600 text-lg mb-8">
            Join us on this transforming journey as a new era of healthcare develops
            and your family's happiness becomes our top concern.
          </p>
          <a
            href="#"
            className="inline-block bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded-lg transition duration-300"
          >
            Set a Meeting →
          </a>
        </div>

        {/* Right Image */}
        <div className="w-full lg:w-1/2 flex justify-center">
          <img
            src="/doctor-smiling.png"
            alt="Doctors Team"
            className="rounded-3xl shadow-lg w-full max-w-md"
          />
        </div>
      </div>
    </section>
  );
};

export default AboutHeroSection;
