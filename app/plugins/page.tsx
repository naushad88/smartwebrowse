import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Premium WordPress & WooCommerce Plugins | Smartwebrowse India Private Limited',
  description: 'Professional plugins designed for modern e-commerce, payment processing, and business automation. Built by experts, backed by 24/7 support.',
  openGraph: {
    title: 'Premium WordPress & WooCommerce Plugins',
    description: 'Professional plugins designed for modern e-commerce, payment processing, and business automation.',
    url: 'https://www.smartwebrowse.com/plugins',
    type: 'website',
  },
};

export default function PluginsPage() {
  const plugins = [
    {
      id: 'nmi-payment-gateway-pro',
      name: 'Network Merchants Inc Gateway (NMI)',
      category: 'Payment Gateway',
      subtitle: 'for WooCommerce',
      status: 'Available',
      description: 'Complete NMI payment gateway integration with PCI DSS compliance, WooCommerce Blocks support, subscription management, and advanced e-commerce features.',
      features: [
        'Credit Card Processing',
        'Collect.js Tokenization',
        'WooCommerce Blocks Support',
        'HPOS Compatible',
        'Refund Support',
        'Debug Logging',
      ],
      rating: 5.0,
      downloads: 1000,
      updatedDate: '2025-01-28',
      price: 59,
      thumbnail: '/images/Plugin-Cover.jpg',
      pageUrl: '/plugins/nmi-payment-gateway-pro',
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 to-primary-100 py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-6 font-heading">
              Premium WordPress & WooCommerce
              <span className="block text-primary-600">Plugins</span>
            </h1>
            <p className="text-xl lg:text-2xl text-neutral-600 mb-8 leading-relaxed">
              Professional plugins designed for modern e-commerce, payment processing, and business automation. 
              Built by experts, backed by 24/7 support.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm">
              <div className="flex items-center gap-2">
                <i className="fas fa-shield-alt text-green-500"></i>
                <span>Secure & Reliable</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-headset text-blue-500"></i>
                <span>24/7 Expert Support</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-sync-alt text-purple-500"></i>
                <span>Regular Updates</span>
              </div>
              <div className="flex items-center gap-2">
                <i className="fas fa-star text-orange-500"></i>
                <span>Premium Quality</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Plugins Listing Section */}
      <section className="py-16 bg-neutral-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-heading">
              Our Plugin Collection
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Carefully crafted solutions that solve real business problems and enhance your WordPress experience.
            </p>
          </div>

          {/* Plugins Grid */}
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {plugins.map((plugin) => (
                <div
                  key={plugin.id}
                  className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 overflow-hidden group border border-neutral-200"
                >
                  {/* Plugin Thumbnail */}
                  <div className="relative h-64 bg-gradient-to-br from-primary-100 to-primary-200 overflow-hidden">
                    <Image
                      src={plugin.thumbnail}
                      alt={plugin.name}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-300"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                    {/* Status Badge */}
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                        plugin.status === 'Available'
                          ? 'bg-green-500 text-white'
                          : 'bg-yellow-500 text-white'
                      }`}>
                        {plugin.status}
                      </span>
                    </div>
                  </div>

                  {/* Plugin Content */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-neutral-900 mb-1">
                      {plugin.name}
                    </h3>
                    <p className="text-neutral-600 mb-4">{plugin.subtitle}</p>
                    <p className="text-neutral-700 mb-6 leading-relaxed">
                      {plugin.description}
                    </p>

                    {/* Key Features */}
                    <div className="mb-6">
                      <h4 className="text-sm font-semibold text-neutral-900 mb-3">
                        Key Features:
                      </h4>
                      <ul className="space-y-2">
                        {plugin.features.map((feature, index) => (
                          <li key={index} className="flex items-center gap-2 text-sm text-neutral-600">
                            <i className="fas fa-check-circle text-green-500 text-xs"></i>
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Rating and Downloads */}
                    <div className="flex items-center gap-4 mb-6 pb-6 border-b border-neutral-200">
                      <div className="flex items-center gap-1">
                        <i className="fas fa-star text-yellow-500"></i>
                        <span className="font-semibold text-neutral-900">{plugin.rating}</span>
                      </div>
                      <div className="flex items-center gap-1 text-neutral-600">
                        <i className="fas fa-download"></i>
                        <span>{plugin.downloads.toLocaleString()}+</span>
                      </div>
                      <div className="text-neutral-600 text-sm">
                        Updated {plugin.updatedDate}
                      </div>
                    </div>

                    {/* Price and CTA */}
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-3xl font-bold text-primary-600">
                          ${plugin.price}
                        </div>
                        <div className="text-sm text-neutral-600">for 1 website</div>
                      </div>
                      <Link
                        href={plugin.pageUrl}
                        className="btn-primary inline-flex items-center gap-2"
                      >
                        View Details
                        <i className="fas fa-arrow-right"></i>
                      </Link>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-4xl font-bold text-neutral-900 mb-4 font-heading">
                Why Choose Our Plugins?
              </h2>
              <p className="text-lg text-neutral-600">
                We build plugins that solve real problems with professional quality and ongoing support.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl border border-blue-200">
                <div className="w-16 h-16 bg-blue-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-code text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Professional Code
                </h3>
                <p className="text-neutral-600">
                  Built following WordPress coding standards with clean, maintainable code.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl border border-green-200">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-shield-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Secure & Reliable
                </h3>
                <p className="text-neutral-600">
                  Tested for security vulnerabilities and built with reliability in mind.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl border border-purple-200">
                <div className="w-16 h-16 bg-purple-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-headset text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Expert Support
                </h3>
                <p className="text-neutral-600">
                  24/7 support from our experienced development team.
                </p>
              </div>

              <div className="text-center p-6 bg-gradient-to-br from-orange-50 to-red-50 rounded-xl border border-orange-200">
                <div className="w-16 h-16 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <i className="fas fa-sync-alt text-white text-2xl"></i>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 mb-2">
                  Regular Updates
                </h3>
                <p className="text-neutral-600">
                  Continuous improvements and compatibility updates.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom Development CTA */}
      <section className="py-16 bg-gradient-to-br from-primary-600 to-primary-700">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center text-white">
            <h2 className="text-3xl lg:text-4xl font-bold mb-4 font-heading">
              Need a Custom Plugin?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              We also provide custom WordPress and WooCommerce plugin development services 
              tailored to your specific business needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 hover:bg-neutral-100 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <i className="fas fa-envelope"></i>
                Contact Us for Custom Development
              </Link>
              <Link
                href="/services"
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-3 px-8 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2"
              >
                <i className="fas fa-briefcase"></i>
                View Development Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

