import { DocsContainer } from '@storybook/addon-docs/blocks'
import type { Preview } from '@storybook/react-vite'
import React from 'react'

import { CssBaseline, ThemeProvider, useColorScheme } from '@mui/material'

import betanxtTheme from '../src/themes/betanxtTheme'
import '../src/themes/mui-type-customizations'
import { MuiThemeModeToggle } from './addons/mui-theme-toggle/preview'
import { dark, light } from './theme'
import './utils/patch-mui-display-name'

// Get stored theme preference for initial mode
const getStoredMode = (): 'light' | 'dark' => {
  try {
    const stored = localStorage.getItem('mui-mode')
    const mode = stored === 'dark' ? 'dark' : 'light'
    return mode
  } catch (error) {
    return 'light' // fallback if localStorage unavailable
  }
}

// Hook to get the effective MUI theme mode (light/dark only, no system)
const useMuiThemeMode = () => {
  const { mode } = useColorScheme()

  // Return light or dark, no system mode
  return mode === 'dark' ? 'dark' : 'light'
}

const preview: Preview = {
  decorators: [
    (Story) => {
      return (
        <ThemeProvider theme={betanxtTheme} defaultMode={getStoredMode()}>
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
          <ThemeProvider theme={betanxtTheme} defaultMode={getStoredMode()}>
            <CssBaseline enableColorScheme />
            <MuiThemeModeToggle isPrimaryController={true} />
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
