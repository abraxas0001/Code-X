import { useState } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Loader2, Image as ImageIcon } from 'lucide-react';
import { generateImage } from '@/lib/gemini';

interface AnalogyVisualizerProps {
    analogy: string;
    topicTitle: string;
}

export const AnalogyVisualizer = ({ analogy, topicTitle }: AnalogyVisualizerProps) => {
    const [description, setDescription] = useState<string | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const handleVisualize = async () => {
        setIsLoading(true);
        const result = await generateImage(`${topicTitle}: ${analogy}`);
        setDescription(result);
        setIsLoading(false);
    };

    return (
        <div className="mt-4 pt-4 border-t-2 border-dashed border-yellow-400 dark:border-amber-700/50">
            {!description && !isLoading && (
                <motion.button
                    onClick={handleVisualize}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full py-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-lg font-bold font-handwritten flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all"
                >
                    <Sparkles className="h-4 w-4" />
                    <span>Visualize with Nano Banana 🍌</span>
                </motion.button>
            )}

            {isLoading && (
                <div className="flex items-center justify-center py-4 text-purple-600 dark:text-purple-400 gap-2">
                    <Loader2 className="h-5 w-5 animate-spin" />
                    <span className="font-typewriter text-sm">Painting your idea...</span>
                </div>
            )}

            {description && (
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="bg-purple-50 dark:bg-purple-900/20 p-4 rounded-xl border-2 border-purple-200 dark:border-purple-800 relative overflow-hidden"
                >
                    <div className="absolute top-0 right-0 p-1 bg-purple-500 text-white text-[10px] font-bold rounded-bl-lg">
                        NANO BANANA
                    </div>
                    <div className="flex gap-3">
                        <div className="bg-purple-100 dark:bg-purple-900/50 p-2 rounded-lg h-fit">
                            <ImageIcon className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                        </div>
                        <div>
                            <p className="font-typewriter text-sm text-gray-800 dark:text-gray-200 leading-relaxed italic">
                                "{description}"
                            </p>
                            <p className="text-[10px] text-gray-500 mt-2 uppercase tracking-wider font-bold">
                                AI Visual Description
                            </p>
                        </div>
                    </div>
                </motion.div>
            )}
        </div>
    );
};
