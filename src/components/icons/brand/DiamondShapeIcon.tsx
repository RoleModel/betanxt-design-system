import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledDiamondShapeIcon = styled(DiamondShapeIcon)<{
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

function DiamondShapeIcon({
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
      className={`DiamondShapeIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M43.0098 41V49"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43.0098 55V53"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17.0098 37V47"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="17.0098" cy="51" r="1" fill="#34C0F3" />
      <circle cx="17.0098" cy="55" r="1" fill="#34C0F3" />
      <path
        d="M33.9602 22.3699C34.3702 25.0699 32.0703 27.3699 29.3703 26.9499C27.6903 26.6899 26.3103 25.3099 26.0603 23.6299C25.6503 20.9299 27.9502 18.6399 30.6502 19.0499C32.3302 19.3099 33.7102 20.6899 33.9602 22.3699Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30.0098 44V57"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.0093 34.0001L44.3893 24.6201C45.2193 23.7901 45.2193 22.4501 44.3893 21.6201C43.5593 20.7901 42.2193 20.7901 41.3893 21.6201L30.0093 33.0001L18.6293 21.6201C17.7993 20.7901 16.4593 20.7901 15.6293 21.6201C14.7993 22.4501 14.7993 23.7901 15.6293 24.6201L25.0093 34.0001V56.0001C25.0093 56.5501 25.4593 57.0001 26.0093 57.0001H34.0093C34.5593 57.0001 35.0093 56.5501 35.0093 56.0001V34.0001Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.0601 17.67L15 5L5 19H11V51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.9502 17.67L45.0102 5L55.0102 19H49.0102V51"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M35.76 11.06L30 3L24.25 11.06"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function DiamondShapeIconWithAccent(props: BrandIconProps) {
  return (
    <StyledDiamondShapeIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
