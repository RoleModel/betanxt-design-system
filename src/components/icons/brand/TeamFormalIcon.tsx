import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTeamFormalIcon = styled(TeamFormalIcon)<{
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

function TeamFormalIcon({
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
      className={`TeamFormalIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30 21C32.2091 21 34 19.2091 34 17C34 14.7909 32.2091 13 30 13C27.7909 13 26 14.7909 26 17C26 19.2091 27.7909 21 30 21Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 21C14.2091 21 16 19.2091 16 17C16 14.7909 14.2091 13 12 13C9.79086 13 8 14.7909 8 17C8 19.2091 9.79086 21 12 21Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M21 13C23.2091 13 25 11.2091 25 9C25 6.79086 23.2091 5 21 5C18.7909 5 17 6.79086 17 9C17 11.2091 18.7909 13 21 13Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M39 13C41.2091 13 43 11.2091 43 9C43 6.79086 41.2091 5 39 5C36.7909 5 35 6.79086 35 9C35 11.2091 36.7909 13 39 13Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M48 21C50.2091 21 52 19.2091 52 17C52 14.7909 50.2091 13 48 13C45.7909 13 44 14.7909 44 17C44 19.2091 45.7909 21 48 21Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M53 40C55.21 40 57 38.21 57 36V27C57 25.49 56.03 24.14 54.59 23.66L52 23L48 27L44 23L41.41 23.66C39.98 24.14 39 25.49 39 27V36C39 38.21 40.79 40 43 40"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M53 29V54C53 54.55 52.55 55 52 55H44C43.45 55 43 54.55 43 54V29"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M48 42V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M35 40C37.21 40 39 38.21 39 36V27C39 25.49 38.03 24.14 36.59 23.66L34 23L30 27L26 23L23.41 23.66C21.98 24.14 21 25.49 21 27V36C21 38.21 22.79 40 25 40"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M35 29V54C35 54.55 34.55 55 34 55H26C25.45 55 25 54.55 25 54V29"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 42V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17 40C19.21 40 21 38.21 21 36V27C21 25.49 20.03 24.14 18.59 23.66L16 23L12 27L8 23L5.41 23.66C3.98 24.14 3 25.49 3 27V36C3 38.21 4.79 40 7 40"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17 29V54C17 54.55 16.55 55 16 55H8C7.45 55 7 54.55 7 54V29"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 42V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  )
}

export default function TeamFormalIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamFormalIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
