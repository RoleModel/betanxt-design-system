import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledMountainChartIcon = styled(MountainChartIcon)<{
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

function MountainChartIcon({
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
      className={`MountainChartIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M6.10001 51.9V8H6V51.95H6.05002V52H54V51.9H6.10001Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M54.0003 44.0099C50.1603 44.0099 49.0003 37.3 47.7603 30.2C47.0003 25.84 46.2203 21.3299 44.7903 17.8599C43.1703 13.9399 40.9603 12.0399 38.0103 12.0399C35.0603 12.0399 32.8503 13.9499 31.2403 17.8599C29.8103 21.3199 29.0303 25.83 28.2703 30.2C27.0403 37.3 25.8703 44.0099 22.0303 44.0099V43.9099C25.7803 43.9099 26.9403 37.2399 28.1703 30.1899C29.6603 21.6399 31.3403 11.95 38.0103 11.95C44.6803 11.95 46.3703 21.6399 47.8503 30.1899C49.0803 37.2499 50.2403 43.9099 53.9903 43.9099V44.0099H54.0003Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.01 44.0099C36.12 44.0099 34.9301 38.9799 33.6801 33.6499C32.1701 27.2699 30.46 20.0399 25.53 20.0399C20.6 20.0399 18.89 27.2699 17.38 33.6499C16.12 38.9799 14.93 44.0099 12.04 44.0099V43.9099C14.85 43.9099 16.03 38.9099 17.28 33.6199C18.8 27.1999 20.51 19.9299 25.53 19.9299C30.55 19.9299 32.26 27.1999 33.78 33.6199C35.03 38.9099 36.2101 43.9099 39.0201 43.9099V44.0099H39.01Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function MountainChartIconWithAccent(props: BrandIconProps) {
  return (
    <StyledMountainChartIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
