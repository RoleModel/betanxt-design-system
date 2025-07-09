import { styled, SvgIcon } from '@mui/material'
import type { SvgIconProps } from '@mui/material'
import { neutral } from '@rolemodel/betanxt-design-system/themes/base/palette-tokens/brand-tokens'

const StyledCheckmarkIcon = styled(CheckmarkIcon)(({ theme }) => [
  {
    '& .shadow': {
      fillOpacity: '0.8',
      fill: neutral[300],
    },
  },
  theme.applyStyles('dark', {
    '& .shadow': {
      fillOpacity: '0.2',
    },
  }),
])

function CheckmarkIcon(props: SvgIconProps) {
  return (
    <SvgIcon
      width="64"
      height="66"
      viewBox="0 0 64 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
        <path
          d="M31.9993 65.3306C49.3593 65.3306 63.4323 62.701 63.4323 59.4573C63.4323 56.2136 49.3593 53.584 31.9993 53.584C14.6394 53.584 0.566406 56.2136 0.566406 59.4573C0.566406 62.701 14.6394 65.3306 31.9993 65.3306Z"
          className="shadow"
        />
        <path
          d="M31.9996 57.5997C16.615 57.5997 4.12891 45.1137 4.12891 29.7291C4.12891 14.3445 16.615 1.8584 31.9996 1.8584C47.3842 1.8584 59.8702 14.3445 59.8702 29.7291C59.8702 45.1137 47.3842 57.5997 31.9996 57.5997Z"
          fill="#447A44"
        />
        <path
          d="M32.0001 2.22955C47.1617 2.22955 59.4991 14.567 59.4991 29.7286C59.4991 44.8902 47.1617 57.2277 32.0001 57.2277C16.8384 57.2277 4.50103 44.8902 4.50103 29.7286C4.50103 14.567 16.8384 2.22955 32.0001 2.22955ZM32.0001 1.48633C16.3925 1.48633 3.75781 14.121 3.75781 29.7286C3.75781 45.3362 16.3925 57.9709 32.0001 57.9709C47.6077 57.9709 60.2424 45.3362 60.2424 29.7286C60.2424 14.121 47.6077 1.48633 32.0001 1.48633Z"
          fill="#1E351E"
        />
        <path
          d="M27.5416 41.6205L17.2852 31.3641L20.481 28.2426L27.5416 35.3775L45.5274 17.3916L48.7233 20.5131L27.5416 41.6205Z"
          fill="white"
        />
    </SvgIcon>
  )
}

export default StyledCheckmarkIcon
