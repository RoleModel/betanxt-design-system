import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTargetBullseyeIcon = styled(TargetBullseyeIcon)<{
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

function TargetBullseyeIcon({
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
      className={`TargetBullseyeIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M28.0302 48.0099C19.1902 48.0099 11.9902 40.8199 11.9902 31.9699C11.9902 23.1199 19.1802 15.9299 28.0302 15.9299C30.2002 15.9299 32.3102 16.36 34.2902 17.2C34.3102 17.21 34.3302 17.2399 34.3202 17.2699C34.3202 17.2899 34.2802 17.3099 34.2602 17.2999C32.2902 16.4599 30.1902 16.0399 28.0402 16.0399C19.2502 16.0399 12.1002 23.1899 12.1002 31.9799C12.1002 40.7699 19.2502 47.9199 28.0402 47.9199C36.8302 47.9199 43.9802 40.7699 43.9802 31.9799C43.9802 29.8199 43.5602 27.7299 42.7202 25.7599C42.7102 25.7399 42.7202 25.71 42.7502 25.7C42.7802 25.69 42.8002 25.6999 42.8102 25.7299C43.6502 27.7099 44.0802 29.8199 44.0802 31.9899C44.0802 40.8299 36.8902 48.0299 28.0402 48.0299L28.0302 48.0099Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.03 56.0099C14.78 56.0099 4 45.2299 4 31.9799C4 18.7299 14.78 7.94995 28.03 7.94995C32.33 7.94995 36.54 9.09991 40.23 11.2799C40.25 11.2899 40.26 11.3199 40.25 11.3499C40.24 11.3699 40.21 11.3799 40.18 11.3699C36.51 9.19993 32.31 8.04993 28.03 8.04993C14.84 8.04993 4.1 18.7799 4.1 31.9799C4.1 45.1799 14.83 55.9099 28.03 55.9099C41.23 55.9099 51.96 45.1799 51.96 31.9799C51.96 27.6999 50.81 23.4999 48.64 19.8299C48.63 19.8099 48.64 19.7799 48.66 19.7599C48.68 19.7499 48.71 19.7599 48.73 19.7799C50.91 23.4699 52.06 27.6899 52.06 31.9799C52.06 45.2299 41.28 56.0099 28.03 56.0099Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.0302 40.02C23.6002 40.02 19.9902 36.41 19.9902 31.98C19.9902 27.55 23.3002 24.23 27.5202 23.96C27.5402 23.96 27.5702 23.98 27.5702 24.01C27.5702 24.04 27.5502 24.06 27.5202 24.06C23.3502 24.32 20.0802 27.8 20.0802 31.98C20.0802 36.36 23.6402 39.92 28.0202 39.92C32.4002 39.92 35.6702 36.65 35.9402 32.48C35.9402 32.45 35.9602 32.43 35.9902 32.43C36.0202 32.43 36.0402 32.45 36.0402 32.48C35.7702 36.7 32.2502 40.01 28.0202 40.01L28.0302 40.02Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.0304 32.0299C28.0304 32.0299 28.0104 32.0299 28.0004 32.0199C27.9804 31.9999 27.9804 31.9699 28.0004 31.9499L40.4304 19.5199C40.4304 19.5199 40.4804 19.4999 40.5004 19.5199C40.5204 19.5399 40.5204 19.5699 40.5004 19.5899L28.0704 32.0199C28.0704 32.0199 28.0504 32.0299 28.0404 32.0299H28.0304Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.9398 11.07L47.5198 4L39.0498 12.48L40.4598 19.55L47.5198 20.96L55.9998 12.48L48.9398 11.07Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TargetBullseyeIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTargetBullseyeIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
