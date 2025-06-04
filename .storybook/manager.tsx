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

    // Update manager theme immediately
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

// Track current mode to avoid unnecessary updates
let currentMode: string | null = null

channel.on('mui-theme-mode-changed', (mode: string) => {
  // Avoid unnecessary updates if mode hasn't changed
  if (currentMode === mode) return

  currentMode = mode

  // For system mode, use current system preference
  let effectiveMode = mode
  if (mode === 'system') {
    effectiveMode = getPreferredColorScheme()
  }

  const newTheme = effectiveMode === 'dark' ? dark : light
  addons.setConfig({
    theme: newTheme,
  })
})

// Request initial theme from preview on load
channel.emit('mui-theme-mode-request')
