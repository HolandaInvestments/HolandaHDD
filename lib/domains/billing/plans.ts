export const billingPlans = {
  demo: {
    name: "Demo",
    monthlyProjects: 1,
    monthlyAiRuns: 4,
    stripePriceIdEnv: undefined
  },
  starter: {
    name: "Starter",
    monthlyProjects: 10,
    monthlyAiRuns: 40,
    stripePriceIdEnv: "STRIPE_STARTER_PRICE_ID"
  },
  pro: {
    name: "Pro",
    monthlyProjects: 50,
    monthlyAiRuns: 200,
    stripePriceIdEnv: "STRIPE_PRO_PRICE_ID"
  },
  business: {
    name: "Business",
    monthlyProjects: 250,
    monthlyAiRuns: 1000,
    stripePriceIdEnv: "STRIPE_BUSINESS_PRICE_ID"
  }
} as const;

export type BillingPlan = keyof typeof billingPlans;

