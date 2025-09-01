import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledGearsSettingsIcon = styled(GearsSettingsIcon)<{
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

function GearsSettingsIcon({
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
      className={`GearsSettingsIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M28.1293 38.66C28.1293 34.91 25.0893 31.88 21.3493 31.88C17.6093 31.88 14.5693 34.92 14.5693 38.66C14.5693 42.4 17.6093 45.44 21.3493 45.44C25.0893 45.44 28.1293 42.4 28.1293 38.66Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.47 35.2601L38.45 35.8301C38.6 36.7501 38.68 37.7001 38.68 38.6601C38.68 39.6201 38.6 40.5701 38.45 41.4901L34.47 42.0601C34.15 43.2901 33.67 44.4601 33.03 45.5301L35.44 48.7401C34.33 50.2801 32.98 51.6401 31.43 52.7501L28.21 50.3401C27.14 50.9701 25.97 51.4601 24.74 51.7801L24.17 55.7601C23.25 55.9101 22.3 55.9901 21.34 55.9901C20.38 55.9901 19.43 55.9101 18.51 55.7601L17.94 51.7801C16.71 51.4601 15.54 50.9801 14.47 50.3401L11.26 52.7501C9.71 51.6401 8.36 50.2901 7.25 48.7401L9.66 45.5301C9.03 44.4601 8.54 43.2901 8.22 42.0601L4.24 41.4901C4.09 40.5701 4 39.6201 4 38.6601C4 37.7001 4.08 36.7501 4.24 35.8301L8.22 35.2601C8.54 34.0301 9.02 32.8601 9.66 31.7901L7.25 28.5801C8.36 27.0401 9.71 25.6801 11.26 24.5701L14.47 26.9801C15.54 26.3501 16.71 25.8601 17.94 25.5401L18.51 21.5601C19.43 21.4101 20.38 21.3301 21.34 21.3301C22.3 21.3301 23.25 21.4101 24.17 21.5601L24.74 25.5401C25.97 25.8601 27.14 26.3401 28.21 26.9801L31.43 24.5701C32.98 25.6801 34.33 27.0301 35.44 28.5801L33.03 31.7901C33.66 32.8601 34.15 34.0301 34.47 35.2601Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.6794 13.65C53.8094 14.26 53.8894 14.9 53.8894 15.55C53.8894 16.2 53.8094 16.84 53.6794 17.45L56.0094 19.28C55.5194 20.72 54.7494 22.03 53.7694 23.15L51.0094 22.04C50.0794 22.89 48.9594 23.56 47.7294 23.94L47.3094 26.88C46.5894 27.02 45.8394 27.1 45.0794 27.1C44.3194 27.1 43.5694 27.02 42.8494 26.88L42.4294 23.94C41.1894 23.55 40.0794 22.89 39.1494 22.04L36.3894 23.15C35.4094 22.03 34.6394 20.72 34.1494 19.28L36.4794 17.45C36.3494 16.84 36.2694 16.21 36.2694 15.55C36.2694 14.89 36.3494 14.26 36.4794 13.65L34.1494 11.82C34.6394 10.38 35.4094 9.07001 36.3894 7.95001L39.1494 9.06C40.0794 8.21 41.1994 7.55 42.4294 7.16L42.8494 4.22C43.5694 4.08 44.3194 4 45.0794 4C45.8394 4 46.5894 4.08 47.3094 4.22L47.7294 7.16C48.9694 7.55 50.0794 8.21 51.0094 9.06L53.7694 7.95001C54.7494 9.07001 55.5194 10.38 56.0094 11.82L53.6794 13.65Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.0895 19.95C47.5195 19.95 49.4895 17.9801 49.4895 15.55C49.4895 13.12 47.5195 11.15 45.0895 11.15C42.6594 11.15 40.6895 13.12 40.6895 15.55C40.6895 17.9801 42.6594 19.95 45.0895 19.95Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function GearsSettingsIconWithAccent(props: BrandIconProps) {
  return (
    <StyledGearsSettingsIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
