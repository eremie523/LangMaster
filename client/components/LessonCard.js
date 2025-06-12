'use client';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';

export default function LessonCard({ category, title, description, duration, color, image }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl shadow-md overflow-hidden w-full sm:w-[320px]"
    >
      <img src={image} alt={title} className="w-full h-40 object-cover" />

      <div className="p-4 space-y-2">
        <span
          className="inline-block px-3 py-1 text-xs font-semibold text-white rounded-full"
          style={{ backgroundColor: color }}
        >
          {category}
        </span>

        <h3 className="text-lg font-semibold text-gray-800">{title}</h3>
        <p className="text-sm text-gray-600">{description}</p>

        <div className="flex justify-between items-center text-sm pt-2">
          <div className="flex items-center gap-1 text-gray-600">
            <FiClock className="text-base" />
            {duration} min
          </div>
          <button className="text-sm font-semibold text-gray-700 hover:text-green-700">
            Start Lesson
          </button>
        </div>
      </div>
    </motion.div>
  );
}
