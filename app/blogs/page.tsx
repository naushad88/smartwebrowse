import type { Metadata } from 'next';
import BlogCard from '@/components/BlogCard';
import BlogCardSkeleton from '@/components/BlogCardSkeleton';
import Pagination from '@/components/Pagination';
import type { BlogPost } from '@/types';

export const metadata: Metadata = {
  title: 'IT Blog | Cloud, Cybersecurity & DevOps Insights',
  description: 'Stay updated with expert insights on cloud technology, cybersecurity, DevOps & digital transformation. Latest IT trends & best practices.',
  keywords: 'IT blog, cloud technology, cybersecurity insights, DevOps best practices, digital transformation',
  openGraph: {
    title: 'IT Blog | Cloud, Cybersecurity & DevOps Insights',
    description: 'Stay updated with expert insights on cloud technology, cybersecurity, DevOps & digital transformation. Latest IT trends & best practices.',
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
        title: "Cloud Security Best Practices for Modern Businesses",
        slug: "cloud-security-best-practices",
        excerpt: "Learn essential cloud security strategies to protect your business data and infrastructure in today's digital landscape.",
        content: "Cloud security has become a critical concern for businesses of all sizes...",
        date: "2024-12-15T10:00:00Z",
        modified: "2024-12-15T10:00:00Z",
        author: { name: "Smartwebrowse India Private Limited Team", id: 1 },
        featuredImage: undefined,
        categories: [{ id: 1, name: "Cybersecurity", slug: "cybersecurity" }],
        tags: [{ id: 1, name: "Security", slug: "security" }]
      },
      {
        id: 2,
        title: "DevOps Automation: Streamlining Your Development Pipeline",
        slug: "devops-automation-streamlining-development-pipeline",
        excerpt: "Discover how DevOps automation can accelerate your development cycles and improve deployment reliability.",
        content: "DevOps automation is transforming how teams build, test, and deploy software...",
        date: "2024-12-14T10:00:00Z",
        modified: "2024-12-14T10:00:00Z",
        author: { name: "Smartwebrowse India Private Limited Team", id: 1 },
        featuredImage: undefined,
        categories: [{ id: 2, name: "DevOps", slug: "devops" }],
        tags: [{ id: 2, name: "Automation", slug: "automation" }]
      },
      {
        id: 3,
        title: "AI Integration in Business Applications",
        slug: "ai-integration-business-applications",
        excerpt: "Explore how artificial intelligence can enhance your business applications and drive innovation.",
        content: "Artificial intelligence is revolutionizing business applications across industries...",
        date: "2024-12-13T10:00:00Z",
        modified: "2024-12-13T10:00:00Z",
        author: { name: "Smartwebrowse India Private Limited Team", id: 1 },
        featuredImage: undefined,
        categories: [{ id: 3, name: "AI & Machine Learning", slug: "ai-machine-learning" }],
        tags: [{ id: 3, name: "AI", slug: "ai" }]
      }
    ];
    totalPosts = posts.length;
    totalPages = 1;
    error = null; // Clear error since we have fallback content
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          {/* Professional Title with Refined Typography */}
          <div className="mb-8">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light text-primary-900 mb-6 tracking-wide leading-tight">
              Our <span className="font-semibold text-primary-700">Blog</span>
            </h1>
            <div className="w-16 h-0.5 bg-primary-300 mx-auto rounded-full"></div>
          </div>
          
          {/* Professional Subtitle */}
          <p className="text-lg md:text-xl lg:text-2xl text-primary-700 max-w-3xl mx-auto leading-relaxed font-normal">
            Stay updated with the latest insights on cloud technology, cybersecurity, DevOps, 
            and digital transformation from our expert team.
          </p>
        </div>
      </section>

      {/* Blog Posts */}
      <section className="py-16">
        <div className="container-custom">

          {error ? (
            <div className="text-center py-16">
              <h2 className="heading-3 mb-4 text-gray-900">
                {(error as string).includes('does not exist') ? 'Page Not Found' : 'Error Loading Posts'}
              </h2>
              <p className="text-gray-600 mb-4">{error}</p>
              {(error as string).includes('does not exist') ? (
                <a href="/blogs" className="btn-primary">
                  Go to First Page
                </a>
              ) : (
                <button 
                  onClick={() => window.location.reload()} 
                  className="btn-primary"
                >
                  Try Again
                </button>
              )}
            </div>
          ) : posts.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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
