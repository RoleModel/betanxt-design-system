import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledBinaryCodeIcon = styled(BinaryCodeIcon)<{
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

function BinaryCodeIcon({
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
      className={`BinaryCodeIcon ${className || ''}`.trim()}
      {...props}
    >
      <mask
        id="mask0_15567_3024"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="7"
        width="53"
        height="41"
      >
        <path
          d="M4.50037 7.50006V47.2101H26.4204C25.2104 45.4601 24.5004 43.3401 24.5004 41.0501C24.5004 35.0201 29.4204 30.1301 35.5004 30.1301C41.5804 30.1301 46.5004 35.0201 46.5004 41.0501C46.5004 43.3301 45.7904 45.4501 44.5804 47.2101H56.5004V7.50006H4.50037Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_15567_3024)">
        <mask
          id="mask1_15567_3024"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="4"
          y="7"
          width="53"
          height="46"
        >
          <path d="M57 7H4V53H57V7Z" fill="white" />
        </mask>
        <g mask="url(#mask1_15567_3024)">
          <path
            d="M8.90002 18.6201C7.58002 18.6201 6.5 17.5501 6.5 16.2401V13.0601C6.5 11.7501 7.58002 10.6801 8.90002 10.6801C10.22 10.6801 11.3 11.7501 11.3 13.0601V16.2401C11.3 17.5501 10.22 18.6201 8.90002 18.6201Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.3 18.6201C21.98 18.6201 20.9 17.5501 20.9 16.2401V13.0601C20.9 11.7501 21.98 10.6801 23.3 10.6801C24.62 10.6801 25.7 11.7501 25.7 13.0601V16.2401C25.7 17.5501 24.62 18.6201 23.3 18.6201Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.7 18.6201C36.38 18.6201 35.3 17.5501 35.3 16.2401V13.0601C35.3 11.7501 36.38 10.6801 37.7 10.6801C39.02 10.6801 40.1 11.7501 40.1 13.0601V16.2401C40.1 17.5501 39.02 18.6201 37.7 18.6201Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52.1001 18.6201C50.7801 18.6201 49.7001 17.5501 49.7001 16.2401V13.0601C49.7001 11.7501 50.7801 10.6801 52.1001 10.6801C53.4201 10.6801 54.5001 11.7501 54.5001 13.0601V16.2401C54.5001 17.5501 53.4201 18.6201 52.1001 18.6201Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.1001 31.32C14.7801 31.32 13.7001 30.25 13.7001 28.94V25.76C13.7001 24.45 14.7801 23.38 16.1001 23.38C17.4201 23.38 18.5001 24.45 18.5001 25.76V28.94C18.5001 30.25 17.4201 31.32 16.1001 31.32Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.5 31.32C29.18 31.32 28.1 30.25 28.1 28.94V25.76C28.1 24.45 29.18 23.38 30.5 23.38C31.82 23.38 32.9 24.45 32.9 25.76V28.94C32.9 30.25 31.82 31.32 30.5 31.32Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.9 31.32C43.58 31.32 42.5 30.25 42.5 28.94V25.76C42.5 24.45 43.58 23.38 44.9 23.38C46.22 23.38 47.3 24.45 47.3 25.76V28.94C47.3 30.25 46.22 31.32 44.9 31.32Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.90002 44.03C7.58002 44.03 6.5 42.96 6.5 41.65V38.47C6.5 37.16 7.58002 36.09 8.90002 36.09C10.22 36.09 11.3 37.16 11.3 38.47V41.65C11.3 42.96 10.22 44.03 8.90002 44.03Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.3 44.03C21.98 44.03 20.9 42.96 20.9 41.65V38.47C20.9 37.16 21.98 36.09 23.3 36.09C24.62 36.09 25.7 37.16 25.7 38.47V41.65C25.7 42.96 24.62 44.03 23.3 44.03Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.7 44.03C36.38 44.03 35.3 42.96 35.3 41.65V38.47C35.3 37.16 36.38 36.09 37.7 36.09C39.02 36.09 40.1 37.16 40.1 38.47V41.65C40.1 42.96 39.02 44.03 37.7 44.03Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52.1001 44.03C50.7801 44.03 49.7001 42.96 49.7001 41.65V38.47C49.7001 37.16 50.7801 36.09 52.1001 36.09C53.4201 36.09 54.5001 37.16 54.5001 38.47V41.65C54.5001 42.96 53.4201 44.03 52.1001 44.03Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.1501 10.67H16.05V18.61H16.1501V10.67Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.5501 10.67H30.4501V18.61H30.5501V10.67Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.95 10.67H44.85V18.61H44.95V10.67Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8.94998 23.38H8.84998V31.32H8.94998V23.38Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M23.35 23.38H23.25V31.32H23.35V23.38Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M37.75 23.38H37.65V31.32H37.75V23.38Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M52.1501 23.38H52.05V31.32H52.1501V23.38Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.1501 36.09H16.05V44.03H16.1501V36.09Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.5501 36.09H30.4501V44.03H30.5501V36.09Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M44.95 36.09H44.85V44.03H44.95V36.09Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <mask
        id="mask2_15567_3024"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="4"
        y="7"
        width="53"
        height="46"
      >
        <path d="M57 7H4V53H57V7Z" fill="white" />
      </mask>
      <g mask="url(#mask2_15567_3024)">
        <path
          d="M4.50037 7.50006V47.2101H26.4204C25.2104 45.4601 24.5004 43.3401 24.5004 41.0501C24.5004 35.0201 29.4204 30.1301 35.5004 30.1301C41.5804 30.1301 46.5004 35.0201 46.5004 41.0501C46.5004 43.3301 45.7904 45.4501 44.5804 47.2101H56.5004V7.50006H4.50037Z"
          strokeWidth="2"
          strokeMiterlimit="10"
        />
        <path
          d="M35.5004 51.9701C41.5755 51.9701 46.5004 47.081 46.5004 41.0501C46.5004 35.0191 41.5755 30.1301 35.5004 30.1301C29.4252 30.1301 24.5004 35.0191 24.5004 41.0501C24.5004 47.081 29.4252 51.9701 35.5004 51.9701Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M46.4604 52.01L43.2404 48.8101L43.3103 48.7401L46.5303 51.94L46.4604 52.01Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M33.0004 37.32L32.9504 37.3L29.7104 44.76L29.8004 44.8L30.6505 42.85H35.3405L36.1904 44.8L36.2804 44.76L33.0404 37.3L32.9904 37.32H33.0004ZM30.7004 42.75L33.0004 37.45L35.3004 42.75H30.7004Z"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M39.2804 37.3201H39.1804V44.7801H39.2804V37.3201Z"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </SvgIcon>
  )
}

export default function BinaryCodeIconWithAccent(props: BrandIconProps) {
  return (
    <StyledBinaryCodeIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
