import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledPersonCelebrateIcon = styled(PersonCelebrateIcon)<{
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

function PersonCelebrateIcon({
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
      className={`PersonCelebrateIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30.0127 15C32.7741 15 35.0127 12.7614 35.0127 10C35.0127 7.23858 32.7741 5 30.0127 5C27.2512 5 25.0127 7.23858 25.0127 10C25.0127 12.7614 27.2512 15 30.0127 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30.0127 39V55"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.0127 21L49.0127 45H40.0127"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.0127 21L11.0127 45H20.0127"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.0127 32V33"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.0127 24V23"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.8123 24.53L30.4323 24.09C29.6423 23.84 28.7723 24.12 28.3123 24.79C27.7423 25.61 27.9723 26.71 28.8223 27.25L31.1823 28.76C32.0323 29.3 32.2622 30.4 31.6922 31.21C31.2322 31.88 30.3623 32.16 29.5723 31.91L28.1922 31.47"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.0125 22.0001L48.3925 9.62006C49.2225 8.79006 49.2225 7.45006 48.3925 6.62006C47.5625 5.79006 46.2225 5.79006 45.3925 6.62006L34.2525 17.7601C31.9125 20.1001 28.1125 20.1001 25.7625 17.7601L14.6225 6.62006C13.7925 5.79006 12.4525 5.79006 11.6225 6.62006C10.7925 7.45006 10.7925 8.79006 11.6225 9.62006L24.0025 22.0001V54.0001C24.0025 54.5501 24.4525 55.0001 25.0025 55.0001H35.0025C35.5525 55.0001 36.0025 54.5501 36.0025 54.0001V22.0001H36.0125Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PersonCelebrateIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPersonCelebrateIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
