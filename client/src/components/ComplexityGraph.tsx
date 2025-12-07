import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Zap, AlertTriangle } from 'lucide-react';

interface ComplexityGraphProps {
  executionTime?: number;
  inputSize?: number;
}

const complexityInfo = [
  {
    name: 'O(1)',
    color: '#10b981',
    emoji: '⚡',
    label: 'Constant',
    description: 'Best! Same time regardless of input size.',
    examples: 'Array access, hash table lookup',
  },
  {
    name: 'O(log n)',
    color: '#3b82f6',
    emoji: '🚀',
    label: 'Logarithmic',
    description: 'Excellent! Doubles input, adds one step.',
    examples: 'Binary search, balanced tree operations',
  },
  {
    name: 'O(n)',
    color: '#f59e0b',
    emoji: '📈',
    label: 'Linear',
    description: 'Good! Time grows with input size.',
    examples: 'Array traversal, linear search',
  },
  {
    name: 'O(n log n)',
    color: '#8b5cf6',
    emoji: '⚙️',
    label: 'Linearithmic',
    description: 'Decent! Efficient sorting algorithms.',
    examples: 'Merge sort, quick sort (average)',
  },
  {
    name: 'O(n²)',
    color: '#ef4444',
    emoji: '🐌',
    label: 'Quadratic',
    description: 'Slow! Nested loops over input.',
    examples: 'Bubble sort, selection sort',
  },
  {
    name: 'O(2ⁿ)',
    color: '#dc2626',
    emoji: '💥',
    label: 'Exponential',
    description: 'Avoid! Doubles with each new element.',
    examples: 'Recursive fibonacci, subset generation',
  },
];

export const ComplexityGraph = ({ executionTime, inputSize = 100 }: ComplexityGraphProps) => {
  // Generate data points for common complexity curves
  const generateData = () => {
    const data = [];
    for (let n = 1; n <= 100; n += 5) {
      data.push({
        n,
        'O(1)': 1,
        'O(log n)': Math.log2(n),
        'O(n)': n / 10,
        'O(n log n)': (n * Math.log2(n)) / 50,
        'O(n²)': (n * n) / 500,
      });
    }
    return data;
  };

  const data = generateData();

  // Calculate approximate complexity based on execution time
  const estimateComplexity = () => {
    if (!executionTime || !inputSize) return null;
    
    const ratio = executionTime / inputSize;
    if (ratio < 0.01) return 'O(1) or O(log n)';
    if (ratio < 1) return 'O(n)';
    if (ratio < inputSize) return 'O(n log n)';
    return 'O(n²) or worse';
  };

  return (
    <div className="space-y-6">
      {/* Animated Graph */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="bg-white dark:bg-gray-800 rounded-xl p-6 border-2 border-gray-200 dark:border-gray-700 shadow-lg"
      >
        <div className="flex items-center gap-3 mb-6">
          <TrendingUp className="w-6 h-6 text-blue-500" />
          <h3 className="text-2xl font-handwritten font-bold text-gray-900 dark:text-gray-100">
            Growth Comparison
          </h3>
        </div>
        
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={data}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
            <XAxis 
              dataKey="n" 
              label={{ value: 'Input Size (n)', position: 'insideBottom', offset: -5 }}
              stroke="#6b7280"
              className="dark:stroke-gray-400"
            />
            <YAxis 
              label={{ value: 'Time / Operations', angle: -90, position: 'insideLeft' }}
              stroke="#6b7280"
              className="dark:stroke-gray-400"
            />
            <Tooltip 
              contentStyle={{ 
                backgroundColor: '#1f2937', 
                border: '2px solid #374151',
                borderRadius: '8px',
                color: '#f3f4f6'
              }}
            />
            <Legend />
            <Line type="monotone" dataKey="O(1)" stroke="#10b981" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="O(log n)" stroke="#3b82f6" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="O(n)" stroke="#f59e0b" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="O(n log n)" stroke="#8b5cf6" strokeWidth={3} dot={false} />
            <Line type="monotone" dataKey="O(n²)" stroke="#ef4444" strokeWidth={3} dot={false} />
          </LineChart>
        </ResponsiveContainer>

        {executionTime && (
          <motion.div
            initial={{ scale: 0, rotate: -5 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ delay: 0.3, type: 'spring' }}
            className="mt-6 p-4 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg border-2 border-blue-200 dark:border-blue-800"
          >
            <div className="flex items-center gap-3">
              <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <div>
                <p className="text-sm font-typewriter text-gray-700 dark:text-gray-300">
                  <span className="font-bold">Your Solution:</span> {executionTime.toFixed(2)}ms
                </p>
                <p className="text-sm font-typewriter text-blue-600 dark:text-blue-400 font-bold">
                  Estimated: {estimateComplexity()}
                </p>
              </div>
            </div>
          </motion.div>
        )}
      </motion.div>

      {/* Complexity Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {complexityInfo.map((complexity, idx) => (
          <motion.div
            key={complexity.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1 }}
            whileHover={{ scale: 1.05, rotate: idx % 2 === 0 ? 2 : -2 }}
            className="bg-white dark:bg-gray-800 rounded-lg p-4 border-2 border-gray-200 dark:border-gray-700 shadow-md hover:shadow-xl transition-all"
            style={{ borderLeftColor: complexity.color, borderLeftWidth: '4px' }}
          >
            <div className="flex items-center gap-2 mb-2">
              <span className="text-2xl">{complexity.emoji}</span>
              <div>
                <h4 className="font-handwritten font-bold text-lg text-gray-900 dark:text-gray-100">
                  {complexity.name}
                </h4>
                <p className="text-xs font-typewriter text-gray-600 dark:text-gray-400">
                  {complexity.label}
                </p>
              </div>
            </div>
            <p className="text-sm font-typewriter text-gray-700 dark:text-gray-300 mb-2">
              {complexity.description}
            </p>
            <div className="bg-gray-100 dark:bg-gray-700 rounded p-2">
              <p className="text-xs font-typewriter text-gray-600 dark:text-gray-400">
                <strong>Examples:</strong> {complexity.examples}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Quick Reference Table */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.8 }}
        className="bg-gradient-to-br from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20 rounded-xl p-6 border-2 border-yellow-200 dark:border-yellow-800"
      >
        <div className="flex items-center gap-3 mb-4">
          <Zap className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
          <h3 className="text-xl font-handwritten font-bold text-gray-900 dark:text-gray-100">
            Quick Reference: Input Size Impact
          </h3>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-sm font-typewriter">
            <thead>
              <tr className="border-b-2 border-yellow-300 dark:border-yellow-700">
                <th className="text-left p-2 text-gray-900 dark:text-gray-100">Complexity</th>
                <th className="text-center p-2 text-gray-900 dark:text-gray-100">n=10</th>
                <th className="text-center p-2 text-gray-900 dark:text-gray-100">n=100</th>
                <th className="text-center p-2 text-gray-900 dark:text-gray-100">n=1000</th>
              </tr>
            </thead>
            <tbody className="text-gray-700 dark:text-gray-300">
              <tr className="border-b border-yellow-200 dark:border-yellow-800">
                <td className="p-2 font-bold">O(1)</td>
                <td className="text-center p-2">1</td>
                <td className="text-center p-2">1</td>
                <td className="text-center p-2">1</td>
              </tr>
              <tr className="border-b border-yellow-200 dark:border-yellow-800">
                <td className="p-2 font-bold">O(log n)</td>
                <td className="text-center p-2">3</td>
                <td className="text-center p-2">7</td>
                <td className="text-center p-2">10</td>
              </tr>
              <tr className="border-b border-yellow-200 dark:border-yellow-800">
                <td className="p-2 font-bold">O(n)</td>
                <td className="text-center p-2">10</td>
                <td className="text-center p-2">100</td>
                <td className="text-center p-2">1,000</td>
              </tr>
              <tr className="border-b border-yellow-200 dark:border-yellow-800">
                <td className="p-2 font-bold">O(n log n)</td>
                <td className="text-center p-2">30</td>
                <td className="text-center p-2">700</td>
                <td className="text-center p-2">10,000</td>
              </tr>
              <tr className="border-b border-yellow-200 dark:border-yellow-800">
                <td className="p-2 font-bold">O(n²)</td>
                <td className="text-center p-2">100</td>
                <td className="text-center p-2">10,000</td>
                <td className="text-center p-2">1,000,000</td>
              </tr>
              <tr>
                <td className="p-2 font-bold text-red-600 dark:text-red-400">O(2ⁿ)</td>
                <td className="text-center p-2 text-red-600 dark:text-red-400">1,024</td>
                <td className="text-center p-2 text-red-600 dark:text-red-400">∞</td>
                <td className="text-center p-2 text-red-600 dark:text-red-400">∞</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="mt-4 flex items-start gap-2 bg-white/50 dark:bg-gray-800/50 rounded p-3">
          <AlertTriangle className="w-5 h-5 text-orange-600 dark:text-orange-400 flex-shrink-0 mt-0.5" />
          <p className="text-xs font-typewriter text-gray-700 dark:text-gray-300">
            <strong>Pro Tip:</strong> Always aim for O(n log n) or better! Anything worse than O(n²) 
            becomes impractical for large datasets.
          </p>
        </div>
      </motion.div>
    </div>
  );
};
