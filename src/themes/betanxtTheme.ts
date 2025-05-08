'use client'

import { createTheme } from '@mui/material/styles'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { deepmerge } from '@mui/utils'

import { createDarkOverlays } from './base/overlays.js'
import { baseThemeOptions } from './baseTheme.js'
import { betanxtPaletteDark, betanxtPaletteLight } from './betanxt/betanxt-palette.js'

const betanxtThemeOptions = deepmerge(baseThemeOptions, {
  colorSchemes: {
    light: {
      palette: betanxtPaletteLight,
    },
    dark: {
      palette: betanxtPaletteDark,
      overlays: createDarkOverlays(),
    },
  },
})

const betanxtTheme = createTheme(betanxtThemeOptions)

export { betanxtTheme as default, betanxtThemeOptions }
