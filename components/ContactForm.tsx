'use client';

import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import type { ContactFormData, FormResponse } from '@/types';
import MathCaptcha from './MathCaptcha';

const ContactForm = () => {
  const router = useRouter();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitResponse, setSubmitResponse] = useState<FormResponse | null>(null);
  const [isCaptchaValid, setIsCaptchaValid] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<ContactFormData>();

  const services = [
    'AWS Cloud Services',
    'Microsoft Azure',
    'Google Cloud',
    'DevOps & Automation',
    'Hybrid Cloud Solutions',
    'VDI Solutions',
    'Azure AD Support',
    'Data Modernization',
    'Cloud Support',
    'Office 365 Migration',
    'Backup & Recovery',
    'Cost Optimization',
    'VAPT Services',
    'Managed SIEM',
    'Managed SOC',
    'Cybersecurity',
    'Security Assessment',
    'Other'
  ];

  const onSubmit = async (data: ContactFormData) => {
    setIsSubmitting(true);
    setSubmitResponse(null);

    try {
      // Form data will be sent to reachus@robustsoftech.com via API
      const formData = {
        ...data
      };

      // In production, this would send to your API endpoint
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const result = await response.json();

      if (response.ok) {
        // Redirect to thank you page
        router.push('/thank-you');
      } else {
        setSubmitResponse({
          success: false,
          message: result.message || 'Something went wrong. Please try again.',
          errors: result.errors,
        });
      }
    } catch (error) {
      setSubmitResponse({
        success: false,
        message: 'Network error. Please check your connection and try again.',
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl shadow-xl p-8 border border-gray-100">
      {/* Success/Error Message */}
      {submitResponse && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          className={`mb-6 p-4 rounded-lg ${
            submitResponse.success
              ? 'bg-green-50 text-green-800 border border-green-200'
              : 'bg-red-50 text-red-800 border border-red-200'
          }`}
        >
          <div className="flex items-center">
            <i
              className={`fas ${
                submitResponse.success ? 'fa-check-circle' : 'fa-exclamation-circle'
              } mr-3`}
            ></i>
            <span>{submitResponse.message}</span>
          </div>
        </motion.div>
      )}

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
        {/* Name Field */}
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
            Full Name *
          </label>
          <input
            type="text"
            id="name"
            {...register('name', { required: 'Name is required' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
              errors.name ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Enter your full name"
          />
          {errors.name && (
            <p className="mt-1 text-sm text-red-600">{errors.name.message}</p>
          )}
        </div>

        {/* Company Name */}
        <div>
          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-2">
            Company Name
          </label>
          <input
            type="text"
            id="company"
            {...register('company')}
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200"
            placeholder="Enter your company name"
          />
        </div>

        {/* Service Selection */}
        <div>
          <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
            Service of Interest *
          </label>
          <select
            id="service"
            {...register('service', { required: 'Please select a service' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
              errors.service ? 'border-red-300' : 'border-gray-300'
            }`}
          >
            <option value="">Select a service</option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
          {errors.service && (
            <p className="mt-1 text-sm text-red-600">{errors.service.message}</p>
          )}
        </div>

        {/* Message */}
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            rows={5}
            {...register('message', { required: 'Message is required' })}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors duration-200 ${
              errors.message ? 'border-red-300' : 'border-gray-300'
            }`}
            placeholder="Tell us about your project or requirements..."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600">{errors.message.message}</p>
          )}
        </div>

        {/* Math Captcha */}
        <MathCaptcha onValidationChange={setIsCaptchaValid} />

        {/* Submit Button */}
        <div>
          <button
            type="submit"
            disabled={isSubmitting || !isCaptchaValid}
            className={`w-full btn-primary text-lg py-4 ${
              isSubmitting || !isCaptchaValid ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            {isSubmitting ? (
              <span className="flex items-center justify-center">
                <i className="fas fa-spinner fa-spin mr-2"></i>
                Sending Message...
              </span>
            ) : (
              'Send Message'
            )}
          </button>
          
          {!isCaptchaValid && (
            <p className="mt-2 text-sm text-amber-600 text-center">
              <i className="fas fa-exclamation-triangle mr-2"></i>
              Please complete the security verification to submit the form.
            </p>
          )}
        </div>

        {/* Privacy Notice */}
        <p className="text-xs text-gray-500 text-center">
          By submitting this form, you agree to our{' '}
          <a href="/privacy-policy" className="text-primary-600 hover:text-primary-700 underline">
            Privacy Policy
          </a>{' '}
          and consent to being contacted regarding your inquiry.
        </p>
      </form>
    </div>
  );
};

export default ContactForm;
