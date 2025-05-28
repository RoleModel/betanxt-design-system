// Import for side-effects to ensure type augmentations are loaded
import '@fontsource/material-icons'
import '@fontsource/roboto-condensed/500.css'
import '@fontsource/roboto-condensed/700.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { DocsContainer } from '@storybook/blocks'
import { useGlobals } from '@storybook/preview-api'
import type { Preview } from '@storybook/react'
import React, { useEffect, useState } from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'

import betanxtTheme from '../src/themes/betanxtTheme'
import '../src/themes/mui-type-customizations'
import { MuiThemeModeToggle } from './addons/mui-theme-toggle/preview'
import { dark, light } from './theme'
import './utils/patch-mui-display-name'

// Custom hook to watch for dark mode class changes
const useDarkMode = () => {
  const [isDark, setIsDark] = useState(() => {
    return document.documentElement.classList.contains('dark')
  })

  useEffect(() => {
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (mutation.type === 'attributes' && mutation.attributeName === 'class') {
          const hasDarkClass = document.documentElement.classList.contains('dark')
          setIsDark(hasDarkClass)
        }
      })
    })

    observer.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['class'],
    })

    return () => observer.disconnect()
  }, [])

  return isDark
}

const preview: Preview = {
  decorators: [
    (Story) => {
      const [globals] = useGlobals()
      const storybookUIThemeName = globals.theme || 'light'

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
        const isDarkMode = useDarkMode()
        const themeMode = isDarkMode ? 'dark' : 'light'

        return (
          <ThemeProvider theme={betanxtTheme} defaultMode={themeMode}>
            <CssBaseline enableColorScheme />
            <MuiThemeModeToggle isPrimaryController={false} />
            <DocsContainer context={context} theme={isDarkMode ? dark : light}>
              {children}
            </DocsContainer>
          </ThemeProvider>
        )
      },
    },
    options: {
      storySort: {
        method: 'none',
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
