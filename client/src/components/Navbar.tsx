import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Home, User, Zap, Trophy } from 'lucide-react';
import { useUserStore } from '@/store/userStore';
import { ThemeToggle } from './ThemeToggle';

export const Navbar = () => {
  const { user } = useUserStore();

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 z-50 bg-white dark:bg-gray-900 border-b-4 border-black shadow-hard backdrop-blur-md bg-opacity-95">
      <div className="h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Logo */}
        <Link to="/dashboard">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-3"
          >
            <div className="w-10 h-10 bg-gradient-to-br from-purple-600 to-blue-600 rounded-lg flex items-center justify-center border-2 border-black shadow-hard-sm">
              <Zap className="h-6 w-6 text-white" />
            </div>
            <span className="text-2xl font-marker font-bold text-gray-900 dark:text-white">
              Code-X-Machina
            </span>
          </motion.div>
        </Link>

        {/* Nav Items */}
        <div className="flex items-center gap-6">
          <Link to="/dashboard">
            <motion.button
              whileHover={{ y: -2 }}
              whileTap={{ y: 0 }}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 dark:text-gray-300 hover:text-purple-600 dark:hover:text-purple-400 font-medium transition-colors"
            >
              <Home className="h-5 w-5" />
              <span>Dashboard</span>
            </motion.button>
          </Link>

          {/* XP Display */}
          <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-yellow-400 to-orange-400 rounded-lg border-2 border-black shadow-hard-sm">
            <Trophy className="h-5 w-5 text-gray-900" />
            <span className="font-bold text-gray-900">{user?.gamification.xp || 0} XP</span>
          </div>

          {/* User */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex items-center gap-3 px-4 py-2 bg-gradient-to-br from-purple-100 to-pink-100 dark:from-purple-900/40 dark:to-pink-900/40 rounded-lg border-2 border-black shadow-hard-sm cursor-pointer"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center border-2 border-black">
              <User className="h-5 w-5 text-white" />
            </div>
            <div className="flex flex-col">
              <span className="text-base font-black text-gray-900 dark:text-white leading-tight">
                {user?.profile.name || 'Guest'}
              </span>
              <span className="text-sm font-bold text-purple-600 dark:text-purple-400">
                Level {user?.gamification.level || 1}
              </span>
            </div>
          </motion.div>

          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
};
