import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledPersonGrowthIcon = styled(PersonGrowthIcon)<{
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

function PersonGrowthIcon({
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
      className={`PersonGrowthIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M20 15C22.7614 15 25 12.7614 25 10C25 7.23858 22.7614 5 20 5C17.2386 5 15 7.23858 15 10C15 12.7614 17.2386 15 20 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M27.5902 39.47L23.4602 34.55C23.1602 34.19 22.9902 33.74 22.9902 33.26V21.99C22.9902 19.23 20.7502 16.99 17.9902 16.99H16.6502C15.5902 16.99 14.5702 17.41 13.8202 18.16L8.16023 23.82C7.41023 24.57 6.99023 25.59 6.99023 26.65V32.99C6.99023 34.09 7.89023 34.99 8.99023 34.99C10.0902 34.99 10.9902 34.09 10.9902 32.99V27.4C10.9902 27.14 11.1002 26.88 11.2802 26.69L14.9902 22.98V31.59C14.9902 33 15.4902 34.37 16.3902 35.45L22.7502 43.03C22.9002 43.21 22.9802 43.44 22.9802 43.67V51.81C22.9802 53.43 24.2002 54.89 25.8202 54.98C27.5502 55.07 28.9802 53.69 28.9802 51.98V43.31C28.9802 41.9 28.4802 40.53 27.5802 39.45L27.5902 39.47Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M23 27.8299L29.59 34.4199C30.37 35.1999 31.64 35.1999 32.42 34.4199C33.2 33.6399 33.2 32.3699 32.42 31.5899L23.01 22.1799"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M53 37V25H57L50 13L43 25H47V43H41V49H35V55H26"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14 35H4C3.44772 35 3 35.4477 3 36V42C3 42.5523 3.44772 43 4 43H14C14.5523 43 15 42.5523 15 42V36C15 35.4477 14.5523 35 14 35Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12.0797 43L9.17973 50.97C8.60973 52.53 9.41973 54.25 10.9697 54.81C12.5297 55.38 14.2497 54.57 14.8197 53.02L19.7597 39.46"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M15.4203 33.8101L14.8203 35.4701" strokeWidth="2" strokeLinejoin="round" />
    </SvgIcon>
  )
}

export default function PersonGrowthIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPersonGrowthIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
