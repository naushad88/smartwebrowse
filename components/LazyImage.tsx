'use client';

import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';

interface LazyImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  className?: string;
  priority?: boolean;
  quality?: number;
  sizes?: string;
  placeholder?: 'blur' | 'empty';
  blurDataURL?: string;
}

const LazyImage: React.FC<LazyImageProps> = ({
  src,
  alt,
  width,
  height,
  fill = false,
  className = '',
  priority = false,
  quality = 75,
  sizes = '100vw',
  placeholder = 'empty',
  blurDataURL,
  ...props
}) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const imgRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.1,
        rootMargin: '50px',
      }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, []);

  if (fill) {
    return (
      <div ref={imgRef} className={`relative ${className}`}>
        {isInView && (
          <Image
            src={src}
            alt={alt}
            fill
            priority={priority}
            quality={quality}
            sizes={sizes}
            placeholder={placeholder}
            blurDataURL={blurDataURL}
            className={`transition-opacity duration-300 ${
              isLoaded ? 'opacity-100' : 'opacity-0'
            }`}
            onLoad={() => setIsLoaded(true)}
            {...props}
          />
        )}
        {!isLoaded && placeholder === 'blur' && blurDataURL && (
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: `url(${blurDataURL})`,
              filter: 'blur(10px)',
            }}
          />
        )}
      </div>
    );
  }

  return (
    <div ref={imgRef} className={className}>
      {isInView && (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          priority={priority}
          quality={quality}
          sizes={sizes}
          placeholder={placeholder}
          blurDataURL={blurDataURL}
          className={`transition-opacity duration-300 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          onLoad={() => setIsLoaded(true)}
          {...props}
        />
      )}
      {!isLoaded && placeholder === 'blur' && blurDataURL && (
        <div
          className="bg-cover bg-center"
          style={{
            backgroundImage: `url(${blurDataURL})`,
            filter: 'blur(10px)',
            width: width,
            height: height,
          }}
        />
      )}
    </div>
  );
};

export default LazyImage;

