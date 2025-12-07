# ⚡ OmniLearn - Quick Start

## 🎯 You're Ready to Go!

Both servers are running. Open your browser now:

### 👉 http://localhost:3000

---

## 🎮 Try These Features

### 1. Dashboard (Current Page)
- View your XP, level, and streak
- See the GitHub-style activity heatmap
- Click on "Binary Search" card

### 2. Learning Page
- **Switch Tiers:** Click Beginner/Intermediate/Expert buttons
  - Watch content transform instantly!
- **Change Language:** Click Python/JavaScript/C++/Java tabs
- **Write Code:** Type in the Monaco editor
- **Run Code:** Click "Run Code" button (needs Judge0 API key)

### 3. AI Tutor
- Click the chat bubble (bottom-right corner)
- Ask questions about the topic
- Get Socratic guidance (needs Gemini API key)

---

## 🔑 Add API Keys (Optional)

### For AI Tutor:
1. Get key: https://makersuite.google.com/app/apikey
2. Edit `client/.env`:
   ```
   VITE_GEMINI_API_KEY=your_key_here
   ```
3. Refresh browser

### For Code Execution:
1. Get key: https://rapidapi.com/judge0-official/api/judge0-ce
2. Edit `server/.env`:
   ```
   JUDGE0_API_KEY=your_key_here
   ```
3. Server auto-reloads

---

## 🎨 What to Look For

### Animations
- Hover over any button (scale effect)
- Switch between tiers (slide transition)
- Click cards on dashboard (lift effect)

### Adaptive Content
- **Beginner:** Simple language, analogies, emojis
- **Intermediate:** Technical terms, complexity analysis
- **Expert:** Dense info, edge cases, system design

### Gamification
- XP bar showing progress to next level
- Streak counter (days in a row)
- Activity heatmap (green squares)
- Badge collection

---

## 📱 Test Responsiveness

Try resizing your browser window - the layout adapts!

---

## 🛑 Stop Servers

When you're done:
```bash
# In each terminal, press:
Ctrl + C
```

---

## 📚 Full Documentation

- **Setup Guide:** See `SETUP_GUIDE.md`
- **Project Summary:** See `PROJECT_SUMMARY.md`
- **Main README:** See `README.md`

---

## 🎉 Enjoy Exploring!

**Current Status:**
✅ Frontend: Running on port 3000
✅ Backend: Running on port 5000
✅ Mock Data: Loaded
✅ Demo User: Active
✅ Binary Search Topic: Available

**Happy Learning! 🚀**
