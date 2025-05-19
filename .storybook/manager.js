import { addons } from '@storybook/manager-api'
import { light } from './theme'

addons.setConfig({
  theme: light,
  navSize: 280,
  bottomPanelHeight: 200,
  rightPanelWidth: 300,
  panelPosition: 'right',
  enableShortcuts: true,
  showToolbar: true,
  initialActive: 'canvas',
  sidebar: {
    showRoots: true,
    collapsedRoots: ['components'],
  },
})
