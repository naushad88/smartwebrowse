import type { Metadata } from 'next';
import ContactForm from '@/components/ContactForm';
import WorldMap from '@/components/WorldMap';

export const metadata: Metadata = {
  title: 'Contact Smartwebrowse India Private Limited | Get Expert IT Support',
  description: 'Contact our IT experts for cloud, cybersecurity & digital transformation support. 24/7 assistance available. Get free consultation today.',
  keywords: 'contact IT experts, cloud support, cybersecurity help, digital transformation consulting',
  openGraph: {
    title: 'Contact Smartwebrowse India Private Limited | Get Expert IT Support',
    description: 'Contact our IT experts for cloud, cybersecurity & digital transformation support. 24/7 assistance available. Get free consultation today.',
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
    <div className="min-h-screen bg-primary-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-20 pt-28">
        <div className="container-custom text-center">
          <div className="inline-flex items-center px-4 py-2 bg-primary-100/80 backdrop-blur-sm rounded-full text-sm font-medium mb-6 border border-primary-200 text-primary-700">
            <i className="fas fa-envelope mr-2 text-primary-600"></i>
            Contact Us
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight tracking-tight text-primary-900">
            Get In Touch
          </h1>
          <p className="text-xl md:text-2xl text-primary-700 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your business? Let's discuss how our expertise can drive your 
            digital transformation and business growth.
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight">
                  Send us a <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">message</span>
                </h2>
              </div>
              <ContactForm />
            </div>

            {/* Contact Information */}
            <div>
              <div className="flex items-center mb-8">
                <div className="w-1 h-12 bg-gradient-to-b from-primary-500 to-primary-600 rounded-full mr-4"></div>
                <h2 className="text-3xl md:text-4xl font-bold text-primary-900 leading-tight">
                  Contact <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary-600 to-primary-700">Information</span>
                </h2>
              </div>
              
              <div className="space-y-6">
                {/* Company Info */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-building text-white text-lg"></i>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900">Company Details</h3>
                  </div>
                  <div className="space-y-4 text-primary-700">
                    <div className="flex items-start">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mt-2 mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-primary-800">Smartwebrowse India Private Limited Private Limited</div>
                        <div className="text-sm text-primary-600 mt-1">IT Cloud Support & Software Development Company</div>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                      <span className="text-primary-700">Established: <span className="font-medium">June 2013</span></span>
                    </div>
                  </div>
                </div>

                {/* Contact Methods */}
                <div className="bg-white p-6 rounded-2xl shadow-sm border border-primary-100 hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-clock text-white text-lg"></i>
                    </div>
                    <h3 className="text-xl font-bold text-primary-900">Get in Touch</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <div className="w-2 h-2 bg-primary-400 rounded-full mr-3 flex-shrink-0"></div>
                      <div>
                        <div className="font-semibold text-primary-800">24/7 Support</div>
                        <div className="text-sm text-primary-600 mt-1">Round the clock assistance for all your needs</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Call to Action */}
                <div className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 p-6 rounded-2xl border border-primary-200 shadow-sm hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-4">
                    <div className="w-10 h-10 bg-gradient-to-br from-primary-600 to-primary-700 rounded-xl flex items-center justify-center mr-4">
                      <i className="fas fa-calendar-check text-white text-lg"></i>
                    </div>
                    <h3 className="text-xl font-bold text-primary-800">Ready to Get Started?</h3>
                  </div>
                  <p className="text-primary-700 mb-5 text-sm leading-relaxed">
                    Schedule a free consultation with our experts to discuss your project requirements and discover how we can help transform your business.
                  </p>
                  <a 
                    href="/consultation" 
                    className="inline-flex items-center px-6 py-3 bg-primary-600 text-white font-semibold rounded-xl hover:bg-primary-700 transition-colors duration-200 text-sm"
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
      <section className="py-16 bg-primary-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="inline-flex items-center px-6 py-3 bg-primary-100 text-primary-700 rounded-full text-sm font-medium mb-6">
              <i className="fas fa-globe mr-2 text-primary-600"></i>
              Global Presence
            </div>
            <h2 className="text-4xl font-bold text-primary-900 mb-6">Our Global Presence</h2>
            <p className="text-xl text-primary-700 max-w-3xl mx-auto">
              Have questions? Reach out to our team directly or visit one of our offices worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* India Office */}
            <div className="group text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-building text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">India - Corporate Office</h3>
              <p className="text-sm text-primary-700 leading-relaxed">
                F-195, Second Floor<br />
                Industrial Area Phase 8-B,<br />
                Sector 74, Mohali, India 160055
              </p>
            </div>

            {/* Canada Office */}
            <div className="group text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Canada - Sales Office</h3>
              <p className="text-sm text-primary-700 leading-relaxed">
                Apartment -08<br />
                2155 rue Saint Marc<br />
                Montreal, Quebec, H3H2G8
              </p>
            </div>

            {/* Japan Office */}
            <div className="group text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">Japan - Sales Office</h3>
              <p className="text-sm text-primary-700 leading-relaxed">
                Japan, Chiba-Ken<br />
                Urayasu City<br />
                Takasu 3-29-22
              </p>
            </div>

            {/* USA Office */}
            <div className="group text-center p-8 bg-gradient-to-br from-primary-50 to-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border border-primary-100 hover:border-primary-200">
              <div className="w-20 h-20 bg-gradient-to-br from-primary-500 to-primary-600 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                <i className="fa-solid fa-map-marker-alt text-2xl text-white"></i>
              </div>
              <h3 className="text-xl font-bold text-primary-900 mb-3">USA - Sales Office</h3>
              <p className="text-sm text-primary-700 leading-relaxed">
                620 VETERANS BLVD, Unit 525<br />
                Redwood City<br />
                State - California, 94063
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
