import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledPieChartIcon = styled(PieChartIcon)<{
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

function PieChartIcon({
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
      className={`PieChartIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M55 27C55 14.85 45.15 5 33 5V27H55Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 29H15C13.9 29 13 29.9 13 31C13 32.1 13.9 33 15 33H17C18.1 33 19 33.9 19 35C19 36.1 18.1 37 17 37H13"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 26V29"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 37V40"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27 55C14.85 55 5 45.15 5 33C5 20.85 14.85 11 27 11V55Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M27 55C39.15 55 49 45.15 49 33H27V55Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PieChartIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPieChartIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
