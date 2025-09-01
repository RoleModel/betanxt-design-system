import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTeamQuestionIcon = styled(TeamQuestionIcon)<{
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

function TeamQuestionIcon({
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
      className={`TeamQuestionIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M17 37C19.21 37 21 35.21 21 33V23C21 21.49 20.03 20.14 18.59 19.66L16 19L12 23L8 19L5.41 19.66C3.98 20.13 3 21.49 3 23V33C3 35.21 4.79 37 7 37"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M12 17C14.2091 17 16 15.2091 16 13C16 10.7909 14.2091 9 12 9C9.79086 9 8 10.7909 8 13C8 15.2091 9.79086 17 12 17Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M17 25V50C17 50.55 16.55 51 16 51H8C7.45 51 7 50.55 7 50V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M12 35V51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M53 37C55.21 37 57 35.21 57 33V23C57 21.49 56.03 20.14 54.59 19.66L52 19L48 23L44 19L41.41 19.66C39.98 20.13 39 21.49 39 23V33C39 35.21 40.79 37 43 37"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M48 17C50.2091 17 52 15.2091 52 13C52 10.7909 50.2091 9 48 9C45.7909 9 44 10.7909 44 13C44 15.2091 45.7909 17 48 17Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M53 25V50C53 50.55 52.55 51 52 51H44C43.45 51 43 50.55 43 50V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M48 35V51" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M30 35C31.1046 35 32 34.1046 32 33C32 31.8954 31.1046 31 30 31C28.8954 31 28 31.8954 28 33C28 34.1046 28.8954 35 30 35Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M32 26C32 27.1 31.1 28 30 28C28.9 28 28 27.1 28 26V24.92C28 22.42 29.33 20.07 31.47 18.79C32.41 18.22 33 17.19 33 16.09C33 14.35 31.65 13 30 13C28.35 13 27 14.35 27 16C27 17.1 26.1 18 25 18C23.9 18 23 17.1 23 16C23 12.14 26.14 9 30 9C33.86 9 37 12.14 37 16C37 18.58 35.67 20.93 33.53 22.22C32.59 22.79 32 23.82 32 24.92V26Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamQuestionIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamQuestionIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
