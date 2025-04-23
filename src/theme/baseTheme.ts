import { createTheme } from '@mui/material'
import type {} from '@mui/material/themeCssVarsAugmentation'

import { components } from './base/components'
import { layout } from './base/layout'
import { createBaseDarkOverlays } from './base/overlays'
import { basePaletteDark, basePaletteLight } from './base/palette'
import { shadows } from './base/shadows'
import { typography } from './base/typography'

export const baseTheme = createTheme({
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  colorSchemes: {
    light: {
      palette: basePaletteLight,
    },
    dark: {
      palette: basePaletteDark,
      overlays: createBaseDarkOverlays(),
    },
  },
  components,
  layout,
  shadows,
  typography,
})
