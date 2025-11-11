'use client';

import React from 'react';
import Link from 'next/link';
import Head from 'next/head';

const clientReviews = [
  {
    id: 1,
    name: 'Karen C',
    position: 'Founder',
    company: 'Hapy Hemp',
    text: 'I had a great experience working with Smartwebrowse India Private Limited. They provided excellent communication and were always available promptly if something came up. I am extremely happy with their AI services and recommend using them if you need help with AI development. They did a great job taking care of my AI projects, and I couldn\'t be happier. Thanks for everything, and definitely use them if you\'re reading this and need AI services.',
    rating: 5,
    service: 'AI Development',
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
    text: 'Naushad was very quick with his responses and he helped me to implement AI automation very quickly. He was truly a lifesaver… Very professional….. & Very smart. I could tell that he knew what he was doing. He reassured me that he knew exactly what to do to fix my AI integration problem, and delivered exactly what he promised. I will be using him again if I ever have issues with my AI systems, in the future!',
    rating: 5,
    service: 'AI Integration',
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
    text: 'Smartwebrowse India Private Limited delivered exceptional results for our AI automation project. Their team was professional, knowledgeable, and exceeded our expectations. The AI solution was completed on time and within budget. Highly recommended!',
    rating: 5,
    service: 'AI Automation',
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
    text: 'Working with Smartwebrowse India Private Limited on our AI implementation was outstanding. They demonstrated deep expertise in AI systems and machine learning. Our AI capabilities have improved significantly.',
    rating: 5,
    service: 'AI Consulting',
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
    text: 'The team at Smartwebrowse India Private Limited transformed our business with their AI-powered solutions. The new AI platform is faster, more intelligent, and has increased our efficiency by 40%.',
    rating: 5,
    service: 'AI Solutions',
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
    text: 'Smartwebrowse India Private Limited implemented comprehensive AI automation that streamlined our operations. Their AI solutions have reduced our processing time by 70% and improved accuracy significantly.',
    rating: 5,
    service: 'AI Automation',
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
    link: 'https://www.google.com/search?q=Smartwebrowse+reviews',
    icon: 'fa-brands fa-google',
    color: 'from-blue-500 to-blue-600'
  },
  {
    platform: 'Clutch',
    rating: 5.0,
    totalReviews: 89,
    link: 'https://clutch.co/profile/smartwebrowse',
    icon: 'fa-solid fa-star',
    color: 'from-orange-500 to-orange-600'
  },
  {
    platform: 'Upwork',
    rating: 5.0,
    totalReviews: 156,
    link: 'https://www.upwork.com/agencies/smartwebrowse/',
    icon: 'fa-solid fa-briefcase',
    color: 'from-green-500 to-green-600',
    badges: ['100% Success Rate', 'Top Rated Agency']
  },
  {
    platform: 'LinkedIn',
    rating: 4.8,
    totalReviews: 156,
    link: 'https://www.linkedin.com/company/smartwebrowse/reviews/',
    icon: 'fa-brands fa-linkedin',
    color: 'from-blue-600 to-blue-700'
  },
  {
    platform: 'Facebook',
    rating: 4.9,
    totalReviews: 203,
    link: 'https://www.facebook.com/smartwebrowse/reviews/',
    icon: 'fa-brands fa-facebook',
    color: 'from-blue-700 to-blue-800'
  }
];

const teamProfiles = [
  {
    name: 'Ishpreet K.',
    role: 'Senior AI Engineer',
    location: 'Mohali, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated Plus',
    profileUrl: 'https://www.upwork.com/freelancers/~01example1',
    image: '/images/team/ishpreet.jpg',
    skills: ['AI/ML', 'Python', 'TensorFlow', 'AI Development'],
    hourlyRate: '$45/hr'
  },
  {
    name: 'Sheeba P.',
    role: 'AI Solutions Architect',
    location: 'Mau, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated',
    profileUrl: 'https://www.upwork.com/freelancers/~01example2',
    image: '/images/team/sheeba.jpg',
    skills: ['AI Strategy', 'Automation', 'AI Integration', 'ML'],
    hourlyRate: '$40/hr'
  },
  {
    name: 'Naushad A.',
    role: 'AI & Cloud Engineer',
    location: 'Delhi, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated Plus',
    profileUrl: 'https://www.upwork.com/freelancers/~01example3',
    image: '/images/team/naushad.jpg',
    skills: ['AI Infrastructure', 'MLOps', 'Cloud AI', 'AI DevOps'],
    hourlyRate: '$50/hr'
  },
  {
    name: 'Jaskamal S.',
    role: 'AI Backend Developer',
    location: 'Mohali, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated',
    profileUrl: 'https://www.upwork.com/freelancers/~01example4',
    image: '/images/team/jaskamal.jpg',
    skills: ['Python', 'AI APIs', 'ML Models', 'AI Services'],
    hourlyRate: '$42/hr'
  },
  {
    name: 'Neha N.',
    role: 'AI Frontend Developer',
    location: 'Mohali, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated Plus',
    profileUrl: 'https://www.upwork.com/freelancers/~01example5',
    image: '/images/team/neha.jpg',
    skills: ['React', 'AI UI', 'TypeScript', 'AI Dashboards'],
    hourlyRate: '$43/hr'
  },
  {
    name: 'Afreen S.',
    role: 'AI Mobile Developer',
    location: 'Mau, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated',
    profileUrl: 'https://www.upwork.com/freelancers/~01example6',
    image: '/images/team/afreen.jpg',
    skills: ['AI Mobile Apps', 'ML Integration', 'iOS AI', 'Android AI'],
    hourlyRate: '$48/hr'
  },
  {
    name: 'Rahul M.',
    role: 'AI Data Scientist',
    location: 'Delhi, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated Plus',
    profileUrl: 'https://www.upwork.com/freelancers/~01example7',
    image: '/images/team/rahul.jpg',
    skills: ['Machine Learning', 'AI Analytics', 'TensorFlow', 'AI Models'],
    hourlyRate: '$55/hr'
  },
  {
    name: 'Priya S.',
    role: 'AI QA Engineer',
    location: 'Mohali, India',
    availability: 'Available now',
    jobSuccess: '100% Job Success',
    rating: 'Top Rated',
    profileUrl: 'https://www.upwork.com/freelancers/~01example8',
    image: '/images/team/priya.jpg',
    skills: ['AI Testing', 'ML Validation', 'AI QA', 'Test Automation'],
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
        <meta name="description" content="Read authentic client reviews and testimonials from businesses worldwide. See why companies trust Smartwebrowse India Private Limited for AI services, automation, and AI consulting." />
        <meta name="keywords" content="client reviews, testimonials, customer feedback, AI services reviews, automation feedback" />
        <link rel="canonical" href="https://www.smartwebrowse.com/client-reviews" />
        <meta property="og:title" content="Client Reviews & Testimonials | Smartwebrowse India Private Limited" />
        <meta property="og:description" content="Read authentic client reviews and testimonials from businesses worldwide. See why companies trust Smartwebrowse India Private Limited for AI services, automation, and AI consulting." />
        <meta property="og:url" content="https://www.smartwebrowse.com/client-reviews" />
        <meta property="og:site_name" content="Smartwebrowse India Private Limited" />
        <meta property="og:type" content="website" />
      </Head>
      
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
        {/* Hero Section */}
        <section className="relative py-20 md:py-24 pt-28 overflow-hidden">
          {/* Background Patterns */}
          <div className="absolute inset-0 neural-pattern opacity-20"></div>
          <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

          <div className="container-custom relative z-10">
            <div className="max-w-4xl mx-auto text-center">
              <div className="inline-block mb-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                  Client Reviews
                </span>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Client Reviews & Testimonials
              </h1>
              <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
                Discover why businesses across the globe trust Smartwebrowse India Private Limited for their AI transformation needs. 
                Read authentic reviews from our satisfied clients and see our team's professional profiles.
              </p>
            </div>
          </div>
        </section>

        {/* Video Reviews Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 neural-pattern opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Client Video Testimonials
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Watch our clients share their experience working with Smartwebrowse India Private Limited and the results we've delivered for their businesses.
              </p>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
              {videoReviews.map((review, index) => (
                <div
                  key={review.id}
                  className="card-ai overflow-hidden hover:shadow-xl transition-all duration-300"
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
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform Ratings Overview */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Our Ratings Across Platforms
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We maintain excellent ratings across all major review platforms, demonstrating our commitment to quality and client satisfaction.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
              {platformReviews.map((platform, index) => (
                <div
                  key={platform.platform}
                  className="card-ai p-6 text-center hover:-translate-y-2 transition-all duration-300"
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
                    className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-200"
                  >
                    View Reviews
                    <i className="fas fa-external-link-alt ml-2"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Client Reviews */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 neural-pattern opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                What Our Clients Say
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Real feedback from real clients who have experienced our AI services firsthand.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {clientReviews.map((review, index) => (
                <div
                  key={review.id}
                  className="card-ai p-6 hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Review Header */}
                  <div className="flex items-start mb-4">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-lg mr-4">
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
                  <div className="border-t border-gray-200 pt-4">
                    <div className="flex items-center justify-between text-sm text-gray-600">
                      <span className="bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-800 px-3 py-1 rounded-full border border-blue-200">
                        {review.service}
                      </span>
                      <span>{review.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Profiles */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 circuit-pattern opacity-10"></div>
          <div className="container-custom relative z-10">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Meet Our Expert AI Team
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Our certified AI professionals are available for your projects with proven track records and excellent client feedback.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {teamProfiles.map((profile, index) => (
                <div
                  key={profile.name}
                  className="card-ai p-6 text-center hover:-translate-y-2 transition-all duration-300"
                >
                  {/* Profile Image */}
                  <div className="w-20 h-20 rounded-full bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
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
                  <p className="text-lg font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-4">{profile.hourlyRate}</p>
                  
                  {/* Profile Link */}
                  <Link
                    href={profile.profileUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-full bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-medium py-2 px-4 rounded-lg transition-all duration-200"
                  >
                    View Profile
                    <i className="fas fa-external-link-alt ml-2"></i>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 md:py-20 relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
          <div className="absolute inset-0 neural-pattern opacity-20"></div>
          <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
          
          {/* Animated Gradient Orbs */}
          <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
          <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
          
          <div className="container-custom relative z-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Ready to Work With Us?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Join hundreds of satisfied clients who have transformed their businesses with our expert AI services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/contact" className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                Get Started Today
              </Link>
              <Link href="/portfolio" className="inline-flex items-center justify-center border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                View Our Work
              </Link>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
