import { NextResponse } from 'next/server';
import BlogPost from '@/lib/models/BlogPost';
import connectDB from '@/lib/mongodb';

export async function GET() {
  try {
    await connectDB();
    
    // Count total published blog posts
    const total = await BlogPost.countDocuments({ status: 'published' });
    
    return NextResponse.json({ total }, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', // Cache for 5 minutes
      },
    });

  } catch (error) {
    console.error('❌ Error counting blog posts:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to count blog posts',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
