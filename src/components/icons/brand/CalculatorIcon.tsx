import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledCalculatorIcon = styled(CalculatorIcon)<{
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

function CalculatorIcon({
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
      className={`CalculatorIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M6 30V46C6 50.4 9.6 54 14 54H30V30H6Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 6H14C9.6 6 6 9.6 6 14V30H30V6Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 54H46C50.4 54 54 50.4 54 46V30H30V54Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 6H30V30H54V14C54 9.6 50.4 6 46 6Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.05 14H17.95V17.95H14V18.05H17.95V22H18.05V18.05H22V17.95H18.05V14Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 17.95H38V18.0499H46V17.95Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.7899 39.1399L17.9999 41.9299L15.1999 39.1399L15.1299 39.2099L17.9299 41.9999L15.1299 44.7899L15.1999 44.8599L17.9999 42.0699L20.7899 44.8599L20.8599 44.7899L18.0699 41.9999L20.8599 39.2099L20.7899 39.1399Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 39.95H38V40.0499H46V39.95Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M46 43.95H38V44.0499H46V43.95Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function CalculatorIconWithAccent(props: BrandIconProps) {
  return (
    <StyledCalculatorIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
