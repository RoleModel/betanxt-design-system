import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledStarBadgeIcon = styled(StarBadgeIcon)<{
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

function StarBadgeIcon({
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
      className={`StarBadgeIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30 13.0699L37.42 7L39.88 16.2999L49.42 15.78L45.98 24.76L54 29.99L45.98 35.22L49.42 44.2L39.88 43.6899L37.42 52.99L30 46.9199L22.59 52.99L20.13 43.6899L10.59 44.2L14.02 35.22L6 29.99L14.02 24.76L10.59 15.78L20.13 16.2999L22.59 7L30 13.0699Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 20.1699L21 32.26H30L28.5 39.8199L39 27.73H30L31.5 20.1699Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function StarBadgeIconWithAccent(props: BrandIconProps) {
  return (
    <StyledStarBadgeIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
