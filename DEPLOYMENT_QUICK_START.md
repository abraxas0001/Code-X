# ⚡ Quick Deployment Guide

## 🎯 Fastest Way to Deploy (5 minutes)

### 1. Install Vercel CLI
```bash
npm install -g vercel
```

### 2. Login to Vercel
```bash
vercel login
```

### 3. Deploy
```bash
vercel
```

### 4. Add Environment Variables
Go to your Vercel dashboard → Project → Settings → Environment Variables

Add these:
```
VITE_GEMINI_API_KEY=your_key_here
VITE_API_URL=https://your-project.vercel.app/api
MONGODB_URI=your_mongodb_connection_string
NODE_ENV=production
```

### 5. Deploy to Production
```bash
vercel --prod
```

### 6. Seed Database
```bash
cd server
MONGODB_URI="your_production_uri" npm run seed
```

---

## 🔑 Get Your API Keys

### Gemini API Key
1. Go to https://makersuite.google.com/app/apikey
2. Click "Create API Key"
3. Copy the key

### MongoDB Atlas (Free)
1. Go to https://www.mongodb.com/cloud/atlas
2. Create free cluster
3. Click "Connect" → "Connect your application"
4. Copy connection string
5. Replace `<password>` with your password
6. Add `/dsa-mania` at the end

---

## 🎉 That's It!

Your app will be live at: `https://your-project-name.vercel.app`

For detailed instructions, see `VERCEL_DEPLOYMENT_GUIDE.md`
