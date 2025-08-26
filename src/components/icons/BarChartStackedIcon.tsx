import { SvgIcon, type SvgIconProps } from '@mui/material'

export function BarChartStackedIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path fillRule="evenodd" clipRule="evenodd" d="M8 20H4V12H8V20ZM5 16H7V13H5V16Z" />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M14 20H10V4H14V20ZM11 9H13V5H11V9Z"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M20 20H16V9H20V20ZM17 13H19V10H17V13Z"
      />
    </SvgIcon>
  )
}
