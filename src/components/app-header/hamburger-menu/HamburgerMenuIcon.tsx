import { keyframes, styled } from '@mui/material'

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

export const HamburgerMenuIcon = styled('button')({
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
})
