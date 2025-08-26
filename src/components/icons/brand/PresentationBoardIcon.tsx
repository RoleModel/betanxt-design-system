import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledPresentationBoardIcon = styled(PresentationBoardIcon)<{
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

function PresentationBoardIcon({
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
      className={`PresentationBoardIcon ${className || ''}`.trim()}
      {...props}
    >
      <path d="M34 49V39" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M28 55L34 49L40 55"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M9 39C6.79 39 5 37.21 5 35V21.23C5 19.72 5.97003 18.37 7.41003 17.89L10 17L15 22L20 17H36.89C37.89 17 38.81 17.68 38.97 18.66C39.17 19.91 38.21 21 37 21H24C22.34 21 21 22.34 21 24V54C21 54.55 20.55 55 20 55H10C9.45 55 9 54.55 9 54V25"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M15 37V55" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      <path
        d="M20 9H52C53.66 9 55 10.34 55 12V36C55 37.66 53.66 39 52 39H25"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15 15C17.7614 15 20 12.7614 20 10C20 7.23858 17.7614 5 15 5C12.2386 5 10 7.23858 10 10C10 12.7614 12.2386 15 15 15Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function PresentationBoardIconWithAccent(props: BrandIconProps) {
  return (
    <StyledPresentationBoardIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
