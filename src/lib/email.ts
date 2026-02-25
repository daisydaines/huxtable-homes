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
    <!DOCTYPE html>
    <html>
    <body style="margin: 0; padding: 0; background-color: #EFEBE5; font-family: Georgia, 'Times New Roman', serif;">
      <table width="100%" cellpadding="0" cellspacing="0" style="padding: 40px 20px;">
        <tr>
          <td align="center">
            <table width="600" cellpadding="0" cellspacing="0" style="max-width: 600px; width: 100%;">

              <!-- Header -->
              <tr>
                <td style="background-color: #2C2C2C; padding: 32px 40px; border-radius: 8px 8px 0 0;">
                  <p style="margin: 0; color: #C4A882; font-size: 11px; letter-spacing: 3px; text-transform: uppercase;">Huxtable Homes</p>
                  <h1 style="margin: 8px 0 0; color: #FFFFFF; font-size: 22px; font-weight: normal; letter-spacing: 0.5px;">New Inquiry</h1>
                </td>
              </tr>

              <!-- Body -->
              <tr>
                <td style="background-color: #FDFAF7; padding: 40px; border-radius: 0 0 8px 8px;">

                  <!-- Contact details -->
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="padding-bottom: 24px;">
                        <p style="margin: 0 0 4px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #C4A882;">From</p>
                        <p style="margin: 0; font-size: 18px; color: #2C2C2C;">${data.name}</p>
                      </td>
                    </tr>
                    <tr>
                      <td style="padding-bottom: 24px; border-bottom: 1px solid #EDE8E1;">
                        <table width="100%" cellpadding="0" cellspacing="0">
                          <tr>
                            <td width="50%" style="padding-right: 16px;">
                              <p style="margin: 0 0 4px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #C4A882;">Email</p>
                              <p style="margin: 0; font-size: 14px; color: #2C2C2C;">
                                <a href="mailto:${data.email}" style="color: #8B7355; text-decoration: none;">${data.email}</a>
                              </p>
                            </td>
                            ${data.phone ? `<td width="50%">
                              <p style="margin: 0 0 4px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #C4A882;">Phone</p>
                              <p style="margin: 0; font-size: 14px; color: #2C2C2C;">${data.phone}</p>
                            </td>` : "<td></td>"}
                          </tr>
                        </table>
                      </td>
                    </tr>
                    ${data.projectType ? `<tr>
                      <td style="padding: 24px 0; border-bottom: 1px solid #EDE8E1;">
                        <p style="margin: 0 0 4px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #C4A882;">Project Type</p>
                        <p style="margin: 0; font-size: 14px; color: #2C2C2C;">${data.projectType}</p>
                      </td>
                    </tr>` : ""}
                    <tr>
                      <td style="padding-top: 24px;">
                        <p style="margin: 0 0 12px; font-size: 10px; letter-spacing: 2px; text-transform: uppercase; color: #C4A882;">Message</p>
                        <p style="margin: 0; font-size: 15px; color: #444; line-height: 1.7; white-space: pre-wrap;">${data.message}</p>
                      </td>
                    </tr>
                  </table>

                  <!-- Reply CTA -->
                  <table width="100%" cellpadding="0" cellspacing="0" style="margin-top: 36px;">
                    <tr>
                      <td>
                        <a href="mailto:${data.email}" style="display: inline-block; background-color: #8B7355; color: #FFFFFF; text-decoration: none; font-size: 12px; letter-spacing: 2px; text-transform: uppercase; padding: 14px 28px; border-radius: 4px;">Reply to ${data.name.split(" ")[0]}</a>
                      </td>
                    </tr>
                  </table>

                </td>
              </tr>

              <!-- Footer -->
              <tr>
                <td style="padding: 24px 0; text-align: center;">
                  <p style="margin: 0; font-size: 11px; color: #AAA;">Sent from the contact form at huxtablehomes.com</p>
                </td>
              </tr>

            </table>
          </td>
        </tr>
      </table>
    </body>
    </html>
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
    subject: `New inquiry from ${data.name}`,
    html: buildHtml(data),
  });
}
