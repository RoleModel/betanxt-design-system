import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledDatabaseStackIcon = styled(DatabaseStackIcon)<{
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

function DatabaseStackIcon({
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
      className={`DatabaseStackIcon ${className || ''}`.trim()}
      {...props}
    >
      <mask
        id="mask0_15567_2073"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="7"
        y="8"
        width="37"
        height="45"
      >
        <path
          d="M7.00012 17V44C7.00012 48.97 15.0601 53 25.0001 53C29.4001 53 33.4301 52.21 36.5501 50.9C33.8001 48.9 32.0001 45.66 32.0001 42C32.0001 35.93 36.9301 31 43.0001 31V17C43.0001 12.03 34.9401 8 25.0001 8C15.0601 8 7.00012 12.03 7.00012 17Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_15567_2073)">
        <mask
          id="mask1_15567_2073"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="6"
          y="7"
          width="49"
          height="47"
        >
          <path d="M55 7H6V54H55V7Z" fill="white" />
        </mask>
        <g mask="url(#mask1_15567_2073)">
          <path
            d="M25 44C15.06 44 7 39.97 7 35V44C7 48.97 15.06 53 25 53C34.94 53 43 48.97 43 44V35C43 39.97 34.94 44 25 44Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 35C15.06 35 7 30.97 7 26V35C7 39.97 15.06 44 25 44C34.94 44 43 39.97 43 35V26C43 30.97 34.94 35 25 35Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 26C15.06 26 7 21.97 7 17V26C7 30.97 15.06 35 25 35C34.94 35 43 30.97 43 26V17C43 21.97 34.94 26 25 26Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M25 26C34.9411 26 43 21.9706 43 17C43 12.0294 34.9411 8 25 8C15.0589 8 7 12.0294 7 17C7 21.9706 15.0589 26 25 26Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <mask
        id="mask2_15567_2073"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="6"
        y="7"
        width="49"
        height="47"
      >
        <path d="M55 7H6V54H55V7Z" fill="white" />
      </mask>
      <g mask="url(#mask2_15567_2073)">
        <path
          d="M32.0001 42C32.0001 35.93 36.9301 31 43.0001 31V17C43.0001 12.03 34.9401 8 25.0001 8C15.0601 8 7.00012 12.03 7.00012 17V44C7.00012 48.97 15.0601 53 25.0001 53C29.4001 53 33.4301 52.21 36.5501 50.9C33.8001 48.9 32.0001 45.67 32.0001 42Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.0001 53C49.0753 53 54.0001 48.0751 54.0001 42C54.0001 35.9249 49.0753 31 43.0001 31C36.925 31 32.0001 35.9249 32.0001 42C32.0001 48.0751 36.925 53 43.0001 53Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.0501 38H42.9501V46H43.0501V38Z"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39.0501 42H38.9501V46H39.0501V42Z"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M47.0501 40H46.9501V46H47.0501V40Z"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </SvgIcon>
  )
}

export default function DatabaseStackIconWithAccent(props: BrandIconProps) {
  return (
    <StyledDatabaseStackIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
