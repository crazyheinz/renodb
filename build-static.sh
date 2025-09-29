#!/bin/bash

# Build script voor GitHub Pages deployment
echo "🔨 Building RenoDB website voor GitHub Pages..."

# Clean en build
npm run build

# Maak docs folder aan
mkdir -p docs

# Kopieer bestanden
cp -r dist/public/* docs/

# Fix absolute paths voor GitHub Pages subpath
sed -i 's|src="/assets/|src="/renodb/assets/|g' docs/index.html
sed -i 's|href="/assets/|href="/renodb/assets/|g' docs/index.html

# Maak .nojekyll file
touch docs/.nojekyll

echo "✅ Static website klaar in docs/ folder!"
echo "📁 Upload de docs/ folder naar GitHub en activeer GitHub Pages"
echo "🌐 Je website wordt beschikbaar op: https://[username].github.io/[repo-name]/"