import sharp from 'sharp';
import fs from 'fs';

// Source is the high-res one (using the original high-res backup we made earlier if possible, or just current favicon)
// We prefer the hero image logic if favicon is too small, but user said they uploaded a house icon.
// Let's assume client/public/favicon.png is the source.
const INPUT_FILE = 'client/public/favicon.png'; 
const SIZES = [48, 96, 144, 192];

async function generateFavicons() {
  console.log('🎨 Generating Google-compliant favicons...');

  if (!fs.existsSync(INPUT_FILE)) {
    console.error('❌ Source favicon not found:', INPUT_FILE);
    return;
  }

  for (const size of SIZES) {
    const output = `client/public/favicon-${size}x${size}.png`;
    await sharp(INPUT_FILE)
      .resize(size, size)
      .toFile(output);
    console.log(`✅ Generated: ${output}`);
  }

  // Also update the base files to be compliant
  await sharp(INPUT_FILE)
    .resize(32, 32)
    .toFile('client/public/favicon-32x32.png');
    console.log(`✅ Generated: client/public/favicon-32x32.png`);

  console.log('🎉 All favicons generated!');
}

generateFavicons().catch(console.error);
