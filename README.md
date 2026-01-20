# Urbanaut Status Page

Status page for [Urbanaut.club](https://urbanaut.club) - a social platform for urban explorers, diggers, and extreme tourism enthusiasts.

## Features

- **Two status modes**: WORKING and MAINTENANCE
- **Beautiful animations** powered by Framer Motion
- **Responsive design** with Tailwind CSS
- **Dark mode** matching the main site's aesthetic
- **Urbanaut branding** with logo and consistent styling

## Status Modes

### WORKING
Displayed when the main site is operational and running smoothly.

### MAINTENANCE
Displayed when the site is undergoing scheduled maintenance or updates.

## Changing Status

To switch between statuses, edit the `CURRENT_STATUS` constant in `src/App.tsx`:

```tsx
const CURRENT_STATUS: Status = "WORKING"; // or "MAINTENANCE"
```

## Development

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Preview production build
pnpm preview

# Lint and fix code
pnpm clean
```

## Tech Stack

- React 19
- TypeScript
- Vite
- Tailwind CSS 4
- Framer Motion
- Lucide React (icons)

## Project Structure

```
src/
├── components/
│   └── pages/
│       ├── WorkingPage.tsx
│       ├── MaintenancePage.tsx
│       └── index.ts
├── styles/
│   ├── globals.css
│   └── index.ts
├── lib/
│   └── utils.ts
├── App.tsx
└── main.tsx
```

## Styling

The project uses the same design system as the main Urbanaut website:
- Consistent color scheme with CSS custom properties
- Same typography and spacing
- Unified component styling with Tailwind CSS
- Shared design tokens (radius, shadows, etc.)
