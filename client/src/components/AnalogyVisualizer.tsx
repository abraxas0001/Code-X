import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X } from 'lucide-react';
import { useState } from 'react';

interface AnalogyVisualizerProps {
    analogy: string;
    topicTitle: string;
    imagePath?: string;
}

export const AnalogyVisualizer = ({ analogy, topicTitle, imagePath }: AnalogyVisualizerProps) => {
    const [isOpen, setIsOpen] = useState(false);

    if (!imagePath) return null;

    return (
        <>
            <div className="mt-4 pt-4 border-t-2 border-dashed border-yellow-400 dark:border-amber-700/50">
                <motion.button
                    onClick={() => setIsOpen(true)}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold font-handwritten flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                    <Sparkles className="h-4 w-4" />
                    <span>Visualize with Image & Animation 🎨</span>
                </motion.button>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
                        onClick={() => setIsOpen(false)}
                    >
                        <motion.div
                            initial={{ scale: 0.9, opacity: 0 }}
                            animate={{ scale: 1, opacity: 1 }}
                            exit={{ scale: 0.9, opacity: 0 }}
                            onClick={(e) => e.stopPropagation()}
                            className="bg-white dark:bg-gray-900 rounded-xl shadow-2xl max-w-2xl w-full overflow-hidden border-4 border-purple-500"
                        >
                            <div className="p-4 border-b dark:border-gray-800 flex justify-between items-center bg-purple-50 dark:bg-purple-900/20">
                                <h3 className="font-handwritten text-xl font-bold text-purple-700 dark:text-purple-300">
                                    {topicTitle} - Visual Analogy
                                </h3>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors"
                                >
                                    <X className="h-6 w-6" />
                                </button>
                            </div>

                            <div className="p-6">
                                <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 mb-4 bg-gray-100 dark:bg-gray-800">
                                    <img
                                        src={imagePath}
                                        alt={analogy}
                                        className="w-full h-full object-cover"
                                    />
                                </div>

                                <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                                    <p className="font-typewriter text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                                        "{analogy}"
                                    </p>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
};
