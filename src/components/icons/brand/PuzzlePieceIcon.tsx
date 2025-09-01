import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledPuzzlePieceIcon = styled(PuzzlePieceIcon)<{
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

function PuzzlePieceIcon({
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
      className={`PuzzlePieceIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M47.89 40.22C46.91 39.24 45.64 38.72 44.35 38.65L53 30L44.35 21.35C45.64 21.28 46.9 20.76 47.89 19.78C50.01 17.66 50.01 14.23 47.89 12.11C45.77 9.98999 42.34 9.98999 40.22 12.11C39.24 13.09 38.72 14.36 38.65 15.65L30 7L21.35 15.65C21.28 14.36 20.76 13.1 19.78 12.11C17.66 9.98999 14.23 9.98999 12.11 12.11C9.98999 14.23 9.98999 17.66 12.11 19.78C13.09 20.76 14.36 21.28 15.65 21.35L7 30L15.65 38.65C15.72 37.36 16.24 36.1 17.22 35.11C19.34 32.99 22.77 32.99 24.89 35.11C27.01 37.23 27.01 40.66 24.89 42.78C23.91 43.76 22.64 44.28 21.35 44.35L30 53L38.65 44.35C38.72 45.64 39.24 46.9 40.22 47.89C42.34 50.01 45.77 50.01 47.89 47.89C50.01 45.77 50.01 42.34 47.89 40.22Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PuzzlePieceIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPuzzlePieceIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
