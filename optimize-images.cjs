
const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const assetsDir = path.join(__dirname, 'src', 'assets');

const images = [
  'AmjedBinYoosuf.png',
  'atelier47-streetwear-store.png',
  'neon-porsche-showcase.png',
  'portfolio.png',
  'vamos-nikies-shoe-store.png',
];

async function optimizeImages() {
  for (const filename of images) {
    const inputPath = path.join(assetsDir, filename);
    const outputPath = path.join(
      assetsDir,
      filename.replace(/\.png$/i, '.webp')
    );

    if (!fs.existsSync(inputPath)) {
      console.log(`Skipped: ${filename} (not found)`);
      continue;
    }

    await sharp(inputPath)
      .webp({ quality: 82, effort: 5 })
      .toFile(outputPath);

    const originalSize = fs.statSync(inputPath).size;
    const optimizedSize = fs.statSync(outputPath).size;
    const reduction = (
      (1 - optimizedSize / originalSize) * 100
    ).toFixed(1);

    console.log(
      `${filename}: ${(originalSize / 1024).toFixed(1)} KB → ` +
      `${(optimizedSize / 1024).toFixed(1)} KB (${reduction}% smaller)`
    );
  }
}

optimizeImages().catch(console.error);
