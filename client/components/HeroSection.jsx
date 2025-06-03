import { Globe } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="bg-[#f5ecdb] bg-[url('/pattern.svg')] bg-repeat py-20 px-4 text-center">
      <div className="max-w-3xl mx-auto">
        {/* Globe Icon using Lucide Version */}
        <div className="flex justify-center mb-4">
          <Globe className="w-16 h-16 text-green-800" strokeWidth={1.5} />
        </div>

        {/* Head */}
        <h1 className="text-4xl sm:text-5xl font-bold leading-tight">
          <span className="text-green-800">Learn Nigerian Languages </span>
          <span className="text-yellow-600">with Cultural Context</span>
        </h1>

        {/* Subhead */}
        <p className="text-lg text-gray-700 mt-6">
          Master Yoruba, Igbo, and Hausa through interactive lessons, AI-powered conversations,
          and authentic cultural insights.
        </p>

        {/* CTA Here */}
        <div className="mt-8 flex justify-center gap-4 flex-wrap">
          <button className="bg-green-800 text-white px-6 py-3 rounded-md hover:bg-green-700 font-medium flex items-center gap-2">
            Get Started
            <span className="text-xl">→</span>
          </button>

          <button className="border border-green-800 text-green-800 px-6 py-3 rounded-md hover:bg-green-50 font-medium">
            Learn More
          </button>
        </div>
      </div>
    </section>
  );
}