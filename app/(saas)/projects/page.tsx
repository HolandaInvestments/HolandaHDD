import Link from "next/link";
import { projectStatusLabels } from "@/lib/domains/projects/status";

const demoProjects = [
  {
    id: "demo-clinic",
    name: "Downtown Clinic Refresh",
    client: "Acme Family Clinic",
    status: "ready" as const,
    vertical: "clinic"
  }
];

export default function ProjectsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-semibold tracking-normal">Projects</h1>
          <p className="mt-2 text-slate-600">Create, estimate, and export preliminary network proposals.</p>
        </div>
        <Link href="/projects/new" className="rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white">
          New project
        </Link>
      </div>
      <div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-slate-200 bg-slate-50 text-slate-500">
            <tr>
              <th className="px-4 py-3">Project</th>
              <th className="px-4 py-3">Client</th>
              <th className="px-4 py-3">Vertical</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {demoProjects.map((project) => (
              <tr key={project.id} className="border-b border-slate-100">
                <td className="px-4 py-3 font-medium">
                  <Link href={`/projects/${project.id}`}>{project.name}</Link>
                </td>
                <td className="px-4 py-3">{project.client}</td>
                <td className="px-4 py-3 capitalize">{project.vertical}</td>
                <td className="px-4 py-3">{projectStatusLabels[project.status]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

