import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledMagnifyingGlassIcon = styled(MagnifyingGlassIcon)<{
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

function MagnifyingGlassIcon({
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
      className={`MagnifyingGlassIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M47.2025 40.7875C39.4725 48.5175 26.9425 48.5175 19.2125 40.7875C11.4825 33.0575 11.4825 20.5275 19.2125 12.7975C26.9425 5.0675 39.4725 5.0675 47.2025 12.7975C54.9325 20.5275 54.9325 33.0575 47.2025 40.7875Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.2191 40.7733L16.4199 43.5745L16.4341 43.5886L19.2332 40.7875L19.2191 40.7733Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.0125 51.9777C6.6625 50.6277 6.6625 48.4277 8.0125 47.0777L11.5125 43.5777C12.8625 42.2277 15.0625 42.2277 16.4125 43.5777C17.7625 44.9277 17.7625 47.1277 16.4125 48.4777L12.9125 51.9777C11.5625 53.3277 9.3625 53.3277 8.0125 51.9777Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.7129 17.0374L24.2129 29.0374H33.2129L31.7129 36.5374L42.2129 24.5374H33.2129L34.7129 17.0374Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function MagnifyingGlassIconWithAccent(props: BrandIconProps) {
  return (
    <StyledMagnifyingGlassIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
