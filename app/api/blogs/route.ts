import { NextRequest, NextResponse } from 'next/server';
import BlogPost from '@/lib/models/BlogPost';
import connectDB from '@/lib/mongodb';

export async function GET(request: NextRequest) {
  try {
    await connectDB();
    
    const { searchParams } = new URL(request.url);
    const perPage = parseInt(searchParams.get('per_page') || '3');
    const page = parseInt(searchParams.get('page') || '1');
    const skip = (page - 1) * perPage;

    // Fetch blog posts from MongoDB
    const posts = await BlogPost.find({ status: 'published' })
      .sort({ date: -1 }) // Latest first
      .skip(skip)
      .limit(perPage)
      .select('title slug excerpt author date categories tags featuredImage')
      .lean(); // Use lean() for better performance

    // Transform the data to match our expected format
    const transformedPosts = posts.map((post) => ({
      id: (post as any)._id,
      title: (post as any).title,
      date: (post as any).date.toISOString(),
      excerpt: (post as any).excerpt,
      slug: (post as any).slug,
      featuredImage: (post as any).featuredImage ? 'exists' : null,
      author: (post as any).author,
      categories: (post as any).categories,
      tags: (post as any).tags
    }));

    return NextResponse.json(transformedPosts, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600', // Cache for 5 minutes
      },
    });

  } catch (error) {
    console.error('❌ Error fetching blog posts from MongoDB:', error);
    
    // More detailed error logging
    if (error instanceof Error) {
      console.error('Error name:', error.name);
      console.error('Error message:', error.message);
      console.error('Error stack:', error.stack);
    }
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch blog posts from database.',
        details: error instanceof Error ? error.message : 'Unknown error',
        timestamp: new Date().toISOString()
      },
      { status: 500 }
    );
  }
}
