'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import StripeCheckout from '@/components/StripeCheckout';
import { useRouter } from 'next/navigation';

export default function NMICheckoutPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    phone: '',
  });
  const [licenseQuantity, setLicenseQuantity] = useState(1);
  const [extendedSupport, setExtendedSupport] = useState(false);
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState<{ name?: string; email?: string; website?: string }>({});

  const pluginDetails = {
    name: 'Network Merchants Inc Gateway (NMI) for WooCommerce',
    price: 59,
    extendedSupportPrice: 60, // $60 for 12 months support
    features: [
      'Credit Card Processing',
      'Collect.js Tokenization',
      'WooCommerce Blocks Support',
      'HPOS Compatible',
      'Refund Support',
      'Debug Logging',
      '6 Months Free Support',
      'Lifetime Updates',
    ],
  };

  // Calculate total price with discounts
  const subtotal = pluginDetails.price * licenseQuantity;
  
  // Apply discounts: 2 licenses = 10% off, 3+ licenses = 15% off
  let discountRate = 0;
  if (licenseQuantity === 2) {
    discountRate = 0.10; // 10% discount
  } else if (licenseQuantity >= 3) {
    discountRate = 0.15; // 15% discount
  }
  
  const discountAmount = Math.round((subtotal * discountRate) * 100) / 100; // Round to 2 decimals
  const discountedSubtotal = Math.round((subtotal - discountAmount) * 100) / 100; // Round to 2 decimals
  const supportPrice = extendedSupport ? pluginDetails.extendedSupportPrice : 0;
  const totalPrice = Math.round((discountedSubtotal + supportPrice) * 100) / 100; // Round to 2 decimals

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
    // Clear error when user starts typing
    if (errors[name as keyof typeof errors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }));
    }
  };

  const validate = () => {
    const newErrors: any = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.website.trim()) {
      newErrors.website = 'Website is required';
    }
    
    return newErrors;
  };

  const handlePaymentSubmit = async (paymentMethodId: string) => {
    setLoading(true);

    try {
      // Process payment with customer details
      const response = await fetch('/api/process-payment', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          paymentMethodId,
          customerName: formData.name,
          customerEmail: formData.email,
          customerWebsite: formData.website,
          customerPhone: formData.phone,
          amount: totalPrice,
          product: 'Network Merchants Inc Gateway for WooCommerce',
          licenseQuantity: licenseQuantity,
          extendedSupport: extendedSupport,
        }),
      });

      const data = await response.json();

      if (data.success) {
        // Redirect to thank you page with all order details
        const params = new URLSearchParams({
          email: formData.email,
          orderId: data.orderId,
          licenseQuantity: licenseQuantity.toString(),
          extendedSupport: extendedSupport.toString(),
          totalPrice: totalPrice.toString(),
        });
        const redirectUrl = `/thank-you/nmi-purchase?${params.toString()}`;
        console.log('Redirecting to:', redirectUrl);
        router.push(redirectUrl);
      } else {
        alert('Payment failed. Please try again.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Payment error:', error);
      alert('An error occurred. Please try again.');
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-neutral-50">
      {/* Hero Section */}
      <div className="bg-white pt-24 pb-12 border-b border-neutral-200">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {/* Title Section */}
            <div className="max-w-3xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-50 text-primary-700 rounded-full text-sm font-semibold mb-6">
                <i className="fas fa-shopping-cart"></i>
                <span>Secure Checkout</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-bold text-neutral-900 mb-4 font-heading">
                Complete Your Purchase
              </h1>
              <p className="text-lg text-neutral-600 mb-2">
                Get instant access to the complete NMI Payment Gateway for WooCommerce
              </p>
              <div className="flex items-center justify-center gap-4 mt-6 flex-wrap">
                <div className="flex items-center gap-2 text-green-600">
                  <i className="fas fa-check-circle"></i>
                  <span className="text-sm font-medium">Instant Access</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <i className="fas fa-check-circle"></i>
                  <span className="text-sm font-medium">Lifetime Updates</span>
                </div>
                <div className="flex items-center gap-2 text-green-600">
                  <i className="fas fa-check-circle"></i>
                  <span className="text-sm font-medium">6 Months Support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Checkout Section */}
      <div className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Left Side - Product Summary */}
              <div className="bg-white rounded-xl shadow-lg p-8 border border-neutral-200">
                <div className="mb-6">
                  <Image
                    src="/images/Plugin-Cover.jpg"
                    alt="Network Merchants Inc Gateway"
                    width={400}
                    height={250}
                    className="rounded-lg w-full h-auto mb-6 shadow-md"
                  />
                  <h2 className="text-2xl font-bold text-neutral-900 mb-4">
                    {pluginDetails.name}
                  </h2>
                  <div className="inline-flex items-baseline gap-2 bg-gradient-to-r from-primary-50 to-primary-100 px-6 py-3 rounded-lg">
                    <span className="text-4xl font-bold text-primary-600">${pluginDetails.price}</span>
                    <span className="text-neutral-600">per license</span>
                  </div>
                </div>

              <div className="border-t pt-6">
                <h3 className="font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                  <i className="fas fa-check-circle text-green-500"></i>
                  What's Included:
                </h3>
                <ul className="space-y-3">
                  {pluginDetails.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-3 text-neutral-700">
                      <i className="fas fa-check text-green-500 text-sm"></i>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

                <div className="mt-6 bg-gradient-to-br from-blue-50 to-indigo-50 rounded-lg p-4 border border-blue-200">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0">
                      <i className="fas fa-shield-alt text-2xl text-blue-500"></i>
                    </div>
                    <div>
                      <h4 className="font-semibold text-neutral-900 mb-1">Secure & Reliable</h4>
                      <p className="text-sm text-neutral-600">Powered by Stripe. Your payment information is secure and encrypted.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Side - Checkout Form */}
              <div className="bg-white rounded-xl shadow-xl p-8 border border-neutral-200">
                <h2 className="text-2xl font-bold text-neutral-900 mb-6 flex items-center gap-2">
                  <i className="fas fa-credit-card text-primary-600"></i>
                  Payment Details
                </h2>
              
                {/* Customer Information Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <i className="fas fa-user text-primary-600"></i>
                    Customer Information
                  </h3>
                  <div className="space-y-4">
                    {/* Name Field */}
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-neutral-700 mb-2">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.name ? 'border-red-500' : 'border-neutral-300'
                        }`}
                        placeholder="John Doe"
                      />
                      {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
                    </div>

                    {/* Email Field */}
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-neutral-700 mb-2">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.email ? 'border-red-500' : 'border-neutral-300'
                        }`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
                    </div>

                    {/* Website Field */}
                    <div>
                      <label htmlFor="website" className="block text-sm font-medium text-neutral-700 mb-2">
                        Website URL <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="url"
                        id="website"
                        name="website"
                        value={formData.website}
                        onChange={handleChange}
                        className={`w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent ${
                          errors.website ? 'border-red-500' : 'border-neutral-300'
                        }`}
                        placeholder="https://yourwebsite.com"
                      />
                      {errors.website && <p className="text-red-500 text-sm mt-1">{errors.website}</p>}
                    </div>
                  </div>
                </div>

                {/* License Quantity */}
                <div className="mb-6">
                  <label htmlFor="licenseQuantity" className="block text-sm font-medium text-neutral-700 mb-2">
                    Number of Licenses <span className="text-red-500">*</span>
                  </label>
                  <select
                    id="licenseQuantity"
                    value={licenseQuantity}
                    onChange={(e) => setLicenseQuantity(Number(e.target.value))}
                    className="w-full px-4 py-2 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent"
                  >
                    <option value="1">1 License - $59</option>
                    <option value="2">2 Licenses - $106 (Save $12 - 10% OFF)</option>
                    <option value="3">3 Licenses - $151 (Save $26 - 15% OFF)</option>
                    <option value="4">4 Licenses - $201 (Save $35 - 15% OFF)</option>
                    <option value="5">5 Licenses - $251 (Save $44 - 15% OFF)</option>
                  </select>
                  <p className="text-xs text-neutral-500 mt-1">Each license is valid for 1 website</p>
                </div>

                {/* Extended Support Option */}
                <div className="mb-6 p-4 bg-gradient-to-br from-purple-50 to-pink-50 rounded-lg border border-purple-200">
                  <label className="flex items-start gap-3 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={extendedSupport}
                      onChange={(e) => setExtendedSupport(e.target.checked)}
                      className="mt-1 h-4 w-4 text-primary-600 border-neutral-300 rounded focus:ring-2 focus:ring-primary-500"
                    />
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <span className="font-semibold text-neutral-900">Extended Support</span>
                        <span className="text-xs px-2 py-1 bg-purple-100 text-purple-700 rounded">Recommended</span>
                      </div>
                      <p className="text-sm text-neutral-600 mb-2">
                        Upgrade to 12 months of expert support for just $60
                      </p>
                      <div className="text-xs text-neutral-500">
                        <i className="fas fa-check-circle text-green-500 mr-1"></i>
                        Priority email support
                        <i className="fas fa-check-circle text-green-500 ml-3 mr-1"></i>
                        Faster response time (12 hours)
                        <i className="fas fa-check-circle text-green-500 ml-3 mr-1"></i>
                        Technical implementation help
                      </div>
                    </div>
                  </label>
                </div>

                {/* Order Summary */}
                <div className="mb-6 border-t pt-6">
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-neutral-700">Product</span>
                    <span className="font-semibold">Network Merchants Inc Gateway</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-neutral-700">Licenses</span>
                    <span className="font-semibold">{licenseQuantity} Website{licenseQuantity > 1 ? 's' : ''}</span>
                  </div>
                  <div className="flex justify-between items-center mb-3">
                    <span className="text-neutral-700">Subtotal</span>
                    <span className="font-semibold">${subtotal}</span>
                  </div>
                  {discountAmount > 0 && (
                    <div className="flex justify-between items-center mb-3 text-green-600">
                      <span className="font-medium">
                        Discount ({discountRate * 100}% OFF)
                      </span>
                      <span className="font-semibold">-${discountAmount.toFixed(2)}</span>
                    </div>
                  )}
                  {extendedSupport && (
                    <div className="flex justify-between items-center mb-3 text-purple-700">
                      <span className="font-medium">Extended Support (12 months)</span>
                      <span className="font-semibold">$60</span>
                    </div>
                  )}
                  <div className="flex justify-between items-center text-xl font-bold border-t pt-4">
                    <span>Total</span>
                    <span className="text-primary-600">${totalPrice}</span>
                  </div>
                </div>

                {/* Payment Card Details Section */}
                <div className="mb-6">
                  <h3 className="text-lg font-semibold text-neutral-900 mb-4 flex items-center gap-2">
                    <i className="fas fa-credit-card text-primary-600"></i>
                    Payment Card Details <span className="text-red-500">*</span>
                  </h3>
                  <StripeCheckout formData={formData} onSubmit={handlePaymentSubmit} loading={loading} totalPrice={totalPrice} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

