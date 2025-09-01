import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledDollarIcon = styled(DollarIcon)<{
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

function DollarIcon({
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
      className={`DollarIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M53 21H7C5.89543 21 5 21.8954 5 23V49C5 50.1046 5.89543 51 7 51H53C54.1046 51 55 50.1046 55 49V23C55 21.8954 54.1046 21 53 21Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 29C9.42 29 13 25.42 13 21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 21C47 25.42 50.58 29 55 29"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 43C50.58 43 47 46.58 47 51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 51C13 46.58 9.42 43 5 43"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 15H51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 9H47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M30 47C36.0751 47 41 42.0751 41 36C41 29.9249 36.0751 25 30 25C23.9249 25 19 29.9249 19 36C19 42.0751 23.9249 47 30 47Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 32H29C27.9 32 27 32.9 27 34C27 35.1 27.9 36 29 36H31C32.1 36 33 36.9 33 38C33 39.1 32.1 40 31 40H27"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 29V32"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 40V43"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function DollarIconWithAccent(props: BrandIconProps) {
  return (
    <StyledDollarIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
