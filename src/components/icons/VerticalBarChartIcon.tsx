import { SvgIcon, type SvgIconProps } from '@mui/material'

export function VerticalBarChartIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M4 8V4H12V8H4Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 14V10H20V14H4Z" />
      <path fillRule="evenodd" clipRule="evenodd" d="M4 20V16H15V20H4Z" />
    </SvgIcon>
  )
}
