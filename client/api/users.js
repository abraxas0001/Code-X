import { mockUsers } from '../../server/src/mockData.js';

export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'GET, PATCH, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'GET') {
    const userId = req.query.userId || '1';
    const user = mockUsers.find((u) => u._id === userId) || mockUsers[0];
    return res.status(200).json(user);
  }

  if (req.method === 'PATCH') {
    return res.status(200).json({ success: true });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
