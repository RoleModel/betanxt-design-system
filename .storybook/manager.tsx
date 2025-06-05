import { global } from '@storybook/global'
import { addons } from 'storybook/manager-api'

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

const initialTheme = getPreferredColorScheme() === 'dark' ? dark : light

addons.setConfig({
  theme: initialTheme,
})

if (globalWindow && globalWindow.matchMedia) {
  const mediaQuery = globalWindow.matchMedia('(prefers-color-scheme: dark)')
  const handleSystemThemeChange = (e: MediaQueryListEvent) => {
    const channel = addons.getChannel()
    const newMode = e.matches ? 'dark' : 'light'

    channel.emit('system-theme-changed', newMode)

    addons.setConfig({
      theme: newMode === 'dark' ? dark : light,
    })
  }

  try {
    mediaQuery.addEventListener('change', handleSystemThemeChange)
  } catch (e) {}
}

let currentMode: string | null = null

const setupListeners = () => {
  const channel = addons.getChannel()

  channel.on('mui-theme-mode-changed', (mode: string) => {
    if (currentMode === mode) return

    currentMode = mode

    const newTheme = mode === 'dark' ? dark : light
    addons.setConfig({
      theme: newTheme,
    })
  })

  channel.on('mui-theme-mode-toggle', (mode: string) => {
    let effectiveMode = mode
    if (mode === 'system') {
      effectiveMode = getPreferredColorScheme()
    }
    const newTheme = effectiveMode === 'dark' ? dark : light
    addons.setConfig({ theme: newTheme })
  })

  channel.emit('mui-theme-mode-request')
}

setupListeners()
