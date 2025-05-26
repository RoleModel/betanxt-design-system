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
import React, { useEffect, useState } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import betanxtTheme from '../src/themes/betanxtTheme'
import '../src/themes/mui-type-customizations'
import { MuiThemeModeToggle } from './addons/mui-theme-toggle/preview'
import { dark, light } from './theme'
import './utils/patch-mui-display-name'


// Custom hook to watch for MUI color scheme changes
const useMuiColorScheme = () => {
  const [colorScheme, setColorScheme] = useState(() => {
    return document.documentElement.dataset.muiColorScheme || 'light'
  })

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'data-mui-color-scheme') {
          const newScheme = document.documentElement.dataset.muiColorScheme || 'light'
          setColorScheme(newScheme)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-mui-color-scheme']
    })

    return () => observer.disconnect()
  }, [])

  return colorScheme
}

const preview: Preview = {
  decorators: [
    (Story) => {
      const [globals] = useGlobals();
      const storybookUIThemeName = globals.theme || 'light';

      return (
        <ThemeProvider theme={betanxtTheme} defaultMode={storybookUIThemeName}>
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
        const muiColorScheme = useMuiColorScheme()
        const themeMode = muiColorScheme === 'dark' ? 'dark' : 'light'

        return (
          <ThemeProvider theme={betanxtTheme} defaultMode={themeMode}>
            <CssBaseline enableColorScheme />
            <MuiThemeModeToggle isPrimaryController={false} />
            <DocsContainer context={context} theme={themeMode === 'dark' ? dark : light}>
              {children}
            </DocsContainer>
          </ThemeProvider>
        )
      },
    },
    options: {
      storySort: {
        includeNames: true,
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
