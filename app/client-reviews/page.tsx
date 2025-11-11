'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import Head from 'next/head';

const clientReviews = [
  {
    id: 1,
    name: 'Karen C',
    position: 'Founder',
    company: 'Hapy Hemp',
    text: 'I had a great experience working with Smartwebrowse India Private Limited. They provided excellent communication and were always available promptly if something came up. I am extremely happy with their services and recommend using them if you need help with web development. They did a great job taking care of my websites, and I couldn\'t be happier. Thanks for everything, and definitely use them if you\'re reading this and need services.',
    rating: 5,
    service: 'Web Development',
    industry: 'Healthcare/CBD',
    platform: 'Google Reviews',
    date: '2024',
    profileImage: '/images/team/karen.jpg'
  },
  {
    id: 2,
    name: 'Simon Cook',
    position: 'Business Owner',
    company: 'Digital Solutions',
    text: 'Naushad was very quick with his responses and he helped me to restore my website very quickly. He was truly a lifesaver… Very professional….. & Very smart. I could tell that he knew what he was doing. He reassured me that he knew exactly what to do to fix my problem, and delivered exactly what he promised. I will be using him again if I ever have issues with my website, in the future!',
    rating: 5,
    service: 'Website Support',
    industry: 'Technology',
    platform: 'Google Reviews',
    date: '2024',
    profileImage: '/images/team/simon.jpg'
  },
  {
    id: 3,
    name: 'Sarah M.',
    position: 'Marketing Director',
    company: 'TechStart Inc.',
    text: 'Smartwebrowse India Private Limited delivered exceptional results for our cloud migration project. Their team was professional, knowledgeable, and exceeded our expectations. The project was completed on time and within budget. Highly recommended!',
    rating: 5,
    service: 'Cloud Migration',
    industry: 'Technology',
    platform: 'Clutch',
    date: '2024',
    profileImage: '/images/team/sarah.jpg'
  },
  {
    id: 4,
    name: 'Michael R.',
    position: 'CTO',
    company: 'FinTech Solutions',
    text: 'Working with Smartwebrowse India Private Limited on our cybersecurity implementation was outstanding. They demonstrated deep expertise in IAM and security compliance. Our security posture has improved significantly.',
    rating: 5,
    service: 'Cybersecurity',
    industry: 'Financial Services',
    platform: 'LinkedIn',
    date: '2024',
    profileImage: '/images/team/michael.jpg'
  },
  {
    id: 5,
    name: 'Jennifer L.',
    position: 'Product Manager',
    company: 'E-commerce Plus',
    text: 'The team at Smartwebrowse India Private Limited transformed our online store with their e-commerce expertise. The new platform is faster, more user-friendly, and has increased our conversion rates by 40%.',
    rating: 5,
    service: 'E-commerce Development',
    industry: 'Retail',
    platform: 'Facebook',
    date: '2024',
    profileImage: '/images/team/jennifer.jpg'
  },
  {
    id: 6,
    name: 'David K.',
    position: 'Operations Manager',
    company: 'Manufacturing Corp',
    text: 'Smartwebrowse India Private Limited implemented a comprehensive DevOps pipeline that streamlined our development process. Their automation solutions have reduced our deployment time by 70% and improved code quality.',
    rating: 5,
    service: 'DevOps Automation',
    industry: 'Manufacturing',
    platform: 'Clutch',
    date: '2024',
    profileImage: '/images/team/david.jpg'
  }
];

const videoReviews = [
  {
    id: 1,
    name: 'Brian B',
    position: 'Founder',
    company: 'Dance Louisville',
    videoUrl: 'https://www.youtube.com/embed/tjCUGgOvh5c',
    rating: 5
  },
  {
    id: 2,
    name: 'Irina T',
    position: 'Founder',
    company: 'Hapy Hemp',
    videoUrl: 'https://www.youtube.com/embed/ewcP46KG_co',
    rating: 5
  }
];

const platformReviews = [
  {
    platform: 'Google Reviews',
    rating: 4.9,
    totalReviews: 127,
    link: 'https://www.google.com/search?q=Robust+Softech+reviews',
    icon: 'fa-brands fa-google',
    color: 'from-blue-500 to-blue-600'
  },
  {
    platform: 'Clutch',
    rating: 5.0,
    totalReviews: 89,
    link: 'https://clutch.co/profile/robust-softech',
    icon: 'fa-solid fa-star',
    color: 'from-orange-500 to-orange-600'
  },
  {
    platform: 'Upwork',
    rating: 5.0,
    totalReviews: 156,
    link: 'https://www.upwork.com/agencies/robustsoftech/',
    icon: 'fa-solid fa-briefcase',
    color: 'from-green-500 to-green-600',
    badges: ['100% Success Rate', 'Top Rated Agency']
  },
  {
    platform: 'LinkedIn',
    rating: 4.8,
    totalReviews: 156,
    link: 'https://www.linkedin.com/company/robust-softech/reviews/',
    icon: 'fa-brands fa-linkedin',
    color: 'from-blue-600 to-blue-700'
  },
  {
    platform: 'Facebook',
    rating: 4.9,
    totalReviews: 203,
    link: 'https://www.facebook.com/robustsoftech/reviews/',
    icon: 'fa-brands fa-facebook',
    color: 'from-blue-700 to-blue-800'
  }
];

const teamProfiles = [
  {
    name: 'Ishpreet K.',
    role: 'Senior Full Stack Developer',
    location: 'Mohali, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated Plus',
    profileUrl: 'https://www.upwork.com/freelancers/~01example1',
    image: '/images/team/ishpreet.jpg',
    skills: ['React', 'Node.js', 'AWS', 'DevOps'],
    hourlyRate: '$45/hr'
  },
  {
    name: 'Sheeba P.',
    role: 'UI/UX Designer & Developer',
    location: 'Mau, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated',
    profileUrl: 'https://www.upwork.com/freelancers/~01example2',
    image: '/images/team/sheeba.jpg',
    skills: ['Figma', 'React', 'CSS', 'JavaScript'],
    hourlyRate: '$40/hr'
  },
  {
    name: 'Naushad A.',
    role: 'DevOps & Cloud Engineer',
    location: 'Delhi, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated Plus',
    profileUrl: 'https://www.upwork.com/freelancers/~01example3',
    image: '/images/team/naushad.jpg',
    skills: ['AWS', 'Docker', 'Kubernetes', 'Terraform'],
    hourlyRate: '$50/hr'
  },
  {
    name: 'Jaskamal S.',
    role: 'Backend Developer',
    location: 'Mohali, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated',
    profileUrl: 'https://www.upwork.com/freelancers/~01example4',
    image: '/images/team/jaskamal.jpg',
    skills: ['Python', 'Django', 'PostgreSQL', 'Redis'],
    hourlyRate: '$42/hr'
  },
  {
    name: 'Neha N.',
    role: 'Frontend Developer',
    location: 'Mohali, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated Plus',
    profileUrl: 'https://www.upwork.com/freelancers/~01example5',
    image: '/images/team/neha.jpg',
    skills: ['Vue.js', 'React', 'TypeScript', 'Tailwind'],
    hourlyRate: '$43/hr'
  },
  {
    name: 'Afreen S.',
    role: 'Mobile App Developer',
    location: 'Mau, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated',
    profileUrl: 'https://www.upwork.com/freelancers/~01example6',
    image: '/images/team/afreen.jpg',
    skills: ['React Native', 'Flutter', 'iOS', 'Android'],
    hourlyRate: '$48/hr'
  },
  {
    name: 'Rahul M.',
    role: 'Data Scientist',
    location: 'Delhi, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated Plus',
    profileUrl: 'https://www.upwork.com/freelancers/~01example7',
    image: '/images/team/rahul.jpg',
    skills: ['Python', 'Machine Learning', 'TensorFlow', 'SQL'],
    hourlyRate: '$55/hr'
  },
  {
    name: 'Priya S.',
    role: 'QA Engineer',
    location: 'Mohali, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated',
    profileUrl: 'https://www.upwork.com/freelancers/~01example8',
    image: '/images/team/priya.jpg',
    skills: ['Selenium', 'Jest', 'Cypress', 'Postman'],
    hourlyRate: '$38/hr'
  }
];

const renderStars = (rating: number) => {
  return (
    <div className="flex items-center space-x-1">
      {[...Array(5)].map((_, i) => (
        <i
          key={i}
          className={`fa-solid fa-star text-sm ${
            i < rating ? 'text-yellow-400' : 'text-gray-300'
          }`}
        ></i>
      ))}
    </div>
  );
};

export default function ClientReviewsPage() {
  return (
    <>
      <Head>
        <title>Client Reviews & Testimonials | Smartwebrowse India Private Limited</title>
        <meta name="description" content="Read authentic client reviews and testimonials from businesses worldwide. See why companies trust Smartwebrowse India Private Limited for cloud, cybersecurity, and development services." />
        <meta name="keywords" content="client reviews, testimonials, customer feedback, IT services reviews, cloud services feedback" />
        <link rel="canonical" href="https://www.smartwebrowse.com/client-reviews" />
        <meta property="og:title" content="Client Reviews & Testimonials | Smartwebrowse India Private Limited" />
        <meta property="og:description" content="Read authentic client reviews and testimonials from businesses worldwide. See why companies trust Smartwebrowse India Private Limited for cloud, cybersecurity, and development services." />
        <meta property="og:url" content="https://www.smartwebrowse.com/client-reviews" />
        <meta property="og:site_name" content="Smartwebrowse India Private Limited" />
        <meta property="og:type" content="website" />
      </Head>
      <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Client Reviews & Testimonials</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Discover why businesses across the globe trust Smartwebrowse India Private Limited for their digital transformation needs. 
            Read authentic reviews from our satisfied clients and see our team's professional profiles.
          </p>
        </div>
      </section>

      {/* Video Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">Client Video Testimonials</h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Watch our clients share their experience working with Smartwebrowse India Private Limited and the results we've delivered for their businesses.
            </p>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
            {videoReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 overflow-hidden hover:shadow-xl transition-shadow duration-300"
              >
                <div className="aspect-video bg-gray-100 relative">
                  <iframe
                    src={review.videoUrl}
                    title={`${review.name} Video Testimonial`}
                    className="w-full h-full"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <div>
                      <h3 className="font-bold text-gray-900 text-lg">{review.name}</h3>
                      <p className="text-sm text-gray-600">{review.position} at {review.company}</p>
                    </div>
                    <div className="flex items-center">
                      {renderStars(review.rating)}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Platform Ratings Overview */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">Our Ratings Across Platforms</h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We maintain excellent ratings across all major review platforms, demonstrating our commitment to quality and client satisfaction.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
            {platformReviews.map((platform, index) => (
              <motion.div
                key={platform.platform}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-shadow duration-300"
              >
                <div className={`w-16 h-16 rounded-full bg-gradient-to-r ${platform.color} flex items-center justify-center text-white text-2xl mx-auto mb-4`}>
                  <i className={platform.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{platform.platform}</h3>
                {platform.badges && (
                  <div className="mb-2 space-y-1">
                    {platform.badges.map((badge, badgeIndex) => (
                      <span key={badgeIndex} className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full font-medium">
                        {badge}
                      </span>
                    ))}
                  </div>
                )}
                <div className="flex items-center justify-center mb-3">
                  {renderStars(platform.rating)}
                  <span className="ml-2 text-sm text-gray-600">({platform.rating})</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">{platform.totalReviews} reviews</p>
                <Link
                  href={platform.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium text-sm transition-colors duration-200"
                >
                  View Reviews
                  <i className="fas fa-external-link-alt ml-2"></i>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Client Reviews */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">What Our Clients Say</h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Real feedback from real clients who have experienced our services firsthand.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {clientReviews.map((review, index) => (
              <motion.div
                key={review.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 hover:shadow-xl transition-all duration-300"
              >
                {/* Review Header */}
                <div className="flex items-start mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white font-bold text-lg mr-4">
                    {review.name.charAt(0)}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-bold text-gray-900">{review.name}</h4>
                    <p className="text-sm text-gray-600">{review.position} at {review.company}</p>
                    <div className="flex items-center mt-1">
                      {renderStars(review.rating)}
                      <span className="ml-2 text-xs text-gray-500">{review.platform}</span>
                    </div>
                  </div>
                </div>
                
                {/* Review Content */}
                <blockquote className="text-gray-700 mb-4 italic">
                  "{review.text}"
                </blockquote>
                
                {/* Review Footer */}
                <div className="border-t border-gray-100 pt-4">
                  <div className="flex items-center justify-between text-sm text-gray-600">
                    <span className="bg-primary-100 text-primary-800 px-3 py-1 rounded-full">
                      {review.service}
                    </span>
                    <span>{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Profiles */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">Meet Our Expert Team</h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our certified professionals are available for your projects with proven track records and excellent client feedback.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {teamProfiles.map((profile, index) => (
              <motion.div
                key={profile.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 text-center hover:shadow-xl transition-all duration-300"
              >
                {/* Profile Image */}
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                  {profile.name.charAt(0)}
                </div>
                
                {/* Profile Info */}
                <h3 className="font-bold text-gray-900 mb-1">{profile.name}</h3>
                <p className="text-sm text-gray-600 mb-3">{profile.role}</p>
                
                {/* Status Badges */}
                <div className="space-y-2 mb-4">
                  <span className="inline-block bg-green-100 text-green-800 text-xs px-2 py-1 rounded-full">
                    {profile.availability}
                  </span>
                  <span className="inline-block bg-blue-100 text-blue-800 text-xs px-2 py-1 rounded-full">
                    {profile.jobSuccess}
                  </span>
                  <span className="inline-block bg-purple-100 text-purple-800 text-xs px-2 py-1 rounded-full">
                    {profile.rating}
                  </span>
                </div>
                
                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap justify-center gap-1">
                    {profile.skills.slice(0, 3).map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 text-xs px-2 py-1 rounded"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
                
                {/* Rate */}
                <p className="text-lg font-bold text-primary-600 mb-4">{profile.hourlyRate}</p>
                
                {/* Profile Link */}
                <Link
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-full bg-primary-600 hover:bg-primary-700 text-white font-medium py-2 px-4 rounded-lg transition-colors duration-200"
                >
                  View Profile
                  <i className="fas fa-external-link-alt ml-2"></i>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16">
        <div className="container-custom text-center">
          <div className="relative overflow-hidden bg-gradient-to-r from-primary-500 to-primary-600 rounded-3xl p-12 shadow-2xl">
            {/* Background pattern with dots */}
            <div className="absolute inset-0 opacity-10">
              <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Work With Us?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
                Join hundreds of satisfied clients who have transformed their businesses with our expert services.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/contact" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Today
                </Link>
                <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View Our Work
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      </div>
    </>
  );
}
