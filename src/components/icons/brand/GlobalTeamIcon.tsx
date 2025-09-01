import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledGlobalTeamIcon = styled(GlobalTeamIcon)<{
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

function GlobalTeamIcon({
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
      className={`GlobalTeamIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M43 39C45.7614 39 48 36.7614 48 34C48 31.2386 45.7614 29 43 29C40.2386 29 38 31.2386 38 34C38 36.7614 40.2386 39 43 39Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17 39C19.7614 39 22 36.7614 22 34C22 31.2386 19.7614 29 17 29C14.2386 29 12 31.2386 12 34C12 36.7614 14.2386 39 17 39Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M25.6502 42.44C25.3302 42.22 24.9802 42.03 24.5802 41.9C23.9302 41.68 21.9902 41.01 21.9902 41.01L16.9902 46.01L11.9902 41.01C11.9902 41.01 10.0502 41.68 9.40023 41.9C7.97023 42.38 6.99023 43.5 6.99023 45.01V48.01C6.99023 49.67 8.33023 51.01 9.99023 51.01H19.9902"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M39.9998 51H49.9998C51.6598 51 52.9998 49.66 52.9998 48V45C52.9998 43.49 52.0198 42.38 50.5898 41.89C49.9398 41.67 47.9998 41 47.9998 41L42.9998 46L37.9998 41C37.9998 41 36.0598 41.67 35.4098 41.89C35.0098 42.02 34.6598 42.21 34.3398 42.43"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M53.32 37C54.4 34.21 55 31.17 55 28C55 14.19 43.81 3 30 3C16.19 3 5 14.19 5 28C5 31.17 5.6 34.21 6.68 37"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44 25C43.16 12.61 37.22 3 30 3C22.78 3 16.84 12.61 16 25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52.45 17H7.54004"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 3V31" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M30 45C32.7614 45 35 42.7614 35 40C35 37.2386 32.7614 35 30 35C27.2386 35 25 37.2386 25 40C25 42.7614 27.2386 45 30 45Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M37 57C38.66 57 40 55.66 40 54V51C40 49.49 39.02 48.38 37.59 47.89C36.94 47.67 35 47 35 47L30 52L25 47C25 47 23.06 47.67 22.41 47.89C20.98 48.37 20 49.49 20 51V54C20 55.66 21.34 57 23 57H37Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function GlobalTeamIconWithAccent(props: BrandIconProps) {
  return (
    <StyledGlobalTeamIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
