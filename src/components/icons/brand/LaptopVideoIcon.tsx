import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledLaptopVideoIcon = styled(LaptopVideoIcon)<{
  accentColor?: string
  fontSize?: BrandIconProps['fontSize']
}>(({ theme, accentColor = '#34C0F3', fontSize }) => [
  {
    fill: 'none',
    width: fontSize ? getFontSizeValue(fontSize) : '1.25rem',
    height: fontSize ? getFontSizeValue(fontSize) : '1.25rem',
    '& path:not([stroke])': {
      stroke: theme.vars.palette.text.primary,
    },
    '& path[stroke="#34C0F3"]': {
      stroke: accentColor,
    },
  },
])

function LaptopVideoIcon({
  accentColor = '#34C0F3',
  fontSize,
  className,
  ...props
}: BrandIconProps) {
  return (
    <SvgIcon
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`LaptopVideoIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M57 47H3L7 39H53L57 47Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 39V12C7 9.8 8.8 8 11 8H49C51.2 8 53 9.8 53 12V39H7Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57 47V49C57 50.65 55.65 52 54 52H6C4.35 52 3 50.65 3 49V47H57Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32.0002 43.0499H28.0002C28.0002 43.0499 27.9502 43.0299 27.9502 42.9999C27.9502 42.9699 27.9702 42.95 28.0002 42.95H32.0002C32.0002 42.95 32.0502 42.9699 32.0502 42.9999C32.0502 43.0299 32.0302 43.0499 32.0002 43.0499Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 32.5C34.9706 32.5 39 28.4706 39 23.5C39 18.5294 34.9706 14.5 30 14.5C25.0294 14.5 21 18.5294 21 23.5C21 28.4706 25.0294 32.5 30 32.5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 14.5V23.5H39C39 18.53 34.97 14.5 30 14.5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function LaptopVideoIconWithAccent(props: BrandIconProps) {
  return (
    <StyledLaptopVideoIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
