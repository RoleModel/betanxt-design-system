import { useState } from 'react'

import { Apps as AppsIcon } from '@mui/icons-material'
import { Box, Button, Menu, MenuItem, Typography } from '@mui/material'

export type App = {
  title: string
  url: string
}

export function BNAppSwitcher({
  apps,
  currentAppTitle,
  clientName,
}: {
  apps: App[]
  currentAppTitle?: string
  clientName?: React.ReactNode
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <Box
      sx={(theme) => ({
        px: 2,
        backgroundColor:
          theme.vars?.palette?.appSwitcher?.background || theme.palette.primary.main,
        minHeight: theme.layout?.appSwitcherHeight || 48,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.palette.common.white,
      })}
    >
      <Typography variant="button" color="inherit">
        {clientName}
      </Typography>
      <Button
        aria-label="App Switcher"
        variant="text"
        color="inherit"
        onClick={handleClick}
        endIcon={<AppsIcon />}
      >
        {currentAppTitle}
      </Button>
      <Menu
        role="region"
        id="app-switcher-menu"
        aria-labelledby="app-switcher-menu"
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right',
        }}
        sx={(theme) => ({
          '& .MuiPaper-root': {
            backgroundColor: theme.vars.palette.appSwitcher.background,
            backgroundImage: 'none',
            color: 'common.white',
          },
        })}
      >
        {apps.map((app, index) => (
          <MenuItem
            dense
            aria-label={app.title}
            key={app.title}
            component="a"
            href={app.url}
            divider={index !== apps.length - 1}
            sx={(theme) => ({
              '&:hover': {
                backgroundColor: theme.vars.palette.appSwitcher.hover,
              },
            })}
          >
            {app.title}
          </MenuItem>
        ))}
      </Menu>
    </Box>
  )
}

export default BNAppSwitcher
