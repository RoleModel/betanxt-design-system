import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledBarChartIcon = styled(BarChartIcon)<{
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

function BarChartIcon({
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
      className={`BarChartIcon ${className || ''}`.trim()}
      {...props}
    >
      <mask
        id="mask0_15567_2135"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="5"
        y="7"
        width="50"
        height="46"
      >
        <path d="M55 7H5V53H55V7Z" fill="white" />
      </mask>
      <g mask="url(#mask0_15567_2135)">
        <path
          d="M54.0002 51.9H6.00018V52H54.0002V51.9Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M15.6002 25.98H6.00018V43.96H15.6002V25.98Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <mask
        id="mask1_15567_2135"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="5"
        y="7"
        width="50"
        height="46"
      >
        <path d="M55 7H5V53H55V7Z" fill="white" />
      </mask>
      <g mask="url(#mask1_15567_2135)">
        <path
          d="M25.1997 31.97H15.5997V43.96H25.1997V31.97Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M44.3997 27.98H34.7997V43.96H44.3997V27.98Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <mask
        id="mask2_15567_2135"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="5"
        y="7"
        width="50"
        height="46"
      >
        <path d="M55 7H5V53H55V7Z" fill="white" />
      </mask>
      <g mask="url(#mask2_15567_2135)">
        <path
          d="M54.0002 18.99H44.4002V43.96H54.0002V18.99Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M34.7703 8H25.2003V43.96H34.7703V8Z"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </SvgIcon>
  )
}

export default function BarChartIconWithAccent(props: BrandIconProps) {
  return (
    <StyledBarChartIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
