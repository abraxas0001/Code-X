import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

interface Visualization {
    title: string;
    imageUrl: string;
    description: string;
}

interface AnalogyVisualizerProps {
    analogy: string;
    topicTitle: string;
    imagePath?: string;
    visualizations?: Visualization[];
}

export const AnalogyVisualizer = ({ analogy, topicTitle, imagePath, visualizations = [] }: AnalogyVisualizerProps) => {
    const [isOpen, setIsOpen] = useState(false);
    const [mounted, setMounted] = useState(false);
    const [currentIndex, setCurrentIndex] = useState(0);

    // Prepare data to display (either from visualizations arrow or single fallback)
    const hasMultiple = visualizations.length > 0;
    const currentData = hasMultiple ? visualizations[currentIndex] : {
        title: `${topicTitle} - Visual Analogy`,
        imageUrl: imagePath || '',
        description: analogy
    };

    const handleNext = () => {
        if (!hasMultiple) return;
        setCurrentIndex((prev) => (prev + 1) % visualizations.length);
    };

    const handlePrev = () => {
        if (!hasMultiple) return;
        setCurrentIndex((prev) => (prev - 1 + visualizations.length) % visualizations.length);
    };

    useEffect(() => {
        setMounted(true);
        return () => setMounted(false);
    }, []);

    // If no main image and no visualizations, don't render anything
    if (!imagePath && visualizations.length === 0) return null;

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

            {mounted && createPortal(
                <AnimatePresence>
                    {isOpen && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
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
                                        {currentData.title}
                                    </h3>
                                    <button
                                        onClick={() => setIsOpen(false)}
                                        className="p-1 hover:bg-black/10 dark:hover:bg-white/10 rounded-full transition-colors"
                                    >
                                        <X className="h-6 w-6" />
                                    </button>
                                </div>

                                <div className="p-6">
                                    <div className="relative aspect-video rounded-lg overflow-hidden border-2 border-gray-200 dark:border-gray-700 mb-4 bg-gray-900 group">
                                        {/* Blurred Background Layer */}
                                        <div
                                            className="absolute inset-0 opacity-50 blur-xl scale-110"
                                            style={{
                                                backgroundImage: `url(${currentData.imageUrl})`,
                                                backgroundSize: 'cover',
                                                backgroundPosition: 'center'
                                            }}
                                        />

                                        {/* Main Image */}
                                        <motion.img
                                            key={currentIndex}
                                            initial={{ opacity: 0, x: 20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ duration: 0.3 }}
                                            src={currentData.imageUrl}
                                            alt={currentData.description}
                                            className="relative w-full h-full object-contain z-10"
                                        />

                                        {/* Navigation Arrows (Only if multiple) */}
                                        {hasMultiple && (
                                            <>
                                                <button
                                                    onClick={handlePrev}
                                                    className="absolute left-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all"
                                                >
                                                    <ChevronLeft className="w-6 h-6" />
                                                </button>
                                                <button
                                                    onClick={handleNext}
                                                    className="absolute right-2 top-1/2 -translate-y-1/2 z-20 p-2 bg-black/50 hover:bg-black/70 rounded-full text-white opacity-0 group-hover:opacity-100 transition-all"
                                                >
                                                    <ChevronRight className="w-6 h-6" />
                                                </button>
                                            </>
                                        )}
                                    </div>

                                    {/* Pagination Dots */}
                                    {hasMultiple && (
                                        <div className="flex justify-center gap-2 mb-4">
                                            {visualizations.map((_, idx) => (
                                                <button
                                                    key={idx}
                                                    onClick={() => setCurrentIndex(idx)}
                                                    className={`w-2.5 h-2.5 rounded-full transition-all ${idx === currentIndex
                                                            ? 'bg-purple-500 w-4'
                                                            : 'bg-gray-300 dark:bg-gray-600 hover:bg-purple-300'
                                                        }`}
                                                />
                                            ))}
                                        </div>
                                    )}

                                    <div className="bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-lg border border-yellow-200 dark:border-yellow-700">
                                        <p className="font-typewriter text-lg text-gray-800 dark:text-gray-200 leading-relaxed">
                                            "{currentData.description}"
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>,
                document.body
            )}
        </>
    );
};
