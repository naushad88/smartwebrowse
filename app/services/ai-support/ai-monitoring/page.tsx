import { Metadata } from 'next';
import MobileCTA from '@/components/MobileCTA';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'AI Monitoring Services | Smartwebrowse India Private Limited',
  description: '24/7 AI system monitoring services to ensure optimal performance, detect issues early, and maintain system reliability.',
  keywords: 'AI Monitoring, AI System Monitoring, AI Performance Monitoring, AI Health Monitoring',
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/ai-support/ai-monitoring',
  },
};

export default function AIMonitoringPage() {
  const features = [
    '24/7 real-time AI system monitoring',
    'Performance metrics tracking and analysis',
    'Proactive alerting and notification system',
    'System health checks and diagnostics',
    'Anomaly detection and early warning',
    'Resource utilization monitoring',
    'User experience and response time tracking',
    'Comprehensive monitoring dashboards and reports'
  ];

  const benefits = [
    {
      title: '24/7 Monitoring',
      description: 'Continuous monitoring of your AI systems around the clock',
      icon: 'fa-clock'
    },
    {
      title: 'Early Detection',
      description: 'Identify and resolve issues before they impact operations',
      icon: 'fa-eye'
    },
    {
      title: 'Performance Insights',
      description: 'Gain valuable insights into AI system performance and trends',
      icon: 'fa-chart-line'
    },
    {
      title: 'Peace of Mind',
      description: 'Know your AI systems are being monitored and protected',
      icon: 'fa-shield-alt'
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

        <div className="container-custom relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                AI Monitoring
              </span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              24/7 AI System Monitoring
            </h1>
            <p className="text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-3xl mx-auto">
              24/7 AI system monitoring services to ensure optimal performance, detect issues early, 
              and maintain system reliability with proactive monitoring and alerting.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-8 py-4 rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105">
                <i className="fas fa-calendar-alt"></i>
                Get Free Consultation
              </Link>
              <Link href="/services/ai-support" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-8 py-4 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300">
                <i className="fas fa-list"></i>
                View All AI Support Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Continuous AI System Monitoring
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                AI monitoring involves continuous tracking of AI system performance, health metrics, 
                and operational status. Our 24/7 monitoring services provide real-time visibility into 
                your AI systems, enabling proactive issue detection and rapid response to potential problems.
              </p>
              <p className="text-base text-gray-600 mb-6 leading-relaxed">
                We monitor system performance, model accuracy, resource utilization, and user experience 
                to ensure your AI systems operate at peak efficiency and deliver optimal results, helping 
                you maintain business continuity and customer satisfaction.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link href="/consultation" className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold px-6 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
                  <i className="fas fa-check-circle"></i>
                  Schedule Free Assessment
                </Link>
                <Link href="/services/ai-support" className="inline-flex items-center gap-2 bg-white text-blue-600 font-semibold px-6 py-3 rounded-xl border-2 border-blue-600 hover:bg-blue-50 transition-all duration-300">
                  Learn About AI Support
                </Link>
              </div>
            </div>
            <div className="card-ai p-8">
              <h3 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
                Monitoring Services Portfolio
              </h3>
              <ul className="space-y-5">
                {[
                  { icon: 'fa-eye', title: 'Real-Time Monitoring', desc: 'Continuous monitoring of AI systems' },
                  { icon: 'fa-bell', title: 'Proactive Alerts', desc: 'Early warning system for issues' },
                  { icon: 'fa-chart-line', title: 'Performance Metrics', desc: 'Track AI system performance' },
                  { icon: 'fa-heartbeat', title: 'Health Checks', desc: 'Regular system health assessments' }
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

      {/* Features */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 circuit-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                Our Services
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Comprehensive AI Monitoring Features
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Our AI monitoring services cover all aspects of system monitoring and performance tracking, 
              ensuring reliable and optimal performance.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div key={index} className="card-ai p-6 flex items-start group hover:-translate-y-1 transition-all duration-300">
                <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white mr-4 flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                  <i className="fas fa-check text-sm"></i>
                </div>
                <span className="text-gray-700 font-medium">{feature}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-16 md:py-20 relative overflow-hidden">
        <div className="absolute inset-0 neural-pattern opacity-10"></div>
        <div className="container-custom relative z-10">
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest bg-blue-50 px-4 py-2 rounded-full">
                Why Choose Us
              </span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-gray-900 via-blue-800 to-indigo-800 bg-clip-text text-transparent">
              Why Choose Our AI Monitoring Services?
            </h2>
            <p className="text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
              We deliver reliable monitoring that ensures your AI systems perform optimally 
              and support your business objectives.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="card-ai p-6 text-center group hover:-translate-y-2 transition-all duration-300">
                <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 flex items-center justify-center text-white text-2xl mx-auto mb-4 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg">
                  <i className={`fas ${benefit.icon}`}></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-blue-700 transition-colors">{benefit.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{benefit.description}</p>
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
        
        {/* Animated Gradient Orbs */}
        <div className="absolute top-10 left-10 w-72 h-72 bg-blue-500/20 rounded-full blur-3xl animate-blob"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-indigo-500/20 rounded-full blur-3xl animate-blob" style={{ animationDelay: '2s' }}></div>
        
        <div className="container-custom relative z-10 text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 bg-gradient-to-r from-white via-blue-200 to-indigo-200 bg-clip-text text-transparent">
              Need AI System Monitoring?
            </h2>
            <p className="text-lg md:text-xl text-blue-100 mb-8 leading-relaxed">
              Let's discuss how our 24/7 AI monitoring services can ensure optimal performance and reliability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="inline-flex items-center gap-2 bg-white text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105">
                <i className="fas fa-calendar-alt"></i>
                Get Free Consultation
              </Link>
              <Link href="/services/ai-support" className="inline-flex items-center gap-2 border-2 border-white text-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300">
                <i className="fas fa-list"></i>
                View All AI Support Services
              </Link>
            </div>
          </div>
        </div>
      </section>
      
      <MobileCTA href="/get-a-quote" bgColor="bg-[#0ea5e9]" hoverColor="hover:bg-[#0284c7]" ringColor="focus:ring-[#0ea5e9]" />
    </div>
  );
}
