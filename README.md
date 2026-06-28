# ConvertBooking — AI-Powered Booking Agent

Landing page for ConvertBooking, an agentic booking agent that helps local businesses get more customers by optimizing across Google Maps, Tripadvisor, Yelp, Dianping, and more.

## Tech Stack

- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- shadcn/ui
- next-themes (dark/light mode)

## Getting Started

```bash
# Install dependencies
pnpm install

# Start development server
pnpm dev

# Build for production
pnpm build
```

Open [http://localhost:3000](http://localhost:3000) to see the landing page.

## Structure

```
app/
  layout.tsx       — Root layout with font, theme provider
  page.tsx         — Landing page composition
  globals.css      — Tailwind directives + custom design tokens
components/
  navbar.tsx       — Sticky navigation with mobile sheet
  hero.tsx         — Hero section with dashboard mockup
  social-proof.tsx — Platform logo bar
  problem.tsx      — Pain points section
  how-it-works.tsx — 3-step flow
  features.tsx     — 6 feature cards
  platforms.tsx    — Platform deep-dive
  testimonials.tsx — Customer testimonials
  pricing.tsx      — 3-tier pricing
  faq.tsx          — FAQ accordion
  cta-section.tsx  — Final CTA
  footer.tsx       — Footer with links
```

## Deploy

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/your-org/convertbooking-landing)
