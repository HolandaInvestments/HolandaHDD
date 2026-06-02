# Holanda Investments Website

Modern, responsive, mobile-first institutional website for Holanda Investments, written entirely in American English for the U.S. market.

The site is built with Next.js App Router, TypeScript, Tailwind CSS, modular components, a contact API route, Resend email support, local chatbot responses, technical SEO, sitemap, robots.txt, and Vercel-ready configuration.

## Pages

- Home
- About Us
- Services
- Contact

## Core Features

- Horizontal Directional Drilling service presentation
- HDD utility installation, machine support, and operator training sections
- Smart contact form with conditional fields
- `/api/contact` backend route
- Required field validation
- Input sanitization
- Honeypot anti-spam field
- Basic IP rate limiting
- Admin email notification
- Automatic customer confirmation email
- Floating WhatsApp button with pre-filled message
- Local-response chatbot prepared for future AI integration
- Page metadata, Open Graph, sitemap, robots.txt, and Schema.org JSON-LD

## Local Installation

```bash
npm install
npm run dev
```

Then open:

```text
http://localhost:3000
```

## Environment Variables

Create a `.env.local` file:

```bash
RESEND_API_KEY=your_resend_key
CONTACT_TO_EMAIL=contact@company.com
CONTACT_FROM_EMAIL=website@company.com
NEXT_PUBLIC_WHATSAPP_NUMBER=15550000000
NEXT_PUBLIC_SITE_URL=https://yourdomain.com
AI_API_KEY=
```

`AI_API_KEY` is included for future chatbot expansion. The current chatbot uses local pre-configured answers and does not require an AI provider.

## Email Setup

The contact route uses Resend when `RESEND_API_KEY` is configured. If the key is missing, the API validates the request but skips email delivery in local development.

For production email reliability:

- Validate the sending domain in Resend or your email provider.
- Configure SPF, DKIM, and DMARC.
- Use a professional company email address for `CONTACT_FROM_EMAIL`.
- Test the form after deployment.

## Vercel Deployment

1. Prepare the company domain and professional email.
2. Create or use a GitHub repository.
3. Create a Vercel account.
4. Import the Next.js project into Vercel.
5. Add the environment variables in the Vercel project settings.
6. Deploy the project.
7. Connect the final domain.
8. Confirm HTTPS is active.

## Production Checklist

- Home loads correctly.
- About Us loads correctly.
- Services loads correctly.
- Contact loads correctly.
- Contact form sends email to the company.
- Customer receives automatic confirmation email.
- WhatsApp button opens with the correct pre-filled message.
- Chatbot answers basic HDD, machine support, and training questions.
- Mobile navigation works.
- Site reads well on mobile screens.
- Images display correctly.
- Images have descriptive alt text.
- SEO titles and descriptions are configured.
- Sitemap works at `/sitemap.xml`.
- Robots file works at `/robots.txt`.
- API keys are not exposed in frontend code.
- Production domain uses HTTPS.
- Email domain has SPF, DKIM, and DMARC configured.

## Replacing Images

Placeholder SVG files are stored in `public/images`:

- `hdd-drilling-hero.svg`
- `fiber-optic-underground.svg`
- `utility-installation.svg`
- `machine-maintenance.svg`
- `operator-training.svg`
- `locator-training.svg`

To replace them with company photos, add the new image files to `public/images` and update the image paths in `lib/constants.ts` and the page components as needed.

Recommended future photo names:

- `hdd-drilling-hero.jpg`
- `fiber-optic-underground.jpg`
- `machine-maintenance.jpg`
- `operator-training.jpg`
- `locator-training.jpg`
- `utility-installation.jpg`

## Updating Company Details

Most global content is centralized in:

```text
lib/constants.ts
```

Use this file to update:

- Company email
- Phone and WhatsApp number
- Service area
- WhatsApp message
- Navigation links
- Service cards
- Portfolio/project type cards
- SEO keyword list

## Updating Chatbot Content

The chatbot knowledge base is located at:

```text
lib/chatbotKnowledge.ts
```

Add or edit keyword groups and answers there. The component is intentionally separated so a future AI provider such as OpenAI, Gemini, or another API can be integrated without redesigning the UI.

## Updating Text

Page content is located in:

- `app/page.tsx`
- `app/about/page.tsx`
- `app/services/page.tsx`
- `app/contact/page.tsx`

Shared content is located in:

- `lib/constants.ts`
- `lib/chatbotKnowledge.ts`

## Future Expansion

The project structure is ready for future additions such as:

- Technical HDD blog
- Completed projects page
- Training course schedule page
- Appointment scheduling
- CRM integration
- WhatsApp Business API integration
- Real AI chatbot integration
- Privacy policy page
