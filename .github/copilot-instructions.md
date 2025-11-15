# Copilot Instructions for Preact SCSS App

## Architecture Overview
This is a Preact application with TypeScript, using Vite for bundling and a modular SCSS architecture for styling. Key components include theme management via hooks and CSS variables, and a sidebar-based layout.

- **Main Entry**: `src/main.tsx` renders `App` and imports `src/styles/index.scss`.
- **App Structure**: `src/app.tsx` orchestrates components like `Header`, `Sidebar`, `HeroSection`, using hooks `useTheme` and `useSidebar`.
- **Styling**: Modular SCSS in `src/styles/` with folders for base, components, layout, utilities, themes, globals. Themes switch via `data-theme` attribute on `<html>`.

## Developer Workflows
- **Development**: `npm run dev` starts Vite dev server.
- **Build**: `npm run build` compiles TypeScript and bundles with Vite; `npm run build:styles` processes SCSS with Gulp to `dist/`.
- **Style Watching**: `npm run watch:styles` watches SCSS changes and rebuilds.
- **Preview**: `npm run preview` serves built app.

## Conventions and Patterns
- **Component Classes**: Use BEM-like naming (e.g., `sidebar`, `sidebarHeader`, `navLink`) in `src/components/`.
- **Theme Variables**: Access colors via CSS variables like `var(--color-primary)`; themes managed in `src/hooks/useTheme.ts` with localStorage persistence.
- **SCSS Imports**: Main file `src/styles/index.scss` imports partials from subfolders; follow mobile-first responsive design.
- **Hooks**: Custom hooks in `src/hooks/` for reusable logic, e.g., `useSidebar` for state management.

## Key Files
- `vite.config.ts`: Standard Preact setup.
- `gulpfile.js`: SCSS compilation with PostCSS autoprefixer.
- `src/styles/README.md`: Detailed SCSS architecture guide.
- Example: `src/components/Sidebar.tsx` demonstrates class usage and inline styles for dynamic theming.