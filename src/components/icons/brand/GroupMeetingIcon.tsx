import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledGroupMeetingIcon = styled(GroupMeetingIcon)<{
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

function GroupMeetingIcon({
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
      className={`GroupMeetingIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M41 50H45.61C46.29 50 46.77 49.33 46.56 48.68L44.33 42"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.67 42L13.44 48.68C13.22 49.33 13.71 50 14.39 50H19"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 38L41.23 32.68C41.09 32.27 40.71 32 40.28 32H19.72C19.29 32 18.91 32.28 18.77 32.68L17 38"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5 44V35C5 33.34 6.34 32 8 32H10C11.66 32 13 33.34 13 35V37C13 37.55 13.45 38 14 38H19C20.1 38 21 38.9 21 40C21 41.1 20.1 42 19 42H11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 44V35C55 33.34 53.66 32 52 32H50C48.34 32 47 33.34 47 35V37C47 37.55 46.55 38 46 38H41C39.9 38 39 38.9 39 40C39 41.1 39.9 42 41 42H49"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 30C11.2091 30 13 28.2091 13 26C13 23.7909 11.2091 22 9 22C6.79086 22 5 23.7909 5 26C5 28.2091 6.79086 30 9 30Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 44C32.2091 44 34 42.2091 34 40C34 37.7909 32.2091 36 30 36C27.7909 36 26 37.7909 26 40C26 42.2091 27.7909 44 30 44Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M51 30C53.2091 30 55 28.2091 55 26C55 23.7909 53.2091 22 51 22C48.7909 22 47 23.7909 47 26C47 28.2091 48.7909 30 51 30Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 19.27C32.2091 19.27 34 17.4792 34 15.27C34 13.0609 32.2091 11.27 30 11.27C27.7909 11.27 26 13.0609 26 15.27C26 17.4792 27.7909 19.27 30 19.27Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23.9902 24.3901C23.9902 24.1101 24.0002 23.6201 24.0002 23.3401C24.0002 21.1301 26.6902 19.3401 30.0002 19.3401C33.3102 19.3401 36.0002 21.1301 36.0002 23.3401C36.0002 23.6101 36.0302 24.3601 36.0302 24.6501"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M42.6698 19.31L42.5898 24.63C42.4398 25.04 42.0098 25.31 41.5298 25.31H18.4598C17.9798 25.31 17.5498 25.03 17.3998 24.63L17.3398 19.31V13L17.3998 7.68C17.5498 7.27 17.9798 7 18.4598 7H41.5198C41.9998 7 42.4298 7.28 42.5798 7.68L42.6598 13V19.31H42.6698Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 54V50C23 47.79 24.79 46 27 46H33C35.21 46 37 47.79 37 50V54"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function GroupMeetingIconWithAccent(props: BrandIconProps) {
  return (
    <StyledGroupMeetingIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
