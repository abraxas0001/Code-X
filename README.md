# Code-X - DSA Learning Platform

An interactive, AI-powered learning platform for mastering Data Structures and Algorithms with gamification, real-time code execution, and adaptive difficulty levels.

## 🎯 Features

- **🎓 Adaptive Learning:** Beginner, Intermediate, and Expert difficulty levels for each topic
- **💻 Live Code Editor:** Monaco editor with multi-language support (Python, JavaScript, C++, Java)
- **🤖 AI Tutor:** Gemini-powered Socratic assistant to answer questions and explain concepts
- **📊 Complexity Visualization:** Time and space complexity charts for algorithms
- **🎮 Gamification:** Earn XP, climb levels, maintain streaks, unlock badges
- **📈 Activity Heatmap:** GitHub-style activity tracking
- **🎨 Animated UI:** Smooth transitions with Framer Motion
- **⚡ Responsive Design:** Works seamlessly on desktop, tablet, and mobile
- **🚀 Cloud-Ready:** Deployed on Vercel with serverless functions

## 🚀 Tech Stack
- **Frontend:** React 18 (Vite), TypeScript, Tailwind CSS, Framer Motion
- **State:** Zustand + TanStack Query
- **Backend:** Vercel Serverless Functions (Node.js)
- **Database:** Mock data (no database required for deployment)
- **AI:** Google Gemini 2.5 Flash
- **Code Execution:** Mock mode (can integrate Judge0 API)

## 🏗️ Architecture

```
code-x/
├── client/                    # React + Vite frontend
│   ├── src/
│   │   ├── components/       # UI components
│   │   ├── pages/            # LearnPage, Dashboard
│   │   ├── lib/              # API client, Gemini integration
│   │   ├── store/            # Zustand stores
│   │   └── types/            # TypeScript interfaces
│   ├── api/                  # Vercel serverless functions
│   └── dist/                 # Built output
├── server/                   # Optional Node.js backend
├── scripts/
│   └── run-build.js         # Build helper
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+

### Local Development

```bash
# Clone repo
git clone https://github.com/abraxas0001/Code-X.git
cd Code-X

# Install and build
npm install
npm run build

# Run dev server
cd client
npm run dev
```

**Frontend:** http://localhost:5173

## 🌐 Live Demo

**Deployed on Vercel:** https://code-x-eta-khaki.vercel.app

### API Endpoints
- `GET /api/topics` - Get all DSA topics
- `GET /api/topics/[slug]` - Get specific topic with full content
- `GET /api/users` - User profile and progress
- `POST /api/execute` - Code execution (mock)
- `GET /api/health` - Health check

## 📚 Topics Covered

### Data Structures
- Arrays & Linked Lists
- Stacks & Queues
- Trees (Binary, BST, AVL)
- Graphs (Directed, Undirected)
- Hash Tables
- Heaps

### Algorithms
- Sorting (Bubble, Merge, Quick)
- Searching (Linear, Binary)
- Recursion & Backtracking
- Dynamic Programming
- Divide & Conquer
- Greedy Algorithms
- Graph Traversal (BFS, DFS)

### AI Topics
- Neural Networks Basics
- Machine Learning Fundamentals

## ✨ Key Features

### 1. Adaptive Learning Interface
- Three-pane layout: Theory, Complexity, Code Editor
- Tier-based content (Beginner → Intermediate → Expert)
- Switch difficulty to see different explanations

### 2. Live Code Editor
- Monaco editor with syntax highlighting
- Multi-language support (Python, JavaScript, C++, Java)
- Execute code and see output
- Code snippets for each difficulty level

### 3. AI Socratic Tutor
- Ask questions about concepts
- Get explanations without spoiling solutions
- Real-time responses powered by Gemini API

### 4. Complexity Visualization
- Time complexity charts
- Space complexity analysis
- Big O notation reference

### 5. Gamification System
- **XP & Levels:** Earn points for completing topics
- **Streaks:** Maintain daily learning consistency
- **Badges:** Unlock achievements
- **Activity Heatmap:** GitHub-style contribution graph
- **Leaderboard:** Compare with other learners

### 6. Responsive Design
- Mobile-optimized interface
- Dark/Light theme toggle
- Smooth animations with Framer Motion

## 🛠️ Development

### Project Structure
```
client/src/
├── components/
│   ├── CodeEditor.tsx       # Code execution interface
│   ├── AIChat.tsx           # AI tutor chat
│   ├── TheoryPane.tsx       # Learning content
│   ├── ComplexityGraph.tsx  # Visualizations
│   ├── TierSwitcher.tsx     # Difficulty selector
│   └── Navbar.tsx           # Navigation
├── pages/
│   ├── Dashboard.tsx        # Home + topic listing
│   └── LearnPage.tsx        # Learning interface
├── lib/
│   ├── api.ts               # API client
│   ├── gemini.ts            # Gemini AI integration
│   └── utils.ts             # Utilities
└── store/
    ├── topicStore.ts        # Current topic state
    └── userStore.ts         # User data
```

### Environment Variables (Optional)

**For AI Tutor:**
```bash
VITE_GEMINI_API_KEY=your_google_gemini_api_key
```

Get free Gemini API key: https://makersuite.google.com/app/apikey

## 🚀 Deployment

### Deploy to Vercel

```bash
# Install Vercel CLI
npm install -g vercel

# Deploy
vercel

# Deploy to production
vercel --prod
```

**The app deploys automatically on push to `main`**

### Features of Vercel Deployment
- ✅ Automatic builds on GitHub push
- ✅ Serverless functions for API routes (`client/api/`)
- ✅ SPA routing (rewrites to `/index.html`)
- ✅ No database needed (mock data included)
- ✅ Environment variables support
- ✅ Free tier with generous limits

## 📖 Learning Path

1. **Start:** Browse dashboard and pick your first topic
2. **Learn:** Read beginner-level explanation with analogy
3. **Code:** Write code in the editor and execute
4. **Practice:** Move to intermediate, then expert
5. **Ask AI:** Use tutor when stuck
6. **Track:** Watch your XP and streak grow
7. **Master:** Complete all topics and earn badges

## 🤖 AI Tutor Usage

Type questions like:
- "Explain binary search in simple terms"
- "What's the time complexity of quicksort?"
- "How do I optimize this algorithm?"
- "What's the difference between arrays and linked lists?"

The AI tutor responds with clear, educational answers.

## 🔒 Privacy & Data

- No user account required to browse
- Anonymous learning progress tracking
- All data stored locally (browser storage)
- No personal data collection
- Fully self-contained, no external dependencies for core features

## 🐛 Troubleshooting

| Issue | Solution |
|-------|----------|
| Topics not loading | Verify `/api/topics` returns data in DevTools |
| AI tutor not responding | Check Gemini API key in `.env` |
| Code not executing | Features work in mock mode, no external API required |
| Build failing locally | Run `npm install` in both root and `client/` |

## 🤝 Contributing

Contributions welcome! Fork, create a branch, and submit a PR for:
- New DSA topics
- Better animations
- Mobile improvements
- Code optimization
- Bug fixes
- Documentation

## 📄 License

MIT License - Free to use for educational purposes

## 🙏 Acknowledgments

- Inspired by LeetCode, CodeSignal, and freeCodeCamp
- UI built with Tailwind CSS & shadcn/ui
- Animations with Framer Motion
- Data viz with Recharts
- AI powered by Google Gemini
- Hosted on Vercel

---

**Made with ❤️ for DSA learners**

Have questions? Issues? Suggestions? Open an issue on GitHub!
