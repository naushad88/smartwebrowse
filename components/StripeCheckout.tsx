'use client';

import { loadStripe, StripeElementsOptions } from '@stripe/stripe-js';
import { Elements, CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { useState } from 'react';

// Initialize Stripe with proper error handling
const stripePromise = loadStripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY || '');

interface StripeCheckoutProps {
  formData: {
    name: string;
    email: string;
    website: string;
    phone: string;
  };
  onSubmit: (paymentMethodId: string) => void;
  loading: boolean;
  totalPrice?: number;
}

function CheckoutForm({ formData, onSubmit, loading, totalPrice = 59 }: StripeCheckoutProps) {
  const stripe = useStripe();
  const elements = useElements();
  const [error, setError] = useState<string | null>(null);
  const [processing, setProcessing] = useState(false);

  const handlePayment = async () => {
    if (!stripe || !elements) {
      return;
    }

    setProcessing(true);
    setError(null);

    const cardElement = elements.getElement(CardElement);

    if (!cardElement) {
      setError('Card element not found');
      setProcessing(false);
      return;
    }

    try {
      // Create payment method
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: 'card',
        card: cardElement,
        billing_details: {
          name: formData.name,
          email: formData.email,
        },
      });

      if (pmError) {
        setError(pmError.message || 'Payment failed');
        setProcessing(false);
        return;
      }

      if (paymentMethod) {
        onSubmit(paymentMethod.id);
      }
    } catch (err: any) {
      setError(err.message || 'An error occurred');
      setProcessing(false);
    }
  };

  const cardElementOptions = {
    style: {
      base: {
        fontSize: '16px',
        color: '#424770',
        '::placeholder': {
          color: '#aab7c4',
        },
      },
      invalid: {
        color: '#9e2146',
      },
    },
    hidePostalCode: true,
  };

  return (
    <div>
      <div className="mb-4">
        <div className="border border-neutral-300 rounded-lg p-4 bg-white">
          <CardElement options={cardElementOptions} />
        </div>
        {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
      </div>

      <button
        onClick={handlePayment}
        disabled={!stripe || processing || loading}
        className="w-full bg-primary-600 hover:bg-primary-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200 inline-flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {processing || loading ? (
          <>
            <i className="fas fa-spinner fa-spin"></i>
            Processing Payment...
          </>
        ) : (
          <>
            <i className="fas fa-lock"></i>
            Pay Now - ${totalPrice}
          </>
        )}
      </button>

      <p className="text-xs text-neutral-500 text-center mt-3">
        <i className="fas fa-shield-alt mr-1"></i>
        Secured by Stripe
      </p>
    </div>
  );
}

export default function StripeCheckout({ formData, onSubmit, loading, totalPrice = 59 }: StripeCheckoutProps) {
  const options: StripeElementsOptions = {
    mode: 'payment',
    amount: Math.round(totalPrice * 100), // Convert to cents and ensure it's an integer
    currency: 'usd',
  };

  // Check if Stripe is configured - use a more robust check
  const stripeKey = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY;
  const isStripeConfigured = stripeKey && stripeKey.length > 0 && stripeKey.startsWith('pk_');

  if (!isStripeConfigured) {
    return (
      <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4">
        <p className="text-yellow-800 text-sm">
          <i className="fas fa-exclamation-triangle mr-2"></i>
          Stripe is not configured. Please add NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY to your environment variables.
        </p>
        <p className="text-yellow-700 text-xs mt-2">
          Debug: Key present: {stripeKey ? 'Yes' : 'No'}, Length: {stripeKey?.length || 0}
        </p>
      </div>
    );
  }

  return (
    <Elements stripe={stripePromise} options={options}>
      <CheckoutForm formData={formData} onSubmit={onSubmit} loading={loading} totalPrice={totalPrice} />
    </Elements>
  );
}

