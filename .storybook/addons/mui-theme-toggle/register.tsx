import { MoonIcon, StopAltHollowIcon, StopAltIcon, SunIcon } from '@storybook/icons'
import React from 'react'
import { IconButton } from 'storybook/internal/components'
import { addons, types } from 'storybook/manager-api'

import { dark, light } from '../../theme'

const ADDON_ID = 'mui-theme-toggle'
const TOOL_ID = `${ADDON_ID}/tool`
const SYSTEM_TOOL_ID = `${ADDON_ID}/system-tool`

addons.register(ADDON_ID, (api) => {
  addons.add(TOOL_ID, {
    type: types.TOOL,
    title: 'Light/Dark theme toggle',
    match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
    render: () => {
      const [currentMuiMode, setCurrentMuiMode] = React.useState('light')

      React.useEffect(() => {
        const channel = addons.getChannel()

        const handleMuiThemeChange = (muiMode: string) => {
          setCurrentMuiMode(muiMode)
        }

        channel.on('mui-theme-mode-changed', handleMuiThemeChange)
        channel.emit('mui-theme-mode-request')

        return () => {
          channel.off('mui-theme-mode-changed', handleMuiThemeChange)
        }
      }, [])

      const toggleLightDark = (event: React.SyntheticEvent): void => {
        event.preventDefault()
        event.stopPropagation()

        const newMode = currentMuiMode === 'light' ? 'dark' : 'light'

        const channel = addons.getChannel()
        channel.emit('mui-theme-mode-toggle', newMode)

        addons.setConfig({ theme: newMode === 'dark' ? dark : light })
      }

      const title =
        currentMuiMode === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
      const icon = currentMuiMode === 'light' ? <MoonIcon /> : <SunIcon />

      return (
        <IconButton key={TOOL_ID} title={title} onClick={toggleLightDark}>
          {icon}
        </IconButton>
      )
    },
  }),
    addons.add(SYSTEM_TOOL_ID, {
      type: types.TOOL,
      title: 'System theme toggle',
      match: ({ viewMode }) => viewMode === 'story' || viewMode === 'docs',
      render: () => {
        const [isSystemMode, setIsSystemMode] = React.useState(false)

        React.useEffect(() => {
          const channel = addons.getChannel()

          const handleMuiThemeChange = (muiMode: string) => {
            setIsSystemMode(muiMode === 'system')
          }

          channel.on('mui-theme-mode-changed', handleMuiThemeChange)
          channel.emit('mui-theme-mode-request')

          return () => {
            channel.off('mui-theme-mode-changed', handleMuiThemeChange)
          }
        }, [])

        const toggleSystemMode = (event: React.SyntheticEvent): void => {
          event.preventDefault()
          event.stopPropagation()

          const channel = addons.getChannel()
          channel.emit('mui-theme-mode-toggle', 'system')

          const isSystemDark =
            window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
          addons.setConfig({ theme: isSystemDark ? dark : light })
        }

        return (
          <IconButton
            key={SYSTEM_TOOL_ID}
            title="Use system theme"
            active={isSystemMode}
            onClick={toggleSystemMode}
          >
            {isSystemMode ? <StopAltIcon /> : <StopAltHollowIcon />}
          </IconButton>
        )
      },
    })
})
