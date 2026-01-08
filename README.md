# ProgramEcho Website

A modern, responsive website for ProgramEcho built with React, TypeScript, and Tailwind CSS.

## Features

- 🎨 Modern, attractive design with glassmorphism effects
- 📱 Fully responsive across all devices
- ⚡ Fast and optimized with Vite
- 🎯 Smooth scrolling navigation
- 💫 Beautiful animations and transitions
- 🌙 Dark theme with gradient accents
- 📧 Contact form integration

## Tech Stack

- **React 18** - UI library
- **TypeScript** - Type safety
- **Tailwind CSS** - Styling
- **Vite** - Build tool and dev server

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The site will be available at `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The production build will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
├── src/
│   ├── components/
│   │   ├── Header.tsx      # Navigation header
│   │   ├── Hero.tsx        # Hero/banner section
│   │   ├── About.tsx       # About section
│   │   ├── Services.tsx    # Services/tech stack section
│   │   ├── Contact.tsx     # Contact form
│   │   └── Footer.tsx      # Footer
│   ├── App.tsx             # Main app component
│   ├── main.tsx            # Entry point
│   └── index.css           # Global styles
├── images/                 # Image assets
├── fonts/                  # Custom fonts
├── public/                 # Public assets
└── dist/                   # Production build output
```

## Sections

1. **Hero** - Main landing section with tagline
2. **About** - Company information
3. **Services** - Technology stack showcase
4. **Contact** - Contact form and social links
5. **Footer** - Footer with branding

## Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme:

```js
colors: {
  'programecho': '#161825', // Main brand color
}
```

### Fonts

The custom Programecho font is loaded from `fonts/Programecho.ttf` and can be customized in `src/index.css`.

## Deployment

The `dist` folder contains the production-ready build. Deploy this folder to any static hosting service:

- GitHub Pages
- Netlify
- Vercel
- AWS S3
- Any web server

## License

© 2024 All Rights Reserved to ProgramEcho

