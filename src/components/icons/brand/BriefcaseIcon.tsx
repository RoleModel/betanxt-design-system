import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledBriefcaseIcon = styled(BriefcaseIcon)<{
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

function BriefcaseIcon({
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
      className={`BriefcaseIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M40.1699 15V12C40.1699 9.79 38.3799 8 36.1699 8H23.8398C21.6298 8 19.8398 9.79 19.8398 12V15H40.1699Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.9602 33.88C51.8702 33.9 51.7802 33.92 51.6802 33.94C51.4602 33.98 51.2302 34.01 51.0002 34.01H33.0002V36.01C33.0002 37.11 32.1002 38.01 31.0002 38.01H29.0002C27.9002 38.01 27.0002 37.11 27.0002 36.01V34.01H9.00024C8.77024 34.01 8.54025 33.98 8.32025 33.94C8.23025 33.92 8.14025 33.9 8.04025 33.88C7.94025 33.85 7.84023 33.82 7.74023 33.79C7.48023 33.7 7.23023 33.59 6.99023 33.46V48.01C6.99023 50.22 8.78023 52.01 10.9902 52.01H48.9902C51.2002 52.01 52.9902 50.22 52.9902 48.01V33.46C52.7602 33.6 52.5102 33.71 52.2402 33.79C52.1402 33.82 52.0402 33.86 51.9402 33.88H51.9602Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53 15H7C5.9 15 5 15.9 5 17V30C5 31.48 5.81 32.75 7 33.45C7.23 33.59 7.49 33.69 7.75 33.79C7.85 33.82 7.94999 33.86 8.04999 33.88C8.13999 33.9 8.22999 33.92 8.32999 33.94C8.54999 33.98 8.78001 34.01 9.01001 34.01H27.01V32.01C27.01 30.91 27.91 30.01 29.01 30.01H31.01C32.11 30.01 33.01 30.91 33.01 32.01V34.01H51.01C51.24 34.01 51.47 33.98 51.69 33.94C51.78 33.92 51.88 33.9 51.97 33.88C52.07 33.86 52.17 33.82 52.27 33.79C52.53 33.7 52.78 33.59 53.02 33.45C54.21 32.76 55.02 31.48 55.02 30V17C55.02 15.9 54.12 15 53.02 15H53Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31 30H29C27.8954 30 27 30.8954 27 32V36C27 37.1046 27.8954 38 29 38H31C32.1046 38 33 37.1046 33 36V32C33 30.8954 32.1046 30 31 30Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function BriefcaseIconWithAccent(props: BrandIconProps) {
  return (
    <StyledBriefcaseIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
