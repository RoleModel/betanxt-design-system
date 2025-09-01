import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledHourglassIcon = styled(HourglassIcon)<{
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

function HourglassIcon({
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
      className={`HourglassIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M3 14C3 15.66 4.34 17 6 17H26C27.66 17 29 15.66 29 14C29 12.34 27.66 11 26 11H6C4.34 11 3 12.34 3 14Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M3 46C3 47.66 4.34 49 6 49H26C27.66 49 29 47.66 29 46C29 44.34 27.66 43 26 43H6C4.34 43 3 44.34 3 46Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M26 17V19C26 23.84 22.56 27.87 18 28.8V31.2C22.56 32.13 26 36.16 26 41V43"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M6 17V19C6 23.84 9.44 27.87 14 28.8V31.2C9.44 32.13 6 36.16 6 41V43"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M33 48.31C34.6 48.75 36.27 49 38 49C48.49 49 57 40.49 57 30C57 19.51 48.49 11 38 11C36.27 11 34.6 11.25 33 11.69"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 24H37C35.34 24 34 25.34 34 27C34 28.66 35.34 30 37 30H39C40.66 30 42 31.34 42 33C42 34.66 40.66 36 39 36H34"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 24V21"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 39V36"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function HourglassIconWithAccent(props: BrandIconProps) {
  return (
    <StyledHourglassIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
