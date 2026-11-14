import MetricCard from "@/components/saas/MetricCard";

export default function DashboardPage() {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-semibold tracking-normal">Dashboard</h1>
        <p className="mt-2 max-w-3xl text-slate-600">
          Track preliminary network proposal activity, usage limits, and projects ready for review.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-4">
        <MetricCard label="Demo projects" value={1} detail="Seeded account flow" />
        <MetricCard label="Ready proposals" value={1} detail="Awaiting export" />
        <MetricCard label="AI runs" value="0 / 4" detail="Demo monthly limit" />
        <MetricCard label="Plan" value="Demo" detail="Stripe wiring pending" />
      </div>
    </div>
  );
}

