import React, { useEffect } from 'react'
import { addons } from 'storybook/preview-api'

import { useColorScheme } from '@mui/material/styles'

interface MuiThemeModeToggleProps {
  isPrimaryController?: boolean
}

export const MuiThemeModeToggle: React.FC<MuiThemeModeToggleProps> = ({
  isPrimaryController = false,
}) => {
  const { mode, setMode, systemMode } = useColorScheme()
  const channel = addons.getChannel()

  useEffect(() => {
    const handleToggle = (newModeFromChannel: 'light' | 'dark' | 'system') => {
      setMode(newModeFromChannel)
    }
    channel.on('mui-theme-mode-toggle', handleToggle)
    return () => {
      channel.off('mui-theme-mode-toggle', handleToggle)
    }
  }, [channel, setMode])

  useEffect(() => {
    if (!mode) return

    let effectiveMode: 'light' | 'dark' = mode as 'light' | 'dark'
    if (mode === 'system') {
      effectiveMode = systemMode === 'dark' ? 'dark' : 'light'
    }

    channel.emit('mui-theme-mode-changed', effectiveMode)
  }, [mode, systemMode, channel])

  useEffect(() => {
    const handleRequest = () => {
      if (!mode) return
      let effectiveMode: 'light' | 'dark' = mode as 'light' | 'dark'
      if (mode === 'system') {
        effectiveMode = systemMode === 'dark' ? 'dark' : 'light'
      }
      channel.emit('mui-theme-mode-changed', effectiveMode)
    }

    if (isPrimaryController) {
      channel.on('mui-theme-mode-request', handleRequest)
    }

    return () => {
      if (isPrimaryController) {
        channel.off('mui-theme-mode-request', handleRequest)
      }
    }
  }, [isPrimaryController, channel, mode, systemMode])

  return null
}
