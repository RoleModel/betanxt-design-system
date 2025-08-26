import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledPersonFlagIcon = styled(PersonFlagIcon)<{
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

function PersonFlagIcon({
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
      className={`PersonFlagIcon ${className || ''}`.trim()}
      {...props}
    >
      <path d="M33 11H45V21H33" stroke="#34C0F3" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M45 15H53L51 20L53 25H43V21"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M33 31V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 37V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17 15C14.24 15 12 12.76 12 10C12 7.24 14.24 5 17 5C19.76 5 22 7.24 22 10C22 12.76 19.76 15 17 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 24V54C23 54.55 22.55 55 22 55H12C11.45 55 11 54.55 11 54V24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 38C8.79 38 7 36.21 7 34V21.23C7 19.72 7.98 18.38 9.41 17.89C10.06 17.67 12 17 12 17L17 22L22 17C22 17 23.94 17.67 24.59 17.89C26.02 18.37 27 19.72 27 21.23V26C27 26.55 27.45 27 28 27H33C34.1 27 35 27.9 35 29C35 30.1 34.1 31 33 31H26C24.34 31 23 29.66 23 28"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M33 9V27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  )
}

export default function PersonFlagIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPersonFlagIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
