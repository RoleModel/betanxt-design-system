import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledRunningIcon = styled(RunningIcon)<{
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

function RunningIcon({
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
      className={`RunningIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M47.6731 18.355C45.5531 20.495 42.1231 20.495 40.0031 18.355C37.8831 16.215 37.8831 12.745 40.0031 10.605C42.1231 8.465 45.5531 8.465 47.6731 10.605C49.7931 12.745 49.7931 16.215 47.6731 18.355Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.6426 31.8151C37.6426 32.9951 38.5926 33.9551 39.7626 33.9551H50.3026C51.8026 33.9551 53.0126 32.7251 53.0126 31.2151C53.0126 29.7051 51.8026 28.4751 50.3026 28.4751H43.1026L43.0726 22.9951L30.5926 10.3951C30.1926 9.99514 29.6526 9.76514 29.0926 9.76514H20.1026C18.6026 9.76514 17.3926 10.9951 17.3926 12.5051C17.3926 14.0151 18.6026 15.2451 20.1026 15.2451H27.7226L30.7926 18.3451L21.3326 27.9052C20.5026 28.7452 20.5026 30.095 21.3326 30.925L30.0826 39.7551L23.5926 46.3151C22.5326 47.3851 22.5326 49.1251 23.5926 50.1851C24.1226 50.7251 24.8126 50.9851 25.5126 50.9851C26.2126 50.9851 26.9026 50.7151 27.4326 50.1851L35.8426 41.6951C36.9026 40.6251 36.9026 38.8951 35.8426 37.8251L31.2126 33.1552L37.6526 26.6552V31.8151H37.6426Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.3325 27.9053L6.9525 42.4252C5.6825 43.7052 5.6825 45.7952 6.9525 47.0752C8.2225 48.3552 10.2925 48.3552 11.5525 47.0752L24.4325 34.0652L21.3225 30.9252C20.4925 30.0852 20.4925 28.7353 21.3225 27.9053H21.3325Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.5433 25.085H9.90332V25.105H13.5433V25.085Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9.63312 29.5449H6.95312V29.5649H9.63312V29.5449Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.4425 20.6353H12.8525V20.6553H18.4425V20.6353Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function RunningIconWithAccent(props: BrandIconProps) {
  return (
    <StyledRunningIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
