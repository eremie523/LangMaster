'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaGlobeAfrica, FaUser } from 'react-icons/fa';
import {
  LayoutDashboard,
  BookOpen,
  MessageCircle,
  Globe,
  User,
} from 'lucide-react';

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="bg-white border-b shadow-sm px-6 py-3 flex justify-between items-center"
    >
      <div className="flex items-center gap-2">
        <FaGlobeAfrica className="text-green-700 text-xl" />
        <span className="font-bold text-xl text-green-800">Lang</span>
        <span className="font-bold text-xl text-yellow-500">Master</span>
      </div>

      <ul className="hidden md:flex gap-8 text-sm text-gray-700 font-medium items-center">
        <li>
          <Link href="/dashboard" className="flex items-center gap-2 text-green-800 border-b-2 border-green-700 pb-1">
            <LayoutDashboard size={16} />
            Dashboard
          </Link>
        </li>
        <li>
          <Link href="/lessons" className="flex items-center gap-2 hover:text-green-800 transition">
            <BookOpen size={16} />
            Lessons
          </Link>
        </li>
        <li>
          <Link href="/conversation" className="flex items-center gap-2 hover:text-green-800 transition">
            <MessageCircle size={16} />
            Conversation
          </Link>
        </li>
        <li>
          <Link href="/cultural-insights" className="flex items-center gap-2 hover:text-green-800 transition">
            <Globe size={16} />
            Cultural Insights
          </Link>
        </li>
        <li>
          <Link href="/profile" className="flex items-center gap-2 hover:text-green-800 transition">
            <User size={16} />
            Profile
          </Link>
        </li>
      </ul>

      <div className="flex items-center gap-4">
        <span className="text-sm">Learning: <strong>yoruba</strong></span>
        <button className="flex items-center gap-1 px-3 py-1 border rounded text-sm font-medium text-green-800 border-green-700">
          <FaUser />
          Guest User
        </button>
      </div>
    </motion.nav>
  );
}
