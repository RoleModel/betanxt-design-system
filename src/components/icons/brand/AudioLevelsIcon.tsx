import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledAudioLevelsIcon = styled(AudioLevelsIcon)<{
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

function AudioLevelsIcon({
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
      className={`AudioLevelsIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M13 27H5V41H13V27Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 15H47V35H55V15Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 31H33V49H41V31Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M23 5V9" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 15V27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M23 35V45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M51 9V15" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 49V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M9 41V47" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M51 35V45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 15V31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M27 9H19V35H27V9Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function AudioLevelsIconWithAccent(props: BrandIconProps) {
  return (
    <StyledAudioLevelsIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
