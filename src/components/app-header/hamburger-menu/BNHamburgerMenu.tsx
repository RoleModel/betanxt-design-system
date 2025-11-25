import {
  type MouseEvent,
  type ReactNode,
  createContext,
  useContext,
  useRef,
  useState,
} from 'react'

import {
  type AvatarProps,
  ClickAwayListener,
  ListItem,
  Paper,
  Popper,
} from '@mui/material'

import { HamburgerMenuIcon } from './HamburgerMenuIcon'

const HamburgerMenuContext = createContext<{
  closeMenu: () => void
} | null>(null)

export function useHamburgerMenu() {
  const context = useContext(HamburgerMenuContext)
  if (!context) {
    throw new Error('useHamburgerMenu must be used within BNHamburgerMenu')
  }
  return context
}

export type BNHamburgerMenuProps = Pick<AvatarProps, 'src' | 'srcSet' | 'alt'> & {
  children?: ReactNode
}

export function BNHamburgerMenu(props: BNHamburgerMenuProps) {
  const [isOpen, setIsOpen] = useState(false)
  const buttonRef = useRef<HTMLButtonElement>(null)

  const toggleMenu = (event: MouseEvent<HTMLElement>) => {
    setIsOpen((prev) => !prev)
  }

  const closeMenu = () => {
    setIsOpen(false)
  }

  return (
    <HamburgerMenuContext.Provider value={{ closeMenu }}>
      <ClickAwayListener onClickAway={closeMenu}>
        <div>
          <HamburgerMenuIcon
            ref={buttonRef}
            data-open={isOpen}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            type="button"
          >
            <div />
            <div />
          </HamburgerMenuIcon>
          {isOpen && buttonRef.current && (
            <Popper
              role="navigation"
              id="avatar-menu"
              open={isOpen}
              anchorEl={buttonRef.current}
              placement="bottom-end"
              sx={{ zIndex: (theme) => theme.zIndex.appBar + 1 }}
              modifiers={[{ name: 'offset', options: { offset: [0, 18] } }]}
            >
              <Paper sx={{ maxHeight: '100vh', overflowY: 'auto' }}>
                <div>{props.children}</div>
              </Paper>
            </Popper>
          )}
        </div>
      </ClickAwayListener>
    </HamburgerMenuContext.Provider>
  )
}

BNHamburgerMenu.ListItem = (props: {
  hideMenuOnClick?: boolean
  children: ReactNode
}) => {
  const { hideMenuOnClick = true, children, ...otherProps } = props
  const { closeMenu } = useHamburgerMenu()

  // Allow time for click ripple animation so the user sees feedback their click was registered
  const closeMenuWithDelay = () => {
    if (hideMenuOnClick) {
      setTimeout(() => {
        closeMenu()
      }, 300)
    }
  }

  return (
    <ListItem onClick={closeMenuWithDelay} disablePadding {...otherProps}>
      {children}
    </ListItem>
  )
}
