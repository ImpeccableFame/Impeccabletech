# Impeccable Portfolio

Premium React + Vite + TypeScript + Tailwind CSS portfolio for **Impeccable / ImpeccableTech**.

The site is intentionally content-driven: most updates happen in `src/data/*.ts`, not inside the UI components.

## Stack

- React + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide React
- Component-based architecture
- Local-storage dark/light theme

## Install

```bash
npm install
```

## Run locally

```bash
npm run dev
```

Then open the local URL printed by Vite.

## Production build

```bash
npm run build
```

## Preview the production build

```bash
npm run preview
```

## Profile picture

Recommended portrait: **1000 × 1200 px**.

Put your image at:

```text
src/assets/profile.jpg
```

The project ships with `src/assets/profile-placeholder.svg` so it works immediately without a random person's photo. To use your own image, import `profile.jpg` in `src/components/Hero.tsx` and change the image `src` to that import.

The exact image instruction is also commented directly in `Hero.tsx`.

## Content management

### Projects

Edit:

```text
src/data/projects.ts
```

Add another object to the `projects` array:

```ts
{
  id: 'my-project',
  title: 'My Project',
  category: 'Web Development',
  description: 'Short description.',
  image: '/my-image.jpg',
  technologies: ['React', 'TypeScript'],
  year: '2026',
  featured: true,
  problem: 'The problem...',
  solution: 'The solution...',
  features: ['Feature one', 'Feature two'],
  contribution: 'What I contributed...',
  results: 'Verified result...',
  link: 'https://...',
  github: 'https://github.com/...'
}
```

Supported categories:

- AI & Automation
- Web Development
- Design
- Writing
- Other

### Automates

Edit:

```text
src/data/automates.ts
```

This powers **Impeccable Automates**.

### Designs

Edit:

```text
src/data/designs.ts
```

This powers **Impeccable Designs**.

### Writes

Edit:

```text
src/data/writes.ts
```

This powers **Impeccable Writes**.

### Skills

Edit:

```text
src/data/skills.ts
```

### Experience

Edit:

```text
src/data/experience.ts
```

### Services

Edit:

```text
src/data/services.ts
```

## Social links and email

Edit:

```text
src/data/site.ts
```

Replace the placeholders:

```ts
export const site = {
  email: 'your-email@example.com',
  linkedin: 'https://www.linkedin.com/in/your-handle/',
  github: 'https://github.com/your-handle',
  x: 'https://x.com/your-handle',
}
```

## Theme / colors

The design tokens are at the top of:

```text
src/index.css
```

Look for:

```css
:root { ... }
html.light { ... }
```

The main accent is `--accent`; the secondary accent is `--accent-2`.

Tailwind theme extensions are in `tailwind.config.ts`.

The theme toggle persists to `localStorage` and defaults to dark mode.

## Contact form

The current form is **frontend-only**. It does not pretend to send email.

When you are ready, connect the `onSubmit` handler in:

```text
src/components/Contact.tsx
```

to a service such as Formspree, a serverless function, your own API, or another backend.

## Deployment

This is a standard Vite static site.

Typical deployment options:

1. Build with `npm run build`.
2. Deploy the generated `dist/` directory to a static hosting provider.
3. For Vercel/Netlify-style platforms, connect the repository and use:
   - Build command: `npm run build`
   - Output directory: `dist`

## Project structure

```text
impeccable-portfolio/
├── public/
│   ├── favicon.svg
│   ├── og-placeholder.svg
│   └── assets/
├── src/
│   ├── assets/
│   ├── components/
│   │   ├── About.tsx
│   │   ├── Contact.tsx
│   │   ├── Container.tsx
│   │   ├── Experience.tsx
│   │   ├── Footer.tsx
│   │   ├── Hero.tsx
│   │   ├── Icon.tsx
│   │   ├── Navbar.tsx
│   │   ├── PillarSection.tsx
│   │   ├── Projects.tsx
│   │   ├── Reveal.tsx
│   │   ├── SectionHeading.tsx
│   │   ├── Services.tsx
│   │   ├── Skills.tsx
│   │   └── Writes.tsx
│   ├── data/
│   ├── hooks/
│   ├── App.tsx
│   ├── index.css
│   ├── main.tsx
│   └── types.ts
├── index.html
├── package.json
├── postcss.config.js
├── tailwind.config.ts
├── tsconfig*.json
├── vite.config.ts
└── README.md
```

## Placeholder policy

Placeholder content is deliberately marked with `[ADD ...]` or `[UPDATE]`.

No fake testimonials, fake clients, fake achievements or fabricated professional results are included.

## Accessibility and motion

- Semantic sections and headings
- Keyboard-focusable controls
- Visible focus rings on form controls
- Alt text for portfolio imagery
- Mobile navigation
- `prefers-reduced-motion` support
- No horizontal-scroll layout by design

## Before launch checklist

- Replace profile image
- Replace email and social links
- Replace `[ADD ...]` project/experience content
- Add real project screenshots
- Add verified project results
- Add a real OG image if desired
- Connect the contact form backend
- Run `npm run build`
- Test mobile navigation and every CTA
