import CloseRounded from '@mui/icons-material/CloseRounded'
import {
  DialogTitle,
  type DialogTitleProps,
  IconButton,
  Stack,
  Typography,
} from '@mui/material'
import type { SxProps, Theme } from '@mui/material'

export type BNDialogTitleBgColorVariant = 'background.paper' | 'appBarPrimary.defaultFill'

export type BNDialogTitleTextColorVariant =
  | 'text.primary'
  | 'appBarPrimary.defaultContrast'

export interface BNDialogTitleProps extends Omit<DialogTitleProps, 'variant'> {
  bgColorVariant?: BNDialogTitleBgColorVariant
  textColorVariant?: BNDialogTitleTextColorVariant
  variant?: 'default' | 'primary'
  onClose?: () => void
  closeAriaLabel?: string
}

export const BNDialogTitle = ({
  bgColorVariant,
  textColorVariant,
  variant,
  onClose,
  closeAriaLabel = 'Close dialog',
  title,
  sx,
  ...rest
}: BNDialogTitleProps) => {
  const preset =
    variant === 'primary'
      ? { bg: 'appBarPrimary.defaultFill', text: 'appBarPrimary.defaultContrast' }
      : variant === 'default' || !variant
        ? { bg: 'background.paper', text: 'text.primary' }
        : undefined

  const resolvedBg = (bgColorVariant ?? preset?.bg ?? 'background.paper') as string
  const resolvedText = (textColorVariant ?? preset?.text ?? 'text.primary') as string

  const readCssVar = (theme: Theme, path: string): string | undefined => {
    return path
      .split('.')
      .reduce<any>((obj, key) => (obj ? obj[key] : undefined), (theme as any).vars)
  }

  const colorRule = (theme: Theme) => ({
    backgroundColor: readCssVar(theme, `palette.${resolvedBg}`),
    color: readCssVar(theme, `palette.${resolvedText}`),
  })

  const mergedSx: SxProps<Theme> = sx
    ? [colorRule, ...(Array.isArray(sx) ? sx : [sx])]
    : [colorRule]

  return (
    <DialogTitle sx={mergedSx} {...rest}>
      <Stack direction="row" alignItems="center" justifyContent="space-between" gap={1}>
        <Typography variant="h4">{title}</Typography>
        {onClose && (
          <IconButton
            aria-label={closeAriaLabel}
            color="inherit"
            onClick={onClose}
            size="large"
          >
            <CloseRounded fontSize="medium" />
          </IconButton>
        )}
      </Stack>
    </DialogTitle>
  )
}
