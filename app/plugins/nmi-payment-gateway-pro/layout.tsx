import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'NMI Payment Gateway Pro for WooCommerce | Praelix Technologies',
  description: 'Complete NMI payment gateway integration for WooCommerce with PCI DSS compliance, WooCommerce Blocks support, subscription management, and advanced features. Developed by Praelix Technologies.',
  keywords: 'NMI payment gateway, WooCommerce payment, PCI DSS compliance, payment processing, e-commerce, WordPress plugin',
  alternates: {
    canonical: 'https://www.praelixtechnologies.com/plugins/nmi-payment-gateway-pro',
  },
  openGraph: {
    title: 'NMI Payment Gateway Pro for WooCommerce | Secure Payment Processing',
    description: 'Complete NMI payment gateway integration for WooCommerce with PCI DSS compliance, WooCommerce Blocks support, subscription management, and advanced features.',
    url: 'https://www.praelixtechnologies.com/plugins/nmi-payment-gateway-pro',
    siteName: 'Praelix Technologies',
    type: 'website',
    images: [
      {
        url: '/images/nmi-plugin-hero.jpg',
        width: 1200,
        height: 630,
        alt: 'NMI Payment Gateway Pro for WooCommerce',
      },
    ],
  },
};

export default function Layout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}



