import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledHandSmartphoneIcon = styled(HandSmartphoneIcon)<{
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

function HandSmartphoneIcon({
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
      className={`HandSmartphoneIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M19 48.9999C24.03 48.9999 27.75 43.0699 28.86 38.9499C29.04 38.2799 29.39 37.6699 29.88 37.1799L36.87 30.1899C38.24 28.8199 38.24 26.6099 36.87 25.2399C35.5 23.8699 33.29 23.8699 31.92 25.2399L24.79 32.3799C24.71 32.4599 24.63 32.5299 24.54 32.5899C23.53 33.3199 22.08 32.7199 21.68 31.5399L21.25 30.2599"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 41L8 38L22 52L19 55"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25 21H16.58C14.74 21 13.13 22.25 12.69 24.04L9 39"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M31 15V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 21V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M51 11V8C51 6.34 49.66 5 48 5H28C26.34 5 25 6.34 25 8V26.51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.5996 45H47.9996C49.6596 45 50.9996 43.66 50.9996 42V39"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.8301 22.1699C45.3901 23.7299 45.3901 26.2699 43.8301 27.8299"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.3604 18.6399C50.8704 22.1599 50.8704 27.8499 47.3604 31.3699"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.9004 15.1001C56.3704 20.5701 56.3704 29.4301 50.9004 34.9001"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 11H38C37.4477 11 37 11.4477 37 12V16C37 16.5523 37.4477 17 38 17H42C42.5523 17 43 16.5523 43 16V12C43 11.4477 42.5523 11 42 11Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function HandSmartphoneIconWithAccent(props: BrandIconProps) {
  return (
    <StyledHandSmartphoneIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
