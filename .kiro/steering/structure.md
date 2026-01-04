# Project Structure & Conventions

## Directory Organization

```
├── app/                    # Next.js App Router
│   ├── layout.tsx         # Root layout with metadata & fonts
│   ├── page.tsx           # Main page component
│   ├── globals.css        # Global styles & Tailwind imports
│   └── Home.css           # Main stylesheet with design system
├── components/            # Reusable React components
│   ├── Header.tsx         # Navigation header
│   ├── HeroSection.tsx    # Landing section
│   ├── AboutSection.tsx   # About content
│   ├── ProjectsSection.tsx # Projects showcase
│   ├── ContactSection.tsx # Contact form
│   ├── Footer.tsx         # Site footer
│   ├── Modal.tsx          # Modal component
│   ├── Preloader.tsx      # Loading animation
│   └── *.css             # Component-specific styles
├── lib/                   # Utility libraries
│   └── animation.ts       # Framer Motion presets
├── public/                # Static assets
│   └── *.svg, *.png      # Icons and images
└── .kiro/                 # Kiro configuration
    └── steering/          # AI assistant guidance
```

## Code Conventions

### Component Structure
- **Functional components** with TypeScript interfaces
- **Props interfaces** defined above components
- **Client components** marked with `"use client"` directive
- **Default exports** for all components

### Styling Approach
- **CSS Modules pattern** - Component-specific CSS files
- **CSS Custom Properties** for design tokens in `:root`
- **Tailwind utilities** for layout and spacing
- **Custom CSS** for complex animations and theming

### Import Patterns
- **Absolute imports** using `@/` and `@components/` aliases
- **Named imports** for utilities and hooks
- **Default imports** for components

### State Management
- **React hooks** (useState, useEffect) for local state
- **Props drilling** for component communication
- **Event handlers** passed down from parent components

## Design System

### Color Scheme
```css
--primary-color: #6366f1     /* Indigo */
--secondary-color: #10b981   /* Emerald */
--dark-bg: #0f172a          /* Slate 900 */
--card-bg: #1e293b          /* Slate 800 */
--text-primary: #f8fafc     /* Slate 50 */
```

### Typography
- **Geist Sans** - Primary font family
- **Geist Mono** - Code and terminal text
- **Fira Code** - Code syntax highlighting

### Animation Patterns
- **Framer Motion** for page transitions
- **CSS animations** for floating elements
- **Smooth scrolling** for navigation
- **Staggered animations** for list items

## File Naming
- **PascalCase** for component files (`HeroSection.tsx`)
- **camelCase** for utility files (`animation.ts`)
- **kebab-case** for CSS files when needed
- **Descriptive names** that match component purpose