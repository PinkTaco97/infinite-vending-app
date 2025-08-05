// Next
import { NextResponse } from "next/server";

// Nodemailer
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  // get form data from the request
  const { name, email, location, problem } = await req.json();

  // log the received data
  console.log("Received form data:", { name, email, location, problem });

  // check if all required fields are present
  if (!name || !email || !problem) {
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
      subject: "Infinite Vending Problem Report",
      text: `Name:\n${name}\nEmail:\n${email}\nLocation:\n${location}\nProblem:\n${problem}`,
      html: `<p>Name:\n${name}</p><p>Email:\n${email}</p><p>Location:\n${location}</p><p>Problem:\n${problem}</p>`,
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
