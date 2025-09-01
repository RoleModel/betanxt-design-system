import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledDocumentListIcon = styled(DocumentListIcon)<{
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

function DocumentListIcon({
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
      className={`DocumentListIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M33 17H29C27.9 17 27 17.9 27 19C27 20.1 27.9 21 29 21H31C32.1 21 33 21.9 33 23C33 24.1 32.1 25 31 25H27"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 15V17"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 25V27"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M37 21H45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 27H45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 15H45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M27 33H45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 39H45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M25 53C22.79 53 21 51.21 21 49V11C21 8.79 19.21 7 17 7H47C49.21 7 51 8.79 51 11V43"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 39H9C11.21 39 13 37.21 13 35V11C13 8.79 14.79 7 17 7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 39C6.79 39 5 37.21 5 35V19H9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 49C55 51.21 53.21 53 51 53H25C27.21 53 29 51.21 29 49V47H55V49Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function DocumentListIconWithAccent(props: BrandIconProps) {
  return (
    <StyledDocumentListIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
