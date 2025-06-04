'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';

const languages = [
  {
    id: 'yoruba',
    name: 'Yoruba',
    region: 'Southwestern Nigeria',
    speakers: '30+ million',
    flag: '🇳🇬',
  },
  {
    id: 'igbo',
    name: 'Igbo',
    region: 'Southeastern Nigeria',
    speakers: '24+ million',
    flag: '🇳🇬',
  },
  {
    id: 'hausa',
    name: 'Hausa',
    region: 'Northern Nigeria',
    speakers: '44+ million',
    flag: '🇳🇬',
  },
];

const proficiencyLevels = [
  {
    id: 'beginner',
    title: 'Beginner',
    desc: 'Little or no previous knowledge',
  },
  {
    id: 'intermediate',
    title: 'Intermediate',
    desc: 'Some conversational ability',
  },
  {
    id: 'advanced',
    title: 'Advanced',
    desc: 'Comfortable with complex conversations',
  },
];

export default function SignupPage() {
  const [selectedLanguage, setSelectedLanguage] = useState(null);
  const [selectedProficiency, setSelectedProficiency] = useState(null);

  return (
    <div className="min-h-screen bg-amber-50 flex items-center justify-center px-4 py-12">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-3xl bg-white p-8 rounded-2xl shadow-lg border border-amber-200"
      >
        <h2 className="text-3xl font-bold text-center text-emerald-800 mb-6">
          Create Your LangMaster Account
        </h2>

        <form className="space-y-6">
          {/* Full Name and Username */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <input type="text" className="input-style" placeholder="E.g., Chika Okafor" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Username</label>
              <input type="text" className="input-style" placeholder="E.g., chika123" />
            </div>
          </div>

          {/* Email and Password */}
          <div className="grid sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700">Email Address</label>
              <input type="email" className="input-style" placeholder="your@email.com" />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">Password</label>
              <input type="password" className="input-style" />
            </div>
          </div>

          {/* Language Selection */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Language</label>
            <p className="text-sm text-gray-500 mb-4">Choose a Nigerian language to start learning</p>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4">
              {languages.map((lang) => (
                <motion.div
                  key={lang.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => setSelectedLanguage(lang.id)}
                  className={`cursor-pointer p-4 rounded-xl border ${
                    selectedLanguage === lang.id
                      ? 'border-emerald-600 bg-emerald-50'
                      : 'border-gray-200 bg-white'
                  } shadow-sm hover:shadow-md transition duration-200`}
                >
                  <div className="text-2xl mb-1">{lang.flag}</div>
                  <h3 className="text-base font-semibold text-gray-800">{lang.name}</h3>
                  <p className="text-sm text-gray-600">{lang.region}</p>
                  <p className="text-xs text-gray-500">{lang.speakers} speakers</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Proficiency Level (Shown only if language is selected) */}
          {selectedLanguage && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Select Your Proficiency</label>
              <p className="text-sm text-gray-500 mb-4">
                How familiar are you with {languages.find((l) => l.id === selectedLanguage)?.name}?
              </p>

              <div className="grid sm:grid-cols-3 gap-4">
                {proficiencyLevels.map((level) => (
                  <motion.div
                    key={level.id}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.97 }}
                    onClick={() => setSelectedProficiency(level.id)}
                    className={`cursor-pointer p-4 rounded-xl border ${
                      selectedProficiency === level.id
                        ? 'border-emerald-600 bg-emerald-50'
                        : 'border-gray-200 bg-white'
                    } shadow-sm hover:shadow-md transition duration-200`}
                  >
                    <h4 className="text-base font-semibold text-gray-800">{level.title}</h4>
                    <p className="text-sm text-gray-600 mt-1">{level.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          )}

          {/* Terms & Submit */}
          <div className="flex items-center">
            <input type="checkbox" className="mr-2" />
            <span className="text-sm text-gray-600">
              I agree to the{' '}
              <Link href="/terms" className="text-emerald-700 underline">
                Terms & Conditions
              </Link>
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
            <Link href="/login" className="text-emerald-700 font-medium">
              Login
            </Link>
          </p>
        </form>
      </motion.div>
    </div>
  );
}
