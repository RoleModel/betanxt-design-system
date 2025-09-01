import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledFilterFunnelIcon = styled(FilterFunnelIcon)<{
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

function FilterFunnelIcon({
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
      className={`FilterFunnelIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M48 22H12C10.8954 22 10 22.8954 10 24V25C10 26.1046 10.8954 27 12 27H48C49.1046 27 50 26.1046 50 25V24C50 22.8954 49.1046 22 48 22Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 27H13C13 34.83 19.61 42.1 26.16 44.31V53.03C26.16 53.75 26.92 54.22 27.56 53.9L33.31 50.03C33.64 49.87 33.84 49.53 33.84 49.16V44.31C40.39 42.11 46.99 34.84 46.99 27H47Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 10H28.5C27.9477 10 27.5 10.4477 27.5 11V17C27.5 17.5523 27.9477 18 28.5 18H31.5C32.0523 18 32.5 17.5523 32.5 17V11C32.5 10.4477 32.0523 10 31.5 10Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.5 6H18.5C17.9477 6 17.5 6.44772 17.5 7V10C17.5 10.5523 17.9477 11 18.5 11H21.5C22.0523 11 22.5 10.5523 22.5 10V7C22.5 6.44772 22.0523 6 21.5 6Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.5 8H38.5C37.9477 8 37.5 8.44772 37.5 9V13C37.5 13.5523 37.9477 14 38.5 14H41.5C42.0523 14 42.5 13.5523 42.5 13V9C42.5 8.44772 42.0523 8 41.5 8Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.0502 16H19.9502V22H20.0502V16Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.0502 19H39.9502V22H40.0502V19Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function FilterFunnelIconWithAccent(props: BrandIconProps) {
  return (
    <StyledFilterFunnelIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
