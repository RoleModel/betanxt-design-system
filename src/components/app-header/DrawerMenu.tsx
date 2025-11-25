import { useState } from 'react'

import ExpandLess from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined'
import {
  Box,
  Collapse,
  Drawer,
  ListItem,
  ListItemButton,
  type ListItemProps,
  ListItemText,
} from '@mui/material'
import { type CSSObject, keyframes, styled } from '@mui/material/styles'

// Define Keyframes
const bottombarOpen = keyframes`
  0% { top: 19px; }
  50% { top: 12px; transform: rotate(0deg); }
  100% { top: 12px; transform: rotate(-45deg); }
`

const bottombarClose = keyframes`
  0% { top: 12px; transform: rotate(-45deg); }
  50% { top: 12px; transform: rotate(0deg); }
  100% { top: 19px;}
`

const topbarOpen = keyframes`
  0% { top: 9px; }
  50% { top: 12px; transform: rotate(0deg); }
  100% { top: 12px; transform: rotate(45deg); }
`

const topbarClose = keyframes`
  0% { top: 12px; transform: rotate(45deg); }
  50% { top: 12px; transform: rotate(0deg); }
  100% { top: 9px; }
`

const StyledMenuIcon = styled('button', {
  shouldForwardProp: (prop) => prop !== 'open',
})<{ open: boolean }>(
  ({ open }): CSSObject => ({
    border: 'none',
    margin: 0,
    padding: 0,
    overflow: 'visible',
    background: 'transparent',
    color: 'inherit',
    font: 'inherit',
    lineHeight: 'normal',
    appearance: 'none',
    outline: 'none',
    cursor: 'pointer',
    position: 'relative',
    width: '28px',
    height: '28px',
    display: 'inline-block',
    verticalAlign: 'middle',
    borderRadius: '50%',
    top: 0,
    '&:focus': {
      outline: '2px solid currentColor',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      outline: 'none',
    },
    '& div': {
      display: 'block',
      position: 'absolute',
      height: 2,
      width: '100%',
      background: 'currentColor',
      opacity: 1,
      left: 0,
      transformOrigin: 'center center',
    },
    '& div:nth-of-type(1)': {
      animation: `${open ? topbarOpen : topbarClose} 0.65s ease forwards`,
    },
    '& div:nth-of-type(2)': {
      animation: `${open ? bottombarOpen : bottombarClose} 0.65s ease forwards`,
    },
  })
)

export default function DrawerMenu({
  hasAppSwitcher = false,
  children,
}: {
  hasAppSwitcher?: boolean
  children?: React.ReactNode
}) {
  const [drawerOpen, setDrawerOpen] = useState(false)

  const hideDrawer = () => {
    setDrawerOpen(false)
  }

  const toggleDrawer = () => {
    setDrawerOpen((prev) => !prev)
  }

  return (
    <>
      <StyledMenuIcon
        open={drawerOpen}
        onClick={toggleDrawer}
        aria-label={drawerOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={drawerOpen}
        type="button"
      >
        <div />
        <div />
      </StyledMenuIcon>
      <Drawer
        anchor="right"
        elevation={10}
        open={drawerOpen}
        onClose={hideDrawer}
        transitionDuration={350}
        id="navigation-drawer"
        aria-label="Navigation drawer"
        sx={(theme) => {
          const navbarHeight = theme.layout?.navbarHeight || 66
          const appSwitcherHeight = hasAppSwitcher
            ? theme.layout?.appSwitcherHeight || 48
            : 0
          const totalTopOffset = navbarHeight + appSwitcherHeight

          return {
            '& .MuiDrawer-paper': {
              width: 320,
              top: totalTopOffset,
              height: `calc(100vh - ${totalTopOffset}px)`,
            },
            '& .MuiBackdrop-root.MuiModal-backdrop': {
              backgroundColor: 'rgba(0, 0, 0, 0.1)',
            },
          }
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            height: '100%',
            flex: 1,
            overflow: 'auto',
          }}
        >
          {children}
        </Box>
      </Drawer>
    </>
  )
}

DrawerMenu.ListItem = (props: ListItemProps) => {
  return (
    <ListItem disablePadding {...props}>
      {props.children}
    </ListItem>
  )
}

DrawerMenu.ListItemWithChildren = ({
  label,
  children,
}: {
  label: string
  children: React.ReactNode
}) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleDrawer = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <ListItemButton onClick={toggleDrawer}>
        <ListItemText primary={label} />
        {isOpen ? <ExpandLess /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box sx={{ pl: 2 }}>{children}</Box>
      </Collapse>
    </>
  )
}
