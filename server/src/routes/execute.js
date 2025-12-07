import express from 'express';
import axios from 'axios';

const router = express.Router();

// Language ID mapping for Judge0
const languageIds = {
  python: 71,
  javascript: 63,
  cpp: 54,
  java: 62,
};

// Execute code using Judge0 API
router.post('/', async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code || !language) {
      return res.status(400).json({ error: 'Code and language are required' });
    }

    const languageId = languageIds[language];
    if (!languageId) {
      return res.status(400).json({ error: 'Unsupported language' });
    }

    // Using Judge0 CE (free tier)
    const response = await axios.post(
      'https://judge0-ce.p.rapidapi.com/submissions',
      {
        source_code: code,
        language_id: languageId,
        stdin: '',
      },
      {
        headers: {
          'Content-Type': 'application/json',
          'X-RapidAPI-Key': process.env.JUDGE0_API_KEY || 'demo-key',
          'X-RapidAPI-Host': 'judge0-ce.p.rapidapi.com',
        },
        params: {
          base64_encoded: 'false',
          wait: 'true',
        },
      }
    );

    const result = response.data;

    if (result.status.id === 3) {
      // Success
      res.json({
        success: true,
        output: result.stdout || 'No output',
        executionTime: result.time,
        memory: result.memory,
      });
    } else {
      // Error
      res.json({
        success: false,
        error: result.stderr || result.compile_output || 'Execution failed',
      });
    }
  } catch (error) {
    console.error('Execution error:', error);
    res.status(500).json({
      success: false,
      error: 'Failed to execute code. Please try again.',
    });
  }
});

export default router;
