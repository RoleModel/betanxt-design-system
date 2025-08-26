import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledSearchAnalyticsIcon = styled(SearchAnalyticsIcon)<{
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

function SearchAnalyticsIcon({
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
      className={`SearchAnalyticsIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M45.0802 17.66C45.0802 17.66 45.0602 17.66 45.0502 17.65C45.0302 17.63 45.0302 17.6 45.0502 17.58L47.5001 15.14C47.5001 15.14 47.5501 15.12 47.5701 15.14C47.5901 15.16 47.5901 15.19 47.5701 15.21L45.1202 17.66C45.1202 17.66 45.1002 17.67 45.0902 17.67L45.0802 17.66Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.1602 24.56C38.1602 24.56 38.1402 24.56 38.1302 24.55C38.1102 24.53 38.1102 24.5 38.1302 24.48L41.4303 21.18C41.4303 21.18 41.4802 21.16 41.5002 21.18C41.5202 21.2 41.5202 21.23 41.5002 21.25L38.1902 24.55C38.1902 24.55 38.1702 24.56 38.1602 24.56Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.5499 34.1499C28.5499 34.1499 28.5299 34.1499 28.5199 34.1399C28.4999 34.1199 28.4999 34.0899 28.5199 34.0699L34.0499 28.5499C34.0499 28.5499 34.0999 28.5299 34.1199 28.5499C34.1399 28.5699 34.1399 28.5999 34.1199 28.6199L28.5899 34.1399C28.5899 34.1399 28.5699 34.1499 28.5599 34.1499H28.5499Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.48 34.1499C24.48 34.1499 24.46 34.1499 24.45 34.1399L18.92 28.6199C18.92 28.6199 18.9 28.5699 18.92 28.5499C18.94 28.5299 18.97 28.5299 18.99 28.5499L24.52 34.0699C24.52 34.0699 24.54 34.1199 24.52 34.1399C24.51 34.1499 24.5 34.1499 24.49 34.1499H24.48Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0301 26.6H9.9201C9.9201 26.6 9.87012 26.58 9.87012 26.55C9.87012 26.52 9.8901 26.5 9.9201 26.5H14.0301C14.0301 26.5 14.0801 26.52 14.0801 26.55C14.0801 26.58 14.0601 26.6 14.0301 26.6Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.9504 13.1801H52.4504C52.4504 13.1801 52.4004 13.1601 52.4004 13.1301C52.4004 13.1001 52.4204 13.0801 52.4504 13.0801H54.9504C54.9504 13.0801 55.0004 13.1001 55.0004 13.1301C55.0004 13.1601 54.9804 13.1801 54.9504 13.1801Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.5197 39.01C28.1102 39.01 29.3997 37.7206 29.3997 36.13C29.3997 34.5394 28.1102 33.25 26.5197 33.25C24.9291 33.25 23.6396 34.5394 23.6396 36.13C23.6396 37.7206 24.9291 39.01 26.5197 39.01Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.1202 29.4299C37.7108 29.4299 39.0002 28.1405 39.0002 26.5499C39.0002 24.9593 37.7108 23.6699 36.1202 23.6699C34.5297 23.6699 33.2402 24.9593 33.2402 26.5499C33.2402 28.1405 34.5297 29.4299 36.1202 29.4299Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49.5704 16.01C51.161 16.01 52.4504 14.7206 52.4504 13.13C52.4504 11.5394 51.161 10.25 49.5704 10.25C47.9799 10.25 46.6904 11.5394 46.6904 13.13C46.6904 14.7206 47.9799 16.01 49.5704 16.01Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.9103 29.4299C18.5009 29.4299 19.7903 28.1405 19.7903 26.5499C19.7903 24.9593 18.5009 23.6699 16.9103 23.6699C15.3197 23.6699 14.0303 24.9593 14.0303 26.5499C14.0303 28.1405 15.3197 29.4299 16.9103 29.4299Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M50.2104 47.77L43.7504 41.3201C42.5204 42.9601 41.0504 44.42 39.4004 45.66L45.8604 52.11C47.0504 53.3 49.0104 53.3 50.2104 52.11C51.4104 50.92 51.4004 48.97 50.2104 47.77Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.52 7C14.64 7 5 16.61 5 28.47C5 40.33 14.63 49.94 26.52 49.94C38.41 49.94 48.04 40.33 48.04 28.47C48.04 16.61 38.41 7 26.52 7ZM26.52 45.14C17.3 45.14 9.81 37.66 9.81 28.46C9.81 19.26 17.31 11.78 26.52 11.78C35.73 11.78 43.23 19.26 43.23 28.46C43.23 37.66 35.73 45.14 26.52 45.14Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function SearchAnalyticsIconWithAccent(props: BrandIconProps) {
  return (
    <StyledSearchAnalyticsIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
