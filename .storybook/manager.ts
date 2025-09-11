import { addons } from 'storybook/manager-api'

import { dark, light } from './theme'

// Configure Storybook with custom theme
addons.setConfig({
  theme: light,
  // Disable logo link to prevent theme reset
  brandUrl: null,
  // Force brand title to prevent default
  brandTitle: 'BetaNXT Connected Design System',
})

// Set up channel for theme changes
const channel = addons.getChannel()

// Listen for theme changes from the preview
channel.on('mui-theme-mode-changed', (mode: string) => {
  const newTheme = mode === 'dark' ? dark : light
  addons.setConfig({
    theme: newTheme,
    brandUrl: null,
    brandTitle: 'BetaNXT Connected Design System',
  })
})
