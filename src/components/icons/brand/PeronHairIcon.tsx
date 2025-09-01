import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledPeronHairIcon = styled(PeronHairIcon)<{
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

function PeronHairIcon({
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
      className={`PeronHairIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M35.5 13.7H24.5C21.48 13.7 19 16.2 19 19.25C19 26.41 24.61 32.21 30 32.21C35.39 32.21 41 26.41 41 19.25C41 16.2 38.52 13.7 35.5 13.7Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.8 54.9901H8V48.8801C8 42.7701 12.7 38.4201 19 36.8501L22.67 35.92C24.05 35.42 25.42 34.2601 25.42 32.2201V30.8601C26.87 31.7201 28.45 32.2201 30 32.2201C31.55 32.2201 33.13 31.7201 34.58 30.8601V32.2201C34.58 34.2601 35.92 35.39 37.33 35.92L41 36.8501C47.3 38.4201 52 42.7701 52 48.8801V54.9901H43.2M16.8 54.9901V48.8801M16.8 54.9901H43.2M43.2 54.9901V48.8801"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 19.2599C41 16.2099 38.52 13.71 35.5 13.71H24.5C21.48 13.71 19 16.2099 19 19.2599C19 19.2599 16.59 6.57999 26.45 5.92999C29.19 5.74999 32.7801 8.31995 35.8801 8.31995C38.9801 8.31995 41 5 41 5V19.25V19.2599Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29.9999 43.96L27.1699 41.1L29.9999 38.24L32.8299 41.1L29.9999 43.96Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 38.25L25.23 33.4299C24.81 34.7299 23.75 35.5299 22.67 35.9199C22.67 35.9199 21.84 36.13 21.04 36.33L26.47 41.8099L30.01 38.24L30 38.25Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.0002 38.25L34.7702 33.4299C35.1902 34.7299 36.2502 35.5299 37.3302 35.9199C37.3302 35.9199 38.1602 36.13 38.9602 36.33L33.5302 41.8099L29.9902 38.24L30.0002 38.25Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.6699 54.9799H33.3299L31.3299 43.1199H30.8299L29.9999 43.9598L29.1699 43.1199H28.6699L26.6699 54.9799Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PeronHairIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPeronHairIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
