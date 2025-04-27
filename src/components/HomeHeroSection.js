"use client";

export default function HomeHeroSection() {
  return (
    <section className="flex flex-col items-center justify-center text-center py-24 px-6 bg-gradient-to-r from-white via-blue-100 to-white">
      <h1 className="text-5xl md:text-6xl font-bold text-gray-800 leading-tight mb-6">
        Smart Healthcare, <br /> Limitless Possibilities.
      </h1>
      <p className="text-gray-600 text-lg max-w-2xl mb-8">
        Explore our services to guide your health journey. From quick assessments to finding the right specialist, Healthinet empowers your healthcare decisions.
      </p>
      <button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-6 py-3 rounded-xl transition">
        Start Health Check
      </button>
    </section>
  );
}
