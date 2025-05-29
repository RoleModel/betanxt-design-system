import { addons } from '@storybook/preview-api'
import React, { useEffect, useRef } from 'react'

import { useColorScheme } from '@mui/material/styles'

interface MuiThemeModeToggleProps {
  isPrimaryController?: boolean
}

export const MuiThemeModeToggle: React.FC<MuiThemeModeToggleProps> = ({
  isPrimaryController = false,
}) => {
  const { mode, setMode, systemMode } = useColorScheme()
  const channel = addons.getChannel()

  const modeRef = useRef(mode)
  const isExternalChangeRef = useRef(false) // Track if change came from manager
  const lastEmittedModeRef = useRef<string | undefined>(undefined) // Track last emitted mode

  useEffect(() => {
    modeRef.current = mode
  }, [mode])

  // Initial sync with system preference on mount
  useEffect(() => {
    if (isPrimaryController && mode) {
      // Emit initial mode to manager
      channel.emit('mui-theme-mode-changed', mode)
      lastEmittedModeRef.current = mode
    }
  }, [isPrimaryController, channel]) // Only run on mount

  // Only emit to manager when mode changes locally (not from manager)
  useEffect(() => {
    if (mode) {
      // Update the document class for dark mode
      if (mode === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      // Only emit if this wasn't triggered by the manager AND the mode actually changed
      if (!isExternalChangeRef.current && lastEmittedModeRef.current !== mode) {
        channel.emit('mui-theme-mode-changed', mode)
        lastEmittedModeRef.current = mode
      }
    }
  }, [mode, channel, isPrimaryController])

  // Effect for channel event subscriptions.
  useEffect(() => {
    const handleToggle = (newModeFromChannel: string) => {
      if (
        newModeFromChannel === 'light' ||
        newModeFromChannel === 'dark' ||
        newModeFromChannel === 'system'
      ) {
        // Mark this as an external change to prevent emission back to manager
        isExternalChangeRef.current = true
        setMode(newModeFromChannel)

        // Reset the flag after a short delay to ensure the mode effect has processed
        setTimeout(() => {
          isExternalChangeRef.current = false
        }, 0)
      }
    }

    const handleRequest = () => {
      // Only the primary controller responds to a general mode request from the manager.
      if (modeRef.current && isPrimaryController) {
        channel.emit('mui-theme-mode-changed', modeRef.current)
        lastEmittedModeRef.current = modeRef.current
      }
    }

    const handleSystemThemeChange = (newSystemMode: string) => {
      // Only respond to system changes if we're in system mode
      if (mode === 'system' || !mode) {
        isExternalChangeRef.current = true
        setMode('system') // This will trigger MUI to use the new system preference
        setTimeout(() => {
          isExternalChangeRef.current = false
        }, 0)
      }
    }

    // All instances should listen to toggle events (for detached docs pages)
    channel.on('mui-theme-mode-toggle', handleToggle)
    channel.on('system-theme-changed', handleSystemThemeChange)

    // Only primary controller listens to requests
    if (isPrimaryController) {
      channel.on('mui-theme-mode-request', handleRequest)
    }

    return () => {
      channel.off('mui-theme-mode-toggle', handleToggle)
      channel.off('system-theme-changed', handleSystemThemeChange)
      if (isPrimaryController) {
        channel.off('mui-theme-mode-request', handleRequest)
      }
    }
  }, [channel, setMode, isPrimaryController, mode])

  return null
}
