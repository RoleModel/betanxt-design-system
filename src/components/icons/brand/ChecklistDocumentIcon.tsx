import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledChecklistDocumentIcon = styled(ChecklistDocumentIcon)<{
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

function ChecklistDocumentIcon({
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
      className={`ChecklistDocumentIcon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M46 10H37.45C39.04 11.06 40 12.46 40 14H20C20 12.46 20.96 11.06 22.55 10H14C11.79 10 10 11.79 10 14V52C10 54.21 11.79 56 14 56H46C48.21 56 50 54.21 50 52V14C50 11.79 48.21 10 46 10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M37.45 10C36.49 9.36 35.3 8.83999 33.95 8.48999C33.97 8.32999 34 8.17 34 8C34 5.79 32.21 4 30 4C27.79 4 26 5.79 26 8C26 8.17 26.03 8.32999 26.05 8.48999C24.7 8.83999 23.51 9.36 22.55 10C20.96 11.06 20 12.46 20 14H40C40 12.46 39.03 11.06 37.45 10Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M20.9603 21.89L17.6603 25.1899L16.0303 23.5599C16.0303 23.5599 15.9803 23.5399 15.9603 23.5599C15.9403 23.5799 15.9403 23.61 15.9603 23.63L17.6303 25.2999C17.6303 25.2999 17.6503 25.3099 17.6703 25.3099C17.6903 25.3099 17.7003 25.3099 17.7103 25.2999L21.0403 21.97C21.0403 21.97 21.0603 21.92 21.0403 21.9C21.0203 21.88 20.9903 21.88 20.9703 21.9L20.9603 21.89Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.0002 23.64H27.0002C27.0002 23.64 26.9502 23.62 26.9502 23.59C26.9502 23.56 26.9702 23.54 27.0002 23.54H44.0002C44.0002 23.54 44.0502 23.56 44.0502 23.59C44.0502 23.62 44.0302 23.64 44.0002 23.64Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 32.0898H16V37.0898H21V32.0898Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.0002 34.64H27.0002C27.0002 34.64 26.9502 34.62 26.9502 34.59C26.9502 34.56 26.9702 34.54 27.0002 34.54H44.0002C44.0002 34.54 44.0502 34.56 44.0502 34.59C44.0502 34.62 44.0302 34.64 44.0002 34.64Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21 43.0898H16V48.0898H21V43.0898Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.0002 45.64H27.0002C27.0002 45.64 26.9502 45.62 26.9502 45.59C26.9502 45.56 26.9702 45.54 27.0002 45.54H44.0002C44.0002 45.54 44.0502 45.56 44.0502 45.59C44.0502 45.62 44.0302 45.64 44.0002 45.64Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function ChecklistDocumentIconWithAccent(props: BrandIconProps) {
  return (
    <StyledChecklistDocumentIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
