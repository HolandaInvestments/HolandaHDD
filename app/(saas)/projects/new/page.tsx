export default function NewProjectPage() {
  return (
    <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_360px]">
      <section className="rounded-lg border border-slate-200 bg-white p-6">
        <h1 className="text-2xl font-semibold tracking-normal">New project</h1>
        <form className="mt-6 grid gap-4 md:grid-cols-2">
          <label className="grid gap-2 text-sm">
            Project name
            <input className="rounded-md border border-slate-300 px-3 py-2" defaultValue="Downtown Office Refresh" />
          </label>
          <label className="grid gap-2 text-sm">
            Client vertical
            <select className="rounded-md border border-slate-300 px-3 py-2" defaultValue="office">
              <option value="office">Office</option>
              <option value="clinic">Clinic</option>
              <option value="coworking">Coworking</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm">
            Office size
            <input className="rounded-md border border-slate-300 px-3 py-2" type="number" defaultValue={24000} />
          </label>
          <label className="grid gap-2 text-sm">
            Users
            <input className="rounded-md border border-slate-300 px-3 py-2" type="number" defaultValue={90} />
          </label>
          <button className="mt-2 rounded-md bg-slate-950 px-4 py-2 text-sm font-medium text-white md:col-span-2">
            Save draft
          </button>
        </form>
      </section>
      <aside className="rounded-lg border border-slate-200 bg-white p-6">
        <h2 className="font-semibold">Demo account flow</h2>
        <p className="mt-2 text-sm text-slate-600">
          Enable `NEXT_PUBLIC_DEMO_MODE=true` to use seeded demo organization and project data while Supabase Auth is
          being wired.
        </p>
      </aside>
    </div>
  );
}

