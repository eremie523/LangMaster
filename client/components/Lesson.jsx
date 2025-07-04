'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';

const LANGUAGES = ['Yoruba', 'Igbo', 'Hausa'];
const CATEGORIES = ['All Categories', 'Vocabulary', 'Grammar', 'Conversation', 'Cultural'];
const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

const lessonsMock = [
  {
    id: 1,
    title: 'Greetings and Introductions',
    description: 'Learn basic Yoruba greetings and how to introduce yourself.',
    duration: 15,
    image: '/birthday-cake.jpg',
    category: 'Conversation',
    level: 'Beginner',
    language: 'Yoruba',
  },
  {
    id: 2,
    title: 'Numbers and Counting',
    description: 'Learn to count from 1-20 in Yoruba and use numbers in conversation.',
    duration: 20,
    image: '/birthday-cake.jpg',
    category: 'Vocabulary',
    level: 'Beginner',
    language: 'Yoruba',
  },
];

export default function LessonBrowser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Yoruba');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('Beginner');

  const [lessons, setLessons] = useState([]);

  // Fetch lessons (placeholder logic for backend hookup)
  useEffect(() => {
    // Replace this with fetch('/api/lessons') if backend is ready
    setLessons(lessonsMock);
  }, []);

  const filteredLessons = lessons.filter((lesson) => {
    const matchesQuery = lesson.title.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesLang = lesson.language === selectedLanguage;
    const matchesCat = selectedCategory === 'All Categories' || lesson.category === selectedCategory;
    const matchesLevel = lesson.level === selectedLevel;
    return matchesQuery && matchesLang && matchesCat && matchesLevel;
  });

  return (
    <div className="bg-[#f9f6f1] py-12 px-4 md:px-12 min-h-screen">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Lessons</h1>
        <p className="text-gray-600 mb-6">Browse and select lessons to continue your language learning journey</p>

        {/* Controls */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          <input
            type="text"
            placeholder="Search lessons..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={selectedLanguage}
            onChange={(e) => setSelectedLanguage(e.target.value)}
          >
            {LANGUAGES.map((lang) => (
              <option key={lang} value={lang}>{lang}</option>
            ))}
          </select>
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {CATEGORIES.map((cat) => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>

        {/* Levels */}
        <div className="flex gap-4 mb-8">
          {LEVELS.map((lvl) => (
            <button
              key={lvl}
              onClick={() => setSelectedLevel(lvl)}
              className={`px-4 py-2 rounded-md font-medium ${
                selectedLevel === lvl ? 'bg-[#ece6d8] text-gray-900' : 'text-gray-600'
              }`}
            >
              {lvl}
            </button>
          ))}
        </div>

        {/* Lesson Cards */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredLessons.map((lesson) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img
                src={lesson.image}
                alt={lesson.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <span
                  className={`inline-block text-xs font-medium mb-2 px-3 py-1 rounded-full ${
                    lesson.category === 'Vocabulary'
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {lesson.category}
                </span>
                <h3 className="text-lg font-semibold text-gray-800 mb-1">
                  {lesson.title}
                </h3>
                <p className="text-sm text-gray-600 mb-4">{lesson.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FiClock />
                    <span>{lesson.duration} min</span>
                  </div>
                  <button className="text-[#1a6651] font-medium hover:underline">
                    Start Lesson
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
