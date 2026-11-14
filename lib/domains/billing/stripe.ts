import { billingPlans, type BillingPlan } from "@/lib/domains/billing/plans";

export function getStripePriceId(plan: Exclude<BillingPlan, "demo">) {
  const envName = billingPlans[plan].stripePriceIdEnv;
  const value = envName ? process.env[envName] : undefined;

  if (!value) {
    throw new Error(`Missing Stripe price id for ${plan}.`);
  }

  return value;
}

