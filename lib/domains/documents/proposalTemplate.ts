import type { BomItem, EstimationInput, EstimationOutput } from "@/lib/domains/estimation/types";

export type ProposalModel = {
  project: EstimationInput;
  estimation: EstimationOutput;
  assumptions: string[];
  bomItems: BomItem[];
  narrative?: string;
};

export function renderProposalHtml(model: ProposalModel) {
  const bomRows = model.bomItems
    .map(
      (item) =>
        `<tr><td>${item.category}</td><td>${item.vendor || ""}</td><td>${item.description}</td><td>${item.quantity}</td><td>${item.unit}</td></tr>`
    )
    .join("");

  return `<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>${model.project.projectName} Proposal</title>
  <style>
    body { font-family: Arial, sans-serif; color: #17212b; margin: 40px; }
    h1, h2 { color: #111827; }
    table { border-collapse: collapse; width: 100%; margin-top: 16px; }
    th, td { border: 1px solid #d1d5db; padding: 8px; text-align: left; }
    th { background: #f3f4f6; }
  </style>
</head>
<body>
  <h1>${model.project.projectName}</h1>
  <p>Preliminary network proposal for ${model.project.clientType} environment.</p>
  <h2>Deterministic Estimate</h2>
  <ul>
    <li>APs: ${model.estimation.estimatedApCount}</li>
    <li>Switches: ${model.estimation.estimatedSwitchCount}</li>
    <li>Access ports: ${model.estimation.estimatedAccessPorts}</li>
    <li>PoE budget: ${model.estimation.estimatedPoeBudgetWatts}W</li>
    <li>MDF/IDF: ${model.estimation.estimatedMdfCount}/${model.estimation.estimatedIdfCount}</li>
  </ul>
  <h2>Assumptions</h2>
  <ul>${model.assumptions.map((item) => `<li>${item}</li>`).join("")}</ul>
  <h2>BOM Summary</h2>
  <table>
    <thead><tr><th>Category</th><th>Vendor</th><th>Description</th><th>Qty</th><th>Unit</th></tr></thead>
    <tbody>${bomRows}</tbody>
  </table>
  <h2>Technical Narrative</h2>
  <p>${model.narrative || "Technical narrative will be generated after AI output is enabled."}</p>
</body>
</html>`;
}

