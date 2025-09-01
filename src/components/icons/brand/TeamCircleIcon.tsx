import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTeamCircleIcon = styled(TeamCircleIcon)<{
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

function TeamCircleIcon({
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
      className={`TeamCircleIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M35 40C37.21 40 39 38.21 39 36V25C39 23.49 38.03 22.14 36.59 21.66L34 21L30 25L26 21L23.41 21.66C21.97 22.14 21 23.49 21 25V36C21 38.21 22.79 40 25 40"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 19C32.2091 19 34 17.2091 34 15C34 12.7909 32.2091 11 30 11C27.7908 11 26 12.7909 26 15C26 17.2091 27.7908 19 30 19Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M35 27V56C35 56.55 34.55 57 34 57H26C25.45 57 25 56.55 25 56V27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 40V57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M44 19C46.2091 19 48 17.2091 48 15C48 12.7909 46.2091 11 44 11C41.7909 11 40 12.7909 40 15C40 17.2091 41.7909 19 44 19Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M49 27V52C49 52.55 48.55 53 48 53H40C39.45 53 39 52.55 39 52V43"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M44 37V53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 19C18.2091 19 20 17.2091 20 15C20 12.7909 18.2091 11 16 11C13.7909 11 12 12.7909 12 15C12 17.2091 13.7909 19 16 19Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M21 43V52C21 52.55 20.55 53 20 53H12C11.45 53 11 52.55 11 52V27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 37V53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M49 38C51.21 38 53 36.21 53 34V25C53 23.49 52.03 22.14 50.59 21.66L48 21L44 25L40 21L37.41 21.66C37.27 21.71 37.13 21.77 37 21.83"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 21.83C22.87 21.77 22.73 21.71 22.59 21.66L20 21L16 25L12 21L9.41 21.66C7.97 22.13 7 23.49 7 25V34C7 36.21 8.79 38 11 38"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M33.5 7.93997L35.5 4.46997"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.0596 10.5L39.5196 8.5"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.4697 8.5L23.9297 10.5"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.5 4.46997L26.5 7.93997"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 3V7"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamCircleIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamCircleIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
