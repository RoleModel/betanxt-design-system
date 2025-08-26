import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTeamTimeIcon = styled(TeamTimeIcon)<{
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

function TeamTimeIcon({
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
      className={`TeamTimeIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M30 42.99C32.7614 42.99 35 40.7514 35 37.99C35 35.2286 32.7614 32.99 30 32.99C27.2386 32.99 25 35.2286 25 37.99C25 40.7514 27.2386 42.99 30 42.99Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M44 36.99C46.7614 36.99 49 34.7514 49 31.99C49 29.2286 46.7614 26.99 44 26.99C41.2386 26.99 39 29.2286 39 31.99C39 34.7514 41.2386 36.99 44 36.99Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M41 54.99V49.87C41 48.15 39.9 46.6199 38.26 46.0699L35 44.98L30 49.98L25 44.98L21.73 46.0699C20.1 46.6199 19 48.14 19 49.87V54.99"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 48.99V43.87C55 42.15 53.9 40.6199 52.26 40.0699L49 38.98L44 43.98L39 38.98"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 50.99V54.99"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 50.99V54.99"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 44.99V48.99"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 44.99V48.99"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16 36.99C18.7614 36.99 21 34.7514 21 31.99C21 29.2286 18.7614 26.99 16 26.99C13.2386 26.99 11 29.2286 11 31.99C11 34.7514 13.2386 36.99 16 36.99Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M5 48.99V43.87C5 42.15 6.09998 40.6199 7.72998 40.0699L11 38.98L16 43.98L21 38.98"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 24.99C31.6569 24.99 33 23.6468 33 21.99C33 20.3331 31.6569 18.99 30 18.99C28.3431 18.99 27 20.3331 27 21.99C27 23.6468 28.3431 24.99 30 24.99Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M42.0001 9.98999L32.1201 19.87"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.84 7.5C36.26 5.92 33.24 5 30 5C20.61 5 13 12.61 13 22C13 22.68 13.05 23.34 13.13 24"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46.87 23.9899C46.95 23.3299 47 22.6699 47 21.9899C47 18.7499 46.07 15.7299 44.5 13.1499"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamTimeIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamTimeIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
