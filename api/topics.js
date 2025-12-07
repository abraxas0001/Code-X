// Inline topics data for Vercel serverless
const mockTopics = [
  { _id: '0', meta: { title: 'Introduction to DSA', slug: 'dsa-introduction', category: 'DSA', tags: ['introduction', 'overview', 'fundamentals'], estimatedTime: 20 } },
  { _id: '1', meta: { title: 'Arrays', slug: 'arrays', category: 'DSA', tags: ['data-structures', 'arrays', 'fundamentals'], estimatedTime: 35 } },
  { _id: '2', meta: { title: 'Binary Search', slug: 'binary-search', category: 'DSA', tags: ['algorithms', 'searching', 'divide-conquer'], estimatedTime: 30 } },
  { _id: '3', meta: { title: 'Linked Lists', slug: 'linked-lists', category: 'DSA', tags: ['data-structures', 'pointers', 'dynamic'], estimatedTime: 40 } },
  { _id: '4', meta: { title: 'Dynamic Programming', slug: 'dynamic-programming', category: 'DSA', tags: ['algorithms', 'optimization', 'memoization'], estimatedTime: 50 } },
  { _id: '5', meta: { title: 'Hash Tables', slug: 'hash-tables', category: 'DSA', tags: ['data-structures', 'hashing', 'dictionaries'], estimatedTime: 35 } },
  { _id: '6', meta: { title: 'Neural Networks', slug: 'neural-networks', category: 'AI', tags: ['machine-learning', 'deep-learning', 'AI'], estimatedTime: 45 } },
  { _id: '7', meta: { title: 'Stacks', slug: 'stacks', category: 'DSA', tags: ['data-structures', 'LIFO', 'linear'], estimatedTime: 30 } },
  { _id: '8', meta: { title: 'Queues', slug: 'queues', category: 'DSA', tags: ['data-structures', 'FIFO', 'linear'], estimatedTime: 30 } },
  { _id: '9', meta: { title: 'Binary Trees', slug: 'binary-trees', category: 'DSA', tags: ['data-structures', 'trees', 'hierarchical'], estimatedTime: 45 } },
  { _id: '10', meta: { title: 'Graphs', slug: 'graphs', category: 'DSA', tags: ['data-structures', 'networks', 'traversal'], estimatedTime: 50 } },
  { _id: '11', meta: { title: 'Recursion', slug: 'recursion', category: 'DSA', tags: ['algorithms', 'functions', 'base-case'], estimatedTime: 35 } },
  { _id: '12', meta: { title: 'Merge Sort', slug: 'merge-sort', category: 'DSA', tags: ['algorithms', 'sorting', 'divide-conquer'], estimatedTime: 40 } },
  { _id: '13', meta: { title: 'Quick Sort', slug: 'quick-sort', category: 'DSA', tags: ['algorithms', 'sorting', 'partition'], estimatedTime: 40 } },
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    return res.status(200).json(mockTopics);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
