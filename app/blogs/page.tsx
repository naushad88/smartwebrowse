import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import BlogCardSkeleton from '@/components/BlogCardSkeleton';
import Pagination from '@/components/Pagination';
import type { BlogPost } from '@/types';

export const metadata: Metadata = {
  title: 'AI Blog | AI Services, Automation & AI Insights - Smartwebrowse India Private Limited',
  description: 'Stay updated with expert insights on AI services, automation, AI integration & AI transformation. Latest AI trends & best practices.',
  keywords: 'AI blog, AI services, automation insights, AI integration best practices, AI transformation',
  openGraph: {
    title: 'AI Blog | AI Services, Automation & AI Insights',
    description: 'Stay updated with expert insights on AI services, automation, AI integration & AI transformation. Latest AI trends & best practices.',
    url: 'https://www.smartwebrowse.com/blogs',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/blogs',
  },
};

interface BlogPageProps {
  searchParams: Promise<{ page?: string }>;
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const resolvedSearchParams = await searchParams;
  const page = parseInt(resolvedSearchParams.page || '1');
  
  let posts: BlogPost[] = [];
  let error: string | null = null;
  let totalPosts: number = 0;
  let totalPages: number = 0;
  
  try {
    // Fetch posts from MongoDB API
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.smartwebrowse.com';
    const response = await fetch(`${baseUrl}/api/blogs?page=${page}&per_page=12`, {
      cache: 'no-store' // Disable caching temporarily to fix featured images
    });
    
    if (!response.ok) {
      throw new Error(`API Error: ${response.status}`);
    }
    
    posts = await response.json();
    
    // If we got posts, calculate pagination
    if (posts.length > 0) {
      // Get total count from a separate API call
      const countResponse = await fetch(`${baseUrl}/api/blogs/count`, {
        cache: 'no-store'
      });
      
      if (countResponse.ok) {
        const countData = await countResponse.json();
        totalPosts = countData.total || posts.length;
      } else {
        // Fallback: estimate based on current page
        totalPosts = page * 12;
      }
      
      totalPages = Math.ceil(totalPosts / 12);
    } else {
      // Fallback: estimate based on current page
      totalPosts = page * 12;
      totalPages = Math.ceil(totalPosts / 12);
    }
    
    // Validate page number
    if (page > 1 && posts.length === 0) {
      throw new Error(`Page ${page} does not exist.`);
    }
    
    // If we're on the last page and have posts, adjust total pages
    if (posts.length > 0 && posts.length < 12 && page > 1) {
      totalPages = page;
    }
    
  } catch (err) {
    console.error('Error loading blog posts:', err);
    // Use fallback blog posts when API fails
    posts = [
      {
        id: 1,
        title: "AI-Powered Automation: Transforming Business Operations",
        slug: "ai-powered-automation-transforming-business",
        excerpt: "Learn how AI-powered automation can revolutionize your business operations and drive efficiency.",
        content: "AI-powered automation is transforming how businesses operate...",
        date: "2024-12-15T10:00:00Z",
        modified: "2024-12-15T10:00:00Z",
        author: { name: "Smartwebrowse India Private Limited Team", id: 1 },
        featuredImage: undefined,
        categories: [{ id: 1, name: "AI Services", slug: "ai-services" }],
        tags: [{ id: 1, name: "Automation", slug: "automation" }]
      },
      {
        id: 2,
        title: "Intelligent AI Support: 24/7 Automated Assistance",
        slug: "intelligent-ai-support-24-7-assistance",
        excerpt: "Discover how intelligent AI support systems provide round-the-clock assistance and improve customer experience.",
        content: "Intelligent AI support systems are revolutionizing customer service...",
        date: "2024-12-14T10:00:00Z",
        modified: "2024-12-14T10:00:00Z",
        author: { name: "Smartwebrowse India Private Limited Team", id: 1 },
        featuredImage: undefined,
        categories: [{ id: 2, name: "AI Support", slug: "ai-support" }],
        tags: [{ id: 2, name: "AI Support", slug: "ai-support" }]
      },
      {
        id: 3,
        title: "AI Analytics: Unlocking Business Insights with Machine Learning",
        slug: "ai-analytics-unlocking-business-insights",
        excerpt: "Explore how AI analytics and machine learning can unlock valuable business insights and drive data-driven decisions.",
        content: "AI analytics is transforming how businesses analyze data...",
        date: "2024-12-13T10:00:00Z",
        modified: "2024-12-13T10:00:00Z",
        author: { name: "Smartwebrowse India Private Limited Team", id: 1 },
        featuredImage: undefined,
        categories: [{ id: 3, name: "AI Analytics", slug: "ai-analytics" }],
        tags: [{ id: 3, name: "AI Analytics", slug: "ai-analytics" }]
      }
    ];
    totalPosts = posts.length;
    totalPages = 1;
    error = null; // Clear error since we have fallback content
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 pt-28 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 neural-pattern opacity-20"></div>
        <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10 text-center">
          <div
            className="inline-block mb-4"
          >
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
              Our Blog
            </span>
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
          >
            AI Insights & Updates
          </h1>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Stay updated with the latest insights on AI services, automation, AI integration, 
            and AI transformation from our expert team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          {error ? (
            <div className="text-center py-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                {(error as string).includes('does not exist') ? 'Page Not Found' : 'Error Loading Posts'}
              </h2>
              <p className="text-gray-600 mb-4">{error}</p>
              {(error as string).includes('does not exist') ? (
                <a href="/blogs" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg">
                  Go to First Page
                </a>
              ) : (
                <button 
                  onClick={() => window.location.reload()} 
                  className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg"
                >
                  Try Again
                </button>
              )}
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {posts.map((post) => (
                  <BlogCard key={post.id} post={post} />
                ))}
              </div>
              
              <Pagination 
                currentPage={page} 
                totalPages={totalPages}
                baseUrl="/blogs"
              />
            </>
          ) : !error ? (
            <>
              {/* Show skeleton loading state only when there's no error */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
                {Array.from({ length: 12 }).map((_, index) => (
                  <BlogCardSkeleton key={index} />
                ))}
              </div>
            </>
          ) : null}
        </div>
      </section>
    </div>
  );
}
