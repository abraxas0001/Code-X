# 🚀 OmniLearn Setup Guide

## Current Status: ✅ RUNNING

Both servers are now running successfully!

### 🌐 Access Points
- **Frontend:** http://localhost:3000
- **Backend API:** http://localhost:5000/api
- **Health Check:** http://localhost:5000/api/health

### 📊 Current Configuration
- **Database Mode:** Mock Data (MongoDB not required for demo)
- **User:** Demo user "Alex Chen" auto-loaded
- **Topics:** Binary Search topic available
- **Code Execution:** Requires Judge0 API key (optional)
- **AI Tutor:** Requires Gemini API key (optional)

---

## 🎯 Quick Start Guide

### 1. View the Dashboard
Open http://localhost:3000 in your browser to see:
- Gamification stats (XP, Level, Streak)
- GitHub-style activity heatmap
- Available topics grid

### 2. Start Learning
Click on "Binary Search" to access the adaptive learning interface with:
- **Left Pane:** Theory content with tier switcher (Beginner/Intermediate/Expert)
- **Center Pane:** Complexity visualization graph
- **Right Pane:** Monaco code editor with multi-language support

### 3. Try the Features
- Switch between skill tiers to see content adapt
- Change programming languages (Python, JavaScript, C++, Java)
- Click the AI chat button (bottom-right) to interact with the tutor
- Write code and click "Run Code" (requires Judge0 API)

---

## 🔑 Optional: Add API Keys

### Gemini AI (for AI Tutor feature)
1. Get free API key: https://makersuite.google.com/app/apikey
2. Add to `client/.env`:
   ```
   VITE_GEMINI_API_KEY=your_key_here
   ```
3. Restart frontend: `Ctrl+C` then `npm run dev`

### Judge0 (for Code Execution)
1. Get free API key: https://rapidapi.com/judge0-official/api/judge0-ce
2. Add to `server/.env`:
   ```
   JUDGE0_API_KEY=your_key_here
   ```
3. Server will auto-reload

### MongoDB (for Persistent Data)
1. Option A - Local MongoDB:
   ```bash
   # Install MongoDB Community Edition
   # Then update server/.env:
   MONGODB_URI=mongodb://localhost:27017/omnilearn
   ```

2. Option B - MongoDB Atlas (Cloud):
   - Create free cluster: https://www.mongodb.com/cloud/atlas
   - Get connection string
   - Update `server/.env`:
     ```
     MONGODB_URI=mongodb+srv://username:password@cluster.mongodb.net/omnilearn
     ```
   - Run seed script:
     ```bash
     cd server
     npm run seed
     ```

---

## 🎨 Features Showcase

### ✅ Implemented Features
- [x] Adaptive three-pane learning interface
- [x] Tier-based content (Beginner → Intermediate → Expert)
- [x] Monaco code editor with syntax highlighting
- [x] Multi-language support (Python, C++, Java, JavaScript)
- [x] Real-time complexity graph visualization
- [x] AI Socratic tutor chat interface
- [x] Gamification system (XP, levels, streaks, badges)
- [x] GitHub-style activity heatmap
- [x] Framer Motion animations throughout
- [x] Responsive design with Tailwind CSS
- [x] Skeleton loaders for smooth UX
- [x] Toast notifications
- [x] Glassmorphism navbar
- [x] Mock data mode (no DB required)

### 🔄 Requires API Keys
- [ ] Code execution (Judge0 API)
- [ ] AI tutor responses (Gemini API)

---

## 🛠️ Development Commands

### Frontend (client/)
```bash
npm run dev      # Start dev server
npm run build    # Production build
npm run preview  # Preview production build
```

### Backend (server/)
```bash
npm run dev      # Start with nodemon (auto-reload)
npm start        # Production start
npm run seed     # Seed database (requires MongoDB)
```

---

## 🐛 Troubleshooting

### Port Already in Use
```bash
# Windows
netstat -ano | findstr :3000
taskkill /PID <PID> /F

# Or change port in vite.config.ts
```

### MongoDB Connection Failed
- Server automatically falls back to mock data mode
- No action needed for demo/development
- Add MongoDB URI when ready for production

### Code Execution Not Working
- Requires Judge0 API key
- Alternative: Use online compilers or local execution
- Mock responses available for testing UI

---

## 📚 Next Steps

1. **Add More Topics:** Create additional topics in `server/src/mockData.js`
2. **Customize Themes:** Edit Tailwind config for custom color schemes
3. **Add Authentication:** Integrate Clerk or NextAuth
4. **Deploy:** 
   - Frontend: Vercel/Netlify
   - Backend: Railway/Render
   - Database: MongoDB Atlas

---

## 🎉 You're All Set!

The platform is fully functional with mock data. Add API keys as needed to unlock additional features.

**Happy Learning! 🚀**
