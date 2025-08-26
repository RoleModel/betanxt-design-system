import type { SvgIconProps } from '@mui/material'

export interface BrandIconProps extends Omit<SvgIconProps, 'fontSize'> {
  accentColor?: string
  fontSize?:
    | 'inherit'
    | 'small'
    | 'medium'
    | 'large'
    | 'xs'
    | 'xl'
    | '2xl'
    | '3xl'
    | '4xl'
    | '5xl'
    | number
    | string
}

// Utility function to convert fontSize to CSS dimensions
export const getFontSizeValue = (
  fontSize: BrandIconProps['fontSize']
): string | number => {
  switch (fontSize) {
    case 'xs':
      return '0.75rem' // 12px
    case 'small':
      return '1rem' // 16px
    case 'medium':
      return '1.25rem' // 20px
    case 'large':
      return '1.5rem' // 24px
    case 'xl':
      return '2rem' // 32px
    case '2xl':
      return '2.5rem' // 40px
    case '3xl':
      return '3rem' // 48px
    case '4xl':
      return '4rem' // 64px
    case '5xl':
      return '5rem' // 80px
    case 'inherit':
      return 'inherit'
    default:
      return fontSize || '1.25rem' // Default to medium
  }
}
