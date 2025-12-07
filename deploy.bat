@echo off
echo 🚀 DSA Mania - Vercel Deployment Script
echo ========================================
echo.

REM Check if git is initialized
if not exist .git (
    echo 📦 Initializing Git repository...
    git init
    git add .
    git commit -m "Initial commit - Ready for deployment"
) else (
    echo ✅ Git repository already initialized
)

REM Check if Vercel CLI is installed
where vercel >nul 2>nul
if %ERRORLEVEL% NEQ 0 (
    echo 📥 Installing Vercel CLI...
    npm install -g vercel
) else (
    echo ✅ Vercel CLI already installed
)

echo.
echo 🔐 You'll need these ready:
echo   1. Gemini API Key
echo   2. MongoDB Atlas Connection String
echo.
echo Starting Vercel deployment...
echo.

REM Deploy to Vercel
vercel

echo.
echo ✨ Deployment initiated!
echo.
echo Next steps:
echo 1. Add environment variables in Vercel dashboard
echo 2. Redeploy with: vercel --prod
echo 3. Seed your database
echo.
echo See VERCEL_DEPLOYMENT_GUIDE.md for detailed instructions
pause
