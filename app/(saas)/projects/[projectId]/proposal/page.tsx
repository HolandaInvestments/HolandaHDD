import { buildBom } from "@/lib/domains/estimation/bom";
import { runEstimation } from "@/lib/domains/estimation/engine";
import { renderProposalHtml } from "@/lib/domains/documents/proposalTemplate";
import type { EstimationInput } from "@/lib/domains/estimation/types";

const demoInput: EstimationInput = {
  projectName: "Downtown Clinic Refresh",
  clientType: "clinic",
  officeSizeSqFt: 18000,
  numberOfFloors: 1,
  usersCount: 62,
  meetingRooms: 6,
  phones: 52,
  cameras: 18,
  printers: 9,
  guestWifiRequired: true,
  preferredVendor: "Cisco Meraki",
  redundancyLevel: "standard"
};

export default function ProposalPreviewPage() {
  const estimation = runEstimation(demoInput);
  const html = renderProposalHtml({
    project: demoInput,
    estimation: estimation.output,
    assumptions: estimation.assumptions,
    bomItems: buildBom(demoInput, estimation.output)
  });

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-normal">Proposal preview</h1>
        <p className="mt-2 text-slate-600">Server-side HTML model ready for PDF conversion.</p>
      </div>
      <iframe title="Proposal preview" className="h-[760px] w-full rounded-lg border border-slate-200 bg-white" srcDoc={html} />
    </div>
  );
}

