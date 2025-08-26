import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledDigitalLibraryIcon = styled(DigitalLibraryIcon)<{
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

function DigitalLibraryIcon({
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
      className={`DigitalLibraryIcon ${className || ''}`.trim()}
      {...props}
    >
      <g clipPath="url(#clip0_15567_3183)">
        <path
          d="M40.2979 6.66508C40.2979 6.66508 41.9504 1.54008 56.1104 1.01008C56.399 0.982275 56.6903 1.01215 56.9673 1.09795C57.2443 1.18376 57.5015 1.32379 57.7239 1.5099C57.9463 1.696 58.1295 1.92447 58.2628 2.18202C58.3961 2.43956 58.4768 2.72104 58.5004 3.01008V24.0376C58.4464 24.5954 58.1803 25.1111 57.7569 25.4783C57.3334 25.8454 56.7852 26.0358 56.2254 26.0101C41.9754 26.5101 40.2979 31.6676 40.2979 31.6676V6.66758"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.2972 6.66508C40.2972 6.66508 38.6447 1.54008 24.4847 1.01008C24.1961 0.982275 23.9048 1.01215 23.6278 1.09795C23.3507 1.18376 23.0936 1.32379 22.8712 1.5099C22.6488 1.696 22.4656 1.92447 22.3323 2.18202C22.199 2.43956 22.1182 2.72104 22.0947 3.01008V24.0376C22.1486 24.5954 22.4148 25.1111 22.8382 25.4783C23.2616 25.8454 23.8099 26.0358 24.3697 26.0101C38.6197 26.5101 40.2972 31.6676 40.2972 31.6676V6.66758"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M12.25 58.51H47.25"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.5 53.51V58.51"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M1 43.51H58.5"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M58.5 33.51V49.76C58.5 50.7546 58.1049 51.7084 57.4016 52.4117C56.6984 53.1149 55.7446 53.51 54.75 53.51H4.75C3.75544 53.51 2.80161 53.1149 2.09835 52.4117C1.39509 51.7084 1 50.7546 1 49.76V12.26C1 11.2654 1.39509 10.3116 2.09835 9.60836C2.80161 8.9051 3.75544 8.51001 4.75 8.51001H14.75"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M52.2505 9.42261C50.0971 9.64016 47.9738 10.0911 45.918 10.7676"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.3496 9.42505C30.567 9.64555 32.752 10.1186 34.8621 10.835"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M52.2128 16.9275C50.0677 17.1471 47.9528 17.5989 45.9053 18.275"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.3848 16.9275C30.5905 17.1501 32.7636 17.6231 34.8623 18.3375"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
      <defs>
        <clipPath id="clip0_15567_3183">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}

export default function DigitalLibraryIconWithAccent(props: BrandIconProps) {
  return (
    <StyledDigitalLibraryIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
