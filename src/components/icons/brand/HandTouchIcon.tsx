import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledHandTouchIcon = styled(HandTouchIcon)<{
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

function HandTouchIcon({
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
      className={`HandTouchIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M32.0404 12H31.9404V26H32.0404V12Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.0502 18H26.9502V22H27.0502V18Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.06 16H21.96V26H22.06V16Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0697 14H16.9697V26H17.0697V14Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.0902 20H11.9902V26H12.0902V20Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7.09999 22H7V26H7.09999V22Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.0199 14H41.9199V26H42.0199V14Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47.0101 12H46.9102V26H47.0101V12Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52.0004 18H51.9004V26H52.0004V18Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.0297 6H36.9297V26H37.0297V6Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.9796 38.09V33.29C38.9796 31.97 37.8996 30.89 36.5896 30.89C35.2796 30.89 34.1996 31.97 34.1996 33.29V37.29V31.49C34.1996 30.17 33.1196 29.09 31.8096 29.09C30.4996 29.09 29.4196 30.17 29.4196 31.49V37.29V24.41C29.4196 23.09 28.3396 22.01 27.0296 22.01C25.7196 22.01 24.6396 23.09 24.6396 24.41V40.29C21.2496 35.39 18.2096 35.19 16.3596 36.19C15.0596 36.89 15.0596 38.49 15.0596 38.49C15.0596 38.49 18.5196 41.58 20.6496 44.99C22.0196 47.2 23.3196 48.86 25.0496 50.59C26.7796 52.33 28.9296 54 32.4196 54C39.0096 54 43.7996 49.1 43.7996 43.8V35.69C43.7996 34.37 42.7196 33.29 41.4096 33.29C40.0996 33.29 39.0196 34.37 39.0196 35.69V38.09H38.9796Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function HandTouchIconWithAccent(props: BrandIconProps) {
  return (
    <StyledHandTouchIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
