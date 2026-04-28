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
      color: 'from-blue-500 to-indigo-500'
    },
    {
      title: 'AI Excellence',
      description: 'We maintain the highest standards of quality in every AI project and automation solution we deliver.',
      icon: 'fas fa-star',
      color: 'from-purple-500 to-pink-500'
    },
    {
      title: 'Intelligent Automation',
      description: 'We build trust through intelligent automation, transparent AI processes, and ethical AI practices.',
      icon: 'fas fa-robot',
      color: 'from-cyan-500 to-blue-500'
    },
    {
      title: 'AI Partnership',
      description: 'We work closely with our clients to understand their needs and deliver tailored AI solutions.',
      icon: 'fas fa-users',
      color: 'from-indigo-500 to-purple-500'
    }
  ];

  const timeline = [
    { year: '2013', title: 'Company Founded', description: 'Smartwebrowse India Private Limited was founded in June 2013, establishing a strong foundation in technology services', icon: 'fa-building', color: 'from-blue-500 to-blue-600' },
    { year: '2021', title: 'Technology Expansion', description: 'Expanded technology services and built expertise across multiple domains', icon: 'fa-cogs', color: 'from-green-500 to-green-600' },
    { year: '2022', title: 'Infrastructure Growth', description: 'Established scalable infrastructure and expanded service capabilities', icon: 'fa-server', color: 'from-purple-500 to-purple-600' },
    { year: '2023', title: 'Innovation Focus', description: 'Introduced innovative solutions and advanced technology services', icon: 'fa-lightbulb', color: 'from-orange-500 to-orange-600' },
    { year: '2024', title: 'AI Transformation', description: 'Acquired by Ishpreet Kaur & Sheeba Parveen. Strategic pivot towards AI technology, focusing on AI automation, AI development, and comprehensive AI solutions. Beginning of our journey to stay one step ahead in the AI world.', icon: 'fa-brain', color: 'from-pink-500 to-rose-600' },
    { year: '2025', title: 'AI Leadership', description: 'Recognized as a leading AI company with exceptional expertise in AI automation, AI development, and AI services. Delivering cutting-edge solutions that transform businesses.', icon: 'fa-rocket', color: 'from-indigo-500 to-indigo-600' }
  ];

  const team = [
    {
      name: 'Ishpreet Kaur',
      role: 'Co-Acquirer & Leader',
      description: 'Visionary leader who acquired Smartwebrowse in 2024 and spearheaded the AI transformation. Expert in AI automation, AI development, and strategic AI implementation. Driving women empowerment in technology while staying ahead in the AI world.',
      icon: 'fa-user-tie'
    },
    {
      name: 'Sheeba Parveen',
      role: 'Co-Acquirer & Leader',
      description: 'Innovative leader who co-acquired the company in 2024 and transformed it into an AI powerhouse. Expert in AI development, AI infrastructure, and cutting-edge AI technologies. Championing women in tech and leading AI innovation.',
      icon: 'fa-code'
    },
    {
      name: 'Women Empowerment Team',
      role: 'AI Leadership',
      description: 'A dedicated team of women professionals leading AI automation, AI development, AI consulting, and comprehensive AI integration services. Delivering exceptional results in the AI space.',
      icon: 'fa-users'
    }
  ];

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
          <div className="inline-block mb-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
              About Us
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
            About Smartwebrowse
          </h1>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            A pure women empowerment company acquired by visionary leaders Ishpreet Kaur & Sheeba Parveen in 2024. 
            We're a leading AI technology company dedicated to transforming businesses through 
            intelligent AI services, automation solutions, and exceptional AI support, staying one step ahead in the AI world.
          </p>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div
            >
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Our Story
              </h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Smartwebrowse India Private Limited was founded in June 2013, establishing itself as a technology 
                company with a strong foundation. In April 2026, the company was acquired by visionary leaders 
                <strong className="text-gray-900"> Ishpreet Kaur & Sheeba Parveen</strong>, marking a transformative moment in our journey.
              </p>
              <div className="mb-8 p-6 rounded-2xl bg-gradient-to-br from-pink-50 via-rose-50 to-purple-50 border-2 border-pink-200">
                <h3 className="text-xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                  <i className="fas fa-handshake text-pink-600"></i>
                  The April 2026 Transformation
                </h3>
                <p className="text-base text-gray-700 leading-relaxed mb-4">
                  After acquiring Smartwebrowse in April 2026, <strong className="text-gray-900">Ishpreet Kaur & Sheeba Parveen</strong> 
                  immediately recognized the potential to transform the company into an AI powerhouse. They strategically 
                  pivoted the entire organization towards AI technology, making it our core focus and competitive advantage.
                </p>
                <p className="text-base text-gray-700 leading-relaxed">
                  Under their visionary leadership, we've excelled in <strong className="text-gray-900">AI automation, AI development, 
                  and comprehensive AI services</strong>. This transformation has positioned us as a leader in the AI space, 
                  delivering exceptional results and staying <strong className="text-gray-900">one step ahead in the AI world</strong>.
                </p>
              </div>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                Today, we're proud to serve clients globally, helping them navigate the complexities of 
                AI transformation with confidence and expertise. Our AI services, automation solutions, 
                and 24/7 AI support drive business success.
              </p>
              <div className="grid grid-cols-2 gap-6">
                <div className="card-ai p-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">200+</div>
                  <div className="text-gray-600 font-medium">AI Projects Delivered</div>
                </div>
                <div className="card-ai p-6 text-center">
                  <div className="text-4xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">150+</div>
                  <div className="text-gray-600 font-medium">Automation Solutions</div>
                </div>
              </div>
            </div>
            <div
              className="card-ai p-8"
            >
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                What We Do
              </h3>
              <ul className="space-y-5">
                {[
                  { icon: 'fa-brain', title: 'AI Services Provider', desc: 'Comprehensive AI solutions and AI consulting' },
                  { icon: 'fa-robot', title: 'Automation Services', desc: 'Intelligent process and workflow automation' },
                  { icon: 'fa-headset', title: 'AI Support & Maintenance', desc: '24/7 AI system support and monitoring' },
                  { icon: 'fa-chart-line', title: 'AI Analytics', desc: 'AI-powered analytics and predictive insights' }
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start group">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-lg mr-4 group-hover:scale-110 transition-transform duration-300 flex-shrink-0">
                      <i className={`fas ${item.icon}`}></i>
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 group-hover:text-blue-700 transition-colors">{item.title}</h4>
                      <p className="text-gray-600 text-sm">{item.desc}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Company Values */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                Our Values
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Our Core Values
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              These fundamental principles guide everything we do and shape the way we 
              serve our clients and work with our team.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="card-ai p-6 text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${value.color} flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                  <i className={value.icon}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{value.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Journey Section */}
      <section className="py-20 md:py-24 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-15"></div>
        <div className="container-custom relative z-10">
          <div
            className="text-center mb-16"
          >
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                Our Journey
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Our AI Journey
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              From a technology company founded in 2013 to a leading AI powerhouse after acquisition in 2024, 
              discover the milestones that shaped our transformation and success in AI automation, AI development, and AI innovation.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="group relative"
              >
                <div className="card-ai p-6 text-center hover:shadow-2xl transition-all duration-500 relative overflow-hidden h-full">
                  {/* Animated background gradient on hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${item.color} opacity-0 group-hover:opacity-5 transition-opacity duration-500 rounded-2xl`}></div>
                  
                  {/* Year Badge */}
                  <div className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${item.color} rounded-2xl text-white text-xl font-bold mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10`}>
                    {item.year}
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors relative z-10">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 relative z-10">{item.description}</p>
                  
                  {/* Achievement Icon */}
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-100 to-indigo-100 flex items-center justify-center mx-auto group-hover:scale-110 transition-transform duration-300 relative z-10">
                    <i className={`fas ${item.icon} text-blue-600 text-xl`}></i>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div
            className="text-center mb-12"
          >
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                Our Team
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Meet Our Leadership Team
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              A pure women empowerment company led by visionary leaders Ishpreet Kaur & Sheeba Parveen, 
              who acquired the company in 2024 and transformed it into an AI-focused powerhouse. 
              Our experienced leadership team brings together decades of expertise in 
              AI technology, business, and innovation, championing women in tech and staying one step ahead in the AI world.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="card-ai p-8 text-center group hover:-translate-y-2 transition-all duration-300"
              >
                <div className="w-24 h-24 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-3xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <i className={`fas ${member.icon}`}></i>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-blue-700 transition-colors">{member.name}</h3>
                <div className="text-blue-600 font-semibold mb-3">{member.role}</div>
                <p className="text-gray-600 text-sm leading-relaxed">{member.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900"></div>
        <div className="absolute inset-0 neural-pattern opacity-20"></div>
        <div className="absolute inset-0 circuit-pattern opacity-15 animate-circuit-flow"></div>
        
        <div className="container-custom relative z-10 text-center">
          <div
            className="relative overflow-hidden bg-gradient-to-r from-blue-600/90 via-indigo-600/90 to-purple-600/90 backdrop-blur-xl rounded-3xl p-12 shadow-2xl border border-white/20"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Ready to Transform with AI?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto leading-relaxed">
              Let's discuss how our AI expertise and automation solutions can help transform your business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                href="/get-a-quote" 
                className="inline-flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
                <i className="fas fa-arrow-right ml-2"></i>
              </Link>
              <Link 
                href="/services" 
                className="inline-flex items-center justify-center px-8 py-4 glass-effect border-2 border-white/40 text-white rounded-xl font-bold hover:bg-white/10 hover:border-white/60 transition-all duration-300"
              >
                Explore Our Services
                <i className="fas fa-chevron-right ml-2"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
