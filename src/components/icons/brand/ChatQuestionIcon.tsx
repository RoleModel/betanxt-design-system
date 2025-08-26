import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledChatQuestionIcon = styled(ChatQuestionIcon)<{
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

function ChatQuestionIcon({
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
      className={`ChatQuestionIcon ${className || ''}`.trim()}
      {...props}
    >
      <g clip-path="url(#clip0_15567_3173)">
        <path
          d="M23.3125 48.6875L18.5 53.5V43.5H3.5C2.83695 43.5 2.20107 43.2365 1.73223 42.7677C1.26339 42.299 1 41.663 1 41V3.5C1 2.83695 1.26339 2.20107 1.73223 1.73223C2.20107 1.26339 2.83695 1 3.5 1H48.5C49.163 1 49.799 1.26339 50.2677 1.73223C50.7365 2.20107 51 2.83695 51 3.5V21"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M28.5 46C28.5 46.663 28.7635 47.299 29.2323 47.7677C29.701 48.2365 30.337 48.5 31 48.5H41L51 58.5V48.5H56C56.663 48.5 57.299 48.2365 57.7677 47.7677C58.2365 47.299 58.5 46.663 58.5 46V28.5C58.5 27.837 58.2365 27.201 57.7677 26.7323C57.299 26.2635 56.663 26 56 26H31C30.337 26 29.701 26.2635 29.2323 26.7323C28.7635 27.201 28.5 27.837 28.5 28.5V46Z"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M18.5 14.75C18.5002 13.8334 18.7524 12.9345 19.229 12.1516C19.7055 11.3686 20.3881 10.7317 21.2021 10.3105C22.0162 9.8893 22.9303 9.69992 23.8447 9.76312C24.759 9.82632 25.6385 10.1396 26.387 10.6688C27.1353 11.198 27.7238 11.9228 28.088 12.7638C28.4525 13.6049 28.5785 14.5299 28.4528 15.4378C28.3268 16.3457 27.9537 17.2015 27.3745 17.9117C26.795 18.622 26.0315 19.1593 25.1675 19.465C24.6798 19.6372 24.2576 19.9564 23.959 20.3786C23.6603 20.8008 23.5 21.3053 23.5 21.8225V23.5"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M43.5 36V31"
          stroke="#34C0F3"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M23.5 29.75C23.1548 29.75 22.875 29.4702 22.875 29.125C22.875 28.7798 23.1548 28.5 23.5 28.5"
          stroke="#34C0F3"
          strokeWidth="2"
        />
        <path
          d="M23.5 29.75C23.8452 29.75 24.125 29.4702 24.125 29.125C24.125 28.7798 23.8452 28.5 23.5 28.5"
          stroke="#34C0F3"
          strokeWidth="2"
        />
        <path
          d="M43.5 42.25C43.1548 42.25 42.875 41.9702 42.875 41.625C42.875 41.2798 43.1548 41 43.5 41"
          stroke="#34C0F3"
          strokeWidth="2"
        />
        <path
          d="M43.5 42.25C43.8452 42.25 44.125 41.9702 44.125 41.625C44.125 41.2798 43.8452 41 43.5 41"
          stroke="#34C0F3"
          strokeWidth="2"
        />
      </g>
      <defs>
        <clipPath id="clip0_15567_3173">
          <rect width="60" height="60" fill="white" />
        </clipPath>
      </defs>
    </SvgIcon>
  )
}

export default function ChatQuestionIconWithAccent(props: BrandIconProps) {
  return (
    <StyledChatQuestionIcon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
