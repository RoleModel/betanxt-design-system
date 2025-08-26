import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTeamHandshake2Icon = styled(TeamHandshake2Icon)<{
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

function TeamHandshake2Icon({
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
      className={`TeamHandshake2Icon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30 31.17L32.71 28.46C32.9 28.27 33 28.02 33 27.75V21.7C33 20.06 34 18.59 35.51 17.99L38 17L43 22L48 17L50.48 17.99C52 18.6 53 20.07 53 21.7V33.99C53 36.2 51.21 37.99 49 37.99"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M43 15C45.7614 15 48 12.7614 48 10C48 7.23858 45.7614 5 43 5C40.2386 5 38 7.23858 38 10C38 12.7614 40.2386 15 43 15Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 28.59V54C37 54.55 37.45 55 38 55H48C48.55 55 49 54.55 49 54V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M43 38V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M17 15C19.7614 15 22 12.7614 22 10C22 7.23858 19.7614 5 17 5C14.2386 5 12 7.23858 12 10C12 12.7614 14.2386 15 17 15Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 28.59V54C23 54.55 22.55 55 22 55H12C11.45 55 11 54.55 11 54V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 38V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M37.0001 25V28.59C37.0001 29.39 36.6801 30.15 36.1201 30.71L31.4102 35.42"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 38C8.79 38 7 36.21 7 34V21.71C7 20.07 7.99998 18.6 9.50998 18L12 17.01L17 22.01L22 17.01L24.48 18C26 18.61 27 20.08 27 21.71V27.76C27 28.02 27.1 28.28 27.29 28.47L31.33 32.51C32.04 33.21 32.21 34.35 31.62 35.16C30.88 36.19 29.43 36.28 28.57 35.42L23.86 30.71C23.3 30.15 22.98 29.39 22.98 28.59V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamHandshake2IconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamHandshake2Icon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
