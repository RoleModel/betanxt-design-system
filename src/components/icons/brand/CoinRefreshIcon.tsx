import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledCoinRefreshIcon = styled(CoinRefreshIcon)<{
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

function CoinRefreshIcon({
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
      className={`CoinRefreshIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M29.9999 49C24.7499 49 20.01 46.86 16.58 43.42L20.1 39.9L5.95996 37.07L8.78998 51.21L12.34 47.66C16.86 52.18 23.0999 54.99 30.0099 54.99C43.8199 54.99 55.0099 43.8 55.0099 29.99C55.0099 29.73 54.9999 29.48 54.9899 29.23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="33.9502" cy="48.59" r="1" fill="var(--stroke-color)" />
      <circle cx="38.0303" cy="47.22" r="1" fill="var(--stroke-color)" />
      <circle cx="41.7002" cy="44.97" r="1" fill="var(--stroke-color)" />
      <circle cx="44.7598" cy="41.96" r="1" fill="var(--stroke-color)" />
      <circle cx="47.0801" cy="38.33" r="1" fill="var(--stroke-color)" />
      <circle cx="48.5098" cy="34.27" r="1" fill="var(--stroke-color)" />
      <circle cx="49" cy="30" r="1" fill="var(--stroke-color)" />
      <path
        d="M30 11C35.25 11 39.99 13.13 43.43 16.57L39.9 20.1L54.04 22.93L51.21 8.78998L47.67 12.33C43.15 7.80996 36.9 5 30 5C16.19 5 5 16.19 5 30C5 30.26 5.01002 30.51 5.02002 30.76"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="26.0498" cy="11.4199" r="1" fill="var(--stroke-color)" />
      <circle cx="21.9697" cy="12.78" r="1" fill="var(--stroke-color)" />
      <circle cx="18.2998" cy="15.03" r="1" fill="var(--stroke-color)" />
      <circle cx="15.2305" cy="18.04" r="1" fill="var(--stroke-color)" />
      <circle cx="12.9199" cy="21.6699" r="1" fill="var(--stroke-color)" />
      <circle cx="11.4805" cy="25.73" r="1" fill="var(--stroke-color)" />
      <circle cx="11" cy="30" r="1" fill="var(--stroke-color)" />
      <path
        d="M34 24H29C27.34 24 26 25.34 26 27C26 28.66 27.34 30 29 30H31C32.66 30 34 31.34 34 33C34 34.66 32.66 36 31 36H26"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 24V21"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 39V36"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function CoinRefreshIconWithAccent(props: BrandIconProps) {
  return (
    <StyledCoinRefreshIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
