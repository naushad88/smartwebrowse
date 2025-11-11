'use client';

import Image from 'next/image';
import Link from 'next/link';
import AdsAnalytics from '@/components/AdsAnalytics';
import MathCaptcha from '@/components/MathCaptcha';
import { useState, useEffect } from 'react';

// Declare global types for tracking scripts
declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    fbq: (...args: any[]) => void;
  }
}

export default function AdsLandingClient() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    services: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);
  const [captchaNum1, setCaptchaNum1] = useState(0);
  const [captchaNum2, setCaptchaNum2] = useState(0);
  const [captchaAnswer, setCaptchaAnswer] = useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // Generate captcha
  const generateCaptcha = () => {
    const num1 = Math.floor(Math.random() * 9) + 1;
    const num2 = Math.floor(Math.random() * 9) + 1;
    setCaptchaNum1(num1);
    setCaptchaNum2(num2);
    setCaptchaAnswer('');
    setIsCaptchaValid(false);
  };

  // Handle captcha input
  const handleCaptchaChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCaptchaAnswer(value);
    
    if (value === '') {
      setIsCaptchaValid(false);
      return;
    }
    
    const answer = parseInt(value);
    const correctAnswer = captchaNum1 * captchaNum2;
    
    if (answer === correctAnswer) {
      setIsCaptchaValid(true);
    } else {
      setIsCaptchaValid(false);
    }
  };

  // Initialize captcha on component mount
  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!isCaptchaValid) {
      alert('Please complete the verification to submit the form.');
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      // Track conversion immediately (don't wait for API)
      if (typeof window !== 'undefined') {
        // Google Ads conversion tracking
        if (window.gtag) {
          window.gtag('event', 'conversion', {
            'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
            'value': 1.0,
            'currency': 'USD'
          });
        }

        // Facebook Pixel conversion tracking
        if (window.fbq) {
          window.fbq('track', 'Lead', {
            content_name: 'Free Consultation Request',
            content_category: 'IT Services'
          });
        }
      }

      // Redirect immediately for better UX
      window.location.href = '/ads-landing/thank-you';

      // Send form data to API in background (don't wait for response)
      fetch('/api/ads-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      }).catch(error => {
        console.error('Background form submission error:', error);
        // Could add retry logic or fallback here if needed
      });

    } catch (error) {
      console.error('Error submitting form:', error);
      setIsSubmitting(false);
      alert('There was an error submitting your form. Please try again or contact us directly.');
    }
  };

  const services = [
    {
      title: "Cybersecurity & IAM",
      description: "Protect your business with enterprise-grade security solutions",
      icon: "fas fa-shield-alt",
      features: ["IAM Setup & Auditing", "SSO & MFA Integration", "Compliance Support", "Security Assessment"],
      link: "/services/cybersecurity-services",
      highlight: true,
      highlightText: "IAM Services"
    },
    {
      title: "Cloud Services",
      description: "Scalable cloud solutions across AWS, Azure & Google Cloud",
      icon: "fas fa-cloud",
      features: ["Cloud Migration", "Cost Optimization", "Multi-Cloud Strategy", "24/7 Support"],
      link: "/services/cloud-services",
      highlight: true,
      highlightText: "Cloud Migration & Support"
    },
    {
      title: "AI & Web Development",
      description: "Custom applications and AI integration for digital growth",
      icon: "fas fa-code",
      features: ["Custom Web Apps", "AI Integration", "Mobile Development", "API Development"],
      link: "/services/ai-web-development"
    },
    {
      title: "DevOps & Automation",
      description: "Streamline operations with CI/CD and infrastructure automation",
      icon: "fas fa-cogs",
      features: ["CI/CD Pipelines", "Infrastructure as Code", "Monitoring & Logging", "Performance Optimization"],
      link: "/services/devops-automation-services"
    },
    {
      title: "Mobile App Development",
      description: "Native and cross-platform mobile solutions for iOS and Android",
      icon: "fas fa-mobile-alt",
      features: ["iOS Development", "Android Development", "Cross-Platform", "Custom Solutions"],
      link: "/services/mobile-app-development"
    },
    {
      title: "Digital Marketing",
      description: "Data-driven marketing solutions to grow your business",
      icon: "fas fa-chart-line",
      features: ["SEO Optimization", "Content Marketing", "Social Media", "Analytics & Reporting"],
      link: "/services/digital-marketing"
    },
    {
      title: "Application Testing",
      description: "Comprehensive QA and testing services for quality assurance",
      icon: "fas fa-vial",
      features: ["Automated Testing", "Performance Testing", "Security Testing", "QA Optimization"],
      link: "/services/application-testing"
    },
    {
      title: "IT Services & Support",
      description: "24/7 IT support and infrastructure management services",
      icon: "fas fa-headset",
      features: ["24/7 IT Support", "Help Desk Services", "Network Management", "Infrastructure Support"],
      link: "/services/it-services-support"
    }
  ];

  const trustSignals = [
    { icon: "fas fa-certificate", text: "ISO 27001 Certified" },
    { icon: "fas fa-globe", text: "15+ Countries Served" },
    { icon: "fas fa-users", text: "500+ Happy Clients" },
    { icon: "fas fa-clock", text: "12+ Years Experience" }
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

  const scrollToContactForm = () => {
    const element = document.getElementById('contact-form');
    if (element) {
      element.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Google Ads & Facebook Ads Tracking Pixels */}
      <AdsAnalytics />
      
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image 
            src="/images/Ban1.jpg" 
            alt="IT Solutions Background" 
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover opacity-20"
          />
        </div>
        
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary-900/90 via-primary-800/85 to-primary-700/90"></div>
        
        {/* Content */}
        <div className="relative z-10 container-custom text-center text-white px-4">
          <div className="max-w-5xl mx-auto">
            {/* Trust Signals */}
            <div className="mb-6">
              <span className="inline-block bg-white/20 backdrop-blur-sm px-4 py-2 rounded-full text-sm font-medium border border-white/30">
                Trusted IT Solutions Partner for Businesses in the USA, Japan, Ireland & Beyond
              </span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold font-heading leading-tight mb-6 text-white">
              Transform Your Business with
              <span className="block text-accent-400">Expert IT Solutions</span>
            </h1>

            {/* Sub-headline */}
            <p className="text-xl md:text-2xl text-gray-200 mb-8 max-w-4xl mx-auto leading-relaxed">
              Get enterprise-grade cybersecurity, cloud migration, and digital transformation services 
              that drive growth and secure your business future.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Link 
                href="#contact-form" 
                className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Free Consultation
              </Link>
              <Link 
                href="#services" 
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300"
              >
                View Our Services
              </Link>
            </div>

            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl mx-auto">
              {trustSignals.map((signal, index) => (
                <div key={index} className="bg-white/10 backdrop-blur-sm rounded-lg p-3 border border-white/20">
                  <div className="text-2xl mb-2">
                    <i className={signal.icon}></i>
                  </div>
                  <p className="text-sm font-medium text-gray-200">{signal.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Comprehensive IT Solutions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We deliver cutting-edge technology solutions that drive growth, enhance security,
              and streamline operations for businesses worldwide.
            </p>
          </div>

          {/* Highlighted Services */}
          <div className="mb-10">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">Featured Services</h3>
              <p className="text-gray-600">Our most popular and in-demand solutions</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {services.filter(service => service.highlight).map((service, index) => (
                <Link key={index} href={service.link} className="group">
                  <div className="bg-gradient-to-br from-primary-50 to-primary-100 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 p-6 border-2 border-primary-200 relative overflow-hidden">
                    {/* Icon and Title Row */}
                    <div className="flex items-start mb-4">
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-2xl mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                        <i className={service.icon}></i>
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-lg sm:text-xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 mb-2 leading-tight">
                          {service.title}
                        </h3>
                        <p className="text-gray-700 text-sm sm:text-base leading-relaxed">
                          {service.description}
                        </p>
                      </div>
                    </div>

                    {/* Features List - Responsive Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-gray-700 text-sm">
                          <i className="fas fa-check text-accent-500 mr-2 text-sm flex-shrink-0"></i>
                          <span className="break-words">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Arrow */}
                    <div className="flex items-center text-primary-600 font-semibold text-base group-hover:text-primary-700">
                      Learn More <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Services Grid */}
          <div>
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-3">All Our Services</h3>
              <p className="text-gray-600">Complete range of IT solutions for your business needs</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link key={index} href={service.link} className="group">
                  <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 p-6 border border-gray-100 h-full relative overflow-hidden">
                    {/* Background Pattern */}
                    <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-primary-100/30 to-accent-100/30 rounded-full -translate-y-10 translate-x-10"></div>
                    
                    {/* Icon and Title Row */}
                    <div className="flex items-center mb-4 relative z-10">
                      <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-lg mr-3 group-hover:scale-110 transition-transform duration-300 shadow-md">
                        <i className={service.icon}></i>
                      </div>
                      <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors duration-300 flex-1 leading-tight">
                        {service.title}
                      </h3>
                    </div>

                    {/* Description */}
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed relative z-10">
                      {service.description}
                    </p>

                    {/* Features List - Show All Features */}
                    <div className="space-y-2 mb-4 relative z-10">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center text-sm text-gray-700 group-hover:text-gray-800 transition-colors duration-200">
                          <div className="w-5 h-5 rounded-full bg-gradient-to-r from-accent-400 to-accent-500 flex items-center justify-center mr-3 flex-shrink-0">
                            <i className="fas fa-check text-white text-xs"></i>
                          </div>
                          <span className="break-words">{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Learn More Arrow */}
                    <div className="flex items-center text-primary-600 font-semibold text-sm group-hover:text-primary-700 transition-colors duration-200 relative z-10">
                      Learn More <i className="fas fa-arrow-right ml-2 group-hover:translate-x-1 transition-transform duration-300"></i>
                    </div>

                    {/* Hover Effect Border */}
                    <div className="absolute inset-0 rounded-2xl border-2 border-transparent group-hover:border-primary-200 transition-colors duration-300 pointer-events-none"></div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why Choose Smartwebrowse India Private Limited?
              </h2>
              <p className="text-lg text-gray-600 mb-8">
                We combine deep technical expertise with business acumen to deliver 
                IT solutions that drive real business value and measurable results.
              </p>
              
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-lg mr-4 flex-shrink-0">
                    <i className="fas fa-shield-alt"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Enterprise-Grade Security</h3>
                    <p className="text-gray-600">Advanced cybersecurity solutions to protect your business from evolving threats.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-lg mr-4 flex-shrink-0">
                    <i className="fas fa-cloud"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">Scalable Cloud Solutions</h3>
                    <p className="text-gray-600">Flexible cloud infrastructure that grows with your business needs.</p>
                  </div>
                </div>
                
                <div className="flex items-start">
                  <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-lg mr-4 flex-shrink-0">
                    <i className="fas fa-headset"></i>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900 mb-2">24/7 Expert Support</h3>
                    <p className="text-gray-600">Round-the-clock technical support from our experienced team.</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="bg-white rounded-xl shadow-lg p-8 border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Our Track Record</h3>
                <div className="grid grid-cols-2 gap-6 mb-6">
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">500+</div>
                    <div className="text-sm text-gray-600">Happy Clients</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">1000+</div>
                    <div className="text-sm text-gray-600">Projects Completed</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">12+</div>
                    <div className="text-sm text-gray-600">Years Experience</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-bold text-primary-600 mb-2">15+</div>
                    <div className="text-sm text-gray-600">Countries Served</div>
                  </div>
                </div>
                <div className="flex justify-center space-x-3 text-xs text-gray-500">
                  <span className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-1"></i>
                    ISO 27001 Certified
                  </span>
                  <span className="flex items-center">
                    <i className="fas fa-check-circle text-green-500 mr-1"></i>
                    GDPR Compliant
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video Reviews Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
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
              </div>
            ))}
          </div>
          
          {/* View More Reviews Link */}
          <div className="text-center mt-8">
            <Link 
              href="/client-reviews" 
              className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium transition-colors duration-200"
            >
              View All Client Reviews
              <i className="fas fa-arrow-right ml-2"></i>
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-form" className="py-16 bg-gradient-to-br from-primary-50 via-white to-accent-50 relative overflow-hidden">
        {/* Decorative Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-200/30 to-accent-200/30 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-200/30 to-primary-200/30 rounded-full blur-3xl"></div>
        </div>
        
        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center px-4 py-2 bg-gradient-to-r from-primary-500 to-accent-500 text-white rounded-full text-sm font-medium mb-6">
                <i className="fas fa-rocket mr-2"></i>
                Free Consultation Available
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h2>
              <p className="text-xl text-gray-600">
                Get a free consultation and discover how our IT solutions can drive your business growth
              </p>
            </div>
            
            <div className="bg-gradient-to-br from-white via-primary-50/30 to-accent-50/30 rounded-2xl shadow-2xl p-8 md:p-12 border-2 border-primary-100 relative overflow-hidden">
              {/* Form Background Pattern */}
              <div className="absolute inset-0 opacity-5">
                <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-primary-500 to-accent-500"></div>
              </div>
              <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-bold text-gray-800 mb-2 flex items-center">
                      <i className="fas fa-user text-primary-500 mr-2"></i>
                      Full Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-primary-300"
                      placeholder="Enter your full name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-bold text-gray-800 mb-2 flex items-center">
                      <i className="fas fa-envelope text-accent-500 mr-2"></i>
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-accent-300"
                      placeholder="Enter your email"
                    />
                  </div>
                </div>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-bold text-gray-800 mb-2 flex items-center">
                      <i className="fas fa-phone text-primary-500 mr-2"></i>
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-primary-300"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div>
                    <label htmlFor="company" className="block text-sm font-bold text-gray-800 mb-2 flex items-center">
                      <i className="fas fa-building text-accent-500 mr-2"></i>
                      Company Name
                    </label>
                    <input
                      type="text"
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-accent-300"
                      placeholder="Enter your company name"
                    />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="services" className="block text-sm font-bold text-gray-800 mb-2 flex items-center">
                    <i className="fas fa-cogs text-primary-500 mr-2"></i>
                    Services of Interest
                  </label>
                  <select
                    id="services"
                    name="services"
                    value={formData.services}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-primary-500/20 focus:border-primary-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-primary-300"
                  >
                    <option value="">Select a service</option>
                    <option value="cybersecurity">Cybersecurity & IAM</option>
                    <option value="cloud">Cloud Services</option>
                    <option value="development">AI & Web Development</option>
                    <option value="devops">DevOps & Automation</option>
                    <option value="mobile">Mobile App Development</option>
                    <option value="testing">Application Testing</option>
                    <option value="marketing">Digital Marketing</option>
                    <option value="support">IT Services & Support</option>
                    <option value="consultation">General Consultation</option>
                  </select>
                </div>
                
                {/* Project Details and Verification in one row */}
                <div className="grid grid-cols-1 md:grid-cols-[60%_40%] gap-6">
                  <div className="space-y-2">
                    <label htmlFor="message" className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-file-alt text-accent-500 mr-2"></i>
                      Project Details
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      rows={4}
                      className="w-full px-4 py-3 border-2 border-gray-200 rounded-xl focus:ring-4 focus:ring-accent-500/20 focus:border-accent-500 transition-all duration-300 text-sm bg-gray-50/50 hover:bg-white hover:border-accent-300 resize-none"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  
                  <div className="space-y-2">
                    <label className="block text-sm font-bold text-gray-800 flex items-center">
                      <i className="fas fa-shield-alt text-primary-500 mr-2"></i>
                      Verification *
                    </label>
                    <div className="bg-gradient-to-br from-primary-50 to-accent-50 p-3 rounded-xl border-2 border-primary-200">
                      <div className="space-y-2">
                        <div className="flex items-center space-x-2">
                          <div className="flex items-center space-x-1 bg-white px-3 py-2 rounded-lg border border-gray-200 shadow-sm">
                            <span className="text-sm font-semibold text-gray-800">{captchaNum1}</span>
                            <span className="text-sm font-semibold text-gray-600">×</span>
                            <span className="text-sm font-semibold text-gray-800">{captchaNum2}</span>
                            <span className="text-sm font-semibold text-gray-600">=</span>
                          </div>
                          
                          <input
                            type="number"
                            name="verification"
                            value={captchaAnswer}
                            onChange={handleCaptchaChange}
                            placeholder="?"
                            className={`w-16 px-2 py-2 border-2 rounded-lg text-center text-sm font-semibold transition-all duration-200 ${
                              isCaptchaValid 
                                ? 'border-green-500 bg-green-50 text-green-700' 
                                : captchaAnswer 
                                  ? 'border-red-500 bg-red-50 text-red-700'
                                  : 'border-gray-300 focus:border-primary-500 focus:ring-2 focus:ring-primary-500/20'
                            }`}
                          />
                          
                          <button
                            type="button"
                            onClick={generateCaptcha}
                            className="p-1.5 text-gray-500 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors duration-200"
                            title="Generate new problem"
                          >
                            <i className="fas fa-sync-alt text-xs"></i>
                          </button>
                        </div>
                        
                        <p className="text-xs text-gray-500">
                          Please solve this simple math problem to verify you're human.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="text-center pt-4">
                  <button
                    type="submit"
                    disabled={!isCaptchaValid || isSubmitting}
                    className="bg-gradient-to-r from-primary-500 via-primary-600 to-accent-500 text-white font-bold py-4 px-12 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:from-primary-600 hover:via-primary-700 hover:to-accent-600 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
                  >
                    {isSubmitting ? (
                      <>
                        <i className="fas fa-spinner fa-spin mr-2"></i>
                        Submitting...
                      </>
                    ) : (
                      <>
                        <i className="fas fa-rocket mr-2"></i>
                        Get Free Consultation
                      </>
                    )}
                  </button>
                  <p className="text-sm text-gray-600 mt-4 flex items-center justify-center">
                    <i className="fas fa-shield-alt text-green-500 mr-2"></i>
                    * Required fields. We'll respond within 24 hours.
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer CTA */}
      <section className="py-12 bg-primary-900 text-white">
        <div className="container-custom text-center">
          <h3 className="text-2xl font-bold mb-4">
            Ready to Get Started?
          </h3>
          <p className="text-lg text-gray-300 mb-6">
            Join 500+ businesses that trust Smartwebrowse India Private Limited for their IT needs
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="#contact-form" 
              className="bg-accent-500 hover:bg-accent-600 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Request Quote
            </Link>
            <Link 
              href="tel:+12404418984" 
              className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              Call Now
            </Link>
            <Link 
              href="https://wa.me/7238009780" 
              target="_blank"
              rel="noopener noreferrer"
              className="bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-lg transition-all duration-300"
            >
              WhatsApp Now
            </Link>
          </div>
        </div>
      </section>

      {/* Fixed CTA Button - Responsive */}
      <div className="fixed bottom-0 left-0 right-0 z-50">
        {/* Mobile: Full width */}
        <div className="block md:hidden bg-orange-500 hover:bg-orange-600 transition-colors duration-300">
          <button
            onClick={scrollToContactForm}
            className="w-full text-white font-bold py-4 px-8 text-lg transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Get Free Consultation
          </button>
        </div>
        
        {/* Desktop: Hidden - only show on mobile */}
        <div className="hidden">
          <button
            onClick={scrollToContactForm}
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-4 px-8 rounded-lg text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 focus:outline-none focus:ring-4 focus:ring-orange-300"
          >
            Get Free Consultation
          </button>
        </div>
      </div>
    </div>
  );
}
