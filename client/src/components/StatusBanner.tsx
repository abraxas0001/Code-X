import { AlertCircle, CheckCircle, Info } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

export const StatusBanner = () => {
  const [isVisible, setIsVisible] = useState(true);
  
  const hasGeminiKey = !!import.meta.env.VITE_GEMINI_API_KEY;
  
  if (!isVisible) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        className="bg-blue-500/10 border-b border-blue-500/30 px-6 py-3"
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Info className="h-5 w-5 text-blue-400" />
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <CheckCircle className="h-4 w-4 text-green-400" />
                <span>Mock Data Mode</span>
              </div>
              <div className="flex items-center gap-2">
                {hasGeminiKey ? (
                  <>
                    <CheckCircle className="h-4 w-4 text-green-400" />
                    <span>AI Tutor Active</span>
                  </>
                ) : (
                  <>
                    <AlertCircle className="h-4 w-4 text-yellow-400" />
                    <span>AI Tutor (Add Gemini Key)</span>
                  </>
                )}
              </div>
            </div>
          </div>
          <button
            onClick={() => setIsVisible(false)}
            className="text-xs text-gray-400 hover:text-gray-300"
          >
            Dismiss
          </button>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
