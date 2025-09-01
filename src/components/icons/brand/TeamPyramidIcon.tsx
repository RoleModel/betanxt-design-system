import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTeamPyramidIcon = styled(TeamPyramidIcon)<{
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

function TeamPyramidIcon({
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
      className={`TeamPyramidIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30 15C32.7614 15 35 12.7614 35 10C35 7.23858 32.7614 5 30 5C27.2386 5 25 7.23858 25 10C25 12.7614 27.2386 15 30 15Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M41 27V21.88C41 20.16 39.9 18.63 38.26 18.09L35 17L30 22L25 17L21.73 18.09C20.1 18.63 19 20.16 19 21.88V27H41Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M23 23V27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M37 23V27" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14 33V29C14 27.9 14.9 27 16 27H44C45.1 27 46 27.9 46 29V33"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 27V37" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M37 55C38.1 55 39 54.1 39 53V51C39 49.49 38.03 48.14 36.59 47.66L34 47L30 51L26 47L23.41 47.66C21.98 48.13 21 49.49 21 51V53C21 54.1 21.9 55 23 55H37Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 45C32.2091 45 34 43.2091 34 41C34 38.7909 32.2091 37 30 37C27.7909 37 26 38.7909 26 41C26 43.2091 27.7909 45 30 45Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M46 41C48.2091 41 50 39.2091 50 37C50 34.7909 48.2091 33 46 33C43.7909 33 42 34.7909 42 37C42 39.2091 43.7909 41 46 41Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 41C16.2091 41 18 39.2091 18 37C18 34.7909 16.2091 33 14 33C11.7909 33 10 34.7909 10 37C10 39.2091 11.7909 41 14 41Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M43.0002 51H53.0002C54.1002 51 55.0002 50.1 55.0002 49V47C55.0002 45.49 54.0303 44.14 52.5903 43.66L50.0002 43L46.0002 47L42.0002 43L39.4102 43.66C39.0802 43.77 38.7702 43.93 38.4902 44.13"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.51 44.14C21.23 43.94 20.92 43.78 20.59 43.67L18 43.01L14 47.01L10 43.01L7.40997 43.67C5.96997 44.14 5 45.5 5 47.01V49.01C5 50.11 5.9 51.01 7 51.01H17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamPyramidIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamPyramidIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
