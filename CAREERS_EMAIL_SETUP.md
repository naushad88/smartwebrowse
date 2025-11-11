# Careers Email Setup Guide

## Overview
The careers page now includes a fully functional job application system that sends applications to `hr@robustsoftech.com` and confirmation emails to candidates.

## Features
- ✅ Working "Apply Now" buttons for each job position
- ✅ Detailed job requirements page with comprehensive information
- ✅ Professional application form with file upload (resume/CV)
- ✅ Email notifications sent to HR team
- ✅ Confirmation emails sent to candidates
- ✅ File validation (PDF, DOC, DOCX, max 5MB)
- ✅ Responsive design with animations

## Email Configuration

### 1. Gmail Setup (Recommended for testing)
1. Enable 2-Factor Authentication on your Gmail account
2. Generate an App Password:
   - Go to Google Account settings
   - Security → 2-Step Verification → App passwords
   - Generate password for "Mail"
3. Add to your `.env.local` file:
   ```bash
   EMAIL_USER="your-email@gmail.com"
   EMAIL_PASS="your-16-digit-app-password"
   ```

### 2. Alternative Email Services
You can modify the email configuration in `app/api/careers/apply/route.ts` to use:
- SendGrid
- AWS SES
- SMTP servers
- Other email service providers

## Job Positions Available
1. **Senior Cloud Architect** - `/careers/senior-cloud-architect`
2. **IAM Security Specialist** - `/careers/iam-security-specialist`
3. **DevOps Engineer** - `/careers/devops-engineer`
4. **Full Stack Developer** - `/careers/full-stack-developer`
5. **AI/ML Engineer** - `/careers/ai-ml-engineer`

## How It Works

### 1. User Experience
1. User visits `/careers` page
2. Clicks "Apply Now" on any job position
3. Redirected to detailed job page with application form
4. Fills out form and uploads resume
5. Submits application
6. Receives confirmation email

### 2. Backend Process
1. Form data validated (required fields, file type, size)
2. Resume converted to buffer for email attachment
3. Professional email sent to `hr@robustsoftech.com` with:
   - Candidate information
   - Cover letter (if provided)
   - Resume attached
   - Job details and submission timestamp
4. Confirmation email sent to candidate
5. Success/error response returned to frontend

### 3. Email Templates
- **HR Notification**: Professional HTML email with all candidate details
- **Candidate Confirmation**: Welcome email with next steps and contact information

## File Structure
```
app/
├── careers/
│   ├── page.tsx                    # Main careers listing
│   └── [jobId]/
│       └── page.tsx               # Individual job detail + application form
└── api/
    └── careers/
        └── apply/
            └── route.ts           # API endpoint for applications
```

## Customization

### Adding New Job Positions
1. Add job data to the `jobData` object in `app/careers/[jobId]/page.tsx`
2. Update the main careers page if needed
3. The URL structure will automatically work: `/careers/job-title-here`

### Modifying Email Templates
Edit the HTML and text templates in `app/api/careers/apply/route.ts`:
- Change colors, fonts, and styling
- Add company branding
- Modify email content and structure

### Form Fields
The application form includes:
- Personal information (name, email, phone)
- Professional details (experience, current company)
- Salary expectations and notice period
- Cover letter
- Resume upload

## Security Features
- File type validation (PDF, DOC, DOCX only)
- File size limit (5MB max)
- Required field validation
- Email format validation
- XSS protection through proper escaping

## Testing
1. Set up email configuration in `.env.local`
2. Visit `/careers` page
3. Click "Apply Now" on any position
4. Fill out the form and submit
5. Check both HR and candidate emails

## Troubleshooting

### Email Not Sending
- Verify `EMAIL_USER` and `EMAIL_PASS` in `.env.local`
- Check Gmail app password is correct
- Ensure 2FA is enabled on Gmail account
- Check server logs for error messages

### File Upload Issues
- Verify file is under 5MB
- Check file type is PDF, DOC, or DOCX
- Ensure form has `enctype="multipart/form-data"`

### Form Validation Errors
- Check all required fields are filled
- Verify email format is valid
- Ensure resume file is selected

## Production Deployment
1. Use production email service (SendGrid, AWS SES, etc.)
2. Set up proper environment variables
3. Configure email templates for production
4. Test thoroughly before going live
5. Monitor email delivery and bounce rates

## Support
For technical issues or customization requests, contact the development team.
