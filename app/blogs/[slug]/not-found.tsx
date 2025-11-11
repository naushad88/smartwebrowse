import Link from 'next/link';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="container-custom text-center">
        <div className="max-w-md mx-auto">
          <div className="mb-8">
            <div className="w-24 h-24 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-6">
              <i className="fas fa-search text-4xl text-primary-600"></i>
            </div>
            <h1 className="heading-2 mb-4 text-gray-900">Blog Post Not Found</h1>
            <p className="text-gray-600 mb-8">
              The blog post you're looking for doesn't exist or may have been moved.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/blogs" className="btn-primary">
              <i className="fas fa-arrow-left mr-2"></i>
              Back to Blog
            </Link>
            <Link href="/" className="btn-outline">
              <i className="fas fa-home mr-2"></i>
              Go Home
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}





