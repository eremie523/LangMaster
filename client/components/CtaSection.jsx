'use client';

import { motion } from 'framer-motion';
import { UserPlus } from 'lucide-react';
import Link from 'next/link';

const CtaSection = () => {
  return (
    <section className="bg-emerald-800 py-24 text-center text-white">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="container mx-auto px-4"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready to start your language journey?
        </h2>
        <p className="text-lg mb-8 text-white/90">
          Join thousands of learners discovering Nigerian languages and cultures
        </p>
      <Link 
            href="/signup"
            className="inline-flex items-center gap-2 px-6 py-3 bg-white text-emerald-800 font-medium rounded-lg shadow hover:bg-white/90 transition"
    >
     <UserPlus className="w-5 h-5" />
        Create Free Account
    </Link>

      </motion.div>
    </section>
  );
};

export default CtaSection;
