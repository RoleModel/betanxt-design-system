import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledAnalyticsChartIcon = styled(AnalyticsChartIcon)<{
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

function AnalyticsChartIcon({
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
      className={`AnalyticsChartIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M13.0596 23.9849C13.0596 23.9849 13.0896 24.0449 13.1096 24.0749L20.9996 19.2148C20.9996 19.2148 20.9696 19.1549 20.9496 19.1249L13.0596 23.9849Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.3698 18.4449C26.3698 18.4449 26.3498 18.5049 26.3398 18.5349L33.6198 20.7749C33.6198 20.7749 33.6398 20.7149 33.6498 20.6849L26.3698 18.4449Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38.6504 19.5449C38.6504 19.5449 38.6904 19.5949 38.7104 19.6249L47.3004 11.6949C47.3004 11.6949 47.2604 11.6449 47.2404 11.6149L38.6504 19.5449Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M6 54.6349V54.4849L54 54.4349V54.6349H6Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.0298 38.5649H6.0498V46.5449H15.0298V38.5649Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.9995 30.585H19.0195V46.5549H27.9995V30.585Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.9702 34.575H31.9902V46.5549H40.9702V34.575Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.9497 22.6049H44.9697V46.5549H53.9497V22.6049Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13.4454 26.2515C13.8248 24.6443 12.8293 23.0339 11.2222 22.6546C9.615 22.2753 8.00463 23.2706 7.62531 24.8778C7.24598 26.485 8.24134 28.0953 9.84851 28.4747C11.4557 28.854 13.0661 27.8587 13.4454 26.2515Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M26.418 18.2751C26.7974 16.668 25.802 15.0576 24.1948 14.6783C22.5877 14.2989 20.9773 15.2943 20.598 16.9015C20.2186 18.5087 21.214 20.119 22.8212 20.4984C24.4283 20.8777 26.0387 19.8823 26.418 18.2751Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39.3926 22.2588C39.772 20.6516 38.7766 19.0412 37.1694 18.6619C35.5623 18.2826 33.9519 19.278 33.5726 20.8851C33.1932 22.4923 34.1886 24.1027 35.7958 24.482C37.403 24.8613 39.0133 23.866 39.3926 22.2588Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M52.3624 10.2837C52.7417 8.67652 51.7463 7.06614 50.1392 6.68681C48.532 6.30749 46.9216 7.30286 46.5423 8.91003C46.163 10.5172 47.1583 12.1276 48.7655 12.5069C50.3727 12.8862 51.983 11.8909 52.3624 10.2837Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function AnalyticsChartIconWithAccent(props: BrandIconProps) {
  return (
    <StyledAnalyticsChartIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
