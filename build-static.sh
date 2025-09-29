#!/bin/bash

# Build script voor GitHub Pages deployment
echo "🔨 Building RenoDB website voor www.renodb.be..."

# Clean en build
npm run build

# Maak docs folder aan
mkdir -p docs

# Kopieer bestanden
cp -r dist/public/* docs/

# Assets zijn al correct voor root level (/)
# 404.html zorgt voor SPA routing op custom domain

# Maak .nojekyll file
touch docs/.nojekyll

echo "✅ Static website klaar in docs/ folder!"
echo "📁 Upload de docs/ folder naar GitHub en activeer GitHub Pages"
echo "🌐 Stel custom domain in: www.renodb.be"
echo "🔧 DNS: CNAME www → [username].github.io"