import React from 'react'

import type { StackProps } from '@mui/material'
import Stack from '@mui/material/Stack'
import Typography from '@mui/material/Typography'
import type { TypographyProps } from '@mui/material/Typography'

interface TypographyPairProps {
  primary: {
    text: React.ReactNode
    variant?: TypographyProps['variant']
    fontWeight?: TypographyProps['fontWeight']
    color?: TypographyProps['color']
    sx?: TypographyProps['sx']
    gutterBottom?: boolean
    component?: TypographyProps['component']
  }
  // Second Typography element props
  secondary?: {
    text?: React.ReactNode
    variant?: TypographyProps['variant']
    fontWeight?: TypographyProps['fontWeight']
    color?: TypographyProps['color']
    sx?: TypographyProps['sx']
    gutterBottom?: boolean
    component?: TypographyProps['component']
  }
  // Stack container props
  direction?: StackProps['direction']
  spacing?: StackProps['spacing']
  alignItems?: StackProps['alignItems']
  justifyContent?: StackProps['justifyContent']
  sx?: StackProps['sx']
  variant?: TypographyProps['variant']
}

export const TypographyPair: React.FC<TypographyPairProps> = ({
  primary,
  secondary,
  direction,
  spacing,
  alignItems,
  justifyContent,
  sx,
}) => {
  return (
    <Stack
      direction={direction}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      sx={sx}
      useFlexGap
    >
      <Typography
        variant={primary.variant}
        fontWeight={primary.fontWeight}
        color={primary.color}
        sx={primary.sx}
        gutterBottom={primary.gutterBottom}
        {...(primary.component && { component: primary.component })}
      >
        {primary.text}
      </Typography>

      {secondary?.text && (
        <Typography
          variant={secondary.variant}
          fontWeight={secondary.fontWeight}
          color={secondary.color}
          sx={secondary.sx}
          gutterBottom={secondary.gutterBottom}
          {...(secondary.component && { component: secondary.component })}
        >
          {secondary.text}
        </Typography>
      )}
    </Stack>
  )
}

export default TypographyPair
