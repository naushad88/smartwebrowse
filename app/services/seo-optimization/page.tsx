import type { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'SEO Optimization Services | Smartwebrowse India Private Limited',
  description: 'Professional SEO optimization services including technical SEO, on-page optimization, and local SEO for business growth.',
  openGraph: {
    title: 'SEO Optimization Services | Smartwebrowse India Private Limited',
    description: 'Professional SEO optimization services including technical SEO, on-page optimization, and local SEO for business growth.',
    url: 'https://www.smartwebrowse.com/services/seo-optimization',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/seo-optimization',
  },
};

export default function SEOOptimizationPage() {
  const services = [
    {
      title: 'Technical SEO',
      description: 'Optimize your website\'s technical foundation for search engines',
      features: ['Site speed optimization', 'Mobile responsiveness', 'Schema markup implementation', 'XML sitemap creation'],
      icon: 'fas fa-cogs'
    },
    {
      title: 'On-Page SEO',
      description: 'Optimize individual pages for better search visibility',
      features: ['Keyword research and optimization', 'Meta tag optimization', 'Content optimization', 'Internal linking'],
      icon: 'fas fa-file-alt'
    },
    {
      title: 'Local SEO',
      description: 'Improve local search visibility for your business',
      features: ['Google My Business optimization', 'Local citation building', 'Review management', 'Local keyword targeting'],
      icon: 'fas fa-map-marker-alt'
    },
    {
      title: 'Content SEO',
      description: 'Create search-optimized content that ranks and converts',
      features: ['Content strategy development', 'Keyword-focused content', 'Content optimization', 'Content performance tracking'],
      icon: 'fas fa-pen-fancy'
    },
    {
      title: 'Link Building',
      description: 'Build quality backlinks to improve domain authority',
      features: ['Guest posting', 'Broken link building', 'Resource link building', 'Link quality analysis'],
      icon: 'fas fa-link'
    },
    {
      title: 'SEO Analytics',
      description: 'Track and analyze your SEO performance',
      features: ['Ranking monitoring', 'Traffic analysis', 'Conversion tracking', 'Competitor analysis'],
      icon: 'fas fa-chart-bar'
    }
  ];

  const benefits = [
    {
      title: 'Increased Visibility',
      description: 'Improve your search engine rankings and online visibility',
      icon: 'fas fa-eye'
    },
    {
      title: 'More Traffic',
      description: 'Drive qualified organic traffic to your website',
      icon: 'fas fa-users'
    },
    {
      title: 'Better Conversions',
      description: 'Convert more visitors into customers with optimized content',
      icon: 'fas fa-chart-line'
    },
    {
      title: 'Long-term Results',
      description: 'Build sustainable organic growth for your business',
      icon: 'fas fa-rocket'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">SEO Optimization Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Improve your search engine rankings and drive more organic traffic with our 
            comprehensive SEO optimization services.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Complete SEO Solutions
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive SEO services that cover all aspects of search engine 
              optimization, from technical improvements to content strategy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center text-white text-2xl mr-4 shadow-sm">
                      <i className={service.icon}></i>
                    </div>
                    <h3 className="text-lg font-bold text-neutral-800">{service.title}</h3>
                  </div>
                  <p className="text-neutral-600 mb-4 text-sm">{service.description}</p>
                  <ul className="space-y-2 mb-6">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-neutral-700 text-sm">
                        <i className="fas fa-check text-accent-500 mr-2"></i>
                        {feature}
                      </li>
                    ))}
                  </ul>
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
              Why Choose Our SEO Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We deliver measurable SEO results that help your business grow and 
              compete effectively in search results.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-accent-400 to-accent-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm">
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Improve Your Search Rankings?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free SEO audit and discover how we can boost your search visibility.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free SEO Audit
                </Link>
                <Link href="/consultation" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Schedule Consultation
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
