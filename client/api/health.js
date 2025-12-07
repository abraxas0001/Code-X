export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  if (req.method === 'GET') {
    return res.status(200).json({ status: 'OK', message: 'Client API up' });
  }
  return res.status(405).json({ error: 'Method not allowed' });
}
