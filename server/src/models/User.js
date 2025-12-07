import mongoose from 'mongoose';

const userSchema = new mongoose.Schema(
  {
    profile: {
      name: { type: String, required: true },
      email: { type: String, required: true, unique: true },
      avatar: String,
      bio: String,
      university: String,
      socialLinks: {
        github: String,
        linkedin: String,
        twitter: String,
      },
    },
    gamification: {
      xp: { type: Number, default: 0 },
      streak: { type: Number, default: 0 },
      level: { type: Number, default: 1 },
      badges: [String],
      heatMapData: [
        {
          date: String,
          count: Number,
        },
      ],
    },
    settings: {
      theme: {
        type: String,
        enum: ['dark', 'light', 'matrix'],
        default: 'dark',
      },
      defaultLanguage: {
        type: String,
        enum: ['cpp', 'python', 'javascript', 'java'],
        default: 'python',
      },
      accessibilityMode: { type: Boolean, default: false },
    },
    progress: [
      {
        topicId: { type: mongoose.Schema.Types.ObjectId, ref: 'Topic' },
        status: {
          type: String,
          enum: ['locked', 'active', 'mastered'],
          default: 'active',
        },
        currentSkillTier: {
          type: String,
          enum: ['beginner', 'intermediate', 'expert'],
          default: 'beginner',
        },
        quizScores: [Number],
      },
    ],
  },
  { timestamps: true }
);

export default mongoose.model('User', userSchema);
