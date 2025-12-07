import { create } from 'zustand';
import type { Topic, SkillTier, Language } from '@/types';

interface TopicState {
  currentTopic: Topic | null;
  currentTier: SkillTier;
  currentLanguage: Language;
  setCurrentTopic: (topic: Topic) => void;
  setCurrentTier: (tier: SkillTier) => void;
  setCurrentLanguage: (language: Language) => void;
}

export const useTopicStore = create<TopicState>((set) => ({
  currentTopic: null,
  currentTier: 'beginner',
  currentLanguage: 'python',

  setCurrentTopic: (topic) => set({ currentTopic: topic }),
  setCurrentTier: (tier) => set({ currentTier: tier }),
  setCurrentLanguage: (language) => set({ currentLanguage: language }),
}));
