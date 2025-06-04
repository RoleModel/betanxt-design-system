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
    if (isPrimaryController) {
      // Get initial mode, preferring system if available
      const initialMode = mode || 'system'
      if (initialMode !== mode) {
        setMode(initialMode)
      }
      // Emit initial mode to manager
      channel.emit('mui-theme-mode-changed', initialMode)
      lastEmittedModeRef.current = initialMode
    }
  }, [isPrimaryController, channel]) // Only run on mount

  // Handle system mode changes
  useEffect(() => {
    if (mode === 'system' && isPrimaryController) {
      // When in system mode, emit the effective mode (systemMode) to manager
      const effectiveMode = systemMode || 'light'
      if (lastEmittedModeRef.current !== effectiveMode) {
        channel.emit('mui-theme-mode-changed', effectiveMode)
        lastEmittedModeRef.current = effectiveMode
      }
    }
  }, [systemMode, mode, isPrimaryController, channel])

  // Only emit to manager when mode changes locally (not from manager)
  useEffect(() => {
    if (mode) {
      // Determine the effective mode for document class
      let effectiveMode = mode
      if (mode === 'system') {
        effectiveMode = systemMode || 'light'
      }

      // Update the document class for dark mode
      if (effectiveMode === 'dark') {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
      }

      // Only emit if this wasn't triggered by the manager AND the mode actually changed
      if (!isExternalChangeRef.current && lastEmittedModeRef.current !== mode) {
        // For system mode, emit the current mode, not the effective mode
        channel.emit('mui-theme-mode-changed', mode)
        lastEmittedModeRef.current = mode
      }
    }
  }, [mode, systemMode, channel, isPrimaryController])

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
      // Always update to reflect system changes when in system mode
      if (mode === 'system') {
        // Don't call setMode here as it would override the system mode
        // Instead, let the systemMode effect handle it
        if (isPrimaryController) {
          channel.emit('mui-theme-mode-changed', newSystemMode)
          lastEmittedModeRef.current = newSystemMode
        }
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
  }, [channel, setMode, isPrimaryController, mode, systemMode])

  return null
}
