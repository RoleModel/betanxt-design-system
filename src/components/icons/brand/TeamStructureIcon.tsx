import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTeamStructureIcon = styled(TeamStructureIcon)<{
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

function TeamStructureIcon({
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
      className={`TeamStructureIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M15 15C17.7614 15 20 12.7614 20 10C20 7.23858 17.7614 5 15 5C12.2386 5 10 7.23858 10 10C10 12.7614 12.2386 15 15 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M15 37V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M45 15C47.7614 15 50 12.7614 50 10C50 7.23858 47.7614 5 45 5C42.2386 5 40 7.23858 40 10C40 12.7614 42.2386 15 45 15Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M45 37V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M51.0002 38.0001C53.2102 38.0001 55.0002 36.2101 55.0002 34.0001V21.7101C55.0002 20.0801 54.0001 18.6001 52.4801 18.0001L50.0002 17.0101L45.0002 22.0101L31.5402 5.7301L31.4102 5.6001"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32.54 13.51L39 21.8V54C39 54.55 39.45 55 40 55H50C50.55 55 51 54.55 51 54V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 24.9999V53.9999C9 54.5499 9.45 54.9999 10 54.9999H20C20.55 54.9999 21 54.5499 21 53.9999V21.7999L31.58 8.22991C32.2 7.42991 32.13 6.2999 31.41 5.5899C30.58 4.7499 29.21 4.8199 28.46 5.7199L15 21.9999L10 16.9999L7.51001 17.9899C5.99001 18.5999 5 20.0699 5 21.6999V33.9899C5 36.1999 6.79 37.9899 9 37.9899"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamStructureIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamStructureIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
