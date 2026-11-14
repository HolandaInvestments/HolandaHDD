import { Resend } from "resend";
import { ContactPayload } from "@/lib/validation";
import { displayPhone, phoneHref, siteConfig, whatsappHref } from "@/lib/constants";

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
  const to = siteConfig.email;
  const from = process.env.CONTACT_FROM_EMAIL?.trim();

  if (!apiKey || !from) {
    throw new Error("Contact email requires RESEND_API_KEY and CONTACT_FROM_EMAIL.");
  }

  const resend = new Resend(apiKey);

  const delivery = await resend.emails.send({
    from,
    to,
    subject: `New ${data.requestType} request - Holanda Investments`,
    html: buildAdminEmail(data)
  });

  if (delivery.error) {
    throw new Error(`Contact email delivery failed: ${delivery.error.message}`);
  }

  try {
    const confirmation = await resend.emails.send({
      from,
      to: data.email || "",
      subject: "We received your request - Holanda Investments",
      html: `
        <p>Thank you for contacting Holanda Investments. Our team received your request and will review the information shortly.</p>
        <p>For urgent requests, <a href="${phoneHref}">call us at ${displayPhone}</a> or <a href="${whatsappHref}">chat with us on WhatsApp</a>.</p>
      `
    });

    if (confirmation.error) {
      console.error("Contact confirmation failed:", confirmation.error.message);
    }
  } catch (error) {
    console.error("Contact confirmation failed:", error);
  }
}
