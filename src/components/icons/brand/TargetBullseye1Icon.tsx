import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTargetBullseye1Icon = styled(TargetBullseye1Icon)<{
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

function TargetBullseye1Icon({
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
      className={`TargetBullseye1Icon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M23 48C32.9411 48 41 39.9411 41 30C41 20.0589 32.9411 12 23 12C13.0589 12 5 20.0589 5 30C5 39.9411 13.0589 48 23 48Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 40C17.49 40 13 35.51 13 30C13 24.49 17.49 20 23 20C28.51 20 33 24.49 33 30C33 35.51 28.51 40 23 40Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23 32C24.1046 32 25 31.1046 25 30C25 28.8954 24.1046 28 23 28C21.8954 28 21 28.8954 21 30C21 31.1046 21.8954 32 23 32Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.0002 30.0499H23.0002C23.0002 30.0499 22.9502 30.03 22.9502 30C22.9502 29.97 22.9702 29.95 23.0002 29.95H51.0002C51.0002 29.95 51.0502 29.97 51.0502 30C51.0502 30.03 51.0302 30.0499 51.0002 30.0499Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51 30H43L47 24H55L51 30Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M55 36H47L43 30H51L55 36Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TargetBullseye1IconWithAccent(props: BrandIconProps) {
  return (
    <StyledTargetBullseye1Icon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
