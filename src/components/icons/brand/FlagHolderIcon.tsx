import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledFlagHolderIcon = styled(FlagHolderIcon)<{
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

function FlagHolderIcon({
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
      className={`FlagHolderIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M25 9H13V15"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M29 9H39" stroke="#34C0F3" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M32 23C34.2091 23 36 21.2091 36 19C36 16.7909 34.2091 15 32 15C29.7909 15 28 16.7909 28 19C28 21.2091 29.7909 23 32 23Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M31 41V57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M37 43C39.21 43 41 41.21 41 39V29.28C41 27.37 39.65 25.73 37.78 25.36L36 25L31 29L29 27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 16.38V9C29 7.9 28.1 7 27 7C25.9 7 25 7.9 25 9V56C25 56.55 25.45 57 26 57H36C36.55 57 37 56.55 37 56V31"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 15V9"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 3H42C40.3431 3 39 4.34315 39 6V12C39 13.6569 40.3431 15 42 15H44C45.6569 15 47 13.6569 47 12V6C47 4.34315 45.6569 3 44 3Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function FlagHolderIconWithAccent(props: BrandIconProps) {
  return (
    <StyledFlagHolderIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
