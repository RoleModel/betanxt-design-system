import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledHandsCareIcon = styled(HandsCareIcon)<{
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

function HandsCareIcon({
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
      className={`HandsCareIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M8.42999 27.9213L7.23999 18.8513C7.09999 17.7913 6.2 17.0013 5.13 17.0013C3.95 17.0013 3 17.9513 3 19.1313V34.3413C3 35.4013 3.42004 36.4213 4.17004 37.1713L12.41 45.4113C12.79 45.7913 13 46.2914 13 46.8214V46.9913"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M27.0002 47.0014V43.1813C27.0002 38.9413 24.0502 35.2114 19.8902 34.3814C19.3002 34.2614 18.6603 34.1714 17.9803 34.1114C17.0403 34.0214 16.1602 33.6314 15.4902 32.9614L11.1502 28.6114C10.2202 27.6914 8.72023 27.5114 7.70023 28.3414C6.54023 29.2914 6.47022 31.0114 7.51022 32.0514L14.4702 39.0113"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 53.0013V47.0013H27V53.0013"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M51.5602 27.9213L52.7502 18.8513C52.8902 17.7913 53.7903 17.0013 54.8603 17.0013C56.0403 17.0013 56.9902 17.9513 56.9902 19.1313V34.3413C56.9902 35.4013 56.5703 36.4213 55.8203 37.1713L47.5803 45.4113C47.2003 45.7913 46.9902 46.2914 46.9902 46.8214V46.9913"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M33 47.0014V43.1813C33 38.9413 35.95 35.2114 40.11 34.3814C40.7 34.2614 41.34 34.1714 42.02 34.1114C42.96 34.0214 43.84 33.6314 44.51 32.9614L48.85 28.6114C49.78 27.6914 51.28 27.5114 52.3 28.3414C53.47 29.2914 53.53 31.0114 52.49 32.0514L45.53 39.0113"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 53.0013V47.0013H33V53.0013"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.94 11.2214C35.45 14.6014 32.58 17.4614 29.2 16.9414C27.09 16.6114 25.38 14.8914 25.06 12.7814C24.55 9.40137 27.42 6.54137 30.8 7.06137C32.9 7.39137 34.62 9.11137 34.94 11.2214Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M41 26.0013V23.8813C41 22.1613 39.9 20.6313 38.26 20.0913L35 19.0013L30 24.0013L25 19.0013L21.73 20.0913C20.1 20.6313 19 22.1613 19 23.8813V26.0013C19 27.6613 20.34 29.0013 22 29.0013H38C39.66 29.0013 41 27.6613 41 26.0013Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function HandsCareIconWithAccent(props: BrandIconProps) {
  return (
    <StyledHandsCareIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
