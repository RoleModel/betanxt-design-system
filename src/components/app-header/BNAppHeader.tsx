import { type ElementType, type ReactNode, useState } from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import {
  AppBar,
  Box,
  type BoxProps,
  ClickAwayListener,
  Paper,
  Popper,
  Stack,
  Tab,
  type TabProps,
  Tabs,
  type TabsProps,
  Toolbar,
  type ToolbarProps,
  Typography,
  type TypographyProps,
  useMediaQuery,
  useTheme,
} from '@mui/material'

function BNAppHeader({ children }: { children?: React.ReactNode }) {
  return (
    <AppBar color="primary" position="static">
      {children}
    </AppBar>
  )
}

BNAppHeader.Toolbar = (props: ToolbarProps) => {
  return (
    <Toolbar sx={{ justifyContent: 'space-between' }} {...props}>
      {props.children}
    </Toolbar>
  )
}

BNAppHeader.Title = (props: TypographyProps) => {
  return (
    <Typography variant="appTitle" aria-level={1} {...props}>
      {props.children}
    </Typography>
  )
}

BNAppHeader.Logo = (props: BoxProps<'img'>) => {
  const { src } = props
  return (
    <Box
      {...props}
      component="img"
      src={src}
      alt="Logo"
      sx={(theme) => ({
        display: 'inline-flex',
        alignItems: 'center',
        height: 44,
        ...(src &&
          !src.endsWith('.svg') && {
            backgroundColor: theme.vars.palette.common.white,
            padding: theme.spacing(0.5),
            borderRadius: 1,
          }),
      })}
    />
  )
}

BNAppHeader.Section = ({ children }: { children?: ReactNode }) => {
  return (
    <Stack direction="row" spacing={1} useFlexGap alignItems="center">
      {children}
    </Stack>
  )
}

BNAppHeader.DesktopOnlySection = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme()
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'))
  return isDesktop ? children : null
}

BNAppHeader.MobileOnlySection = ({ children }: { children?: ReactNode }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))
  return isMobile ? children : null
}

BNAppHeader.ControlBar = ({ children }: { children?: ReactNode }) => {
  return (
    <Box
      sx={(theme) => ({
        px: 2,
        backgroundColor:
          theme.vars.palette.appSwitcher?.background || theme.palette.primary.main,
        minHeight: theme.layout?.appSwitcherHeight || 48,
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        color: theme.palette.common.white,
      })}
    >
      {children}
    </Box>
  )
}

BNAppHeader.Tabs = (props: TabsProps) => {
  return (
    <Tabs component="nav" aria-label="Main navigation tabs" {...props}>
      {props.children}
    </Tabs>
  )
}

BNAppHeader.Tab = function BNAppHeaderTab<C extends React.ElementType = 'div', P = {}>(
  props: TabProps<C, P>
) {
  return <Tab aria-label={`Navigate to ${props.label}`} tabIndex={0} {...props} />
}

BNAppHeader.TabWithSubMenu = ({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) => {
  const [tabMenuAnchorEl, setTabMenuAnchorEl] = useState<null | HTMLElement>(null)

  const handleTabClick = (event: React.MouseEvent<HTMLElement>) => {
    setTabMenuAnchorEl(event.currentTarget)
  }

  const handleTabClose = () => {
    setTabMenuAnchorEl(null)
  }

  const isOpen = Boolean(tabMenuAnchorEl)

  return (
    <>
      <Tab
        label={label}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        icon={isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        iconPosition="end"
        tabIndex={0}
        onClick={handleTabClick}
      />
      <Popper
        open={isOpen}
        anchorEl={tabMenuAnchorEl}
        placement="bottom-start"
        modifiers={[{ name: 'offset', options: { offset: [0, 4] } }]}
      >
        <Paper elevation={4}>
          <ClickAwayListener onClickAway={handleTabClose}>
            <div>{children}</div>
          </ClickAwayListener>
        </Paper>
      </Popper>
    </>
  )
}

export default BNAppHeader
