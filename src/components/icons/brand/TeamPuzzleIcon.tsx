import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTeamPuzzleIcon = styled(TeamPuzzleIcon)<{
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

function TeamPuzzleIcon({
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
      className={`TeamPuzzleIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30 17C33.3137 17 36 14.3137 36 11C36 7.68629 33.3137 5 30 5C26.6863 5 24 7.68629 24 11C24 14.3137 26.6863 17 30 17Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22 41H18C17.45 41 17 40.55 17 40V34.2101C17 31.6001 15.09 29.27 12.49 29.02C9.51 28.74 7 31.07 7 34C7 36.42 8.72 38.44 11 38.9V46C11 47.66 12.34 49 14 49H18"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42 49H46C47.66 49 49 47.66 49 46V38.9C51.56 38.38 53.4 35.92 52.93 33.12C52.59 31.15 51.04 29.52 49.08 29.11C45.85 28.44 43 30.88 43 34V40C43 40.55 42.55 41 42 41H38"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 53V49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 49V53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="30" cy="31" r="1" fill="#34C0F3" />
      <path
        d="M39 35L43.02 33.66"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9404 33.65L20.9904 35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.93 19H17C14.79 19 13 20.79 13 23V29.1"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.0003 29.1V23C47.0003 20.79 45.2103 19 43.0003 19H39.0703"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.1998 30.76L40.9398 21.63C40.2798 19.77 38.7398 18.35 36.8398 17.85C36.3898 17.73 35.9298 17.63 35.4698 17.54L30.0098 23L24.5498 17.54C24.0798 17.63 23.6198 17.73 23.1798 17.85C21.2698 18.36 19.7398 19.78 19.0798 21.64L15.7998 30.82"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.44 37H38C38.55 37 39 36.55 39 36V26C39 25.45 38.55 25 38 25H22C21.45 25 21 25.45 21 26V36C21 36.55 21.45 37 22 37H22.55"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 55C22.45 55 22 54.55 22 54V39C22 36.79 23.79 35 26 35C28.21 35 30 36.79 30 39V54C30 54.55 29.55 55 29 55H23Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 55C30.45 55 30 54.55 30 54V39C30 36.79 31.79 35 34 35C36.21 35 38 36.79 38 39V54C38 54.55 37.55 55 37 55H31Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamPuzzleIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamPuzzleIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
