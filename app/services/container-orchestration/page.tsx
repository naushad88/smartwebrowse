import { Metadata } from 'next';
import Link from 'next/link';
import Icon from '@/components/Icon';

export const metadata: Metadata = {
  title: 'Container Orchestration Services | Kubernetes, Docker Swarm, ECS/EKS, AKS',
  description: 'Expert container orchestration services for Kubernetes, Docker Swarm, ECS/EKS, and AKS. Scale and manage containerized applications efficiently with our proven solutions.',
  keywords: 'container orchestration, kubernetes, docker swarm, ECS, EKS, AKS, container management, microservices, cloud containers',
  openGraph: {
    title: 'Container Orchestration Services | Smartwebrowse India Private Limited',
    description: 'Expert container orchestration services for Kubernetes, Docker Swarm, ECS/EKS, and AKS. Scale and manage containerized applications efficiently.',
    url: 'https://www.smartwebrowse.com/services/container-orchestration',
    siteName: 'Smartwebrowse India Private Limited',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Container Orchestration Services | Smartwebrowse India Private Limited',
    description: 'Expert container orchestration services for Kubernetes, Docker Swarm, ECS/EKS, and AKS. Scale and manage containerized applications efficiently.',
  },
  alternates: {
    canonical: 'https://www.smartwebrowse.com/services/container-orchestration',
  },
};

export default function ContainerOrchestrationPage() {
  const services = [
    {
      title: 'Kubernetes Management',
      description: 'Complete Kubernetes cluster setup, management, and optimization for production workloads',
      features: ['Cluster provisioning and configuration', 'Pod scheduling and resource management', 'Service mesh implementation', 'Auto-scaling and load balancing'],
      icon: 'fa-solid fa-cubes'
    },
    {
      title: 'Docker Swarm Orchestration',
      description: 'Container orchestration using Docker Swarm for simplified deployment and management',
      features: ['Swarm cluster setup', 'Service discovery and load balancing', 'Rolling updates and rollbacks', 'Multi-host networking'],
      icon: 'fa-solid fa-layer-group'
    },
    {
      title: 'AWS ECS/EKS Services',
      description: 'Managed container services on AWS with ECS and EKS for scalable applications',
      features: ['ECS cluster management', 'EKS Kubernetes service', 'Fargate serverless containers', 'Service integration and monitoring'],
      icon: 'fab fa-aws'
    },
    {
      title: 'Azure AKS Management',
      description: 'Azure Kubernetes Service setup and management for enterprise applications',
      features: ['AKS cluster deployment', 'Node pool management', 'Azure AD integration', 'Monitoring and logging setup'],
      icon: 'fab fa-microsoft'
    },
    {
      title: 'Container Security',
      description: 'Comprehensive security measures for containerized applications and orchestration platforms',
      features: ['Image vulnerability scanning', 'Runtime security monitoring', 'Network policy enforcement', 'Secrets management'],
      icon: 'fa-solid fa-shield-alt'
    },
    {
      title: 'Monitoring & Observability',
      description: 'Complete monitoring solution for container orchestration platforms and applications',
      features: ['Cluster health monitoring', 'Application performance tracking', 'Log aggregation and analysis', 'Alerting and incident response'],
      icon: 'fa-solid fa-chart-line'
    }
  ];

  const benefits = [
    {
      title: 'Scalability',
      description: 'Automatically scale applications based on demand and resource utilization'
    },
    {
      title: 'High Availability',
      description: 'Ensure application uptime with built-in redundancy and failover mechanisms'
    },
    {
      title: 'Resource Optimization',
      description: 'Maximize resource utilization and reduce costs through intelligent scheduling'
    },
    {
      title: 'Simplified Management',
      description: 'Streamline container deployment, updates, and maintenance processes'
    }
  ];

  const technologies = [
    { name: 'Kubernetes', icon: 'fa-solid fa-cubes' },
    { name: 'Docker Swarm', icon: 'fa-solid fa-layer-group' },
    { name: 'AWS ECS', icon: 'fab fa-aws' },
    { name: 'AWS EKS', icon: 'fab fa-aws' },
    { name: 'Azure AKS', icon: 'fab fa-microsoft' },
    { name: 'Helm', icon: 'fa-solid fa-anchor' },
    { name: 'Istio', icon: 'fa-solid fa-network-wired' },
    { name: 'Prometheus', icon: 'fa-solid fa-chart-line' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary-50 via-primary-100 to-primary-200 text-primary-900 py-16 pt-24">
        <div className="container-custom text-center">
          <h1 className="heading-1 mb-6 text-primary-900">Container Orchestration Services</h1>
          <p className="text-lg md:text-xl text-primary-700 max-w-4xl mx-auto mb-8">
            Expert container orchestration solutions to scale and manage your containerized applications efficiently. 
            From Kubernetes to Docker Swarm, we help you achieve optimal performance and reliability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/consultation" className="btn-primary text-lg px-8 py-4">
              Get Free Consultation
            </Link>
            <Link href="/services/devops-automation-services" className="btn-outline text-lg px-8 py-4 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white">
              View All DevOps Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Comprehensive Container Orchestration Solutions</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We provide end-to-end container orchestration services that streamline your containerized application deployment, 
              management, and scaling across multiple platforms and cloud providers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-primary-200">
                <div className="mb-4">
                  <div className="w-12 h-12 bg-gradient-to-br from-primary-500 to-primary-600 rounded-lg flex items-center justify-center text-white text-xl mb-4">
                    <i className={service.icon}></i>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                </div>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-sm text-gray-600">
                      <Icon name="fas fa-check" className="text-green-500 mr-2 text-xs" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Why Choose Our Container Orchestration Services?</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              We deliver measurable results that enhance your containerized application performance and support your business objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-br from-accent-500 to-accent-600 rounded-full flex items-center justify-center text-white text-2xl mx-auto mb-4">
                  <i className="fa-solid fa-check-circle"></i>
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies Section */}
      <section className="py-16 bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-2 mb-4">Technologies We Work With</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Our expertise spans across all major container orchestration platforms and tools.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6">
            {technologies.map((tech, index) => (
              <div key={index} className="bg-white rounded-lg p-4 text-center hover:shadow-lg transition-all duration-300 border border-gray-100">
                <div className="w-12 h-12 bg-gradient-to-br from-gray-100 to-gray-200 rounded-lg flex items-center justify-center text-gray-600 text-xl mx-auto mb-2">
                  <i className={tech.icon}></i>
                </div>
                <p className="text-sm font-medium text-gray-700">{tech.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-primary-600 to-primary-700 text-white">
        <div className="container-custom text-center">
          <div className="max-w-4xl mx-auto">
            <h2 className="heading-2 mb-4 text-white">Ready to Optimize Your Container Orchestration?</h2>
            <p className="text-xl text-primary-100 mb-8">
              Let's discuss how our container orchestration services can help you scale your applications 
              and improve operational efficiency.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/consultation" className="bg-white text-primary-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Schedule Free Consultation
              </Link>
              <Link href="/services/devops-automation-services" className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-primary-600 transition-all duration-300">
                View All DevOps Services
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
