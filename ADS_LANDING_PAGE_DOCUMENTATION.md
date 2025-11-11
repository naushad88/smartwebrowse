# Ads Landing Page Documentation

## Overview
A high-converting landing page specifically designed for Google Ads and Facebook Ads campaigns targeting the USA, Japan, Ireland, and other top IT service markets.

## URL
- **Local**: http://localhost:3000/ads-landing
- **Production**: https://www.robustsoftech.com/ads-landing

## Features

### 🎯 Conversion Optimization
- **Clear CTAs**: "Get Free Consultation", "Request Quote", "Call Now"
- **Trust Signals**: ISO 27001 Certified, 15+ Countries Served, 500+ Happy Clients
- **Social Proof**: Client testimonials from USA, Japan, and Ireland
- **Mobile-First Design**: Fully responsive across all devices

### 📊 Tracking & Analytics
- **Google Ads Conversion Tracking**: Integrated with gtag
- **Facebook Pixel**: Lead tracking and conversion optimization
- **Form Submission Tracking**: Automatic conversion tracking on form submit
- **API Integration**: `/api/ads-lead` endpoint for lead capture

### 🎨 Design & UX
- **Modern UI**: Clean, professional design with international appeal
- **Brand Consistency**: Uses existing Robust Softech color scheme and fonts
- **Fast Loading**: Optimized images and performance
- **Accessibility**: Proper heading structure and form labels

### 📝 Content Strategy
- **Headlines**: Conversion-focused headlines targeting pain points
- **Services**: 4 core services highlighted (Cybersecurity, Cloud, AI/Web Dev, DevOps)
- **Benefits**: Clear value propositions and business outcomes
- **Geo-Targeting**: "Trusted IT Solutions Partner for Businesses in the USA, Japan, Ireland & Beyond"

## Technical Implementation

### File Structure
```
app/ads-landing/
├── page.tsx              # Server component with metadata
├── AdsLandingClient.tsx  # Client component with form logic
└── api/ads-lead/
    └── route.ts          # API endpoint for form submissions
```

### Key Components
1. **Hero Section**: Main headline, sub-headline, CTAs, trust signals
2. **Services Section**: 4 core services with features and benefits
3. **Why Choose Us**: Value propositions and track record
4. **Testimonials**: Client success stories from target markets
5. **Contact Form**: Lead capture with conversion tracking
6. **Footer CTA**: Final conversion opportunity

### Form Fields
- **Required**: Name, Email
- **Optional**: Phone, Company, Services, Project Details
- **Validation**: Client-side and server-side validation
- **Tracking**: Automatic conversion tracking on successful submission

## Tracking Configuration

### Google Ads
```javascript
// Replace with your actual conversion ID and label
gtag('event', 'conversion', {
  'send_to': 'AW-CONVERSION_ID/CONVERSION_LABEL',
  'value': 1.0,
  'currency': 'USD'
});
```

### Facebook Pixel
```javascript
// Replace with your actual pixel ID
fbq('track', 'Lead', {
  content_name: 'Free Consultation Request',
  content_category: 'IT Services'
});
```

## SEO Optimization

### Meta Tags
- **Title**: "Transform Your Business with Expert IT Solutions | Robust Softech"
- **Description**: Geo-targeted description mentioning USA, Japan, Ireland
- **Keywords**: IT services, cloud migration, cybersecurity, IAM services
- **Open Graph**: Optimized for social sharing

### Content Structure
- **H1**: Main headline with primary keyword
- **H2**: Section headings for services and benefits
- **H3**: Sub-sections and feature headings
- **Schema Markup**: Ready for implementation

## Lead Management

### API Endpoint
- **URL**: `/api/ads-lead`
- **Method**: POST
- **Content-Type**: application/json
- **Response**: Success/error status with message

### Lead Data Structure
```json
{
  "name": "string (required)",
  "email": "string (required)",
  "phone": "string (optional)",
  "company": "string (optional)",
  "services": "string (optional)",
  "message": "string (optional)"
}
```

### Current Implementation
- **Logging**: Leads are logged to console
- **Email**: Ready for SMTP configuration
- **Database**: Ready for database integration

## Deployment Checklist

### Before Going Live
1. ✅ Replace tracking pixel IDs with actual values
2. ✅ Configure SMTP settings for email notifications
3. ✅ Set up database for lead storage
4. ✅ Test form submissions end-to-end
5. ✅ Verify all CTAs and links work correctly
6. ✅ Test on multiple devices and browsers

### Post-Deployment
1. Monitor conversion rates
2. A/B test headlines and CTAs
3. Optimize based on performance data
4. Update testimonials with real client feedback

## Performance Metrics

### Key Performance Indicators
- **Conversion Rate**: Form submissions / page visits
- **Bounce Rate**: Single-page sessions
- **Time on Page**: Engagement metrics
- **Mobile Performance**: Mobile conversion rates

### Expected Results
- **Conversion Rate**: 3-5% (industry average for IT services)
- **Page Load Time**: <3 seconds
- **Mobile Score**: 90+ (Google PageSpeed)

## Maintenance

### Regular Updates
- Update testimonials with new client feedback
- Refresh service offerings based on business growth
- Monitor and update tracking pixels
- A/B test different headlines and CTAs

### Technical Maintenance
- Keep dependencies updated
- Monitor API performance
- Check form functionality regularly
- Update security measures

## Support

For technical issues or updates to the landing page, refer to:
- **Code Location**: `/app/ads-landing/`
- **API Documentation**: `/app/api/ads-lead/route.ts`
- **Styling**: Uses existing Tailwind CSS classes
- **Components**: Reusable components in `/components/`

---

**Created**: September 6, 2025
**Version**: 1.0
**Status**: Ready for Production
