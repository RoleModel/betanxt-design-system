import { type ReactNode, useState } from 'react'

import AppsIcon from '@mui/icons-material/Apps'
import { Button, Menu } from '@mui/material'

export default function AppSwitcher({
  currentAppTitle,
  children,
}: {
  currentAppTitle: string
  children: ReactNode
}) {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null)

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
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
        {children}
      </Menu>
    </>
  )
}
