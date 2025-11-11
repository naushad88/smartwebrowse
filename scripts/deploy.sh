#!/bin/bash

# Robust Softech - Deployment Script
# This script helps deploy the Next.js application

set -e

echo "🚀 Starting deployment process..."

# Check if we're in the right directory
if [ ! -f "package.json" ]; then
    echo "❌ Error: package.json not found. Please run this script from the project root."
    exit 1
fi

# Check if Node.js is installed
if ! command -v node &> /dev/null; then
    echo "❌ Error: Node.js is not installed. Please install Node.js 18+ first."
    exit 1
fi

# Check Node.js version
NODE_VERSION=$(node -v | cut -d'v' -f2 | cut -d'.' -f1)
if [ "$NODE_VERSION" -lt 18 ]; then
    echo "❌ Error: Node.js 18+ is required. Current version: $(node -v)"
    exit 1
fi

echo "✅ Node.js version: $(node -v)"

# Install dependencies
echo "📦 Installing dependencies..."
npm ci --only=production

# Run type check
echo "🔍 Running TypeScript type check..."
npm run type-check

# Run tests
echo "🧪 Running tests..."
npm test

# Build the application
echo "🏗️ Building the application..."
npm run build

# Run Lighthouse audit (if available)
if command -v lighthouse &> /dev/null; then
    echo "📊 Running Lighthouse audit..."
    npm run lighthouse
else
    echo "ℹ️ Lighthouse not installed. Skipping performance audit."
fi

echo "✅ Build completed successfully!"

# Check if we should deploy
read -p "🚀 Deploy to production? (y/N): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    echo "🚀 Deploying to production..."
    
    # Add your deployment commands here
    # Example for Vercel:
    # vercel --prod
    
    # Example for Netlify:
    # netlify deploy --prod --dir=.next
    
    # Example for custom server:
    # rsync -avz .next/ user@server:/path/to/app/
    
    echo "✅ Deployment completed!"
else
    echo "ℹ️ Deployment skipped. Build is ready in .next/ directory."
fi

echo "🎉 All done!"





