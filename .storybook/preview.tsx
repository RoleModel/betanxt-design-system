import '@fontsource/material-icons'
import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { CssBaseline, ThemeProvider } from '@mui/material'

import { CustomAutodocsTemplateOne } from './CustomAutoDocs'
import type { Preview } from '@storybook/react'
import React from 'react'
import betanxtTheme from '../src/themes/betanxtTheme'
import { light } from './theme'
import { useColorScheme } from '@mui/material/styles'

type ThemeMode = 'light' | 'dark' | 'system'
type ThemeClass = 'light' | 'dark'

function SyncWithToolbar({
  mode,
  children,
}: {
  mode: ThemeMode
  children: React.ReactNode
}) {
  const { setMode } = useColorScheme()

  React.useEffect(() => {
    if (mode === 'system') {
      const mq = window.matchMedia('(prefers-color-scheme: dark)')
      const apply = () => setMode(mq.matches ? 'dark' : 'light')
      apply()
      mq.addEventListener('change', apply)
      return () => mq.removeEventListener('change', apply)
    }
    setMode(mode)

    if (typeof window !== 'undefined') {
      window.document.documentElement.dataset.theme = mode
      window.document.documentElement.classList.remove('light', 'dark')

      const getThemeClass = (selectedMode: ThemeMode): ThemeClass => {
        if (selectedMode === 'system') {
          return window.matchMedia('(prefers-color-scheme: dark)').matches
            ? 'dark'
            : 'light'
        }
        return selectedMode as ThemeClass
      }

      window.document.documentElement.classList.add(getThemeClass(mode))
    }
  }, [mode, setMode])

  return <>{children}</>
}

const preview: Preview = {
  globalTypes: {
    mode: {
      name: 'Theme',
      defaultValue: 'system',
      toolbar: {
        icon: 'contrast',
        dynamicTitle: true,
        items: [
          { value: 'light', title: 'Light Mode' },
          { value: 'dark', title: 'Dark Mode' },
          { value: 'system', title: 'System Mode' },
        ],
      },
    },
  },
  parameters: {
    docs: {
      theme: light,
      page: CustomAutodocsTemplateOne,
    },
    storySort: {
      method: 'configure',
      order: ['Introduction', ['Welcome', 'UsingTheTheme'], 'Foundation', 'Components'],
    },
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  tags: ['autodocs'],
  decorators: [
    (Story, { globals }) => {
      const mode = globals.mode as ThemeMode

      return (
        <ThemeProvider theme={betanxtTheme}>
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
