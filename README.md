# BetaNXT Design System

## Using the Themes

The primary way to apply a theme is by using MUI's `ThemeProvider` to wrap your application and `CssBaseline` for consistent styling and built-in color scheme (light/dark mode) support.

**1. Import your chosen theme and MUI components:**

```jsx
// In your application's root component (e.g., App.tsx, main.tsx)
"use client"; // Or remove if not using Next.js App Router specific features directly here

import { ReactNode } from "react";
import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider } from "@mui/material/styles";

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
      {children} {/* This would be the rest of your application */}
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
    sx={{
      backgroundColor: (theme) => theme.vars.palette.primary.main,
      color: (theme) => theme.vars.palette.primary.contrastText,
      padding: (theme) => theme.vars.spacing[2], // Accesses 'var(--mui-spacing-2)'
      fontSize: (theme) => theme.vars.typography.fontSize,
      fontFamily: (theme) => theme.vars.typography.fontFamily,
      border: (theme) => `1px solid ${theme.vars.palette.divider}`,
      borderRadius: (theme) => theme.vars.shape.borderRadius,
      '&:hover': {
        backgroundColor: (theme) => theme.vars.palette.primary.dark,
      },
    }}
  >
    This Box is styled using theme.vars via the sx prop.
  </Box>
)
```

<aside>
**Note:** When using `theme.vars` within the `sx` prop, you often wrap the access in a function `(theme) => theme.vars...`. This allows the `sx` prop to correctly resolve the theme object and access its `vars` property. The key is that `theme.vars` provides the CSS variable string (e.g., `var(--mui-palette-primary-main)`).
</aside>

You can explore `theme.vars` for other properties like `shadows`, component-specific variables, etc.
