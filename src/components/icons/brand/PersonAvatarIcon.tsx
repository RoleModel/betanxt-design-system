import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledPersonAvatarIcon = styled(PersonAvatarIcon)<{
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

function PersonAvatarIcon({
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
      className={`PersonAvatarIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M20.4 39C13 41 7 46 7 55H53C53 46 47 41 39.6 39"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M43 51V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M17 51V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M35 47L39.6 39L37.2 35L30 43L35 47Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30.0004 43L22.8004 35L20.4004 39L25.0004 47L30.0004 43Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.3499 22C42.8499 14.67 41.9099 8.82 38.6699 8.82C37.1699 5 34.1698 5 31.9298 5C23.2498 5 16.2699 8.27 18.4699 22.2"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M39.75 21.5C41.23 21.5 42 22.25 42 23.75C42 25.25 41.23 26.75 39.75 26.75C39.75 32.96 35.56 38 30 38C24.44 38 20.25 32.96 20.25 26.75C18.75 26.75 18 25.25 18 23.75C18 22.25 18.77 21.5 20.25 21.5C20.25 18.19 21.59 14.75 23.25 14.75C25.79 14.75 28.35 16.25 31.5 16.25C35.31 16.25 38.25 14 38.25 14C38.25 14 39.75 17.75 39.75 21.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PersonAvatarIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPersonAvatarIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
