import { SvgIcon, type SvgIconProps, styled } from '@mui/material'

import type { BrandIconProps } from './types'
import { getFontSizeValue } from './types'

const StyledRocket1Icon = styled(Rocket1Icon)<{
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

function Rocket1Icon({
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
      className={`Rocket1Icon ${className || ''}`.trim()}
      {...props}
    >
      <path
        d="M43.2103 37.9752C50.7003 30.4852 53.3904 20.0252 51.3004 10.3852C51.1104 9.53522 50.4503 8.86515 49.6003 8.68515C39.9703 6.59515 29.5003 9.28524 22.0103 16.7752C19.0903 19.6952 16.9103 23.0653 15.4503 26.6653C15.1203 27.4853 15.2904 28.4151 15.9104 29.0451L30.9404 44.0752C31.5604 44.6952 32.5003 44.8752 33.3203 44.5352C36.9203 43.0752 40.2903 40.8952 43.2103 37.9752Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M41.7907 48.7852C45.2507 45.3252 46.3407 40.3451 45.0507 35.9351C44.4707 36.6351 43.8707 37.3151 43.2107 37.9751C39.9207 41.2651 36.0507 43.6151 31.9307 45.0551L38.7207 51.8451L41.7807 48.7852H41.7907Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M22.0106 16.7751C22.6606 16.1251 23.3506 15.515 24.0506 14.935C19.6406 13.645 14.6606 14.735 11.2006 18.195L8.14062 21.2551L14.9306 28.045C16.3706 23.925 18.7206 20.0651 22.0106 16.7751Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M15.7803 28.9053C15.0103 31.1153 14.5404 33.4152 14.3604 35.7252L24.2603 45.6252C26.5703 45.4452 28.8704 44.9752 31.0804 44.2052L15.7803 28.9053Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M14.2706 35.7533L11.4492 38.5747L11.5199 38.6454L14.3413 35.824L14.2706 35.7533Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M24.1739 45.6606L21.3525 48.4819L21.4232 48.5526L24.2446 45.7313L24.1739 45.6606Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M12.3005 47.7551L12.2305 47.6851L16.4505 43.4551L16.5205 43.5251L12.3005 47.7551Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M18.6726 51.11L17.9707 51.8223L18.042 51.8925L18.7439 51.1803L18.6726 51.11Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.77222 41.213L8.07031 41.9253L8.14152 41.9955L8.84343 41.2832L8.77222 41.213Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8.06999 51.9851L8 51.9152L9.41 50.5051L9.48 50.5751L8.06999 51.9851Z"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M31.1802 33.025L26.9502 28.7949L34.0002 21.755L31.8902 19.635L41.0102 18.895L40.3402 28.095L38.2302 25.985L31.1802 33.025Z"
        stroke="#34C0F3"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </SvgIcon>
  )
}

export default function Rocket1IconWithAccent(props: BrandIconProps) {
  return (
    <StyledRocket1Icon
      accentColor={props.accentColor}
      fontSize={props.fontSize}
      {...props}
    />
  )
}
