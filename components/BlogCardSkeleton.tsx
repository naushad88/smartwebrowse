const BlogCardSkeleton = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg border border-gray-100 h-full overflow-hidden animate-pulse">
      {/* Image Skeleton */}
      <div className="relative h-48 overflow-hidden bg-gray-200 animate-pulse">
        <div className="w-full h-full bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200"></div>
      </div>
      
      {/* Content Skeleton */}
      <div className="p-6">
        {/* Meta Information Skeleton */}
        <div className="flex items-center space-x-4 mb-4">
          <div className="h-3 bg-gray-200 rounded w-20 animate-pulse"></div>
          <div className="h-3 bg-gray-200 rounded w-16 animate-pulse"></div>
        </div>
        
        {/* Title Skeleton */}
        <div className="space-y-2 mb-3">
          <div className="h-5 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-5 bg-gray-200 rounded w-3/4 animate-pulse"></div>
        </div>
        
        {/* Excerpt Skeleton */}
        <div className="space-y-2 mb-5">
          <div className="h-4 bg-gray-200 rounded w-full animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-5/6 animate-pulse"></div>
          <div className="h-4 bg-gray-200 rounded w-4/6 animate-pulse"></div>
        </div>
        
        {/* Read More Skeleton */}
        <div className="h-4 bg-gray-200 rounded w-24 animate-pulse"></div>
      </div>
    </div>
  );
};

export default BlogCardSkeleton;
