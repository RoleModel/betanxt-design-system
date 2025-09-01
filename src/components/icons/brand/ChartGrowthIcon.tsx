import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledChartGrowthIcon = styled(ChartGrowthIcon)<{
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

function ChartGrowthIcon({
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
      className={`ChartGrowthIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M12.3828 37.7201L22.3128 47.6401C23.0828 46.8901 24.0928 46.4801 25.1728 46.4801H40.3228C41.9328 46.4801 43.4428 45.8601 44.5728 44.7201L53.1428 36.1601C53.7028 35.6001 54.0128 34.8501 54.0128 34.0501C54.0128 33.2501 53.7028 32.5101 53.1428 31.9501C51.9828 30.7901 50.0928 30.7901 48.9328 31.9501L43.4028 37.4701C43.3928 39.1601 42.0128 40.5301 40.3228 40.5301H32.4228C32.4228 40.5301 32.3728 40.5101 32.3728 40.4801C32.3728 40.4501 32.3928 40.4301 32.4228 40.4301H40.3228C41.9628 40.4301 43.3028 39.1001 43.3028 37.4501C43.3028 35.8101 41.9628 34.4701 40.3228 34.4701H28.0728H28.0528C26.4128 33.6701 24.8128 33.1301 22.3128 33.1301C17.7028 33.1301 14.1328 35.9901 12.3828 37.7201Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.3125 50.56L19.4525 53.4099C18.6625 54.1999 17.3825 54.1999 16.5925 53.4099L6.5925 43.42C5.8025 42.63 5.8025 41.3499 6.5925 40.5699L9.45249 37.7199C10.2425 36.9299 11.5225 36.9299 12.3125 37.7199L22.3125 47.71C23.1025 48.5 23.1025 49.78 22.3125 50.56Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.1729 18H28.1829C28.7329 18 29.1829 18.45 29.1829 19V27C29.1829 27.55 28.7329 28 28.1829 28H22.1729C21.6229 28 21.1729 27.55 21.1729 27V19C21.1729 18.45 21.6229 18 22.1729 18Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.1826 14H36.1926C36.7426 14 37.1926 14.45 37.1926 15V27C37.1926 27.55 36.7426 28 36.1926 28H30.1826C29.6326 28 29.1826 27.55 29.1826 27V15C29.1826 14.45 29.6326 14 30.1826 14Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.1924 6H44.2024C44.7524 6 45.2024 6.45 45.2024 7V27C45.2024 27.55 44.7524 28 44.2024 28H38.1924C37.6424 28 37.1924 27.55 37.1924 27V7C37.1924 6.45 37.6424 6 38.1924 6Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function ChartGrowthIconWithAccent(props: BrandIconProps) {
  return (
    <StyledChartGrowthIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
