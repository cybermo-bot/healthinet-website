"u"use client";

export default function CallToActionSection() {
  return (
    <section className="py-20 px-6 bg-blue-600 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Take the Next Step to a Healthier You
      </h2>
      <p className="max-w-2xl mx-auto text-lg mb-8">
        Ready to connect with better healthcare? Explore our tools, try our new Heart Health Diagnosis program completely for free !
      </p>

      <a href="http://localhost:8501" target="_blank" rel="noopener noreferrer">
        <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition">
           Start Heart Health Diagnosis
        </button>
      </a>
    </section>
  );
}
