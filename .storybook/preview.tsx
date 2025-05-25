// Import for side-effects to ensure type augmentations are loaded
import '@fontsource/material-icons'
import '@fontsource/roboto-condensed/500.css'
import '@fontsource/roboto-condensed/700.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { DocsContainer } from '@storybook/blocks'
import type { Preview } from '@storybook/react'
import { useGlobals } from '@storybook/preview-api'
import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import betanxtTheme from '../src/themes/betanxtTheme'
import '../src/themes/mui-type-customizations'
import { MuiThemeModeToggle } from './addons/mui-theme-toggle/preview'
import { dark, light } from './theme'
import './utils/patch-mui-display-name'

const preview: Preview = {
  decorators: [
    (Story) => {
      const [globals] = useGlobals();
      const storybookUIThemeName = globals.theme;

      return (
        <ThemeProvider theme={betanxtTheme} key={storybookUIThemeName}>
          <CssBaseline enableColorScheme />
          <MuiThemeModeToggle isPrimaryController={true} />
          <Story />
        </ThemeProvider>
      )
    },
  ],
  parameters: {
    docs: {
      container: ({ children, context }) => {
        const isDark = document.documentElement.classList.contains('dark')

        return (
          <ThemeProvider theme={betanxtTheme} key={isDark ? 'dark' : 'light'}>
            <CssBaseline enableColorScheme />
            <MuiThemeModeToggle isPrimaryController={false} />
            <DocsContainer context={context} theme={isDark ? dark : light}>
              {children}
            </DocsContainer>
          </ThemeProvider>
        )
      },
    },
    options: {
      storySort: {
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
  },
}

export default preview
