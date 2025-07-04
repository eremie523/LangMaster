'use client';

import { useState } from 'react';

const categories = ['All', 'Proverbs', 'Customs', 'History', 'Etiquette'];

const sampleData = [
  {
    id: 1,
    category: 'Proverbs',
    language: 'Yoruba',
    title: 'Bí ọwọ́ bá pé lárà ẹyẹ, á di eérú',
    content: "Translation: 'If a hand stays too long on a bird, it will become ashes.' Meaning: Don't procrastinate; act when you have the opportunity.",
    image: '/nig.jpg',
  },
  {
    id: 2,
    category: 'Customs',
    language: 'Yoruba',
    title: 'Prostration in Yoruba Culture',
    content:
      'In Yoruba culture, young men show respect by prostrating before elders — lying flat with face down. This is an essential part of greeting etiquette, showing humility and proper upbringing.',
    image: '/nig.jpg',
  },
];

export default function CulturalInsights() {
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredData =
    activeCategory === 'All'
      ? sampleData
      : sampleData.filter((item) => item.category === activeCategory);

  return (
    <div className="min-h-screen bg-[#F9F6F1] px-4 py-10 md:px-20">
      <h1 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">Cultural Insights</h1>
      <p className="text-sm text-gray-600 mb-6">
        Explore the rich cultural context behind the Nigerian languages
      </p>

      <div className="flex flex-col md:flex-row gap-4 mb-4">
        <input
          type="text"
          placeholder="Search cultural insights..."
          className="flex-1 px-4 py-2 border border-[#1A6651] rounded-md text-sm focus:ring-2 focus:ring-[#1A6651] focus:outline-none"
        />
        <select className="px-4 py-2 border border-gray-300 rounded-md text-sm focus:ring-2 focus:ring-[#452F16] focus:outline-none">
          <option>Yoruba</option>
          <option>Igbo</option>
          <option>Hausa</option>
        </select>
      </div>

      <div className="flex gap-2 mb-6">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`px-4 py-1 text-sm rounded-md border ${
              activeCategory === cat
                ? 'bg-[#F9F6F1] border-gray-300 shadow-sm'
                : 'bg-white border-gray-200 text-gray-600'
            }`}
          >
            {cat}
          </button>
        ))}
      </div>

      {['History', 'Etiquette'].includes(activeCategory) ? (
        <div className="text-center py-20 text-gray-700 text-lg font-medium">
          {activeCategory} content coming soon!
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-6">
          {filteredData.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-xl overflow-hidden border border-gray-200 shadow-sm"
            >
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4 space-y-2">
                <div className="flex gap-2 text-xs">
                  <span className={`px-2 py-0.5 rounded-full text-white ${
                    item.category === 'Proverbs'
                      ? 'bg-yellow-500'
                      : item.category === 'Customs'
                      ? 'bg-rose-700'
                      : 'bg-gray-500'
                  }`}>
                    {item.category}
                  </span>
                  <span className="px-2 py-0.5 rounded-full border border-gray-300">
                    {item.language}
                  </span>
                </div>
                <h3 className="text-base font-semibold text-gray-900">
                  {item.title}
                </h3>
                <p className="text-sm text-gray-600">{item.content}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
