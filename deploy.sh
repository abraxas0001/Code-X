#!/bin/bash

echo "🚀 DSA Mania - Vercel Deployment Script"
echo "========================================"
echo ""

# Check if git is initialized
if [ ! -d .git ]; then
    echo "📦 Initializing Git repository..."
    git init
    git add .
    git commit -m "Initial commit - Ready for deployment"
else
    echo "✅ Git repository already initialized"
fi

# Check if Vercel CLI is installed
if ! command -v vercel &> /dev/null; then
    echo "📥 Installing Vercel CLI..."
    npm install -g vercel
else
    echo "✅ Vercel CLI already installed"
fi

echo ""
echo "🔐 You'll need these ready:"
echo "  1. Gemini API Key"
echo "  2. MongoDB Atlas Connection String"
echo ""
echo "Starting Vercel deployment..."
echo ""

# Deploy to Vercel
vercel

echo ""
echo "✨ Deployment initiated!"
echo ""
echo "Next steps:"
echo "1. Add environment variables in Vercel dashboard"
echo "2. Redeploy with: vercel --prod"
echo "3. Seed your database"
echo ""
echo "See VERCEL_DEPLOYMENT_GUIDE.md for detailed instructions"
