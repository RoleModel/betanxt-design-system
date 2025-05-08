import type { Overlays } from '@mui/material/styles'

function getOverlayLightness(elevation: number): number {
  // Start at 7% and increase by 0.65% for each elevation level
  const lightnessValue = 7 + elevation * 0.5
  return Math.round(lightnessValue * 10) / 10
}

export function createDarkOverlays(): Overlays {
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

  return overlays as Overlays
}

function getBaseOverlayLightness(elevation: number): number {
  // Start at 7% and increase by 0.65% for each elevation level
  const lightnessValue = 9.5 + elevation * 0.45
  return Math.round(lightnessValue * 10) / 10
}

export function createBaseDarkOverlays(): Overlays {
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

  return overlays as Overlays
}
