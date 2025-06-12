'use client';

import { m as motion } from 'framer-motion';
import Navbar from '../Navbar';
import Footer from '../Footer';

const DashboardLayout = ({ children }) => {
  return (
    <div className="min-h-screen bg-[#f9f6f1]">
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-6xl mx-auto"
        >
          {children}
        </motion.div>
      </main>
      <Footer />
    </div>
  );
};

export default DashboardLayout;