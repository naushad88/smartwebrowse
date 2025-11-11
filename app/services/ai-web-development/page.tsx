import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI & Web Development Services | Smartwebrowse India Private Limited',
  description: 'Transform your business with AI integration, custom web development, eCommerce platforms & WordPress solutions. Expert AI developers deliver scalable results.',
  keywords: 'AI integration, custom web development, eCommerce solutions, WordPress development, AI web apps, AI services',
  openGraph: {
    title: 'AI & Web Development Services | Smartwebrowse India Private Limited',
    description: 'Transform your business with AI integration, custom web development, eCommerce platforms & WordPress solutions. Expert AI developers deliver scalable results.',
    url: 'https://www.smartwebrowse.com/services/ai-web-development',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/ai-web-development',
  },
};

export default function AIWebDevelopmentPage() {
  const subServices = [
    {
      title: 'Custom Web Development',
      description: 'Build modern, scalable web applications with cutting-edge technologies like React.js, Next.js, and Node.js',
      features: ['Full-stack development', 'Responsive design', 'Performance optimization', 'API integration'],
      icon: 'fas fa-code',
      link: '/services/custom-web-development'
    },
    {
      title: 'AI Integration Services',
      description: 'Integrate artificial intelligence to automate processes, gain insights, and create intelligent applications',
      features: ['AI strategy & planning', 'Custom AI models', 'Machine learning integration', 'Process automation'],
      icon: 'fas fa-brain',
      link: '/services/ai-integration'
    },
    {
      title: 'eCommerce Solutions',
      description: 'Create powerful online stores that drive sales and provide exceptional customer experiences',
      features: ['Custom eCommerce platforms', 'Payment gateway integration', 'Inventory management', 'Customer analytics'],
      icon: 'fas fa-shopping-cart',
      link: '/services/ecommerce-solutions'
    },
    {
      title: 'WordPress & CMS Development',
      description: 'Professional WordPress solutions for content management, custom themes, and plugin development',
      features: ['Custom themes & plugins', 'Performance optimization', 'Security hardening', 'SEO optimization'],
      icon: 'fab fa-wordpress',
      link: '/services/wordpress-cms-development'
    }
  ];

  const technologies = [
    { name: 'React.js', icon: 'fab fa-react', category: 'Frontend' },
    { name: 'Next.js', icon: 'fas fa-code', category: 'Frontend' },
    { name: 'Node.js', icon: 'fab fa-node-js', category: 'Backend' },
    { name: 'Python', icon: 'fab fa-python', category: 'Backend' },
    { name: 'Laravel', icon: 'fas fa-fire', category: 'Backend' },
    { name: 'Shopify', icon: 'fas fa-shopping-bag', category: 'E-commerce' },
    { name: 'Magento', icon: 'fas fa-store', category: 'E-commerce' },
    { name: 'WordPress', icon: 'fab fa-wordpress', category: 'CMS' },
    { name: 'Wix', icon: 'fas fa-palette', category: 'CMS' },
    { name: 'Figma', icon: 'fas fa-paint-brush', category: 'Design' },
    { name: 'Cloud', icon: 'fas fa-cloud', category: 'AWS, Azure, GCP' },
    { name: 'Docker', icon: 'fab fa-docker', category: 'DevOps' }
  ];

  const benefits = [
    {
      title: 'AI-Powered Solutions',
      description: 'Leverage artificial intelligence to automate processes and gain competitive advantages',
      icon: 'fas fa-robot'
    },
    {
      title: 'Modern Web Technologies',
      description: 'Built with cutting-edge frameworks ensuring scalability and performance',
      icon: 'fas fa-rocket'
    },
    {
      title: 'Custom Development',
      description: 'Tailored solutions that meet your specific business requirements',
      icon: 'fas fa-cogs'
    },
    {
      title: 'Full-Stack Expertise',
      description: 'End-to-end development from frontend to backend and AI integration',
      icon: 'fas fa-layer-group'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">AI & Web Development Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Comprehensive AI integration, custom web development, eCommerce solutions, and WordPress CMS development 
            to transform your business with modern technology and intelligent automation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mt-8">
            <Link href="/consultation" className="btn-primary">
              Get Free Development Consultation
            </Link>
            <Link href="/portfolio" className="btn-outline border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              View Our Portfolio
            </Link>
          </div>
        </div>
      </section>

      {/* Sub-Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-neutral-900">
              Complete AI & Web Development Solutions
            </h2>
            <p className="text-body text-neutral-600 max-w-3xl mx-auto">
              We offer end-to-end development services covering artificial intelligence integration, 
              custom web applications, eCommerce platforms, and content management systems.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {subServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1">
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
                        <i className="fas fa-check text-primary-500 mr-2"></i>
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

      {/* Technologies */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-neutral-900">
              Technologies We Use
            </h2>
            <p className="text-body text-neutral-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies including modern web frameworks, e-commerce platforms, 
              CMS systems, design tools, and cloud services to deliver powerful solutions.
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
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-neutral-900">
              Why Choose Our AI & Web Development Services?
            </h2>
            <p className="text-body text-neutral-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver 
              solutions that drive real business value and competitive advantages.
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
                Ready to Transform Your Business with AI & Web Development?
              </h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create intelligent solutions that drive results.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Free Development Assessment
                </Link>
                <Link href="/portfolio" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  View Our Work
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
