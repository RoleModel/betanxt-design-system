import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledGearSettings2Icon = styled(GearSettings2Icon)<{
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

function GearSettings2Icon({
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
      className={`GearSettings2Icon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M28.1391 38.6602C28.1391 34.9102 25.0991 31.8801 21.3591 31.8801C17.6191 31.8801 14.5791 34.9202 14.5791 38.6602C14.5791 42.4002 17.6191 45.4401 21.3591 45.4401C25.0991 45.4401 28.1391 42.4002 28.1391 38.6602Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M34.47 35.2601L38.45 35.8301C38.6 36.7501 38.68 37.7002 38.68 38.6602C38.68 39.6202 38.6 40.5701 38.45 41.4901L34.47 42.0601C34.15 43.2901 33.66 44.4602 33.03 45.5302L35.44 48.7401C34.33 50.2801 32.98 51.6401 31.43 52.7501L28.21 50.3401C27.14 50.9701 25.97 51.4602 24.74 51.7802L24.17 55.7601C23.25 55.9101 22.3 55.9901 21.34 55.9901C20.38 55.9901 19.43 55.9101 18.51 55.7601L17.94 51.7802C16.71 51.4602 15.54 50.9801 14.47 50.3401L11.25 52.7501C9.71 51.6401 8.35 50.2901 7.24 48.7401L9.64999 45.5302C9.01999 44.4602 8.53 43.2901 8.21 42.0601L4.23 41.4901C4.08 40.5701 4 39.6202 4 38.6602C4 37.7002 4.08 36.7501 4.23 35.8301L8.21 35.2601C8.53 34.0301 9.01999 32.86 9.64999 31.79L7.24 28.5801C8.35 27.0401 9.7 25.6801 11.25 24.5701L14.47 26.9801C15.54 26.3501 16.71 25.86 17.94 25.54L18.51 21.5601C19.43 21.4101 20.38 21.3201 21.34 21.3201C22.3 21.3201 23.25 21.4001 24.17 21.5601L24.74 25.54C25.98 25.86 27.14 26.3501 28.21 26.9801L31.43 24.5701C32.97 25.6801 34.33 27.0301 35.44 28.5801L33.03 31.79C33.66 32.86 34.15 34.0301 34.47 35.2601Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M53.6892 13.65C53.8192 14.26 53.8992 14.8999 53.8992 15.5499C53.8992 16.1999 53.8192 16.84 53.6892 17.45L56.0192 19.28C55.5292 20.72 54.7592 22.03 53.7792 23.15L51.0192 22.0399C50.0892 22.8899 48.9792 23.5499 47.7392 23.9399L47.3192 26.88C46.5992 27.02 45.8492 27.1 45.0892 27.1C44.3292 27.1 43.5792 27.02 42.8592 26.88L42.4392 23.9399C41.1992 23.5499 40.0892 22.8899 39.1592 22.0399L36.3992 23.15C35.4192 22.03 34.6492 20.72 34.1592 19.28L36.4992 17.45C36.3592 16.84 36.2892 16.2099 36.2892 15.5499C36.2892 14.8899 36.3692 14.26 36.4992 13.65L34.1592 11.8199C34.6492 10.3799 35.4192 9.06995 36.3992 7.94995L39.1592 9.05994C40.0892 8.20994 41.2092 7.55003 42.4392 7.16003L42.8592 4.21997C43.5792 4.07997 44.3292 4 45.0892 4C45.8492 4 46.5992 4.07997 47.3192 4.21997L47.7392 7.16003C48.9792 7.55003 50.0892 8.20995 51.0192 9.06995L53.7792 7.95996C54.7592 9.07996 55.5192 10.39 56.0192 11.83L53.6892 13.66V13.65Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M45.0895 19.9501C47.5195 19.9501 49.4895 17.9801 49.4895 15.55C49.4895 13.12 47.5195 11.1501 45.0895 11.1501C42.6594 11.1501 40.6895 13.12 40.6895 15.55C40.6895 17.9801 42.6594 19.9501 45.0895 19.9501Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function GearSettings2IconWithAccent(props: BrandIconProps) {
  return (
    <StyledGearSettings2Icon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
