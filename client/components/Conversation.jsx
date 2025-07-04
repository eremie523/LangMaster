'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaVolumeUp, FaPaperPlane } from 'react-icons/fa';

const tabs = ['Free Conversation', 'Guided Practice', 'Role Play'];

export default function ConversationPractice() {
  const [activeTab, setActiveTab] = useState('Free Conversation');

  const handleTabChange = (tab) => setActiveTab(tab);

  const messages = [
    {
      text: 'Ẹ kù àárọ̀! Bàwo ni?',
      translation: 'Good morning! How are you?',
      fromUser: false,
    },
    {
      text: 'Dàadáa ni. Ẹ ṣé!',
      translation: 'I am fine. Thank you!',
      fromUser: true,
    },
    {
      text: 'Kí ló dé tí o fi wá sí ibi?',
      translation: 'Why did you come here?',
      fromUser: false,
    },
  ];

  return (
    <div className="min-h-screen bg-[#F9F6F1] px-4 py-6 md:px-16 flex items-center justify-center">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl md:text-3xl font-semibold text-[#1A1A1A]">Conversation Practice</h1>
        <p className="text-sm text-gray-600 mb-6">Practice your yoruba speaking and comprehension skills</p>

        <div className="flex gap-2 bg-white border border-gray-300 rounded-lg overflow-hidden w-full max-w-xl mb-6">
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => handleTabChange(tab)}
              className={`flex-1 py-2 text-sm font-medium transition-all ${
                activeTab === tab
                  ? 'bg-[#F9F6F1] text-[#1A1A1A]'
                  : 'bg-white text-gray-500'
              }`}
            >
              {tab}
            </button>
          ))}
        </div>

        <div className="bg-white rounded-xl p-4 w-full shadow-sm">
          {activeTab === 'Free Conversation' ? (
            <>
              <h2 className="text-lg font-semibold mb-2">Free Conversation</h2>
              <p className="text-sm text-gray-500 mb-4">
                Practice freely with our AI tutor. Type in yoruba or English.
              </p>

              <div className="space-y-3 max-h-[50vh] overflow-y-auto pb-2">
                {messages.map((msg, i) => (
                  <div
                    key={i}
                    className={`rounded-lg p-3 flex flex-col text-sm shadow-sm relative ${
                      msg.fromUser
                        ? 'bg-[#1A6651] text-white self-end max-w-[80%] text-right'
                        : 'bg-white text-black self-start max-w-[80%] text-left'
                    }`}
                  >
                    <span className="font-medium">{msg.text}</span>
                    <span className="text-xs mt-1 opacity-80">{msg.translation}</span>
                    <FaVolumeUp className={`absolute bottom-2 ${msg.fromUser ? 'left-2' : 'right-2'} text-xs cursor-pointer opacity-70 hover:opacity-100`} />
                  </div>
                ))}
              </div>

              <div className="flex items-center mt-4 bg-white rounded-lg overflow-hidden">
                <input
                  type="text"
                  className="flex-1 px-3 py-2 text-sm bg-[#F9F6F1] outline-none"
                  placeholder="Type your response in Yoruba or English..."
                />
                <button className="bg-[#1A6651] text-white px-4 py-2 text-sm rounded-md">
                  <FaPaperPlane />
                </button>
              </div>
            </>
          ) : (
            <div className="py-16 text-center">
              <p className="text-lg font-medium text-gray-700">
                {activeTab} conversations coming soon!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
