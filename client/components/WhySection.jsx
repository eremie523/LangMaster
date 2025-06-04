'use client';

import { motion } from 'framer-motion';
import { BookOpen, MessageCircle, Globe2 } from 'lucide-react';

const features = [
  {
    icon: <BookOpen className="w-6 h-6 text-emerald-800" />,
    title: 'Interactive Lessons',
    description:
      'Learn through structured lessons with audio pronunciations, flashcards, and practical exercises.',
    bg: 'bg-emerald-100',
  },
  {
    icon: <MessageCircle className="w-6 h-6 text-yellow-600" />,
    title: 'AI Conversations',
    description:
      'Practice with our AI tutor for real-time feedback and natural language conversations.',
    bg: 'bg-yellow-100',
  },
  {
    icon: <Globe2 className="w-6 h-6 text-rose-700" />,
    title: 'Cultural Context',
    description:
      'Understand the rich cultural heritage behind the language through proverbs, customs, and traditions.',
    bg: 'bg-rose-100',
  },
];

const WhySection = () => {
  return (
    <section className="bg-white py-20">
      <div className="container mx-auto px-4">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-center mb-12"
        >
          Why Learn with <span className="text-emerald-800">LangMaster</span>
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-[#f5ecdb] rounded-xl p-6 shadow-sm text-center"
            >
              <div
                className={`mx-auto mb-4 w-12 h-12 flex items-center justify-center rounded-full ${feature.bg}`}
              >
                {feature.icon}
              </div>
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhySection;
