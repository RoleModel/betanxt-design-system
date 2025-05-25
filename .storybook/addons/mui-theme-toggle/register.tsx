import { IconButton } from '@storybook/components'
import { MoonIcon, SunIcon } from '@storybook/icons'
import { addons, types } from '@storybook/manager-api'
import React from 'react'

import { dark, light } from '../../theme'

const ADDON_ID = 'mui-theme-toggle'
const TOOL_ID = `${ADDON_ID}/tool`

addons.register(ADDON_ID, (api) => {
  // api object is available here
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Toggle MUI theme and Storybook UI mode',
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => {
      // Local React state for the button's icon, representing the current MUI mode in preview
      const [currentMuiMode, setCurrentMuiMode] = React.useState('light')

      React.useEffect(() => {
        const channel = addons.getChannel()

        const handleMuiThemeChange = (muiMode: string) => {
          setCurrentMuiMode(muiMode) // Update local state for icon
          // Update the Storybook Manager's theme
          addons.setConfig({
            theme: muiMode === 'dark' ? dark : light,
          })
        }

        // Listen for mode changes from the preview
        channel.on('mui-theme-mode-changed', handleMuiThemeChange)
        // Request initial mode from preview when tool mounts
        channel.emit('mui-theme-mode-request')

        return () => {
          channel.off('mui-theme-mode-changed', handleMuiThemeChange)
        }
      }, []) // Empty dependency array: runs once on mount, cleans up on unmount

      const toggleStorybookThemeAndMuiMode = () => {
        const newMode = currentMuiMode === 'light' ? 'dark' : 'light'
        const channel = addons.getChannel()
        // Tell the preview to toggle the MUI theme
        channel.emit('mui-theme-mode-toggle', newMode)
        // The preview will then emit 'mui-theme-mode-changed', which handleMuiThemeChange will pick up
        // to update the manager theme and icon state.
      }

      return (
        <IconButton
          key={TOOL_ID}
          title={
            currentMuiMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
          }
          onClick={toggleStorybookThemeAndMuiMode}
        >
          {currentMuiMode === 'light' ? <MoonIcon /> : <SunIcon />}
        </IconButton>
      )
    },
  })
})
