import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Send, Loader2, Sparkles, Brain } from 'lucide-react';
import { getAIResponse } from '@/lib/gemini';
import { useTopicStore } from '@/store/topicStore';

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

export const AIChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const { currentTopic, currentTier } = useTopicStore();

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage: Message = { role: 'user', content: input };
    setMessages((prev) => [...prev, userMessage]);
    setInput('');
    setIsLoading(true);

    try {
      const response = await getAIResponse(input, {
        tier: currentTier,
        topicTitle: currentTopic?.meta.title,
      });

      const assistantMessage: Message = { role: 'assistant', content: response };
      setMessages((prev) => [...prev, assistantMessage]);
    } catch (error) {
      console.error('AI Chat error:', error);
      const errorMessage: Message = { 
        role: 'assistant', 
        content: '❌ Sorry, I encountered an error. Please try again or check your API key.' 
      };
      setMessages((prev) => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Floating Button - Modern Gradient */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-br from-purple-500 via-blue-500 to-cyan-500 rounded-full shadow-lg border-2 border-white dark:border-gray-800 flex items-center justify-center"
      >
        {isOpen ? (
          <X className="h-6 w-6 text-white" />
        ) : (
          <Sparkles className="h-6 w-6 text-white" />
        )}
      </motion.button>

      {/* Chat Window - Modern Glass Morphism */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            className="fixed bottom-24 right-6 z-40 w-96 h-[550px] backdrop-blur-xl bg-white/80 dark:bg-gray-900/80 border-2 border-gray-200 dark:border-gray-700 rounded-2xl shadow-2xl flex flex-col overflow-hidden"
          >
            {/* Header - Gradient Background */}
            <div className="p-5 bg-gradient-to-r from-purple-500 via-blue-500 to-cyan-500 relative">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center">
                  <Brain className="h-5 w-5 text-white" />
                </div>
                <div>
                  <h3 className="font-handwritten font-bold text-xl text-white">AI Tutor</h3>
                  <p className="text-xs font-typewriter text-white/80">
                    Ask about {currentTopic?.meta.title || 'this topic'}
                  </p>
                </div>
              </div>
              {/* Decorative gradient orbs */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 left-0 w-24 h-24 bg-cyan-300/20 rounded-full blur-2xl" />
            </div>

            {/* Messages - Scrollable Area */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.length === 0 && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="text-center mt-12"
                >
                  <div className="w-20 h-20 mx-auto mb-4 bg-gradient-to-br from-purple-100 to-blue-100 dark:from-purple-900/30 dark:to-blue-900/30 rounded-full flex items-center justify-center">
                    <Sparkles className="w-10 h-10 text-purple-500 dark:text-purple-400" />
                  </div>
                  <p className="text-sm font-handwritten text-gray-600 dark:text-gray-400 mb-2">
                    Ready to help you learn!
                  </p>
                  <p className="text-xs font-typewriter text-gray-500 dark:text-gray-500">
                    I'll guide you with questions, not answers 🤫
                  </p>
                </motion.div>
              )}
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.05 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[85%] p-3 rounded-2xl backdrop-blur-sm ${
                      msg.role === 'user'
                        ? 'bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-lg'
                        : 'bg-white/60 dark:bg-gray-800/60 text-gray-900 dark:text-gray-100 border border-gray-200 dark:border-gray-700 shadow-md'
                    }`}
                  >
                    <p className="text-sm font-typewriter whitespace-pre-wrap leading-relaxed">
                      {msg.content}
                    </p>
                  </div>
                </motion.div>
              ))}
              {isLoading && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex justify-start"
                >
                  <div className="bg-white/60 dark:bg-gray-800/60 backdrop-blur-sm p-4 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-md">
                    <div className="flex items-center gap-2">
                      <Loader2 className="h-4 w-4 animate-spin text-purple-500" />
                      <span className="text-xs font-typewriter text-gray-600 dark:text-gray-400">
                        Thinking...
                      </span>
                    </div>
                  </div>
                </motion.div>
              )}
            </div>

            {/* Input Area - Glass Effect */}
            <div className="p-4 bg-gradient-to-t from-gray-100/50 to-transparent dark:from-gray-800/50 backdrop-blur-sm border-t border-gray-200 dark:border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyPress={(e) => e.key === 'Enter' && handleSend()}
                  placeholder="Ask me anything..."
                  disabled={isLoading}
                  className="flex-1 px-4 py-3 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border-2 border-gray-200 dark:border-gray-700 rounded-xl font-typewriter text-sm text-gray-900 dark:text-gray-100 placeholder:text-gray-400 dark:placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                />
                <motion.button
                  onClick={handleSend}
                  disabled={isLoading || !input.trim()}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-4 py-3 bg-gradient-to-r from-purple-500 to-blue-500 text-white rounded-xl disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transition-all"
                >
                  <Send className="h-5 w-5" />
                </motion.button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
