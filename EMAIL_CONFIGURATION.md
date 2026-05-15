# Email Configuration for Praelix Technologies

## Email Server Details

**Incoming Server:** `mail.praelixtechnologies.com`
- IMAP Port: 993
- POP3 Port: 995

**Outgoing Server:** `mail.praelixtechnologies.com`
- SMTP Port: 465 (SSL/TLS)

## Environment Variables

Add these environment variables to your `.env.local` file:

```bash
# Email Configuration
EMAIL_USER="noreply@praelixtechnologies.com"
EMAIL_PASS="your-email-password"
```

## Form Email Routing

| Form | URL | Email Destination | API Route |
|------|-----|------------------|-----------|
| Get a Quote | `/get-a-quote` | `sales@praelixtechnologies.com` | `/api/quote` |
| Contact Us | `/contact` | `reachus@praelixtechnologies.com` | `/api/contact` |
| Careers | `/careers` | `hr@praelixtechnologies.com` | `/api/careers/apply` |
| Send Resume | `/send-resume` | `hr@praelixtechnologies.com` | `/api/careers/apply` |

## SMTP Configuration

All forms use the following SMTP configuration:

```javascript
const transporter = nodemailer.createTransport({
  host: 'mail.praelixtechnologies.com',
  port: 465,
  secure: true, // SSL/TLS
  auth: {
    user: process.env.EMAIL_USER || 'noreply@praelixtechnologies.com',
    pass: process.env.EMAIL_PASS || 'your-email-password',
  },
});
```

## Testing Email Configuration

To test if emails are working:

1. **Local Testing:**
   ```bash
   # Test contact form
   curl -X POST http://localhost:3000/api/contact \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","service":"Cloud Services","message":"Test message","verification":"123"}'
   
   # Test quote form
   curl -X POST http://localhost:3000/api/quote \
     -H "Content-Type: application/json" \
     -d '{"name":"Test User","email":"test@example.com","mainService":"Cloud Services","projectDetails":"Test project","verification":"123"}'
   ```

2. **Live Server Testing:**
   - Visit the forms on your live website
   - Submit test data
   - Check the respective email inboxes

## Troubleshooting

### Common Issues:

1. **Authentication Failed:**
   - Verify `EMAIL_USER` and `EMAIL_PASS` are correct
   - Ensure the email account exists on `mail.praelixtechnologies.com`

2. **Connection Timeout:**
   - Check if port 465 is open
   - Verify the SMTP server is accessible

3. **SSL/TLS Issues:**
   - Ensure `secure: true` is set for port 465
   - Check if the server supports SSL/TLS

### Email Account Setup:

Make sure these email accounts exist on your server:
- `noreply@praelixtechnologies.com` (for sending emails)
- `sales@praelixtechnologies.com` (for quote requests)
- `reachus@praelixtechnologies.com` (for contact form)
- `hr@praelixtechnologies.com` (for career applications)

## Security Notes

- Never commit email passwords to version control
- Use environment variables for sensitive data
- Consider using app-specific passwords if available
- Monitor email logs for any suspicious activity
