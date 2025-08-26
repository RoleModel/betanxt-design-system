import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledGlobeNetworkIcon = styled(GlobeNetworkIcon)<{
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

function GlobeNetworkIcon({
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
      className={`GlobeNetworkIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30 43C32.7614 43 35 40.7614 35 38C35 35.2386 32.7614 33 30 33C27.2386 33 25 35.2386 25 38C25 40.7614 27.2386 43 30 43Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M44 37C46.7614 37 49 34.7614 49 32C49 29.2386 46.7614 27 44 27C41.2386 27 39 29.2386 39 32C39 34.7614 41.2386 37 44 37Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M41 57V49.88C41 48.16 39.9 46.63 38.26 46.09L35 45L30 50L25 45L21.73 46.09C20.1 46.63 19 48.16 19 49.88V57"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 51V43.88C55 42.16 53.9 40.63 52.26 40.09L49 39L44 44L39 39"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52.4498 17H7.5498"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 3V29" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M43.8104 23C42.5004 11.59 36.8204 3 30.0004 3C23.1804 3 17.5004 11.59 16.1904 23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M23 51V57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 51V57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M51 45V51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 37C18.7614 37 21 34.7614 21 32C21 29.2386 18.7614 27 16 27C13.2386 27 11 29.2386 11 32C11 34.7614 13.2386 37 16 37Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5 51V43.88C5 42.16 6.10001 40.63 7.73001 40.09L11 39L16 44L21 39"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M9 45V51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M53.66 36C54.51 33.49 55 30.8 55 28C55 14.19 43.81 3 30 3C16.19 3 5 14.19 5 28C5 30.8 5.49 33.49 6.34 36"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function GlobeNetworkIconWithAccent(props: BrandIconProps) {
  return (
    <StyledGlobeNetworkIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
