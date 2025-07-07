'use client'

import { createTheme } from '@mui/material'

import { components } from './base/components'
import { layout } from './base/layout'
import { createBaseDarkOverlays } from './base/overlays'
import { basePaletteDark, basePaletteLight } from './base/palette'
import { shadows } from './base/shadows'
import { typography } from './base/typography'

const baseThemeOptions = {
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  modularCssLayers: true,
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
}

const baseTheme = createTheme(baseThemeOptions)

export { baseTheme as default, baseThemeOptions }
