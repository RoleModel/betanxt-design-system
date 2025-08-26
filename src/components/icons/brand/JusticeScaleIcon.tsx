import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledJusticeScaleIcon = styled(JusticeScaleIcon)<{
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

function JusticeScaleIcon({
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
      className={`JusticeScaleIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M24 57C23.45 57 23 56.55 23 56V22C23 20.34 21.66 19 20 19H9C7.9 19 7 18.1 7 17C7 15.9 7.9 15 9 15H25L30 20L35 15H51C52.1 15 53 15.9 53 17C53 18.1 52.1 19 51 19H40C38.34 19 37 20.34 37 22V56C37 56.55 36.55 57 36 57H24Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M30 37V57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M30 20V31" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M30 13C32.7614 13 35 10.7614 35 8C35 5.23858 32.7614 3 30 3C27.2386 3 25 5.23858 25 8C25 10.7614 27.2386 13 30 13Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M23 31H37" strokeWidth="2" strokeLinejoin="round" />
      <path d="M3 31L9 19L15 31" strokeWidth="2" strokeLinejoin="round" />
      <path d="M45 31L51 19L57 31" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M15 31C15 34.31 12.31 37 9 37C5.69 37 3 34.31 3 31H15Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M57 31C57 34.31 54.31 37 51 37C47.69 37 45 34.31 45 31H57Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function JusticeScaleIconWithAccent(props: BrandIconProps) {
  return (
    <StyledJusticeScaleIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
