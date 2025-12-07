// Inline mock topics data for Vercel deployment
const mockTopics = [
  {
    _id: '0',
    meta: {
      title: 'Introduction to DSA',
      slug: 'dsa-introduction',
      category: 'DSA',
      tags: ['introduction', 'overview', 'fundamentals'],
      estimatedTime: 20,
    }
  },
  {
    _id: '1',
    meta: {
      title: 'Arrays',
      slug: 'arrays',
      category: 'DSA',
      tags: ['data-structures', 'arrays', 'fundamentals'],
      estimatedTime: 35,
    }
  },
  {
    _id: '2',
    meta: {
      title: 'Linked Lists',
      slug: 'linked-lists',
      category: 'DSA',
      tags: ['data-structures', 'linked-lists', 'pointers'],
      estimatedTime: 40,
    }
  },
  {
    _id: '3',
    meta: {
      title: 'Stacks',
      slug: 'stacks',
      category: 'DSA',
      tags: ['data-structures', 'stacks', 'LIFO'],
      estimatedTime: 30,
    }
  },
  {
    _id: '4',
    meta: {
      title: 'Queues',
      slug: 'queues',
      category: 'DSA',
      tags: ['data-structures', 'queues', 'FIFO'],
      estimatedTime: 30,
    }
  },
  {
    _id: '5',
    meta: {
      title: 'Binary Trees',
      slug: 'binary-trees',
      category: 'DSA',
      tags: ['data-structures', 'trees', 'hierarchical'],
      estimatedTime: 45,
    }
  },
  {
    _id: '6',
    meta: {
      title: 'Hash Tables',
      slug: 'hash-tables',
      category: 'DSA',
      tags: ['data-structures', 'hashing', 'dictionaries'],
      estimatedTime: 35,
    }
  },
  {
    _id: '7',
    meta: {
      title: 'Graphs',
      slug: 'graphs',
      category: 'DSA',
      tags: ['data-structures', 'graphs', 'networks'],
      estimatedTime: 50,
    }
  },
  {
    _id: '8',
    meta: {
      title: 'Sorting Algorithms',
      slug: 'sorting-algorithms',
      category: 'DSA',
      tags: ['algorithms', 'sorting', 'comparison'],
      estimatedTime: 45,
    }
  },
  {
    _id: '9',
    meta: {
      title: 'Searching Algorithms',
      slug: 'searching-algorithms',
      category: 'DSA',
      tags: ['algorithms', 'searching', 'binary-search'],
      estimatedTime: 35,
    }
  }
];

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    // Return only meta data for list view
    const topics = mockTopics.map(t => ({ _id: t._id, meta: t.meta }));
    return res.status(200).json(topics);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
