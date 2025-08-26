import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledGaugeDashboardIcon = styled(GaugeDashboardIcon)<{
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

function GaugeDashboardIcon({
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
      className={`GaugeDashboardIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M32.9504 42.79C31.3204 44.41 28.6904 44.41 27.0604 42.79C25.4304 41.17 25.4304 38.5499 27.0604 36.9299C28.1604 35.8399 40.2004 26.5399 47.9004 20.6099C48.8704 19.8699 50.1104 21.0999 49.3604 22.0599C43.4004 29.7199 34.0504 41.69 32.9504 42.78V42.79Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.09 41.9399C5.94 41.9399 5 41.01 5 39.86C5 36.5 5.65999 33.2499 6.95999 30.1799C8.21999 27.2199 10.02 24.56 12.32 22.28C14.62 20 17.29 18.2 20.27 16.95C23.35 15.65 26.63 15 30 15C34.92 15 39.7 16.44 43.82 19.16V19.1799C39.7 16.4599 34.92 15.02 30 15.02C26.63 15.02 23.36 15.68 20.28 16.97C17.31 18.22 14.63 20.01 12.34 22.29C10.05 24.57 8.23999 27.2299 6.98999 30.1899C5.68999 33.2499 5.03 36.5 5.03 39.86C5.03 41 5.96001 41.92 7.10001 41.92C8.24001 41.92 9.17001 41 9.17001 39.86C9.17001 29.58 17.58 21.21 27.92 21.21C31.33 21.21 34.69 22.1499 37.63 23.9399V23.96C34.68 22.18 31.32 21.23 27.92 21.23C17.59 21.23 9.19 29.59 9.19 39.86C9.19 41.01 8.25001 41.9399 7.10001 41.9399H7.09Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.8296 44.0099C48.5296 44.0099 46.6496 42.1499 46.6496 39.8599C46.6496 37.5699 46.2096 35.2999 45.3496 33.0999H45.3696C46.2296 35.2899 46.6696 37.5599 46.6696 39.8599C46.6696 42.1599 48.5296 43.9899 50.8296 43.9899C53.1296 43.9899 54.9896 42.1399 54.9896 39.8599C54.9896 34.9699 53.5396 30.2199 50.8096 26.1299H50.8296C53.5696 30.2099 55.0196 34.9599 55.0196 39.8599C55.0196 42.1499 53.1496 44.0099 50.8396 44.0099H50.8296Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function GaugeDashboardIconWithAccent(props: BrandIconProps) {
  return (
    <StyledGaugeDashboardIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
