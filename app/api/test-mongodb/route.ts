import { NextResponse } from 'next/server';
import connectDB from '@/lib/mongodb';
import BlogPost from '@/lib/models/BlogPost';

export async function GET() {
  try {
    console.log('🔍 Testing MongoDB connection...');
    
    // Test connection
    await connectDB();
    console.log('✅ MongoDB connection successful');
    
    // Test query
    const count = await BlogPost.countDocuments({ status: 'published' });
    console.log(`📊 Found ${count} published blog posts`);
    
    // Get sample posts
    const samplePosts = await BlogPost.find({ status: 'published' })
      .limit(3)
      .select('title slug date')
      .lean();
    
    console.log('📝 Sample posts:', samplePosts);
    
    return NextResponse.json({
      success: true,
      message: 'MongoDB connection and query successful',
      data: {
        totalPosts: count,
        samplePosts: samplePosts,
        timestamp: new Date().toISOString()
      }
    });
    
  } catch (error) {
    console.error('❌ MongoDB test failed:', error);
    
    return NextResponse.json({
      success: false,
      error: error instanceof Error ? error.message : 'Unknown error',
      timestamp: new Date().toISOString()
    }, { status: 500 });
  }
}
