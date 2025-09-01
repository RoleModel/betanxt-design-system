import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledMoneyBagIcon = styled(MoneyBagIcon)<{
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

function MoneyBagIcon({
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
      className={`MoneyBagIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M35 19H25C23.9 19 23 18.1 23 17C23 15.9 23.9 15 25 15H35C36.1 15 37 15.9 37 17C37 18.1 36.1 19 35 19Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.93 55C42.66 55 47.7 50.97 48.71 45.33C48.9 44.25 49 43.14 49 42C49 33.15 43 24 35 19H25C17 24 11 33.15 11 42C11 43.14 11.1 44.25 11.29 45.33C12.29 50.97 17.33 55 23.07 55H36.93Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 15C35 15 38 9.66 38 8C38 6.34 36.66 5 35 5C33.95 5 33.04 5.54001 32.5 6.35001C31.96 5.54001 31.04 5 30 5C28.96 5 28.04 5.54001 27.5 6.35001C26.96 5.54001 26.04 5 25 5C23.34 5 22 6.34 22 8C22 9.66 25 15 25 15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 34H29C27.9 34 27 34.9 27 36C27 37.1 27.9 38 29 38H31C32.1 38 33 38.9 33 40C33 41.1 32.1 42 31 42H27"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 31V34"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 42V45"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function MoneyBagIconWithAccent(props: BrandIconProps) {
  return (
    <StyledMoneyBagIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
