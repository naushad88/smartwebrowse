import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'All Development Services | Smartwebrowse India Private Limited',
  description: 'Comprehensive web development, AI integration, custom software, and digital solutions to transform your business with modern technology.',
  keywords: 'Web Development, AI Integration, Custom Software, Digital Solutions, Software Development, Technology Services',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/all-development-services',
  },
};

export default function AllDevelopmentServicesPage() {
  const developmentServices = [
    {
      title: 'Custom Web Development',
      description: 'Build modern, scalable web applications with cutting-edge technologies',
      features: ['React.js & Next.js', 'Full-stack development', 'Responsive design', 'Performance optimization'],
      icon: 'fas fa-code',
      link: '/services/custom-web-development',
      color: 'from-primary-400 to-primary-500'
    },
    {
      title: 'AI Integration Services',
      description: 'Integrate artificial intelligence to automate processes and gain insights',
      features: ['AI strategy & planning', 'Custom AI models', 'Machine learning integration', 'Process automation'],
      icon: 'fas fa-brain',
      link: '/services/ai-integration',
      color: 'from-accent-400 to-accent-500'
    },
    {
      title: 'eCommerce Solutions',
      description: 'Create powerful online stores that drive sales and customer engagement',
      features: ['Custom eCommerce platforms', 'Payment integration', 'Inventory management', 'Customer analytics'],
      icon: 'fas fa-shopping-cart',
      link: '/services/ecommerce-solutions',
      color: 'from-primary-400 to-primary-500'
    },
    {
      title: 'WordPress CMS Development',
      description: 'Professional WordPress solutions for content management and websites',
      features: ['Custom themes & plugins', 'Performance optimization', 'Security hardening', 'SEO optimization'],
      icon: 'fab fa-wordpress',
      link: '/services/wordpress-cms-development',
      color: 'from-accent-400 to-accent-500'
    },
    {
      title: 'Mobile App Development',
      description: 'Native and cross-platform mobile applications for iOS and Android',
      features: ['React Native development', 'Native iOS/Android apps', 'UI/UX design', 'App store optimization'],
      icon: 'fas fa-mobile-alt',
      link: '/services/mobile-app-development',
      color: 'from-primary-400 to-primary-500'
    },
    {
      title: 'API Development & Integration',
      description: 'Robust APIs and seamless third-party integrations',
      features: ['RESTful APIs', 'GraphQL development', 'Third-party integrations', 'API documentation'],
      icon: 'fas fa-plug',
      link: '/services/api-development',
      color: 'from-accent-400 to-accent-500'
    }
  ];

  const technologies = [
    'React.js', 'Next.js', 'Node.js', 'TypeScript', 'Python', 'Java', 'PHP', 'MySQL', 'MongoDB', 'AWS', 'Docker', 'Kubernetes'
  ];

  const benefits = [
    {
      title: 'Expert Development Team',
      description: 'Certified developers with years of experience in modern technologies',
      icon: 'fas fa-users'
    },
    {
      title: 'Agile Methodology',
      description: 'Iterative development process ensuring quality and timely delivery',
      icon: 'fas fa-tasks'
    },
    {
      title: 'Scalable Solutions',
      description: 'Architecture designed to grow with your business needs',
      icon: 'fas fa-expand-arrows-alt'
    },
    {
      title: '24/7 Support',
      description: 'Round-the-clock technical support and maintenance services',
      icon: 'fas fa-clock'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">All Development Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            Comprehensive web development, AI integration, custom software, and digital solutions 
            to transform your business with modern technology and best practices.
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

      {/* Services Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-neutral-900">
              Complete Development Solutions
            </h2>
            <p className="text-body text-neutral-600 max-w-3xl mx-auto">
              We offer end-to-end development services covering web applications, AI integration, 
              eCommerce platforms, and custom software solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {developmentServices.map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-md border border-neutral-100 transition-all duration-300 hover:-translate-y-1">
                <div className="p-6">
                  <div className="flex items-center mb-4">
                    <div className={`w-16 h-16 rounded-xl bg-gradient-to-br ${service.color} flex items-center justify-center text-white text-2xl mr-4 shadow-sm`}>
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
              Modern Technologies We Use
            </h2>
            <p className="text-body text-neutral-600 max-w-3xl mx-auto">
              We leverage cutting-edge technologies to build fast, scalable, and 
              maintainable applications that drive business growth.
            </p>
          </div>
          
          <div className="flex flex-wrap justify-center gap-4">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-neutral-100 hover:bg-primary-100 transition-colors duration-200 px-4 py-2 rounded-full text-neutral-700 font-medium">
                {tech}
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
              Why Choose Our Development Services?
            </h2>
            <p className="text-body text-neutral-600 max-w-3xl mx-auto">
              We combine technical expertise with business acumen to deliver 
              solutions that drive real business value and growth.
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
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Build Your Digital Solution?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss your project requirements and create a custom solution that drives results.
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
