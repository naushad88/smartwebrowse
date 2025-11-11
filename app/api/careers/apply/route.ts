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
    const formData = await request.formData();
    
    // Extract form data
    const firstName = formData.get('firstName') as string;
    const lastName = formData.get('lastName') as string;
    const email = formData.get('email') as string;
    const phone = formData.get('phone') as string;
    const experience = formData.get('experience') as string;
    const currentCompany = formData.get('currentCompany') as string;
    const expectedSalary = formData.get('expectedSalary') as string;
    const noticePeriod = formData.get('noticePeriod') as string;
    const coverLetter = formData.get('coverLetter') as string;
    const jobTitle = formData.get('jobTitle') as string;
    const jobId = formData.get('jobId') as string;
    const resume = formData.get('resume') as File;

    // Validate required fields
    if (!firstName || !lastName || !email || !experience || !resume) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Validate file size (5MB limit)
    if (resume.size > 5 * 1024 * 1024) {
      return NextResponse.json(
        { error: 'Resume file size must be less than 5MB' },
        { status: 400 }
      );
    }

    // Validate file type
    const allowedTypes = ['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'];
    if (!allowedTypes.includes(resume.type)) {
      return NextResponse.json(
        { error: 'Invalid file type. Only PDF, DOC, and DOCX files are allowed' },
        { status: 400 }
      );
    }

    // Convert resume to buffer for email attachment
    const resumeBuffer = Buffer.from(await resume.arrayBuffer());
    const resumeFileName = resume.name;

    // Prepare email content
    const emailSubject = `Job Application: ${jobTitle} - ${firstName} ${lastName}`;
    
    const emailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          New Job Application Received
        </h2>
        
        <h3 style="color: #1f2937;">Position: ${jobTitle}</h3>
        
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #374151; margin-top: 0;">Candidate Information</h4>
          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Name:</td>
              <td style="padding: 8px 0; color: #6b7280;">${firstName} ${lastName}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Email:</td>
              <td style="padding: 8px 0; color: #6b7280;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Phone:</td>
              <td style="padding: 8px 0; color: #6b7280;">${phone || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Experience:</td>
              <td style="padding: 8px 0; color: #6b7280;">${experience}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Current Company:</td>
              <td style="padding: 8px 0; color: #6b7280;">${currentCompany || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Expected Salary:</td>
              <td style="padding: 8px 0; color: #6b7280;">${expectedSalary || 'Not provided'}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; font-weight: bold; color: #374151;">Notice Period:</td>
              <td style="padding: 8px 0; color: #6b7280;">${noticePeriod || 'Not provided'}</td>
            </tr>
          </table>
        </div>
        
        ${coverLetter ? `
        <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <h4 style="color: #374151; margin-top: 0;">Cover Letter</h4>
          <p style="color: #6b7280; line-height: 1.6; margin: 0;">${coverLetter}</p>
        </div>
        ` : ''}
        
        <div style="background-color: #fef3c7; padding: 15px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #f59e0b;">
          <p style="margin: 0; color: #92400e; font-weight: 500;">
            📎 Resume attached: ${resumeFileName}
          </p>
        </div>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This application was submitted through the Smartwebrowse India Private Limited careers portal.
          </p>
          <p style="color: #6b7280; font-size: 14px;">
            Job ID: ${jobId} | Submitted: ${new Date().toLocaleString()}
          </p>
        </div>
      </div>
    `;

    const emailText = `
New Job Application Received

Position: ${jobTitle}

Candidate Information:
- Name: ${firstName} ${lastName}
- Email: ${email}
- Phone: ${phone || 'Not provided'}
- Experience: ${experience}
- Current Company: ${currentCompany || 'Not provided'}
- Expected Salary: ${expectedSalary || 'Not provided'}
- Notice Period: ${noticePeriod || 'Not provided'}

${coverLetter ? `Cover Letter:\n${coverLetter}\n` : ''}
Resume attached: ${resumeFileName}

Job ID: ${jobId}
Submitted: ${new Date().toLocaleString()}
    `;

    // Send email to HR
    const mailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: 'hr@smartwebrowse.com',
      subject: emailSubject,
      text: emailText,
      html: emailHtml,
      attachments: [
        {
          filename: resumeFileName,
          content: resumeBuffer,
          contentType: resume.type,
        },
      ],
    };

    await transporter.sendMail(mailOptions);

    // Send confirmation email to candidate
    const candidateEmailHtml = `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
          Application Received - Smartwebrowse India Private Limited
        </h2>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Dear ${firstName} ${lastName},
        </p>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Thank you for your interest in the <strong>${jobTitle}</strong> position at Smartwebrowse India Private Limited. 
          We have successfully received your application and resume.
        </p>
        
        <div style="background-color: #f0f9ff; padding: 20px; border-radius: 8px; margin: 20px 0; border-left: 4px solid #0ea5e9;">
          <h4 style="color: #0c4a6e; margin-top: 0;">What happens next?</h4>
          <ol style="color: #0c4a6e; line-height: 1.8; margin: 0; padding-left: 20px;">
            <li>Our HR team will review your application within 48 hours</li>
            <li>If selected, you'll receive an email to schedule an initial interview</li>
            <li>We may request additional information or documentation</li>
            <li>Final decision and offer will be communicated via email</li>
          </ol>
        </div>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          If you have any questions about your application, please don't hesitate to reach out to us at 
          <a href="mailto:hr@smartwebrowse.com" style="color: #2563eb;">hr@smartwebrowse.com</a>.
        </p>
        
        <p style="color: #374151; font-size: 16px; line-height: 1.6;">
          Best regards,<br>
          <strong>HR Team</strong><br>
          Smartwebrowse India Private Limited
        </p>
        
        <div style="text-align: center; margin-top: 30px; padding-top: 20px; border-top: 1px solid #e5e7eb;">
          <p style="color: #6b7280; font-size: 14px;">
            This is an automated confirmation. Please do not reply to this email.
          </p>
        </div>
      </div>
    `;

    const candidateMailOptions = {
      from: process.env.EMAIL_USER || 'your-email@gmail.com',
      to: email,
      subject: `Application Received - ${jobTitle} Position`,
      html: candidateEmailHtml,
    };

    await transporter.sendMail(candidateMailOptions);

    return NextResponse.json(
      { 
        success: true, 
        message: 'Application submitted successfully' 
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Error processing job application:', error);
    
    return NextResponse.json(
      { 
        error: 'Failed to submit application. Please try again.' 
      },
      { status: 500 }
    );
  }
}
