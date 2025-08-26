import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledLightbulbOnIcon = styled(LightbulbOnIcon)<{
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

function LightbulbOnIcon({
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
      className={`LightbulbOnIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M50 24C50 12.95 41.04 4 30 4C18.96 4 10 12.95 10 24C10 31.8 14.48 38.55 21 41.84V45C21 46.1 21.9 47 23 47H37C38.1 47 39 46.1 39 45V41.84C45.52 38.54 50 31.8 50 24Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37 47V50C37 51.1 36.1 52 35 52H25C23.9 52 23 51.1 23 50V47H37Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35 52C35 54.76 32.76 57 30 57C27.24 57 25 54.76 25 52H35Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.0404 26.9698C36.0404 26.9698 35.9903 26.9498 35.9703 26.9698L33.0104 29.9298L30.0503 26.9698C30.0503 26.9698 30.0004 26.9498 29.9804 26.9698L27.0203 29.9298L24.0603 26.9698C24.0603 26.9698 24.0103 26.9498 23.9903 26.9698L20.9903 29.9698C20.9903 29.9698 20.9703 30.0198 20.9903 30.0398C21.0103 30.0598 21.0403 30.0598 21.0603 30.0398L24.0203 27.0798L26.9703 30.0298V47.0099C26.9703 47.0099 26.9903 47.0599 27.0203 47.0599C27.0503 47.0599 27.0704 47.0399 27.0704 47.0099V30.0298L30.0203 27.0798L32.9703 30.0298V47.0099C32.9703 47.0099 32.9903 47.0599 33.0203 47.0599C33.0503 47.0599 33.0704 47.0399 33.0704 47.0099V30.0298L36.0203 27.0798L38.9804 30.0398C38.9804 30.0398 39.0003 30.0599 39.0203 30.0599C39.0403 30.0599 39.0403 30.0598 39.0603 30.0398C39.0803 30.0198 39.0803 29.9898 39.0603 29.9698L36.0603 26.9698H36.0404Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function LightbulbOnIconWithAccent(props: BrandIconProps) {
  return (
    <StyledLightbulbOnIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
