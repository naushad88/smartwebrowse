'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { format } from 'date-fns';
import type { BlogPost } from '@/types';

interface BlogCardProps {
  post: BlogPost;
}

const BlogCard = ({ post }: BlogCardProps) => {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
      className="group"
    >
      <Link href={`/blogs/${post.slug}`} className="block h-full">
        <div className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group-hover:-translate-y-1 border border-gray-100 h-full overflow-hidden">
          {/* Featured Image */}
          <div className="relative h-48 overflow-hidden">
            {post.featuredImage ? (
              <Image
                src={`/api/blog-image/${post.slug}`}
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                priority={false}
                loading="lazy"
                onError={(e) => {
                  // Fallback to placeholder if image fails to load
                  const target = e.target as HTMLImageElement;
                  target.src = '/images/blog-placeholder.jpg';
                }}
              />
            ) : (
              <div className="w-full h-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center">
                <i className="fas fa-newspaper text-white text-4xl"></i>
              </div>
            )}
            
            {/* Category Badge */}
            {post.categories && post.categories.length > 0 && (
              <div className="absolute top-4 left-4">
                <span className="inline-block bg-primary-600 text-white text-xs font-medium px-3 py-1 rounded-full">
                  {typeof post.categories[0] === 'string' ? post.categories[0] : post.categories[0].name}
                </span>
              </div>
            )}
          </div>

          {/* Content */}
          <div className="p-6">
            {/* Meta Information */}
            <div className="flex items-center text-xs text-gray-500 mb-4">
              <span className="flex items-center">
                <i className="fas fa-calendar-alt mr-2 text-primary-500"></i>
                {format(new Date(post.date), 'MMM dd, yyyy')}
              </span>
              <span className="mx-3 text-gray-300">•</span>
              <span className="flex items-center">
                <i className="fas fa-user mr-2 text-primary-500"></i>
                {typeof post.author === 'string' ? post.author : (post.author?.name || 'Smartwebrowse India Private Limited Team')}
              </span>
            </div>

            {/* Title */}
            <h3 className="text-lg md:text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2 leading-tight mb-3">
              {post.title.replace(/<[^>]*>/g, '')}
            </h3>

            {/* Excerpt */}
            <p className="text-gray-600 mb-5 line-clamp-3 leading-relaxed text-sm">
              {post.excerpt}
            </p>

            {/* Tags */}
            {post.tags && post.tags.length > 0 && (
              <div className="flex flex-wrap gap-2 mb-4">
                {post.tags.slice(0, 3).map((tag, index) => (
                  <span
                    key={index}
                    className="inline-block bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                  >
                    #{typeof tag === 'string' ? tag : tag.name}
                  </span>
                ))}
              </div>
            )}

            {/* Read More */}
            <div className="flex items-center text-primary-600 font-semibold group-hover:text-primary-700 transition-colors duration-300 text-sm">
              Read More
              <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
            </div>
          </div>

          {/* Hover Effect Border */}
          <div className="absolute inset-0 rounded-xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300 pointer-events-none"></div>
        </div>
      </Link>
    </motion.article>
  );
};

export default BlogCard;
