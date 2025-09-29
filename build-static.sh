#!/bin/bash

# Build script voor GitHub Pages deployment
echo "🔨 Building RenoDB website voor GitHub Pages..."

# Clean en build
npm run build

# Maak docs folder aan
mkdir -p docs

# Kopieer bestanden
cp -r dist/public/* docs/

# Use dynamic asset loading script (already in index.html template)
# No need to modify paths - script handles GitHub Pages vs custom domain detection

# Maak .nojekyll file
touch docs/.nojekyll

echo "✅ Static website klaar in docs/ folder!"
echo "📁 Upload de docs/ folder naar GitHub en activeer GitHub Pages"
echo "🌐 Je website wordt beschikbaar op: https://[username].github.io/[repo-name]/"