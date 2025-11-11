import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Cross-Platform Development Services | Smartwebrowse India Private Limited',
  description: 'Professional cross-platform mobile app development using React Native, Flutter, and .NET MAUI. Create apps for iOS and Android with a single codebase.',
  keywords: 'cross-platform development, React Native, Flutter, .NET MAUI, mobile apps, iOS, Android',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/cross-platform-development',
  },
};

export default function CrossPlatformDevelopmentPage() {
  const features = [
    'React Native development',
    'Flutter app development',
    '.NET MAUI development',
    'Code sharing across platforms',
    'Performance optimization',
    'Platform-specific features'
  ];

  const benefits = [
    {
      title: 'Single Codebase',
      description: 'Develop once and deploy to both iOS and Android platforms',
      icon: 'fas fa-code'
    },
    {
      title: 'Cost Effective',
      description: 'Reduce development time and cost with shared code',
      icon: 'fas fa-coins'
    },
    {
      title: 'Native Performance',
      description: 'Near-native performance with platform-specific optimizations',
      icon: 'fas fa-rocket'
    },
    {
      title: 'Faster Development',
      description: 'Accelerate time-to-market with cross-platform tools',
      icon: 'fas fa-clock'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Cross-Platform Development</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Professional cross-platform mobile app development using React Native, Flutter, and .NET MAUI. Create 
            powerful applications for both iOS and Android with a single, maintainable codebase.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/consultation" className="btn-primary">
              Get Free Cross-Platform Consultation
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
                Cross-Platform Mobile Application Development
              </h2>
              <p className="text-body text-gray-600 mb-6">
                We specialize in creating high-performance cross-platform applications using React Native, 
                Flutter, and .NET MAUI. Our expertise ensures your app delivers native-like performance while 
                maintaining a single codebase for both platforms.
              </p>
              <p className="text-body text-gray-600 mb-8">
                From concept to deployment, we handle every aspect of cross-platform development 
                including design, development, testing, and optimization for iOS and Android.
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
                  <i className="fas fa-mobile-alt"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Cross-Platform</h3>
                <p className="text-gray-600">iOS & Android Apps</p>
              </div>
              
              <div className="space-y-4">
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Platforms</span>
                  <span className="font-semibold text-gray-900">iOS & Android</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Technology</span>
                  <span className="font-semibold text-gray-900">React Native, Flutter & MAUI</span>
                </div>
                <div className="flex justify-between items-center py-2 border-b border-gray-100">
                  <span className="text-gray-600">Codebase</span>
                  <span className="font-semibold text-gray-900">Single Shared</span>
                </div>
                <div className="flex justify-between items-center py-2">
                  <span className="text-gray-600">Performance</span>
                  <span className="font-semibold text-gray-900">Near-Native</span>
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
              Why Choose Cross-Platform Development?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We leverage modern cross-platform technologies to deliver high-quality mobile applications 
              that work seamlessly across all devices.
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Cross-Platform Apps?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how we can create powerful cross-platform applications that work 
                seamlessly on both iOS and Android.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Cross-Platform Consultation
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
