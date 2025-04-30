"use client";
import Image from "next/image";
import Link from "next/link";

export default function ServiceSection() {
  const sections = [
    {
      title: "Doctor Section",
      description: "Access tools for managing patient interactions, diagnoses, and clinical history.",
      icon: "👨‍⚕️",
      link: "#doctor" // placeholder for now, can become actual link
    },
    {
      title: "Patient Section",
      description: "Check your symptoms, get AI suggestions, and track your health data.",
      icon: "🧍‍♂️",
      link: "/chat"
    },
    {
      title: "Hospital Section",
      description: "Hospital management: staff, beds, schedules, and emergencies.",
      icon: "🏥",
      link: "http://localhost/hospital"
    },
    {
      title: "AI Symptom Checker",
      description: "Our chatbot helps analyze your symptoms and give relevant suggestions.",
      icon: "🤖",
      link: "/chat"
    },
    {
      title: "Heart Diagnosis",
      description: "Use our ML-powered tool to check for early signs of heart issues.",
      icon: "❤️",
      link: "http://localhost:8501"
    },
    {
      title: "Specialist Referrals",
      description: "Based on symptoms, get matched with the most suitable specialist.",
      icon: "📋",
      link: "/chat"
    }
  ];

  return (
    <section className="py-20 px-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Explore All Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Healthinet connects all parts of the care journey: from first symptoms to expert advice.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {sections.map((item, index) => (
          <Link href={item.link} key={index} target={item.link.startsWith("http") ? "_blank" : "_self"}>
            <div className="bg-blue-50 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition cursor-pointer">
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="font-bold text-lg text-gray-800 mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
