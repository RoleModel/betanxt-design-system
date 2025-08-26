import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTeamClockIcon = styled(TeamClockIcon)<{
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

function TeamClockIcon({
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
      className={`TeamClockIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M21 38C23.21 38 25 36.21 25 34V21.23C25 19.72 24.02 18.37 22.59 17.89C21.94 17.67 20 17 20 17L15 22L10 17C10 17 8.06 17.67 7.41 17.89C5.98 18.37 5 19.72 5 21.23V34C5 36.21 6.79 38 9 38"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15 15C17.7614 15 20 12.7614 20 10C20 7.23858 17.7614 5 15 5C12.2386 5 10 7.23858 10 10C10 12.7614 12.2386 15 15 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M21 25V54C21 54.55 20.55 55 20 55H10C9.45 55 9 54.55 9 54V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 37V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M40 33C40 31.34 38.66 30 37 30H35C33.34 30 32 31.34 32 33C32 34.66 33.34 36 35 36H37C38.66 36 40 37.34 40 39C40 40.66 38.66 42 37 42H35C33.34 42 32 40.66 32 39"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 30V27"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 45V42"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.9997 51.47C28.0997 53.69 31.8897 55 35.9997 55C46.4897 55 54.9997 46.49 54.9997 36C54.9997 25.51 46.4897 17 35.9997 17C31.8597 17 28.0497 18.33 24.9297 20.58"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamClockIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamClockIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
