import { SvgIcon } from '@mui/material'
import type { SvgIconProps } from '@mui/material'

export function BarChartNoStackingIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 0 24 24"
      {...props}
    >
      <path d="M8 20H4V7H8V20Z" />
      <path d="M14 20H10V4H14V20ZM11 19H13V5H11V19Z" />
      <path d="M20 20H16V9H20V20Z" />
    </SvgIcon>
  )
}
