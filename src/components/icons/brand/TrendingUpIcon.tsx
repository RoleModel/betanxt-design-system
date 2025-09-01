import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTrendingUpIcon = styled(TrendingUpIcon)<{
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

function TrendingUpIcon({
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
      className={`TrendingUpIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M50 52.99H42V17H39L46 7L53 17H50V52.99Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18 52.99H10V41H7L14 31L21 41H18V52.99Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 52.99H26V29H23L30 19L37 29H34V52.99Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54 52.98H6V53H54V52.98Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TrendingUpIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTrendingUpIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
