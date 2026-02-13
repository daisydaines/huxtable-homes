import { getResend } from "./resend";

interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  projectType?: string;
  message: string;
}

function buildHtml(data: ContactFormData): string {
  return `
    <div style="font-family: Georgia, 'Times New Roman', serif; max-width: 600px; margin: 0 auto; background-color: #F5F0EB; padding: 32px; border-radius: 8px;">
      <h1 style="color: #8B7355; font-size: 24px; margin-top: 0;">New Contact Form Submission</h1>
      <hr style="border: none; border-top: 1px solid #8B7355; margin: 16px 0;" />
      <table style="width: 100%; border-collapse: collapse;">
        <tr>
          <td style="padding: 8px 0; color: #8B7355; font-weight: bold; vertical-align: top; width: 120px;">Name</td>
          <td style="padding: 8px 0; color: #333;">${data.name}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; color: #8B7355; font-weight: bold; vertical-align: top;">Email</td>
          <td style="padding: 8px 0; color: #333;">${data.email}</td>
        </tr>
        ${data.phone ? `<tr>
          <td style="padding: 8px 0; color: #8B7355; font-weight: bold; vertical-align: top;">Phone</td>
          <td style="padding: 8px 0; color: #333;">${data.phone}</td>
        </tr>` : ""}
        ${data.projectType ? `<tr>
          <td style="padding: 8px 0; color: #8B7355; font-weight: bold; vertical-align: top;">Project Type</td>
          <td style="padding: 8px 0; color: #333;">${data.projectType}</td>
        </tr>` : ""}
        <tr>
          <td style="padding: 8px 0; color: #8B7355; font-weight: bold; vertical-align: top;">Message</td>
          <td style="padding: 8px 0; color: #333; white-space: pre-wrap;">${data.message}</td>
        </tr>
      </table>
      <hr style="border: none; border-top: 1px solid #8B7355; margin: 16px 0;" />
      <p style="color: #999; font-size: 12px; margin-bottom: 0;">Sent from the Huxtable Homes contact form</p>
    </div>
  `;
}

export async function sendContactEmail(data: ContactFormData) {
  const to = process.env.CONTACT_EMAIL;
  if (!to) {
    throw new Error("CONTACT_EMAIL environment variable is not set");
  }

  const from =
    process.env.NODE_ENV === "production"
      ? "Huxtable Homes <hello@huxtablehomes.com>"
      : "Huxtable Homes <onboarding@resend.dev>";

  await getResend().emails.send({
    from,
    to,
    replyTo: data.email,
    subject: `New enquiry from ${data.name}`,
    html: buildHtml(data),
  });
}
