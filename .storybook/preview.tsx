// Import for side-effects to ensure type augmentations are loaded
import '@fontsource/material-icons'
import '@fontsource/roboto-condensed/500.css'
import '@fontsource/roboto-condensed/700.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { DocsContainer } from '@storybook/addon-docs/blocks'
import type { Preview } from '@storybook/react-vite'
import React from 'react'

import { CssBaseline, ThemeProvider, useColorScheme } from '@mui/material'
import GlobalStyles from '@mui/material/GlobalStyles'

import betanxtTheme from '../src/themes/betanxtTheme'
import '../src/themes/mui-type-customizations'
import { MuiThemeModeToggle } from './addons/mui-theme-toggle/preview'
import { dark, light } from './theme'
import './utils/patch-mui-display-name'

// Hook to get the effective MUI theme mode (properly handles system mode)
const useMuiThemeMode = () => {
  const { mode, systemMode } = useColorScheme()

  // Return the effective mode
  if (mode === 'system') {
    return systemMode === 'dark' ? 'dark' : 'light'
  }
  return mode === 'dark' ? 'dark' : 'light'
}

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={betanxtTheme} defaultMode="system">
          <GlobalStyles styles="@layer  base, mui, components, theme, sx, utilities;" />
          <CssBaseline enableColorScheme />
          <MuiThemeModeToggle isPrimaryController={true} />
          <Story />
        </ThemeProvider>
      )
    },
  ],

  parameters: {
    docs: {
      autodocs: 'tag',
      container: ({ children, context }) => {
        // This needs to be inside a ThemeProvider to use useColorScheme
        const DocsWithTheme = () => {
          const muiMode = useMuiThemeMode()
          return (
            <DocsContainer context={context} theme={muiMode === 'dark' ? dark : light}>
              {children}
            </DocsContainer>
          )
        }

        return (
          <ThemeProvider theme={betanxtTheme}>
            <GlobalStyles styles="@layer  base, mui, components, theme, sx, utilities;" />
            <CssBaseline enableColorScheme />
            <MuiThemeModeToggle isPrimaryController={false} />
            <DocsWithTheme />
          </ThemeProvider>
        )
      },
    },

    options: {
      storySort: {
        method: 'none',
        includeNames: false,
        order: [
          'Guides',
          ['Introduction', 'Using the Theme'],
          'Foundation',
          'Components',
        ],
      },
    },

    backgrounds: {
      disable: true,
      default: 'light',
      values: [
        { name: 'light', value: '#ffffff' },
        { name: 'dark', value: '#000000' },
      ],
    },

    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },

    a11y: {
      // 'todo' - show a11y violations in the test UI only
      // 'error' - fail CI on a11y violations
      // 'off' - skip a11y checks entirely
      test: 'error',
    },
  },

  tags: ['autodocs'],
}

export default preview
