import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledPersonShieldIcon = styled(PersonShieldIcon)<{
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

function PersonShieldIcon({
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
      className={`PersonShieldIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M19 15C21.7614 15 24 12.7614 24 10C24 7.23858 21.7614 5 19 5C16.2386 5 14 7.23858 14 10C14 12.7614 16.2386 15 19 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M25 48V54C25 54.55 24.55 55 24 55H14C13.45 55 13 54.55 13 54V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M19 38V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M38 53C38 53 25 48.05 25 37V25C25 25 30.82 21 38 21C45.18 21 51 25 51 25V37C51 48.05 38 53 38 53Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M44 33L40 37L35.99 41L32 37"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 22.92V21.71C29 20.07 28 18.6 26.48 18L24 17.01L19 22.01L14 17.01L11.51 18C9.98999 18.61 9 20.08 9 21.71V34C9 36.21 10.79 38 13 38"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PersonShieldIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPersonShieldIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
