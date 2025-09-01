import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTeamPhotoIcon = styled(TeamPhotoIcon)<{
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

function TeamPhotoIcon({
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
      className={`TeamPhotoIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M21 21C21 19.49 20.03 18.14 18.59 17.66L16 17L12 21L8 17L5.41003 17.66C3.98003 18.13 3 19.49 3 21V31C3 33.21 4.79 35 7 35"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 15C14.2091 15 16 13.2091 16 11C16 8.79086 14.2091 7 12 7C9.79086 7 8 8.79086 8 11C8 13.2091 9.79086 15 12 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M12 33V49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M30 15C32.2091 15 34 13.2091 34 11C34 8.79086 32.2091 7 30 7C27.7909 7 26 8.79086 26 11C26 13.2091 27.7909 15 30 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M48 15C50.2091 15 52 13.2091 52 11C52 8.79086 50.2091 7 48 7C45.7909 7 44 8.79086 44 11C44 13.2091 45.7909 15 48 15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M48 33V49" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M30 53C38.2843 53 45 46.2843 45 38C45 29.7157 38.2843 23 30 23C21.7157 23 15 29.7157 15 38C15 46.2843 21.7157 53 30 53Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 46C34.4183 46 38 42.4183 38 38C38 33.5817 34.4183 30 30 30C25.5817 30 22 33.5817 22 38C22 42.4183 25.5817 46 30 46Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 39C30.5523 39 31 38.5523 31 38C31 37.4477 30.5523 37 30 37C29.4477 37 29 37.4477 29 38C29 38.5523 29.4477 39 30 39Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53 35C55.21 35 57 33.21 57 31V21C57 19.49 56.03 18.14 54.59 17.66L52 17L48 21L44 17L41.41 17.66C39.98 18.14 39 19.49 39 21"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 23V48C7 48.55 7.45 49 8 49H15"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M17 30.54V23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45 49H52C52.55 49 53 48.55 53 48V23"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M43 23V30.54"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M39 26.02V21C39 19.49 38.03 18.14 36.59 17.66L34 17L30 21L26 17L23.41 17.66C21.98 18.13 21 19.49 21 21V26.02"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamPhotoIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamPhotoIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
