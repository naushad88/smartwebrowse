'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      const response = await fetch('/api/emp-dashboard/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (data.success) {
        router.push('/EmployerDashboard');
      } else {
        setError(data.error || 'Login failed');
      }
    } catch (error) {
      setError('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 flex items-center justify-center px-4 sm:px-6 lg:px-8 relative overflow-hidden" style={{ minHeight: '100vh', paddingTop: '160px', paddingBottom: '80px' }}>
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="w-full h-full" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23ffffff' fill-opacity='0.05'%3E%3Ccircle cx='30' cy='30' r='2'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          backgroundRepeat: 'repeat'
        }}></div>
      </div>
      
      <div className="max-w-md w-full space-y-6 relative z-10">
        {/* Header Section */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-white mb-1 bg-gradient-to-r from-white to-blue-200 bg-clip-text text-transparent whitespace-nowrap">
            Employee Management System
          </h2>
          <p className="text-blue-200 text-base font-medium">
            Smartwebrowse India Private Limited - Internal Access Only
          </p>
          <div className="mt-2 flex items-center justify-center space-x-2">
            <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            <span className="text-green-300 text-sm font-medium">Secure Connection</span>
          </div>
        </div>

        {/* Login Form */}
        <div className="bg-white/10 backdrop-blur-lg py-6 px-6 shadow-2xl rounded-3xl border border-white/20 relative overflow-hidden">
          {/* Form Header */}
          <div className="text-center mb-6">
            <h3 className="text-xl font-bold text-white mb-1">Welcome Back</h3>
            <p className="text-blue-200 text-sm">Please sign in to access the dashboard</p>
          </div>

          <form className="space-y-4" onSubmit={handleSubmit}>
            {error && (
              <div className="bg-red-500/20 border border-red-400/30 text-red-200 px-4 py-3 rounded-xl flex items-center backdrop-blur-sm">
                <i className="fas fa-exclamation-circle mr-3 text-red-300"></i>
                <span className="font-medium">{error}</span>
              </div>
            )}

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-semibold text-white/90">
                Email Address
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-envelope text-white/60 group-focus-within:text-blue-400 transition-colors"></i>
                </div>
                <input
                  id="email"
                  name="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                  placeholder="Enter your email address"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="password" className="block text-sm font-semibold text-white/90">
                Password
              </label>
              <div className="relative group">
                <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
                  <i className="fas fa-lock text-white/60 group-focus-within:text-blue-400 transition-colors"></i>
                </div>
                <input
                  id="password"
                  name="password"
                  type="password"
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="block w-full pl-12 pr-4 py-4 bg-white/10 border border-white/20 rounded-xl placeholder-white/50 text-white focus:outline-none focus:ring-2 focus:ring-blue-400 focus:border-transparent transition-all duration-300 backdrop-blur-sm hover:bg-white/15"
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <div className="pt-2">
              <button
                type="submit"
                disabled={loading}
                className="group relative w-full flex justify-center py-4 px-6 text-lg font-semibold rounded-xl text-white bg-gradient-to-r from-blue-500 via-blue-600 to-indigo-600 hover:from-blue-600 hover:via-blue-700 hover:to-indigo-700 focus:outline-none focus:ring-4 focus:ring-blue-500/50 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 shadow-2xl hover:shadow-blue-500/25 transform hover:-translate-y-1"
              >
                <span className="absolute left-0 inset-y-0 flex items-center pl-6">
                  {loading ? (
                    <i className="fas fa-spinner fa-spin text-white text-lg"></i>
                  ) : (
                    <i className="fas fa-sign-in-alt text-white text-lg group-hover:scale-110 transition-transform"></i>
                  )}
                </span>
                <span className="font-bold">
                  {loading ? 'Signing in...' : 'Access Dashboard'}
                </span>
              </button>
            </div>
          </form>

        </div>

        {/* Footer */}
        <div className="text-center">
          <p className="text-sm text-white/60 font-medium">
            © 2025 Smartwebrowse India Private Limited. All rights reserved.
          </p>
          <div className="mt-2 flex items-center justify-center space-x-6 text-xs text-white/40">
            <span>🔒 SSL Encrypted</span>
            <span>•</span>
            <span>🛡️ Enterprise Security</span>
            <span>•</span>
            <span>📊 Activity Monitored</span>
          </div>
        </div>
      </div>
    </div>
  );
}
