import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledHandClickIcon = styled(HandClickIcon)<{
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

function HandClickIcon({
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
      className={`HandClickIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M21 48.9999C26.03 48.9999 29.75 43.0699 30.86 38.9499C31.04 38.2799 31.39 37.6699 31.88 37.1799L38.87 30.1899C40.24 28.8199 40.24 26.6099 38.87 25.2399C37.5 23.8699 35.29 23.8699 33.92 25.2399L26.79 32.3799C26.71 32.4599 26.63 32.5299 26.54 32.5899C25.53 33.3199 24.08 32.7199 23.68 31.5399L23.25 30.2599"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 41L10 38L24 52L21 55"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 21H18.58C16.74 21 15.13 22.25 14.69 24.04L11 39"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M33 15V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M33 21V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M32.5996 45H49.9996C51.6596 45 52.9996 43.66 52.9996 42V39L53 11V8C53 6.34 51.66 5 50 5H30C28.34 5 27 6.34 27 8V26.51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 11H40C39.4477 11 39 11.4477 39 12V16C39 16.5523 39.4477 17 40 17H44C44.5523 17 45 16.5523 45 16V12C45 11.4477 44.5523 11 44 11Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function HandClickIconWithAccent(props: BrandIconProps) {
  return (
    <StyledHandClickIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
