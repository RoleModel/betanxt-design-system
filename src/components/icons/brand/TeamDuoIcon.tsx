import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTeamDuoIcon = styled(TeamDuoIcon)<{
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

function TeamDuoIcon({
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
      className={`TeamDuoIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M23 38C25.21 38 27 36.21 27 34V21.23C27 19.72 26.02 18.37 24.59 17.89C23.94 17.67 22 17 22 17L17 22L12 17C12 17 10.06 17.67 9.41 17.89C7.98 18.37 7 19.72 7 21.23V34C7 36.21 8.79 38 11 38"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M36 38C38.21 38 40 36.21 40 34V21.23C40 19.72 39.02 18.37 37.59 17.89C36.94 17.67 35 17 35 17L31 21"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49 38C51.21 38 53 36.21 53 34V21.23C53 19.72 52.02 18.37 50.59 17.89C49.94 17.67 48 17 48 17L44 21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 15C19.7614 15 22 12.7614 22 10C22 7.23858 19.7614 5 17 5C14.2386 5 12 7.23858 12 10C12 12.7614 14.2386 15 17 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 15C32.7614 15 35 12.7614 35 10C35 7.23858 32.7614 5 30 5C27.2386 5 25 7.23858 25 10C25 12.7614 27.2386 15 30 15Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M43 15C45.7614 15 48 12.7614 48 10C48 7.23858 45.7614 5 43 5C40.2386 5 38 7.23858 38 10C38 12.7614 40.2386 15 43 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 25V54C23 54.55 22.55 55 22 55H12C11.45 55 11 54.55 11 54V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36 25V54C36 54.55 35.55 55 35 55H27"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M49 25V54C49 54.55 48.55 55 48 55H40"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M17 37V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M30 37V55"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M43 37V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  )
}

export default function TeamDuoIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamDuoIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
