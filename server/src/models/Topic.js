import mongoose from 'mongoose';

const codeSnippetSchema = new mongoose.Schema({
  language: {
    type: String,
    enum: ['cpp', 'python', 'javascript', 'java'],
    required: true,
  },
  code: { type: String, required: true },
  explanation: String,
});

const tierContentSchema = new mongoose.Schema({
  markdownText: { type: String, required: true },
  videoUrl: String,
  analogy: String,
  standardLibUsage: String,
  timeComplexityAnalysis: String,
  memoryOptimization: String,
  edgeCases: [String],
  systemDesignImplications: String,
  codeSnippets: [codeSnippetSchema],
});

const topicSchema = new mongoose.Schema(
  {
    meta: {
      title: { type: String, required: true },
      slug: { type: String, required: true, unique: true },
      category: {
        type: String,
        enum: ['DSA', 'AI', 'Web', 'Data Science'],
        required: true,
      },
      tags: [String],
      estimatedTime: { type: Number, required: true },
    },
    content: {
      beginner: { type: tierContentSchema, required: true },
      intermediate: { type: tierContentSchema, required: true },
      expert: { type: tierContentSchema, required: true },
    },
    interactive: {
      animationConfig: {
        type: {
          type: String,
          enum: ['sorting', 'graph', 'tree', 'array'],
        },
        params: mongoose.Schema.Types.Mixed,
      },
      playgroundInitialCode: {
        cpp: String,
        python: String,
        javascript: String,
        java: String,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model('Topic', topicSchema);
