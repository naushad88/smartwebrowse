import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Configure email transporter for Smartwebrowse India Private Limited custom server
const transporter = nodemailer.createTransport({
  host: 'mail.smartwebrowse.com',
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER || 'noreply@smartwebrowse.com',
    pass: process.env.EMAIL_PASS || 'your-email-password',
  },
});

export async function POST(request: NextRequest) {
  try {
    const data = await request.json();
    
    // Extract form data
    const { name, company, service, message, verification } = data;

    // Validate required fields
    if (!name || !service || !message || !verification) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Contact Form Submission
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Contact Details</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service of Interest:</strong> ${service}</p>
        </div>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
          <h3 style="color: #0c4a6e; margin-top: 0;">Message</h3>
          <p style="color: #0c4a6e; line-height: 1.6; white-space: pre-wrap;">${message}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This message was sent from the Smartwebrowse India Private Limited contact form.
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@smartwebrowse.com',
      to: 'reachus@smartwebrowse.com',
      subject: `New Contact Form Submission from ${name}`,
      html: emailHtml,
    };

    console.log('Sending email to reachus@smartwebrowse.com...');
    const emailResult = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', emailResult.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Message sent successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing contact form:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to send message. Please try again.' 
      },
      { status: 500 }
    );
  }
}
