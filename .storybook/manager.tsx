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

// Listen for system preference changes
if (globalWindow && globalWindow.matchMedia) {
  const mediaQuery = globalWindow.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemThemeChange = (e: MediaQueryListEvent) => {
    const channel = addons.getChannel()
    const newMode = e.matches ? 'dark' : 'light'
    // Emit system preference change to preview
    channel.emit('system-theme-changed', newMode)
    // Update manager theme
    addons.setConfig({
      theme: newMode === 'dark' ? dark : light,
    })
  }

  // Use addEventListener (supported in all modern browsers)
  try {
    mediaQuery.addEventListener('change', handleSystemThemeChange)
  } catch (e) {
    // Silently fail for very old browsers
    console.warn('System theme detection not supported in this browser')
  }
}

// Listen for theme changes from preview
const channel = addons.getChannel()
channel.on('mui-theme-mode-changed', (mode: string) => {
  const newTheme = mode === 'dark' ? dark : light
  addons.setConfig({
    theme: newTheme,
  })
})
