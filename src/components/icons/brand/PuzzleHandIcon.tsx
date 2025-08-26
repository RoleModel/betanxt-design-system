import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledPuzzleHandIcon = styled(PuzzleHandIcon)<{
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

function PuzzleHandIcon({
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
      className={`PuzzleHandIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M18 50.9999C21.85 50.9999 24.23 46.4199 25.09 43.2699C25.23 42.7599 25.5 42.2899 25.87 41.9199L30.22 37.5698C31.27 36.5198 31.27 34.8299 30.22 33.7899C29.18 32.7399 27.48 32.7399 26.43 33.7899L21.98 38.2499C21.92 38.3099 21.86 38.3599 21.79 38.4099C21.01 38.9699 19.91 38.5099 19.61 37.6099L19.28 36.6299"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M7 44L9 42L20 53L18 55"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.9996 29H15.8596C14.4496 29 13.2196 29.96 12.8796 31.33L10.0596 42.77"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28 47H51C52.1 47 53 46.1 53 45V35.77C53 34.98 52.13 34.5099 51.46 34.9299C50.41 35.5999 49.16 36 48 36C45.24 36 43 33.76 43 31C43 28.24 45.24 26 48 26C49.16 26 50.41 26.3999 51.46 27.0699C52.13 27.4899 53 27.02 53 26.23V17C53 15.9 52.1 15 51 15H40.77C39.98 15 39.51 14.13 39.93 13.46C40.6 12.41 41 11.16 41 10C41 7.24 38.76 5 36 5C33.24 5 31 7.24 31 10C31 11.17 31.4 12.41 32.07 13.47C32.49 14.14 32.03 15 31.24 15H21C19.9 15 19 15.9 19 17V33"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PuzzleHandIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPuzzleHandIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
