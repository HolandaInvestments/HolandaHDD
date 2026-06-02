import { Resend } from "resend";
import { ContactPayload } from "@/lib/validation";
import { siteConfig } from "@/lib/constants";

function field(label: string, value?: string) {
  return value ? `<p><strong>${label}:</strong> ${value}</p>` : "";
}

export function buildAdminEmail(data: ContactPayload) {
  const submittedAt = new Date().toISOString();

  return `
    <h2>New website request</h2>
    ${field("Request Type", data.requestType)}
    ${field("Name", data.fullName)}
    ${field("Company", data.companyName)}
    ${field("Email", data.email)}
    ${field("Phone", data.phone)}
    ${field("City/State", [data.city, data.state].filter(Boolean).join(", "))}
    ${field("Preferred Contact Method", data.preferredContactMethod)}
    ${field("Type of Utility", data.utilityType)}
    ${field("Estimated Project Location", data.projectLocation)}
    ${field("Approximate Drilling Distance", data.drillingDistance)}
    ${field("Existing Project Plan", data.existingPlan)}
    ${field("Desired Start Date", data.desiredStartDate)}
    ${field("Machine Brand/Model", data.machineModel)}
    ${field("Type of Problem", data.problemType)}
    ${field("Machine Currently Operating", data.machineOperating)}
    ${field("Urgency Level", data.urgencyLevel)}
    ${field("Number of Participants", data.participantCount)}
    ${field("Preferred Training Location", data.trainingLocation)}
    ${field("Preferred Training Date", data.trainingDate)}
    ${field("Experience Level", data.experienceLevel)}
    ${field("Message", data.message)}
    ${field("Submitted At", submittedAt)}
  `;
}

export async function sendContactEmails(data: ContactPayload) {
  const apiKey = process.env.RESEND_API_KEY;
  const to = process.env.CONTACT_TO_EMAIL || siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL || "website@company.com";

  if (!apiKey) {
    console.warn("RESEND_API_KEY is not configured. Skipping email delivery.");
    return { skipped: true };
  }

  const resend = new Resend(apiKey);

  await resend.emails.send({
    from,
    to,
    subject: `New ${data.requestType} request - Holanda Investments`,
    html: buildAdminEmail(data)
  });

  await resend.emails.send({
    from,
    to: data.email || "",
    subject: "We received your request - Holanda Investments",
    html: `
      <p>Thank you for contacting Holanda Investments. Our team received your request and will review the information shortly.</p>
      <p>If your request is urgent, please contact us by phone or WhatsApp.</p>
    `
  });

  return { skipped: false };
}
