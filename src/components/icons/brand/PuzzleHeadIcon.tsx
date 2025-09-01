import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledPuzzleHeadIcon = styled(PuzzleHeadIcon)<{
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

function PuzzleHeadIcon({
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
      className={`PuzzleHeadIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30.0005 53V42.41C30.0005 41.02 28.6205 40.06 27.3205 40.53C26.5005 40.83 25.6805 41 25.0005 41C22.7905 41 21.0005 39.21 21.0005 37C21.0005 34.79 22.7905 33 25.0005 33C25.6805 33 26.5005 33.17 27.3205 33.47C28.6205 33.94 30.0005 32.98 30.0005 31.59V26.41C30.0005 25.02 31.3805 24.06 32.6805 24.53C33.5005 24.83 34.3205 25 35.0005 25C37.2105 25 39.0005 23.21 39.0005 21C39.0005 18.79 37.2105 17 35.0005 17C34.3205 17 33.5005 17.17 32.6805 17.47C31.3805 17.94 30.0005 16.98 30.0005 15.59V7H25.0005C15.6105 7 8.00046 14.61 8.00046 24C8.00046 24.38 8.03046 24.75 8.06046 25.12L1.59049 31.59C0.330487 32.85 1.22046 35 3.00046 35H7.00046V43C7.00046 45.21 8.79046 47 11.0005 47H17.0005V53"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34 7H35C44.39 7 52 14.61 52 24C52 24.38 51.97 24.75 51.94 25.12L58.41 31.59C59.67 32.85 58.78 35 57 35H53V43C53 45.21 51.21 47 49 47H43V53"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PuzzleHeadIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPuzzleHeadIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
