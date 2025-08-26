import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTimerClockIcon = styled(TimerClockIcon)<{
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

function TimerClockIcon({
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
      className={`TimerClockIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M31.99 55.0001H20.0099C20.0099 55.0001 19.96 54.9801 19.96 54.9501C19.96 54.9201 19.9799 54.9001 20.0099 54.9001H31.99C31.99 54.9001 32.04 54.9201 32.04 54.9501C32.04 54.9801 32.02 55.0001 31.99 55.0001Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.3103 49.0499H11.3303C11.3303 49.0499 11.2803 49.03 11.2803 49C11.2803 48.97 11.3003 48.95 11.3303 48.95H23.3103C23.3103 48.95 23.3603 48.97 23.3603 49C23.3603 49.03 23.3403 49.0499 23.3103 49.0499Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.03 43.1H7.05C7.05 43.1 7 43.0799 7 43.0499C7 43.0199 7.02 43 7.05 43H19.03C19.03 43 19.08 43.0199 19.08 43.0499C19.08 43.0799 19.06 43.1 19.03 43.1Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.9905 55C31.9905 55 31.9405 54.98 31.9405 54.95C31.9405 54.92 31.9605 54.9 31.9905 54.9C43.5305 54.9 52.9105 45.58 52.9105 34.13C52.9105 22.68 43.5205 13.36 31.9905 13.36C20.4605 13.36 11.0705 22.68 11.0705 34.13C11.0705 35.12 11.1405 36.12 11.2805 37.1C11.2805 37.13 11.2705 37.15 11.2405 37.15C11.2105 37.15 11.1905 37.14 11.1905 37.11C11.0505 36.12 10.9805 35.12 10.9805 34.13C10.9805 22.62 20.4105 13.26 31.9905 13.26C43.5705 13.26 53.0005 22.62 53.0005 34.13C53.0005 45.64 43.5705 55 31.9905 55Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.9904 50.24C31.9904 50.24 31.9404 50.2199 31.9404 50.1899C31.9404 50.1599 31.9604 50.14 31.9904 50.14C40.8804 50.14 48.1204 42.96 48.1204 34.13C48.1204 32.01 47.7104 29.95 46.8904 28C46.8904 27.98 46.8904 27.9499 46.9204 27.9399C46.9404 27.9399 46.9704 27.94 46.9804 27.96C47.8004 29.92 48.2104 31.99 48.2104 34.13C48.2104 43.01 40.9304 50.24 31.9904 50.24Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M48.1204 15.6C48.1204 15.6 48.0704 15.58 48.0504 15.6C48.0304 15.62 48.0304 15.65 48.0504 15.66L49.2904 16.89L46.7804 19.38C46.7804 19.38 46.7604 19.4299 46.7804 19.4399C46.7904 19.4399 46.8004 19.4499 46.8104 19.4499C46.8204 19.4499 46.8304 19.4499 46.8404 19.4399L49.3504 16.9499L50.5904 18.1799C50.5904 18.1799 50.6104 18.1899 50.6204 18.1899C50.6304 18.1899 50.6404 18.1899 50.6504 18.1799C50.6704 18.1599 50.6704 18.13 50.6504 18.12L48.1104 15.6H48.1204Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.9197 15.66C15.9197 15.66 15.9397 15.61 15.9197 15.6C15.8997 15.58 15.8697 15.58 15.8497 15.6L13.3097 18.12C13.3097 18.12 13.2897 18.1699 13.3097 18.1899C13.3097 18.1899 13.3297 18.1999 13.3397 18.1999C13.3497 18.1999 13.3597 18.1999 13.3697 18.1899L14.6097 16.9599L17.1197 19.4499C17.1197 19.4499 17.1397 19.4599 17.1497 19.4599C17.1597 19.4599 17.1697 19.4599 17.1797 19.4499C17.1997 19.4299 17.1997 19.4 17.1797 19.38L14.6697 16.89L15.9097 15.66H15.9197Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.3799 9.75H29.5898V13.3199H34.3799V9.75Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.1804 9.75H27.7904C27.4604 9.75 27.1904 9.48003 27.1904 9.16003V5.58997C27.1904 5.25997 27.4604 5 27.7904 5H36.1804C36.5104 5 36.7804 5.26997 36.7804 5.58997V9.16003C36.7804 9.49003 36.5104 9.75 36.1804 9.75Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.1097 36.2399C32.9397 37.3999 31.0397 37.3999 29.8697 36.2399C28.6997 35.0799 28.6997 33.1999 29.8697 32.0299C31.0397 30.8699 32.9397 30.8699 34.1097 32.0299C35.2797 33.1899 35.2797 35.0699 34.1097 36.2399Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.1104 32.0799C34.1104 32.0799 34.0904 32.0799 34.0804 32.0699C34.0604 32.0499 34.0604 32.02 34.0804 32.01L42.5504 23.6C42.5504 23.6 42.6004 23.58 42.6204 23.6C42.6404 23.62 42.6404 23.65 42.6204 23.66L34.1504 32.0699C34.1504 32.0699 34.1304 32.0799 34.1204 32.0799H34.1104Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M28.1798 37.9701C28.1798 37.9701 28.1598 37.9701 28.1498 37.9601C28.1298 37.9401 28.1298 37.9101 28.1498 37.9001L29.8498 36.2201C29.8498 36.2201 29.8998 36.2001 29.9198 36.2201C29.9398 36.2401 29.9398 36.2701 29.9198 36.2801L28.2298 37.9601C28.2298 37.9601 28.2098 37.9701 28.1998 37.9701H28.1798Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TimerClockIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTimerClockIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
