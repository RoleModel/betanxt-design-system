import { global } from '@storybook/global'
import { addons } from '@storybook/manager-api'

import { dark, light } from './theme'

const { window: globalWindow } = global

export const getPreferredColorScheme = () => {
  if (!globalWindow || !globalWindow.matchMedia) return 'light'

  const isDarkThemePreferred = globalWindow.matchMedia(
    '(prefers-color-scheme: dark)'
  ).matches
  if (isDarkThemePreferred) return 'dark'

  return 'light'
}

// Set theme immediately at module load time to prevent flash
const initialTheme = getPreferredColorScheme() === 'dark' ? dark : light

// Configure addons immediately
addons.setConfig({
  theme: initialTheme,
})

// Listen for theme changes
const channel = addons.getChannel()
channel.on('mui-theme-mode-changed', (mode: string) => {
  const newTheme = mode === 'dark' ? dark : light
  addons.setConfig({
    theme: newTheme,
  })
})
