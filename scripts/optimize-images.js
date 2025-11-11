const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const IMAGES_DIR = path.join(__dirname, '../public/images');
const OUTPUT_DIR = path.join(__dirname, '../public/images/optimized');

// Ensure output directory exists
if (!fs.existsSync(OUTPUT_DIR)) {
  fs.mkdirSync(OUTPUT_DIR, { recursive: true });
}

// Image optimization settings
const OPTIMIZATION_SETTINGS = {
  jpeg: {
    quality: 85,
    progressive: true,
    mozjpeg: true,
  },
  png: {
    quality: 85,
    progressive: true,
    compressionLevel: 9,
  },
  webp: {
    quality: 85,
    effort: 6,
  },
  avif: {
    quality: 75,
    effort: 9,
  },
};

async function optimizeImage(inputPath, outputPath, format) {
  try {
    const image = sharp(inputPath);
    
    switch (format) {
      case 'jpeg':
        await image
          .jpeg(OPTIMIZATION_SETTINGS.jpeg)
          .toFile(outputPath);
        break;
      case 'png':
        await image
          .png(OPTIMIZATION_SETTINGS.png)
          .toFile(outputPath);
        break;
      case 'webp':
        await image
          .webp(OPTIMIZATION_SETTINGS.webp)
          .toFile(outputPath);
        break;
      case 'avif':
        await image
          .avif(OPTIMIZATION_SETTINGS.avif)
          .toFile(outputPath);
        break;
      default:
        await image.toFile(outputPath);
    }
    
    const stats = fs.statSync(outputPath);
    const originalStats = fs.statSync(inputPath);
    const savings = ((originalStats.size - stats.size) / originalStats.size * 100).toFixed(2);
    
    console.log(`✅ ${path.basename(inputPath)} → ${path.basename(outputPath)} (${savings}% smaller)`);
  } catch (error) {
    console.error(`❌ Error optimizing ${inputPath}:`, error.message);
  }
}

async function processImages() {
  const files = fs.readdirSync(IMAGES_DIR);
  const imageFiles = files.filter(file => 
    /\.(jpg|jpeg|png)$/i.test(file) && 
    !file.includes('optimized') &&
    !file.includes('Logo.png') // Skip logo as it's already small
  );

  console.log(`Found ${imageFiles.length} images to optimize...\n`);

  for (const file of imageFiles) {
    const inputPath = path.join(IMAGES_DIR, file);
    const fileExt = path.extname(file).toLowerCase();
    
    // Skip if file is already small (< 500KB)
    const stats = fs.statSync(inputPath);
    if (stats.size < 500 * 1024) {
      console.log(`⏭️  Skipping ${file} (already small: ${(stats.size / 1024).toFixed(1)}KB)`);
      continue;
    }

    const baseName = path.basename(file, fileExt);
    
    // Create optimized versions
    if (fileExt === '.jpg' || fileExt === '.jpeg') {
      // Optimize JPEG
      await optimizeImage(
        inputPath,
        path.join(OUTPUT_DIR, `${baseName}-optimized.jpg`),
        'jpeg'
      );
      
      // Create WebP version
      await optimizeImage(
        inputPath,
        path.join(OUTPUT_DIR, `${baseName}.webp`),
        'webp'
      );
      
      // Create AVIF version
      await optimizeImage(
        inputPath,
        path.join(OUTPUT_DIR, `${baseName}.avif`),
        'avif'
      );
    } else if (fileExt === '.png') {
      // Optimize PNG
      await optimizeImage(
        inputPath,
        path.join(OUTPUT_DIR, `${baseName}-optimized.png`),
        'png'
      );
      
      // Create WebP version
      await optimizeImage(
        inputPath,
        path.join(OUTPUT_DIR, `${baseName}.webp`),
        'webp'
      );
      
      // Create AVIF version
      await optimizeImage(
        inputPath,
        path.join(OUTPUT_DIR, `${baseName}.avif`),
        'avif'
      );
    }
  }

  console.log('\n🎉 Image optimization complete!');
  console.log(`📁 Optimized images saved to: ${OUTPUT_DIR}`);
}

// Run the optimization
processImages().catch(console.error);

