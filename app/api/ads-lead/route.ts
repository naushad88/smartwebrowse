import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { name, email, phone, company, services, message } = body;

    // Validate required fields
    if (!name || !email) {
      return NextResponse.json(
        { error: 'Name and email are required' },
        { status: 400 }
      );
    }

    // Log the lead
    console.log('New lead received:', {
      name,
      email,
      phone,
      company,
      services,
      message,
      timestamp: new Date().toISOString(),
      source: 'ads-landing'
    });

    // Send email notification to admin
    try {
      const transporter = nodemailer.createTransport({
        host: 'mail.smartwebrowse.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER || 'norply@smartwebrowse.com',
          pass: process.env.EMAIL_PASS || 'your-email-password',
        },
      });

      const mailOptions = {
        from: process.env.EMAIL_USER || 'norply@smartwebrowse.com',
        to: 'sales@smartwebrowse.com',
        subject: `New Lead from Ads Landing Page - ${name}`,
        html: `
          <h2>New Lead from Ads Landing Page</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Services of Interest:</strong> ${services || 'Not specified'}</p>
          <p><strong>Message:</strong> ${message || 'No additional message'}</p>
          <p><strong>Source:</strong> Ads Landing Page</p>
          <p><strong>Timestamp:</strong> ${new Date().toISOString()}</p>
        `
      };

      await transporter.sendMail(mailOptions);
      console.log('Email sent successfully');
    } catch (emailError) {
      console.error('Email sending failed:', emailError);
      // Don't fail the request if email fails
    }

    // Send confirmation email to client
    try {
      const transporter = nodemailer.createTransport({
        host: 'mail.smartwebrowse.com',
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
          user: process.env.EMAIL_USER || 'norply@smartwebrowse.com',
          pass: process.env.EMAIL_PASS || 'your-email-password',
        },
      });

      const clientMailOptions = {
        from: `"Smartwebrowse India Private Limited Team" <${process.env.EMAIL_USER || 'norply@smartwebrowse.com'}>`,
        to: email,
        subject: 'We\'ve received your enquiry — Smartwebrowse India Private Limited Team',
        html: `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Thank You - Smartwebrowse India Private Limited</title>
          </head>
          <body style="margin: 0; padding: 20px; background-color: #f8fafc; font-family: Arial, sans-serif;">
            <div style="max-width: 800px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
              
              <!-- Header -->
              <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 40px 30px; text-align: center;">
                <h1 style="color: white; margin: 0 0 10px; font-size: 28px; font-weight: 700;">Smartwebrowse India Private Limited Private Limited</h1>
                <p style="color: rgba(255, 255, 255, 0.9); margin: 0; font-size: 14px; font-weight: 500;">CIN: U72900CH2013PTC034540</p>
              </div>
              
              <!-- Main Content -->
              <div style="padding: 30px;">
                
                <!-- Thank You Message -->
                <div style="text-align: center; margin-bottom: 25px;">
                  <h2 style="color: #1e40af; margin: 0 0 10px; font-size: 22px; font-weight: 600;">Thank you, ${name}!</h2>
                  <p style="color: #4b5563; font-size: 16px; line-height: 1.5; margin: 0;">
                    We've received your request for a free consultation and are excited to help transform your business with our expert IT solutions.
                  </p>
                </div>
                
                <!-- What Happens Next -->
                <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin-bottom: 25px; border-left: 4px solid #0ea5e9;">
                  <h3 style="color: #0c4a6e; margin: 0 0 15px; font-size: 18px; font-weight: 600;">What happens next?</h3>
                  <ul style="color: #0c4a6e; margin: 0; padding-left: 20px; line-height: 1.6;">
                    <li>Our team will review your requirements within 24 hours</li>
                    <li>We'll contact you to schedule your free consultation</li>
                    <li>During the consultation, we'll discuss your specific needs and provide tailored recommendations</li>
                  </ul>
                </div>
                
                <!-- Services - 3 Columns with Links -->
                <div style="margin-bottom: 25px;">
                  <h3 style="color: #1e40af; margin: 0 0 15px; font-size: 18px; font-weight: 600; text-align: center;">Our Services</h3>
                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="width: 33.33%; padding: 5px; vertical-align: top;">
                        <a href="https://www.smartwebrowse.com/services/cybersecurity" style="text-decoration: none; display: block;">
                          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; text-align: center; border: 1px solid #e2e8f0;">
                            <div style="font-size: 20px; margin-bottom: 5px;">🔒</div>
                            <div style="color: #1e40af; font-size: 14px; font-weight: 600;">Cybersecurity & IAM</div>
                          </div>
                        </a>
                      </td>
                      <td style="width: 33.33%; padding: 5px; vertical-align: top;">
                        <a href="https://www.smartwebrowse.com/services/cloud" style="text-decoration: none; display: block;">
                          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; text-align: center; border: 1px solid #e2e8f0;">
                            <div style="font-size: 20px; margin-bottom: 5px;">☁️</div>
                            <div style="color: #1e40af; font-size: 14px; font-weight: 600;">Cloud Services</div>
                          </div>
                        </a>
                      </td>
                      <td style="width: 33.33%; padding: 5px; vertical-align: top;">
                        <a href="https://www.smartwebrowse.com/services/web-development" style="text-decoration: none; display: block;">
                          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; text-align: center; border: 1px solid #e2e8f0;">
                            <div style="font-size: 20px; margin-bottom: 5px;">💻</div>
                            <div style="color: #1e40af; font-size: 14px; font-weight: 600;">AI & Web Development</div>
                          </div>
                        </a>
                      </td>
                    </tr>
                    <tr>
                      <td style="width: 33.33%; padding: 5px; vertical-align: top;">
                        <a href="https://www.smartwebrowse.com/services/devops" style="text-decoration: none; display: block;">
                          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; text-align: center; border: 1px solid #e2e8f0;">
                            <div style="font-size: 20px; margin-bottom: 5px;">⚙️</div>
                            <div style="color: #1e40af; font-size: 14px; font-weight: 600;">DevOps & Automation</div>
                          </div>
                        </a>
                      </td>
                      <td style="width: 33.33%; padding: 5px; vertical-align: top;">
                        <a href="https://www.smartwebrowse.com/services/mobile" style="text-decoration: none; display: block;">
                          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; text-align: center; border: 1px solid #e2e8f0;">
                            <div style="font-size: 20px; margin-bottom: 5px;">📱</div>
                            <div style="color: #1e40af; font-size: 14px; font-weight: 600;">Mobile Development</div>
                          </div>
                        </a>
                      </td>
                      <td style="width: 33.33%; padding: 5px; vertical-align: top;">
                        <a href="https://www.smartwebrowse.com/services/digital-marketing" style="text-decoration: none; display: block;">
                          <div style="background-color: #f8fafc; padding: 15px; border-radius: 6px; text-align: center; border: 1px solid #e2e8f0;">
                            <div style="font-size: 20px; margin-bottom: 5px;">📈</div>
                            <div style="color: #1e40af; font-size: 14px; font-weight: 600;">Digital Marketing</div>
                          </div>
                        </a>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <!-- Contact Information -->
                <div style="background: linear-gradient(135deg, #1e40af 0%, #3b82f6 100%); padding: 25px; border-radius: 8px; text-align: center; margin-bottom: 25px;">
                  <h3 style="color: white; margin: 0 0 20px; font-size: 22px; font-weight: 700; text-align: center;">Need immediate assistance?</h3>
                  <table role="presentation" style="width: 100%; border-collapse: collapse;">
                    <tr>
                      <td style="width: 25%; padding: 10px; text-align: center; vertical-align: top;">
                        <div style="color: white;">
                          <div style="font-weight: 600; margin-bottom: 5px; font-size: 14px;">🇺🇸 USA</div>
                          <a href="tel:+12404418984" style="color: white; text-decoration: none; font-size: 14px; font-weight: 500;">+1 (240) 441-8984</a>
                        </div>
                      </td>
                      <td style="width: 25%; padding: 10px; text-align: center; vertical-align: top;">
                        <div style="color: white;">
                          <div style="font-weight: 600; margin-bottom: 5px; font-size: 14px;">🇯🇵 Japan</div>
                          <a href="tel:+818042597661" style="color: white; text-decoration: none; font-size: 14px; font-weight: 500;">+81 80-4259-7661</a>
                        </div>
                      </td>
                      <td style="width: 25%; padding: 10px; text-align: center; vertical-align: top;">
                        <div style="color: white;">
                          <div style="font-weight: 600; margin-bottom: 5px; font-size: 14px;">🇮🇳 India</div>
                          <a href="tel:+917238009780" style="color: white; text-decoration: none; font-size: 14px; font-weight: 500;">+91 7238009780</a>
                        </div>
                      </td>
                      <td style="width: 25%; padding: 10px; text-align: center; vertical-align: top;">
                        <div style="color: white;">
                          <div style="font-weight: 600; margin-bottom: 5px; font-size: 14px;">📧 Email</div>
                          <a href="mailto:contact@smartwebrowse.com" style="color: white; text-decoration: none; font-size: 14px; font-weight: 500;">contact@smartwebrowse.com</a>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <!-- Company Stats - Text Top, Numbers Below -->
                <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin-bottom: 25px; text-align: center;">
                  <h3 style="color: #1e40af; margin: 0 0 20px; font-size: 18px; font-weight: 600;">Why Choose Us?</h3>
                  <table role="presentation" style="width: 100%; border-collapse: collapse; max-width: 600px; margin: 0 auto;">
                    <tr>
                      <td style="width: 25%; padding: 10px; text-align: center; vertical-align: top;">
                        <div style="color: #64748b; font-size: 14px; font-weight: 500; margin-bottom: 8px;">Happy Clients</div>
                        <div style="color: #1e40af; font-size: 32px; font-weight: 700;">500+</div>
                      </td>
                      <td style="width: 25%; padding: 10px; text-align: center; vertical-align: top;">
                        <div style="color: #64748b; font-size: 14px; font-weight: 500; margin-bottom: 8px;">Projects</div>
                        <div style="color: #1e40af; font-size: 32px; font-weight: 700;">1000+</div>
                      </td>
                      <td style="width: 25%; padding: 10px; text-align: center; vertical-align: top;">
                        <div style="color: #64748b; font-size: 14px; font-weight: 500; margin-bottom: 8px;">Years</div>
                        <div style="color: #1e40af; font-size: 32px; font-weight: 700;">12+</div>
                      </td>
                      <td style="width: 25%; padding: 10px; text-align: center; vertical-align: top;">
                        <div style="color: #64748b; font-size: 14px; font-weight: 500; margin-bottom: 8px;">Countries</div>
                        <div style="color: #1e40af; font-size: 32px; font-weight: 700;">15+</div>
                      </td>
                    </tr>
                  </table>
                </div>
                
                <!-- Closing -->
                <div style="text-align: center; margin-bottom: 20px;">
                  <p style="color: #4b5563; font-size: 16px; margin: 0 0 10px;">Best regards,</p>
                  <p style="color: #1e40af; font-size: 16px; font-weight: 600; margin: 0 0 5px;">The Smartwebrowse India Private Limited Team</p>
                  <p style="color: #64748b; font-size: 12px; font-style: italic; margin: 0;">
                    Trusted IT Solutions Partner for Businesses in the USA, Japan, Ireland & Beyond
                  </p>
                </div>
                
              </div>
              
              <!-- Footer -->
              <div style="background-color: #f8fafc; padding: 20px; text-align: center; border-top: 1px solid #e2e8f0;">
                <div style="margin-bottom: 10px;">
                  <a href="https://www.smartwebrowse.com" style="color: #1e40af; text-decoration: none; font-weight: 600; font-size: 14px; margin: 0 10px;">Website</a>
                  <a href="https://www.smartwebrowse.com/portfolio" style="color: #1e40af; text-decoration: none; font-weight: 600; font-size: 14px; margin: 0 10px;">Portfolio</a>
                  <a href="https://www.smartwebrowse.com/contact" style="color: #1e40af; text-decoration: none; font-weight: 600; font-size: 14px; margin: 0 10px;">Contact</a>
                </div>
                <p style="color: #64748b; font-size: 11px; margin: 0;">
                  This email was sent because you requested a free consultation on our website.
                </p>
              </div>
              
            </div>
          </body>
          </html>
        `
      };

      await transporter.sendMail(clientMailOptions);
      console.log('Confirmation email sent to client');
    } catch (emailError) {
      console.error('Client confirmation email failed:', emailError);
      // Don't fail the request if email fails
    }

    // Lead successfully processed

    return NextResponse.json(
      { 
        success: true, 
        message: 'Lead submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing lead:', error);
    return NextResponse.json(
      { error: 'Failed to process lead' },
      { status: 500 }
    );
  }
}
