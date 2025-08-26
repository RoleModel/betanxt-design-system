import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledMoneyBag1Icon = styled(MoneyBag1Icon)<{
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

function MoneyBag1Icon({
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
      className={`MoneyBag1Icon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M38.2 57C43.33 57 47.84 53.39 48.74 48.34C48.91 47.37 49 46.38 49 45.36C49 37.44 44 29.99 37 24.99H27C20 29.99 15 37.44 15 45.36C15 46.38 15.09 47.37 15.26 48.34C16.16 53.39 20.67 57 25.8 57H38.2Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 11C37 11 40 7.66 40 6C40 4.34 38.66 3 37 3C35.95 3 35.04 3.53998 34.5 4.34998C33.96 3.53998 33.04 3 32 3C30.96 3 30.04 3.53998 29.5 4.34998C28.96 3.53998 28.04 3 27 3C25.34 3 24 4.34 24 6C24 7.17 25.5 9.18996 26.38 10.27C26.76 10.73 27.33 11 27.92 11H37.87C38.93 11 39.9 11.77 39.99 12.83C40.04 13.44 39.82 13.99 39.44 14.38C40.33 14.58 41 15.37 41 16.33C41 17.29 40.33 18.08 39.44 18.28C39.79 18.64 40 19.13 40 19.66C40 20.61 39.33 21.41 38.44 21.61C38.82 22.01 39.04 22.56 38.99 23.16C38.9 24.22 37.93 24.99 36.87 24.99H25.81C24.63 24.99 23.47 24.64 22.48 23.98L21.75 23.49C21.26 23.16 20.68 22.99 20.09 22.99H19"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1797 6.82007L22.0497 10.3C21.3997 11.36 20.2498 12.0001 19.0098 12.0001"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 11H19V25H11"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 39H31C29.9 39 29 39.9 29 41C29 42.1 29.9 43 31 43H33C34.1 43 35 43.9 35 45C35 46.1 34.1 47 33 47H29"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 36V39"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 47V50"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function MoneyBag1IconWithAccent(props: BrandIconProps) {
  return (
    <StyledMoneyBag1Icon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
