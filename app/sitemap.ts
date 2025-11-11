import { MetadataRoute } from 'next'

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://www.smartwebrowse.com'
  
  // Static pages
  const staticPages = [
    {
      url: baseUrl,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/services`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/consultation`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/portfolio`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/plugins`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/plugins/nmi-payment-gateway-pro`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/careers`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/send-resume`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/blogs`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/case-studies`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/client-reviews`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/get-a-quote`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/webinars`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/whitepapers`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.5,
    },
    {
      url: `${baseUrl}/faqs`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
    {
      url: `${baseUrl}/privacy-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/terms-of-service`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
    {
      url: `${baseUrl}/cookie-policy`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.3,
    },
  ]

  // Service pages - Static list for now to avoid build issues
  const servicePages = [
    '/services/ai-web-development',
    '/services/application-testing',
    '/services/cloud-services',
    '/services/cybersecurity-services',
    '/services/mobile-app-development',
    '/services/digital-marketing',
    '/services/devops-automation-services',
    '/services/iam-setup-auditing',
    '/services/aws-cloud-services',
    '/services/microsoft-azure-services',
    '/services/google-cloud-services-support',
    '/services/wordpress-cms-development',
    '/services/ecommerce-solutions',
    '/services/custom-web-development',
    '/services/ai-integration',
    '/services/security-assessment',
    '/services/performance-testing',
    '/services/automated-testing',
    '/services/cloud-migration',
    '/services/network-management',
    '/services/it-infrastructure-support',
    '/services/help-desk-services',
    '/services/24-7-it-support',
    '/services/it-services-support',
    '/services/custom-mobile-solutions',
    '/services/cross-platform-development',
    '/services/android-development',
    '/services/ios-development',
    '/services/content-marketing',
    '/services/seo-optimization',
    '/services/social-media-management',
    '/services/analytics-reporting',
    '/services/sso-mfa-rbac',
    '/services/devops-consulting',
    '/services/infrastructure-as-code',
    '/services/qa-process-optimization',
    '/services/regulatory-compliance',
    '/services/security-testing',
    '/services/ci-cd-pipeline',
    '/services/monitoring-logging',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  // Blog posts - Static for now to avoid build issues
  const blogPages: MetadataRoute.Sitemap = []

  // Additional service-specific pages
  const additionalServicePages = [
    '/aws-cloud-services-support',
    '/google-cloud-services-support',
    '/microsoft-azure-cloud-services',
    '/devops-automation-services',
    '/hybrid-cloud-solutions',
    '/virtual-desktop-infrastructure',
    '/azure-ad-support-services',
    '/application-and-data-modernisation',
    '/cloud-support-services',
    '/office365-migration-support',
    '/backup-disaster-recovery-solutions',
    '/cloud-cost-optimization',
    '/vapt-services',
    '/managed-siem',
    '/managed-soc-services',
    '/managed-cyber-security-services',
    '/azure-cloud-security-assessment',
  ].map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  return [
    ...staticPages,
    ...servicePages,
    ...blogPages,
    ...additionalServicePages,
  ]
}





