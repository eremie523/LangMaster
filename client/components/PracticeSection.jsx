'use client';

import { motion } from 'framer-motion';

export default function YorubaPracticeSection() {
  return (
    <div className="bg-[#f9f6f1] py-12 px-4 md:px-12">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-6">
        {/* Daily Conversation Practice Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Daily Conversation Practice
          </h2>
          <p className="text-sm text-gray-600 mb-6">
            Improve your speaking skills with our AI tutor
          </p>
          <div className="bg-[#f9f6f1] text-center rounded-md p-6 mb-6">
            <p className="text-[#4D4D4D]">
              Practice speaking yoruba with guided conversations
            </p>
          </div>
          <button className="w-full bg-[#1a6651] text-white py-3 px-6 rounded-md font-medium hover:bg-[#145142] transition duration-300">
            Start Conversation
          </button>
        </motion.div>

        {/* Cultural Insight of the Day Card */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="bg-white rounded-lg shadow-sm p-6"
        >
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Cultural Insight of the Day
          </h2>
          <p className="text-sm text-gray-600 mb-4">
            Explore the rich culture behind the language
          </p>
          <p className="font-semibold text-[#1a1a1a] mb-2">
            Bí ọwọ́ bá pé lára ẹyẹ, á di eerú
          </p>
          <p className="text-sm text-gray-600 mb-6">
            <span className="block mb-1">
              <strong>Translation:</strong> 'If a hand stays too long on a bird, it will become ashes.'
            </span>
            Meaning: Don’t procrastinate; act when you have the opportunity.
          </p>
          <button className="w-full border border-[#1a6651] text-[#1a6651] py-3 px-6 rounded-md font-medium hover:bg-[#1a6651] hover:text-white transition duration-300">
            Explore Cultural Insights
          </button>
        </motion.div>
      </div>
    </div>
  );
}
