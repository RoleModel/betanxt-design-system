import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledMonitorDesktopIcon = styled(MonitorDesktopIcon)<{
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

function MonitorDesktopIcon({
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
      className={`MonitorDesktopIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M33.2004 44C33.2004 48.42 36.0704 52 39.6004 52H20.4004C23.9404 52 26.8004 48.42 26.8004 44H33.2004Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 40C6 42.2 7.8 44 10 44H50C52.2 44 54 42.2 54 40V36H6V40Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50 8H10C7.8 8 6 9.8 6 12V36H54V12C54 9.8 52.2 8 50 8Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.0002 40.0499H29.0002C29.0002 40.0499 28.9502 40.03 28.9502 40C28.9502 39.97 28.9702 39.95 29.0002 39.95H31.0002C31.0002 39.95 31.0502 39.97 31.0502 40C31.0502 40.03 31.0302 40.0499 31.0002 40.0499Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 30.5C17.3807 30.5 18.5 29.3807 18.5 28C18.5 26.6193 17.3807 25.5 16 25.5C14.6193 25.5 13.5 26.6193 13.5 28C13.5 29.3807 14.6193 30.5 16 30.5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24 22.5C25.3807 22.5 26.5 21.3807 26.5 20C26.5 18.6193 25.3807 17.5 24 17.5C22.6193 17.5 21.5 18.6193 21.5 20C21.5 21.3807 22.6193 22.5 24 22.5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 30.5C33.3807 30.5 34.5 29.3807 34.5 28C34.5 26.6193 33.3807 25.5 32 25.5C30.6193 25.5 29.5 26.6193 29.5 28C29.5 29.3807 30.6193 30.5 32 30.5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 18.5C45.3807 18.5 46.5 17.3807 46.5 16C46.5 14.6193 45.3807 13.5 44 13.5C42.6193 13.5 41.5 14.6193 41.5 16C41.5 17.3807 42.6193 18.5 44 18.5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2005 21.73L17.7305 26.2C17.7305 26.2 17.7804 26.25 17.8004 26.27L22.2704 21.7999C22.2704 21.7999 22.2205 21.75 22.2005 21.73Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.2704 26.2L25.8004 21.73L25.7305 21.7999L30.2005 26.27C30.2005 26.27 30.2504 26.22 30.2704 26.2Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M42.2005 17.73L33.7305 26.2C33.7305 26.2 33.7804 26.25 33.8004 26.27L42.2704 17.7999C42.2704 17.7999 42.2205 17.75 42.2005 17.73Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function MonitorDesktopIconWithAccent(props: BrandIconProps) {
  return (
    <StyledMonitorDesktopIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
