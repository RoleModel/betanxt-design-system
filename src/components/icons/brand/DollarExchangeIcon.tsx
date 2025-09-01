import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledDollarExchangeIcon = styled(DollarExchangeIcon)<{
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

function DollarExchangeIcon({
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
      className={`DollarExchangeIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M20 37C28.2843 37 35 30.2843 35 22C35 13.7157 28.2843 7 20 7C11.7157 7 5 13.7157 5 22C5 30.2843 11.7157 37 20 37Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 18H19C17.9 18 17 18.9 17 20C17 21.1 17.9 22 19 22H21C22.1 22 23 22.9 23 24C23 25.1 22.1 26 21 26H17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M20 16V18" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20 26V28" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M34.86 23.92C36.46 23.33 38.19 23 40 23C48.29 23 55 29.71 55 38C55 46.29 48.29 53 40 53C31.71 53 25 46.29 25 38C25 37.35 25.05 36.71 25.14 36.08"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M55 15L51 21L47 15"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 5H43C47.42 5 51 8.58 51 13V21"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 45L9 39L13 45"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 55H17C12.58 55 9 51.42 9 47V39"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 39.5H35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40 36.5H35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 35C43.19 33.79 41.91 33 40.46 33C38 33 36 35.24 36 38C36 40.76 37.99 43 40.46 43C41.91 43 43.19 42.21 44 41"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function DollarExchangeIconWithAccent(props: BrandIconProps) {
  return (
    <StyledDollarExchangeIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
