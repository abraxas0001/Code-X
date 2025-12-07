# OmniLearn - The Ultimate CS Adaptive Learning Platform

## 🚀 Tech Stack
- **Frontend:** React 19 (Vite), TypeScript, Tailwind CSS, Framer Motion, Shadcn/UI
- **State:** Zustand + TanStack Query
- **Backend:** Node.js, Express.js (ES Modules)
- **Database:** MongoDB + Mongoose
- **AI:** Google Gemini 2.5 Flash
- **Code Execution:** Judge0 API

## 📦 Installation & Setup

### Prerequisites
- Node.js 18+ installed
- MongoDB (local or Atlas) OR use mock data mode
- (Optional) Gemini API key for AI features
- (Optional) Judge0 API key for code execution

### Step 1: Install Dependencies
```bash
# Install client dependencies
cd client
npm install

# Install server dependencies
cd ../server
npm install
```

### Step 2: Configure Environment Variables

**Client (.env)**
```env
VITE_API_URL=http://localhost:5000/api
VITE_GEMINI_API_KEY=your_gemini_api_key_here
```

**Server (.env)**
```env
PORT=5000
MONGODB_URI=mongodb://localhost:27017/omnilearn
# OR use MongoDB Atlas:
# MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/omnilearn
NODE_ENV=development
JUDGE0_API_KEY=your_judge0_api_key_here
```

### Step 3: Seed Database (if using MongoDB)
```bash
cd server
npm run seed
```

### Step 4: Start Development Servers
```bash
# Terminal 1 - Backend
cd server
npm run dev

# Terminal 2 - Frontend
cd client
npm run dev
```

## 🌐 Access the Application
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/api/health

## ✨ Features Implemented
✅ Adaptive three-pane learning interface
✅ Tier-based content (Beginner/Intermediate/Expert)
✅ Monaco code editor with multi-language support
✅ Real-time complexity visualization
✅ AI Socratic tutor (Gemini integration)
✅ Gamification (XP, levels, streaks, badges)
✅ GitHub-style activity heatmap
✅ Framer Motion animations
✅ Code execution via Judge0 API
✅ Responsive design with Tailwind CSS

## 🔑 API Keys Setup

### Gemini API (Free)
1. Visit https://makersuite.google.com/app/apikey
2. Create a new API key
3. Add to `client/.env` as `VITE_GEMINI_API_KEY`

### Judge0 API (Free tier available)
1. Visit https://rapidapi.com/judge0-official/api/judge0-ce
2. Subscribe to free tier
3. Add to `server/.env` as `JUDGE0_API_KEY`

### MongoDB Atlas (Free tier)
1. Visit https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Get connection string
4. Add to `server/.env` as `MONGODB_URI`

## 🚀 Deployment to Vercel

Deploy your app to production in minutes!

### Quick Deploy
```bash
# Install Vercel CLI
npm install -g vercel

# Login and deploy
vercel login
vercel

# Add environment variables in Vercel dashboard, then:
vercel --prod
```

### Detailed Guides
- **⚡ Quick Start**: See `DEPLOYMENT_QUICK_START.md`
- **📖 Full Guide**: See `VERCEL_DEPLOYMENT_GUIDE.md`
- **✅ Checklist**: See `DEPLOYMENT_CHECKLIST.md`

### Required Environment Variables for Production
```
VITE_GEMINI_API_KEY=your_key
VITE_API_URL=https://your-project.vercel.app/api
MONGODB_URI=your_mongodb_atlas_uri
NODE_ENV=production
```
