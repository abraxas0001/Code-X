import { mockTopics } from './topics-data.js';

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
