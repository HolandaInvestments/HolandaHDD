import { requestTypes, preferredContactMethods } from "@/lib/constants";

export type ContactPayload = {
  requestType?: string;
  fullName?: string;
  companyName?: string;
  email?: string;
  phone?: string;
  city?: string;
  state?: string;
  preferredContactMethod?: string;
  message?: string;
  website?: string;
  utilityType?: string;
  projectLocation?: string;
  drillingDistance?: string;
  existingPlan?: string;
  desiredStartDate?: string;
  machineModel?: string;
  problemType?: string;
  machineOperating?: string;
  urgencyLevel?: string;
  participantCount?: string;
  trainingLocation?: string;
  trainingDate?: string;
  experienceLevel?: string;
};

const requiredFields: Array<keyof ContactPayload> = [
  "requestType",
  "fullName",
  "companyName",
  "email",
  "phone",
  "city",
  "state",
  "preferredContactMethod",
  "message"
];

export function sanitize(input: unknown) {
  return String(input || "")
    .replace(/[<>]/g, "")
    .trim()
    .slice(0, 2000);
}

export function sanitizePayload(payload: ContactPayload): ContactPayload {
  return Object.fromEntries(
    Object.entries(payload).map(([key, value]) => [key, sanitize(value)])
  ) as ContactPayload;
}

export function validateContactPayload(payload: ContactPayload) {
  const data = sanitizePayload(payload);
  const missing = requiredFields.filter((field) => !data[field]);
  const emailIsValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email || "");
  const requestTypeIsValid = requestTypes.includes(data.requestType as never);
  const contactMethodIsValid = preferredContactMethods.includes(
    data.preferredContactMethod as never
  );

  if (data.website) {
    return { valid: false, data, error: "Spam protection rejected this request." };
  }

  if (missing.length) {
    return {
      valid: false,
      data,
      error: `Please complete the required fields: ${missing.join(", ")}.`
    };
  }

  if (!emailIsValid) {
    return { valid: false, data, error: "Please enter a valid email address." };
  }

  if (!requestTypeIsValid || !contactMethodIsValid) {
    return { valid: false, data, error: "Please select valid form options." };
  }

  return { valid: true, data, error: null };
}
