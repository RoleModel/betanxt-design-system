import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledGlobePersonIcon = styled(GlobePersonIcon)<{
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

function GlobePersonIcon({
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
      className={`GlobePersonIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M43 55V44.5C43 42.53 41.73 40.78 39.87 40.16L36 39L30 45L24 39L20.13 40.16C18.26 40.78 17 42.53 17 44.5V55"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M22 47V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M38 47V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M48.9695 15H11.0195" strokeWidth="2" strokeLinejoin="round" />
      <path d="M30 5V23" strokeWidth="2" strokeLinejoin="round" />
      <path d="M53.0002 28H36.7002" strokeWidth="2" strokeLinejoin="round" />
      <path d="M23.29 28H7" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M46.92 43.53C50.95 39.15 53.31 33.23 52.96 26.73C52.34 15.21 43 5.77999 31.49 5.04999C18.11 4.19999 7 14.8 7 28C7 34 9.30999 39.45 13.08 43.54"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.83 37.17C43.58 34.36 44 31.26 44 28C44 15.3 37.73 5 30 5C22.27 5 16 15.3 16 28C16 31.26 16.42 34.36 17.17 37.17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.8703 28.6399C37.7903 33.5799 33.5403 37.8099 28.6103 36.8599C25.8603 36.3299 23.6403 34.0999 23.1203 31.3499C22.2003 26.4099 26.4503 22.1799 31.3803 23.1299C34.1303 23.6599 36.3503 25.8799 36.8703 28.6399Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function GlobePersonIconWithAccent(props: BrandIconProps) {
  return (
    <StyledGlobePersonIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
