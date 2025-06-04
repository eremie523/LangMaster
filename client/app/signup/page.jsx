'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const SignupPage = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-lg bg-white p-8 rounded-2xl shadow-lg border border-amber-200"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">
          Create Your LangMaster Account
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Full Name</label>
            <input type="text" className="w-full mt-1 input-style" placeholder="E.g., Chika Okafor" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Username</label>
            <input type="text" className="w-full mt-1 input-style" placeholder="E.g., chika123" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input type="email" className="w-full mt-1 input-style" placeholder="your@email.com" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="w-full mt-1 input-style" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Preferred Language to Learn</label>
            <select className="w-full mt-1 input-style">
              <option>Yoruba</option>
              <option>Igbo</option>
              <option>Hausa</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Proficiency Level</label>
            <select className="w-full mt-1 input-style">
              <option>Beginner</option>
              <option>Intermediate</option>
              <option>Advanced</option>
            </select>
          </div>

          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">
              I agree to the <Link href="/terms" className="text-emerald-700 underline">Terms & Conditions</Link>
            </span>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-2 rounded-lg transition"
          >
            Sign Up
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            Already have an account?{' '}
            <Link href="/login" className="text-emerald-700 font-medium">Login</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default SignupPage;
