#!/bin/bash

echo "🚀 Starting Ubuntu deployment..."

# Build the application
echo "📦 Building application..."
npm run build

if [ $? -eq 0 ]; then
    echo "✅ Build successful!"
    
    # Stop existing PM2 process if running
    echo "🛑 Stopping existing processes..."
    pm2 stop idearoom-academy-app 2>/dev/null || true
    pm2 delete idearoom-academy-app 2>/dev/null || true
    
    # Start new PM2 process
    echo "🚀 Starting new process..."
    pm2 start ecosystem.config.js
    
    # Save PM2 configuration
    pm2 save
    
    echo "✅ Deployment completed successfully!"
    echo "🌐 Your site should now be updated at https://academy.idearoom.ge"
    
else
    echo "❌ Build failed! Please check the errors above."
    exit 1
fi 