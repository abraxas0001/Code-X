import { mockTopics } from '../../../api/topics-data.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const slug = req.query.slug;
    const topic = mockTopics.find((t) => t.meta.slug === slug);
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    return res.status(200).json(topic);
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
