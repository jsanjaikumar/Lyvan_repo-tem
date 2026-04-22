// import nodemailer from "nodemailer";

// export default async function handler(req, res) {
//   if (req.method !== "POST") {
//     res.setHeader("Allow", ["POST"]);
//     return res.status(405).json({ message: "Method Not Allowed" });
//   }

//   const { EMAIL, APP_PASSWORD } = process.env;
//   if (!EMAIL || !APP_PASSWORD) {
//     return res.status(500).json({
//       message: "Server email configuration is missing.",
//     });
//   }

//   let payload = req.body;
//   if (typeof payload === "string") {
//     try {
//       payload = JSON.parse(payload);
//     } catch {
//       return res.status(400).json({ message: "Invalid JSON payload." });
//     }
//   }

//   const name = payload?.name?.trim();
//   const email = payload?.email?.trim();
//   const subject = payload?.subject?.trim();
//   const message = payload?.message?.trim();

//   if (!name || !email || !subject || !message) {
//     return res.status(400).json({
//       message: "Missing required fields: name, email, subject, and message.",
//     });
//   }

//   const transporter = nodemailer.createTransport({
//     service: "gmail",
//     auth: {
//       user: EMAIL,
//       pass: APP_PASSWORD,
//     },
//   });

//   try {
//     await transporter.sendMail({
//       from: EMAIL,
//       to: EMAIL,
//       replyTo: email,
//       subject: `New Contact Form Message - ${name}`,
//       text: `Name: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`,
//     });

//     return res.status(200).json({ message: "Message sent successfully." });
//   } catch (error) {
//     return res.status(500).json({
//       message: "Failed to send email.",
//     });
//   }
// }

import nodemailer from "nodemailer";

export default async function handler(req, res) {
  // ================================
  // METHOD CHECK
  // ================================
  if (req.method !== "POST") {
    res.setHeader("Allow", ["POST"]);
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  // ================================
  // ENV VARIABLES
  // ================================
  const { EMAIL, APP_PASSWORD } = process.env;

  if (!EMAIL || !APP_PASSWORD) {
    return res.status(500).json({
      message: "Server email configuration is missing.",
    });
  }

  // ================================
  // PARSE BODY
  // ================================
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

  // ================================
  // VALIDATION
  // ================================
  if (!name || !email || !subject || !message) {
    return res.status(400).json({
      message: "All fields are required.",
    });
  }

  // ================================
  // MAIL TRANSPORTER
  // ================================
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: EMAIL,
      pass: APP_PASSWORD,
    },
  });

  try {
    // ==========================================
    // 1️⃣ ADMIN EMAIL (Lyvan receives full lead)
    // ==========================================
    await transporter.sendMail({
      from: `"Lyvan " <${EMAIL}>`,
      to: EMAIL,
      replyTo: email,
      subject: `📩 Lyvan New Lead - ${subject}`,
      html: `
      <div style="font-family: Arial; background:#f6f6f6; padding:20px;">
        <div style="max-width:600px;margin:auto;background:#ffffff;border-radius:10px;overflow:hidden;box-shadow:0 0 10px rgba(0,0,0,0.1);">
          
          <div style="background:#0d6efd;color:#fff;padding:15px;">
            <h2 style="margin:0;">📬 New Lead from Lyvan</h2>
          </div>

          <div style="padding:20px;">
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Subject:</strong> ${subject}</p>

            <hr style="margin:20px 0;" />

            <p><strong>Message:</strong></p>
            <p style="background:#f9f9f9;padding:15px;border-radius:6px;">
              ${message}
            </p>

            <br/>

            <a href="mailto:${email}" 
              style="display:inline-block;padding:10px 15px;background:#0d6efd;color:#fff;text-decoration:none;border-radius:5px;">
              Reply to Client
            </a>
          </div>

          <div style="background:#f1f1f1;padding:10px;text-align:center;font-size:12px;">
            <p>Lyvan Contact Form • ${new Date().toLocaleString()}</p>
          </div>

        </div>
      </div>
      `,
    });

    // ==========================================
    // 2️⃣ CLIENT AUTO-REPLY (NO message)
    // ==========================================
    await transporter.sendMail({
      from: `"Lyvan Team" <${EMAIL}>`,
      to: email,
      subject: "Lyvan received your message",
      html: `
      <div style="font-family: Arial; padding:20px;">
        <h2>Hi ${name},</h2>

       <p>Hi ${name},</p>

<p>Thank you for choosing <strong>Lyvan</strong> </p>

<p>We’ve received your request and are excited to work with you.</p>

<p>Our team will get back to you within <strong>a few hours</strong>.</p>

<p>Let’s build something great together 🚀</p>

<p><strong>Team Lyvan</strong></p>
      </div>
      `,
    });

    // ================================
    // SUCCESS RESPONSE
    // ================================
    return res.status(200).json({
      message: "Message sent successfully.",
    });
  } catch (error) {
    console.error("Email Error:", error);

    return res.status(500).json({
      message: "Failed to send email.",
    });
  }
}