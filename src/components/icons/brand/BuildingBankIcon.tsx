import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledBuildingBankIcon = styled(BuildingBankIcon)<{
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

function BuildingBankIcon({
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
      className={`BuildingBankIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M52 49H8C7.44772 49 7 49.4477 7 50V54C7 54.5523 7.44772 55 8 55H52C52.5523 55 53 54.5523 53 54V50C53 49.4477 52.5523 49 52 49Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 21L30 5L53 21V26C53 26.55 52.55 27 52 27H8C7.45 27 7 26.55 7 26V21Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M13 31V49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M24 31V49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M47 31V49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M36 31V49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M33 13H29C27.9 13 27 13.9 27 15C27 16.1 27.9 17 29 17H31C32.1 17 33 17.9 33 19C33 20.1 32.1 21 31 21H27"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 11V13"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 21V23"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function BuildingBankIconWithAccent(props: BrandIconProps) {
  return (
    <StyledBuildingBankIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
