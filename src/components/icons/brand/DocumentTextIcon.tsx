import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledDocumentTextIcon = styled(DocumentTextIcon)<{
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

function DocumentTextIcon({
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
      className={`DocumentTextIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M17 5V13C17 14.1 16.1 15 15 15H7"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 55H10C8.34 55 7 53.66 7 52V15L17 5H42C43.66 5 45 6.34 45 8V9"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M13 41H39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 47H31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39 35H13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M39 29H13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M21 23H13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M46 13C44.34 13 43 14.34 43 16V47C43 51 46 54 46 54C46 54 49 51 49 47V16C49 14.34 47.66 13 46 13Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M43 19H51C52.1 19 53 19.9 53 21V30.31"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M49 44H43" strokeWidth="2" strokeLinejoin="round" />
      <path d="M46 55V54" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M35 13H31C29.9 13 29 13.9 29 15C29 16.1 29.9 17 31 17H33C34.1 17 35 17.9 35 19C35 20.1 34.1 21 33 21H29"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 10V13"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 21V24"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function DocumentTextIconWithAccent(props: BrandIconProps) {
  return (
    <StyledDocumentTextIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
