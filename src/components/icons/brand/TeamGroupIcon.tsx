import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTeamGroupIcon = styled(TeamGroupIcon)<{
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

function TeamGroupIcon({
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
      className={`TeamGroupIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30 19C32.2091 19 34 17.2091 34 15C34 12.7909 32.2091 11 30 11C27.7909 11 26 12.7909 26 15C26 17.2091 27.7909 19 30 19Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M44 19C46.2091 19 48 17.2091 48 15C48 12.7909 46.2091 11 44 11C41.7909 11 40 12.7909 40 15C40 17.2091 41.7909 19 44 19Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M49 27V52C49 52.55 48.55 53 48 53H40C39.45 53 39 52.55 39 52V47"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M44 38V53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 19C18.2091 19 20 17.2091 20 15C20 12.7909 18.2091 11 16 11C13.7909 11 12 12.7909 12 15C12 17.2091 13.7909 19 16 19Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M21 47V52C21 52.55 20.55 53 20 53H12C11.45 53 11 52.55 11 52V27"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 38V53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 43V57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
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
      <path
        d="M25 28L21 43H25V56C25 56.55 25.45 57 26 57H34C34.55 57 35 56.55 35 56V43H39L35 28"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.0101 39.31L38.2601 39.23C40.3001 38.55 41.4401 36.37 40.8301 34.31L37.8301 23.89C37.3401 22.18 35.7802 21.01 34.0002 21.01L30.0002 26.01L26.0002 21.01C24.2202 21.01 22.6601 22.19 22.1701 23.89L19.1701 34.31C18.5601 36.38 19.7002 38.55 21.7401 39.23L21.9901 39.31"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.9999 38C51.2099 38 52.9999 36.21 52.9999 34V25.71C52.9999 24.08 51.9999 22.6 50.4799 22L47.9999 21.01L43.9999 25.01L39.9999 21.01L37.5099 22C37.2999 22.08 37.1099 22.18 36.9199 22.3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M11 38C8.79 38 7 36.21 7 34V25.71C7 24.08 7.99998 22.6 9.50998 22L12 21.01L16 25.01L20 21.01L22.48 22C22.69 22.08 22.88 22.18 23.07 22.3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamGroupIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamGroupIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
