import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useQuery } from '@tanstack/react-query';
import { motion, AnimatePresence } from 'framer-motion';
import { TheoryPane } from '@/components/TheoryPane';
import { ComplexityGraph } from '@/components/ComplexityGraph';
import { CodeEditor } from '@/components/CodeEditor';
import { AIChat } from '@/components/AIChat';
import { fetchTopicBySlug } from '@/lib/api';
import { useTopicStore } from '@/store/topicStore';
import { Loader2, Code2, BarChart2, Sparkles, X } from 'lucide-react';

export const LearnPage = () => {
  const { slug } = useParams<{ slug: string }>();
  const { setCurrentTopic } = useTopicStore();
  const [showEditor, setShowEditor] = useState(false);
  const [showComplexity, setShowComplexity] = useState(false);

  const { data: topic, isLoading } = useQuery({
    queryKey: ['topic', slug],
    queryFn: () => fetchTopicBySlug(slug!),
    enabled: !!slug,
  });

  useEffect(() => {
    if (topic) {
      setCurrentTopic(topic);
    }
  }, [topic, setCurrentTopic]);

  const scrollToEditor = () => {
    setShowEditor(true);
    setTimeout(() => {
      document.getElementById('code-section')?.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }, 100);
  };

  if (isLoading) {
    return (
      <div className="h-screen flex items-center justify-center bg-notebook-cream dark:bg-gray-900">
        <div className="text-center">
          <Loader2 className="h-12 w-12 animate-spin text-pencil mx-auto mb-4" />
          <p className="font-handwritten text-2xl text-ink dark:text-gray-200">Loading your lesson...</p>
        </div>
      </div>
    );
  }

  useEffect(() => {
    // Scroll to top when page loads
    window.scrollTo(0, 0);
  }, [slug]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-notebook-cream dark:bg-gray-900 transition-colors duration-300"
    >
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-handwritten font-bold text-ink dark:text-gray-100 mb-4">
            {topic?.meta.title}
          </h1>
          <div className="flex gap-3 justify-center flex-wrap">
            {topic?.meta.tags.map((tag, idx) => {
              const colors = ['crayon-yellow', 'crayon-blue', 'crayon-green'];
              return (
                <span
                  key={tag}
                  className={`icon-sticker px-4 py-2 ${colors[idx % colors.length]} font-typewriter font-bold text-white border-2 border-ink transform ${idx % 2 === 0 ? 'rotate-1' : '-rotate-1'}`}
                >
                  #{tag}
                </span>
              );
            })}
          </div>
        </motion.div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6 mb-12">
          {/* Theory Section - Takes 3 columns */}
          <div className="lg:col-span-3">
            <TheoryPane />
          </div>

          {/* Sidebar - Action Buttons */}
          <div className="space-y-4 lg:sticky lg:top-24 lg:self-start">
            {/* View Complexity Button - Crayon Red */}
            <motion.button
              onClick={() => setShowComplexity(true)}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-rose-400 hover:bg-rose-500 text-white font-bold py-4 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg"
            >
              <BarChart2 className="w-5 h-5" />
              <span className="font-handwritten text-lg">View Time Complexity 📊</span>
            </motion.button>

            {/* Start Coding Button - Crayon Green */}
            {!showEditor && (
              <motion.button
                onClick={scrollToEditor}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className="w-full flex items-center justify-center gap-2 bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-6 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg animate-pulse"
              >
                <Code2 className="w-6 h-6" />
                <span className="font-handwritten text-xl">Start Coding! 🚀</span>
              </motion.button>
            )}

            {/* AI Tutor Button - Crayon Purple */}
            <motion.button
              onClick={() => {
                // Trigger AI chat drawer (handled by AIChat component)
                const event = new CustomEvent('openAIChat');
                window.dispatchEvent(event);
              }}
              whileHover={{ scale: 1.02, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="w-full flex items-center justify-center gap-2 bg-indigo-400 hover:bg-indigo-500 text-white font-bold py-4 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg"
            >
              <Sparkles className="w-5 h-5" />
              <span className="font-handwritten text-lg">Stuck? Ask AI 🤖</span>
            </motion.button>

            {/* Sticky Note Hint */}
            <motion.div
              initial={{ rotate: -2 }}
              whileHover={{ rotate: 0 }}
              className="bg-yellow-200 dark:bg-amber-600 p-4 rounded-sm shadow-lg transform -rotate-2 border-2 border-yellow-300 dark:border-amber-700"
            >
              <p className="font-handwritten text-sm text-gray-900 dark:text-white leading-relaxed">
                💡 <strong>Pro Tip:</strong> Try switching between difficulty levels to see different explanations!
              </p>
            </motion.div>
          </div>
        </div>

        {/* Complexity Graph Modal */}
        <AnimatePresence>
          {showComplexity && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
              onClick={() => setShowComplexity(false)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="bg-notebook-cream dark:bg-gray-800 border-4 border-ink rounded-xl shadow-2xl max-w-4xl w-full max-h-[85vh] overflow-auto"
              >
                {/* Modal Header */}
                <div className="sticky top-0 bg-gradient-to-r from-rose-400 to-pink-400 border-b-4 border-ink p-6 flex items-center justify-between">
                  <h2 className="text-3xl font-handwritten font-bold text-white flex items-center gap-3">
                    <BarChart2 className="w-8 h-8" />
                    Time Complexity Cheat Sheet
                  </h2>
                  <button
                    onClick={() => setShowComplexity(false)}
                    className="p-2 bg-white/20 hover:bg-white/30 rounded-lg transition-colors"
                  >
                    <X className="w-6 h-6 text-white" />
                  </button>
                </div>

                {/* Modal Content */}
                <div className="p-6">
                  <ComplexityGraph />
                </div>

                {/* Modal Footer */}
                <div className="sticky bottom-0 bg-notebook-cream dark:bg-gray-800 border-t-4 border-ink p-6">
                  <motion.button
                    onClick={() => setShowComplexity(false)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full bg-emerald-400 hover:bg-emerald-500 text-white font-bold py-3 px-6 border-4 border-black shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[2px_2px_0px_0px_rgba(0,0,0,1)] hover:translate-x-[2px] hover:translate-y-[2px] transition-all rounded-lg font-handwritten text-lg"
                  >
                    Got it! Close ✓
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Code Editor Section - Progressive Reveal */}
        <AnimatePresence>
          {showEditor && (
            <motion.div
              id="code-section"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="mt-12"
            >
              <div className="bg-white dark:bg-gray-800 border-4 border-ink rounded-xl shadow-2xl overflow-hidden">
                {/* Editor Header */}
                <div className="bg-gradient-to-r from-emerald-400 to-teal-400 border-b-4 border-ink p-6">
                  <h2 className="text-3xl font-handwritten font-bold text-white flex items-center gap-3">
                    <Code2 className="h-8 w-8" />
                    Your Coding Playground
                  </h2>
                  <p className="text-white/90 font-typewriter mt-2">
                    Write, test, and experiment with code right here!
                  </p>
                </div>

                {/* Editor Content */}
                <div className="p-6">
                  <CodeEditor />
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* AI Chat Component */}
      <AIChat />
    </motion.div>
  );
};
