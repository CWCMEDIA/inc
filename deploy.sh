#!/bin/bash

# International House Business Centre Website Deployment Script

echo "🏢 Building International House Business Centre Website..."

# Install dependencies if node_modules doesn't exist
if [ ! -d "node_modules" ]; then
    echo "📦 Installing dependencies..."
    npm install
fi

# Build the project
echo "🔨 Building for production..."
npm run build

# Check if build was successful
if [ $? -eq 0 ]; then
    echo "✅ Build completed successfully!"
    echo "📁 Production files are in the 'build' directory"
    echo ""
    echo "🚀 To deploy:"
    echo "   - Upload the contents of the 'build' directory to your web server"
    echo "   - Or use a hosting service like Netlify, Vercel, or GitHub Pages"
    echo ""
    echo "📞 Contact Information:"
    echo "   Phone: 01268 916 030"
    echo "   Email: Space@Intlhouse.co.uk"
    echo "   Address: Charfleets Road, Canvey Island, Essex SS8 0PQ"
else
    echo "❌ Build failed. Please check the error messages above."
    exit 1
fi 