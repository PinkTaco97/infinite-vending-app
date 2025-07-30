// Next
import { NextResponse } from "next/server";

// Nodemailer
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // get form data from the request
  const { name, email, message } = await req.json();

  // log the received data
  console.log("Received form data:", { name, email, message });

  // check if all required fields are present
  if (!name || !email || !message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    // Set up transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.mail.me.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.SMTP_USER, // full custom domain email
        pass: process.env.SMTP_PASS, // app-specific password
      },
    });

    // Send mail
    await transporter.sendMail({
      from: `"Infinite-Vending-App" <${process.env.RECIPIENT_EMAIL}>`,
      to: process.env.RECIPIENT_EMAIL,
      subject: "New Contact Form Submission",
      text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
      html: `<p>Name: ${name}</p><p>Email: ${email}</p><p>Message:\n${message}</p>`,
    });

    // Log the error and return a failure response
    console.info("Email sent successfully");

    // Return success response
    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    // Log the error and return a failure response
    console.error("Email error:", error);
    return NextResponse.json(
      { message: "Failed to send email" },
      { status: 500 }
    );
  }
}
