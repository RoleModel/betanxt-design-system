import SvgIcon from '@mui/material/SvgIcon'

export interface CollapseContentIconProps {
  fontSize?: 'small' | 'medium' | 'large'
}

export default function CollapseContentIcon({
  fontSize = 'small',
}: CollapseContentIconProps) {
  return (
    <SvgIcon>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height={fontSize === 'small' ? '24px' : fontSize === 'medium' ? '32px' : '48px'}
        viewBox="0 -960 960 960"
        fill="currentColor"
      >
        <path d="M440-440v240h-80v-160H200v-80h240Zm160-320v160h160v80H520v-240h80Z" />
      </svg>
    </SvgIcon>
  )
}
