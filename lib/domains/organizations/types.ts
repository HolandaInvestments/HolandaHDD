export const organizationRoles = ["owner", "admin", "member", "viewer"] as const;

export type OrganizationRole = (typeof organizationRoles)[number];

export type Organization = {
  id: string;
  name: string;
  slug: string;
  billingEmail?: string;
};

export type OrganizationMember = {
  organizationId: string;
  userId: string;
  role: OrganizationRole;
};

