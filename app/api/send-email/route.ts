import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const {
      studentName,
      parentName,
      email,
      phone,
      age,
      course,
      preferredTime,
      message,
    } = body;

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: parseInt(process.env.SMTP_PORT || "465"),
      secure: true, // true for 465, false for other ports
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    const mailOptions = {
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `New Registration: ${studentName}`,
      text: `
        New Admission Form Submission:
        
        Student Name: ${studentName}
        Parent Name: ${parentName}
        Email: ${email} 
        Phone: ${phone}
        Age: ${age}
        Course: ${course}
        Preferred Time: ${preferredTime}
        
        Additional Message:
        ${message}
      `,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; border-radius: 10px; overflow: hidden;">
          <div style="background: linear-gradient(135deg, #6abe54 0%, #0f6132 100%); padding: 20px; text-align: center;">
            <h1 style="color: white; margin: 0;">New Registration</h1>
          </div>
          <div style="padding: 30px;">
            <h2 style="color: #0f6132; border-bottom: 2px solid #6abe54; padding-bottom: 10px;">Student Information</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Student Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${studentName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Parent Name:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${parentName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Email:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${email}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Phone:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Age:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${age}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Course:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${course}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;"><strong>Preferred Time:</strong></td>
                <td style="padding: 10px 0; border-bottom: 1px solid #eee;">${preferredTime}</td>
              </tr>
            </table>
            
            <h2 style="color: #0f6132; margin-top: 30px; border-bottom: 2px solid #6abe54; padding-bottom: 10px;">Additional Message</h2>
            <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; font-style: italic;">
              ${message || "No additional message provided."}
            </div>
          </div>
          <div style="background: #f4f4f4; padding: 15px; text-align: center; font-size: 12px; color: #666;">
            This email was sent from the Quraan House Academy registration form.
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 },
    );
  } catch (error: any) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json(
      { message: "Failed to send email", error: error.message },
      { status: 500 },
    );
  }
}
