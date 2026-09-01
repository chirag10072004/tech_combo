import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { Resend } from 'resend';
import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

// Enable CORS for all origins (Public API endpoints)
app.use(cors({
  origin: true,
  credentials: true,
}));

app.use(express.json({ limit: '15mb' }));
app.use(express.urlencoded({ limit: '15mb', extended: true }));

// Initialize Resend if key is available
const resendClient = process.env.RESEND_API_KEY ? new Resend(process.env.RESEND_API_KEY) : null;

// Initialize Nodemailer transporter (Gmail SMTP) if credentials are available
let transporter = null;
if (process.env.SMTP_USER && process.env.SMTP_PASS) {
  transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  transporter.verify((error) => {
    if (error) {
      console.error('SMTP connection error:', error.message);
    } else {
      console.log('SMTP server is ready to send emails.');
    }
  });
}

// Log status on startup
if (resendClient) {
  console.log('Email provider configured: Resend API');
} else if (transporter) {
  console.log('Email provider configured: Nodemailer (Gmail SMTP)');
} else {
  console.warn('WARNING: Neither RESEND_API_KEY nor SMTP_USER/SMTP_PASS are set. Email delivery will fail until configured.');
}

const ADMIN_EMAIL = process.env.EMAIL_RECEIVER || 'cloudstorageforphotos01@gmail.com';

/**
 * Unified email sender supporting Resend & Nodemailer
 */
async function sendMailHelper({ to, subject, html, replyTo, attachments = [] }) {
  if (process.env.RESEND_API_KEY && resendClient) {
    const fromAddress = process.env.EMAIL_FROM || 'Tech Combo <onboarding@resend.dev>';
    const resendAttachments = attachments.map(att => ({
      filename: att.filename,
      content: Buffer.isBuffer(att.content) ? att.content.toString('base64') : att.content,
    }));

    const { data, error } = await resendClient.emails.send({
      from: fromAddress,
      to,
      subject,
      html,
      reply_to: replyTo,
      attachments: resendAttachments.length > 0 ? resendAttachments : undefined,
    });

    if (error) {
      throw new Error(`Resend Error: ${error.message}`);
    }
    return data;
  } else if (transporter) {
    const fromAddress = process.env.EMAIL_FROM || process.env.SMTP_USER;
    return await transporter.sendMail({
      from: fromAddress,
      to,
      replyTo,
      subject,
      html,
      attachments,
    });
  } else {
    throw new Error('Email credentials are not configured on the server. Please set RESEND_API_KEY or SMTP_USER/SMTP_PASS in environment variables.');
  }
}

// ─── Contact Form ────────────────────────────────────────────────────────────
app.post('/api/contact', async (req, res) => {
  const { firstName, lastName, email, phone, company, subject, message } = req.body;

  // Validation
  if (!firstName || !lastName || !email || !subject || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: firstName, lastName, email, subject, message.',
    });
  }

  if (!process.env.RESEND_API_KEY && (!process.env.SMTP_USER || !process.env.SMTP_PASS)) {
    return res.status(500).json({
      success: false,
      message: 'Server Error: Email service credentials are not configured on the backend server.',
    });
  }

  try {
    // 1. Notify admin
    await sendMailHelper({
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `New Contact Submission: ${subject}`,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
          <div style="background:#2563eb;color:#fff;padding:20px;text-align:center;">
            <h2 style="margin:0;font-size:24px;">New Contact Message</h2>
          </div>
          <div style="padding:24px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
              <tr><td style="padding:8px 0;font-weight:bold;width:30%;border-bottom:1px solid #f1f5f9;">Name:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${firstName} ${lastName}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;">Email:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><a href="mailto:${email}" style="color:#2563eb;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;">Phone:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${phone || 'N/A'}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;">Company:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${company || 'N/A'}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;">Subject:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${subject}</td></tr>
            </table>
            <div style="margin-top:20px;">
              <h4 style="margin-bottom:8px;color:#1e293b;">Message:</h4>
              <p style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px;border:1px solid #e2e8f0;margin:0;font-size:14px;">${message}</p>
            </div>
          </div>
          <div style="background:#f8fafc;padding:12px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #e2e8f0;">
            This email was automatically generated by your website's contact form.
          </div>
        </div>
      `,
    });

    // 2. Auto-reply to sender (best-effort)
    if (process.env.SEND_AUTO_REPLY !== 'false') {
      try {
        await sendMailHelper({
          to: email,
          subject: `Thank you for contacting Tech Combo`,
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
              <div style="background:#1e293b;color:#fff;padding:20px;text-align:center;">
                <h2 style="margin:0;font-size:24px;">Thank You!</h2>
              </div>
              <div style="padding:24px;background:#fff;">
                <p>Hi ${firstName},</p>
                <p>Thank you for reaching out to <strong>Tech Combo</strong>!</p>
                <p>We have successfully received your inquiry regarding <strong>"${subject}"</strong>, and a member of our team will get back to you as soon as possible.</p>
                <p>In the meantime, feel free to browse our services on our website.</p>
                <br>
                <p style="margin-bottom:0;">Best regards,</p>
                <p style="margin-top:4px;font-weight:bold;color:#2563eb;">Tech Combo Team</p>
              </div>
              <div style="background:#f8fafc;padding:12px;text-align:center;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0;">
                &copy; ${new Date().getFullYear()} Tech Combo. All rights reserved.
              </div>
            </div>
          `,
        });
      } catch (replyError) {
        console.error('Auto-reply error (non-fatal):', replyError.message);
      }
    }

    res.status(200).json({ success: true, message: 'Message sent successfully.' });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      success: false,
      message: `Failed to send message: ${error.message || 'Unknown error.'}`,
      error: error.message,
    });
  }
});

// ─── Career Form ─────────────────────────────────────────────────────────────
app.post('/api/career', async (req, res) => {
  const { job, fullName, email, phone, experience, portfolio, message, resume, resumeName } = req.body;

  // Validation
  if (!job || !fullName || !email || !phone || !experience || !message) {
    return res.status(400).json({
      success: false,
      message: 'Please provide all required fields: job, fullName, email, phone, experience, message.',
    });
  }

  if (!process.env.RESEND_API_KEY && (!process.env.SMTP_USER || !process.env.SMTP_PASS)) {
    return res.status(500).json({
      success: false,
      message: 'Server Error: Email service credentials are not configured on the backend server.',
    });
  }

  try {
    // Build attachments array (resume is base64-encoded)
    const attachments = [];
    if (resume) {
      const base64Data = resume.includes('base64,') ? resume.split('base64,')[1] : resume;
      attachments.push({
        filename: resumeName || 'resume.pdf',
        content: Buffer.from(base64Data, 'base64'),
      });
    }

    // 1. Notify admin / HR
    await sendMailHelper({
      to: ADMIN_EMAIL,
      replyTo: email,
      subject: `New Job Application: ${job} — ${fullName}`,
      attachments,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
          <div style="background:#16a34a;color:#fff;padding:20px;text-align:center;">
            <h2 style="margin:0;font-size:24px;">New Job Application</h2>
            <p style="margin:5px 0 0 0;font-size:14px;opacity:.9;">Position: ${job}</p>
          </div>
          <div style="padding:24px;background:#fff;">
            <table style="width:100%;border-collapse:collapse;margin-bottom:20px;">
              <tr><td style="padding:8px 0;font-weight:bold;width:35%;border-bottom:1px solid #f1f5f9;">Full Name:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${fullName}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;">Email:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;"><a href="mailto:${email}" style="color:#16a34a;">${email}</a></td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;">Phone:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${phone}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;">Experience:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;text-transform:capitalize;">${experience}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;">Portfolio/LinkedIn:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${portfolio && portfolio !== 'N/A' ? `<a href="${portfolio}" target="_blank" style="color:#16a34a;">${portfolio}</a>` : 'N/A'}</td></tr>
              <tr><td style="padding:8px 0;font-weight:bold;border-bottom:1px solid #f1f5f9;">Resume:</td><td style="padding:8px 0;border-bottom:1px solid #f1f5f9;">${resume ? resumeName : 'None attached'}</td></tr>
            </table>
            <div style="margin-top:20px;">
              <h4 style="margin-bottom:8px;color:#1e293b;">Cover Message:</h4>
              <p style="white-space:pre-wrap;background:#f8fafc;padding:16px;border-radius:8px;border:1px solid #e2e8f0;margin:0;font-size:14px;">${message}</p>
            </div>
          </div>
          <div style="background:#f8fafc;padding:12px;text-align:center;font-size:12px;color:#64748b;border-top:1px solid #e2e8f0;">
            This email was automatically generated by your website's career application form.
          </div>
        </div>
      `,
    });

    // 2. Auto-reply to applicant (best-effort)
    if (process.env.SEND_AUTO_REPLY !== 'false') {
      try {
        await sendMailHelper({
          to: email,
          subject: `Application Received: ${job} at Tech Combo`,
          html: `
            <div style="font-family:Arial,sans-serif;line-height:1.6;color:#333;max-width:600px;margin:0 auto;border:1px solid #e2e8f0;border-radius:8px;overflow:hidden;">
              <div style="background:#1e293b;color:#fff;padding:20px;text-align:center;">
                <h2 style="margin:0;font-size:24px;">Application Received</h2>
                <p style="margin:5px 0 0 0;font-size:14px;opacity:.9;">Position: ${job}</p>
              </div>
              <div style="padding:24px;background:#fff;">
                <p>Hi ${fullName},</p>
                <p>Thank you for your interest in joining <strong>Tech Combo</strong>!</p>
                <p>We have successfully received your application for the <strong>"${job}"</strong> position. Our hiring team is currently reviewing your resume and details.</p>
                <p>If your profile aligns with our requirements, we will reach out to you to discuss the next steps.</p>
                <br>
                <p style="margin-bottom:0;">Best regards,</p>
                <p style="margin-top:4px;font-weight:bold;color:#16a34a;">Tech Combo Hiring Team</p>
              </div>
              <div style="background:#f8fafc;padding:12px;text-align:center;font-size:11px;color:#94a3b8;border-top:1px solid #e2e8f0;">
                &copy; ${new Date().getFullYear()} Tech Combo. All rights reserved.
              </div>
            </div>
          `,
        });
      } catch (replyError) {
        console.error('Auto-reply to applicant error (non-fatal):', replyError.message);
      }
    }

    res.status(200).json({ success: true, message: 'Application submitted successfully.' });

  } catch (error) {
    console.error('Career form error:', error);
    res.status(500).json({
      success: false,
      message: `Failed to process career application: ${error.message || 'Unknown error.'}`,
      error: error.message,
    });
  }
});

// ─── Health / Ping ────────────────────────────────────────────────────────────
app.get('/api/health', (req, res) => {
  const provider = process.env.RESEND_API_KEY
    ? 'Resend API'
    : (process.env.SMTP_USER && process.env.SMTP_PASS)
      ? 'Nodemailer (Gmail SMTP)'
      : 'None';

  res.status(200).json({
    status: 'ok',
    message: 'Backend server is running.',
    emailProvider: provider,
    configured: Boolean(process.env.RESEND_API_KEY || (process.env.SMTP_USER && process.env.SMTP_PASS)),
    smtpConfigured: Boolean(process.env.SMTP_USER && process.env.SMTP_PASS),
    resendConfigured: Boolean(process.env.RESEND_API_KEY),
  });
});

app.get('/api/ping', (req, res) => {
  res.status(200).json({ status: 'alive', timestamp: new Date().toISOString() });
});

// ─── Global Error Handler ─────────────────────────────────────────────────────
app.use((err, req, res, next) => {
  console.error('Unhandled server error:', err);
  res.status(500).json({
    success: false,
    message: err.message || 'Internal Server Error',
  });
});

// ─── Start server ─────────────────────────────────────────────────────────────
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);

  // Keep-alive self-ping every 10 minutes to prevent Render free tier cold starts
  if (process.env.NODE_ENV === 'production' || process.env.RENDER) {
    const SELF_URL = process.env.RENDER_EXTERNAL_URL || 'https://tech-combo.onrender.com';
    setInterval(async () => {
      try {
        const r = await fetch(`${SELF_URL}/api/ping`);
        console.log(`[Keep-alive] ${new Date().toISOString()} → ${r.status}`);
      } catch (err) {
        console.error('[Keep-alive] Self-ping failed:', err.message);
      }
    }, 10 * 60 * 1000);
    console.log(`[Keep-alive] Scheduled every 10 min → ${SELF_URL}/api/ping`);
  }
});
