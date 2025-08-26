import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledLineChartIcon = styled(LineChartIcon)<{
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

function LineChartIcon({
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
      className={`LineChartIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M47.96 17.9399V18.0399H53.82L36.98 33.8999L29.03 25.95L29 25.9099L12 41.9299L12.07 41.9999L29 26.0499L36.95 34.0099L36.98 34.0399L53.9 18.0999V23.9799H54V17.9399H47.96Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6.1 8H6V51.95H6.05V52H53.95V51.9H6.1V8Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function LineChartIconWithAccent(props: BrandIconProps) {
  return (
    <StyledLineChartIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
