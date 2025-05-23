import '@fontsource/material-icons'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'
import '../src/themes/mui-type-customizations'
import { DocsContainer } from '@storybook/blocks'
import type { Preview, StoryContext } from '@storybook/react'
import React from 'react'

import { CssBaseline, ThemeProvider } from '@mui/material'
import { useColorScheme } from '@mui/material/styles'

import './storybook-utils/patch-mui-display-name'
import baseTheme from '../src/themes/baseTheme'
import betanxtTheme from '../src/themes/betanxtTheme'
import { light, dark } from './theme'

type ThemeMode = 'light' | 'dark' | 'system'
type SelectedTheme = 'betanxtTheme' | 'baseTheme'

const SyncWithToolbar: React.FC<{
  mode: ThemeMode
  children: React.ReactNode
}> = ({ mode, children }) => {
  const { setMode } = useColorScheme()

  React.useEffect(() => {
    let actualResolvedMode: 'light' | 'dark'

    if (mode === 'system') {
      if (typeof window !== 'undefined') {
        actualResolvedMode = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } else {
        actualResolvedMode = 'light' // Default for SSR or undefined window
      }
    } else if (mode === 'dark') {
      actualResolvedMode = 'dark'
    } else { // Covers 'light' and any unexpected or default cases
      actualResolvedMode = 'light'
    }

    // Set MUI's internal theme mode
    setMode(actualResolvedMode)

    // Set the mui-mode cookie with the resolved mode
    if (typeof window !== 'undefined') {
      document.cookie = `mui-mode=${actualResolvedMode};path=/;SameSite=Lax`
    }

    // For system preference only, add a change listener
    if (mode === 'system' && typeof window !== 'undefined') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')

      const handleChange = () => {
        const newResolvedMode = mq.matches ? 'dark' : 'light'
        setMode(newResolvedMode)
        // Update cookie when system preference changes
        if (typeof window !== 'undefined') {
          document.cookie = `mui-mode=${newResolvedMode};path=/;SameSite=Lax`
        }
      }

      mq.addEventListener('change', handleChange)
      return () => mq.removeEventListener('change', handleChange)
    }
  }, [mode, setMode])

  // This useEffect handles the class on <html> for Tailwind's dark mode or other CSS purposes
  React.useEffect(() => {
    if (typeof window !== 'undefined') {
      document.documentElement.classList.remove('light', 'dark')

      let resolvedModeForHtmlClass: 'light' | 'dark'
      if (mode === 'system') {
        resolvedModeForHtmlClass = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      } else if (mode === 'dark') {
        resolvedModeForHtmlClass = 'dark'
      } else { // Covers 'light' and any unexpected or default cases
        resolvedModeForHtmlClass = 'light'
      }
      document.documentElement.classList.add(resolvedModeForHtmlClass)
    }
  }, [mode])

  return <>{children}</>
}

const DocsWrapper: React.FC<{
  children: React.ReactNode
  context: any
}> = ({ children, context }) => {
  const mode = (context.globals?.mode as ThemeMode) || 'system'
  const selectedThemeName = (context.globals?.theme as SelectedTheme) || 'betanxtTheme'

  const currentTheme = selectedThemeName === 'betanxtTheme' ? betanxtTheme : baseTheme
  const memoizedTheme = React.useMemo(() => currentTheme, [selectedThemeName])

  return (
    <ThemeProvider theme={memoizedTheme}>
      <SyncWithToolbar mode={mode}>
        <CssBaseline enableColorScheme />
        <DocsContainer context={context} theme={mode === 'dark' ? dark : light}>
          {children}
        </DocsContainer>
      </SyncWithToolbar>
    </ThemeProvider>
  )
}

const ThemeDecorator = (Story: React.ComponentType, context: StoryContext) => {
  const mode = context.globals.mode as ThemeMode
  const selectedThemeName = context.globals.theme as SelectedTheme

  const currentTheme = selectedThemeName === 'betanxtTheme' ? betanxtTheme : baseTheme

  const memoizedTheme = React.useMemo(() => currentTheme, [selectedThemeName])

  return (
    <ThemeProvider theme={memoizedTheme}>
      <SyncWithToolbar mode={mode}>
        <CssBaseline enableColorScheme />
        <Story />
      </SyncWithToolbar>
    </ThemeProvider>
  )
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
      backgrounds: { disabled: true },
      container: ({ children, context }) => {
        return <DocsWrapper context={context}>{children}</DocsWrapper>
      },
    },
    options: {
      storySort: {
        method: 'none',
        includeNames: false,
        order: ['Introduction', 'Foundation', 'Components'],
      },
    },
    backgrounds: { disable: true},
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
  decorators: [ThemeDecorator],
}

export default preview
