'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { createPortal } from 'react-dom';
interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      document.body.style.position = 'fixed';
      document.body.style.width = '100%';
    } else {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.body.style.position = '';
      document.body.style.width = '';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  // Create portal to render outside normal DOM hierarchy
  const menuContent = (
    <>
      {/* Add CSS animations */}
      <style jsx>{`
        @keyframes slideDown {
          from {
            opacity: 0;
            transform: translateY(-10px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes slideIn {
          from {
            transform: translateX(100%);
          }
          to {
            transform: translateX(0);
          }
        }
      `}</style>
      <div 
        onClick={onClose}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          zIndex: 999999,
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          backdropFilter: 'blur(4px)',
          overflow: 'hidden',
          animation: 'fadeIn 0.3s ease-out'
        }}
      >
        {/* Modern Menu Container */}
        <div 
          onClick={(e) => e.stopPropagation()}
          style={{
            position: 'absolute',
            top: 0,
            right: 0,
            width: '320px',
            height: '100vh',
            backgroundColor: 'white',
            boxShadow: '-10px 0 30px rgba(0, 0, 0, 0.1)',
            overflow: 'hidden',
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideIn 0.3s ease-out'
          }}
        >
        {/* Header with Logo and Close Button */}
        <div 
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: '1.5rem',
            borderBottom: '1px solid #f1f5f9',
            backgroundColor: 'white',
            position: 'relative'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <Image
              src="/images/Smartwebrowse-Logo.png"
              alt="Smartwebrowse India Private Limited"
              width={120}
              height={35}
              style={{ height: '36px', width: 'auto' }}
            />
          </div>
          <button
            onClick={onClose}
            style={{
              padding: '10px',
              borderRadius: '50%',
              backgroundColor: '#f8fafc',
              color: '#64748b',
              border: '1px solid #e2e8f0',
              cursor: 'pointer',
              fontSize: '18px',
              width: '44px',
              height: '44px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transition: 'all 0.2s ease',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.05)'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = '#ef4444';
              e.currentTarget.style.color = 'white';
              e.currentTarget.style.borderColor = '#ef4444';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = '#f8fafc';
              e.currentTarget.style.color = '#64748b';
              e.currentTarget.style.borderColor = '#e2e8f0';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            <i className="fas fa-times"></i>
          </button>
        </div>
      
        {/* Content Area */}
        <div 
          style={{
            flex: 1,
            overflowY: 'auto',
            backgroundColor: 'white',
            padding: '1.5rem',
            paddingBottom: '2rem'
          }}
        >
          {/* Navigation Links */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.25rem', marginBottom: '1.5rem' }}>
            <Link 
              href="/" 
              style={{
                display: 'block',
                padding: '10px 16px',
                color: '#1e293b',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1e293b';
              }}
              onClick={onClose}
            >
              <i className="fas fa-home mr-3" style={{ width: '20px', color: '#64748b' }}></i>
              Home
            </Link>
          
            {/* Services Dropdown */}
            <div>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  width: '100%',
                  textAlign: 'left',
                  padding: '10px 16px',
                  color: '#1e293b',
                  textDecoration: 'none',
                  fontSize: '16px',
                  fontWeight: '500',
                  backgroundColor: 'transparent',
                  border: 'none',
                  cursor: 'pointer',
                  borderRadius: '8px',
                  transition: 'all 0.2s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = '#f1f5f9';
                  e.currentTarget.style.color = '#2563eb';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = 'transparent';
                  e.currentTarget.style.color = '#1e293b';
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <i className="fas fa-cogs mr-3" style={{ width: '20px', color: '#64748b' }}></i>
                  Services
                </div>
                <i 
                  className={`fas ${isServicesOpen ? 'fa-chevron-down' : 'fa-chevron-right'}`} 
                  style={{ 
                    fontSize: '12px', 
                    color: '#64748b',
                    transition: 'transform 0.2s ease',
                    transform: isServicesOpen ? 'rotate(0deg)' : 'rotate(0deg)'
                  }}
                ></i>
              </button>
            
              {isServicesOpen && (
                <div
                  style={{
                    marginLeft: '20px',
                    marginTop: '8px',
                    paddingLeft: '16px',
                    borderLeft: '2px solid #e2e8f0',
                    animation: 'slideDown 0.3s ease-out'
                  }}
                >
                  <Link
                    href="/services"
                    style={{
                      display: 'block',
                      padding: '8px 16px',
                      color: '#2563eb',
                      textDecoration: 'none',
                      fontSize: '14px',
                      fontWeight: '600',
                      borderRadius: '6px',
                      marginBottom: '10px',
                      backgroundColor: '#eff6ff'
                    }}
                    onClick={onClose}
                  >
                    View All Services
                  </Link>

                  {[
                    {
                      title: 'AI Services',
                      links: [
                        { name: 'AI Services Provider', href: '/services/ai-services-provider' },
                        { name: 'AI Consulting', href: '/services/ai-consulting' },
                        { name: 'AI Integration', href: '/services/ai-integration' },
                        { name: 'AI Development', href: '/services/ai-development' }
                      ]
                    },
                    {
                      title: 'Automation Services',
                      links: [
                        { name: 'Process Automation', href: '/services/automation-services/process-automation' },
                        { name: 'Workflow Automation', href: '/services/automation-services/workflow-automation' },
                        { name: 'AI-Powered Automation', href: '/services/automation-services/ai-powered-automation' },
                        { name: 'Business Process Automation', href: '/services/automation-services/business-process-automation' }
                      ]
                    },
                    {
                      title: 'AI Support',
                      links: [
                        { name: '24/7 AI Support', href: '/services/ai-support' },
                        { name: 'AI System Maintenance', href: '/services/ai-support/ai-system-maintenance' },
                        { name: 'AI Infrastructure Support', href: '/services/ai-infrastructure' },
                        { name: 'AI Monitoring', href: '/services/ai-support/ai-monitoring' }
                      ]
                    },
                    {
                      title: 'AI Solutions',
                      links: [
                        { name: 'AI Analytics', href: '/services/ai-analytics' },
                        { name: 'AI Infrastructure', href: '/services/ai-infrastructure' },
                        { name: 'Custom AI Solutions', href: '/services/ai-development' },
                        { name: 'AI Training & Implementation', href: '/services/ai-consulting' }
                      ]
                    }
                  ].map((section) => (
                    <div key={section.title} style={{ marginBottom: '12px' }}>
                      <div
                        style={{
                          padding: '6px 16px',
                          color: '#1d4ed8',
                          fontSize: '13px',
                          fontWeight: '700',
                          textTransform: 'uppercase',
                          letterSpacing: '0.04em'
                        }}
                      >
                        {section.title}
                      </div>
                      {section.links.map((service) => (
                        <Link
                          key={service.name}
                          href={service.href}
                          style={{
                            display: 'block',
                            padding: '8px 16px',
                            color: '#64748b',
                            textDecoration: 'none',
                            fontSize: '14px',
                            fontWeight: '400',
                            borderRadius: '6px',
                            marginBottom: '4px',
                            transition: 'all 0.2s ease',
                            backgroundColor: 'transparent'
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor = '#f1f5f9';
                            e.currentTarget.style.color = '#2563eb';
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor = 'transparent';
                            e.currentTarget.style.color = '#64748b';
                          }}
                          onClick={onClose}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
          
            <Link 
              href="/case-studies" 
              style={{
                display: 'block',
                padding: '10px 16px',
                color: '#1e293b',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1e293b';
              }}
              onClick={onClose}
            >
              <i className="fas fa-chart-bar mr-3" style={{ width: '20px', color: '#64748b' }}></i>
              Case Studies
            </Link>
            <Link 
              href="/portfolio" 
              style={{
                display: 'block',
                padding: '10px 16px',
                color: '#1e293b',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1e293b';
              }}
              onClick={onClose}
            >
              <i className="fas fa-briefcase mr-3" style={{ width: '20px', color: '#64748b' }}></i>
              Portfolio
            </Link>
            <Link 
              href="/about" 
              style={{
                display: 'block',
                padding: '10px 16px',
                color: '#1e293b',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '500',
                borderRadius: '8px',
                transition: 'all 0.2s ease',
                backgroundColor: 'transparent'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#f1f5f9';
                e.currentTarget.style.color = '#2563eb';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent';
                e.currentTarget.style.color = '#1e293b';
              }}
              onClick={onClose}
            >
              <i className="fas fa-users mr-3" style={{ width: '20px', color: '#64748b' }}></i>
              About
            </Link>
          </div>

          
          {/* Enhanced CTA Buttons */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginTop: '1rem', marginBottom: '1rem', marginLeft: '1rem', marginRight: '1rem' }}>
            <Link
              href="/consultation"
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                padding: '14px 20px',
                background: 'linear-gradient(135deg, #3b82f6 0%, #60a5fa 100%)',
                color: 'white',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(59, 130, 246, 0.3)',
                transition: 'all 0.3s ease',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(59, 130, 246, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(59, 130, 246, 0.3)';
              }}
              onClick={onClose}
            >
              <i className="fas fa-calendar-alt mr-2"></i>
              Schedule Consultation
            </Link>
            <Link
              href="/get-a-quote"
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'center',
                padding: '14px 20px',
                background: 'linear-gradient(135deg, #10b981 0%, #34d399 100%)',
                color: 'white',
                borderRadius: '12px',
                textDecoration: 'none',
                fontSize: '16px',
                fontWeight: '600',
                boxShadow: '0 4px 12px rgba(5, 150, 105, 0.3)',
                transition: 'all 0.3s ease',
                border: 'none'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-2px)';
                e.currentTarget.style.boxShadow = '0 6px 20px rgba(5, 150, 105, 0.4)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(5, 150, 105, 0.3)';
              }}
              onClick={onClose}
            >
              <i className="fas fa-file-invoice-dollar mr-2"></i>
              Request a Quote
            </Link>
          </div>
        </div>
      </div>
    </>
  );

  // Render using portal to ensure it's outside normal DOM hierarchy
  return createPortal(menuContent, document.body);
};

export default MobileMenu;
