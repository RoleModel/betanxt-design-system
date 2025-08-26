import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledRocketIcon = styled(RocketIcon)<{
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

function RocketIcon({
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
      className={`RocketIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M43.2101 38.0788C50.7201 30.5688 53.4301 20.0688 51.3301 10.3988C51.1401 9.53881 50.4801 8.87885 49.6201 8.68885C39.9501 6.58885 29.4501 9.28885 21.9401 16.8088C19.0101 19.7388 16.8201 23.1188 15.3601 26.7288C15.0301 27.5488 15.2001 28.4888 15.8301 29.1088L30.9101 44.1888C31.5401 44.8188 32.4701 44.9889 33.3001 44.6589C36.9101 43.1989 40.2901 41.0088 43.2201 38.0788H43.2101Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.7796 48.9287C45.2496 45.4587 46.3397 40.4588 45.0497 36.0388C44.4697 36.7388 43.8596 37.4287 43.1996 38.0787C39.8996 41.3787 36.0196 43.7387 31.8896 45.1887L38.7097 52.0088L41.7796 48.9387V48.9287Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.93 16.8088C22.59 16.1488 23.27 15.5487 23.97 14.9687C19.54 13.6787 14.55 14.7688 11.07 18.2388L8 21.3087L14.82 28.1288C16.26 23.9988 18.62 20.1188 21.93 16.8188V16.8088Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.68 28.9788C14.9 31.1988 14.43 33.5087 14.25 35.8287L24.18 45.7588C26.5 45.5788 28.81 45.1087 31.03 44.3287L15.68 28.9788Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.1702 29.3489C40.7655 29.3489 43.6802 26.4342 43.6802 22.8389C43.6802 19.2435 40.7655 16.3289 37.1702 16.3289C33.5748 16.3289 30.6602 19.2435 30.6602 22.8389C30.6602 26.4342 33.5748 29.3489 37.1702 29.3489Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.6 44.1687C20.73 46.0387 14.48 45.5187 14.48 45.5187C14.48 45.5187 13.97 39.2687 15.83 37.3987L22.59 44.1587L22.6 44.1687Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function RocketIconWithAccent(props: BrandIconProps) {
  return (
    <StyledRocketIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
