import { addons } from '@storybook/preview-api'
import React, { useEffect, useRef } from 'react'

import { useColorScheme } from '@mui/material/styles'

interface MuiThemeModeToggleProps {
  isPrimaryController?: boolean
}

export const MuiThemeModeToggle: React.FC<MuiThemeModeToggleProps> = ({
  isPrimaryController = false,
}) => {
  const { mode, setMode } = useColorScheme()
  const channel = addons.getChannel()

  const modeRef = useRef(mode)
  useEffect(() => {
    modeRef.current = mode
  }, [mode])

  // ALL instances emit when their local mode changes.
  // This ensures that if a docs-only page successfully changes its MUI mode,
  // it can report this back to the manager.
  // ALSO, update the documentElement dataset to reflect MUI's current mode.
  useEffect(() => {
    if (mode) {
      // console.log('MuiThemeModeToggle: Emitting mui-theme-mode-changed', mode, 'isPrimary:', isPrimaryController);
      channel.emit('mui-theme-mode-changed', mode)
      // Reflect MUI's mode on the documentElement for other parts of Storybook (like DocsContainer) to see.
      // This aligns with what CssBaseline enableColorScheme does.
      document.documentElement.dataset.muiColorScheme = mode
    } else {
      // If mode becomes undefined (e.g., if useColorScheme somehow returns it),
      // remove the attribute to avoid a stale state.
      delete document.documentElement.dataset.muiColorScheme
    }
  }, [mode, channel]) // Removed isPrimaryController from deps, all instances should do this for their context

  // Effect for channel event subscriptions.
  useEffect(() => {
    const handleToggle = (newModeFromChannel: string) => {
      // console.log('MuiThemeModeToggle: Received mui-theme-mode-toggle', newModeFromChannel, 'isPrimary:', isPrimaryController);
      if (
        newModeFromChannel === 'light' ||
        newModeFromChannel === 'dark' ||
        newModeFromChannel === 'system'
      ) {
        setMode(newModeFromChannel)
      }
    }

    const handleRequest = () => {
      // Only the primary controller responds to a general mode request from the manager.
      if (modeRef.current && isPrimaryController) {
        // console.log('MuiThemeModeToggle: Received mui-theme-mode-request, current mode:', modeRef.current, 'isPrimary:', isPrimaryController);
        channel.emit('mui-theme-mode-changed', modeRef.current)
      }
    }

    // console.log('MuiThemeModeToggle: Subscribing to channel events', 'isPrimary:', isPrimaryController);
    channel.on('mui-theme-mode-toggle', handleToggle)

    if (isPrimaryController) {
      channel.on('mui-theme-mode-request', handleRequest)
    }

    return () => {
      // console.log('MuiThemeModeToggle: Unsubscribing from channel events', 'isPrimary:', isPrimaryController);
      channel.off('mui-theme-mode-toggle', handleToggle)
      if (isPrimaryController) {
        channel.off('mui-theme-mode-request', handleRequest)
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [channel, setMode, isPrimaryController]) // setMode and isPrimaryController are stable or correctly handled by primary controller logic for subscriptions

  return null
}
