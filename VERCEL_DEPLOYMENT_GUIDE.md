# 🚀 Vercel Deployment Guide for DSA Mania

## Prerequisites
- GitHub account
- Vercel account (sign up at vercel.com)
- MongoDB Atlas account (for database)
- Gemini API key

---

## 📋 Step-by-Step Deployment

### 1. Push Your Code to GitHub

```bash
# Initialize git if not already done
git init

# Add all files
git add .

# Commit
git commit -m "Ready for Vercel deployment"

# Create a new repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git
git branch -M main
git push -u origin main
```

### 2. Set Up MongoDB Atlas (Free Tier)

1. Go to [MongoDB Atlas](https://www.mongodb.com/cloud/atlas)
2. Create a free cluster
3. Click "Connect" → "Connect your application"
4. Copy the connection string (looks like: `mongodb+srv://username:password@cluster.mongodb.net/`)
5. Replace `<password>` with your actual password
6. Add `/dsa-mania` at the end: `mongodb+srv://username:password@cluster.mongodb.net/dsa-mania`

### 3. Deploy to Vercel

#### Option A: Using Vercel Dashboard (Recommended)

1. Go to [vercel.com](https://vercel.com) and sign in
2. Click "Add New" → "Project"
3. Import your GitHub repository
4. Configure the project:
   - **Framework Preset**: Vite
   - **Root Directory**: `client`
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
   - **Install Command**: `npm install`

5. Add Environment Variables (click "Environment Variables"):
   ```
   VITE_GEMINI_API_KEY=your_gemini_api_key_here
   VITE_API_URL=https://your-project-name.vercel.app/api
   MONGODB_URI=your_mongodb_connection_string
   NODE_ENV=production
   ```

6. Click "Deploy"

#### Option B: Using Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy
vercel

# Follow the prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - Project name? dsa-mania (or your choice)
# - Directory? ./
# - Override settings? No

# Add environment variables
vercel env add VITE_GEMINI_API_KEY
vercel env add VITE_API_URL
vercel env add MONGODB_URI
vercel env add NODE_ENV

# Deploy to production
vercel --prod
```

### 4. Configure Environment Variables in Vercel

Go to your project settings on Vercel:

1. Navigate to: Project → Settings → Environment Variables
2. Add these variables:

| Variable Name | Value | Environment |
|--------------|-------|-------------|
| `VITE_GEMINI_API_KEY` | Your Gemini API key | Production, Preview, Development |
| `VITE_API_URL` | `https://your-project.vercel.app/api` | Production |
| `MONGODB_URI` | Your MongoDB connection string | Production, Preview, Development |
| `NODE_ENV` | `production` | Production |

### 5. Seed Your Database

After deployment, seed your database:

```bash
# Option 1: Run locally pointing to production DB
cd server
MONGODB_URI="your_production_mongodb_uri" npm run seed

# Option 2: Use Vercel CLI
vercel env pull .env.local
cd server
npm run seed
```

---

## 🔧 Project Structure for Vercel

```
DSA Mania/
├── api/
│   └── index.js              # Vercel serverless entry point
├── client/
│   ├── src/
│   ├── dist/                 # Build output
│   ├── package.json
│   └── vercel.json           # Client config
├── server/
│   ├── src/
│   │   └── server.js         # Express app (exported for serverless)
│   └── package.json
└── vercel.json               # Root config
```

---

## 🌐 Custom Domain (Optional)

1. Go to Project Settings → Domains
2. Add your custom domain
3. Follow DNS configuration instructions
4. Update `VITE_API_URL` to use your custom domain

---

## 🐛 Troubleshooting

### Build Fails
- Check build logs in Vercel dashboard
- Ensure all dependencies are in `package.json`
- Verify TypeScript has no errors: `npm run build` locally

### API Not Working
- Verify `VITE_API_URL` points to your Vercel domain
- Check API routes are prefixed with `/api`
- Review function logs in Vercel dashboard

### Database Connection Issues
- Verify MongoDB Atlas allows connections from anywhere (0.0.0.0/0)
- Check connection string format
- Ensure database user has read/write permissions

### Environment Variables Not Working
- Redeploy after adding new env vars
- Ensure `VITE_` prefix for client-side variables
- Check variable names match exactly

---

## 📊 Monitoring

- **Analytics**: Vercel Dashboard → Analytics
- **Logs**: Vercel Dashboard → Deployments → [Your Deployment] → Functions
- **Performance**: Vercel Dashboard → Speed Insights

---

## 🔄 Continuous Deployment

Vercel automatically deploys:
- **Production**: When you push to `main` branch
- **Preview**: When you create a pull request

To disable auto-deployment:
1. Project Settings → Git
2. Configure branch settings

---

## 💡 Tips

1. **Free Tier Limits**:
   - 100GB bandwidth/month
   - 100 serverless function executions/day
   - Sufficient for most learning projects

2. **Performance**:
   - Enable Edge Functions for faster API responses
   - Use Vercel's CDN for static assets

3. **Security**:
   - Never commit `.env` files
   - Use Vercel's environment variables
   - Rotate API keys regularly

---

## 🎉 Post-Deployment Checklist

- [ ] Site loads correctly
- [ ] API endpoints respond
- [ ] Database connection works
- [ ] AI Tutor (Gemini) works
- [ ] Code execution works
- [ ] User progress saves
- [ ] All topics display correctly
- [ ] Mobile responsive
- [ ] Custom domain configured (if applicable)

---

## 📞 Support

- Vercel Docs: https://vercel.com/docs
- MongoDB Atlas Docs: https://docs.atlas.mongodb.com/
- GitHub Issues: Create an issue in your repository

---

**Your app will be live at**: `https://your-project-name.vercel.app`

Good luck! 🚀
