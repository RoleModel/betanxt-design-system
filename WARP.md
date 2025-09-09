# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

Project overview

- Single-package TypeScript React design system for MUI, published to GitHub Packages as @rolemodel/betanxt-design-system.
- Development and documentation are driven by Storybook (React + Vite). The library itself is built with the TypeScript compiler (no separate bundler).
- Formatting is managed with Prettier (no ESLint config present).

Common commands
Use npm (package-lock.json is present).

- Install dependencies: npm install
- Build the library: npm run build
  - Compiles TypeScript to dist and copies src/assets to dist/assets
- Build in watch mode: npm run build:watch
- Start Storybook (interactive): npm run storybook
- Start Storybook in docs-only mode: npm run storybook-docs
- Build static Storybook: npm run build-storybook
- Run tests (Storybook portable-stories via Vitest): npm run test-storybook
  - Run once (CI style): npm run test-storybook -- --run
  - Run a single test file: npm run test-storybook -- path/to/file.test.tsx
  - Filter by test name: npm run test-storybook -- -t "name substring"
- Format code: npm run prettier
- Check formatting: npm run prettier:check
- Visual review on Chromatic: npm run chromatic

Architecture and structure (big picture)

- Packaging/build
  - TypeScript configuration (tsconfig.json) outputs ESM JavaScript and .d.ts to dist with strict type-checking enabled. The build script is tsc plus asset copy; no Rollup/Webpack bundle is produced for the library.
  - package.json uses exports with a wildcard mapping to dist, enabling per-file ESM imports by consumers.
  - Assets in src/assets are published by being copied into dist/assets during build.
- Storybook development surface
  - Storybook 9 with @storybook/react-vite is the primary development and documentation environment. See .storybook/main.ts and .storybook/preview.tsx.
  - Theme integration: All stories render inside MUI’s ThemeProvider using src/themes/betanxtTheme. A custom toolbar addon (.storybook/addons/mui-theme-toggle) keeps Storybook UI and MUI color modes in sync (light/dark and a system toggle tool), and preview.tsx stores/restores the preferred mode.
  - Display name patch: .storybook/utils/patch-mui-display-name.tsx assigns displayName to MUI forwardRef components to improve generated docs and controls.
  - A11y testing: preview.tsx sets a11y.test = 'error'. Portable stories testing is wired via .storybook/vitest.setup.ts with setProjectAnnotations, so a11y violations surface as errors (appropriate for CI).
  - Vite configuration (vite.config.js) is intentionally minimal for Storybook and pre-optimizes some MUI packages.
- Source layout
  - src contains the components, themes (e.g., src/themes/betanxtTheme and mui-type-customizations), stories (_.stories._) and MDX live alongside components, and static assets under src/assets. The tsconfig excludes src/stories from the library compile.

Publishing and consumption (from README)

- Publishing to GitHub Packages is automated via GitHub Actions. A new GitHub Release (e.g., v1.2.3) or a manual run of the "Publish Package to GitHub Packages" workflow will publish a new version.
- Consumption in other projects requires GitHub Packages auth and scoping @rolemodel to https://npm.pkg.github.com in .npmrc, then install with npm install @rolemodel/betanxt-design-system.

Tooling notes

- TypeScript 5.x, React 18/19 peer range, MUI 7.x.
- Prettier is configured with @trivago/prettier-plugin-sort-imports; import ordering groups include third-party modules, MUI, @/components, and local relative paths.
- No ESLint config or script is present at the root.
