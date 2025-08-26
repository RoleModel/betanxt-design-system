import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTargetCrosshairIcon = styled(TargetCrosshairIcon)<{
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

function TargetCrosshairIcon({
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
      className={`TargetCrosshairIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M8.01652 36V42.25C8.01652 44.45 9.81653 46.25 12.0165 46.25H16.1365C17.2365 46.25 18.1365 47.15 18.1365 48.25V54H37.8965V37.49C41.6365 34.19 44.0065 29.38 44.0065 24C44.0065 14.06 35.9465 6 26.0065 6C16.0665 6 8.00652 14.06 8.00652 24L3.28651 31.86C2.62651 32.96 3.15653 34.38 4.36653 34.79L7.99651 36H8.01652Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0166 34C32.0917 34 37.0166 29.0751 37.0166 23C37.0166 16.9249 32.0917 12 26.0166 12C19.9415 12 15.0166 16.9249 15.0166 23C15.0166 29.0751 19.9415 34 26.0166 34Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0166 29C22.7066 29 20.0166 26.31 20.0166 23C20.0166 19.69 22.7066 17 26.0166 17C29.3266 17 32.0166 19.69 32.0166 23C32.0166 26.31 29.3266 29 26.0166 29Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.0166 24C25.4666 24 25.0166 23.55 25.0166 23C25.0166 22.45 25.4666 22 26.0166 22C26.5666 22 27.0166 22.45 27.0166 23C27.0166 23.55 26.5666 24 26.0166 24Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.007 23.0499H26.007C26.007 23.0499 25.957 23.03 25.957 23C25.957 22.97 25.977 22.95 26.007 22.95H53.007C53.007 22.95 53.057 22.97 53.057 23C53.057 23.03 53.037 23.0499 53.007 23.0499Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.0068 23H45.0068L49.0068 17H57.0068L53.0068 23Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M57.0068 29H49.0068L45.0068 23H53.0068L57.0068 29Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TargetCrosshairIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTargetCrosshairIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
