import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'About Smartwebrowse India Private Limited | Leading AI Startup',
  description: 'Discover Smartwebrowse India Private Limited\'s journey as a leading AI startup. Expert AI services, automation, and AI support trusted by businesses worldwide.',
  keywords: 'about Smartwebrowse, AI startup company, AI services provider, automation services, AI consulting',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/about',
  },
  openGraph: {
    title: 'About Smartwebrowse India Private Limited | Leading AI Startup',
    description: 'Discover Smartwebrowse India Private Limited\'s journey as a leading AI startup. Expert AI services, automation, and AI support trusted by businesses worldwide.',
    url: 'https://www.smartwebrowse.com/about',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
};

export default function AboutPage() {
  const values = [
    {
      title: 'AI Innovation',
      description: 'We continuously explore cutting-edge AI technologies and methodologies to deliver intelligent solutions.',
      icon: 'fas fa-brain',
      color: 'from-yellow-500 to-orange-500'
    },
    {
      title: 'AI Excellence',
      description: 'We maintain the highest standards of quality in every AI project and automation solution we deliver.',
      icon: 'fas fa-star',
      color: 'from-blue-500 to-purple-500'
    },
    {
      title: 'Intelligent Automation',
      description: 'We build trust through intelligent automation, transparent AI processes, and ethical AI practices.',
      icon: 'fas fa-robot',
      color: 'from-green-500 to-teal-500'
    },
    {
      title: 'AI Partnership',
      description: 'We work closely with our clients to understand their needs and deliver tailored AI solutions.',
      icon: 'fas fa-users',
      color: 'from-red-500 to-pink-500'
    }
  ];

  const timeline = [
    { year: '2020', title: 'Company Founded', description: 'Started as an AI startup focused on intelligent automation and AI services' },
    { year: '2021', title: 'AI Services Launch', description: 'Launched comprehensive AI services and automation solutions' },
    { year: '2022', title: 'AI Infrastructure', description: 'Established scalable AI infrastructure and AI support services' },
    { year: '2023', title: 'AI Innovation', description: 'Introduced cutting-edge AI solutions and advanced automation services' },
    { year: '2024', title: 'AI Leadership', description: 'Recognized as a leading AI startup with expertise in AI services and automation' },
    { year: '2025', title: 'AI Transformation', description: 'Leading businesses through AI transformation with intelligent solutions' }
  ];

  const team = [
    {
      name: 'AI Leadership Team',
      role: 'CEO & Founder',
      description: 'Expert in AI services, machine learning, and intelligent automation with deep AI expertise.',
      image: '/images/team/naushad.jpg'
    },
    {
      name: 'AI Technology Team',
      role: 'CTO & AI Lead',
      description: 'Expert in AI development, AI infrastructure, and cutting-edge AI technologies.',
      image: '/images/team/sarah.jpg'
    },
    {
      name: 'AI Solutions Team',
      role: 'Head of AI Services',
      description: 'AI consulting and automation professional with expertise in AI integration and AI analytics.',
      image: '/images/team/michael.jpg'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">About Smartwebrowse India Private Limited</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-3xl mx-auto">
            We're a leading AI startup company dedicated to transforming businesses through 
            intelligent AI services, automation solutions, and exceptional AI support.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="heading-2 mb-6 text-gray-900">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Founded as an AI startup, Smartwebrowse India Private Limited has grown to become a
                leading AI services provider, delivering intelligent automation and AI solutions to 
                businesses across multiple industries.
              </p>
              <p className="text-body text-gray-600 mb-6">
                Today, we're proud to serve clients globally, helping them navigate the complexities of 
                AI transformation with confidence and expertise. Our AI services, automation solutions, 
                and 24/7 AI support drive business success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">200+</div>
                  <div className="text-gray-600">AI Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary-600 mb-2">150+</div>
                  <div className="text-gray-600">Automation Solutions</div>
                </div>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="heading-3 mb-6 text-gray-900">What We Do</h3>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <i className="fas fa-brain text-primary-600 mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Services Provider</h4>
                    <p className="text-gray-600">Comprehensive AI solutions and AI consulting</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-robot text-primary-600 mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">Automation Services</h4>
                    <p className="text-gray-600">Intelligent process and workflow automation</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-headset text-primary-600 mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Support & Maintenance</h4>
                    <p className="text-gray-600">24/7 AI system support and monitoring</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <i className="fas fa-chart-line text-primary-600 mt-1 mr-3"></i>
                  <div>
                    <h4 className="font-semibold text-gray-900">AI Analytics</h4>
                    <p className="text-gray-600">AI-powered analytics and predictive insights</p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Our Core Values
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              These fundamental principles guide everything we do and shape the way we 
              serve our clients and work with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${value.color} flex items-center justify-center text-white text-3xl mx-auto mb-4`}>
                  <i className={value.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section - Redesigned */}
      <section className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50">
        <div className="container-custom">
          <div className="text-center mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary-100 text-primary-800 rounded-full text-sm font-medium mb-6">
              <i className="fas fa-rocket mr-2"></i>
              Company Evolution
            </div>
            <h2 className="heading-2 mb-6 text-gray-900">Our AI Journey</h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              From an AI startup to a leading AI services provider, discover the milestones that shaped our success in AI and automation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* 2013 - Foundation */}
            <div className="group relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Year Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-blue-600 rounded-full text-white text-2xl font-bold mb-6 shadow-lg">
                  2020
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Startup Founded</h3>
                <p className="text-gray-600 mb-6">Started as an AI startup with a vision to transform businesses through intelligent AI services and automation.</p>
                
                {/* Achievement Icon */}
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-brain text-blue-600 text-2xl"></i>
                </div>
              </div>
            </div>

            {/* 2015 - Cloud Services */}
            <div className="group relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-green-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Year Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-green-500 to-green-600 rounded-full text-white text-2xl font-bold mb-6 shadow-lg">
                  2021
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Services Launch</h3>
                <p className="text-gray-600 mb-6">Launched comprehensive AI services and automation solutions, helping businesses transform with AI.</p>
                
                {/* Achievement Icon */}
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-robot text-green-600 text-2xl"></i>
                </div>
              </div>
            </div>

            {/* 2018 - Global Expansion */}
            <div className="group relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-purple-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Year Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-purple-500 to-purple-600 rounded-full text-white text-2xl font-bold mb-6 shadow-lg">
                  2022
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Infrastructure</h3>
                <p className="text-gray-600 mb-6">Established scalable AI infrastructure and AI support services to serve clients globally.</p>
                
                {/* Achievement Icon */}
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-server text-purple-600 text-2xl"></i>
                </div>
              </div>
            </div>

            {/* 2020 - Cybersecurity Focus */}
            <div className="group relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-red-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Year Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-red-500 to-red-600 rounded-full text-white text-2xl font-bold mb-6 shadow-lg">
                  2023
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Innovation</h3>
                <p className="text-gray-600 mb-6">Introduced cutting-edge AI solutions and advanced automation services to transform businesses.</p>
                
                {/* Achievement Icon */}
                <div className="w-16 h-16 bg-red-100 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-lightbulb text-red-600 text-2xl"></i>
                </div>
              </div>
            </div>

            {/* 2023 - AI & Innovation */}
            <div className="group relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Year Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-yellow-500 to-yellow-600 rounded-full text-white text-2xl font-bold mb-6 shadow-lg">
                  2023
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI & Innovation</h3>
                <p className="text-gray-600 mb-6">Introduced AI-powered solutions to drive automation and intelligent decision-making.</p>
                
                {/* Achievement Icon */}
                <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-brain text-yellow-600 text-2xl"></i>
                </div>
              </div>
            </div>

            {/* 2024 - Industry Leader */}
            <div className="group relative">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-8 text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden">
                {/* Background Pattern */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-orange-50 to-transparent rounded-full -translate-y-16 translate-x-16 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                {/* Year Badge */}
                <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-orange-500 to-orange-600 rounded-full text-white text-2xl font-bold mb-6 shadow-lg">
                  2024
                </div>
                
                {/* Content */}
                <h3 className="text-xl font-bold text-gray-900 mb-4">AI Leadership</h3>
                <p className="text-gray-600 mb-6">Recognized as a leading AI startup with expertise in AI services, automation, and AI support.</p>
                
                {/* Achievement Icon */}
                <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto">
                  <i className="fas fa-trophy text-orange-600 text-2xl"></i>
                </div>
              </div>
            </div>
          </div>

          {/* Connection Lines */}
          <div className="hidden lg:block mt-12">
            <div className="flex justify-center space-x-8">
              <div className="w-16 h-0.5 bg-gradient-to-r from-blue-500 to-green-500"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-green-500 to-purple-500"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-purple-500 to-red-500"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-red-500 to-yellow-500"></div>
              <div className="w-16 h-0.5 bg-gradient-to-r from-yellow-500 to-orange-500"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-6 text-gray-900">
              Meet Our Leadership Team
            </h2>
            <p className="text-body text-gray-600 max-w-3xl mx-auto">
              Our experienced leadership team brings together decades of expertise in 
              technology, business, and innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="text-center">
                <div className="w-32 h-32 rounded-full bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center text-white text-4xl mx-auto mb-4">
                  <i className="fas fa-user"></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">{member.name}</h3>
                <div className="text-primary-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600">{member.description}</p>
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
              <div className="absolute inset-0 rounded-3xl bg-white/20 bg-[radial-gradient(circle,rgba(255,255,255,0.3)_1px,transparent_1px)] bg-[length:20px_20px]"></div>
            </div>
            
            <div className="relative z-10">
              <h2 className="text-3xl font-bold text-white mb-4">Ready to Transform with AI?</h2>
              <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                Let's discuss how our AI expertise and automation solutions can help transform your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/get-a-quote" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                  Get Started Today
                </Link>
                <Link href="/services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                  Explore Our Services
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
