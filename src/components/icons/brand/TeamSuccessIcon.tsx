import { SvgIcon, styled } from '@mui/material'
import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledTeamSuccessIcon = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== 'accentColor' && prop !== 'fontSize',
})<{ accentColor?: string; fontSize?: BrandIconProps['fontSize'] }>(({ theme, accentColor = '#34C0F3', fontSize }) => [
  {
    fill: 'none', // Prevents MUI's default fill
    width: fontSize ? getFontSizeValue(fontSize) : '1.25rem',
    height: fontSize ? getFontSizeValue(fontSize) : '1.25rem',
    '& path:not([stroke])': {
      stroke: theme.vars.palette.text.primary,
    },
    '& path[stroke="#34C0F3"]': {
      stroke: accentColor,
    },
  },
  theme.applyStyles('dark', {
    '& path:not([stroke])': {
      stroke: theme.vars.palette.common.white,
    },
  }),
])

export default function TeamSuccessIconWithAccent({
  accentColor = '#34C0F3',
  fontSize,
  className,
  ...otherProps
}: BrandIconProps) {
  return (
    <StyledTeamSuccessIcon
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`TeamSuccessIcon ${className || ''}`.trim()}
      accentColor={accentColor}
      fontSize={fontSize}
      {...(otherProps as any)}
    >
      <path
        d="M30.0107 37.0009V55.0009"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M44.0107 37.0009V53.0009"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.0107 37.0009V53.0009"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M21.2407 16.5308L16.0007 25.0008L6.79069 10.1108C6.32069 9.25083 5.30069 8.78082 4.37069 9.10082C3.16069 9.51082 2.67069 10.8508 3.23069 11.9308L11.0007 25.0008V52.0008C11.0007 52.5508 11.4507 53.0008 12.0007 53.0008H20.0007C20.5507 53.0008 21.0007 52.5508 21.0007 52.0008V25.0008L23.6107 20.6108"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M36.4004 20.6109L39.0104 25.0009V52.0009C39.0104 52.5509 39.4604 53.0009 40.0104 53.0009H48.0104C48.5604 53.0009 49.0104 52.5509 49.0104 52.0009V25.0009L56.7804 11.9309C57.3404 10.8509 56.8504 9.51089 55.6404 9.10089C54.7104 8.79089 53.6904 9.2509 53.2204 10.1109L44.0104 25.0009L38.7704 16.5309"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.5907 11.9709C17.8907 11.3709 17.0007 11.0009 16.0107 11.0009C13.8007 11.0009 12.0107 12.7909 12.0107 15.0009C12.0107 17.2109 13.8007 19.0009 16.0107 19.0009C18.2207 19.0009 20.0107 17.2109 20.0107 15.0009C20.0107 14.7509 19.9808 14.5109 19.9408 14.2809"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M40.0807 14.2809C40.0407 14.5109 40.0107 14.7509 40.0107 15.0009C40.0107 17.2109 41.8007 19.0009 44.0107 19.0009C46.2207 19.0009 48.0107 17.2109 48.0107 15.0009C48.0107 12.7909 46.2207 11.0009 44.0107 11.0009C43.0207 11.0009 42.1307 11.3709 41.4307 11.9709"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30.0107 17.0009C32.2199 17.0009 34.0107 15.21 34.0107 13.0009C34.0107 10.7917 32.2199 9.00085 30.0107 9.00085C27.8016 9.00085 26.0107 10.7917 26.0107 13.0009C26.0107 15.21 27.8016 17.0009 30.0107 17.0009Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinejoin="round"
      />
      <path
        d="M30.0104 23.0008L19.8005 6.11083C19.3305 5.25083 18.3105 4.78082 17.3805 5.10082C16.1705 5.51082 15.6805 6.85083 16.2405 7.93083L25.0104 23.0008V54.0008C25.0104 54.5508 25.4604 55.0008 26.0104 55.0008H34.0104C34.5604 55.0008 35.0104 54.5508 35.0104 54.0008V23.0008L43.7804 7.93083C44.3404 6.85083 43.8504 5.51082 42.6404 5.10082C41.7104 4.78082 40.6904 5.25083 40.2204 6.11083L30.0104 23.0008Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </StyledTeamSuccessIcon>
  )
}
