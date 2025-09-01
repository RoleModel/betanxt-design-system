import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledPersonFemaleIcon = styled(PersonFemaleIcon)<{
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

function PersonFemaleIcon({
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
      className={`PersonFemaleIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M20.25 20.5C27.66 20.5 34 17.14 34 13C34 17.14 36.04 20.5 39.75 20.5C41.23 20.5 42 21.25 42 22.75C42 24.25 41.23 25.75 39.75 25.75C39.75 31.96 35.56 37 30 37C24.44 37 20.25 31.96 20.25 25.75C18.75 25.75 18 24.25 18 22.75C18 21.25 18.77 20.5 20.25 20.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.0596 42.15C24.4296 43.84 27.0096 45 29.9996 45C32.9896 45 35.5596 43.85 36.9396 42.15"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 35.45V38C35.19 41.52 38.98 45 43.5 45C48.02 45 51 41.73 51 38.47C49.32 38.47 46.8 37.65 46.8 33.57C46.8 14.8 43.44 5 30 5C16.56 5 13.2 14.8 13.2 33.57C13.2 37.65 10.68 38.47 9 38.47C9 41.74 11.86 45 16.5 45C21.14 45 24.81 41.52 25 38V35.45"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.0602 44.67C12.1302 47.65 10.9902 51.19 10.9902 55H48.9902C48.9902 51.19 47.8603 47.65 45.9203 44.67"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M41 51V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M19 51V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  )
}

export default function PersonFemaleIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPersonFemaleIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
