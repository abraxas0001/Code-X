# ✅ Deployment Checklist

## Before You Deploy

- [ ] **Get Gemini API Key**
  - Visit: https://makersuite.google.com/app/apikey
  - Create and copy your API key

- [ ] **Set Up MongoDB Atlas**
  - Visit: https://www.mongodb.com/cloud/atlas
  - Create free cluster
  - Get connection string
  - Whitelist all IPs (0.0.0.0/0) for Vercel

- [ ] **Test Locally**
  - [ ] Client runs: `cd client && npm run dev`
  - [ ] Server runs: `cd server && npm run dev`
  - [ ] AI Tutor works
  - [ ] Code execution works
  - [ ] Database connection works

- [ ] **Commit Your Code**
  ```bash
  git add .
  git commit -m "Ready for deployment"
  ```

## Deployment Steps

- [ ] **Install Vercel CLI**
  ```bash
  npm install -g vercel
  ```

- [ ] **Login to Vercel**
  ```bash
  vercel login
  ```

- [ ] **Initial Deploy**
  ```bash
  vercel
  ```

- [ ] **Add Environment Variables** (in Vercel Dashboard)
  - [ ] `VITE_GEMINI_API_KEY`
  - [ ] `VITE_API_URL` (https://your-project.vercel.app/api)
  - [ ] `MONGODB_URI`
  - [ ] `NODE_ENV` (production)

- [ ] **Deploy to Production**
  ```bash
  vercel --prod
  ```

- [ ] **Seed Database**
  ```bash
  cd server
  MONGODB_URI="your_production_uri" npm run seed
  ```

## Post-Deployment Testing

- [ ] **Visit Your Site**
  - URL: https://your-project.vercel.app

- [ ] **Test Core Features**
  - [ ] Homepage loads
  - [ ] Dashboard displays topics
  - [ ] Can select a topic
  - [ ] Code editor works
  - [ ] AI Tutor responds
  - [ ] Code execution works
  - [ ] Progress saves
  - [ ] Mobile responsive

- [ ] **Check Logs**
  - Vercel Dashboard → Deployments → Functions → View Logs

## Optional Enhancements

- [ ] **Custom Domain**
  - Add in Vercel Dashboard → Settings → Domains

- [ ] **Analytics**
  - Enable in Vercel Dashboard → Analytics

- [ ] **Performance Monitoring**
  - Enable Speed Insights

## Troubleshooting

If something doesn't work:

1. **Check Environment Variables**
   - Vercel Dashboard → Settings → Environment Variables
   - Redeploy after adding variables

2. **Check Function Logs**
   - Vercel Dashboard → Deployments → [Latest] → Functions

3. **Check Build Logs**
   - Vercel Dashboard → Deployments → [Latest] → Building

4. **Common Issues**
   - API not working? Check `VITE_API_URL` is correct
   - Database errors? Verify MongoDB connection string
   - AI not working? Check Gemini API key
   - Build fails? Run `npm run build` locally first

## Support Resources

- 📖 Full Guide: `VERCEL_DEPLOYMENT_GUIDE.md`
- ⚡ Quick Start: `DEPLOYMENT_QUICK_START.md`
- 🌐 Vercel Docs: https://vercel.com/docs
- 💬 MongoDB Docs: https://docs.atlas.mongodb.com/

---

**Current Status**: ⬜ Not Started | 🟡 In Progress | ✅ Complete

Mark items as you complete them!
