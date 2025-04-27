'use client';
import Link from 'next/link';

export default function Navbar() {
  return (
    <nav className="flex items-center justify-between p-6 bg-white shadow-md">
      <div className="text-2xl font-bold text-blue-600">HealthiNet</div>
      <div className="hidden md:flex space-x-8">
        <Link href="/" className="text-gray-600 hover:text-blue-600">Home</Link>
        <Link href="#services" className="text-gray-600 hover:text-blue-600">Services</Link>
        <Link href="/about" className="text-gray-600 hover:text-blue-600">About</Link>
      </div>
      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700">
        Talk to HealthiNet
      </button>
    </nav>
  );
}
