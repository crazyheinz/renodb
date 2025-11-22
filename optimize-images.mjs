#!/usr/bin/env node
import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// Images to optimize with their max widths
const imagesToOptimize = [
  { 
    input: 'client/public/werkman-hero.png', 
    maxWidth: 1200, 
    quality: 85,
    name: 'Hero image'
  },
  { 
    input: 'attached_assets/logo_no_background_1759141345043.png', 
    maxWidth: 400, 
    quality: 90,
    name: 'Logo'
  },
  { 
    input: 'attached_assets/generated_images/Professional_painter_at_work_bacdf019.png', 
    maxWidth: 800, 
    quality: 80,
    name: 'Painter service'
  },
  { 
    input: 'attached_assets/generated_images/Bathroom_plumbing_work_bfc5f55f.png', 
    maxWidth: 800, 
    quality: 80,
    name: 'Plumbing service'
  },
  { 
    input: 'attached_assets/generated_images/Hardwood_floor_installation_f1b829f8.png', 
    maxWidth: 800, 
    quality: 80,
    name: 'Floor service'
  },
  { 
    input: 'attached_assets/generated_images/Electrician_installation_work_0d658561.png', 
    maxWidth: 800, 
    quality: 80,
    name: 'Electrician service'
  },
];

async function optimizeImage(config) {
  const inputPath = path.join(__dirname, config.input);
  
  if (!fs.existsSync(inputPath)) {
    console.log(`⚠️  Skipping ${config.name}: File not found`);
    return;
  }

  const stats = fs.statSync(inputPath);
  const originalSizeMB = (stats.size / 1024 / 1024).toFixed(2);

  console.log(`\n📸 Optimizing ${config.name}...`);
  console.log(`   Original: ${originalSizeMB} MB`);

  try {
    // Get original dimensions
    const metadata = await sharp(inputPath).metadata();
    console.log(`   Dimensions: ${metadata.width}x${metadata.height}`);

    // Create backup
    const backupPath = inputPath.replace(/\.(png|jpg|jpeg)$/, '.original.$1');
    if (!fs.existsSync(backupPath)) {
      fs.copyFileSync(inputPath, backupPath);
      console.log(`   ✅ Backup created: ${path.basename(backupPath)}`);
    }

    // Optimize
    const optimizedBuffer = await sharp(inputPath)
      .resize(config.maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .webp({ quality: config.quality })
      .toBuffer();

    // Save WebP version
    const webpPath = inputPath.replace(/\.(png|jpg|jpeg)$/, '.webp');
    fs.writeFileSync(webpPath, optimizedBuffer);
    
    const webpSizeMB = (optimizedBuffer.length / 1024 / 1024).toFixed(2);
    const savings = ((1 - optimizedBuffer.length / stats.size) * 100).toFixed(0);
    
    console.log(`   ✅ WebP: ${webpSizeMB} MB (${savings}% smaller)`);

    // Also create optimized PNG (for fallback)
    const optimizedPng = await sharp(inputPath)
      .resize(config.maxWidth, null, {
        fit: 'inside',
        withoutEnlargement: true
      })
      .png({ quality: config.quality, compressionLevel: 9 })
      .toBuffer();

    fs.writeFileSync(inputPath, optimizedPng);
    
    const pngSizeMB = (optimizedPng.length / 1024 / 1024).toFixed(2);
    const pngSavings = ((1 - optimizedPng.length / stats.size) * 100).toFixed(0);
    
    console.log(`   ✅ PNG: ${pngSizeMB} MB (${pngSavings}% smaller)`);

  } catch (error) {
    console.error(`   ❌ Error optimizing ${config.name}:`, error.message);
  }
}

async function main() {
  console.log('🖼️  Image Optimization Starting...\n');
  console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

  let totalOriginal = 0;
  let totalOptimized = 0;

  for (const config of imagesToOptimize) {
    const inputPath = path.join(__dirname, config.input);
    if (fs.existsSync(inputPath)) {
      const originalSize = fs.statSync(inputPath).size;
      totalOriginal += originalSize;
    }
    
    await optimizeImage(config);
    
    if (fs.existsSync(inputPath)) {
      const optimizedSize = fs.statSync(inputPath).size;
      totalOptimized += optimizedSize;
    }
  }

  console.log('\n━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
  console.log('\n📊 Summary:');
  console.log(`   Original total: ${(totalOriginal / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Optimized total: ${(totalOptimized / 1024 / 1024).toFixed(2)} MB`);
  console.log(`   Total savings: ${((1 - totalOptimized / totalOriginal) * 100).toFixed(0)}%`);
  console.log('\n✅ Image optimization complete!\n');
}

main().catch(console.error);
