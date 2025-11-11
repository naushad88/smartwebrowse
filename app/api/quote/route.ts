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
    
    // Debug: Log the received data
    console.log('Received quote request data:', JSON.stringify(data, null, 2));
    
    // Extract form data
    const { 
      name, 
      email, 
      company, 
      phone, 
      mainService, 
      specificService, 
      projectDetails, 
      budgetRange, 
      timeline, 
      verification 
    } = data;

    // Validate required fields
    if (!name || !email || !mainService || !projectDetails || !verification) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Create email content
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Quote Request
        </h2>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h3 style="color: #1e40af; margin-top: 0;">Client Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || 'Not provided'}</p>
          <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        </div>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
          <h3 style="color: #0c4a6e; margin-top: 0;">Project Details</h3>
          <p><strong>Main Service:</strong> ${mainService}</p>
          <p><strong>Specific Service:</strong> ${specificService || 'Not specified'}</p>
          <p><strong>Budget Range:</strong> ${budgetRange || 'Not specified'}</p>
          <p><strong>Timeline:</strong> ${timeline || 'Not specified'}</p>
        </div>
        
        <div style="background-color: #fef3c7; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
          <h3 style="color: #92400e; margin-top: 0;">Project Description</h3>
          <p style="color: #92400e; line-height: 1.6; white-space: pre-wrap;">${projectDetails}</p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This quote request was submitted from the Smartwebrowse India Private Limited website.
          </p>
        </div>
      </div>
    `;

    const mailOptions = {
      from: process.env.EMAIL_USER || 'noreply@smartwebrowse.com',
      to: 'sales@smartwebrowse.com',
      subject: `New Quote Request from ${name} - ${mainService}`,
      html: emailHtml,
    };

    console.log('Sending email to sales@smartwebrowse.com...');
    const emailResult = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', emailResult.messageId);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Quote request submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing quote request:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit quote request. Please try again.' 
      },
      { status: 500 }
    );
  }
}
