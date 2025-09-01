import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledGlobeStandIcon = styled(GlobeStandIcon)<{
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

function GlobeStandIcon({
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
      className={`GlobeStandIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M17 55V44.5C17 42.53 18.26 40.78 20.13 40.16L24 39L30 45L36 39L39.87 40.16C41.74 40.78 43 42.53 43 44.5V55"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38 47V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 47V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M11.0303 15H48.9702" strokeWidth="2" strokeLinejoin="round" />
      <path d="M30 5V19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M7 28H19" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M41 28H53" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M13.0801 43.54C9.05009 39.16 6.69005 33.23 7.04005 26.73C7.66005 15.21 17.0001 5.77992 28.5101 5.04992C41.8901 4.20992 53.0001 14.8 53.0001 28C53.0001 34 50.6901 39.45 46.9201 43.54"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.17 37.17C16.42 34.36 16 31.26 16 28C16 15.3 22.27 5 30 5C37.73 5 44 15.3 44 28C44 31.26 43.58 34.36 42.83 37.17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 37C33.866 37 37 33.866 37 30C37 26.134 33.866 23 30 23C26.134 23 23 26.134 23 30C23 33.866 26.134 37 30 37Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function GlobeStandIconWithAccent(props: BrandIconProps) {
  return (
    <StyledGlobeStandIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
