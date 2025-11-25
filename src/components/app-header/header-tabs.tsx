import { type ReactNode, useState } from 'react'

import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown'
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp'
import {
  ClickAwayListener,
  Tab as MuiTab,
  Tabs as MuiTabs,
  Paper,
  Popper,
  type TabProps,
  type TabsProps,
} from '@mui/material'

export const Tabs = (props: TabsProps) => {
  return (
    <MuiTabs component="nav" aria-label="Main navigation tabs" {...props}>
      {props.children}
    </MuiTabs>
  )
}

export function Tab<C extends React.ElementType>(props: TabProps<C, { component?: C }>) {
  return <MuiTab aria-label={`Navigate to ${props.label}`} {...props} />
}

export const TabWithSubMenu = ({
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
      <MuiTab
        label={label}
        aria-label={isOpen ? `Close ${label} menu` : `Open ${label} menu`}
        aria-haspopup="menu"
        aria-expanded={isOpen}
        icon={isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
        iconPosition="end"
        onClick={handleTabClick}
        sx={{ opacity: 1, paddingRight: 0 }}
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
