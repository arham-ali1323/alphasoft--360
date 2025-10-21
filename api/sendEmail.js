import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, website, message } = req.body;

  try {
    const response = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "arham.ali1323@gmail.com",
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone}</p>
        <p><strong>Website:</strong> ${website || "N/A"}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    });

    return res.status(200).json({ success: true, response });
  } catch (error) {
    console.error("Email send error:", error);
    return res.status(500).json({ success: false, error: error.message });
  }
}
