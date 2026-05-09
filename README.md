# Davide Nutrition — Next.js

Premium nutrition coaching website for Davide Maltagliati, UK Registered Nutritionist.

## Stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **MUI v7** with SSR via `@mui/material-nextjs/v15-appRouter`
- **Framer Motion** for scroll-reveal and micro-interactions
- **Playfair Display** (editorial headings) + **Inter** (body) via `next/font/google`
- Custom **gold/black** premium theme with gradient borders, glow effects and gold-text masks

## Getting started

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Scripts

| Script          | What it does                |
| --------------- | --------------------------- |
| `npm run dev`   | Start the dev server        |
| `npm run build` | Production build            |
| `npm run start` | Start the production server |
| `npm run lint`  | Run ESLint                  |

## Project structure

```
src/
├── app/
│   ├── layout.tsx           # Root layout (fonts, theme, metadata)
│   └── page.tsx             # Single-page composition of sections
├── theme/
│   ├── theme.ts             # MUI theme: palette, typography, components, helpers
│   ├── ThemeRegistry.tsx    # Client-side MUI provider with App Router cache
│   └── mui.d.ts             # Card variant augmentations
└── components/
    ├── common/              # Reveal, SectionHeading
    ├── header/              # Sticky header with mobile drawer
    ├── footer/              # Footer with quick links
    ├── floatingContacts/    # Fixed WhatsApp + Email FAB stack
    └── sections/
        ├── home/            # HeroSection
        ├── whatYouGet/
        ├── nutritionalPlan/
        ├── meetOurExperts/
        ├── testimonial/
        ├── seminarEnquiry/  # Contact form
        └── faq/
```

## Theming

The premium look is built on three pillars (see [`src/theme/theme.ts`](src/theme/theme.ts)):

1. **Palette** — deep blacks (`#070707`, `#0F0F10`) and a layered gold ramp (`#B8860B → #D4AF37 → #F5C400 → #F4D03F`) used through a reusable `goldGradient`.
2. **Typography** — Playfair Display for headings (editorial feel), Inter for the body and UI.
3. **Components** — custom `Card` variants (`softBorder`, `darkBorder`, `strongBorder`, `luxe`) that match the brand and a primary `Button` with an animated gold gradient background.

Use the helpers exported from `theme.ts`:

```tsx
import { goldGradient, goldText, colors } from "@/theme/theme";

<Typography sx={goldText}>Premium</Typography>
<Box sx={{ backgroundImage: goldGradient }} />
```

## Assets

All images live in `public/images/` and are loaded through `next/image` with AVIF/WebP optimisation enabled in `next.config.ts`.

## Notes

- The site is a single-page composition. Navigation is anchor-based with smooth scroll. To split it into routes later, move section components into their own `app/<route>/page.tsx`.
- i18n is not wired up yet (the previous Vite project had it configured but unused). To add it: install `next-intl`, wrap the layout with the provider, and replace literal strings with `t("…")`.
