'use client';

import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Suspense, useState } from 'react';

function ThankYouContent() {
  const searchParams = useSearchParams();
  const email = searchParams.get('email');
  const orderId = searchParams.get('orderId');
  const licenseQuantity = searchParams.get('licenseQuantity') || '1';
  const extendedSupport = searchParams.get('extendedSupport') === 'true';
  const totalPrice = searchParams.get('totalPrice') || '59.00';
  const [downloading, setDownloading] = useState(false);

  // Debug logging
  console.log('Thank you page parameters:', {
    email,
    orderId,
    licenseQuantity,
    extendedSupport,
    totalPrice,
    allParams: Object.fromEntries(searchParams.entries())
  });

  const handleDownload = async () => {
    setDownloading(true);
    try {
      // Direct download link to the plugin file
      const downloadUrl = '/network-merchants-inc-gateway-for-woocommerce-1.0.1-clean.zip';
      const a = document.createElement('a');
      a.href = downloadUrl;
      a.download = 'network-merchants-inc-gateway-for-woocommerce-1.0.1-clean.zip';
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
    } catch (error) {
      console.error('Download failed:', error);
      alert('Download failed. Please check your email for the download link.');
    } finally {
      setDownloading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 pt-24 pb-12">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          {/* Success Icon */}
          <div className="mb-8">
            <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg">
              <i className="fas fa-check text-white text-4xl"></i>
            </div>
          </div>

          {/* Success Message */}
          <h1 className="text-4xl lg:text-5xl font-bold text-neutral-900 mb-4 font-heading">
            Thank You for Your Purchase!
          </h1>
          <p className="text-xl text-neutral-700 mb-8">
            Your order has been confirmed and we've sent the plugin to your email address.
          </p>

          {/* Order Details */}
          {orderId && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <h3 className="text-lg font-semibold text-neutral-900 mb-4">Order Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left">
                <div>
                  <p className="text-sm text-neutral-600">Order ID:</p>
                  <p className="font-semibold text-neutral-900">{orderId}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Product:</p>
                  <p className="font-semibold text-neutral-900">Network Merchants Inc Gateway for WooCommerce</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Licenses:</p>
                  <p className="font-semibold text-neutral-900">{licenseQuantity} ({licenseQuantity === '1' ? 'license' : 'licenses'})</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Extended Support:</p>
                  <p className="font-semibold text-neutral-900">{extendedSupport ? 'Yes - 12 months' : 'No - 6 months included'}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Total Paid:</p>
                  <p className="font-semibold text-green-600">${totalPrice}</p>
                </div>
                <div>
                  <p className="text-sm text-neutral-600">Status:</p>
                  <p className="font-semibold text-green-600">✓ Completed</p>
                </div>
              </div>
            </div>
          )}

          {email && (
            <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
              <p className="text-neutral-600 mb-2">Confirmation sent to:</p>
              <p className="text-primary-600 font-semibold text-lg">{email}</p>
            </div>
          )}

          {/* Plugin Info Card */}
          <div className="bg-white rounded-lg shadow-lg p-8 mb-8">
            <div className="mb-6">
              <Image
                src="/images/Plugin-Cover.jpg"
                alt="Network Merchants Inc Gateway"
                width={300}
                height={200}
                className="rounded-lg mx-auto"
              />
            </div>
            <h2 className="text-2xl font-bold text-neutral-900 mb-2">
              Network Merchants Inc Gateway (NMI) for WooCommerce
            </h2>
            <p className="text-neutral-600 mb-6">
              Your download link has been sent to your email. You can also download it below.
            </p>

            {/* Download Button */}
            <button
              onClick={handleDownload}
              disabled={downloading}
              className="btn-primary text-lg px-8 py-4 inline-flex items-center gap-2"
            >
              {downloading ? (
                <>
                  <i className="fas fa-spinner fa-spin"></i>
                  Downloading...
                </>
              ) : (
                <>
                  <i className="fas fa-download"></i>
                  Download Plugin Now
                </>
              )}
            </button>
          </div>

          {/* Important Information */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-envelope text-blue-500 text-xl"></i>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Check Your Email</h3>
              <p className="text-sm text-neutral-600">
                The plugin and installation instructions have been sent to your email inbox.
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-12 h-12 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-headset text-purple-500 text-xl"></i>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Need Help?</h3>
              <p className="text-sm text-neutral-600">
                Contact us at <a href="mailto:nmi-support@smartwebrowse.com" className="text-primary-600 hover:underline">nmi-support@smartwebrowse.com</a>
              </p>
            </div>

            <div className="bg-white rounded-lg shadow p-6">
              <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <i className="fas fa-file-alt text-green-500 text-xl"></i>
              </div>
              <h3 className="font-semibold text-neutral-900 mb-2">Documentation</h3>
              <p className="text-sm text-neutral-600">
                Installation guide is included in your email.
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/plugins" className="btn-secondary text-lg px-8 py-3 inline-flex items-center gap-2">
              <i className="fas fa-arrow-left"></i>
              Back to Plugins
            </Link>
            <a
              href="/docs/Installation & Setup Guide for NMI Payment Gateway Plugin.pdf"
              download="Installation & Setup Guide for NMI Payment Gateway Plugin.pdf"
              className="btn-secondary text-lg px-8 py-3 inline-flex items-center gap-2"
            >
              <i className="fas fa-download"></i>
              View Documentation
            </a>
          </div>

          {/* Support Info */}
          <div className="mt-12 bg-primary-50 rounded-lg p-6">
            <h3 className="text-lg font-semibold text-primary-900 mb-2">
              <i className="fas fa-gift mr-2"></i>
              What You Get:
            </h3>
            <ul className="text-left text-neutral-700 space-y-2">
              <li><i className="fas fa-check text-green-500 mr-2"></i> Full plugin files (.zip)</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i> Installation instructions</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i> License for 1 website</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i> 6 months free support</li>
              <li><i className="fas fa-check text-green-500 mr-2"></i> Lifetime updates</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={
      <div className="min-h-screen bg-gradient-to-br from-green-50 to-emerald-50 py-12 flex items-center justify-center">
        <div className="text-center">
          <div className="w-24 h-24 bg-green-500 rounded-full flex items-center justify-center mx-auto shadow-lg mb-4">
            <i className="fas fa-spinner fa-spin text-white text-4xl"></i>
          </div>
          <p className="text-xl text-neutral-700">Loading...</p>
        </div>
      </div>
    }>
      <ThankYouContent />
    </Suspense>
  );
}

