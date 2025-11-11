import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { format } from 'date-fns';
import Link from 'next/link';

interface BlogPostPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: BlogPostPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.smartwebrowse.com';
    const response = await fetch(`${baseUrl}/api/blogs/${resolvedParams.slug}`, {
      next: { revalidate: 300 }
    });
    
    if (!response.ok) {
      return {
        title: 'Post Not Found | Smartwebrowse India Private Limited',
        description: 'The requested blog post could not be found.',
      };
    }
    
    const post = await response.json();
    
    return {
      title: `${post.title} | Smartwebrowse India Private Limited Blog`,
      description: post.excerpt,
      openGraph: {
        title: post.title,
        description: post.excerpt,
        url: `/blogs/${post.slug}`,
        siteName: 'Smartwebrowse India Private Limited',
        type: 'article',
        publishedTime: post.date,
        authors: [post.author || 'Smartwebrowse India Private Limited Team'],
        tags: post.tags || [],
      },
      alternates: {
        canonical: `https://www.smartwebrowse.com/blogs/${post.slug}`,
      },
    };
  } catch (error) {
    return {
      title: 'Post Not Found | Smartwebrowse India Private Limited',
      description: 'The requested blog post could not be found.',
    };
  }
}

export async function generateStaticParams() {
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.smartwebrowse.com';
    const response = await fetch(`${baseUrl}/api/blogs?per_page=100`, {
      next: { revalidate: 3600 } // Cache for 1 hour
    });
    
    if (!response.ok) {
      return [];
    }
    
    const posts = await response.json();
    return posts.map((post: any) => ({
      slug: post.slug,
    }));
  } catch (error) {
    console.error('Error generating static params:', error);
    return [];
  }
}

export default async function BlogPostPage({ params }: BlogPostPageProps) {
  const resolvedParams = await params;
  
  try {
    const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://www.smartwebrowse.com';
    const response = await fetch(`${baseUrl}/api/blogs/${resolvedParams.slug}`, {
      next: { revalidate: 300 }
    });
    
    if (!response.ok) {
      notFound();
    }
    
    const post = await response.json();

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <div className="max-w-5xl mx-auto">
            {/* Breadcrumb */}
            <nav className="mb-6 text-sm">
              <ol className="flex items-center justify-center space-x-3">
                <li>
                  <Link href="/" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium">
                    Home
                  </Link>
                </li>
                <li className="text-primary-500">
                  <i className="fas fa-chevron-right text-xs"></i>
                </li>
                <li>
                  <Link href="/blogs" className="text-primary-600 hover:text-primary-800 transition-colors duration-200 font-medium">
                    Blog
                  </Link>
                </li>
                <li className="text-primary-500">
                  <i className="fas fa-chevron-right text-xs"></i>
                </li>
                <li className="text-primary-900 font-semibold truncate max-w-xs md:max-w-md lg:max-w-lg">
                  {post.title}
                </li>
              </ol>
            </nav>

            {/* Title */}
            <h3 className="heading-3 mb-8 text-primary-900 leading-tight">{post.title}</h3>
            
            {/* Meta Information */}
            <div className="flex flex-wrap items-center justify-center gap-8 text-primary-700 text-base">
              <span className="flex items-center bg-primary-100 px-4 py-2 rounded-full">
                <i className="fas fa-calendar-alt mr-3 text-primary-600"></i>
                {format(new Date(post.date), 'MMMM dd, yyyy')}
              </span>
              <span className="flex items-center bg-primary-100 px-4 py-2 rounded-full">
                <i className="fas fa-user mr-3 text-primary-600"></i>
                {post.author}
              </span>
              {post.categories.length > 0 && (
                <span className="flex items-center bg-primary-100 px-4 py-2 rounded-full">
                  <i className="fas fa-folder mr-3 text-primary-600"></i>
                  {post.categories[0]}
                </span>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Blog Post Content */}
      <section className="py-12 bg-white">
        <div className="container-custom">
          <div className="max-w-4xl mx-auto">
            {/* Featured Image */}
            {post.featuredImage && (
              <div className="mb-8">
                <img
                  src={`/api/blog-image/${post.slug}`}
                  alt={post.title}
                  className="w-full h-80 md:h-96 object-cover rounded-2xl shadow-2xl"
                />
              </div>
            )}

            {/* Content */}
            <article className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
              <div 
                className="blog-content"
                style={{
                  maxWidth: '100%',
                  overflowWrap: 'break-word',
                  wordWrap: 'break-word',
                  wordBreak: 'break-word',
                  hyphens: 'auto'
                }}
                dangerouslySetInnerHTML={{ __html: post.content }}
              />
            </article>

            {/* Page-specific styles for content width */}
            <style dangerouslySetInnerHTML={{
              __html: `
                .blog-content * {
                  max-width: 100% !important;
                  box-sizing: border-box !important;
                }
                
                .blog-content {
                  word-wrap: break-word !important;
                  overflow-wrap: break-word !important;
                }
                
                .blog-content img {
                  max-width: 100% !important;
                  height: auto !important;
                  display: block !important;
                  margin: 1.5rem auto !important;
                }
                
                .blog-content table {
                  width: 100% !important;
                  max-width: 100% !important;
                  table-layout: auto !important;
                  word-wrap: break-word !important;
                  overflow-wrap: break-word !important;
                  border-collapse: collapse !important;
                  margin: 1rem 0 !important;
                  display: table !important;
                }
                
                .blog-content table td,
                .blog-content table th {
                  word-wrap: break-word !important;
                  overflow-wrap: break-word !important;
                  word-break: break-word !important;
                  padding: 0.5rem !important;
                  border: 1px solid #e5e7eb !important;
                  vertical-align: top !important;
                }
                
                .blog-content table th {
                  background-color: #f9fafb !important;
                  font-weight: 600 !important;
                }
                
                .blog-content table + * {
                  margin-top: 2rem !important;
                }
                
                .blog-content h1,
                .blog-content h2,
                .blog-content h3,
                .blog-content h4 {
                  margin-top: 2rem !important;
                  margin-bottom: 1rem !important;
                }
                
                .blog-content pre,
                .blog-content code {
                  max-width: 100% !important;
                  overflow-x: auto !important;
                  white-space: pre-wrap !important;
                  word-wrap: break-word !important;
                }
                
                .blog-content iframe,
                .blog-content video,
                .blog-content embed,
                .blog-content object {
                  max-width: 100% !important;
                  height: auto !important;
                }
                
                .blog-content div,
                .blog-content span,
                .blog-content p,
                .blog-content h1,
                .blog-content h2,
                .blog-content h3,
                .blog-content h4,
                .blog-content h5,
                .blog-content h6 {
                  max-width: 100% !important;
                  overflow-wrap: break-word !important;
                  word-wrap: break-word !important;
                }
              `
            }} />

            {/* Tags */}
            {post.tags.length > 0 && (
              <div className="mt-12 pt-6 border-t border-gray-200 bg-gray-50 rounded-2xl p-6">
                <h4 className="heading-4 mb-4 text-gray-900 text-center">Related Tags</h4>
                <div className="flex flex-wrap justify-center gap-3">
                  {post.tags.map((tag: string, index: number) => (
                    <span
                      key={index}
                      className="inline-block bg-white text-primary-600 px-3 py-2 rounded-full text-sm font-medium border border-primary-200 hover:bg-primary-50 hover:border-primary-300 transition-all duration-200 shadow-sm"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Client Success Story */}
            <div className="mt-12 pt-6 border-t border-gray-200 bg-white rounded-2xl p-6 shadow-lg">
              <div className="text-center">
                <Link href="/client-reviews" className="text-primary-600 hover:text-primary-700 underline font-medium mb-4 inline-block">
                  Client Success Story
                </Link>
                <h3 className="heading-3 mb-6 text-gray-900">How Smartwebrowse India Private Limited Helps You Build with Quality from Day One</h3>
                <p className="text-gray-600 mb-6">We work alongside your developers to:</p>
                <ul className="text-left max-w-2xl mx-auto mb-6 space-y-2">
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Define test coverage goals</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Choose the right tools for your stack and team size</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Automate where it helps, and guide where manual testing adds value</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Catch issues early, not in production</span>
                  </li>
                  <li className="flex items-start">
                    <span className="w-2 h-2 bg-primary-600 rounded-full mt-2 mr-3 flex-shrink-0"></span>
                    <span>Scale QA as your product scales</span>
                  </li>
                </ul>
                <p className="text-gray-600 mb-8">Whether it's your first app or your fifth platform launch, we embed testing where it matters — at the start.</p>
                <Link href="/get-a-quote" className="text-primary-600 hover:text-primary-700 underline font-bold text-lg">
                  Book a free Consultation Now!
                </Link>
              </div>
            </div>

            {/* You Might Also Like */}
            <div className="mt-12 pt-6 border-t border-gray-200 bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="heading-3 mb-8 text-center text-gray-900">You Might Also Like</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* Related Blog Post 1 */}
                <div className="group bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-shield-alt text-primary-600 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">Accessibility Testing That Makes Your App Usable for Everyone</h4>
                      <p className="text-sm text-gray-500">August 21, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Learn how to make your applications accessible to users with disabilities and improve overall usability.</p>
                  <Link href="/blogs/accessibility-testing-that-makes-your-app-usable-for-everyone" className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline">
                    Read More <i className="fas fa-arrow-right ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>

                {/* Related Blog Post 2 */}
                <div className="group bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-mobile-alt text-primary-600 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">Testing Mobile Apps Across Devices and Platforms</h4>
                      <p className="text-sm text-gray-500">August 19, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Comprehensive guide to testing mobile applications across different devices, operating systems, and screen sizes.</p>
                  <Link href="/blogs/testing-mobile-apps-across-devices-and-platforms" className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline">
                    Read More <i className="fas fa-arrow-right ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>

                {/* Related Blog Post 3 */}
                <div className="group bg-gray-50 rounded-xl p-6 hover:bg-primary-50 transition-all duration-300 hover:shadow-lg">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-lg flex items-center justify-center mr-4">
                      <i className="fas fa-plug text-primary-600 text-lg"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">How to Ensure Stability When Testing Third Party Integrations and APIs</h4>
                      <p className="text-sm text-gray-500">August 20, 2025</p>
                    </div>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">Best practices for testing third-party integrations and APIs to ensure system stability and reliability.</p>
                  <Link href="/blogs/how-to-ensure-stability-when-testing-third-party-integrations-and-apis" className="text-primary-600 hover:text-primary-700 font-medium text-sm group-hover:underline">
                    Read More <i className="fas fa-arrow-right ml-1 group-hover:translate-x-1 transition-transform"></i>
                  </Link>
                </div>
              </div>
            </div>

            {/* Author Info */}
            <div className="mt-12 pt-6 border-t border-gray-200 bg-gradient-to-r from-primary-50 to-accent-50 rounded-2xl p-6">
              <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center text-white text-3xl font-bold shadow-lg">
                  {(typeof post.author === 'string' ? post.author : post.author?.name || 'R').charAt(0)}
                </div>
                <div className="text-center md:text-left">
                  <h4 className="heading-4 text-gray-900 mb-2">{typeof post.author === 'string' ? post.author : (post.author?.name || 'Smartwebrowse India Private Limited Team')}</h4>
                  <p className="text-gray-600 text-lg">Author at Smartwebrowse India Private Limited</p>
                  <p className="text-gray-500 text-sm mt-2">Expert in technology and digital transformation</p>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="mt-12 pt-6 border-t border-gray-200 bg-white rounded-2xl p-6 shadow-lg">
              <div className="flex flex-col sm:flex-row justify-between gap-6">
                <Link 
                  href="/blogs" 
                  className="btn-outline flex items-center justify-center group"
                >
                  <i className="fas fa-arrow-left mr-3 group-hover:-translate-x-1 transition-transform duration-200"></i>
                  Back to Blog
                </Link>
                <Link 
                  href="/get-a-quote" 
                  className="btn-primary flex items-center justify-center group"
                >
                  Get in Touch
                  <i className="fas fa-arrow-right ml-3 group-hover:translate-x-1 transition-transform duration-200"></i>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
}
