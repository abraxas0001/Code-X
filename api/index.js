import express from 'express';
import cors from 'cors';
import topicRoutes from '../server/src/routes/topics.js';
import userRoutes from '../server/src/routes/users.js';
import executeRoutes from '../server/src/routes/execute.js';

const app = express();

app.use(cors());
app.use(express.json());

// Make mock data mode available
app.use((req, res, next) => {
  req.isMongoConnected = false;
  next();
});

app.use('/api/topics', topicRoutes);
app.use('/api/users', userRoutes);
app.use('/api/execute', executeRoutes);

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'OmniLearn API is running',
    database: 'Mock Data'
  });
});

export default app;
