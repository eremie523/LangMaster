'use client';
import { motion } from 'framer-motion';

export default function ProgressCard({ title, value, unit, color, progress }) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-lg shadow p-4 w-full sm:w-60"
    >
      <p className="text-sm text-gray-600">{title}</p>
      <h3 className="text-2xl font-bold text-gray-800">
        <span style={{ color }}>{value}</span> {unit}
      </h3>
      <div className="mt-2 w-full bg-gray-200 rounded-full h-2">
        <div
          className="h-2 rounded-full"
          style={{ width: `${progress}%`, backgroundColor: color }}
        />
      </div>
    </motion.div>
  );
}
