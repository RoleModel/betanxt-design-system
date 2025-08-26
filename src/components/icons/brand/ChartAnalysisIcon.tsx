import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledChartAnalysisIcon = styled(ChartAnalysisIcon)<{
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

function ChartAnalysisIcon({
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
      className={`ChartAnalysisIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M55 10C55 7.79 53.21 6 51 6C48.79 6 47 7.79 47 10V12H55V10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 54H9C6.79 54 5 52.21 5 50V48H39V50C39 52.21 40.79 54 43 54Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 6C13.7 6 11 8.7 11 12V48H39V50C39 52.21 40.79 54 43 54C45.21 54 47 52.21 47 50V10C47 7.79 48.79 6 51 6H17Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.5 28.5H26.5V38.5H31.5V28.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.5 32.5H17.5V38.5H22.5V32.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M40.5 30.5H35.5V38.5H40.5V30.5Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.4499 20.49C31.4499 20.49 31.4299 20.55 31.4199 20.59L35.5499 21.51C35.5499 21.51 35.5699 21.45 35.5799 21.41L31.4499 20.49Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.2598 22.94C22.2598 22.94 22.2898 23 22.3098 23.03L26.7498 21.06C26.7498 21.06 26.7198 21 26.6998 20.97L22.2598 22.94Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20 26.5C21.3807 26.5 22.5 25.3807 22.5 24C22.5 22.6193 21.3807 21.5 20 21.5C18.6193 21.5 17.5 22.6193 17.5 24C17.5 25.3807 18.6193 26.5 20 26.5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M29 22.5C30.3807 22.5 31.5 21.3807 31.5 20C31.5 18.6193 30.3807 17.5 29 17.5C27.6193 17.5 26.5 18.6193 26.5 20C26.5 21.3807 27.6193 22.5 29 22.5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 24.5C39.3807 24.5 40.5 23.3807 40.5 22C40.5 20.6193 39.3807 19.5 38 19.5C36.6193 19.5 35.5 20.6193 35.5 22C35.5 23.3807 36.6193 24.5 38 24.5Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function ChartAnalysisIconWithAccent(props: BrandIconProps) {
  return (
    <StyledChartAnalysisIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
