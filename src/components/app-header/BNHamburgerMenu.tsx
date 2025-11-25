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
  type CSSObject,
  ClickAwayListener,
  ListItem,
  Paper,
  Popper,
  keyframes,
  styled,
} from '@mui/material'

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

const StyledMenuIcon = styled('button')((): CSSObject => {
  return {
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
      willChange: 'transform, top',
    },
    '&[data-open="true"] div:nth-of-type(1)': {
      animation: `${topbarOpen} 0.65s ease forwards`,
    },
    '&[data-open="false"] div:nth-of-type(1)': {
      animation: `${topbarClose} 0.65s ease forwards`,
    },
    '&[data-open="true"] div:nth-of-type(2)': {
      animation: `${bottombarOpen} 0.65s ease forwards`,
    },
    '&[data-open="false"] div:nth-of-type(2)': {
      animation: `${bottombarClose} 0.65s ease forwards`,
    },
  }
})

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
          <StyledMenuIcon
            ref={buttonRef}
            data-open={isOpen}
            onClick={toggleMenu}
            aria-label={isOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={isOpen}
            type="button"
          >
            <div />
            <div />
          </StyledMenuIcon>
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
