export type SkillTier = 'beginner' | 'intermediate' | 'expert';
export type TopicStatus = 'locked' | 'active' | 'mastered';
export type Language = 'cpp' | 'python' | 'javascript' | 'java';
export type Theme = 'dark' | 'light' | 'matrix';

export interface User {
  _id: string;
  profile: {
    name: string;
    email: string;
    avatar?: string;
    bio?: string;
    university?: string;
    socialLinks?: Record<string, string>;
  };
  gamification: {
    xp: number;
    streak: number;
    level: number;
    badges: string[];
    heatMapData: Array<{ date: string; count: number }>;
  };
  settings: {
    theme: Theme;
    defaultLanguage: Language;
    accessibilityMode: boolean;
  };
  progress: TopicProgress[];
}

export interface TopicProgress {
  topicId: string;
  status: TopicStatus;
  currentSkillTier: SkillTier;
  quizScores: number[];
}

export interface CodeSnippet {
  language: Language;
  code: string;
  explanation?: string;
}

export interface TierContent {
  markdownText: string;
  videoUrl?: string;
  analogy?: string;
  standardLibUsage?: string;
  timeComplexityAnalysis?: string;
  memoryOptimization?: string;
  edgeCases?: string[];
  systemDesignImplications?: string;
  codeSnippets: CodeSnippet[];
}

export interface Topic {
  _id: string;
  meta: {
    title: string;
    slug: string;
    category: 'DSA' | 'AI' | 'Web' | 'Data Science';
    tags: string[];
    estimatedTime: number;
  };
  content: {
    beginner: TierContent;
    intermediate: TierContent;
    expert: TierContent;
  };
  interactive: {
    animationConfig: {
      type: 'sorting' | 'graph' | 'tree' | 'array';
      params: Record<string, any>;
    };
    playgroundInitialCode: Record<Language, string>;
  };
}

export interface CompilationResult {
  success: boolean;
  output?: string;
  error?: string;
  executionTime?: number;
  memory?: number;
}
