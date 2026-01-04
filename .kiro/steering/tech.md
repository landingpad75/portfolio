# Technology Stack

## Framework & Runtime
- **Next.js 15.5.2** - React framework with App Router
- **React 19.1.0** - UI library
- **TypeScript 5** - Type-safe JavaScript
- **Turbopack** - Fast bundler (used in dev and build)

## Styling & UI
- **Tailwind CSS 4** - Utility-first CSS framework
- **CSS Custom Properties** - For theming and design tokens
- **FontAwesome 7.1.0** - Icon library
- **Geist Font** - Primary typography (Sans & Mono variants)

## Animation & Interactions
- **Framer Motion 12.23.12** - React animation library
- **React Spring Three 10.0.1** - 3D animations
- **React Three Fiber 9.3.0** - Three.js React renderer
- **Three.js 0.179.1** - 3D graphics library
- **use-gesture 1.0.0** - Gesture handling

## Development Tools
- **ESLint 9** - Code linting with Next.js config
- **PostCSS** - CSS processing
- **Bun** - Package manager and runtime

## Common Commands

### Development
```bash
# Start development server with Turbopack
npm run dev
# or
bun dev
```

### Build & Deploy
```bash
# Build for production with Turbopack
npm run build
# or
bun run build

# Start production server
npm start
# or
bun start
```

### Code Quality
```bash
# Run ESLint
npm run lint
# or
bun run lint
```

## Key Dependencies
- **prism-react-renderer** - Syntax highlighting for code blocks
- **react-use** - Collection of React hooks
- All dependencies are kept up-to-date with latest stable versions