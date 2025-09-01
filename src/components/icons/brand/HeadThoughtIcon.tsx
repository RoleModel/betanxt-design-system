import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledHeadThoughtIcon = styled(HeadThoughtIcon)<{
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

function HeadThoughtIcon({
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
      className={`HeadThoughtIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M14.0165 36V42.25C14.0165 44.45 15.8165 46.25 18.0165 46.25H22.1365C23.2365 46.25 24.1365 47.15 24.1365 48.25V54H43.8965V37.49C47.6365 34.19 50.0065 29.38 50.0065 24C50.0065 14.06 41.9465 6 32.0065 6C22.0665 6 14.0065 14.06 14.0065 24L9.28652 31.86C8.62652 32.96 9.15652 34.38 10.3665 34.79L13.9965 36H14.0165Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33.5068 13.25L23.0068 25.25H32.0068L30.5068 32.75L41.0068 20.75H32.0068L33.5068 13.25Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function HeadThoughtIconWithAccent(props: BrandIconProps) {
  return (
    <StyledHeadThoughtIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
