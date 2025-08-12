#!/bin/bash

echo "🚀 Jax FL Pressure Washing - Deployment Script"
echo "================================================"

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: Please run this script from the project root directory"
    exit 1
fi

# Build the project
echo "📦 Building the project..."
npm run build

if [ $? -ne 0 ]; then
    echo "❌ Build failed! Please fix the errors before deploying."
    exit 1
fi

echo "✅ Build successful!"

# Check if we have a remote origin
if ! git remote get-url origin > /dev/null 2>&1; then
    echo "⚠️  No GitHub remote found. Please set up your GitHub repository first:"
    echo "   1. Go to GitHub.com and create a new repository"
    echo "   2. Run: git remote add origin https://github.com/YOUR_USERNAME/jax-fl-pressure-washing.git"
    echo "   3. Run this script again"
    exit 1
fi

# Push to GitHub
echo "📤 Pushing to GitHub..."
git push origin main

if [ $? -ne 0 ]; then
    echo "❌ Push failed! Please check your GitHub credentials and try again."
    exit 1
fi

echo "✅ Code pushed to GitHub successfully!"

echo ""
echo "🎯 Next Steps for Deployment:"
echo "=============================="
echo ""
echo "1. 🌐 Go to Vercel.com and sign up/login with GitHub"
echo "2. 📁 Click 'New Project' and import your repository"
echo "3. 🚀 Click 'Deploy' (Vercel will auto-detect Next.js settings)"
echo "4. 🔗 Add your domain in Vercel dashboard → Settings → Domains"
echo "5. 📝 Update DNS records in Squarespace as Vercel instructs"
echo ""
echo "📖 For detailed instructions, see DEPLOYMENT_GUIDE.md"
echo ""
echo "🎉 Your website will be live in minutes!"
