import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, ReferenceDot } from 'recharts';
import { motion } from 'framer-motion';
import { Clock, TrendingUp, Zap, AlertTriangle, CheckCircle2 } from 'lucide-react';

interface ComplexityGraphProps {
  executionTime?: number;
  inputSize?: number;
  topicSlug?: string;
}

// Data structure for topic-specific complexities
const TOPIC_COMPLEXITY_DATA: Record<string, Array<{ operation: string; complexity: string; note: string; code: string }>> = {
  'arrays': [
    { operation: 'Access (Index)', complexity: 'O(1)', note: 'Instant lookup via memory address.', code: 'arr[i]' },
    { operation: 'Search (Unsorted)', complexity: 'O(n)', note: 'Must check every element.', code: 'for(x of arr) if(x==t)' },
    { operation: 'Search (Sorted)', complexity: 'O(log n)', note: 'Binary search possible.', code: 'binarySearch(arr, t)' },
    { operation: 'Insertion (End)', complexity: 'O(1)', note: 'Just add to end (if space).', code: 'arr.push(x)' },
    { operation: 'Insertion (Middle)', complexity: 'O(n)', note: 'Must shift subsequent elements.', code: 'arr.splice(i, 0, x)' },
    { operation: 'Deletion', complexity: 'O(n)', note: 'Must shift to fill gap.', code: 'arr.splice(i, 1)' },
  ],
  'linked-lists': [
    { operation: 'Access', complexity: 'O(n)', note: 'Must traverse from head.', code: 'while(node && i--) node=node.next' },
    { operation: 'Search', complexity: 'O(n)', note: 'Linear traversal needed.', code: 'while(node) if(node.val==t) ...' },
    { operation: 'Insertion (Head)', complexity: 'O(1)', note: 'Update head pointer.', code: 'new.next = head; head = new' },
    { operation: 'Insertion (Tail)', complexity: 'O(1)', note: 'With tail pointer.', code: 'tail.next = new; tail = new' },
    { operation: 'Deletion (Head)', complexity: 'O(1)', note: 'Update head pointer.', code: 'head = head.next' },
  ],
  'stacks': [
    { operation: 'Push', complexity: 'O(1)', note: 'Add to top.', code: 'stack.push(x)' },
    { operation: 'Pop', complexity: 'O(1)', note: 'Remove from top.', code: 'stack.pop()' },
    { operation: 'Peek', complexity: 'O(1)', note: 'View top.', code: 'return stack[top]' },
    { operation: 'Search', complexity: 'O(n)', note: 'Linear scan.', code: 'for(item of stack) ...' },
  ],
  'queues': [
    { operation: 'Enqueue', complexity: 'O(1)', note: 'Add to rear.', code: 'queue.push(x)' },
    { operation: 'Dequeue', complexity: 'O(1)', note: 'Remove from front.', code: 'queue.shift()' },
    { operation: 'Peek', complexity: 'O(1)', note: 'View front.', code: 'return queue[0]' },
    { operation: 'Search', complexity: 'O(n)', note: 'Linear scan.', code: 'for(item of queue) ...' },
  ],
  'hash-tables': [
    { operation: 'Insert', complexity: 'O(1)', note: 'Average case (hashing).', code: 'map.set(key, val)' },
    { operation: 'Delete', complexity: 'O(1)', note: 'Average case.', code: 'map.delete(key)' },
    { operation: 'Search', complexity: 'O(1)', note: 'Average case.', code: 'map.get(key)' },
    { operation: 'Worst Case', complexity: 'O(n)', note: 'Many collisions.', code: 'createdAtSameHash' },
  ],
  'binary-search-trees': [
    { operation: 'Search', complexity: 'O(log n)', note: 'Balanced tree.', code: 'if(t < root.val) search(left)...' },
    { operation: 'Insert', complexity: 'O(log n)', note: 'Balanced tree.', code: 'if(v < root.val) insert(left)...' },
    { operation: 'Delete', complexity: 'O(log n)', note: 'Balanced tree.', code: 'findMin(right) ...' },
    { operation: 'Worst Case', complexity: 'O(n)', note: 'Unbalanced (skewed).', code: '1->2->3->4' },
  ],
  'quick-sort': [
    { operation: 'Best Case', complexity: 'O(n log n)', note: 'Balanced partitions.', code: 'pivot = median' },
    { operation: 'Average Case', complexity: 'O(n log n)', note: 'Random data.', code: 'pivot = random' },
    { operation: 'Worst Case', complexity: 'O(n²)', note: 'Already sorted/reverse.', code: 'pivot = min/max element' },
  ],
  'merge-sort': [
    { operation: 'Best Case', complexity: 'O(n log n)', note: 'Consistent splitting.', code: 'merge(left, right)' },
    { operation: 'Average Case', complexity: 'O(n log n)', note: 'Consistent splitting.', code: 'merge(left, right)' },
    { operation: 'Worst Case', complexity: 'O(n log n)', note: 'Consistent splitting.', code: 'merge(left, right)' },
  ],
  'bubble-sort': [
    { operation: 'Best Case', complexity: 'O(n)', note: 'Already sorted (optimized).', code: 'no swaps occurred' },
    { operation: 'Average Case', complexity: 'O(n²)', note: 'Nested loops.', code: 'for(i..n) for(j..n-i)' },
    { operation: 'Worst Case', complexity: 'O(n²)', note: 'Reverse sorted.', code: 'max swaps needed' },
  ],
};

const complexityInfo = [
  { name: 'O(1)', color: '#10b981', emoji: '⚡', label: 'Constant', value: 1 },
  { name: 'O(log n)', color: '#3b82f6', emoji: '🚀', label: 'Logarithmic', value: 2 },
  { name: 'O(n)', color: '#f59e0b', emoji: '📈', label: 'Linear', value: 3 },
  { name: 'O(n log n)', color: '#8b5cf6', emoji: '⚙️', label: 'Linearithmic', value: 4 },
  { name: 'O(n²)', color: '#ef4444', emoji: '🐌', label: 'Quadratic', value: 5 },
  { name: 'O(2ⁿ)', color: '#dc2626', emoji: '💥', label: 'Exponential', value: 6 },
];

export const ComplexityGraph = ({ executionTime, inputSize = 100, topicSlug }: ComplexityGraphProps) => {

  // Specific data for the current topic, if available
  const currentTopicData = topicSlug ? TOPIC_COMPLEXITY_DATA[topicSlug] : null;

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

  // Helper: check if a complexity curve should be highlighted
  const isRelevant = (compName: string) => {
    if (!currentTopicData) return true; // Show all if no specific topic
    return currentTopicData.some(d => d.complexity === compName || d.complexity.replace('^2', '²') === compName);
  };

  return (
    <div className="space-y-8">
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
            {currentTopicData ? 'Topic Performance' : 'Growth Comparison'}
          </h3>
        </div>

        <ResponsiveContainer width="100%" height={350}>
          <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 50 }}>
            <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" className="dark:stroke-gray-700" />
            <XAxis
              dataKey="n"
              label={{ value: 'Input Size (n)', position: 'insideBottom', offset: -35 }}
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

            {/* Render lines, dimming irrelevant ones */}
            {complexityInfo.map((info) => (
              <Line
                key={info.name}
                type="monotone"
                dataKey={info.name}
                stroke={info.color}
                strokeWidth={isRelevant(info.name) ? 4 : 1}
                strokeOpacity={isRelevant(info.name) ? 1 : 0.2}
                dot={false}
                activeDot={{ r: 6 }}
              />
            ))}

          </LineChart>
        </ResponsiveContainer>
      </motion.div>

      {/* Topic Specific Performance Table */}
      {currentTopicData ? (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 rounded-xl p-6 border-2 border-blue-200 dark:border-blue-800"
        >
          <div className="flex items-center gap-3 mb-4">
            <Zap className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            <h3 className="text-xl font-handwritten font-bold text-gray-900 dark:text-gray-100">
              Operations & Performance
            </h3>
          </div>

          <div className="overflow-hidden bg-white dark:bg-gray-800 rounded-lg border-2 border-blue-100 dark:border-blue-900 shadow-sm">
            <table className="w-full text-left">
              <thead className="bg-blue-100 dark:bg-blue-900/40 border-b-2 border-blue-200 dark:border-blue-800">
                <tr>
                  <th className="p-4 font-bold text-gray-900 dark:text-white font-handwritten text-lg">Operation</th>
                  <th className="p-4 font-bold text-gray-900 dark:text-white font-handwritten text-lg">Syntax / Code</th>
                  <th className="p-4 font-bold text-gray-900 dark:text-white font-handwritten text-lg">Complexity</th>
                  <th className="p-4 font-bold text-gray-900 dark:text-white font-handwritten text-lg">Why?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
                {currentTopicData.map((item, idx) => (
                  <tr key={idx} className="hover:bg-blue-50 dark:hover:bg-blue-900/10 transition-colors">
                    <td className="p-4 font-medium text-gray-800 dark:text-gray-200 font-typewriter">
                      {item.operation}
                    </td>
                    <td className="p-4">
                      <code className="px-2 py-1 rounded bg-gray-100 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 font-mono text-sm text-pink-600 dark:text-pink-400">
                        {item.code}
                      </code>
                    </td>
                    <td className="p-4">
                      <span className={`
                        inline-block px-3 py-1 rounded-full text-xs font-bold font-mono border-2
                        ${item.complexity.includes('1') ? 'bg-green-100 text-green-700 border-green-200' :
                          item.complexity.includes('log') ? 'bg-blue-100 text-blue-700 border-blue-200' :
                            item.complexity.includes('n²') ? 'bg-red-100 text-red-700 border-red-200' :
                              'bg-yellow-100 text-yellow-700 border-yellow-200'}
                      `}>
                        {item.complexity}
                      </span>
                    </td>
                    <td className="p-4 text-sm text-gray-600 dark:text-gray-400 italic">
                      {item.note}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </motion.div>
      ) : (
        /* Fallback: Standard Big O Explainer Cards */
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
            </motion.div>
          ))}
        </div>
      )}

      {/* Quick Reference - Always Useful */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
        className="flex items-start gap-3 bg-yellow-50 dark:bg-yellow-900/10 p-4 rounded-lg border-l-4 border-yellow-400"
      >
        <AlertTriangle className="w-5 h-5 text-yellow-600 dark:text-yellow-400 flex-shrink-0 mt-0.5" />
        <p className="text-sm text-gray-700 dark:text-gray-300">
          <strong>Remember:</strong> Time complexity describes how execution time grows as input size increases, not exact seconds. O(1) is always best!
        </p>
      </motion.div>
    </div>
  );
};
