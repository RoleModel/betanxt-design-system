import { createTheme } from '@mui/material/styles'
import type {} from '@mui/material/themeCssVarsAugmentation'
import { deepmerge } from '@mui/utils'

import { createDarkOverlays } from './base/overlays'
import { basePaletteDark, basePaletteLight } from './base/palette'
import { baseTheme } from './baseTheme'
import { betanxtPaletteDark, betanxtPaletteLight } from './betanxt/betanxt-palette'

// TODO: Probably don't need to deepmerge the base palette with the betanxt palette
const mergedPaletteLight = deepmerge(basePaletteLight, betanxtPaletteLight)
const mergedPaletteDark = deepmerge(basePaletteDark, betanxtPaletteDark)

const betanxtTheme = createTheme(baseTheme, {
  colorSchemes: {
    light: {
      palette: mergedPaletteLight,
    },
    dark: {
      palette: mergedPaletteDark,
      overlays: createDarkOverlays(),
    },
  },
})

export default betanxtTheme
