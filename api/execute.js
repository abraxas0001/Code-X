export default function handler(req, res) {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

  if (req.method === 'OPTIONS') {
    return res.status(200).end();
  }

  if (req.method === 'POST') {
    // Mock code execution
    return res.status(200).json({
      success: true,
      output: 'Code execution is not available in demo mode',
    });
  }

  return res.status(405).json({ error: 'Method not allowed' });
}
