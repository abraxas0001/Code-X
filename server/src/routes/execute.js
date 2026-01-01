import express from 'express';
import axios from 'axios';

const router = express.Router();

// Language mapping for Piston API
const runtimeMap = {
  python: { language: 'python', version: '3.10.0' },
  javascript: { language: 'javascript', version: '18.15.0' },
  cpp: { language: 'c++', version: '10.2.0' },
  java: { language: 'java', version: '15.0.2' },
};

// Execute code using Piston API (v2)
router.post('/', async (req, res) => {
  try {
    const { code, language } = req.body;

    if (!code || !language) {
      return res.status(400).json({ error: 'Code and language are required' });
    }

    const runtime = runtimeMap[language];
    if (!runtime) {
      return res.status(400).json({ error: `Unsupported language: ${language}` });
    }

    // Call Piston API
    console.log(`🚀 Executing ${language} code via Piston...`);
    const response = await axios.post('https://emkc.org/api/v2/piston/execute', {
      language: runtime.language,
      version: runtime.version,
      files: [
        {
          content: code,
        },
      ],
    });

    const { run } = response.data;

    // Piston returns { run: { stdout, stderr, code, signal, ... } }
    if (run.code === 0 && !run.stderr) {
      // Success
      res.json({
        success: true,
        output: run.stdout,
        executionTime: 'N/A', // Piston v2 doesn't always return time in top-level
        memory: 'N/A',
      });
    } else {
      // Runtime Error or Compilation Error
      res.json({
        success: false,
        error: run.stderr || run.stdout || 'Execution failed',
      });
    }
  } catch (error) {
    console.error('Execution error:', error.message);
    res.status(500).json({
      success: false,
      error: 'Failed to execute code. Internal server error.',
    });
  }
});

export default router;
