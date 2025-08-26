import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledPersonLightbulbIcon = styled(PersonLightbulbIcon)<{
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

function PersonLightbulbIcon({
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
      className={`PersonLightbulbIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M9 39C6.79 39 5 37.21 5 35V21.23C5 19.72 5.97003 18.37 7.41003 17.89L10 17L15 22L20 17H36.89C37.89 17 38.81 17.68 38.97 18.66C39.17 19.91 38.21 21 37 21H24C22.34 21 21 22.34 21 24V54C21 54.55 20.55 55 20 55H10C9.45 55 9 54.55 9 54V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 37V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M15 15C17.7614 15 20 12.7614 20 10C20 7.23858 17.7614 5 15 5C12.2386 5 10 7.23858 10 10C10 12.7614 12.2386 15 15 15Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 45V51C45 52.1 44.1 53 43 53H37C35.9 53 35 52.1 35 51V45"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M42 53C42 54.1 41.1 55 40 55C38.9 55 38 54.1 38 53"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M40 45V29" stroke="#34C0F3" strokeWidth="2" strokeLinejoin="round" />
      <path d="M39 49H45" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M32 29L36 25L40 29L44 25L48 29"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M25.0498 25C25.3098 28.95 27.0898 32.49 29.8298 35.02C31.8598 36.9 32.9998 39.55 32.9998 42.31V43C32.9998 44.1 33.8998 45 34.9998 45H44.9998C46.0998 45 46.9998 44.1 46.9998 43V42.31C46.9998 39.55 48.1298 36.89 50.1698 35.02C53.1398 32.28 54.9998 28.36 54.9998 24C54.9998 15.72 48.2798 9 39.9998 9C34.2398 9 29.2497 12.24 26.7397 17"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PersonLightbulbIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPersonLightbulbIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
