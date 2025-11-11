import type { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Google Cloud Services & Support | Smartwebrowse India Private Limited',
  description: 'Professional Google Cloud Platform services including Compute Engine, Cloud Storage, Kubernetes, and AI/ML solutions.',
  openGraph: {
    title: 'Google Cloud Services & Support | Smartwebrowse India Private Limited',
    description: 'Professional Google Cloud Platform services including Compute Engine, Cloud Storage, Kubernetes, and AI/ML solutions.',
    url: 'https://www.smartwebrowse.com/services/google-cloud-services-support',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/google-cloud-services-support',
  },
};

export default function GoogleCloudServicesPage() {
  const services = [
    {
      title: 'Compute Engine',
      description: 'High-performance virtual machines for any workload',
      features: ['Custom machine types', 'Preemptible instances', 'Live migration', 'Sustained use discounts'],
      icon: 'fas fa-server'
    },
    {
      title: 'Cloud Storage',
      description: 'Scalable object storage with global edge locations',
      features: ['Multi-regional storage', 'Lifecycle management', 'Object versioning', 'Access control'],
      icon: 'fas fa-database'
    },
    {
      title: 'Kubernetes Engine (GKE)',
      description: 'Managed Kubernetes for containerized applications',
      features: ['Auto-scaling clusters', 'Multi-zone deployment', 'Node auto-repair', 'Integrated monitoring'],
      icon: 'fas fa-cubes'
    },
    {
      title: 'Cloud Functions',
      description: 'Serverless functions for event-driven applications',
      features: ['Event triggers', 'Auto-scaling', 'Pay-per-use pricing', 'Multiple runtime support'],
      icon: 'fas fa-code'
    },
    {
      title: 'BigQuery',
      description: 'Fully managed data warehouse for analytics',
      features: ['SQL queries', 'Real-time analytics', 'Machine learning integration', 'Cost optimization'],
      icon: 'fas fa-chart-bar'
    },
    {
      title: 'AI & Machine Learning',
      description: 'Pre-trained models and custom ML solutions',
      features: ['Vision API', 'Natural Language API', 'AutoML', 'TensorFlow support'],
      icon: 'fas fa-brain'
    }
  ];

  const benefits = [
    {
      title: 'Innovation First',
      description: 'Access to Google\'s latest AI/ML and data analytics technologies',
      icon: 'fas fa-lightbulb'
    },
    {
      title: 'Global Network',
      description: 'Worldwide infrastructure with low-latency connections',
      icon: 'fas fa-globe'
    },
    {
      title: 'Cost Effective',
      description: 'Competitive pricing with sustained use and committed use discounts',
      icon: 'fas fa-dollar-sign'
    },
    {
      title: 'Security Focused',
      description: 'Enterprise-grade security with compliance certifications',
      icon: 'fas fa-shield-alt'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Google Cloud Services & Support</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Harness the power of Google Cloud Platform with our expert solutions. 
            From infrastructure to AI/ML, we help you innovate and scale.
          </p>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Complete GCP Solutions
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We provide comprehensive Google Cloud services covering compute, storage, 
              containers, serverless, and artificial intelligence solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-2xl mr-4 shadow-sm">
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
              Why Choose Our GCP Services?
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              We leverage Google Cloud\'s cutting-edge technologies to deliver 
              innovative solutions that drive business transformation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 rounded-full bg-gradient-to-br from-primary-400 to-primary-500 flex items-center justify-center text-white text-3xl mx-auto mb-4 shadow-sm">
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Innovate with Google Cloud?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Get a free GCP assessment and discover how we can accelerate your digital transformation.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free GCP Assessment
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
