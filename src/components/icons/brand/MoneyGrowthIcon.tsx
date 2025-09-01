import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledMoneyGrowthIcon = styled(MoneyGrowthIcon)<{
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

function MoneyGrowthIcon({
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
      className={`MoneyGrowthIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M7.93988 33C5.86988 37.54 7.17989 45.74 12.2599 49.81C16.0699 52.86 21.4099 52.71 24.2699 49.4C27.1199 46.09 26.3799 40.89 22.5999 37.81C18.8199 34.72 12.7399 36.56 7.93988 33Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 44C23.82 45.25 28.85 50.42 30 56"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52.06 33C54.12 37.54 52.82 45.74 47.74 49.81C43.93 52.86 38.59 52.71 35.73 49.4C32.88 46.09 33.62 40.89 37.4 37.81C41.18 34.72 47.26 36.56 52.06 33Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M42 44C36.18 45.25 31.15 50.42 30 56"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 33V57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M30 33C36.6274 33 42 27.6274 42 21C42 14.3726 36.6274 9 30 9C23.3726 9 18 14.3726 18 21C18 27.6274 23.3726 33 30 33Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M33 17H29C27.9 17 27 17.9 27 19C27 20.1 27.9 21 29 21H31C32.1 21 33 21.9 33 23C33 24.1 32.1 25 31 25H27"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 14V17"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 25V28"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 7.13989L39 5.40991"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.4102 30L16.1401 29"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.8496 13L45.5896 12"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 21H14" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M46 21H48" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M14.4102 12L16.1401 13"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.8496 29L45.5896 30"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 5.40991L22 7.13989"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 3V5" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  )
}

export default function MoneyGrowthIconWithAccent(props: BrandIconProps) {
  return (
    <StyledMoneyGrowthIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
