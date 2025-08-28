import { addons } from 'storybook/manager-api'

import { dark, light } from './theme'

// Set the theme immediately to ensure it loads
addons.setConfig({
  theme: light,
})

// Get stored theme preference
const getStoredTheme = () => {
  try {
    const stored = localStorage.getItem('mui-mode')
    return stored === 'dark' ? dark : light
  } catch (error) {
    return light
  }
}

// Set up channel for theme changes
const channel = addons.getChannel()

// Listen for theme changes from the preview
channel.on('mui-theme-mode-changed', (mode: string) => {
  const newTheme = mode === 'dark' ? dark : light
  addons.setConfig({
    theme: newTheme,
  })
})

// Apply stored theme after initial setup
setTimeout(() => {
  const storedTheme = getStoredTheme()
  addons.setConfig({
    theme: storedTheme,
  })
  channel.emit('mui-theme-mode-request')
}, 100)
