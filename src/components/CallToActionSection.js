"use client";

export default function CallToActionSection() {
  return (
    <section className="py-20 px-6 bg-blue-600 text-center text-white">
      <h2 className="text-4xl md:text-5xl font-bold mb-6">
        Take the Next Step to a Healthier You
      </h2>
      <p className="max-w-2xl mx-auto text-lg mb-8">
        Ready to connect with better healthcare? Explore our tools, find the right specialist, or monitor your health smartly with Healthinet.
      </p>
      <button className="bg-white text-blue-600 font-bold px-8 py-4 rounded-xl text-lg hover:bg-gray-100 transition">
        Get Started →
      </button>
    </section>
  );
}
