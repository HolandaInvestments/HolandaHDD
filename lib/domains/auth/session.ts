export type AppSession = {
  userId: string;
  email: string;
  organizationId: string;
};

export async function requireAppSession(): Promise<AppSession> {
  if (process.env.NEXT_PUBLIC_DEMO_MODE === "true") {
    return {
      userId: "demo-user",
      email: "demo@example.com",
      organizationId: "00000000-0000-4000-8000-000000000001"
    };
  }

  throw new Error("Supabase Auth is not wired yet. Enable demo mode or add auth integration.");
}

