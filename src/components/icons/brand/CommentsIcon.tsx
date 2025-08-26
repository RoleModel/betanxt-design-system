import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledCommentsIcon = styled(CommentsIcon)<{
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

function CommentsIcon({
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
      className={`CommentsIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M25 23C25 20.79 26.79 19 29 19H51C53.21 19 55 20.79 55 23V37C55 39.21 53.21 41 51 41H49V47L43 41H29C26.79 41 25 39.21 25 37V23Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M21 27H9C6.79 27 5 28.79 5 31V45C5 47.21 6.79 49 9 49H11V55L17 49H31C33.21 49 35 47.21 35 45"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M11 23V15C11 12.79 12.79 11 15 11H17V5L23 11H37C39.21 11 41 12.79 41 15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12 39C12.5523 39 13 38.5523 13 38C13 37.4477 12.5523 37 12 37C11.4477 37 11 37.4477 11 38C11 38.5523 11.4477 39 12 39Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 39C20.5523 39 21 38.5523 21 38C21 37.4477 20.5523 37 20 37C19.4477 37 19 37.4477 19 38C19 38.5523 19.4477 39 20 39Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M48 31C48.5523 31 49 30.5523 49 30C49 29.4477 48.5523 29 48 29C47.4477 29 47 29.4477 47 30C47 30.5523 47.4477 31 48 31Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M40 31C40.5523 31 41 30.5523 41 30C41 29.4477 40.5523 29 40 29C39.4477 29 39 29.4477 39 30C39 30.5523 39.4477 31 40 31Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M32 31C32.5523 31 33 30.5523 33 30C33 29.4477 32.5523 29 32 29C31.4477 29 31 29.4477 31 30C31 30.5523 31.4477 31 32 31Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M18 23C18.5523 23 19 22.5523 19 22C19 21.4477 18.5523 21 18 21C17.4477 21 17 21.4477 17 22C17 22.5523 17.4477 23 18 23Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function CommentsIconWithAccent(props: BrandIconProps) {
  return (
    <StyledCommentsIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
