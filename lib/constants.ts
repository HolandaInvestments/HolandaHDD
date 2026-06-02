export const siteConfig = {
  name: "Holanda Investments",
  tagline:
    "Horizontal Directional Drilling, HDD machine support, and professional field training.",
  description:
    "Holanda Investments provides professional Horizontal Directional Drilling services, underground utility installation, HDD machine repair, maintenance support, and hands-on operator and locator training for infrastructure teams.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL || "https://yourdomain.com",
  email: process.env.CONTACT_TO_EMAIL || "contact@company.com",
  phone: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "15550000000",
  serviceArea: "Available by project location",
  whatsappMessage:
    "Hello, I would like more information about Holanda Investments HDD services.",
  keywords: [
    "Horizontal Directional Drilling",
    "HDD services",
    "Directional drilling",
    "Underground utilities",
    "Fiber optic installation",
    "Trenchless drilling",
    "Utility installation",
    "HDD machine repair",
    "HDD machine maintenance",
    "HDD operator training",
    "Locator training",
    "Underground infrastructure"
  ]
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" }
];

export const services = [
  {
    title: "HDD Utility Installation",
    description:
      "Directional drilling solutions for underground installation of fiber optic cables, energy lines, water pipes, gas lines, and other utility infrastructure.",
    image: "/images/utility-installation.jpg",
    href: "/services#utility-installation"
  },
  {
    title: "HDD Machine Repair & Maintenance",
    description:
      "Technical support, preventive maintenance, and corrective repair for directional drilling machines and field equipment.",
    image: "/images/machine-maintenance.jpg",
    href: "/services#machine-support"
  },
  {
    title: "Operator & Locator Training",
    description:
      "Hands-on training programs for HDD machine operators and underground path locators, focused on safety, productivity, and field performance.",
    image: "/images/hdd-locator.jpg",
    href: "/services#training"
  }
];

export const portfolioItems = [
  {
    title: "Fiber Optic Network Installation",
    description: "Underground fiber pathways for telecom and broadband projects.",
    image: "/images/fiber-optic-underground.jpg"
  },
  {
    title: "Utility Crossings",
    description: "Directional crossings under roads, sidewalks, and driveways.",
    image: "/images/utility-installation.jpg"
  },
  {
    title: "Water and Gas Line Preparation",
    description: "Trenchless preparation for critical underground utilities.",
    image: "/images/hdd-drilling-hero.jpg"
  },
  {
    title: "HDD Equipment Maintenance",
    description: "Machine diagnostics, preventive maintenance, and repair support.",
    image: "/images/machine-maintenance.jpg"
  },
  {
    title: "Field Training Sessions",
    description: "Practical operator and locator training at real jobsite conditions.",
    image: "/images/locator-training.jpg"
  },
  {
    title: "Infrastructure Project Support",
    description: "Technical guidance for contractors and utility companies.",
    image: "/images/field-training.jpg"
  }
];

export const requestTypes = [
  "HDD Utility Installation",
  "Machine Repair / Maintenance",
  "Operator Training",
  "Locator Training",
  "General Message"
] as const;

export const preferredContactMethods = ["Email", "Phone", "WhatsApp"] as const;
