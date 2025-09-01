import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledLayersStackIcon = styled(LayersStackIcon)<{
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

function LayersStackIcon({
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
      className={`LayersStackIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M20 21.0699H30V11.01C30 9.90001 29.11 9 28 9H8C6.9 9 6 9.90001 6 11.01V31.13C6 32.24 6.9 33.14 8 33.14H18V23.08C18 21.97 18.9 21.0699 20 21.0699Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.9998 42.5298C30.9998 41.6498 31.3397 40.8298 31.9597 40.2098C32.5797 39.5898 33.3997 39.2499 34.2697 39.2499C35.1397 39.2499 35.9597 39.5898 36.5797 40.2098L40.3997 44.0498L42.0098 42.4298V23.0798C42.0098 21.9698 41.1198 21.0698 40.0098 21.0698H20.0098C18.9098 21.0698 18.0098 21.9698 18.0098 23.0798V43.1998C18.0098 44.3098 18.9098 45.2098 20.0098 45.2098H32.3297L31.9698 44.8499C31.3498 44.2299 31.0098 43.4098 31.0098 42.5298H30.9998Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.3903 51.98C39.5203 51.98 38.7002 51.64 38.0802 51.02L31.9503 44.85C31.3303 44.23 30.9902 43.4099 30.9902 42.5299C30.9902 41.6499 31.3303 40.83 31.9503 40.21C32.5703 39.59 33.3903 39.25 34.2603 39.25C35.1303 39.25 35.9503 39.59 36.5703 40.21L40.3903 44.0499L47.4302 36.97C48.0502 36.35 48.8702 36.01 49.7402 36.01C50.6102 36.01 51.4302 36.35 52.0502 36.97C52.6702 37.59 53.0002 38.4099 53.0002 39.2899C53.0002 40.1699 52.6603 40.99 52.0403 41.61L42.6902 51.02C42.0702 51.64 41.2502 51.98 40.3802 51.98H40.3903Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function LayersStackIconWithAccent(props: BrandIconProps) {
  return (
    <StyledLayersStackIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
