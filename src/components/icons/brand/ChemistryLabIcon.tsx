import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledChemistryLabIcon = styled(ChemistryLabIcon)<{
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

function ChemistryLabIcon({
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
      className={`ChemistryLabIcon ${className || ''}`.trim()}
      {...props}
    >
      <mask
        id="mask0_15567_2365"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="7"
        y="6"
        width="34"
        height="48"
      >
        <path
          d="M20.61 5.99994C19.51 5.99994 18.61 6.89994 18.61 7.99994C18.61 9.09994 19.51 9.99994 20.61 9.99994V22.95C20.61 24 20.33 25.04 19.81 25.95L8.81004 44.9999C6.50004 48.9999 9.39004 53.9999 14 53.9999H40.99C34.92 53.9999 29.99 49.0699 29.99 42.9999C29.99 37.5999 33.88 33.1199 39.01 32.1899L35.41 25.95C34.88 25.04 34.61 24 34.61 22.95V9.99994C35.71 9.99994 36.61 9.09994 36.61 7.99994C36.61 6.89994 35.71 5.99994 34.61 5.99994H20.61Z"
          fill="white"
        />
      </mask>
      <g mask="url(#mask0_15567_2365)">
        <mask
          id="mask1_15567_2365"
          style={{ maskType: 'luminance' }}
          maskUnits="userSpaceOnUse"
          x="7"
          y="5"
          width="46"
          height="50"
        >
          <path d="M53 5H7V55H53V5Z" fill="white" />
        </mask>
        <g mask="url(#mask1_15567_2365)">
          <path
            d="M34.61 10H20.61C19.51 10 18.61 9.1 18.61 8C18.61 6.9 19.51 6 20.61 6H34.61C35.71 6 36.61 6.9 36.61 8C36.61 9.1 35.71 10 34.61 10Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M13.61 37C15.4 38.79 17.88 39.9 20.61 39.9C26.98 39.9 31.23 32.1 38.61 32.1M46.42 45L35.42 25.95C34.89 25.04 34.62 24 34.62 22.95V10H20.62V22.95C20.62 24 20.34 25.04 19.82 25.95L8.82003 45C6.51003 49 9.40003 54 14.02 54H41.24C45.86 54 48.74 49 46.44 45H46.42Z"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </g>
      </g>
      <mask
        id="mask2_15567_2365"
        style={{ maskType: 'luminance' }}
        maskUnits="userSpaceOnUse"
        x="7"
        y="5"
        width="46"
        height="50"
      >
        <path d="M53 5H7V55H53V5Z" fill="white" />
      </mask>
      <g mask="url(#mask2_15567_2365)">
        <path
          d="M29.9997 42.9999C29.9997 37.5999 33.8897 33.1199 39.0197 32.1899L35.4197 25.95C34.8897 25.04 34.6197 24 34.6197 22.95V9.99994C35.7197 9.99994 36.6197 9.09994 36.6197 7.99994C36.6197 6.89994 35.7197 5.99994 34.6197 5.99994H20.6197C19.5197 5.99994 18.6197 6.89994 18.6197 7.99994C18.6197 9.09994 19.5197 9.99994 20.6197 9.99994V22.95C20.6197 24 20.3397 25.04 19.8197 25.95L8.81974 44.9999C6.50974 48.9999 9.39974 53.9999 14.0097 53.9999H40.9997C34.9297 53.9999 29.9997 49.0699 29.9997 42.9999Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M40.9997 53.9999C47.0748 53.9999 51.9997 49.0751 51.9997 42.9999C51.9997 36.9248 47.0748 31.9999 40.9997 31.9999C34.9246 31.9999 29.9997 36.9248 29.9997 42.9999C29.9997 49.0751 34.9246 53.9999 40.9997 53.9999Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M41.0497 38.9999H40.9497V46.9999H41.0497V38.9999Z"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M37.0497 42.9999H36.9497V46.9999H37.0497V42.9999Z"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M45.0497 40.9999H44.9497V46.9999H45.0497V40.9999Z"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </g>
    </SvgIcon>
  )
}

export default function ChemistryLabIconWithAccent(props: BrandIconProps) {
  return (
    <StyledChemistryLabIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
