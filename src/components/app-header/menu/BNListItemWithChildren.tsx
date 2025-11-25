import { type ReactNode, useState } from 'react'

import ExpandLessIcon from '@mui/icons-material/ExpandLessOutlined'
import ExpandMoreIcon from '@mui/icons-material/ExpandMoreOutlined'
import { Box, Collapse, ListItemButton, ListItemText } from '@mui/material'

export function BNListItemWithChildren({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  const [isOpen, setIsOpen] = useState(false)

  const toggleSubmenu = () => {
    setIsOpen((prev) => !prev)
  }

  return (
    <>
      <ListItemButton onClick={toggleSubmenu} aria-label={`Toggle ${label} submenu`}>
        <ListItemText primary={label} />
        {isOpen ? <ExpandLessIcon /> : <ExpandMoreIcon />}
      </ListItemButton>
      <Collapse in={isOpen} timeout="auto" unmountOnExit>
        <Box sx={{ pl: 2 }}>{children}</Box>
      </Collapse>
    </>
  )
}
