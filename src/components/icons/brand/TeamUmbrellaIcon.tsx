import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTeamUmbrellaIcon = styled(TeamUmbrellaIcon)<{
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

function TeamUmbrellaIcon({
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
      className={`TeamUmbrellaIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M14.5502 19C14.2102 19.59 13.9902 20.27 13.9902 21C13.9902 23.21 15.7802 25 17.9902 25C20.2002 25 21.9902 23.21 21.9902 21C21.9902 20.27 21.7802 19.59 21.4402 19"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M26.5502 19C26.2102 19.59 25.9902 20.27 25.9902 21C25.9902 23.21 27.7802 25 29.9902 25C32.2002 25 33.9902 23.21 33.9902 21C33.9902 20.27 33.7802 19.59 33.4402 19"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M38.5502 19C38.2102 19.59 37.9902 20.27 37.9902 21C37.9902 23.21 39.7802 25 41.9902 25C44.2002 25 45.9902 23.21 45.9902 21C45.9902 20.27 45.7802 19.59 45.4402 19"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M53 19C53 19 49 3 30 3C11 3 7 19 7 19H53Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M43 19C43 19 40.74 3 30 3C19.26 3 17 19 17 19"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path d="M30 3V19" stroke="#34C0F3" strokeWidth="2" strokeLinejoin="round" />
      <path
        d="M35 43C37.21 43 39 41.21 39 39V30.71C39 29.07 38 27.6 36.48 27L34 26.01L30 30.01L26 26.01L23.51 27C21.99 27.61 21 29.08 21 30.71V39C21 41.21 22.79 43 25 43"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M35 32V56C35 56.55 34.55 57 34 57H26C25.45 57 25 56.55 25 56V32"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M30 44V57" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M47 42C49.21 42 51 40.21 51 38V30.71C51 29.07 50 27.6 48.48 27L46 26.01L43 29.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M47 32V54C47 54.55 46.55 55 46 55H39"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 42C10.79 42 9 40.21 9 38V30.71C9 29.07 9.99998 27.6 11.51 27L14 26.01L17 29.01"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M13 32V54C13 54.55 13.45 55 14 55H21"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M42 44V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M18 44V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </SvgIcon>
  )
}

export default function TeamUmbrellaIconWithAccent(props: BrandIconProps) {
  return (
    <StyledTeamUmbrellaIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
