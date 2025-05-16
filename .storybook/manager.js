import { addons } from '@storybook/manager-api'
import { light } from './theme'

// Start with light theme
addons.setConfig({
  theme: light,
  navSize: 300,
  bottomPanelHeight: 200,
  rightPanelWidth: 300,
  panelPosition: 'bottom',
  enableShortcuts: true,
  showToolbar: true,
  sidebar: {
    showRoots: false,
    collapsedRoots: ['other'],
  },
})
