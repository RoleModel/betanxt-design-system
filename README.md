# BetaNXT Design System

## Using the Themes

The primary way to apply a theme is by using MUI's `ThemeProvider` to wrap your application and `CssBaseline` for consistent styling and built-in color scheme (light/dark mode) support.

**1. Import your chosen theme and MUI components:**

```jsx
// In your application's root component (e.g., App.tsx, main.tsx)
"use client"; // Or remove if not using Next.js App Router specific features directly here

import { ReactNode } from "react";
import { CssBaseline, ThemeProvider } from "@mui/material";

// Choose the theme you want to use:
import theme from "[path-to-themes]/baseTheme";
// Or, to use betanxtTheme:
// import theme from "[path-to-themes]/betanxtTheme";

// Your application's root component
export default function App({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider theme={theme}>
      {/* CssBaseline applies baseline styles and enables color scheme switching */}
      <CssBaseline enableColorScheme />
      {children}
    </ThemeProvider>
  );
}
```

**2. Apply this setup at the root of your application.**
How you do this depends on your framework (e.g., in `index.tsx` for Create React App, or a root layout for other setups).

**For Next.js Applicaitons:**
If you are using Next.js (especially with the App Router), you'll need additional setup for optimal server-side rendering and caching, such as using `@mui/material-nextjs/v15-appRouter`'s `AppRouterCacheProvider`. For detailed instructions, please refer to the official MUI Next.js integration guide: [MUI Next.js Integration](https://mui.com/material-ui/integrations/nextjs/).

## Dark Mode

Both `baseTheme` and `betanxtTheme` support light and dark modes automatically. This is enabled by the `CssBaseline enableColorScheme` prop in the `ThemeRegistry` setup, which works with MUI's color schemes. For more information on how MUI handles dark mode, view the [MUI Dark Mode Documentation](https://mui.com/material-ui/customization/dark-mode/).

## Using CSS Variables (`theme.vars`)

The recommended way to access theme values (like colors, spacing, typography) in your components is through the `theme.vars` object. This leverages native CSS variables, offering better performance and automatic responsiveness to theme changes (e.g., light/dark mode).

**Example:**

```jsx
import Box from '@mui/material/Box'

// Example of using theme.vars with the sx prop on an MUI Box component
const MyStyledBox = () => (
  <Box
    sx={(theme) => ({
      backgroundColor: theme.vars.palette.primary.main,
      color: theme.vars.palette.primary.contrastText,
      padding: theme.vars.spacing[2], // Accesses 'var(--mui-spacing-2)'
      fontSize: theme.vars.typography.fontSize,
      fontFamily: theme.vars.typography.fontFamily,
      border: `1px solid ${theme.vars.palette.divider}`,
      borderRadius: theme.vars.shape.borderRadius,
      '&:hover': {
        backgroundColor: theme.vars.palette.primary.dark,
      },
    })}
  >
    This Box is styled using theme.vars via the sx prop.
  </Box>
)
```

You can explore `theme.vars` for other properties like `shadows`, component-specific variables, etc.

## Publishing to GitHub Packages

This package is published to GitHub Packages registry. The publishing process is automated using GitHub Actions.

### Publishing a New Version

There are two ways to publish a new version:

1. **Create a GitHub Release**:

   - Go to the repository's Releases page on GitHub
   - Click "Create a new release"
   - Enter a tag version (e.g., v1.0.0)
   - The workflow will automatically publish the package

2. **Manually trigger the workflow**:
   - Go to the "Actions" tab in the GitHub repository
   - Select "Publish Package to GitHub Packages" workflow
   - Click "Run workflow"
   - Select the branch and specify version bump type (patch, minor, major, or specific version)
   - Click "Run workflow"

### Consuming the Package

To use this package in other projects:

1. Authenticate with GitHub Packages:

   ```
   echo "//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}" >> ~/.npmrc
   ```

2. Create or update `.npmrc` in your project:

   ```
   @rolemodel:registry=https://npm.pkg.github.com
   ```

3. Install the package:
   ```
   npm install @rolemodel/betanxt-design-system
   ```

### Access Control

Only users with write access to the repository can publish new versions of the package.

---
