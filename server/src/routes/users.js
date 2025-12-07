import express from 'express';
import User from '../models/User.js';
import { mockUser } from '../mockData.js';

const router = express.Router();

// Get user by ID
router.get('/:id', async (req, res) => {
  try {
    if (!req.isMongoConnected) {
      return res.json(mockUser);
    }
    
    const user = await User.findById(req.params.id).populate('progress.topicId');
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }
    res.json(user);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update user progress
router.patch('/:id/progress', async (req, res) => {
  try {
    if (!req.isMongoConnected) {
      // In mock mode, just return updated mock user
      const { xpGain } = req.body;
      if (xpGain) {
        mockUser.gamification.xp += xpGain;
        mockUser.gamification.level = Math.floor(mockUser.gamification.xp / 100) + 1;
      }
      return res.json(mockUser);
    }
    
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const { topicId, status, currentSkillTier, quizScore, xpGain } = req.body;

    // Update progress
    const progressIndex = user.progress.findIndex(
      (p) => p.topicId.toString() === topicId
    );

    if (progressIndex >= 0) {
      if (status) user.progress[progressIndex].status = status;
      if (currentSkillTier) user.progress[progressIndex].currentSkillTier = currentSkillTier;
      if (quizScore) user.progress[progressIndex].quizScores.push(quizScore);
    } else {
      user.progress.push({
        topicId,
        status: status || 'active',
        currentSkillTier: currentSkillTier || 'beginner',
        quizScores: quizScore ? [quizScore] : [],
      });
    }

    // Update XP and level
    if (xpGain) {
      user.gamification.xp += xpGain;
      user.gamification.level = Math.floor(user.gamification.xp / 100) + 1;
    }

    // Update heatmap
    const today = new Date().toISOString().split('T')[0];
    const heatmapEntry = user.gamification.heatMapData.find((d) => d.date === today);
    if (heatmapEntry) {
      heatmapEntry.count += 1;
    } else {
      user.gamification.heatMapData.push({ date: today, count: 1 });
    }

    await user.save();
    res.json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Create new user
router.post('/', async (req, res) => {
  try {
    if (!req.isMongoConnected) {
      return res.status(503).json({ error: 'Database not available' });
    }
    const user = new User(req.body);
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
