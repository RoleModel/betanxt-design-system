import clsx from 'clsx'
import React from 'react'

import { Stack, type StackProps, Typography, type TypographyProps } from '@mui/material'

interface BNTypographyPairProps {
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
  fullWidth?: boolean
  split?: boolean
}

const BNTypographyPairClasses = {
  root: 'BNTypographyPair',
}

export function BNTypographyPair({
  primary,
  secondary,
  direction,
  spacing,
  alignItems,
  justifyContent,
  sx,
  fullWidth = true,
  split,
}: BNTypographyPairProps) {
  return (
    <Stack
      className={clsx(BNTypographyPairClasses.root)}
      direction={direction}
      display={fullWidth ? 'flex' : 'inline-flex'}
      spacing={spacing}
      alignItems={alignItems}
      justifyContent={justifyContent}
      sx={{
        ...sx,
        ...(fullWidth && {
          width: '100%',
        }),
        ...(split && {
          flexDirection: 'row',
          gap: spacing || 2,
        }),
      }}
      useFlexGap
    >
      <Typography
        variant={primary.variant}
        {...(primary.fontWeight && { fontWeight: primary.fontWeight })}
        color={primary.color}
        sx={{
          ...primary.sx,
          ...(split && {
            flex: 1,
            whiteSpace: 'nowrap',
          }),
        }}
        gutterBottom={primary.gutterBottom}
        {...(primary.component && { component: primary.component })}
      >
        {primary.text}
      </Typography>

      {secondary?.text && (
        <Typography
          variant={secondary.variant}
          {...(secondary.fontWeight && { fontWeight: secondary.fontWeight })}
          color={secondary.color}
          sx={{
            ...secondary.sx,
            ...(split && {
              flex: 1,
              textAlign: 'right',
              whiteSpace: 'nowrap',
            }),
          }}
          gutterBottom={secondary.gutterBottom}
          {...(secondary.component && { component: secondary.component })}
        >
          {secondary.text}
        </Typography>
      )}
    </Stack>
  )
}

export type { BNTypographyPairProps }
