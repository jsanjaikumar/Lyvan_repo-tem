import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { EMAIL, APP_PASSWORD } = process.env;
  if (!EMAIL || !APP_PASSWORD) {
    return res.status(500).json({
      message: "Server email configuration is missing.",
    });
  }

  let payload = req.body;
  if (typeof payload === "string") {
    try {
      payload = JSON.parse(payload);
    } catch {
      return res.status(400).json({ message: "Invalid JSON payload." });
    }
  }

  const name = payload?.name?.trim();
  const email = payload?.email?.trim();
  const subject = payload?.subject?.trim();
  const message = payload?.message?.trim();

  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: "Missing required fields: name, email, subject, and message.",
    });
  }

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: APP_PASSWORD,
    },
  });

  try {
    await transporter.sendMail({
      from: EMAIL,
      to: EMAIL,
      replyTo: email,
      subject: `New Contact Form Message - ${name}`,
      text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
    });

    return res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    return res.status(500).json({
      message: "Failed to send email.",
    });
  }
}
