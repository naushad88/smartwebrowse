import { NextRequest, NextResponse } from 'next/server';
import BlogPost from '@/lib/models/BlogPost';
import connectDB from '@/lib/mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    await connectDB();
    
    const { slug } = await params;

    // Fetch blog post from MongoDB by slug
    const post = await BlogPost.findOne({ 
      slug: slug,
      status: 'published' 
    }).lean();

    if (!post) {
      return NextResponse.json(
        { error: 'Blog post not found' },
        { status: 404 }
      );
    }

    // Transform the data with proper type assertion
    const transformedPost = {
      id: (post as any)._id,
      title: (post as any).title,
      slug: (post as any).slug,
      content: (post as any).content,
      excerpt: (post as any).excerpt,
      featuredImage: (post as any).featuredImage,
      author: (post as any).author,
      date: (post as any).date.toISOString(),
      categories: (post as any).categories,
      tags: (post as any).tags
    };

    return NextResponse.json(transformedPost, {
      headers: {
        'Cache-Control': 'public, s-maxage=300, stale-while-revalidate=600',
      },
    });

  } catch (error) {
    console.error('❌ Error fetching blog post from MongoDB:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to fetch blog post from database.',
        details: error instanceof Error ? error.message : 'Unknown error'
      },
      { status: 500 }
    );
  }
}
