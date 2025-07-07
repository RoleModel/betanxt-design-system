import { addons } from 'storybook/manager-api'

import { dark, light } from './theme'

// Get stored theme preference immediately and synchronously
const getStoredTheme = () => {
  try {
    const stored = localStorage.getItem('mui-mode')
    const theme = stored === 'dark' ? dark : light
    return theme
  } catch (error) {
    return light // fallback if localStorage unavailable
  }
}

// Set initial theme immediately
const initialTheme = getStoredTheme()
addons.setConfig({
  theme: initialTheme,
})

// Set up channel listeners for theme changes
const channel = addons.getChannel()

channel.on('mui-theme-mode-changed', (mode: string) => {
  const newTheme = mode === 'dark' ? dark : light
  addons.setConfig({
    theme: newTheme,
  })
})

// Request current theme from preview after a short delay to ensure preview is ready
setTimeout(() => {
  channel.emit('mui-theme-mode-request')
}, 100)
