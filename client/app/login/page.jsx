// app/login/page.jsx or pages/login.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const LoginPage = () => {
  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-md bg-white p-8 rounded-2xl shadow-lg border border-amber-200"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">
          Welcome Back to LangMaster
        </h2>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700">Email or Username</label>
            <input type="text" className="w-full mt-1 input-style" />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input type="password" className="w-full mt-1 input-style" />
          </div>

          <div className="flex items-center justify-between">
            <label className="flex items-center text-sm text-gray-600">
              <input type="checkbox" className="mr-2" />
              Remember Me
            </label>
            <Link href="/forgot-password" className="text-sm text-emerald-700 underline">
              Forgot Password?
            </Link>
          </div>

          <button
            type="submit"
            className="w-full bg-emerald-700 hover:bg-emerald-800 text-white py-2 rounded-lg transition"
          >
            Login
          </button>

          <p className="text-sm text-center mt-4 text-gray-600">
            New to LangMaster?{' '}
            <Link href="/signup" className="text-emerald-700 font-medium">Create Account</Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
};

export default LoginPage;
