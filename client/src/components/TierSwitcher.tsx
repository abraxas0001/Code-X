import { motion } from 'framer-motion';
import { useTopicStore } from '@/store/topicStore';
import type { SkillTier } from '@/types';
import { cn } from '@/lib/utils';

const tiers: { value: SkillTier; label: string; emoji: string; crayonClass: string }[] = [
  { value: 'beginner', label: 'Beginner', emoji: '🌱', crayonClass: 'crayon-green' },
  { value: 'intermediate', label: 'Intermediate', emoji: '📚', crayonClass: 'crayon-yellow' },
  { value: 'expert', label: 'Expert', emoji: '🎓', crayonClass: 'crayon-purple' },
];

export const TierSwitcher = () => {
  const { currentTier, setCurrentTier } = useTopicStore();

  return (
    <div className="sticky top-0 z-20 bg-notebook-cream dark:bg-gray-900 border-b-4 border-ink p-4 shadow-lg mb-6">
      {/* Toggle Switch Container */}
      <div className="bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-800 dark:to-gray-900 rounded-full p-1.5 border-2 border-gray-300 dark:border-gray-700 inline-flex gap-2 shadow-lg">
        {tiers.map((tier) => {
          const isActive = currentTier === tier.value;
          
          // Professional color schemes
          const colorSchemes = {
            beginner: {
              active: 'bg-gradient-to-br from-emerald-400 to-green-500 shadow-[0_4px_14px_0_rgba(16,185,129,0.4)]',
              hover: 'hover:bg-emerald-50 dark:hover:bg-emerald-950/30'
            },
            intermediate: {
              active: 'bg-gradient-to-br from-amber-400 to-orange-500 shadow-[0_4px_14px_0_rgba(245,158,11,0.4)]',
              hover: 'hover:bg-amber-50 dark:hover:bg-amber-950/30'
            },
            expert: {
              active: 'bg-gradient-to-br from-purple-500 to-indigo-600 shadow-[0_4px_14px_0_rgba(139,92,246,0.4)]',
              hover: 'hover:bg-purple-50 dark:hover:bg-purple-950/30'
            }
          };
          
          return (
            <motion.button
              key={tier.value}
              onClick={() => setCurrentTier(tier.value)}
              whileHover={{ scale: isActive ? 1 : 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={cn(
                'relative px-6 py-3 font-handwritten font-bold text-base transition-all rounded-full border-2',
                isActive
                  ? `${colorSchemes[tier.value].active} text-white border-white/30`
                  : `bg-white/50 dark:bg-gray-800/50 text-gray-700 dark:text-gray-300 border-transparent ${colorSchemes[tier.value].hover}`
              )}
            >
              <span className="mr-2 text-xl">{tier.emoji}</span>
              <span className="hidden sm:inline">{tier.label}</span>
              
              {/* Active indicator dot */}
              {isActive && (
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 500, damping: 30 }}
                  className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full border-2 border-white shadow-lg"
                />
              )}
            </motion.button>
          );
        })}
      </div>
      
      {/* Helper text */}
      <p className="text-sm font-typewriter text-gray-600 dark:text-gray-400 mt-3">
        Switch difficulty levels to see different explanations! 👆
      </p>
    </div>
  );
};
