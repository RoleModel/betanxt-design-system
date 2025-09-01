import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTeamCheckIcon = styled(TeamCheckIcon)<{
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

function TeamCheckIcon({
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
      className={`TeamCheckIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M17 51V40.5C17 38.53 18.26 36.78 20.13 36.16L24 35L30 41L36 35L39.87 36.16C41.74 36.78 43 38.53 43 40.5V51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M38 43V51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M22 43V51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M52 33V41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M44 23C47.866 23 51 19.866 51 16C51 12.134 47.866 9 44 9C40.134 9 37 12.134 37 16C37 19.866 40.134 23 44 23Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M8 33V41" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M16 23C19.866 23 23 19.866 23 16C23 12.134 19.866 9 16 9C12.134 9 9 12.134 9 16C9 19.866 12.134 23 16 23Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.04 25.3099L22 25L16 31L10 25L6.13 26.16C4.26 26.78 3 28.53 3 30.5V41"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M56.9999 41V30.5C56.9999 28.53 55.7299 26.78 53.8699 26.16L49.9999 25L43.9999 31L37.9999 25L36.96 25.3099"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 33C33.866 33 37 29.866 37 26C37 22.134 33.866 19 30 19C26.134 19 23 22.134 23 26C23 29.866 26.134 33 30 33Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamCheckIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamCheckIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
