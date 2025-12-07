import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import type { User, SkillTier } from '@/types';

interface UserState {
  user: User | null;
  isAuthenticated: boolean;
  setUser: (user: User | null) => void;
  updateXP: (amount: number) => void;
  updateProgress: (topicId: string, tier: SkillTier, score?: number) => void;
  logout: () => void;
  initializeMockUser: () => void;
}

// Mock user for demo
const mockUser: User = {
  _id: 'user1',
  profile: {
    name: 'Alex Chen',
    email: 'alex@omnilearn.dev',
    bio: 'Aspiring software engineer',
    university: 'MIT',
  },
  gamification: {
    xp: 250,
    streak: 7,
    level: 3,
    badges: ['First Steps', 'Week Warrior'],
    heatMapData: [
      { date: '2024-12-01', count: 3 },
      { date: '2024-12-02', count: 5 },
      { date: '2024-12-03', count: 2 },
      { date: '2024-12-04', count: 4 },
      { date: '2024-12-05', count: 6 },
      { date: '2024-12-06', count: 3 },
      { date: '2024-12-07', count: 5 },
    ],
  },
  settings: {
    theme: 'dark',
    defaultLanguage: 'python',
    accessibilityMode: false,
  },
  progress: [
    {
      topicId: '1',
      status: 'active',
      currentSkillTier: 'beginner',
      quizScores: [80, 90],
    },
  ],
};

export const useUserStore = create<UserState>()(
  persist(
    (set) => ({
      user: null,
      isAuthenticated: false,

      setUser: (user) => set({ user, isAuthenticated: !!user }),

      initializeMockUser: () => set({ user: mockUser, isAuthenticated: true }),

      updateXP: (amount) =>
        set((state) => {
          if (!state.user) return state;
          const newXP = state.user.gamification.xp + amount;
          const newLevel = Math.floor(newXP / 100) + 1;
          return {
            user: {
              ...state.user,
              gamification: {
                ...state.user.gamification,
                xp: newXP,
                level: newLevel,
              },
            },
          };
        }),

      updateProgress: (topicId, tier, score) =>
        set((state) => {
          if (!state.user) return state;
          const progressIndex = state.user.progress.findIndex(
            (p) => p.topicId === topicId
          );
          const updatedProgress = [...state.user.progress];

          if (progressIndex >= 0) {
            updatedProgress[progressIndex] = {
              ...updatedProgress[progressIndex],
              currentSkillTier: tier,
              quizScores: score
                ? [...updatedProgress[progressIndex].quizScores, score]
                : updatedProgress[progressIndex].quizScores,
            };
          } else {
            updatedProgress.push({
              topicId,
              status: 'active',
              currentSkillTier: tier,
              quizScores: score ? [score] : [],
            });
          }

          return {
            user: {
              ...state.user,
              progress: updatedProgress,
            },
          };
        }),

      logout: () => set({ user: null, isAuthenticated: false }),
    }),
    {
      name: 'omnilearn-user',
    }
  )
);
