"use client";

import { FormEvent, useMemo, useState } from "react";
import { Send } from "lucide-react";
import { preferredContactMethods, requestTypes } from "@/lib/constants";

type FormStatus = "idle" | "loading" | "success" | "error";

const baseInput =
  "focus-ring w-full rounded-md border border-slate-300 bg-white px-3 py-3 text-sm text-graphite placeholder:text-slate-400";

export default function ContactForm() {
  const [requestType, setRequestType] = useState<(typeof requestTypes)[number]>("HDD Utility Installation");
  const [status, setStatus] = useState<FormStatus>("idle");
  const [message, setMessage] = useState("");

  const showUtility = requestType === "HDD Utility Installation";
  const showMachine = requestType === "Machine Repair / Maintenance";
  const showTraining = useMemo(
    () => requestType === "Operator Training" || requestType === "Locator Training",
    [requestType]
  );

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    const formData = new FormData(event.currentTarget);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload)
      });
      const result = await response.json();

      if (!response.ok) {
        throw new Error(result.error || "Something went wrong. Please try again.");
      }

      setStatus("success");
      setMessage("Thank you. Your request was sent successfully.");
      event.currentTarget.reset();
      setRequestType("HDD Utility Installation");
    } catch (error) {
      setStatus("error");
      setMessage(error instanceof Error ? error.message : "Something went wrong. Please try again.");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="rounded-lg border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
      <input type="text" name="website" className="hidden" tabIndex={-1} autoComplete="off" aria-hidden="true" />

      <div className="grid gap-4 sm:grid-cols-2">
        <label className="sm:col-span-2">
          <span className="text-sm font-bold text-graphite">Request Type</span>
          <select
            name="requestType"
            required
            value={requestType}
            onChange={(event) => setRequestType(event.target.value as (typeof requestTypes)[number])}
            className={`${baseInput} mt-2`}
          >
            {requestTypes.map((type) => (
              <option key={type}>{type}</option>
            ))}
          </select>
        </label>

        <Field name="fullName" label="Full Name" required />
        <Field name="companyName" label="Company Name" required />
        <Field name="email" label="Email" type="email" required />
        <Field name="phone" label="Phone" required />
        <Field name="city" label="City" required />
        <Field name="state" label="State" required />

        <label className="sm:col-span-2">
          <span className="text-sm font-bold text-graphite">Preferred Contact Method</span>
          <select name="preferredContactMethod" required className={`${baseInput} mt-2`}>
            {preferredContactMethods.map((method) => (
              <option key={method}>{method}</option>
            ))}
          </select>
        </label>
      </div>

      {showUtility && (
        <fieldset className="mt-6 grid gap-4 rounded-lg bg-fog p-4 sm:grid-cols-2">
          <legend className="px-1 text-sm font-bold text-graphite">HDD Utility Installation Details</legend>
          <Select name="utilityType" label="Type of Utility" options={["Fiber optic", "Energy", "Water", "Gas", "Telecom", "Other"]} />
          <Field name="projectLocation" label="Estimated Project Location" />
          <Field name="drillingDistance" label="Approximate Drilling Distance" />
          <Select name="existingPlan" label="Is there an existing project plan?" options={["Yes", "No", "Not sure"]} />
          <Field name="desiredStartDate" label="Desired Start Date" type="date" />
        </fieldset>
      )}

      {showMachine && (
        <fieldset className="mt-6 grid gap-4 rounded-lg bg-fog p-4 sm:grid-cols-2">
          <legend className="px-1 text-sm font-bold text-graphite">Machine Support Details</legend>
          <Field name="machineModel" label="Machine Brand/Model" />
          <Field name="problemType" label="Type of Problem" />
          <Select name="machineOperating" label="Is the machine currently operating?" options={["Yes", "No", "Partially"]} />
          <Select name="urgencyLevel" label="Urgency Level" options={["Low", "Medium", "High", "Emergency"]} />
        </fieldset>
      )}

      {showTraining && (
        <fieldset className="mt-6 grid gap-4 rounded-lg bg-fog p-4 sm:grid-cols-2">
          <legend className="px-1 text-sm font-bold text-graphite">Training Details</legend>
          <Field name="participantCount" label="Number of Participants" type="number" />
          <Field name="trainingLocation" label="Preferred Training Location" />
          <Field name="trainingDate" label="Preferred Training Date" type="date" />
          <Select name="experienceLevel" label="Experience Level" options={["Beginner", "Intermediate", "Advanced"]} />
        </fieldset>
      )}

      <label className="mt-6 block">
        <span className="text-sm font-bold text-graphite">Message / Project Details</span>
        <textarea name="message" required rows={6} className={`${baseInput} mt-2 resize-y`} />
      </label>

      <button
        type="submit"
        disabled={status === "loading"}
        className="focus-ring mt-6 inline-flex w-full items-center justify-center gap-2 rounded-md bg-safety px-5 py-3 font-bold text-graphite transition hover:bg-amber-400 disabled:cursor-not-allowed disabled:opacity-70 sm:w-auto"
      >
        <Send size={18} /> {status === "loading" ? "Sending..." : "Submit Request"}
      </button>

      {message && (
        <p className={`mt-4 rounded-md px-4 py-3 text-sm font-semibold ${status === "success" ? "bg-green-50 text-green-800" : "bg-red-50 text-red-800"}`}>
          {message}
        </p>
      )}
    </form>
  );
}

function Field({ name, label, type = "text", required = false }: { name: string; label: string; type?: string; required?: boolean }) {
  return (
    <label>
      <span className="text-sm font-bold text-graphite">{label}</span>
      <input name={name} type={type} required={required} className={`${baseInput} mt-2`} />
    </label>
  );
}

function Select({ name, label, options }: { name: string; label: string; options: string[] }) {
  return (
    <label>
      <span className="text-sm font-bold text-graphite">{label}</span>
      <select name={name} className={`${baseInput} mt-2`}>
        <option value="">Select an option</option>
        {options.map((option) => (
          <option key={option}>{option}</option>
        ))}
      </select>
    </label>
  );
}
