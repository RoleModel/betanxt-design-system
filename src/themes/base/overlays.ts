import type { Overlays as MUIOverlays } from '@mui/material/styles'

type OverlaysArray = [
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
  string,
]

type Overlays = MUIOverlays | OverlaysArray

function getOverlayLightness(elevation: number): number {
  // Start at 7% and increase by 0.65% for each elevation level
  const lightnessValue = 7 + elevation * 0.5
  return Math.round(lightnessValue * 10) / 10
}

export function createDarkOverlays(): OverlaysArray {
  // Ensure we create exactly 25 elements
  const overlays = Array(25)
    .fill(0)
    .map((_, index) => {
      if (index === 0) {
        return 'none'
      }

      // Calculate lightness based on elevation
      const lightness = getOverlayLightness(index)

      // Dark blue-gray overlays
      return `linear-gradient(hsl(199, 89%, ${lightness}%), hsl(199, 89%, ${lightness}%))`
    })

  return overlays as OverlaysArray
}

function getBaseOverlayLightness(elevation: number): number {
  // Start at 7% and increase by 0.65% for each elevation level
  const lightnessValue = 9.5 + elevation * 0.45
  return Math.round(lightnessValue * 10) / 10
}

export function createBaseDarkOverlays(): OverlaysArray {
  // Ensure we create exactly 25 elements
  const overlays = Array(25)
    .fill(0)
    .map((_, index) => {
      if (index === 0) {
        return 'none'
      }

      // Calculate lightness based on elevation
      const lightness = getBaseOverlayLightness(index)

      // Dark blue-gray overlays
      return `linear-gradient(hsl(0, 0%, ${lightness}%), hsl(0, 0%, ${lightness}%))`
    })

  return overlays as OverlaysArray
}

// declare module '@mui/material/styles' {
//   interface Theme {
//     overlays: Overlays
//   }
//   interface ThemeOptions {
//     overlays?: Overlays
//   }
// }
