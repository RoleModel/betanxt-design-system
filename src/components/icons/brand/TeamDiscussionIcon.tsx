import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTeamDiscussionIcon = styled(TeamDiscussionIcon)<{
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

function TeamDiscussionIcon({
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
      className={`TeamDiscussionIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M15 23C11.69 23 9 20.31 9 17V11C9 7.69 11.69 5 15 5H45C48.31 5 51 7.69 51 11V17C51 20.31 48.31 23 45 23H34L30 29L26 23H15Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M20 15C20.5523 15 21 14.5523 21 14C21 13.4477 20.5523 13 20 13C19.4477 13 19 13.4477 19 14C19 14.5523 19.4477 15 20 15Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 15C30.5523 15 31 14.5523 31 14C31 13.4477 30.5523 13 30 13C29.4477 13 29 13.4477 29 14C29 14.5523 29.4477 15 30 15Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M40 15C40.5523 15 41 14.5523 41 14C41 13.4477 40.5523 13 40 13C39.4477 13 39 13.4477 39 14C39 14.5523 39.4477 15 40 15Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30 43C32.7614 43 35 40.7614 35 38C35 35.2386 32.7614 33 30 33C27.2386 33 25 35.2386 25 38C25 40.7614 27.2386 43 30 43Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M41 52V48.8C41 47.72 40.31 46.77 39.29 46.43L35 45L30 50L25 45L20.71 46.43C19.69 46.77 19 47.72 19 48.8V52C19 53.66 20.34 55 22 55H38C39.66 55 41 53.66 41 52Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M14 37C16.7614 37 19 34.7614 19 32C19 29.2386 16.7614 27 14 27C11.2386 27 9 29.2386 9 32C9 34.7614 11.2386 37 14 37Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M46 37C48.7614 37 51 34.7614 51 32C51 29.2386 48.7614 27 46 27C43.2386 27 41 29.2386 41 32C41 34.7614 43.2386 37 46 37Z"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M41.0001 49H54.0001C55.6601 49 57.0001 47.66 57.0001 46V42.8C57.0001 41.72 56.3101 40.77 55.2901 40.43L51.0001 39L46.0001 44L41.0001 39L38.8301 39.72"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.17 39.72L19 39L14 44L9 39L4.71 40.43C3.69 40.77 3 41.73 3 42.8V46C3 47.66 4.34 49 6 49H19"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function TeamDiscussionIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamDiscussionIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
