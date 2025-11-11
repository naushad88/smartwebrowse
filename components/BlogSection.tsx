'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
  featuredImage: string;
  slug: string;
}

// Fallback blog posts that will be replaced by real data when available
const fallbackPosts: BlogPost[] = [
  {
    id: 1,
    title: "AI-Powered Automation: Transforming Business Operations",
    excerpt: "Learn how AI automation can help you streamline operations, reduce costs, and improve efficiency across your business processes.",
    date: "2025-08-22",
    featuredImage: "/images/blog-placeholder.jpg",
    slug: "ai-powered-automation-transforming-business-operations"
  },
  {
    id: 2,
    title: "Intelligent AI Support: 24/7 Automated Assistance",
    excerpt: "Discover how AI-powered support systems can provide round-the-clock assistance, intelligent problem-solving, and enhanced customer experiences.",
    date: "2025-08-21",
    featuredImage: "/images/blog-placeholder.jpg",
    slug: "intelligent-ai-support-24-7-automated-assistance"
  },
  {
    id: 3,
    title: "AI Analytics: Unlocking Business Insights with Machine Learning",
    excerpt: "Essential guide to leveraging AI analytics for data-driven decision making, predictive insights, and business intelligence.",
    date: "2025-08-20",
    featuredImage: "/images/blog-placeholder.jpg",
    slug: "ai-analytics-unlocking-business-insights"
  }
];

export default function BlogSection() {
  const [featuredPosts, setFeaturedPosts] = useState<BlogPost[]>(fallbackPosts);
  const [isLoaded, setIsLoaded] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchLatestBlogs = async () => {
      try {
        console.log('🔄 Fetching latest blogs from API...');
        const baseUrl = typeof window !== 'undefined' ? window.location.origin : '';
        const response = await fetch(`${baseUrl}/api/blogs?per_page=3&t=${Date.now()}`);
        
        if (response.ok) {
          const posts = await response.json();
          console.log('✅ API Response:', posts);
          
          if (posts && posts.length > 0) {
            // Process the posts - use image API endpoint for base64 images stored in MongoDB
            const processedPosts = posts.map((post: any) => ({
              id: post.id,
              title: post.title,
              excerpt: post.excerpt,
              date: post.date,
              featuredImage: post.featuredImage ? `/api/blog-image/${post.slug}` : '/images/blog-placeholder.jpg',
              slug: post.slug
            }));
            console.log('📝 Processed posts:', processedPosts);
            console.log('🖼️ First post featured image length:', processedPosts[0]?.featuredImage?.length);
            setFeaturedPosts(processedPosts);
            setIsLoaded(true);
            setError(null);
          } else {
            console.log('⚠️ No posts returned from API, keeping fallback posts');
            setIsLoaded(true);
            setError('No posts found');
          }
        } else {
          const errorData = await response.text();
          console.error('❌ API Error:', response.status, response.statusText, errorData);
          setIsLoaded(true);
          setError(`API Error: ${response.status} - ${errorData}`);
        }
      } catch (error) {
        console.error('❌ Error fetching blog posts:', error);
        setIsLoaded(true);
        setError('Failed to fetch blog posts');
      }
    };

    fetchLatestBlogs();
  }, []);

  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <div className="text-center mb-16">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12">
            <div className="text-left md:text-center mb-6 md:mb-0">
              <h2 className="heading-2 mb-4 text-gray-900">
                <span className="text-primary-600">Explore</span> Our Insightful Blogs
              </h2>
            </div>
            <Link 
              href="/blogs" 
              className="btn-primary text-primary-600 bg-white border-2 border-primary-600 hover:bg-primary-600 hover:text-white transition-all duration-300"
            >
              View all blogs
            </Link>
          </div>
        </div>

        {/* Debug Info */}
        {error && (
          <div className="mb-4 p-4 bg-red-100 border border-red-300 rounded-lg">
            <p className="text-red-700">Error: {error}</p>
          </div>
        )}

        {/* Loading State */}
        {!isLoaded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg overflow-hidden animate-pulse">
                <div className="w-full h-64 bg-gray-200"></div>
                <div className="p-6">
                  <div className="h-4 bg-gray-200 rounded mb-3"></div>
                  <div className="h-3 bg-gray-200 rounded mb-2"></div>
                  <div className="h-3 bg-gray-200 rounded mb-4"></div>
                  <div className="flex justify-between">
                    <div className="h-3 bg-gray-200 rounded w-20"></div>
                    <div className="h-3 bg-gray-200 rounded w-16"></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* Blog Posts */}
        {isLoaded && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredPosts.map((post, index) => {
              console.log(`🖼️ Rendering post ${index}:`, post.title, 'Image length:', post.featuredImage?.length);
              return (
            <div
              key={post.id}
              className="group bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden hover:-translate-y-2"
            >
              {/* Blog Image */}
              <div className="relative overflow-hidden">
                <Image
                  src={`/api/blog-image/${post.slug}`}
                  alt={post.title}
                  width={400}
                  height={256}
                  className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                  onError={(e) => {
                    // Fallback to placeholder if image fails to load
                    const target = e.target as HTMLImageElement;
                    target.src = '/images/blog-placeholder.jpg';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              {/* Blog Content */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900 mb-3 line-clamp-2 group-hover:text-primary-600 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-gray-600 text-sm mb-4 line-clamp-3">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-end">
                  <Link 
                    href={`/blogs/${post.slug}`}
                    className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline transition-all duration-200"
                  >
                    Read More →
                  </Link>
                </div>
              </div>
            </div>
            );
          })}
          </div>
        )}
      </div>
    </section>
  );
}