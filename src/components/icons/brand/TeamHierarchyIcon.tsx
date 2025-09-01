import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types.js'
import { getFontSizeValue } from './types.js'

const StyledTeamHierarchyIcon = styled(TeamHierarchyIcon)<{
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

function TeamHierarchyIcon({
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
      className={`TeamHierarchyIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M13 45.0013C15.2091 45.0013 17 43.2105 17 41.0013C17 38.7922 15.2091 37.0013 13 37.0013C10.7909 37.0013 9 38.7922 9 41.0013C9 43.2105 10.7909 45.0013 13 45.0013Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M7 51.0013C7 47.6913 9.69 45.0013 13 45.0013C16.31 45.0013 19 47.6913 19 51.0013H7Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 49.0013C32.2091 49.0013 34 47.2105 34 45.0013C34 42.7922 32.2091 41.0013 30 41.0013C27.7909 41.0013 26 42.7922 26 45.0013C26 47.2105 27.7909 49.0013 30 49.0013Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M24 55.0013C24 51.6913 26.69 49.0013 30 49.0013C33.31 49.0013 36 51.6913 36 55.0013H24Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M47 45.0013C49.2091 45.0013 51 43.2105 51 41.0013C51 38.7922 49.2091 37.0013 47 37.0013C44.7909 37.0013 43 38.7922 43 41.0013C43 43.2105 44.7909 45.0013 47 45.0013Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M41 51.0013C41 47.6913 43.69 45.0013 47 45.0013C50.31 45.0013 53 47.6913 53 51.0013H41Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M34.94 9.22137C35.45 12.6014 32.58 15.4614 29.2 14.9414C27.09 14.6114 25.38 12.8914 25.06 10.7814C24.55 7.40137 27.42 4.54137 30.8 5.06137C32.9 5.39137 34.62 7.11137 34.94 9.21137V9.22137Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M13 37.0013V35.0013C13 33.9013 13.9 33.0013 15 33.0013H45C46.1 33.0013 47 33.9013 47 35.0013V37.0013"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M30 41.0013V27.0013"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41 24.0013V21.1613C41 19.8713 40.17 18.7213 38.95 18.3113L35 16.9913L30 21.9913L25 16.9913L21.05 18.3113C19.82 18.7213 19 19.8613 19 21.1613V24.0013C19 25.6613 20.34 27.0013 22 27.0013H38C39.66 27.0013 41 25.6613 41 24.0013Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamHierarchyIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamHierarchyIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
