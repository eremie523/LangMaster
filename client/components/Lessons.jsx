'use client';

import { useEffect, useState, Fragment } from 'react';
import { motion } from 'framer-motion';
import { FiClock } from 'react-icons/fi';
import { Listbox } from '@headlessui/react';
import { CheckIcon, ChevronUpDownIcon } from '@heroicons/react/20/solid';

const LANGUAGES = ['Yoruba', 'Igbo', 'Hausa'];
const CATEGORIES = ['All Categories', 'Vocabulary', 'Grammar', 'Conversation', 'Cultural'];
const LEVELS = ['Beginner', 'Intermediate', 'Advanced'];

const lessonsMock = [
  {
    id: 1,
    title: 'Greetings and Introductions',
    description: 'Learn basic Yoruba greetings and how to introduce yourself.',
    duration: 15,
    image: '/soro.jpg',
    category: 'Conversation',
    level: 'Beginner',
    language: 'Yoruba',
  },
  {
    id: 2,
    title: 'Numbers and Counting',
    description: 'Learn to count from 1-20 in Yoruba and use numbers in conversation.',
    duration: 20,
    image: '/nig.jpg',
    category: 'Vocabulary',
    level: 'Beginner',
    language: 'Yoruba',
  },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function LessonBrowser() {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedLanguage, setSelectedLanguage] = useState('Yoruba');
  const [selectedCategory, setSelectedCategory] = useState('All Categories');
  const [selectedLevel, setSelectedLevel] = useState('Beginner');
  const [lessons, setLessons] = useState([]);

  useEffect(() => {
    // Replace with backend fetch
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

        {/* Filters */}
        <div className="grid md:grid-cols-3 gap-4 mb-6">
          {/* Search */}
          <input
            type="text"
            placeholder="Search lessons..."
            className="w-full px-4 py-2 border border-gray-300 rounded-md"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />

          {/* Language Dropdown */}
          <div className="w-full">
            <Listbox value={selectedLanguage} onChange={setSelectedLanguage}>
              {({ open }) => (
                <div className="relative">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-[#f9f6f1] py-2 pl-4 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a6651] focus:border-[#1a6651] sm:text-sm">
                    <span className="block truncate">{selectedLanguage}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {LANGUAGES.map((lang) => (
                      <Listbox.Option
                        key={lang}
                        className={({ active, selected }) =>
                          classNames(
                            selected
                              ? 'bg-[#96344d] text-white'
                              : active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-10 pr-4'
                          )
                        }
                        value={lang}
                      >
                        {({ selected }) => (
                          <>
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {lang}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
          </div>

          {/* Category Dropdown */}
          <div className="w-full">
            <Listbox value={selectedCategory} onChange={setSelectedCategory}>
              {({ open }) => (
                <div className="relative">
                  <Listbox.Button className="relative w-full cursor-default rounded-md bg-[#f9f6f1] py-2 pl-4 pr-10 text-left border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#1a6651] focus:border-[#1a6651] sm:text-sm">
                    <span className="block truncate">{selectedCategory}</span>
                    <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                      <ChevronUpDownIcon className="h-5 w-5 text-gray-500" aria-hidden="true" />
                    </span>
                  </Listbox.Button>

                  <Listbox.Options className="absolute z-10 mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm">
                    {CATEGORIES.map((cat) => (
                      <Listbox.Option
                        key={cat}
                        className={({ active, selected }) =>
                          classNames(
                            selected
                              ? 'bg-[#96344d] text-white'
                              : active
                              ? 'bg-gray-100 text-gray-900'
                              : 'text-gray-900',
                            'cursor-default select-none relative py-2 pl-10 pr-4'
                          )
                        }
                        value={cat}
                      >
                        {({ selected }) => (
                          <>
                            <span className={classNames(selected ? 'font-semibold' : 'font-normal', 'block truncate')}>
                              {cat}
                            </span>
                            {selected ? (
                              <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-white">
                                <CheckIcon className="h-5 w-5" aria-hidden="true" />
                              </span>
                            ) : null}
                          </>
                        )}
                      </Listbox.Option>
                    ))}
                  </Listbox.Options>
                </div>
              )}
            </Listbox>
          </div>
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

        {/* Lessons */}
        <div className="grid md:grid-cols-2 gap-6">
          {filteredLessons.map((lesson) => (
            <motion.div
              key={lesson.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4 }}
              className="bg-white rounded-lg shadow-sm overflow-hidden"
            >
              <img src={lesson.image} alt={lesson.title} className="w-full h-48 object-cover" />
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
                <h3 className="text-lg font-semibold text-gray-800 mb-1">{lesson.title}</h3>
                <p className="text-sm text-gray-600 mb-4">{lesson.description}</p>
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center gap-1">
                    <FiClock />
                    <span>{lesson.duration} min</span>
                  </div>
                  <button className="bg-[#1a6651] text-white px-4 py-2 rounded-md hover:bg-[#145142] transition duration-300 text-sm font-medium">
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
