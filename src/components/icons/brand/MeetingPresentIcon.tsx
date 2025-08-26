import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledMeetingPresentIcon = styled(MeetingPresentIcon)<{
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

function MeetingPresentIcon({
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
      className={`MeetingPresentIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M21 51C21 51 23.69 49 27 49C30.31 49 33 51 33 51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 51C33 51 35.69 49 39 49C42.31 49 45 51 45 51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 51C45 51 47.69 49 51 49C54.31 49 57 51 57 51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 35H50C51.66 35 53 33.66 53 32V12C53 10.34 51.66 9 50 9H12"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 25V49H17V24.5C17 23.67 17.67 23 18.5 23H29C30.1 23 31 22.1 31 21C31 19.9 30.1 19 29 19H16L12 23L8 19L5.41003 19.66C3.98003 20.13 3 21.49 3 23V31C3 33.21 4.79 35 7 35"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 35V49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M27 49C29.2091 49 31 47.2091 31 45C31 42.7909 29.2091 41 27 41C24.7909 41 23 42.7909 23 45C23 47.2091 24.7909 49 27 49Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M39 49C41.2091 49 43 47.2091 43 45C43 42.7909 41.2091 41 39 41C36.7909 41 35 42.7909 35 45C35 47.2091 36.7909 49 39 49Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M51 49C53.2091 49 55 47.2091 55 45C55 42.7909 53.2091 41 51 41C48.7909 41 47 42.7909 47 45C47 47.2091 48.7909 49 51 49Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function MeetingPresentIconWithAccent(props: BrandIconProps) {
  return (
    <StyledMeetingPresentIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
