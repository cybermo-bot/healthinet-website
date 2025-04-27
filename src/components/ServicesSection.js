"use client";
import Image from "next/image";

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 bg-white">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Services</h2>
        <p className="text-gray-600 max-w-2xl mx-auto text-lg">
          Healthinet offers a full range of smart healthcare tools to guide your wellness journey.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Card 1 */}
        <div className="bg-blue-50 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition">
          <Image src="/heartbeat.png" alt="Health Assessments" width={80} height={80} className="mb-6" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">AI Health Assessments</h3>
          <p className="text-gray-600 text-sm">
            Quickly analyze symptoms and get intelligent health guidance.
          </p>
        </div>

        {/* Card 2 */}
        <div className="bg-blue-50 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition">
          <Image src="/lungs.png" alt="Emergency Alerts" width={80} height={80} className="mb-6" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">Smart Emergency Alerts</h3>
          <p className="text-gray-600 text-sm">
            Immediate detection of critical health conditions and urgent advice.
          </p>
        </div>

        {/* Card 3 */}
        <div className="bg-blue-50 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition">
          <Image src="/pills.png" alt="Specialist Referrals" width={80} height={80} className="mb-6" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">Specialist Referrals</h3>
          <p className="text-gray-600 text-sm">
            Get personalized recommendations for the right specialist doctor.
          </p>
        </div>

        {/* Card 4 */}
        <div className="bg-blue-50 rounded-2xl p-8 flex flex-col items-center text-center hover:shadow-lg transition">
          <Image src="/dna.png" alt="Continuous Monitoring" width={80} height={80} className="mb-6" />
          <h3 className="font-bold text-lg text-gray-800 mb-2">Continuous Monitoring</h3>
          <p className="text-gray-600 text-sm">
            Track your health and receive insights with smart connected devices.
          </p>
        </div>
      </div>
    </section>
  );
}
