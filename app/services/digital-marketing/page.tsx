import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Digital Marketing Services | Smartwebrowse India Private Limited',
  description: 'Comprehensive digital marketing services including SEO optimization, content marketing, social media management, and analytics & reporting.',
  keywords: 'digital marketing, SEO, content marketing, social media, analytics, reporting',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/digital-marketing',
  },
};

export default function DigitalMarketingPage() {
  const services = [
    {
      title: 'SEO Optimization',
      description: 'Improve your search engine rankings and drive organic traffic to your website with our comprehensive SEO strategies.',
      features: [
        'Keyword research and optimization',
        'On-page SEO implementation',
        'Technical SEO audits',
        'Local SEO optimization',
        'SEO performance tracking'
      ],
      icon: 'fas fa-search',
      link: '/services/seo-optimization'
    },
    {
      title: 'Content Marketing',
      description: 'Create engaging, valuable content that converts visitors to customers and builds your brand authority.',
      features: [
        'Content strategy development',
        'Blog writing and management',
        'Email marketing campaigns',
        'Video content creation',
        'Content performance analysis'
      ],
      icon: 'fas fa-pen-fancy',
      link: '/services/content-marketing'
    },
    {
      title: 'Social Media Management',
      description: 'Build a strong brand presence and engage with your audience across all social media platforms.',
      features: [
        'Social media strategy',
        'Content creation and scheduling',
        'Community management',
        'Paid social advertising',
        'Social media analytics'
      ],
      icon: 'fas fa-share-nodes',
      link: '/services/social-media-management'
    },
    {
      title: 'Analytics & Reporting',
      description: 'Data-driven insights to optimize your marketing campaigns and maximize your return on investment.',
      features: [
        'Marketing performance tracking',
        'Conversion rate optimization',
        'A/B testing and optimization',
        'ROI measurement and reporting',
        'Customer behavior analysis'
      ],
      icon: 'fas fa-chart-line',
      link: '/services/analytics-reporting'
    }
  ];

  const benefits = [
    {
      title: 'Increased Visibility',
      description: 'Improve your online presence and reach more customers through strategic digital marketing',
      icon: 'fas fa-eye'
    },
    {
      title: 'Higher Conversions',
      description: 'Convert more visitors into paying customers with targeted marketing strategies',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Better ROI',
      description: 'Maximize your marketing budget with data-driven strategies and continuous optimization',
      icon: 'fas fa-coins'
    },
    {
      title: 'Brand Growth',
      description: 'Build a strong, recognizable brand in your market through consistent messaging',
      icon: 'fas fa-rocket'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Digital Marketing Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Comprehensive digital marketing solutions to grow your business, increase brand awareness, 
            and drive measurable results across all digital channels.
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

      {/* Benefits */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Why Choose Our Digital Marketing Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that help your business grow and succeed in the digital world.
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Grow Your Digital Presence?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our digital marketing services can help you reach more customers 
                and achieve your business goals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Marketing Assessment
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
