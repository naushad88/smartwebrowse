import { NextRequest, NextResponse } from 'next/server';
import BlogPost from '@/lib/models/BlogPost';
import connectDB from '@/lib/mongodb';

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ slug: string }> }
) {
  try {
    const resolvedParams = await params;
    await connectDB();
    
    const post = await BlogPost.findOne({ slug: resolvedParams.slug, status: 'published' });
    
    if (!post || !post.featuredImage) {
      return new NextResponse('Image not found', { status: 404 });
    }
    
    // Extract base64 data from data URL
    const base64Data = post.featuredImage.replace(/^data:image\/[a-z]+;base64,/, '');
    const buffer = Buffer.from(base64Data, 'base64');
    
    // Determine content type from the data URL
    const contentType = post.featuredImage.match(/data:image\/([a-z]+);base64,/)?.[1] || 'jpeg';
    
    return new NextResponse(buffer, {
      status: 200,
      headers: {
        'Content-Type': `image/${contentType}`,
        'Cache-Control': 'public, max-age=31536000, immutable',
      },
    });
  } catch (error) {
    console.error('❌ Error serving blog image:', error);
    return new NextResponse('Internal Server Error', { status: 500 });
  }
}
