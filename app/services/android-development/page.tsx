import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Android Development Services | Smartwebrowse India Private Limited',
  description: 'Professional Android app development services using Kotlin and Material Design. Create native Android applications with modern UI/UX and optimal performance.',
  keywords: 'Android development, Android apps, Kotlin, Material Design, native Android applications',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/android-development',
  },
};

export default function AndroidDevelopmentPage() {
  const features = [
    'Kotlin and Java development',
    'Material Design implementation',
    'Android compatibility testing',
    'Google Play optimization',
    'Android security features',
    'Performance optimization'
  ];

  const benefits = [
    {
      title: 'Native Android',
      description: 'Built specifically for Android with platform-specific optimizations and features',
      icon: 'fab fa-android'
    },
    {
      title: 'Material Design',
      description: 'Modern UI following Google Material Design principles for consistent user experience',
      icon: 'fas fa-palette'
    },
    {
      title: 'Google Play Ready',
      description: 'Optimized for Google Play Store with proper metadata and store listing',
      icon: 'fab fa-google-play'
    },
    {
      title: 'Cross-Device',
      description: 'Compatible with all Android devices from phones to tablets and wearables',
      icon: 'fas fa-mobile-alt'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Android Development Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Professional Android app development using Kotlin and Material Design. Create native Android 
            applications that deliver exceptional user experiences across all devices.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/consultation" className="btn-primary">
              Get Free Android Consultation
            </Link>
            <Link href="/services/mobile-app-development" className="btn-outline border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              View All Mobile Services
            </Link>
          </div>
        </div>
      </section>

      {/* Service Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-gray-900">
                Native Android Application Development
              </h2>
              <p className="text-body text-gray-600 mb-6">
                We specialize in creating high-performance Android applications using modern development 
                practices. Our Kotlin expertise and Material Design implementation ensure your app follows 
                Android best practices and delivers an exceptional user experience.
              </p>
              <p className="text-body text-gray-600 mb-8">
                From concept to Google Play deployment, we handle every aspect of Android development 
                including design, development, testing, and optimization for all Android devices.
              </p>
              
              <div className="grid grid-cols-2 gap-4">
                {features.map((feature, index) => (
                  <div key={index} className="flex items-center space-x-3">
                    <i className="fas fa-check text-accent-500"></i>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-100">
              <div className="text-center mb-6">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4">
                  <i className="fab fa-android"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Android Development</h3>
                <p className="text-gray-600">Native Android Applications</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Platform</span>
                  <span className="font-semibold text-gray-900">Android (All Devices)</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Technology</span>
                  <span className="font-semibold text-gray-900">Kotlin & Java</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Design</span>
                  <span className="font-semibold text-gray-900">Material Design</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Deployment</span>
                  <span className="font-semibold text-gray-900">Google Play Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our Android Development?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We combine technical expertise with Google's design philosophy to create Android apps 
              that users love and businesses trust.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-2xl mx-auto mb-4 shadow-sm">
                  <i className={benefit.icon}></i>
                </div>
                <h3 className="text-lg font-bold text-neutral-800 mb-3">{benefit.title}</h3>
                <p className="text-neutral-600 text-sm">{benefit.description}</p>
              </div>
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
              <div className="absolute inset-0 rounded-3xl" style={{
                backgroundImage: 'radial-gradient(circle, rgba(255,255,255,0.3) 1px, transparent 1px)',
                backgroundSize: '20px 20px'
              }}></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Android App?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create a powerful Android application that engages users 
                and drives business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Android Consultation
                </Link>
                <Link href="/services/mobile-app-development" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All Mobile Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Mobile CTA Button */}
      <MobileCTA href="/get-a-quote" bgColor="bg-[#0ea5e9]" hoverColor="hover:bg-[#0284c7]" ringColor="focus:ring-[#0ea5e9]" />    </div>
  );
}
