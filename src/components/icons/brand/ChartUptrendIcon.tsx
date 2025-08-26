import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledChartUptrendIcon = styled(ChartUptrendIcon)<{
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

function ChartUptrendIcon({
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
      className={`ChartUptrendIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M11 33L24 20L30 26L38 18L42 22L47 17L43 13L57 11L55 25L51 21L42 30L38 26L30 34L24 28L13 39"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M7 9V51H55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M49 29V47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M55 29V47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M43 34V47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 33V47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M31 38V47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M25 35V47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 39V47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13 43V47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 15H7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 21H7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 27H7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 33H7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 39H7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M3 45H7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M19 11H15C13.9 11 13 11.9 13 13C13 14.1 13.9 15 15 15H17C18.1 15 19 15.9 19 17C19 18.1 18.1 19 17 19H13"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M16 9V11" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M16 19V21" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  )
}

export default function ChartUptrendIconWithAccent(props: BrandIconProps) {
  return (
    <StyledChartUptrendIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
