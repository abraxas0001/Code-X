import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { fetchTopics } from '@/lib/api';
import { useUserStore } from '@/store/userStore';
import { Trophy, Flame, Target, BookOpen, Brain, Code, Sparkles, X, Zap } from 'lucide-react';
import { CodeSkeleton } from '@/components/ui/SkeletonLoader';
import type { Topic } from '@/types';
import { useState, useMemo } from 'react';

export const Dashboard = () => {
  const { user } = useUserStore();
  const [activeModal, setActiveModal] = useState<'xp' | 'streak' | 'topics' | null>(null);

  const { data: topics, isLoading } = useQuery({
    queryKey: ['topics'],
    queryFn: fetchTopics,
  });

  // Group topics by category
  const groupedTopics = useMemo(() => {
    return topics?.reduce((acc, topic) => {
      const category = topic.meta.category;
      if (!acc[category]) {
        acc[category] = [];
      }
      acc[category].push(topic);
      return acc;
    }, {} as Record<string, Topic[]>) || {};
  }, [topics]);

  const categoryInfo = {
    'DSA': {
      icon: Code,
      title: 'Data Structures & Algorithms',
      description: 'Master the fundamentals of computer science',
      color: 'from-blue-500 to-cyan-500',
      bg: 'bg-blue-500'
    },
    'AI': {
      icon: Brain,
      title: 'Artificial Intelligence',
      description: 'Learn machine learning and neural networks',
      color: 'from-purple-500 to-pink-500',
      bg: 'bg-purple-500'
    },
    'Web': {
      icon: Sparkles,
      title: 'Web Development',
      description: 'Build modern web applications',
      color: 'from-green-500 to-emerald-500',
      bg: 'bg-green-500'
    },
    'Data Science': {
      icon: BookOpen,
      title: 'Data Science',
      description: 'Analyze and visualize data',
      color: 'from-orange-500 to-red-500',
      bg: 'bg-orange-500'
    }
  };

  // Generate date range for the last 365 days (Modern Grid Implementation)
  const heatmapData = useMemo(() => {
    const today = new Date();
    const startDate = new Date(today);
    startDate.setDate(today.getDate() - 365);

    // Adjust start date to be a Sunday
    const dayOfWeek = startDate.getDay(); // 0 is Sunday
    startDate.setDate(startDate.getDate() - dayOfWeek);

    const dates = [];
    const currentDate = new Date(startDate);

    // We want roughly 53 weeks * 7 days
    for (let i = 0; i < 53 * 7; i++) {
      const dateStr = currentDate.toISOString().split('T')[0];
      const activity = user?.gamification.heatMapData.find(d => d.date === dateStr);
      // Only mark as future if it is strictly after today
      const todayStr = today.toISOString().split('T')[0];
      const isFuture = dateStr > todayStr;

      dates.push({
        date: dateStr,
        count: activity?.count || 0,
        isFuture
      });
      currentDate.setDate(currentDate.getDate() + 1);
    }
    return dates;
  }, [user?.gamification.heatMapData]);

  // Transform flat list of dates into weeks (arrays of 7 days)
  const heatmapWeeks = useMemo(() => {
    const weeks = [];
    for (let i = 0; i < heatmapData.length; i += 7) {
      weeks.push(heatmapData.slice(i, i + 7));
    }
    return weeks;
  }, [heatmapData]);

  const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  // Modal Content Components
  const XPModal = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="mx-auto w-24 h-24 bg-gradient-to-br from-blue-100 to-cyan-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-6">
          <Trophy className="h-12 w-12 text-blue-600 dark:text-blue-400" />
        </div>
        <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{user?.gamification.xp} XP</h3>
        <p className="text-gray-500 dark:text-gray-400">Total Experience Points</p>
      </div>

      <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 border border-gray-100 dark:border-gray-700">
        <h4 className="font-bold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
          <Sparkles className="h-5 w-5 text-yellow-500" />
          Rank & Achievements
        </h4>
        <div className="flex items-center justify-between mb-6">
          <span className="text-sm font-medium text-gray-600 dark:text-gray-300">Level {user?.gamification.level || 1}</span>
          <span className="text-sm font-bold text-blue-600 dark:text-blue-400">Top 10%</span>
        </div>
        <div className="space-y-3">
          {user?.gamification.badges.map((badge, idx) => (
            <div key={idx} className="flex items-center gap-3 p-3 bg-white dark:bg-gray-700 rounded-lg border border-gray-100 dark:border-gray-600">
              <span className="text-xl">🏅</span>
              <span className="font-medium text-gray-900 dark:text-gray-200">{badge}</span>
            </div>
          )) || <p className="text-gray-500 italic text-center text-sm py-4">Complete challenges to earn badges!</p>}
        </div>
      </div>
    </div>
  );

  const StreakModal = () => (
    <div className="space-y-6">
      <div className="text-center">
        <div className="mx-auto w-24 h-24 bg-gradient-to-br from-orange-100 to-red-100 dark:bg-orange-900/30 rounded-full flex items-center justify-center mb-6">
          <Flame className="h-12 w-12 text-orange-600 dark:text-orange-400" />
        </div>
        <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{user?.gamification.streak} Days</h3>
        <p className="text-gray-500 dark:text-gray-400">Current Login Streak</p>
      </div>

      <div className="bg-orange-50 dark:bg-orange-900/20 rounded-xl p-6 border border-orange-100 dark:border-orange-800">
        <div className="flex items-start gap-4">
          <Zap className="h-6 w-6 text-orange-500 shrink-0 mt-1" />
          <div>
            <p className="font-bold text-gray-900 dark:text-white mb-1">Consistency is key!</p>
            <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
              You're doing great! Log in every day to keep your streak alive and earn bonus XP multipliers.
            </p>
          </div>
        </div>
      </div>
    </div>
  );

  const TopicsModal = () => {
    // Get topics linked to user progress
    const activeTopics = user?.progress.map(p => {
      const topicDetails = topics?.find(t => t._id === p.topicId);
      return {
        ...p,
        title: topicDetails?.meta.title || 'Unknown Topic',
        slug: topicDetails?.meta.slug
      };
    }) || [];

    return (
      <div className="space-y-6">
        <div className="text-center">
          <div className="mx-auto w-24 h-24 bg-gradient-to-br from-green-100 to-emerald-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-6">
            <Target className="h-12 w-12 text-green-600 dark:text-green-400" />
          </div>
          <h3 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">{activeTopics.length} Topics</h3>
          <p className="text-gray-500 dark:text-gray-400">In Progress & Mastered</p>
        </div>

        <div className="space-y-3 max-h-64 overflow-y-auto pr-2 custom-scrollbar">
          {activeTopics.length > 0 ? activeTopics.map((item, idx) => (
            <Link key={idx} to={`/learn/${item.slug}`} onClick={() => setActiveModal(null)}>
              <div className="flex items-center justify-between p-4 bg-gray-50 dark:bg-gray-800 border border-gray-100 dark:border-gray-700 rounded-xl hover:bg-gray-100 dark:hover:bg-gray-700 transition-all group">
                <span className="font-medium text-gray-900 dark:text-gray-200 group-hover:text-green-600 dark:group-hover:text-green-400 transition-colors">
                  {item.title}
                </span>
                <span className={`px-3 py-1 text-xs font-bold rounded-full uppercase tracking-wide ${item.status === 'mastered'
                  ? 'bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400'
                  : 'bg-blue-100 text-blue-700 dark:bg-blue-900/30 dark:text-blue-400'
                  }`}>
                  {item.status}
                </span>
              </div>
            </Link>
          )) : (
            <div className="text-center py-8">
              <p className="text-gray-500 mb-2">No topics started yet.</p>
              <p className="text-sm text-gray-400">Choose a topic below to begin!</p>
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen refined-paper dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

        {/* Header - Centered with "90s Style" Font */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-12 text-center"
        >
          <h1 className="text-5xl md:text-6xl font-handwritten font-black text-ink dark:text-white mb-3 flex items-center justify-center gap-3">
            Welcome back, {user?.profile.name || 'Learner'}!
            <motion.span
              animate={{ rotate: [0, 14, -8, 14, -4, 10, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatDelay: 1 }}
              className="inline-block text-6xl"
            >
              👋
            </motion.span>
          </h1>
          <p className="text-xl font-bold font-handwritten text-gray-600 dark:text-gray-400 uppercase tracking-wide">
            Continue your learning journey
          </p>
        </motion.div>

        {/* Stats Cards - Original Gradient Style */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          {/* XP Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={() => setActiveModal('xp')}
            className="cursor-pointer bg-gradient-to-br from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20 rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-blue-200 dark:border-blue-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-blue-200/50 to-transparent dark:from-blue-700/30 rounded-bl-full" />
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-sm font-bold text-blue-700 dark:text-blue-300 uppercase tracking-wide font-handwritten">Total XP</p>
                <p className="text-4xl font-black text-gray-900 dark:text-white mt-2 font-handwritten">
                  {user?.gamification.xp || 0}
                </p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 font-mono">
                  Level {user?.gamification.level || 1}
                </p>
              </div>
              <div className="p-4 bg-blue-500 rounded-xl shadow-hard-sm border-2 border-black">
                <Trophy className="h-10 w-10 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Streak Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={() => setActiveModal('streak')}
            className="cursor-pointer bg-gradient-to-br from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20 rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-orange-200 dark:border-orange-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-orange-200/50 to-transparent dark:from-orange-700/30 rounded-bl-full" />
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-sm font-bold text-orange-700 dark:text-orange-300 uppercase tracking-wide font-handwritten">Streak</p>
                <p className="text-4xl font-black text-gray-900 dark:text-white mt-2 font-handwritten">
                  {user?.gamification.streak || 0}
                </p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 font-mono">
                  days in a row 🔥
                </p>
              </div>
              <div className="p-4 bg-orange-500 rounded-xl shadow-hard-sm border-2 border-black">
                <Flame className="h-10 w-10 text-white" />
              </div>
            </div>
          </motion.div>

          {/* Topics Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
            whileHover={{ y: -4, scale: 1.02 }}
            onClick={() => setActiveModal('topics')}
            className="cursor-pointer bg-gradient-to-br from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-green-200 dark:border-green-800 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-green-200/50 to-transparent dark:from-green-700/30 rounded-bl-full" />
            <div className="flex items-center justify-between relative z-10">
              <div>
                <p className="text-sm font-bold text-green-700 dark:text-green-300 uppercase tracking-wide font-handwritten">Topics</p>
                <p className="text-4xl font-black text-gray-900 dark:text-white mt-2 font-handwritten">
                  {user?.progress.length || 0}
                </p>
                <p className="text-sm font-medium text-gray-600 dark:text-gray-400 mt-1 font-mono">
                  in progress
                </p>
              </div>
              <div className="p-4 bg-green-500 rounded-xl shadow-hard-sm border-2 border-black">
                <Target className="h-10 w-10 text-white" />
              </div>
            </div>
          </motion.div>
        </div>

        {/* Activity Heatmap - Modern Grid (Retained) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="mb-12 p-6 bg-gradient-to-br from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20 rounded-xl border-2 border-purple-200 dark:border-purple-800 shadow-sm relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-200/50 to-transparent dark:from-purple-700/30 rounded-bl-full" />

          <div className="flex justify-between items-center mb-6 relative z-10">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-handwritten flex items-center gap-2">
              📅 Activity Heatmap
            </h2>
            <div className="flex items-center gap-2 text-xs font-medium text-gray-500 dark:text-gray-400 font-mono">
              <span>Less</span>
              <div className="w-3 h-3 bg-gray-100 dark:bg-gray-800 rounded-sm" />
              <div className="w-3 h-3 bg-purple-200 dark:bg-purple-900/30 rounded-sm" />
              <div className="w-3 h-3 bg-purple-400 dark:bg-purple-600 rounded-sm" />
              <div className="w-3 h-3 bg-purple-600 dark:bg-purple-400 rounded-sm" />
              <span>More</span>
            </div>
          </div>

          {/* Grid Render */}
          <div className="overflow-x-auto pb-4 custom-scrollbar relative z-10">
            <div className="min-w-max">
              {/* Month Headers - FIXED LOGIC FOR DARK MODE & OVERLAP */}
              <div className="flex mb-2 text-xs font-medium text-gray-500 dark:text-gray-400 pl-8 font-mono">
                {heatmapWeeks.map((week, idx) => {
                  const date = new Date(week[0].date);
                  const currentMonth = date.getMonth();

                  // Check if this week starts a new month
                  const isNewMonth = idx === 0 || new Date(heatmapWeeks[idx - 1][0].date).getMonth() !== currentMonth;

                  if (isNewMonth) {
                    return (
                      <div key={idx} style={{ width: '13px' }} className="mr-[3px] overflow-visible text-gray-600 dark:text-gray-300">
                        {months[currentMonth]}
                      </div>
                    );
                  }
                  return <div key={idx} style={{ width: '13px', marginRight: '3px' }} />;
                })}
              </div>

              <div className="flex">
                {/* Day Labels - LIGHTER IN DARK MODE */}
                <div className="flex flex-col gap-[3px] mr-3 text-[10px] font-bold text-gray-400 dark:text-gray-500 pt-[2px] font-mono">
                  <span className="h-3"></span>
                  <span className="h-3">Mon</span>
                  <span className="h-3"></span>
                  <span className="h-3">Wed</span>
                  <span className="h-3"></span>
                  <span className="h-3">Fri</span>
                  <span className="h-3"></span>
                </div>

                {/* Weeks Columns */}
                <div className="flex gap-[3px]">
                  {heatmapWeeks.map((week, wIdx) => (
                    <div key={wIdx} className="flex flex-col gap-[3px]">
                      {week.map((day, dIdx) => (
                        <div
                          key={`${wIdx}-${dIdx}`}
                          title={`${day.date}: ${day.count} contributions`}
                          className={`w-3 h-3 rounded-[2px] transition-all duration-300 ${day.isFuture
                            ? 'opacity-0'
                            : day.count === 0
                              ? 'bg-white/50 dark:bg-gray-800'
                              : day.count < 3
                                ? 'bg-purple-300 dark:bg-purple-900/40'
                                : day.count < 5
                                  ? 'bg-purple-400 dark:bg-purple-600'
                                  : 'bg-purple-600 dark:bg-purple-400'
                            }`}
                        />
                      ))}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Topics List - Original Gradient + Sticker Aesthetic */}
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
                    <div className={`p-3 bg-gradient-to-br ${info?.color || 'from-gray-500 to-gray-600'} rounded-xl shadow-md`}>
                      <Icon className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h2 className="text-2xl font-bold text-gray-900 dark:text-white font-handwritten">
                        {info?.title || category}
                      </h2>
                      <p className="text-sm text-gray-600 dark:text-gray-400 font-mono">
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
                          // ORIGINAL GRADIENT STYLING + STICKER CLASS
                          className="bg-gradient-to-br from-orange-50 to-amber-50 dark:from-orange-900/20 dark:to-amber-900/20 sticker rounded-xl shadow-sm hover:shadow-lg transition-all p-6 border-2 border-orange-200 dark:border-orange-800 cursor-pointer group relative overflow-visible"
                        >
                          {/* Paper Clip Decoration (Retained) */}
                          <div className="paper-clip absolute -top-3 -right-3" />

                          {/* Decorative corner accent */}
                          <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-orange-200/50 to-transparent dark:from-orange-700/30 rounded-bl-full pointer-events-none" />

                          <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors relative z-10 font-handwritten">
                            {topic.meta.title}
                          </h3>

                          {/* Tags with improved contrasting colors for dark mode */}
                          <div className="flex flex-wrap gap-2 mb-4 relative z-10">
                            {topic.meta.tags.slice(0, 3).map((tag, tagIdx) => (
                              <span
                                key={tag}
                                className={`px-3 py-1 text-xs font-medium rounded-full border shadow-sm font-mono ${tagIdx === 0
                                  ? 'bg-blue-50 dark:bg-blue-900/60 text-blue-700 dark:text-blue-200 border-blue-200 dark:border-blue-700'
                                  : tagIdx === 1
                                    ? 'bg-purple-50 dark:bg-purple-900/60 text-purple-700 dark:text-purple-200 border-purple-200 dark:border-purple-700'
                                    : 'bg-green-50 dark:bg-green-900/60 text-green-700 dark:text-green-200 border-green-200 dark:border-green-700'
                                  }`}
                              >
                                {tag}
                              </span>
                            ))}
                          </div>

                          <div className="flex items-center justify-between text-sm relative z-10">
                            <span className="flex items-center gap-1 text-gray-600 dark:text-gray-400 font-medium font-mono">
                              <BookOpen className="h-4 w-4" />
                              {topic.meta.estimatedTime} min
                            </span>
                            <span className="text-orange-600 dark:text-orange-400 font-bold group-hover:translate-x-1 transition-transform flex items-center gap-1 font-handwritten">
                              Start
                              <span className="text-lg">→</span>
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

        {/* Modals Overlay (Retained Logic) */}
        <AnimatePresence>
          {activeModal && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
              onClick={() => setActiveModal(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20, opacity: 0 }}
                animate={{ scale: 1, y: 0, opacity: 1 }}
                exit={{ scale: 0.9, y: 20, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-white dark:bg-gray-900 rounded-2xl shadow-2xl max-w-md w-full overflow-hidden border border-gray-200 dark:border-gray-800 relative"
              >
                <div className="absolute top-4 right-4 z-10">
                  <button
                    onClick={() => setActiveModal(null)}
                    className="p-2 hover:bg-gray-100 dark:hover:bg-gray-800 rounded-full transition-colors"
                  >
                    <X className="h-5 w-5 text-gray-400" />
                  </button>
                </div>

                <div className="p-8">
                  {activeModal === 'xp' && <XPModal />}
                  {activeModal === 'streak' && <StreakModal />}
                  {activeModal === 'topics' && <TopicsModal />}
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
};
