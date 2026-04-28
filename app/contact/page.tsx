
import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import WorldMap from '@/components/WorldMap';

export const metadata: Metadata = {
  title: 'Contact Smartwebrowse India Private Limited | Get Expert AI Support',
  description: 'Contact our AI experts for AI services, automation & AI transformation support. 24/7 assistance available. Get free consultation today.',
  keywords: 'contact AI experts, AI support, automation help, AI consulting',
  openGraph: {
    title: 'Contact Smartwebrowse India Private Limited | Get Expert AI Support',
    description: 'Contact our AI experts for AI services, automation & AI transformation support. 24/7 assistance available. Get free consultation today.',
    url: 'https://www.smartwebrowse.com/contact',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/contact',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/50 to-indigo-50/50">
      {/* Hero Section */}
      <section className="relative py-20 md:py-24 pt-28 overflow-hidden">
        {/* Background Patterns */}
        <div className="absolute inset-0 neural-pattern opacity-20"></div>
        <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-20 left-10 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>

        <div className="container-custom relative z-10 text-center">
          <div
            className="inline-flex items-center px-4 py-2 bg-blue-50 backdrop-blur-sm rounded-full text-sm font-bold mb-6 border border-blue-200 text-blue-700"
          >
            <i className="fas fa-envelope mr-2 text-blue-600"></i>
            Contact Us
          </div>
          <h1
            className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent"
          >
            Get In Touch
          </h1>
          <p
            className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed"
          >
            Ready to transform your business with AI? Let's discuss how our expertise can drive your 
            AI transformation and business growth.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Contact Form */}
            <div
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  Send us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">message</span>
                </h2>
              </div>
              <div className="card-ai p-6">
                <ContactForm />
              </div>
            </div>

            {/* Contact Information */}
            <div
            >
              <div className="flex items-center mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-blue-600 to-indigo-600 rounded-full mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                  Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Information</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                {/* Company Info */}
                <div className="card-ai p-6 group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-building text-white text-lg"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Company Details</h3>
                  </div>
                  <div className="space-y-4 text-gray-700">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">Smartwebrowse India Private Limited</div>
                        <div className="text-sm text-gray-600 mt-1">AI Services & Automation Company</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-gray-700">Established: <span className="font-medium">June 2013</span></span>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="card-ai p-6 group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-clock text-white text-lg"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Get in Touch</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-gray-900">24/7 AI Support</div>
                        <div className="text-sm text-gray-600 mt-1">Round the clock assistance for all your AI needs</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="card-ai p-6 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 border-2 border-blue-200 group hover:-translate-y-1 transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center mr-4 group-hover:scale-110 transition-transform duration-300">
                      <i className="fas fa-calendar-check text-white text-lg"></i>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900">Ready to Get Started?</h3>
                  </div>
                  <p className="text-gray-700 mb-5 text-sm leading-relaxed">
                    Schedule a free consultation with our AI experts to discuss your project requirements and discover how we can help transform your business with AI.
                  </p>
                  <a 
                    href="/consultation" 
                    className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold rounded-xl hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
                  >
                    <i className="fas fa-calendar-plus mr-2"></i>
                    Schedule Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Global Presence Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div
            className="text-center mb-12"
          >
            <div className="inline-flex items-center px-6 py-3 bg-blue-50 text-blue-700 rounded-full text-sm font-bold mb-6 border border-blue-200">
              <i className="fas fa-globe mr-2 text-blue-600"></i>
              Global Presence
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Our Global Presence
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Have questions? Reach out to our team directly or visit one of our offices worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: 'India - Corporate Office', address: 'SCO 215-217, 3rd Floor, Sector 34-A, Chandigarh, India 160034', icon: 'fa-building' },
              { title: 'Canada - Sales Office', address: 'Apartment -08\n2155 rue Saint Marc\nMontreal, Quebec, H3H2G8', icon: 'fa-map-marker-alt' },
              { title: 'Japan - Sales Office', address: 'Japan, Chiba-Ken\nUrayasu City\nTakasu 3-29-22', icon: 'fa-map-marker-alt' },
              { title: 'USA - Sales Office', address: '620 VETERANS BLVD, Unit 525\nRedwood City\nState - California, 94063', icon: 'fa-map-marker-alt' }
            ].map((office, index) => (
              <div
                key={index}
                className="card-ai p-6 text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <i className={`fa-solid ${office.icon} text-2xl text-white`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{office.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed whitespace-pre-line">
                  {office.address}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
