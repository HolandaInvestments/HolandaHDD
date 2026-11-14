import Link from "next/link";
import MetricCard from "@/components/saas/MetricCard";
import { buildBom } from "@/lib/domains/estimation/bom";
import { runEstimation } from "@/lib/domains/estimation/engine";
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

export default function ProjectDetailPage() {
  const estimation = runEstimation(demoInput);
  const bom = buildBom(demoInput, estimation.output);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-normal">{demoInput.projectName}</h1>
          <p className="mt-2 text-slate-600">Preliminary deterministic estimate and editable proposal inputs.</p>
        </div>
        <Link href="/projects/demo-clinic/proposal" className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white">
          Preview proposal
        </Link>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="APs" value={estimation.output.estimatedApCount} />
        <MetricCard label="Switches" value={estimation.output.estimatedSwitchCount} />
        <MetricCard label="Access ports" value={estimation.output.estimatedAccessPorts} />
        <MetricCard label="PoE budget" value={`${estimation.output.estimatedPoeBudgetWatts}W`} />
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <section className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="font-semibold">Floor plan</h2>
          <div className="mt-4 flex aspect-video items-center justify-center rounded-md border border-dashed border-slate-300 bg-slate-50 text-sm text-slate-500">
            Upload viewer and manual scale controls
          </div>
        </section>
        <section className="rounded-lg border border-slate-200 bg-white p-6">
          <h2 className="font-semibold">BOM summary</h2>
          <div className="mt-4 space-y-3">
            {bom.map((item) => (
              <div key={item.category} className="flex items-center justify-between border-b border-slate-100 pb-2 text-sm">
                <span>{item.description}</span>
                <span className="font-medium">{item.quantity} {item.unit}</span>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

