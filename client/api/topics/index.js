import { mockTopics } from '../../../api/topics-data.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    // Send lightweight metadata list for the dashboard
    const metaOnly = mockTopics.map((t) => ({ _id: t._id, meta: t.meta }));
    return res.status(200).json(metaOnly);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
