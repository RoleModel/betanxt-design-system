'use client'

import { createTheme } from '@mui/material'

import { components } from './base/components.js'
import { layout } from './base/layout.js'
import { createBaseDarkOverlays } from './base/overlays.js'
import { basePaletteDark, basePaletteLight } from './base/palette.js'
import { shadows } from './base/shadows.js'
import { typography } from './base/typography.js'

const baseThemeOptions = {
  cssVariables: {
    colorSchemeSelector: 'class',
  },
  modularCssLayers: '@layer global, base, mui, components, theme, sx, utilities;',
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
