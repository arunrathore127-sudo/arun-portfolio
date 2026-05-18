# Personal Portfolio — Next.js

A minimalist, typography-focused personal portfolio inspired by [cleonwong.com](https://www.cleonwong.com).

## Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS
- **Animation**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Instrument Serif + DM Sans (Google Fonts)

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Project Structure

```
portfolio/
├── app/
│   ├── globals.css       # Base styles + Google Fonts import
│   ├── layout.tsx        # Root layout with metadata
│   └── page.tsx          # Main page — assembles all sections
├── components/
│   ├── Navigation.tsx    # Sticky nav with blur backdrop + smooth scroll
│   ├── ProjectCard.tsx   # Work section card with image placeholder
│   └── FadeUp.tsx        # Reusable scroll-triggered fade-up (Framer Motion)
├── lib/
│   └── data.tsx          # All content — projects, essays, social links
├── tailwind.config.ts
├── next.config.mjs
└── tsconfig.json
```

## Customisation

### Content
Edit `lib/data.tsx` to update:
- `PROJECTS` — title, description, year, tags, link, background colour
- `ESSAYS` — title, date, link
- `SOCIAL_LINKS` — label, href, icon name

### Project images
Replace the `placeholderClass` (a Tailwind bg colour) in each project entry with a real `<Image>` component in `ProjectCard.tsx`:

```tsx
import Image from "next/image";

// Replace the placeholder div with:
<Image
  src="/projects/luminary.png"
  alt="Luminary App"
  fill
  className="object-cover"
/>
```

### Typography
Font pairing is defined in `app/globals.css` (Google Fonts import) and `tailwind.config.ts`.
Swap `Instrument Serif` for any other serif (e.g. `Playfair Display`, `Lora`, `EB Garamond`).

### Colours
Core palette lives in `app/globals.css` CSS variables:

```css
--bg: #fafafa;
--ink: #1a1a1a;
--muted: #6b6b6b;
--border: #e4e4e4;
```

## Deployment

Deploy instantly on [Vercel](https://vercel.com):

```bash
npx vercel
```

Or push to GitHub and connect via the Vercel dashboard.
