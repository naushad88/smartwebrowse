const fs = require('fs');
const path = require('path');
const https = require('https');
const http = require('http');
const { MongoClient } = require('mongodb');

// MongoDB Atlas connection - must be set via environment variable
const MONGODB_URI = process.env.MONGODB_URI;

if (!MONGODB_URI) {
  console.error('Error: MONGODB_URI environment variable is not set');
  process.exit(1);
}

const client = new MongoClient(MONGODB_URI);

async function downloadImage(url, filename) {
  return new Promise((resolve, reject) => {
    const file = fs.createWriteStream(filename);
    const protocol = url.startsWith('https:') ? https : http;
    
    protocol.get(url, (response) => {
      if (response.statusCode !== 200) {
        reject(new Error(`Failed to download ${url}: ${response.statusCode}`));
        return;
      }
      
      response.pipe(file);
      
      file.on('finish', () => {
        file.close();
        console.log(`✅ Downloaded: ${filename}`);
        resolve();
      });
      
      file.on('error', (err) => {
        fs.unlink(filename, () => {}); // Delete the file on error
        reject(err);
      });
    }).on('error', (err) => {
      reject(err);
    });
  });
}

async function downloadBlogImages() {
  try {
    await client.connect();
    console.log('Connected to MongoDB Atlas');
    
    const db = client.db();
    const collection = db.collection('blogposts');
    
    // Get all blog posts
    const posts = await collection.find({}).toArray();
    console.log(`Found ${posts.length} blog posts`);
    
    // Create images directory if it doesn't exist
    const imagesDir = path.join(process.cwd(), 'public', 'images', 'blogs');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    
    let downloadedCount = 0;
    let skippedCount = 0;
    
    for (const post of posts) {
      if (!post.originalImageUrl) {
        console.log(`⚠️ No original image URL for: ${post.title}`);
        skippedCount++;
        continue;
      }
      
      // Generate local image path
      const filename = `${post.slug}.jpg`;
      const localImagePath = path.join(imagesDir, filename);
      
      // Check if local image already exists and has content
      if (fs.existsSync(localImagePath) && fs.statSync(localImagePath).size > 0) {
        console.log(`⏭️ Skipping (already exists): ${filename}`);
        skippedCount++;
        continue;
      }
      
      try {
        // Download the image
        await downloadImage(post.originalImageUrl, localImagePath);
        
        // Update the database to use local path
        await collection.updateOne(
          { _id: post._id },
          { $set: { featuredImage: `/images/blogs/${filename}` } }
        );
        
        downloadedCount++;
        
        // Add a small delay to avoid overwhelming the server
        await new Promise(resolve => setTimeout(resolve, 100));
        
      } catch (error) {
        console.error(`❌ Failed to download ${post.title}: ${error.message}`);
        skippedCount++;
      }
    }
    
    console.log(`\n📊 Summary:`);
    console.log(`✅ Downloaded: ${downloadedCount} images`);
    console.log(`⏭️ Skipped: ${skippedCount} images`);
    console.log(`📁 Images directory: ${imagesDir}`);
    
  } catch (error) {
    console.error('Error:', error);
  } finally {
    await client.close();
  }
}

// Run the script
downloadBlogImages();
