import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledNetworkPeopleIcon = styled(NetworkPeopleIcon)<{
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

function NetworkPeopleIcon({
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
      className={`NetworkPeopleIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30 43C32.7614 43 35 40.7614 35 38C35 35.2386 32.7614 33 30 33C27.2386 33 25 35.2386 25 38C25 40.7614 27.2386 43 30 43Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M41 52V48.8C41 47.72 40.31 46.77 39.29 46.43L35 45L30 50L25 45L20.71 46.43C19.69 46.77 19 47.72 19 48.8V52C19 53.66 20.34 55 22 55H38C39.66 55 41 53.66 41 52Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 26V22.8C23 21.72 22.31 20.77 21.29 20.43L17 19L12 24L7 19L2.70999 20.43C1.68999 20.77 1 21.73 1 22.8V26C1 27.66 2.34 29 4 29H20C21.66 29 23 27.66 23 26Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M48 17C50.7614 17 53 14.7614 53 12C53 9.23858 50.7614 7 48 7C45.2386 7 43 9.23858 43 12C43 14.7614 45.2386 17 48 17Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M59 26V22.8C59 21.72 58.31 20.77 57.29 20.43L53 19L48 24L43 19L38.71 20.43C37.69 20.77 37 21.73 37 22.8V26C37 27.66 38.34 29 40 29H56C57.66 29 59 27.66 59 26Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M40.3601 7.25C37.2001 5.81 33.6901 5 29.9901 5C26.2901 5 22.7801 5.81 19.6201 7.25"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 49.99C50.31 45.99 53.98 39.93 54.81 33"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M5.17969 33C6.00969 39.94 9.67969 46 14.9897 49.99"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function NetworkPeopleIconWithAccent(props: BrandIconProps) {
  return (
    <StyledNetworkPeopleIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
