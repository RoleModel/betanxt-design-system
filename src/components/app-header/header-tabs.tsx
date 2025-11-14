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
export const Tab = function BNAppHeaderTab<C extends React.ElementType = 'div', P = {}>(
  props: TabProps<C, P>
) {
  return <MuiTab aria-label={`Navigate to ${props.label}`} tabIndex={0} {...props} />
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
