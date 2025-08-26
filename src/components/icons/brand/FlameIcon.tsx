import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledFlameIcon = styled(FlameIcon)<{
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

function FlameIcon({
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
      className={`FlameIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M45 39.4399C45 48.0399 38.06 55 29.5 55C20.94 55 14 48.8999 14 40.2999C14 30.3599 27.78 23.22 27.78 13.49C27.78 13.49 38.76 23.22 35.32 32.51C35.32 32.51 37.15 31.65 38.44 30.46C39.73 29.27 41.26 27.21 41.26 27.21C43.42 30.94 45.01 35.1399 45.01 39.4299L45 39.4399Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.7402 47.22C21.7402 51.33 25.2102 55 29.4902 55C33.7702 55 37.2402 51.95 37.2402 47.65C37.2402 42.85 29.4902 40.14 30.3502 34.24C30.3502 34.24 21.7402 39.86 21.7402 47.21V47.22Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8804 19.1602H15.8604V24.8201H15.8804V19.1602Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.8804 13.49H15.8604V15.38H15.8804V13.49Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.52 12.5498H21.5V18.2098H21.52V12.5498Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.52 7.83008H21.5V8.77014H21.52V7.83008Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.3706 15.3799H39.3506V21.0399H39.3706V15.3799Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.3706 10.6602H39.3506V11.6001H39.3706V10.6602Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.73 9.71997H33.71V12.5499H33.73V9.71997Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.73 5H33.71V5.93994H33.73V5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function FlameIconWithAccent(props: BrandIconProps) {
  return (
    <StyledFlameIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
