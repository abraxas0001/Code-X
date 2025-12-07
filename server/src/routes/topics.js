import express from 'express';
import Topic from '../models/Topic.js';
import { mockTopics } from '../mockData.js';

const router = express.Router();

// Get all topics
router.get('/', async (req, res) => {
  try {
    if (!req.isMongoConnected) {
      return res.json(mockTopics.map(t => ({ _id: t._id, meta: t.meta })));
    }
    const topics = await Topic.find().select('meta');
    res.json(topics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get topic by slug
router.get('/:slug', async (req, res) => {
  try {
    if (!req.isMongoConnected) {
      const topic = mockTopics.find(t => t.meta.slug === req.params.slug);
      if (!topic) {
        return res.status(404).json({ error: 'Topic not found' });
      }
      return res.json(topic);
    }
    
    const topic = await Topic.findOne({ 'meta.slug': req.params.slug });
    if (!topic) {
      return res.status(404).json({ error: 'Topic not found' });
    }
    res.json(topic);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new topic (admin only)
router.post('/', async (req, res) => {
  try {
    if (!req.isMongoConnected) {
      return res.status(503).json({ error: 'Database not available' });
    }
    const topic = new Topic(req.body);
    await topic.save();
    res.status(201).json(topic);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;
