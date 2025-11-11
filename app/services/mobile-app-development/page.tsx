import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Mobile App Development Services | Smartwebrowse India Private Limited',
  description: 'Comprehensive mobile application development services including iOS, Android, cross-platform, and custom mobile solutions.',
  keywords: 'mobile app development, iOS development, Android development, cross-platform, React Native, Flutter',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/mobile-app-development',
  },
};

export default function MobileAppDevelopmentPage() {
  const services = [
    {
      title: 'iOS Development',
      description: 'Native iOS applications built with Swift and SwiftUI for optimal performance and user experience.',
      features: [
        'Swift and SwiftUI development',
        'iOS app store optimization',
        'iPhone and iPad compatibility',
        'iOS security best practices',
        'Performance optimization'
      ],
      icon: 'fab fa-apple',
      link: '/services/ios-development'
    },
    {
      title: 'Android Development',
      description: 'Native Android apps with Kotlin and modern Material Design principles.',
      features: [
        'Kotlin and Java development',
        'Material Design implementation',
        'Android compatibility testing',
        'Google Play optimization',
        'Android security features'
      ],
      icon: 'fab fa-android',
      link: '/services/android-development'
    },
    {
      title: 'Cross-Platform Development',
      description: 'React Native and Flutter apps for multiple platforms with single codebase.',
      features: [
        'React Native development',
        'Flutter app development',
        'Code sharing across platforms',
        'Performance optimization',
        'Platform-specific features'
      ],
      icon: 'fas fa-mobile-alt',
      link: '/services/cross-platform-development'
    },
    {
      title: 'Custom Mobile Solutions',
      description: 'Tailored mobile applications designed for specific business needs and workflows.',
      features: [
        'Custom app architecture',
        'Business process integration',
        'API development and integration',
        'Scalable infrastructure',
        'Ongoing support and maintenance'
      ],
      icon: 'fas fa-cogs',
      link: '/services/custom-mobile-solutions'
    }
  ];

  const technologies = [
    { name: 'React Native', icon: 'fab fa-react', category: 'Cross-Platform' },
    { name: 'Flutter', icon: 'fas fa-mobile-alt', category: 'Cross-Platform' },
    { name: 'Swift', icon: 'fab fa-apple', category: 'iOS' },
    { name: 'Kotlin', icon: 'fab fa-android', category: 'Android' },
    { name: 'Firebase', icon: 'fas fa-fire', category: 'Backend' },
    { name: 'AWS Mobile', icon: 'fas fa-cloud', category: 'Cloud' }
  ];

  const benefits = [
    {
      title: 'Native Performance',
      description: 'Optimized apps that run smoothly on all devices with platform-specific optimizations',
      icon: 'fas fa-rocket'
    },
    {
      title: 'Cross-Platform',
      description: 'Single codebase for iOS and Android, reducing development time and cost',
      icon: 'fas fa-mobile-alt'
    },
    {
      title: 'User Experience',
      description: 'Intuitive interfaces that users love, following platform design guidelines',
      icon: 'fas fa-heart'
    },
    {
      title: 'Scalability',
      description: 'Apps that grow with your business, built with enterprise-grade architecture',
      icon: 'fas fa-chart-line'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Mobile App Development</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Build powerful, scalable mobile applications that engage users and drive business growth. 
            From iOS and Android to cross-platform solutions, we deliver excellence.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-2xl mr-4 shadow-sm">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-xl font-bold text-neutral-800">{service.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-neutral-700">
                        <i className="fas fa-check text-accent-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Link 
                    href={service.link}
                    className="inline-flex items-center text-primary-600 font-medium hover:text-primary-700 transition-colors duration-200"
                  >
                    Learn More
                    <i className="fas fa-arrow-right ml-2"></i>
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies We Use */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Technologies We Use
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies and frameworks to build robust, 
              scalable mobile applications.
            </p>
          </div>
          
          <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white border border-neutral-200 rounded-lg p-3 hover:shadow-sm hover:border-primary-200 transition-all duration-300 group">
                <div className="flex flex-col items-center text-center space-y-2">
                  <div className="w-8 h-8 bg-gradient-to-br from-primary-100 to-primary-200 rounded-md flex items-center justify-center group-hover:from-primary-200 group-hover:to-primary-300 transition-all duration-300">
                    <i className={`${tech.icon} text-sm text-primary-600 group-hover:text-primary-700`}></i>
                  </div>
                  <div>
                    <div className="font-medium text-neutral-800 text-xs">{tech.name}</div>
                    <div className="text-xs text-neutral-500 mt-0.5 leading-tight">{tech.category}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our Mobile Development Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver mobile applications that exceed expectations and drive business success.
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

      {/* Enhanced CTA Section */}
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
              <h2 className="text-3xl font-bold text-white mb-4">
                Ready to Build Your Mobile App?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your mobile app idea and create a solution that drives 
                user engagement and business growth.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free App Consultation
                </Link>
                <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View All Services
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
