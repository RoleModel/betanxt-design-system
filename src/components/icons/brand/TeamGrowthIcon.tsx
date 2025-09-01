import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTeamGrowthIcon = styled(TeamGrowthIcon)<{
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

function TeamGrowthIcon({
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
      className={`TeamGrowthIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30.0098 43C32.7712 43 35.0098 40.7614 35.0098 38C35.0098 35.2386 32.7712 33 30.0098 33C27.2483 33 25.0098 35.2386 25.0098 38C25.0098 40.7614 27.2483 43 30.0098 43Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M45.0098 37C47.7712 37 50.0098 34.7614 50.0098 32C50.0098 29.2386 47.7712 27 45.0098 27C42.2483 27 40.0098 29.2386 40.0098 32C40.0098 34.7614 42.2483 37 45.0098 37Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M15.0098 37C17.7712 37 20.0098 34.7614 20.0098 32C20.0098 29.2386 17.7712 27 15.0098 27C12.2483 27 10.0098 29.2386 10.0098 32C10.0098 34.7614 12.2483 37 15.0098 37Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M37.0098 55C38.6698 55 40.0098 53.66 40.0098 52V49C40.0098 47.49 39.0298 46.38 37.5998 45.89C36.9498 45.67 35.0098 45 35.0098 45L30.0098 50L25.0098 45C25.0098 45 23.0698 45.67 22.4198 45.89C20.9898 46.37 20.0098 47.49 20.0098 49V52C20.0098 53.66 21.3498 55 23.0098 55H37.0098Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19.0098 23L25.0098 29L33.0098 21L37.0098 25L47.0098 15L51.0098 19L53.0098 5L39.0098 7L43.0098 11L37.0098 17L33.0098 13L25.0098 21L19.0098 15L7.00977 27"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.0096 49H52.0096C53.6696 49 55.0096 47.66 55.0096 46V43C55.0096 41.49 54.0297 40.38 52.5997 39.89C51.9497 39.67 50.0096 39 50.0096 39L45.0096 44L40.0096 39L38.8896 39.39"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.1201 39.38L20 39L15 44L10 39C10 39 8.06003 39.67 7.41003 39.89C5.98003 40.37 5 41.49 5 43V46C5 47.66 6.34 49 8 49H20"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamGrowthIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamGrowthIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
