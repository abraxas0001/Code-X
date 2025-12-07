import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import topicRoutes from './routes/topics.js';
import userRoutes from './routes/users.js';
import executeRoutes from './routes/execute.js';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Database Connection
let isMongoConnected = false;

if (process.env.MONGODB_URI) {
  mongoose
    .connect(process.env.MONGODB_URI)
    .then(() => {
      console.log('✅ MongoDB Connected');
      isMongoConnected = true;
    })
    .catch((err) => {
      console.warn('⚠️  MongoDB Connection Failed:', err.message);
      console.log('📦 Running in MOCK DATA mode');
    });
} else {
  console.log('📦 No MONGODB_URI found. Running in MOCK DATA mode');
}

// Make connection status available to routes
app.use((req, res, next) => {
  req.isMongoConnected = isMongoConnected;
  next();
});

// Routes
app.use('/api/topics', topicRoutes);
app.use('/api/users', userRoutes);
app.use('/api/execute', executeRoutes);

app.get('/api/health', (req, res) => {
  res.json({ 
    status: 'OK', 
    message: 'OmniLearn API is running',
    database: isMongoConnected ? 'MongoDB' : 'Mock Data'
  });
});

// Export for Vercel serverless
export default app;

// Only listen if not in serverless environment
if (process.env.NODE_ENV !== 'production') {
  app.listen(PORT, () => {
    console.log(`🚀 Server running on http://localhost:${PORT}`);
    console.log(`📊 Database mode: ${isMongoConnected ? 'MongoDB' : 'Mock Data'}`);
  });
}
