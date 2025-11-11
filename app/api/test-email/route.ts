import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    if (!email) {
      return NextResponse.json(
        { success: false, error: 'Email is required' },
        { status: 400 }
      );
    }

    // Create transporter for sending emails
    const transporter = nodemailer.createTransport({
      host: 'mail.smartwebrowse.com',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USER || 'noreply@smartwebrowse.com',
        pass: process.env.EMAIL_PASS || 'your-email-password',
      },
    });

    const orderId = `TEST-NMI-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    const customerName = 'Naushad Ahmad';
    const customerEmail = email || 'naushad88@gmail.com';
    const licenseQuantity = 1;
    const extendedSupport = false;
    const amount = 59.00;

    // Send test email to customer
    const customerMailOptions = {
      from: `"Smartwebrowse India Private Limited" <${process.env.EMAIL_USER}>`,
      to: customerEmail,
      subject: `🎉 TEST: Your NMI Plugin Order Confirmation #${orderId}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <div style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); padding: 30px; border-radius: 10px; text-align: center; margin-bottom: 30px;">
            <h1 style="color: white; margin: 0; font-size: 28px;">Thank You for Your Purchase! 🎉</h1>
          </div>

          <div style="background-color: #f9fafb; padding: 25px; border-radius: 10px; margin-bottom: 20px;">
            <h2 style="color: #1f2937; margin-top: 0;">Order Confirmed</h2>
            <p>Hello <strong>${customerName}</strong>,</p>
            <p>Your order has been successfully processed! We've received your payment and are preparing your plugin for delivery.</p>
          </div>

          <div style="background-color: #eff6ff; border-left: 4px solid #3b82f6; padding: 20px; margin: 20px 0;">
            <h3 style="color: #1e40af; margin-top: 0;">📦 Order Summary</h3>
            <p><strong>Order ID:</strong> <code style="background: white; padding: 4px 8px; border-radius: 4px;">${orderId}</code></p>
            <p><strong>Product:</strong> Network Merchants Inc Gateway for WooCommerce</p>
            <p><strong>Licenses:</strong> ${licenseQuantity} (${licenseQuantity > 1 ? 'licenses' : 'license'})</p>
            <p><strong>Extended Support:</strong> ${extendedSupport ? 'Yes - 12 months of expert support' : 'No - 6 months included'}</p>
            <p><strong>Total Paid:</strong> <strong style="color: #059669; font-size: 20px;">$${amount}</strong></p>
          </div>

          <div style="background-color: #f0fdf4; border-left: 4px solid #10b981; padding: 20px; margin: 20px 0;">
            <h3 style="color: #065f46; margin-top: 0;">📥 What Happens Next?</h3>
            <p>Our team will send you the plugin ZIP file within the next 24 hours to:</p>
            <p style="font-weight: bold; color: #047857;">${customerEmail}</p>
          </div>

          <div style="background-color: #fff7ed; border-left: 4px solid #f59e0b; padding: 20px; margin: 20px 0;">
            <h3 style="color: #92400e; margin-top: 0;">💡 Need Help?</h3>
            <p>If you have any questions or need assistance, our support team is here to help!</p>
            <p>📧 Email: <a href="mailto:nmi-support@smartwebrowse.com">nmi-support@smartwebrowse.com</a></p>
            <p>⏰ Response Time: Within 12 hours</p>
          </div>

          <div style="margin-top: 30px; padding: 20px; background-color: #f9fafb; border-radius: 10px; text-align: center;">
            <p style="color: #6b7280; margin: 0; font-size: 14px;">
              This is a <strong>TEST</strong> email to verify email functionality.<br>
              This is an automated confirmation email.<br>
              © ${new Date().getFullYear()} Smartwebrowse India Private Limited. All rights reserved.
            </p>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(customerMailOptions);
    console.log('Test email sent successfully to:', customerEmail);

    return NextResponse.json({
      success: true,
      message: 'Test email sent successfully',
      email: customerEmail,
      orderId,
    });
  } catch (error: any) {
    console.error('Test email error:', error);
    return NextResponse.json(
      { success: false, error: error.message || 'Failed to send test email' },
      { status: 500 }
    );
  }
}


