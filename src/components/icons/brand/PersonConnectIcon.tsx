import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledPersonConnectIcon = styled(PersonConnectIcon)<{
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

function PersonConnectIcon({
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
      className={`PersonConnectIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M43 46H40C38.34 46 37 44.66 37 43V17C37 15.34 38.34 14 40 14H43"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M47 18C49.2091 18 51 16.2091 51 14C51 11.7909 49.2091 10 47 10C44.7909 10 43 11.7909 43 14C43 16.2091 44.7909 18 47 18Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M47 50C49.2091 50 51 48.2091 51 46C51 43.7909 49.2091 42 47 42C44.7909 42 43 43.7909 43 46C43 48.2091 44.7909 50 47 50Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M43 30H33" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M25 38C27.21 38 29 36.21 29 34V21.23C29 19.72 28.02 18.37 26.59 17.89C25.94 17.67 24 17 24 17L19 22L14 17C14 17 12.06 17.67 11.41 17.89C9.98 18.37 9 19.72 9 21.23V34C9 36.21 10.79 38 13 38"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M19 15C21.7614 15 24 12.7614 24 10C24 7.23858 21.7614 5 19 5C16.2386 5 14 7.23858 14 10C14 12.7614 16.2386 15 19 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M25 25V54C25 54.55 24.55 55 24 55H14C13.45 55 13 54.55 13 54V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19 37V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M47 34C49.2091 34 51 32.2091 51 30C51 27.7909 49.2091 26 47 26C44.7909 26 43 27.7909 43 30C43 32.2091 44.7909 34 47 34Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PersonConnectIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPersonConnectIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
