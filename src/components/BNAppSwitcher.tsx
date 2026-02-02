import { type ReactNode, useState } from 'react'

import AppsIcon from '@mui/icons-material/Apps'
import { Button, Menu, MenuItem, type MenuItemProps, styled } from '@mui/material'

export function BNAppSwitcher({
  currentAppName,
  children,
}: {
  currentAppName: string
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
        {currentAppName}
      </Button>
      <Menu
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
            color: theme.vars.palette.appSwitcher.contrastText,
          },
        })}
      >
        {children}
      </Menu>
    </>
  )
}

const StyledMenuItem = styled(MenuItem)(({ theme }) => ({
  width: '100%',
  '&:hover': {
    backgroundColor: theme.vars.palette.appSwitcher.hover,
  },
}))

BNAppSwitcher.Item = <C extends React.ElementType>(
  props: { name: string } & MenuItemProps<C, { component?: C }>
) => {
  return (
    <StyledMenuItem aria-label={props.name} {...props}>
      {props.name}
    </StyledMenuItem>
  )
}
