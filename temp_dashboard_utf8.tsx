import { useQuery } from '@tanstack/react-query';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchTopics } from '@/lib/api';
import { useUserStore } from '@/store/userStore';
import { Trophy, Flame, Target, BookOpen, Brain, Code, Sparkles } from 'lucide-react';
import { CodeSkeleton } from '@/components/ui/SkeletonLoader';
import type { Topic } from '@/types';

export const Dashboard = () => {
  const { user } = useUserStore();
  const { data: topics, isLoading } = useQuery({
    queryKey: ['topics'],
    queryFn: fetchTopics,
  });

  // Group topics by category
  const groupedTopics = topics?.reduce((acc, topic) => {
    const category = topic.meta.category;
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(topic);
    return acc;
  }, {} as Record<string, Topic[]>) || {};

  const categoryInfo = {
    'DSA': {
      icon: Code,
      title: 'Data Structures & Algorithms',
      description: 'Master the fundamentals of computer science',
      color: 'from-blue-500 to-cyan-500'
    },
    'AI': {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Learn machine learning and neural networks',
      color: 'from-purple-500 to-pink-500'
    },
    'Web': {
      icon: Sparkles,
      title: 'Web Development',
      description: 'Build modern web applications',
      color: 'from-green-500 to-emerald-500'
    },
    'Data Science': {
      icon: BookOpen,
      title: 'Data Science',
      description: 'Analyze and visualize data',
      color: 'from-orange-500 to-red-500'
    }
  };

  const generateHeatmap = () => {
    const days = [];
    for (let i = 0; i < 365; i++) {
      const date = new Date();
      date.setDate(date.getDate() - i);
      const activity = user?.gamification.heatMapData.find(
        (d) => d.date === date.toISOString().split('T')[0]
      );
      days.push({
        date: date.toISOString().split('T')[0],
        count: activity?.count || 0,
      });
    }
    return days.reverse();
  };

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Header - Centered with 90s Style */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-3 flex items-center justify-center gap-3">
            Welcome back, {user?.profile.name || 'Learner'}!
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block text-6xl"
            >
              ≡ƒæï
            </motion.span>
          </h1>
          <p className="text-xl font-bold text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            Continue your learning journey
          </p>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-blue-200 dark:border-blue-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/50 to-transparent dark:from-blue-700/30 rounded-bl-full" />
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide">Total XP</p>
                <p className="text-4xl font-black text-gray-900 dark:text-white mt-2">
                  {user?.gamification.xp || 0}
                </p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                  Level {user?.gamification.level || 1}
                </p>
              </div>
              <div className="p-4 bg-blue-500 rounded-xl shadow-hard-sm border-2 border-black">
                <Trophy className="h-10 w-10 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-orange-200 dark:border-orange-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200/50 to-transparent dark:from-orange-700/30 rounded-bl-full" />
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-sm font-bold text-orange-700 dark:text-orange-300 uppercase tracking-wide">Streak</p>
                <p className="text-4xl font-black text-gray-900 dark:text-white mt-2">
                  {user?.gamification.streak || 0}
                </p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                  days in a row ≡ƒöÑ
                </p>
              </div>
              <div className="p-4 bg-orange-500 rounded-xl shadow-hard-sm border-2 border-black">
                <Flame className="h-10 w-10 text-white" />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4, scale: 1.02 }}
            className="bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-green-200 dark:border-green-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-200/50 to-transparent dark:from-green-700/30 rounded-bl-full" />
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-sm font-bold text-green-700 dark:text-green-300 uppercase tracking-wide">Topics</p>
                <p className="text-4xl font-black text-gray-900 dark:text-white mt-2">
                  {user?.progress.length || 0}
                </p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1">
                  in progress
                </p>
              </div>
              <div className="p-4 bg-green-500 rounded-xl shadow-hard-sm border-2 border-black">
                <Target className="h-10 w-10 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Activity Heatmap */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/50 to-transparent dark:from-purple-700/30 rounded-bl-full" />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 relative z-10">
            ≡ƒôà Activity Heatmap
          </h2>
          <div className="flex gap-1 overflow-x-auto pb-2 relative z-10">
            {generateHeatmap().slice(-52 * 7).map((day, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.3 }}
                className="w-3 h-3 rounded-sm border-2 border-gray-300 dark:border-gray-600 flex-shrink-0 transition-all"
                style={{
                  backgroundColor:
                    day.count === 0
                      ? 'transparent'
                      : day.count < 3
                      ? '#00b894'
                      : day.count < 6
                      ? '#fdcb6e'
                      : '#ff7675',
                }}
                title={`${day.date}: ${day.count} activities`}
              />
            ))}
          </div>
          <div className="flex gap-6 mt-4 text-sm font-medium text-gray-700 dark:text-gray-300 relative z-10">
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 border-2 border-gray-300 dark:border-gray-600 rounded-sm" />
              <span>None</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#00b894] border-2 border-gray-300 dark:border-gray-600 rounded-sm" />
              <span>1-2</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#fdcb6e] border-2 border-gray-300 dark:border-gray-600 rounded-sm" />
              <span>3-5</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-4 h-4 bg-[#ff7675] border-2 border-gray-300 dark:border-gray-600 rounded-sm" />
              <span>6+</span>
            </div>
          </div>
        </motion.div>

        {/* Topics by Category */}
        <div className="space-y-12">
          {isLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <CodeSkeleton key={i} />
              ))}
            </div>
          ) : (
            Object.entries(groupedTopics).map(([category, categoryTopics]) => {
              const info = categoryInfo[category as keyof typeof categoryInfo];
              const Icon = info?.icon || BookOpen;
              
              return (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="space-y-4"
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-4">
                    <div className={`p-3 bg-gradient-to-br ${info?.color || 'from-gray-500 to-gray-600'} rounded-xl`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
                        {info?.title || category}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400">
                        {info?.description || `Learn ${category}`}
                      </p>
                    </div>
                  </div>

                  {/* Topics Grid */}
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {categoryTopics.map((topic, idx) => (
                      <Link key={topic._id} to={`/learn/${topic.meta.slug}`}>
                        <motion.div
                          initial={{ opacity: 0, scale: 0.9 }}
                          animate={{ opacity: 1, scale: 1 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ y: -4, scale: 1.02 }}
                          className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-orange-200 dark:border-orange-800 cursor-pointer group relative overflow-hidden"
                        >
                          {/* Decorative corner accent */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/50 to-transparent dark:from-orange-700/30 rounded-bl-full" />
                          
                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors relative z-10">
                            {topic.meta.title}
                          </h3>
                          
                          {/* Tags with light backgrounds */}
                          <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                            {topic.meta.tags.slice(0, 3).map((tag, tagIdx) => (
                              <span
                                key={tag}
                                className={`px-3 py-1 text-xs font-medium rounded-full border ${
                                  tagIdx === 0 
                                    ? 'bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-800'
                                    : tagIdx === 1
                                    ? 'bg-purple-50 dark:bg-purple-900/30 text-purple-700 dark:text-purple-300 border-purple-200 dark:border-purple-800'
                                    : 'bg-green-50 dark:bg-green-900/30 text-green-700 dark:text-green-300 border-green-200 dark:border-green-800'
                                }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>
                          
                          <div className="flex items-center justify-between text-sm relative z-10">
                            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400 font-medium">
                              <BookOpen className="h-4 w-4" />
                              {topic.meta.estimatedTime} min
                            </span>
                            <span className="text-orange-600 dark:text-orange-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1">
                              Start
                              <span className="text-lg">ΓåÆ</span>
                            </span>
                          </div>
                        </motion.div>
                      </Link>
                    ))}
                  </div>
                </motion.div>
              );
            })
          )}
        </div>
      </div>
    </div>
  );
};
