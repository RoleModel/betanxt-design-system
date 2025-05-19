import '@fontsource/material-icons'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import { DocsContainer } from '@storybook/blocks'
import type { Preview } from '@storybook/react'
import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

import '../src/storybook-utils/patch-mui-display-name'
import baseTheme from '../src/themes/baseTheme'
import betanxtTheme from '../src/themes/betanxtTheme'
import { light } from './theme'

type ThemeMode = 'light' | 'dark' | 'system'
type ThemeClass = 'light' | 'dark'
type SelectedTheme = 'betanxtTheme' | 'baseTheme'

function SyncWithToolbar({
  mode,
  children,
}: {
  mode: ThemeMode
  children: React.ReactNode
}) {
  const { setMode } = useColorScheme()

  // Simpler, synchronous approach that only deals with MUI theme
  React.useEffect(() => {
    // Determine the effective mode (light/dark) based on system or explicit selection
    const getEffectiveMode = (): 'light' | 'dark' => {
      if (mode === 'system' && typeof window !== 'undefined') {
        return window.matchMedia('(prefers-color-scheme: dark)').matches
          ? 'dark'
          : 'light'
      }
      return mode as 'light' | 'dark'
    }

    // Immediately set the MUI theme mode
    const effectiveMode = getEffectiveMode()
    setMode(effectiveMode)

    // For system preference only, add a change listener
    if (mode === 'system' && typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')

      const handleChange = () => {
        setMode(mq.matches ? 'dark' : 'light')
      }

      mq.addEventListener('change', handleChange)
      return () => mq.removeEventListener('change', handleChange)
    }
  }, [mode, setMode])

  // Add a simple utility effect to manage document styles directly
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      // Clear both classes first
      document.documentElement.classList.remove('light', 'dark')

      // Then add the appropriate one based on mode
      const effectiveMode =
        mode === 'system'
          ? window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
          : mode
      document.documentElement.classList.add(effectiveMode)
    }
  }, [mode])

  return <>{children}</>
}

const preview: Preview = {
  globalTypes: {
    mode: {
      name: 'Mode',
      defaultValue: 'system',
      toolbar: {
        icon: 'browser',
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Light', icon: 'sun' },
          { value: 'dark', title: 'Dark', icon: 'moon' },
          { value: 'system', title: 'System', icon: 'browser' },
        ],
      },
    },
    theme: {
      name: 'Theme',
      defaultValue: 'betanxtTheme',
      toolbar: {
        dynamicTitle: true,
        items: [
          { value: 'betanxtTheme', title: 'Betanxt Theme' },
          { value: 'baseTheme', title: 'Base Theme' },
        ],
      },
    },
  },
  parameters: {
    docs: {
      theme: light,
      container: ({ children, context }) => {
        return (
          <ThemeProvider theme={betanxtTheme}>
            <CssBaseline enableColorScheme />
            <DocsContainer context={context} theme={light}>
              {children}
            </DocsContainer>
          </ThemeProvider>
        )
      },
    },
    storySort: {
      method: 'none',
      includeNames: true,
      order: ['Foundation', 'Components'],
    },
    backgrounds: { disabled: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
      sort: 'none',
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, { globals }) => {
      const mode = globals.mode as ThemeMode
      const selectedThemeName = globals.theme as SelectedTheme

      const currentTheme = selectedThemeName === 'betanxtTheme' ? betanxtTheme : baseTheme

      // Create a stable theme reference
      const memoizedTheme = React.useMemo(() => currentTheme, [selectedThemeName])

      return (
        <ThemeProvider theme={memoizedTheme}>
          <SyncWithToolbar mode={mode}>
            <CssBaseline enableColorScheme />
            <Story />
          </SyncWithToolbar>
        </ThemeProvider>
      )
    },
  ],
}

export default preview
