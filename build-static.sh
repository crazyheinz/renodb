#!/bin/bash

# Build script voor GitHub Pages deployment met SEO Pre-rendering
echo "🔨 Building RenoDB website met SEO pre-rendering voor www.renodb.be..."

# Clean oude build
rm -rf dist/public
rm -rf docs

# Build with react-snap pre-rendering
echo "📦 Building Vite app en pre-rendering voor SEO..."
NODE_ENV=production npm run build:static

# Maak docs folder aan
mkdir -p docs

# Kopieer bestanden
cp -r dist/public/* docs/

# Kopieer attached_assets als die er zijn
if [ -d "attached_assets" ]; then
  echo "📦 Kopiëren van attached_assets..."
  cp -r attached_assets docs/
fi

# Maak .nojekyll file
touch docs/.nojekyll

# Show SEO check
echo ""
echo "✅ Static website met SEO pre-rendering klaar in docs/ folder!"
echo "🔍 Pre-rendered HTML bevat nu volledige content voor Google"
echo ""
echo "📊 SEO Verificatie:"
CONTENT_LENGTH=$(wc -c < docs/index.html)
echo "   - HTML grootte: ${CONTENT_LENGTH} bytes"
if [ $CONTENT_LENGTH -gt 10000 ]; then
  echo "   ✓ HTML bevat volledige pre-rendered content"
else
  echo "   ⚠ HTML lijkt leeg te zijn"
fi
echo ""
echo "📁 Upload de docs/ folder naar GitHub en activeer GitHub Pages"
echo "🌐 Stel custom domain in: www.renodb.be"
echo "🔧 DNS: CNAME www → [username].github.io"